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
    "question": "Em acidente envolvendo motociclista, o procedimento adequado é:",
    "options": [
      "Remover o capacete somente em caso de muita dor.",
      "Mudar a posição do motociclista para acomodá-lo melhor.",
      "Remover o capacete para facilitar a respiração.",
      "Aguardar socorro especializado e não remover o capacete."
    ],
    "answer": 3,
    "explicacao": "Nunca se deve remover o capacete da vítima, exceto por profissional treinado. O correto é aguardar o socorro."
  },
  {
    "question": "Em caso de acidente com veículo transportando produtos inflamáveis, o procedimento correto do condutor é:",
    "options": [
      "Providenciar, o mais rápido possível, o escoamento do produto.",
      "Sinalizar o local com tochas de fogo.",
      "Efetuar, primeiramente a limpeza do veículo.",
      "Isolar o local."
    ],
    "answer": 3,
    "explicacao": "O correto é isolar o local e evitar contato com o produto inflamável."
  },
  {
    "question": "Em caso de acidente:",
    "options": [
      "É obrigação de todos sempre prestar auxílio à vítima, mesmo que não saiba fazer.",
      "É obrigação de todos prestarem auxílio, desde que não haja risco pessoal.",
      "É obrigação de todos prestarem auxílio, mesmo com risco pessoal.",
      "Não existe obrigação legal em socorrer."
    ],
    "answer": 1,
    "explicacao": "A lei exige auxílio, mas nunca em situação que coloque o socorrista em risco."
  },
  {
    "question": "Em caso de ferimentos nos olhos, não se deve:",
    "options": [
      "Lavar o olho com água limpa.",
      "Retirar corpos estranhos encravados.",
      "Cobrir o olho ferido com gaze ou pano limpo.",
      "Pedir que a vítima feche o outro olho."
    ],
    "answer": 1,
    "explicacao": "Nunca se deve tentar retirar corpos estranhos encravados no olho."
  },
  {
    "question": "Em caso de hemorragia, o uso de uma compressa limpa serve para:",
    "options": [
      "Estancar hemorragia interna.",
      "Imobilizar a fratura.",
      "Manter a temperatura normal do corpo.",
      "Estancar hemorragia externa."
    ],
    "answer": 3,
    "explicacao": "Compressa limpa é usada para estancar hemorragias externas."
  },
  {
    "question": "Em caso de primeiros socorros, o colar cervical serve para:",
    "options": [
      "Liberar o movimento cervical.",
      "Limitar os movimentos das pernas.",
      "Imobilizar a coluna cervical.",
      "Estancar hemorragia."
    ],
    "answer": 2,
    "explicacao": "O colar cervical serve para imobilizar a coluna cervical e evitar agravamento da lesão."
  },
  {
    "question": "Em qual situação devemos retirar uma vítima do veículo, antes da chegada do socorro profissional?",
    "options": [
      "Em qualquer situação.",
      "Quando for conveniente.",
      "Quando houver perigo imediato de incêndio ou outros riscos evidentes.",
      "Para liberar a pista."
    ],
    "answer": 2,
    "explicacao": "Só se deve retirar a vítima em casos de risco iminente, como incêndio."
  },
  {
    "question": "Em um acidente a vítima está dentro do veículo que tem fumaça em seu interior. Nesta situação, o que fazer após chegar à conclusão de que não há risco pessoal?",
    "options": [
      "Retirar a pessoa de dentro do carro, após imobilizá-la da melhor forma possível.",
      "Deixar a vítima sentada dentro do veículo e oferecer muito leite a ela, aguardando a dissipação da fumaça.",
      "Afastar-se rapidamente chamando o resgate.",
      "Jogar água no veículo e até na vítima para resfriar o local."
    ],
    "answer": 0,
    "explicacao": "O correto é retirar a vítima do veículo com cuidado, após imobilizá-la."
  },
  {
    "question": "Em que situação e como você deve soltar o cinto de segurança de uma vítima que sofreu um acidente?",
    "options": [
      "Quando o cinto de segurança dificultar a respiração, soltar sem movimentar o corpo da vítima.",
      "Para liberar os movimentos da vítima.",
      "Quando estiver muito calor.",
      "Em hipótese alguma deve-se retirar o cinto."
    ],
    "answer": 0,
    "explicacao": "O cinto só deve ser solto se estiver atrapalhando a respiração e sem movimentar o corpo."
  },
  {
    "question": "Em que situação o socorrista deve usar a pressão digital na artéria?",
    "options": [
      "Em pequenos sangramentos.",
      "Nas entorses.",
      "Nas contusões.",
      "Nos grandes sangramentos."
    ],
    "answer": 3,
    "explicacao": "Pressão digital é usada em grandes sangramentos, para reduzir a perda de sangue."
  },
  {
    "question": "Em relação às condições adotadas durante o dia, a distância para sinalizar o local de um acidente à noite ou sob chuva deverá ser:",
    "options": [
      "Corresponde a mais 10 passos.",
      "A mesma.",
      "Dobrada e com a utilização de dispositivos luminosos.",
      "Com chuva contamos no máximo 40 passos."
    ],
    "answer": 2,
    "explicacao": "À noite ou sob chuva a distância deve ser dobrada e sinalizada com dispositivos luminosos."
  },
  {
    "question": "Em um acidente com vítimas, quando possível, devemos manter o tráfego fluindo por vários motivos. Para a vítima, o motivo mais importante é:",
    "options": [
      "Não atrapalhar os usuários da via.",
      "Não congestionar a via.",
      "Não atrasar os compromissos dos motoristas.",
      "Possibilitar a chegada mais rápida de uma equipe de socorro."
    ],
    "answer": 3,
    "explicacao": "Manter o tráfego ajuda o socorro a chegar mais rápido."
  },
  {
    "question": "Em um acidente de trânsito em que haja fios de rede elétrica sobre o veículo, você deve:",
    "options": [
      "Instruir os ocupantes para que saiam do veículo.",
      "Tentar remover os fios com pedaço de pau.",
      "Instruir os ocupantes para que permaneçam dentro do veículo e chamar o resgate.",
      "Retirar os ocupantes do veículo imediatamente."
    ],
    "answer": 2,
    "explicacao": "O mais seguro é manter os ocupantes dentro do veículo e chamar o resgate."
  },
  {
    "question": "Em um acidente de trânsito, deverá receber os primeiros socorros, primeiramente, a vítima que estiver:",
    "options": [
      "Gritando com muita dor.",
      "Com muitas fraturas.",
      "Presa às ferragens.",
      "Respirando com dificuldade."
    ],
    "answer": 3,
    "explicacao": "A prioridade é a vítima com dificuldade respiratória."
  },
  {
    "question": "Em um acidente, deve-se evitar atitudes que possam colocar a vítima em perigo ocasionando maiores danos. Qual das atitudes está incorreta?",
    "options": [
      "Levar a vítima imediatamente ao hospital, sem perder mais tempo.",
      "Verificar sua respiração, pulsação e sangramento.",
      "Sinalizar o local para evitar outros acidentes.",
      "Prestar auxílio e chamar resgate."
    ],
    "answer": 0,
    "explicacao": "Nunca deve-se transportar a vítima de forma precipitada sem avaliação."
  },
  {
    "question": "Em um acidente, vítima inconsciente e identificada uma parada respiratória e cardíaca, exige-se do socorrista:",
    "options": [
      "Fazer respiração boca-a-boca.",
      "Movimentar a vítima para que a mesma recupere a consciência.",
      "Fazer ressuscitação cardiopulmonar.",
      "Treinamento prático e específico."
    ],
    "answer": 2,
    "explicacao": "Na parada respiratória e cardíaca o correto é iniciar RCP imediatamente."
  },
  {
    "question": "Embora cada acidente tenha suas circunstâncias peculiares, algumas medidas devem ser tomadas pelo socorrista, dentre elas:",
    "options": [
      "Aliviar a dor, oferecendo analgésico à vítima.",
      "Transportar a vítima em qualquer situação.",
      "Oferecer líquido à vítima.",
      "Assumir a situação de emergência."
    ],
    "answer": 3,
    "explicacao": "O socorrista deve assumir o controle da situação até a chegada do resgate."
  },
  {
    "question": "Enquanto se aguarda socorro especializado para atender a vítima que apresenta queimaduras, o procedimento adequado consiste em aplicar:",
    "options": [
      "Algodão embebido em álcool.",
      "Algodão embebido em óleo mineral.",
      "Pomada curativa e anestésica.",
      "Compressas de água fria com pano limpo."
    ],
    "answer": 3,
    "explicacao": "O correto é usar compressas frias e limpas, nunca pomadas ou produtos químicos."
  },
  {
    "question": "Entre as regras fundamentais para sinalizar o local do acidente de trânsito, destaca-se a de:",
    "options": [
      "Permitir que pessoas parem na pista.",
      "Não é necessário sinalizar nos dois sentidos.",
      "Iniciar a sinalização num ponto em que os condutores ainda não possam ver o acidente.",
      "Manter o tráfego parado nos dois sentidos."
    ],
    "answer": 2,
    "explicacao": "A sinalização deve começar antes que os condutores enxerguem o acidente, para alertá-los."
  },
  {
    "question": "Existem certas ações de emergência que podem ser realizadas por mais de um socorrista. Nos casos em que a vítima, além de não respirar, sofre parada cardíaca que deve ser aplicada massagem cardíaca associada à respiração artificial. A ressuscitação cardiopulmonar funciona melhor se executada por:",
    "options": ["3 pessoas.", "1 pessoa.", "4 pessoas.", "2 pessoas."],
    "answer": 3,
    "explicacao": "O ideal é RCP feita por dois socorristas, alternando as manobras."
  },
  {
    "question": "Indica incapacidade de movimentar pernas e braços após um acidente:",
    "options": ["Traumatismo craniano.", "Politraumatismo.", "Lesão na coluna.", "Lesão na cabeça."],
    "answer": 2,
    "explicacao": "Lesões na coluna podem gerar paralisia de braços e pernas."
  },
  {
    "question": "Indique abaixo uma das técnicas que podem ser adotadas para conter uma hemorragia externa quando não for possível a presença do resgate:",
    "options": [
      "Fazer compressão no ferimento, utilizando gaze ou pano limpo.",
      "Aplicar torniquete.",
      "Fazer compressão utilizando as mãos diretamente no ferimento.",
      "Movimentar a vítima imediatamente."
    ],
    "answer": 0,
    "explicacao": "O correto é comprimir o ferimento com gaze ou pano limpo."
  },
  {
    "question": "O trabalho de remoção de um acidentado deve ser feito por pessoal especializado, com equipamentos apropriados. Mas se numa emergência, esse transporte precisar ser feito por você, qual procedimento pode ser considerado inadequado?",
    "options": [
      "Verificar se há deformações na coluna vertebral.",
      "Remover a vítima do local de maneira mais rápida possível, pois esta necessita de atendimento urgente.",
      "Improvisar uma marca para transporte do acidentado.",
      "Evitar freadas bruscas e excesso de velocidade que podem agravar o estado da vítima."
    ],
    "answer": 1,
    "explicacao": "A remoção nunca deve ser feita de forma apressada, isso pode agravar lesões."
  },
  {
    "question": "Localize a metade inferior do osso esterno, subindo dois dedos a partir do início da costela. Esse é um dos procedimentos para executar a massagem cardíaca que deve ser repetida a cerca de ___ por minuto:",
    "options": ["12 a 15 vezes.", "30 a 60 vezes.", "100 vezes.", "60 a 120 vezes."],
    "answer": 3,
    "explicacao": "A massagem cardíaca deve ser feita a uma frequência de 100 a 120 por minuto."
  },
  {
    "question": "Manter a cabeça mais baixa que o corpo é socorro prestado à vítima:",
    "options": [
      "Em estado de choque.",
      "Com ferimentos na cabeça.",
      "Com as pupilas dilatadas.",
      "Com temperatura baixa."
    ],
    "answer": 0,
    "explicacao": "Essa posição ajuda vítimas em estado de choque, melhorando a circulação."
  },
  {
    "question": "Ao se deparar com um acidente num local onde o socorro seja prestado somente pelo Corpo de Bombeiros, você deverá ligar para o número:",
    "options": ["191.", "193.", "190.", "181."],
    "answer": 1,
    "explicacao": "O número de emergência dos Bombeiros é 193."
  },
  {
    "question": "Na presença de sangramento abundante, qual o cuidado indicado?",
    "options": [
      "Garrotear (usar garrote).",
      "Fazer compressão no local do sangramento.",
      "Dar bastante líquido para a pessoa ir tomando.",
      "Jogar bastante água oxigenada para coagular e limpar o ferimento."
    ],
    "answer": 1,
    "explicacao": "O cuidado correto é aplicar compressão direta no local do sangramento."
  },
  {
    "question": "Não constitui medida básica para prestar assistência à vítima de acidente, após ter sinalizado o local:",
    "options": [
      "Verificar, primeiramente, os sinais vitais.",
      "Determinar que o acidentado busque socorro.",
      "Assumir a situação.",
      "Proteger o acidentado."
    ],
    "answer": 1,
    "explicacao": "A vítima nunca deve ser deixada sozinha para buscar socorro."
  },
  {
    "question": "Não entre em pânico. Pensar é tão importante quanto agir! Essa fase refere-se:",
    "options": [
      "À direção defensiva.",
      "À direção preventiva.",
      "À prestação de socorros.",
      "Ao acionamento de recursos."
    ],
    "answer": 2,
    "explicacao": "Essa frase está ligada ao ato de prestar socorros de forma calma e racional."
  },
  {
    "question": "Num acidente observamos que o ferimento de uma vítima esguicha sangue no mesmo ritmo de sua pulsação. Conclui-se que ocorreu o corte de:",
    "options": ["Uma veia.", "Uma artéria.", "Um músculo.", "Um nervo."],
    "answer": 1,
    "explicacao": "Sangue jorrando em ritmo da pulsação indica rompimento de artéria."
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