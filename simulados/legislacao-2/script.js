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
  "question": "O trânsito de qualquer natureza nas vias terrestres do território nacional, abertas à circulação, rege-se, nos termos da legislação vigente, pelo:",
  "options": ["Código de Trânsito Brasileiro.", "Código Nacional de Trânsito.", "Código Brasileiro de Trânsito.", "Código de Trânsito."],
  "answer": 0,
  "explicacao": "A norma de regência é o CTB (Lei nº 9.503/97), que consolida princípios, regras de circulação e competências do SNT."
}, {
  "question": "Considera-se trânsito a utilização das vias por:",
  "options": ["Pessoas e animais, isolados ou em grupos.", "Pessoas, veículos e animais, isolados ou em grupos, conduzidos ou não.", "Veículos conduzidos por condutores habilitados.", "Pessoas e veículos, conduzidos ou não."],
  "answer": 1,
  "explicacao": "O conceito abrange pessoas, veículos e animais, conduzidos ou não, isolados ou em grupos — definição ampla para fins de fiscalização e responsabilidade."
}, {
  "question": "Para efeitos do CTB, praias abertas à circulação pública, vias internas de condomínios e estacionamentos privados de uso coletivo são considerados:",
  "options": ["Vias terrestres.", "Áreas autônomas.", "Vias privativas.", "Áreas restritas."],
  "answer": 0,
  "explicacao": "Embora possam ser bens privados, o CTB equipara tais locais a vias terrestres para aplicação das regras de circulação e conduta."
}, {
  "question": "O infrator que reputar improcedente a penalidade de multa poderá interpor recurso, em 1ª instância, junto:",
  "options": ["ao CETRAN.", "à SENATRAN.", "ao CONTRAN.", "à JARI."],
  "answer": 3,
  "explicacao": "A Junta Administrativa de Recursos de Infrações (JARI) é o órgão colegiado responsável pelo julgamento em primeira instância."
}, {
  "question": "Organizar e manter o Registro Nacional de Carteiras de Habilitação (RENACH) compete:",
  "options": ["ao CONTRAN.", "à SENATRAN.", "ao DETRAN.", "ao CETRAN."],
  "answer": 1,
  "explicacao": "O órgão máximo executivo de trânsito da União (SENATRAN) organiza e mantém o RENACH, que integra o histórico do condutor."
}, {
  "question": "Os Departamentos de Estradas de Rodagem (DER) são órgãos:",
  "options": ["Normativos do Sistema Nacional de Trânsito.", "Com jurisdição em todo território nacional.", "Executivos do Sistema Nacional de Trânsito.", "Normativos do Conselho Nacional de Trânsito."],
  "answer": 2,
  "explicacao": "São órgãos e entidades executivos rodoviários no âmbito estadual/distrital, atuando dentro de sua circunscrição."
}, {
  "question": "Vistoriar, inspecionar quanto às condições de segurança, registrar, emplacar e licenciar veículos, expedindo CRLV, mediante delegação federal, é responsabilidade:",
  "options": ["Dos órgãos executivos de trânsito dos Estados e do Distrito Federal, na respectiva circunscrição.", "Dos órgãos executivos rodoviários da União e dos Estados.", "Das Polícias Militares.", "Do Departamento Nacional de Infraestrutura de Transportes."],
  "answer": 0,
  "explicacao": "Compete aos DETRANs (órgãos executivos de trânsito estaduais/distrital), por delegação da União, praticar esses atos de registro e licenciamento."
}, {
  "question": "Órgãos técnicos e consultivos destinados a estudos e proposições sobre temas específicos de trânsito são as:",
  "options": ["JARI.", "SENATRAN.", "CETRAN.", "Câmaras Temáticas."],
  "answer": 3,
  "explicacao": "As Câmaras Temáticas subsidiam o CONTRAN com pareceres e propostas técnico-normativas."
}, {
  "question": "A função típica exercida pela Polícia Rodoviária Federal, com vistas à obediência às normas de trânsito nas rodovias federais, é o:",
  "options": ["Fiscalização.", "Operação.", "Policiamento.", "Patrulhamento."],
  "answer": 3,
  "explicacao": "O CTB atribui à PRF o patrulhamento ostensivo nas rodovias federais, sem prejuízo da fiscalização e outras competências correlatas."
}, {
  "question": "O Sistema Nacional de Trânsito é integrado por:",
  "options": ["Órgãos normativos, executivos, fiscalizadores e recursais.", "Órgãos de direção e executivos.", "Órgãos executivos, somente.", "Órgãos colegiados e temáticos."],
  "answer": 0,
  "explicacao": "A estrutura do SNT prevê funções normativas, executivas, de fiscalização e recursais, articuladas em diferentes esferas."
}, {
  "question": "O candidato à habilitação deve preencher, cumulativamente, requisitos como:",
  "options": ["Saber ler e escrever, somente.", "Saber ler, escrever e possuir documento de identidade, somente.", "Saber ler e escrever, ser penalmente imputável, possuir CPF e documento de identificação.", "Ser penalmente imputável, somente."],
  "answer": 2,
  "explicacao": "Além da capacidade de leitura/escrita e da imputabilidade penal, exige-se identificação civil e CPF para formação de condutores."
}, {
  "question": "A Licença para Aprendizagem de Direção Veicular (LADV), quando suspensa por infração, poderá ser novamente obtida após:",
  "options": ["Seis meses.", "Três meses.", "Doze meses.", "Nove meses."],
  "answer": 0,
  "explicacao": "Na hipótese de suspensão por conduta vedada, aplica-se prazo de 6 meses para nova emissão, conforme normativos e práticas estaduais."
}, {
  "question": "A habilitação obtida fora do Brasil é subordinada às condições de convenções/acordos internacionais e às normas do:",
  "options": ["Brasil.", "Seu Estado.", "Seu município.", "CONTRAN."],
  "answer": 3,
  "explicacao": "Conduzir com habilitação estrangeira depende de tratados e das regras complementares expedidas pelo CONTRAN/SENATRAN."
}, {
  "question": "Para conduzir veículo motorizado de duas ou três rodas, com ou sem carro lateral, a categoria exigida é:",
  "options": ["“A”.", "“B”.", "“C”.", "“D”."],
  "answer": 0,
  "explicacao": "A categoria A abrange motocicletas, motonetas, triciclos e afins, conforme classificação do CTB."
}, {
  "question": "A categoria __ habilita o condutor a dirigir veículo motorizado destinado ao transporte de carga, cujo PBT exceda 3.500 kg:",
  "options": ["“D”.", "“E”.", "“C”.", "“B”."],
  "answer": 2,
  "explicacao": "A categoria C é própria para veículos de carga acima de 3.500 kg de PBT."
}, {
  "question": "No caso de reprovação no exame teórico-técnico ou no de direção veicular, o candidato poderá repetir o exame:",
  "options": ["A partir do 15º dia da divulgação do resultado.", "A partir do 16º dia da divulgação do resultado.", "No dia seguinte à divulgação do resultado.", "Sem necessidade de aguardar prazo mínimo."],
  "answer": 0,
  "explicacao": "A repetição do exame exige o transcurso de 15 dias a partir da divulgação do resultado reprovado."
}, {
  "question": "Para a categoria “D”, o exame de direção deve ser realizado em veículo com capacidade mínima de:",
  "options": ["08 lugares (sem contar o condutor).", "20 lugares.", "Capacidade para transportar, no mínimo, 6.000 kg de carga.", "10 lugares (sem contar o condutor)."],
  "answer": 1,
  "explicacao": "A avaliação deve ocorrer em veículo com, no mínimo, 20 lugares, compatível com a categoria pretendida."
}, {
  "question": "Para habilitar-se na categoria “E”, o condutor deverá possuir, no mínimo:",
  "options": ["3 anos na “B” ou 2 anos na “C”.", "1 ano na “C” ou 1 ano na “D”.", "2 anos na “C”.", "2 anos na “D”."],
  "answer": 1,
  "explicacao": "Exige-se experiência mínima prévia nas categorias C ou D por pelo menos 1 ano."
}, {
  "question": "Na primeira habilitação, o candidato pode requerer simultaneamente:",
  "options": ["“A” e “C”.", "“A” e “D”, mais ACC.", "“A” e “B”, ou ainda ACC e “B”.", "“A” e “E”."],
  "answer": 2,
  "explicacao": "É admitida a combinação “A+B” ou “ACC+B” no mesmo processo, observadas as demais exigências."
}, {
  "question": "Um condutor com categorias “A” e “D” afirma que o RENACH cria um registro para cada categoria. A assertiva correta é:",
  "options": ["Correto, há um registro para cada categoria.", "Errado, o RENACH é único e reúne todas as categorias.", "Correto apenas se obtidas em datas diferentes.", "Errado, o RENACH registra apenas multas."],
  "answer": 1,
  "explicacao": "O RENACH é único por condutor e agrega categorias, exames, restrições e histórico em um mesmo registro nacional."
}, {
  "question": "Na renovação da CNH, a periodicidade dos exames de aptidão física e mental, como regra geral, é:",
  "options": ["De 5 em 5 anos após os 70 anos.", "De 10 em 10 anos até 50 anos de idade.", "De 5 em 5 anos a partir dos 40.", "De 10 em 10 anos, com idade inferior a 50 anos."],
  "answer": 3,
  "explicacao": "Regra geral: até 49 anos (10 em 10 anos); de 50 a 69 (5 em 5 anos); a partir de 70 (3 em 3 anos), salvo indicação médica diversa."
}, {
  "question": "O processo de primeira habilitação permanece ativo no órgão executivo de trânsito por:",
  "options": ["06 meses.", "24 meses.", "12 meses.", "Durante a validade do exame de sanidade física e mental."],
  "answer": 2,
  "explicacao": "O processo tem vigência de 12 meses para conclusão das etapas obrigatórias."
}, {
  "question": "Configura mudança de característica do veículo, sujeita a regulamentação específica e anotação no registro:",
  "options": ["Colocação de bancos de couro e troca da manopla do câmbio.", "Descarga livre e troca da marca dos pneus.", "Instalação de som e alarme.", "Rebaixamento da suspensão e alteração de cor."],
  "answer": 3,
  "explicacao": "Alterações estruturais/identificadoras (como suspensão e cor) impactam a segurança e devem ser regularizadas."
}, {
  "question": "Denomina-se motocicleta o:",
  "options": ["Veículo automotor de duas rodas, conduzido em posição sentada.", "Veículo automotor com carroceria fechada para escritório/comércio.", "Veículo automotor de duas rodas, com ou sem sidecar, conduzido em posição montada.", "Veículo automotor com potência máxima de 50 cm³."],
  "answer": 2,
  "explicacao": "A definição legal inclui a possibilidade de carro lateral (sidecar) e a condução em posição montada."
}, {
    "question": "Rodovia pavimentada com acostamento. Um rebanho bovino é deslocado por um vaqueiro para cruzar pequeno trecho; adiante, uma charrete (veículo de tração animal) segue no mesmo sentido e ciclistas utilizam o acostamento. À luz do CTB, assinale a alternativa correta quanto à circulação de animais e de veículos de tração animal:",
    "options": [
      "Animais isolados ou rebanhos só podem circular quando conduzidos por guia; se estiverem na pista, devem ser mantidos junto ao bordo; o acostamento destina-se a pedestres e bicicletas; veículos de tração animal transitam à direita, junto à guia ou ao acostamento quando não houver faixa especial.",
      "Animais podem usar livremente o acostamento, com ou sem guia, por ser local voltado à circulação de pedestres, bicicletas e animais; veículos de tração animal devem usar a faixa da esquerda para maior visibilidade do fluxo.",
      "Rebanhos devem sempre circular pelo acostamento, ainda que sem guia; quando na pista, devem ocupar o centro das faixas; veículos de tração animal devem posicionar-se no meio da via, salvo proibição expressa.",
      "É vedada a circulação de animais em vias públicas; apenas a charrete pode utilizar o acostamento, desde que mantenha velocidade compatível e luzes de advertência durante todo o percurso."
    ],
    "answer": 0,
    "explicacao": "O CTB permite a circulação de animais nas vias somente quando conduzidos por guia (art. 53); se estiverem na pista, devem ser mantidos junto ao bordo. O acostamento, por definição do Anexo I, é destinado a paradas de emergência e à circulação de pedestres e bicicletas (não cita animais). Já os veículos de tração animal devem seguir à direita, junto à guia ou ao acostamento quando não houver faixa especial (art. 52)."
}, {
  "question": "A classificação geral dos veículos, segundo o CTB, é feita quanto:",
  "options": ["Ao uso: misto, passageiros, carga, tração e coleção.", "À tração, espécie e categoria.", "À destinação: aluguel, aprendizagem, oficial e diplomático.", "Ao tipo: automotor, misto e particular."],
  "answer": 1,
  "explicacao": "O CTB organiza por tração (automotor, propulsão humana, etc.), espécie (passageiro, carga, misto, especial, tração, coleção) e categoria (oficial, particular, etc.)."
}, {
  "question": "Caminhonete e carro de mão são, quanto à espécie, classificados como:",
  "options": ["Misto.", "De tração.", "De passageiros.", "De carga."],
  "answer": 3,
  "explicacao": "A caminhonete (automotor) e o carro de mão (propulsão humana) têm espécie ‘carga’, ainda que com trações distintas."
}, {
  "question": "Para transitar em via pública, todo veículo automotor, elétrico, articulado, reboque ou semirreboque deverá ser licenciado:",
  "options": ["Semestralmente, pelo órgão executivo rodoviário do Estado.", "Semestralmente, pelo órgão executivo de trânsito do Estado.", "Anualmente, pelo órgão executivo de trânsito do Estado.", "Anualmente, pelo órgão municipal de trânsito."],
  "answer": 2,
  "explicacao": "O licenciamento é anual e compete ao órgão executivo de trânsito estadual/distrital (DETRAN)."
}, {
  "question": "São dispensados da placa dianteira os veículos de:",
  "options": ["Duas e três rodas.", "Quatro rodas.", "Mais de quatro rodas.", "Todos os veículos devem portar placa dianteira."],
  "answer": 0,
  "explicacao": "Motocicletas, motonetas, ciclomotores e triciclos são exceção quanto à placa dianteira."
}, {
  "question": "Ao adquirir veículo já registrado, o novo proprietário deve providenciar a transferência de propriedade junto ao DETRAN no prazo máximo de:",
  "options": ["60 dias.", "45 dias.", "90 dias.", "30 dias."],
  "answer": 3,
  "explicacao": "O prazo legal é de 30 dias para efetivar a transferência, sob pena de autuação específica."
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