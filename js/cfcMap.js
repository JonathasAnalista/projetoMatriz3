(function(global){
  // Mapeie hostnames ou prefixos de subdominio para os dados do CFC.
  // Exemplo: 'cfc001.seudominio.com.br': { nome: 'CFC 001', cidade: 'Cidade Exemplo' }
  // ou use apenas o prefixo do subdominio: 'cfc001': { ... }.
  const hostLevelProfiles = Object.assign({
    'aproveidetran.com.br': { nome: 'CFC Aprovei Detran', cidade: 'Ouro Fino - MG' },
    'www.aproveidetran.com.br': { nome: 'CFC Aprovei Detran', cidade: 'Ouro Fino - MG' },
  }, global.CFC_HOST_PROFILES || {});

  const subdomainProfiles = Object.assign({
    'sapucai': { nome: 'CFC Sapucai', cidade: 'Jacutinga - MG' },
  }, global.CFC_SUBDOMAIN_PROFILES || {});

  global.CFC_HOST_PROFILES = hostLevelProfiles;
  global.CFC_SUBDOMAIN_PROFILES = subdomainProfiles;
})(window);
