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
    'question': 'Marque a alternativa que NÃO corresponde, de forma literal no CTB, a um requisito para o candidato à Permissão Para Dirigir (PPD):',
    'options': ['Ser maior de dezoito anos de idade.', 'Possuir documento de identificação e CPF.', 'Ser penalmente imputável.', 'Ser alfabetizado.'],
    'answer': 0,
    'explicacao': 'O CTB exige ser penalmente imputável, saber ler e escrever e possuir identificação/CPF. Dizer apenas “maior de 18” não é o requisito textual — a exigência é a imputabilidade penal (que, na prática, ocorre aos 18).'
}, {
    "question": "Em via urbana no Brasil, colisão gera três vítimas: condutor brasileiro, passageira turista estrangeira e pedestre. Quanto ao seguro obrigatório de danos pessoais, assinale a alternativa correta:",
    "options": [
      "Todas as vítimas — inclusive a estrangeira — podem requerer, individualmente, cobertura por danos pessoais ocorridos no Brasil, sem apuração de culpa.",
      "Apenas vítimas brasileiras com CPF e residência no país podem ser indenizadas; turista e pedestre não têm direito.",
      "Somente os ocupantes do veículo têm direito; pedestre e turista estrangeira dependem de prova de culpa e de licenciamento/prêmio em dia.",
      "O pedido deve ser único, feito pelo proprietário do veículo, e pode incluir danos materiais além dos pessoais."
    ],
    "answer": 0,
    "explicacao": "O seguro obrigatório cobre danos pessoais de qualquer vítima (ocupantes e pedestres) quando o acidente ocorre no território nacional, independentemente de culpa. Cada vítima solicita separadamente. Danos materiais não são cobertos. Por isso, a alternativa correta é a primeira."
  }, {
    'question': 'A legislação de trânsito vigente que rege a circulação, a fiscalização e as competências do SNT intitula-se:',
    'options': ['Código Nacional de Trânsito.', 'Código de Trânsito.', 'Código de Trânsito Brasileiro.', 'Código Brasileiro de Trânsito.'],
    'answer': 2,
    'explicacao': 'É o Código de Trânsito Brasileiro (CTB), Lei nº 9.503/1997.'
}, {
    'question': 'A utilização das vias por pessoas, veículos e animais, para fins legalmente previstos, compreende:',
    'options': ['Circulação, parada e estacionamento.', 'Circulação e estacionamento.', 'Circulação, parada e operação de carga ou descarga.', 'Circulação, parada, estacionamento e operação de carga ou descarga.'],
    'answer': 3,
    'explicacao': 'O CTB considera circulação, parada, estacionamento e operação de carga/descarga, sujeitas às regras de sinalização e de segurança.'
}, {
    'question': 'Para efeitos do CTB, são consideradas vias terrestres urbanas e rurais:',
    'options': ['Ruas, avenidas e vias internas de condomínios.', 'Ruas, avenidas, logradouros, caminhos, passagens, estradas, rodovias, praias abertas à circulação pública, vias internas de condomínios e estacionamentos privados de uso coletivo.', 'Somente estradas e rodovias.', 'Somente praias abertas à circulação.'],
    'answer': 1,
    'explicacao': 'Também se equiparam a vias terrestres as praias abertas à circulação, vias internas condominiais e estacionamentos privados de uso coletivo.'
}, {
    'question': 'A Junta Administrativa de Recursos de Infrações (JARI) integra o(a):',
    'options': ['Conselho Estadual de Trânsito (CETRAN).', 'Conselho Nacional de Trânsito (CONTRAN).', 'Sistema Nacional de Trânsito (SNT).', 'Departamento Nacional de Trânsito (antiga denominação).'],
    'answer': 2,
    'explicacao': 'A JARI é órgão colegiado integrante do SNT, responsável pelo julgamento de recursos em 1ª instância.'
}, {
    'question': 'Entre as competências do órgão executivo de trânsito estadual/distrital (DETRAN), no âmbito de sua circunscrição, está:',
    'options': ['Vistoriar, registrar e emplacar veículos.', 'Organizar estatística de trânsito em todo o país.', 'Propor alteração de sinalização federal.', 'Emitir a Carteira Internacional por convenções internacionais.'],
    'answer': 0,
    'explicacao': 'Os DETRANs executam registro/licenciamento (CRLV-e), vistoria e emplacamento por delegação da União.'
}, {
    'question': 'A autorização para condução de veículos de propulsão humana e de tração animal compete:',
    'options': ['Aos Estados.', 'Aos Municípios.', 'Ao DETRAN.', 'À SENATRAN.'],
    'answer': 1,
    'explicacao': 'Compete ao Município regular e autorizar, em sua circunscrição, veículos de propulsão humana e de tração animal.'
}, {
    'question': 'A LADV (Licença para Aprendizagem de Direção Veicular) será expedida ao candidato que:',
    'options': ['Tenha 16 (dezesseis) anos completos.', 'Tenha 18 (dezoito) anos completos, apenas.', 'Seja aprovado em aptidão física e mental, avaliação psicológica e exame teórico de legislação.', 'Tenha prestado o exame em veículo particular.'],
    'answer': 2,
    'explicacao': 'A LADV depende da aprovação nos exames de aptidão física/mental, avaliação psicológica e legislação. A idade mínima é 18, mas o gatilho para expedição é a aprovação nesses exames.'
}, {
    'question': 'PRF recolhe bovino solto em rodovia federal para depósito conveniado, a fim de cessar risco imediato. Essa providência caracteriza:',
    'options': ['Penalidade.', 'Medida administrativa.', 'Autuação.', 'Advertência.'],
    'answer': 1,
    'explicacao': 'Recolher o animal é medida administrativa para eliminar o perigo. A autuação registra a infração e a penalidade (multa) é aplicada ao responsável.'
}, {
    'question': 'O permissionário que não obtém a CNH definitiva deverá reiniciar o processo de habilitação:',
    'options': ['Em 15 (quinze) dias.', 'Em 30 (trinta) dias.', 'Em 360 (trezentos e sessenta) dias.', 'A qualquer tempo (não há prazo fatal específico).'],
    'answer': 3,
    'explicacao': 'Caso não conclua/obtenha a CNH, o permissionário deverá reiniciar o processo; a lei não fixa prazo fatal para requerer o reinício.'
}, {
    'question': 'Para circular veículos de transporte escolar, exige-se, entre outros requisitos:',
    'options': ['Cintos apenas para condutor e auxiliar.', 'Registro de veículo especial (categoria específica no CRLV).', 'Lanternas verdes nas extremidades laterais.', 'Inspeção semestral dos equipamentos obrigatórios e de segurança.'],
    'answer': 3,
    'explicacao': 'A inspeção semestral é obrigatória, além de outros requisitos (identificação, equipamentos, condutor habilitado com curso específico).'
}, {
    'question': 'A fotocópia (xerox) da CNH apresenta o seguinte valor documental para fins de fiscalização:',
    'options': ['Não substitui o original (não é válida).', 'É válida quando autenticada.', 'É válida se não plastificada.', 'É válida com RG do portador.'],
    'answer': 0,
    'explicacao': 'Para abordagem e condução, exige-se documento hábil (CNH/PPD/ACC física/digital). Cópias não substituem o original.'
}, {
    'question': 'Requisitos para a categoria “D” incluem, cumulativamente:',
    'options': ['Apenas 21 anos, CPF e alfabetização.', 'Somente ler/escrever e identidade.', '21 anos; “B” há  2 anos ou “C” há 1 ano; não ter mais de uma gravíssima nos últimos 12 meses.', '18 anos, ler/escrever, identidade e CPF.'],
    'answer': 2,
    'explicacao': 'Exige-se idade mínima, experiência prévia e histórico sem mais de uma infração gravíssima no período; pode haver exigência de exame toxicológico conforme categoria exercida.'
}, {
    'question': 'Quanto às categorias da CNH previstas no CTB, assinale a alternativa correta:',
    'options': ['ACC – “A” – “B” – “C” – “D” – “E”.', 'Somente “A” – “B” – “C” – “D”.', 'Somente “B” – “C” – “D” – “E”.', '“A” – “B” – “C” – “D” – “E”.'],
    'answer': 3,
    'explicacao': 'As categorias da CNH são “A” a “E”. A ACC é uma autorização (título distinto), não uma categoria de CNH.'
}, {
    'question': 'O Seguro Obrigatório (DPVAT/SPVAT), observado o regramento vigente, relaciona-se com a obrigação de pagamento de:',
    'options': ['Todos os proprietários de veículos com mais de 15 anos.', 'Todas as pessoas, tenham ou não veículo.', 'Todos os proprietários de veículos automotores de via terrestre, conforme normas vigentes.', 'Somente proprietários de 2 ou mais automóveis.'],
    'answer': 2,
    'explicacao': 'Historicamente vinculado ao proprietário de veículo automotor de via terrestre; a forma de custeio/gestão pode variar por legislação específica vigente.'
}, {
    'question': 'A avaliação psicológica será preliminar e complementar ao exame de aptidão física e mental:',
    'options': ['Na obtenção da ACC e da CNH.', 'Na renovação, quando o condutor exerce atividade remunerada com veículo (EAR).', 'Na substituição da habilitação estrangeira por brasileira, quando aplicável.', 'Todas as alternativas estão corretas.'],
    'answer': 3,
    'explicacao': 'A avaliação psicológica é exigida em múltiplas hipóteses previstas em norma — obtenção, renovação com EAR, troca de habilitação estrangeira, entre outras.'
}, {
    'question': 'Quanto à tração, a bicicleta é classificada como:',
    'options': ['Veículo automotor.', 'Veículo de propulsão humana.', 'Não é considerada veículo pelo CTB.', 'Veículo de tração animal.'],
    'answer': 1,
    'explicacao': 'A bicicleta é veículo de propulsão humana e tem regras específicas de circulação, preferência e equipamentos.'
}, {
    'question': 'A CNH confere ao titular o direito de dirigir:',
    'options': ['Qualquer veículo, apenas no município de emissão.', 'Veículos automotores para os quais estiver habilitado, em todo o território nacional.', 'Qualquer veículo automotor, independentemente da categoria.', 'Veículos para os quais estiver habilitado, apenas no Estado de emissão.'],
    'answer': 1,
    'explicacao': 'A habilitação tem validade nacional, limitada à(s) categoria(s) obtidas pelo condutor.'
}, {
    'question': 'A categoria “A” habilita o condutor a conduzir:',
    'options': ['Veículos cujo PBT não exceda 3.500 kg.', 'Veículos motorizados de duas ou três rodas e também quadriciclos.', 'Combinações com unidade acoplada de 6.000 kg ou mais de PBT.', 'Veículos motorizados de duas ou três rodas, com ou sem carro lateral.'],
    'answer': 3,
    'explicacao': 'Abrange motocicletas/motonetas/triciclos; quadriciclos têm tratamento próprio e não se enquadram na “A”.'
}, {
    'question': 'A identificação de veículo de aprendizagem (autoescola), no padrão de placas vigente, utiliza:',
    'options': ['Fundo branco e caracteres vermelhos.', 'Fundo branco e caracteres pretos.', 'Fundo preto e caracteres brancos.', 'Fundo cinza e caracteres pretos.'],
    'answer': 0,
    'explicacao': 'A categoria “aprendizagem/experiência” é identificada por caracteres vermelhos sobre fundo branco, conforme padronização vigente.'
}, {
    'question': 'A realização de ato público que interfira no trânsito depende, previamente, de:',
    'options': ['Licença especial do Prefeito.', 'Autorização do Governador.', 'Autorização da autoridade de trânsito com circunscrição sobre a via.', 'Concordância de moradores ou associações locais.'],
    'answer': 2,
    'explicacao': 'Qualquer intervenção com impacto viário requer autorização do órgão/entidade com circunscrição sobre a via, para garantir segurança/fluidez.'
}, {
    'question': 'A alteração de características do veículo poderá ocorrer quando:',
    'options': ['Houver prévia permissão da autoridade de trânsito competente.', 'O proprietário quitar débitos diversos.', 'O proprietário desejar outra cor por preferência.', 'O veículo tiver sofrido sinistro sem laudo.'],
    'answer': 0,
    'explicacao': 'Modificações (ex.: suspensão, cor) exigem autorização prévia e posterior regularização/inspeção para anotação no registro.'
}, {
    'question': 'Caminhão-trator é veículo destinado, sobretudo, a:',
    'options': ['Transporte de carga.', 'Tração/arraste de outro veículo (reboque/semirreboque).', 'Transporte de passageiros.', 'Trabalho agrícola exclusivo.'],
    'answer': 1,
    'explicacao': 'O caminhão-trator é projetado para tracionar unidades acopladas (reboque/semirreboque), compondo combinações de veículos.'
}, {
    'question': 'O proprietário de veículo com débito de multa de trânsito não poderá:',
    'options': ['Renovar o Licenciamento Anual do Veículo.', 'Renovar a sua CNH.', 'Renovar exame toxicológico.', 'Circular fora da área urbana.'],
    'answer': 0,
    'explicacao': 'Débitos impeditivos (multas, taxas, etc.) obstam o licenciamento anual até a regularização.'
}, {
    'question': 'Veículo automotor de duas ou três rodas com potência até 50 cm³, ou elétrico até 4 kW, com velocidade máxima de 50 km/h, denomina-se:',
    'options': ['Motocicleta.', 'Ciclomotor.', 'Mobilete.', 'Bicicleta a motor.'],
    'answer': 1,
    'explicacao': 'É o ciclomotor, com requisitos próprios (ACC/CNH “A”, registro/placa, equipamentos).'
}, {
    'question': 'Complete: Charrete é veículo de tração animal destinado preferencialmente ao transporte de:',
    'options': ['Cargas.', 'Objetos.', 'Pessoas.', 'Todas as alternativas.'],
    'answer': 2,
    'explicacao': 'A destinação típica é o transporte de pessoas; pode haver usos acessórios conforme regulamentação municipal.'
}, {
    'question': 'Documentos de porte obrigatório para conduzir e circular são:',
    'options': ['Comprovante de pagamento do IPVA.', 'Certificado de Registro do Veículo (CRV/ATPV-e), apenas.', 'ACC, Permissão para Dirigir ou CNH e CRLV-e.', 'Comprovante do seguro obrigatório.'],
    'answer': 2,
    'explicacao': 'Devem estar disponíveis CNH/PPD/ACC (física ou digital) e o CRLV-e do veículo.'
}, {
    'question': 'Quanto à ESPÉCIE, os veículos classificam-se em:',
    'options': ['Oficial, de passageiros, de aluguel e de corrida.', 'Oficial, particular, de passageiro e de aluguel.', 'Automotor, elétrico, tração animal, propulsão humana e reboque.', 'De passageiros, de carga, misto, de competição, de tração, especial e de coleção.'],
    'answer': 3,
    'explicacao': 'Espécie refere-se à destinação construtiva: passageiros, carga, misto, competição, tração, especial e coleção.'
}, {
    'question': 'Para transportar explosivos, inflamáveis ou substâncias perigosas, o condutor deve concluir o curso especializado:',
    'options': ['TPP (Transporte de Produtos Perigosos).', 'NPS (Noções de Primeiros Socorros).', 'TCI (Transporte de Cargas Inflamáveis).', 'TCP (Transporte de Cargas Poluentes).'],
    'answer': 0,
    'explicacao': 'Curso especializado para transporte de produtos perigosos (conhecido em muitas provas como MOPP). O objetivo é capacitar o condutor para operar com segurança e em conformidade normativa.'
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