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
    "question": "Ao presenciar uma colisão com vítima consciente dentro do veículo, sem chamas e com fluxo intenso de carros, a conduta inicial correta do leigo é:",
    "options": [
      "Retirar a vítima do veículo imediatamente para evitar novo impacto.",
      "Transportar a vítima por meios próprios até o hospital mais próximo.",
      "Sinalizar o local em segurança e acionar o atendimento especializado (192/193).",
      "Afastar-se do local para ‘não atrapalhar’ o trabalho dos profissionais."
    ],
    "answer": 2,
    "explicacao": "Sinalize o cenário primeiro (proteção da cena) e chame ajuda especializada. Retirar/transportar a vítima sem necessidade pode piorar lesões ocultas."
  },
  {
    "question": "Para verificar rapidamente a pulsação de um adulto inconsciente na via pública (sem equipamento), o ponto mais confiável é:",
    "options": [
      "A artéria carótida, no pescoço.",
      "Uma veia saliente no dorso da mão.",
      "A região do pé (artéria tibial).",
      "A artéria radial do punho, mesmo se muito frio."
    ],
    "answer": 0,
    "explicacao": "Em emergência, a carótida (pescoço) é a mais palpável. Veias não servem para pulso e extremidades podem estar frias/sem fluxo."
  },
  {
    "question": "Queimadura térmica recente, sem roupas aderidas e sem bolhas rompidas. A medida inicial correta do socorrista leigo é:",
    "options": [
      "Resfriar a área com água corrente potável por alguns minutos.",
      "Aplicar pasta de dente para ‘tirar o ardor’.",
      "Cobrir diretamente com pano seco sem resfriamento prévio.",
      "Dar leite gelado para aliviar."
    ],
    "answer": 0,
    "explicacao": "Resfriar com água corrente reduz a progressão da lesão. Substâncias caseiras contaminam e atrapalham a avaliação."
  },
  {
    "question": "Sobre o perfil do socorrista leigo em primeiros socorros, NÃO é requisito obrigatório:",
    "options": [
      "Ser solidário/empático.",
      "Manter calma e firmeza.",
      "Seguir orientações técnicas básicas.",
      "Ser profissional da área de saúde."
    ],
    "answer": 3,
    "explicacao": "Qualquer cidadão treinado pode prestar primeiros socorros. Profissional de saúde não é requisito."
  },
  {
    "question": "No Brasil, a sigla SAMU refere-se a qual serviço público de emergência:",
    "options": [
      "Seção de Atendimento Médico Urbano.",
      "Serviço de Auxílio Médico de Urgência.",
      "Seção de Auxílio Móvel ao Usuário.",
      "Serviço de Atendimento Móvel de Urgência."
    ],
    "answer": 3,
    "explicacao": "SAMU = Serviço de Atendimento Móvel de Urgência (telefone 192)."
  },
  {
    "question": "Entre os sinais vitais abaixo, aquele que não varia com a idade é:",
    "options": [
      "Temperatura corporal.",
      "Frequência de pulso.",
      "Frequência respiratória.",
      "Pressão arterial."
    ],
    "answer": 0,
    "explicacao": "Pulso, respiração e pressão variam bastante por faixa etária; a temperatura tende a se manter em faixa semelhante."
  },
  {
    "question": "Em acidente com vítima no chão, consciente e orientada, a atitude inicial MAIS segura do leigo é:",
    "options": [
      "Conversar e acalmar, sem mover a vítima, observando queixas.",
      "Levantar a vítima para ‘ver se está tudo bem’.",
      "Aplicar torniquete em qualquer ferimento sangrante.",
      "Retirar capacete se for motociclista, para facilitar a conversa."
    ],
    "answer": 0,
    "explicacao": "Acalmar e avaliar sem movimentar. Remoções/torniquetes só quando indicados por treinamento."
  },
  {
    "question": "Vítima de colisão não reage à dor em braços e pernas e refere ‘formigamento’. Esse conjunto sugere prioritariamente:",
    "options": [
      "Fratura exclusiva de fêmur.",
      "Possível lesão de coluna/medular.",
      "Traumatismo apenas radial.",
      "Hemorragia externa leve."
    ],
    "answer": 1,
    "explicacao": "Alteração de sensibilidade/força após trauma sugere lesão de coluna. Evite movimentos."
  },
  {
    "question": "Para evitar agravamentos (novas batidas) logo após um sinistro, a primeira providência do leigo é:",
    "options": [
      "Sinalizar a via em segurança (triângulo, pisca-alerta) e só então avaliar vítimas.",
      "Retirar imediatamente o veículo da pista, com vítimas dentro.",
      "Transportar a vítima antes que chegue o socorro.",
      "Fazer vídeos para provar a dinâmica do acidente."
    ],
    "answer": 0,
    "explicacao": "Proteja a cena: sinalize e se proteja. Depois avalie vítimas e acione o socorro."
  },
  {
    "question": "Cabo elétrico caiu sobre um carro após queda de poste. Enquanto a rede não é desligada, os ocupantes devem:",
    "options": [
      "Sair correndo um de cada vez para longe.",
      "Sair apenas se o carro estiver pegando fogo.",
      "Empurrar o cabo com objeto metálico e sair.",
      "Permanecer dentro do veículo, janelas fechadas."
    ],
    "answer": 3,
    "explicacao": "O carro funciona como ‘gaiola de Faraday’. Ficar dentro é mais seguro até a energia ser cortada."
  },
  {
    "question": "Ao ligar para a emergência (192/193), qual informação NÃO é necessária informar pelo leigo:",
    "options": [
      "Gravidade aparente e número de vítimas.",
      "Localização precisa (rua/rodovia e referência).",
      "Endereço e telefone pessoal da vítima.",
      "Tipo de ocorrência (colisão, atropelamento, queda etc.)."
    ],
    "answer": 2,
    "explicacao": "Dados da vítima não são essenciais. Importa o local, o tipo e a gravidade/número de vítimas."
  },
  {
    "question": "Na avaliação SECUNDÁRIA de uma vítima consciente e conversante, o foco do exame físico é:",
    "options": [
      "Checar apenas pulso e frequência respiratória.",
      "Apenas medir pupilas e temperatura.",
      "Pesquisar ferimentos, fraturas e hemorragias da cabeça aos pés.",
      "Somente auscultar sons respiratórios."
    ],
    "answer": 2,
    "explicacao": "Secundária = varredura completa por lesões (cortes, fraturas, sangramentos)."
  },
  {
    "question": "Vítima não respira e não tem pulso. Para o leigo treinado, a ação imediata é:",
    "options": [
      "Aplicar compressas frias na testa.",
      "Aguardar o socorro para evitar erros.",
      "Iniciar RCP (compressões torácicas) sem demora.",
      "Dar água e açúcar para ‘levantar a pressão’."
    ],
    "answer": 2,
    "explicacao": "Ausência de pulso/respiração = parada. Inicie RCP imediatamente."
  },
  {
    "question": "Ao sinalizar 60 passos em via urbana você encontra uma curva antes de completar a contagem. A conduta correta é:",
    "options": [
      "Reiniciar tudo do zero após a curva.",
      "Ignorar a curva e continuar ‘a olho’.",
      "Acrescentar mais 10 passos aleatoriamente.",
      "Parar a contagem, posicionar antes da curva, e seguir a partir daí."
    ],
    "answer": 3,
    "explicacao": "A sinalização deve alertar ANTES do ponto cego. Coloque antes da curva e complete a distância."
  },
  {
    "question": "Qual situação abaixo, por si só, NÃO costuma provocar parada respiratória imediata:",
    "options": [
      "Soterramento.",
      "Afogamento.",
      "Perfuração de pulmão.",
      "Fratura isolada de fêmur."
    ],
    "answer": 3,
    "explicacao": "Fratura de fêmur é grave, mas não interrompe a ventilação como as demais causas."
  },
  {
    "question": "Sobre hemorragias, a classificação geral correta é:",
    "options": [
      "Externa e interna.",
      "Aberta e fechada são as únicas possíveis.",
      "Externa e ‘aberta’ significam exatamente o mesmo conceito clínico.",
      "Interna é sempre ‘fechada’ e sem riscos."
    ],
    "answer": 0,
    "explicacao": "Hemorragia pode ser externa (visível) ou interna (no interior do corpo)."
  },
  {
    "question": "Motociclista ao solo, consciente, com capacete íntegro. A conduta do leigo é:",
    "options": [
      "Retirar o capacete ‘com cuidado’ para facilitar a respiração.",
      "Não retirar o capacete; estabilizar a cabeça/pescoço e aguardar resgate.",
      "Sentar a vítima para reduzir tontura.",
      "Dar água para ‘acalmar o susto’."
    ],
    "answer": 1,
    "explicacao": "Não remova o capacete: risco de agravar lesões cervicais. Estabilize e aguarde."
  },
  {
    "question": "Derramamento de combustível em pista logo após colisão. A medida imediata, antes do socorro especializado, é:",
    "options": [
      "Cobrir com terra/areia/cal para absorver.",
      "Jogar água para ‘diluir’.",
      "Cobrir com lona plástica.",
      "Espalhar para evaporar mais rápido."
    ],
    "answer": 0,
    "explicacao": "Terra/areia/cal absorvem e reduzem risco de ignição/escorregamento."
  },
  {
    "question": "Ao priorizar atendimento em múltiplas vítimas, tem preferência aquela que:",
    "options": [
      "Grita de dor intensamente.",
      "Apresenta muitas fraturas aparentes.",
      "Está presa às ferragens mas conversando bem.",
      "Demonstra dificuldade para respirar."
    ],
    "answer": 3,
    "explicacao": "Via aérea/respiração vem primeiro. Dispneia indica risco imediato à vida."
  },
  {
    "question": "Quanto à dinâmica ideal da RCP para leigos treinados, o rendimento costuma ser melhor quando realizada por:",
    "options": [
      "Três pessoas simultâneas.",
      "Uma pessoa apenas.",
      "Quatro pessoas alternando a cada 30 segundos.",
      "Duas pessoas, alternando compressões e ventilações/apoio."
    ],
    "answer": 3,
    "explicacao": "Em dupla, um comprime e outro ventila/organiza, mantendo qualidade e ritmo."
  },
  {
    "question": "Diante de sangramento abundante em ferida aberta de membro, a conduta imediata do leigo é:",
    "options": [
      "Aplicar garrote ‘apertado’ acima do ferimento.",
      "Fazer compressão direta com pano limpo/gaze.",
      "Dar líquidos doces para prevenir ‘desmaio’.",
      "Lavar com água oxigenada vigorosamente."
    ],
    "answer": 1,
    "explicacao": "Compressão direta controla a hemorragia. Garrote só em situações específicas e com técnica."
  },
  {
    "question": "Em vítima com sinais de choque (palidez, sudorese, tontura), medida de suporte básico recomendada é:",
    "options": [
      "Colocar a cabeça abaixo do nível do corpo (elevar pernas).",
      "Manter sentada com tronco inclinado para frente.",
      "Dar café forte para ‘elevar a pressão’.",
      "Aplicar gelo no peito."
    ],
    "answer": 0,
    "explicacao": "Deitar e elevar pernas ajuda o retorno venoso. Não ofereça bebidas."
  },
  {
    "question": "A frequência recomendada de compressões em RCP para adultos, sem marcar estilo musical, é cerca de:",
    "options": [
      "12–15/min.",
      "30–60/min.",
      "≈100/min (visando 100–120/min).",
      "60–120/min aleatoriamente."
    ],
    "answer": 2,
    "explicacao": "Mire ~100–120 compressões por minuto, com profundidade e retorno adequados."
  },
  {
    "question": "Associe corretamente os números de emergência nacionais (nessa ordem: 191, 190, 193, 192):",
    "options": [
      "PM, SAMU, Bombeiros, PRF.",
      "PRF, PM, Bombeiros, SAMU.",
      "Bombeiros, SAMU, PRF, PM.",
      "PRF, Bombeiros, SAMU, PM."
    ],
    "answer": 1,
    "explicacao": "191 PRF; 190 PM; 193 Bombeiros; 192 SAMU."
  },
  {
    "question": "Em vítima em estado de choque, qual conduta é INCORRETA:",
    "options": [
      "Deitar e elevar as pernas, se possível.",
      "Afrouxar roupas apertadas.",
      "Monitorar respiração e manter aquecida.",
      "Oferecer líquidos à vítima inconsciente."
    ],
    "answer": 3,
    "explicacao": "Nunca ofereça líquidos a inconscientes: risco de aspiração. As demais medidas ajudam."
  },
  {
  "question": "A distância do acidente para iniciar a sinalização do local numa via arterial em caso de chuva deverá ser de:",
  "options": [
    "60 passos longos",
    "80 passos longos",
    "120 passos longos",
    "160 passos longos"
  ],
  "answer": 2,
  "explicacao": "Em via arterial a sinalização inicia, normalmente, a 60 passos longos. Em condição de chuva deve-se aumentar a distância (regra de dobrar), ficando 120 passos."
  },
  {
    "question": "Segundo a análise de evitabilidade, um sinistro é ‘evitável’ quando o condutor:",
    "options": [
      "Não fez tudo o que era possível para impedir o evento.",
      "Colidiu em baixa velocidade, então ‘não conta’.",
      "Alega que ‘o ambiente não interferiu’.",
      "Fez absolutamente tudo e, mesmo assim, ocorreu."
    ],
    "answer": 0,
    "explicacao": "Evitável = havia ação razoável que poderia ter sido tomada e não foi."
  },
  {
    "question": "A orientação ‘não entrar em pânico’ está diretamente ligada ao pilar dos primeiros socorros que prioriza:",
    "options": [
      "Somente direção defensiva.",
      "Apenas prevenção de acidentes.",
      "Prestação organizada de socorro (avaliar, acionar e assistir).",
      "Apenas o acionamento de viaturas."
    ],
    "answer": 2,
    "explicacao": "Manter a calma permite avaliar, acionar corretamente e assistir sem agravar."
  },
  {
  "question": "Durante uma crise epiléptica (convulsão generalizada), a conduta correta é:",
  "options": [
    "Segurar a vítima com firmeza para evitar movimentos bruscos.",
    "Colocar um objeto entre os dentes para impedir que a vítima morda a língua.",
    "Afrouxar as roupas da vítima, proteger a cabeça e afastar objetos que possam machucá-la.",
    "Deixá-la sozinha até que a crise cesse, sem qualquer intervenção."
  ],
  "answer": 2,
  "explicacao": "Proteja sem conter: afrouxe roupas, proteja a cabeça e afaste objetos; não coloque nada na boca."
  },
  {
    "question": "Sem equipe no local e com vítima desmaiada, a PRIMEIRA verificação do leigo treinado deve ser se:",
    "options": [
      "Há obstrução das vias aéreas/apneia.",
      "Existem fraturas visíveis nos membros.",
      "A vítima consegue deambular após estímulo.",
      "Há sangramento abundante em extremidades."
    ],
    "answer": 0,
    "explicacao": "Prioridade ABC: via aérea e respiração vêm antes das demais avaliações."
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