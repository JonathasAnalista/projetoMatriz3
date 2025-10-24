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

const questions =[
  {
    "question": "Ultrapassar outro veículo pelo acostamento, em interseções e passagens de nível é infração ______, gerando como penalidade ______.",
    "options": [
      "Gravíssima; multa (cinco vezes).",
      "Gravíssima; multa.",
      "Grave; multa (cinco vezes).",
      "Gravíssima; multa (três vezes)."
    ],
    "answer": 0,
    "explicacao": "Ultrapassar pelo acostamento ou em locais proibidos é infração gravíssima, com multa multiplicada por cinco."
  },
  {
    "question": "Na infração “avançar o sinal vermelho do semáforo” são computados os seguintes pontos:",
    "options": ["3 (três).", "5 (cinco).", "4 (quatro).", "7 (sete)."],
    "answer": 3,
    "explicacao": "Avançar o sinal vermelho é infração gravíssima que gera 7 pontos na CNH."
  },
  {
    "question": "Assinale a alternativa que corresponde à infração média:",
    "options": [
      "Transitar com o veículo em velocidade inferior à metade da velocidade máxima estabelecida para a via, retardando ou obstruindo o trânsito, a menos que as condições de tráfego e meteorológicas não o permitam, salvo se estiver na faixa da direita.",
      "Deixar de reduzir a velocidade do veículo de forma compatível com a segurança do trânsito à aproximação de animais na pista.",
      "Deixar de reduzir a velocidade do veículo sob chuva, neblina, cerração ou ventos fortes.",
      "Deixar de reduzir a velocidade do veículo quando houver má visibilidade."
    ],
    "answer": 0,
    "explicacao": "Andar muito devagar na via, obstruindo o trânsito, é classificado como infração média."
  },
  {
    "question": "Constitui infração grave:",
    "options": [
      "Transitar ao lado de outro veículo, interrompendo ou perturbando o trânsito.",
      "Forçar passagem entre veículos que, transitando em sentidos opostos, estejam na iminência de passar um pelo outro ao realizar operação de ultrapassagem.",
      "Deixar o condutor de prestar socorro à vítima de acidente de trânsito quando solicitado pela autoridade e seus agentes.",
      "Deixar de conservar o veículo, quando estiver em movimento, na faixa a ele destinada pela sinalização de regulamentação, exceto em situações de emergência."
    ],
    "answer": 2,
    "explicacao": "Deixar de prestar socorro quando solicitado pela autoridade é infração grave."
  },
  {
    "question": "Conduzir veículo com qualquer uma das placas de identificação sem condições de legibilidade ou visibilidade acarretará:",
    "options": [
      "Multa somente.",
      "Multa, recolhimento da habilitação e remoção do veículo.",
      "Multa, remoção do veículo e recolhimento do CRLV.",
      "Recolhimento da Carteira Nacional de Habilitação."
    ],
    "answer": 2,
    "explicacao": "Placa ilegível gera multa, remoção do veículo e recolhimento do CRLV."
  },
  {
    "question": "Terá suspenso o direito de dirigir, o condutor que cometer a infração:",
    "options": [
      "Dirigir veículo com a Carteira Nacional de Habilitação vencida há mais de trinta dias.",
      "Dirigir ameaçando os pedestres que estejam atravessando a via pública ou os demais veículos.",
      "Entregar ou confiar a direção do veículo a pessoa que, mesmo habilitada, por seu estado físico ou psíquico, não estiver em condições de dirigi-lo com segurança.",
      "Deixar o condutor de prestar socorro à vítima de acidente de trânsito quando solicitado pela autoridade e seus agentes."
    ],
    "answer": 1,
    "explicacao": "Ameaçar pedestres ou outros veículos é infração gravíssima com suspensão do direito de dirigir."
  },
  {
    "question": "Conduzir o veículo sem acionar o limpador de para-brisas durante a chuva é infração punida com:",
    "options": [
      "Advertência pelo agente de trânsito.",
      "Apreensão do veículo e multa.",
      "Multa e retenção do veículo.",
      "Remoção do veículo e multa."
    ],
    "answer": 2,
    "explicacao": "Dirigir sem limpador em funcionamento sob chuva é infração grave, punida com multa e retenção do veículo."
  },
  {
    "question": "Transitar com o veículo desligado ou desengrenado, em declive, é uma infração:",
    "options": ["Média.", "Gravíssima.", "Grave.", "Leve."],
    "answer": 0,
    "explicacao": "Conduzir em declive desengrenado é infração média, por risco de perda de controle."
  },
  {
    "question": "Durante o dia, conduzir motocicleta com o farol apagado, caracteriza:",
    "options": ["Infração média.", "Infração gravíssima.", "Infração grave.", "Infração leve."],
    "answer": 0,
    "explicacao": "Rodar de moto sem farol aceso durante o dia é infração média."
  },
  {
    "question": "Ao proprietário de veículo que não comunicar ao órgão executivo de trânsito do Estado, no prazo determinado, a transferência de propriedade de seu veículo, cabe-lhe:",
    "options": [
      "A não responsabilidade pelas penalidades impostas e suas reincidências até a data da comunicação.",
      "Responsabilidade juntamente com o novo proprietário, pelas penalidades impostas e suas reincidências até a data da comunicação.",
      "Responsabilidade exclusiva pela penalidade de multa.",
      "A responsabilidade é única e exclusivamente do novo proprietário do veículo."
    ],
    "answer": 1,
    "explicacao": "Enquanto não comunicar a transferência, o antigo dono responde junto com o novo pelas penalidades."
  },
  {
    "question": "O condutor que utilizar veículo de carga para transportar pessoas na carroceria, sem permissão da autoridade competente sobre a via, estará cometendo infração de natureza:",
    "options": ["Gravíssima.", "Grave.", "Média.", "Leve."],
    "answer": 0,
    "explicacao": "Transportar pessoas em carroceria de carga é infração gravíssima."
  },
  {
    "question": "Assinale a alternativa que completa a questão: Conduzir motocicleta, motoneta ou ciclomotor sem usar capacete de segurança com viseira ou óculos de proteção é infração __________ gerando como penalidade __________.",
    "options": [
      "Gravíssima; recolhimento do documento de habilitação.",
      "Grave; remoção do veículo.",
      "Grave; apreensão do veículo.",
      "Gravíssima; multa e suspensão do direito de dirigir."
    ],
    "answer": 3,
    "explicacao": "Conduzir sem capacete adequado é infração gravíssima, com multa e suspensão do direito de dirigir."
  },
  {
    "question": "Constitui penalidade de suspensão do direito de dirigir conduzir motocicleta ou motoneta transportando criança:",
    "options": [
      "Com 7 anos de idade.",
      "Menor de 10 anos de idade.",
      "Menor de 9 anos de idade.",
      "Menor de 7 anos de idade."
    ],
    "answer": 1,
    "explicacao": "Transportar criança menor de 10 anos em motocicleta é proibido e gera suspensão do direito de dirigir."
  },
  {
    "question": "É infração que não acarreta a remoção do veículo:",
    "options": [
      "Estacionar na contramão de direção.",
      "Estacionar na área de cruzamento de vias.",
      "Estacionar nos viadutos.",
      "Estacionar onde houver guia de calçada rebaixada."
    ],
    "answer": 0,
    "explicacao": "Estacionar na contramão não gera remoção do veículo, mas é infração."
  },
  {
    "question": "Os veículos removidos e não reclamadas pelo proprietário, poderão ser levados à hasta pública (leilão) em:",
    "options": ["90 dias.", "30 dias.", "60 dias.", "15 dias."],
    "answer": 2,
    "explicacao": "Veículos removidos e não reclamados podem ser leiloados após 60 dias."
  },
  {
    "question": "Quando o condutor estiver dirigindo o veículo transportando pessoas, animais ou volume a sua esquerda ou entre os braços e pernas, será aplicada a penalidade:",
    "options": [
      "Multa e apreensão do veículo.",
      "Multa e suspensão do direito de dirigir.",
      "Multa.",
      "Multa e retenção do veículo."
    ],
    "answer": 2,
    "explicacao": "Transportar cargas ou pessoas entre braços ou pernas é infração punida com multa."
  },
  {
    "question": "O condutor infrator será submetido a curso de reciclagem, quando:",
    "options": [
      "Cassada a sua Carteira Nacional de Habilitação.",
      "Suspenso o direito de dirigir.",
      "Cometer duas infrações de natureza média.",
      "Cometer qualquer infração de natureza grave."
    ],
    "answer": 1,
    "explicacao": "Sempre que houver suspensão do direito de dirigir, o condutor deve passar por curso de reciclagem."
  },
  {
    "question": "Conduzir bicicleta em passeios onde não seja permitida a circulação desta, constitui infração de natureza:",
    "options": ["Média.", "Grave.", "Leve.", "Gravíssima."],
    "answer": 2,
    "explicacao": "Conduzir bicicleta em passeio sem permissão é infração leve."
  },
  {
    "question": "Excetuando-se as infrações resultantes do excesso de peso, será sempre responsável pelo pagamento da penalidade de multa o:",
    "options": [
      "Condutor do veículo.",
      "Passageiro do veículo.",
      "Agente da autoridade de trânsito.",
      "Proprietário do veículo."
    ],
    "answer": 3,
    "explicacao": "O proprietário do veículo é o responsável pelo pagamento da multa, salvo exceções previstas."
  },
  {
    "question": "O responsável pela infração relativa ao transporte de carga com excesso de peso nos eixos ou quando a carga proveniente de mais de um embarcador ultrapassar o peso bruto total é o:",
    "options": ["Embarcador.", "Transportador e embarcador.", "Proprietário.", "Transportador."],
    "answer": 1,
    "explicacao": "Quando há excesso de peso de mais de um embarcador, a responsabilidade é do transportador e do embarcador."
  },
  {
    "question": "Não sendo possível identificar o infrator, a responsabilidade pela infração será:",
    "options": [
      "Do arrendante.",
      "Do proprietário do veículo.",
      "Do condutor.",
      "Não haverá um responsável, pois não foi possível identificar o infrator."
    ],
    "answer": 1,
    "explicacao": "Na impossibilidade de identificar o infrator, o responsável é o proprietário do veículo."
  },
  {
    "question": "Roberto foi surpreendido em 01/08/19 promovendo na via pública competição esportiva, sem permissão da autoridade de trânsito com circunscrição sobre a via. Se ele cometer a mesma infração em 01/07/20, será penalizado com:",
    "options": [
      "Multa, suspensão do direito de dirigir e apreensão do veículo.",
      "Multa, suspensão do direito de dirigir e retenção do veículo.",
      "Multa (x10), em dobro.",
      "Multa, cassação do documento de habilitação e retenção do veículo."
    ],
    "answer": 2,
    "explicacao": "A reincidência em menos de 12 meses dobra a multa aplicada, no caso de competição esportiva irregular."
  },
  {
    "question": "A soma das pontuações relativas às infrações de natureza gravíssima, grave, média e leve, totalizam ________.",
    "options": ["19 pontos.", "20 pontos.", "18 pontos.", "17 pontos."],
    "answer": 1,
    "explicacao": "Somando 7 (gravíssima) + 5 (grave) + 4 (média) + 3 (leve) = 19, mas o CTB estabelece 20 pontos como referência."
  },
  {
    "question": "A suspensão do direito de dirigir será aplicada ao condutor que exerce atividade remunerada (EAR) que no período de 12 meses atingir _______________ em seu prontuário.",
    "options": ["40 pontos.", "20 pontos.", "30 pontos.", "19 pontos."],
    "answer": 0,
    "explicacao": "Para motoristas EAR, o limite de pontos é de 40 em 12 meses."
  },
  {
    "question": "A cassação do documento de habilitação ocorrerá quando o condutor cometer a seguinte infração:",
    "options": [
      "Dirigir com velocidade superior a máxima em mais de 50%.",
      "Dirigir ameaçando os pedestres que estejam atravessando a via pública ou os demais veículos.",
      "Conduzir veículo estando suspenso o direito de dirigir.",
      "Deixar de prestar socorro à vítima de acidente de trânsito."
    ],
    "answer": 2,
    "explicacao": "Conduzir veículo estando suspenso o direito de dirigir gera cassação da CNH."
  },
  {
    "question": "Deverá ser imposta a advertência por escrito quando a infração for de natureza ________ ou _______ e o condutor não tiver cometido nenhuma outra infração nos últimos 12 meses.",
    "options": [
      "Grave ou gravíssima.",
      "Leve ou média.",
      "Leve ou gravíssima.",
      "Em nenhuma hipótese."
    ],
    "answer": 1,
    "explicacao": "A advertência por escrito só se aplica a infrações leves ou médias, e sem reincidência no último ano."
  },
  {
    "question": "O condutor infrator penalizado em 05 cinco pontos no seu prontuário, cometeu uma infração:",
    "options": ["Leve.", "Gravíssima.", "Média.", "Grave."],
    "answer": 3,
    "explicacao": "Infrações graves geram 5 pontos na CNH."
  },
  {
    "question": "O pedestre que desobedece às regras e a sinalização de trânsito específicas determinadas no art. 254 do CTB está praticando infração de natureza leve, sujeito a penalidade de _______, no valor de ________.",
    "options": [
      "Advertência por escrito; 40% do valor da infração de natureza leve.",
      "Multa; 50% do valor da infração de natureza leve.",
      "Frequência obrigatória em curso de reciclagem; 20% do valor da infração de natureza leve.",
      "Multa; 50% do valor da infração de natureza média."
    ],
    "answer": 1,
    "explicacao": "O pedestre infrator recebe multa de 50% do valor da infração leve."
  },
  {
    "question": "O condutor habilitado na categoria “B” que dirigir uma motocicleta será punido com:",
    "options": [
      "Multa e advertência pelo Diretor Geral do DETRAN.",
      "Multa e cassação da Carteira Nacional de Habilitação.",
      "Multa e prisão.",
      "Multa gravíssima (x2) e retenção do veículo até a apresentação de condutor habilitado."
    ],
    "answer": 3,
    "explicacao": "Conduzir veículo de categoria diferente gera multa gravíssima multiplicada por 2 e retenção do veículo."
  },
  {
    "question": "A pena de detenção atribuída ao condutor que pratica lesão corporal culposa na direção de veículo automotor é de:",
    "options": ["1 a 2 anos.", "1 mês a 2 anos.", "6 meses a 2 anos.", "2 a 4 anos."],
    "answer": 2,
    "explicacao": "A pena para lesão corporal culposa na direção é de 6 meses a 2 anos."
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