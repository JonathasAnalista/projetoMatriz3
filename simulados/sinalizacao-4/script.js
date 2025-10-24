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
    
    "question": "Os sinais, além de serem inscritos em placas e pintados no pavimento das vias públicas, podem ainda ser:",
    "options": [
      "Luminosos, sonoros e logotipos.",
      "Luminosos, sonoros e por gestos.",
      "Sonoros, por gestos e painéis decorativos.",
      "Marcas, gestos e sonoros."
    ],
    "answer": 1,
    "explicacao": "Além de placas e pinturas no solo, sinais podem ser luminosos, sonoros e por gestos."
  },
  {
    "question": "Assinale a alternativa correta:",
    "options": [
      "As indicações do semáforo prevalecem sobre as ordens do agente de trânsito.",
      "Os demais sinais prevalecem sobre as indicações do semáforo.",
      "As ordens do agente de trânsito prevalecem sobre as normas de circulação e outros sinais.",
      "As indicações dos sinais prevalecem sobre as ordens do agente de trânsito."
    ],
    "answer": 2,
    "explicacao": "Sempre prevalece a ordem direta do agente de trânsito sobre semáforos ou sinais."
  },
  {
    "image": "quest3.png",
    "question": "A ordem do Agente da Autoridade de Trânsito ilustrada na imagem, significa:",
    "options": [
      "Ordem de seguir.",
      "Ordem de parada obrigatória.",
      "Ordem de converter à esquerda.",
      "Ordem de diminuição da velocidade."
    ],
    "answer": 3,
    "explicacao": "O gesto ilustrado representa ordem de diminuir a velocidade."
  },
  {
    "question": "A forma padrão do sinal de regulamentação é:",
    "options": ["Retangular.", "Circular.", "Quadrada.", "Hexagonal."],
    "answer": 1,
    "explicacao": "Placas de regulamentação têm formato circular, exceto a de 'Parada Obrigatória' (octogonal)."
  },
  {
    "question": "As luzes de cores preestabelecidas são utilizadas para controle do fluxo de:",
    "options": [
      "Somente veículos de tração animal.",
      "Somente veículos de propulsão humana.",
      "Estacionamento de veículos.",
      "Pedestres e/ou veículos."
    ],
    "answer": 3,
    "explicacao": "Semáforos controlam o fluxo de veículos e também de pedestres."
  },
  {
    "question": "A linha que proíbe a ultrapassagem nos dois sentidos denomina-se:",
    "options": [
      "Simples seccionada.",
      "Dupla seccionada.",
      "Contínua, simples ou dupla.",
      "Dupla contínua/seccionada."
    ],
    "answer": 2,
    "explicacao": "A linha contínua, simples ou dupla, proíbe ultrapassagem em ambos os sentidos."
  },
  {
    "question": "A mensagem “Respeite a Sinalização” está escrita nas placas:",
    "options": [
      "De advertência.",
      "De regulamentação.",
      "De serviços auxiliares.",
      "Educativas."
    ],
    "answer": 3,
    "explicacao": "Placas educativas orientam o condutor, como 'Respeite a Sinalização'."
  },
  {
    "question": "De acordo com os sinais sonoros abaixo relacionados, marque a resposta que corresponda a determinação do agente em parar o veículo:",
    "options": ["Um silvo breve.", "Três silvos breves.", "Dois silvos breves.", "Um silvo longo."],
    "answer": 2,
    "explicacao": "Dois silvos breves significam ordem de parar o veículo."
  },
  {
    "question": "A sinalização de regulamentação tem por finalidade:",
    "options": [
      "Informar aos usuários as condições, proibições, obrigações ou restrições no uso das vias.",
      "Alertar aos usuários da via sobre condições potencialmente perigosas, indicando sua natureza.",
      "Identificar as vias, os destinos e os locais de interesse, percursos, os destinos, as distâncias e os serviços auxiliares.",
      "Educar o usuário da via."
    ],
    "answer": 0,
    "explicacao": "Placas de regulamentação estabelecem obrigações, restrições e proibições."
  },
  {
    "question": "A placa de forma triangular é característica da sinalização de:",
    "options": [
      "Parada obrigatória.",
      "Dê a preferência.",
      "Proibido estacionar.",
      "Sentido proibido."
    ],
    "answer": 1,
    "explicacao": "A placa triangular (invertida) indica 'Dê a preferência'."
  },
  {
    "image": "quest11.png",
    "question": "A placa de A-4b adverte a presença de:",
    "options": [
      "Curva acentuada em “S\" à esquerda.",
      "Pista sinuosa à direita.",
      "Curva acentuada à direita.",
      "Curva acentuada em “S\" à direita."
    ],
    "answer": 3,
    "explicacao": "A-4b sinaliza curva acentuada em S à direita."
  },
  {
    "image": "quest12.png",
    "question": "A placa R-10 regulamenta:",
    "options": [
      "Proibido trânsito de veículo de tração animal.",
      "Proibido trânsito de veículos automotores.",
      "Permitido o trânsito, somente de pedestres.",
      "Proibido ultrapassar."
    ],
    "answer": 1,
    "explicacao": "R-10 indica proibição de trânsito de veículos automotores."
  },
  {
    "image": "quest13.png",
    "question": "A seta indicativa branca no pavimento, ilustrada na imagem, significa:",
    "options": [
      "Mudança obrigatória de faixa.",
      "Siga em frente.",
      "Passagem obrigatória.",
      "Vire à esquerda."
    ],
    "answer": 0,
    "explicacao": "A seta branca indica mudança obrigatória de faixa."
  },
  {
    "question": "A marcação de áreas de estacionamento que indica ao condutor que ali é permitido estacionar é feita na cor:",
    "options": ["Amarela.", "Branca.", "Azul.", "Verde."],
    "answer": 1,
    "explicacao": "Sinalização horizontal de estacionamento permitido é feita na cor branca."
  },
  {
    "image": "quest15.png",
    "question": "A placa SAU-26, “Ponto de parada”, indica:",
    "options": [
      "Estacionamento de ônibus.",
      "Parada de veículos de autoridades.",
      "Carga e descarga de mercadorias.",
      "Parada de veículos de transporte coletivo ou individual de passageiros."
    ],
    "answer": 3,
    "explicacao": "SAU-26 indica parada de veículos de transporte coletivo ou individual de passageiros."
  },
  {
    "image": "quest16.png",
    "question": "A placa R-6b, na imagem, regulamenta que:",
    "options": [
      "Naquele local o estacionamento é livremente permitido, inclusive para Carga e Descarga.",
      "Naquele local a Carga e Descarga são permitidas somente no horário estabelecido.",
      "Naquele local não poderá haver parada de veículos para embarque ou desembarque de passageiros.",
      "Naquele local é permitido realizar Carga e Descarga, ainda que fora do horário estabelecido."
    ],
    "answer": 1,
    "explicacao": "R-6b regulamenta que Carga e Descarga só é permitida em horário estabelecido."
  },
  {
    "image": "quest17.png",
    "question": "A placa A-26b adverte que a via possui:",
    "options": ["Sentido duplo.", "Sentido obrigatório.", "Sentido único.", "Nenhuma das respostas acima."],
    "answer": 0,
    "explicacao": "A-26b sinaliza trânsito em sentido duplo."
  },
  {
    "image": "quest18.png",
    "question": "A placa TIT-02 indica:",
    "options": ["Festas populares.", "Rodeio.", "Teatro.", "Convenções."],
    "answer": 2,
    "explicacao": "TIT-02 é símbolo de teatro."
  },
  {
    "question": "Placas educativas (mensagens como “USE O CINTO”) têm padronização própria. Qual é o formato e esquema de cores predominantes dessas placas?",
    "options": ["Vermelha e branca, circular", "Branca e preta, retangular", "Amarela e preta, quadrada", "Verde e azul, quadrada"],
    "answer": 1,
    "explicacao": "Placas educativas são retangulares com fundo branco e legendas pretas. Circular é típico de regulamentação; amarelo/preto sugere advertência; verde/azul são de indicação."
  },
  {
    "image": "quest20.png",
    "question": "A placa R-13 regulamenta que neste trecho da via é:",
    "options": [
      "Proibido trânsito de tratores e máquinas de obras.",
      "Proibido trânsito de tratores.",
      "Proibido trânsito de carro de mão.",
      "Proibido equipamentos agrícolas."
    ],
    "answer": 0,
    "explicacao": "R-13 proíbe trânsito de tratores e máquinas de obras."
  },
  {
    "question": "A sinalização horizontal é classificada em:",
    "options": [
      "Marcas transversais e semáforo.",
      "Inscrições no pavimento e placas de regulamentação.",
      "Marcas longitudinais, transversais, canalização, delimitação e controle de estacionamento e/ou parada e inscrições no pavimento.",
      "Marcas longitudinais e placas de advertência."
    ],
    "answer": 2,
    "explicacao": "Sinalização horizontal inclui marcas longitudinais, transversais, canalização, delimitação e inscrições no pavimento."
  },
  {
    "image": "quest22.png",
    "question": "A placa A-25 indica:",
    "options": [
      "Sentido duplo à frente.",
      "Início de mão dupla.",
      "Mão dupla adiante.",
      "Sentido duplo adiante."
    ],
    "answer": 2,
    "explicacao": "A-25 significa mão dupla adiante."
  },
  {
    "image": "quest23.png",
    "question": "A placa TIT-09 indica:",
    "options": ["Feira típica.", "Exposição agropecuária.", "Rodeio.", "Pavilhão de feiras e exposições."],
    "answer": 1,
    "explicacao": "TIT-09 representa exposição agropecuária."
  },
  {
    "question": "É infração de trânsito a desobediência a qualquer dos sinais inscritos nas placas de:",
    "options": ["Regulamentação.", "Indicação.", "Educativas.", "Advertência."],
    "answer": 0,
    "explicacao": "Somente placas de regulamentação têm caráter obrigatório; descumprir é infração."
  },
  {
    "image": "quest25.png",
    "question": "A placa R-8a regulamenta:",
    "options": [
      "Mudança obrigatória de faixa ou pista de trânsito da esquerda para direita.",
      "Mudança obrigatória de faixa ou pista de trânsito da direita para esquerda.",
      "Proibido mudar de faixa ou pista de trânsito da esquerda para direita.",
      "Proibido mudar de faixa ou pista de trânsito da direita para esquerda."
    ],
    "answer": 2,
    "explicacao": "R-8a indica mudança obrigatória da direita para esquerda."
  },
  {
    "question": "As marcas utilizadas para reduzir pontos de conflito entre fluxos de tráfego em uma via, são chamadas de:",
    "options": ["Marcas de canalização.", "Áreas neutras.", "Linhas de bordo.", "Linhas de retenção."],
    "answer": 0,
    "explicacao": "Marcas de canalização organizam fluxos para reduzir conflitos."
  },
  {
    "image": "quest27.png",
    "question": "A placa SAU-10 indica a presença de:",
    "options": ["Farmácia.", "Pronto Socorro.", "Hospital.", "Clínica Médica."],
    "answer": 1,
    "explicacao": "SAU-10 sinaliza pronto socorro."
  },
  {
    "image": "quest28.png",
    "question": "Identifique o significado do gesto do condutor expresso no desenho:",
    "options": [
      "Trânsito impedido em todas as direções.",
      "Retorno à esquerda.",
      "Diminuir a marcha ou parar o veículo.",
      "Virar à direita."
    ],
    "answer": 3,
    "explicacao": "O gesto ilustrado corresponde a ordem de diminuir a marcha ou parar."
  },
  {
    "question": "Com exceção das placas “Cruz de Santo André”, “Sentido único” e “Sentido duplo”, as demais placas que têm formato quadrado, fundo na cor amarela e símbolo preto, são placas de:",
    "options": ["Advertência.", "Indicação.", "Regulamentação.", "Sentido obrigatório."],
    "answer": 0,
    "explicacao": "Placas quadradas amarelas com símbolo preto (exceto as exceções) são de advertência."
  },
  {
    "image": "quest30.png",
    "question": "O procedimento correto do condutor de veículo diante da sinalização semafórica na imagem é:",
    "options": [
      "Redobrar a atenção.",
      "Seguir.",
      "Parar o veículo.",
      "Não ultrapassar outro veículo."
    ],
    "answer": 2,
    "explicacao": "O semáforo da imagem indica obrigação de parar."
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