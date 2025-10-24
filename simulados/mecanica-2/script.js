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
"question": "No painel do veículo, o indicador com o símbolo de um termômetro sobre ondas está aferindo, prioritariamente, a:",
"options": [
"Variação química do fluido de freio no cilindro-mestre.",
"Temperatura do líquido de arrefecimento do motor (mistura água + aditivo).",
"Temperatura do ar no habitáculo (controle do ar-condicionado).",
"Temperatura ambiente externa captada pelo sensor do para-choque."
],
"answer": 1,
"explicacao": "Esse mostrador monitora a temperatura do fluido de arrefecimento do motor. Itens como fluido de freio, ar-condicionado ou sensor externo não são o parâmetro desse ponteiro/alerta."
},
{
"question": "Quanto à conservação e segurança, operar com pneus abaixo da pressão especificada pelo fabricante tende a:",
"options": [
"Ampliar a vida útil do pneu por reduzir o atrito com o solo.",
"Facilitar manobras por aumentar a área de contato sem qualquer efeito adverso.",
"Elevar o conforto sem interferir no consumo de combustível.",
"Provocar desgaste prematuro, aquecimento excessivo e piora do consumo."
],
"answer": 3,
"explicacao": "Pressão baixa aumenta a resistência ao rolamento, esquenta a carcaça e acelera o desgaste, comprometendo estabilidade e economia."
},
{
"question": "Nos motores ciclo Otto, o componente que eleva a tensão elétrica de 12 V para dezenas de milhares de volts, viabilizando a faísca nas velas, é a(o):",
"options": [
"Condensador de ignição, que acumula baixa tensão para descarga lenta.",
"Resistor de supressão, que reduz interferência eletromagnética.",
"Bobina de ignição, que transforma baixa em alta tensão.",
"Distribuidor, que apenas reparte a corrente em baixa tensão."
],
"answer": 2,
"explicacao": "A bobina transforma a baixa tensão da bateria em alta tensão para as velas. Condensador e resistor não geram alta tensão; o distribuidor só distribui o pulso."
},
{
"question": "A circulação forçada do fluido de arrefecimento entre bloco/cabeçote e radiador ocorre, principalmente, pela ação da:",
"options": [
"Mistura ar/combustível no carburador, que cria vácuo auxiliar.",
"Bomba d’água (motobomba), acionada pelo motor.",
"Bomba de óleo, que pressuriza o circuito de lubrificação.",
"Roda d’água aerodinâmica do ventilador do radiador."
],
"answer": 1,
"explicacao": "Quem empurra o fluido de arrefecimento é a bomba d’água. Bomba de óleo atua no lubrificante; carburador e ventilador não fazem esse bombeamento."
},
{
"question": "A fonte primária da energia mecânica que movimenta o veículo, convertendo energia química em trabalho no eixo, é:",
"options": [
"O motor de combustão interna/elétrico (conforme o projeto).",
"A transmissão, que cria a energia a partir das rodas.",
"O motor de partida, que mantém o motor em regime.",
"A bateria, que transforma energia elétrica em movimento permanente."
],
"answer": 0,
"explicacao": "Quem gera trabalho contínuo é o motor principal. Transmissão só transmite; motor de partida apenas dá o arranque; bateria não fornece torque de tração."
},
{
"question": "Para garantir estabilidade direcional e segurança, é procedimento correto e rotineiro no tocante aos pneus:",
"options": [
"Conferir apenas a calibragem, pois o desgaste é perceptível a olho nu.",
"Verificar só o desgaste, pois a pressão se ajusta durante a rodagem.",
"Observar unicamente deformações, já que desgaste e pressão são secundários.",
"Checar calibragem recomendada, desgaste (sulcos/ombros) e deformações na carcaça."
],
"answer": 3,
"explicacao": "Pressão, desgaste e integridade da carcaça precisam ser avaliados em conjunto. Focar em um aspecto e ignorar os demais aumenta o risco."
},
{
"question": "O procedimento de sangria no sistema hidráulico de freios tem como objetivo imediato:",
"options": [
"Expulsar bolhas de ar das tubulações e cilindros, restaurando a firmeza do pedal.",
"Lubrificar o fluido, tornando-o mais espesso para melhorar a frenagem.",
"Elevar a altura do pedal sem trocar componentes.",
"Aumentar a pressão máxima do sistema sem atuação do servo-freio."
],
"answer": 0,
"explicacao": "Ar no circuito comprime e ‘amolece’ o pedal. A sangria remove o ar. Fluido não é lubrificante e sangria não ‘potencializa’ pressão nominal."
},
{
"question": "Nos sistemas de alimentação com carburador, o componente cuja função é preparar a mistura ar–combustível na proporção adequada ao regime do motor é o(a):",
"options": [
"Bomba mecânica/eléctrica, que apenas transfere combustível.",
"Turbocompressor, que só comprime o ar de admissão.",
"Filtro de ar, que apenas retém partículas.",
"Carburador, que dosa e mistura ar e combustível."
],
"answer": 3,
"explicacao": "Carburador dosa e mistura. Bomba só envia combustível; filtro purifica o ar; turbo comprime o ar, mas não mistura em si."
},
{
"question": "A função primária do conjunto de suspensão, em qualquer condição de pista, é:",
"options": [
"Atuar apenas em curvas, reduzindo o rolamento lateral.",
"Eliminar derrapagens em piso molhado.",
"Atenuar impactos e vibrações do piso, mantendo o pneu em contato com o solo.",
"Absorver energia de colisões para evitar danos estruturais."
],
"answer": 2,
"explicacao": "Suspensão mantém aderência e conforto ao filtrar irregularidades. Ela não ‘elimina’ derrapagens nem é um absorvedor de colisão."
},
{
"question": "O papel da válvula termostática no circuito de arrefecimento é:",
"options": [
"Diminuir permanentemente o fluxo de água para o motor trabalhar frio.",
"Bloquear a água rumo ao ‘carburador’, controlando a mistura.",
"Ligar uma lâmpada-piloto quando o fluxo ficar reduzido.",
"Travar/abrir o fluxo para o radiador quando o motor atinge a temperatura de regime."
],
"answer": 3,
"explicacao": "A termostática gerencia a passagem para o radiador conforme a temperatura. Não atua em carburador nem serve de ‘sensor luminoso’."
},
{
"question": "Quanto à função, o sistema de freios deve ser capaz de:",
"options": [
"Moderar a marcha, reduzir velocidade e imobilizar o veículo com controle.",
"Distribuir rotação do motor entre as rodas.",
"Travá-las a seco sempre que acionado, independentemente de aderência.",
"Acelerar e frear simultaneamente para melhor estabilidade."
],
"answer": 0,
"explicacao": "Freios modulam e param o veículo com segurança. Não distribuem torque (diferencial), e travamento cego compromete a dirigibilidade."
},
{
"question": "Em veículos atuais, a assistência à direção que reduz esforço no volante com atuador elétrico (sem bomba hidráulica dedicada) é denominada:",
"options": [
"Direção dinâmica, termo genérico para qualquer assistência.",
"Direção ‘normal’, sem assistência.",
"Direção elétrica (EPS).",
"Direção mecânica, de pinhão e cremalheira sem ajuda."
],
"answer": 2,
"explicacao": "EPS usa motor elétrico para auxiliar. ‘Dinâmica’ é vago; ‘normal/mecânica’ não tem assistência."
},
{
"question": "Sobre injeção eletrônica (substituta do carburador), assinale a alternativa INCORRETA:",
"options": [
"Pode exigir limpeza/verificação periódica de bicos e sensores.",
"Dispensa manutenção preventiva por ser ‘eletrônica’.",
"Falhas de bicos injetores são recorrentes por contaminação de combustível.",
"Tende a melhorar consumo, emissões e dirigibilidade."
],
"answer": 1,
"explicacao": "Ser eletrônica não a torna ‘isenta’ de manutenção. Bicos, filtros e sensores exigem cuidados; a proposta do sistema é eficiência e controle."
},
{
"question": "Ao perceber lâmpadas de freio inoperantes, a conduta técnica e segura é:",
"options": [
"Seguir viagem e ‘avisar’ com a buzina ao frear.",
"Procurar um autoelétrico/oficina para diagnóstico e reparo imediatos.",
"Confiar apenas no freio-motor até chegar em casa.",
"Desconsiderar, já que o freio hidráulico continua funcionando."
],
"answer": 1,
"explicacao": "Luz de freio é comunicação essencial. Rodar sem sinalização traseira aumenta muito o risco de colisão."
},
{
"question": "No painel, o instrumento que registra a distância total percorrida pelo veículo (e, em versões, também trechos parciais) é o:",
"options": [
"Odômetro (total/parcial).",
"Velocímetro.",
"Manômetro.",
"Conta-giros (tacômetro)."
],
"answer": 0,
"explicacao": "Odômetro mede quilômetros rodados; velocímetro indica velocidade instantânea; conta-giros mede rotações; manômetro mede pressões."
},
{
"question": "Para evitar acidentes e leituras falsas, a conferência/complêmento do nível do reservatório do radiador deve ser feita:",
"options": [
"Em qualquer momento, inclusive logo após longas subidas.",
"Com o motor quente, para o fluido circular melhor.",
"Com o motor frio, evitando queimaduras e expansão térmica.",
"Somente no fim da jornada, após desligar faróis e rádio."
],
"answer": 2,
"explicacao": "Sistema pressurizado, quente, pode jorrar fluido e causar queimaduras. Com o motor frio, a leitura é segura e correta."
},
{
"question": "O dispositivo do sistema de emissões que capta e armazena vapores do tanque de combustível, devolvendo-os à admissão, é o:",
"options": [
"Módulo da injeção eletrônica (ECU).",
"Cânister de carvão ativado.",
"‘Canalizador’ de ar de admissão.",
"Todos os anteriores, em conjunto."
],
"answer": 1,
"explicacao": "Quem absorve vapores é o cânister. A ECU comanda, mas não ‘absorve’; ‘canalizador’ não é o componente responsável."
},
{
"question": "Quanto à segurança passiva, o airbag é projetado para:",
"options": [
"Resfriar o motor em sobrecarga.",
"Corrigir postura do condutor.",
"Reduzir lesões graves em impactos, atuando com o cinto.",
"Evitar qualquer falha eletrônica do veículo."
],
"answer": 2,
"explicacao": "Airbag complementa o cinto para mitigar danos em colisões. Não atua em arrefecimento, ergonomia ou eletrônica veicular."
},
{
"question": "Amperímetro, odômetro, comandos de iluminação e do limpador de para-brisa são classificados como:",
"options": [
"Instrumentos e comandos do painel.",
"Órgãos auxiliares do motor.",
"Exclusivamente equipamentos de segurança obrigatórios.",
"Componentes externos do painel (carcaça)."
],
"answer": 0,
"explicacao": "São itens de leitura/comando no painel. Não fazem parte do motor em si e não são ‘externos’ (acabamento)."
},
{
"question": "Antes de uma viagem, a conduta preventiva mínima inclui verificar:",
"options": [
"Funcionamento das setas e luzes de freio.",
"Nível do óleo do motor e do fluido de arrefecimento.",
"Estado das palhetas e dos faróis/lanternas.",
"Todas as alternativas anteriores."
],
"answer": 3,
"explicacao": "Iluminação/sinalização, fluidos e limpadores são checagens básicas de segurança e confiabilidade."
},
{
"question": "Ao girar a chave e o motor sequer dá sinais de partida (sem giro/‘tec’ fraco), a hipótese mais provável recai sobre falha em:",
"options": [
"Alimentação de combustível no tanque vazio.",
"Nível de água do radiador insuficiente.",
"Bateria descarregada/defeito no motor de arranque (circuito de partida).",
"Entupimento do carburador em veículo com injeção eletrônica."
],
"answer": 2,
"explicacao": "Falha de partida sem giro aponta para bateria/arranque. Falta de combustível não impede o motor de girar; nível do radiador não bloqueia o arranque."
},
{
"question": "No combate a princípio de incêndio veicular, a técnica de aplicação correta do extintor é:",
"options": [
"Mirar diretamente o tanque para resfriá-lo.",
"Direcionar o jato à base das chamas, em leque, varrendo horizontalmente.",
"Apontar para o topo da chama, pois o calor sobe.",
"Descargar em qualquer direção para ‘abafar’ o fogo."
],
"answer": 1,
"explicacao": "Extinção eficiente é na base das chamas, com varredura. Mirar o topo/tanque não atua na origem do fogo."
},
{
"question": "Com o motor ainda frio, a direção defensiva mecânica recomenda:",
"options": [
"Acelerar a fundo antes de dar a partida para ‘lubrificar’.",
"Subir o giro repetidas vezes até a temperatura ideal.",
"Evitar acelerações bruscas até a temperatura de trabalho estabilizar.",
"Aguardar aquecimento dos pneus parado, para só então sair."
],
"answer": 2,
"explicacao": "Acelerações bruscas a frio elevam desgaste. O ideal é condução suave até o regime térmico normal."
},
{
"question": "Em qual fase do ciclo de quatro tempos as válvulas de admissão e escape tendem a permanecer fechadas simultaneamente?",
"options": [
"Admissão.",
"Explosão/expansão.",
"Compressão.",
"Nas fases de compressão e de explosão (B e C)."
],
"answer": 3,
"explicacao": "Durante compressão e explosão as válvulas ficam fechadas para selar a câmara e permitir compressão/expansão."
},
{
"question": "A luz indicadora de direção (seta) tem a finalidade de:",
"options": [
"Iluminar a via em neblina intensa (luz de neblina).",
"Sinalizar a intenção de mudar de direção/faixa para a direita ou esquerda.",
"Avisar que o freio de serviço está acionado (luz de freio).",
"Projetar facho longo para ver mais longe (luz alta)."
],
"answer": 1,
"explicacao": "A seta comunica a intenção de manobra lateral. As demais funções pertencem a outros sistemas de iluminação."
},
{
"question": "A lubrificação adequada das partes móveis do motor tem como propósito central:",
"options": [
"Facilitar a partida pela manhã apenas.",
"Tornar engates de marcha mais ‘macios’.",
"Aumentar a potência declarada do motor.",
"Reduzir atrito, aquecimento e desgaste entre superfícies."
],
"answer": 3,
"explicacao": "Óleo cria filme lubrificante que diminui atrito e calor, preservando componentes. Não ‘aumenta potência’ por si só."
},
{
"question": "Espelhos convexos, comuns em motocicletas, apresentam objetos:",
"options": [
"Mais próximos do que aparentam no espelho (parecem mais distantes).",
"Sem diferença perceptível em relação aos planos.",
"Mais distantes do que aparentam (parecem mais próximos).",
"Na distância real, sem distorção."
],
"answer": 0,
"explicacao": "O convexo amplia campo de visão, reduzindo a imagem; por isso o objeto real está MAIS próximo do que aparenta no espelho."
},
{
"question": "Relacione corretamente o instrumento à grandeza que ele mede/indica:",
"options": [
"Amperímetro → nível da água do radiador.",
"Odômetro → nível de combustível.",
"Tacógrafo → pressão dos pneus.",
"Manômetro → pressão do óleo do motor."
],
"answer": 3,
"explicacao": "Manômetro mede pressão (no caso, do óleo). Amperímetro indica corrente elétrica; odômetro mede distância; tacógrafo registra velocidade/tempo/trechos (não pressão)."
},
{
"question": "Considerando os tipos usuais de cintos de segurança, aquele que oferece maior proteção por distribuir esforços no tórax e na pelve, atuando com o airbag, é o:",
"options": [
"Transversal (diagonal simples).",
"Abdominal (subabdominal).",
"De três pontos (abdominal + torácico).",
"Todos protegem igualmente, independentemente do tipo."
],
"answer": 2,
"explicacao": "O cinto de três pontos distribui forças no corpo e funciona em conjunto com airbags. Abdominal/diagonal isolados protegem menos."
},
{
"question": "Identifique o conjunto ao qual pertencem ‘banda de rodagem’, ‘carcaça/lonas’, ‘talões’ e ‘flancos’:",
"options": [
"Conjunto motopropulsor (motor).",
"Sistema de freios de serviço.",
"Conjunto roda (aro).",
"Pneu (carcaça + banda)."
],
"answer": 3,
"explicacao": "Esses termos descrevem partes do pneu: banda (contato com o solo), flancos (laterais), talões (assentamento no aro) e carcaça."
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