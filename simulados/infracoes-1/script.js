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
    "question": "Usar a buzina, em área urbana, no período entre 22h e 6h (horário de sossego) ou em locais proibidos pela sinalização, configura infração de natureza LEVE, cuja penalidade é:",
    "options": [
      "Multa e remoção do veículo.",
      "Multa e retenção do veículo.",
      "Multa e apreensão do veículo.",
      "Multa."
    ],
    "answer": 3,
    "explicacao": "O uso indevido da buzina em horário/local proibido é infração leve (3 pontos), punida apenas com multa, por perturbação ao sossego, sem medida de remoção/apreensão."
  },
  {
    "question": "Conduzir bicicleta em passeio onde não seja permitida sua circulação, ou de forma agressiva, caracteriza infração de natureza MÉDIA, cuja medida administrativa típica é:",
    "options": [
      "Leve; retenção da bicicleta.",
      "Grave; remoção da bicicleta.",
      "Média; retenção da bicicleta.",
      "Média; remoção da bicicleta."
    ],
    "answer": 3,
    "explicacao": "A conduta é infração média, com penalidade de multa e medida administrativa de REMOÇÃO da bicicleta, mediante recibo, para cessar o risco imediato aos demais usuários."
  },
  {
    "question": "Circular com veículo de características alteradas (ex.: cor diversa da registrada, suspensão rebaixada) sem prévia autorização e regularização constitui infração:",
    "options": [
      "Grave, multa e retenção do veículo.",
      "Média, multa e retenção do veículo.",
      "Gravíssima, multa e apreensão do veículo.",
      "Grave, multa e remoção do veículo."
    ],
    "answer": 0,
    "explicacao": "Alteração de característica sem atender às exigências legais é infração GRAVE, com penalidade de multa e medida administrativa de retenção para regularização."
  },
  {
    "question": "Promover na via, ou dela participar como condutor, de competição/exibição/demonstração de perícia em manobra sem permissão da autoridade com circunscrição sobre a via é infração:",
    "options": [
      "Gravíssima, multa (10x), suspensão do direito de dirigir, recolhimento da CNH e remoção do veículo.",
      "Leve, multa (10x), suspensão do direito de dirigir, recolhimento da CNH e remoção do veículo.",
      "Grave, multa (5x), suspensão do direito de dirigir, recolhimento da CNH e remoção do veículo.",
      "Média, multa (3x), suspensão do direito de dirigir, recolhimento da CNH e remoção do veículo."
    ],
    "answer": 0,
    "explicacao": "Tratando-se de ‘rachas’/manobras não autorizadas, a natureza é GRAVÍSSIMA com multa multiplicada por 10, suspensão da CNH, recolhimento do documento e remoção do veículo."
  },
  {
    "question": "Deixar o condutor ou passageiro de usar o cinto de segurança, conforme previsto, é infração:",
    "options": [
      "Grave, multa e retenção do veículo até colocação do cinto.",
      "Gravíssima, multa e remoção do veículo até colocação do cinto.",
      "Média, multa e retenção do veículo até colocação do cinto.",
      "Leve, multa e retenção do veículo até colocação do cinto."
    ],
    "answer": 0,
    "explicacao": "Natureza GRAVE, com multa e RETENÇÃO do veículo até que todos utilizem corretamente o cinto de segurança."
  },
  {
    "question": "Deixar de manter distância de seguimento do veículo que segue à frente é infração:",
    "options": [
      "Grave, 5 pontos.",
      "Leve, 3 pontos.",
      "Gravíssima, 7 pontos.",
      "Média, 4 pontos."
    ],
    "answer": 0,
    "explicacao": "A não observância da distância de seguimento é infração GRAVE (5 pontos), pois eleva o risco de colisão traseira."
  },
  {
    "question": "É conduta de natureza LEVE:",
    "options": [
      "Parar sobre a faixa de pedestres na mudança para o vermelho.",
      "Parar no acostamento indevidamente OU usar a buzina entre 22h e 6h em área residencial.",
      "Estacionar na contramão de direção.",
      "Estacionar a menos de 5 m da esquina/alinhamento da via transversal."
    ],
    "answer": 1,
    "explicacao": "Entre as alternativas, o USO INDEVIDO DA BUZINA em horário/local proibido é típico de infração LEVE. (As demais condutas usualmente são médias ou graves.)"
  },
  {
    "question": "Dirigir ameaçando pedestres que estejam atravessando a via, ou demais veículos, será considerada:",
    "options": [
      "Infração gravíssima, com multa, suspensão do direito de dirigir, recolhimento da CNH e retenção do veículo.",
      "Infração grave, com multa e recolhimento da CNH.",
      "Infração média, com multa e retenção do veículo.",
      "Infração gravíssima, apenas multa (5x)."
    ],
    "answer": 0,
    "explicacao": "É conduta gravíssima, com suspensão do direito de dirigir e recolhimento da CNH, dada a agressividade e o risco ao mais vulnerável."
  },
  {
    "question": "Aplicada a penalidade, o órgão de trânsito expedirá ao infrator a:",
    "options": [
      "Citação.",
      "Extrato de multa.",
      "Notificação.",
      "Intimação."
    ],
    "answer": 2,
    "explicacao": "A ‘Notificação da Penalidade’ formaliza a aplicação e informa valores, prazos e orientações para recurso/defesa."
  },
  {
    "question": "Na infração ‘estacionar o veículo afastado da guia (meio-fio) a mais de 1 metro’, a pontuação computada é:",
    "options": [
      "7.",
      "4.",
      "5.",
      "3."
    ],
    "answer": 2,
    "explicacao": "Estacionar a MAIS DE 1 m do meio-fio é infração GRAVE (5 pontos), diferente de 50 cm a 1 m (LEVE) e de outras hipóteses mais severas."
  },
  {
    "question": "A fiscalização eletrônica pode se dar com equipamentos classificados, quanto ao modo de instalação/operação, como:",
    "options": [
      "Automático e não automático.",
      "Radar e medidor ótico.",
      "Fixo, estático, móvel e portátil.",
      "Eletrônico e audiovisual."
    ],
    "answer": 2,
    "explicacao": "Aparelhos de fiscalização (controladores e medidores) podem ser FIXOS, ESTÁTICOS, MÓVEIS ou PORTÁTEIS, conforme a técnica e a operação."
  },
  {
    "question": "Quanto à responsabilização por excesso de peso, responde o TRANSPORTADOR, especialmente:",
    "options": [
      "Embarcador.",
      "Transportador e embarcador.",
      "Proprietário.",
      "Transportador."
    ],
    "answer": 3,
    "explicacao": "Em excesso de PBT com carga de MAIS DE UM embarcador, o TRANSPORTADOR é responsável. (Em excesso POR EIXO com único embarcador, a responsabilidade pode recair ao embarcador.)"
  },
  {
    "question": "Configura hipótese de REMOÇÃO do veículo:",
    "options": [
      "Deixar acabar o combustível.",
      "Parar na contramão de direção.",
      "Estar estacionado em posição/lugar proibido.",
      "Furar o pneu."
    ],
    "answer": 2,
    "explicacao": "Estacionamento irregular em local/proibição específica admite REMOÇÃO para restabelecer a segurança/fluidez."
  },
  {
    "question": "Em via com limite de 80 km/h, transitar a 90 km/h tipifica:",
    "options": [
      "Leve, 3 pontos.",
      "Média, 4 pontos.",
      "Gravíssima, 7 pontos.",
      "Grave, 5 pontos."
    ],
    "answer": 1,
    "explicacao": "Exceder até 20% do limite (aqui, +12,5%) é infração MÉDIA, com 4 pontos e multa correspondente."
  },
  {
    "question": "Assinale a alternativa que NÃO configura infração de trânsito:",
    "options": [
      "Roubo de veículos.",
      "Desrespeito à legislação de trânsito.",
      "Estacionar em desacordo com a sinalização.",
      "Excesso de velocidade."
    ],
    "answer": 0,
    "explicacao": "‘Roubo de veículos’ é CRIME comum, não infração administrativa de trânsito. As demais são infrações do CTB."
  },
  {
    "question": "Dirigir usando calçado que não se firme nos pés ou comprometa o uso dos pedais é infração:",
    "options": [
      "Leve.",
      "Média.",
      "Grave.",
      "Gravíssima."
    ],
    "answer": 1,
    "explicacao": "Constitui infração MÉDIA (4 pontos), pela redução do controle operacional do veículo."
  },
  {
    "question": "Estacionar a menos de 5 metros da esquina/alinhamento da via transversal é infração:",
    "options": [
      "Média, 4 pontos.",
      "Leve, 3 pontos.",
      "Grave, 5 pontos.",
      "Gravíssima, 7 pontos."
    ],
    "answer": 0,
    "explicacao": "É infração MÉDIA (4 pontos) por comprometer a visibilidade de conversão e a segurança de pedestres/condutores."
  },
  {
    "question": "Caracteriza CRIME de trânsito a condução com concentração de álcool no sangue igual ou superior a:",
    "options": [
      "5 decigramas por litro de sangue.",
      "6 decigramas por litro de sangue.",
      "2 decigramas por litro de sangue.",
      "0,34 mg/L de ar alveolar."
    ],
    "answer": 1,
    "explicacao": "O crime (art. 306) se configura a partir de 6 dg/L de sangue ou, por equivalência, 0,3 mg/L no ar alveolar (após descontos)."
  },
  {
    "question": "Deixar o condutor de prestar socorro à vítima de acidente quando solicitado pela autoridade ou seus agentes é infração:",
    "options": [
      "Gravíssima, 7 pontos.",
      "Leve, 3 pontos.",
      "Média, 4 pontos.",
      "Grave, 5 pontos."
    ],
    "answer": 3,
    "explicacao": "Trata-se de infração GRAVE (5 pontos) no âmbito administrativo. (Há ainda hipóteses penais específicas quando cabíveis.)"
  },
  {
    "question": "Deixar o veículo imobilizado na via por falta de combustível é infração de natureza _____, com medida administrativa de _____.",
    "options": [
      "Gravíssima; retenção do veículo.",
      "Grave; remoção do veículo.",
      "Média; remoção do veículo.",
      "Leve; retenção do veículo."
    ],
    "answer": 2,
    "explicacao": "Infração MÉDIA (4 pontos) com REMOÇÃO, por obstruir a via e colocar em risco a fluidez e segurança."
  },
  {
    "question": "Envolvido em sinistro com vítima, deixar de prestar ou providenciar socorro, podendo fazê-lo, constitui:",
    "options": [
      "Média, 4 pontos, apreensão da carteira.",
      "Grave, 5 pontos, recolhimento da habilitação.",
      "Gravíssima, multa (10x), suspensão do direito de dirigir.",
      "Gravíssima, multa (5x), suspensão do direito de dirigir e recolhimento da habilitação."
    ],
    "answer": 3,
    "explicacao": "É infração GRAVÍSSIMA com multa multiplicada (5x), suspensão do direito de dirigir e recolhimento da CNH, por ofensa à segurança/solidariedade viária."
  },
  {
    "question": "Usar o veículo para arremessar sobre pedestres ou veículos água ou detritos é infração _____, com penalidade de _____.",
    "options": [
      "Gravíssima; remoção do veículo.",
      "Média; multa.",
      "Leve; retenção do veículo.",
      "Grave; multa apenas."
    ],
    "answer": 1,
    "explicacao": "Conduta de natureza MÉDIA, punida com multa, por expor terceiros a risco/desconforto e perda de controle."
  },
  {
    "question": "Em chuva, conduzir o veículo sem acionar o limpador de para-brisas, comprometendo a visibilidade, é conduta punida com:",
    "options": [
      "Advertência pelo agente.",
      "Apreensão do veículo e multa.",
      "Multa e retenção do veículo.",
      "Remoção do veículo e multa."
    ],
    "answer": 2,
    "explicacao": "Se a visibilidade fica comprometida por não acionar/manter eficiente equipamento obrigatório, aplica-se multa e RETENÇÃO até regularização."
  },
  {
    "question": "Estacionar em desacordo com a sinalização regulamentadora, notadamente em frente a hidrantes, constitui infração:",
    "options": [
      "Leve e retenção do veículo.",
      "Gravíssima e remoção do veículo.",
      "Média e remoção do veículo.",
      "Grave e retenção do veículo."
    ],
    "answer": 2,
    "explicacao": "É infração MÉDIA (4 pontos) com REMOÇÃO, pois compromete acesso de emergência e segurança coletiva."
  },
  {
    "question": "Na infração ‘estacionar o veículo afastado da guia de 50 cm a 1 metro’, a pontuação aplicada é:",
    "options": [
      "7 (sete).",
      "4 (quatro).",
      "5 (cinco).",
      "3 (três)."
    ],
    "answer": 3,
    "explicacao": "Entre 50 cm e 1 m do meio-fio: natureza LEVE (3 pontos); acima de 1 m: MÉDIA (4 pontos)."
  },
  {
    "question": "Assinale a alternativa que NÃO constitui CRIME de trânsito:",
    "options": [
      "Lesão corporal culposa na direção.",
      "Homicídio culposo na direção.",
      "Omissão de socorro (quando configurada a tipicidade penal).",
      "Dirigir em excesso de velocidade (apenas infração administrativa)."
    ],
    "answer": 3,
    "explicacao": "Excesso de velocidade é infração administrativa; os crimes de trânsito dependem de tipicidade penal específica (lesão/homicídio culposo, omissão etc.)."
  },
  {
    "question": "Em via rural NÃO pavimentada, sem sinalização específica, a velocidade máxima é 60 km/h. Transitar a 100 km/h caracteriza infração:",
    "options": [
      "Grave.",
      "Média.",
      "Leve.",
      "Gravíssima (multa 3x)."
    ],
    "answer": 3,
    "explicacao": "Ultrapassa em mais de 50% o limite (de 60 para 100 km/h): natureza GRAVÍSSIMA com multa multiplicada por 3."
  },
  {
    "question": "Avançar o sinal vermelho do semáforo acarreta pontuação de:",
    "options": [
      "3 (três).",
      "5 (cinco).",
      "4 (quatro).",
      "7 (sete)."
    ],
    "answer": 3,
    "explicacao": "É infração GRAVÍSSIMA (7 pontos), pela alta exposição a colisões cruzadas e atropelamentos."
  },
  {
    "question": "Transitar em declive com o veículo desligado ou desengrenado (‘banguela’) é infração:",
    "options": [
      "Média.",
      "Gravíssima.",
      "Grave.",
      "Leve."
    ],
    "answer": 0,
    "explicacao": "Constitui infração MÉDIA (4 pontos), pois compromete o controle de frenagem e a segurança em descida."
  },
  {
    "question": "Transportar CRIANÇA em motocicleta/motoneta, quando menor de 10 anos, sujeita o condutor à penalidade de:",
    "options": [
      "Advertência por escrito.",
      "Suspensão do direito de dirigir.",
      "Apenas multa simples.",
      "Retenção do veículo no local."
    ],
    "answer": 1,
    "explicacao": "É infração GRAVÍSSIMA, com multa e SUSPENSÃO do direito de dirigir, além de medidas administrativas cabíveis."
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