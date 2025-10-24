import fs from "fs";
import path from "path";
import admin from "firebase-admin";
import { fileURLToPath } from "url";

const DEFAULT_ENV_KEYS = {
  projectId: "FIREBASE_PROJECT_ID",
  clientEmail: "FIREBASE_CLIENT_EMAIL",
  privateKey: "FIREBASE_PRIVATE_KEY",
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REGISTRY_PATH = path.resolve(__dirname, "../tenants/firebase.tenants.json");

const registry = loadRegistry();
const appCache = new Map();

function normalizeId(id) {
  return id === undefined || id === null
    ? null
    : String(id).trim().toLowerCase() || null;
}

function loadRegistry() {
  const fallback = buildFallbackRegistry();
  try {
    if (fs.existsSync(REGISTRY_PATH)) {
      const raw = fs.readFileSync(REGISTRY_PATH, "utf8");
      if (raw && raw.trim()) {
        return normalizeRegistry(JSON.parse(raw));
      }
    }
  } catch (err) {
    console.warn("[tenant-manager] Falha ao ler tenants:", err.message);
  }
  return normalizeRegistry(fallback);
}

function buildFallbackRegistry() {
  const id = normalizeId(process.env.LEGMASTER_DEFAULT_TENANT) || "legmaster";
  const label = process.env.LEGMASTER_DEFAULT_TENANT_LABEL || "Legmaster";
  return {
    defaultTenant: id,
    tenants: {
      [id]: {
        label,
        adminEnv: { ...DEFAULT_ENV_KEYS },
      },
    },
  };
}

function sanitizeEnvMap(map) {
  if (!map || typeof map !== "object") return {};
  return Object.entries(map).reduce((acc, [key, value]) => {
    const trimmedKey = key ? String(key).trim() : "";
    if (!trimmedKey) return acc;
    const envKey = value ? String(value).trim() : "";
    if (!envKey) return acc;
    acc[trimmedKey] = envKey;
    return acc;
  }, {});
}

function sanitizeDirectCredentials(direct) {
  if (!direct || typeof direct !== "object") return {};
  const out = {};
  ["projectId", "clientEmail", "privateKey"].forEach((key) => {
    if (direct[key]) {
      out[key] = String(direct[key]);
    }
  });
  return out;
}

function normalizeRegistry(input) {
  const tenants = {};
  if (input && typeof input === "object" && input.tenants) {
    Object.entries(input.tenants).forEach(([rawId, data]) => {
      const id = normalizeId(rawId);
      if (!id) return;

      const label = data && data.label ? String(data.label) : id;
      const hosts = Array.isArray(data?.hosts)
        ? data.hosts
            .map((item) => (item ? String(item).trim().toLowerCase() : ""))
            .filter(Boolean)
        : [];

      tenants[id] = {
        id,
        label,
        hosts,
        admin: {
          direct: sanitizeDirectCredentials(data?.admin),
          env: sanitizeEnvMap(data?.adminEnv),
        },
      };
    });
  }

  let defaultId = normalizeId(input && input.defaultTenant);
  if (!defaultId || !tenants[defaultId]) {
    const keys = Object.keys(tenants);
    defaultId = keys.length ? keys[0] : null;
  }

  if (!defaultId) {
    const fallbackId = normalizeId(process.env.LEGMASTER_DEFAULT_TENANT) || "legmaster";
    tenants[fallbackId] = {
      id: fallbackId,
      label: process.env.LEGMASTER_DEFAULT_TENANT_LABEL || "Legmaster",
      hosts: [],
      admin: {
        direct: {},
        env: { ...DEFAULT_ENV_KEYS },
      },
    };
    defaultId = fallbackId;
  }

  return { defaultId, tenants };
}

function readEnvValue(key) {
  if (!key) return null;
  return process.env[key] || null;
}

function resolveAdminCredentials(tenant) {
  if (!tenant) return null;
  const direct = tenant.admin?.direct || {};
  const envMap = tenant.admin?.env || {};

  const projectId =
    direct.projectId || readEnvValue(envMap.projectId || DEFAULT_ENV_KEYS.projectId);
  const clientEmail =
    direct.clientEmail || readEnvValue(envMap.clientEmail || DEFAULT_ENV_KEYS.clientEmail);
  const privateKey =
    direct.privateKey || readEnvValue(envMap.privateKey || DEFAULT_ENV_KEYS.privateKey);

  return { projectId, clientEmail, privateKey };
}

function initAppForTenant(tenantId) {
  const tenant = registry.tenants[tenantId];
  if (!tenant) throw new Error(`Tenant '${tenantId}' nao configurado`);

  const credentials = resolveAdminCredentials(tenant);
  if (!credentials?.projectId || !credentials?.clientEmail || !credentials?.privateKey) {
    throw new Error(
      `[tenant:${tenantId}] Credenciais do Firebase ausentes. Configure variaveis de ambiente ou tenants/firebase.tenants.json`
    );
  }

  const cert = {
    projectId: credentials.projectId,
    clientEmail: credentials.clientEmail,
    privateKey: credentials.privateKey.replace(/\\n/g, "\n"),
  };

  const isDefault = tenantId === registry.defaultId;
  let appInstance = null;

  try {
    appInstance = isDefault ? admin.app() : admin.app(tenantId);
  } catch (err) {
    if (isDefault) {
      appInstance = admin.initializeApp({ credential: admin.credential.cert(cert) });
    } else {
      appInstance = admin.initializeApp({ credential: admin.credential.cert(cert) }, tenantId);
    }
  }

  const services = {
    id: tenantId,
    label: tenant.label,
    app: appInstance,
    firestore: appInstance.firestore(),
    auth: appInstance.auth(),
  };

  appCache.set(tenantId, services);
  return services;
}

function getServices(tenantId) {
  const id = normalizeId(tenantId || registry.defaultId);
  if (!id || !registry.tenants[id]) {
    throw new Error(`Tenant '${tenantId}' nao encontrado`);
  }
  if (appCache.has(id)) {
    return appCache.get(id);
  }
  return initAppForTenant(id);
}

function resolveTenantFromHost(hostname) {
  if (!hostname) return null;
  const hostRaw = String(hostname).trim().toLowerCase();
  const host = hostRaw.split(":")[0];
  const ids = Object.keys(registry.tenants);
  for (let i = 0; i < ids.length; i += 1) {
    const tenant = registry.tenants[ids[i]];
    if (!tenant.hosts || !tenant.hosts.length) continue;
    const match = tenant.hosts.some((rule) => {
      if (!rule) return false;
      if (rule === "*") return true;
      if (rule.startsWith("*.")) return host.endsWith(rule.slice(1));
      if (rule.startsWith(".")) return host.endsWith(rule);
      return host === rule;
    });
    if (match) return tenant.id;
  }
  return null;
}

function resolveTenantId(req) {
  const candidates = [];

  const headerTenant = req?.headers?.["x-legmaster-tenant"] || req?.headers?.["x-tenant-id"];
  if (headerTenant) candidates.push(headerTenant);

  if (req?.query?.tenant) candidates.push(req.query.tenant);
  if (req?.query?.tenantId) candidates.push(req.query.tenantId);

  if (req?.body && typeof req.body === "object") {
    if (req.body.tenant) candidates.push(req.body.tenant);
    if (req.body.tenantId) candidates.push(req.body.tenantId);
  }

  const hostCandidate = resolveTenantFromHost(req?.hostname || req?.headers?.host);
  if (hostCandidate) candidates.unshift(hostCandidate);

  for (let i = 0; i < candidates.length; i += 1) {
    const normalized = normalizeId(candidates[i]);
    if (normalized && registry.tenants[normalized]) {
      return normalized;
    }
  }

  return registry.defaultId;
}

function listTenants() {
  return Object.values(registry.tenants).map((tenant) => ({
    id: tenant.id,
    label: tenant.label,
    hosts: [...tenant.hosts],
  }));
}

function getRegistrySnapshot() {
  return {
    defaultId: registry.defaultId,
    tenants: listTenants(),
  };
}

export {
  getServices as getTenantServices,
  resolveTenantId,
  listTenants,
  getRegistrySnapshot,
};
