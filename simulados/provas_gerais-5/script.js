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
    "question": "A faixa de travessia de pedestres é classificada como:",
    "options": ["Marca vertical e transversal", "Marca horizontal e transversal", "Marca horizontal e paralela", "Marca vertical e paralela"],
    "answer": 1,
    "explicacao": "A faixa de pedestres é uma marca horizontal pintada no solo e transversal à via."
  },
  {
    "question": "As placas de educação no trânsito são caracterizadas por:",
    "options": ["Cor amarela e formato quadrado", "Cor vermelha e formato circular", "Cor branca e preta, formato retangular", "Cor verde e azul, formato quadrado"],
    "answer": 2,
    "explicacao": "Placas educativas são retangulares e usam as cores branca e preta."
  },
  {
    "question": "Na sinalização horizontal, a cor utilizada para separar fluxos de sentidos opostos é:",
    "options": ["Branca", "Azul", "Amarela", "Vermelha"],
    "answer": 2,
    "explicacao": "A cor amarela é utilizada para separar fluxos de sentidos contrários."
  },
  {
    "question": "O motorista que estaciona em fila dupla está sujeito a:",
    "options": ["Apenas advertência verbal", "Multa e remoção do veículo", "Suspensão da CNH", "Apenas pontos na CNH"],
    "answer": 1,
    "explicacao": "Estacionar em fila dupla é infração grave, com multa e remoção."
  },
  {
    "question": "O cinto de segurança deve ser utilizado:",
    "options": ["Apenas em rodovias federais", "Apenas para o condutor", "Por todos os ocupantes do veículo, em qualquer via pública", "Apenas pelos passageiros do banco dianteiro"],
    "answer": 2,
    "explicacao": "O uso do cinto é obrigatório para todos em qualquer via pública."
  },
  {
    "question": "Em caso de pane em via pública, a conduta correta é:",
    "options": ["Colocar o triângulo a 30 metros e acionar o pisca-alerta", "Deixar o veículo parado sem sinalização", "Apenas acionar o pisca-alerta", "Colocar o triângulo a 5 metros"],
    "answer": 0,
    "explicacao": "A sinalização deve ser feita com triângulo a 30 metros e pisca-alerta ligado."
  },
  {
    "question": "De acordo com o CTB, as vias urbanas classificam-se em:",
    "options": ["Rurais e urbanas", "Locais, coletoras, arteriais e de trânsito rápido", "Arteriais, rurais, rodovias e coletoras", "Federais, estaduais e municipais"],
    "answer": 1,
    "explicacao": "As vias urbanas são classificadas em local, coletora, arterial e de trânsito rápido."
  },
  {
    "question": "O equipamento obrigatório em qualquer veículo automotor é:",
    "options": ["GPS", "Rádio", "Limpador de para-brisas", "Película protetora nos vidros"],
    "answer": 2,
    "explicacao": "O limpador de para-brisas é considerado equipamento obrigatório."
  },
  {
    "question": "O motorista deve reduzir a velocidade principalmente:",
    "options": ["Em locais desertos", "Perto de escolas e locais de grande movimentação de pedestres", "Somente nas rodovias", "Somente à noite"],
    "answer": 1,
    "explicacao": "É fundamental reduzir em áreas de escolas e grande fluxo de pedestres."
  },
  {
    "question": "A cor utilizada para separar fluxos no mesmo sentido é:",
    "options": ["Branca", "Amarela", "Azul", "Vermelha"],
    "answer": 0,
    "explicacao": "A cor branca é usada para separar fluxos no mesmo sentido."
  },
  {
    "question": "Em caso de acidente com vítima, o correto é:",
    "options": ["Retirar a vítima rapidamente do local", "Sinalizar o local, acionar socorro e só remover em último caso", "Dar água e alimentos à vítima", "Ignorar o acidente e seguir viagem"],
    "answer": 1,
    "explicacao": "Deve-se sinalizar, acionar socorro e remover apenas em último caso."
  },
  {
    "question": "A placa R-1 (vermelha, octogonal) significa:",
    "options": ["Proibido ultrapassar", "Parada obrigatória", "Dê a preferência", "Trânsito proibido"],
    "answer": 1,
    "explicacao": "A placa R-1 indica parada obrigatória."
  },
  {
    "question": "São órgãos do Sistema Nacional de Trânsito:",
    "options": ["Prefeitura, Polícia Militar e SAMU", "CONTRAN, DENATRAN e DETRAN", "Polícia Rodoviária Federal e Bombeiros", "Apenas o CONTRAN"],
    "answer": 1,
    "explicacao": "CONTRAN, DENATRAN e DETRAN são órgãos do SNT."
  },
  {
    "question": "A responsabilidade de manter o veículo em condições de segurança é:",
    "options": ["Exclusiva da oficina mecânica", "Do condutor e do proprietário", "Do fabricante do veículo", "Do despachante"],
    "answer": 1,
    "explicacao": "Condutor e proprietário respondem pela manutenção do veículo."
  },
  {
    "question": "Em caso de incêndio ambiental, o motorista deve:",
    "options": ["Jogar cigarros apenas no acostamento", "Jogar lixo fora da rodovia", "Evitar jogar pontas de cigarro ou materiais inflamáveis pela janela", "Deixar o motor ligado em local aberto"],
    "answer": 2,
    "explicacao": "Deve-se evitar jogar cigarros e materiais inflamáveis pela janela."
  },
  {
    "question": "O uso de álcool e drogas pelo condutor provoca:",
    "options": ["Reflexos mais rápidos", "Melhor concentração", "Redução da atenção e aumento do risco de acidentes", "Melhoria na habilidade motora"],
    "answer": 2,
    "explicacao": "Álcool e drogas reduzem reflexos e aumentam o risco de acidentes."
  },
  {
    "question": "A velocidade máxima em vias locais urbanas, quando não sinalizadas, é:",
    "options": ["20 km/h", "30 km/h", "40 km/h", "60 km/h"],
    "answer": 1,
    "explicacao": "Em vias locais a velocidade máxima é de 30 km/h."
  },
  {
    "question": "A velocidade máxima em vias arteriais urbanas, quando não sinalizadas, é:",
    "options": ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
    "answer": 3,
    "explicacao": "Nas vias arteriais urbanas, a máxima é 60 km/h."
  },
  {
    "question": "A embreagem do veículo serve para:",
    "options": ["Reduzir o atrito dos pneus", "Transmitir e interromper a força do motor às rodas", "Melhorar a direção hidráulica", "Regular a velocidade máxima"],
    "answer": 1,
    "explicacao": "A embreagem acopla e desacopla a força do motor às rodas."
  },
  {
    "question": "O motorista defensivo deve:",
    "options": ["Aumentar a velocidade em dias chuvosos", "Respeitar os limites de velocidade e manter distância de segurança", "Desobedecer a sinalização em emergências pessoais", "Confiar sempre no comportamento dos outros condutores"],
    "answer": 1,
    "explicacao": "A direção defensiva exige respeito à sinalização e distância segura."
  },
  {
    "question": "O motor de partida tem a função de:",
    "options": ["Carregar a bateria", "Dar a partida inicial no motor", "Controlar a velocidade", "Refrigerar o motor"],
    "answer": 1,
    "explicacao": "O motor de partida fornece energia inicial para ligar o motor."
  },
  {
    "question": "O condutor deve acionar o pisca-alerta:",
    "options": ["Para ultrapassar em alta velocidade", "Somente à noite", "Em emergências ou veículo imobilizado na via", "Para indicar conversão à direita"],
    "answer": 2,
    "explicacao": "Pisca-alerta deve ser usado em emergências ou imobilização."
  },
  {
    "question": "O triângulo de segurança deve ser colocado a:",
    "options": ["2 metros do veículo", "5 metros do veículo", "10 metros do veículo", "30 metros do veículo"],
    "answer": 3,
    "explicacao": "O triângulo deve ser colocado a pelo menos 30 metros."
  },
  {
    "question": "O condutor que dirige em velocidade incompatível com a via comete:",
    "options": ["Infração leve", "Infração grave", "Infração média", "Infração gravíssima"],
    "answer": 1,
    "explicacao": "Dirigir em velocidade incompatível é infração grave."
  },
  {
    "question": "O CTB determina que os pedestres devem:",
    "options": ["Andar no meio-fio", "Andar sempre pelo lado esquerdo das vias", "Andar pelo passeio e atravessar nas faixas", "Andar no bordo da pista de rolamento"],
    "answer": 2,
    "explicacao": "Pedestres devem usar o passeio e atravessar nas faixas."
  },
  {
    "question": "O condutor que não reduz velocidade ao se aproximar de escolas:",
    "options": ["Comete infração leve", "Comete infração média", "Comete infração grave", "Comete infração gravíssima"],
    "answer": 3,
    "explicacao": "Não reduzir em áreas escolares é infração gravíssima."
  },
  {
    "question": "O catalisador do veículo tem a função de:",
    "options": ["Reduzir o consumo de combustível", "Reduzir a emissão de gases poluentes", "Aumentar a potência do motor", "Ampliar a velocidade máxima"],
    "answer": 1,
    "explicacao": "O catalisador reduz os poluentes emitidos pelo motor."
  },
  {
    "question": "Quando ocorre parada cardiorrespiratória, o tempo médio para óbito é:",
    "options": ["1 a 2 minutos", "3 a 5 minutos", "10 minutos", "20 minutos"],
    "answer": 1,
    "explicacao": "Sem atendimento, a vítima pode falecer em 3 a 5 minutos."
  },
  {
    "question": "O condutor defensivo deve manter a distância de segurança:",
    "options": ["De pelo menos 2 metros", "De acordo com a velocidade e condições da via", "Somente em rodovias", "Apenas em dias de chuva"],
    "answer": 1,
    "explicacao": "A distância depende da velocidade e condições da via."
  },
  {
    "question": "A sinalização que indica “Pare” é:",
    "options": ["Placa circular amarela", "Placa octogonal vermelha", "Placa triangular vermelha", "Placa retangular azul"],
    "answer": 1,
    "explicacao": "A placa de Pare é octogonal e vermelha."
  }
]


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