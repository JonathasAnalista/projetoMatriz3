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
    // },
    // cfcfoch: {
    //   label: "cfc-foch",
    //   hosts: ["www.simuladostransitar.com.br", "simuladostransitar.com.br"],
    //   firebaseConfig: {
    //     apiKey: "AIzaSyC0ogUAaVAg6rF3CDPmdHarG28kN6JfNKk",
    //     authDomain: "cfcfoch.firebaseapp.com",
    //     projectId: "cfcfoch",
    //     storageBucket: "cfcfoch.firebasestorage.app",
    //     messagingSenderId: "140131531161",
    //     appId: "1:140131531161:web:9067c2e3ecc051ef2dfb08",
    //     measurementId: "G-HFRL78LSJY"
    //   },
    // },
    // cfcobjetiva: {
    //   label: "cfcobjetiva",
    //   hosts: ["www.aprovadetranobjetiva.com.br", "aprovadetranobjetiva.com.br"],
    //   firebaseConfig: {
    //     apiKey: "AIzaSyCTGP06Zbf-rbDzVHz-hEnL8kkeFCK37xM",
    //     authDomain: "simuladosobjetiva.firebaseapp.com",
    //     projectId: "simuladosobjetiva",
    //     storageBucket: "simuladosobjetiva.firebasestorage.app",
    //     messagingSenderId: "925076430459",
    //     appId: "1:925076430459:web:4af8cc4757a673573accde",
    //     measurementId: "G-06NNSBBT98"
    //   },
    // },
    // cfcalianca: {
    //   label: "cfcalianca",
    //   hosts: ["www.simuladosdetranoficial.com.br","simuladosdetranoficial.com.br"],
    //   firebaseConfig: {
    //     apiKey: "AIzaSyDvvusp4oXSq10OQaYASY0x5nbITAL680c",
    //     authDomain: "legmaster-firebase.firebaseapp.com",
    //     projectId: "legmaster-firebase",
    //     storageBucket: "legmaster-firebase.firebasestorage.app",
    //     messagingSenderId: "202888695536",
    //     appId: "1:202888695536:web:3872f77a5e0dd1e1d0bc35",
    //     measurementId: "G-893VBVSCH0"
    //   },
    // },
    // cfcuba: {
    //   label: "cfcuba",
    //   hosts: ["www.aprovadetranuba.com.br","aprovadetranuba.com.br"],
    //   firebaseConfig: {
    //     apiKey: "AIzaSyD5ECjmkyPijREgQ8exkl2V1Er5I9tjowo",
    //     authDomain: "cfcuba-1e021.firebaseapp.com",
    //     projectId: "cfcuba-1e021",
    //     storageBucket: "cfcuba-1e021.firebasestorage.app",
    //     messagingSenderId: "406314691377",
    //     appId: "1:406314691377:web:dfffe2da6c46099dfade10",
    //     measurementId: "G-13LDRJRSFW"
    //   },
    // },
    // cfcunitran: {
    //   label: "cfcunitran",
    //   hosts: ["www.unitran.legmaster.com.br","unitran.legmaster.com.br"],
    //   firebaseConfig: {
    //     apiKey: "AIzaSyASAR95ZjydhkgCE5EmZ3L7ijSkoBl_L7M",
    //     authDomain: "cfcunitran-aa41b.firebaseapp.com",
    //     projectId: "cfcunitran-aa41b",
    //     storageBucket: "cfcunitran-aa41b.firebasestorage.app",
    //     messagingSenderId: "811774331691",
    //     appId: "1:811774331691:web:d8e78c06664afbcaaf536e",
    //     measurementId: "G-X9WQ2XWBW6"
    //   },
    // },
    // cfctransitar: {
    //   label: "cfctransitar",
    //   hosts: ["www.transitar.legmaster.com.br","transitar.legmaster.com.br"],
    //   firebaseConfig: {
    //     apiKey: "AIzaSyDMVnJQc4sdec8F8S5woqVvHHUNzZyGBRY",
    //     authDomain: "cfctransitar-c9794.firebaseapp.com",
    //     projectId: "cfctransitar-c9794",
    //     storageBucket: "cfctransitar-c9794.firebasestorage.app",
    //     messagingSenderId: "215300273931",
    //     appId: "1:215300273931:web:b6f1629e8cbf8caff3140e",
    //     measurementId: "G-428GBEHNC7"
    //   },
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
