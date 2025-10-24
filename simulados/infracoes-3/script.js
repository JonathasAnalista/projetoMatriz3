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
    "question": "Dirigir veículo com Carteira Nacional de Habilitação ou Permissão para Dirigir cassada ou com suspensão do direito de dirigir é infração __________, com fator agravante __________, tendo como medidas administrativas __________ e __________.",
    "options": [
      "Gravíssima; x5; apreensão do veículo.",
      "Grave; x5; recolhimento da habilitação; remoção do veículo.",
      "Gravíssima; x3; Recolhimento da habilitação e Retenção do veículo.",
      "Gravíssima; x2; recolhimento da habilitação; remoção do veículo."
    ],
    "answer": 2,
    "explicacao": "A infração é gravíssima, com fator agravante de x3, e as medidas administrativas incluem o recolhimento da habilitação e a retenção do veículo. A apreensão não existe mais e não é uma medida administrativa prevista para essa infração."
  },
  {
    "question": "Dirigir veículo sem as adaptações impostas pela Comissão de Exames Especiais do DETRAN por ocasião da concessão ou da renovação da habilitação para dirigir, constitui infração _____________, gerando como penalidade ____________.",
    "options": [
      "Gravíssima; retenção do veículo.",
      "Gravíssima; multa.",
      "Grave; multa (três vezes).",
      "Grave; advertência por escrito."
    ],
    "answer": 1,
    "explicacao": "Dirigir sem as adaptações necessárias é uma infração gravíssima, e a penalidade é a multa. A retenção do veículo não é uma medida administrativa prevista para essa infração."
  },
  {
    "question": "A multa reparatória, determinada pelo Código de Trânsito Brasileiro, destina-se a:",
    "options": [
      "Reparar ou indenizar prejuízo material que tenha resultado de crime.",
      "Indenizar qualquer prejuízo material.",
      "Suspender a penalidade de cassação da Carteira Nacional de Habilitação.",
      "Indenizar dano moral."
    ],
    "answer": 0,
    "explicacao": "A multa reparatória é destinada a reparar ou indenizar prejuízos materiais resultantes de crime, conforme previsto no Código de Trânsito Brasileiro."
  },
  {
    "question": "O pagamento da multa poderá ser efetuado até a data do vencimento expressa na notificação, por:",
    "options": [
      "100% do seu valor.",
      "80% do seu valor.",
      "50% do seu valor.",
      "90% do seu valor."
    ],
    "answer": 1,
    "explicacao": "O pagamento da multa pode ser efetuado com desconto de 20% do seu valor, ou seja, o condutor paga 80% do valor total da multa se o fizer até a data do vencimento expressa na notificação."
  },
  {
    "question": "A advertência por escrito deverá ser aplicada pela autoridade de trânsito ao condutor do veículo quando:",
    "options": [
      "Ficar caracterizado que a infração foi involuntária e sem gravidade, mesmo que reincidente.",
      "O agente de trânsito assim o desejar.",
      "Se tratar de infração leve ou média, não tendo condutor cometido outra infração nos últimos doze meses.",
      "O condutor se arrepender."
    ],
    "answer": 2,
    "explicacao": "A advertência por escrito é aplicada quando a infração é leve ou média e o condutor não cometeu outra infração nos últimos doze meses. A advertência é uma medida educativa e não gera penalidade."
  },

  {
    "question": "A fiscalização da gestão de trânsito poderá ser realizada com a utilização de aparelhos que, quanto ao modo de operação, podem ser classificados em:",
     "options": ["Automático e não automático.", "Eletrônico e audiovisual.", "Fixo e móvel.", "Todas estão corretas."], 
     "answer": 0,
     "explicacao": "A fiscalização pode ser realizada com aparelhos automáticos e não automáticos, abrangendo diversas tecnologias, incluindo eletrônicos e audiovisuais."
  },
  {
    "question": "A cassação da CNH é um procedimento que:",
     "options": ["O agente da autoridade de trânsito pode tomar quando julgar que o condutor do veículo cometeu uma infração gravíssima.", "Depende de decisão pessoal da autoridade de trânsito.", "O agente da autoridade de trânsito pode tomar, desde que comunique com antecedência à autoridade policial local.", "Deve ser adotado apenas pela autoridade de trânsito, conforme estabelecido no Código de Trânsito Brasileiro."], 
     "answer": 3,
     "explicacao": "A cassação da CNH deve ser adotada pela autoridade de trânsito, conforme estabelecido no Código de Trânsito Brasileiro, e não pode ser uma decisão unilateral do agente."
  },
  {
    "question": "A cada infração cometida de natureza grave, são computados os seguintes números de pontos:",
     "options": ["5", "7", "3", "4"], 
     "answer": 0,
     "explicacao": "Cada infração de natureza grave resulta na computação de 5 pontos na CNH do condutor, conforme o Código de Trânsito Brasileiro."},
  {
    "question": "A critério do agente, não se dará a retenção imediata do veículo:",
     "options": ["De transporte de pessoas e suas bagagens.", "De transporte de valores.", "De transporte coletivo de passageiros e produtos perigosos e perecíveis.", "De transporte de passageiros."], 
     "answer": 2,
     "explicacao": "A retenção imediata do veículo não se dará para veículos de transporte coletivo de passageiros e produtos perigosos e perecíveis, a critério do agente, conforme o Código de Trânsito Brasileiro."
  },
  {
    "question": "A frequência obrigatória em curso de reciclagem, ocorrerá se o condutor:",
     "options": ["Tiver suspenso o direito de dirigir.", "Se envolver em acidente grave para o qual haja contribuído.", "For condenado judicialmente por delito de trânsito.", "Todas acima."], 
     "answer": 3,
     "explicacao": "A frequência obrigatória em curso de reciclagem ocorre se o condutor tiver suspenso o direito de dirigir, se envolver em acidente grave para o qual haja contribuído ou for condenado judicialmente por delito de trânsito."
  },
  {
    "question": "Considerando o erro metrológico admitido para o etilômetro, a partir de quantos decigramas de álcool por litro de ar é considerado crime de trânsito?",
     "options": ["0,27 mg/l", "0,28 mg/l", "0,34 mg/l", "0,50 mg/l"], 
     "answer": 2,
     "explicacao": "O erro metrológico admitido para o etilômetro é de 0,34 mg/l. A partir desse valor, é considerado crime de trânsito, conforme o Código de Trânsito Brasileiro."
  },
  {
    "question": "A pena de detenção atribuída ao condutor afasta-se do veículo do local do acidente, para fugir à responsabilidade penal ou civil que lhe possa ser atribuída é de:",
     "options": ["1 a 4 anos", "2 a 4 anos", "6 meses a 1 ano", "6 meses a 2 anos"], 
     "answer": 2,
     "explicacao": "A pena de detenção atribuída ao condutor que se afasta do veículo do local do acidente para fugir à responsabilidade penal ou civil é de 6 meses a 1 ano, conforme o Código de Trânsito Brasileiro."
  },
  {
    "question": "A remoção do veículo ocorrerá quando o condutor:", 
    "options": ["Transitar com o veículo sem nova vistoria, após acidente.", "Estacionar onde houver guia da calçada rebaixada, para entrada ou saída de veículo.", "Parar o veículo fora da posição estabelecida.", "Estacionar na frente de qualquer escola."], 
    "answer": 1,
    "explicacao": "A remoção do veículo ocorrerá quando o condutor estacionar onde houver guia da calçada rebaixada, para entrada ou saída de veículo, conforme o Código de Trânsito Brasileiro."
  },
  {
    "question": "A responsabilidade pelas infrações referente a atos praticados na direção dos veículos cabe:", 
    "options": ["Ao proprietário do veículo.", "Ao proprietário do veículo e ao condutor.", "Aos pais ou responsáveis pelo condutor.", "Ao condutor."], 
    "answer": 3,
    "explicacao": "A responsabilidade pelas infrações referentes a atos praticados na direção dos veículos cabe ao condutor, conforme o Código de Trânsito Brasileiro. O proprietário pode ser responsabilizado em casos específicos, mas a infração é atribuída principalmente ao condutor."
  },
  {
    "question": "Ao condutor infrator, conforme o caso, podem ser aplicadas as seguintes penalidades:", 
    "options": ["Advertência por escrito, multa, suspensão do direito de dirigir, cassação da CNH, cassação da PPD e frequência em curso de reciclagem.", "Multa, advertência, apreensão e remoção do veículo.", "Multa, apreensão e cassação da permissão para dirigir.", "Multa, advertência, cassação da CNH e apreensão do veículo, apenas."], 
    "answer": 0,
    "explicacao": "As penalidades aplicáveis ao condutor infrator incluem advertência por escrito, multa, suspensão do direito de dirigir, cassação da CNH, cassação da PPD e frequência em curso de reciclagem, conforme o Código de Trânsito Brasileiro."
  },
  {
    "question": "Ao condutor que se evadir da fiscalização, não submetendo o veículo à pesagem obrigatória nos pontos de passagem, fixos ou móveis, será aplicado(a):",
    "options": [
      "Advertência por escrito e multa.",
      "Frequência obrigatória em curso de reciclagem.",
      "Multa, além da obrigação de retornar ao ponto de elevação para fim de pesagem obrigatória.",
      "Somente a obrigação de retornar ao ponto de elevação para fim de pesagem obrigatória."
    ],
    "answer": 2,
    "explicacao": "Ao condutor que se evadir da fiscalização e não submeter o veículo à pesagem obrigatória, será aplicada uma multa, além da obrigação de retornar ao ponto de elevação para a pesagem obrigatória, conforme o Código de Trânsito Brasileiro."
  },
  {
    "question": "Após a devida constatação da condução de veículo sob o efeito do álcool, será lavrado o auto de infração e adotadas as providências de:",
    "options": [
      "Medidas administrativas previstas no CTB.",
      "Medidas paliativas.",
      "Medidas judiciais.",
      "Todas as alternativas acima estão corretas."
    ],
    "answer": 0,
    "explicacao": "Após a constatação da condução de veículo sob o efeito do álcool, serão adotadas as medidas administrativas previstas no Código de Trânsito Brasileiro, que incluem a lavratura do auto de infração e outras providências necessárias."
  },
  {
    "question": "Após uma forte chuva você está trafegando por uma avenida e passa sobre uma poça d’água molhando alguns pedestres na calçada. Essa atitude é considerada pelas autoridades como:",
    "options": [
      "Uma brincadeira de mau gosto.",
      "Um grande desrespeito pelos pedestres.",
      "Uma infração leve sujeito somente a uma advertência verbal.",
      "Uma infração média com penalidade de multa."
    ],
    "answer": 3,
    "explicacao": "Molhar pedestres ao passar por uma poça d'água é considerado uma infração média, sujeita a penalidade de multa, conforme o Código de Trânsito Brasileiro."
  },
  {
    "question": "Caso a defesa prévia seja indeferida ou não apresentada, a autoridade de trânsito deverá aplicar a penalidade e notificar o proprietário do veículo em no máximo __________.",
    "options": [
      "15 dias.",
      "60 dias.",
      "30 dias.",
      "180 dias."
    ],
    "answer": 3,
    "explicacao": "Caso a defesa prévia seja indeferida ou não apresentada, a autoridade de trânsito deverá aplicar a penalidade e notificar o proprietário do veículo em no máximo 180 dias, conforme o Código de Trânsito Brasileiro."
  },
  {
    "question": "Ao __________ caberá sempre a responsabilidade pela infração referente às características e componentes agregados do veículo, habilitação legal e compatível de seus condutores, quando esta for exigida. Assinale a alternativa que completa a questão:",
    "options": [
      "Transportador.",
      "Proprietário.",
      "Condutor.",
      "Passageiro."
    ],
    "answer": 1,
    "explicacao": "Ao proprietário caberá sempre a responsabilidade pela infração referente às características e componentes agregados do veículo, habilitação legal e compatível de seus condutores, quando esta for exigida, conforme o Código de Trânsito Brasileiro."
  },
  {
    "question": "Avançar o sinal vermelho do semáforo ou de parada obrigatória é infração ___________, gerando como penalidade ___________.",
    "options": [
      "Grave; multa (três vezes).",
      "Grave; multa.",
      "Gravíssima; multa.",
      "Gravíssima; multa (três vezes)."
    ],
    "answer": 2,
    "explicacao": "Avançar o sinal vermelho do semáforo ou de parada obrigatória é uma infração gravíssima, gerando como penalidade uma multa (três vezes), conforme o Código de Trânsito Brasileiro."
  },
  {
    "question": "Conduzir bicicleta em passeios onde não seja permitida a circulação desta, ou de forma agressiva, é infração ________ gerando como medida administrativa ________.",
    "options": [
      "Leve; retenção da bicicleta.",
      "Grave; remoção da bicicleta.",
      "Média; retenção da bicicleta.",
      "Média; remoção da bicicleta."
    ],
    "answer": 3,
    "explicacao": "Conduzir bicicleta em passeios onde não seja permitida a circulação ou de forma agressiva é uma infração média, gerando como medida administrativa a remoção da bicicleta, conforme o Código de Trânsito Brasileiro."
  },
  {
    "question": "Buzinar em locais e horários proibidos por sinalização acarretará _________ e é uma infração _________.",
    "options": [
      "Advertência por escrito; leve.",
      "Multa; leve.",
      "Multa grave; retenção do veículo.",
      "Advertência verbal; recolhimento da habilitação."
    ],
    "answer": 1,
    "explicacao": "Buzinar em locais e horários proibidos por sinalização acarretará multa e é uma infração leve, conforme o Código de Trânsito Brasileiro."
  },
  {
    "question": "Conduzir o veículo sem os documentos de porte obrigatório, acarretará:",
    "options": [
      "Multa e remoção do veículo.",
      "Multa e retenção do veículo para regularização.",
      "Multa e apreensão da CNH.",
      "Multa apenas."
    ],
    "answer": 1,
    "explicacao": "Conduzir o veículo sem os documentos de porte obrigatório acarretará multa e retenção do veículo para regularização, conforme o Código de Trânsito Brasileiro."
  },
  {
    "question": "É considerado crime de trânsito:",
    "options": [
      "Dirigir com a CNH cassada ou com o direito de dirigir suspenso, gerando perigo de dano.",
      "Violar a suspensão ou a proibição de se obter a permissão ou a habilitação para dirigir.",
      "Deixar o condutor de prestar ou providenciar socorro à vítima de acidente de trânsito, podendo fazê-lo.",
      "Todas as afirmativas acima estão corretas."
    ],
    "answer": 3,
    "explicacao": "Todas as afirmativas acima estão corretas e configuram crimes de trânsito, conforme o Código de Trânsito Brasileiro."
  },
  {
    "question": "É infração grave:",
    "options": [
      "Conduzir o veículo sem os documentos de porte obrigatório.",
      "Deixar de dar preferência de passagem a veículos que vier da direita.",
      "Conduzir veículos com dispositivo antirradar.",
      "Avançar o sinal de parada obrigatória."
    ],
    "answer": 1,
    "explicacao": "Deixar de dar preferência de passagem a veículos que vierem pela direita em interseção não sinalizada é uma infração grave, conforme o Código de Trânsito Brasileiro."
  },
  {
    "question": "Deixar de dar preferência de passagem a veículo que vier pela direita em interseção não sinalizada é considerado infração de natureza:",
    "options": [
      "Leve.",
      "Média.",
      "Grave.",
      "Gravíssima."
    ],
    "answer": 2,
    "explicacao": "Deixar de dar preferência de passagem a veículo que vier pela direita em interseção não sinalizada é considerado uma infração de natureza grave, conforme o Código de Trânsito Brasileiro."
  },
  {
    "question": "Dirigir com CNH ou PPD de categoria diferente da do veículo que esteja conduzindo, terá como penalidade e medida administrativa:",
    "options": [
      "Multa e remoção do veículo.",
      "Multa (2 vezes) e retenção do veículo.",
      "Advertência por escrito ao proprietário do veículo e recolhimento do documento de habilitação.",
      "Apreensão do veículo e recolhimento da Carteira Nacional de Habilitação."
    ],
    "answer": 1,
    "explicacao": "Dirigir com CNH ou PPD de categoria diferente da do veículo que esteja conduzindo terá como penalidade uma multa (2 vezes) e retenção do veículo, conforme o Código de Trânsito Brasileiro."
  },
  {
    "question": "Deixar de dar passagem pela esquerda, quando solicitado, é infração:",
    "options": [
      "Média.",
      "Leve.",
      "Grave.",
      "Gravíssima."
    ],
    "answer": 0,
    "explicacao": "Deixar de dar passagem pela esquerda, quando solicitado, é considerado uma infração média, conforme o Código de Trânsito Brasileiro."
  },
  {
    "question": "Dirigir o veículo usando calçado que não se firme nos pés ou comprometa a utilização dos pedais, é infração:",
    "options": [
      "Leve.",
      "Média.",
      "Grave.",
      "Gravíssima."
    ],
    "answer": 1,
    "explicacao": "Dirigir o veículo usando calçado que não se firme nos pés ou comprometa a utilização dos pedais é considerado uma infração média, conforme o Código de Trânsito Brasileiro."
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