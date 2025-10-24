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
    "question": "O que significa essa placa de advertência?",
    "image": "pista_sinuosa_esquerda.png",
    "options": [
        "Curva proíbida para ciclomotores.",
        "Curva com dois movimentos contrários.",
        "Pista sinuosa à direita.",
        "Pista sinuosa à esquerda."
    ],
    "answer": 3,
    "explicacao": "Essa placa indica que a pista tem curvas sinuosas à esquerda, exigindo atenção redobrada dos motoristas."
    },
    
    {
    "question": "O que significa essa placa de advertência?",
    "image": "via_lateral_esquerda.png",
    "options": [
        "Via lateral à direita.",
        "Via lateral à esquerda.",
        "Via lateral à esquerda, com três vias.",
        "Via lateral à esquerda, com duas vias."
    ],
    "answer": 1,
    "explicacao": "Essa placa indica que a via lateral está à direita."
    },

    {
    "question": "O que você entende vendo essa placa de regulamentação?",
    "image": "proibido_estacionar.png",
    "options": [
        "É proíbido parar, mas o estacionamento é permitido para operação de carga.",
        "É proíbido parar e estacionar.",
        "É proíbido estacionar, mas a parada é permitida para embarque e desembarque de passageiros.",
        "É proíbido estacionar, mas a parada é permitida para veículos pesados apenas."
    ],
    "answer": 2,
    "explicacao": "Essa placa indica que é proibido estacionar, exceto para embarque e desembarque de passageiros, por mais que proíbe estacionar a parada nessa placa é permitido." 
    },

    {
    "question": "O que significa essa placa de regulamentação?",
    "image": "proibido_esquerda_direita.png",
    "options": [
        "Proíbido mudar de faixa ou pista de trânsito em qualquer circunstância.",
        "Proíbido mudar de faixa ou pista de trânsito.",
        "Proíbido mudar de faixa ou pista de trânsito da direita para a esquerda.",
        "Proíbido mudar de faixa ou pista de trânsito da esquerda para a direita."
    ],
    "answer": 3,
    "explicacao": "Essa placa indica que é proibido mudar de faixa ou pista de trânsito da esquerda para a direita, ou seja, os veículos devem permanecer na faixa atual."
    },

    {
    "question": "O que significa essa placa de atrativos turísticos?",
    "image": "arquitetura_religiosa.png",
    "options": [
        "Arquitetura religiosa.",
        "Arquitetura histórica.",
        "Igreja da Aparecida do Norte.",
        "Igreja da Universal."
    ],
    "answer": 0,
    "explicacao": "Essa placa indica que a atração turística é relacionada à ARQUITETURA RELIGIOSA, Olhe bem na placa e memorize."
    },

    {
    "question": "O que significa essa placa de atrativos turísticos?",
    "image": "museu.png",
    "options": [
        "Prefeitura.",
        "museu.",
        "Centro de eventos.",
        "Conservatório músical."
    ],
    "answer": 1,
    "explicacao": "Essa placade atração turística é um MUSEU, onde os visitantes podem apreciar exposições e coleções de artefatos históricos, culturais ou científicos."
    },

    {
    "question": "O que significa essa placa de serviços auxiliares?",
    "image": "terminal_rodoviario.png",
    "options": [
        "Estacionamento exclusivo para portadores de deficiências.",
        "Estacionamento para veículos leves.",
        "Terminal ferroviário.",
        "Terminal rodoviário."
    ],
    "answer": 3,
    "explicacao": "Essa placa indica que o local é um TERMINAL RODOVIÁRIO, onde os passageiros podem embarcar e desembarcar de ônibus intermunicipais ou interestaduais."
    },

    {
    "question": "O que significa essa placa de serviços auxiliares?",
    "image" : "pedagio.png",
    "options": [
        "Shopping.",
        "Pedagio.",
        "Rodoviária.",
        "McDonald's."
    ],
    "answer": 1,
    "explicacao": "Essa placa indica que o local é um PEDÁGIO, onde os motoristas devem pagar uma taxa para utilizar a rodovia ou estrada."
    },

    {
    "question": "O que significa essa placa de advertência A-12?",
    "image": "intersecao_circulo.png",
    "options": [
        "Interseção livre para os PCD.",
        "Rotatória há 500 metros.",
        "Rotatória há 100 metros.",
        "Interseção em circulo."
    ],
    "answer": 3,
    "explicacao": "Essa placa de advertência A-12 indica que há uma interseção em forma de círculo, onde os veículos devem reduzir a velocidade e dar preferência aos que já estão na rotatória."
    },

    {
    "question": "O que significa a placa de advertência A-19?",
    "image": "depressao.png",
    "options": [
        "Rachaduras na via.",
        "Buracos na via.",
        "Depressão.",
        "Desnível na via."
    ],
    "answer": 2,
    "explicacao": "Essa placa de advertência A-19 indica que há uma depressão na via, onde os motoristas devem reduzir a velocidade para evitar danos ao veículo."
    },

    {
    "question": "O que significa essa placa de regulamentação R-6c?",
    "image": "proibido_parar_estacionar.png",
    "options": [
        "Proíbido parar e estacionar, exceto para motocicletas.",
        "Proíbido parar e estacionar, exceto para estragados.",
        "Proíbido parar e estacionar.",
        "Proíbido parar e estacionar, exceto para ônibus."
    ],
    "answer": 2,
    "explicacao": "Essa placa de regulamentação R-6c indica que é proibido parar e estacionar."
    },

    {
    "question": "O que significa essa placa de regulamentação R-14?",
    "image": "peso_bruto_maximo_permitido.png",
    "options": [
        "Peso bruto total máximo permitido.",
        "Peso bruto total máximo limitado.",
        "largura total máximo permitido.",
        "largura total máximo limitado."
    ],
    "answer": 0,
    "explicacao": "Essa placa de regulamentação R-14 indica que o peso bruto total máximo permitido é de 30 toneladas, ou seja, os veículos não podem ultrapassar esse limite para garantir a segurança nas estradas."
    },

    {
    "question": "O que significa essa placa de atrativos turísticos?",
    "image": "festas_populares.png",
    "options": [
        "Festa junina.",
        "Escola de dança comunitária.",
        "Dança de rua tradicional.",
        "Festas populares."
    ],
    "answer": 3,
    "explicacao": "Essa placa de atrativos turísticos indica que há festas populares na região, onde os visitantes podem participar de celebrações culturais e tradicionais."
    },

    {
    "question": "O que significa essa placa de atrativos turísticos?",
    "image": "feira_tipica.png",
    "options": [
        "Barraca de pastel.",
        "Feira típica.",
        "Barraca de cachorro quente.",
        "Feira típica de artesanatos."
    ],
    "answer": 1,
    "explicacao": "Essa placa de atrativos turísticos indica que há uma feira típica na região, onde os visitantes podem encontrar produtos locais, artesanatos e comidas típicas."
    },

    {
    "question": "Olhando essa placa de serviços auxiliares SAU-01, você entende que?",
    "image": "area_estacionamento.png",
    "options": [
        "tem uma área de estacionamento.",
        "Tem uma escola ao lado.",
        "Tem uma área de estacionamento e uma escola ao lado.",
        "Tem uma área de estacionamento e uma feira ao lado."
    ],
    "answer": 0,
    "explicacao": "Essa placa de serviços auxiliares SAU-01 indica que há uma área de estacionamento disponível para os motoristas, facilitando o acesso ao local."
    },

    {
    "question": "O que significa essa placa de serviços auxiliares SAU-10?",
    "image": "pronto_socorro.png",
    "options": [
        "Cemitério.",
        "Hospital.",
        "Pronto socorro.",
        "Farmácia."
    ],
    "answer": 2,
    "explicacao": "Essa placa de serviços auxiliares SAU-10 indica que há um pronto socorro próximo, onde os motoristas podem buscar atendimento médico de emergência."
    },

    {
    "question": "O que significa essa placa de advertência A-17?",
    "image": "pista_irregular.png",
    "options": [
        "Pista irregular.",
        "Saliência ou lombada.",
        "Quebra-molas.",
        "Pista emburacada."
    ],
    "answer": 0,
    "explicacao": "Essa placa de advertência A-17 indica que há uma pista irregular, onde os motoristas devem reduzir a velocidade para evitar danos ao veículo."
    },

    {
    "question": "O que significa essa placa de advertência A-28?",
    "image": "pista_escorregadia.png",
    "options": [
        "Pista com deslizamento",
        "Pista com curva sinuosa à direita.",
        "Pista com curva sinuosa à esquerda.",
        "Pista escorregadia."
    ],
    "answer": 3,
    "explicacao": "Essa placa de advertência A-28 indica que há uma pista escorregadia, onde os motoristas devem ter cuidado redobrado para evitar derrapagens e acidentes."
    },

     {
    "question": "Diante dessa placa de regulamentação você entende que:?",
    "image": "uso_correntes.png",
    "options": [
        "O motorista é obrigado a usar correntes na roda porque a via apresenta dificuldade de circulação.",
        "O motorista deixou o carro encravar e agora tem que usar correntes nas rodas",
        "O motorista está conduzindo um trator traçado 4x4.",
        "O motorista atolou o carro na lama e agora tem que usar correntes nas rodas."
    ],
    "answer": 0,
    "explicacao": "Essa placa de regulamentação indica que o motorista é obrigado a usar correntes nas rodas do veículo devido às condições adversas da via, como neve ou lama, que dificultam a circulação."
    },

    {
    "question": "O que significa essa placa de regulamentação R-21?",
    "image": "alfandega.png",
    "options": [
        "Semáforo a frente.",
        "Ponte móvel.",
        "Pedágio.",
        "Alfândega."
    ],
    "answer": 3,
    "explicacao": "Essa placa de regulamentação R-21 indica que há uma alfândega próxima, onde os motoristas devem estar preparados para inspeções de bagagens e mercadorias ao cruzar fronteiras."
    },

    {
    "question": "O que signifia essa placa de atrativos turísticos?",
    "image": "artesanato.png",
    "options": [
        "Competição de artesanatos.",
        "Artesanato.",
        "Artesanato e artes plásticas.",
        "Artesanatos feito por artesãos clássicos."
    ],
    "answer": 1,
    "explicacao": "Essa placa de atrativos turísticos indica que há uma feira de artesanato na região, onde os visitantes podem encontrar produtos feitos à mão por artesãos locais."
    },

    {
    "question": "O que significa essa placa de atrativos turísticos?",
    "image": "pavilhao_exposicao.png",
    "options": [
        "Presidente da república brasileira.",
        "Competição de golfe nacional.",
        "Pavilhão de exposições.",
        "Campeonato de golfe brasileiro."
    ],
    "answer": 2,
    "explicacao": "Essa placa de atrativos turísticos indica que há um pavilhão de exposições na região, onde os visitantes podem apreciar diversas mostras culturais, artísticas e científicas."
    },

    {
    "question": "A placa de advertência A-14 indica:",
    "image": "semaforo_frente.png",
    "options": [
        "Semáforo.",
        "Semáforo à frente.",
        "Semáforo rotátivo.",
        "Semáforo em manutenção."
    ],
    "answer": 1,
    "explicacao": "Essa placa de advertência A-14 indica que há um semáforo à frente, alertando os motoristas para reduzirem a velocidade e estarem preparados para parar."
    },

    {
    "question": "A placa de advertência A-21c indica:",
    "image": "estreitamento_direita.png",
    "options": [
        "Alargamento de pista à direita.",
        "Confluência de vias à direita.",
        "Estreitamento de pista à direita.",
        "Alargamento de pista à esquerda."
    ],
    "answer": 2,
    "explicacao": "Essa placa de advertência A-21c indica que há um estreitamento de pista à direita, onde os motoristas devem reduzir a velocidade e estar preparados para manobras."
    },

    {
    "question": "O que significa essa placa de regulamentação R-24b?",
    "image": "passagem_obrigatoria.png",
    "options": [
        "Sentido único.",
        "Vire à direita.",
        "Passagem obrigatória.",
        "Passagem obrigatória à direita."
    ],
    "answer": 2,
    "explicacao": "Essa placa de regulamentação R-24b indica que a passagem é obrigatória, ou seja, os veículos devem seguir pela via indicada para evitar acidentes."
    },

    {
    "question": "O que significa essa placa de regulamentação R-27?",
    "image": "onibus_direita.png",
    "options": [
        "Apenas os ônibus, mantenham-se à direita.",
        "Ônibus, caminhões e veículos de grande porte, mantenham-se à direita.",
        "Ônibus, caminhões e veículos de grande porte, mantenham-se somente à direita.",
        "Ônibus, caminhões e veículos de grande porte, mantenham-se à esquerda."
    ],
    "answer": 1,
    "explicacao": "Essa placa de regulamentação R-27 indica que os ônibus, caminhões e veículos de grande porte devem manter-se à direita, garantindo fluidez no tráfego e segurança para todos os usuários da via."
    },

    {
    "question": "O que significa essa placa de advertência A-39?",
    "image": "passagem_sem_barreira.png",
    "options": [
        "Passagem de nível sem barreira.",
        "Passagem de nível com barreira.",
        "Cruz de santo André.",
        "Cruzamento de vias com barreiras."
    ],
    "answer": 0,
    "explicacao": "Essa placa de advertência A-39 indica que há uma passagem de nível sem barreira, alertando os motoristas para reduzirem a velocidade e estarem atentos aos trens que possam cruzar a via."
    },

    {
    "question": "O que significa essa placa de advertência A-34?",
    "image": "criancas.png",
    "options": [
        "Crianças.",
        "Crianças jogando bola.",
        "Crinças brincando.",
        "Crianças Treinando futebol."
    ],
    "answer": 0,
    "explicacao": "Essa placa de advertência A-34 indica que há crianças na área, alertando os motoristas para reduzirem a velocidade e estarem atentos ao tráfego escolar ou recreativo."
    },

    {
    "question": "A placa A-40 adverte uma:",
    "image": "passagem_com_barreira.png",
    "options": [
        "Passagem de nível sem barreira.",
        "Passagem de nível com barreira.",
        "Cruz de santo André.",
        "Cruzamento de vias com barreiras."
    ],
    "answer": 1,
    "explicacao": "Essa placa de advertência A-40 indica que há uma passagem de nível com barreira, alertando os motoristas para reduzirem a velocidade e estarem preparados para parar e caso a barreira esteja fechada é porque o Trem se aproxima."
    },

    {
    "question": "A placa A-48 adverte:",
    "image": "comprimento_limitado.png",
    "options": [
        "Largura permitida.",
        "Largura limitada.",
        "Comprimento Permitido.",
        "Comprimento limitado."
    ],
    "answer": 3,
    "explicacao": "Essa placa de advertência A-48 indica que há um comprimento limitado, ou seja, os veículos não podem ultrapassar o tamanho máximo permitido para garantir a segurança nas estradas. Dica: Em placa de Advertência, usamos o termo 'limitado' para indicar que há um limite a ser respeitado, em placas de regulamentação, usamos o termo 'permitido' porque as placas de regulamentação elas estão o tempo todo proibindo.. permitindo..."
    },


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