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
"question": "Em pleno dia, ao ingressar em um túnel urbano bem iluminado, o condutor mantém apenas a DRL (luz de rodagem diurna) acesa e não aciona a luz baixa. Nessa situação, a conduta é classificada como:",
"options": ["Infração média, por deixar de manter acesa a luz baixa em túnel durante o dia", "Infração leve", "Infração grave", "Infração gravíssima"],
"answer": 0,
"explicacao": "Mesmo com DRL e mesmo que o túnel seja bem iluminado, a regra é manter a LUZ BAIXA acesa em túneis durante o dia. Deixar de fazê-lo é infração MÉDIA. Base legal: norma do art. 40, I, b, e tipificação no art. 250, I, b, do CTB. LEGJUR.COM - Vade Mécum Digital+1"
},
{
"question": "João conduz um automóvel particular em via urbana sem jamais ter sido habilitado (não possui CNH, PPD nem ACC). Qual a classificação correta da conduta?",
"options": ["Infração leve com remoção do veículo", "Infração grave com retenção do veículo", "Infração gravíssima, multa (3x) e retenção do veículo até apresentação de condutor habilitado", "Crime de trânsito sem infração administrativa"],
"answer": 2,
"explicacao": "Dirigir sem possuir CNH/PPD/ACC é infração GRAVÍSSIMA (multa com fator multiplicador 3) e o veículo fica retido até que um condutor habilitado se apresente. Base legal: art. 162, I, do CTB. CTB Digital"
},
{
"question": "Criança com 4 anos e 1,05 m é transportada no banco traseiro usando apenas o cinto de 3 pontos (sem assento de elevação). O trajeto é curto, dentro do bairro. Essa situação é:",
"options": ["Permitida em trajeto urbano curto", "Permitida se o banco for traseiro e a criança estiver com cinto", "Infração gravíssima, pois nessa faixa etária/estatura é obrigatório o assento de elevação (booster)", "Infração leve com advertência por escrito"],
"answer": 2,
"explicacao": "Para crianças menores de 10 anos que ainda não atingiram 1,45 m, valem os dispositivos de retenção. Aos 4 anos (~15–36 kg), regra geral é o assento de elevação (booster) com cinto. Sem o dispositivo, é infração GRAVÍSSIMA. Base legal: Resolução CONTRAN 819/2021 (e art. 168 do CTB). Serviços e Informações do Brasil+1"
},
{
"image": "r6c.png",
"question": "O condutor para por 30 segundos, em fila dupla, para desembarque rápido exatamente onde há a placa R-6c. Essa sinalização indica:",
"options": ["Proibido estacionar; parada rápida para embarque/desembarque é permitida", "Estacionamento regulamentado no trecho", "Proibido parar e estacionar (nem embarque/desembarque é permitido)", "Proibido trânsito de pedestres"],
"answer": 2,
"explicacao": "A R-6c proíbe PARAR E ESTACIONAR: não pode nem parar para embarque/desembarque. Confundir com a R-6a (só proíbe estacionar) é a pegadinha clássica. Doutor Multas+1"
},
{
"question": "Após um sinistro com vítima, o condutor deixa o local sem prestar ou providenciar socorro, mesmo podendo fazê-lo com segurança. Ele comete:",
"options": ["Apenas infração grave", "Infração gravíssima e também CRIME de trânsito", "Somente medida administrativa", "Apenas infração leve se a vítima não estiver em faixa de pedestre"],
"answer": 1,
"explicacao": "Há duas esferas: administrativa (art. 176, I, infração GRAVÍSSIMA com suspensão) e penal (art. 304, crime de omissão de socorro). Não prestar socorro configura ambas. CTB Digital+1"
},
{
"question": "Durante blitz, policiais verificam que os pneus estão sem sulcos visíveis (carecas). O procedimento correto é:",
"options": ["Reter o veículo para regularização (infração grave)", "Aplicar multa e liberar normalmente", "Aplicar multa sem pontuação", "Advertir verbalmente e liberar"],
"answer": 0,
"explicacao": "Pneus comprometendo a segurança = veículo em mau estado de conservação. É infração GRAVE, com medida administrativa de retenção para regularização. Base: art. 230, XVIII, CTB. CTB Digital+1"
},
{
"question": "Em qual situação o uso do som automotivo NÃO configura infração de trânsito?",
"options": ["Quando o equipamento opera em volume e frequência autorizados pela legislação/CONTRAN", "Quando é audível do lado externo até 10 metros", "Quando for de dia, independentemente do volume", "Quando o veículo estiver em rodovia, sem residências próximas"],
"answer": 0,
"explicacao": "A infração do art. 228 ocorre quando o som é usado em volume/frequência não autorizados. Se está dentro dos limites e regras aplicáveis, não há infração. Atenção à pegadinha: não existe ‘tá liberado porque é de dia’. CTB Digital+1"
},
{
"question": "Ana retirou um veículo 0 km da concessionária e decidiu ‘rodar alguns dias’ sem qualquer placa de identificação até finalizar o emplacamento. Isso é:",
"options": ["Permitido por até 30 dias após a compra", "Permitido se circular apenas à noite", "Proibido e classificado como infração gravíssima, com remoção do veículo", "Permitido apenas em rodovias federais"],
"answer": 2,
"explicacao": "Conduzir sem qualquer uma das placas de identificação é infração GRAVÍSSIMA, com remoção do veículo. Não há tolerância geral. Base: art. 230, IV, do CTB. CTB Digital+1"
},
{
"question": "Em via com limite de 60 km/h, um carro é aferido a 95 km/h (mais de 50% acima do limite). A classificação e a penalidade principal são:",
"options": ["Infração grave, sem suspensão", "Infração gravíssima, multa (x3) e suspensão do direito de dirigir", "Infração média com advertência", "Infração leve se a via estiver vazia"],
"answer": 1,
"explicacao": "Exceder o limite em MAIS DE 50% é infração GRAVÍSSIMA com multiplicador 3 e penalidade de suspensão do direito de dirigir, independentemente da pontuação. Base: art. 218, III, CTB. CTB Digital+1"
},
{
"question": "O semáforo abre (luz verde) e há pedestre completando a travessia fora da faixa. O sinal verde indica:",
"options": ["Atenção: prepare-se para parar", "Parada obrigatória imediata", "Livre passagem, desde que a via esteja livre e preservadas as prioridades (ex.: pedestres)", "Preferência ao pedestre apenas se estiver na faixa"],
"answer": 2,
"explicacao": "Verde significa que o condutor pode seguir, MAS respeitando as condições de segurança e prioridades (pedestre em travessia tem prioridade). Verde não é salvo-conduto."
},
{
"question": "Num acidente com APENAS danos materiais e risco de congestionamento, os condutores devem:",
"options": ["Acionar obrigatoriamente a PM e aguardar no local", "Retirar os veículos da via para garantir segurança e fluidez, após sinalizar e registrar provas (fotos)", "Esperar a perícia, ainda que bloqueie a via", "Abandonar o veículo e aguardar o guincho"],
"answer": 1,
"explicacao": "Sem vítimas, a regra é adotar providências para a segurança/fluidez, removendo os veículos do local após a devida sinalização e registro. Deixar de remover quando necessário caracteriza infração (art. 178, CTB). CTB Digital+1"
},
{
"question": "Um motorista faz aproximações bruscas e acelera para intimidar pessoas que atravessam a via. Essa conduta é:",
"options": ["Infração leve", "Infração grave", "Infração gravíssima, sujeita a multa e suspensão do direito de dirigir", "Apenas advertência por escrito"],
"answer": 2,
"explicacao": "Dirigir AMEAÇANDO pedestres ou demais veículos é infração GRAVÍSSIMA, com suspensão do direito de dirigir. Base legal: art. 170 do CTB. CTB Digital+1"
},
{
"question": "Ao perceber um derramamento de combustível na pista após pane em seu veículo, o motorista deve:",
"options": ["Ignorar, pois a responsabilidade é só da concessionária/município", "Sinalizar imediatamente o local a distância segura e acionar as autoridades/operadora da via", "Lavar o local com água para diluir o produto", "Seguir viagem sem avisar ninguém"],
"answer": 1,
"explicacao": "Derramamentos aumentam o risco de colisões e de incêndio. O correto é sinalizar preventivamente (triângulo, pisca-alerta quando imobilizado) e acionar a autoridade/concessionária. ‘Lavar com água’ espalha e agrava o risco."
},
{
"question": "Num cruzamento com placa “PARE” e aparente ausência de veículos, a conduta correta é:",
"options": ["Parar completamente antes de avançar", "Seguir sem parar, já que não há risco visível", "Apenas reduzir e avançar", "Usar a buzina para ‘avisar’ que vai passar"],
"answer": 0,
"explicacao": "A placa R-1 (PARE) impõe PARADA OBRIGATÓRIA, ainda que não haja fluxo aparente. Avançar o ‘pare’ é enquadrado no art. 208 do CTB (gravíssima). CTB Digital+1"
},
{
"question": "Em via pública, três amigos decidem disputar aceleração com seus carros (“racha”) fora de evento autorizado. Isso é:",
"options": ["Infração administrativa leve", "Infração grave apenas à noite", "CRIME de trânsito, com detenção e suspensão/proibição de habilitar-se", "Conduta atípica se a via estiver vazia"],
"answer": 2,
"explicacao": "Participar de corrida/disputa/exibição de perícia NÃO autorizada em via pública é CRIME de trânsito (art. 308 do CTB), além das medidas administrativas cabíveis. CTB Digital+1"
},
{
"question": "Descida longa: o pedal de freio ‘vai ao fundo’ e o veículo perde a capacidade de frenagem. A conduta mais segura e tecnicamente adequada é:",
"options": ["Desligar o motor para ‘segurar’ o carro", "Reduzir marchas para usar o freio-motor e acionar o freio de estacionamento de forma GRADUAL/intermitente, buscando área de escape", "Jogar o carro contra o meio-fio imediatamente", "Colocar o veículo em ponto morto para não forçar o motor"],
"answer": 1,
"explicacao": "Não se desliga motor nem se coloca em ponto morto. Use o freio-motor (reduções), aplique o freio de estacionamento gradualmente e procure área de escape. Atuar com suavidade ajuda a recuperar alguma aderência e manter controle direcional."
},
{
"question": "Rodar com pneus sistematicamente abaixo da pressão recomendada tende a provocar:",
"options": ["Maior economia de combustível e menor desgaste", "Aumento do consumo, aquecimento e desgaste irregular, com piora da dirigibilidade", "Maior estabilidade em curvas", "Nenhum efeito relevante à segurança"],
"answer": 1,
"explicacao": "Pressão abaixo do especificado eleva a resistência ao rolamento (aumenta o consumo), deforma a carcaça, aquece o pneu e causa desgaste irregular, além de piorar a resposta em curvas e frenagens."
},
{
"question": "Em qual cenário a ultrapassagem pela direita é admitida pelo CTB?",
"options": ["É sempre permitida quando a via tem duas faixas no mesmo sentido", "Quando o veículo à frente indicar claramente a intenção de converter à esquerda e houver espaço para fazê-lo com segurança", "É permitida apenas em rodovias de pista dupla", "É proibida em qualquer hipótese"],
"answer": 1,
"explicacao": "Regra geral: ultrapassa-se pela esquerda. Exceção clássica: quando o da frente sinaliza conversão à esquerda e há espaço seguro pela direita (entre outras situações específicas de transposição de faixas). Base: art. 29, X e §1º, CTB. CTB Digital+1"
},
{
"question": "Em caso de atropelamento, ao chegar primeiro ao local, a primeira medida correta é:",
"options": ["Mover a vítima para liberar a via", "Sinalizar o local a distância segura e acionar o socorro especializado (192/193)", "Colocar a vítima sentada para ‘respirar melhor’", "Oferecer água à vítima consciente"],
"answer": 1,
"explicacao": "Priorize a SEGURANÇA da cena (sinalização) e a ativação do socorro. Evite movimentar a vítima sem técnica, pois pode agravar lesões (especialmente coluna)."
},
{
"question": "Deixar de indicar, com antecedência e de forma clara, a manobra (gesto de braço ou seta) ao iniciar a marcha, parar, mudar de faixa ou de direção é:",
"options": ["Infração média", "Infração grave", "Infração leve", "Conduta atípica (não é infração)"],
"answer": 1,
"explicacao": "A falta de sinalização prévia de manobra é infração GRAVE (art. 196 do CTB). Pegadinha comum: marcar como ‘média’. CTB Digital+1"
},
{
"question": "A aquaplanagem ocorre quando:",
"options": ["Os pneus não suportam o peso do veículo em alta velocidade", "Se forma uma lâmina d’água que impede o contato do pneu com o pavimento", "O motor superaquece por falta de arrefecimento", "Há falha no sistema elétrico após atravessar poças"],
"answer": 1,
"explicacao": "Aquaplanagem é a perda de contato do pneu com o piso devido à lâmina d’água, reduzindo drasticamente a dirigibilidade e a eficiência de frenagem. Reduza velocidade e não faça movimentos bruscos."
},
{
"question": "A função principal do airbag é:",
"options": ["Reduzir o consumo de combustível", "Atenuar lesões dos ocupantes em colisões como item de segurança passiva", "Melhorar a aerodinâmica do veículo", "Aumentar a velocidade final"],
"answer": 1,
"explicacao": "Airbags trabalham junto com o cinto (nunca substituem) para reduzir lesões em impactos. O uso do cinto é indispensável mesmo com airbags."
},
{
"question": "Sobre suspensão do direito de dirigir por pontos na CNH, assinale a opção correta:",
"options": ["Aplica-se a depender dos pontos: 20 (se houver 2 ou mais infrações gravíssimas), 30 (se houver 1 gravíssima) ou 40 (se não houver gravíssimas); para condutor EAR, o limite é 40 independentemente da natureza das infrações", "Ocorre somente ao atingir 40 pontos, em qualquer caso", "Ocorre sempre com 20 pontos, como era antes da Lei 14.071/2020", "Só ocorre se houver crime de trânsito no período"],
"answer": 0,
"explicacao": "O modelo é escalonado: 20/30/40, conforme a quantidade de infrações gravíssimas no período de 12 meses. Para quem exerce atividade remunerada (EAR), o limite é 40 independentemente da natureza. Base: art. 261, I e §5º, CTB. JusBrasil+1"
},
{
"question": "Ao passar por uma poça, o motorista acelera e lança água sobre pedestres na calçada. Essa conduta é:",
"options": ["Infração leve", "Infração média", "Infração grave", "Infração gravíssima"],
"answer": 1,
"explicacao": "Usar o veículo para arremessar água ou detritos sobre pedestres/veículos é infração MÉDIA (art. 171, CTB). CTB Digital+1"
},
{
"question": "Em vítima com suspeita de fratura fechada no membro inferior após queda de moto, a conduta mais adequada é:",
"options": ["‘Colocar no lugar’ para alinhar o osso", "Imobilizar o segmento (acima e abaixo da fratura), manter o conforto térmico e acionar o socorro", "Massagear a região para aliviar a dor", "Colocar a vítima para andar lentamente até a calçada"],
"answer": 1,
"explicacao": "Nunca ‘reduza’ fraturas no local; imobilize, evite movimentos, mantenha o conforto e chame atendimento. Movimentações inadequadas podem agravar lesões."
},
{
"question": "Durante operação de trânsito, o condutor desobedece ordem de agente (ex.: ignora determinação de parar). Essa conduta é:",
"options": ["Infração leve", "Infração grave", "Infração gravíssima", "Apenas medida administrativa sem multa"],
"answer": 1,
"explicacao": "Desobedecer às ordens da autoridade/agente de trânsito é infração GRAVE (art. 195 do CTB). Pegadinha: confundir com ‘transpor bloqueio policial’ (art. 210), que é gravíssima. CTB Digital +1"
},
{
"question": "No semáforo, a distância de parada atrás do veículo à frente deve permitir que o condutor:",
"options": ["Arranque mais rápido quando abrir", "Veja os pneus traseiros do veículo à frente tocando o chão, sem precisar se aproximar demais", "Use a buzina caso o da frente demore a sair", "Encoste o para-choque no do veículo à frente para ‘ganhar espaço’"],
"answer": 1,
"explicacao": "Regra prática de direção defensiva: manter distância que permita ver os pneus traseiros do veículo à frente tocando o solo. Isso preserva espaço para manobra/escape."
},
{
"question": "Estacionar em vaga reservada a idoso (ou PCD) sem a credencial válida configura infração:",
"options": ["Leve", "Média", "Grave", "Gravíssima"],
"answer": 3,
"explicacao": "Estacionar em vaga reservada sem credencial é infração GRAVÍSSIMA (art. 181, XX), com multa e remoção do veículo. CTB Digital"
},
{
"question": "Após colisão sem vítimas e com tráfego intenso, os condutores se recusam a remover os veículos, causando bloqueio. A conduta de NÃO remover, quando necessário para a segurança/fluidez, é:",
"options": ["Infração média", "Infração grave", "Infração gravíssima", "Conduta atípica (não é infração)"],
"answer": 0,
"explicacao": "Deixar de adotar providências para remover o veículo, quando necessário para segurança e fluidez em sinistro SEM vítima, é infração MÉDIA (art. 178 do CTB). JusBrasil"
},
{
"question": "O uso do pisca-alerta é correto quando:",
"options": ["Para avisar que vai mudar de faixa", "O veículo estiver imobilizado ou em situação de emergência (e quando a sinalização exigir)", "Para indicar conversão à esquerda/direita em cruzamentos", "Para advertir sobre lombadas à frente em movimento"],
"answer": 1,
"explicacao": "Pisca-alerta é para IMOBILIZAÇÕES/SITUAÇÃO DE EMERGÊNCIA (e quando a sinalização de regulamentação determinar). Usar em movimento como ‘alerta de lombada’ ou ‘mudança de faixa’ configura infração (art. 251, I e II, CTB)."
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