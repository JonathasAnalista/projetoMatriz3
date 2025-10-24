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
    "question": "O contato dos pneus com o solo é chamado de:",
    "options": ["Aderência.", "Derrapagem.", "Aquaplanagem.", "Hidroplanagem."],
    "answer": 0,
    "explicacao": "O contato do pneu com o solo que garante atrito é chamado de aderência."
  },
  {
    "question": "“Horário de pico” é aquele com tráfego:",
    "options": [
      "Disperso e com alta velocidade.",
      "Denso e com baixa velocidade.",
      "Desenvolvido ao final da madrugada e início do dia.",
      "Menor em relação a movimentação de pedestres e veículos."
    ],
    "answer": 1,
    "explicacao": "O horário de pico é caracterizado por tráfego denso e baixa velocidade."
  },
  {
    "question": "A atitude prudente para se livrar de veículos “colados” na retaguarda é:",
    "options": [
      "Desviar para a esquerda, alertando o outro condutor.",
      "Aumentar a velocidade em relação ao outro veículo.",
      "Acender o pisca alerta, fazendo sinal de braço para o outro condutor.",
      "Encostar para a direita da pista, reduzindo a velocidade se necessário, dando passagem para o veículo."
    ],
    "answer": 3,
    "explicacao": "A conduta correta é reduzir e dar passagem ao veículo colado atrás."
  },
  {
    "question": "A cabeça do motociclista, mesmo quando o corpo for inclinado, deverá permanecer sempre na posição:",
    "options": ["Vertical.", "Não exige posição correta.", "Horizontal.", "Contrária à inclinação do corpo."],
    "answer": 0,
    "explicacao": "A posição correta é manter a cabeça vertical para manter o equilíbrio."
  },
  {
    "question": "A cegueira momentânea causada pelo excesso de luz provoca:",
    "options": ["Ofuscamento.", "Catarata.", "Penumbra.", "Nevoeiro."],
    "answer": 0,
    "explicacao": "O excesso de luz provoca ofuscamento temporário."
  },
  {
    "question": "A colisão frontal é considerada a mais perigosa nos ensinamentos de direção defensiva porque:",
    "options": [
      "As velocidades se somam e o risco de morte aumenta.",
      "Em baixas velocidades, os danos materiais são muito altos.",
      "Só acontecem em rodovias federais.",
      "Os carros envolvidos, se de grande porte, não protegem os ocupantes."
    ],
    "answer": 0,
    "explicacao": "Na colisão frontal, as velocidades se somam, aumentando muito o risco."
  },
  {
    "question": "A desaceleração brusca e o uso incorreto dos freios podem provocar o desgarramento da parte traseira do veículo. Este tipo de reação é chamada de comportamento:",
    "options": ["Sub-esterçante.", "Inseguro.", "Sobre-esterçante.", "Inadequado."],
    "answer": 2,
    "explicacao": "Quando a traseira desliza, o veículo apresenta comportamento sobre-esterçante."
  },
  {
    "question": "A monitoração prática de pilotagem de moto em via urbana ou rural visa ensinar o motociclista sobre os perigos da condução no trânsito. Sobre o motociclista, assinale a alternativa incorreta:",
    "options": [
      "Ele deve sinalizar suas intenções por gestos ou luzes.",
      "Manter a distância de seguimento evita ser surpreendido por buracos e 'bocas-de-lobo'.",
      "Evite se posicionar no 'ponto cego' dos automóveis.",
      "O capacete do garupa não precisa de viseira."
    ],
    "answer": 3,
    "explicacao": "O capacete do garupa também precisa de viseira, é obrigatório."
  },
  {
    "question": "A distância percorrida pelo veículo, logo após o condutor perceber efetivamente o perigo e acionar os freios, é denominada:",
    "options": ["Distância de reação.", "Distância de parada.", "Distância de frenagem.", "Distância de percepção."],
    "answer": 2,
    "explicacao": "Distância de frenagem é a percorrida após acionar os freios."
  },
  {
    "question": "A finalidade da direção defensiva é a condução:",
    "options": [
      "Em alta velocidade.",
      "De forma educada e segura.",
      "De automatismos incorretos.",
      "Sem interferência do autocontrole."
    ],
    "answer": 1,
    "explicacao": "Direção defensiva significa dirigir de forma segura e responsável."
  },
  {
    "question": "A maioria dos acidentes está associada à condição adversa do condutor. A grande maioria deles é causada por:",
    "options": ["Falhas mecânicas.", "Deficiência da via.", "Falta de sinalização.", "Falhas humanas."],
    "answer": 3,
    "explicacao": "A principal causa dos acidentes de trânsito é a falha humana."
  },
  {
    "question": "A principal causa da colisão frontal em vias retas é:",
    "options": ["Retorno à esquerda.", "Ultrapassagem incorreta.", "Conversão à direita.", "Ausência de sinalização."],
    "answer": 1,
    "explicacao": "A maior parte das colisões frontais em retas acontece por ultrapassagem incorreta."
  },
  {
    "question": "A prioridade de passagem na via e no cruzamento deverá se dar em velocidade:",
    "options": [
      "Normal.",
      "Máxima permitida para o local.",
      "Reduzida e com os devidos cuidados de segurança.",
      "Todas as afirmativas acima estão corretas."
    ],
    "answer": 2,
    "explicacao": "A prioridade deve ser dada em velocidade reduzida e com cautela."
  },
  {
    "question": "A soma de ações técnicas e atitudes que permitem prever e evitar acidentes, apesar das ações incorretas dos outros condutores, é chamada de:",
    "options": ["Direção correta.", "Direção corretiva.", "Direção defensiva.", "Direção de alto risco."],
    "answer": 2,
    "explicacao": "Direção defensiva é exatamente isso: prevenir riscos mesmo com falhas alheias."
  },
  {
    "question": "A ultrapassagem de outro veículo em movimento deverá ser feita pela esquerda, observando-se a seguinte regra:",
    "options": [
      "Ao ser ultrapassado, o condutor deverá aumentar a velocidade do seu veículo.",
      "Após ultrapassar, o condutor deverá buzinar avisando que completou a ultrapassagem.",
      "Para ultrapassar, o condutor deverá ligar os faróis altos.",
      "Para ultrapassar, o condutor deverá ter certeza de que dispõe de espaço suficiente."
    ],
    "answer": 3,
    "explicacao": "Ultrapassagem só deve ser feita quando houver espaço suficiente."
  },
  {
    "question": "A utilização correta do guia da cidade proporciona deslocamentos seguros, economia de tempo e de combustível. Logo, você deve:",
    "options": [
      "Guardar o guia em casa.",
      "Decorar o nome de todas as vias da cidade.",
      "Manter o guia no porta-luvas, utilizando-o de acordo com as instruções nele contidas.",
      "Manter o guia no porta-malas, junto com as ferramentas."
    ],
    "answer": 2,
    "explicacao": "O guia deve estar acessível no porta-luvas para consulta quando necessário."
  },
  {
    "question": "A única maneira de tirar algum proveito de acidente de trânsito é:",
    "options": [
      "Fazer ocorrência.",
      "Realizar perícia.",
      "Receber o seguro obrigatório.",
      "Aprender como agir para evitar que ele se repita."
    ],
    "answer": 3,
    "explicacao": "O aprendizado com acidentes evita que eles se repitam."
  },
  {
    "question": "A velocidade que permite ao condutor reagir diante de um obstáculo, um pedestre ou outro veículo é:",
    "options": [
      "Compatível com as características da via onde está circulando.",
      "Máxima permitida para a via onde está circulando.",
      "Máxima de 80 km/h, de acordo com a legislação de trânsito.",
      "De 30 km/h, em qualquer via."
    ],
    "answer": 0,
    "explicacao": "A velocidade deve ser compatível com a via e situação para garantir reação segura."
  },
  {
    "question": "Adequar a velocidade às diferentes características das vias, permite ao condutor dirigir numa velocidade segura. Por isso, você deve:",
    "options": [
      "Decidir em cada situação qual a velocidade segura, obedecendo o limite estabelecido, observando as suas próprias condições, as de seu veículo e da via.",
      "Verificar se outros veículos trafegam em velocidade segura e imprimir maior velocidade no seu.",
      "Confiar na sua habilidade de dirigir, pois dirige há anos.",
      "Saber que tem um veículo potente e que pode fazer percursos radicais."
    ],
    "answer": 0,
    "explicacao": "A velocidade segura depende da via, do veículo e das condições do condutor."
  },
  {
    "question": "Ao adequar a velocidade às diferentes condições da via, do veículo, meteorológicas e a intensidade do trânsito, o condutor deve:",
    "options": [
      "Transitar sempre abaixo da metade da velocidade máxima estabelecida.",
      "Verificar se outros veículos trafegam em velocidade segura e imprimir maior velocidade no seu.",
      "Redobrar a atenção e aumentar a velocidade.",
      "Decidir em cada situação, qual a velocidade segura, dentro do limite estabelecido."
    ],
    "answer": 3,
    "explicacao": "A escolha da velocidade deve ser adequada às condições, mas sempre dentro do limite."
  },
  {
    "question": "Além de uma boa revisão no veículo, há outros cuidados a serem tomados para uma viagem tranquila e segura. Sobre isso, assinale a alternativa INCORRETA:",
    "options": [
      "Deve-se ajudar a evitar acidentes facilitando a ultrapassagem.",
      "Ficar atento aos sinais dos outros condutores.",
      "Dar seta à esquerda para indicar condição segura para ultrapassagem ao veículo de trás.",
      "Manter faróis baixos acesos durante o dia nas rodovias."
    ],
    "answer": 2,
    "explicacao": "Nunca se deve dar seta à esquerda para 'autorizar' ultrapassagem de outro veículo."
  },
  {
    "question": "Alguns fenômenos naturais reduzem a nossa capacidade visual e podem tornar-se tão extremos que nos impossibilitam ver outros veículos em condições adversas. A que esses fenômenos estão relacionados?",
    "options": ["Luz.", "Tempo.", "Estrada.", "Trânsito."],
    "answer": 1,
    "explicacao": "Fenômenos como chuva, neblina e cerração estão relacionados ao tempo."
  },
  {
    "question": "Ao aproximar-se de qualquer tipo de cruzamento, o condutor deve, exceto:",
    "options": [
      "Manter a velocidade.",
      "Transitar em velocidade reduzida.",
      "Transitar em velocidade moderada.",
      "Dar passagem a pedestres."
    ],
    "answer": 0,
    "explicacao": "No cruzamento nunca se deve manter velocidade, é preciso reduzir."
  },
  {
    "question": "Ao atravessar uma passagem de nível com uma ferrovia, sem cancela, você deve:",
    "options": [
      "Reduzir a velocidade e atravessar a via férrea.",
      "Parar o veículo, olhar para ambos os lados e efetuar o cruzamento com segurança.",
      "Buzinar antes de atravessar.",
      "Acender os faróis do veículo."
    ],
    "answer": 1,
    "explicacao": "Na ausência de cancela, deve-se parar, observar os dois lados e só então atravessar."
  },
  {
    "question": "Ao atravessarmos por locais onde haja fumaça devemos:",
    "options": [
      "Diminuir a velocidade.",
      "Aumentar a velocidade.",
      "Fechar os vidros e ligar os faróis altos.",
      "Fechar os vidros, diminuir a velocidade e ligar os faróis baixos."
    ],
    "answer": 3,
    "explicacao": "A conduta correta é reduzir, fechar vidros e usar farol baixo."
  },
  {
    "question": "Ao conduzir o veículo sob chuva de granizo, o condutor deve:",
    "options": [
      "Aumentar a velocidade para passar rápido pela chuva.",
      "Parar o veículo em local seguro e aguardar o término da chuva.",
      "Ligar o pisca-alerta e parar o veículo imediatamente.",
      "Parar o veículo debaixo de viaduto para evitar avaria na lataria do veículo."
    ],
    "answer": 1,
    "explicacao": "A ação mais segura é parar em local seguro e esperar a chuva passar."
  },
  {
    "question": "Ao passar sobre um ponto de alagamento e perceber que o freio começa a apresentar falhas, o condutor deve:",
    "options": [
      "Acelerar utilizando somente uma marcha.",
      "Engrenar a primeira marcha para manter o motor acelerado.",
      "Manter a velocidade constante até chegar ao destino.",
      "Reduzir a velocidade, testar o freio e, se necessário, sinalizar, parar e procurar socorro."
    ],
    "answer": 3,
    "explicacao": "O correto é testar os freios e parar se necessário."
  },
  {
    "question": "Ao dirigir em uma rodovia, ocorre uma situação de ventos laterais fortes. Nessa situação, você:",
    "options": [
      "Fecha as janelas do veículo e continua com a mesma velocidade.",
      "Abre a janela do veículo e continua com a mesma velocidade.",
      "Reduz a marcha do veículo adotando uma velocidade compatível com a situação e abre os vidros.",
      "Mantém a velocidade normal."
    ],
    "answer": 2,
    "explicacao": "Com ventos fortes, deve-se reduzir a velocidade e estabilizar o veículo."
  },
  {
    "question": "Ao notar árvores ou vegetação que possam estar encobrindo a sinalização, o condutor deve:",
    "options": [
      "Redobrar a atenção e reduzir a velocidade para identificar restrições de circulação.",
      "Efetuar a poda das árvores para identificar a sinalização.",
      "Solicitar ao agente de trânsito que efetue a poda das árvores.",
      "Redobrar a atenção, reduzir a velocidade e não se preocupar com a sinalização."
    ],
    "answer": 0,
    "explicacao": "Se a sinalização estiver encoberta, deve-se redobrar a atenção e reduzir a velocidade."
  },
  {
    "question": "Ao cruzar com outro veículo à noite, utilize a luz baixa. Evite a guerra de faróis. Em caso de ofuscamento, desvie sua visão para:",
    "options": ["Faixa central.", "A faixa da direita.", "A faixa da esquerda.", "O painel do veículo."],
    "answer": 1,
    "explicacao": "A visão deve ser desviada para a faixa da direita, ajudando a manter a referência da via."
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

