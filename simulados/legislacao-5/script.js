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
    "question": "Marque a alternativa que NÃO corresponde a um requisito para o candidato à Permissão Para Dirigir (PPD):",
    "options": ["Ser maior de dezoito anos de idade.", "Possuir documento de identificação e CPF.", "Ser penalmente imputável.", "Ser alfabetizado."],
    "answer": 0,
    "explicacao": "O requisito de maioridade é 18 anos, mas a alternativa 1 está incorreta no contexto dos demais requisitos listados."
  },
  {
    "question": "Qual a carga horária obrigatória no curso teórico-técnico para o candidato à Permissão Para Dirigir (PPD)?",
    "options": ["30 horas/aula.", "35 horas/aula.", "30 horas/aula.", "45 horas/aula."],
    "answer": 3,
    "explicacao": "A legislação define carga mínima de 45 horas/aula para o curso teórico-técnico."
  },
  {
    "question": "A atual legislação de trânsito intitula-se:",
    "options": ["Código Nacional de Trânsito.", "Código de Trânsito.", "Código de Trânsito Brasileiro.", "Código Brasileiro de Trânsito."],
    "answer": 2,
    "explicacao": "O nome oficial é Código de Trânsito Brasileiro (CTB)."
  },
  {
    "question": "A utilização das vias por pessoas, veículos e animais é para fins de:",
    "options": ["Circulação, parada e estacionamento.", "Circulação e estacionamento.", "Circulação, parada e operação de carga ou descarga.", "Circulação, parada, estacionamento e operação de carga ou descarga."],
    "answer": 3,
    "explicacao": "As vias são destinadas a circulação, parada, estacionamento e carga/descarga."
  },
  {
    "question": "São consideradas vias terrestres urbanas e rurais:",
    "options": [
      "Ruas, avenidas e vias internas pertencentes aos condomínios constituídos por unidades autônomas.",
      "Ruas, avenidas, logradouros, caminhos, passagens, estradas, rodovias, praias abertas à circulação pública, as vias internas pertencentes aos condomínios constituídos por unidades autônomas e os estacionamentos privados de uso coletivo.",
      "Estradas e rodovias.",
      "Praias abertas à circulação pública."
    ],
    "answer": 1,
    "explicacao": "A definição mais completa é a que abrange ruas, avenidas, estradas, rodovias, praias abertas, vias internas de condomínios e estacionamentos coletivos."
  },
  {
    "question": "A Junta Administrativa de Recursos de Infrações é um órgão colegiado componente do:",
    "options": ["Conselho Estadual de Trânsito.", "Conselho Nacional de Trânsito.", "Sistema Nacional de Trânsito.", "Departamento Nacional de Trânsito."],
    "answer": 2,
    "explicacao": "A JARI integra o Sistema Nacional de Trânsito (SNT)."
  },
  {
    "question": "Ao Departamento Estadual de Trânsito (DETRAN) cabe, entre outras, a atribuição de:",
    "options": ["Vistoriar, registrar e emplacar veículos.", "Organizar estatística de trânsito em todo o país.", "Propor a alteração de sinalização.", "Emitir carteira internacional."],
    "answer": 0,
    "explicacao": "O DETRAN é responsável por vistoria, registro e emplacamento de veículos."
  },
  {
    "question": "A autorização para conduzir veículos de propulsão humana e de tração animal ficará a cargo:",
    "options": ["Dos Estados.", "Dos Municípios.", "Do DETRAN.", "Do DENATRAN."],
    "answer": 1,
    "explicacao": "Cabe aos municípios regulamentar veículos de propulsão humana e tração animal."
  },
  {
    "question": "A Licença de Aprendizagem para prática de direção veicular em via pública (LADV), ou em locais autorizados para este fim, será expedida pelo DETRAN ao candidato que:",
    "options": [
      "Tenha completado 16 (dezesseis) anos de idade.",
      "Tenha completado 18 (dezoito) anos de idade.",
      "Tenha sido aprovado nos exames de aptidão física e mental, avaliação psicológica e de legislação de trânsito.",
      "Tenha prestado o exame em veículo particular."
    ],
    "answer": 2,
    "explicacao": "A LADV só é expedida após aprovação nos exames de aptidão física, psicológica e legislação."
  },
  {
    "question": "Somente poderá transitar pelas vias terrestres o veículo cujo peso e dimensões atenderem aos limites estabelecidos pelo:",
    "options": ["DENATRAN.", "CONTRAN.", "DETRAN.", "CONTRANDIFE."],
    "answer": 1,
    "explicacao": "O CONTRAN estabelece os limites de peso e dimensões dos veículos."
  },
  {
    "question": "A não obtenção da Carteira Nacional de Habilitação pelo permissionário, implica em reiniciar todo o processo de habilitação, no prazo de:",
    "options": ["15 (quinze) dias.", "30 (trinta) dias.", "360 (trezentos e sessenta) dias.", "A qualquer tempo."],
    "answer": 3,
    "explicacao": "O permissionário pode reiniciar o processo a qualquer tempo."
  },
  {
    "question": "Para que os veículos destinados à condução de escolares possam circular nas vias, exige-se:",
    "options": [
      "Cintos de segurança para o condutor e seu auxiliar, somente.",
      "Registro de veículo especial.",
      "Lanternas de luz verde nas extremidades laterais direita e esquerda.",
      "Inspeção semestral para verificação dos equipamentos obrigatórios e de segurança."
    ],
    "answer": 3,
    "explicacao": "Veículos escolares precisam passar por inspeção semestral obrigatória."
  },
  {
    "question": "A cópia fotostática ou fotocópia (xerox) da Carteira Nacional de Habilitação:",
    "options": [
      "Não é válida para substituir documento original.",
      "É valida quando autenticada em cartório.",
      "É válida quando não plastificada.",
      "É válida quando apresentada junto com o documento de identidade do portador."
    ],
    "answer": 0,
    "explicacao": "Somente o documento original da CNH é válido para porte."
  },
  {
    "question": "O candidato à obtenção da habilitação de categoria “D” deverá preencher os seguintes requisitos:",
    "options": [
      "Apenas ser maior de 21 anos, possuir CPF, saber ler e escrever.",
      "Somente saber ler e escrever, e possuir documento de identidade.",
      "Ser maior de 21 anos, possuir habilitação “B” há pelo menos 2 anos ou “C” há pelo menos 1 ano e não ter cometido mais de uma infração gravíssima nos últimos doze meses.",
      "Ser maior de 18 anos, saber ler e escrever, possuir identidade e CPF."
    ],
    "answer": 2,
    "explicacao": "Categoria D exige idade mínima, tempo em categorias B ou C e ausência de infrações gravíssimas recentes."
  },
  {
    "question": "As categorias existentes para a habilitação, são:",
    "options": ["ACC – “A” – “B” – “C” – “D” – “E”.", "“A” – “B” – “C” – “D”.", "“B” – “C” – “D” – “E”.", "“A” – “B” – “C” – “D” – “E”."],
    "answer": 3,
    "explicacao": "As categorias oficiais são: A, B, C, D, E e ACC."
  },
  {
    "question": "Quem deve pagar o Seguro Obrigatório DPVAT?",
    "options": [
      "Todos os proprietários de veículos com mais de 15 anos.",
      "Todas as pessoas, sendo ou não proprietárias de veículos.",
      "Todos os proprietários de veículos automotores.",
      "Somente os proprietários de 2 ou mais automóveis."
    ],
    "answer": 2,
    "explicacao": "Todos os proprietários de veículos automotores devem pagar o DPVAT."
  },
  {
    "question": "A avaliação psicológica será preliminar e complementar ao exame de aptidão física e mental:",
    "options": [
      "Quando da obtenção da ACC e da CNH.",
      "Quando da renovação, caso o condutor exerça serviço remunerado de transporte de pessoas ou bens.",
      "Quando da substituição do documento de habilitação obtido em país estrangeiro.",
      "Todas as afirmativas estão corretas."
    ],
    "answer": 3,
    "explicacao": "A avaliação psicológica é exigida em todas essas situações."
  },
  {
    "question": "A bicicleta quanto à tração é:",
    "options": ["Veículo automotor.", "Veículo de propulsão humana.", "Não é considerada um veículo, à luz do CTB.", "Veículo de tração animal."],
    "answer": 1,
    "explicacao": "A bicicleta é considerada veículo de propulsão humana."
  },
  {
    "question": "A Carteira Nacional de Habilitação permite, a quem a possuir, o direito de dirigir:",
    "options": [
      "Qualquer tipo de veículo, apenas na localidade onde foi emitida.",
      "Veículos automotores, para os quais foi habilitado, em todo território nacional.",
      "Qualquer tipo de veículo automotor.",
      "Veículos automotores, para os quais foi habilitado, apenas na localidade onde foi emitida."
    ],
    "answer": 1,
    "explicacao": "A CNH é válida em todo o território nacional para a categoria habilitada."
  },
  {
    "question": "A habilitação de categoria “A”:",
    "options": [
      "É para conduzir veículos cujo PBT não exceda a 3.500 kg.",
      "Para conduzir veículos motorizados de duas ou três rodas e também quadriciclos.",
      "Para combinações de veículos cuja unidade acoplada tenha 6.000 mil kg ou mais de PBT.",
      "Para conduzir veículos motorizados de duas ou três rodas."
    ],
    "answer": 3,
    "explicacao": "Categoria A é para veículos de duas ou três rodas."
  },
  {
    "question": "A placa de veículo de autoescola (aprendizagem ou, no padrão Mercosul, comercial) tem as seguintes características:",
    "options": [
      "Fundo branco e caracteres vermelhos.",
      "Fundo branco e caracteres pretos.",
      "Fundo preto e caracteres brancos.",
      "Fundo cinza e caracteres pretos."
    ],
    "answer": 0,
    "explicacao": "Placas de aprendizagem são brancas com caracteres vermelhos."
  },
  {
    "question": "A realização de qualquer ato público que interfira no trânsito depende de:",
    "options": [
      "Licença especial do Prefeito.",
      "Autorização do Governador.",
      "Prévia autorização da autoridade de trânsito, do órgão com circunscrição sobre a via.",
      "Autorização de todos os moradores locais ou da Associação de Moradores."
    ],
    "answer": 2,
    "explicacao": "Atos que interfiram no trânsito exigem autorização da autoridade de trânsito."
  },
  {
    "question": "As características de um veículo podem ser modificadas quando:",
    "options": [
      "Houver prévia permissão da autoridade de trânsito.",
      "O proprietário quitar seus débitos com o órgão competente.",
      "O proprietário 'cansar' da cor do modelo.",
      "Sofrer um acidente grave."
    ],
    "answer": 0,
    "explicacao": "Qualquer modificação exige prévia autorização do órgão de trânsito."
  },
  {
    "question": "Caminhão-trator é um veículo destinado:",
    "options": ["Ao transporte de carga.", "A tracionar ou arrastar outro veículo.", "Ao transporte de passageiros.", "Ao trabalho agrícola."],
    "answer": 1,
    "explicacao": "Caminhão-trator é feito para tracionar ou arrastar outro veículo."
  },
  {
    "question": "Caso o proprietário do veículo seja devedor de multa de trânsito não poderá:",
    "options": ["Renovar o Licenciamento Anual do Veículo.", "Renovar a Carteira Nacional de Habilitação.", "Renovar o exame toxicológico.", "Circular com o veículo fora da área urbana."],
    "answer": 0,
    "explicacao": "Com multas pendentes, não é possível renovar o licenciamento."
  },
  {
    "question": "Como é chamado um veículo automotor de duas ou três rodas cuja potência não seja maior do que 50cc, ou elétrico com capacidade máxima de 4 kW, que é capaz de desenvolver no máximo a velocidade de 50 km/h?",
    "options": ["Motocicleta.", "Ciclomotor.", "Mobilete.", "Bicicleta a motor."],
    "answer": 1,
    "explicacao": "Esse veículo é classificado como ciclomotor."
  },
  {
    "question": "Complete a frase: Charrete é um veículo de tração animal destinado ao transporte de:",
    "options": ["Cargas.", "Objetos.", "Pessoas.", "Todas estão corretas."],
    "answer": 2,
    "explicacao": "Charrete é usada para transporte de pessoas."
  },
  {
    "question": "Constitui(em) documento(s) de porte obrigatório:",
    "options": [
      "Comprovante de pagamento atualizado do IPVA.",
      "Certificado de registro do veículo, somente.",
      "ACC, Permissão para Dirigir ou CNH e CRLV-e.",
      "Comprovante de pagamento do seguro obrigatório."
    ],
    "answer": 2,
    "explicacao": "Os documentos obrigatórios são a CNH/PPD/ACC e o CRLV-e."
  },
  {
    "question": "De acordo com a Legislação os veículos, quanto a espécie, são classificados em:",
    "options": [
      "Oficial, de passageiros, de aluguel e de corrida.",
      "Oficial, particular, de passageiro e de aluguel.",
      "Automotor, elétrico, tração animal, propulsão humana e reboque.",
      "De passageiros, de carga, misto, de competição, de tração, especial e coleção."
    ],
    "answer": 3,
    "explicacao": "As espécies de veículos incluem passageiros, carga, misto, competição, tração, especiais e coleção."
  },
  {
    "question": "O condutor para transportar explosivos, líquidos inflamáveis ou substâncias tóxicas deve se submeter ao curso de treinamento denominado:",
    "options": [
      "TPP (Curso Especializado de Transporte de Produtos Perigosos).",
      "NPS (Curso de Noções de Primeiros Socorros).",
      "TCI (Curso Especializado de Transporte Cargas Inflamáveis).",
      "TCP (Curso Especializado de Transporte de Cargas Poluentes)."
    ],
    "answer": 0,
    "explicacao": "Esse curso é chamado TPP – Transporte de Produtos Perigosos."
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