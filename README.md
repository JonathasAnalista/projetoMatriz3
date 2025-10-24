# Legmaster – Estrutura e Operação

Este projeto contém o frontend (estático) da plataforma Legmaster e uma API backend em `backend/` para integrações (Mercado Pago / Firebase Admin).

## Agente de ia no botpress............

## Estrutura

- `index.html` – página principal da aplicação.
- `style.css`, `script.js` – estilos e lógica principal do app.
- `service-worker.js`, `manifest.json`, `icons/` – PWA.
- `simulados/` – páginas dos simulados, com assets específicos.
- `pagamento/{sucesso,pendente,erro}/index.html` – páginas de retorno do checkout.
- `backend/` — API Express (Node 18+) com integrações externas.

## Multi-tenant Firebase

- Tenants do Firebase são agrupados em `js/config.js` (cliente) e `tenants/firebase.tenants.json` (backend).
- Cada tenant pode definir `hosts` para seleção automática pelo domínio, além de usar o parâmetro `?tenant=` ou o header `x-legmaster-tenant`.
- O backend busca as credenciais em variáveis de ambiente listadas em `tenants/firebase.tenants.json` (ex.: `FIREBASE_PROJECT_ID`); ao cadastrar novos tenants, forneça o trio `projectId`, `clientEmail` e `privateKey`.
- No frontend é possível alternar manualmente via `window.LEGMASTER_TENANT.setActiveTenant("id")`, que persiste em `localStorage`.
- O tenant padrão permanece `legmaster`, garantindo compatibilidade com a configuração anterior.

## Rodando o backend

1. Entre em `backend/` e copie `.env.example` (se existir) para `.env`, preenchendo:
   - `FRONTEND_URL=https://seu-dominio.com` (ou `http://localhost:8080` em dev)
   - `BASE_URL=` URL pública do backend (https, ex.: ngrok)
   - `MP_ACCESS_TOKEN=` token do Mercado Pago
   - `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`
2. Instale dependências: `npm i`
3. Inicie: `npm start`

## Boas práticas já aplicadas

- Remoção de metatags e CSS duplicados no `index.html`.
- Guard no `gtag('config', ...)` para evitar erro quando `gtag` não estiver carregado.
- Páginas de pagamento com conteúdo mínimo e botão para voltar ao início.
- Service Worker mantido simples (sem cache agressivo) para não afetar o funcionamento.
- Adicionados `js/config.js` e `js/firebase.js` para centralizar configuração e inicialização segura do Firebase lado cliente.
- Adicionado `js/gate.js` com a função `window.gateCheckAndRedirect()` (gate FREE vs PRO) para ser usada nos simulados.

## Próximos passos sugeridos (sem quebra)

- Centralizar a verificação de plano (FREE/PRO) em um único JS compartilhado.
- Consolidar Firebase em um único arquivo (versão 9 compat), evitando duplicações nas páginas de simulados.
- Evoluir o Service Worker com Workbox (precache do shell e atualização amigável) quando houver um processo de build.
- Padronizar assets (áudios/imagens) em `assets/` para reduzir duplicação.

## Provas gerais (quantidade)

- Pastas: as provas gerais ficam em `simulados/provas_gerais-{N}/` (ex.: `provas_gerais-1` … `provas_gerais-10`).
- Contagem usada no app: definida em `script.js:605` via `FIXED_COUNTS.provas_gerais`.
- Ao adicionar ou remover pastas, atualize esse valor para o total correto e recarregue a página.
- Observação: a descoberta dinâmica por requisição HEAD foi removida para acelerar o carregamento.

### Como usar o gate centralizado em um simulado

Inclua no `<head>` ou logo no início do `<body>` da página do simulado:

```
<script src="/js/gate.js"></script>
<script> window.gateCheckAndRedirect(); </script>
```

Opcionalmente, ajuste o índice liberado grátis (padrão `1`):

```
<script> window.gateCheckAndRedirect({ freeUnlockIndex: 1 }); </script>
```

## Segurança

- Não versione chaves/segredos. O arquivo `chave-legmaster.json` deve ficar fora do repositório (já listado no `.gitignore`). Considere rotacionar se já foi comprometido!...
