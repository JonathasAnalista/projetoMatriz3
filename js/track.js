// Rastreio de desempenho nos simulados (carregado nas páginas de simulados)
// Define window.salvarDesempenho(..) caso não exista, usando apenas armazenamento local.

(function(){
  if (window.salvarDesempenho) return; // não sobrescreve implementação existente

  function normalize(str){ return String(str||'').trim().toLowerCase(); }
  function readUsuarioLogado(){
    try { return JSON.parse(localStorage.getItem('usuarioLogado') || '{}') || {}; }
    catch { return {}; }
  }
  function resolveOwnerId(){
    const user = readUsuarioLogado();
    return user.uid || normalize(user.email) || 'anon';
  }
  function getStorageKey(ownerId){
    const safe = normalize(ownerId).replace(/[^a-z0-9_-]/g, '_');
    return `desempenho:${safe || 'anon'}`;
  }
  function fallbackSalvar(ownerId, registro){
    try {
      const key = getStorageKey(ownerId);
      let lista = [];
      try { lista = JSON.parse(localStorage.getItem(key) || '[]'); if (!Array.isArray(lista)) lista = []; } catch {}
      const item = {
        provaId: registro?.provaId || null,
        provaNome: registro?.provaNome || registro?.prova || localStorage.getItem('provaAtual') || 'Simulado',
        acertos: Number(registro?.acertos ?? 0),
        total: typeof registro?.total === 'number' ? registro.total : null,
        dataISO: registro?.dataISO || new Date().toISOString(),
      };
      if (!Number.isFinite(item.acertos)) item.acertos = 0;
      lista.push(item);
      localStorage.setItem(key, JSON.stringify(lista));
    } catch (err) {
      console.warn('[track] falha ao salvar desempenho local:', err);
    }
  }
  function salvarLocal(ownerId, registro){
    if (typeof window.salvarDesempenhoLocal === 'function') {
      return window.salvarDesempenhoLocal(ownerId, registro);
    }
    return fallbackSalvar(ownerId, registro);
  }

  window.salvarDesempenho = function(prova, acertos, totalQuestoes){
    const ownerId = resolveOwnerId();
    const total = typeof totalQuestoes === 'number' && totalQuestoes > 0 ? totalQuestoes : null;
    salvarLocal(ownerId, {
      provaNome: prova || localStorage.getItem('provaAtual') || 'Simulado',
      acertos,
      total,
      dataISO: new Date().toISOString(),
    });
  };

  window.registrarDesempenho = window.salvarDesempenho;
  window.registrarDesempenhoFimProva = function(acertos,total){
    const prova = localStorage.getItem('provaAtual') || 'Simulado';
    window.salvarDesempenho(prova, acertos, total);
  };
})();

