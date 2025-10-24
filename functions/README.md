# Limpeza de acessos agendada

Este diretorio contem uma Cloud Function opcional para limpar documentos antigos da colecao `acessos` sem intervencao manual.

## Como usar

1. Instale as dependencias dentro da pasta `functions`:
   ```bash
   cd functions
   npm install
   ```
2. Teste localmente (opcional) com os emuladores do Firebase CLI:
   ```bash
   firebase emulators:start --only functions
   ```
3. Faça o deploy da funcao agendada:
   ```bash
   firebase deploy --only functions
   ```

A funcao `limparAcessosProgramada` e agendada para executar a cada 48 horas utilizando o fuso `America/Sao_Paulo`. Quando for executada, todos os acessos com data diferente do dia corrente serao removidos.
