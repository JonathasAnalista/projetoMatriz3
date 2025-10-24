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
    "question": "É uma vantagem da utilização do álcool como combustível:",
    "options": ["Maior consumo por quilômetro rodado.", "Apresenta problemas menores quando na partida a frio.", "Menos poluente.", "Diminui a corrosão interna do motor."],
    "answer": 2,
    "explicacao": "O álcool é considerado menos poluente em comparação à gasolina ou diesel."
  },
  {
    "question": "A contaminação do ar por partículas originadas pela atividade humana significa:",
    "options": ["Poluição atmosférica.", "Poluição sonora.", "Meio de transporte.", "Ocorrência de fenômenos naturais."],
    "answer": 0,
    "explicacao": "Partículas na atmosfera devido à ação humana caracterizam a poluição atmosférica."
  },
  {
    "question": "Cidadania é:",
    "options": ["A qualidade ou estado de cidadão.", "O conjunto de elementos naturais e a vida em todas as formas.", "O desenvolvimento desequilibrado do cidadão.", "O meio ambiente hostil."],
    "answer": 0,
    "explicacao": "Cidadania é definida como a qualidade ou estado de cidadão, com direitos e deveres."
  },
  {
    "question": "A emissão de fumaça preta por veículos movidos a óleo diesel é um dos principais problemas ambientais nas áreas urbanas porque esse poluente:",
    "options": ["Contém minúsculas partículas inaláveis de fuligem envolvidas por óleo altamente tóxico e pode causar doenças respiratórias.", "Contém gotículas de óleo que se depositam sobre a pele causando micose.", "Provoca alteração das funções motoras e causa problemas cardiovasculares.", "Provoca ataques cardíacos por seu elevado conteúdo em monóxido de carbono."],
    "answer": 0,
    "explicacao": "A fumaça preta contém fuligem tóxica que causa doenças respiratórias."
  },
  {
    "question": "Nas grandes cidades, as principais fontes de poluição do ar são:",
    "options": ["As queimadas.", "A queima do carvão.", "Os incineradores.", "Os veículos automotores e as indústrias."],
    "answer": 3,
    "explicacao": "Em áreas urbanas, os veículos e as indústrias são as maiores fontes de poluição do ar."
  },
  {
    "question": "A poluição do ar causa problemas de saúde que resultam, principalmente em:",
    "options": ["Doenças do aparelho digestivo.", "Doenças respiratórias.", "Alterações visuais.", "Dores de cabeça."],
    "answer": 1,
    "explicacao": "O principal impacto da poluição atmosférica são as doenças respiratórias."
  },
  {
    "question": "A poluição visual contribui para:",
    "options": ["Irritar e provocar mudanças de comportamento ao motorista.", "Intoxicar o ambiente.", "Desviar a atenção de pedestres e motoristas.", "Motoristas e pedestres circularem desordenadamente."],
    "answer": 2,
    "explicacao": "A poluição visual desvia a atenção de motoristas e pedestres, aumentando o risco de acidentes."
  },
  {
    "question": "Assinale a alternativa incorreta. Os atuais veículos que são equipados com motores a combustão, são agentes poluidores do meio ambiente porque:",
    "options": ["Consomem oxigênio do ar, indispensável para que haja combustão.", "Emitem gases nocivos e partículas sólidas.", "Provocam enchentes e erosão nas rodovias.", "Consomem combustíveis, geralmente derivados de petróleo, de onde provém a energia necessária ao seu funcionamento."],
    "answer": 2,
    "explicacao": "Os veículos poluem por gases e consumo de combustíveis, mas não provocam enchentes diretamente."
  },
  {
    "question": "A segurança no trânsito é um direito:",
    "options": ["Dos ciclistas apenas.", "Dos motoristas de ônibus apenas.", "Dos motociclistas apenas.", "De todo cidadão."],
    "answer": 3,
    "explicacao": "A segurança no trânsito é um direito universal de todos os cidadãos."
  },
  {
    "question": "A temperatura é uma das condições básicas para a existência da vida, ao qual é garantida também pela presença do carbono na atmosfera. Em nosso planeta, a temperatura gira em torno de 16 graus. O excesso de gás carbônico aprisiona mais radiações infravermelhas produzindo:",
    "options": ["A chuva ácida.", "Material particulado.", "O efeito estufa.", "Todas estão corretas."],
    "answer": 3,
    "explicacao": "O excesso de CO₂ gera efeito estufa, mas também contribui para outros fenômenos ambientais."
  },
  {
    "question": "Ruído é um tipo de poluição:",
    "options": ["Radioativa.", "Atmosférica.", "Sonora.", "Aquática."],
    "answer": 2,
    "explicacao": "Ruído excessivo é caracterizado como poluição sonora."
  },
  {
    "question": "Além do óleo diesel, a gasolina e o álcool são amplamente utilizados como fonte de energia para locomoção dos veículos automotores. Os veículos a álcool poluem menos, pois expelem metade de ________ se comparados com os veículos movidos a gasolina.",
    "options": ["Monóxido de carbono.", "Hidrocarbonetos.", "Dióxido de enxofre.", "Dióxido de carbono."],
    "answer": 0,
    "explicacao": "Veículos a álcool liberam cerca de metade do monóxido de carbono em relação aos a gasolina."
  },
  {
    "question": "Alguns cuidados que devemos ter com os veículos para reduzir a poluição do meio ambiente:",
    "options": ["Regular o carburador ou sistema de injeção eletrônica.", "Manter em bom estado de funcionamento bobina, ignição eletrônica, distribuidor e vela.", "Verificar e revisar qualquer ruído estranho no escapamento.", "Todas as alternativas estão corretas."],
    "answer": 3,
    "explicacao": "Todos os cuidados listados contribuem para reduzir a poluição automotiva."
  },
  {
    "question": "Em caso de acidente com o veículo transportando produtos inflamáveis, o procedimento correto do condutor é:",
    "options": ["Providenciar, o mais rápido possível, o escoamento do produto.", "Sinalizar o local com tochas de fogo.", "Isolar o local.", "Efetuar, primeiramente, a limpeza da pista."],
    "answer": 2,
    "explicacao": "O local deve ser isolado imediatamente até a chegada do socorro especializado."
  },
  {
    "question": "Analise os itens e marque o correto:",
    "options": ["O etanol combustível polui menos o meio ambiente do que a gasolina.", "O óleo diesel polui mais do que a gasolina.", "O gás natural, ainda pouco usado em nosso país, é o combustível que menos polui o meio ambiente.", "Todas estão corretas."],
    "answer": 3,
    "explicacao": "Todas as afirmações são corretas em relação aos combustíveis e poluição."
  },
  {
    "question": "Aplicar boas relações humanas no trânsito é também:",
    "options": ["Conversar bastante com os passageiros.", "Cumprimentar todos que estão na via.", "Ceder sempre a sua vez aos outros.", "Ser tolerante com os erros dos outros, priorizando sempre o aspecto segurança."],
    "answer": 3,
    "explicacao": "A tolerância e foco na segurança refletem boas relações humanas no trânsito."
  },
  {
    "question": "As inspeções de emissões de gases melhoram as condições de vida porque:",
    "options": ["Contribuem para o consumo excessivo de combustível e lubrificante.", "Reduzem a emissão de gases poluentes na atmosfera.", "Contribuem para a segurança dos veículos.", "Diminuem o desgaste do motor."],
    "answer": 1,
    "explicacao": "A inspeção garante menos poluentes na atmosfera, melhorando a saúde pública."
  },
  {
    "question": "Assinale a afirmativa correta. Cidadão consciente é, geralmente, um condutor responsável?",
    "options": ["Não, porque cidadão consciente é antônimo de condutor responsável.", "Sim, pois na maioria dos casos, os cidadãos conscientes utilizam-se dos seus princípios na ação de dirigir.", "Não, porque o cidadão consciente é, geralmente, o maior causador de acidentes de trânsito.", "Sim, porque o cidadão consciente é aquele que se habilitou no melhor centro de formação de condutores."],
    "answer": 1,
    "explicacao": "O cidadão consciente leva seus princípios para a condução no trânsito."
  },
  {
    "question": "Assinale a alternativa correta:",
    "options": ["A evaporação do combustível ocorre com o veículo parado ou em movimento.", "O atrito dos pneus com o solo é outra fonte de poluição do ar.", "As montadoras vêm equipando os veículos com controle de emissão de poluentes.", "Todas acima."],
    "answer": 3,
    "explicacao": "Todas as situações descritas são corretas fontes de poluição e medidas de controle."
  },
  {
    "question": "Assinale a alternativa incorreta:",
    "options": ["O ozônio é um gás sem utilidade para o meio ambiente.", "O ozônio é um gás que reage com os gases oriundos dos \"sprays\".", "A destruição da camada de ozônio pode provocar câncer de pele, através da exposição.", "O ozônio funciona como um filtro solar, protegendo a vida."],
    "answer": 0,
    "explicacao": "O ozônio é essencial para o equilíbrio ambiental, não é um gás inútil."
  },
  {
    "question": "Assinale a alternativa incorreta. A matéria prima para produção do álcool (etanol) no Brasil é:",
    "options": ["Cana-de-açúcar.", "Milho.", "Metanol.", "Eucalipto."],
    "answer": 2,
    "explicacao": "O etanol no Brasil é produzido principalmente da cana-de-açúcar, não do metanol."
  },
  {
    "question": "A queima incompleta de fuligem, pode causar:",
    "options": ["Alergia.", "Asma.", "Bronquite crônica.", "Todas as afirmativas estão corretas."],
    "answer": 3,
    "explicacao": "A fuligem mal queimada pode causar várias doenças respiratórias e alergias."
  },
  {
    "question": "Se um condutor de veículo deparar no trânsito com outro condutor agindo de forma incorreta e que venha a prejudicá-lo, deve:",
    "options": ["Deixar que o acidente aconteça para fazê-lo pagar pelo erro.", "Ceder seu direito para evitar consequências maiores.", "Fazer valer seu direito.", "Ceder a vez e logo à frente, castigar o condutor infrator com uma \"fechada\"."],
    "answer": 1,
    "explicacao": "O correto é ceder para evitar acidentes, priorizando a segurança."
  },
  {
    "question": "Como pedestres ou como passageiros podemos colaborar para a melhoria do meio ambiente quando:",
    "options": ["Fazemos as revisões e manutenções recomendadas pelo fabricante.", "Evitamos paradas prolongadas com o motor funcionando.", "Quando não atiramos lixo, pontas de cigarros e latas nas vias públicas.", "Usamos sempre combustível e lubrificante de boa qualidade."],
    "answer": 2,
    "explicacao": "Não jogar lixo nas vias públicas é um ato direto de preservação do meio ambiente."
  },
  {
    "question": "Conduzir veículo produzindo fumaça, gases ou partículas em níveis superiores aos fixados pelo CONTRAN é:",
    "options": ["Tolerável e aceito pelas autoridades de trânsito.", "Agressão ao meio ambiente, sujeito a multa.", "Um tipo de poluição sonora.", "Perfeitamente legal."],
    "answer": 1,
    "explicacao": "Essa conduta é considerada infração ambiental e sujeita a multa."
  },
  {
    "question": "Conversor catalítico (catalisador), instalado no coletor de escapamento do veículo, é um:",
    "options": ["Acelerador de moléculas binárias opostas aos gases de escapamento.", "Filtro dos gases do escapamento que separa o vapor dos gases.", "Transforma os gases tóxicos mais nocivos.", "Transformador dos gases tóxicos em gases não-nocivos ao meio ambiente."],
    "answer": 3,
    "explicacao": "O catalisador converte gases tóxicos em substâncias menos nocivas ao meio ambiente."
  },
  {
    "question": "Dos elementos abaixo, jogados pelo condutor em via pública, qual deles demora mais tempo para se decompor?",
    "options": ["Plástico.", "Papel.", "Papelão.", "Fumo de cigarro."],
    "answer": 0,
    "explicacao": "O plástico leva séculos para se decompor, sendo altamente poluente."
  },
  {
    "question": "É comportamento inadequado do condutor de veículo no trânsito:",
    "options": ["Preservar o meio ambiente.", "Manter regulados o motor e o escapamento.", "Jogar pontas de cigarro nas estradas.", "Evitar jogar lixo nas vias públicas."],
    "answer": 2,
    "explicacao": "Jogar pontas de cigarro é ato de desrespeito e prejudica o meio ambiente."
  },
  {
    "question": "É correto afirmar que:",
    "options": ["Os processos industriais são todos controlados e não poluem.", "O monóxido de carbono, resultante da combustão da gasolina nos veículos automotores poluem a atmosfera, principalmente nas regiões urbanas.", "A fuligem não é tóxica.", "Os resíduos e detritos industriais não desequilibram o meio ambiente."],
    "answer": 1,
    "explicacao": "O monóxido de carbono emitido pelos veículos polui o ar, especialmente em áreas urbanas."
  },
  {
    "question": "É o gás incolor, sem cheiro ou gosto, resultante da queima incompleta de combustíveis:",
    "options": ["O monóxido de carbono.", "Os hidrocarbonetos.", "Os óxidos de nitrogênio.", "O gás de ozônio."],
    "answer": 0,
    "explicacao": "O monóxido de carbono é um gás tóxico produzido pela combustão incompleta."
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