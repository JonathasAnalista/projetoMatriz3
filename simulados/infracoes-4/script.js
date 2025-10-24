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

const questions =[
  {
    "question": "O condutor que for multado por desobedecer a sinalização de parada obrigatória, terá anotado em seu prontuário a pontuação equivalente a:",
    "options": ["Quatro pontos", "Três pontos", "Sete pontos", "Cinco pontos"],
    "answer": 2,
    "explicacao": "Avançar sinal de parada obrigatória é infração gravíssima, que gera 7 pontos na CNH."
  },
  {
    "question": "É motivo para apreensão do veículo, quando o condutor for surpreendido dirigindo:",
    "options": ["Sem usar lentes corretoras", "Com a CNH vencida há mais de 30 dias", "Sob a influência de álcool", "A penalidade de APREENSÃO foi revogada"],
    "answer": 3,
    "explicacao": "A penalidade de apreensão foi revogada. Hoje aplica-se remoção ou retenção em casos específicos."
  },
  {
    "question": "Constitui infração de trânsito, exceto:",
    "options": ["Usar a buzina para apressar o pedestre", "Não dar passagem pela esquerda, quando solicitado", "Transitar em velocidade compatível com a segurança diante de escolas e pedestres", "Conservar o veículo na faixa exclusiva de ônibus"],
    "answer": 2,
    "explicacao": "Adequar a velocidade à segurança não é infração, ao contrário, é exigência do CTB."
  },
  {
    "question": "A notificação da penalidade de multa a pessoal de missões diplomáticas será remetida ao:",
    "options": ["Ministério do Exército", "Ministério da Justiça", "Ministério das Cidades", "Ministério das Relações Exteriores"],
    "answer": 3,
    "explicacao": "Diplomatas têm tratamento diferenciado; suas multas são encaminhadas ao Ministério das Relações Exteriores."
  },
  {
    "question": "O pagamento da multa poderá ser efetuado, até a data do vencimento, com desconto de:",
    "options": ["60%", "80%", "20%", "30%"],
    "answer": 2,
    "explicacao": "Pelo CTB, o condutor que paga a multa até o vencimento tem desconto de 20%."
  },
  {
    "question": "As penalidades aplicadas em razão de crimes cometidos na direção do veículo automotor NÃO são agravadas quando o condutor dirigir:",
    "options": ["Sem placas ou adulteradas", "Sem CNH", "Com CNH vencida há mais de 30 dias", "Com categoria diferente da do veículo"],
    "answer": 2,
    "explicacao": "Conduzir com CNH vencida é infração administrativa, não agrava penas criminais."
  },
  {
    "question": "Transitar pela contramão de direção em vias de duplo sentido, exceto para ultrapassagem, é infração _______, gerando como penalidade _______.",
    "options": ["Gravíssima; multa (três vezes)", "Gravíssima; multa", "Grave; multa (cinco vezes)", "Grave; multa"],
    "answer": 3,
    "explicacao": "Rodar pela contramão sem motivo é infração grave, com penalidade de multa simples."
  },
  {
    "question": "As penalidades atribuídas ao condutor que dirige sob influência de álcool são:",
    "options": ["Multa (x5) e suspensão", "Multa (x10) e cassação", "Multa (x10) e suspensão", "Multa (x5) e cassação"],
    "answer": 2,
    "explicacao": "Dirigir alcoolizado gera multa multiplicada por 10 e suspensão do direito de dirigir."
  },
  {
    "question": "Deixar de usar o cinto de segurança é infração ______, gerando penalidade de ______.",
    "options": ["Grave; multa", "Gravíssima; multa (x3)", "Gravíssima; multa (x5)", "Gravíssima; multa"],
    "answer": 0,
    "explicacao": "Não usar o cinto é infração grave, com multa de 195,23 e 5 pontos."
  },
  {
    "question": "Dirigir sem atenção e os cuidados indispensáveis à segurança do trânsito é punível com:",
    "options": ["Multa e apreensão da CNH", "Multa", "Advertência por escrito", "Multa e apreensão do veículo"],
    "answer": 1,
    "explicacao": "A chamada 'falta de atenção' é infração média, punida apenas com multa."
  },
  {
    "question": "Qual corresponde a infração de natureza leve?",
    "options": ["Veículo não licenciado", "Dirigir sem atenção", "Transportar carga arrastando", "Placa falsificada"],
    "answer": 1,
    "explicacao": "Das listadas, dirigir sem atenção é infração leve. As demais são mais graves."
  },
  {
    "question": "Atirar objetos ou arremessar água/detritos sobre pedestres ou veículos constitui infração de natureza:",
    "options": ["Média", "Leve", "Grave", "Gravíssima"],
    "answer": 0,
    "explicacao": "Esse comportamento é infração média, por expor pedestres e outros veículos a risco."
  },
  {
    "question": "Disputar corrida é infração gravíssima, gerando como penalidade:",
    "options": ["Multa e cassação da CNH", "Multa (x5), recolhimento da CNH e remoção do veículo", "Multa (x10) e suspensão", "Multa (x5) e retenção do veículo"],
    "answer": 2,
    "explicacao": "Rachas são infração gravíssima com multa multiplicada por 10 e suspensão da CNH."
  },
  {
    "question": "Usar a buzina entre 22h e 6h nas áreas urbanas é punível com:",
    "options": ["Multa e remoção", "Multa e retenção", "Multa e remoção", "Multa"],
    "answer": 3,
    "explicacao": "A buzina à noite só pode ser usada em situações emergenciais; fora disso, é infração média com multa."
  },
  {
    "question": "Em via rural não pavimentada, sem sinalização, um condutor foi flagrado a 100 km/h. A infração é:",
    "options": ["Grave", "Média", "Leve", "Gravíssima (x3)"],
    "answer": 3,
    "explicacao": "O limite nessas vias é 60 km/h. Exceder em mais de 50% gera infração gravíssima multiplicada por 3."
  }
  ,
  {
    "question": "A distância que se deve guardar ao estacionar o veículo antes ou depois da esquina é:",
    "options": ["3 metros", "5 metros do alinhamento da via transversal", "Menos de 3 metros da via transversal", "Entre 3 e 10 metros da via transversal"],
    "answer": 1,
    "explicacao": "O CTB exige manter 5 metros de distância da esquina para não atrapalhar a visibilidade e a fluidez do trânsito."
  },
  {
    "question": "Na infração 'Estacionar o veículo afastado da guia da calçada de cinquenta centímetros a um metro' são computados os seguintes pontos:",
    "options": ["7 pontos", "4 pontos", "5 pontos", "3 pontos"],
    "answer": 1,
    "explicacao": "Estacionar a mais de 50 cm da guia é infração média, gerando 4 pontos."
  },
  {
    "question": "Parar o veículo na área de cruzamento de vias, prejudicando a circulação de veículos e pedestres, nos viadutos, pontes e túneis e na contramão de direção é infração:",
    "options": ["Grave", "Gravíssima", "Média", "Leve"],
    "answer": 0,
    "explicacao": "Parar nesses locais compromete a fluidez do trânsito e é considerado infração grave."
  },
  {
    "question": "A pena de detenção atribuída ao condutor que pratica homicídio culposo na direção do veículo automotor é de:",
    "options": ["2 a 4 anos", "6 meses a 1 ano", "6 meses a 2 anos", "1 a 4 anos"],
    "answer": 0,
    "explicacao": "O CTB prevê detenção de 2 a 4 anos para homicídio culposo no trânsito."
  },
  {
    "question": "Quando o condutor transitar ao lado de outro veículo, interrompendo ou perturbando o trânsito, será punido com:",
    "options": ["Multa", "Remoção do veículo e multa", "Apreensão do veículo e multa", "Retenção do veículo e multa"],
    "answer": 0,
    "explicacao": "Conduzir ao lado de outro veículo de forma a atrapalhar o trânsito é infração grave, punida com multa."
  },
  {
    "question": "Deixar de guardar distância de segurança lateral e frontal entre o seu veículo e os demais é infração:",
    "options": ["Gravíssima", "Grave", "Média", "Leve"],
    "answer": 1,
    "explicacao": "O condutor deve manter distância segura; descumprir essa regra é infração grave."
  },
  {
    "question": "O condutor que desobedecer às ordens da autoridade de trânsito ou de seus agentes será punido com:",
    "options": ["Advertência escrita", "Multa e advertência", "Multa e apreensão da CNH", "Multa"],
    "answer": 3,
    "explicacao": "Ignorar ordens de autoridade de trânsito ou agente é infração gravíssima, penalidade de multa."
  },
  {
    "question": "As penalidades podem ser impostas:",
    "options": ["Somente ao condutor", "Somente ao proprietário do veículo", "Ao condutor, proprietário, embarcador e transportador", "Ao veículo"],
    "answer": 2,
    "explicacao": "Dependendo da infração, podem ser responsabilizados o condutor, o dono do veículo, o embarcador e o transportador."
  },
  {
    "question": "É infrator contumaz o condutor:",
    "options": ["Defensivo", "Que comete infrações contínua e constantemente", "Seguro", "Difuso"],
    "answer": 1,
    "explicacao": "Infrator contumaz é aquele que repete infrações de forma habitual e contínua."
  },
  {
    "question": "Assinale a infração gravíssima:",
    "options": ["Não dar preferência a pedestre mesmo com sinal verde", "Não dar preferência em interseção com placa 'Dê a preferência'", "Não dar preferência em interseção não sinalizada a veículo em rodovia ou rotatória", "Não dar preferência em interseção não sinalizada a veículo que vier da direita"],
    "answer": 0,
    "explicacao": "O pedestre tem prioridade absoluta; não respeitar sua travessia é infração gravíssima."
  },
  {
    "question": "A remoção do veículo, como medida administrativa, é aplicada quando o condutor:",
    "options": ["Tiver o veículo imobilizado por falta de combustível", "Estacionar na contramão de direção", "Parar o veículo em desacordo com posições estabelecidas", "Deixar de prestar socorro à vítima"],
    "answer": 0,
    "explicacao": "Veículos imobilizados por falta de combustível devem ser removidos para não prejudicar o trânsito."
  },
  {
    "question": "Não é considerado crime de trânsito:",
    "options": ["Lesão corporal culposa", "Homicídio culposo", "Omissão de socorro", "Dirigir em excesso de velocidade"],
    "answer": 3,
    "explicacao": "O excesso de velocidade é infração administrativa, mas não configura crime de trânsito por si só."
  },
  {
    "question": "Transitar com o farol desregulado ou com o facho de luz alta, perturbando a visão de outro condutor, poderá acarretar:",
    "options": ["Multa", "Multa e retenção do veículo", "Multa e apreensão do veículo", "Multa e remoção do veículo"],
    "answer": 1,
    "explicacao": "Nesses casos, aplica-se multa e medida administrativa de retenção do veículo até regularização."
  },
  {
    "question": "É infração gravíssima para o condutor de motocicleta, motoneta ou ciclomotor:",
    "options": ["Conduzir sem segurar o guidom com ambas as mãos", "Transportar criança menor de dez anos ou sem condições de segurança", "Conduzir transportando carga incompatível", "Conduzir rebocando outro veículo"],
    "answer": 1,
    "explicacao": "Transportar criança menor de 10 anos ou sem segurança é infração gravíssima."
  },
  {
    "question": "No auto de infração não é obrigatório constar:",
    "options": ["O tipo de infração", "O local, a data e a hora", "A marca do veículo", "O prontuário do condutor"],
    "answer": 3,
    "explicacao": "O auto deve conter os dados da infração, mas não é obrigatório constar o prontuário do condutor."
  }
]
;


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