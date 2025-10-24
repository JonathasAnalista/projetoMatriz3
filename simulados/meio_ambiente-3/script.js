// ✅ Carrega dados do usuário da plataforma
const usuarioSalvo = JSON.parse(localStorage.getItem("usuarioLogado") || "{}");

window.currentUser = {
  email: usuarioSalvo.email || null,
  nome: usuarioSalvo.nome || "Desconhecido"
};

console.log("Usuário carregado:", window.currentUser);





const somAcerto = new Audio("acerto.mp3");
const somErro = new Audio("erro.mp3");

function habilitarAudios() {
  somAcerto.volume = 0;
  somErro.volume = 0;

  somAcerto.play().catch(() => {});
  somErro.play().catch(() => {});

  setTimeout(() => {
    somAcerto.pause(); somErro.pause();
    somAcerto.currentTime = 0; somErro.currentTime = 0;
    somAcerto.volume = 1; somErro.volume = 1;
  }, 200);

  document.body.onclick = null;
}





const questions = [
  {
    "question": "No contexto de poluição atmosférica regulatória, assinale a opção que NÃO é considerada poluente do ar.",
    "options": ["Fuligem.", "Queimadas.", "Monóxido de Carbono.", "Vapor d’água."],
    "answer": 3,
    "explicacao": "Em qualidade do ar, vapor d’água não é classificado como poluente; fuligem, queimadas e CO são."
  },
  {
    "question": "Em túneis extensos, a ventilação/exaustão é necessária porque há tendência de acúmulo de:",
    "options": ["Partículas de fumaça, somente.", "Gases tóxicos, somente.", "Partículas de vapor d’água, somente.", "Gases e partículas de fumaça."],
    "answer": 3,
    "explicacao": "Motores geram gases e material particulado; ambos se acumulam e precisam ser removidos."
  },
  {
    "question": "O efeito direto MAIS imediato da destruição da camada de ozônio é:",
    "options": ["Aquecimento global.", "Maior incidência de radiação UV na superfície.", "Aumento geral da poluição.", "Inversão térmica."],
    "answer": 1,
    "explicacao": "Menos ozônio = mais radiação UV atingindo pessoas, animais e plantas."
  },
  {
    "question": "A padronização de rótulos e painéis para transporte de produtos perigosos segue regras da:",
    "options": ["CONTRAN.", "ONU.", "CONAMA.", "DETRAN."],
    "answer": 1,
    "explicacao": "Usa-se a numeração e símbolos do sistema da ONU (Orange Book)."
  },
  {
    "question": "No escapamento de veículos leves no Brasil, a emissão de ALDEÍDOS aumenta NOTADAMENTE quando:",
    "options": ["A combustão é sempre completa.", "Há apenas gás natural no sistema.", "Utiliza-se etanol como combustível.", "Há dosagem ‘rica’ de ar por erro de mistura."],
    "answer": 2,
    "explicacao": "O etanol favorece a formação de acetaldeído; é o cenário típico de maior emissão."
  },
  {
    "question": "Assinale o componente que NÃO é antipoluição veicular:",
    "options": ["Cânister.", "Catalisador.", "Injeção eletrônica.", "Diferencial."],
    "answer": 3,
    "explicacao": "Diferencial é da transmissão; não controla emissões."
  },
  {
    "question": "Os veículos podem poluir o meio ambiente principalmente por meio de poluição:",
    "options": ["Sonora e radioativa.", "Atmosférica e da água.", "Sonora e da água.", "Sonora e atmosférica."],
    "answer": 3,
    "explicacao": "Ruído (sonora) e gases/partículas (atmosférica) são os impactos diretos mais comuns."
  },
  {
    "question": "É proibido usar equipamento sonoro NÃO obrigatório que produza:",
    "options": ["Som acima de 80 dB.", "Som acima de 120 dB.", "Som audível do lado externo do veículo.", "Som acima de 60 dB."],
    "answer": 2,
    "explicacao": "A regra mira o som audível externamente que perturbe o sossego, não apenas um número de dB."
  },
  {
    "question": "A chamada ‘chuva ácida’ resulta quando vapor d’água reage PRINCIPALMENTE com:",
    "options": ["Óxidos de nitrogênio e dióxido de enxofre.", "Aldeídos e hidrocarbonetos.", "Monóxido e dióxido de carbono.", "Oxigênio e ozônio."],
    "answer": 0,
    "explicacao": "NOx e SO2 formam ácidos nítrico e sulfúrico, que acidificam a chuva."
  },
  {
    "question": "O efeito estufa pode ser descrito, de forma correta, como:",
    "options": ["Resfriamento das camadas inferiores da atmosfera.", "Sinônimo de ‘camada de ozônio’.", "Aquecimento das camadas inferiores da atmosfera.", "Todas as alternativas são corretas."],
    "answer": 2,
    "explicacao": "Gases-estufa retêm calor e aquecem as camadas baixas da atmosfera."
  },
  {
    "question": "Nos veículos modernos, o carburador foi substituído para melhor controle de emissões por:",
    "options": ["Ignição eletrônica.", "Distribuidor e bobina.", "Ligação direta.", "Injeção eletrônica."],
    "answer": 3,
    "explicacao": "A injeção dosa com precisão o combustível, reduzindo poluentes."
  },
  {
    "question": "No Brasil, NÃO é matéria-prima usual para produção de etanol combustível:",
    "options": ["Milho.", "Eucalipto.", "Semente de girassol.", "Cana-de-açúcar."],
    "answer": 2,
    "explicacao": "A base é cana e, em menor escala, milho; girassol não é rota usual de etanol."
  },
  {
    "question": "Produtos perigosos que podem lançar fragmentos a centenas de metros são os:",
    "options": ["Corrosivos.", "Explosivos.", "Radioativos.", "Tóxicos."],
    "answer": 1,
    "explicacao": "Explosivos podem projetar estilhaços a longas distâncias."
  },
  {
    "question": "Em potencial de poluição do ar, os veículos que mais preocupam são os movidos a:",
    "options": ["Diesel.", "Gás natural.", "Tração animal.", "Propulsão humana."],
    "answer": 0,
    "explicacao": "Motores a diesel emitem NOx e partículas finas (fumaça preta)."
  },
  {
    "question": "A segurança no trânsito é direito:",
    "options": ["Dos pedestres.", "De todo cidadão.", "Dos ciclistas.", "Dos motociclistas."],
    "answer": 1,
    "explicacao": "É direito universal: todos os usuários da via devem ter segurança."
  },
  {
    "question": "A identificação externa de cargas perigosas no veículo é feita por:",
    "options": ["Adesivo com a logomarca da empresa.", "Rótulo de risco e painel de segurança com numeração ONU.", "Nome do motorista no lado de fora.", "Apenas painel de segurança."],
    "answer": 1,
    "explicacao": "Exige rótulos de risco e painel laranja com números da ONU."
  },
  {
    "question": "É dever do motorista cidadão, EXCETO:",
    "options": ["Não lançar lixo nas vias.", "Facilitar ultrapassagem segura.", "Aproveitar-se de situação de sinistro se não for culpado.", "Praticar direção defensiva."],
    "answer": 2,
    "explicacao": "Explorar um sinistro contraria ética e cidadania; as demais condutas são devidas."
  },
  {
    "question": "O controle de emissões de gases e de ruídos previsto no CTB é:",
    "options": ["Obrigatório a todo veículo automotor.", "Apenas recomendável.", "Exigido só para ônibus e caminhões.", "Dispensável em área urbana."],
    "answer": 0,
    "explicacao": "Todos os veículos devem atender limites de emissões e ruído."
  },
  {
    "question": "Qual fator POTENCIALIZA a poluição atmosférica veicular?",
    "options": ["Combustível de baixa qualidade.", "Motor desregulado.", "Uso excessivo do veículo.", "Todas as alternativas."],
    "answer": 3,
    "explicacao": "Todos aumentam emissões: combustível ruim, manutenção precária e alto uso."
  },
  {
    "question": "Além dos gases, veículos impactam o meio ambiente por:",
    "options": ["Descarte de pneus e baterias.", "Produção elevada de CFC.", "Poluição sonora.", "As alternativas A e C."],
    "answer": 3,
    "explicacao": "Resíduos (pneus/baterias) e ruído também causam impacto ambiental."
  },
  {
    "question": "Assinale o órgão que NÃO tem como missão o controle ambiental:",
    "options": ["FUNAI.", "CONAMA.", "PROCONVE.", "IBAMA."],
    "answer": 0,
    "explicacao": "FUNAI atua com povos indígenas; os demais tratam de meio ambiente/emissões."
  },
  {
    "question": "A ‘fumaça preta’ de motores a diesel é problemática porque:",
    "options": [
      "Contém partículas inaláveis de fuligem recobertas por óleo tóxico.",
      "Tem muito dióxido de carbono.",
      "Tem muito monóxido de carbono.",
      "Causa perda progressiva da visão por si só."
    ],
    "answer": 0,
    "explicacao": "O risco maior é o material particulado fino (fuligem) que penetra nos pulmões."
  },
  {
    "question": "Uma atitude simples e correta para preservar o ambiente ao dirigir é:",
    "options": ["Jogar o lixo pela janela.", "Deixar o lixo no chão do carro.", "Levar saquinhos para guardar o lixo.", "Nenhuma das anteriores."],
    "answer": 2,
    "explicacao": "Guarde o lixo e descarte em local adequado; não jogue na via."
  },
  {
    "question": "As inspeções de emissões melhoram a qualidade de vida porque:",
    "options": ["Identificam veículos fora do padrão para correção.", "Reduzem o desgaste do motor automaticamente.", "Eliminam todo poluente emitido.", "Tornam a manutenção mais barata por si só."],
    "answer": 0,
    "explicacao": "O objetivo é flagrar e corrigir fontes que emitem acima do limite."
  },
  {
    "question": "Para reduzir a fumaça preta de ônibus/caminhões, a medida MAIS efetiva é:",
    "options": ["Exigir máscaras à população.", "Usar mais combustíveis fósseis.", "Incentivar veículos a diesel.", "Manter os motores regulados/manutenidos."],
    "answer": 3,
    "explicacao": "Manutenção e regulagem adequadas reduzem emissões significativamente."
  },
  {
    "question": "Nas grandes cidades, a principal origem da poluição do ar vem de:",
    "options": ["Queima de carvão em residências.", "Áreas rurais.", "Veículos automotores e indústrias.", "Apenas queimadas florestais."],
    "answer": 2,
    "explicacao": "Frota e parque industrial concentram-se em centros urbanos."
  },
  {
    "question": "Veículos mal conservados e desregulados tendem a:",
    "options": ["Poluir só a água.", "Poluir só o solo.", "Não agredir o ambiente.", "Aumentar poluição do ar e sonora."],
    "answer": 3,
    "explicacao": "Geram mais ruído e emitem mais gases/partículas do que os regulados."
  },
  {
    "question": "Partículas emitidas por motores de combustão interna caracterizam:",
    "options": ["Poluição atmosférica.", "Poluição sonora.", "Chuva ácida de forma direta.", "Um fenômeno sem impacto sanitário."],
    "answer": 0,
    "explicacao": "Material particulado é um poluente clássico do ar."
  },
  {
    "question": "É conduta típica do condutor cidadão:",
    "options": [
      "Respeitar normas, direitos alheios e o meio ambiente.",
      "Ser cordial, tolerante e cooperativo, relevando erros.",
      "Acreditar que está sempre certo e dispensar autocrítica.",
      "As alternativas A e B."
    ],
    "answer": 3,
    "explicacao": "Cidadania reúne respeito às regras e comportamento colaborativo."
  },
  {
    "question": "Uma consequência clara da chuva ácida é:",
    "options": ["Corrosão de metais e estruturas.", "‘Tortura’.", "Dor de cabeça imediata.", "Edema pulmonar inevitável."],
    "answer": 0,
    "explicacao": "A acidez acelera a corrosão de metais, monumentos e edificações."
  }
];



// =========================
// Estado do simulado
// =========================
let currentQuestion = 0;
let score = 0;
let startTime = new Date();

// =========================
// Timer
// =========================
function updateTimer() {
  const now = new Date();
  const diff = Math.floor((now - startTime) / 1000);
  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;
  const sec = String(seconds).padStart(2, "0");
  const el = document.getElementById("timer");
  if (el) el.textContent = `Tempo: ${minutes}m ${sec}s`;
}
setInterval(updateTimer, 1000);

// =========================
// Render da Questão
// =========================
function showQuestion() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  if (currentQuestion >= questions.length) {
    showResult();
    return;
  }

  const q = questions[currentQuestion];

  const qDiv = document.createElement("div");
  qDiv.className = "question";
  qDiv.innerHTML = `<h3>Questão ${currentQuestion + 1} de ${questions.length}</h3>`;

  if (q.image) {
    qDiv.innerHTML += `
      <div style="text-align:center;">
        <img src="${q.image}" alt="Imagem da questão" class="question-image" style="max-width:200px;height:auto;display:block;margin:5px auto;">
      </div>`;
  }

  qDiv.innerHTML += `<p style="font-size:23px;"><strong>${q.question}</strong></p>`;

  const optionsDiv = document.createElement("div");
  optionsDiv.className = "options";

  const feedbackP = document.createElement("p");
  qDiv.appendChild(feedbackP);

  // Botão Próxima/Finalizar (fica escondido até responder)
  const btnNext = document.createElement("button");
  btnNext.textContent = currentQuestion === questions.length - 1 ? "Finalizar Simulado" : "Próxima";
  btnNext.style.display = "none";
  btnNext.className = "auth-btn";
  btnNext.addEventListener("click", () => {
    currentQuestion++;
    updateProgress();
    showQuestion();
  });

  // Alternativas
  q.options.forEach((opt, i) => {
    const btnAlt = document.createElement("button");
    btnAlt.textContent = String.fromCharCode(65 + i) + ") " + opt;
    btnAlt.className = "option-button";
    btnAlt.style.display = "block";
    btnAlt.style.width = "100%";
    btnAlt.style.padding = "12px";
    btnAlt.style.margin = "6px 0";
    btnAlt.style.borderRadius = "8px";
    btnAlt.style.border = "none";
    btnAlt.style.fontSize = "24px";
    btnAlt.style.cursor = "pointer";
    btnAlt.style.transition = "0.3s";
    btnAlt.style.textAlign = "left";
    btnAlt.style.paddingLeft = "16px";

    btnAlt.addEventListener("click", () => {
      const isCorrect = i === q.answer;

      // bloqueia múltiplos cliques
      optionsDiv.querySelectorAll("button").forEach(b => b.disabled = true);

      if (isCorrect) {
        try { somAcerto?.cloneNode().play(); } catch(e){}
        btnAlt.style.backgroundColor = "#4CAF50";
        btnAlt.style.color = "#fff";
        score++;
        feedbackP.className = "correct";
        feedbackP.textContent = "✔ Correto!";
        btnNext.style.display = "inline-block"; // libera Próxima/Finalizar
      } else {
        try { somErro?.cloneNode().play(); } catch(e){}
        btnAlt.style.backgroundColor = "#F44336";
        btnAlt.style.color = "#fff";

        // Feedback curto abaixo da questão
        feedbackP.className = "incorrect";
        

        // Destaca a correta
        optionsDiv.querySelectorAll("button").forEach((btn, j) => {
          if (j === q.answer) {
            btn.style.backgroundColor = "#4CAF50";
            btn.style.color = "#fff";
          }
        });

        // Abre modal de explicação (full-screen)
        abrirExplicacao(q.explicacao || "Esta questão ainda não possui explicação.");
        // o botão Próxima só reaparece quando fechar o modal
      }

      // compat com um possível botão fixo existente no HTML
      const btnNextFixo = document.getElementById("btn-next-fixo");
      if (btnNextFixo) btnNextFixo.style.display = "inline-block";
    });

    optionsDiv.appendChild(btnAlt);
  });

  qDiv.appendChild(optionsDiv);
  qDiv.appendChild(btnNext);
  container.appendChild(qDiv);

  const motivacao = document.createElement("p");
  motivacao.textContent = "💡 Dica: Se errar, leia a questão completa e memorize a alternativa correta.";
  motivacao.style.marginTop = "15px";
  motivacao.style.fontStyle = "italic";
  motivacao.style.color = "#555";
  qDiv.appendChild(motivacao);

  updateProgress();
}

// =========================
// Barra de progresso
// =========================
function updateProgress() {
  const progress = (currentQuestion / questions.length) * 100;
  const bar = document.getElementById("progress-bar");
  if (bar) bar.style.width = `${progress}%`;
}

// =========================
// Persistência local
// =========================
function salvarDesempenho(prova, acertos) {
  const email = window.currentUser?.email;
  if (!email) return;

  const desempenho = JSON.parse(localStorage.getItem("desempenho") || "{}");
  if (!desempenho[email]) desempenho[email] = [];

  desempenho[email].push({
    prova,
    acertos,
    data: new Date().toLocaleString("pt-BR")
  });

  localStorage.setItem("desempenho", JSON.stringify(desempenho));
}

// =========================
// Resultado final
// =========================
function showResult() {
  // Esconde o quiz e exibe o resultado
  const quizC = document.getElementById("quiz-container");
  const resultC = document.getElementById("result-container");
  if (quizC) quizC.classList.add("hidden");
  if (resultC) resultC.classList.remove("hidden");

  const totalQuestoes = questions.length;
  const porcentagem = Math.round((score / totalQuestoes) * 100);
  const nomeProva = localStorage.getItem("provaAtual") || "Prova Desconhecida";

  const scoreEl = document.getElementById("score");
  if (scoreEl) scoreEl.textContent = `Você acertou ${score} de ${totalQuestoes} questões (${porcentagem}%)`;

  const msg = document.getElementById("message");
  if (msg) {
    if (score < 21) {
      msg.textContent = "❌ Atenção! Tente de novo! Precisa melhorar seu resultado";
      msg.style.color = "#d32f2f";
    } else if (score <= 27) {
      msg.textContent = "⚠️ Está razoável! Você está quase lá! Dá pra melhorar!";
      msg.style.color = "#1976d2";
    } else {
      msg.textContent = "✅ Parabéns! Excelente desempenho! Continue assim em todos os simulados!";
      msg.style.color = "#388e3c";
    }
    msg.style.fontWeight = "bold";
  }

  // Dica visual
  const dica = document.createElement("div");
  dica.style.backgroundColor = "#fff8dc";
  dica.style.borderLeft = "6px solid #ffa500";
  dica.style.padding = "15px";
  dica.style.marginTop = "20px";
  dica.style.fontSize = "16px";
  dica.style.maxWidth = "600px";
  dica.style.marginLeft = "auto";
  dica.style.marginRight = "auto";
  dica.innerHTML = `
    <div style="padding:10px;">
      <p><strong style="font-size:18px;">🔍 Dica Importante:</strong></p>
      <p>
        Evite alternativas que contenham palavras como
        <span style="color:red;font-weight:bold;">
          bastante, sempre, apenas, somente, qualquer, nunca, exclusivamente, bruscamente, apreensão
        </span>.<br>
        Essas palavras absolutas geralmente são <u>armadilhas</u>. Fique atento!
      </p>
      <hr style="margin:15px 0;border-top:1px dashed #ffa500;">
      <p><strong>🧠 Outra Dica:</strong> Ler as alternativas com atenção pode evitar muitas pegadinhas.</p>
      <p><strong>Exemplos:</strong></p>
      <p>- Se a questão pede <em>"Marque a alternativa incorreta"</em>, leia com calma para não inverter.</p>
      <p>- Se diz <em>"Todas estão corretas"</em>, avalie se realmente todas estão coerentes.</p>
      <p>- Se a última palavra for <em>"exceto:"</em>, procure a alternativa incorreta.</p>
      <p style="color:red;font-weight:bold;">⚠️ Essas pegadinhas são comuns em provas de trânsito!</p>
    </div>
  `;
  if (resultC) resultC.appendChild(dica);

  // Salva local
  salvarDesempenho(nomeProva, score);

  // Envia Firestore (monitoramento)
  if (window.currentUser?.email) {
    registrarAcessoFirestore(
      window.currentUser.nome || "",
      window.currentUser.email,
      "Finalizou simulado",
      nomeProva,
      score,
      totalQuestoes
    );
  } else {
    console.warn("⚠️ Usuário sem email. Registro não enviado.");
  }
}

// =========================
// Firestore - registro
// =========================
function registrarAcessoFirestore(nome, email, acao, prova, acertos, totalQuestoes) {
  const data = new Date();
  const dataFormatada = data.toLocaleString("pt-BR");
  const porcentagem = Math.round((acertos / totalQuestoes) * 100);

  if (!firebase?.firestore) {
    console.error("❌ Firestore não está disponível.");
    return;
  }

  firebase.firestore().collection("acessos").add({
    email: email || "sem@email.com",
    acao: acao || "Finalizou simulado",
    prova: prova || "Prova não informada",
    acertos: acertos || 0,
    totalQuestoes: totalQuestoes || 0,
    porcentagem,
    data: dataFormatada
  })
  .then(() => console.log("✅ Registro enviado para a coleção 'acessos'"))
  .catch((err) => console.error("❌ Erro ao enviar para Firestore:", err));
}

// =========================
// Boot
// =========================
showQuestion();

// ====== MODAL EXPLICAÇÃO — rebuild + abrir/fechar (VERSÃO ÚNICA) ======
(function(){
  function buildModalNovo(){
    const novo = document.createElement('div');
    novo.id = 'modalExplicacao';
    novo.className = 'lgm-modal';
    novo.innerHTML = `
      <div class="lgm-backdrop"></div>
      <div class="lgm-box" role="dialog" aria-modal="true" aria-labelledby="lgmTitle">
        <button class="lgm-close" data-close aria-label="Fechar">&times;</button>
        <div class="lgm-head">
          <div class="lgm-ico">❌</div>
          <h2 id="lgmTitle">Você errou!</h2>
          <p class="lgm-sub">Veja a explicação</p>
        </div>
        <div id="textoExplicacao" class="lgm-body"></div>
        <div class="lgm-foot">
          <button id="lgmOk" class="lgm-btn" data-close>Fechar</button>
        </div>
      </div>`;
    return novo;
  }

  function ensureModalLimpo(){
    const antigo = document.getElementById('modalExplicacao');
    const novo = buildModalNovo();
    if (antigo) {
      antigo.replaceWith(novo); // limpa legado
    } else {
      document.body.appendChild(novo);
    }
  }

  // ABRIR (centralizado + blur + trava scroll)
  window.abrirExplicacao = function(texto){
    ensureModalLimpo();
    const modal = document.getElementById('modalExplicacao');
    const msg   = document.getElementById('textoExplicacao');

    // só a explicação no corpo (sem repetir título)
    const clean = (texto || '').replace(/você errou!? ?veja a explicação:?/i,'').trim();
    msg.innerHTML = `<p style="margin:0 0 8px">${clean}</p>`;

    modal.classList.add('is-open');
    document.body.classList.add('lgm-lock');

    const proxima = document.querySelector('.auth-btn');
    if (proxima) proxima.style.display = 'none';
  };

  // FECHAR (desfaz blur e volta Próxima/Finalizar)
  window.fecharExplicacao = function(){
    const modal = document.getElementById('modalExplicacao');
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.classList.remove('lgm-lock');

    const proxima = document.querySelector('.auth-btn');
    if (proxima) proxima.style.display = 'inline-block';
  };

  // Delegação: fecha no X, no botão e no backdrop
  document.addEventListener('click', (e)=>{
    const modal = document.getElementById('modalExplicacao');
    if (!modal || !modal.classList.contains('is-open')) return;
    if (e.target.classList.contains('lgm-backdrop') || e.target.closest('#modalExplicacao [data-close]')) {
      fecharExplicacao();
    }
  });

  // ESC fecha
  document.addEventListener('keydown', (e)=>{
    const modal = document.getElementById('modalExplicacao');
    if (!modal || !modal.classList.contains('is-open')) return;
    if (e.key === 'Escape') fecharExplicacao();
  });

  // compat com nome antigo
  window.mostrarExplicacao = (t)=> abrirExplicacao(t);

  // helper pra testar
  window.__testExplicacao = ()=> abrirExplicacao('Teste: modal centralizado com fundo desfocado.');
})();