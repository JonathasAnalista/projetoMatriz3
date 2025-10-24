const admin = require("firebase-admin");
const serviceAccount = require("./chave-legmaster.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const DOIS_DIAS_EM_MS = 1000 * 60 * 60 * 24 * 2;
let limpezaEmAndamento = false;

function parseDataBR(dataStr) {
  // Ex: "03/06/2025, 19:37:50"
  const [dataPart] = dataStr.split(", ");
  const [dia, mes, ano] = dataPart.split("/");
  return new Date(`${ano}-${mes}-${dia}`);
}

function dataFormatadaISO(date) {
  // Retorna apenas o ano-mes-dia
  return date.toISOString().split("T")[0];
}

async function limparAcessosAntigos() {
  const hoje = new Date();
  const hojeStr = dataFormatadaISO(hoje);

  const snapshot = await db.collection("acessos").get();

  let deletados = 0;
  const batch = db.batch();

  snapshot.forEach((doc) => {
    const dados = doc.data();
    if (!dados.data) return;

    const dataDoc = parseDataBR(dados.data);
    const dataDocStr = dataFormatadaISO(dataDoc);

    // Se a data do acesso nao for hoje, apaga
    if (dataDocStr !== hojeStr) {
      batch.delete(doc.ref);
      deletados++;
    }
  });

  if (deletados > 0) {
    await batch.commit();
    console.log(`${deletados} acessos antigos foram apagados. Apenas os acessos de hoje foram mantidos.`);
  } else {
    console.log("Nenhum acesso antigo para apagar.");
  }
}

async function executarLimpeza() {
  if (limpezaEmAndamento) {
    console.warn(`[${new Date().toISOString()}] Limpeza ja esta em andamento, pulando nova execucao.`);
    return;
  }

  limpezaEmAndamento = true;
  console.log(`[${new Date().toISOString()}] Iniciando limpeza de acessos...`);

  try {
    await limparAcessosAntigos();
    console.log(`[${new Date().toISOString()}] Limpeza concluida.`);
  } catch (erro) {
    console.error(`[${new Date().toISOString()}] Falha ao limpar acessos:`, erro);
  } finally {
    limpezaEmAndamento = false;
  }
}

console.log(`[${new Date().toISOString()}] Limpeza agendada a cada 2 dias.`);
executarLimpeza();
setInterval(executarLimpeza, DOIS_DIAS_EM_MS);
