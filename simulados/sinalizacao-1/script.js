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
    "question": "O que significa essa placa de advertência?",
    "image": "curva_acentuada_direita.png",
    "options": [
        "Curva acentuada à direita.",
        "Curva à direita.",
        "Curva curta à direita.",
        "Curva longa à direita."
    ],
    "answer": 0,
    "explicacao": "A placa indica uma curva acentuada à direita, alertando os motoristas sobre a necessidade de reduzir a velocidade ao se aproximar dessa curva. Olhe bem para a placa e decore a imagem."
    },

    {
    "question": "O que significa essa placa de advertência?",
    "image": "curva_acentuada_s_direita.png",
    "options": [
        "Curva em Z à direita.",
        "Curva em S à direita.",
        "Curva acentuada em S à direita.",
        "Curva acentuada em Z à direita."
    ],
    "answer": 2,
    "explicacao": "A placa indica uma curva acentuada em S à direita, alertando os motoristas sobre a necessidade de reduzir a velocidade ao se aproximar dessa curva.Olhe bem para a placa e decore a imagem."
    },

    {
    "question": "O que significa essa placa de regulamentação?",
    "image": "comprimento_maximo_permitido.png",
    "options": [
        "Comprimento máximo limitado.",
        "Largura máxima permitida.",
        "Comprimento máximo permitido.",
        "Largura máxima limitada."
    ],
    "answer": 2,
    "explicacao": "A placa indica que o comprimento máximo permitido é de 12 metros, alertando os motoristas sobre a necessidade de respeitar essa limitação ao dirigir veículos longos. Olhe bem para a placa e decore a imagem."
    },

    {
    "question": "O que significa essa placa de regulamentação?",
    "image": "ciclistapedestre.png",
    "options": [
        "Pedestres ande pela esquerda , ciclistas pela direita.",
        "Pedestres ande pela direita , ciclistas pela esquerda.",
        "Banhistas ande pela esquerda , ciclistas pela direita.",
        "Banhistas ande pela direita , ciclistas pela esquerda."
    ],
    "answer": 0,
    "explicacao": "A placa indica que pedestres devem andar pela esquerda e ciclistas pela direita, alertando os usuários da via sobre a necessidade de respeitar essa orientação para garantir a segurança de todos. Olhe bem para a placa e decore a imagem."
    },

    {
    "question": "O que significa essa inscrição no pavimento?",
    "image": "ip_vire_esquerda.png",
    "options": [
        "Obrigatório virar à esquerda.",
        "Mantenha à direita.",
        "Vire à direita.",
        "Vire à esquerda."
    ],
    "answer": 3,
    "explicacao": "A inscrição no pavimento indica que o condutor pode virar à esquerda. Olhe bem para a placa e decore a imagem."
    },

    {
    "question": "O que significa essa inscrição no pavimento?",
    "image": "ip_cruz_santo_andre.png",
    "options": [
        "Cruz de santo andré - cruzamento cicloviário.",
        "Cruz de santo andré - cruzamento rodoferroviário.",
        "Cruz de santo andré - cruzamento rodoviário.",
        "Cruz de santo andré - cruzamento Portoviário."
    ],
    "answer": 1,
    "explicacao": "A inscrição no pavimento indica que a cruz de santo andré é um sinal de advertência para cruzamento rodoferroviário, alertando os motoristas sobre a presença de trilhos de trem na via. Olhe bem para a placa e decore a imagem."
    },

    {
    "question": "O que significa o gesto do condutor?",
    "image": "gc_dobrar_esquerda.png",
    "options": [
        "Dobrar à esquerda.",
        "Diminuir à marcha ou parar.",
        "Dobrar à direita.",
        "O carro está apresentando defeito."
    ],
    "answer": 0,
    "explicacao": "O gesto do condutor indica que ele pretende dobrar à esquerda, alertando os outros motoristas sobre sua intenção de mudar de direção. Olhe bem para o gesto e decore a imagem."
    },

    {
    "question": "O que significa o gesto do condutor?",
    "image": "gc_diminuir_marcha.png",
    "options": [
        "Dobrar à esquerda.",
        "Diminuir à marcha ou parar.",
        "Dobrar à direita.",
        "O carro está apresentando defeito."
    ],
    "answer": 1,
    "explicacao": "O gesto do condutor indica que ele pretende diminuir a marcha ou parar, alertando os outros motoristas sobre sua intenção de reduzir a velocidade ou parar o veículo. Olhe bem para o gesto e decore a imagem."
    },

    {
    "question": "O que significa a ordem do Agente de trânsito?",
    "image": "ga_diminuir.png",
    "options": [
        "Ordem de parada pra todos os veículos que vem em direção ao gesto.",
        "Ordem de diminuição de velocidade pra todos os veículos.",
        "Ordem de seguir pra todos veículos que vem em direção ao gesto.",
        "Ordem para encostar todos os veículos que passarem na via."
    ],
    "answer": 1,
    "explicacao": "A ordem do Agente de trânsito indica que todos os veículos devem diminuir a velocidade, alertando os motoristas sobre a necessidade de reduzir a velocidade ao se aproximar do agente. Olhe bem para o gesto e decore a imagem."
    },

    {
    "question": "O que significa a ordem do Agente de trânsito?",
    "image": "ga_parar.png",
    "options": [
        "Ordem de parada pra todos os veículos que vem em direção ao gesto.",
        "Ordem de diminuição de velocidade pra todos os veículos.",
        "Ordem de seguir pra todos veículos que vem em direção ao gesto.",
        "Ordem para encostar todos os veículos que passarem na via."
    ],
    "answer": 0,
    "explicacao": "A ordem do Agente de trânsito indica que todos os veículos devem parar, alertando os motoristas sobre a necessidade de interromper a marcha ao se aproximar do agente. Olhe bem para o gesto e decore a imagem."
    },

    {
    "question": "O que significa essa placa de atrativos turísticos?",
    "image": "at_patrimonio_natural.png",
    "options": [
        "Patrimônio natural com barreiras.",
        "Patrimônio histórico.",
        "Patrimônio cultural com barreiras.",
        "Patrimônio natural."
    ],
    "answer": 3,
    "explicacao": "A placa de atrativos turísticos indica que o local é um patrimônio natural, alertando os visitantes sobre a importância de preservar a natureza e respeitar as regras do local. Olhe bem para a placa e decore a imagem."
    },

    {
    "question": "O que significa essa placa de atrativos turísticos?",
    "image": "at_centro_cultura.png",
    "options": [
        "Centro cultural.",
        "Centro de cultura.",
        "Centro de artes.",
        "Centro Bibliotecário."
    ],
    "answer": 1,
    "explicacao": "A placa de atrativos turísticos indica que o local é um centro de cultura, alertando os visitantes sobre a importância de conhecer e valorizar a cultura local. Olhe bem para a placa e decore a imagem."
    },

    {
    "question": "O que significa essa placa de serviços auxiliares?",
    "image": "sa_camping.png",
    "options": [
        "Área indígena.",
        "Proteção para indígenas.",
        "Área de campismo.",
        "Barraca de proteção contra animais selvagens."
    ],
    "answer": 2,
    "explicacao": "A placa de serviços auxiliares indica que o local é uma área de campismo, alertando os visitantes sobre a possibilidade de acampar e desfrutar da natureza. Olhe bem para a placa e decore a imagem."
    },

    {
    "question": "O que significa essa placa de serviços auxiliares?",
    "image": "sa_mecanico.png",
    "options": [
        "Oficina mecânica.",
        "Serviço mecânico.",
        "Serviço de reparo de veículos.",
        "Serviço de manutenção de veículos."
    ],
    "answer": 1,
    "explicacao": "A placa de serviços auxiliares indica que o local é um serviço mecânico, alertando os motoristas sobre a possibilidade de realizar reparos e manutenções em seus veículos. Olhe bem para a placa e decore a imagem."
    },

    {
    "question": "O que significa essa sinalização semafórica?",
    "image": "ss_nao_pode_atravessar.png",
    "options": [
        "Os veículos devem atravessar a via.",
        "Os pedestres devem atravessar a via.",
        "Os veículos devem parar instantaneamente.",
        "Os pedestres não podem atravessar a via."
    ],
    "answer": 3,
    "explicacao": "A sinalização semafórica indica que os veículos não podem atravessar a via, alertando os motoristas sobre a necessidade de respeitar o sinal vermelho e aguardar a liberação para seguir. Olhe bem para a placa e decore a imagem."
    },

    {
    "question": "O que significa essa placa de advertência?",
    "image": "parada_ob_frente.png",
    "options": [
        "Parada obrigatória.",
        "Parada obrigatória para pedestres.",
        "Parada obrigatória para veículos leves.",
        "Parada obrigatória à frente."
    ],
    "answer": 3,
    "explicacao": "A placa de advertência indica que há uma parada PARADA OBRIGATÓRIA A FRENTE, alertando os motoristas sobre a necessidade de reduzir a velocidade e parar antes de prosseguir. Olhe bem para a placa e decore a imagem."
    },

    {
    "question": "O que significa essa placa de advertência?",
    "image": "cruzamento_vias.png",
    "options": [
        "Cruzamento de vias com quarto vias.",
        "Cruzamento de vias.",
        "Cruzamento em cruz.",
        "Cruz de santo andré."
    ],
    "answer": 1,
    "explicacao": "A placa de advertência indica que há um cruzamento de vias, alertando os motoristas sobre a necessidade de reduzir a velocidade e estar atentos aos outros veículos e pedestres. Olhe bem para a placa e decore a imagem."
    },

    {
    "question": "O que significa essa placa de regulamentação de formato Octogonal?",
    "image": "parada_obg.png",
    "options": [
        "Atenção : Parada obrigatória.",
        "Atenção, Pare!.",
        "Parada obrigatória.",
        "Pare!."
    ],
    "answer": 2,
    "explicacao": "A placa de regulamentação de formato OCTOGONAL indica que há uma PARADA OBRIGATÓRIA, alertando os motoristas sobre a necessidade de parar completamente antes de prosseguir. Olhe bem para a placa e decore a imagem."
    },

     {
    "question": "Diante dessa placa de regulamentação você entende que:?",
    "image": "vire_direita.png",
    "options": [
        "A conversão para o lado direito é permetida se quiser.",
        "A conversão para o lado direito é obrigatório.",
        "Somente veículos pesados devem convergir à direita.",
        "Somente veículos leves devem convergir à direita."
    ],
    "answer": 1,
    "explicacao": "A placa de regulamentação indica que a conversão para o lado direito é obrigatória, alertando os motoristas sobre a necessidade de seguir essa orientação ao se aproximar da interseção. Olhe bem para a placa e decore a imagem."
    },

    {
    "question": "Diante dessa placa de atrativos turísticos você entende que:?",
    "image": "marina.png",
    "options": [
        "indica a presença de uma (marina), um local para fiscalizar e controlar a entrada e saída de embarcações.",
        "indica a presença de uma (marina), um local onde pequenos barcos podem ser ancorados e atracados.",
        "indica a presença de uma (marina), um local onde barcos e embarcações podem ser ancorados e atracados.",
        "indica a presença de uma (marina), um local onde apenas navios podem ser ancorados e atracados."
    ],
    "answer": 2,
    "explicacao": "A placa de atrativos turísticos indica a presença de uma marina, um local onde barcos e embarcações podem ser ancorados e atracados, alertando os visitantes sobre a possibilidade de desfrutar de atividades náuticas. Olhe bem para a placa e decore a imagem."
    },

    {
    "question": "Diante dessa placa de atrativos turísticos você entende que:?",
    "image": "aeroclub.png",
    "options": [
        "indica a presença de um (aeroclube) na área.",
        "indica a presença de um (avião pequeno) na área.",
        "indica a presença de um (grande avião) na área.",
        "indica apresentação da (esquadrilha de fumaça)."
    ],
    "answer": 0,
    "explicacao": "A placa de atrativos turísticos indica a presença de um aeroclube na área, alertando os visitantes sobre a possibilidade de atividades relacionadas à aviação, como voos panorâmicos e aulas de pilotagem. Olhe bem para a placa e decore a imagem."
    },

    {
    "question": "Diante dessa placa de serviços auxiliares você entende que:?",
    "image": "restaurante.png",
    "options": [
        "Indica a presença de um supermercado próximo.",
        "Informa que há um restaurante nas proximidades.",
        "Indica uma área exclusiva para piqueniques.",
        "Informa a obrigatoriedade de parar para refeição."
    ],
    "answer": 1,
    "explicacao": "A placa de serviços auxiliares indica a presença de um restaurante nas proximidades, alertando os motoristas sobre a possibilidade de fazer uma refeição durante a viagem. Olhe bem para a placa e decore a imagem."
    },

    {
    "question": "A placa SAU-26, “Ponto de parada”, indica:",
    "image": "pontoparada.png",
    "options": [
        "Estacionamento de ônibus.",
        "Parada de veículos de autoridades.",
        "Carga e descarga de mercadorias.",
        "Parada de veículos de transporte coletivo ou individual de passageiros."
    ],
    "answer": 3,
    "explicacao": "A placa SAU-26, “Ponto de parada”, indica que é um local destinado à parada de veículos de transporte coletivo ou individual de passageiros, alertando os motoristas sobre a possibilidade de embarque e desembarque de passageiros. Olhe bem para a placa e decore a imagem."
    },

    {
    "question": "Diante do gesto do agente você entende que:",
    "image": "ag_lanterna.png",
    "options": [
        "É uma ordem de parada somente para o veículo no qual a lanterna está direcionada.",
        "É uma ordem de parada aos veículos para que os pedestres possam atravesar a via.",
        "É uma ordem de parada pra todos os veículos que vem na direção do agente.",
        "É uma ordem de parada para todos os veículos que estão na via."
    ],
    "answer": 0,
    "explicacao": "O agente está usando a lanterna para indicar que a ordem de parada é direcionada apenas ao veículo no qual a lanterna está apontada, alertando o motorista sobre a necessidade de interromper a marcha. Olhe bem para o gesto e decore a imagem."
    },

    {
    "question": "Diante do gesto do agente você entende que:",
    "image": "ag_seguir.png",
    "options": [
        "Ordem de parada pra todos os veículos que vem em direção ao gesto.",
        "Ordem de diminuição de velocidade pra todos os veículos.",
        "Ordem de seguir pra todos veículos que vem em direção ao gesto.",
        "Ordem para encostar todos os veículos que passarem na via."
    ],
    "answer": 2,
    "explicacao": "O agente está usando o gesto de mão para indicar que a ordem é para seguir em frente, alertando os motoristas sobre a possibilidade de continuar a marcha sem necessidade de parar. Olhe bem para o gesto e decore a imagem."
    },

    {
    "question": "Diante do gesto do condutor você entende que:",
    "image": "gc_direita.png",
    "options": [
        "Dobrar à esquerda.",
        "Diminuir à marcha ou parar.",
        "Dobrar à direita.",
        "O carro está apresentando defeito."
    ],
    "answer": 2,
    "explicacao": "O condutor está usando o gesto de mão para indicar que ele pretende dobrar à direita, alertando os outros motoristas sobre sua intenção de mudar de direção. Olhe bem para o gesto e decore a imagem."
    },

    {
    "question": "Diante da inscrição no pavimento você entende que:",
    "image": "deficiente.png",
    "options": [
        "Local proibido de parada de veículos conduzidos por deficientes físicos.",
        "Local de estacionamento de veículos conduzidos por deficientes físicos ou que os transporte.",
        "Local de embarque e desembarque de deficientes físicos.",
        "Local de trânsito de deficientes físicos."
    ],
    "answer": 1,
    "explicacao": "A inscrição no pavimento indica que o local é destinado ao estacionamento de veículos conduzidos por deficientes físicos ou que os transportem, alertando os motoristas sobre a necessidade de respeitar essa área reservada. Olhe bem para a inscrição e decore a imagem."
    },

    {
    "question": "Diante da marca de canalização no pavimento você entende que:",
    "image": "canalizacao_ip.png",
    "options": [
        "servem para orientar o fluxo de veículos e indicar áreas da via onde não é permitido estacionar.",
        "servem para orientar o fluxo de veículos e indicar áreas da via onde não é permitido circular.",
        "servem para orientar o fluxo de veículos e indicar áreas da via onde é permitido circular, parar ou estaciona.",
        "servem para orientar o fluxo de veículos e indicar áreas da via onde não é permitido circular, parar ou estacionar."
    ],
    "answer": 3,
    "explicacao": "A marca de canalização no pavimento indica que o local é destinado a orientar o fluxo de veículos e indicar áreas da via onde não é permitido circular, parar ou estacionar, alertando os motoristas sobre as regras de trânsito naquela área. Olhe bem para a marca e decore a imagem."
    },

    {
    "question": "A placa A-2a adverte uma:",
    "image": "curva_esquerda.png",
    "options": [
        "Curva acentuada à esquerda.",
        "Curva à esquerda.",
        "Curva curta à esquerda.",
        "Curva longa à esquerda."
    ],
    "answer": 1,
    "explicacao": "A placa A-2a adverte sobre a existência de uma curva à esquerda, alertando os motoristas sobre a necessidade de reduzir a velocidade ao se aproximar dessa curva. Olhe bem para a placa e decore a imagem."
    },

    {
    "question": "A placa A-26a adverte uma via de:",
    "image": "sentido_unico.png",
    "options": [
        "Sentido duplo.",
        "Sentido obrigatório.",
        "Sentido único.",
        "Nenhuma das respostas acima."
    ],
    "answer": 2,
    "explicacao": "A placa A-26a adverte sobre a existência de uma via de sentido único, alertando os motoristas sobre a necessidade de seguir na direção indicada pela placa. Olhe bem para a placa e decore a imagem. Dica: Se a placa for circular lembrem de usar o termo 'Permitido', Se a placa for aquela amarela quadrada de advertência lembrem de usar o termo 'Limitado'."
    },


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