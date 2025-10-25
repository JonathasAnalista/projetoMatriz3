(function(global){
  // Mapeie hostnames ou prefixos de subdomínio para os dados do CFC.
  // Exemplo: 'cfc001.seudominio.com.br': { nome: 'CFC 001', cidade: 'Cidade Exemplo' }
  // ou use apenas o prefixo do subdomínio: 'cfc001': { ... }.
  const hostLevelProfiles = Object.assign({
    'www.aproveidetran.com.br': { nome: 'CFC Aprovei Detran', cidade: 'Ouro fino mg' },
  }, global.CFC_HOST_PROFILES || {});

  const subdomainProfiles = Object.assign({
    'www.sapucai.aproveidetran.com.br': { nome: 'CFC Sapucai', cidade: 'Jacutinga mg' },
  }, global.CFC_SUBDOMAIN_PROFILES || {});

  global.CFC_HOST_PROFILES = hostLevelProfiles;
  global.CFC_SUBDOMAIN_PROFILES = subdomainProfiles;
})(window);
