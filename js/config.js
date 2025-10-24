(function (global) {
  "use strict";

  const defaultTenantId = "legmaster";

  const tenantDefinitions = {
    [defaultTenantId]: {
      label: "Legmaster",
      hosts: ["legmaster.com.br", "www.legmaster.com.br"],
      firebaseConfig: {
        apiKey: "AIzaSyAdOzhxHhVouLd9ZOpMof-YQgTTSfGJSFk",
        authDomain: "simuladoslegmasteroficial.firebaseapp.com",
        projectId: "simuladoslegmasteroficial",
        storageBucket: "simuladoslegmasteroficial.firebasestorage.app",
        messagingSenderId: "487716616363",
        appId: "1:487716616363:web:7fd2ce7a32598f720d1fee",
        measurementId: "G-9KEMDVDGB8"
      },
    },
    cfcunitran2: {
      label: "cfcunitran2",
      hosts: ["www.aproveidetranunitran.com.br", "aproveidetranunitran.com.br"],
      firebaseConfig: {
        apiKey: "AIzaSyB6rYO69wIu1UQ_aeRfBYfVlnJhd3wGxBQ",
        authDomain: "cfcunitran2.firebaseapp.com",
        projectId: "cfcunitran2",
        storageBucket: "cfcunitran2.firebasestorage.app",
        messagingSenderId: "59294765285",
        appId: "1:59294765285:web:091fb64f16fb64f147440c",
        measurementId: "G-11K3114S1B"
      },
    },
    
  };

  const baseConfig = {
    FREE_UNLOCK_INDEX: 1,
    QUESTOES_TOTAL: 30,
    API_BASE: "",
  };

  if (global.LEGMASTER_TENANT && typeof global.LEGMASTER_TENANT.registerTenants === "function") {
    global.LEGMASTER_TENANT.registerTenants({
      defaultId: defaultTenantId,
      tenants: tenantDefinitions,
    });

    const activeConfig = global.LEGMASTER_TENANT.getFirebaseConfig();
    if (activeConfig) {
      baseConfig.FIREBASE_CONFIG = activeConfig;
    }
  } else {
    baseConfig.FIREBASE_CONFIG = tenantDefinitions[defaultTenantId].firebaseConfig;
  }

  global.LEGMASTER_CONFIG = Object.assign(baseConfig, global.LEGMASTER_CONFIG || {});
})(window);
