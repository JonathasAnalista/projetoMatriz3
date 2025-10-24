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
"question": "Sobre a função da suspensão e dos amortecedores, assinale a opção CORRETA (cuidado com as generalizações):",
"options": [
"Servem para manter o veículo exatamente nas 'características de fábrica', mesmo com pneus carecas.",
"Aumentam propositalmente o desgaste dos pneus para melhorar a aderência.",
"Forçam a perda de controle em curvas para reduzir o rolamento da carroceria.",
"Mantêm a estabilidade do veículo ao absorver irregularidades e manter o pneu em contato com o solo."
],
"answer": 3,
"explicacao": "Suspensão e amortecedores estabilizam o veículo, filtram impactos e preservam o contato pneu–solo. Não aumentam desgaste de propósito e não induzem perda de controle."
},
{
"question": "A válvula termostática, que regula a passagem do fluido quando o motor atinge a temperatura de regime, integra o sistema de:",
"options": [
"Ignição (pois abre quando a vela faísca).",
"Arrefecimento (controla o fluxo para o radiador).",
"Elétrico (é alimentada por fusível dedicado).",
"Alimentação (dosagem de combustível)."
],
"answer": 1,
"explicacao": "A válvula termostática pertence ao arrefecimento; abre/fecha o caminho para o radiador conforme a temperatura. Não dosa combustível nem depende de faísca."
},
{
"question": "Em manutenção básica, a corrosão interna do sistema de arrefecimento tende a aumentar quando o condutor:",
"options": [
"Deixa de usar óleo no motor (que sequer entra no radiador).",
"Deixa de usar óleo no carburador (que nem recebe óleo).",
"Usa apenas água, sem aditivo anticorrosivo/antiespumante no radiador.",
"Faz trocas de óleo e filtro dentro do prazo."
],
"answer": 2,
"explicacao": "Aditivo correto reduz corrosão e cavitação. Óleo do motor não lubrifica o radiador e carburador não recebe óleo."
},
{
"question": "Prevenção de incêndios veiculares envolve, entre outros, procedimentos como:",
"options": [
"Manutenções preventivas em arrefecimento, alimentação, lubrificação e elétrica.",
"Evitar improvisos/adaptações em instalações.",
"Não usar cigarros ou chamas no interior do veículo.",
"Todas as alternativas estão corretas."
],
"answer": 3,
"explicacao": "Incêndio costuma ser falha + combustível + ignição. A soma de cuidados preventivos é o caminho certo."
},
{
"question": "Para reduzir o risco de acidentes, são essenciais (sem cair na pegadinha do “um só resolve”):",
"options": [
"Apenas suspensão e direção.",
"Somente iluminação e setas.",
"Exclusivamente freios e pneus novos.",
"Suspensão/direção, iluminação/sinalização e freios/pneus em bom estado."
],
"answer": 3,
"explicacao": "Segurança é sistêmica: ver, ser visto, controlar e parar. Focar num subsistema e ignorar outros gera risco."
},
{
"question": "Constituem equipamentos de uso obrigatório no veículo, EXCETO:",
"options": [
"Espelhos retrovisores.",
"Macaco (ou dispositivo de elevação) compatível.",
"Ar-condicionado com controle digital.",
"Chave de roda (ou ferramenta equivalente)."
],
"answer": 2,
"explicacao": "Ar-condicionado não é equipamento obrigatório. Retrovisores e itens de troca de pneu são exigidos."
},
{
"question": "O catalisador (conversor catalítico), no sistema de escapamento, tem a função de:",
"options": [
"Promover reações que transformam CO/HC/NOx em gases menos nocivos.",
"Filtrar fisicamente partículas como um filtro de ar.",
"Separar vapor d’água dos demais gases do escape.",
"Aumentar a potência por acelerar moléculas ‘binárias’."
],
"answer": 0,
"explicacao": "É um reator químico (não um filtro) que converte poluentes em substâncias menos agressivas."
},
{
"question": "Diante de falha do motor (engasgos/parada), os dois sistemas a verificar PRIMEIRO, antes de suspeitar do câmbio ou dos freios, são:",
"options": [
"Alimentação (combustível/ar) e ignição (faísca).",
"Lubrificação e freios.",
"Arrefecimento e lubrificação.",
"Alimentação e iluminação."
],
"answer": 0,
"explicacao": "Sem mistura e faísca o motor não funciona. Freio e iluminação não reestabelecem funcionamento."
},
{
"question": "No vocabulário técnico, “debrear” corresponde a:",
"options": [
"Apoiar o pé no freio o tempo todo (mau hábito).",
"Apertar/regular o cabo em toda troca de óleo.",
"Acionar a embreagem para desacoplar motor/transmissão.",
"Mover a alavanca do câmbio sem pisar na embreagem."
],
"answer": 2,
"explicacao": "Debrear = atuar a embreagem. Mover a alavanca sem embreagem danifica o sistema."
},
{
"question": "O dispositivo obrigatório de controle de ruído do motor (silencioso/escapamento) aplica-se a veículos:",
"options": [
"Reboques e semirreboques (que não têm motor).",
"De propulsão humana/tração animal.",
"Automotores a combustão interna.",
"Puramente elétricos, por ruído de combustão inexistente."
],
"answer": 2,
"explicacao": "Quem gera ruído de combustão/escape é o automotor a combustão. Reboque não tem motor; elétrico não tem explosão."
},
{
"question": "Quanto a avarias em para-brisa, fora da área crítica de visão do condutor, admite-se:",
"options": [
"Trincas de até 20 cm sem restrição.",
"Apenas microfissuras de 10 mm.",
"Trinca de até 10 cm (fora da área crítica), respeitadas as normas.",
"Qualquer trinca, desde que não haja descoloração."
],
"answer": 2,
"explicacao": "Fora da área crítica há limites dimensionais. Estouro de limites compromete segurança e aprovação em vistoria."
},
{
"question": "Exemplo de equipamento de segurança OBRIGATÓRIO no veículo:",
"options": [
"Cortina nos vidros traseiros (acessório).",
"Encosto de cabeça ajustado conforme o ocupante.",
"Alarme com sirene.",
"Direção hidráulica/elétrica (assistência)."
],
"answer": 1,
"explicacao": "Encosto de cabeça reduz lesões cervicais. Itens de conforto/alarme não substituem segurança passiva obrigatória."
},
{
"question": "O reforço estrutural montado dentro das portas, que protege a região da bacia/toráx em impactos laterais, é chamado de:",
"options": [
"Encosto de cabeça.",
"Barras laterais de proteção.",
"Carroceria deformável frontal.",
"Airbag de cortina, exclusivamente."
],
"answer": 1,
"explicacao": "As barras laterais limitam intrusão. Airbags laterais/cortina complementam, mas o reforço é estrutural."
},
{
"question": "Para MOTOCICLETAS, é obrigatório possuir, dentre outros, farol dianteiro e espelhos; é DISPENSÁVEL o(a):",
"options": [
"Farol dianteiro (branco/amarelo).",
"Espelhos retrovisores.",
"Para-brisa.",
"Iluminação da placa traseira."
],
"answer": 2,
"explicacao": "Para-brisa não é obrigatório em motocicletas; os demais itens são exigidos para visibilidade/sinalização."
},
{
"question": "Equipamento obrigatório que ajuda na segurança ao realizar manobras de marcha à ré:",
"options": [
"Faróis principais (facho alto).",
"Luz de ré (sinalização e iluminação traseira branca).",
"Luzes de posição dianteiras.",
"Lanternas traseiras (vermelhas)."
],
"answer": 1,
"explicacao": "A luz de ré alerta terceiros e ilumina a área ao recuar. Faróis/lanternas não substituem sua função específica."
},
{
"question": "O circuito cuja função é gerar a FAÍSCA na câmara de combustão dos motores ciclo Otto é o de:",
"options": [
"Ignição (bobina/vela/acionamento).",
"Arrefecimento (radiador).",
"Alimentação (bomba/linha/rail).",
"Injeção (dosagem de combustível)."
],
"answer": 0,
"explicacao": "A injeção dosa o combustível; a ignição, sim, produz a faísca. Arrefecimento não participa da faísca."
},
{
"question": "Sinal típico de problema na queima/mistura é:",
"options": [
"Queima ‘incompleta’ do óleo do motor (não é o objetivo).",
"Emissão de fumaça anormal pelo escapamento.",
"‘Gases na atmosfera’ (afirmação vaga).",
"Regulagem eletrônica do veículo sempre perfeita."
],
"answer": 1,
"explicacao": "Fumaça azul/preta/branca pode indicar mistura rica/óleo/água. Afirmativas vagas não diagnosticam."
},
{
"question": "Em uso normal, para preservar o conjunto térmico, um hábito simples e eficaz é:",
"options": [
"Checar o nível do fluido de arrefecimento regularmente (ex.: semanalmente, com motor frio).",
"Conferir o fluido de freio todo dia sem critério.",
"Lavar o motor semanalmente (risco elétrico).",
"Encerar a lataria (estético)."
],
"answer": 0,
"explicacao": "Conferir nível de arrefecimento evita superaquecimento grave. Lavagens no cofre exigem cautela; estética não influencia térmica."
},
{
"question": "Motores cuja combustão é iniciada por FAÍSCA (e não por autoignição por compressão) incluem:",
"options": [
"Diesel (autoignição por compressão).",
"Vapor (não é motor de combustão interna moderna).",
"Gasolina, etanol e GNV (ciclo Otto).",
"Elétrico (não há combustão)."
],
"answer": 2,
"explicacao": "Ciclo Otto usa vela de ignição (faísca). Diesel autoignita; elétrico não queima combustível."
},
{
"question": "Em uso típico urbano, o componente cuja saturação se acelera em vias empoeiradas e costuma requerer troca por volta de 10 mil km (ou antes, conforme uso) é o:",
"options": [
"Bateria.",
"Fluido de freio.",
"Filtro de ar do motor.",
"Palhetas do limpador."
],
"answer": 2,
"explicacao": "Poeira entope o elemento filtrante e prejudica mistura/desempenho. Intervalo depende do ambiente."
},
{
"question": "Para reduzir atrito e desgaste das partes móveis do motor, o sistema responsável é o de:",
"options": [
"Ignição.",
"Arrefecimento.",
"Lubrificação (óleo/circuito).",
"Elétrico."
],
"answer": 2,
"explicacao": "Filme de óleo separa superfícies, removendo calor e evitando gripagem. Arrefecimento atua no bloco, não na folga direta."
},
{
"question": "Quanto à segurança passiva, o dispositivo que reduz o impacto do corpo contra o interior do veículo em colisões, atuando com o cinto, é o:",
"options": [
"Airbag.",
"Paraquedas veicular.",
"Suspensão (conforto).",
"Almofadas decorativas."
],
"answer": 0,
"explicacao": "Airbag + cinto = dupla de proteção. Almofadas/Suspensão não substituem sistemas de retenção."
},
{
"question": "Conjuntos que, tipicamente, compõem a embreagem de veículos leves:",
"options": [
"Platô, disco de fricção e rolamento de embreagem.",
"Junta homocinética e pivôs (suspensão/transmissão).",
"Pedal e câmbio (comandos, não a embreagem).",
"Molas e amortecedores (suspensão)."
],
"answer": 0,
"explicacao": "O trio clássico da embreagem é platô + disco + rolamento (atuador)."
},
{
"question": "Elementos que pertencem ao sistema de SUSPENSÃO são, principalmente:",
"options": [
"Cilindro-mestre e barra estabilizadora (mistura freio/suspensão).",
"Molas e caixa de direção (direção ≠ suspensão).",
"Coroa/pinhão e pastilhas (diferencial/freio).",
"Molas e amortecedores (com barras/buchas/coifas)."
],
"answer": 3,
"explicacao": "Suspensão = molas + amortecedores + articuladores. Caixa de direção é outro sistema."
},
{
"question": "Rebaixar o veículo cortando molas (além de irregular) afeta diretamente:",
"options": [
"A estabilidade/dirigibilidade (geometria/curso comprometidos).",
"O desempenho das lonas de freio, apenas.",
"As peças móveis internas do motor.",
"A vida útil do disco de embreagem, exclusivamente."
],
"answer": 0,
"explicacao": "Cortar molas altera curso/ângulos de trabalho, reduzendo estabilidade e segurança."
},
{
"question": "Entre os componentes listados, pertencem ao SISTEMA ELÉTRICO de veículos convencionais (especialmente os mais antigos):",
"options": [
"Radiador e ventoinha (térmico).",
"Carburador e filtro de ar (alimentação).",
"Cabeçote, cilindros e pistões (mecânica).",
"Bateria, distribuidor e bobina de ignição."
],
"answer": 3,
"explicacao": "Bateria/bo­­bina/distribuidor compõem o circuito de partida/ignição tradicional. Em projetos recentes, o distribuidor foi substituído por módulos/coil-on-plug."
},
{
"question": "Entre os itens a seguir, assinale o conjunto de SEGURANÇA obrigatória (não confundir com conforto):",
"options": [
"Cinto, ‘válvula de expansão’ e triângulo (válvula é do A/C).",
"Triângulo, macaco e tapete (tapete é acessório).",
"Macaco, ar-condicionado e estepe (A/C é conforto).",
"Airbags, cintos de segurança e encostos de cabeça."
],
"answer": 3,
"explicacao": "Airbag, cinto e apoio de cabeça compõem a segurança passiva. Demais combinações misturam itens não obrigatórios/errados."
},
{
"question": "No painel, o instrumento que informa a TEMPERATURA do motor é o(a):",
"options": [
"Amperímetro (corrente).",
"Termômetro/indicador de temperatura.",
"Odômetro (distância).",
"Manômetro (pressão)."
],
"answer": 1,
"explicacao": "O mostrador de temperatura monitora o fluido de arrefecimento; amperímetro/odômetro/manômetro indicam outras grandezas."
},
{
"question": "O facho baixo é assimétrico (direito ligeiramente mais alto) para que, sem ofuscar o sentido contrário, se consiga principal efeito de:",
"options": [
"Iluminar exclusivamente o acostamento, ignorando as placas.",
"Tornar mais visíveis as placas e a margem direita da via.",
"Alcançar 750 m de visibilidade como o farol alto.",
"Iluminar o capô do veículo para inspeção em movimento."
],
"answer": 1,
"explicacao": "O desnível do farol baixo privilegia a leitura de placas/sinalização à direita, evitando ofuscamento do tráfego oposto."
},
{
"question": "Trepidação no VOLANTE apenas em determinada faixa de velocidade (e não em todas) é indicação típica de:",
"options": [
"Necessidade de balanceamento das rodas.",
"Fluido de freio vencido.",
"Caixa de direção sem graxa.",
"Cambagem fora do padrão (que tende a afetar desgaste, não vibração em faixa específica)."
],
"answer": 0,
"explicacao": "Vibração ‘em faixa’ aponta desequilíbrio dinâmico (balanceamento). Cambagem desalinha e gasta pneu, mas não vibra só em uma faixa."
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