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
    "question": "A finalidade central da direção defensiva é conduzir o veículo de modo a prevenir sinistros e mitigar danos, inclusive quando o risco decorre de terceiros ou de condições adversas. Isso significa dirigir:",
    "options": [
      "Sempre em alta velocidade para evitar riscos.",
      "De maneira segura, prevenindo acidentes mesmo causados por outros.",
      "Automatizando hábitos incorretos do dia a dia.",
      "Sem precisar do controle consciente do condutor."
    ],
    "answer": 1,
    "explicacao": "Direção defensiva é prevenção ativa: conduzir com margem de segurança para evitar o sinistro, ainda que o erro parta de outrem ou do ambiente."
  },
  {
    "question": "Diante de sinalização vertical parcialmente encoberta por vegetação (condição adversa de via), a conduta compatível com a segurança viária é:",
    "options": [
      "Reduzir a velocidade e aumentar a atenção até identificar as restrições.",
      "Parar e podar a árvore para liberar a sinalização.",
      "Esperar um agente de trânsito resolver a situação.",
      "Continuar normalmente, já que a placa está invisível."
    ],
    "answer": 0,
    "explicacao": "Sem leitura clara da sinalização, reduza e redobre a atenção. Intervenções físicas ou ignorar a placa aumentam o risco de infração e sinistro."
  },
  {
    "question": "A ingestão de bebida alcoólica impacta diretamente a capacidade de condução, produzindo, entre outros efeitos:",
    "options": [
      "Maior confiança e melhor desempenho.",
      "Visão turva, reflexos lentos e julgamento prejudicado.",
      "Agilidade extra para evitar colisões.",
      "Raciocínio lógico mais rápido."
    ],
    "answer": 1,
    "explicacao": "Álcool reduz campo visual, tempo de reação e julgamento, gerando falsa autoconfiança e maior probabilidade de colisão."
  },
  {
    "question": "Condições adversas que comprometem a segurança na condução podem estar associadas:",
    "options": [
      "Somente ao estado emocional do condutor.",
      "Somente ao clima e à pista.",
      "A fatores externos, mas nunca ao veículo.",
      "Ao condutor, ao tempo e às condições da via."
    ],
    "answer": 3,
    "explicacao": "Incluem-se fatores humanos (sono/estresse), ambientais (chuva/neblina) e de infraestrutura (buracos/sinalização)."
  },
  {
    "question": "No estudo do comportamento do condutor, o tempo de reação corresponde ao intervalo entre:",
    "options": [
      "Acionar os freios e imobilizar o veículo.",
      "Perceber o perigo e já estar totalmente parado.",
      "Enxergar o perigo e tomar a decisão de frear.",
      "Um tempo fixo de ¾ de segundo para qualquer pessoa."
    ],
    "answer": 2,
    "explicacao": "Vai da percepção do estímulo à decisão/ato inicial (p. ex., pisar no freio). O valor não é fixo: varia conforme o estado do condutor."
  },
  {
    "question": "Em segurança viária, considera-se condição insegura:",
    "options": [
      "Uma situação perigosa que favorece acidentes.",
      "A atitude errada tomada pelo condutor.",
      "Um conceito teórico sem relação com sinistros.",
      "Descumprir regras de trânsito de forma intencional."
    ],
    "answer": 0,
    "explicacao": "É uma circunstância material/ambiental perigosa (ex.: pista escorregadia, pneu careca) que aumenta a chance de sinistro."
  },
  {
    "question": "Entre os fenômenos físicos que interferem na condução, assinale a alternativa que NÃO é uma lei/efeito físico:",
    "options": [
      "Aderência entre pneus e solo.",
      "Força centrípeta em curvas.",
      "Transferência de massa em frenagens.",
      "Frenagem de emergência realizada pelo condutor."
    ],
    "answer": 3,
    "explicacao": "Frenagem de emergência é uma manobra/conduta, não uma lei da física; as demais são efeitos físicos reais na condução."
  },
  {
    "question": "No rol de condições adversas que afetam a segurança imediata da condução, NÃO se inclui:",
    "options": [
      "Condições climáticas.",
      "Estado do condutor.",
      "Características do veículo.",
      "Nível de poluição do ar."
    ],
    "answer": 3,
    "explicacao": "A poluição é tema ambiental, mas não compõe, por si, uma condição adversa instantânea de risco operacional ao conduzir."
  },
  {
    "question": "Quanto ao uso dos faróis, é permitido utilizar luz alta, à noite, prioritariamente:",
    "options": [
      "Sempre que cruzar com outro veículo para sinalizar.",
      "Em vias sem iluminação pública adequada.",
      "Mesmo em vias bem iluminadas, se o condutor desejar.",
      "Para avisar pedestres na faixa de travessia."
    ],
    "answer": 1,
    "explicacao": "Use luz alta apenas onde não haja iluminação e sem ofuscar terceiros. Em aproximações, baixe o facho (farol baixo)."
  },
  {
    "question": "Em chuva intensa, quando o limpador não assegura visibilidade mínima, o procedimento defensivo é:",
    "options": [
      "Parar em local seguro e aguardar melhora.",
      "Continuar dirigindo, mas limpando com um pano.",
      "Retirar a água com as mãos pelo vidro.",
      "Seguir viagem, pois o risco é pequeno."
    ],
    "answer": 0,
    "explicacao": "Sem ver e ser visto, não há condução segura. Pare em local seguro (acostamento/área de escape) e sinalize se necessário."
  },
  {
    "question": "Em colisões, o cinto de segurança tem por função principal:",
    "options": [
      "Dar mais conforto ao condutor.",
      "Proteger apenas a coluna cervical.",
      "Evitar que o corpo avance no banco.",
      "Evitar que ocupantes se choquem com partes internas ou entre si."
    ],
    "answer": 3,
    "explicacao": "O cinto restringe a projeção dos ocupantes, reduz impactos contra painel, volante, vidros e contra outros passageiros."
  },
  {
    "question": "Para prevenir aquaplanagem em pista com lâmina d’água, o condutor deve prioritariamente:",
    "options": [
      "Manter velocidade compatível e pneus em bom estado.",
      "Aumentar a velocidade para 'escapar' da água.",
      "Parar no meio da pista até a água baixar.",
      "Virar bruscamente o volante para aumentar atrito."
    ],
    "answer": 0,
    "explicacao": "Reduza a velocidade, mantenha pneus calibrados e com sulcos adequados, evitando manobras bruscas."
  },
  {
    "question": "No contexto de visibilidade reduzida, o termo lusco-fusco refere-se ao:",
    "options": [
      "Momento de cegueira causado por faróis altos.",
      "Ausência completa de luz solar.",
      "Um efeito luminoso que aumenta a segurança.",
      "Período de pouca luminosidade, como ao anoitecer, túneis ou neblina."
    ],
    "answer": 3,
    "explicacao": "Transição de luminosidade (crepúsculo/ambientes escuros) que exige acendimento de faróis e aumento da cautela."
  },
  {
    "question": "Compõem os fundamentos comportamentais da direção defensiva:",
    "options": [
      "Conhecimento, habilidade, atenção, previsão e decisão.",
      "Imprudência, negligência e imperícia.",
      "Uso de equipamentos de segurança.",
      "Visão, audição, olfato, paladar e tato."
    ],
    "answer": 0,
    "explicacao": "Conhecer, prever e decidir corretamente, mantendo atenção e habilidade, estrutura o agir seguro."
  },
  {
    "question": "O deslocamento do veículo para fora da trajetória pretendida por redução/perda de aderência denomina-se:",
    "options": [
      "Movimento do ar.",
      "Frenagem brusca.",
      "Derrapagem.",
      "Curvatura da pista."
    ],
    "answer": 2,
    "explicacao": "A derrapagem ocorre quando a força disponível de atrito não sustenta a trajetória (aceleração, frenagem ou curva)."
  },
  {
    "question": "Em ultrapassagens, são causas frequentes de colisão, EXCETO:",
    "options": [
      "Não calcular espaço e tempo adequados.",
      "Não observar distância lateral.",
      "Aumentar a velocidade ao retornar para a faixa.",
      "Forçar a ultrapassagem em local proibido."
    ],
    "answer": 2,
    "explicacao": "A simples aceleração ao retornar não configura, por si, a causa típica. As demais ações são fatores clássicos de risco."
  },
  {
    "question": "Ao perceber uma poça d’água à frente, a conduta inadequada (insegura) é:",
    "options": [
      "Reduzir gradualmente a velocidade.",
      "Segurar firme o volante.",
      "Manter o veículo o mais reto possível.",
      "Desviar freando bruscamente."
    ],
    "answer": 3,
    "explicacao": "Frear/desviar de forma abrupta em piso molhado amplia o risco de perda de controle e derrapagem."
  },
  {
    "question": "No vocabulário de segurança, atitudes corretas padronizadas pela prática e técnica, que se repetem automaticamente, são:",
    "options": [
      "Atos inseguros.",
      "Automatismos corretos.",
      "Imperícia.",
      "Improvisos ocasionais."
    ],
    "answer": 1,
    "explicacao": "Automatismos corretos são hábitos seguros internalizados (checar espelhos, sinalizar, manter distância de seguimento)."
  },
  {
    "question": "Ao se deparar com risco iminente que exige parada imediata do veículo, a resposta técnica é:",
    "options": [
      "Diminuir a marcha.",
      "Colocar em ponto morto.",
      "Acionar os freios com força (frenagem de emergência).",
      "Apenas buzinar para avisar os demais."
    ],
    "answer": 2,
    "explicacao": "Frenagem de emergência, mantendo controle direcional, é o procedimento padrão para cessar o risco."
  },
  {
    "question": "Sob ação de vento lateral em rodovia, o procedimento que auxilia a estabilidade é:",
    "options": [
      "Acelerar forte para compensar.",
      "Abrir janelas para equalizar pressão e manter controle.",
      "Frear bruscamente.",
      "Parar no meio da via."
    ],
    "answer": 1,
    "explicacao": "Abrir parcialmente os vidros ajuda a equalizar o fluxo de ar; mantenha volante firme e reduza suavemente a velocidade."
  },
  {
    "question": "No período noturno, ao ser ofuscado por farol alto de outro veículo, o condutor deve priorizar:",
    "options": [
      "Desviar para a esquerda.",
      "Retribuir com farol alto também.",
      "Olhar para a direita, usando as faixas da pista como guia.",
      "Parar no acostamento imediatamente."
    ],
    "answer": 2,
    "explicacao": "Evite mirar a fonte de ofuscamento; use a sinalização horizontal da direita como referência até recuperar a visão."
  },
  {
    "question": "Em via urbana dotada de iluminação pública, o procedimento normativo no período noturno é:",
    "options": [
      "Usar farol baixo entre o pôr e o nascer do sol.",
      "Manter as luzes apagadas para não ofuscar ninguém.",
      "Deixar só os faroletes ligados.",
      "Usar farol alto sempre que possível."
    ],
    "answer": 0,
    "explicacao": "Farol baixo garante ver e ser visto sem ofuscar. Faroletes (posição) não substituem o farol baixo em circulação."
  },
  {
    "question": "Ao aproximar-se de cruzamento com semáforo vermelho, a conduta legal e segura determina:",
    "options": [
      "Aumentar a velocidade e passar logo.",
      "Reduzir e parar antes da faixa.",
      "Diminuir e seguir, se não houver fiscalização.",
      "Frenar bruscamente de uma vez."
    ],
    "answer": 1,
    "explicacao": "Semáforo vermelho impõe parada total antes da faixa, respeitando pedestres e demais fluxos."
  },
  {
    "question": "Ciente de que também é pedestre e passageiro, o condutor deve:",
    "options": [
      "Ultrapassar fila de veículos no sinal fechado.",
      "Ultrapassar em pontes e viadutos.",
      "Dar prioridade a pedestres só na calçada.",
      "Dar prioridade a pedestres nas faixas, sem sinal luminoso."
    ],
    "answer": 3,
    "explicacao": "A preferência ao pedestre na faixa sem semáforo é regra de proteção ao mais vulnerável."
  },
  {
    "question": "No contexto dinâmico entre pneu e pavimento, aderência é:",
    "options": [
      "Transferência de peso entre os eixos.",
      "Aceleração em curva.",
      "Atrito do pneu com o solo que mantém o carro na pista.",
      "A saída do veículo da trajetória."
    ],
    "answer": 2,
    "explicacao": "É a força de atrito disponível para tração, frenagem e mudanças de direção sem perda de trajetória."
  },
  {
    "question": "Sobre o airbag, assinale a afirmação INCORRETA:",
    "options": [
      "É instalado no volante para proteger o motorista.",
      "Complementa a ação do cinto.",
      "Funciona sozinho, mesmo sem cinto.",
      "Dispara em colisões frontais fortes."
    ],
    "answer": 2,
    "explicacao": "O airbag é dispositivo complementar de retenção; sem o cinto, sua eficácia e segurança são comprometidas."
  },
  {
    "question": "Ao se deparar com fumaça de queimadas invadindo a pista, o procedimento defensivo imediato é:",
    "options": [
      "Ligar o pisca-alerta imediatamente.",
      "Parar o veículo de qualquer forma.",
      "Acender farol baixo e seguir com cautela.",
      "Acender farol alto para ver melhor."
    ],
    "answer": 2,
    "explicacao": "Use farol baixo (melhor visibilidade sem ofuscar), reduza e, se necessário, pare em local seguro fora da corrente de tráfego."
  },
  {
    "question": "O fundamento da direção defensiva diretamente ligado à correta leitura/interpretação do cenário de trânsito é:",
    "options": [
      "Decisão.",
      "Habilidade.",
      "Atenção.",
      "Conhecimento."
    ],
    "answer": 2,
    "explicacao": "Sem atenção contínua não há percepção adequada dos riscos, o que inviabiliza decisão oportuna e segura."
  },
  {
    "question": "Entre os riscos e perigos aos quais o condutor está sujeito, assinale a opção que NÃO se classifica como risco direto, mas sim como condição adversa:",
    "options": [
      "Pessoas embarcando em coletivo.",
      "Lombadas na pista.",
      "Chuva forte.",
      "Falha mecânica do veículo."
    ],
    "answer": 2,
    "explicacao": "Chuva é condição adversa ambiental; os demais itens configuram perigos/obstáculos operacionais imediatos."
  },
  {
    "question": "Para adequar a velocidade de segurança em uma curva, o condutor deve considerar, de forma integrada:",
    "options": [
      "Apenas o raio da curva.",
      "Somente o estado da pista.",
      "Apenas a condição climática.",
      "Raio da curva, pista e clima juntos."
    ],
    "answer": 3,
    "explicacao": "A velocidade segura resulta da combinação de geometria (raio/inclinação), aderência do pavimento e condição climática."
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
