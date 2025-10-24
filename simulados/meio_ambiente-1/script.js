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
    "question": "A degradação da camada de ozônio produz qual efeito direto e imediato na superfície terrestre? (Cuidado: não confundir com efeito estufa)",
    "options": [
      "Aumento da temperatura média global por retenção de calor.",
      "Elevação da incidência de radiação ultravioleta (UV) ao nível do solo.",
      "Formação de neblina fotoquímica em áreas urbanas.",
      "Intensificação de ventos de altitude (jato) no hemisfério Sul."
    ],
    "answer": 1,
    "explicacao": "Buracos na camada de ozônio deixam passar mais raios UV. Não é aquecimento global."
  },
  {
    "question": "Os painéis e rótulos de risco fixados em veículos, exigidos pelas normas de transporte, destinam-se especificamente ao transporte de:",
    "options": [
      "Cargas perecíveis em refrigeração.",
      "Volumes superdimensionados (cargas indivisíveis).",
      "Produtos artesanais de pequeno valor agregado.",
      "Produtos perigosos (substâncias com risco químico/biológico/radiológico)."
    ],
    "answer": 3,
    "explicacao": "Rótulos de risco identificam produtos perigosos e orientam fiscalização e emergência."
  },
  {
    "question": "Assinale o efeito típico e direto da chuva ácida. (Evite as armadilhas: aquecimento global e desertificação não são efeitos diretos)",
    "options": [
      "Corrosão de monumentos e estruturas metálicas, além da acidificação de solos e corpos d’água.",
      "Derretimento acelerado das calotas polares.",
      "Transformação rápida de áreas úmidas em desertos.",
      "Neutralização de poluentes atmosféricos por diluição."
    ],
    "answer": 0,
    "explicacao": "Chuva ácida corrói pedra/metal e acidifica solos e rios. Não derrete calotas."
  },
  {
    "question": "Para conduzir veículo transportando produto perigoso em rodovias, o condutor deve possuir, além da CNH adequada:",
    "options": [
      "Curso NPS (Noções de Primeiros Socorros) apenas.",
      "Curso especializado MOPP/TPP (Transporte de Produtos Perigosos).",
      "Curso DD (Direção Defensiva) apenas.",
      "Curso MA (Meio Ambiente) apenas."
    ],
    "answer": 1,
    "explicacao": "É obrigatório o curso MOPP/TPP para transportar produtos perigosos."
  },
  {
    "question": "Acima de qual nível de ruído contínuo (exposição de 8 horas) aumenta significativamente o risco de dano auditivo permanente?",
    "options": [
      "60 dB(A).",
      "80 dB(A).",
      "90 dB(A).",
      "120 dB(A)."
    ],
    "answer": 2,
    "explicacao": "Exposição por 8 horas a ~85 dB(A) já pode causar perda auditiva com o tempo."
  },
  {
    "question": "Qual dispositivo NÃO tem, por si só, a função de reduzir emissões poluentes automotivas?",
    "options": [
      "Injeção eletrônica.",
      "Sonda lambda.",
      "Catalisador.",
      "Carburador."
    ],
    "answer": 3,
    "explicacao": "Carburador só mistura ar/combustível; não é sistema de controle de emissões."
  },
  {
    "question": "A poluição característica observada com frequência em veículos a diesel, visível a olho nu, é o aumento de:",
    "options": [
      "Ozônio estratosférico.",
      "Material particulado (fumaça preta).",
      "Monóxido de carbono incolor.",
      "Vapor d’água no escapamento."
    ],
    "answer": 1,
    "explicacao": "Fumaça preta = partículas da combustão incompleta do diesel."
  },
  {
    "question": "Assinale a alternativa que NÃO é matéria-prima usual para a produção de etanol combustível no Brasil:",
    "options": [
      "Cana-de-açúcar.",
      "Milho (em plantas específicas).",
      "Metanol.",
      "Resíduos celulósicos (processos de segunda geração)."
    ],
    "answer": 2,
    "explicacao": "Metanol é outro álcool. O etanol aqui vem principalmente da cana (e também milho/celulose)."
  },
  {
    "question": "O conversor catalítico (catalisador) tem como função principal, no sistema de escapamento,",
    "options": [
      "Filtrar vapor d’água dos gases de exaustão.",
      "Acelerar moléculas para aumentar potência do motor.",
      "Transformar CO, HC e NOx em substâncias menos nocivas.",
      "Armazenar combustível remanescente para reaproveitamento."
    ],
    "answer": 2,
    "explicacao": "Catalisador converte poluentes (CO, HC, NOx) em CO2, H2O e N2."
  },
  {
    "question": "O gás incolor, insípido e inodoro resultante de queima incompleta de combustíveis, altamente tóxico por se ligar à hemoglobina, é o:",
    "options": [
      "Monóxido de carbono (CO).",
      "Ozônio (O3).",
      "Dióxido de carbono (CO2).",
      "Metano (CH4)."
    ],
    "answer": 0,
    "explicacao": "CO é invisível e sem cheiro, mas muito tóxico; impede o transporte de oxigênio no sangue."
  },
  {
    "question": "CFCs, outrora usados como propelentes e em refrigeração, estão associados principalmente a:",
    "options": [
      "Aumento imediato da temperatura de superfícies urbanas (ilhas de calor).",
      "Degradação da camada de ozônio na estratosfera.",
      "Intensificação de chuvas convectivas na troposfera.",
      "Neutralização de chuvas ácidas por reações básicas."
    ],
    "answer": 1,
    "explicacao": "CFCs liberam radicais que destroem ozônio na estratosfera."
  },
  {
    "question": "No controle do ruído gerado pelo motor/escape, o componente automotivo diretamente responsável é o:",
    "options": [
      "Radiador.",
      "Catalisador.",
      "Silenciador (muffler).",
      "Carburador."
    ],
    "answer": 2,
    "explicacao": "Quem reduz o barulho do escape é o silenciador."
  },
  {
    "question": "No chamado ‘efeito estufa’ antrópico, o calor fica predominantemente retido:",
    "options": [
      "Na troposfera (camadas mais baixas da atmosfera).",
      "No núcleo da Terra.",
      "No espaço próximo, ao redor do planeta.",
      "Exclusivamente na estratosfera."
    ],
    "answer": 0,
    "explicacao": "Gases de efeito estufa seguram calor nas camadas baixas do ar (troposfera)."
  },
  {
    "question": "Exposição excessiva a ruído pode causar, isolada ou conjuntamente:",
    "options": [
      "Déficits auditivos.",
      "Irritabilidade e agressividade.",
      "Insônia, agitação e dispersão.",
      "Todas as alternativas anteriores."
    ],
    "answer": 3,
    "explicacao": "Ruído demais afeta audição, sono e humor."
  },
  {
    "question": "Nas grandes cidades brasileiras, a principal fonte de poluição atmosférica é, em regra:",
    "options": [
      "A simples presença de bicicletas nas vias.",
      "O trânsito de veículos automotores.",
      "A fabricação de veículos (etapa industrial).",
      "A salinização de solos por irrigação."
    ],
    "answer": 1,
    "explicacao": "A frota em circulação emite CO, NOx, HC e partículas."
  },
  {
    "question": "O silenciador (dispositivo de controle de ruído) é equipamento obrigatório para veículos:",
    "options": [
      "De tração animal.",
      "Reboques e semirreboques.",
      "Automotores (motores a combustão).",
      "De propulsão humana."
    ],
    "answer": 2,
    "explicacao": "Veículos com motor a combustão devem ter silenciador por lei."
  },
  {
    "question": "Substâncias infectantes são aquelas que:",
    "options": [
      "Alteram estado físico quando aquecidas.",
      "Contêm micro-organismos patogênicos ou toxinas capazes de causar doença.",
      "São fortemente corrosivas ao metal.",
      "Geram CO2 quando expostas ao ar."
    ],
    "answer": 1,
    "explicacao": "São materiais com germes/tóxicos que podem causar infecção."
  },
  {
    "question": "Em termos amplos, o “meio ambiente” compreende a interação entre:",
    "options": [
      "Homem, natureza e catalisadores automotivos.",
      "Homem, natureza e poluentes apenas.",
      "Apenas componentes bióticos (seres vivos).",
      "Homem, natureza e seus elementos/condições (físicos, biológicos e sociais)."
    ],
    "answer": 3,
    "explicacao": "Meio ambiente inclui pessoas, natureza e condições físicas/sociais."
  },
  {
    "question": "Entre os resíduos abaixo descartados na via, aquele que, em geral, apresenta maior tempo de decomposição é o:",
    "options": [
      "Plástico.",
      "Papel.",
      "Papelão.",
      "Bituca de cigarro."
    ],
    "answer": 0,
    "explicacao": "Plástico comum pode levar centenas de anos para se decompor."
  },
  {
    "question": "Descartar pontas de cigarro acesas na beira de rodovias pode provocar, principalmente:",
    "options": [
      "Hidroplanejamento dos veículos.",
      "Incêndios em vegetação às margens da via.",
      "Explosões por contato com asfalto quente.",
      "Aumento imediato do nível de ozônio estratosférico."
    ],
    "answer": 1,
    "explicacao": "Bitucas acesas iniciam focos de incêndio com facilidade em tempos secos."
  },
  {
    "question": "Quanto ao potencial de poluição do ar, destacam-se como mais críticos os veículos:",
    "options": [
      "Movidos a diesel ou gasolina.",
      "Elétricos puros.",
      "De propulsão humana (bicicletas).",
      "De tração animal."
    ],
    "answer": 0,
    "explicacao": "Motores a combustão (diesel/gasolina) emitem mais poluentes."
  },
  {
    "question": "Cidadania, no contexto socioambiental, implica:",
    "options": [
      "Direitos civis, políticos e sociais com dignidade/igualdade e deveres correlatos.",
      "Apenas obedecer às leis municipais da ‘cidade’.",
      "Direito irrestrito de dizer qualquer coisa, sem responsabilidade.",
      "Exclusivamente ter servido às Forças Armadas."
    ],
    "answer": 0,
    "explicacao": "Cidadania = direitos e deveres; respeito e participação responsável."
  },
  {
    "question": "Sobre atropelamentos envolvendo crianças, assinale a alternativa mais abrangente sobre fatores contribuintes:",
    "options": [
      "Apenas desatenção do pedestre.",
      "Somente condutor mal-educado.",
      "Apenas ausência de educação para o trânsito.",
      "Conjunto de fatores: comportamento do pedestre, do condutor e falhas de educação para o trânsito."
    ],
    "answer": 3,
    "explicacao": "Normalmente é uma soma de fatores: pedestre, motorista e educação."
  },
  {
    "question": "Excesso de anúncios em pontos estratégicos das vias caracteriza poluição:",
    "options": [
      "Dispersiva.",
      "Visual.",
      "Biológica.",
      "Sonora."
    ],
    "answer": 1,
    "explicacao": "Muitos anúncios/placas poluem a paisagem e atrapalham a leitura da via."
  },
  {
    "question": "Uma vantagem do etanol (álcool combustível), considerando o ciclo de uso veicular, é que ele tende a ser:",
    "options": [
      "Mais econômico por quilômetro em qualquer condição.",
      "Sempre melhor na partida a frio sem sistemas auxiliares.",
      "Menos poluente na emissão de determinados poluentes atmosféricos.",
      "Imune à corrosão em qualquer motor."
    ],
    "answer": 2,
    "explicacao": "Em geral emite menos CO e alguns HC do que a gasolina/diesel."
  },
  {
    "question": "Boas relações humanas no trânsito implicam, sobretudo, que o condutor:",
    "options": [
      "Converse bastante com passageiros para ‘passar o tempo’.",
      "Cumprimente todos na via com sinais sonoros.",
      "Ceda sempre a vez, mesmo violando regras de preferência.",
      "Seja tolerante aos erros alheios e priorize a segurança coletiva."
    ],
    "answer": 3,
    "explicacao": "Cortesia + respeito às regras = mais segurança para todos."
  },
  {
    "question": "A poluição visual nas vias públicas pode:",
    "options": [
      "Reduzir emissões veiculares.",
      "Desviar a atenção de motoristas e pedestres, aumentando risco.",
      "Aumentar oxigenação do ar.",
      "Melhorar a leitura da sinalização oficial."
    ],
    "answer": 1,
    "explicacao": "Excesso de estímulos visuais distrai e compete com a sinalização."
  },
  {
    "question": "Veículos mal conservados e com regulagem inadequada tendem a:",
    "options": [
      "Elevar poluição do ar e poluição sonora.",
      "Apenas poluir a água, sem afetar o ar.",
      "Não impactar o meio ambiente de forma relevante.",
      "Somente desgastar peças, sem efeito externo."
    ],
    "answer": 0,
    "explicacao": "Queima ruim aumenta emissões; escape ruim aumenta ruído."
  },
  {
    "question": "Assinale o item que NÃO é efeito danoso típico do ruído excessivo:",
    "options": [
      "Insônia.",
      "Efeito estufa.",
      "Irritabilidade.",
      "Cefaleias (dores de cabeça)."
    ],
    "answer": 1,
    "explicacao": "Ruído não causa efeito estufa. Pode causar insônia, irritação e dor de cabeça."
  },
  {
    "question": "A poluição do ar está associada, principalmente, ao aumento de quais agravos à saúde humana?",
    "options": [
      "Doenças digestivas.",
      "Doenças respiratórias.",
      "Distúrbios ortopédicos.",
      "Alterações visuais de curta duração."
    ],
    "answer": 1,
    "explicacao": "Ar poluído piora asma, bronquite e outros problemas respiratórios."
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