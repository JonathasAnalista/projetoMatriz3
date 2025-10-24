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
    "question": "A finalidade da suspensão e dos amortecedores é:",
    "options": ["Manter as características da fábrica do veículo.", "Contribuir para o desgaste prematuro dos pneus.", "Causar a perda de controle do veículo.", "Manter a estabilidade do veículo."],
    "answer": 3,
    "explicacao": "A suspensão e os amortecedores mantêm a estabilidade do veículo, garantindo segurança e conforto."
  },
  {
    "question": "A válvula termostática fica localizada entre o radiador e o motor, ajudando a controlar o calor produzido pela queima da mistura ar-combustível. Esta peça é componente do sistema de:",
    "options": ["Ignição.", "Arrefecimento.", "Elétrico.", "Alimentação."],
    "answer": 1,
    "explicacao": "A válvula termostática pertence ao sistema de arrefecimento, regulando a temperatura do motor."
  },
  {
    "question": "Como se desenvolve o processo de oxidação?",
    "options": ["Deixando de usar óleo no motor.", "Deixando de usar óleo no carburador.", "Deixando de usar aditivo na água do radiador.", "Nenhuma das questões acima."],
    "answer": 2,
    "explicacao": "Sem aditivo na água do radiador, ocorre oxidação das partes metálicas devido à corrosão."
  },
  {
    "question": "Como se prevenir contra incêndios?",
    "options": [
      "Realize manutenções preventivas periódicas nos sistemas de arrefecimento, de alimentação de combustível, de lubrificação e elétrico.",
      "Evite adaptações ou improvisos em instalações.",
      "Nunca se distraia com cigarro, nem aqueça alimentos no interior do veículo.",
      "Todas acima estão corretas."
    ],
    "answer": 3,
    "explicacao": "A prevenção de incêndios exige manutenção e cuidados gerais, por isso todas estão corretas."
  },
  {
    "question": "Constituem alguns equipamentos e sistemas do veículo importantes para evitar situações de perigo que podem levar a acidentes de trânsito:",
    "options": ["Suspensão e sistema de direção.", "Iluminação e lanternas indicadoras de direção.", "Freios e pneus.", "Todas as alternativas estão corretas."],
    "answer": 3,
    "explicacao": "Todos os itens citados contribuem diretamente para a segurança do veículo."
  },
  {
    "question": "Constituem equipamentos de uso obrigatório, exceto:",
    "options": ["Espelhos retrovisores.", "Macaco.", "Ar condicionado.", "Chave de roda."],
    "answer": 2,
    "explicacao": "Ar-condicionado não é equipamento obrigatório para veículos."
  },
  {
    "question": "O conversor catalítico (catalisador), instalado no coletor de escapamento do veículo, é um:",
    "options": [
      "Transformador de gases tóxicos em gases não nocivos ao meio ambiente.",
      "Filtro dos gases do escapamento.",
      "Acelerador de molécula binárias, oposto aos gases de escapamento.",
      "Filtro dos gases do escapamento, que separa o vapor d'água dos gases."
    ],
    "answer": 0,
    "explicacao": "O catalisador transforma gases tóxicos em substâncias menos nocivas."
  },
  {
    "question": "Em caso de mau funcionamento do motor ou sua parada total, os dois sistemas que devemos diagnosticar primeiramente são:",
    "options": ["Alimentação e ignição.", "Lubrificação e de frenagem.", "Arrefecimento e de lubrificação.", "Alimentação e de iluminação."],
    "answer": 0,
    "explicacao": "Os sistemas de alimentação e ignição são os primeiros a serem verificados quando o motor falha."
  },
  {
    "question": "Debrear é o mesmo que:",
    "options": ["Apoiar o pé no pedal de freio continuamente.", "Regular o cabo em todas as trocas de óleo.", "Acionar a embreagem.", "Acionar a alavanca de mudanças."],
    "answer": 2,
    "explicacao": "Debrear significa acionar o pedal da embreagem."
  },
  {
    "question": "Dispositivo destinado ao controle de ruído do motor é equipamento obrigatório para veículos:",
    "options": ["Reboques ou semirreboques.", "De propulsão humana e de tração animal.", "Automotores (motores a combustão).", "Elétricos."],
    "answer": 2,
    "explicacao": "O silenciador é obrigatório nos veículos automotores para reduzir o ruído."
  },
  {
    "question": "É a medida máxima permitida para trincas no para brisas fora da área crítica de visão em automóveis:",
    "options": ["20 cm.", "10 mm.", "10 cm.", "5 mm."],
    "answer": 2,
    "explicacao": "A legislação permite até 10 cm de trinca fora da área crítica de visão."
  },
  {
    "question": "É considerado como equipamento de segurança (obrigatório):",
    "options": ["Cortina nos vidros traseiros.", "Encosto de cabeça.", "Alarme.", "Direção hidráulica."],
    "answer": 1,
    "explicacao": "O encosto de cabeça é item obrigatório por prevenir lesões em colisões."
  },
  {
    "question": "É dispositivo de segurança veicular montado no interior das portas do veículo, cuja função é proteger a região da bacia dos ocupantes:",
    "options": ["O encosto da cabeça.", "As barras laterais.", "A carroceria deformável.", "O airbag."],
    "answer": 1,
    "explicacao": "As barras laterais nas portas protegem os ocupantes contra impactos laterais."
  },
  {
    "question": "É equipamento obrigatório para as motocicletas, exceto:",
    "options": ["Faróis dianteiros de cor branca ou amarela.", "Espelhos retrovisores.", "Para-brisas.", "Iluminação da placa traseira."],
    "answer": 2,
    "explicacao": "O para-brisas não é item obrigatório em motocicletas."
  },
  {
    "question": "Equipamento obrigatório que oferece ao condutor segurança ao efetuar manobras:",
    "options": ["Faróis principais dianteiros.", "Luz de ré.", "Luzes de posição dianteiras.", "Lanternas de posição traseiras."],
    "answer": 1,
    "explicacao": "A luz de ré auxilia o condutor em manobras, sendo obrigatória."
  },
  {
    "question": "É um circuito que tem como função provocar uma faísca na câmara de combustão:",
    "options": ["Ignição.", "Arrefecimento.", "Alimentação.", "Injeção."],
    "answer": 0,
    "explicacao": "O sistema de ignição gera a faísca que inflama a mistura ar-combustível."
  },
  {
    "question": "Indica problemas na queima de combustível:",
    "options": ["Queima incompleta do óleo do motor.", "Emissão de fumaça pelo escapamento.", "Gases e partículas na atmosfera.", "Regulagem eletrônica do veículo."],
    "answer": 1,
    "explicacao": "Fumaça no escapamento indica falhas na queima do combustível."
  },
  {
    "question": "Em condições normais de funcionamento e com o cuidado adequado, o veículo proporcionará desempenho satisfatório se você:",
    "options": ["Verificar o nível do líquido de arrefecimento semanalmente.", "Verificar diariamente o nível do fluído de freio.", "Lavar o motor do veículo semanalmente.", "Encerar a pintura mensalmente."],
    "answer": 0,
    "explicacao": "Verificar semanalmente o nível de arrefecimento mantém o desempenho do motor."
  },
  {
    "question": "Em que tipo de motor a combustão é provocada por uma faísca?",
    "options": ["A diesel.", "A vapor.", "À gasolina, etanol e GNV.", "Elétrico."],
    "answer": 2,
    "explicacao": "Nos motores a gasolina, etanol e GNV a combustão é provocada por faísca."
  },
  {
    "question": "Esse componente dura aproximadamente dez mil quilômetros, mas quem trafega em vias empoeiradas deve trocá-lo com mais frequência. Estamos referindo:",
    "options": ["À bateria.", "Ao fluído de freio.", "Ao filtro de ar.", "À palheta dos limpadores."],
    "answer": 2,
    "explicacao": "O filtro de ar deve ser trocado a cada 10 mil km, ou antes em vias empoeiradas."
  },
  {
    "question": "Evita o desgaste excessivo do motor:",
    "options": ["Sistema de ignição.", "Sistema de arrefecimento.", "Sistema de lubrificação.", "Sistema elétrico."],
    "answer": 2,
    "explicacao": "O sistema de lubrificação protege as peças do motor contra desgaste."
  },
  {
    "question": "Existem equipamentos capazes de diminuir o impacto do corpo do ocupante com o veículo em caso de colisão. Por exemplo:",
    "options": ["Airbags.", "Paraquedas.", "Suspensão.", "Almofadas."],
    "answer": 0,
    "explicacao": "Os airbags reduzem o impacto do corpo em colisões."
  },
  {
    "question": "Fazem parte da embreagem:",
    "options": ["Platô, disco de fricção e rolamento da embreagem.", "Junta homocinética e pivôs.", "Pedal e câmbio.", "Molas e amortecedores."],
    "answer": 0,
    "explicacao": "A embreagem é composta por platô, disco e rolamento."
  },
  {
    "question": "Fazem parte do sistema de suspensão de um veículo:",
    "options": ["Cilindro mestre e estabilizador.", "Molas e caixa de direção.", "Coroa/pinhão e pastilhas.", "Molas e amortecedores."],
    "answer": 3,
    "explicacao": "A suspensão inclui molas e amortecedores, essenciais para a estabilidade."
  },
  {
    "question": "Mesmo sabendo ser uma infração, muitas pessoas cortam as molas do veículo para deixá-lo mais baixo. Esse procedimento prejudica diretamente:",
    "options": ["A estabilidade do veículo.", "O desempenho das lonas.", "As peças móveis do motor.", "A vida útil do disco de fricção."],
    "answer": 0,
    "explicacao": "Cortar molas compromete a estabilidade do veículo."
  },
  {
    "question": "Fazem parte do sistema elétrico:",
    "options": ["Radiador e ventoinha.", "Carburador e filtro de ar.", "Cabeçote, cilindros e pistão.", "Bateria, distribuidor e bobina."],
    "answer": 3,
    "explicacao": "O sistema elétrico inclui bateria, distribuidor e bobina."
  },
  {
    "question": "Fazem parte dos equipamentos de segurança obrigatórios no veículo:",
    "options": ["Cinto de segurança, válvula de expansão e triângulo.", "Triângulo, macaco e tapete.", "Macaco, ar condicionado e pneu reserva.", "Airbags, cintos de segurança e encosto de cabeça."],
    "answer": 3,
    "explicacao": "Os itens obrigatórios incluem airbags, cintos e encostos de cabeça."
  },
  {
    "question": "Instrumento do painel que indica a temperatura do motor:",
    "options": ["Amperímetro.", "Termômetro.", "Odômetro.", "Manômetro."],
    "answer": 1,
    "explicacao": "O termômetro no painel mostra a temperatura do motor."
  },
  {
    "question": "A regulagem correta da luz é de muita importância para a segurança do condutor. Na luz baixa, o farol do lado direito deve ter uma elevação de quinze graus em relação ao farol do lado esquerdo. Esse desnível permite:",
    "options": ["Iluminar a margem direita da via.", "Tornar visíveis as placas de sinalização.", "Ter um alcance de até 750 metros.", "Melhorar a visão do acostamento pelo condutor."],
    "answer": 0,
    "explicacao": "O desnível do farol direito serve para iluminar a margem direita da via."
  },
  {
    "question": "O aparecimento de trepidação sentida no volante de direção sempre que o veículo alcançar uma determinada faixa de velocidade é sinal da necessidade do trabalho de manutenção indicada com:",
    "options": ["Balanceamento das rodas.", "Troca do fluído de freios.", "Lubrificação da caixa de direção.", "Verificação dos valores de cambagem."],
    "answer": 0,
    "explicacao": "Trepidação no volante em certas velocidades indica necessidade de balanceamento das rodas."
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