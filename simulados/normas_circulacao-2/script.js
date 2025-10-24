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
    "question": "O condutor deve sinalizar e deslocar com antecedência seu veículo para a faixa mais à direita da sua mão de direção para:",
    "options": ["Entrar à direita.", "Mudar de faixa de trânsito.", "Para retornar pela mesma via.", "Entrar à esquerda."],
    "answer": 0,
    "explicacao": "Sinalizar e deslocar para a faixa mais à direita é necessário para entrar à direita, garantindo segurança e fluidez no trânsito."
  },
  {
  "question": "Em uma via de mão dupla, estreita e em aclive acentuado (sem baia de refúgio), você está SUBINDO quando, à direita, surge um veículo DESCENDO no sentido oposto. Não há sinalização específica. De quem é a preferência de passagem e qual deve ser a conduta correta?",
  "options": [
    "Do veículo que está à direita no momento da aproximação; quem sobe deve parar e, se preciso, recuar para ceder passagem.",
    "Do veículo que está SUBINDO; quem desce deve aguardar antes do estreitamento e, se necessário, manobrar em marcha à ré para liberar a passagem ao que sobe.",
    "Do veículo de maior porte/peso; o menor deve sempre recuar e aguardar.",
    "De nenhum; ambos devem avançar lentamente até o ponto de conflito e negociar a passagem com sinais sonoros."
  ],
  "answer": 1,
  "explicacao": "Em trechos estreitos e íngremes, quando não é possível o cruzamento simultâneo, a preferência é do veículo que SOBE. O que DESCE deve parar antes do gargalo e, se preciso, recuar para liberar a passagem. A regra da ‘direita tem preferência’ aplica-se a cruzamentos sem sinalização, não a encontros frontais em aclive/declive com estreitamento. Exceções: veículos de emergência em serviço com sinais acionados têm prioridade de passagem."
  },
  {
    "question": "Em uma rua de duplo sentido de circulação não sinalizada, o condutor que quiser virar à direita deverá:",
    "options": ["Atingir o ponto central do cruzamento e convergir.", "Parar o seu veículo, observar e convergir, atingindo o eixo central.", "Aproximar-se o máximo possível do bordo direito da pista e fazer a conversão em velocidade segura.", "Posicionar-se junto ao meio-fio da esquerda, acelerando a marcha."],
    "answer": 2,
    "explicacao": "O condutor deve aproximar-se o máximo possível do bordo direito da pista e fazer a conversão em velocidade segura para garantir segurança e fluidez no trânsito."
  },
  {
    "question": "O condutor que estiver circulando pela faixa do meio, em uma pista de rolamento de três faixas, ao perceber que outro que o segue tem o propósito de ultrapassá-lo, deverá:",
    "options": ["Deslocar-se para a faixa da direita, acelerando a marcha.", "Manter-se naquela na qual está circulando, sem acelerar a marcha.", "Manter-se na pista, acelerando a marcha.", "Deslocar-se para a faixa da esquerda, acelerando a marcha."],
    "answer": 1,
    "explicacao": "O condutor deve manter-se na faixa em que está circulando, sem acelerar a marcha, para permitir a ultrapassagem segura do veículo que o segue."
  },
  {
    "image": "cruzamento.jpeg",
    "question": "Analise a preferência no cruzamento:",
    "options": [
      "Os pedestres 2 e 3, pois têm prioridade absoluta na travessia.",
      "O veículo 1, por estar à direita do veículo 5.",
      "O veículo 4, por estar em via preferencial.",
      "Todos os veículos, avançando juntos com cautela, antes dos pedestres."
    ],
    "answer": 0,
    "explicacao": "De acordo com o CTB, pedestres que já iniciaram a travessia na faixa têm prioridade sobre qualquer veículo. Assim, os veículos 1, 4 e 5 devem aguardar até que os pedestres concluam a passagem."
  },
  {
    "question": "Assinale, quanto às normas de circulação, a alternativa errada:",
    "options": ["A circulação será feita pelo lado direito da via, admitidas as exceções devidamente sinalizadas.", "Os veículos precedidos de batedores terão prioridade de passagem.", "A ultrapassagem deve ser feita somente pela direita.", "Os veículos de socorro têm prioridade de passagem, gozam de livre circulação, estacionamento e parada quando identificados por alarme sonoro e iluminação vermelha intermitente."],
    "answer": 2,
    "explicacao": "A ultrapassagem deve ser feita somente pela direita é uma afirmação errada, pois a ultrapassagem deve ser feita pela esquerda." 
  },
  {
    "question": "A alternância entre luz alta e baixa por um curto período de tempo e de forma intermitente somente poderá ser usada para:",
    "options": ["Sinalizar a intenção de ultrapassar o veículo à frente ou para indicar risco à segurança para os veículos em sentido contrário.", "Indicar conversões e retornos em rodovias e estradas.", "Sinalizar frenagem de emergência.", "Embarque e desembarque de passageiros."],
    "answer": 0,
    "explicacao": "A alternância entre luz alta e baixa por um curto período de tempo e de forma intermitente é usada para sinalizar a intenção de ultrapassar o veículo à frente ou para indicar risco à segurança para os veículos em sentido contrário."
  },
  {
    "question": "Todo condutor de veículo automotor deve guardar distância, exceto:",
    "options": ["Frontal e lateral, entre o seu e os demais veículos, bem como em relação ao bordo da pista.", "Lateral em 1,5 m ao ultrapassar ciclistas.", "Frontal em 3 metros, sob qualquer circunstância.", "Verificando sempre a velocidade e as condições do local, do veículo e as condições climáticas."],
    "answer": 2,
    "explicacao": "O condutor deve guardar distância frontal em 3 metros está incorreto, a pergunta quer a resposta incorreta porque tema palavra exceto no final. O correto é a distância frontal deve ser de 2 metros, e lateral 1,5 metros ao ultrapassar ciclistas ou pedestres. mas a pergunta pede a alternativa errada, então a resposta correta é a que diz que deve ser 3 metros, pois essa é uma distância exagerada e não é uma norma de trânsito."
  },
  {
    "question": "É direito dos pedestres:",
    "options": ["A utilização das calçadas públicas, passarelas, passagens próprias e acostamentos de vias rurais.", "Andar nas pistas de rolamento, quando houver calçada.", "Realizar travessia em túneis e viadutos, ainda que não haja passagem exclusiva.", "Transitar em desacordo com a sinalização."],
    "answer": 0,
    "explicacao": "É direito dos pedestres a utilização das calçadas públicas, passarelas, passagens próprias e acostamentos de vias rurais, garantindo sua segurança e mobilidade."
  },
  {
    "question": "Sobre a classificação das vias e suas características, é falso afirmar:",
    "options": ["As vias coletoras destinam-se a coletar e distribuir o trânsito para vias de maior fluxo.", "A velocidade máxima permitida em vias locais não sinalizadas é 30 km/h.", "As vias rurais são divididas em estradas e vias de trânsito rápido.", "A velocidade máxima permitida em rodovias não sinalizadas é determinada conforme o porte do potencial do veículo."],
    "answer": 2,
    "explicacao": "A afirmação é falsa, pois as vias rurais não são divididas em estradas e vias de trânsito rápido, mas sim em rodovias e estradas. As rodovias são vias pavimentadas destinadas ao trânsito rápido, enquanto as estradas podem ser pavimentadas ou não e têm menor fluxo de veículos."
  },
  {
    "question": "É permitido estacionar:",
    "options": ["Afastado da guia da calçada a mais de 50 centímetros.", "De acordo com as condições regulamentadas especificamente pela sinalização.", "Nas pistas de rolamentos.", "Sobre a calçada."],
    "answer": 1,
    "explicacao": "É permitido estacionar de acordo com as condições regulamentadas especificamente pela sinalização, garantindo a segurança e fluidez do trânsito."
  },
  {
    "question": "Assinale, quanto às normas de circulação, a alternativa errada:",
    "options": ["A circulação será feita pelo lado direito da via, admitidas as exceções devidamente sinalizadas.", "O condutor que for ingressar numa via procedente de lote lindeiro a essa via, tem prioridade sobre pedestres e veículos.", "Ao efetuar ultrapassagem, todo condutor deve afastar-se dos veículos que ultrapassa, mantendo distância lateral.", "Os veículos precedidos de batedores terão prioridade de passagem, respeitadas as demais normas de circulação."],
    "answer": 1,
    "explicacao": "A alternativa errada é a que afirma que o condutor que for ingressar numa via procedente de lote lindeiro a essa via tem prioridade sobre pedestres e veículos. Na verdade, o condutor deve dar preferência aos pedestres e veículos já na via."
  },
  {
    "question": "Na mudança de direção o condutor deve:",
    "options": ["Sinalizar e deslocar para a faixa apropriada com antecedência.", "Aguardar no acostamento para convergir à esquerda, em qualquer situação.", "Aproximar-se do bordo da pista esquerda, ao sair de uma pista dupla pelo esquerdo.", "Piscar o farol, se não se tratar de um deslocamento lateral."],
    "answer": 0,
    "explicacao": "O condutor deve sinalizar e deslocar para a faixa apropriada com antecedência para garantir segurança e fluidez no trânsito ao mudar de direção."
  },
  {
    "question": "Com relação ao movimento realizado pelo veículo 2, é correto afirmar:",
    "image":"quest-14.png",
    "options": ["É uma ultrapassagem permitida, desde que seja sinalizada e clara.", "É uma ultrapassagem perigosa, porém permitida, se feita com segurança.", "É uma ultrapassagem permitida, pois o veículo retoma a sua faixa após a ultrapassagem.", "É uma ultrapassagem proibida, pois a sinalização horizontal não permiti transposição de faixas."],
    "answer": 3,
    "explicacao": "A ultrapassagem é proibida faixa continua, pois a sinalização horizontal não permite a transposição de faixas. O veículo 2 deve permanecer em sua faixa."
  },
  {
    "question": "Tem prioridade no trânsito:",
    "options": ["O motociclista, pois trafega em maior velocidade.", "O condutor de transporte coletivo, por ser maior.", "O pedestre idoso ou gestante.", "O pedestre, pois é a estrutura mais frágil do trânsito."],
    "answer": 3,
    "explicacao": "O pedestre tem prioridade no trânsito, pois é a estrutura mais frágil do trânsito. Todos os condutores devem dar preferência aos pedestres em qualquer situação."
  },
  {
    "question": "Como se classificam as vias públicas?",
    "options": ["Arteriais e coletoras.", "Rodovias e estradas.", "Urbanas e rurais.", "Ruas e avenidas."],
    "answer": 2,
    "explicacao": "As vias públicas podem ser classificadas em urbanas e rurais. As urbanas são aquelas localizadas em áreas urbanas, enquanto as rurais estão em áreas não urbanizadas."
  },
  {
    "question": "Sobre estacionamento é correto afirmar:",
    "options": ["É proibido estacionar junto a hidrantes, registro de água ou acessos a galerias subterrâneas.", "É a imobilização do veículo com finalidade e tempo estritamente necessário para embarque e desembarque de passageiro.", "É permitido estacionar em viadutos, pontes e túneis.", "Sempre quando existem proibições de estacionamento, necessariamente existem proibições de parada."],
    "answer": 0,
    "explicacao": "E proibido estacionar junto a hidrantes, registro de água ou acessos a galerias subterrâneas, pois isso pode obstruir o acesso a serviços essenciais e comprometer a segurança."
  },
  {
    "question": "De acordo com a figura acima, qual veículo deverá passar primeiro?",
    "image":"quest-18.png",
    "options": ["O veículo 1, pois existe sinalização para os demais veículos.", "O veículo 2, pois está à direita dos demais.", "A ambulância.", "O veículo 1 passará primeiro somente se um pedestre iniciar travessia diante do veículo 2."],
    "answer": 0,
    "explicacao": "O veículo 1 deverá passar primeiro, pois existe sinalização para os demais veículos. A sinalização indica que o veículo 1 tem prioridade de passagem."
  },
  {
    "question": "Chamam-se interseções a todo cruzamento:",
    "options": ["Semaforizado.", "Em nível, entroncamento ou bifurcação.", "Sobre ferrovias.", "Com rotatória."],
    "answer": 1,
    "explicacao": "Chamam-se interseções a todo cruzamento em nível, entroncamento ou bifurcação. Essas interseções são pontos onde duas ou mais vias se encontram, permitindo a mudança de direção dos veículos."
  },
  {
    "question": "Quando uma via comportar várias faixas no mesmo sentido, são as da direita destinadas:",
    "options": ["Aos veículos mais rápidos e à ultrapassagem.", "Às bicicletas.", "Às motocicletas.", "Aos veículos mais lentos e de grande porte."],
    "answer": 3,
    "explicacao": "As faixas da direita são destinadas aos veículos mais lentos e de grande porte, como caminhões e ônibus, para garantir a fluidez do trânsito e a segurança dos demais veículos."
  },
  {
    "question": "Veículos de tração e propulsão humana, quando na ausência de pista própria ou acostamento, devem circular:",
    "options": ["Pelo bordo da pista, à direita.", "Pelo bordo da pista, à esquerda.", "Pelo centro da pista.", "Pela calçada, faixa de trânsito mais à direita da pista de rolamento."],
    "answer": 0,
    "explicacao": "Veículos de tração e propulsão humana, como bicicletas e patinetes, devem circular pelo bordo da pista, à direita, para garantir a segurança e fluidez do trânsito."
  },
  {
    "question": "Verificar se o espaço é suficiente, sinalizar com antecedência e retomar a posição anterior, são procedimentos para executar:",
    "options": ["Passagem e retorno com o veículo em movimento.", "A transposição de faixa.", "Passagem e conversão com o veículo em movimento.", "Ultrapassagem."],
    "answer": 3,
    "explicacao": "Verificar se o espaço é suficiente, sinalizar com antecedência e retomar a posição anterior são procedimentos para executar uma ultrapassagem com segurança. Esses passos garantem que o condutor tenha visibilidade e espaço adequados para realizar a manobra sem riscos."
  },
  {
    "question": "Nas vias providas de acostamento e sem locais apropriados para manobras de retorno, o condutor deverá:",
    "options": ["Seguir em frente até encontrar um cruzamento.", "Fazer o sinal regulamentar de braço, diminuir a velocidade na faixa da direita e convergir com segurança.", "Aguardar no acostamento à direita para cruzar a pista com segurança.", "Aproximar-se do eixo central da pista, sem atingir a contramão de direção e convergir com segurança."],
    "answer": 2,
    "explicacao": "Nas vias providas de acostamento e sem locais apropriados para manobras de retorno, o condutor deverá aguardar no acostamento à direita para cruzar a pista com segurança. Isso garante que ele não obstrua o tráfego."
  },
  {
    "question": "Em uma rodovia dotada de acostamento, para entrar à esquerda, o condutor deve:",
    "options": ["Seguir até encontrar um cruzamento.", "Atingir o ponto central.", "Deslocar seu veículo para a esquerda sem atingir a contramão.", "Aguardar no acostamento, à direita, para cruzar a pista com segurança."],
    "answer": 3,
    "explicacao": "Em uma rodovia dotada de acostamento, para entrar à esquerda, o condutor deve aguardar no acostamento, à direita, para cruzar a pista com segurança. Isso evita obstruções e garante a segurança do tráfego."
  },
  {
    "question": "O condutor deve sinalizar e deslocar, com antecedência, o seu veículo para a faixa mais à esquerda da sua mão de direção para:",
    "options": ["Fazer uma ultrapassagem.", "Mudar de faixa de direção.", "Aumentar a velocidade.", "Entrar à esquerda."],
    "answer": 3,
    "explicacao": "O condutor deve sinalizar e deslocar, com antecedência, o seu veículo para a faixa mais à esquerda da sua mão de direção para entrar à esquerda. Isso garante segurança e fluidez no trânsito ao realizar a manobra."
  },
  {
    "question": "Quanto ao uso de luzes em veículos, é correto afirmar:",
    "options": ["É necessário, que todos os veículos em circulação pública, mantenham o alerta de luz, os faróis acesos.", "O condutor deve utilizar o pisca-alerta em imobilização ou em situação de emergência.", "Nos túneis providos de iluminação pública não poderá manter acesos os faróis do veículo.", "Durante a noite, em circulação, se necessário, manterá acesa a luz de placa."],
    "answer": 1,
    "explicacao": "O condutor deve utilizar o pisca-alerta em imobilização ou em situação de emergência. Isso é importante para alertar outros condutores sobre a situação do veículo e garantir a segurança no trânsito."
  },
  {
    "question": "Durante o dia, o uso de buzina é permitido:",
    "options": ["Em qualquer situação.", "Em qualquer situação, desde que em toque breve.", "Para alertar sobre perigo, desde que em toque breve.", "Em área hospitalar e escolar."],
    "answer": 2,
    "explicacao": "Durante o dia, o uso de buzina é permitido para alertar sobre perigo, desde que em toque breve. Isso ajuda a evitar acidentes e garantir a segurança no trânsito. Dica grava usar a buzina em locais e horários inadequados é infração LEVE(3 pontos) e MULTA."
  },
  {
    "question": "Os veículos lentos, quando transitando em fila, deverão:",
    "options": ["Andar próximos um ao outro, para evitar que outros veículos ultrapassem.", "Manter distância suficiente entre eles para que os veículos que os ultrapassam possam se intercalar na fila com segurança.", "Andar sempre na esquerda da via esperando da pista de rolamento, sob todas as condições.", "Parar toda vez que outro condutor começar a ultrapassá-lo."],
    "answer": 1,
    "explicacao": "Os veículos lentos, quando transitando em fila, deverão manter distância suficiente entre eles para que os veículos que os ultrapassam possam se intercalar na fila com segurança. Isso garante fluidez no trânsito e segurança para todos os condutores."
  },
  {
    "question": "São deslocamentos laterais, exceto:",
    "options": ["Ultrapassagem.", "Passagem.", "Retorno.", "Conversão."],
    "answer": 1,
    "explicacao": "São deslocamentos laterais, exceto a passagem. A passagem é um movimento que não envolve mudança de posição do veículo em relação à pista, enquanto os outros (ultrapassagem, retorno e conversão) envolvem transposição de faixas ou mudança de direção."
  },
  {
    "question": "Possui preferência em cruzamentos não sinalizados, exceto:",
    "options": ["O veículo que transita por rodovia, sobre o de via que pretende segui-la.", "O veículo que já estiver circulando, sobre o veículo que pretende adentrá-la.", "O veículo que vem pela direita.", "Os caminhões e coletivos ou ônibus."],
    "answer": 3,
    "explicacao": "Não possui preferência em cruzamentos não sinalizados, os caminhões e coletivos ou ônibus porque esses veículos também tem que obedecer as normas de trânsito."
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
