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
question: "Ao se aproximar de uma faixa de travessia de pedestres (zebra), você percebe que ela cruza toda a pista e está pintada sobre o pavimento. De acordo com a classificação oficial das marcas viárias, essa sinalização é:",
options: ["Horizontal e transversal", "Vertical e transversal", "Horizontal e paralela", "Vertical e paralela"],
answer: 0,
explicacao: "Faixa de pedestres é marca horizontal (no piso) e transversal (cruza a via). ‘Vertical’ refere-se a placas/postes; ‘paralela’ descreve marcas no sentido do fluxo."
},
{
question: "Placas educativas (mensagens como “USE O CINTO”) têm padronização própria. Qual é o formato e esquema de cores predominantes dessas placas?",
options: ["Vermelha e branca, circular", "Branca e preta, retangular", "Amarela e preta, quadrada", "Verde e azul, quadrada"],
answer: 1,
explicacao: "Placas educativas são retangulares com fundo branco e legendas pretas. Circular é típico de regulamentação; amarelo/preto sugere advertência; verde/azul são de indicação."
},
{
question: "Na sinalização horizontal, qual cor é usada para separar fluxos de sentidos opostos (e, por isso, costuma indicar restrição de ultrapassagem quando contínua)?",
options: ["Azul", "Vermelho", "Branca", "Amarela"],
answer: 3,
explicacao: "Linhas amarelas separam sentidos opostos; as brancas separam faixas no mesmo sentido. Azul e vermelho não são usados para divisão de fluxos."
},
{
question: "As placas retangulares de orientação de destino (sentido/direção e distância) variam conforme o meio. Quais cores de fundo são as mais usuais, respectivamente, em rodovias e em áreas urbanas/serviços?",
options: ["Verde e azul", "Preta e verde", "Preta e branca", "Branca e azul"],
answer: 0,
explicacao: "Em regra, orientação de destino em rodovias usa fundo verde; em meio urbano/serviços, fundo azul. Preto/branco são típicos de educativas/regulamentação."
},
{
question: "Para proibir ultrapassagem entre fluxos opostos, a marca central correta é:",
options: ["Contínua, simples ou dupla, branca", "Contínua, simples ou dupla, amarela", "Tracejada, simples ou dupla, amarela", "Tracejada, simples ou dupla, branca"],
answer: 1,
explicacao: "A proibição é indicada por linha contínua amarela (simples ou dupla) separando sentidos opostos. Linha branca divide faixas no mesmo sentido."
},
{
question: "Uma placa octogonal de regulamentação, visível mesmo de costas pelo formato, impõe qual conduta?",
options: ["Atenção: pare!", "Parada obrigatória", "Oito faixas no mesmo sentido", "Pare à direita apenas"],
answer: 1,
explicacao: "O formato octogonal identifica “PARADA OBRIGATÓRIA” (R-1). O formato é exclusivo para evitar confusão mesmo quando a face está encoberta."
},
{
question: "As placas que informam existência de serviços (posto, hospital, alimentação etc.) para o usuário são classificadas como:",
options: ["Serviços de apoio", "Serviços de ajuda", "Indicação complementar", "Serviços auxiliares"],
answer: 3,
explicacao: "A categoria é Indicação – Serviços Auxiliares. ‘Apoio/ajuda’ não é nomenclatura oficial no Manual Brasileiro de Sinalização."
},
{
question: "A ciclovia/ciclofaixa costuma ter tratamento de cor específico no pavimento para realçar seu uso exclusivo. Qual cor é a mais adotada no Brasil?",
options: ["Amarelo", "Verde", "Vermelho", "Azul"],
answer: 2,
explicacao: "Vermelho é amplamente utilizado para ciclovias/ciclofaixas. Amarelo/branco são cores de linhas de organização de fluxo; azul aparece em vagas/acessibilidade."
},
{
question: "Placas com as cores verde e amarela (da Bandeira Nacional) são utilizadas em veículos de representação pessoal de:",
options: ["Governadores", "Presidente e Vice-Presidente da República", "Prefeitos", "Secretários municipais"],
answer: 1,
explicacao: "As placas verde-amarelas identificam veículos de representação pessoal do Presidente e do Vice-Presidente."
},
{
question: "Quanto ao formato, a regra geral das placas de regulamentação é:",
options: ["Hexagonal, com exceção para R-1", "Circular, com exceções R-1 e R-2", "Quadrada, sem exceção", "Octogonal, com exceção para velocidade"],
answer: 1,
explicacao: "Regulamentação é circular, exceto R-1 (octogonal) e R-2 (triangular de ponta para baixo). Quadrado/hexágono não são o padrão da categoria."
},
{
question: "A sinalização horizontal utiliza cinco cores básicas. Qual conjunto corresponde a elas?",
options: ["Branca, preta, azul, marrom e amarela", "Azul, amarela, preta, branca e cinza", "Amarela, verde, vermelha, preta e branca", "Amarela, branca, vermelha, azul e preta"],
answer: 3,
explicacao: "As cinco cores são amarela, branca, vermelha, azul e preta. Marrom/verde são cores de placas verticais, não de marcas no pavimento."
},
{
question: "O dispositivo refletivo usado em vias e em alguns veículos, que devolve a luz ao condutor (reflexão retrógrada), é chamado de:",
options: ["Olho de gato", "Catadióptrico", "Indicador luminoso", "Tachão de asfalto"],
answer: 1,
explicacao: "O termo técnico é catadióptrico. ‘Olho de gato’ é apelido popular; tachão é o corpo físico; ‘indicador luminoso’ não descreve a função óptica."
},
{
question: "Em marcas horizontais, a cor branca indica, em regra, faixas no mesmo sentido (mão única ou múltiplas faixas no sentido) e delimita vagas onde o estacionamento é permitido. Logo, a cor que transmite essas informações é a:",
options: ["Azul", "Amarela", "Preta", "Branca"],
answer: 3,
explicacao: "Linha branca organiza faixas no mesmo sentido e demarca estacionamento permitido. Amarela separa sentidos opostos e/ou áreas restritivas."
},
{
question: "Pelo apito do agente, a ordem para seguir é dada com:",
options: ["Um silvo breve", "Três silvos breves", "Dois silvos breves", "Um silvo longo"],
answer: 0,
explicacao: "Sinais sonoros: 1 breve = SIGA; 2 breves = PARE; 1 longo = DIMINUA A MARCHA."
},
{
question: "Placas de serviços auxiliares são particularmente relevantes em:",
options: ["Vias rurais com menor oferta de serviços", "Vias urbanas, por excesso de serviços", "Todas as vias, obrigatoriamente, sem distinção", "Vias de trânsito rápido, sem acessos especiais"],
answer: 0,
explicacao: "Em áreas rurais costumam existir grandes trechos sem oferta; as placas auxiliam o planejamento do usuário (combustível, alimentação, hospital etc.)."
},
{
question: "Sinalização manual do condutor: braço esquerdo estendido horizontalmente para fora do veículo indica intenção de:",
options: ["Dobrar à esquerda", "Parar imediatamente", "Permitir ultrapassagem atrás", "Dar preferência a quem está à esquerda"],
answer: 0,
explicacao: "Braço horizontal: virar à esquerda. Braço para cima: virar à direita. Braço para baixo: reduzir/parar."
},
{
question: "Sobre hierarquia de sinalização, assinale a correta:",
options: ["‘PARE’ e ‘DÊ A PREFERÊNCIA’ têm a mesma exigência de parada", "A ordem do agente não se sobrepõe à sinalização", "‘DÊ A PREFERÊNCIA’ obriga parada total sempre", "A ordem do agente prevalece, mesmo contrariando placas/semáforo"],
answer: 3,
explicacao: "A ordem do agente prevalece sobre semáforo e placas (sinalização temporária também supera a permanente). ‘Dê a preferência’ não exige parada total se não houver conflito."
},
{
question: "Em trecho com linha simples seccionada dividindo fluxos no mesmo sentido, o condutor:",
options: ["Não pode ultrapassar", "Deve aumentar a velocidade", "Pode ultrapassar, se for seguro", "Está proibido de transitar"],
answer: 2,
explicacao: "Linha seccionada autoriza mudança de faixa/ultrapassagem, desde que haja segurança. Proibição ocorre com linha contínua."
},
{
question: "Mensagens como “Respeite a Sinalização” pertencem a qual classe de placa?",
options: ["Advertência", "Regulamentação", "Serviços auxiliares", "Educativas"],
answer: 3,
explicacao: "São educativas: visam reforçar condutas seguras, sem impor obrigações/punições por si só."
},
{
question: "O agente utiliza apito para ordenar PARAR. Qual é o padrão sonoro?",
options: ["Um silvo breve", "Três silvos breves", "Dois silvos breves", "Um silvo longo"],
answer: 2,
explicacao: "Para parar: 2 silvos breves. (1 breve = siga; 1 longo = diminua)"
},
{
question: "A função da sinalização de regulamentação é:",
options: ["Informar condições, proibições, obrigações ou restrições no uso da via", "Alertar sobre condições potencialmente perigosas", "Identificar vias/destinos/serviços, rotas e distâncias", "Promover educação geral do usuário"],
answer: 0,
explicacao: "Regulamentação impõe regras (ex.: sentido proibido, velocidade, estacionamento). Advertência alerta; Indicação informa."
},
{
question: "A sinalização horizontal (no pavimento) é composta por quais grupos de marcas?",
options: [
"Marcas transversais e semáforo",
"Inscrições no pavimento e placas de regulamentação",
"Marcas longitudinais/transversais, canalização, delimitação/controle de estacionamento e inscrições no pavimento",
"Marcas longitudinais e placas de advertência"
],
answer: 2,
explicacao: "Os grupos são: longitudinais, transversais, canalização, delimitação/controle de estacionamento e/ou parada e inscrições no pavimento."
},
{
question: "O que indica a placa TIT-09 mostrada a seguir?",
image: "exposicaoagropecuaria.png",
options: ["Exposição agropecuária", "Exposição de touros", "Venda de touros", "Adestramento de touros"],
answer: 0,
explicacao: "A TIT-09 sinaliza Exposição Agropecuária (placa de indicação turística)."
},
{ "image": "tad04.png",
  "question": "O que significa esta placa de atrativos turísticos? tad-04",
  "options": [
    "Área destinada à prática de esportes náuticos.",
    "Local indicado para pesca esportiva.",
    "Área de banho e lazer aquático.",
    "Ponto de travessia de balsas ou embarcações."
  ],
  "answer": 0,
  "explicacao": "As placas de fundo marrom identificam atrativos turísticos. O pictograma mostrado representa esportes náuticos, indicando locais próprios para a prática dessa atividade."
},
{
question: "O que indica a placa TIT-10 mostrada a seguir?",
image: "rodeio.png",
options: ["Montaria", "Rodeio", "Festa de peão de Americanas", "Festa de peão de Barretos"],
answer: 1,
explicacao: "A TIT-10 é a placa de Rodeio (indicação turística)."
},
{
question: "As linhas seccionadas/contínuas, faixas de pedestres, setas e palavras pintadas no piso compõem qual tipo de sinalização?",
options: ["Vertical", "Horizontal", "Por gestos", "Por barreiras"],
answer: 1,
explicacao: "Tudo que está no pavimento (pintado/aplicado) é sinalização horizontal."
},
{
question: "Placas de regulamentação e advertência podem receber mensagens adicionais para restringir horários, tipos de veículos etc. Essas mensagens se chamam:",
options: ["Informações complementares", "Informações especializadas", "Mensagens avulsas", "Comunicados extras"],
answer: 0,
explicacao: "São informações complementares (ex.: “2ª a 6ª, 8–18h” ou “Exceto carga”)."
},
{
question: "Quanto à função, as placas classificam-se em:",
options: ["Regulamentação, advertência e indicação", "Regulamentação, semafórica e indicação", "Regulamentação, semafórica e advertência", "Serviços auxiliares, advertência e faixa de pedestres"],
answer: 0,
explicacao: "As três funções são: Regulamentação, Advertência e Indicação (que inclui destino, serviços, turística/cultural, educativas)."
},
{
question: "Ao avistar cones laranja com faixas refletivas brancas canalizando a via, a interpretação correta é de:",
options: ["Obras/manutenção na via", "Acidente sem vítimas", "Desfile cívico", "Competição automobilística"],
answer: 0,
explicacao: "Cones laranja com elementos refletivos sinalizam obras/interdições temporárias e organizam a circulação."
},
{
question: "No padrão do apito do agente, um silvo longo significa:",
options: ["Pare", "Diminua a marcha", "Siga", "Atenção, pare!"],
answer: 1,
explicacao: "Silvo longo = DIMINUA A MARCHA. (1 breve = siga; 2 breves = pare.)"
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