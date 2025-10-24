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
    "question": "Nas interseções e suas proximidades, o condutor:",
    "options": [
      "Poderá efetuar ultrapassagem.",
      "Poderá estacionar.",
      "Não poderá efetuar ultrapassagem.",
      "Não precisa diminuir a velocidade do veículo."
    ],
    "answer": 2,
    "explicacao": "Em interseções e proximidades é proibido efetuar ultrapassagens."
  },
  {
    "question": "O condutor deverá utilizar o pisca-alerta na seguinte situação:",
    "options": [
      "Em imobilizações ou situações de emergência.",
      "Transitando à noite.",
      "Sob chuva ou neblina.",
      "Sob cerração."
    ],
    "answer": 0,
    "explicacao": "O pisca-alerta só deve ser usado em imobilizações ou emergências."
  },
  {
    "question": "Nas vias dotadas de acostamento, onde não houver local apropriado para a operação de retorno ou entrada à esquerda, antes de realizar manobras para este lado o condutor deverá parar o veículo:",
    "options": [
      "No acostamento à direita.",
      "No centro da via.",
      "No acostamento da esquerda.",
      "Junto ao eixo central."
    ],
    "answer": 0,
    "explicacao": "O condutor deve aguardar no acostamento à direita antes de entrar à esquerda."
  },
  {
    "question": "Dar passagem pela esquerda, quando solicitado, é:",
    "options": [
      "Apenas uma questão de cortesia.",
      "Dever do condutor.",
      "Apenas uma regra para prevenir acidentes.",
      "Proibido a todo motorista."
    ],
    "answer": 1,
    "explicacao": "Dar passagem pela esquerda é um dever legal do condutor."
  },
  {
    "question": "Assinale a alternativa que complete a afirmação: Ao dirigir um veículo de __________ porte, tome todo o cuidado e seja responsável pela segurança dos veículos ___________, pelos não motorizados e pela segurança dos __________.",
    "options": [
      "Menor; maiores; condutores.",
      "Menor; maiores; ciclistas.",
      "Maior; menores; passageiros.",
      "Maior; menores; pedestres."
    ],
    "answer": 3,
    "explicacao": "O veículo de maior porte deve zelar pela segurança dos menores, dos não motorizados e dos pedestres."
  },
  {
    "question": "Onde não existir sinalização regulamentadora, a velocidade máxima nas vias de trânsito rápido será de:",
    "options": [
      "80 km/h.",
      "90 km/h para ônibus e micro-ônibus.",
      "110 km/h para automóveis e camionetas.",
      "60 km/h."
    ],
    "answer": 0,
    "explicacao": "Sem sinalização, a velocidade máxima em vias de trânsito rápido é 80 km/h."
  },
  {
    "question": "Manter o veículo na mão de direção e na faixa própria, de acordo com a legislação de trânsito, é:",
    "options": [
      "Imprudência do condutor.",
      "Dever de todo condutor de veículo.",
      "Proibido a todo condutor de veículo.",
      "Inconveniente, pois perturba o trânsito."
    ],
    "answer": 1,
    "explicacao": "É dever do condutor manter o veículo na mão e faixa corretas."
  },
  {
    "question": "Quando veículos, transitando por fluxos que se cruzem, se aproximarem de local não sinalizado, terá preferência de passagem:",
    "options": [
      "Os veículos que estiverem desenvolvendo maior velocidade.",
      "No caso de apenas um fluxo ser proveniente de rodovia, aquele que estiver circulando por ela.",
      "No caso de rotatória, aquele que for ingressar nela.",
      "Os veículos destinados à transporte de passageiros."
    ],
    "answer": 1,
    "explicacao": "Se um dos fluxos vem de rodovia, esse terá preferência."
  },
  {
    "question": "Os condutores de motocicletas, motonetas ou ciclomotores não poderão circular nas vias:",
    "options": [
      "Transportando crianças menores de 10 anos.",
      "Utilizando capacete de segurança, com viseira ou óculos de proteção.",
      "Segurando o guidom com as duas mãos.",
      "Usando vestuário de proteção."
    ],
    "answer": 0,
    "explicacao": "É proibido transportar crianças menores de 10 anos em motocicletas, motonetas ou ciclomotores."
  },
  {
    "question": "Ao aproximar-se de um cruzamento não sinalizado, surgindo um veículo a sua direita, o condutor deve:",
    "options": [
      "Parar o veículo, respeitando a preferência.",
      "Diminuir a velocidade.",
      "Usar atenção difusa e passar.",
      "Não se preocupar, se estiver transitando em uma avenida."
    ],
    "answer": 0,
    "explicacao": "Nos cruzamentos sem sinalização, deve-se respeitar a preferência de quem vem da direita."
  },
  {
    "question": "O condutor deve sinalizar e deslocar o seu veículo, com antecedência, para a faixa mais à direita da sua mão de direção para:",
    "options": [
      "Mudar de faixa de trânsito.",
      "Para retornar pela mesma via.",
      "Entrar à direita.",
      "Entrar à esquerda."
    ],
    "answer": 2,
    "explicacao": "Para entrar à direita, deve-se sinalizar e deslocar o veículo para a faixa mais à direita."
  },
  {
    "question": "A operação de carga ou descarga será regulamentada pelo órgão ou entidade sobre a via e é considerada:",
    "options": ["Parada.", "Estacionamento.", "Embarque.", "Desembarque."],
    "answer": 1,
    "explicacao": "Carga e descarga é considerada estacionamento."
  },
  {
    "question": "Os condutores de ciclomotores não poderão circular nas vias:",
    "options": ["Locais.", "Arteriais.", "Coletoras.", "De trânsito rápido."],
    "answer": 3,
    "explicacao": "Ciclomotores não podem circular em vias de trânsito rápido."
  },
  {
    "image": "quest14.png",
    "question": "Analise o desenho e marque a preferência:",
    "options": [
      "Do veículo 1, porque o veículo 2 irá fazer conversão.",
      "Do veículo 2, porque está à direita do veículo 1.",
      "Do veículo 1, porque está em linha reta.",
      "Nenhuma das respostas anteriores."
    ],
    "answer": 1,
    "explicacao": "A preferência é do veículo que está à direita."
  },
  {
    "question": "Assinale a alternativa correta:",
    "options": [
      "Todo veículo poderá retornar em qualquer local, nas vias urbanas, desde que facilite o trânsito para os outros veículos.",
      "A circulação pelos acostamentos das rodovias é permitida em situações de congestionamento.",
      "É dever do condutor parar o seu veículo antes de transpor linha férrea ou entrar em via com preferência de passagem.",
      "Todo condutor deve dar a preferência aos pedestres apenas quando estes se encontram sobre a faixa de segurança."
    ],
    "answer": 2,
    "explicacao": "É dever do condutor parar antes de linha férrea ou via com preferência."
  },
  {
    "question": "É dever de todo condutor de veículo:",
    "options": [
      "Ultrapassar outro veículo em interseções.",
      "Acionar dispositivo luminoso indicador (luz de seta), antes de mudar de direção.",
      "Ultrapassar outro veículo.",
      "Quando se tratar de transporte coletivo, parar o veículo para atender ao sinal de passageiro em qualquer local."
    ],
    "answer": 1,
    "explicacao": "O condutor deve sempre acionar a seta antes de mudar de direção."
  },
  {
    "question": "O cinto de segurança é obrigatório em todas as vias do território nacional para:",
    "options": [
      "O condutor, somente.",
      "Condutor e passageiros do banco dianteiro.",
      "Condutor e passageiros dos bancos dianteiro e traseiro.",
      "Condutor e passageiros do banco traseiro."
    ],
    "answer": 2,
    "explicacao": "O uso do cinto é obrigatório para condutor e todos os passageiros."
  },
  {
    "question": "Assinale a alternativa que completa a questão: Nas rodovias de pista dupla, onde não existir sinalização regulamentadora, a velocidade máxima será de _______ para automóveis, camionetas, motocicletas e demais veículos leves e de _______ para os veículos pesados.",
    "options": [
      "110 km/h; 90 km/h.",
      "80 km/h; 110 km/h.",
      "110 km/h; 60 km/h.",
      "90 km/h; 110 km/h."
    ],
    "answer": 0,
    "explicacao": "A velocidade máxima em pista dupla é 110 km/h para leves e 90 km/h para pesados."
  },
  {
    "question": "O procedimento do condutor ao ser ultrapassado em uma rodovia é:",
    "options": [
      "Somente diminuir a velocidade.",
      "Sinalizar, diminuir a velocidade, deslocando para o acostamento.",
      "Deslocar-se para a faixa da direita e acelerar a marcha.",
      "Facilitar a ultrapassagem."
    ],
    "answer": 3,
    "explicacao": "O condutor deve facilitar a ultrapassagem."
  },
  {
    "question": "Nas vias com iluminação pública, o uso do farol alto à noite é:",
    "options": [
      "Previsão legal, estabelecida no CTB.",
      "Permitido, quando sob chuva forte.",
      "Proibido, pois deve ser usado o farol baixo.",
      "Permitido, somente se o farol baixo estiver com defeito."
    ],
    "answer": 2,
    "explicacao": "Com iluminação pública deve-se usar farol baixo à noite."
  },
  {
    "question": "Ao regular a velocidade, o condutor deverá observar constantemente:",
    "options": [
      "A sinalização, apenas.",
      "Condições físicas da via, do veículo e da carga, as condições meteorológicas e a intensidade do trânsito.",
      "Somente, a intensidade do trânsito.",
      "Obedecer, somente, aos limites de velocidade."
    ],
    "answer": 1,
    "explicacao": "Deve-se considerar via, veículo, carga, clima e trânsito."
  },
  {
    "question": "Numa via sinalizada, estando proibido o estacionamento e permitida a parada de veículos, o tempo de parada deve ser:",
    "options": [
      "O necessário para atender a uma urgência.",
      "Apenas o necessário para fazer uma pequena manobra.",
      "Restrito às situações de emergência.",
      "O necessário para o embarque ou desembarque de passageiros, desde que não prejudique os fluxos de veículos e pedestres."
    ],
    "answer": 3,
    "explicacao": "Parada só é permitida pelo tempo de embarque ou desembarque."
  },
  {
    "question": "Segundo o Código de Trânsito Brasileiro, só é permitido frear bruscamente o veículo quando:",
    "options": [
      "Encontrar o endereço que estava procurando.",
      "Perceber que entrou numa rua que você não queria.",
      "Tiver algum veículo muito próximo à sua traseira, para assustá-lo.",
      "For necessário, se a finalidade for evitar um acidente."
    ],
    "answer": 3,
    "explicacao": "Só é permitido frear bruscamente para evitar acidente."
  },
  {
    "question": "Como são chamados os veículos que não têm prioridade de trânsito, nem livre circulação, mas possuem livre estacionamento e parada no local onde estiverem trabalhando?",
    "options": [
      "Veículos Prestadores de Serviço de Utilidade Pública.",
      "Veículos de Carga e Descarga.",
      "Veículos de entrega de gás e água mineral.",
      "Veículos de Transporte de Escolares."
    ],
    "answer": 0,
    "explicacao": "Esses são os veículos prestadores de serviço de utilidade pública."
  },
  {
    "image": "quest25.png",
    "question": "Diante da situação ilustrada na imagem, onde o semáforo acabara de mudar para o verde onde os veículos 1 e 2 aparecem e o trânsito à frente encontra-se congestionado, é correto afirmar que:",
    "options": [
      "Os veículos 1 e 2 podem iniciar seu deslocamento.",
      "Somente o veículo 1 poderá iniciar seu deslocamento.",
      "Somente o veículo 2 poderá iniciar seu deslocamento.",
      "Nenhum dos dois veículos poderá iniciar seu deslocamento."
    ],
    "answer": 2,
    "explicacao": "Não se deve avançar em cruzamento congestionado, mesmo com sinal verde."
  },
  {
    "question": "A circulação de bicicletas nos passeios somente será permitida, desde que devidamente sinalizado, autorizada pelo:",
    "options": [
      "Órgão máximo normativo de trânsito.",
      "Conselho Estadual de Trânsito.",
      "Órgão ou entidade com circunscrição sobre a via.",
      "Órgão máximo executivo de trânsito da união."
    ],
    "answer": 2,
    "explicacao": "Somente o órgão com circunscrição sobre a via pode autorizar."
  },
  {
    "question": "As crianças com idades de 1 a 4 anos, com peso entre 9 e 18 kg devem ser transportadas em:",
    "options": ["Bebê-conforto.", "Assento de elevação.", "Cinto de 3 pontos.", "Cadeirinha."],
    "answer": 3,
    "explicacao": "Crianças de 1 a 4 anos e 9 a 18kg devem usar cadeirinha."
  },
  {
    "question": "A transposição de faixas é um tipo de:",
    "options": ["Deslocamento lateral.", "Interseção.", "Logradouro.", "Via."],
    "answer": 0,
    "explicacao": "Transpor faixas é um deslocamento lateral."
  },
  {
    "question": "Analise a alternativa verdadeira:",
    "options": [
      "Toda interseção (cruzamento) não sinalizada é considerada mão única.",
      "Toda interseção (cruzamento) não sinalizada é considerada pista dupla.",
      "Toda interseção (cruzamento) não sinalizada é considerada mão dupla.",
      "Toda interseção não sinalizada é considerada preferencial."
    ],
    "answer": 2,
    "explicacao": "Interseções não sinalizadas são consideradas de mão dupla."
  },
  {
    "question": "Antes de colocar o veículo em circulação nas vias públicas, o condutor deverá verificar:",
    "options": [
      "A existência de equipamentos obrigatórios.",
      "O bom estado de funcionamento do veículo.",
      "O funcionamento dos equipamentos de segurança.",
      "Todas as afirmativas acima."
    ],
    "answer": 3,
    "explicacao": "É dever do condutor verificar equipamentos obrigatórios e condições de segurança antes de circular."
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