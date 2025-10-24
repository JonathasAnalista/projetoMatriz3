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
"question": "Em programas de inspeção periódica (veículos e indústrias), o objetivo direto é, principalmente:",
"options": [
"Contribuir para a segurança dos veículos.",
"Reduzir as emissões de poluentes para dentro dos limites legais.",
"Diminuir o desgaste do motor dos veículos.",
"Diminuir a formação de ozônio troposférico de forma imediata."
],
"answer": 1,
"explicacao": "A inspeção verifica se a emissão está dentro do limite. Menos poluente lançado = ar mais limpo."
},
{
"question": "Substâncias corrosivas são aquelas que:",
"options": [
"Corroem/destroem materiais e tecidos por ação química.",
"Não apresentam riscos para os seres vivos.",
"Não contêm micro-organismos infecciosos (logo, não são perigosas).",
"Não oferecem perigo em contato com a pele."
],
"answer": 0,
"explicacao": "Corrosivo = que queima/corroi metal, pele e outros materiais por reação química."
},
{
"question": "Rótulos de risco (diamante/placas laranja, números ONU) são obrigatórios em veículos destinados ao transporte de:",
"options": [
"Produtos artesanais.",
"Cargas indivisíveis.",
"Cargas perecíveis.",
"Produtos perigosos."
],
"answer": 3,
"explicacao": "Servem para identificar o tipo de perigo (inflamável, tóxico, corrosivo, etc.)."
},
{
"question": "Para reduzir poluição sonora urbana, o proprietário de veículo deve, entre outras medidas:",
"options": [
"Regular periodicamente o motor (evita ruídos anormais).",
"Manter o silenciador/escapamento em bom estado.",
"Evitar uso desnecessário de buzina ou som alto.",
"Todas as respostas anteriores."
],
"answer": 3,
"explicacao": "Manutenção + uso responsável de buzina/áudio = menos barulho."
},
{
"question": "No SISNAMA, o órgão consultivo e deliberativo que estabelece normas ambientais nacionais é:",
"options": [
"INMETRO.",
"CONAMA.",
"DETRAN.",
"SENATRAN."
],
"answer": 1,
"explicacao": "O CONAMA define diretrizes e padrões ambientais de alcance nacional."
},
{
"question": "Nas grandes cidades, as principais fontes de poluição do ar costumam ser:",
"options": [
"Apenas queimadas sazonais.",
"Somente a queima de carvão.",
"Automóveis (frota) e indústrias.",
"Incineradores domésticos."
],
"answer": 2,
"explicacao": "Frota + indústrias respondem pela maior parte dos poluentes urbanos."
},
{
"question": "Exercer cidadania ambiental no trânsito é:",
"options": [
"Manter farol alto sempre, para “ver melhor”.",
"Jogar lixo pela janela só quando for “biodegradável”.",
"Danificar plantações às margens por ser “área rural”.",
"Preservar a natureza e usar os recursos com responsabilidade."
],
"answer": 3,
"explicacao": "Cidadania = respeito ao ambiente e aos outros usuários da via."
},
{
"question": "Acidente com carga perigosa e produto químico vazando. A primeira ação correta é:",
"options": [
"Isolar a área e avaliar riscos (para si e terceiros) antes de qualquer socorro.",
"Chamar caminhão-pipa e lavar a pista imediatamente.",
"Liberar parcialmente a via com cones para “fluir o trânsito”.",
"Socorrer as vítimas sem avaliar riscos se não houver fogo visível."
],
"answer": 0,
"explicacao": "Primeiro: segurança. Isola-se a área e avalia-se o risco para evitar novas vítimas."
},
{
"question": "Entre impactos da chuva ácida, pode ocorrer, com o tempo e local adequados:",
"options": [
"Crescimento acelerado de florestas.",
"Derretimento de calotas polares de forma direta.",
"Degradação do solo, favorecendo desertificação.",
"Conservação de estruturas metálicas."
],
"answer": 2,
"explicacao": "A acidificação empobrece o solo e a vegetação, agravando processos de degradação."
},
{
"question": "Para transportar produto perigoso, o condutor deve concluir curso:",
"options": [
"De Direção Defensiva (apenas).",
"TPP – Transporte de Produtos Perigosos.",
"De Primeiros Socorros (apenas).",
"De Meio Ambiente (apenas)."
],
"answer": 1,
"explicacao": "O TPP capacita para riscos, emergências e procedimentos do transporte perigoso."
},
{
"question": "Nos estudos ambientais, considera-se meio ambiente como o conjunto formado por:",
"options": [
"Homem, natureza e catalisadores.",
"Homem, natureza e poluentes (somente).",
"Apenas teorias e mutações da fauna.",
"Homem, natureza e seus elementos/interações."
],
"answer": 3,
"explicacao": "Abrange seres vivos, elementos físicos e suas interações, incluindo o ser humano."
},
{
"question": "Medidas que efetivamente melhoram o meio ambiente incluem:",
"options": [
"Filtragem para reduzir emissão industrial.",
"Manutenção periódica dos veículos.",
"Reciclagem de materiais.",
"Todas as alternativas anteriores."
],
"answer": 3,
"explicacao": "Somar ações em várias frentes traz melhor resultado ambiental."
},
{
"question": "Veículos mal conservados ou desregulados tendem a:",
"options": [
"Poluir mais (ar e ruído).",
"Poluir só a água (apenas).",
"Não afetar o meio ambiente.",
"Apenas gastar mais peças, sem poluir."
],
"answer": 0,
"explicacao": "Desregulagem aumenta emissão de gases/partículas e barulho mecânico."
},
{
"question": "Somos cidadãos no trânsito quando:",
"options": [
"Apontamos erros alheios e ignoramos os nossos.",
"Buzinamos para apressar quem está à frente no semáforo.",
"Adotamos postura positiva que aumenta a segurança de todos.",
"Estacionamos “só por segundos” em local proibido."
],
"answer": 2,
"explicacao": "Cidadania = atitude responsável e colaborativa, sempre com foco na segurança."
},
{
"question": "Exposições prolongadas a ruído com alta intensidade podem causar danos irreversíveis. A partir de valores próximos de:",
"options": [
"80 dB.",
"60 dB.",
"90 dB.",
"120 dB."
],
"answer": 2,
"explicacao": "Por volta de 100 dB o risco de dano permanente cresce rápido, mesmo em curtas exposições."
},
{
"question": "Entre os elementos abaixo, o que NÃO é considerado poluente do ar é:",
"options": [
"Fuligem.",
"Vapor de água.",
"Queimadas.",
"Monóxido de carbono."
],
"answer": 1,
"explicacao": "Vapor d’água é componente natural da atmosfera (não é poluente)."
},
{
"question": "Cidadania no trânsito significa:",
"options": [
"Circular como quiser na via pública.",
"Exigir direitos sem cumprir deveres.",
"Exercer direitos e cumprir deveres previstos no CTB.",
"Fazer o que “não prejudica ninguém”, mesmo contrariando a lei."
],
"answer": 2,
"explicacao": "Direitos + deveres do CTB = convivência segura e respeitosa."
},
{
"question": "Educação para o trânsito tem como finalidade principal:",
"options": [
"Formar infratores contumazes (reeducação apenas).",
"Reciclar apenas profissionais do setor.",
"Promover comportamentos seguros de condutores e pedestres.",
"Treinar somente candidatos à CNH."
],
"answer": 2,
"explicacao": "Visa consciência, respeito e segurança de todos os usuários da via."
},
{
"question": "Gases do escapamento podem:",
"options": [
"Irritar olhos e garganta.",
"Piorar asma/bronquite.",
"Gerar dor de cabeça/enjoo.",
"Todas as alternativas anteriores."
],
"answer": 3,
"explicacao": "Poluentes como CO, NOx e VOCs afetam diretamente a saúde."
},
{
"question": "Para poluir menos, o veículo deve trafegar:",
"options": [
"Com emissões acima do permitido (para “rendimento”).",
"Soltando fuligem (é “normal”).",
"Com o motor e escapamento bem regulados.",
"Com o escape danificado (sem filtro)."
],
"answer": 2,
"explicacao": "Manutenção correta reduz emissões e melhora a eficiência."
},
{
"question": "A emissão de sons/ruídos/vibrações que afetam saúde e bem-estar caracteriza:",
"options": [
"Poluição sonora.",
"Poluição do solo.",
"Poluição da água.",
"Poluição do ar (exclusivamente)."
],
"answer": 0,
"explicacao": "Barulho excessivo gera estresse, perda auditiva e distúrbios do sono."
},
{
"question": "Circulação em condições seguras é direito:",
"options": [
"Só dos pedestres.",
"Só dos motoristas de coletivo.",
"De todos, e dever dos órgãos do SNT garanti-lo.",
"Dos animais em áreas urbanas."
],
"answer": 2,
"explicacao": "É direito universal na via; cabe ao SNT prover condições seguras."
},
{
"question": "Cortesia e solidariedade no trânsito significam:",
"options": [
"Fazer amigos no caminho.",
"Respeitar direitos alheios e ser tolerante.",
"Ceder passagem mesmo com sinal verde para você.",
"Acompanhar pedestres fora da faixa para atravessar."
],
"answer": 1,
"explicacao": "Respeito + tolerância = convivência segura e menos conflitos."
},
{
"question": "Qual destes dispositivos NÃO ajuda a reduzir consumo/emissões do veículo:",
"options": [
"Injeção eletrônica.",
"Sonda lambda.",
"Catalisador.",
"Carburador."
],
"answer": 3,
"explicacao": "O carburador é menos preciso que a injeção; não controla emissões como os demais."
},
{
"question": "Para reduzir danos da fumaça veicular à saúde, o CTB prevê:",
"options": [
"Controle de emissões de gases e ruídos.",
"Uso obrigatório de máscaras pela população.",
"Rodízio veicular nacional obrigatório.",
"Incentivo ao uso de motores a diesel."
],
"answer": 0,
"explicacao": "A lei impõe limites e fiscalização de emissões e ruídos."
},
{
"question": "CONAMA e agências ambientais (estaduais/municipais) priorizam:",
"options": [
"Conservar apenas equipamentos de segurança de rodovias.",
"Organizar só o fluxo de veículos nas cidades.",
"Fiscalizar somente a fabricação de veículos.",
"Defender a saúde pública e o meio ambiente."
],
"answer": 3,
"explicacao": "A missão central é proteção ambiental e da saúde coletiva."
},
{
"question": "Quanto ao meio ambiente, as queimadas tendem a provocar, entre outros efeitos:",
"options": [
"Reflorestamento natural.",
"Aumento de CO₂ na atmosfera.",
"Insônia (apenas).",
"Mais CFCs no ar."
],
"answer": 1,
"explicacao": "A queima libera muito CO₂, contribuindo para efeito estufa."
},
{
"question": "A poluição do ar está mais ligada a problemas de:",
"options": [
"Aparelho digestivo.",
"Sistema respiratório.",
"Visão (exclusivamente).",
"Aparelho locomotor."
],
"answer": 1,
"explicacao": "Irrita vias aéreas e agrava doenças como asma e bronquite."
},
{
"question": "Veículos a diesel, quando desregulados, costumam emitir:",
"options": [
"Ozônio.",
"Gás carbônico (apenas).",
"Monóxido de carbono (apenas).",
"Fumaça preta (particulado visível)."
],
"answer": 3,
"explicacao": "A “fumaça preta” indica combustão incompleta e alto particulado."
},
{
"question": "Qual alternativa NÃO é efeito típico do ruído sobre a saúde humana:",
"options": [
"Insônia.",
"Efeito estufa.",
"Irritabilidade.",
"Dores de cabeça."
],
"answer": 1,
"explicacao": "Efeito estufa é fenômeno climático; os demais são efeitos do barulho."
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