// Inicializacao defensiva do Firebase no cliente
// - Usa window.LEGMASTER_TENANT para recuperar a configuracao ativa
// - So inicializa se os scripts do Firebase estiverem carregados
// - Evita re-inicializacao quando window.firebaseAppInitialized ja estiver setado

(function initFirebaseClient() {
  try {
    if (!window.firebase) return;
    if (window.firebaseAppInitialized) return;

    var cfg = null;

    if (window.LEGMASTER_TENANT && typeof window.LEGMASTER_TENANT.getFirebaseConfig === "function") {
      cfg = window.LEGMASTER_TENANT.getFirebaseConfig();
    }

    if (!cfg && window.LEGMASTER_CONFIG && window.LEGMASTER_CONFIG.FIREBASE_CONFIG) {
      cfg = window.LEGMASTER_CONFIG.FIREBASE_CONFIG;
    }

    if (!cfg) return;

    firebase.initializeApp(cfg);
    window.firebaseAppInitialized = true;

    window.fb = window.fb || {};
    try {
      window.fb.auth = firebase.auth();
    } catch (err) {
      /* ignore */
    }
    try {
      window.fb.db = firebase.firestore ? firebase.firestore() : null;
    } catch (err) {
      /* ignore */
    }
  } catch (err) {
    console.warn("[firebase.js] falha ao inicializar:", err);
  }
})();
