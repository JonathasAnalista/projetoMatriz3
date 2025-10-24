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
    "question": "Ao aproximar-se de um cruzamento não sinalizado, surgindo um veículo a sua direita, o condutor deve:",
    "options": [
      "Usar atenção difusa e passar.",
      "Não se preocupar, se estiver transitando em uma avenida.",
      "Parar o veículo, respeitando a preferência.",
      "Diminuir a velocidade."
    ],
    "answer": 2,
    "explicacao": "Em cruzamentos não sinalizados, a preferência é sempre do veículo que vem pela direita."
  },
  {
    "question": "Ao notar a rápida aproximação de um veículo em caráter de urgência, você deve:",
    "options": [
      "Encostar o seu veículo mais à direita da pista, liberando a passagem para o veículo em caráter de urgência.",
      "Acelerar e procurar um local melhor para ceder a passagem.",
      "Manter a marcha.",
      "Todas as alternativas acima estão corretas."
    ],
    "answer": 0,
    "explicacao": "A regra é encostar à direita e liberar passagem aos veículos de emergência."
  },
  {
    "question": "Ao sair da via pelo lado esquerdo, em pista com circulação nos dois sentidos, o procedimento do condutor deverá ser:",
    "options": [
      "Em pista com circulação nos dois sentidos não é permitido sair pelo lado esquerdo.",
      "Aproximar-se o máximo possível de seu eixo da linha divisória da pista.",
      "Aproximar-se o máximo possível do bordo esquerdo e executar a manobra no menor espaço possível.",
      "Aproximar-se do acostamento e executar a manobra no maior de tempo."
    ],
    "answer": 1,
    "explicacao": "Para sair pela esquerda em via de duplo sentido, deve-se aproximar da linha divisória da pista."
  },
  {
    "question": "Ao ser ultrapassado em via de acostamento, deve-se:",
    "options": [
      "Deslocar-se, obrigatoriamente, para o acostamento, para que o veículo possa efetuar a ultrapassagem com segurança.",
      "Desviar-se para a direita, reduzir ou manter a velocidade.",
      "Reduzir bastante a velocidade.",
      "Não se preocupar, porque a responsabilidade é de quem ultrapassa."
    ],
    "answer": 1,
    "explicacao": "Ao ser ultrapassado, deve-se manter ou reduzir a velocidade e facilitar a manobra."
  },
  {
    "question": "As calçadas e os passeios públicos são espaços do pedestre. O seu uso por veículos é permitido para:",
    "options": [
      "Acesso a estacionamento ou garagens.",
      "Estacionamento de motocicletas a 45°.",
      "Circulação de ciclomotores.",
      "Carga e descarga de qualquer tipo de mercadoria."
    ],
    "answer": 0,
    "explicacao": "Só é permitido usar calçadas para acessar garagens ou estacionamentos."
  },
  {
    "question": "Assinale a alternativa correta:",
    "options": [
      "A parada (embarque/desembarque de passageiros) não poderá ser feita quando proibido o estacionamento na via.",
      "Em nenhuma hipótese será permitida a circulação de bicicletas nos passeios.",
      "Os animais isolados ou em grupos não poderão circular nas vias urbanas ou rurais.",
      "O condutor e o passageiro não deverão abrir a porta do veículo, sem antes certificar-se que isso não constitui perigo para eles e outros usuários da via."
    ],
    "answer": 3,
    "explicacao": "Abertura de portas só pode ser feita com segurança, sem risco a outros."
  },
  {
    "image": "quest7.png",
    "question": "Analise os veículos estacionados e, de acordo com as posições estabelecidas no CTB e a sinalização existente, quais estão irregulares?",
    "options": [
      "Todos os veículos 1, 2, 3 e 4.",
      "Os veículos 2, 3 e 4.",
      "Os veículos 3 e 4.",
      "Somente o veículo 4."
    ],
    "answer": 2,
    "explicacao": "De acordo com o gabarito, os veículos 3 e 4 estão irregulares."
  },
  {
    "question": "A subdivisão da pista de rolamento comum, com ou sem separação por marcas, e cuja largura permite a circulação de um veículo com segurança, são chamadas de:",
    "options": [
      "Vias públicas.",
      "Faixas de segurança.",
      "Passagens de nível.",
      "Faixas de trânsito."
    ],
    "answer": 3,
    "explicacao": "A divisão da pista em partes para veículos é chamada de faixa de trânsito."
  },
  {
    "question": "Estacionamento é:",
    "options": [
      "Uma parada pelo tempo necessário para fazer uma manobra com segurança.",
      "Manter o veículo antes da faixa de retenção para aguardar a luz verde do semáforo.",
      "Imobilização dos veículos por tempo superior ao necessário para embarque e desembarque de passageiros.",
      "Imobilização de veículos durante o tempo necessário para o embarque ou desembarque de passageiros."
    ],
    "answer": 2,
    "explicacao": "Estacionar significa parar por tempo superior ao necessário para embarque/desembarque."
  },
  {
    "question": "Assinale a alternativa incorreta sobre conversões:",
    "options": [
      "À direita: devemos manter à direita.",
      "À esquerda em mão única: devemos deslocar totalmente à esquerda.",
      "À esquerda em rodovia: devemos utilizar o acostamento da esquerda quando não houver local apropriado.",
      "À esquerda, mão dupla: deslocar para linha divisória da pista."
    ],
    "answer": 2,
    "explicacao": "Não é permitido usar o acostamento da esquerda para converter em rodovia."
  },
  {
    "question": "Assinale a alternativa que complete a questão: Via _______ é aquela destinada a coletar e distribuir o trânsito que tenha necessidade de entrar ou sair vias de trânsito rápido ou arteriais, possibilitando o trânsito dentro das regiões.",
    "options": ["Coletora.", "Arterial.", "Trânsito rápido.", "Local."],
    "answer": 0,
    "explicacao": "Via coletora distribui e coleta o tráfego entre arteriais e locais."
  },
  {
    "question": "Chama-se interseção todo cruzamento:",
    "options": [
      "Semaforizado.",
      "Em nível, entroncamento ou bifurcação.",
      "Sobre ferrovias.",
      "Com a forma de rótula."
    ],
    "answer": 1,
    "explicacao": "Interseção é todo cruzamento em nível, entroncamento ou bifurcação."
  },
  {
    "question": "Chama-se passagem de nível:",
    "options": [
      "Todo cruzamento no mesmo nível.",
      "Cruzamento sobre pontes e viadutos.",
      "Todo cruzamento de nível rodoferroviário.",
      "Todo limite lateral de uma pista de rolamento."
    ],
    "answer": 2,
    "explicacao": "Passagem de nível é o cruzamento rodoferroviário no mesmo nível."
  },
  {
    "question": "De acordo com a legislação de trânsito, transitar em marcha à ré é:",
    "options": [
      "Permitido, para fugir de situações de congestionamento.",
      "Proibido.",
      "Permitido, apenas nas vias sinalizadas.",
      "Permitido, somente para fazer pequenas manobras."
    ],
    "answer": 3,
    "explicacao": "A marcha à ré só é permitida para pequenas manobras."
  },
  {
    "question": "Complete: Os veículos mais lentos, quando em fila, deverão _____________, para permitir que os veículos que os ultrapassagem possam se intercalar na fila com segurança.",
    "options": [
      "Manter-se à direita da via, em velocidade constante.",
      "Manter distância suficiente entre si.",
      "Manter proximidade entre si.",
      "Utilizar o acostamento, se necessário."
    ],
    "answer": 1,
    "explicacao": "Devem manter distância entre si para facilitar a ultrapassagem segura."
  },
  {
    "question": "Com relação às preferências de passagem, é correto afirmar que:",
    "options": [
      "Nos cruzamentos desprovidos de sinalização disciplinadora específica, terá preferência de passagem o veículo que vier pela direita.",
      "Os veículos que transitam por uma via asfaltada têm sempre a preferência sobre aqueles que trafegam numa via não pavimentada.",
      "Um veículo trafegando por uma via em aclive terá sempre a preferência de passagem em relação a outro veículo que transita por uma via plana.",
      "Os veículos destinados ao transporte de escolares gozam de preferência de passagem sobre os veículos de cargas."
    ],
    "answer": 0,
    "explicacao": "Nos cruzamentos sem sinalização, a regra é a preferência para quem vem da direita."
  },
  {
    "question": "Dirigindo em um veículo numa via dividida ao centro por uma sinalização com duas linhas, sendo a primeira linha à sua esquerda tracejada e a segunda contínua, você poderá:",
    "options": [
      "Ultrapassar outro veículo pela esquerda, quando as condições forem favoráveis.",
      "Ultrapassar outro veículo pela direita, quando as condições forem favoráveis.",
      "Fazer um retorno para o lado direito da via.",
      "Estacionar."
    ],
    "answer": 0,
    "explicacao": "Linha tracejada do seu lado permite ultrapassagem pela esquerda."
  },
  {
    "question": "Dirigir com apenas uma das mãos é:",
    "options": [
      "Permitido em qualquer situação.",
      "Proibido em qualquer situação.",
      "Permitido quando o condutor já tem experiência.",
      "Permitido quando o condutor fizer sinais de braço, acionar acessórios ou comandos ou realizar mudanças de marchas."
    ],
    "answer": 3,
    "explicacao": "É permitido usar uma mão apenas para sinais, acessórios ou marchas."
  },
  {
    "question": "É conduta inadequada do condutor:",
    "options": [
      "Atirar do veículo ou abandonar objetos ou substâncias nas vias.",
      "Dirigir com atenção difusa.",
      "Prestar socorro à vítima de acidentes de trânsito.",
      "Respeitar o pedestre."
    ],
    "answer": 0,
    "explicacao": "Atirar objetos na via é infração e conduta inadequada."
  },
  {
    "question": "Em capacetes que não possuam viseira será obrigatório o uso de:",
    "options": ["Lentes de contato.", "Óculos de sol.", "Óculos de grau.", "Óculos de proteção."],
    "answer": 3,
    "explicacao": "Capacete sem viseira exige óculos de proteção."
  },
  {
    "question": "Em relação à circulação de veículos automotores nas vias terrestres, podemos afirmar que:",
    "options": [
      "Os veículos que se deslocam sobre trilhos terão preferência de passagem sobre os demais, respeitadas as normas de circulação.",
      "A prioridade de passagem na via e no cruzamento não deverá ser reduzida, pois acarreta perigo aos veículos que transitam à retaguarda.",
      "A preferência de passagem será, sempre, do veículo que vier à direita do outro.",
      "O condutor poderá livremente frear de modo brusco seu veículo nas vias urbanas."
    ],
    "answer": 0,
    "explicacao": "Veículos sobre trilhos têm prioridade sobre os demais."
  },
  {
    "question": "Não obstruir a marcha normal dos veículos sem causa justificada. Estamos falando sobre:",
    "options": ["Prestação de socorro.", "Normas de circulação e conduta.", "Procedimentos de mecânica.", "Cidadania."],
    "answer": 1,
    "explicacao": "Essa é uma regra de circulação e conduta no trânsito."
  },
  {
    "question": "Em uma via arterial sem sinalização, o condutor deverá atingir a velocidade de no mínimo:",
    "options": ["30 km/h.", "40 km/h.", "50 km/h.", "60 km/h."],
    "answer": 0,
    "explicacao": "Em vias arteriais sem sinalização, a velocidade mínima é 50 km/h."
  },
  {
    "question": "À noite, em vias não iluminadas, o uso de luzes em veículo obedecerá a seguinte determinação:",
    "options": [
      "O condutor deverá usar permanentemente a luz alta.",
      "O condutor deverá trocar de luz baixa e alta de forma intermitente e por curto período de tempo.",
      "O condutor deverá usar permanentemente a luz baixa.",
      "O condutor deverá usar luz alta, exceto ao cruzar ou seguir outro veículo."
    ],
    "answer": 3,
    "explicacao": "Em vias escuras, usa-se farol alto, exceto ao cruzar ou seguir outro veículo."
  },
  {
    "question": "Havendo sinalização por semáforo num cruzamento, em que condições o condutor poderá fazer a travessia com a luz amarela?",
    "options": [
      "Em nenhuma hipótese.",
      "Somente quando não houver redutores de velocidade.",
      "Quando a luz amarela for acionada depois que o condutor já tiver entrado no cruzamento.",
      "Sempre que desejar, pois somente a luz vermelha o obriga a parar."
    ],
    "answer": 2,
    "explicacao": "A luz amarela só permite seguir se o condutor já estiver no cruzamento."
  },
  {
    "image": "quest26.png",
    "question": "Analise a ultrapassagem que o veículo azul realizou e escolha a alternativa correta:",
    "options": [
      "Correta, pois foi feita pela esquerda e não havia veículo vindo no sentido oposto.",
      "Incorreta, pois a faixa reversível está ativada.",
      "Correta, pois a linha amarela não é contínua.",
      "Incorreta, pois a reversível está ativada e ele deveria ter usado a faixa da direita para ultrapassar"
    ],
    "answer": 1,
    "explicacao": "De acordo com a sinalização, a manobra foi incorreta pois a faixa reversível estava ativada."
  },
  {
    "question": "Não é procedimento para virar à direita:",
    "options": [
      "Deslocar-se para a linha divisória da pista.",
      "Deslocar-se para o bordo direito.",
      "Observar a preferência de veículos e pedestres.",
      "Efetuar a manobra no menor espaço possível."
    ],
    "answer": 0,
    "explicacao": "Virar à direita exige aproximação pelo bordo direito, não pela linha divisória."
  },
  {
    "question": "No acostamento é proibido:",
    "options": [
      "Circular pedestre.",
      "Transitar com motonetas.",
      "Parar para realizar manobras.",
      "Parar ou estacionar veículos em situação de emergência."
    ],
    "answer": 1,
    "explicacao": "É proibido trafegar com motonetas pelo acostamento."
  },
  {
    "question": "Em uma rodovia dotada de acostamento e marcas tracejadas, para entrar à esquerda o condutor deve:",
    "options": [
      "Seguir até encontrar um cruzamento.",
      "Aguardar no acostamento à direita, para cruzar a pista com segurança.",
      "Atingir o ponto central.",
      "Deslocar seu veículo para a esquerda sem atingir a contramão."
    ],
    "answer": 1,
    "explicacao": "Deve-se aguardar no acostamento à direita antes de cruzar a pista."
  },
  {
    "question": "Sobre rodovia é falso afirmar:",
    "options": [
      "É uma via rural não pavimentada.",
      "Tem velocidade máxima de 80 km/h.",
      "Não possibilita o acesso aos lotes lindeiros.",
      "Todas as afirmativas acima."
    ],
    "answer": 3,
    "explicacao": "Rodovia é pavimentada; dizer que é via rural não pavimentada é falso."
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