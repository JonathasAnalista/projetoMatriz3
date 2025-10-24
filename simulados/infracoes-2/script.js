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
    "question": "Dirigir segurando ou manuseando telefone celular configura infração:",
    "options": ["Grave.", "Média.", "Leve.", "Gravíssima."],
    "answer": 3,
    "explicacao": "Conduzir segurando/manuseando celular é gravíssima (7 pontos e multa). Não é autossuspensiva por si só, mas pode levar à suspensão por somatório de pontos."
  },
  {
    "question": "Um condutor trafega a 110 km/h em rodovia de pista simples cujo limite geral para automóvel é 100 km/h. A conduta caracteriza:",
    "options": ["Média/Multa.", "Leve/Advertência por escrito.", "Gravíssima/Advertência por escrito.", "Grave/Multa."],
    "answer": 0,
    "explicacao": "Exceder em até 20% (de 100 para 110 km/h) é infração de natureza média, com multa."
  },
  {
    "question": "Será obrigatória a frequência em curso de reciclagem quando o condutor:",
    "options": ["Atingir 19 pontos na CNH.", "Tiver suspenso o direito de dirigir.", "Tiver o veículo retido.", "Atingir 20 pontos e tiver cometido apenas uma gravíssima."],
    "answer": 1,
    "explicacao": "A reciclagem é imposta, entre outros casos, quando há suspensão do direito de dirigir."
  },
  {
    "question": "Constitui infração GRAVE:",
    "options": [
      "Transitar em marcha à ré, salvo pequenas manobras.",
      "Ultrapassar pela contramão sobre faixa de pedestres.",
      "Deixar de dar passagem pela esquerda quando solicitado.",
      "Conduzir veículo sem manter luzes acesas (situação genérica)."
    ],
    "answer": 0,
    "explicacao": "Transitar em marcha à ré, salvo pequenas manobras com segurança, é tipificado como infração grave."
  },
  {
    "question": "É infração GRAVÍSSIMA ultrapassar:",
    "options": [
      "Cortejos e formações militares regularmente escoltados.",
      "Pela direita veículo coletivo/escolar parado para embarque ou desembarque.",
      "Veículos parados no semáforo.",
      "Veículos em fila no mesmo sentido, em congestionamento."
    ],
    "answer": 1,
    "explicacao": "Ultrapassar pela direita ônibus/escolar parado expõe pedestres e usuários, sendo gravíssima."
  },
  {
    "question": "São penalidades previstas no CTB, entre outras:",
    "options": [
      "Multa, apreensão e recolhimento obrigatório da CNH em qualquer caso.",
      "Advertência por escrito, multa e suspensão do direito de dirigir.",
      "Advertência por escrito, multa e remoção do veículo sempre cumulativas.",
      "Advertência por excesso de carga e recolhimento da carga."
    ],
    "answer": 1,
    "explicacao": "O CTB prevê penalidades como advertência por escrito, multa, suspensão do direito de dirigir, cassação, entre outras."
  },
  {
    "question": "Desobedecer a sinalização de trânsito NÃO configura infração quando:",
    "options": [
      "O veículo for de socorro em qualquer situação.",
      "Estiver prestando atendimento emergencial sem dispositivos acionados.",
      "Houver ordem expressa, em sentido diverso, por agente da autoridade de trânsito.",
      "Não houver agentes nem sinalização no local."
    ],
    "answer": 2,
    "explicacao": "A ordem do agente prevalece sobre a sinalização; cumprir a ordem não é infração."
  },
  {
    "question": "Ultrapassar pela contramão, em locais proibidos como curvas, aclives ou declives, caracteriza infração gravíssima. Nesse caso, qual é a penalidade prevista pelo Código de Trânsito Brasileiro?",
    "options": [
      "Multa",
      "Multa e retenção do veículo",
      "Retenção do veículo e suspensão da CNH",
      "Multa e suspensão da CNH"
    ],
    "answer": 3,
    "explicacao": "Ultrapassar pela contramão em locais proibidos (curvas, aclives, declives) é infração gravíssima conforme o CTB. A penalidade prevista é multa e suspensão do direito de dirigir. Não há retenção obrigatória do veículo, mas o condutor perde o direito de dirigir temporariamente além da multa aplicada."
  },
  {
    "question": "Constitui infração GRAVE, EXCETO:",
    "options": [
      "Fazer ou permitir reparo de veículo na pista de rolamento.",
      "Transitar na contramão em via de sentido único.",
      "Efetuar conversão em local proibido.",
      "Seguir de perto veículos de urgência com prioridade de passagem."
    ],
    "answer": 1,
    "explicacao": "Transitar na contramão de via de sentido único é gravíssima; as demais condutas listadas são tipicamente graves."
  },
  {
    "question": "Não haverá recolhimento do CRLV quando:",
    "options": [
      "Houver suspeita sobre a autenticidade do documento.",
      "Não for promovida a baixa de veículo irrecuperável/desmontado.",
      "O licenciamento anual estiver vencido.",
      "O veículo for retido e a irregularidade sanada no local."
    ],
    "answer": 3,
    "explicacao": "Sanado o motivo da retenção no local, não se recolhe o CRLV."
  },
  {
    "question": "Aplicada a penalidade, é expedida ao infrator:",
    "options": ["Intimação.", "Citação.", "Notificação.", "Extrato de multa."],
    "answer": 2,
    "explicacao": "A notificação formaliza a penalidade e informa prazos e meios de defesa/recursos."
  },
  {
    "question": "Conduzir motocicleta, motoneta ou ciclomotor sem capacete com viseira (ou óculos de proteção) é infração:",
    "options": [
      "Gravíssima; multa e suspensão do direito de dirigir.",
      "Grave; multa.",
      "Média; multa.",
      "Gravíssima; apenas recolhimento da CNH."
    ],
    "answer": 0,
    "explicacao": "Além da multa gravíssima, é infração autossuspensiva e podem ocorrer outras medidas."
  },
  {
    "question": "Infrator contumaz é aquele que:",
    "options": ["Se reabilitou após reciclagem.", "Nunca cometeu infração.", "Comete infrações de forma reiterada.", "Somente comete gravíssimas."],
    "answer": 2,
    "explicacao": "Reincidência e habitualidade no cometimento de infrações caracterizam o infrator contumaz."
  },
  {
    "question": "Sobre ADVERTÊNCIA POR ESCRITO, é INCORRETO afirmar:",
    "options": [
      "Pode ser aplicada mesmo que exista outra infração diferente no prontuário.",
      "Não depende da gravidade da infração.",
      "É medida educativa que substitui a multa.",
      "Pode ser aplicada para infrações de natureza leve ou média."
    ],
    "answer": 1,
    "explicacao": "A conversão em advertência depende da gravidade (somente LEVE/MÉDIA) e da inexistência de reincidência na MESMA infração em 12 meses."
  },
  {
    "question": "Exceder a velocidade máxima em MAIS de 50% caracteriza infração gravíssima:",
    "options": [
      "Sem agravante, apenas multa.",
      "Sem agravante, cabendo advertência por escrito.",
      "Com multiplicador x4, suspensão e recolhimento da CNH.",
      "Com multiplicador x3, suspensão e recolhimento da CNH."
    ],
    "answer": 3,
    "explicacao": "Ultrapassar o limite em mais de 50% é gravíssima com fator multiplicador x3 e é autossuspensiva."
  },
  {
    "question": "É INCORRETO afirmar sobre penalidades:",
    "options": [
      "Infrações gravíssimas geram 7 pontos.",
      "A suspensão só ocorre ao atingir 40 pontos em 12 meses.",
      "Na reincidência específica, a suspensão pode ir de 8 a 24 meses.",
      "Infrações graves geram 5 pontos."
    ],
    "answer": 1,
    "explicacao": "A suspensão também pode ocorrer com 20 ou 30 pontos, conforme a quantidade de gravíssimas (ou por infrações autossuspensivas)."
  },
  {
    "question": "Dirigir com a CNH ou Permissão SUSPENSA ou CASSADA é infração:",
    "options": ["Leve.", "Média.", "Grave.", "Gravíssima."],
    "answer": 3,
    "explicacao": "Conduzir com direito de dirigir suspenso/cassado é gravíssima e sujeita a medidas administrativas severas."
  },
  {
    "question": "Motocicleta a 100 km/h em VIA DE TRÂNSITO RÁPIDO URBANA não sinalizada configura:",
    "options": ["Condução dentro do limite.", "Infração média.", "Infração grave.", "Infração gravíssima."],
    "answer": 2,
    "explicacao": "O limite geral urbano para via de trânsito rápido é 80 km/h; 100 km/h é excesso entre 20% e 50%: infração grave."
  },
  {
    "question": "Constitui infração praticada por pedestre, EXCETO:",
    "options": [
      "Transitar pela pista de rolamento.",
      "Utilizar passarela/faixa para travessia.",
      "Cruzar pista em viadutos, pontes ou túneis.",
      "Promover aglomerações na via sem autorização."
    ],
    "answer": 1,
    "explicacao": "Usar passarela/faixa é o comportamento correto; as demais condutas podem ser infrações do pedestre."
  },
  {
    "question": "Avançar o sinal vermelho do semáforo é infração:",
    "options": ["Leve (advertência).", "Média (advertência).", "Grave (multa).", "Gravíssima (multa)."],
    "answer": 3,
    "explicacao": "Avançar o sinal é gravíssima, pela alta probabilidade de colisões transversais/atropelamentos."
  },
  {
    "question": "Transitar com excesso de carga sujeita o veículo a:",
    "options": [
      "Multa gravíssima e retenção.",
      "Multa média e retenção.",
      "Multa média e retenção até transbordo da carga excedente.",
      "Multa gravíssima, suspensão e recolhimento da CNH."
    ],
    "answer": 2,
    "explicacao": "Além da multa, a medida administrativa é a retenção até o transbordo, para adequação ao limite."
  },
  {
    "question": "Condutor com HABILITAÇÃO CASSADA poderá reabilitar-se:",
    "options": ["Imediatamente.", "Após 2 anos.", "Após 6 meses.", "Após 4 anos."],
    "answer": 1,
    "explicacao": "A reabilitação após cassação ocorre após 2 anos, com reinício do processo de habilitação."
  },
  {
    "question": "Conduzir bicicleta em passeio (calçada) onde NÃO seja permitida sua circulação é infração:",
    "options": ["Leve.", "Média.", "Grave.", "Gravíssima."],
    "answer": 1,
    "explicacao": "A circulação de bicicleta em local vedado configura infração média; a medida administrativa usual é a remoção do ciclo."
  },
  {
    "question": "Usar farol do tipo xenônio em desacordo com normas do CONTRAN é infração:",
    "options": ["Leve.", "Média.", "Grave.", "Gravíssima."],
    "answer": 2,
    "explicacao": "Equipamento de iluminação/sinalização em desacordo caracteriza infração grave, com retenção para regularização."
  },
  {
    "question": "Deixar de manter distância de seguimento do veículo à frente configura:",
    "options": [
      "Falta leve convertida em advertência se não houver sinistro.",
      "Infração grave punida com multa.",
      "Apenas falta de cortesia.",
      "Infração média com retenção do veículo."
    ],
    "answer": 1,
    "explicacao": "É infração grave por representar risco típico de colisão traseira."
  },
  {
    "question": "O condutor será multado quando:",
    "options": [
      "Exceder a velocidade máxima da via.",
      "Fizer retorno em local próprio.",
      "Ultrapassar pela esquerda onde permitido.",
      "Usar luz alta em vias sem iluminação pública, sem ofuscar terceiros."
    ],
    "answer": 0,
    "explicacao": "Excesso de velocidade é conduta típica sancionada com multa (com gradação conforme o percentual excedido)."
  },
  {
    "question": "O transbordo do excesso de carga é classificado como:",
    "options": ["Medida administrativa.", "Penalidade.", "Infração.", "Medida educativa."],
    "answer": 0,
    "explicacao": "O transbordo é medida administrativa para restabelecer a segurança e a regularidade do transporte."
  },
  {
    "question": "Quando o condutor atinge 20 pontos em 12 meses, com DUAS OU MAIS infrações gravíssimas, ele sofrerá:",
    "options": ["Retenção da habilitação.", "Cassação do documento de habilitação.", "Suspensão do direito de dirigir.", "Apenas multa."],
    "answer": 2,
    "explicacao": "Com duas ou mais gravíssimas, o teto de pontos é 20 e impõe suspensão do direito de dirigir."
  },
  {
    "question": "Estacionar junto ou sobre hidrante devidamente identificado configura infração:",
    "options": ["Gravíssima; remoção do veículo.", "Grave; retenção do veículo.", "Média; remoção do veículo.", "Leve; apenas multa."],
    "answer": 2,
    "explicacao": "O estacionamento junto/sobre hidrante identificado é infração média, com remoção para garantir acesso emergencial."
  },
  {
    "question": "Deixar o veículo imobilizado na via por FALTA DE COMBUSTÍVEL é infração:",
    "options": ["Gravíssima; retenção.", "Grave; remoção.", "Média; remoção.", "Leve; retenção."],
    "answer": 2,
    "explicacao": "A falta de combustível que imobiliza o veículo na via caracteriza infração média, com remoção como medida administrativa."
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