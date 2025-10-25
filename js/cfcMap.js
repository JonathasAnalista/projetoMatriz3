(function (global) {
  const hostLevelProfiles = Object.assign({
    'aproveidetran.com.br':         { nome: 'CFC Aprovei Detran', cidade: 'Ouro Fino - MG' },
    'www.aproveidetran.com.br':     { nome: 'CFC Aprovei Detran', cidade: 'Ouro Fino - MG' },
    'sapucai.aproveidetran.com.br': { nome: 'CFC Sapucai',        cidade: 'Jacutinga - MG' },
    'www.sapucai.aproveidetran.com.br': { nome: 'CFC Sapucai',    cidade: 'Jacutinga - MG' },
  }, global.CFC_HOST_PROFILES || {});

  const subdomainProfiles = Object.assign({
    sapucai: { nome: 'CFC Sapucai', cidade: 'Jacutinga - MG' },
  }, global.CFC_SUBDOMAIN_PROFILES || {});

  global.CFC_HOST_PROFILES = hostLevelProfiles;
  global.CFC_SUBDOMAIN_PROFILES = subdomainProfiles;
})(window);
