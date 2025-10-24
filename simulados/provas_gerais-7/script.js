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
    "question": "O condutor que ultrapassa em faixa contínua comete:",
    "options": ["Infração média", "Infração grave", "Infração gravíssima", "Apenas advertência"],
    "answer": 2,
    "explicacao": "Ultrapassar em faixa contínua é infração gravíssima, com multa multiplicada."
  },
  {
    "question": "Quando a sinalização de um semáforo está intermitente na cor amarela, significa:",
    "options": ["Trânsito livre em qualquer direção", "Atenção redobrada, podendo seguir com cautela", "Obrigatoriedade de parar o veículo", "Preferência de passagem apenas para pedestres"],
    "answer": 1,
    "explicacao": "Amarelo intermitente indica atenção, podendo seguir com cautela."
  },
  {
    "question": "O condutor que não sinaliza a mudança de faixa:",
    "options": ["Comete infração leve", "Comete infração média", "Comete infração grave", "Comete infração gravíssima"],
    "answer": 2,
    "explicacao": "Deixar de sinalizar manobra é infração grave."
  },
  {
    "question": "A função do catalisador no veículo é:",
    "options": ["Reduzir poluentes", "Aumentar a potência", "Reduzir consumo de combustível", "Melhorar a suspensão"],
    "answer": 0,
    "explicacao": "O catalisador reduz a emissão de gases poluentes."
  },
  {
    "question": "De acordo com o CTB, a prioridade de passagem é do pedestre:",
    "options": ["Somente em rodovias", "Sempre que estiver atravessando na faixa de segurança", "Apenas se não houver semáforo", "Nunca, pois veículos têm preferência"],
    "answer": 1,
    "explicacao": "O pedestre sempre tem prioridade ao atravessar na faixa."
  },
  {
  "question": "Em rodovias de pista simples, a velocidade máxima para ônibus é:",
  "options": ["80 km/h", "90 km/h", "100 km/h", "110 km/h"],
  "answer": 1,
  "explicacao": "Sem sinalização específica, o limite em pista simples é 90 km/h para ônibus (CTB, art. 61). Para automóveis, motocicletas e camionetas é 100 km/h. Se houver placa regulamentando outro valor, a placa prevalece."
  },
  {
    "question": "O condutor que se recusa a realizar o teste do bafômetro está sujeito a:",
    "options": ["Apenas advertência", "Multa gravíssima e suspensão do direito de dirigir", "Multa leve", "Somente pontos na CNH"],
    "answer": 1,
    "explicacao": "Recusar o bafômetro gera multa gravíssima e suspensão da CNH."
  },
  {
    "question": "O uso do cinto de segurança é obrigatório:",
    "options": ["Apenas nas rodovias", "Apenas no banco dianteiro", "Para todos os ocupantes, em qualquer via pública", "Apenas em carros de passeio"],
    "answer": 2,
    "explicacao": "O cinto é obrigatório para todos os ocupantes em qualquer via."
  },
  {
    "question": "A cor branca na sinalização horizontal indica:",
    "options": ["Separação de fluxos no mesmo sentido", "Separação de fluxos contrários", "Local de ultrapassagem proibida", "Áreas exclusivas de ônibus"],
    "answer": 0,
    "explicacao": "A cor branca separa fluxos no mesmo sentido."
  },
  {
    "question": "O condutor defensivo deve:",
    "options": ["Confiar sempre na habilidade dos outros motoristas", "Manter distância de segurança e velocidade compatível com a via", "Desobedecer a sinalização em emergências pessoais", "Sempre utilizar buzina para se impor"],
    "answer": 1,
    "explicacao": "Direção defensiva exige distância segura e velocidade adequada."
  },
  {
    "question": "O veículo que emite fumaça preta em excesso está com problemas em:",
    "options": ["Queima de óleo", "Sistema de arrefecimento", "Injeção ou carburação (combustível)", "Bateria"],
    "answer": 2,
    "explicacao": "Fumaça preta indica problema na mistura de combustível (carburação/injeção)."
  },
  {
    "question": "Quando ocorre um acidente com vítima inconsciente, o condutor deve:",
    "options": ["Dar água à vítima", "Deitá-la de lado e acionar socorro", "Levantar a vítima imediatamente", "Ignorar e seguir viagem"],
    "answer": 1,
    "explicacao": "Em caso de vítima inconsciente, deve-se deitá-la de lado e acionar socorro."
  },
  {
    "question": "É proibido estacionar:",
    "options": ["A 1 metro da guia da calçada", "Em fila dupla", "Em locais permitidos pela sinalização", "Em aclives com freio de mão acionado"],
    "answer": 1,
    "explicacao": "Estacionar em fila dupla é infração grave."
  },
  {
    "question": "Um condutor que não reduz a velocidade em cruzamento sem sinalização:",
    "options": ["Comete infração leve", "Comete infração média", "Comete infração grave", "Comete infração gravíssima"],
    "answer": 2,
    "explicacao": "Não reduzir em cruzamentos é infração grave."
  },
  {
    "question": "O sistema de arrefecimento do veículo serve para:",
    "options": ["Reduzir emissão de gases", "Controlar a temperatura do motor", "Regular velocidade do carro", "Aumentar estabilidade em curvas"],
    "answer": 1,
    "explicacao": "O arrefecimento mantém o motor na temperatura ideal de funcionamento."
  },
  {
    "question": "A luz vermelha no semáforo significa:",
    "options": ["Atenção, siga devagar", "Livre passagem", "Parada obrigatória", "Preferência ao condutor mais rápido"],
    "answer": 2,
    "explicacao": "A luz vermelha obriga a parada do veículo."
  },
  {
    "question": "Qual a distância mínima para colocar o triângulo de segurança em caso de pane em rodovia?",
    "options": ["5 metros", "10 metros", "20 metros", "30 metros"],
    "answer": 3,
    "explicacao": "O triângulo deve ser colocado a pelo menos 30 metros do veículo."
  },
  {
    "question": "O uso de drogas ilícitas ao volante provoca:",
    "options": ["Mais atenção", "Reflexos mais lentos e risco de acidente", "Melhor desempenho na direção", "Redução da sonolência"],
    "answer": 1,
    "explicacao": "Drogas reduzem os reflexos e aumentam os riscos de acidente."
  },
  {
    "question": "Em uma descida íngreme, a conduta correta é:",
    "options": ["Descer em ponto morto", "Usar marchas reduzidas e freio motor", "Descer em alta velocidade", "Usar somente freio de mão"],
    "answer": 1,
    "explicacao": "Em descidas, deve-se usar marcha reduzida para auxiliar os freios."
  },
  {
    "question": "O exame toxicológico é exigido para:",
    "options": ["Todas as categorias de CNH", "Apenas para motociclistas", "Categorias C, D e E", "Apenas condutores de veículos de passeio"],
    "answer": 2,
    "explicacao": "O exame toxicológico é exigido para categorias C, D e E."
  },
  {
    "question": "O condutor que avança o sinal vermelho comete:",
    "options": ["Infração leve", "Infração média", "Infração grave", "Infração gravíssima"],
    "answer": 3,
    "explicacao": "Avançar sinal vermelho é infração gravíssima."
  },
  {
    "question": "Em caso de parada cardiorrespiratória, o tempo médio para a vítima entrar em óbito é:",
    "options": ["1 minuto", "3 a 5 minutos", "10 minutos", "20 minutos"],
    "answer": 1,
    "explicacao": "Sem socorro, a vítima pode morrer em 3 a 5 minutos."
  },
  {
    "question": "O uso do celular ao volante é considerado:",
    "options": ["Infração leve", "Infração média", "Infração grave", "Infração gravíssima"],
    "answer": 3,
    "explicacao": "O uso do celular ao volante é infração gravíssima."
  },
  {
    "question": "A sinalização horizontal em zebrados pintados no asfalto indica:",
    "options": ["Local permitido para estacionamento", "Área de canalização de tráfego – proibido circular", "Faixa exclusiva de ônibus", "Área para pedestres"],
    "answer": 1,
    "explicacao": "O zebrado indica canalização, área proibida para circulação."
  },
  {
    "question": "O condutor que joga lixo pela janela do veículo:",
    "options": ["Não comete infração", "Comete infração média", "Comete infração grave", "Comete infração gravíssima"],
    "answer": 1,
    "explicacao": "Arremessar lixo pela janela é infração média."
  },
  {
    "question": "O motorista que estaciona em vaga destinada a pessoa com deficiência sem credencial comete:",
    "options": ["Infração leve", "Infração média", "Infração grave", "Infração gravíssima"],
    "answer": 2,
    "explicacao": "Estacionar em vaga de PCD sem credencial é infração grave."
  },
  {
    "question": "O condutor que trafega em acostamento comete:",
    "options": ["Infração leve", "Infração média", "Infração grave", "Infração gravíssima"],
    "answer": 3,
    "explicacao": "Transitar no acostamento é infração gravíssima."
  },
  {
    "question": "É proibido ultrapassar:",
    "options": ["Em aclives e curvas sem visibilidade", "Em vias planas com sinalização horizontal seccionada", "Em rodovias de pista dupla", "Apenas à noite"],
    "answer": 0,
    "explicacao": "É proibido ultrapassar em locais sem visibilidade, como aclives e curvas."
  },
  {
    "question": "A distância lateral mínima ao ultrapassar ciclista é:",
    "options": ["0,5 metro", "1 metro", "1,5 metro", "2 metros"],
    "answer": 2,
    "explicacao": "A distância mínima lateral em ultrapassagens a ciclistas é de 1,5 metro."
  },
  {
    "question": "O condutor que transita com farol apagado à noite comete:",
    "options": ["Infração leve", "Infração média", "Infração grave", "Infração gravíssima"],
    "answer": 2,
    "explicacao": "Dirigir à noite sem faróis é infração grave."
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