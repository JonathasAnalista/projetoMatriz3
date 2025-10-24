// server.js
import "dotenv/config";
import express from "express";
import cors from "cors";
import axios from "axios";
import admin from "firebase-admin";
import { randomUUID } from "crypto";
import { getTenantServices, resolveTenantId, getRegistrySnapshot } from "./tenant-manager.js";

const app = express();
app.disable("x-powered-by");

// ===== ENV =====
const FRONTEND_URL = process.env.FRONTEND_URL;    // ex.: https://www.legmaster.com.br
const BASE_URL     = process.env.BASE_URL;        // ex.: https://seu-tunel.ngrok-free.app
const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN;

const mask = (s) => (s ? String(s).slice(0, 6) + "…" + String(s).slice(-4) : null);
console.log("[ENV] {");
console.log("  FRONTEND_URL:", `'${FRONTEND_URL}'`, ",");
console.log("  BASE_URL    :", `'${BASE_URL}'`, ",");
console.log("  MP_ACCESS_TOKEN:", `'${mask(MP_ACCESS_TOKEN)}'`);
console.log("}");
console.log("[TENANTS]", JSON.stringify(getRegistrySnapshot(), null, 2));

// ===== CORS =====
const ALLOWED = [
  FRONTEND_URL,
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, cb) => cb(null, !origin || ALLOWED.includes(origin)),
    credentials: true,
  })
);

// ===== Body parsers =====
app.use(express.json({ type: ["application/json", "text/plain"] }));
app.use(express.urlencoded({ extended: true }));

// ===== Tenant helper =====
function buildTenantContext(req) {
  const tenantId = resolveTenantId(req);
  const services = getTenantServices(tenantId);
  return {
    id: tenantId,
    db: services.firestore,
    auth: services.auth,
  };
}

// ===== Util: ativar PRO no Firestore (idempotente) =====
async function activateProFor(ctx, uid, purchase) {
  const { db, auth } = ctx;
  const ref = db.collection("users").doc(uid);

  await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const now = admin.firestore.Timestamp.now();
    const expires = admin.firestore.Timestamp.fromDate(
      new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    );
    const current = snap.exists ? snap.data() : {};

    // já aplicado com a mesma compra? então não faça nada
    if (current?.plan?.purchase?.id === purchase.id) return;

    tx.set(
      ref,
      {
        plan: {
          type: "PRO",
          status: "active",
          startedAt: now,
          expiresAt: expires,
          purchase,
        },
      },
      { merge: true }
    );
  });

  // custom claims (cliente precisa fazer getIdToken(true) depois)
  await auth.setCustomUserClaims(uid, { plan: "pro" });
}

// ===== Novas helpers: liberação por e-mail (coleção 'liberacoes') =====
function emailDocId(email) {
  return String(email || "").trim().toLowerCase().replace(/[.@]/g, "_");
}

async function activateProByEmail(ctx, email, purchase, days = 365) {
  if (!email) return;
  const { db } = ctx;
  const id = emailDocId(email);
  const ref = db.collection("liberacoes").doc(id);
  const now = admin.firestore.Timestamp.now();
  const expires = admin.firestore.Timestamp.fromDate(new Date(Date.now() + days * 86400000));
  await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const prev = snap.exists ? snap.data() : {};
    if (prev?.purchase?.id === purchase.id && prev?.plano === "pro") return;
    tx.set(
      ref,
      {
        email: String(email || "").trim().toLowerCase(),
        plano: "pro",
        ativo: true,
        ate: expires,
        atualizadoEm: now,
        purchase,
      },
      { merge: true }
    );
  });
}

async function activateProLegacyUser(ctx, uid, purchase, days = 365) {
  if (!uid) return;
  const { db, auth } = ctx;
  const ref = db.collection("users").doc(uid);
  await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const now = admin.firestore.Timestamp.now();
    const expires = admin.firestore.Timestamp.fromDate(new Date(Date.now() + days * 86400000));
    const current = snap.exists ? snap.data() : {};
    if (current?.plan?.purchase?.id === purchase.id) return;
    tx.set(
      ref,
      { plan: { type: "PRO", status: "active", startedAt: now, expiresAt: expires, purchase } },
      { merge: true }
    );
  });
  try { await auth.setCustomUserClaims(uid, { plan: "pro" }); } catch {}
}

// ===== Health & debug =====
app.get("/", (_req, res) => res.status(200).send("ok"));
app.get("/debug/env", (_req, res) =>
  res.json({
    FRONTEND_URL,
    BASE_URL,
    MP_ACCESS_TOKEN: mask(MP_ACCESS_TOKEN),
  })
);

// ===== 1) Checkout Pro: criar preferência =====
app.post("/api/mp/create-preference", async (req, res) => {
  try {
    const { uid, email } = req.body || {};
    if (!uid || !email) {
      return res.status(400).json({ error: "uid/email obrigatórios" });
    }

    const tenantId = resolveTenantId(req);

    if (!MP_ACCESS_TOKEN) {
      return res
        .status(500)
        .json({ error: "MP_ACCESS_TOKEN ausente no .env" });
    }
    if (!BASE_URL || !/^https:\/\//i.test(BASE_URL)) {
      return res
        .status(500)
        .json({ error: "BASE_URL inválida (precisa ser HTTPS público)" });
    }
    if (!FRONTEND_URL || !/^https?:\/\//i.test(FRONTEND_URL)) {
      return res
        .status(500)
        .json({ error: "FRONTEND_URL inválida" });
    }

    const PRICE = 20.0;

    const body = {
      items: [
        {
          title: "Legmaster PRO - 1 ano",
          description: "Acesso PRO por 12 meses",
          quantity: 1,
          currency_id: "BRL",
          unit_price: PRICE,
        },
      ],
      payer: { email },
      metadata: { uid, email, plan: "PRO_1Y", amount: PRICE, tenant: tenantId },
      statement_descriptor: "LEGMASTER",

      // Configuração recomendada p/ tentar favorecer PIX (sem excluir account_money)
      payment_methods: {
        excluded_payment_types: [
          { id: "ticket" },           // boleto
          { id: "atm" },              // caixa eletrônico
          { id: "digital_currency" }, // cripto
        ],
        installments: 1,
        default_installments: 1,
        // Isso é permitido (tipo), o que NÃO é permitido é default_payment_method_id: "pix"
        default_payment_type_id: "bank_transfer",
      },

      back_urls: {
        success: `${FRONTEND_URL}/pagamento/sucesso`,
        pending: `${FRONTEND_URL}/pagamento/pendente`,
        failure: `${FRONTEND_URL}/pagamento/erro`,
      },
      auto_return: "approved",
      notification_url: `${BASE_URL}/api/mp/webhook`,
    };

    const r = await axios.post(
      "https://api.mercadopago.com/checkout/preferences",
      body,
      { headers: { Authorization: `Bearer ${MP_ACCESS_TOKEN}` } }
    );

    return res.json({ init_point: r.data.init_point, tenant: tenantId });
  } catch (e) {
    const st = e.response?.status;
    const data = e.response?.data;
    console.error("create-preference ERROR:", st, data || e.message);
    return res.status(500).json({
      error: "Falha ao criar preferência",
      details: { status: st, data },
    });
  }
});

// ===== 2) PIX direto (Payments API): criar cobrança e retornar QR =====
app.post("/api/mp/pix/create", async (req, res) => {
  try {
    const { uid, email, amount } = req.body || {};
    if (!uid || !email) {
      return res.status(400).json({ error: "uid/email obrigatórios" });
    }

    const tenantId = resolveTenantId(req);

    const PRICE = Number(amount || 20.0);

    const body = {
      transaction_amount: PRICE,
      description: "Legmaster PRO - 1 ano",
      payment_method_id: "pix",
      payer: { email },
      metadata: { uid, email, plan: "PRO_1Y", amount: PRICE, tenant: tenantId },
      notification_url: `${BASE_URL}/api/mp/webhook`,
    };

    // Idempotência obrigatória p/ /v1/payments
    const idemKey = `pix-${uid}-${Date.now()}-${randomUUID()}`;

    console.log("[pix/create] body:", body);

    const r = await axios.post(
      "https://api.mercadopago.com/v1/payments",
      body,
      {
        headers: {
          Authorization: `Bearer ${MP_ACCESS_TOKEN}`,
          "X-Idempotency-Key": idemKey,
        },
      }
    );

    const data = r.data;
    const td =
      data.point_of_interaction?.transaction_data || {};
    return res.json({
      tenant: tenantId,
      id: data.id,
      status: data.status, // "pending" até pagar
      qr_code: td.qr_code,
      qr_code_base64: td.qr_code_base64,
      ticket_url: td.ticket_url,
    });
  } catch (e) {
    const st = e.response?.status;
    const data = e.response?.data;
    console.error("pix/create ERROR:", st, JSON.stringify(data || e.message, null, 2));
    return res
      .status(500)
      .json({ error: "Falha ao criar PIX", details: { status: st, data } });
  }
});

// ===== 3) Consulta de pagamento (para polling no front) =====
app.get("/api/mp/payment/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const r = await axios.get(
      `https://api.mercadopago.com/v1/payments/${id}`,
      { headers: { Authorization: `Bearer ${MP_ACCESS_TOKEN}` } }
    );
    const p = r.data;
    return res.json({
      id: p.id,
      status: p.status,
      status_detail: p.status_detail,
    });
  } catch (e) {
    const st = e.response?.status;
    const data = e.response?.data;
    console.error("payment/status ERROR:", st, data || e.message);
    return res
      .status(500)
      .json({ error: "Falha ao consultar pagamento", details: { status: st, data } });
  }
});

// ===== 4) Webhook do Mercado Pago =====
app.post("/api/mp/webhook", async (req, res) => {
  try {
    let ctx = buildTenantContext(req);

    const topic = req.query.topic || req.body?.type;
    const paymentId = req.query.id || req.body?.data?.id;

    if (topic !== "payment" || !paymentId) {
      return res.status(200).send("ignored");
    }

    const pr = await axios.get(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      { headers: { Authorization: `Bearer ${MP_ACCESS_TOKEN}` } }
    );
    const p = pr.data;

    const isApproved = p.status === "approved";
    const isBRL = p.currency_id === "BRL";
    const amount = p.transaction_amount;
    const md = p.metadata || {};

    const metaTenantRaw = md?.tenant || md?.tenantId;
    const metaTenant =
      metaTenantRaw === undefined || metaTenantRaw === null
        ? ""
        : String(metaTenantRaw).trim().toLowerCase();
    if (metaTenant && metaTenant !== ctx.id) {
      try {
        const services = getTenantServices(metaTenant);
        ctx = { id: metaTenant, db: services.firestore, auth: services.auth };
      } catch (err) {
        console.error(`[webhook] tenant override falhou (${metaTenant}):`, err.message);
      }
    }

    console.log("[webhook] topic:", topic, "tenant:", ctx.id, "paymentId:", paymentId);

    if (isApproved && isBRL && (md?.email || md?.uid) && amount >= (md.amount || 0)) {
      const purchase = {
        id: p.id,
        amount,
        method: p.payment_method_id,
        dateApproved: p.date_approved,
      };
      if (md.email) {
        await activateProByEmail(ctx, md.email, purchase);
      }
      await activateProLegacyUser(ctx, md.uid, purchase);
    } else {
      console.warn("[webhook] pagamento não aprovado/ inválido:", {
        status: p.status,
        currency_id: p.currency_id,
        amount,
        metadata: md,
      });
    }

    // Sempre 200 p/ evitar reentrega infinita em caso de erro seu
    return res.status(200).send("ok");
  } catch (e) {
    console.error("webhook ERROR:", e.response?.status, e.response?.data || e.message);
    return res.status(200).send("ok");
  }
});

// ===== Start =====
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Backend on", PORT));
