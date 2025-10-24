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
    "question": "De quem é a preferência de passagem?",
    "image": "quest-1.png",
    "options": [
      "Do veículo 1, pois trafega em linha reta.",
      "Do veículo 2, pois está à direita do veículo 1.",
      "Do veículo 1, pois está à direita do veículo 2.",
      "Do veículo 2, pois trafega em preferencial."
    ],
    "answer": 2,
    "explicacao": "O veículo 1 tem preferência por estar à direita do veículo 2, mesmo que o veículo 2 esteja em uma via preferencial. A regra geral é que o veículo à direita tem preferência em cruzamentos não sinalizados."
  },
  {
    "question": "Manter o veículo imobilizado apenas pelo tempo necessário para embarque e desembarque de pessoas, caracteriza-se como:",
    "options": [
      "Parada para carga e descarga.",
      "Parada.",
      "Estacionamento para carga e descarga.",
      "Estacionamento."
    ],
    "answer": 1,
    "explicacao": "Na parada o veículo é mantido imobilizado apenas pelo tempo necessário para embarque e desembarque de pessoas. É diferente do estacionamento, que é uma imobilização por tempo mais longo, superior entendeu? tempo necessário apenas = Parada. Tempo superior = Estacionamento."
  },
  {
    "question": "O uso do farol baixo é:",
    "options": [
      "Obrigatório para motocicletas, motonetas e ciclomotores durante o dia e a noite.",
      "Recomendado para ônibus, durante o dia, se estiver em faixa exclusiva.",
      "Obrigatório para automóveis, em qualquer via, mesmo durante o dia.",
      "Recomendado para ciclomotores durante o dia."
    ],
    "answer": 0,
    "explicacao": "O uso do farol baixo é obrigatório para motocicletas, motonetas e ciclomotores durante o dia e a noite, conforme o Código de Trânsito Brasileiro. Isso aumenta a visibilidade desses veículos e reduz o risco de acidentes."
  },
  {
    "question": "De acordo com o desenho, marque a resposta correta:",
    "image": "quest-4.png",
    "options": [
      "O veículo 1 perde a preferência por fazer uma conversão à esquerda.",
      "O veículo 2 tem a preferência por trafegar na principal.",
      "O veículo 1 tem a preferência por trafegar à direita do 2.",
      "O veículo 2 tem a preferência por trafegar em linha reta."
    ],
    "answer": 2,
    "explicacao": "O veículo 1 tem a preferência por trafegar à direita do veículo 2. Em cruzamentos não sinalizados, o veículo que trafega à direita do outro tem preferência."
  },
  {
    "question": "Quando inexistir uma faixa especial, um veículo de tração animal deverá ocupar:",
    "options": [
      "A faixa mais à esquerda da pista de rolamento.",
      "A faixa mais à direita da pista de rolamento.",
      "Qualquer faixa, desde que facilite o trânsito.",
      "A faixa da direita ou da esquerda, dependendo da categoria do veículo."
    ],
    "answer": 1,
    "explicacao": "Quando inexistir uma faixa especial, um veículo de tração animal deverá ocupar a faixa mais à direita da pista de rolamento. Isso é importante para garantir a fluidez do trânsito e a segurança dos demais veículos."
  },
  {
    "question": "O condutor poderá ultrapassar outro veículo pela direita quando:",
    "options": [
      "O veículo da frente autorizar.",
      "A via for de mão única com entrada à esquerda e o condutor do veículo a ser ultrapassado indicar, por sinal, que vai entrar para esse lado.",
      "A via for de mão única com retorno ou entrada à direita e o condutor do veículo que estiver à direita indicar, por sinal, que vai entrar para esse lado.",
      "A via for de mão dupla com retorno ou entrada à esquerda e apenas uma faixa de trânsito."
    ],
    "answer": 1,
    "explicacao": "O condutor poderá ultrapassar outro veículo pela direita quando a via for de mão única com entrada à esquerda e o condutor do veículo a ser ultrapassado indicar, por sinal, que vai entrar para esse lado. Isso é permitido para facilitar o trânsito e evitar congestionamentos."
  },
  {
    "question": "Onde não houver sinalização regulamentadora, a velocidade máxima nas vias locais será de:",
    "options": [
      "30 km/h.",
      "20 km/h.",
      "50 km/h.",
      "40 km/h."
    ],
    "answer": 0,
    "explicacao": "Onde não houver sinalização regulamentadora, a velocidade máxima nas vias locais será de 30 km/h. Essa é uma medida para garantir a segurança dos pedestres e ciclistas que utilizam essas vias."
  },
  {
    "question": "Na interseção acima, defina a preferência de acordo com a regra:",
    "image": "quest-8.png",
    "options": [
      "A preferência é do veículo 2 porque trafega à direita do veículo 1.",
      "A preferência é do veículo 1 porque trafega em linha reta.",
      "A preferência é do veículo 1 porque trafega em rodovia.",
      "A preferência é do veículo 2 porque se aproxima de interseção em T."
    ],
    "answer": 2,
    "explicacao": "Na interseção acima, a preferência é do veículo 1 porque trafega em rodovia. Em interseções, veículos que trafegam em rodovias têm preferência sobre aqueles que entram na via principal."
  },
  {
    "question": "Onde não houver sinalização regulamentadora, a velocidade máxima será de:",
    "options": [
      "20 Km/h nas vias locais.",
      "80 Km/h nas estradas.",
      "60 Km/h nas vias de trânsito rápido.",
      "60 Km/h nas estradas."
    ],
    "answer": 3,
    "explicacao": "Onde não houver sinalização regulamentadora, a velocidade máxima será de 60 Km/h nas estradas. Essa é uma medida para garantir a segurança dos usuários das vias."
  },
  {
    "question": "Após priorizarem a passagem do veículo em emergência (1), de quem é a preferência?",
    "image": "quest-10.png",
    "options": [
      "Do veículo 2, pois ele passaria na sequência.",
      "Do veículo 3, pois está na mesma via que a ambulância.",
      "Do veículo 2, pois está à direita da ambulância.",
      "Do veículo 3, pois trafega à direita do veículo 2."
    ],
    "answer": 3,
    "explicacao": "Após priorizarem a passagem do veículo em emergência (1), a preferência é do veículo 3, pois trafega à direita do veículo 2. Em cruzamentos não sinalizados, o veículo que trafega à direita do outro tem preferência."
  },
  {
    "question": "É velocidade permitida em vias de trânsito rápido quando não há sinalização de regulamentação:",
    "options": [
      "60 km/h.",
      "80 km/h.",
      "90 km/h.",
      "110 km/h."
    ],
    "answer": 1,
    "explicacao": "É velocidade permitida em vias de trânsito rápido quando não há sinalização de regulamentação é de 80 km/h. Essa velocidade é estabelecida para garantir a fluidez do trânsito e a segurança dos usuários das vias."
  },
  {
    "question": "Para convergir à esquerda em rodovias dotadas de acostamento é preciso:",
    "options": [
      "Diminuir a velocidade e observar as regras de segurança.",
      "Aumentar a velocidade para fazer a conversão antes que venham veículos no sentido contrário.",
      "Manter a velocidade e observar o fluxo contrário com vistas à segurança.",
      "Parar no acostamento."
    ],
    "answer": 3,
    "explicacao": "Para convergir à esquerda em rodovias dotadas de acostamento é preciso parar no acostamento. Isso é necessário para garantir a segurança do condutor e dos demais usuários da via, evitando acidentes durante a conversão."
  },
  {
    "question": "É procedimento para se convergir à direita:",
    "options": [
      "Sinalizar à direita e observar o trânsito, deslocar-se para o centro da faixa e realizar a conversão.",
      "Sinalizar e parar à direita da via com vistas à observação das normas de segurança.",
      "Sinalizar e deslocar-se para o bordo direito da pista para convergir usando o menor espaço possível.",
      "Sinalizar e deslocar-se para junto da faixa divisória da pista e realizar a conversão respeitando as regras de preferência."
    ],
    "answer": 2,
    "explicacao": "É procedimento para se convergir à direita: sinalizar e deslocar-se para o bordo direito da pista para convergir usando o menor espaço possível. Isso garante uma conversão segura e eficiente, minimizando o risco de acidentes."
  },
  {
    "question": "Quando for preciso transportar num veículo de passeio, quatro crianças, três delas serão acomodadas no banco traseiro. Qual criança será colocada no banco dianteiro do veículo?",
    "options": [
      "A mais velha das quatro.",
      "A mais pesada das quatro.",
      "A de maior estatura entre as quatro.",
      "Qualquer uma desde que utilize o dispositivo de retenção."
    ],
    "answer": 3,
    "explicacao": "Qualquer uma das  desde que utilize o dispositivo de retenção adequado. Isso é importante para garantir a segurança da criança durante o transporte."
  },
  {
    "question": "A velocidade máxima permitida em uma via arterial sem sinalização é de:",
    "options": [
      "60 km/hora.",
      "30 km/hora.",
      "80 km/hora.",
      "40 km/hora."
    ],
    "answer": 0,
    "explicacao": "A velocidade máxima permitida em uma via arterial sem sinalização é de 60 km/hora. Essa velocidade é estabelecida para garantir a fluidez do trânsito e a segurança dos usuários das vias."
  },
  {
    "question": "As vias rurais se subdividem em:",
    "options": [
      "Rodovias e vias locais.",
      "Rodovias e estradas.",
      "Vias de trânsito rápido, vias coletoras e rodovias.",
      "Vias urbanas e vias rurais."
    ],
    "answer": 1,
    "explicacao": "As vias rurais se subdividem em rodovias e estradas. As rodovias são vias pavimentadas de alta capacidade, enquanto as estradas podem ser pavimentadas ou não, com menor capacidade de tráfego."
  },
  {
    "question": "Sobre o desenho acima, é correto afirmar:",
    "image":"quest-17.png",
    "options": [
      "A preferência é do veículo 2 por estar à direita do 3.",
      "O veículo 1 tem a preferência por estar à direita do 2.",
      "O veículo 1 tem preferência sobre o veículo 3.",
      "O veículo 2 tem a preferência para virar à esquerda."
    ],
    "answer": 0,
    "explicacao": "O veículo 2 tem a preferência por estar à direita do veículo 3. Em cruzamentos não sinalizados, o veículo que trafega à direita do outro tem preferência."
  },
  {
    "question": "De acordo com as regras gerais de circulação, quando o condutor tem preferência de passagem em um cruzamento?",
    "options": [
      "Quando cruzar com veículos em missão de urgência.",
      "Quando for adentrar em uma rodovia.",
      "Quando em cruzamento não sinalizado e este seguir à direita do outro condutor.",
      "Todas as alternativas estão corretas."
    ],
    "answer": 2,
    "explicacao": "Em cruzamentos não sinalizados, o veículo que trafega à direita do outro tem preferência. Isso é uma regra geral de circulação que visa garantir a fluidez do trânsito e a segurança dos usuários das vias."
  },
  {
    "question": "As marcas de canalização (MC) orientam os fluxos de tráfego em uma via, além de regulamentar áreas de pavimento não utilizáveis. A marca MC-04 regulamenta:",
    "image":"quest-19.png",
    "options": [
      "Ordenação para movimento em retorno.",
      "Fluxos de trânsito de sentidos opostos.",
      "Proteção em áreas de estacionamento.",
      "Acomodação para início de canteiro central."
    ],
    "answer": 3,
    "explicacao": "A marca MC-04 regulamenta a acomodação para início de canteiro central. Essas marcas são importantes para organizar o tráfego e garantir a segurança dos usuários das vias."
  },
  {
    "question": "Na interseção, qual veículo tem a preferência de passagem:",
    "image":"quest-20.png",
    "options": [
      "O veículo 1, pois trafega à direita da via.",
      "O veículo 2, pois o veículo 1 antes de convergir, deve parar cedendo-lhe a passagem.",
      "O veículo 1, pois irá adentrar na via preferencial.",
      "O veículo 2, pois trafega na via principal."
    ],
    "answer": 1,
    "explicacao": "O veículo 2 tem a preferência de passagem, pois o veículo 1 antes de convergir, deve parar cedendo-lhe a passagem. Em interseções não sinalizadas, o veículo que está na via principal tem preferência sobre os que entram na via preferencial."
  },
  {
    "question": "Nas vias rurais, o pedestre deve transitar:",
    "options": [
      "Pela direita no sentido do fluxo de veículos.",
      "No acostamento junto ao bordo esquerdo.",
      "Pela esquerda do fluxo de veículos.",
      "No acostamento à direita e no contrafluxo dos veículos."
    ],
    "answer": 3,
    "explicacao": "No acostamento à direita e no contrafluxo dos veículos. Isso é importante para garantir a segurança do pedestre, permitindo que ele veja os veículos que se aproximam e evitando acidentes."
  },
  {
    "question": "Assinale a alternativa correta:",
    "image":"quest-22.png",
    "options": [
      "Entre os veículos 2 e 4, a prioridade de passagem é do veículo 4.",
      "Entre os veículos 2 e 3, a preferência é do veículo 3.",
      "Entre os veículos 1, 3 e 4, a ordem de passagem na interseção é 3, 4 e 1.",
      "Entre os veículos 2, 4 e 1, a ordem de passagem na interseção é 1, 2 e 4."
    ],
    "answer": 2,
    "explicacao": "Entre os veículos 1, 3 e 4, a ordem de passagem na interseção é 3, 4 e 1. Em interseções não sinalizadas, o veículo que trafega à direita do outro tem preferência, e a ordem de passagem deve ser respeitada para evitar acidentes."
  },
  {
    "question": "Quando uma via comportar duas ou mais faixas de trânsito e a da direita for destinada ao uso exclusivo de outro tipo de veículo, os demais veículos deverão circular pela faixa:",
    "options": [
      "Da direita.",
      "Da esquerda.",
      "Adjacente à da esquerda.",
      "Adjacente à da direita."
    ],
    "answer": 3,
    "explicacao": "Adjacente à da direita. Isso é importante para garantir a fluidez do trânsito e a segurança dos usuários das vias, evitando congestionamentos e sinistros."
  },
  {
    "question": "Assinale a alternativa errada quanto às normas de circulação:",
    "options": [
      "A circulação será feita pelo lado direito da via, admitidas exceções devidamente sinalizadas.",
      "A ultrapassagem deve ser feita somente pela esquerda, exceto quando o veículo a ser ultrapassado estiver sinalizando com o propósito de entrar à esquerda.",
      "Os veículos de socorro e polícia têm preferência de passagem.",
      "Os veículos precedidos de batedores terão prioridade de passagem."
    ],
    "answer": 2,
    "explicacao": "A alternativa errada é que os veículos de socorro e polícia têm preferência de passagem. Na verdade, eles têm prioridade de passagem quando acionarem o alarme sonoro e a luz vermelha intermitente, mas não necessariamente preferência em todas as situações."
  },
  {
    "question": "Local onde é permitido realizar parada:",
    "options": [
      "Nas entradas e saídas de veículos em garagens.",
      "A menos de cinco metros das esquinas.",
      "Na área da interseção de fluxos.",
      "Nas marcas de canalização de fluxos."
    ],
    "answer": 0,
    "explicacao": "Nas entradas e saídas de veículos em garagens. É permitido realizar parada nesses locais, desde que não interfira no fluxo de veículos e pedestres. As demais opções são proibidas para garantir a segurança e fluidez do trânsito."
  },
  {
    "question": "Assinale, quanto às normas de circulação, a alternativa correta:",
    "options": [
      "A circulação será feita sempre pelo lado direito da via.",
      "Os veículos precedidos de batedores terão preferência absoluta na passagem.",
      "Veículos de socorro têm prioridade de passagem, quando acionarem o alarme sonoro e a luz vermelha intermitente.",
      "A ultrapassagem deve ser feita somente pela direita."
    ],
    "answer": 2,
    "explicacao": "Veículos de socorro têm prioridade de passagem, quando acionarem o alarme sonoro e a luz vermelha intermitente. Isso é importante para garantir que esses veículos possam chegar rapidamente ao local de emergência, sem interferências no trânsito."
  },
  {
    "question": "Observe o desenho acima e responda. O condutor do veículo 1 para ingressar em outra via deverá:",
    "image":"quest-27.png",
    "options": [
      "Apenas aguardar a passagem do veículo 2.",
      "Aguardar a passagem do veículo 3.",
      "Entrar diretamente na via, sem utilizar a faixa de aceleração.",
      "Utilizar a faixa de aceleração, dando preferência ao veículo 2."
    ],
    "answer": 3,
    "explicacao": "Utilizar a faixa de aceleração, dando preferência ao veículo 2. Isso é importante para garantir a segurança do condutor e dos demais usuários da via, evitando acidentes durante a conversão."
  },
  {
    "question": "Onde não houver sinalização regulamentadora, a velocidade máxima será de:",
    "options": [
      "20 Km/h nas vias locais.",
      "80 Km/h nas estradas.",
      "60 Km/h nas vias de trânsito rápido.",
      "40 Km/h nas vias coletoras."
    ],
    "answer": 3,
    "explicacao": "40 Km/h nas vias coletoras. Essa velocidade é estabelecida para garantir a segurança dos usuários das vias e a fluidez do trânsito, evitando congestionamentos e acidentes."
  },
  {
    "question": "Em locais onde o estacionamento é proibido, você deverá:",
    "options": [
      "Parar apenas pelo tempo estritamente necessário para embarque ou desembarque.",
      "Cuidar que seus passageiros não abram ou deixem as portas do veículo abertas.",
      "Cuidar para que o embarque e desembarque dos passageiros ocorram sempre do lado da calçada.",
      "Nenhuma das respostas está correta."
    ],
    "answer": 0,
    "explicacao": "Parar apenas pelo tempo estritamente necessário para embarque ou desembarque. Isso é importante para garantir a fluidez do trânsito e a segurança dos usuários das vias, evitando congestionamentos e acidentes."
  },
  {
    "question": "Segundo a classificação do Código de Trânsito Brasileiro, uma via que não possui interseções e passagem de pedestre em nível é chamada de:",
    "options": [
      "Via preferencial.",
      "Via local.",
      "Via de trânsito rápido.",
      "Via arterial."
    ],
    "answer": 2,
    "explicacao": "Via de trânsito rápido. Essa classificação é importante para entender as características das vias e as regras de circulação que se aplicam a elas. As vias de trânsito rápido são projetadas para permitir um fluxo contínuo de veículos, sem interrupções frequentes."
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