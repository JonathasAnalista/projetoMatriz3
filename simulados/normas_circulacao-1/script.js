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
    "question": "A transposição de faixas, ultrapassagem, retornos, conversões denomina-se:",
    "options": ["deslocamento lateral", "passagem", "ultrapassagem", "conversão livre"],
    "answer": 0,
    "explicacao": "A transposição de faixas, ultrapassagem, retornos e conversões são consideradas deslocamentos laterais, pois envolvem a mudança de posição do veículo em relação às faixas de trânsito."
  },
  {
  "question": "Em uma rodovia de pista simples, sem sinalização regulamentadora, uma motocicleta circula a 100 km/h, uma camioneta circula a 90 km/h e um ônibus circula a 100 km/h. A velocidade máxima permitida para essa via está sendo desrespeitada:",
  "options": [
    "por nenhum dos veículos",
    "por todos os veículos",
    "pelo ônibus",
    "pela camioneta e pela motocicleta"
  ],
  "answer": 2,
  "explicacao": "Em rodovia de pista simples sem sinalização, o limite é 100 km/h para automóveis, motocicletas e camionetas, e 90 km/h para ônibus/micro-ônibus. Portanto, o ônibus a 100 km/h excede o limite."
  },
  {
    "question": "Dirigindo em um veículo numa via dividida ao centro por uma sinalização com duas linhas, sendo a primeira linha à sua esquerda tracejada e a segunda contínua, você poderá:",
    "options": ["Ultrapassar outro veículo pela esquerda, quando as condições forem favoráveis.", "Ultrapassar outro veículo pela direita, quando as condições forem favoráveis.", "Fazer um retorno para o lado direito da via.", "Estacionar."],
    "answer": 0,
    "explicacao": "A sinalização com duas linhas tracejadas à sua esquerda sendo a primeira da sua esquerda tracejada então permite ultrapassagens quando as condições forem favoráveis, enquanto a linha contínua proíbe essa ação."
  },
  {
    "question": "O condutor manterá acesos os faróis do veículo não equipado com DRL, utilizando luz baixa durante a noite e durante o dia, em:",
    "options": ["Vias não iluminadas.", "Túneis providos de iluminação pública e nas rodovias de pista simples fora do perímetro urbano.", "Vias não providas de acostamento.", "Viadutos e trincheiras."],
    "answer": 1,
    "explicacao": "O condutor deve manter acesos os faróis do veículo não equipado com DRL (Daytime Running Lights) utilizando luz baixa durante a noite e durante o dia, especialmente em túneis providos de iluminação pública e nas rodovias de pista simples fora do perímetro urbano para garantir visibilidade e segurança."
  },
  {
    "question": "A ordem correta de uma ultrapassagem segura é:",
    "options": ["Usar luz indicadora de direção, ver espaço e visibilidade, ultrapassar só em faixa tracejada/seccionada.", "Buzinar sucessivamente, usar luz indicadora de direção, ultrapassar só em faixa contínua.", "Ligar a luz alta, usar a luz indicadora de direção para a direita, ultrapassar só em faixa seccionada.", "Todas afirmativas estão corretas."],
    "answer": 0,
    "explicacao": "A ordem correta de uma ultrapassagem segura é usar a luz indicadora de direção, verificar o espaço e visibilidade, e ultrapassar somente em faixa tracejada ou seccionada. Isso garante segurança e respeito às normas de trânsito."
  },
  {
    "question": "A imobilização de veículos por tempo superior ao necessário para embarque ou desembarque de passageiros denomina-se:",
    "options": ["Transposição de faixas.", "Estacionamento.", "Parada.", "Ultrapassagem."],
    "answer": 1,
    "explicacao": "A imobilização de veículos por tempo superior ao necessário para embarque ou desembarque de passageiros é considerada estacionamento, pois envolve a permanência do veículo em um local por um período prolongado."
  },
  {
    "question": "Ao seguir um veículo em uma via de mão única e o mesmo indicar por sinal que vai entrar à esquerda, você entenderá que pode:",
    "options": ["Ultrapassar pela faixa da direita.", "Ultrapassar pela faixa da esquerda.", "Esperar na via ele entrar à esquerda.", "Buzinar sucessivamente para apressá-lo."],
    "answer": 0,
    "explicacao": "Ao seguir um veículo em uma via de mão única e o mesmo indicar por sinal que vai entrar à esquerda, você pode ultrapassar pela faixa da direita, desde que não haja proibição e as condições de segurança permitam."
  },
  {
    "question": "Dar passagem, pela esquerda, quando solicitado:",
    "options": ["É uma opção do condutor.", "Só deve ser permitido quando se tratar de motocicletas.", "É apenas uma questão de educação do condutor.", "É dever de todo condutor de veículo automotor."],
    "answer": 3,
    "explicacao": "Dar passagem, pela esquerda, quando solicitado é dever de todo condutor de veículo automotor, pois isso contribui para a fluidez do trânsito e segurança de todos os usuários da via."
  },
  {
    "question": "A faixa de trânsito destinada a se fazer ultrapassagem e circular em maior velocidade é:",
    "options": ["A da direita.", "A da esquerda.", "Qualquer uma.", "A de sinalização com linhas amarelas."],
    "answer": 1,
    "explicacao": "A faixa de trânsito destinada a se fazer ultrapassagem e circular em maior velocidade é a da esquerda, pois é onde os veículos podem ultrapassar outros veículos que estão na faixa da direita."
  },
  {
    "question": "Os veículos que se deslocam sobre trilhos, respeitadas as normas de circulação, têm a preferência de passagem:",
    "options": ["Nos cruzamentos não sinalizados.", "Na rotatória.", "Nos túneis.", "Sobre os demais veículos."],
    "answer": 3,
    "explicacao": "Os veículos que se deslocam sobre trilhos, como trens e bondes, têm a preferência de passagem sobre os demais tipos veículos, respeitando as normas de circulação. Isso é importante para garantir a segurança e fluidez do trânsito."
  },

  
  {
    "question": "As vias terrestres abertas à circulação, de acordo com sua utilização, classificam-se em:",
    "options": ["Rodovias e vias locais", "Rodovias e estradas", "Vias urbanas e vias rurais", "Vias de trânsito rápido e vias coletoras"],
    "answer": 2,
    "explicacao": "As vias terrestres abertas à circulação, de acordo com sua utilização, classificam-se em vias urbanas e vias rurais. As vias urbanas são aquelas localizadas dentro de áreas urbanas, enquanto as rurais estão fora dessas áreas."
  },

  {
    "question": "As praias abertas à circulação pública, as vias internas pertencentes aos condomínios constituídos por unidades autônomas e os estacionamentos privados de uso coletivo são, para efeito do Código de Trânsito Brasileiro, considerados:",
    "options": ["Vias terrestres", "Áreas autônomas", "Vias privadas", "Áreas restritas"],
    "answer": 0,
    "explicacao": "As praias abertas à circulação pública, as vias internas pertencentes aos condomínios constituídos por unidades autônomas e os estacionamentos privados de uso coletivo são considerados vias terrestres para efeito do Código de Trânsito Brasileiro, pois são áreas destinadas à circulação de veículos."
  },
  {
    "question": "Qual é a posição adequada para posicionar o dispositivo auxiliar de retenção (bebê conforto) para uma criança de 0 a 1 ano?",
    "options": ["No meio do banco traseiro.", "No assoalho atrás do banco do motorista.", "De forma que o rosto da criança fique voltado para o vidro traseiro.", "Desde que se dirija devagar, preso no cinto de segurança do banco do carona."],
    "answer": 2,
    "explicacao": "A posição adequada para posicionar o dispositivo auxiliar de retenção (bebê conforto) para uma criança de 0 a 1 ano é de forma que o rosto da criança fique voltado para o vidro traseiro. Isso garante maior segurança em caso de colisão, pois reduz o risco de lesões no pescoço e cabeça da criança."
  },
  {
    "question": "O ciclista, na falta de ciclovia ou ciclofaixa, deve andar:",
    "options": ["No sentido contrário aos carros na via", "No mesmo sentido dos veículos na via", "Pela calçada e junto aos pedestres", "No centro da via em cima da linha divisória"],
    "answer": 1,
    "explicacao": "O ciclista, na falta de ciclovia ou ciclofaixa, deve andar no mesmo sentido dos veículos na via. Isso é importante para garantir a segurança do ciclista e dos demais usuários da via, evitando acidentes."
  },
  {
    "question": "Ao sair da via pelo lado esquerdo, em pista com circulação nos dois sentidos, o procedimento do condutor deverá ser:",
    "options": ["Em pista com circulação nos dois sentidos não é permitido sair pelo lado esquerdo.", "Aproximar-se o máximo possível do eixo da linha divisória da via e efetuar a manobra com segurança.", "Aproximar-se o máximo possível do bordo esquerdo e executar a manobra no menor espaço possível.", "Aproximar-se do acostamento e executar a manobra no maior tempo possível."],
    "answer": 1,
    "explicacao": "Ao sair da via pelo lado esquerdo, em pista com circulação nos dois sentidos, o condutor deve aproximar-se o máximo possível do eixo da linha divisória da via e efetuar a manobra com segurança. Isso garante que o condutor esteja ciente do tráfego no sentido oposto e minimize o risco de colisões."
  },
  {
    "question": "O embarque e desembarque de passageiros de transporte coletivo deverá acontecer:",
    "options": ["Sempre que solicitado por idosos e deficientes físicos", "Somente nos pontos estabelecidos para este fim", "Em qualquer ponto da via, desde que não atrapalhe o trânsito", "Sempre que o passageiro solicitar"],
    "answer": 1,
    "explicacao": "O embarque e desembarque de passageiros de transporte coletivo deverá acontecer somente nos pontos estabelecidos para este fim. Isso garante a segurança dos passageiros e a fluidez do trânsito, evitando paradas inesperadas em locais inadequados."
  },
  {
    "question": "O condutor de veículo que pretender sair da via pelo lado esquerdo (virar à esquerda) numa via de mão única deverá:",
    "options": ["Aguardar nas margens da via até todos os veículos passarem", "Aproximar-se do eixo central da via e efetuar a conversão à esquerda com atenção", "Aproximar-se do bordo direito da via e efetuar a manobra com atenção", "Deslocar-se totalmente para a esquerda da via e efetuar a conversão com segurança"],
    "answer": 3,
    "explicacao": "O condutor de veículo que pretender sair da via pelo lado esquerdo (virar à esquerda) numa via de mão única deverá deslocar-se totalmente para a esquerda da via e efetuar a conversão com segurança. Isso garante que o condutor esteja ciente do tráfego no sentido único e minimize o risco de colisões."
  },
  {
    "question": "Em vias dotadas de acostamento, qual dos veículos abaixo está fazendo a conversão à esquerda corretamente?",
    "image": "quest18.png",
    "options": ["O veículo 1", "O veículo 3", "O veículo 2", "Nenhum deles"],
    "answer": 1,
    "explicacao": "O veículo 3 está fazendo a conversão à esquerda corretamente, pois está posicionado no acostamento à direita da via, o que é permitido para manobras de conversão à esquerda em vias com acostamento."
  },
  {
    "question": "O extintor de incêndio é equipamento obrigatório:",
    "options": ["Para os veículos automotores, exceto motocicletas", "Somente por ocasião do licenciamento do veículo", "Para caminhão, caminhão-trator, micro-ônibus, veículos de transporte de inflamáveis e coletivo de passageiros", "Apenas para veículos novos"],
    "answer": 2,
    "explicacao": "O extintor de incêndio é equipamento obrigatório para caminhão, caminhão-trator, micro-ônibus, veículos de transporte de inflamáveis e coletivo de passageiros. Isso é importante para garantir a segurança em caso de incêndios."
  },
  {
    "question": "Ao se aproximar de um cruzamento, uma forma segura de agir é:",
    "options": ["Reduzir a velocidade", "Manter a mesma velocidade", "Aumentar a velocidade", "Parar o veículo"],
    "answer": 0,
    "explicacao": "Ao se aproximar de um cruzamento, uma forma segura de agir é reduzir a velocidade. Isso permite que o condutor tenha tempo para observar o tráfego e tomar decisões seguras."
  },
  {
    "question": "Veículos transitando por fluxos que se cruzem, ao se aproximarem de local não sinalizado, têm preferência:",
    "options": ["Quem vem pela direita", "Quem vai em linha reta", "Quem se desloca pela via de fluxo mais intenso", "O ônibus, por transportar mais passageiros"],
    "answer": 0,
    "explicacao": "Veículos transitando por fluxos que se cruzem, ao se aproximarem de local não sinalizado, têm preferência quem vem pela direita. Isso é uma regra básica de trânsito para garantir a segurança e fluidez do tráfego."
  },
  {
    "question": "Quando uma pista de rolamento comportar várias faixas de circulação no mesmo sentido, são as da _________ destinadas ao deslocamento dos veículos mais _______ e de maior porte, quando não houver faixa especial:",
    "options": ["Direita; rápidos", "Esquerda; lentos", "Direita; lentos", "Esquerda; rápidos"],
    "answer": 2,
    "explicacao": "Quando uma pista de rolamento comportar várias faixas de circulação no mesmo sentido, são as da direita destinadas ao deslocamento dos veículos mais lentos e de maior porte, quando não houver faixa especial. Isso ajuda a organizar o tráfego e garantir a segurança dos usuários da via."
  },
  {
    "question": "Os usuários das vias terrestres devem:",
    "options": ["Circular somente pelo lado direito da via", "Ceder sempre o direito de passagem aos veículos de transporte coletivo", "Circular sempre com velocidade reduzida", "Abster-se de todo ato que possa constituir perigo ou obstáculo ao trânsito"],
    "answer": 3,
    "explicacao": "Os usuários das vias terrestres devem abster-se de todo ato que possa constituir perigo ou obstáculo ao trânsito. Isso é fundamental para garantir a segurança de todos os usuários da via, incluindo pedestres, ciclistas e motoristas."
  },
  {
    "question": "O cinto de segurança é obrigatório em todas as vias do território nacional para:",
    "options": ["O condutor, somente", "Condutor e passageiros do banco dianteiro", "Condutor e passageiros dos bancos dianteiro e traseiro", "Condutor e passageiros do banco traseiro"],
    "answer": 2,
    "explicacao": "O cinto de segurança é obrigatório em todas as vias do território nacional para o condutor e passageiros dos bancos dianteiro e traseiro. Isso é importante para garantir a segurança de todos os ocupantes do veículo em caso de acidente."
  },
  {
    "question": "Analise a preferência acima e responda:",
    "image": "quest25.png",
    "options": ["Entre o veículo 4, 3 e 2. Tem preferência o veículo 4", "Entre o veículo 3, 2 e 1. Tem preferência o veículo 2", "Entre o veículo 1, 2 e 3. Tem a preferência o veículo 3", "Entre o veículo 2, 3 e 4. Tem preferência o veículo 2"],
    "answer": 3,
    "explicacao": "A preferência é do veículo 2, pois está vindo pela direita do veículo 3, que está parado. O veículo 3 não tem preferência, pois está vindo pela esquerda do veículo 2. Portanto, a ordem correta de preferência é entre o veículo 2, 3 e 4, com o veículo 2 tendo a preferência. Olhar os carros fazendo o sentido anti-horário pra achar quem está na direita."
  },
  {
    "question": "Ao aproximar-se de um cruzamento não sinalizado, surgindo um veículo à sua direita, o condutor deve:",
    "options": ["Parar o veículo, respeitando a preferência", "Diminuir a velocidade", "Usar atenção difusa e passar", "Não se preocupar, se estiver transitando em uma avenida"],
    "answer": 0,
    "explicacao": "Ao aproximar-se de um cruzamento não sinalizado, surgindo um veículo à sua direita, o condutor deve parar o veículo, respeitando a preferência. Isso é fundamental para evitar acidentes e garantir a segurança no trânsito."
  },
  {
    "question": "Ao ser ultrapassado em via de acostamento, deve-se:",
    "options": ["Deslocar-se obrigatoriamente para o acostamento", "Desviar-se para a direita, reduzir ou manter a velocidade", "Reduzir bastante a velocidade", "Não se preocupar, pois a responsabilidade é de quem ultrapassa"],
    "answer": 1,
    "explicacao": "Ao ser ultrapassado em via de acostamento, deve-se desviar-se para a direita sem circular no acostamento, reduzir ou manter a velocidade. Isso é importante para garantir a segurança e fluidez do trânsito, permitindo que o veículo ultrapassante complete a manobra com segurança."
  },
  {
    "question": "Em uma via coletora sem sinalização, o condutor poderá atingir a velocidade de no máximo:",
    "options": ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
    "answer": 1,
    "explicacao": "Em uma via coletora sem sinalização, o condutor poderá atingir a velocidade de no máximo 40 km/h. Isso é importante para garantir a segurança dos usuários da via, especialmente em áreas urbanas onde há maior concentração de pedestres e ciclistas."
  },
  {
    "question": "Os condutores de ciclomotores não poderão circular nas vias:",
    "options": ["Locais", "Arteriais", "Coletoras", "De trânsito rápido"],
    "answer": 3,
    "explicacao": "Os condutores de ciclomotores não poderão circular nas vias de trânsito rápido. Essas vias são projetadas para veículos de maior velocidade e volume, e a presença de ciclomotores pode representar um risco à segurança tanto dos ciclistas quanto dos motoristas.",
  },
  {
    "question": "Analise o desenho e marque a preferência:",
    "image": "quest30.png",
    "options": ["Do veículo 1, porque o veículo 2 irá fazer conversão", "Do veículo 2, porque está à direita do veículo 1", "Do veículo 1, porque está em linha reta", "Nenhuma das anteriores"],
    "answer": 1,
    "explicacao": "A preferência é do veículo 2, pois está vindo pela direita do veículo 1. Em cruzamentos não sinalizados, o veículo que vem pela direita tem preferência sobre o que está à esquerda, independentemente de estar fazendo uma conversão ou não.  Dica: Aternativas que tenham essas palavras: (Bastante, Sempre, Apenas, Somente, nunca, exclusivamente, bruscamente), Essas palavras absurdas tornam a altenativa inválida. "
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