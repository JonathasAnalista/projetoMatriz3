// Rastreio de desempenho nos simulados (carregado nas páginas de simulados)
// Define window.salvarDesempenho(..) caso não exista e registra em Firestore
// Estrutura: coleção 'desempenhos' com {email, prova, acertos, total, data, docId}

(function(){
  if (window.salvarDesempenho) return; // não sobrescreve implementação existente

  function norm(s){ return String(s||'').trim().toLowerCase(); }
  function getEmail(){
    try{ return norm(JSON.parse(localStorage.getItem('usuarioLogado')||'{}').email||''); }catch{return ''}
  }

  async function ensureDb(){
    try{ if (!window.firebase) return null; if (window.__db) return window.__db; window.__db = firebase.firestore ? firebase.firestore() : null; return window.__db; }catch{return null}
  }

  window.salvarDesempenho = async function(prova, acertos, totalQuestoes){
    const email = getEmail();
    const total = typeof totalQuestoes==='number' && totalQuestoes>0
      ? totalQuestoes
      : ((window.LEGMASTER_CONFIG && window.LEGMASTER_CONFIG.QUESTOES_TOTAL) || 30);
    const data = new Date().toLocaleString('pt-BR');
    // backup local
    try{
      const key='desempenho';
      const store = JSON.parse(localStorage.getItem(key)||'{}');
      const arr = store[email] || [];
      arr.push({ prova, acertos, total, data });
      store[email]=arr; localStorage.setItem(key, JSON.stringify(store));
    }catch{}

    // Firestore (se disponível)
    try{
      const db = await ensureDb(); if (!db || !email) return;
      const docId = email.replace(/[.@]/g,'_');
      const payload = { email, prova, acertos, total, data, docId };
      await db.collection('desempenhos').add(payload);
    }catch(e){ console.warn('[track] falha ao salvar desempenho:', e); }
  };

  // aliases compatíveis
  window.registrarDesempenho = window.salvarDesempenho;
  window.registrarDesempenhoFimProva = function(acertos,total){
    const prova = localStorage.getItem('provaAtual') || 'Simulado';
    window.salvarDesempenho(prova, acertos, total);
  };
})();

