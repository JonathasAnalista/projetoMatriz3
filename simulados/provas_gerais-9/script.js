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
    "question": "A Carteira Nacional de Habilitação se tornará inválida quando:",
    "options": ["O veículo for removido.", "A Carteira Nacional de Habilitação for cassada.", "A Carteira Nacional de Habilitação for roubada.", "O veículo for retido."],
    "answer": 1,
    "explicacao": "A CNH deixa de ter validade quando for cassada."
  },
  {
    "question": "Diante de uma vítima de trânsito, não sendo possível a presença do profissional socorrista, deve-se primeiramente, verificar se:",
    "options": ["Ocorreu a obstrução de vias aéreas.", "Ocorreram fraturas.", "A vítima consegue ficar em pé e andar sozinha.", "Ocorreu sangramento abundante."],
    "answer": 0,
    "explicacao": "O primeiro passo é verificar se a vítima respira e se as vias aéreas estão desobstruídas."
  },
  {
    "question": "Transitar pela contramão de direção em vias com duplo sentido de circulação, exceto para ultrapassar outro veículo apenas pelo tempo necessário, respeitada a preferência do veículo que transitar em sentido contrário é infração ________, gerando como penalidade ________.",
    "options": ["Gravíssima; multa.", "Grave; multa (cinco vezes).", "Gravíssima; multa (três vezes).", "Grave; multa."],
    "answer": 3,
    "explicacao": "Transitar na contramão é infração de natureza grave, com multa simples."
  },
  {
    "question": "A prioridade de passagem na via e no cruzamento deverá se dar em velocidade:",
    "options": ["Normal.", "Máxima permitida para o local.", "Reduzida e com os devidos cuidados de segurança.", "Todas as afirmativas acima estão corretas."],
    "answer": 2,
    "explicacao": "A prioridade deve ser feita em velocidade reduzida e com atenção à segurança."
  },
  {
    "question": "Um veículo com a intenção de entrar em uma rodovia, estando à direita terá:",
    "options": ["Preferência de passagem.", "Prioridade de passagem.", "Que aguardar, pois a preferência é do veículo que circula pela rodovia.", "Nenhuma das alternativas anteriores."],
    "answer": 2,
    "explicacao": "O veículo que já está na rodovia tem preferência; quem entra deve aguardar."
  },
  {
    "question": "A queima incompleta de fuligem, pode causar:",
    "options": ["Alergia.", "Asma.", "Bronquite crônica.", "Todas as afirmativas estão corretas."],
    "answer": 3,
    "explicacao": "Fuligem mal queimada pode provocar alergias, asma e bronquite crônica."
  },
  {
    "question": "Como se desenvolve o processo de oxidação?",
    "options": ["Deixando de usar óleo no motor.", "Deixando de usar óleo no carburador.", "Deixando de usar aditivo na água do radiador.", "Nenhuma das questões acima."],
    "answer": 2,
    "explicacao": "Sem aditivo na água do radiador, as partes metálicas oxidam devido à corrosão."
  },
  {
    "question": "A soma de ações técnicas e atitudes que permitem prever e evitar acidentes, apesar das ações incorretas dos outros condutores, é chamada de:",
    "options": ["Direção correta.", "Direção corretiva.", "Direção defensiva.", "Direção de alto risco."],
    "answer": 2,
    "explicacao": "Esse é o conceito de direção defensiva."
  },
  {
    "image": "quest9.png",
    "question": "A placa A-41 adverte:",
    "options": ["Cruz de Santo André.", "Pista dividida.", "Comprimento máximo permitido.", "Passagem de nível sem barreira."],
    "answer": 0,
    "explicacao": "A-41 indica Cruz de Santo André."
  },
  {
    "question": "Ao conduzir o veículo sob chuva de granizo, o condutor deve:",
    "options": ["Aumentar a velocidade para passar rápido pela chuva.", "Parar o veículo em local seguro e aguardar o término da chuva.", "Ligar o pisca-alerta e parar o veículo imediatamente.", "Parar o veículo debaixo de viaduto para evitar avaria na lataria do veículo."],
    "answer": 1,
    "explicacao": "A atitude mais segura é parar em local seguro e esperar a chuva passar."
  },
  {
    "question": "Marque a incorreta: A regulagem correta da luz é de muita importância para a segurança do condutor. Na luz baixa, o farol do lado direito deve ter uma elevação de quinze graus em relação ao farol do lado esquerdo. Esse desnível permite:",
    "options": ["Iluminar a margem direita da via.", "Tornar visíveis as placas de sinalização.", "Ter um alcance de até 750 metros.", "Ter um alcance de até 750 metros."],
    "answer": 1,
    "explicacao": "A regulagem da luz baixa não serve para ver placas; essa é a incorreta."
  },
  {
    "question": "Uma infração cometida com o veículo licenciado no exterior, estando em trânsito no território nacional, a respectiva multa:",
    "options": ["Não existe multa para veículo licenciado no exterior.", "Deverá ser paga antes da saída do país.", "Não precisa ser paga.", "Deverá ser paga, após a sua saída do país."],
    "answer": 1,
    "explicacao": "A multa deve ser paga antes da saída do país."
  },
  {
    "question": "Complete a frase. Nos casos de parada cardíaca os lábios ficam imediatamente azulados, as pupilas encontram-se ______ e a vítima apresenta palidez acentuada.",
    "options": ["Contraías.", "Enrijecidas.", "Dilatadas.", "Rígidas."],
    "answer": 2,
    "explicacao": "Na parada cardíaca, as pupilas ficam dilatadas."
  },
  {
    "question": "A ultrapassagem de outro veículo em movimento deverá ser feita pela esquerda, observando-se a seguinte regra:",
    "options": [
      "Para ultrapassar, o condutor deverá ter certeza de que dispõe de espaço suficiente.",
      "Após ultrapassar, o condutor deverá buzinar avisando que completou a ultrapassagem.",
      "Para ultrapassar, o condutor deverá ligar os faróis altos.",
      "Ao ser ultrapassado, o condutor deverá aumentar a velocidade do seu veículo."
    ],
    "answer": 0,
    "explicacao": "O condutor só deve ultrapassar com espaço suficiente e segurança."
  },
  {
    "question": "Quanto aos veículos com prioridade, podemos afirmar:",
    "options": [
      "À aproximação dos veículos, devemos deixar livre a passagem pela faixa da esquerda.",
      "Os pedestres deverão aguardar no passeio.",
      "A passagem no cruzamento deverá se dar com velocidade reduzida.",
      "Todas as afirmativas acima estão corretas."
    ],
    "answer": 3,
    "explicacao": "Todas as alternativas sobre veículos com prioridade estão corretas."
  },
  {
    "question": "Os veículos que apresentam maior potencial de poluição do ar são aqueles:",
    "options": ["Que utilizam como combustíveis o diesel ou a gasolina.", "Que utilizam o sistema elétrico.", "Movidos a propulsão humana.", "Movidos a tração animal."],
    "answer": 0,
    "explicacao": "Veículos a diesel ou gasolina poluem mais que os demais listados."
  },
  {
    "image": "quest17.png",
    "question": "A placa R-23 assinala que os condutores de veículos, quando em movimento:",
    "options": ["São proibidos de trafegar com veículos automotores.", "Deverão permanecer no acostamento da pista de rolamento.", "Deverão conservar-se à direita da pista de rolamento.", "É proibido a ultrapassagem pela direita."],
    "answer": 2,
    "explicacao": "R-23 manda conservar-se à direita da via."
  },
  {
    "question": "Considere as seguintes condutas: I. Conduzir estando suspenso o direito de dirigir; II. Conduzir com categoria diferente da do veículo que esteja conduzindo, reincidentemente em 12 meses; III. Conduzir sem usar lentes corretoras de visão, aparelho auxiliar de audição, de prótese física ou as adaptações do veículo. Terá sua CNH cassada quem for flagrado conduzindo nos itens:",
    "options": ["I, apenas.", "I e II.", "II, apenas.", "I, II e III."],
    "answer": 1,
    "explicacao": "A cassação ocorre em casos de conduzir suspenso e conduzir categoria diferente reincidente."
  },
  {
    "question": "Interromper o funcionamento do motor sem justa razão (deixar o veículo “morrer”), após o início da prova, é falta:",
    "options": ["Leve - 3 pontos.", "Eliminatória - 4 pontos.", "Grave - 1 ponto.", "Média - 2 pontos."],
    "answer": 3,
    "explicacao": "Deixar o carro morrer é falta de natureza média."
  },
  {
    "question": "O trânsito de bicicletas e ciclomotores não é permitido nas calçadas das vias:",
    "options": ["Terrestres.", "Coletoras.", "Locais.", "De trânsito rápido."],
    "answer": 3,
    "explicacao": "Ciclistas não podem usar calçadas em vias de trânsito rápido."
  },
  {
    "question": "Fazer ou deixar que se faça reparo em veículo na via pública, salvo nos casos de impedimento absoluto de sua remoção e em que o veículo esteja devidamente sinalizado:",
    "options": [
      "Infração média.",
      "Infração grave, se em pista de rolamento de rodovias e vias de trânsito rápido.",
      "Infração leve, nas vias que não forem rodovias e vias de trânsito rápido.",
      "Alternativas 'B' e 'C' estão corretas."
    ],
    "answer": 3,
    "explicacao": "Pode ser leve ou grave, dependendo do local; por isso a correta é 'B e C'."
  },
  {
    "question": "Ao cruzar com outro veículo à noite, utilize a luz baixa. Evite a guerra de faróis. Em caso de ofuscamento, desvie sua visão para:",
    "options": ["Faixa central.", "A faixa da direita.", "A faixa da esquerda.", "O painel do veículo."],
    "answer": 1,
    "explicacao": "Para não perder referência, deve-se olhar para a faixa da direita."
  },
  {
    "question": "A finalidade da suspensão e dos amortecedores é:",
    "options": ["Manter as características da fábrica do veículo.", "Contribuir para o desgaste prematuro dos pneus.", "Causar a perda de controle do veículo.", "Manter a estabilidade do veículo."],
    "answer": 3,
    "explicacao": "A função é garantir estabilidade, segurança e conforto."
  },
  {
    "question": "Foi criado por lei federal para o controle de emissão de poluentes por veículos automotores:",
    "options": ["CONAMA.", "IBAMA.", "SISNAMA.", "PROCONVE."],
    "answer": 3,
    "explicacao": "O PROCONVE é o programa específico para controlar emissão veicular."
  },
  {
    "question": "A sinalização através de inscrições no solo serve para:",
    "options": ["Regulamentar as vias preferenciais.", "Reduzir os perigos existentes na via.", "Indicar cruzamento com vias locais.", "Melhorar a percepção do condutor quanto às condições de operação da via."],
    "answer": 3,
    "explicacao": "Serve para melhorar percepção e orientar melhor o condutor."
  },
  {
    "question": "Deixar o condutor, envolvido em acidente sem vítima, de adotar providências para remover o veículo do local, quando necessária tal medida para assegurar a segurança e a fluidez do trânsito:",
    "options": ["É falta de bom senso.", "É infração de trânsito de natureza leve com remoção do veículo.", "É infração de trânsito de natureza média.", "É necessário até a chegada de perícia."],
    "answer": 2,
    "explicacao": "É infração média, já que compromete a segurança e a fluidez."
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
    "question": "Ao dirigir em uma rodovia, ocorre uma situação de ventos laterais fortes. Nessa situação, você:",
    "options": [
      "Fecha as janelas do veículo e continua com a mesma velocidade.",
      "Abre a janela do veículo e continua com a mesma velocidade.",
      "Reduz a marcha do veículo adotando uma velocidade compatível com a situação e abre os vidros.",
      "Mantém a velocidade normal."
    ],
    "answer": 2,
    "explicacao": "A conduta segura é reduzir a velocidade e abrir vidros para equilibrar pressão."
  },
  {
    "question": "É órgão recursal:",
    "options": ["Departamento Nacional de Trânsito - DENATRAN.", "Polícia Rodoviária Federal - PRF.", "Junta Administrativa de Recursos de Infrações - JARI.", "Departamento de Trânsito - DETRAN."],
    "answer": 2,
    "explicacao": "A JARI é o órgão responsável pelos recursos das infrações."
  },
  {
    "question": "São tipos de hemorragia:",
    "options": ["Hemorragia externa e interna.", "Hemorragia aberta e fechada.", "Hemorragia externa e aberta.", "Hemorragia interna e fechada."],
    "answer": 0,
    "explicacao": "As hemorragias podem ser internas ou externas."
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