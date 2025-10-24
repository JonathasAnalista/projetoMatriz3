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
    "question": "Na infração “Estacionar o veículo afastado da guia da calçada (meio fio) a mais de um metro”, são computados os seguintes pontos:",
    "options": ["7 (sete).", "5 (cinco).", "4 (quatro).", "3 (três)."],
    "answer": 1,
    "explicacao": "Essa infração é de natureza grave, portanto gera 5 pontos."
  },
  {
    "question": "Indique abaixo uma das técnicas que podem ser adotadas para conter uma hemorragia externa quando não for possível a presença do resgate:",
    "options": ["Fazer compressão no ferimento, utilizando gaze ou pano limpo.", "Aplicar torniquete.", "Fazer compressão utilizando as mãos diretamente no ferimento.", "Movimentar a vítima imediatamente."],
    "answer": 0,
    "explicacao": "O procedimento correto é comprimir o ferimento com pano limpo ou gaze."
  },
  {
    "question": "O acidente que envolve apenas um veículo e que não se conhecem suas possíveis causas chama-se:",
    "options": ["Colisão misteriosa.", "Colisão em uma passagem de nível (via férrea).", "Colisão com animais.", "Atropelamento."],
    "answer": 0,
    "explicacao": "Acidente sem causa aparente e envolvendo um só veículo é chamado de colisão misteriosa."
  },
  {
    "question": "Na sinalização horizontal a cor utilizada para a regulação de fluxos de sentidos opostos é:",
    "options": ["Branca.", "Azul.", "Amarela.", "Preta."],
    "answer": 2,
    "explicacao": "Linhas amarelas são usadas para separar fluxos de sentidos opostos."
  },
  {
    "question": "Aplicar boas relações humanas no trânsito é também:",
    "options": ["Conversar bastante com os passageiros.", "Cumprimentar todos que estão na via.", "Ceder sempre a sua vez aos outros.", "Ser tolerante com os erros dos outros, priorizando sempre o aspecto segurança."],
    "answer": 3,
    "explicacao": "Relações humanas positivas significam tolerância e foco na segurança."
  },
  {
    "question": "A legislação de trânsito no Brasil é formada por um conjunto de Leis e normas. Como são chamadas as normativas emitidas pelo órgão máximo normativo da União?",
    "options": ["Leis.", "Resoluções.", "Decretos.", "Informativos."],
    "answer": 1,
    "explicacao": "O CONTRAN emite resoluções que regulamentam o CTB."
  },
  {
    "question": "Dirigindo por uma via urbana, a uma distância de cerca de 50 metros de um cruzamento, você percebe a luz amarela do semáforo. Nesta situação você deve:",
    "options": ["Aumentar a velocidade do seu veículo.", "Manter a atenção, reduzir a marcha do seu veículo e parar.", "Reduzir a velocidade do seu veículo e completar a travessia do cruzamento.", "Buzinar e completar a travessia."],
    "answer": 1,
    "explicacao": "A conduta segura é reduzir e parar ao ver o sinal amarelo próximo."
  },
  {
    "image": "quest8.png",
    "question": "A placa A-12 adverte:",
    "options": ["Proibido retornar.", "Passagem de nível sem barreira.", "Interseção em círculo.", "Sentido circular obrigatório."],
    "answer": 2,
    "explicacao": "A placa A-12 sinaliza interseção em círculo (rotatória)."
  },
  {
    "question": "O CONAMA e as agências ambientais dos estados e municípios, têm como principais preocupações:",
    "options": ["A defesa da saúde e do meio ambiente.", "A conservação dos equipamentos de segurança das estradas.", "A orientação do fluxo de veículos nas vias urbanas.", "A fiscalização da produção de veículos."],
    "answer": 0,
    "explicacao": "CONAMA e agências ambientais visam proteger a saúde e o meio ambiente."
  },
  {
    "question": "O condutor que envolver-se em acidente grave poderá ser submetido:",
    "options": ["ao exame toxicológico.", "à frequência obrigatória em curso de reciclagem.", "ao exame de direção veicular.", "aos exames médicos e psicológicos."],
    "answer": 1,
    "explicacao": "Envolver-se em acidente grave pode levar à obrigatoriedade de curso de reciclagem."
  },
  {
    "question": "É proibido a todo condutor de veículo:",
    "options": ["Dar passagem, pela esquerda, quando solicitado.", "Parar antes de entrar em via preferencial.", "Ouvir rádio enquanto dirige.", "Dirigir sem estar devidamente habilitado ou autorizado na forma da lei."],
    "answer": 3,
    "explicacao": "É proibido conduzir sem estar devidamente habilitado."
  },
  {
    "question": "O condutor que dirige com segurança é aquele que:",
    "options": ["Circula em baixa velocidade em qualquer situação.", "Ultrapassa outro veículo pela direita.", "Circula com velocidade adequada às circunstâncias.", "Circula sempre pela faixa da direita."],
    "answer": 2,
    "explicacao": "Conduzir com segurança é adaptar a velocidade às condições da via."
  },
  {
    "question": "As linhas amarelas contínuas, simples ou duplas, proíbem:",
    "options": ["Unicamente as ultrapassagens.", "A transposição de faixas.", "As ultrapassagens e os deslocamentos laterais (conversões e retornos).", "Somente os retornos."],
    "answer": 2,
    "explicacao": "Linhas amarelas contínuas proíbem ultrapassagens e deslocamentos laterais."
  },
  {
    "question": "A suspensão do direito de dirigir e a cassação da CNH prescrevem em:",
    "options": ["2 anos.", "3 anos.", "4 anos.", "5 anos."],
    "answer": 3,
    "explicacao": "O prazo de prescrição é de 5 anos."
  },
  {
    "question": "O conjunto que atua nas curvas fazendo com que uma roda gire mais ou menos do que a outra, chama-se:",
    "options": ["Embreagem.", "Árvore de transmissão.", "Diferencial.", "Caixa de câmbio."],
    "answer": 2,
    "explicacao": "O diferencial permite a diferença de giro das rodas em curvas."
  },
  {
    "question": "O que significa a sigla “JARI”?",
    "options": ["Junta Pública de Recursos de Infração.", "Junta Administrativa de Recursos de Infrações.", "Junta Auxiliar de Recursos de Infração.", "Junta Executiva de Recursos de Infração."],
    "answer": 1,
    "explicacao": "JARI é a Junta Administrativa de Recursos de Infrações."
  },
  {
    "image": "quest17.png",
    "question": "A placa R-6c regulamenta:",
    "options": ["Proibido parar.", "Proibido estacionar.", "Área de estacionamento.", "Proibido parar e estacionar."],
    "answer": 3,
    "explicacao": "R-6c indica proibido parar e estacionar."
  },
  {
    "question": "Existem certas ações de emergência que podem ser realizadas por mais de um socorrista. Nos casos em que a vítima, além de não respirar, sofre parada cardíaca que deve ser aplicada massagem cardíaca associada à respiração artificial. A ressuscitação cardiopulmonar funciona melhor se executada por:",
    "options": ["3 pessoas.", "1 pessoa.", "4 pessoas.", "2 pessoas."],
    "answer": 3,
    "explicacao": "A RCP é mais eficaz quando feita em dupla."
  },
  {
    "question": "Uma das reações defensivas do condutor, ao perceber a iminência de uma colisão frontal, é:",
    "options": ["Encostar ao máximo para a direita da pista.", "Ligar o pisca-alerta.", "Deslocar-se para o acostamento da esquerda.", "Aumentar a velocidade."],
    "answer": 0,
    "explicacao": "Encostar à direita ajuda a evitar colisão frontal."
  },
  {
    "question": "Em relação aos motociclistas, é regra de segurança obrigatória:",
    "options": ["Usar viseiras ou óculos de proteção.", "Não transportar crianças menores de 12 anos.", "Manter o farol acesso apenas durante a noite, para não ofuscar os demais condutores.", "Devem andar sempre na faixa da esquerda."],
    "answer": 0,
    "explicacao": "É obrigatório o uso de viseira ou óculos de proteção."
  },
  {
    "question": "De todos os procedimentos no trânsito, esta é uma manobra a ser evitada, quando possível:",
    "options": ["Marcha à ré.", "Conversão.", "Baliza.", "Ultrapassagem."],
    "answer": 0,
    "explicacao": "Marcha à ré deve ser evitada, exceto quando estritamente necessária."
  },
  {
    "question": "A categoria B permite a condução de veículos com peso bruto total máximo não superior a 3.500 kg, mas há exceções. Indique a alternativa que as contenham:",
    "options": ["Caminhão pequeno, de até 4.536 kg, e caminhonete.", "Motor-casa de até 6.000 kg de PBT, com no máximo 8 lugares, excluído o motorista, e trator de rodas.", "Trator de esteiras e caminhão-trator, desde que este não tenha outro veículo acoplado.", "Caminhonete com dois reboques engatados, com no máximo 3.500 kg de PBTC, e qualquer veículo oficial."],
    "answer": 1,
    "explicacao": "Exceções da categoria B: motor-casa até 6.000 kg e trator de rodas."
  },
  {
    "question": "Observar se existem ferimentos na cabeça, tórax, abdômen, queimadura, fraturas e se há lesão na coluna. Ao efetuar estes procedimentos, o socorrista está realizando uma análise:",
    "options": ["Primária.", "De risco.", "Secundária.", "De rotina."],
    "answer": 2,
    "explicacao": "Esse é o exame secundário do socorro."
  },
  {
    "question": "O recolhimento do CRLV-e poderá ocorrer:",
    "options": ["Quando estiver com adesivos de caráter publicitário afixados no para-brisa do veículo.", "Em todos os casos que ocasionam a remoção do veículo.", "Quando estacionar em calçadas e sobre faixas destinadas a pedestres.", "No caso do veículo alienado, não for transferida sua propriedade em 30 dias junto ao órgão de trânsito."],
    "answer": 3,
    "explicacao": "O recolhimento pode ocorrer quando o veículo alienado não é transferido no prazo legal."
  },
  {
    "question": "O julgamento das penalidades de trânsito se dará através de um(a):",
    "options": ["Identificação do infrator.", "Notificação de autuação.", "Processo administrativo.", "Auto de infração."],
    "answer": 2,
    "explicacao": "As penalidades devem ser julgadas em processo administrativo."
  },
  {
    "question": "É considerado como equipamento de segurança (obrigatório):",
    "options": ["Cortina nos vidros traseiros.", "Encosto de cabeça.", "Alarme.", "Direção hidráulica."],
    "answer": 1,
    "explicacao": "O encosto de cabeça é equipamento de segurança obrigatório."
  },
  {
    "question": "Direção defensiva leva o condutor a:",
    "options": ["Dirigir com educação, segurança e eficiência.", "Dirigir indiferentemente quanto aos demais usuários.", "Dirigir com atenção dispersiva.", "Dirigir com atenção fixa."],
    "answer": 0,
    "explicacao": "A direção defensiva preza por educação, segurança e eficiência."
  },
  {
    "question": "Respirar a fumaça produzida por caminhões ônibus e automóveis, traz prejuízos à saúde humana. Como o Código de Trânsito Brasileiro prevê ações que evitem esses danos?",
    "options": ["Controlando as emissões de gases e de ruídos.", "Determinando o uso de máscaras.", "Determinando rodízio nos grandes centros urbanos.", "Incentivando o uso de veículos a diesel."],
    "answer": 0,
    "explicacao": "O CTB prevê o controle de emissão de gases e ruídos."
  },
  {
    "image": "quest29.png",
    "question": "Diante da situação ilustrada, de quem é a preferência?",
    "options": ["Do veículo azul, porque está indo praticamente em linha reta.", "Do veículo azul, porque o veículo laranja fará uma conversão.", "Do veículo laranja, pois está à direita do veículo azul.", "A regra não trata deste caso."],
    "answer": 2,
    "explicacao": "A preferência é sempre do veículo que vem pela direita."
  },
  {
    "question": "A quilometragem percorrida pelo veículo é indicada pelo:",
    "options": ["Odômetro.", "Velocímetro.", "Manômetro.", "Conta-giros."],
    "answer": 0,
    "explicacao": "O odômetro registra a quilometragem total percorrida."
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