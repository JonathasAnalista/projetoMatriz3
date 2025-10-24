(function (global) {
  "use strict";

  const defaultTenantId = "aproveidetran";

  const tenantDefinitions = {
    [defaultTenantId]: {
      label: "cfcaproveidetran",
      hosts: ["aproveidetran.com.br", "www.aproveidetran.com.br"],
      firebaseConfig: {
        apiKey: "AIzaSyDfzxVXVnlKbHArzoy3deckwqFhsl_om0E",
        authDomain: "cfcaproveidetran.firebaseapp.com",
        projectId: "cfcaproveidetran",
        storageBucket: "cfcaproveidetran.firebasestorage.app",
        messagingSenderId: "261936235495",
        appId: "1:261936235495:web:2c9b8a062f46597296b342",
        measurementId: "G-D287FFW15Y"
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
