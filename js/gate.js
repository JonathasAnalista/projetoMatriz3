// Gate de acesso: FREE vs PRO centralizado
// Como usar em uma página de simulado:
// <script src="/js/gate.js"></script>
// <script> window.gateCheckAndRedirect(); </script>

(function(){
  function normalizeEmail(s){ return (s||'').trim().toLowerCase(); }
  function getUser(){
    try { return JSON.parse(localStorage.getItem('usuarioLogado')||'{}') || {}; } catch(e){ return {}; }
  }
  function getPlanoCached(email){
    if (!email) return { plano:null, ts:0 };
    try {
      var p = localStorage.getItem('plano:'+email) || null;
      var ts = parseInt(localStorage.getItem('plano_ts:'+email) || '0', 10);
      return { plano:p, ts:ts };
    } catch(e){ return { plano:null, ts:0 }; }
  }
  function getProvaIndexFromPath(pathname){
    var m = (pathname||'').match(/\/simulados\/[^/]+-(\d+)\//);
    return m ? parseInt(m[1],10) : 1;
  }

  function gateCheckAndRedirect(opts){
    try {
      opts = opts || {};
      var FREE_UNLOCK_INDEX = (window.LEGMASTER_CONFIG && window.LEGMASTER_CONFIG.FREE_UNLOCK_INDEX) || 1;
      if (typeof opts.freeUnlockIndex === 'number') FREE_UNLOCK_INDEX = opts.freeUnlockIndex;

      var email = normalizeEmail(getUser().email || '');
      if (!email) {
        location.replace('/index.html?msg=login-necessario');
        return false;
      }

      var provaIndex = getProvaIndexFromPath(location.pathname);
      var cache = getPlanoCached(email);
      var plano = (cache.plano||'').toLowerCase();
      if (plano === 'pro') return true;
      if (provaIndex <= FREE_UNLOCK_INDEX) return true;

      var params = new URLSearchParams({ msg: 'prova-bloqueada', idx: String(provaIndex) });
      location.replace('/index.html?'+params.toString());
      return false;
    } catch(e){
      console.warn('[gate] erro no gate:', e);
      return true; // em erro, não bloquear para evitar travamento
    }
  }

  window.gateCheckAndRedirect = gateCheckAndRedirect;
})();

// Bootstrap defensivo para paginas de simulados: garante Firebase + track.js
;(function(){
  function isSimuladoPage(){ try { return /\/simulados\//.test(location.pathname); } catch { return false; } }
  function hasScriptSrc(src){
    try {
      var list = document.scripts || [];
      for (var i=0;i<list.length;i++){ if ((list[i].src||'').indexOf(src) !== -1) return true; }
    } catch {}
    return false;
  }
  function loadScript(src){
    return new Promise(function(resolve){
      try {
        if (hasScriptSrc(src)) return resolve();
        var s = document.createElement('script');
        s.src = src;
        s.async = false; // manter ordem
        s.onload = function(){ resolve(); };
        s.onerror = function(){ resolve(); };
        (document.head||document.documentElement).appendChild(s);
      } catch { resolve(); }
    });
  }
  async function ensureFirebaseStack(){
    try {
      if (!window.LEGMASTER_CONFIG) await loadScript('/js/config.js');
      if (!window.firebase || !firebase.firestore){
        await loadScript('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
        await loadScript('https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js');
        await loadScript('https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js');
      }
      if (!window.firebaseAppInitialized) await loadScript('/js/firebase.js');
    } catch(e){ console.warn('[gate/bootstrap] firebase stack:', e); }
  }
  async function ensureTrack(){
    try { if (!window.salvarDesempenho) await loadScript('/js/track.js'); } catch(e){}
  }
  if (isSimuladoPage()){
    try { ensureFirebaseStack().then(ensureTrack); } catch {}
  }
})();
