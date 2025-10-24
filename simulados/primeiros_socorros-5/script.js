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
    "question": "A contaminação pelo vírus da AIDS ocorre de várias maneiras. NÃO ocorre risco de contaminação quem:",
    "options": ["Socorre a vítima usando luvas.", "Se alimenta bem e toma vitaminas.", "Está tomando antibióticos.", "Está com as vacinas em dia."],
    "answer": 0,
    "explicacao": "O uso de luvas evita contato direto com sangue e fluidos, eliminando risco de contaminação."
  },
  {
    "question": "A fratura pode ser fechada ou exposta. Quando ocorre cada um desses casos?",
    "options": [
      "Quando o osso se quebrou, mas a pele não foi perfurada, chama-se fratura fechada.",
      "Quando o osso se quebrou e a pele estiver envermelhada e não rompida, chama-se fratura exposta.",
      "Quando o osso se quebrou e a pele estiver rompida, chama-se fratura exposta.",
      "As alternativas '1' e '3' estão corretas."
    ],
    "answer": 3,
    "explicacao": "Fratura fechada ocorre sem rompimento da pele. Quando há rompimento, é fratura exposta."
  },
  {
    "question": "A hemorragia nasal é muito frequente em acidentes de trânsito e pode indicar:",
    "options": ["Parada respiratória.", "Traumatismo craniano.", "Estado de choque.", "Lesões na medula."],
    "answer": 1,
    "explicacao": "Sangramento nasal pode ser sinal de traumatismo craniano em acidentes."
  },
  {
    "question": "A parada cardiorrespiratória acontece nos casos em que a vítima, além de não respirar, sofre parada cardíaca. Para ajudar uma pessoa nesse estado, o socorrista deve executar:",
    "options": [
      "A massagem cardíaca associada à respiração artificial.",
      "A respiração artificial.",
      "O método boca-a-boca.",
      "A massagem cardíaca."
    ],
    "answer": 0,
    "explicacao": "Na parada cardiorrespiratória deve-se iniciar RCP: massagem cardíaca com respiração artificial."
  },
  {
    "question": "A parada respiratória é um fato grave, pois sabemos que a pessoa sem respirar pode morrer caso sua respiração não seja restabelecida o mais rápido possível. Qual o procedimento correto ao socorrer uma pessoa cuja respiração parou?",
    "options": [
      "Remover objetos que estejam obstruindo a boca da vítima.",
      "Inclinar a cabeça da vítima para trás para soltar a língua do fundo da garganta.",
      "Mantê-la ventilada.",
      "Todas as alternativas acima estão corretas."
    ],
    "answer": 3,
    "explicacao": "Todos os procedimentos citados fazem parte do atendimento em parada respiratória."
  },
  {
    "question": "Análise secundária é o tratamento dado à vítima consciente e capaz de se expressar. O socorrista deve examinar na análise secundária:",
    "options": [
      "Sinais vitais como pulso e respiração.",
      "Dilatação e reatividade das pupilas.",
      "Ferimentos, fraturas e hemorragias.",
      "Temperatura da vítima."
    ],
    "answer": 2,
    "explicacao": "Na análise secundária verificam-se ferimentos, fraturas e hemorragias."
  },
  {
    "question": "Ao atender as vítimas de uma colisão entre dois carros, a pessoa que socorre deverá soltar o cinto de segurança, sem movimentar o corpo delas. Apenas quando:",
    "options": [
      "As vítimas se queixarem de dor no corpo todo.",
      "O cinto de segurança está dificultando a respiração.",
      "Achar que deve.",
      "O cinto for de 3 pontos."
    ],
    "answer": 1,
    "explicacao": "O cinto só deve ser solto se estiver prejudicando a respiração da vítima."
  },
  {
    "question": "Ao examinar uma vítima de acidente, você detecta que ela apresenta temperatura elevada. Nessa situação, não se deve:",
    "options": [
      "Colocar compressas úmidas nas axilas.",
      "Aquecer com cobertores para diminuir calafrios.",
      "Fazer banhos de imersão à temperatura corporal.",
      "Aplicar compressas frias sobre a testa."
    ],
    "answer": 1,
    "explicacao": "Nunca se deve aquecer uma vítima com febre, isso aumenta o risco."
  },
  {
    "question": "Ao examinar uma vítima, você detecta que ela não respira e não tem pulso. Nessa situação você deve:",
    "options": [
      "Aplicar compressas frias sobre a testa.",
      "Aquecer cobertores para diminuir calafrios.",
      "Iniciar imediatamente o procedimento de RCP.",
      "Não fazer nada até chegar o socorro."
    ],
    "answer": 2,
    "explicacao": "Ausência de respiração e pulso exige início imediato da RCP."
  },
  {
    "question": "Ao observar uma pessoa tendo convulsões deve-se:",
    "options": [
      "Não intervir, porque isto passa espontaneamente.",
      "Abrir a boca da vítima, colocar um pano entre os dentes para evitar que ela morda a língua.",
      "Pedir ajuda de outras pessoas, tentar imobilizá-la, segurando-a firmemente, contra o chão.",
      "Proteger a cabeça da pessoa contra traumas e virá-la de lado em caso de vômitos."
    ],
    "answer": 3,
    "explicacao": "O correto é proteger a cabeça e virar de lado em caso de vômitos."
  },
  {
    "question": "Ao prestar auxílio em um acidente, deve-se seguir uma sequência de procedimentos. A ordem correta das ações é:",
    "options": [
      "1º Chamar imediatamente o resgate; 2º Avaliar o estado da vítima; 3º Remover a vítima para o acostamento; 4º Isolar e sinalizar a área.",
      "1º Avaliar a situação; 2º Socorrer imediatamente o ferido; 3º Remover a vítima para o acostamento; 4º Chamar o resgate.",
      "1º Isolar e sinalizar a área; 2º Avaliar o estado da vítima; 3º Chamar o resgate.",
      "1º Resgatar a vítima; 2º Isolar e sinalizar a área; 3º Avaliar o estado da vítima; 4º Chamar o resgate."
    ],
    "answer": 2,
    "explicacao": "A ordem correta é: sinalizar, avaliar vítima e chamar o resgate."
  },
  {
    "question": "Ao se deparar com acidente identificado como colisão frontal, o socorrista suspeitará, primeiramente, que as vítimas tiveram:",
    "options": ["Queimadura.", "Escoriação.", "Fratura de membros inferiores e lesões na coluna cervical.", "Afogamento."],
    "answer": 2,
    "explicacao": "Colisão frontal geralmente causa fraturas de pernas e lesões na coluna."
  },
  {
    "question": "Ao socorrer a vítima de acidente de trânsito, qual das providências abaixo é incorreta?",
    "options": [
      "Não se preocupar com a distância a ser sinalizada. Estar perto da vítima é o mais importante.",
      "Se o motor de um dos veículos estiver funcionando, desligue-o imediatamente.",
      "Acionar o freio de estacionamento.",
      "Ligar o pisca-alerta do veículo."
    ],
    "answer": 0,
    "explicacao": "É fundamental sinalizar corretamente; não fazê-lo é incorreto."
  },
  {
    "question": "Em determinada situação, que era necessário contar 60 passos longos para sinalizar o local de um acidente e na contagem de 30 passos longos a pessoa que estava sinalizando encontrou uma curva, ela deve:",
    "options": [
      "Parar a contagem, caminhar até o fim da curva e recomeçar a contagem a partir do zero.",
      "Continuar a contagem normalmente.",
      "Aumentar mais 10 passos na contagem.",
      "Parar de contar e, após a curva, recomeçar de onde parou até contar os 60 passos."
    ],
    "answer": 3,
    "explicacao": "Se houver curva, a contagem deve ser retomada após a curva até os 60 passos."
  },
  {
    "question": "Ao socorrer uma vítima com estilhaços de vidro no olho, você deve:",
    "options": [
      "Pingar colírio anestésico.",
      "Retira com pinça os estilhaços de vidro.",
      "Tampar o olho da vítima e levá-la ao hospital.",
      "Lavar o olho com água e sabão."
    ],
    "answer": 2,
    "explicacao": "O correto é cobrir o olho e levar imediatamente ao hospital."
  },
  {
    "question": "Ao visualizar um acidente, o socorrista não deve:",
    "options": [
      "Iluminar o local acendendo fósforos.",
      "Preocupar-se primeiro com sua segurança.",
      "Estacionar preferencialmente após o local do acidente.",
      "Analisar o estado de saúde das vítimas."
    ],
    "answer": 0,
    "explicacao": "Nunca se deve acender fósforos em local de acidente, risco de incêndio."
  },
  {
    "question": "As lesões da coluna vertebral são algumas das principais consequências dos acidentes de trânsito. O que fazer para não as agravar?",
    "options": [
      "Remover a pessoa para a calçada.",
      "Anotar a placa ou correr atrás do carro que atropelou.",
      "Tentar chamar algum parente da vítima.",
      "Não movimentar a vítima e aguardar o socorro profissional."
    ],
    "answer": 3,
    "explicacao": "Nunca se deve movimentar a vítima com suspeita de lesão na coluna."
  },
  {
    "question": "As situações de emergência não são sempre iguais umas às outras e os procedimentos a serem adotados dependem de vários fatores, tais como:",
    "options": [
      "O nível de conhecimento.",
      "A prática e os recursos dos quais se dispõe.",
      "O tempo estimado para a chegada de ajuda profissional.",
      "Todas as afirmativas acima estão corretas."
    ],
    "answer": 3,
    "explicacao": "O atendimento depende de conhecimento, recursos e tempo de socorro."
  },
  {
    "question": "Se você presenciar um acidente envolvendo veículo de carga perigosa, deverá:",
    "options": [
      "Tentar conter o vazamento do produto.",
      "Posicionar-se o mais próximo possível.",
      "Afastar-se e chamar o resgate imediatamente.",
      "Retirar o motorista ou vítimas do local."
    ],
    "answer": 2,
    "explicacao": "O correto é se afastar e chamar o resgate especializado."
  },
  {
    "question": "O que não causa a parada respiratória é:",
    "options": ["Soterramento.", "Afogamento.", "Perfuração no pulmão.", "Fratura no fêmur."],
    "answer": 3,
    "explicacao": "Fratura no fêmur não compromete diretamente a respiração."
  },
  {
    "question": "Assinale a opção incorreta:",
    "options": [
      "Paralisia é a incapacidade de movimentação dos membros.",
      "A dormência nas extremidades pode ocorrer após lesões na coluna cervical.",
      "Sensibilidade é a capacidade de não sentir dor.",
      "O manuseio incorreto da vítima pode agravar a situação."
    ],
    "answer": 2,
    "explicacao": "Sensibilidade é a capacidade de sentir estímulos, não de não sentir dor."
  },
  {
    "question": "São tipos de hemorragia:",
    "options": [
      "Hemorragia externa e interna.",
      "Hemorragia aberta e fechada.",
      "Hemorragia externa e aberta.",
      "Hemorragia interna e fechada."
    ],
    "answer": 0,
    "explicacao": "As hemorragias podem ser externas ou internas."
  },
  {
    "question": "Como proceder diante de um motociclista acidentado?",
    "options": [
      "Tirar o capacete imediatamente.",
      "Não retirar o capacete, porque movimentar a cabeça pode agravar uma lesão na coluna, e esperar o resgate.",
      "Mover o motociclista para o passeio.",
      "Dar água para passar o susto."
    ],
    "answer": 1,
    "explicacao": "Não se deve retirar o capacete para não agravar possíveis lesões na coluna."
  },
  {
    "question": "O pulso representa a regularidade da contração do coração. Assinale a opção incorreta:",
    "options": [
      "Sua frequência varia com a idade.",
      "Um ritmo irregular pode ser patológico.",
      "Com um pulso fraco pode estar ocorrendo uma hemorragia.",
      "Ao verificar um pulso usamos os dedos polegar e indicador sobre a artéria."
    ],
    "answer": 3,
    "explicacao": "Não se deve usar o polegar, pois tem pulso próprio; usa-se indicador e médio."
  },
  {
    "question": "Assinale a opção incorreta quanto a ferimentos abdominais abertos:",
    "options": [
      "Encaminhar imediatamente para o hospital após o atendimento.",
      "Se ocorrer exposição de intestino e estômago colocar novamente na cavidade.",
      "Não tocar o ferimento com os dedos ou material sujo.",
      "Cobrir com compressas úmidas o órgão exposto."
    ],
    "answer": 1,
    "explicacao": "Nunca se deve recolocar órgãos expostos, apenas cobrir com compressa úmida."
  },
  {
    "question": "Complete a frase. Nos casos de parada cardíaca os lábios ficam imediatamente azulados, as pupilas encontram-se ______ e a vítima apresenta palidez acentuada.",
    "options": ["Contraídas.", "Enrijecidas.", "Dilatadas.", "Rígidas."],
    "answer": 2,
    "explicacao": "Na parada cardíaca as pupilas ficam dilatadas, com palidez acentuada."
  },
  {
    "question": "Correntes elétricas podem ocasionar queimaduras, mesmo que a pele aparente estar normal. Nesta situação, recomenda-se:",
    "options": [
      "Observar a evolução, sem fazer nada.",
      "Levar a vítima para o hospital.",
      "Umedecer a região com algum creme hidratante.",
      "Lavar a região e cobrir com gaze."
    ],
    "answer": 1,
    "explicacao": "Choques elétricos podem ter lesões internas, a vítima deve ser levada ao hospital."
  },
  {
    "question": "Diante de uma vítima de trânsito, não sendo possível a presença do profissional socorrista, deve-se primeiramente, verificar se:",
    "options": [
      "Ocorreu sangramento abundante.",
      "Ocorreram fraturas.",
      "A vítima consegue ficar em pé e andar sozinha.",
      "Ocorreu a obstrução de vias aéreas."
    ],
    "answer": 3,
    "explicacao": "O primeiro passo é garantir que as vias aéreas estejam desobstruídas."
  },
  {
    "question": "Em acidente onde haja derramamento de combustível você deverá, para reduzir perigo de incêndio:",
    "options": [
      "Cobrir o combustível com terra, areia ou cal.",
      "Apenas lavar a pista.",
      "Cobrir o combustível com lona plástica.",
      "Espalhar o combustível."
    ],
    "answer": 0,
    "explicacao": "A forma correta é cobrir com terra, areia ou cal para reduzir risco de incêndio."
  },
  {
    "question": "Em que posição o extintor de incêndio deve ser usado?",
    "options": [
      "Deitado.",
      "Na posição vertical.",
      "Na posição horizontal.",
      "De cabeça para baixo."
    ],
    "answer": 1,
    "explicacao": "O extintor deve ser usado na posição vertical para funcionar corretamente."
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