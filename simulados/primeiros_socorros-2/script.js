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
    "question": "Sobre imobilização em fraturas, assinale a conduta INCORRETA (a que NUNCA deve ser feita antes do atendimento especializado):",
    "options": [
      "Antes de imobilizar, puxar o membro para recolocá-lo na posição ‘natural’.",
      "Cobrir fraturas expostas com panos limpos para proteger o ferimento.",
      "Manter a vítima deitada e imóvel até a chegada do socorro.",
      "Utilizar tala que imobilize o osso fraturado e também as articulações acima e abaixo."
    ],
    "answer": 0,
    "explicacao": "Nunca tracione/puxe o membro para ‘recolocar’ o osso. Imobilize na posição em que se encontra, proteja feridas e aguarde o resgate."
  },
  {
    "question": "Em sinistro com vítima, quanto ao dever de agir, é correto afirmar que qualquer cidadão deve:",
    "options": [
      "Retirar o veículo imediatamente do local, pois isso evita congestionamento.",
      "Abster-se de qualquer auxílio, pois não há obrigação legal de socorrer.",
      "Prestar ou providenciar auxílio, desde que não coloque a própria segurança em risco.",
      "Socorrer apenas se for o causador do acidente."
    ],
    "answer": 2,
    "explicacao": "A legislação impõe o dever de prestar/providenciar socorro, sem se expor a risco pessoal."
  },
  {
    "question": "Independentemente do tipo de ocorrência, uma medida PADRÃO e segura no atendimento pré-hospitalar é:",
    "options": [
      "Aliviar a dor oferecendo analgésico que esteja no veículo.",
      "Acionar imediatamente o socorro especializado (ex.: SAMU/Bombeiros).",
      "Transportar a vítima por conta própria para agilizar o atendimento.",
      "Oferecer líquidos para ‘acalmar’ a vítima."
    ],
    "answer": 1,
    "explicacao": "Acione o atendimento especializado. Medicar/transportar por conta própria pode agravar o quadro."
  },
  {
    "question": "Ao presenciar sinistro com vítima presa ao veículo, a conduta inicial MAIS segura é:",
    "options": [
      "Retirar a vítima do veículo para ‘ventilar melhor’.",
      "Transportá-la no carro de um conhecido ‘para ganhar tempo’.",
      "Sinalizar o local e acionar atendimento especializado.",
      "Afastar-se rapidamente para não ser responsabilizado."
    ],
    "answer": 2,
    "explicacao": "Sinalize e chame o socorro. Retirar/transportar sem técnica pode piorar lesões, sobretudo de coluna."
  },
  {
    "question": "Diante de fratura exposta, a sequência mais segura é:",
    "options": [
      "Puxar o membro para ‘encaixar’ o osso e, depois, imobilizar.",
      "Checar respiração, proteger o ferimento/immobilizar e tranquilizar a vítima.",
      "Aplicar torniquete no membro afetado para estancar o sangue.",
      "Empurrar o fragmento ósseo para a posição normal e fazer curativo."
    ],
    "answer": 1,
    "explicacao": "Não reposicione osso nem use torniquete. Proteja, imobilize e acalme a vítima após garantir via aérea/respiração."
  },
  {
    "question": "Na impossibilidade de chegada imediata do resgate, o controle MAIS efetivo do sangramento abundante é:",
    "options": [
      "Dar bastante líquido para ‘evitar choque’.",
      "Aplicar compressão direta e firme no local com pano limpo/gaze.",
      "Lavar o ferimento com água oxigenada para ‘coagular’.",
      "Aguardar o sangramento cessar sozinho."
    ],
    "answer": 1,
    "explicacao": "Compressão direta e contínua é a medida mais eficaz para conter hemorragia externa até o socorro chegar."
  },
  {
    "question": "Queimaduras recentes (minutos) devem ser inicialmente tratadas com:",
    "options": [
      "Resfriamento suave e prolongado com água corrente.",
      "Pasta de dente para ‘isolar’ a lesão.",
      "Pano seco diretamente sobre a área queimada, sem resfriar.",
      "Leite, pois ‘ajuda a cicatrizar’."
    ],
    "answer": 0,
    "explicacao": "Resfrie com água corrente. Não aplique substâncias caseiras, pois pioram a lesão e contaminam."
  },
  {
    "question": "Após colisão, a vítima teve breve perda de consciência e referiu estar ‘bem’ ao recobrar. Conduta correta:",
    "options": [
      "Dispensar avaliação hospitalar se ela ‘se sente bem’.",
      "Mantê-la acordada por 24h e não procurar atendimento.",
      "Encaminhar para avaliação médica, mesmo tendo recuperado a consciência.",
      "Apenas realizar curativos, se houver cortes."
    ],
    "answer": 2,
    "explicacao": "Perda de consciência, ainda que breve, exige avaliação médica por risco de lesão intracraniana."
  },
  {
    "question": "A sigla SAMU refere-se a:",
    "options": [
      "Seção de Atendimento Médico Urbano.",
      "Serviço de Auxílio Médico de Urgência.",
      "Seção de Auxílio Móvel ao Usuário.",
      "Serviço de Atendimento Móvel de Urgência."
    ],
    "answer": 3,
    "explicacao": "SAMU = Serviço de Atendimento Móvel de Urgência."
  },
  {
    "question": "Em primeiros socorros, é atributo essencial do SOCORRISTA (e não apenas desejável):",
    "options": [
      "Ser ciclista experiente.",
      "Agir com prudência, dentro dos próprios limites e segundo protocolos.",
      "Ser pedestre frequente.",
      "Ser passageiro habituado a rodovias."
    ],
    "answer": 1,
    "explicacao": "O socorrista deve ser prudente, conhecer seus limites e seguir protocolos para não agravar danos."
  },
  {
    "question": "Dos sinais vitais abaixo, aquele que tende a NÃO variar significativamente com a idade é:",
    "options": [
      "Temperatura corporal.",
      "Frequência do pulso.",
      "Frequência respiratória.",
      "Pressão arterial."
    ],
    "answer": 0,
    "explicacao": "A temperatura costuma ser mais estável entre faixas etárias; os demais variam com idade e condição clínica."
  },
  {
    "question": "Sobre vítima em estado de choque, assinale a conduta INCORRETA:",
    "options": [
      "Manter em decúbito e elevar as pernas (se não houver fratura em membros).",
      "Afrouxar roupas no pescoço, tórax e cintura para facilitar ventilação.",
      "Observar respiração e manter boa ventilação do ambiente.",
      "Oferecer líquidos à vítima inconsciente que vomitou recentemente."
    ],
    "answer": 3,
    "explicacao": "Jamais ofereça líquidos a inconscientes: risco de aspiração. Demais medidas ajudam na perfusão/ventilação."
  },
  {
    "question": "No cenário de via pública com vítima consciente, a primeira atuação segura DEPOIS de sinalizar é:",
    "options": [
      "Tentar conversar para avaliar orientação e acalmar.",
      "Movimentar a vítima para ‘liberar a pista’.",
      "Aplicar torniquete preventivo.",
      "Retirar capacete do motociclista ‘para ficar mais confortável’."
    ],
    "answer": 0,
    "explicacao": "Falar com a vítima ajuda a avaliar consciência e reduzir ansiedade. Evite movimentar e retirar capacete sem técnica."
  },
  {
    "question": "Em hemorragia EXTERNA, uma medida universal de autoproteção indicada ao socorrista é:",
    "options": [
      "Aplicar torniquete ao ver sangue.",
      "Dar água se a vítima pedir.",
      "Evitar contato direto com o sangue (luvas/barreira).",
      "Mover a vítima para posição confortável."
    ],
    "answer": 2,
    "explicacao": "Use barreiras (luvas/panos limpos) para evitar exposição a sangue. Torniquete é exceção, não regra."
  },
  {
    "question": "Após colisão, vítima não reage a estímulos dolorosos em braços e pernas. Este achado sugere:",
    "options": [
      "Fratura isolada de fêmur.",
      "Possível lesão de coluna com comprometimento neurológico.",
      "Traumatismo de rádio.",
      "Hemorragia externa leve."
    ],
    "answer": 1,
    "explicacao": "Déficit de resposta dolorosa periférica pode indicar lesão medular. Evite mover; acione resgate."
  },
  {
    "question": "É adequado, NA AUSÊNCIA de equipe, diante de fratura ABERTA com sangramento:",
    "options": [
      "Proceder ventilação boca-a-boca.",
      "Iniciar compressões torácicas.",
      "Cobrir com gaze estéril, evitando pressão direta sobre fragmentos, e acionar resgate.",
      "Induzir vômito para ‘aliviar’. "
    ],
    "answer": 2,
    "explicacao": "Proteja o ferimento com gaze, sem pressionar sobre o osso exposto, e acione o resgate."
  },
  {
    "question": "Se a vítima pedir água enquanto aguarda atendimento, a conduta correta é:",
    "options": [
      "Mantê-la em jejum (não oferecer alimentos/líquidos).",
      "Dar bastante água para ‘hidratar’.",
      "Liberar a ingestão à vontade.",
      "Oferecer leite ou líquidos açucarados."
    ],
    "answer": 0,
    "explicacao": "Mantenha jejum: pode haver necessidade de procedimentos e risco de aspiração."
  },
  {
    "question": "Quanto ao transporte leigo de vítima, assinale o procedimento INCORRETO:",
    "options": [
      "Manter a vítima em jejum.",
      "Garantir imobilização e segurança durante deslocamento.",
      "Mantê-la acordada ‘a qualquer custo’.",
      "Assegurar vias aéreas desobstruídas."
    ],
    "answer": 2,
    "explicacao": "Forçar vigília pode agravar. Priorize vias aéreas, imobilização e jejum."
  },
  {
    "question": "Após sinalizar, qual NÃO é uma medida básica de assistência à vítima:",
    "options": [
      "Assumir o controle da situação com calma.",
      "Proteger/abrigar o acidentado.",
      "Verificar sinais vitais.",
      "Mandar o acidentado buscar socorro por conta própria."
    ],
    "answer": 3,
    "explicacao": "A vítima não deve ser enviada a procurar ajuda; quem está apto e seguro aciona o socorro."
  },
  {
    "question": "Objeto empalado (cravado) no corpo da vítima. Na impossibilidade de socorro imediato, procede-se:",
    "options": [
      "Proteger e RETIRAR o corpo estranho com bandagens.",
      "Proteger o ferimento com bandagens e NÃO retirar o objeto.",
      "Remover o objeto e, então, controlar o sangramento.",
      "Remover e lavar com água e sabão."
    ],
    "answer": 1,
    "explicacao": "Não remova o objeto: ele pode tamponar o sangramento. Imobilize em torno e aguarde o resgate."
  },
  {
    "question": "Vítima inconsciente presa ao cinto dentro do veículo após colisão. Sem risco imediato (fogo/água), a conduta correta é:",
    "options": [
      "Sinalizar e acionar resgate, mantendo a vítima estabilizada.",
      "Soltar o cinto para ‘respirar melhor’.",
      "Retirar a vítima e deitá-la no acostamento.",
      "Reclinar ao máximo o banco para ‘conforto’."
    ],
    "answer": 0,
    "explicacao": "Não mobilize sem técnica; sinalize e chame o resgate. Soltar/retirar pode agravar lesão cervical."
  },
  {
    "question": "No atendimento a acidente com vítima, qual prática é CONTRAINDICADA:",
    "options": [
      "Arrastar a vítima para fora da cena.",
      "Sinalizar amplamente o local.",
      "Acionar pisca-alerta dos veículos próximos.",
      "Definir a melhor posição do triângulo de sinalização."
    ],
    "answer": 0,
    "explicacao": "Arrastar sem necessidade técnica pode causar lesões graves. Priorize sinalização e segurança."
  },
  {
    "question": "Para evitar novos impactos (novas colisões/atropelamentos/incêndios), a providência IMEDIATA é:",
    "options": [
      "Sinalizar o local com os recursos disponíveis.",
      "Retirar a vítima do veículo sem avaliação.",
      "Retirar o veículo da pista ‘para liberar o trânsito’.",
      "Ir direto verificar as lesões antes de qualquer outra ação."
    ],
    "answer": 0,
    "explicacao": "Sem sinalização, o risco de novos acidentes aumenta. Sinalize primeiro, depois avalie vítimas."
  },
  {
    "question": "Serviços GRATUITOS que podem ser acionados em emergências de trânsito incluem:",
    "options": [
      "Bombeiros, reboque e Defesa Civil.",
      "Bombeiros, DER e Polícia Militar.",
      "Bombeiros, plano de saúde e hospital particular.",
      "Bombeiros, SAMU e Polícia Militar."
    ],
    "answer": 3,
    "explicacao": "Bombeiros (193), SAMU (192) e PM (190) são serviços públicos e gratuitos de emergência."
  },
  {
    "question": "Postura do socorrista: além de manter a calma e a segurança da cena, o conjunto de ações mais adequado é:",
    "options": [
      "Retirar o veículo do local e depois sinalizar.",
      "Retirar a vítima do veículo e sinalizar depois.",
      "Acionar resgate, controlar a cena e mitigar riscos secundários.",
      "Medir a pressão arterial e oferecer líquidos."
    ],
    "answer": 2,
    "explicacao": "Chame o resgate, controle a cena e previna novos riscos. Procedimentos clínicos e líquidos não são prioridade."
  },
  {
    "question": "Por que o condutor deve conhecer noções de primeiros socorros?",
    "options": [
      "Para se automedicar em acidentes.",
      "Para agir corretamente e proteger a vítima de agravos até o resgate.",
      "Para dispensar atendimento médico posterior.",
      "Porque automedicar e dispensar socorro costuma ser suficiente."
    ],
    "answer": 1,
    "explicacao": "O objetivo é evitar agravamentos até a chegada do atendimento especializado—sem automedicação."
  },
  {
    "question": "Queda de cabo elétrico sobre o veículo após colisão. Até o desligamento da energia, os ocupantes devem:",
    "options": [
      "Ser retirados imediatamente do veículo.",
      "Sair um a um rapidamente.",
      "Empurrar o veículo para longe do fio.",
      "Permanecer dentro do veículo."
    ],
    "answer": 3,
    "explicacao": "O carro atua como ‘gaiola de Faraday’. Sair pode causar choque. Aguarde equipe técnica."
  },
  {
    "question": "Ao ligar para a emergência, qual informação NÃO é prioritária fornecer:",
    "options": [
      "Gravidade aparente e número de vítimas.",
      "Local exato (rua/rodovia e número/quilômetro de referência).",
      "Endereço e telefone pessoais da vítima.",
      "Tipo de ocorrência (colisão, capotamento, atropelamento etc.)."
    ],
    "answer": 2,
    "explicacao": "Dados pessoais da vítima não são prioritários. Localização, tipo e gravidade orientam a resposta."
  },
  {
    "question": "Vítima consciente, com dor intensa e gritando. Conduta adequada enquanto aguarda o resgate:",
    "options": [
      "Administrar analgésico disponível.",
      "Massagear a área dolorosa.",
      "Aplicar compressas quentes.",
      "Acalmar, orientar e manter conforto/segurança."
    ],
    "answer": 3,
    "explicacao": "Não medique nem manipule a lesão. Aja para acalmar e manter a segurança até o socorro."
  },
  {
    "question": "Cenário com cheiro forte de combustível derramado. Para reduzir o risco imediato, o socorrista deve PRIORITARIAMENTE:",
    "options": [
      "Aproximar curiosos para testemunhar.",
      "Afastar curiosos, desligar motores e proibir fumo/faíscas no local.",
      "Usar celular junto ao vazamento para chamar ajuda.",
      "Acender faróis altos na direção do vazamento para ‘melhor enxergar’."
    ],
    "answer": 1,
    "explicacao": "Risco de incêndio/explosão: afaste fontes de ignição e curiosos; desligue motores e chame ajuda."
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