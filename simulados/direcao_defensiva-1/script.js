const usuarioSalvo = JSON.parse(localStorage.getItem("usuarioLogado") || "{}");

window.currentUser = {};

if (usuarioSalvo.email) {
  window.currentUser.email = usuarioSalvo.email;
}
if (usuarioSalvo.nome) {
  window.currentUser.nome = usuarioSalvo.nome;
}

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
    "question": "distância percorrida pelo veículo do momento em que o motorista percebe efetivamente o pêrigo e aciona os freios é chamado de tempo de:",
    "options": [
      "Tempo de reação",
      "Tempo de frenagem",
      "Tempo de seguimento",
      "Tempo de parada"
    ],
    "answer": 0,
    "explicacao": "Esse trecho é a distância de reação: o carro anda enquanto o cérebro entende o perigo e o pé chega até o pedal. Só depois disso começa a frenagem."
  },
  {
  "question": "Aquaplanagem ou hidroplanagem acontece quando o veículo, ao passar por uma pista com água, perde a resposta da direção e dos freios, como se estivesse deslizando. Esse fenômeno significa:",
  "options": [
    "perda de estabilidade do veiculo",
    "derrapagem do veículo em pista seca",
    "perda da aderência dos pneus com o solo em qualquer tipo de situação",
    "perda da aderência dos pneus devido uma fina camada de água no solo"
  ],
  "answer": 3,
  "explicacao": "Aquaplanagem ou hidroplanagem é a perda do contato dos pneus com o solo por causa de uma fina camada de água. O carro parece deslizar e não responde bem aos comandos. Nessas situações, alivie o acelerador, segure firme o volante e evite frear bruscamente."
  },

  {
    "question": "O contato dos pneus com o solo e chamado de:",
    "options": ["aderência", "derrapagem", "aquaplanagem", "hidroplanagem"],
    "answer": 0,
    "explicacao": "O contato dos pneus com o solo é chamado de aderência. Sem aderência, o veículo perde estabilidade e pode derrapar. Para manter a aderência, revise os pneus com frequência e evite curvas ou frenagens bruscas, principalmente em pistas molhadas."
  },
  {
  "question": "Quando o motorista insiste em dirigir mesmo estando com sono, cansado, sob efeito de bebidas alcoólicas ou drogas, ele se expõe a riscos sérios. Essas situações são chamadas de condições adversas do:",
  "options": [
    "condutor",
    "passageiros",
    "pedestres",
    "bebida"
  ],
  "answer": 0,
  "explicacao": "Sono, fadiga, álcool e drogas diminuem a capacidade de reação e atenção do condutor, aumentando muito as chances de acidente. Essas são condições adversas do condutor. A recomendação é simples: não dirija nessas condições; descanse ou procure outra forma de transporte."
  },

  {
    "question": "Ao cruzar com outro veículo à noite, utilize a luz baixa. Evite a guerra de faróis. Em caso de ofuscamento, desvie sua visão para:",
    "options": ["Faixa central.", "A faixa da direita.", "A faixa da esquerda.", "O painel do veículo."],
    "answer": 1,
    "explicacao": "Ao cruzar com outro veículo à noite, desvie sua visão para a faixa da direita. Isso ajuda a evitar o ofuscamento causado pelos faróis altos de outros veículos. Nunca olhe diretamente para os faróis de outro veículo, pois isso pode prejudicar sua visão temporariamente. Mantenha sempre a luz baixa ao cruzar com outros veículos para evitar ofuscamento e garantir a segurança de todos na estrada."
  },
  {
    "question": "Tipo de colisão que envolve apenas 1 veículo e não se sabem suas possíveis causas é chamada de:",
    "options": ["colisão misteriosa", "colisão frontal", "colisão lateral", "colisão exata"],
    "answer": 0,
    "explicacao": "Colisão misteriosa é quando um veículo colide com um objeto fixo ou cai em um buraco, e não se sabe exatamente o que causou o acidente. Isso pode ocorrer devido a falhas mecânicas, problemas na pista ou falta de atenção do condutor. Sempre verifique as condições do veículo e da estrada para evitar esse tipo de acidente."
  },
  {
    "question": "Transferência de massa, aderência, força centrípeta, força centrifuga, comportamento sobre esterçante são:",
    "options": ["leis da física que se relacionam ao ato de dirigir", "aceleração de velocidade", "quando o motorista viaja de noite e não enxerga muito bem", "motor está desregulado"],
    "answer": 0,
    "explicacao": "Esses termos são leis da física que se relacionam ao ato de dirigir. Por exemplo, a transferência de massa ocorre quando o veículo faz uma curva, e a aderência é a capacidade dos pneus de manter contato com o solo. Entender essas leis ajuda o motorista a dirigir de forma mais segura e eficiente."
  },
  {
    "question": "São elementos da direção defensiva:",
    "options": ["Conhecimento, habilidade, atenção, previsão e decisão.", "Negligência, imprudência e imperícia.", "Cinto de segurança, encosto de cabeça e airbag.", "Visão, audição, olfato, paladar e tato."],
    "answer": 0,
    "explicacao": "Os elementos da direção defensiva incluem conhecimento, habilidade, atenção, previsão e decisão. Esses fatores ajudam o motorista a antecipar e evitar perigos na estrada, garantindo uma condução mais segura."
  },
  {
    "question": "A desaceleração brusca e o uso incorreto dos freios podem provocar o desgarramento da parte traseira do veículo. Este tipo de reação é chamada de comportamento:",
    "options": ["Sub-esterçante.", "Inseguro.", "Sobre-esterçante.", "Inadequado."],
    "answer": 2,
    "explicacao": "O comportamento sobre-esterçante é quando o motorista desacelera o veículo e o peso do veículo se concentra na frente e desgarra a traseira do veículo. o comportamento sub-esterçante é quando o motorista acelera o veículo e o peso do veículo se concentra na traseira e desgarra a dianteira do veículo. É importante manter uma condução suave e evitar frenagens bruscas para prevenir esse tipo de situação."
  },
  {
    "question": "“Horário de pico” é aquele com tráfego:",
    "options": ["Disperso e com alta velocidade.", "Denso e com baixa velocidade.", "Desenvolvido ao final da madrugada e início do dia.", "Menor em relação a movimentação de pedestres e veículos"],
    "answer": 1,
    "explicacao": "O horário de pico é aquele com tráfego denso e baixa velocidade, geralmente durante as manhãs e finais de tarde, quando muitas pessoas estão indo ou voltando do trabalho. Nesses horários, é importante redobrar a atenção e manter uma distância segura de 2 segundos do veículo da frente para evitar acidentes."
  },
  {
    "question": "Automatismo correto significa:",
    "options": ["Atenção fixa.", "Atenção dispersiva.", "Gesto inconsciente efetuado de forma segura.", "Indisciplina na condução do veículo."],
    "answer": 2,
    "explicacao": "Automatismo correto é quando o motorista executa gestos inconscientes de forma segura, como engatar a marcha ou acionar os freios sem pensar. Isso é importante para manter a atenção na estrada e evitar distrações. No entanto, é fundamental não se deixar levar pelo automatismo e sempre estar atento ao que acontece ao redor."
  },
  {
    "question": "Nas retas, o motorista deve manter suas mãos no volante na posição:",
    "options": ["\"Dez e dez\" ou \"oito e quinze\".", "\"Duas e trinta\" ou \"nove e quinze\".", "\"Nove e quinze\" ou \"dez e dez\".", "\"Dez e trinta\" ou \"nove e vinte\"."],
    "answer": 2,
    "explicacao": "Manter as mãos no volante na posição \"Nove e quinze\" ou \"Dez e dez\" ajuda a garantir um melhor controle do veículo, especialmente em curvas. Essas posições permitem que o motorista tenha uma pegada firme e possa reagir rapidamente a qualquer situação imprevista na estrada."
  },
  {
    "question": "A ciência que estuda a relação do homem e a máquina é chamada de:",
    "options": ["ergonomia", "astronomia", "homofobia", "ciências contábeis"],
    "answer": 0,
    "explicacao": "A ergonomia é a ciência que estuda a relação entre o homem e a máquina, buscando adaptar as condições de trabalho e os equipamentos às necessidades do usuário. No contexto da direção, isso inclui o ajuste do banco, volante e pedais para garantir conforto e segurança ao motorista."
  },
  {
  "question": "Segundo a legislação, sono e vias em véspera de feriados prolongados são classificados, respectivamente, como condições adversas de:",
  "options": [
    "Condutor e trânsito",
    "Tempo e condutor",
    "Condutor e via",
    "Via e trânsito"
  ],
  "answer": 0,
  "explicacao": "Sono é condição adversa do condutor; véspera de feriados prolongados gera fluxo intenso, caracterizando condição adversa de trânsito."
  },
  {
    "question": "Aponte a hipótese de ocorrência de travamento de rodas:",
    "options": ["Quando o atrito do sistema de freios com as rodas é menor que o atrito dos pneus com o solo.", "Quando um veículo em desaceleração tende a 'sair de traseira' em uma curva.", "Quando o atrito do sistema de freios com as rodas é maior que o atrito dos pneus com o solo.", "Quando o atrito do sistema de freios com as rodas é igual ao atrito dos pneus com o solo"],
    "answer": 2,
    "explicacao": "O travamento de rodas ocorre quando o atrito do sistema de freios com as rodas é maior que o atrito dos pneus com o solo. Isso pode acontecer em frenagens bruscas, especialmente em superfícies molhadas ou escorregadias. Para evitar o travamento, é importante frear suavemente e manter uma distância segura do veículo da frente."
  },
  {
    "question": "As motocicletas, em sua maioria, são equipadas com espelhos convexos. Se você olhar um veículo através de um espelho convexo, a posição correta deste veículo é:",
    "options": ["Mais próxima do que aquela em que você pensa que ele está.", "Não há distinção entre espelho convexo e os demais.", "Mais distante do que aquela em que você pensa que ele está.", "Distância real"],
    "answer": 0,
    "explicacao": "Os espelhos convexos são projetados para mostrar uma imagem mais ampla, o que faz com que os objetos pareçam mais distantes do que realmente estão. Isso é importante para motociclistas, pois ajuda a ampliar o campo de visão e a detectar veículos próximos. No entanto, é fundamental lembrar que a distância real pode ser menor do que parece, então sempre verifique os pontos cegos antes de mudar de faixa ou fazer uma manobra."
  },
  {
    "question": "A distância percorrida pelo veículo do momento em que o motorista vê o perigo, até a imobilização total do veículo, é denominada:",
    "options": ["distância de frenagem", "distância de parada", "distância de seguimento", "distância de reação"],
    "answer": 1,
    "explicacao": "A distância percorrida pelo veículo do momento em que o motorista vê o perigo até a imobilização total do veículo é chamada de distância de parada. Essa distância é a soma da distância de reação (tempo que o motorista leva para perceber o perigo e acionar os freios) e a distância de frenagem (distância percorrida enquanto os freios estão sendo acionados) desde quando ve o perigo até parar completamente."
  },
  {
    "question": "Os veículos produzidos a partir de 1º de janeiro de 1999 deverão ser dotados nos assentos dianteiros próximos às portas:",
    "options": ["De cintos de dois pontos sem retrator", "De cintos do tipo três pontos graduável, com retrator.", "O tipo três pontos, com ou sem retrator, ou do tipo Subabdominal.", "Cintos de segurança do tipo subabdominal."],
    "answer": 1,
    "explicacao": "A partir de 1º de janeiro de 1999, os veículos devem ser equipados com cintos de segurança do tipo três pontos graduável, com retrator, nos assentos dianteiros próximos às portas. Esses cintos oferecem maior segurança ao condutor e passageiro, pois distribuem melhor a força do impacto em caso de colisão." 
  },
  {
    "question": "O motociclista deve ter em mente que ele deve ser visto, seja de dia ou trafegando no período noturno. Por isso, é importante:",
    "options": ["Empinar a moto para impressionar os pedestres para ser notado", "usar equipamentos de proteção de cor clara ou vivas, capacetes com cores forte, florescentes ou com branco, se possível, jaquetas de cores mais claras, com detalhes coloridos e que abusem das faixas refletivas", "Buzinar constantemente para ser notado assim evitando acidentes", "Trafegar pela calçada pois assim estará mais seguro"],
    "answer": 1,
    "explicacao": "Para ser visto, é importante usar equipamentos de proteção de cor clara ou vivas, capacetes com cores fortes, florescentes ou brancos, e jaquetas com detalhes coloridos e faixas refletivas. Isso aumenta a visibilidade do motociclista, especialmente à noite ou em condições de baixa luminosidade. Evite buzinar constantemente, pois isso pode ser irritante e não garante que você será notado. Nunca trafegue pela calçada, pois isso é perigoso e ilegal."
  },
  {
    "question": "Qual a posição correta do banco do motorista para ter uma postura correta ao dirigir?",
    "options": ["O encosto do banco deve estar em um ângulo de 100 a 120 graus", "O encosto do banco deve estar em um ângulo de 60 a 90 graus", "O encosto do banco deve estar em um ângulo de 100 a 160 graus", "A perna deve ficar esticada a todo momento esse é o ângulo correto"],
    "answer": 0,
    "explicacao": "A posição correta do banco do motorista é quando o encosto está em um ângulo de 100 a 120 graus. Isso permite que o motorista mantenha uma postura confortável e adequada, com os pés alcançando facilmente os pedais e as mãos no volante na posição correta. Evite sentar muito inclinado ou muito ereto, pois isso pode causar desconforto e fadiga durante longas viagens."
  },
  {
    "question": "Sobre acidentes de trânsito podemos afirmar que a maioria deles está associada a:",
    "options": ["Falhas mecânicas.", "Deficiência da via.", "Falta de sinalização.", "Falhas humanas."],
    "answer": 3,
    "explicacao": "A maioria dos acidentes de trânsito está associada a falhas humanas, Por isso, é fundamental que os motoristas estejam sempre atentos e respeitem as regras de trânsito para garantir a segurança de todos."
  },
  {
    "question": "Das alternativas abaixo, qual delas não faz parte dos fundamentos da direção defensiva:",
    "options": ["Interação e popularidade", "Conhecimento e decisão", "Habilidade e previsão", "Atenção e Habilidade"],
    "answer": 0,
    "explicacao": "A direção defensiva é uma abordagem proativa para a condução, que envolve conhecimento, habilidade, atenção, previsão e decisão. Interação e popularidade não são fundamentos da direção defensiva. O foco deve ser sempre na segurança e na prevenção de acidentes."
  },
  {
    "question": "Ao dirigir em uma rodovia, ocorre uma situação de ventos laterais fortes. Nessa situação, você:",
    "options": ["Fecha as janelas do veículo e continua com a mesma velocidade.", "Abre a janela do veículo e continua com a mesma velocidade.", "Reduz a marcha do veículo adotando uma Velocidade compatível com a situação e abre os vidros.", "Mantém a velocidade normal."],
    "answer": 2,
    "explicacao": "Ao dirigir em uma rodovia com ventos laterais fortes, é importante reduzir a marcha do veículo e adotar uma velocidade compatível com a situação. Isso ajuda a manter o controle do veículo e evitar acidentes. Além disso, ABRIR OS VIDROS pode ajudar a equilibrar a pressão do ar dentro do veículo, mas sempre priorize a segurança."
  },
  {
    "question": "Entre outros efeitos, a ingestão de álcool pode provocar no condutor:",
    "options": ["Visão difusa e agilidade.", "Melhor capacidade de raciocínio lógico.", "Diminuição da capacidade de visualização.", "Melhora da capacidade de raciocínio."],
    "answer": 2,
    "explicacao": "A ingestão de álcool pode provocar uma série de efeitos negativos no condutor, incluindo diminuição da capacidade de visualização, comprometimento da coordenação motora e redução dos reflexos. Isso aumenta significativamente o risco de acidentes. Nunca dirija sob efeito de álcool ou drogas, pois isso coloca em risco não apenas a sua vida, mas também a de outros usuários da via."
  },
  {
    "question": "São tipos de direção defensiva:",
    "options": ["Disciplinar e Legal.", "Preventiva e Corretiva.", "Eficiente e Utilitária.", "Segura e Insegura."],
    "answer": 1,
    "explicacao": "A direção defensiva pode ser classificada como preventiva e corretiva. A direção preventiva envolve antecipar e evitar perigos, enquanto a direção corretiva é a capacidade de reagir adequadamente a situações inesperadas. Ambas são essenciais para garantir a segurança no trânsito."
  },
  {
    "question": "A cegueira momentânea causada pelo excesso de luz provoca:",
    "options": ["Ofuscamento.", "Catarata.", "Penumbra.", "Nevoeiro."],
    "answer": 0,
    "explicacao": "A cegueira momentânea causada pelo excesso de luz é conhecida como ofuscamento. Isso pode ocorrer ao dirigir à noite com faróis altos ou ao cruzar com veículos que não estão usando a luz baixa. Para evitar o ofuscamento, mantenha os faróis na posição correta e desvie o olhar para áreas menos iluminadas da estrada."
  },
  {
    "question": "Às imprudências cometidas pelo condutor chamamos de ato:",
    "options": ["Consciente.", "Correto.", "Inseguro.", "Seguro."],
    "answer": 2,
    "explicacao": "As imprudências cometidas pelo condutor são consideradas atos inseguros. Isso inclui comportamentos como excesso de velocidade, desrespeito às sinalizações e distrações ao volante. Esses atos aumentam significativamente o risco de acidentes e devem ser evitados a todo custo."
  },
  {
    "question": "Com o acúmulo de água na pista pode ocorrer a aquaplanagem se o veículo estiver:",
    "options": ["Em velocidade muito reduzida.", "Em velocidade alta e pneus carecas.", "Com problemas nos freios.", "Com folga na direção."],
    "answer": 1,
    "explicacao": "A aquaplanagem ocorre quando o veículo está em velocidade alta e os pneus estão carecas, fazendo com que percam contato com o solo devido a uma fina camada de água na pista. Isso pode levar a perda de controle do veículo. Para evitar a aquaplanagem, reduza a velocidade em pistas molhadas e mantenha os pneus em bom estado."
  },
  {
    "question": "Em uma curva, a diminuição brusca da velocidade provoca transferência de massa fazendo com que o eixo dianteiro fique mais:",
    "options": ["Pesado que o eixo traseiro, tendendo a \"desgarrar a traseira\".", "Leve que o eixo traseiro, tendendo a \"desgarrar a dianteira\".", "Pesado que o eixo traseiro, tendendo a \"desgarrar a dianteira\".", "Leve que o eixo traseiro tendendo a \"desgarrar a traseira\"."],
    "answer": 0,
    "explicacao": "Em uma curva, a diminuição brusca da velocidade provoca transferência de massa, fazendo com que o eixo dianteiro fique mais pesado que o eixo traseiro, o que pode levar a \"desgarrar a traseira\" do veículo. Isso significa que a parte traseira do veículo pode perder aderência e deslizar, aumentando o risco de acidentes. Para evitar isso, é importante reduzir a velocidade suavemente ao entrar em curvas e manter uma distância segura dos outros veículos."
  },
  {
    "question": "Em pequenas manobras é permitido ao condutor:",
    "options": ["Deixar de usar o cinto de segurança.", "Transitar em marcha a ré.", "Deixar de usar o capacete de segurança.", "Transitar com o veículo desligado."],
    "answer": 1,
    "explicacao": "Em pequenas manobras, como estacionar, é permitido ao condutor transitar em marcha a ré. No entanto, é fundamental usar o cinto de segurança e, no caso de motocicletas, o capacete de segurança, independentemente da distância percorrida. A segurança deve ser sempre a prioridade."}
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
