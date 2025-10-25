const functions = require("firebase-functions");

const TIME_ZONE = "America/Sao_Paulo";

exports.limparAcessosProgramada = functions.pubsub
  .schedule("every 48 hours")
  .timeZone(TIME_ZONE)
  .onRun(async () => {
    functions.logger.info(
      "[limparAcessosProgramada] Coleção 'acessos' desativada - nenhuma limpeza necessária."
    );
    return null;
  });

