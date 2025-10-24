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
    "question": "O trânsito de qualquer natureza nas vias terrestres do território nacional, abertas à circulação, rege-se pelo:",
    "options": [" Código de Trânsito Brasileiro.", "Código Nacional de Trânsito.", " Código Brasileiro de Trânsito.", "Código de Trânsito"],
    "answer": 0,
    "explicacao": "O Código de Trânsito Brasileiro (CTB) é a legislação que regula o trânsito no Brasil, estabelecendo normas e diretrizes para a circulação de veículos e pedestres nas vias terrestres."
  },
  {
    "question": "O condutor para conduzir veículo motorizado de duas ou três rodas, com ou sem carro lateral, deverá estar habilitado na categoria:",
    "options": ["“A”.", "“B”.", "“C”.", "“D”."],
    "answer": 0,
    "explicacao": "A categoria 'A' é a habilitação necessária para conduzir veículos motorizados de duas ou três rodas com ou sem carro lateral, como motocicletas e motonetas."
  },
  {
    "question": "A Licença de Aprendizagem (LADV) suspensa poderá ser obtida novamente após decorridos:",
    "options": ["Seis meses.", "Três meses.", "Doze meses.", "Nove meses."],
    "answer": 0,
    "explicacao": "A Licença de Aprendizagem (LADV) suspensa pode ser revalidada após seis meses, conforme as normas do Código de Trânsito Brasileiro."
  },
  {
    "question": "Organizar e manter o Registro Nacional de Carteiras de Habilitação (RENACH) compete:",
    "options": ["ao CONTRAN.", "à SENATRAN.", "ao DETRAN.", "ao CETRAN."],
    "answer": 1,
    "explicacao": "A SENATRAN (Secretaria Nacional de Trânsito) é responsável por organizar e manter o Registro Nacional de Carteiras de Habilitação (RENACH), conforme as diretrizes do Código de Trânsito Brasileiro."
  },
  {
    "question": "Ao comprar um veículo já registrado, o novo proprietário deverá providenciar a transferência, junto ao Detran, no prazo máximo de:",
    "options": ["60 dias.", "45 dias.", " 90 dias.", "30 dias."],
    "answer": 3,
    "explicacao": "O novo proprietário de um veículo deve providenciar a transferência de propriedade junto ao Detran no prazo máximo de 30 dias, conforme as normas do Código de Trânsito Brasileiro."
  },
  {
    "question": "A operação de carga ou descarga será regulamentada pelo órgão ou entidade sobre a via e é considerada:",
    "options": ["Parada.", "Estacionamento", "Embarque.", "Desembarque"],
    "answer": 1,
    "explicacao": "A operação de carga ou descarga é considerada estacionamento, pois envolve a permanência do veículo na via para realizar essas atividades, conforme as normas do Código de Trânsito Brasileiro."
  },
  {
    "question": "O cinto de segurança é obrigatório em todas as vias do território nacional para:",
    "options": ["O condutor, somente.", "Condutor e passageiros do banco dianteiro.", "Condutor e passageiros dos bancos dianteiro e traseiro","Condutor e passageiros do banco traseiro."],
    "answer": 2,
    "explicacao": "O uso do cinto de segurança é obrigatório para todos os ocupantes do veículo, tanto nos bancos dianteiros quanto nos traseiros, em todas as vias do território nacional, conforme o Código de Trânsito Brasileiro."
  },
  {
    "question": "A transposição de faixas é um tipo de:",
    "options": ["Deslocamento lateral.", "Interseção.", "Logradouro.", "Via."],
    "answer": 0,
    "explicacao": "A transposição de faixas é considerada um deslocamento lateral, pois envolve a mudança de posição do veículo em relação às faixas de circulação na via."
  },
  {
    "image": "cruzamento.jpeg",
    "question": "Analise a preferência no cruzamento:",
    "options": [
      "Os pedestres 2 e 3, pois têm prioridade absoluta na travessia.",
      "O veículo 1, por estar à direita do veículo 5.",
      "O veículo 4, por estar em via preferencial.",
      "Todos os veículos, avançando juntos com cautela, antes dos pedestres."
    ],
    "answer": 0,
    "explicacao": "De acordo com o CTB, pedestres que já iniciaram a travessia na faixa têm prioridade sobre qualquer veículo. Assim, os veículos 1, 4 e 5 devem aguardar até que os pedestres concluam a passagem."
  },
  {
    "question": " Não é procedimento para virar à direita:",
    "options": ["Deslocar-se para a linha divisória da pista.", "Deslocar-se para o bordo direito.", "Observar a preferência de veículos e pedestres.", "Efetuar a manobra no menor espaço possível."],
    "answer": 0,
    "explicacao": "Para virar à direita, o condutor deve deslocar-se para o bordo direito da via, observar a preferência de veículos e pedestres, e efetuar a manobra com segurança, mas não é necessário deslocar-se para a linha divisória da pista."
  },

  
  {
    "question": " Realizar, fiscalizar e controlar o processo de formação, aperfeiçoamento, reciclagem e suspensão de condutores, expedir e cassar Licença de Aprendizagem, Permissão para dirigir e Carteira nacional de Habilitação, mediante delegação do órgão federal competente, é de responsabilidade",
    "options": ["da SENATRAN.", "do DETRAN.", "do CETRAN.", "do CONTRAN."],
    "answer": 1,
    "explicacao": "O DETRAN (Departamento Estadual de Trânsito) é o órgão responsável por realizar, fiscalizar e controlar o processo de formação, aperfeiçoamento, reciclagem e suspensão de condutores, além de expedir e cassar Licença de Aprendizagem, Permissão para dirigir e Carteira Nacional de Habilitação, conforme as normas do Código de Trânsito Brasileiro."
  },

  {
    "question": "Deixar o condutor de prestar socorro à vítima de acidente de trânsito quando solicitado pela autoridade de trânsito e seus agentes é infração:",
    "options": ["Gravíssima.", "Média.", "Leve.", "Grave"],
    "answer": 3,
    "explicacao": "Deixar de prestar socorro à vítima de acidente de trânsito quando solicitado pela autoridade de trânsito e seus agentes é considerado uma infração grave, conforme o Código de Trânsito Brasileiro, pois coloca em risco a vida e a integridade física da vítima."
  },
  {
    "question": "O gás clorofluorcarbono (CFC) utilizado como propelente em vários tipos de sprays, chips de computadores e solventes usados pela indústria eletrônica. É um dos poluentes responsáveis pela ocorrência:",
    "options": ["Do aumento de temperatura.", "Da redução da camada de ozônio.", "Da chuva ácida.", "Do efeito estufa."],
    "answer": 1,
    "explicacao": "O gás clorofluorcarbono (CFC) é um dos poluentes responsáveis pela redução da camada de ozônio, pois sua liberação na atmosfera contribui para a destruição do ozônio estratosférico, que protege a Terra dos raios ultravioleta."
  },
  {
    "question": "A sinalização horizontal se apresenta nas seguintes cores:",
    "options": ["Amarela, vermelha, branca, azul e preta.", "Apenas amarela e branca.", "Apenas amarela, vermelha e branca.", "Amarela, vermelha, branca, verde e preta."],
    "answer": 0,
    "explicacao": "A sinalização horizontal é composta por faixas e marcas no pavimento, que podem ser de várias cores, incluindo amarelo, vermelho, branco, azul e preto, cada uma com sua função específica no trânsito."
  },
  {
    "question": "Na presença de sangramento abundante, qual o cuidado indicado?",
    "options": ["Garrotear (usar garrote).", "Fazer compressão no local do sangramento.", " Dar bastante líquido para a pessoa ir tomando.", "Jogar bastante água oxigenada para coagular e limpar o ferimento."],
    "answer": 1,
    "explicacao": "Em caso de sangramento abundante, o cuidado indicado é fazer compressão no local do sangramento para ajudar a estancar o fluxo sanguíneo e evitar a perda excessiva de sangue."
  },
  {
    "question": "Ao se deparar com um acidente num local onde o socorro seja prestado somente pelo Corpo de Bombeiros, você deverá ligar para o número:",
    "options": ["191.", "193.", "190.", "181."],
    "answer": 1,
    "explicacao": "Em caso de acidente onde o socorro seja prestado pelo Corpo de Bombeiros, o número a ser chamado é 193, que é o número de emergência para serviços de bombeiros no Brasil."
  },
  {
    "question": "O condutor de veículo que pretender sair da via pelo lado esquerdo (virar à esquerda) numa via de mão única deverá:",
    "options": ["Aguardar nas margens da via até todos os veículos passarem", "Aproximar-se do eixo central da via e efetuar a conversão à esquerda com atenção", "Aproximar-se do bordo direito da via e efetuar a manobra com atenção", "Deslocar-se totalmente para a esquerda da via e efetuar a conversão com segurança"],
    "answer": 3,
    "explicacao": "Para sair da via pelo lado esquerdo (virar à esquerda) em uma via de mão única, o condutor deve deslocar-se totalmente para a esquerda da via e efetuar a conversão com segurança, garantindo que não haja veículos ou pedestres no caminho."
  },
  {
    "question": "Em vias dotadas de acostamento, qual dos veículos abaixo está fazendo a conversão à esquerda corretamente?",
    "image": "quest18.png",
    "options": ["O veículo 1", "O veículo 3", "O veículo 2", "Nenhum deles"],
    "answer": 1,
    "explicacao": "O veículo 3 está fazendo a conversão à esquerda corretamente, pois se desloca para o centro da via antes de realizar a manobra, respeitando as regras de trânsito para conversões em vias com acostamento."
  },
  {
    "question": "Não faz parte das peças fixas do motor:",
    "options": ["Bloco do motor", "Cilindros.", "Cabeçote.", "Biela."],
    "answer": 3,
    "explicacao": "A biela não é uma peça fixa do motor, mas sim uma peça móvel que conecta o pistão ao virabrequim, permitindo a conversão do movimento linear do pistão em movimento rotativo."
  },
  {
    "question": "O conversor catalítico (catalisador), instalado no coletor de escapamento do veículo, é um:",
    "options": ["Transformador de gases tóxicos em gases não nocivos ao meio ambiente.", "Filtro dos gases do escapamento.", " Acelerador de molécula binárias, oposto aos gases de escapamento.", "Filtro dos gases do escapamento, que separa o vapor d'água dos gases de escapamento."],
    "answer": 0,
    "explicacao": "O conversor catalítico (catalisador) é um dispositivo instalado no sistema de escapamento do veículo que transforma gases tóxicos, como monóxido de carbono e óxidos de nitrogênio, em gases menos nocivos ao meio ambiente, contribuindo para a redução da poluição."
  },
  {
    "question": "Na direção defensiva, é o resultado da prática mais o treinamento:",
    "options": ["Conhecimento", "Decisão.", "Atenção.", "Habilidade."],
    "answer": 3,
    "explicacao": "Na direção defensiva, a habilidade é o resultado da prática e do treinamento contínuo, permitindo que o condutor reaja adequadamente a diversas situações no trânsito, minimizando riscos e aumentando a segurança."
  },
  {
    "question": " Não é considerado crime de trânsito:",
    "options": ["Dirigir em excesso de velocidade.", "Homicídio culposo.", "Omissão de socorro.", "Lesão corporal culposa."],
    "answer": 0,
    "explicacao": "Dirigir em excesso de velocidade não é considerado crime de trânsito, mas sim uma infração administrativa. Já homicídio culposo, omissão de socorro e lesão corporal culposa são crimes previstos no Código de Trânsito Brasileiro."
  },
  {
    "question": "A ordem do Agente da Autoridade de Trânsito, identificada na imagem, significa ordem de:",
    "image": "agseguir.png",
    "options": ["Retorno para os veículos que estão à esquerda.", "Parada obrigatória para todos os veículos.", "Diminuição da velocidade para todos os veículos.", "Seguir para todos os veículos."],
    "answer": 3,
    "explicacao": "A ordem do Agente da Autoridade de Trânsito, conforme a imagem, indica que todos os veículos devem seguir em frente, continuando sua trajetória na via."
  },
  {
    "question": "Nos dias chuvosos, não é recomendável:",
    "options": ["Trafegar com o pisca-alerta acionado.", "Aumentar a distância de segurança para com os veículos que seguem à frente", "Acender os faróis.", "Sinalizar com maior abundância, suas intenções de manobras."],
    "answer": 0,
    "explicacao": "Nos dias chuvosos, não é recomendável trafegar com o pisca-alerta acionado, pois isso pode confundir outros motoristas. O correto é manter os faróis acesos e aumentar a distância de segurança para evitar acidentes devido à redução da aderência dos pneus na pista molhada."
  },
  {
    "question": "A placa A-10b adverte sobre:",
    "image": "quest25.png",
    "options": ["Entroncamento oblíquo à direita.", "Junção de pistas", "Entroncamento oblíquo à esquerda.", "Divisão da pista."],
    "answer": 0,
    "explicacao": "A placa A-10b indica um entroncamento oblíquo à direita, alertando os motoristas sobre a proximidade de uma interseção onde as vias se encontram de forma diagonal, exigindo atenção redobrada."
  },
  {
    "question": "O DNIT (Departamento Nacional de Infraestrutura de Transporte) é o responsável por planejar, projetar, regulamentar e operar o trânsito nas:",
    "options": ["Rodovias e Estradas municipais.", "Vias dentro do município.", "Rodovias e Estradas federais", "Rodovias e Estradas estaduais."],
    "answer": 2,
    "explicacao": "O DNIT é o órgão responsável por planejar, projetar, regulamentar e operar o trânsito nas rodovias e estradas federais, garantindo a segurança e eficiência do transporte em todo o território nacional."
  },
  {
    "question": "Para conduzir um caminhão de 8.000 kg com um reboque de5.000 kg engatado atrás é necessário estar habilitado, no mínimo, na categoria:",
  "options": [" 'C'.", "'D'.", "'B'.", "'E'."],
    "answer": 0,
    "explicacao": "Para conduzir um caminhão de 8.000 kg com um reboque de 5.000 kg engatado, é necessário estar habilitado, no mínimo, na categoria 'C', que permite a condução de veículos de carga com peso bruto total superior a 3.500 kg."
  },
  {
    "question": "Substâncias infectantes são aquelas que:",
    "options": ["Contém micro-organismos infecciosos.", "Alteram sua propriedade com o calor", "Contém corrosivos.", "Liberam gás carbônico."],
    "answer": 0,
    "explicacao": "Substâncias infectantes são aquelas que contêm micro-organismos infecciosos, capazes de causar doenças em seres humanos ou animais. É importante manuseá-las com cuidado para evitar contaminações."
  },
  {
    "question": "Os ruídos emitidos pelo funcionamento do motor de um veículo são controlados pelo:",
    "options": ["Carburador.", "Radiador.", "Catalisador.", "Silenciador."],
    "answer": 3,
    "explicacao": "Os ruídos emitidos pelo funcionamento do motor de um veículo são controlados pelo silenciador, que reduz o som dos gases de escape, contribuindo para um trânsito mais silencioso e confortável."
  },
  {
    "question": "Identifique o significado do gesto do condutor expresso no desenho:",
    "image": "quest30.png",
    "options": ["Dobrar à direita.", "Diminuir a velocidade.", "Dobrar à esquerda.", "Parar."],
    "answer": 2,
    "explicacao": "O gesto do condutor expressado no desenho indica que ele está sinalizando a intenção de dobrar à esquerda, alertando os demais motoristas sobre sua manobra."
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