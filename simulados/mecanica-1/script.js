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
"question": "No conjunto motopropulsor, o sistema cuja função é acoplar e desacoplar, de forma progressiva, a força motriz do motor ao restante da transmissão (permitindo arrancar, trocar marchas e imobilizar sem apagar o motor, ou seja desligar e ligar a força do motor ao sistema de transmissão) é o(a):",
"options": ["sistema de freios", "correia transmissora", "arrefecimento", "embreagem"],
"answer": 3,
"explicacao": "A embreagem conecta e desconecta o motor da caixa de marchas de modo controlado, viabilizando partida, trocas e paradas sem desligar o motor."
},
{
"question": "O indicador que registra a distância total acumulada pelo veículo desde a fabricação, utilizado para manutenção programada e controle de uso, é o:",
"options": ["termômetro", "velocímetro", "hodômetro", "conta-giros"],
"answer": 2,
"explicacao": "O hodômetro registra quilômetros rodados; o velocímetro indica a velocidade instantânea e o conta-giros, rotações do motor."
},
{
"question": "O conjunto da transmissão que, especialmente em curvas, permite que as rodas de um mesmo eixo girem a velocidades diferentes, evitando arrasto e perda de aderência, denomina-se:",
"options": ["diferencial", "árvore de transmissão", "embreagem", "caixa de câmbio"],
"answer": 0,
"explicacao": "O diferencial compensa as diferentes trajetórias das rodas em curva, garantindo estabilidade e preservando pneus e semieixos."
},
{
"question": "Em pista reta, plana e asfaltada, ao soltar o volante o veículo tende a puxar para a esquerda e observa-se desgaste irregular no ombro de um pneu dianteiro. A intervenção prioritária e tecnicamente indicada é:",
"options": ["Substituir imediatamente todos os pneus.", "Regular a injeção eletrônica para melhorar consumo.", "Realizar o alinhamento das rodas e checar ângulos de geometria.", "Rebaixar a suspensão dianteira para corrigir o centro de gravidade."],
"answer": 2,
"explicacao": "Sintomas clássicos de desalinhamento/erro de geometria. Corrigir alinhamento e verificar cambagem/convergência; trocar pneus sem sanar a causa não resolve."
},
{
"question": "No sistema elétrico automotivo, a função primária da bateria é:",
"options": ["armazenar a energia", "fazer o carro funcionar", "gerar energia", "dar partida no motor"],
"answer": 0,
"explicacao": "A bateria armazena energia elétrica para partida e alimentação de consumidores; quem ‘gera’ em funcionamento é o alternador."
},
{
"question": "Em regime normal de funcionamento, a energia elétrica que abastece os consumidores e recarrega a bateria é produzida principalmente pelo:",
"options": ["Motor de partida", "Bateria", "Bomba de combustível", "Alternador"],
"answer": 3,
"explicacao": "O alternador converte energia mecânica do motor em elétrica, mantendo o sistema alimentado e a bateria carregada."
},
{
"question": "O conjunto responsável por manter a temperatura do motor dentro da faixa ideal de trabalho (evitando superaquecimento e desgaste prematuro) é o sistema de:",
"options": ["arrefecimento", "resfriamento", "admissão e escape", "lubrificante"],
"answer": 0,
"explicacao": "Sistema de arrefecimento (radiador, bomba d’água, válvula termostática, fluido) controla a temperatura operacional do motor."
},
{
"question": "O procedimento de ‘sangria’ no sistema de freios tem por finalidade:",
"options": ["Aumentar a pressão do pedal.", "Melhorar a lubrificação do circuito.", "Manter a altura do pedal constante.", "Eliminar bolhas de ar do sistema."],
"answer": 3,
"explicacao": "Ar no circuito deixa o pedal ‘borrachudo’ e reduz a eficiência. A sangria remove o ar para restabelecer a pressão hidráulica adequada."
},
{
"question": "Trepidação perceptível no volante apenas em determinadas faixas de velocidade (ex.: 80–100 km/h) indica, como hipótese mais comum, a necessidade de:",
"options": ["Balanceamento das rodas.", "Troca do fluido de freio.", "Lubrificação da caixa de direção.", "Correção dos ângulos de cambagem."],
"answer": 0,
"explicacao": "Desequilíbrio das rodas transmite vibração à direção em faixas específicas. Primeiro passo: balanceamento; depois, verificar demais causas."
},
{
"question": "Entre os componentes do motor, a peça estrutural de maior massa, que abriga cilindros e galerias internas, é o(a):",
"options": ["bloco do motor", "pistão", "cárter", "eixo de manivelas"],
"answer": 0,
"explicacao": "O bloco do motor é o ‘corpo’ do conjunto; pistões, virabrequim e cárter são mais leves em comparação."
},
{
"question": "A função básica do sistema de suspensão é:",
"options": ["Atuar apenas em curvas acentuadas.", "Melhorar a aderência apenas em piso molhado.", "Absorver irregularidades do piso, preservando conforto e controle.", "Absorver impactos em colisões frontais."],
"answer": 2,
"explicacao": "Molas e amortecedores mantêm contato do pneu com o solo e filtram as irregularidades, conferindo estabilidade e conforto."
},
{
"question": "Em motores de combustão interna, o tipo de motor que não utiliza distribuidor, velas de ignição nem bobina de centelha (utiliza ignição por compressão) é o motor:",
"options": ["A álcool.", "A diesel.", "A Gás Natural Veicular.", "À gasolina."],
"answer": 1,
"explicacao": "O diesel inflama o combustível pelo calor da compressão do ar. Pode usar velas aquecedoras, mas não velas de centelha."
},
{
"question": "Banda de rodagem, carcaça (lonas) e flancos são elementos constitutivos do:",
"options": ["freio", "motor", "roda", "pneu"],
"answer": 3,
"explicacao": "São partes do pneu: área de contato (banda), estrutura (carcaça) e laterais (flancos)."
},
{
"question": "Para iniciar o funcionamento do motor (fase de partida), é necessária energia elétrica para acionar o:",
"options": ["alternador ou motor de partida", "virabrequim e cilindros", "motor de arranque (partida)", "volante do pistão motor"],
"answer": 2,
"explicacao": "O motor de arranque gira o virabrequim até que haja combustão autossustentada."
},
{
"question": "Considerando os principais subconjuntos automotivos, assinale a alternativa que melhor representa a composição de sistemas em um veículo:",
"options": ["alimentação, suspensão", "Freio, direção, lubrificação", "arrefecimento, elétrico, roda, pneu", "Todos acima estão corretas"],
"answer": 3,
"explicacao": "O veículo integra múltiplos sistemas (freios, direção, suspensão, lubrificação, arrefecimento, elétrico, rodas/pneus etc.)."
},
{
"question": "Quanto ao filtro de ar do motor, ao apresentar ressecamento ou saturação de sujeira, a conduta adequada é:",
"options": ["Hidratar com água morna.", "Substituir por elemento novo.", "‘Bater ar’ no posto para reaproveitar.", "Assoprar as bordas para reuso."],
"answer": 1,
"explicacao": "Filtro saturado restringe fluxo de ar e pode permitir partículas. Procedimento correto é a substituição conforme plano de manutenção."
},
{
"question": "Amperímetro, hodômetro, comando de luzes e do limpador de para-brisa são, no painel de instrumentos, classificados como:",
"options": ["Instrumentos do painel.", "Órgãos auxiliares do motor.", "Equipamentos obrigatórios.", "Componentes externos do painel."],
"answer": 0,
"explicacao": "São instrumentos/comandos de bordo que informam e permitem acionar sistemas veiculares."
},
{
"question": "Rodar com pneus subcalibrados (pressão abaixo do recomendado) tende a:",
"options": ["Aumentar a vida útil do pneu.", "Exigir apenas balanceamento das rodas.", "Facilitar manobras sem prejuízos.", "Provocar desgaste prematuro e aquecimento excessivo."],
"answer": 3,
"explicacao": "Baixa pressão eleva o atrito, aquece a carcaça e desgasta ombros, além de aumentar consumo e distância de frenagem."
},
{
"question": "Nos motores de quatro tempos (ciclo Otto/Diesel), a sequência correta é:",
"options": ["alimentação, injeção, ignição e explosão", "ignição, escapamento, compressão e alimentação", "admissão, compressão, combustão (explosão) e escapamento", "admissão, lubrificação, explosão e escapamento"],
"answer": 2,
"explicacao": "1) Admissão; 2) Compressão; 3) Combustão/expansão; 4) Escapamento."
},
{
"question": "A estabilidade direcional e o controle do veículo durante o deslocamento dependem, sobretudo, dos sistemas de:",
"options": ["transmissão e de lubrificação", "alimentação e ignição", "freios, transmissão e pneu", "direção e suspensão"],
"answer": 3,
"explicacao": "Direção e suspensão mantêm controle, geometria e contato adequado do pneu com o solo; freios e pneus também são críticos, mas a dupla direção/suspensão define a trajetória."
},
{
"question": "No cabeçote do motor, a válvula cuja função é permitir a entrada da mistura ar-combustível (ou ar, no diesel) no interior do cilindro é a válvula de:",
"options": ["permitir que a mistura AR e combustível se inflama", "permitir que os gases sejam eliminados", "permitir que ar e combustível sejam comprimidos", "admissão (entrada da mistura)"],
"answer": 3,
"explicacao": "Válvula de admissão comanda a entrada do ar/da mistura; a de escapamento libera os gases pós-combustão."
},
{
"question": "A transferência da energia mecânica do motor para as rodas motrizes ocorre por meio do sistema de:",
"options": ["carburação", "ventilação", "rodagem", "transmissão"],
"answer": 3,
"explicacao": "Conjunto embreagem, câmbio, eixo/semieixos e diferencial compõe a transmissão do torque às rodas."
},
{
"question": "Para reduzir atrito entre superfícies móveis internas e evitar desgaste prematuro do motor, é essencial o sistema de:",
"options": ["ignição", "arrefecimento", "lubrificação", "elétrico"],
"answer": 2,
"explicacao": "Óleo correto, pressão e circulação adequadas formam o filme lubrificante que protege as partes móveis."
},
{
"question": "O instrumento que informa a velocidade instantânea do veículo ao condutor é o:",
"options": ["Hodômetro.", "Tacógrafo.", "Velocímetro.", "Manômetro."],
"answer": 2,
"explicacao": "Velocímetro = velocidade; hodômetro = quilometragem acumulada; tacógrafo registra dados de operação; manômetro mede pressão."
},
{
"question": "Para que ocorra a combustão interna é imprescindível a presença, no cilindro, de:",
"options": ["Combustível e água.", "Combustível e vapor de água.", "Ar (oxigênio) e combustível.", "Água e nitrogênio."],
"answer": 2,
"explicacao": "A mistura ar (oxigênio) + combustível, nas condições corretas de compressão/ignição, gera a combustão."
},
{
"question": "No sistema de ignição por centelha, a bobina tem a função principal de:",
"options": ["Condensar corrente elétrica.", "Diminuir a tensão de bateria.", "Elevar a baixa tensão da bateria para alta tensão nas velas.", "Distribuir a corrente elétrica."],
"answer": 2,
"explicacao": "A bobina transforma 12 V em alta tensão para provocar a centelha nas velas (motores ciclo Otto)."
},
{
"question": "A válvula termostática no circuito de arrefecimento atua para:",
"options": ["Diminuir permanentemente o fluxo de água.", "Impedir a passagem de água ao carburador.", "Indicar temperatura quando o fluxo diminui.", "Liberar a circulação para o radiador quando a temperatura de abertura é atingida."],
"answer": 3,
"explicacao": "Ela mantém o motor aquecendo rápido e, ao atingir a temperatura de projeto, abre para o radiador, estabilizando a temperatura."
},
{
"question": "Ao girar a chave de ignição, o motor não acusa qualquer tentativa de partida (sem ruídos de arranque). A causa mais provável encontra-se em:",
"options": ["Falta de combustível.", "Falta de água no radiador.", "Bateria descarregada ou falha do motor de arranque.", "Entupimento do carburador."],
"answer": 2,
"explicacao": "Sem acionamento do arranque, suspeita-se de bateria (baixa tensão/conexões) ou defeito no motor de partida/relé."
},
{
"question": "O conjunto suspensão/amortecedores tem como objetivo, principalmente:",
"options": ["Preservar apenas a estética original do veículo.", "Acelerar o desgaste dos pneus.", "Provocar perda de controle em irregularidades.", "Manter estabilidade e contato dos pneus com o solo."],
"answer": 3,
"explicacao": "Absorve impactos e controla oscilação, garantindo aderência e segurança direcional."
},
{
"question": "O dispositivo destinado ao controle do ruído proveniente do motor (silenciador) é equipamento obrigatório, dentre os seguintes, especificamente para veículos:",
"options": ["Reboques ou semirreboques.", "De propulsão humana e de tração animal.", "Automotores com motor a combustão.", "Elétricos."],
"answer": 2,
"explicacao": "Veículos automotores de combustão devem dispor de silenciador adequado para atender a limites de ruído."
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