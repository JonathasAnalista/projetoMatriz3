const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();
const TIME_ZONE = "America/Sao_Paulo";
const BATCH_LIMIT = 450;

function parseDataBR(dataStr) {
  if (!dataStr || typeof dataStr !== "string") return null;
  const [dataPart] = dataStr.split(", ");
  if (!dataPart) return null;
  const partes = dataPart.split("/");
  if (partes.length !== 3) return null;
  const [dia, mes, ano] = partes;
  return new Date(`${ano}-${mes}-${dia}`);
}

function dataFormatadaISO(date) {
  return date.toISOString().split("T")[0];
}

async function limparAcessosAntigos() {
  const hojeStr = dataFormatadaISO(new Date());
  const snapshot = await db.collection("acessos").get();

  let deletados = 0;
  let batch = db.batch();
  let operacoesNoBatch = 0;

  async function commitBatch() {
    if (operacoesNoBatch === 0) return;
    await batch.commit();
    batch = db.batch();
    operacoesNoBatch = 0;
  }

  for (const doc of snapshot.docs) {
    const dados = doc.data();
    if (!dados?.data) continue;

    const dataDoc = parseDataBR(dados.data);
    if (!dataDoc || Number.isNaN(dataDoc.getTime())) continue;

    const dataDocStr = dataFormatadaISO(dataDoc);
    if (dataDocStr === hojeStr) continue;

    batch.delete(doc.ref);
    deletados++;
    operacoesNoBatch++;

    if (operacoesNoBatch >= BATCH_LIMIT) {
      await commitBatch();
    }
  }

  await commitBatch();
  return deletados;
}

exports.limparAcessosProgramada = functions.pubsub
  .schedule("every 48 hours")
  .timeZone(TIME_ZONE)
  .onRun(async () => {
    functions.logger.info("Iniciando limpeza agendada de acessos");

    try {
      const deletados = await limparAcessosAntigos();
      functions.logger.info("Limpeza concluida", { deletados });
    } catch (erro) {
      functions.logger.error("Falha ao limpar acessos", erro);
      throw erro;
    }
  });
