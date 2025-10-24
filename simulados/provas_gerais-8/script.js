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
    "question": "Os veículos destinados a socorros de incêndio e salvamento, polícia, ambulância, fiscalização e operação de trânsito:",
    "options": [
      "Gozam de livre trânsito e estacionamento em qualquer situação.",
      "Devem obedecer às normas de circulação e a legislação de trânsito como qualquer ouro tipo de veículo, mesmo devidamente identificado em estado de urgência.",
      "Só tem prioridade e trânsito livre quando estiverem protegidos por batedores.",
      "Além de prioridade de trânsito, gozam de livre circulação, estacionamento e parada, quando em serviço de urgência e devidamente identificados por dispositivos regulamentares de alarme sonoro e iluminação vermelha intermitente."
    ],
    "answer": 3,
    "explicacao": "Na urgência, com sirene e luz vermelha intermitente, esses veículos têm prioridade e podem circular/estacionar livremente para o atendimento."
  },
  {
    "question": "A poluição do ar causa problemas de saúde que resultam, principalmente em:",
    "options": [
      "Doenças do aparelho digestivo.",
      "Doenças respiratórias.",
      "Alterações visuais.",
      "Dores de cabeça."
    ],
    "answer": 1,
    "explicacao": "O principal impacto da poluição atmosférica recai sobre o sistema respiratório."
  },
  {
    "question": "Qual o objetivo do SINIAV (Sistema Nacional de Identificação Automática de Veículos)?",
    "options": [
      "Indenizar vítimas de acidentes de trânsito.",
      "Acabar com os acidentes de trânsito.",
      "Diminuir as filas dos DETRANs, devido ao licenciamento dos veículos.",
      "Aperfeiçoar a gestão do tráfego e a fiscalização de veículos."
    ],
    "answer": 3,
    "explicacao": "O SINIAV serve para identificar veículos automaticamente, melhorando gestão e fiscalização."
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
    "explicacao": "Sensibilidade é a capacidade de sentir estímulos; dizer que é 'não sentir dor' está errado."
  },
  {
    "question": "A única maneira de tirar algum proveito de acidente de trânsito é:",
    "options": [
      "Fazer ocorrência.",
      "Realizar perícia.",
      "Receber o seguro obrigatório.",
      "Aprender como agir para evitar que ele se repita."
    ],
    "answer": 3,
    "explicacao": "O 'proveito' real é o aprendizado para prevenir repetição do acidente."
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
    "explicacao": "Prevenção é conjunto de práticas: manutenção, nada de improviso e cuidado com fontes de ignição."
  },
  {
    "question": "A utilização correta do guia da cidade proporciona deslocamentos seguros, economia de tempo e de combustível. Logo, você deve:",
    "options": [
      "Guardar o guia em casa.",
      "Decorar o nome de todas as vias da cidade.",
      "Manter o guia no porta-malas, junto com as ferramentas.",
      "Manter o guia no porta-luvas, utilizando-o de acordo com as instruções nele contidas."
    ],
    "answer": 3,
    "explicacao": "Guia acessível e uso conforme instruções: praticidade e segurança."
  },
  {
    "question": "Analise as seguintes infrações: \n- Deixar de atualizar o cadastro de registro do veículo ou de habilitação do condutor. \n- Fazer falsa declaração de domicílio para fins de registro, licenciamento ou habilitação. \nA natureza delas é, respectivamente:",
    "options": [
      "Grave, ambas.",
      "Leve e gravíssima.",
      "Média e grave.",
      "Gravíssima e grave."
    ],
    "answer": 1,
    "explicacao": "Deixar de atualizar cadastro é leve; falsa declaração é gravíssima."
  },
  {
    "question": "Indique qual dos documentos abaixo serve como comprovação de que o veículo encontra-se licenciado para circular na via pública:",
    "options": [
      "ATPV.",
      "CRV.",
      "CRLV-e no formato digital ou impresso.",
      "RENAVAM."
    ],
    "answer": 2,
    "explicacao": "O CRLV-e (digital ou impresso) comprova licenciamento."
  },
  {
    "question": "A notificação de infração devolvida por desatualização do endereço do proprietário do veículo ou por recusa desse de recebê-la será:",
    "options": [
      "Será arquivada e seu registro julgado insubsistente.",
      "Considerada culpa assumida.",
      "Considerada válida para todos os efeitos.",
      "Aplicada em dobro."
    ],
    "answer": 2,
    "explicacao": "Mesmo devolvida, a notificação vale juridicamente."
  },
  {
    "image": "quest11.png",
    "question": "Diante da placa A-5a, o condutor entende que irá encontrar:",
    "options": [
      "Duas curvas sucessivas em S, sendo a primeira para a esquerda e a segunda para direita.",
      "Saliência ou lombada à frente.",
      "Uma depressão na pista de rolamento.",
      "Duas curvas sucessivas em S, sendo a primeira para a direita e outra para a esquerda."
    ],
    "answer": 0,
    "explicacao": "A-5a sinaliza sequência de curvas em S iniciando para a esquerda."
  },
  {
    "question": "Ao motofretista e ao mototaxista é exigido Curso Especializado de 30 horas-aulas. Dentre os requisitos para a realização do curso, é necessário:",
    "options": [
      "Ter no mínimo 25 anos e 1 ano na categoria “A”.",
      "Ter no mínimo 20 anos e 2 anos na categoria “B”.",
      "Ter no mínimo 21 anos e 2 anos na categoria “A”.",
      "Ter no mínimo 18 anos e 1 ano na categoria “A”."
    ],
    "answer": 2,
    "explicacao": "Requisitos: pelo menos 21 anos e 2 anos de habilitação na categoria A."
  },
  {
    "question": "Sabemos que ultrapassagem e transposição de faixas são manobras que devem ser efetuadas com segurança. Sobre isso, é incorreto dizer que:",
    "options": [
      "O condutor deve indicar a manobra com antecedência.",
      "A transposição de faixas pode ser realizada tanto pela faixa da esquerda, quanto pela da direita.",
      "Estando na faixa da esquerda, ao perceber que o condutor que o segue quer ultrapassá-lo, mantenha-se em sua faixa.",
      "Só se pode ultrapassar pela direita se o condutor à sua frente indicar a intenção de entrar à esquerda."
    ],
    "answer": 2,
    "explicacao": "Se alguém quer ultrapassar pela esquerda, o correto é facilitar a ultrapassagem, não 'barrar'."
  },
  {
    "question": "A velocidade que permite ao condutor reagir diante de um obstáculo, um pedestre ou outro veículo é:",
    "options": [
      "Compatível com as características da via onde está circulando.",
      "Máxima permitida para a via onde está circulando.",
      "Máxima de 80 km/h, de acordo com a legislação de trânsito.",
      "De 30 km/h, em qualquer via."
    ],
    "answer": 0,
    "explicacao": "Velocidade deve ser adequada às condições da via e do trânsito."
  },
  {
    "image": "quest15.png",
    "question": "A placa de Serviços Auxiliares SAU-26, indica:",
    "options": [
      "Estacionamento de ônibus.",
      "Ponto exclusivo de ônibus.",
      "Ponto de parada.",
      "Rodoviária."
    ],
    "answer": 2,
    "explicacao": "SAU-26 indica local de ponto de parada (serviço auxiliar)."
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
    "explicacao": "Nunca recolocar vísceras; apenas cobrir úmido e acionar socorro."
  },
  {
    "question": "É o gás incolor, sem cheiro ou gosto, resultante da queima incompleta de combustíveis:",
    "options": [
      "O monóxido de carbono.",
      "Os hidrocarbonetos.",
      "Os óxidos de nitrogênio.",
      "O gás de ozônio."
    ],
    "answer": 0,
    "explicacao": "Definição clássica do monóxido de carbono (CO)."
  },
  {
    "question": "A finalidade da válvula termostática é:",
    "options": [
      "Diminuir o fluxo da água.",
      "Impedir a passagem da água do radiador para o carburador.",
      "Indicar a temperatura quando o fluxo de água diminuir.",
      "Permitir a passagem de água do motor para o radiador quando a temperatura ideal for atingida."
    ],
    "answer": 3,
    "explicacao": "Ela controla a circulação do líquido de arrefecimento conforme a temperatura."
  },
  {
    "question": "O pedestre que, estando a uma distância igual ou menor que 50 metros de uma faixa de pedestres, passarela, passagem aérea ou subterrânea e não se dirigir até estes locais para atravessar, estará sujeito à multa no valor de:",
    "options": [
      "R$ 88,38.",
      "R$ 130,16.",
      "R$ 195,23.",
      "R$ 44,19."
    ],
    "answer": 3,
    "explicacao": "Valor da multa específica para essa infração de pedestre é R$ 44,19."
  },
  {
    "question": "Ao atravessar uma passagem de nível com uma ferrovia, sem cancela, você deve:",
    "options": [
      "Reduzir a velocidade e atravessar a via férrea.",
      "Parar o veículo, olhar para ambos os lados e efetuar o cruzamento com segurança.",
      "Buzinar antes de atravessar.",
      "Acender os faróis do veículo."
    ],
    "answer": 1,
    "explicacao": "Regra básica: parar, observar os dois lados e só cruzar com segurança."
  },
  {
    "question": "Conduzir veículo com qualquer das placas falsificadas, caracterizará:",
    "options": [
      "Infração gravíssima (3 vezes), multa e recolhimento da CNH.",
      "Infração gravíssima, multa e remoção do veículo.",
      "Infração grave, multa e recolhimento das placas.",
      "Infração leve, multa e retenção do veículo."
    ],
    "answer": 1,
    "explicacao": "Placa falsificada é infração gravíssima com multa e remoção."
  },
  {
    "question": "Mesmo sabendo ser uma infração, muitas pessoas cortam as molas do veículo para deixá-lo mais baixo. Esse procedimento prejudica diretamente:",
    "options": [
      "A estabilidade do veículo.",
      "O desempenho das lonas.",
      "As peças móveis do motor.",
      "A vida útil do disco de fricção."
    ],
    "answer": 0,
    "explicacao": "Alterar molas derruba a estabilidade, aumentando risco de perda de controle."
  },
  {
    "question": "A poluição visual contribui para:",
    "options": [
      "Irritar e provocar mudanças de comportamento ao motorista.",
      "Intoxicar o ambiente.",
      "Desviar a atenção de pedestres e motoristas.",
      "Motoristas e pedestres circularem desordenadamente."
    ],
    "answer": 2,
    "explicacao": "Excesso de elementos visuais desvia atenção e aumenta risco."
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
    "explicacao": "Não remove capacete; imobiliza e aguarda socorro para evitar agravar lesões cervicais."
  },
  {
    "question": "Ao aproximar-se de qualquer tipo de cruzamento, o condutor deve, exceto:",
    "options": [
      "Manter a velocidade.",
      "Transitar em velocidade reduzida.",
      "Transitar em velocidade moderada.",
      "Dar passagem a pedestres."
    ],
    "answer": 0,
    "explicacao": "Em cruzamento, manter velocidade não é conduta segura; deve reduzir/moderar e priorizar pedestres."
  },
  {
    "question": "Transitar com o veículo desligado ou desengrenado, em declive, gerará:",
    "options": [
      "Multa média, retenção do veículo e aumento no consumo de combustível.",
      "Multa leve e aumento no consumo de combustível.",
      "Multa grave e economia de combustível.",
      "Multa gravíssima, remoção do veículo e economia de combustível."
    ],
    "answer": 0,
    "explicacao": "Descer ‘com banguela’ é infração e perigoso; a penalidade prevista é de natureza média."
  },
  {
    "question": "Nas vias urbanas, a operação de retorno deverá ser feita:",
    "options": [
      "Nos locais determinados ou que ofereçam condições de segurança e fluidez.",
      "Nas passagens de nível.",
      "Nas pontes.",
      "Utilizando-se do acostamento."
    ],
    "answer": 0,
    "explicacao": "Retorno só em local permitido e seguro para manter a fluidez."
  },
  {
    "image": "quest28.png",
    "question": "A placa R-16 significa:",
    "options": [
      "Largura permitida por eixo.",
      "Largura limitada.",
      "Largura máxima por eixo.",
      "Largura máxima permitida."
    ],
    "answer": 3,
    "explicacao": "R-16 regulamenta a largura máxima permitida do veículo/carga."
  },
  {
    "question": "Ao atravessarmos por locais onde haja fumaça devemos:",
    "options": [
      "Diminuir a velocidade.",
      "Fechar os vidros, diminuir a velocidade e ligar os faróis baixos.",
      "Fechar os vidros e ligar os faróis altos.",
      "Aumentar a velocidade."
    ],
    "answer": 1,
    "explicacao": "Com baixa visibilidade: farol baixo, vidros fechados e velocidade reduzida."
  },
  {
    "question": "De acordo com os sinais sonoros dos agentes de trânsito, marque a resposta que corresponda a determinação de mandar o veículo seguir:",
    "options": [
      "Três silvos breves.",
      "Um silvo longo.",
      "Dois silvos breves.",
      "Um silvo breve."
    ],
    "answer": 3,
    "explicacao": "Um silvo breve = siga; dois breves = pare; três breves = atenção; um longo = diminua."
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