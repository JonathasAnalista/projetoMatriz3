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
    "question": "Ao perceber falhas na sua atenção, o condutor defensivo deve agir da seguinte forma:",
    "options": [
      "Beber água e continuar a viagem.",
      "Parar o veículo e procurar descansar.",
      "Aumentar a velocidade para chegar rápido.",
      "Ultrapassar os outros veículos com atenção."
    ],
    "answer": 1,
    "explicacao": "O condutor defensivo deve parar e descansar, evitando seguir cansado ou distraído."
  },
  {
    "question": "Aponte a hipótese de ocorrência de travamento de rodas:",
    "options": [
      "Quando o atrito do sistema de freios com as rodas é menor que o atrito dos pneus com o solo.",
      "Quando um veículo em desaceleração tende a 'sair de traseira' em uma curva.",
      "Quando o atrito do sistema de freios com as rodas é maior que o atrito dos pneus com o solo.",
      "Quando o atrito do sistema de freios com as rodas é igual ao atrito dos pneus com o solo."
    ],
    "answer": 2,
    "explicacao": "O travamento ocorre quando o atrito dos freios é maior que a aderência dos pneus no solo."
  },
  {
    "question": "Após aguardar a abertura do semáforo em um cruzamento, você faz a conversão à direita e encontra um pedestre efetuando a travessia da via. Nessa situação você:",
    "options": [
      "Aguarda o pedestre concluir a travessia.",
      "Buzina para apressar o pedestre.",
      "Pisca os faróis para alertar o pedestre que você vai passar.",
      "Freia bruscamente para dar um susto no pedestre."
    ],
    "answer": 0,
    "explicacao": "O pedestre tem prioridade na travessia; o condutor deve aguardar."
  },
  {
    "question": "Aquaplanagem é:",
    "options": [
      "Perda de estabilidade do veículo.",
      "Derrapagem do veículo em pista seca.",
      "Perda da aderência dos pneus em qualquer tipo de situação.",
      "Perda da aderência dos pneus devido a uma camada fina de água no solo."
    ],
    "answer": 3,
    "explicacao": "Aquaplanagem ocorre quando os pneus perdem contato com o solo por conta da água."
  },
  {
    "question": "Às imprudências cometidas pelo condutor chamamos de ato:",
    "options": ["Consciente.", "Correto.", "Inseguro.", "Seguro."],
    "answer": 2,
    "explicacao": "Imprudências são atos inseguros do condutor."
  },
  {
    "question": "As margens de segurança se alteram dependendo das:",
    "options": [
      "Condições da via.",
      "Ações do condutor.",
      "Condições em que os veículos se encontram.",
      "Todas as afirmativas acima estão corretas."
    ],
    "answer": 3,
    "explicacao": "Margens de segurança variam conforme via, veículo e condutor."
  },
  {
    "question": "Assinale a alternativa correta. Frenagem de emergência é:",
    "options": [
      "Travamento das rodas.",
      "Redução imediata da velocidade do veículo no menor tempo possível.",
      "Redução moderada da velocidade do veículo.",
      "Arrastamento dos pneus, sem deixar marcas no solo."
    ],
    "answer": 1,
    "explicacao": "Frenagem de emergência é a redução mais rápida possível da velocidade."
  },
  {
    "question": "Assinale a alternativa incorreta relacionada ao comportamento do condutor preventivo:",
    "options": [
      "Procura a melhor posição no banco para alcançar todos comandos.",
      "Regula retrovisores para ter maior visibilidade.",
      "Nas manobras, move a cabeça lateralmente para ter maior visibilidade possível.",
      "Ele não se preocupa com o ponto cego do retrovisor."
    ],
    "answer": 3,
    "explicacao": "O condutor preventivo deve sempre considerar os pontos cegos."
  },
  {
    "question": "Assinale a alternativa correta:",
    "options": [
      "A aquaplanagem é a flutuação de veículos em rios e lagos.",
      "Frenagem é o mesmo que travamento das rodas.",
      "Ergonomia é a ciência que estuda a relação entre o homem e a máquina.",
      "Dirigir na defensiva é dirigir com rapidez."
    ],
    "answer": 2,
    "explicacao": "Ergonomia estuda a interação entre pessoas e máquinas."
  },
  {
    "question": "Assinale a alternativa incorreta:",
    "options": [
      "Aderência é a capacidade de atrito do pneu com o solo.",
      "Derrapagem é o deslocamento do veículo de sua trajetória.",
      "Força centrípeta é aquela que puxa o veículo para dentro da curva.",
      "Transferência de massa é a movimentação do corpo dentro do veículo."
    ],
    "answer": 3,
    "explicacao": "Transferência de massa refere-se à distribuição de peso no veículo, não à movimentação do corpo do passageiro."
  },
  {
    "question": "Assinale a alternativa incorreta:",
    "options": [
      "O ato de dirigir é sempre dinâmico, onde as situações modificam-se constantemente.",
      "Automatismo são gestos e ações efetuados pelo condutor de forma inconsciente.",
      "A força centrípeta tende a jogar o veículo para fora da curva.",
      "Automatismos são reflexos adquiridos na prática da direção veicular."
    ],
    "answer": 2,
    "explicacao": "É a força centrífuga que tende a jogar o veículo para fora da curva, não a centrípeta."
  },
  {
    "question": "Estando o condutor na direção do veículo e este se apresentando com os pneus gastos, freios desregulados, luz deficiente, significa exemplo de condição adversa do:",
    "options": ["Condutor.", "Trânsito.", "Equipamento de segurança.", "Veículo."],
    "answer": 3,
    "explicacao": "Pneus, freios e iluminação são condições do veículo."
  },
  {
    "question": "Assinale a alternativa incorreta. O que é Direção Defensiva?",
    "options": [
      "Fazer valer seu direito, exigindo-o.",
      "Realizar uma viagem, sem infrações de trânsito.",
      "Realizar uma viagem sem faltar com a cortesia devida no trânsito.",
      "É uma maneira de encarar a tarefa de dirigir para reduzir a possibilidade de ser envolvido em acidentes."
    ],
    "answer": 0,
    "explicacao": "Direção defensiva não é impor direitos, mas evitar riscos."
  },
  {
    "question": "Assinale a definição correta de drogas psicoativas:",
    "options": [
      "Substâncias que alteram o sistema neuropsicomotor.",
      "Bebida com alto teor alcoólico.",
      "Substância que provocam sonolência.",
      "Bebidas alcoólicas misturadas."
    ],
    "answer": 0,
    "explicacao": "Drogas psicoativas alteram o sistema nervoso e afetam a atenção do condutor."
  },
  {
    "question": "Com o acúmulo de água na pista pode ocorrer a aquaplanagem se o veículo estiver:",
    "options": [
      "Em velocidade muito reduzida.",
      "Em velocidade alta e pneus carecas.",
      "Com problemas nos freios.",
      "Com folga na direção."
    ],
    "answer": 1,
    "explicacao": "Alta velocidade e pneus gastos aumentam o risco de aquaplanagem."
  },
  {
    "question": "Constitui automatismo incorreto:",
    "options": [
      "Usar o pedal de freio antes de usar o pedal de embreagem.",
      "Observar a sinalização.",
      "Dirigir o veículo com o pé apoiado no pedal da embreagem.",
      "Engrenar as machas de acordo com a velocidade."
    ],
    "answer": 2,
    "explicacao": "Manter o pé na embreagem é vício que compromete a segurança e o veículo."
  },
  {
    "question": "Direção defensiva leva o condutor a:",
    "options": [
      "Dirigir com educação, segurança e eficiência.",
      "Dirigir indiferentemente quanto aos demais usuários.",
      "Dirigir com atenção dispersiva.",
      "Dirigir com atenção fixa."
    ],
    "answer": 0,
    "explicacao": "Direção defensiva é dirigir com segurança, eficiência e respeito."
  },
  {
    "question": "Com relação às técnicas de prevenção da colisão quando em ultrapassagem, é incorreto:",
    "options": [
      "Estar atento às intenções dos condutores.",
      "Auxiliar o outro condutor, sinalizando claramente as intenções.",
      "Ter cuidados especiais com os pontos cegos dos veículos que conduzimos.",
      "Utilizar a faixa à esquerda da pista, sem atingir a contramão direcional evitando as tentativas de ultrapassagens perigosas realizadas por terceiros."
    ],
    "answer": 3,
    "explicacao": "Usar a faixa à esquerda sem necessidade é incorreto e pode gerar risco."
  },
  {
    "question": "Como o condutor deve se comportar nas curvas?",
    "options": [
      "Diminuir a velocidade com antecedência, usando o freio e, se necessário, reduzir a marcha antes de entrar na curva e de iniciar o movimento do volante.",
      "Acelerar bastante ao iniciar o trajeto.",
      "Pisar bruscamente no freio no início da curva.",
      "Fazer sempre movimentos bruscos."
    ],
    "answer": 0,
    "explicacao": "O correto é reduzir antes da curva, mantendo controle e segurança."
  },
  {
    "question": "Complete a frase: Ao transitar com a motocicleta sob chuva, adote postura defensiva, antecipando-se a situações de risco freando bem antes do que seria usual, já que a pista molhada aumenta a ________.",
    "options": ["Distância de parada.", "Distância de seguimento.", "Distância de reação.", "Todas estão corretas."],
    "answer": 0,
    "explicacao": "Em pista molhada, a distância de parada aumenta consideravelmente."
  },
  {
    "question": "De todos os procedimentos no trânsito, esta é uma manobra a ser evitada, quando possível:",
    "options": ["Marcha à ré.", "Conversão.", "Baliza.", "Ultrapassagem."],
    "answer": 0,
    "explicacao": "A marcha à ré deve ser evitada sempre que possível, por ser arriscada."
  },
  {
    "question": "Dirigindo por uma via urbana, a uma distância de cerca de 50 metros de um cruzamento, você percebe a luz amarela do semáforo. Nesta situação você deve:",
    "options": [
      "Aumentar a velocidade do seu veículo.",
      "Manter a atenção, reduzir a marcha do seu veículo e parar.",
      "Reduzir a velocidade do seu veículo e completar a travessia do cruzamento.",
      "Buzinar e completar a travessia."
    ],
    "answer": 1,
    "explicacao": "A luz amarela significa atenção e parada segura antes do cruzamento."
  },
  {
    "question": "Dirigindo um veículo, o condutor que encontrar crianças, pessoas idosas ou deficientes físicas atravessando a via deve:",
    "options": [
      "Diminuir a velocidade, buzinar e seguir em frente.",
      "Parar o veículo e facilitar a travessia.",
      "Diminuir a velocidade, dar um sinal de luz e seguir em frente.",
      "Diminuir a velocidade, desviar e seguir em frente."
    ],
    "answer": 1,
    "explicacao": "A prioridade é sempre do pedestre em situação de vulnerabilidade."
  },
  {
    "question": "Não constitui fundamento da direção defensiva:",
    "options": ["Decisão.", "Interação.", "Conhecimento.", "Atenção."],
    "answer": 1,
    "explicacao": "Os fundamentos da direção defensiva são atenção, previsão, habilidade, conhecimento e decisão. Interação não é um deles."
  },
  {
    "question": "Prever o perigo com antecedência significa:",
    "options": [
      "Definir o itinerário.",
      "Evitar indecisões nos cruzamentos.",
      "Definir opções de trajetos.",
      "Todas acima."
    ],
    "answer": 3,
    "explicacao": "Prever é antecipar riscos, o que envolve todas as opções apresentadas."
  },
  {
    "question": "É comportamento do motociclista quando precisa reduzir a velocidade para imobilizar a motocicleta em semáforo:",
    "options": [
      "Sinalizar fazendo gesto regulamentar do braço.",
      "Observar pelo retrovisor se o condutor de trás está fazendo o mesmo.",
      "Frear gradativamente.",
      "Todas as afirmativas estão corretas."
    ],
    "answer": 3,
    "explicacao": "O motociclista deve sinalizar, observar e frear gradualmente."
  },
  {
    "question": "É falso afirmar que, para melhor ser notado no trânsito, o condutor deve:",
    "options": [
      "Ligar o limpador para-brisas frequentemente.",
      "Acender os faróis ou lanternas externas nos períodos de lusco-fusco.",
      "Utilizar o pisca-alerta e o triângulo de segurança quando parado nas margens das vias.",
      "Manter o capô do motor aberto e o triângulo de segurança posicionado atrás, quando este apresentar defeito mecânico."
    ],
    "answer": 0,
    "explicacao": "Ligar o limpador não aumenta visibilidade do veículo para os outros."
  },
  {
    "question": "Em uma curva, a diminuição brusca da velocidade provoca transferência de massa fazendo com que o eixo dianteiro fique mais:",
    "options": [
      "Pesado que o eixo traseiro, tendendo a 'desgarrar a traseira'.",
      "Leve que o eixo traseiro, tendendo a 'desgarrar a dianteira'.",
      "Pesado que o eixo traseiro, tendendo a 'desgarrar a dianteira'.",
      "Leve que o eixo traseiro tendendo a 'desgarrar a traseira'."
    ],
    "answer": 0,
    "explicacao": "A redução brusca aumenta peso no eixo dianteiro, favorecendo saída de traseira."
  },
  {
    "question": "Em uma via onde existir dificuldade de deslocamentos com rapidez, devido ao engarrafamento no trânsito, o condutor deverá:",
    "options": [
      "Mudar de faixa de rolamento.",
      "Manter-se calmo.",
      "Desligar o veículo.",
      "Buzinar sem parar."
    ],
    "answer": 1,
    "explicacao": "A conduta correta em congestionamento é manter-se calmo e paciente."
  },
  {
    "question": "Entre outros efeitos, a ingestão de álcool pode provocar no condutor:",
    "options": [
      "Visão difusa e agilidade.",
      "Melhor capacidade de raciocínio lógico.",
      "Diminuição da capacidade de visualização.",
      "Melhora da capacidade de raciocínio."
    ],
    "answer": 2,
    "explicacao": "O álcool reduz reflexos e a capacidade de percepção visual."
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

