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
    "question": "Durante uma fiscalização, o agente confere seus documentos. Em qual situação a Carteira Nacional de Habilitação (CNH) torna-se inválida para dirigir?",
    "options": ["Quando o veículo for removido para o pátio.", "Quando a CNH for cassada pelo órgão de trânsito.", "Quando a CNH for roubada/perdida e ainda não houver 2ª via.", "Quando o veículo for apenas retido para regularização."],
    "answer": 1,
    "explicacao": "A CNH torna-se inválida quando é cassada, pois o condutor perde o direito de dirigir. Roubo ou perda exigem emissão de segunda via, mas não tornam a CNH inválida por si só."
  },
  {
    "question": "Numa via de mão única, o veículo à sua frente liga a seta indicando que vai entrar à esquerda em uma garagem. Nessa situação, o condutor poderá ultrapassá-lo pela direita quando:",
    "options": ["O motorista da frente fizer sinal autorizando a manobra.", "A via for de mão única e o veículo à frente sinalizar que entrará à esquerda, havendo espaço para passar pela direita com segurança.", "A via for de mão única com retorno/entrada à direita e o veículo à direita indicar que vai entrar para esse lado.", "A via for de mão dupla com retorno/entrada à esquerda e apenas uma faixa de trânsito."],
    "answer": 1,
    "explicacao": "É permitido ultrapassar pela direita em via de mão única quando o veículo à frente sinaliza que ingressará à esquerda, desde que haja condições seguras. Nas demais hipóteses listadas, a manobra não é autorizada."
  },
  {
    "question": "Em uma avenida de duplo sentido, um motorista decide seguir pela contramão para 'encurtar caminho'. De acordo com o CTB, transitar pela contramão em via de duplo sentido é infração e terá penalidade de:",
    "options": ["Gravíssima; multa.", "Grave; multa (cinco vezes).", "Gravíssima; multa (três vezes).", "Grave; multa."],
    "answer": 3,
    "explicacao": "Transitar pela contramão em via de duplo sentido configura infração classificada aqui como grave, punida com multa."
  },
  {
    "question": "À noite, em uma blitz, o agente de trânsito aponta a lanterna diretamente para um veículo específico. Diante do gesto do agente, você entende que:",
    "image": "ag_lanterna.png",
    "options": ["É uma ordem de parada somente para o veículo para o qual a lanterna está direcionada.", "É uma ordem de parada aos veículos para que os pedestres possam atravessar a via.", "É uma ordem de parada para todos os veículos que vêm na direção do agente.", "É uma ordem de parada para todos os veículos que estão na via."],
    "answer": 0,
    "explicacao": "A iluminação dirigida a um veículo específico indica ordem de parada somente a ele."
  },
  {
    "question": "Você está em uma alça de acesso prestes a entrar à direita numa rodovia movimentada. O que deve fazer?",
    "options": ["Exigir preferência de passagem.", "Ter prioridade de passagem sobre quem já está na rodovia.", "Aguardar o momento seguro, pois a preferência é de quem já circula na rodovia.", "Nenhuma das anteriores."],
    "answer": 2,
    "explicacao": "Em acessos a rodovias, a preferência é dos veículos que já trafegam por ela. O condutor que entra deve aguardar a lacuna segura."
  },
  {
    "question": "Ao se aproximar de uma área de obras, você se depara com a placa R-13. O que ela significa?",
    "image": "R-13.jpg",
    "options": ["Proibido trânsito de tratores e máquinas de obras.", "Proibida a circulação de máquinas de obras e tratores.", "Proibido tratores.", "Proibido máquinas de obras."],
    "answer": 0,
    "explicacao": "A R-13 regulamenta a proibição de circulação de tratores e máquinas de obras naquele trecho."
  },
  {
    "question": "Viajando por uma rodovia, você encontra a placa A-42a antes de um trecho reformado. Ela adverte o condutor da existência adiante de:",
    "image": "ipd.png",
    "options": ["Início de pista dupla.", "Fim de pista dupla.", "Mão dupla adiante.", "Pista irregular."],
    "answer": 0,
    "explicacao": "A A-42a sinaliza que a partir dali a via passará a ter pista dupla."
  },
  {
    "question": "Num cruzamento urbano, ocorre uma colisão com três vítimas: o condutor (brasileiro), uma passageira turista estrangeira e um pedestre. Sobre o seguro obrigatório por danos pessoais, assinale a correta:",
    "options": [
      "Todas as vítimas — inclusive a estrangeira — podem requerer, individualmente, cobertura por danos pessoais ocorridos no Brasil, independentemente de culpa.",
      "Apenas vítimas brasileiras com CPF e residência no país podem ser indenizadas; turista e pedestre não têm direito.",
      "Somente os ocupantes do veículo têm direito; pedestre e turista estrangeira dependem de prova de culpa e de licenciamento/prêmio em dia.",
      "O pedido deve ser único, feito pelo proprietário do veículo, e pode incluir danos materiais além dos pessoais."
    ],
    "answer": 0,
    "explicacao": "O seguro obrigatório cobre danos pessoais das vítimas de acidentes de trânsito ocorridos no território nacional, independente de culpa. Cada vítima solicita de forma individual. Danos materiais não são cobertos."
  },
  {
    "question": "Ao aproximar-se de uma ferrovia sem cancelas, você observa a sinalização de advertência. A placa A-41 adverte para:",
    "image": "santoandre.png",
    "options": ["Cruz de Santo André.", "Pista dividida.", "Comprimento máximo permitido.", "Passagem de nível sem barreira."],
    "answer": 0,
    "explicacao": "A placa A-41 indica a Cruz de Santo André, usual em locais com passagem de nível, alertando para atenção redobrada."
  },
  {
    "question": "Começa uma chuva de granizo na estrada. O que o condutor deve fazer?",
    "options": ["Aumentar a velocidade para sair rápido do trecho.", "Parar em local seguro (acostamento ou área de refúgio) e aguardar melhorar.", "Ligar o pisca-alerta e parar imediatamente em qualquer ponto da pista.", "Parar sob viaduto para se proteger das pedras de gelo."],
    "answer": 1,
    "explicacao": "A conduta segura é reduzir e parar em local seguro, fora da pista de rolamento, aguardando a melhora. Parar sob viadutos ou na pista aumenta o risco de colisões."
  },
  {
    "question": "Em pista com três faixas no mesmo sentido, você segue na faixa central e percebe que o veículo atrás pretende ultrapassar. A atitude correta é:",
    "options": ["Deslocar-se para a faixa da direita, acelerando a marcha.", "Manter-se na faixa em que está, sem acelerar a marcha.", "Permanecer na faixa e acelerar para impedir a ultrapassagem.", "Deslocar-se para a esquerda, acelerando a marcha."],
    "answer": 1,
    "explicacao": "Não se deve acelerar para dificultar a ultrapassagem. Manter a faixa e a velocidade favorece a manobra segura do outro; quando possível, pode-se ir para a direita, sem acelerar."
  },
  {
    "question": "Um motorista encosta o carro apenas para alguém embarcar/desembarcar e sai em seguida. Essa imobilização caracteriza:",
    "options": ["Parada para carga e descarga.", "Parada.", "Estacionamento para carga e descarga.", "Estacionamento."],
    "answer": 1,
    "explicacao": "Imobilizar o veículo só pelo tempo de embarque/desembarque caracteriza \"parada\". Estacionar implica permanecer por tempo superior ao necessário, geralmente sem o condutor."
  },
  {
    "question": "Complete a frase: Nos casos de parada cardíaca, os lábios ficam azulados, a vítima apresenta palidez acentuada e as pupilas encontram-se:",
    "options": ["Contraídas.", "Enrijecidas.", "Dilatadas.", "Rígidas."],
    "answer": 2,
    "explicacao": "Pupilas dilatadas e sem reflexo são sinais típicos em parada cardiorrespiratória."
  },
  {
    "question": "Ao decidir ultrapassar pela esquerda em rodovia, o motorista deve, antes de iniciar a manobra:",
    "options": ["Verificar se há espaço e condições seguras para ultrapassar.", "Buzinar após concluir a ultrapassagem.", "Acender farol alto para advertir o veículo da frente.", "Aumentar a velocidade quando estiver sendo ultrapassado."],
    "answer": 0,
    "explicacao": "A ultrapassagem só deve ser iniciada após certificar-se de espaço, visibilidade e ausência de risco à frente e atrás."
  },
  {
    "question": "Você escuta a sirene de um veículo de emergência aproximando-se. Quanto aos veículos com prioridade, podemos afirmar:",
    "options": ["Deve-se deixar livre a faixa da esquerda para facilitar a passagem.", "Pedestres devem aguardar no passeio até a passagem do veículo de emergência.", "A velocidade deve ser reduzida ao se aproximar de cruzamentos, dando passagem.", "Todas estão corretas."],
    "answer": 3,
    "explicacao": "Todas as atitudes contribuem para a passagem segura e rápida dos veículos com prioridade."
  },
  {
    "question": "Considerando o impacto ambiental, quais veículos tendem a poluir mais o ar?",
    "options": ["Os movidos a diesel ou gasolina.", "Os de sistema elétrico.", "Os de propulsão humana (bicicletas).", "Os de tração animal."],
    "answer": 0,
    "explicacao": "Motores a combustão (diesel/gasolina) emitem poluentes atmosféricos. Elétricos, propulsão humana e tração animal não geram emissões diretas de escapamento."
  },
  {
    "question": "Ao entrar num bairro desconhecido, você encontra a placa R-28. Ela indica que o condutor vai:",
    "image": "sentidoduplo.png",
    "options": ["Entrar em uma via de duplo sentido de circulação.", "Entrar em uma via de sentido único de circulação.", "Entrar em uma via que vai e vem.", "Entrar em uma via obrigatória de sentidos contrários."],
    "answer": 0,
    "explicacao": "A R-28 informa a presença de duplo sentido de circulação, exigindo atenção redobrada a conversões e ultrapassagens."
  },
  {
    "question": "Num trecho de serra com curvas, você observa no centro da pista uma marca longitudinal amarela dupla contínua. Nessa situação, a ultrapassagem é:",
    "options": ["Permitida para os dois sentidos.", "Proibida para um dos sentidos.", "Proibida para os dois sentidos.", "Permitida para um dos sentidos."],
    "answer": 2,
    "explicacao": "A linha amarela dupla contínua proíbe ultrapassagem nos dois sentidos, por se tratar de local com risco elevado."
  },
  {
    "question": "Durante a prova prática, o candidato deixa o veículo 'morrer' ao arrancar. Essa ocorrência é falta:",
    "options": ["Leve - 3 pontos.", "Eliminatória - 4 pontos.", "Grave - 1 ponto.", "Média - 2 pontos."],
    "answer": 3,
    "explicacao": "Deixar o motor apagar durante a prova é classificado como falta média, somando 2 pontos ao cômputo de penalidades."
  },
  {
    "question": "Na sinalização horizontal, qual cor é utilizada para regular fluxos de sentidos opostos?",
    "options": ["Amarela.", "Branca.", "Azul.", "Preta."],
    "answer": 0,
    "explicacao": "A cor amarela diferencia fluxos em sentidos opostos. A branca, em geral, separa faixas no mesmo sentido."
  },
  {
    "question": "Numa esquina movimentada, o agente utiliza apito para organizar o tráfego. Assinale o sinal sonoro que determina mandar o veículo seguir:",
    "options": ["Três silvos breves.", "Um silvo longo.", "Dois silvos breves.", "Um silvo breve."],
    "answer": 3,
    "explicacao": "Um silvo breve é utilizado para permitir o prosseguimento dos veículos."
  },
  {
    "question": "Ao cruzar com outro veículo à noite em pista simples, para evitar ofuscamento e manter a direção, o condutor deve olhar para:",
    "options": ["A faixa central da pista.", "A faixa da direita e a borda da via.", "A faixa da esquerda.", "O painel do veículo."],
    "answer": 1,
    "explicacao": "Focar a referência na faixa/borda direita ajuda a manter o rumo sem ser ofuscado pelos faróis do sentido contrário."
  },
  {
    "question": "Em viagem, o carro passa por ondulações e buracos. A função do conjunto suspensão e amortecedores é:",
    "options": ["Manter características do veículo.", "Desgastar pneus.", "Perder controle.", "Manter estabilidade e aderência ao solo."],
    "answer": 3,
    "explicacao": "Suspensão e amortecedores absorvem irregularidades, mantendo contato das rodas com o solo e garantindo estabilidade."
  },
  {
    "question": "O condutor à sua frente faz um gesto pela janela, com o braço indicando uma manobra. Diante do gesto do condutor, você entende que ele pretende:",
    "image": "gc_direita.png",
    "options": ["Dobrar à esquerda.", "Diminuir a marcha ou parar.", "Dobrar à direita.", "Informar que o carro está com defeito."],
    "answer": 2,
    "explicacao": "Braço estendido para a direita, em ângulo, sinaliza intenção de virar à direita."
  },
  {
    "question": "Ao se aproximar de uma ponte estreita, você observa a placa R-16. Essa placa significa:",
    "image": "lmp.png",
    "options": ["Largura permitida por eixo.", "Largura limitada.", "Largura máxima por eixo.", "Largura máxima permitida."],
    "answer": 3,
    "explicacao": "A R-16 regulamenta a largura máxima permitida do veículo para transitar no trecho assinalado."
  },
  {
    "question": "Após um pequeno abalroamento sem vítimas, dois condutores deixam os carros parados no meio da via discutindo. Deixar de remover o veículo quando necessário para segurança e fluidez do trânsito é:",
    "options": ["Falta de bom senso.", "Infração leve.", "Infração média.", "Aguardar perícia."],
    "answer": 2,
    "explicacao": "Em acidentes sem vítimas, deve-se remover o veículo quando possível e seguro para não prejudicar a fluidez e evitar novos acidentes."
  },
  {
    "question": "Numa rodovia litorânea, você encontra a placa TNA-02. Ela indica:",
    "image": "praia.png",
    "options": ["Alagamento.", "Praia.", "Chuva forte.", "Venda de guarda-chuvas."],
    "answer": 1,
    "explicacao": "A TNA-02 é uma sinalização turística/indicativa que aponta a existência de praia na direção indicada."
  },
  {
    "question": "Ao atravessar uma ponte em dia de ventos laterais fortes, o que o condutor deve fazer?",
    "options": ["Fechar as janelas e manter a velocidade.", "Abrir as janelas e manter a velocidade.", "Reduzir a marcha/velocidade e abrir levemente os vidros para melhorar a sensibilidade ao vento.", "Manter velocidade normal."],
    "answer": 2,
    "explicacao": "Reduzir a velocidade aumenta o controle; abrir levemente os vidros pode ajudar na percepção do vento e estabilidade do veículo."
  },
  {
    "question": "Você recebeu uma autuação e deseja recorrer. Qual é o órgão colegiado responsável por julgar recursos de infrações de trânsito?",
    "options": ["SENATRAN.", "PRF.", "JARI.", "DETRAN."],
    "answer": 2,
    "explicacao": "A Junta Administrativa de Recursos de Infrações (JARI) é o órgão recursal responsável pelo julgamento dos recursos apresentados."
  },
  {
    "question": "Em uma blitz, o exame laboratorial comprova determinada concentração de álcool no sangue do condutor. Qual valor caracteriza crime de trânsito?",
    "options": ["5 dc/L de sangue.", "6 dc/L de sangue.", "2 dc/L de sangue.", "0,34 ml/L de ar."],
    "answer": 1,
    "explicacao": "A caracterização de crime de trânsito ocorre a partir de 6 decigramas de álcool por litro de sangue (exame laboratorial). O último item refere-se à medição em ar alveolar, que é outra forma de aferição."
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