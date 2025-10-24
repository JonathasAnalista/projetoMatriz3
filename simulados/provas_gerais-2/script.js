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
    "question": "Você trafega por uma avenida de bairro e observa, adiante, a junção de uma via secundária à principal. Ao ver a placa A-13b, ela indica:",
    "image": "quest-1.png",
    "options": ["Confluência à esquerda.", "Confluência à direita.", "Entroncamento oblíquo à esquerda.", "Entroncamento oblíquo à direita."],
    "answer": 1,
    "explicacao": "A A-13b adverte sobre confluência à direita (junção de fluxos para o mesmo sentido). Entroncamento oblíquo indica cruzamento com ângulo, não apenas junção."
  },
  {
    "question": "Durante a revisão do carro, o mecânico pergunta quais itens fazem parte do sistema de arrefecimento do motor. Assinale o componente que NÃO pertence a esse sistema:",
    "options": ["Filtro de óleo.", "Ventoinha ou ventilador.", "Radiador.", "Bomba d'água."],
    "answer": 0,
    "explicacao": "Filtro de óleo integra a lubrificação, não o arrefecimento. Ventoinha, radiador e bomba d’água participam do controle de temperatura do motor."
  },
  {
    "question": "Num domingo de pouco movimento, você entra em uma via de trânsito rápido que está sem placas de velocidade mínima. Qual é a velocidade mínima regulamentar nesse caso?",
    "options": ["30 km/h.", "40 km/h.", "80 km/h.", "60 km/h."],
    "answer": 1,
    "explicacao": "Sem sinalização específica, a velocidade mínima em via de trânsito rápido é 40 km/h, para manter a fluidez e a segurança do fluxo."
  },
  {
    "question": "Na aula de direção defensiva, o instrutor comenta sobre 'automatismo correto' ao manusear volante, pedais e setas. Esse termo significa:",
    "options": ["Atenção fixa.", "Atenção dispersiva.", "Gesto inconsciente seguro.", "Indisciplina na condução."],
    "answer": 2,
    "explicacao": "Automatismo correto é executar ações rotineiras de forma natural e segura, sem perder a atenção ao trânsito."
  },
  {
    "question": "Ao se aproximar de uma ponte com restrição dimensional, você encontra a placa R-18. Ela significa:",
    "image": "quest5.png",
    "options": ["Comprimento máximo permitido.", "Largura máxima permitida.", "Peso máximo por eixo.", "Altura máxima permitida."],
    "answer": 0,
    "explicacao": "A R-18 regulamenta o comprimento máximo do veículo/combinação para transitar no trecho sinalizado."
  },
  {
    "question": "No dia a dia, você quer reduzir a poluição do seu veículo. Uma boa prática é:",
    "options": ["Regular carburador.", "Manter bobina e velas.", "Verificar ruídos no escapamento.", "Todas as alternativas."],
    "answer": 3,
    "explicacao": "Todas ajudam: manutenção de ignição e alimentação, além de escapamento íntegro, reduzem emissões e melhoram o rendimento."
  },
  {
    "question": "Você segue em via de mão única. O veículo à frente sinaliza que vai entrar à esquerda para acessar um retorno. Nessa situação, você poderá:",
    "options": ["Ultrapassar pela esquerda.", "Fazer um retorno.", "Acelerar o veículo.", "Ultrapassar pela direita."],
    "answer": 3,
    "explicacao": "Em via de mão única, se o da frente sinaliza entrar à esquerda e houver espaço/segurança, é permitido ultrapassar pela direita."
  },
  {
    "question": "Você acabou de receber a Permissão para Dirigir (PPD). Sobre sua validade, assinale a alternativa correta:",
    "options": ["5 anos.", "10 anos.", "1 ano.", "A mesma do exame médico."],
    "answer": 2,
    "explicacao": "A PPD vale 12 meses. Decorrido esse período, sem infrações impeditivas, o condutor obtém a CNH definitiva."
  },
  {
    "question": "Descendo uma serra íngreme com o carro carregado, você quer manter controle do veículo. A conduta correta é utilizar:",
    "options": ["Ponto morto.", "A mesma marcha do aclive (marcha reduzida).", "Testar acelerador e desengrenar.", "Desligar o motor."],
    "answer": 1,
    "explicacao": "Usar marcha reduzida (a mesma que seria adequada para subir) favorece o freio‑motor e evita superaquecimento dos freios."
  },
  {
    "question": "Ao socorrer uma vítima com suspeita de fratura após pequena queda de moto, qual atitude é INCORRETA?",
    "options": ["Manter a vítima deitada.", "Imobilizar com tala envolvendo a articulação.", "Puxar o membro para a posição 'natural'.", "Cobrir a área com pano limpo."],
    "answer": 2,
    "explicacao": "Nunca tente 'recolocar' o membro no lugar. Imobilize e aguarde atendimento especializado."
  },
  {
    "question": "Começa a chover e a pista fica lisa. Sobre fatores que alteram a aderência pneu‑solo, assinale aquele que NÃO influencia:",
    "options": ["Tipo de solo.", "Tipo de combustível.", "Chuva.", "Calibragem dos pneus."],
    "answer": 1,
    "explicacao": "O combustível não interfere na aderência. Superfície, água na pista e pressão dos pneus influenciam diretamente."
  },
  {
    "question": "Você estaciona em desacordo com a regulamentação (placa de proibição). Essa conduta sujeita o veículo a:",
    "options": ["Multa e retenção CNH.", "Retenção do veículo e CNH.", "Multa e remoção.", "Multa e retenção do veículo."],
    "answer": 2,
    "explicacao": "Estacionar onde é proibido acarreta multa e pode ensejar a remoção do veículo ao pátio."
  },
  {
    "question": "Num bloqueio viário, o agente realiza o gesto mostrado (à sua frente) para organizar o fluxo. A ordem do agente de trânsito significa:",
    "image": "ga_parar.png",
    "options": [
      "Ordem de parada para todos os veículos que vêm na direção do gesto.",
      "Ordem de redução de velocidade para todos os veículos.",
      "Ordem de seguir para todos os veículos que vêm na direção do gesto.",
      "Ordem para encostar todos os veículos que passarem na via."
    ],
    "answer": 0,
    "explicacao": "O gesto indica ordem de PARAR aos veículos que se aproximam na direção do agente."
  },
  {
    "question": "Em um roteiro turístico, você avista a placa TNA-03 em totens marrons de interesse turístico. Essa placa indica:",
    "image": "tna03.png",
    "options": ["Praia.", "Plantações.", "Ilha.", "Natureza."],
    "answer": 2,
    "explicacao": "Sinalização turística TNA-03 orienta para 'ilha' como atrativo/elemento geográfico."
  },
  {
    "question": "Durante fiscalização de carga, foi constatado excesso de peso por eixo e a carga é proveniente de mais de um embarcador. Quem responde pela infração?",
    "options": ["Transportador e embarcador.", "Proprietário.", "Transportador.", "Embarcador."],
    "answer": 2,
    "explicacao": "No caso descrito, o transportador é responsabilizado pelo excesso, devendo zelar pelo correto acondicionamento e distribuição da carga."
  },
  {
    "question": "No trânsito urbano, o condutor à sua frente faz o gesto mostrado na imagem pela janela do veículo. Diante do gesto, você entende que deve:",
    "image": "gc_diminuir_marcha.png",
    "options": ["Dobrar à esquerda.", "Diminuir a marcha ou parar.", "Dobrar à direita.", "Entender que o carro está com defeito."],
    "answer": 1,
    "explicacao": "O gesto indica intenção de reduzir a velocidade ou parar. Redobre a atenção e mantenha distância de segurança."
  },
  {
    "question": "Rodovia pavimentada com acostamento: um vaqueiro conduz rebanho para cruzar um trecho; adiante, uma charrete segue no mesmo sentido e ciclistas usam o acostamento. À luz do CTB, assinale a correta:",
    "options": [
      "Animais isolados ou rebanhos só podem circular quando conduzidos por guia; se na pista, devem ser mantidos junto ao bordo; o acostamento destina-se a pedestres e bicicletas; veículos de tração animal transitam à direita, junto à guia ou acostamento quando não houver faixa especial.",
      "Animais podem usar livremente o acostamento, com ou sem guia; veículos de tração animal devem usar a faixa da esquerda para maior visibilidade.",
      "Rebanhos devem sempre circular pelo acostamento, mesmo sem guia; quando na pista, devem ocupar o centro; veículos de tração animal devem seguir no meio da via.",
      "É vedada a circulação de animais; apenas a charrete pode usar o acostamento, com luzes de advertência durante todo o percurso."
    ],
    "answer": 0,
    "explicacao": "O CTB exige guia para condução de animais e, se na pista, junto ao bordo. O acostamento destina-se a pedestres e bicicletas. Veículos de tração animal devem seguir à direita, junto à guia/acostamento quando não houver faixa própria."
  },
  {
    "question": "Via urbana de sentido único com duas faixas: a faixa da direita é exclusiva para ônibus no pico e não há faixa própria para ciclomotores. Um ciclomotor licenciado pretende seguir adiante. Qual é o posicionamento correto?",
    "options": [
      "Circular pela faixa adjacente à direita (segunda faixa), preferencialmente no centro da faixa, pois a da direita está reservada; na ausência de exclusividade, deve circular na faixa mais à direita.",
      "Circular pela faixa da direita mesmo sendo exclusiva, pois a regra de manter-se sempre à direita é absoluta.",
      "Circular pela faixa da esquerda para aumentar a visibilidade.",
      "Circular pelo acostamento para manter-se fora do fluxo."
    ],
    "answer": 0,
    "explicacao": "Ciclomotores devem ficar à direita; havendo exclusividade da faixa da direita para outro modal, devem usar a faixa imediatamente adjacente."
  },
  {
    "question": "Chegou a época do licenciamento anual do veículo. Para licenciar, é obrigatório:",
    "options": ["Pagar IPVA.", "Pagar DPVAT.", "Atender recall.", "Todos os anteriores."],
    "answer": 3,
    "explicacao": "Devem ser atendidas as obrigações legais/tributárias e eventuais recalls. Quando houver cobrança do seguro obrigatório, a quitação integra os requisitos para licenciar."
  },
  {
    "question": "No contexto das condutas de trânsito, assinale a opção que NÃO é considerada apenas infração de trânsito:",
    "options": ["Ultrapassagem perigosa.", "Avançar o sinal vermelho.", "Omissão de socorro.", "Estacionamento irregular."],
    "answer": 2,
    "explicacao": "A omissão de socorro, além de infração gravíssima no CTB, também configura crime. As demais listadas se enquadram como infrações de trânsito."
  },
  {
    "question": "Ao se aproximar de um cruzamento movimentado, você vê a placa A-14. Ela adverte que você vai encontrar:",
    "image": "semaforo.png",
    "options": ["Um semáforo.", "Um cruzamento com semáforo.", "Um semáforo à frente.", "Um semáforo desligado."],
    "answer": 2,
    "explicacao": "A A-14 alerta para 'semáforo à frente', reforçando a necessidade de atenção e velocidade compatível."
  },
  {
    "question": "Ultrapassar pela contramão, em locais proibidos como curvas, aclives ou declives, caracteriza infração gravíssima. Nesse caso, qual é a penalidade prevista pelo Código de Trânsito Brasileiro?",
    "options": [
      "Multa",
      "Multa e retenção do veículo",
      "Retenção do veículo e suspensão da CNH",
      "Multa e suspensão da CNH"
    ],
    "answer": 3,
    "explicacao": "Ultrapassar pela contramão em locais proibidos (curvas, aclives, declives) é infração gravíssima conforme o CTB. A penalidade prevista é multa e suspensão do direito de dirigir. Não há retenção obrigatória do veículo, mas o condutor perde o direito de dirigir temporariamente além da multa aplicada."
  },
  {
    "question": "Entre as ações a seguir, aponte a INCORRETA para reduzir poluentes emitidos pelos veículos:",
    "options": ["Usar catalisador.", "Gás natural.", "Regular motor.", "Incentivar transporte individual."],
    "answer": 3,
    "explicacao": "Incentivar o transporte individual aumenta a frota circulante e as emissões. As demais medidas contribuem para redução de poluentes."
  },
  {
    "question": "Você presencia um acidente em via rural sem equipe especializada por perto. Em situação de emergência, qual procedimento é inadequado ao transportar a vítima?",
    "options": ["Verificar sinais de possível lesão na coluna.", "Improvisar uma maca para transporte.", "Remover a vítima o mais rápido possível, sem cuidados, porque ela precisa de urgência.", "Evitar freadas bruscas e excesso de velocidade no trajeto."],
    "answer": 2,
    "explicacao": "Remover apressadamente e sem imobilização pode agravar lesões. Priorize avaliação, imobilização e transporte cauteloso."
  },
  {
    "question": "Analise a situação de preferência mostrada na imagem e assinale a alternativa correta:",
    "image": "quest25.png",
    "options": ["Entre o veículo 4, 3 e 2. Tem preferência o veículo 4", "Entre o veículo 3, 2 e 1. Tem preferência o veículo 2", "Entre o veículo 1, 2 e 3. Tem a preferência o veículo 3", "Entre o veículo 2, 3 e 4. Tem preferência o veículo 2"],
    "answer": 3,
    "explicacao": "Pela regra geral de prioridade em cruzamentos sem sinalização, prevalece quem vem pela direita. Na cena, o veículo 2 está em vantagem."
  },
  {
    "question": "Condução preventiva: para prever o perigo com antecedência, o condutor deve:",
    "options": ["Definir itinerário.", "Evitar indecisões.", "Definir trajetos.", "Todas as anteriores."],
    "answer": 3,
    "explicacao": "Planejar o percurso e agir com decisão reduzem surpresas e favorecem escolhas seguras ao volante."
  },
  {
    "question": "No Sistema Nacional de Trânsito, qual é o órgão máximo normativo e consultivo?",
    "options": ["SENATRAN.", "CONTRAN.", "CIRETRAN.", "Ministério da Justiça."],
    "answer": 1,
    "explicacao": "O CONTRAN estabelece as normas e diretrizes nacionais de trânsito."
  },
  {
    "question": "Você recebeu a Notificação de Autuação e precisa indicar o real condutor infrator. Qual é o prazo para apresentar o infrator ao órgão de trânsito?",
    "options": ["15 dias.", "45 dias.", "30 dias.", "48 horas."],
    "answer": 2,
    "explicacao": "Via de regra, o prazo para indicar o condutor é de 30 dias contados conforme a notificação."
  },
  {
    "question": "Aproximando-se de um cruzamento, o semáforo muda para o AMARELO (sinal fixo). A conduta correta é:",
    "image": "quest29.png",
    "options": ["Reduzir velocidade.", "Frear bruscamente.", "Acelerar.", "Manter velocidade."],
    "answer": 0,
    "explicacao": "O amarelo indica atenção: reduza e prepare-se para parar com segurança. Não acelere nem freie de forma abrupta."
  },
  {
    "question": "Analise o desenho e marque quem tem a preferência de passagem na situação mostrada:",
    "image": "quest30.png",
    "options": ["Do veículo 1, porque o veículo 2 fará conversão.", "Do veículo 2, porque está à direita do veículo 1.", "Do veículo 1, porque segue em linha reta.", "Nenhuma das anteriores"],
    "answer": 1,
    "explicacao": "Em cruzamento sem sinalização, a preferência é de quem vem pela direita — no caso, o veículo 2."
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
