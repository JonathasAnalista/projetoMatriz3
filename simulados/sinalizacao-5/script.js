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
    "question": "Numa via cujas faixas de tráfego sejam separadas por linhas brancas, podemos dizer que:",
    "options": ["É uma via de mão única.", "É uma via de mão dupla.", "É uma estrada.", "É uma ciclovia."],
    "answer": 0,
    "explicacao": "Linhas brancas separam fluxos no mesmo sentido, caracterizando mão única."
  },
  {
    "question": "As placas que têm a função de educar condutores e pedestres quanto ao seu comportamento no trânsito, são as:",
    "options": ["De atrativos turísticos.", "Educativas.", "De advertência.", "De regulamentação."],
    "answer": 1,
    "explicacao": "Placas educativas trazem mensagens de conscientização sobre o trânsito."
  },
  {
    "question": "As mensagens expressas nas placas de sinalização de advertência são de caráter de:",
    "options": ["Ordem.", "Informação.", "Alerta.", "Educação."],
    "answer": 2,
    "explicacao": "Placas de advertência alertam sobre situações de risco adiante."
  },
  {
    "image": "quest4.png",
    "question": "O sinal semafórico, identificado na imagem, indica:",
    "options": ["Controle ou faixa reversível.", "Direção livre.", "Direção controlada.", "Direção proibida."],
    "answer": 2,
    "explicacao": "O semáforo mostrado corresponde a direção controlada."
  },
  {
    "question": "A sinalização de trânsito é feita nas vias públicas através de:",
    "options": [
      "Placas, gestos e marcos.",
      "Placas, advertência, indicações luminosas.",
      "Placas, manobras, indicações luminosas, gestos e sinais sonoros.",
      "Placas, marcações, dispositivos auxiliares, indicações luminosas, gestos e sinais sonoros."
    ],
    "answer": 3,
    "explicacao": "A sinalização de trânsito engloba placas, marcações, dispositivos, luzes, gestos e sinais sonoros."
  },
  {
    "question": "As cores das luzes utilizadas para controle de fluxo de pedestres são:",
    "options": ["Vermelha, amarela e verde.", "Vermelha e amarela.", "Verde, vermelha intermitente e vermelha.", "Amarela e verde."],
    "answer": 2,
    "explicacao": "O semáforo de pedestre utiliza verde, vermelho e vermelho intermitente."
  },
  {
    "question": "As placas de sinalização, quanto à sua função classificam-se em:",
    "options": [
      "De regulamentação, advertência e indicação.",
      "De regulamentação, semafórica e indicação.",
      "De regulamentação, semafórica e advertência.",
      "De serviços auxiliares, advertência e faixa de proteção para pedestres."
    ],
    "answer": 0,
    "explicacao": "A classificação básica é: regulamentação, advertência e indicação."
  },
  {
    "image": "quest8.png",
    "question": "O símbolo, inscrito no pavimento, e associado à sinalização vertical, representado por uma cadeira de rodas demarca:",
    "options": [
      "Local proibido de parada de veículos conduzidos por deficientes físicos.",
      "Local de estacionamento de veículos conduzidos por deficientes físicos ou que os transporte.",
      "Local de embarque e desembarque de deficientes físicos.",
      "Local de trânsito de deficientes físicos."
    ],
    "answer": 1,
    "explicacao": "Esse símbolo indica vaga reservada a deficientes físicos ou veículos que os transportem."
  },
  {
    "question": "A sinalização terá a seguinte ordem de prevalência, em ordem:",
    "options": [
      "As indicações do semáforo sobre os demais sinais; as indicações dos sinais sobre as demais normas de trânsito; as ordens do agente de trânsito sobre as normas de circulação e outros sinais.",
      "As ordens do agente de trânsito sobre as normas de circulação e outros sinais; as indicações dos sinais sobre as demais normas de trânsito.",
      "Não existe ordem de prevalência.",
      "As ordens do agente de trânsito sobre as normas de circulação e outros sinais; as indicações do semáforo sobre os demais sinais; as indicações dos sinais sobre as demais normas de trânsito."
    ],
    "answer": 3,
    "explicacao": "A ordem correta é: agente > semáforo > sinais > normas."
  },
  {
    "image": "quest10.png",
    "question": "A placa A-8 adverte que:",
    "options": ["Via lateral à esquerda.", "Entroncamento oblíquo à direita.", "Interseção em “T”.", "Bifurcação em “Y”."],
    "answer": 2,
    "explicacao": "A placa A-8 indica a presença de uma interseção em T."
  },
  {
    "image": "quest11.png",
    "question": "A placa R-6a regulamenta:",
    "options": ["Proibido parar e estacionar.", "Proibido estacionar.", "Estacionamento regulamentado.", "Proibido parar."],
    "answer": 1,
    "explicacao": "R-6a significa 'Proibido estacionar'."
  },
  {
    "question": "Ao encontrar um trecho de via com sentido único e mais de uma faixa de circulação, você saberá que a mudança de faixa será proibida quando a sinalização horizontal for:",
    "options": [
      "Linha contínua simples amarela.",
      "Linha simples seccionada branca.",
      "Linha dupla seccionada amarela.",
      "Linha simples contínua branca."
    ],
    "answer": 3,
    "explicacao": "Linha branca contínua simples proíbe a mudança de faixa."
  },
  {
    "image": "quest13.png",
    "question": "A marcação de área de conflito, identificada na imagem, significa que o condutor:",
    "options": [
      "Não pode circular com seu veículo, pois é área exclusiva de pedestre.",
      "Não deve parar e nem estacionar o veículo.",
      "Pode estacionar sua motocicleta.",
      "Deve parar e estacionar o veículo."
    ],
    "answer": 1,
    "explicacao": "Área de conflito indica que não se deve parar nem estacionar."
  },
  {
    "question": "Ao se aproximar de uma faixa de travessia de pedestres (zebra), você percebe que ela cruza toda a pista e está pintada sobre o pavimento. De acordo com a classificação oficial das marcas viárias, essa sinalização é:",
    "options": ["Horizontal e transversal", "Vertical e transversal", "Horizontal e paralela", "Vertical e paralela"],
    "answer": 0,
    "explicacao": "Faixa de pedestres é marca horizontal (no piso) e transversal (cruza a via). ‘Vertical’ refere-se a placas/postes; ‘paralela’ descreve marcas no sentido do fluxo."
    },
  {
    "image": "quest15.png",
    "question": "A placa R-1 regulamenta:",
    "options": ["Semáforo à frente.", "Parada obrigatória à frente.", "Dê a preferência.", "Parada Obrigatória."],
    "answer": 3,
    "explicacao": "R-1 é a clássica placa de 'Parada Obrigatória'."
  },
  {
    "image": "quest16.png",
    "question": "A placa A-10a adverte a existência de:",
    "options": ["Via lateral à esquerda.", "Via lateral à direita.", "Entroncamento oblíquo à esquerda.", "Curva à esquerda."],
    "answer": 2,
    "explicacao": "A-10a indica entroncamento oblíquo à esquerda."
  },
  {
    "image": "quest17.png",
    "question": "A placa TIT-10 indica:",
    "options": ["Festas populares.", "Rodeio.", "Teatro.", "Convenções."],
    "answer": 1,
    "explicacao": "TIT-10 representa teatro."
  },
  {
    "image": "quest18.png",
    "question": "A placa de número A-22 indica:",
    "options": ["Ponte móvel.", "Estreitamento de pista à direita.", "Ponte estreita.", "Estreitamento de pista ao centro."],
    "answer": 2,
    "explicacao": "A-22 alerta para ponte estreita."
  },
  {
    "image": "quest19.png",
    "question": "A placa R-17 regulamenta:",
    "options": [
      "Carga máxima permitida.",
      "Peso máximo permitido por eixo.",
      "Comprimento máximo permitido.",
      "Largura máxima permitida por eixo."
    ],
    "answer": 1,
    "explicacao": "R-17 regulamenta peso máximo permitido por eixo."
  },
  {
    "question": "A sinalização semafórica de advertência que tem a função de advertir da existência de obstáculo ou situação perigosa compõe-se de:",
    "options": [
      "Uma verde e uma vermelha.",
      "Uma ou mais luzes de cor amarela.",
      "Uma ou duas de cor vermelha.",
      "Uma ou duas de cor verde."
    ],
    "answer": 1,
    "explicacao": "Semáforo de advertência é feito por uma ou mais luzes amarelas."
  },
  {
    "image": "quest21.png",
    "question": "As linhas transversais, identificadas na imagem, são chamadas de:",
    "options": [
      "Linhas de Retenção.",
      "Linhas de Dê a Preferência.",
      "Linhas de Estímulo à Redução de Velocidade.",
      "Linhas de Canalização."
    ],
    "answer": 2,
    "explicacao": "Linhas de estímulo indicam a necessidade de reduzir a velocidade."
  },
  {
    "question": "São aplicados junto a obstáculos, como viadutos e pontes:",
    "options": [
      "Dispositivos de canalização.",
      "Sinalização de alerta.",
      "Marcadores de obstáculo e perigo.",
      "Todas acima."
    ],
    "answer": 3,
    "explicacao": "Nesses locais pode haver dispositivos, sinalização de alerta e marcadores de obstáculo."
  },
  {
    "question": "As linhas seccionadas ou contínuas, as faixas para pedestres, os sinais e as palavras inscritas no solo, são marcas que caracterizam a sinalização:",
    "options": ["Vertical.", "Horizontal.", "Por gestos.", "Por barreiras."],
    "answer": 1,
    "explicacao": "Essas são marcas da sinalização horizontal."
  },
  {
    "image": "quest24.png",
    "question": "Diante da placa SAU-14 você entende que é uma área:",
    "options": [
      "Permitida para camping.",
      "Com aeroporto nas proximidades.",
      "Com Igreja do patrimônio histórico.",
      "De proteção para indígenas."
    ],
    "answer": 0,
    "explicacao": "SAU-14 sinaliza local permitido para camping."
  },
  {
    "image": "quest25.png",
    "question": "É finalidade do dispositivo ilustrado:",
    "options": [
      "Advertir sobre situação inesperada à frente.",
      "Transmitir mensagens educativas.",
      "Regulamentar a velocidade em função do volume de veículos.",
      "Todas as afirmativas acima estão corretas."
    ],
    "answer": 3,
    "explicacao": "O dispositivo pode servir para todas as finalidades indicadas."
  },
  {
    "image": "quest26.png",
    "question": "A placa A-25 indica:",
    "options": [
      "Sinalização de alerta.",
      "Marcadores de perigo.",
      "Marcadores de alinhamento.",
      "Dispositivos de canalização."
    ],
    "answer": 2,
    "explicacao": "A-25 é marcador de alinhamento."
  },
  {
    "image": "quest27.png",
    "question": "Identifique o significado do gesto do condutor expresso no desenho.",
    "options": [
      "Diminuir a marcha ou parar.",
      "Virar à esquerda.",
      "Virar à direita.",
      "Trânsito impedido em todas as direções."
    ],
    "answer": 0,
    "explicacao": "O gesto representa ordem de diminuir a marcha ou parar."
  },
  {
    "image": "quest28.png",
    "question": "Indique o nome correto da placa R-21:",
    "options": ["Barreira.", "Alfândega.", "Fiscalização.", "Balança."],
    "answer": 1,
    "explicacao": "R-21 significa 'Alfândega'."
  },
  {
    "question": "Marcas que delineiam a parte da pista destinada à circulação de veículos, separando-a do acostamento, chamam-se linhas:",
    "options": ["Planas.", "Linhas férreas.", "Limite.", "De bordo."],
    "answer": 3,
    "explicacao": "Linhas de bordo separam pista e acostamento."
  },
  {
    "question": "Mensagens adicionais podem ser incorporadas às placas de sinalização de regulamentação e de advertência. Estas mensagens são denominadas:",
    "options": [
      "Informações complementares.",
      "Informações especializadas.",
      "Mensagens avulsas.",
      "Comunicados extras."
    ],
    "answer": 0,
    "explicacao": "São chamadas informações complementares."
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