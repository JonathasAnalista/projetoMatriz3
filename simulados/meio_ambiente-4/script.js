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
    "question": "Ela ocorre quando, além de intenso o ruído, ele também é ininterrupto, com o qual o ouvido não se acostuma. Pode-se dormir sob barulho intenso, mas o sono não será reparador das energias gastas, como é a conclusão da ciência médica. Estamos falando de:",
    "options": ["Poluição sonora.", "Poluição hídrica.", "Poluição luminosa.", "Todas as afirmativas acima."],
    "answer": 0,
    "explicacao": "O texto descreve a poluição sonora, caracterizada pelo ruído constante que prejudica a saúde."
  },
  {
    "question": "Em caso de acidente com veículo transportando produtos inflamáveis, o procedimento correto do condutor é:",
    "options": ["Providenciar, o mais rápido possível, o escoamento do produto.", "Sinalizar o local com tochas de fogo.", "Efetuar, primeiramente, a limpeza do veículo.", "A via deve ser interditada e todo local evacuado."],
    "answer": 3,
    "explicacao": "Em acidentes com inflamáveis, deve-se isolar a área e evacuar o local."
  },
  {
    "question": "Foi criado por lei federal para o controle de emissão de poluentes por veículos automotores:",
    "options": ["CONAMA.", "IBAMA.", "PROCONVE.", "SISNAMA."],
    "answer": 2,
    "explicacao": "O PROCONVE é o programa criado para controlar a poluição veicular."
  },
  {
    "question": "Grande parte dos problemas de relacionamento humano no trânsito ocorre devido a uma série de fatores, como:",
    "options": ["Domínio aos impulsos indesejáveis.", "Inversão de valores.", "Respeito aos direitos alheios.", "Supervalorização da segurança viária."],
    "answer": 1,
    "explicacao": "O texto aponta a inversão de valores como fator de conflitos no trânsito."
  },
  {
    "question": "Indica que o veículo está produzindo níveis de poluição acima do permitido:",
    "options": ["Escapamento com fuligem.", "Cheiro de combustível no motor.", "Consumo excessivo de combustível.", "Todas acima."],
    "answer": 3,
    "explicacao": "Todos os sinais listados indicam excesso de poluição no veículo."
  },
  {
    "question": "Marque a alternativa incorreta. A emissão de gases poluentes:",
    "options": ["Prejudica os reflexos.", "Não agrava doenças cardiovasculares.", "Diminui a capacidade de trabalho.", "Degrada a qualidade de vida."],
    "answer": 1,
    "explicacao": "A emissão de poluentes pode sim agravar doenças cardiovasculares; por isso essa alternativa está incorreta."
  },
  {
    "question": "Não jogue pontas de cigarro nas estradas. Elas podem provocar:",
    "options": ["Derrapagem.", "Incêndios florestais.", "Contaminação das águas.", "Explosão em contato com o asfalto."],
    "answer": 1,
    "explicacao": "As bitucas de cigarro podem iniciar incêndios florestais."
  },
  {
    "question": "No interior de túneis extensos é aconselhável instalar exaustores, porque nesse ambiente acumula-se:",
    "options": ["Partículas de fumaça, somente.", "Gases tóxicos, somente.", "Partículas de vapor d'água, somente.", "Gases e partículas de fumaça."],
    "answer": 3,
    "explicacao": "Em túneis acumulam-se gases e partículas de fumaça, exigindo exaustão."
  },
  {
    "question": "No grupo social, o cidadão deve:",
    "options": ["Seguir a escolha de todos.", "Atuar sempre de forma individual.", "Adotar as características positivas que adquire no dia-a-dia.", "Aceitar pressões e cobranças."],
    "answer": 2,
    "explicacao": "O cidadão deve adotar e praticar características positivas no convívio social."
  },
  {
    "question": "O atropelamento é o tipo de acidente de trânsito que mais atinge crianças na grande Belo Horizonte. No HPS, em 2006, 21 crianças morreram vítimas de acidentes de trânsito. São causas de atropelamento:",
    "options": ["Descuido dos pedestres.", "Pedestre 'provocador' e condutor mal-educado.", "Falta de educação para a segurança no trânsito.", "Todas as afirmativas acima estão corretas."],
    "answer": 3,
    "explicacao": "As três causas apresentadas são válidas, logo a correta é 'todas as acima'."
  },
  {
    "question": "O CONAMA e as agências ambientais dos estados e municípios, têm como principais preocupações:",
    "options": ["A defesa da saúde e do meio ambiente.", "A conservação dos equipamentos de segurança das estradas.", "A orientação do fluxo de veículos nas vias urbanas.", "A fiscalização da produção de veículos."],
    "answer": 0,
    "explicacao": "O foco do CONAMA é proteger a saúde e o meio ambiente."
  },
  {
    "question": "O condutor de veículo que se preocupa em avisar o outro que está rodando com o pneu murcho ou com a porta semifechada está:",
    "options": ["Cumprindo a legislação de trânsito.", "Cometendo uma infração.", "Perdendo tempo e perturbando o trânsito.", "Agindo com sentimento de solidariedade, cortesia e respeito."],
    "answer": 3,
    "explicacao": "Essa atitude reflete solidariedade e respeito, valores de cidadania no trânsito."
  },
  {
    "question": "O condutor no trânsito deve ter percepção e respeito às expectativas das pessoas, adotando uma postura adequada, sendo:",
    "options": ["Cuidadoso e atento.", "Decidido e agressivo.", "Cuidadoso e ligeiro.", "Agressivo e rápido."],
    "answer": 0,
    "explicacao": "A postura correta é cuidadosa e atenta."
  },
  {
    "question": "O condutor, ao assumir o volante do veículo automotor, deve:",
    "options": ["Adotar atitudes agressivas.", "Agir corretamente, somente quando lhe for conveniente.", "Respeitar as leis de trânsito.", "Descarregar suas frustrações e angústias."],
    "answer": 2,
    "explicacao": "Ao dirigir, deve-se sempre respeitar as leis de trânsito."
  },
  {
    "question": "O controle de emissão de gases e de ruídos previsto no CTB é:",
    "options": ["Uma medida opcional.", "Obrigatório a todo veículo automotor.", "Uma medida não necessária.", "Necessário para caminhões e ônibus, apenas."],
    "answer": 1,
    "explicacao": "Todos os veículos automotores devem controlar emissão de gases e ruídos."
  },
  {
    "question": "O gás clorofluorcarbono (CFC) utilizado como propelente em vários tipos de sprays, chips de computadores e solventes usados pela indústria eletrônica. É um dos poluentes responsáveis pela ocorrência:",
    "options": ["Do aumento de temperatura.", "Da redução da camada de ozônio.", "Da chuva ácida.", "Do efeito estufa."],
    "answer": 1,
    "explicacao": "O CFC é diretamente responsável pela redução da camada de ozônio."
  },
  {
    "question": "O efeito estufa têm como consequência:",
    "options": ["A elevação da temperatura média do planeta.", "O excesso de gás clorofluorcarbono (CFC).", "A destruição das moléculas de ozônio na atmosfera.", "O excesso de gás carbônico na atmosfera."],
    "answer": 0,
    "explicacao": "O efeito estufa provoca o aquecimento global."
  },
  {
    "question": "O excesso de anúncios afixados em pontos estratégicos é uma poluição:",
    "options": ["Dispersiva.", "Visual.", "Provocativa.", "Deficiente."],
    "answer": 1,
    "explicacao": "A poluição visual é causada por excesso de anúncios e elementos que poluem a paisagem."
  },
  {
    "question": "O Programa de Controle da Poluição do Ar por Veículos Automotores (PROCONVE) é o responsável pela especificação dos combustíveis comerciais em uso no Brasil. Sabendo-se que a gasolina é um combustível de alto potencial poluidor, assim como o diesel, esse programa determinou a adição de álcool à gasolina para:",
    "options": ["Aumentar o rendimento do combustível.", "Economizar derivados de petróleo.", "Diminuir a emissão de poluentes.", "Dar vazão à produção de álcool."],
    "answer": 2,
    "explicacao": "O álcool é adicionado à gasolina para reduzir a emissão de poluentes."
  },
  {
    "question": "O que é cidadania?",
    "options": [
      "É o direito à proteção, crescimento, ser reconhecido e tratado com dignidade sem preconceitos, com direitos civis, políticos e sociais.",
      "São as leis de quem mora na cidade.",
      "É o direito de falar o que quiser.",
      "É aquele cidadão que prestou serviço militar."
    ],
    "answer": 0,
    "explicacao": "Cidadania envolve direitos civis, políticos e sociais com dignidade e igualdade."
  },
  {
    "question": "O sistema de descarga é responsável por evitar, além do barulho, o consumo excessivo de combustível. Se há fumaça preta saindo da descarga do veículo é indício de que:",
    "options": ["Existe excesso de gás na câmara de combustão.", "O motor está com boa compressão.", "O motor está queimando mais combustível que o normal.", "O condutor está acelerando mais do que devia."],
    "answer": 2,
    "explicacao": "Fumaça preta indica combustão irregular com excesso de combustível."
  },
  {
    "question": "O trânsito pode provocar os seguintes problemas ambientais:",
    "options": ["Poluição sonora.", "Poluição hídrica.", "Poluição atmosférica.", "Todas as alternativas acima."],
    "answer": 3,
    "explicacao": "O trânsito pode gerar poluição sonora, hídrica e atmosférica."
  },
  {
    "question": "O veículo torna-se um agente poluidor do meio ambiente quando:",
    "options": ["Emitem gases e partículas na atmosfera.", "Há o descarte de óleos lubrificantes e fluídos.", "Acidentam-se, envolvendo cargas tóxicas.", "Todas as alternativas acima estão corretas."],
    "answer": 3,
    "explicacao": "Todas as situações listadas transformam o veículo em agente poluidor."
  },
  {
    "question": "Os gases resultantes da combustão, junto com o óxido de nitrogênio, entram em contato com o oxigênio e o vapor de água na atmosfera e voltam a superfície sob a forma de:",
    "options": ["Raios.", "Trovões.", "Chuva ácida.", "Material particulado."],
    "answer": 2,
    "explicacao": "O fenômeno descrito é a chuva ácida."
  },
  {
    "question": "Os gases emitidos pelos veículos são perigosos para a saúde do homem porque podem:",
    "options": [
      "Causar irritação nos olhos e garganta.",
      "Agravar moléstias respiratórias como asma e bronquite.",
      "Provocar dores de cabeça e enjoo.",
      "Todas as alternativas estão corretas."
    ],
    "answer": 3,
    "explicacao": "Os gases automotivos afetam olhos, garganta e sistema respiratório."
  },
  {
    "question": "Os gases expelidos pelos veículos automotores, que poluem o ar são:",
    "options": ["Oxigênio, fumaça preta e óxido de enxofre.", "Hidrocarbonetos, monóxido de carbono, óxido de nitrogênio.", "H2O e oxigênio.", "H2O e óxido de nitrogênio."],
    "answer": 1,
    "explicacao": "Os principais poluentes são hidrocarbonetos, CO e óxidos de nitrogênio."
  },
  {
    "question": "Os ruídos emitidos pelo funcionamento do motor de um veículo são controlados pelo:",
    "options": ["Carburador.", "Radiador.", "Silenciador.", "Catalisador."],
    "answer": 2,
    "explicacao": "O silenciador controla os ruídos produzidos pelo motor."
  },
  {
    "question": "Os veículos que apresentam maior potencial de poluição do ar são aqueles:",
    "options": ["Que utilizam como combustíveis o diesel ou a gasolina.", "Que utilizam o sistema elétrico.", "Movidos a propulsão humana.", "Movidos a tração animal."],
    "answer": 0,
    "explicacao": "Veículos a gasolina e diesel são os maiores poluidores."
  },
  {
    "question": "Os veículos que utilizam gasolina ou diesel como combustíveis são fontes importantes de poluentes do ar. Deve-se, para garantir uma menor emissão destes poluentes:",
    "options": ["Retirar o silenciador.", "Usar gasolina comum.", "Manter o radiador limpo.", "Manter o motor bem regulado."],
    "answer": 3,
    "explicacao": "Um motor bem regulado reduz a emissão de poluentes."
  },
  {
    "question": "Para ajudar a manter as vias de trânsito limpas e em condições de uso devemos:",
    "options": [
      "Não jogar lixo ou qualquer objeto pela janela do veículo.",
      "Distribuir saco de lixo para todos os motoristas.",
      "Organizar um mutirão para consertar a via.",
      "Aumentar o número de lixeiras públicas."
    ],
    "answer": 0,
    "explicacao": "A atitude individual de não jogar lixo já contribui para vias mais limpas."
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