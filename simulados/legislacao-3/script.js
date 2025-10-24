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


const questions = [{
  question: "Organizar e manter o Registro Nacional de Veículos Automotores (RENAVAM) compete, na esfera do órgão máximo executivo de trânsito da União:",
  options: ["ao DETRAN.", "ao CETRAN.", "ao CONTRAN.", "à SENATRAN."],
  answer: 3,
  explicacao: "A SENATRAN (órgão máximo executivo de trânsito da União) centraliza e mantém o RENAVAM, que integra os dados nacionais da frota."
}, {
  question: "A expedição da Permissão para Dirigir (PPD), da Carteira Nacional de Habilitação (CNH), do Certificado de Registro e do Licenciamento Anual é competência:",
  options: ["do DETRAN.", "do CETRAN.", "do CONTRANDIFE.", "da SENATRAN."],
  answer: 0,
  explicacao: "Os órgãos executivos de trânsito dos Estados e do DF (DETRAN) expedem PPD/CNH, CRV e CRLV-e, dentro de sua circunscrição."
}, {
  question: "É competência típica da JARI, no âmbito recursal de 1ª instância:",
  options: ["Cumprir e fazer cumprir a legislação e diretrizes do CONTRAN, no que couber.", "Administrar fundo nacional para segurança e educação de trânsito.", "Julgar os recursos interpostos pelos infratores.", "Coletar dados e elaborar estudos sobre acidentes e suas causas."],
  answer: 2,
  explicacao: "A JARI é órgão colegiado do SNT destinado ao julgamento de recursos contra autuações/penalidades na 1ª instância administrativa."
}, {
  question: "Obedecem à legislação municipal do domicílio ou residência de seus proprietários o registro e o licenciamento dos veículos de:",
  options: ["Somente os ciclomotores e bicicletas.", "Propulsão humana e de tração animal.", "Reboque, semirreboque e bonde.", "Somente os de propulsão humana."],
  answer: 1,
  explicacao: "Veículos de propulsão humana (como bicicleta/carro de mão) e de tração animal são matéria regulatória do Município."
}, {
  question: "A categoria que habilita o condutor a dirigir veículo motorizado (não abrangido pela categoria “A”), com PBT ≤ 3.500 kg e lotação ≤ 8 lugares, excluído o do motorista, é a:",
  options: ["“C”.", "“B”.", "“E”.", "“D”."],
  answer: 1,
  explicacao: "A categoria “B” alcança veículos de passeio e utilitários leves até 3.500 kg de PBT e até 8 passageiros (além do condutor)."
}, {
  question: "Para habilitar-se na categoria “E”, o condutor deverá possuir, no mínimo:",
  options: ["18 anos e 2 anos na categoria “B”.", "21 anos e 2 anos na categoria “B”.", "21 anos e 3 anos na categoria “B”.", "21 anos e 1 ano na categoria “C” ou “D”."],
  answer: 3,
  explicacao: "Exige-se idade mínima de 21 anos e experiência prévia mínima de 1 ano em “C” ou “D”, além dos demais requisitos legais."
}, {
  question: "O condutor que tiver a sua Permissão para Dirigir cassada poderá reiniciar o processo de habilitação, devendo realizar exames de:",
  options: ["Aptidão física e mental, avaliação psicológica e legislação de trânsito, apenas.", "Aptidão física e mental, avaliação psicológica, legislação de trânsito e prática de direção veicular.", "Prática de direção veicular, somente.", "Legislação de trânsito e prática de direção veicular, somente."],
  answer: 1,
  explicacao: "A cassação da PPD impõe novo processo completo: exames médico/psicológico, teórico de legislação e prático de direção."
}, {
  question: "Do condutor de veículo destinado à condução de escolares, exige-se, entre outros requisitos:",
  options: ["Não ter cometido nenhuma infração de trânsito.", "Idade superior a 18 anos.", "Ter sido submetido a Curso Especializado de Transporte Escolar.", "Apresentar Registro Nacional de Transportadores Urbanos."],
  answer: 2,
  explicacao: "Além do curso especializado, exige-se idade mínima de 21 anos e categoria “D”, dentre outros requisitos específicos."
}, {
  question: "A aprendizagem de direção veicular somente poderá realizar-se:",
  options: ["Nos termos, horários e locais estabelecidos pela autoridade de trânsito com circunscrição sobre a via.", "Das 8h às 18h, em qualquer local.", "Apenas em áreas totalmente fechadas ao trânsito.", "Somente no período matutino."],
  answer: 0,
  explicacao: "Cabe à autoridade com circunscrição sobre a via definir condições de tempo, lugar e modo para a prática de aprendizagem."
}, {
  question: "A formação do condutor compreende a realização, dentre outros, de:",
  options: ["Exame escrito e de direção veicular.", "Exame de aptidão física e mental.", "Avaliação psicológica.", "Todas acima estão corretas."],
  answer: 3,
  explicacao: "A formação inclui exames teóricos/práticos e avaliações médica e psicológica, além da carga horária de curso teórico/prático."
}, {
  question: "A idade mínima de 21 anos é exigida aos condutores:",
  options: ["De transporte de perecíveis.", "Das categorias “B” e “C”.", "De transporte coletivo de passageiros e de produtos perigosos.", "De transporte de cargas."],
  answer: 2,
  explicacao: "Para conduzir veículo de transporte coletivo de passageiros ou de produtos perigosos, exige-se idade mínima de 21 anos."
}, {
  question: "A Permissão para Dirigir (PPD) confere ao permissionário o direito de dirigir:",
  options: ["Apenas no Estado da Federação que a expediu.", "Somente no município de residência.", "Em todo o território nacional.", "Exceto em rodovias."],
  answer: 2,
  explicacao: "PPD e CNH têm validade nacional; a restrição é quanto à categoria/observações, não ao território."
}, {
  question: "Após a aprovação no exame teórico de legislação, haverá a expedição:",
  options: ["Do CRLV-e.", "Da LADV.", "Da PPD.", "Da CNH."],
  answer: 1,
  explicacao: "A LADV (Licença para Aprendizagem de Direção Veicular) habilita a prática supervisionada nas condições autorizadas."
}, {
  question: "Para conduzir trator de rodas em via pública, o condutor deve estar habilitado:",
  options: ["Dispensa-se habilitação por se tratar de máquina agrícola.", "Na categoria “A”.", "No mínimo na categoria “B” (ou superior).", "Exclusivamente em “C”, “D” ou “E”."],
  answer: 2,
  explicacao: "Em via pública, exige-se habilitação compatível (mínimo “B”) para conduzir o trator de rodas, observadas as demais regras."
}, {
  question: "Um condutor habilitado na categoria “B” há dois anos e sem registro de mais de uma infração gravíssima nos últimos 12 meses poderá:",
  options: ["Fazer adição da categoria “A”.", "Adicionar a ACC.", "Mudar para a categoria “C”.", "Mudar sua categoria de habilitação para “D”."],
  answer: 3,
  explicacao: "Para “D”, exige-se ≥ 21 anos e experiência: “B” há ≥ 2 anos ou “C” há ≥ 1 ano, além de não ter mais de uma gravíssima no período."
}, {
  question: "É sempre considerado veículo de carga, quanto à espécie:",
  options: ["Carro-de-mão.", "Charrete.", "Triciclo.", "Trator de rodas."],
  answer: 0,
  explicacao: "O carro-de-mão é de propulsão humana e, pela espécie, classifica-se como veículo de carga."
}, {
  question: "Assinale a alternativa INCORRETA:",
  options: ["A CNH de categoria “A” permite conduzir veículos de 2 ou 3 rodas.", "O condutor habilitado em qualquer categoria pode conduzir motos de até 100cc.", "Os condutores respondem pelos atos praticados na direção do veículo.", "Com categoria “E”, o condutor pode conduzir veículos das categorias inferiores, exceto os de 2 ou 3 rodas."],
  answer: 1,
  explicacao: "Somente a categoria “A” autoriza conduzir veículos de 2 ou 3 rodas; não existe “permissão universal” para motos até 100 cm³."
}, {
  question: "É órgão executivo rodoviário dos Estados e do Distrito Federal:",
  options: ["DER.", "DNIT.", "Polícia Rodoviária Federal.", "Todas estão corretas."],
  answer: 0,
  explicacao: "O DER atua na esfera estadual/distrital; o DNIT é federal e a PRF é polícia ostensiva nas rodovias federais."
}, {
  question: "Em caso de morte decorrente de acidente coberto pelo seguro obrigatório, a indenização, segundo a tabela clássica do DPVAT, é de:",
  options: ["R$11.500,00.", "R$2.700,00.", "R$13.500,00.", "Até R$13.500,00."],
  answer: 2,
  explicacao: "Para morte, tradicionalmente adota-se R$ 13.500,00; para invalidez e despesas médicas há tetos específicos distintos."
}, {
  question: "Executar fiscalização de trânsito, como agente por convênio do órgão executivo de trânsito/rodoviário, compete às:",
  options: ["Polícias Militares dos Estados e do Distrito Federal.", "Departamentos de trânsito dos Estados.", "Equipes do DNIT.", "Equipes da SENATRAN."],
  answer: 0,
  explicacao: "As Polícias Militares podem atuar mediante convênio como agentes da autoridade de trânsito, dentro da circunscrição prevista."
}, {
    "question": "Via urbana de sentido único com duas faixas. A faixa da direita é exclusiva para ônibus em horário de pico; não há ciclovia ou faixa própria para ciclomotores. Um ciclomotor licenciado pretende seguir adiante. Segundo o CTB, qual é o posicionamento correto?",
    "options": [
      "Circular pela faixa adjacente à direita (segunda faixa), preferencialmente no centro da faixa, porque a da direita está reservada a outro tipo de veículo; na ausência de exclusividade, deve circular na faixa mais à direita.",
      "Circular pela faixa da direita mesmo sendo exclusiva, pois a regra de manter-se sempre à direita é absoluta e prevalece sobre a exclusividade regulamentada.",
      "Circular pela faixa da esquerda para melhorar a visibilidade do condutor e evitar interferência dos coletivos que utilizam a faixa da direita da via.",
      "Circular pelo acostamento para manter-se fora do fluxo, já que, na falta de faixa própria, o ciclomotor pode utilizar o acostamento em vias urbanas sem restrição."
    ],
    "answer": 0,
    "explicacao": "Os ciclomotores devem ser conduzidos pela direita da pista, preferencialmente no centro da faixa mais à direita; se essa faixa estiver destinada a outro tipo de veículo, o ciclomotor deve circular pela faixa adjacente à da direita (art. 57 e parágrafo único). É vedado usá-los sobre calçadas e não há autorização geral para usar o acostamento em via urbana."
  }, {
  question: "São exemplos de classificação quanto à categoria (CTB art. 96):",
  options: ["Oficial e fabricante.", "Aprendizagem e experiência.", "Particular e aluguel.", "Carga e passageiro."],
  answer: 2,
  explicacao: "Categoria refere-se à destinação administrativa (oficial, particular, aluguel, diplomático etc.); “particular” e “aluguel” são exemplos."
}, {
  question: "Somente poderá realizar o exame de direção veicular para primeira habilitação o candidato que cumprir carga horária mínima de aulas práticas de:",
  options: ["25 h/a para “A” e 25 para “B”.", "20 h/a para “A” ou “B”.", "15 h/a para “A” e 20 para “B”.", "20 h/a para “A” e 15 para “B”."],
  answer: 1,
  explicacao: "A exigência mínima para aulas práticas na primeira habilitação é, em regra, de 20 horas-aula para “A” ou “B”."
}, {
  question: "Veículo misto destinado ao transporte de passageiros e carga no mesmo compartimento denomina-se:",
  options: ["Caminhonete.", "Utilitário.", "Micro-ônibus.", "Camioneta."],
  answer: 3,
  explicacao: "A camioneta é veículo de espécie ‘misto’, projetado para passageiros e carga no mesmo compartimento."
}, {
  question: "Para licenciar um veículo em outro Estado, o proprietário deve, obrigatoriamente:",
  options: ["Alterar os caracteres das placas.", "Pedir autorização ao CONTRAN.", "Dar ciência ao DETRAN do Estado de origem.", "Pedir autorização ao conselho estadual de trânsito."],
  answer: 2,
  explicacao: "A transferência de UF requer comunicação ao DETRAN de origem, além do cumprimento das exigências de registro/licenciamento na nova UF."
}, {
  question: "A carga horária mínima exigida para mudança das categorias “C”, “D” ou “E” é de:",
  options: ["15 h/a.", "25 h/a.", "20 h/a.", "16 h/a."],
  answer: 2,
  explicacao: "Para adição/mudança a categorias C, D ou E, exige-se curso prático/teórico com, no mínimo, 20 horas-aula (conforme normativos vigentes)."
}, {
  question: "Durante o exame prático para a categoria “B”, o candidato derruba um cone de balizamento. Nessa condição, ele será:",
  options: ["Aprovado, desde que não cometa outra falta grave.", "Reprovado, devendo realizar novo exame de direção.", "Aprovado, desde que não cometa outra falta média.", "Reprovado, devendo reiniciar todo o processo de formação."],
  answer: 1,
  explicacao: "Derrubar cone caracteriza falta eliminatória no exame prático, implicando reprovação e necessidade de novo agendamento."
}, {
  question: "Segundo o CTB, micro-ônibus é o veículo automotor de transporte coletivo com capacidade para:",
  options: ["Carga, até 3.500 kg.", "Até 25 passageiros.", "Até 49 passageiros.", "Até 20 passageiros."],
  answer: 3,
  explicacao: "O micro-ônibus transporta até 20 passageiros (além do condutor), distinguindo-se do ônibus convencional."
}, {
  question: "No âmbito do SNT, implantar, manter e operar o sistema de estacionamento rotativo pago (zona azul, por exemplo) compete ao:",
  options: ["Órgão ou entidade executivo de trânsito do Município.", "Órgão ou entidade executivo de trânsito do Estado.", "Órgão ou entidade executivo de trânsito da União.", "Órgão ou entidade executivo de trânsito do Bairro."],
  answer: 0,
  explicacao: "É atribuição municipal, por meio do órgão executivo de trânsito local, a gestão do estacionamento rotativo pago."
}, {
  question: "O condutor que exerce atividade remunerada de transporte de pessoas ou bens, ao renovar a CNH, deverá submeter-se, além da avaliação de aptidão física e mental:",
  options: ["Ao curso de atualização.", "À avaliação psicológica.", "Ao curso de reciclagem.", "Ao exame teórico-técnico."],
  answer: 1,
  explicacao: "Para condutor EAR, a avaliação psicológica é exigida de forma complementar na renovação."
}];


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