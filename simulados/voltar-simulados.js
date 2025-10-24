/* voltar-simulados.js - botao ancorado no canto inferior direito do conteudo */
;(() => {
  if (document.getElementById('btn-voltar-simulados')) return;

  const FORCED_ROUTE_KEY = '__app_forced_route_v1';
  const LAST_PROVA_SLUG_KEY = '__ultimaProvaSlug';

  function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch {}
  }

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch {}
    return null;
  }

  function buildRouteForReturn() {
    const slug = (safeGet(LAST_PROVA_SLUG_KEY) || '').trim();
    if (slug) return { screen: 'provas', params: { slug } };
    return { screen: 'simulados', params: null };
  }

  function routeToHash(route) {
    if (!route || !route.screen) return '#menu';
    if (route.screen === 'provas' && route.params && route.params.slug) {
      return `#provas/${route.params.slug}`;
    }
    return `#${route.screen}`;
  }

  function persistForcedRoute(route) {
    try {
      if (!route || !route.screen) return;
      localStorage.setItem(FORCED_ROUTE_KEY, JSON.stringify(route));
    } catch {}
  }

  function computeBaseUrl() {
    const origin = location.origin && location.origin !== 'null'
      ? location.origin
      : (location.protocol + '//' + location.host);
    const path = location.pathname || '/';
    const lower = path.toLowerCase();
    const idx = lower.indexOf('/simulados/');
    let basePath = idx >= 0 ? path.slice(0, idx) : path.replace(/[^/]*$/, '');
    if (!basePath.endsWith('/')) basePath += '/';
    return origin + basePath;
  }

  const style = document.createElement('style');
  style.textContent = `
    .back-bottom-area{
      margin: 16px 0 12px;
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
    .back-bottom-area .back-btn{
      padding: 6px 10px;
      font-size: 12px;
      font-weight: 700;
      border-radius: 9999px;
      background: #2E7D32;
      color: #fff;
      border: none;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0,0,0,.12);
    }
    .back-bottom-area .back-btn:hover{ opacity:.94; }
    .back-bottom-area .back-btn:focus-visible{
      outline: 3px solid #A5D6A7; outline-offset: 3px;
    }
  `;
  document.head.appendChild(style);

  const style2 = document.createElement('style');
  style2.textContent = `
    .back-bottom-area{ margin: 18px 0 16px; }
    .back-bottom-area .back-btn{
      padding: 12px 18px !important;
      font-size: 15.5px !important;
      font-weight: 800 !important;
      letter-spacing: .2px !important;
      border-radius: 12px !important;
      color: #fff !important;
      background: linear-gradient(180deg, #2E7D32 0%, #256F2C 100%) !important;
      border: 1px solid #1e5f25 !important;
      box-shadow: 0 6px 14px rgba(46,125,50,.28), 0 2px 4px rgba(0,0,0,.06) !important;
      transition: transform .08s ease, box-shadow .12s ease, filter .12s ease, background .2s ease !important;
    }
    .back-bottom-area .back-btn:hover{ filter: brightness(1.02); box-shadow: 0 10px 20px rgba(46,125,50,.33), 0 3px 6px rgba(0,0,0,.08) !important; }
    .back-bottom-area .back-btn:active{ transform: translateY(1px) scale(.99); box-shadow: 0 4px 10px rgba(46,125,50,.26), 0 2px 4px rgba(0,0,0,.06) !important; }
  `;
  document.head.appendChild(style2);

  const area = document.createElement('div');
  area.className = 'back-bottom-area';

  const btn = document.createElement('button');
  btn.id = 'btn-voltar-simulados';
  btn.className = 'back-btn';
  btn.textContent = 'Voltar';

  area.appendChild(btn);

  function navigateBack() {
    const route = buildRouteForReturn();
    persistForcedRoute(route);
    safeSet('telaAtual', route.screen);
    const fallbackUrl = computeBaseUrl() + 'index.html' + routeToHash(route);
    const currentHref = location.href;

    if (window.opener && !window.opener.closed) {
      try { window.opener.focus(); } catch {}
      window.close();
      return;
    }

    const ref = document.referrer;
    if (ref) {
      try {
        const origin = location.origin;
        const sameOrigin = !origin || origin === 'null' || ref.startsWith(origin);
        if (sameOrigin) {
          location.href = ref;
          return;
        }
      } catch {}
    }

    if (history.length > 1) {
      history.back();
      setTimeout(() => {
        if (location.href === currentHref) {
          location.href = fallbackUrl;
        }
      }, 350);
      return;
    }

    location.href = fallbackUrl;
  }

  btn.addEventListener('click', navigateBack);

  function insertAtEnd() {
    const container =
      document.querySelector('.container, .content, .quiz, main, .wrapper') || document.body;
    container.appendChild(area);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { insertAtEnd(); try{ document.querySelectorAll('button').forEach(b=>{ if(/refazer\s*prova/i.test((b.textContent||''))){ b.textContent='Refazer Prova'; }}); }catch{} });
  } else {
    insertAtEnd();
    try{ document.querySelectorAll('button').forEach(b=>{ if(/refazer\s*prova/i.test((b.textContent||''))){ b.textContent='Refazer Prova'; }}); }catch{}
  }
})();
