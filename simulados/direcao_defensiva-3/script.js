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
    "question": "A visibilidade do condutor exige atenção especial e pode ser significativamente prejudicada quando ele dirige:",
    "options": [
      "Em túnel dotado de iluminação pública artificial adequada.",
      "Em via urbana bem sinalizada e iluminada.",
      "Durante a noite, em situação de chuva, garoa ou presença de neblina.",
      "Em pleno dia, céu limpo e sol aparente."
    ],
    "answer": 2,
    "explicacao": "A visibilidade é reduzida quando há chuva, garoa ou neblina, principalmente à noite, exigindo que o condutor redobre a atenção, reduza a velocidade e aumente a distância de seguimento."
  },
  {
    "question": "Os chamados pontos cegos são áreas externas que não são captadas diretamente pelos espelhos retrovisores. Para reduzir o risco associado a eles, a conduta mais adequada é:",
    "options": [
      "Ajustar somente o espelho externo para privilegiar o campo lateral.",
      "Regular corretamente os espelhos externos e interno, ampliando a visão traseira e lateral.",
      "Manter regulado apenas o espelho interno, priorizando a visão traseira.",
      "Inclinar o espelho interno para a lateral esquerda, ampliando o campo lateral imediato."
    ],
    "answer": 1,
    "explicacao": "Ajustar espelhos internos e externos de forma correta diminui significativamente os pontos cegos e amplia a segurança em mudanças de faixa e ultrapassagens."
  },
  {
    "question": "Situações que reduzem o atrito pneu-pista e dificultam o controle em frenagens são:",
    "options": [
      "Rodas trincadas, suspensão ou amortecedores comprometidos.",
      "Neblina intensa e fumaça de queimadas às margens da via.",
      "Ondulações, depressões e lombadas acentuadas no pavimento.",
      "Lama em estradas não pavimentadas e lâmina d’água sobre pista asfaltada."
    ],
    "answer": 3,
    "explicacao": "A presença de lama ou lâmina d’água reduz drasticamente o atrito, facilitando derrapagens e a perda de aderência, aumentando o risco de aquaplanagem."
  },
  {
    "question": "O termo 'condições adversas' refere-se a:",
    "options": [
      "Fatores originados apenas por falhas de fiscalização que resultam em risco.",
      "Situações pessoais do condutor ou externas a ele, que podem gerar acidentes.",
      "Problemas totalmente alheios ao controle do condutor e que sempre geram acidentes.",
      "Situações comuns no trânsito, onde apenas a distração do condutor pode gerar perigo."
    ],
    "answer": 1,
    "explicacao": "Condições adversas incluem fatores do condutor (sono, fadiga) ou do meio (chuva, buracos, má sinalização), todos capazes de aumentar riscos."
  },
  {
    "question": "De acordo com a legislação de trânsito, sono e fluxo intenso em véspera de feriados prolongados são classificados, respectivamente, como condições adversas de:",
    "options": [
      "Condutor e trânsito.",
      "Tempo e condutor.",
      "Condutor e via.",
      "Via e tráfego."
    ],
    "answer": 0,
    "explicacao": "O sono é condição adversa do condutor e o movimento intenso em datas festivas é condição adversa do trânsito, ambos aumentando a probabilidade de sinistros."
  },
  {
    "question": "Na ausência de acostamento, caso o condutor precise imobilizar o veículo em emergência, a situação caracteriza-se como condição adversa relacionada:",
    "options": [
      "Ao clima e ambiente.",
      "Ao condutor.",
      "À via.",
      "Ao veículo."
    ],
    "answer": 2,
    "explicacao": "A falta de acostamento é uma condição adversa da via, exigindo sinalização adequada do local para prevenir colisões traseiras."
  },
  {
    "question": "Ao perceber na rodovia movimentos fortes na vegetação à margem, o que indica vento lateral, o condutor deve:",
    "options": [
      "Reduzir velocidade, sinalizar e transitar pelo acostamento.",
      "Reduzir a velocidade e adequar a marcha para manter estabilidade.",
      "Acelerar bruscamente, aumentando a aderência pela força do motor.",
      "Manter velocidade e segurar levemente o volante para evitar capotagem."
    ],
    "answer": 1,
    "explicacao": "Diante de ventos laterais, a redução da velocidade e a adequação da marcha aumentam a estabilidade e diminuem o risco de perda de controle."
  },
  {
    "question": "Uma condição adversa potencialmente geradora de acidentes é:",
    "options": [
      "Veículo em perfeito estado de conservação.",
      "Céu limpo, sol ameno e boa visibilidade.",
      "Condutor descansado e concentrado.",
      "Via mal conservada, com buracos e sinalização deficiente."
    ],
    "answer": 3,
    "explicacao": "A conservação inadequada da via, como buracos e sinalização apagada, configura condição adversa e aumenta risco de sinistros."
  },
  {
    "question": "Assinale a alternativa que contém exemplos de 'condição adversa de via':",
    "options": [
      "Neblina, chuva e trânsito intenso.",
      "Falta de combustível, pneu furado e faróis queimados.",
      "Desníveis, buracos, trechos escorregadios e lombadas.",
      "Vento lateral forte e granizo."
    ],
    "answer": 2,
    "explicacao": "Desníveis e defeitos no pavimento fazem parte das condições adversas da via, podendo comprometer a segurança."
  },
  {
    "question": "Ao trafegar à noite, em via não iluminada e com fluxo em ambos os sentidos, o uso correto da iluminação é:",
    "options": [
      "Utilizar luz alta para maior alcance visual, em benefício de todos.",
      "Manter luz baixa para não ofuscar condutores em sentido oposto.",
      "Usar apenas as lanternas de posição.",
      "Acender luz alta em conjunto com faroletes para reforço."
    ],
    "answer": 1,
    "explicacao": "Nessa situação, a luz baixa deve ser usada para preservar a visibilidade sem ofuscar veículos que vêm em sentido contrário."
  },
  {
    "question": "Entre as condições adversas ligadas ao clima e ao ambiente, destacam-se:",
    "options": [
      "Sinalização horizontal apagada e árvores encobrindo placas.",
      "Fumaça intensa de queimadas e rajadas de vento.",
      "Curvas perigosas não sinalizadas e chuva forte.",
      "Buracos no asfalto e depressões da pista."
    ],
    "answer": 1,
    "explicacao": "Fumaça de queimadas e ventos fortes são condições ambientais que reduzem visibilidade e controle do veículo."
  },
  {
    "question": "Ao estacionar de ré em garagem escura, aumenta o risco de colisão se estiverem queimadas as lâmpadas das:",
    "options": [
      "Luzes de ré.",
      "Luzes de freio.",
      "Lanternas de posição.",
      "Luzes baixa e alta."
    ],
    "answer": 0,
    "explicacao": "As luzes de ré iluminam o trajeto durante manobras e alertam terceiros sobre o movimento do veículo."
  },
  {
    "question": "Para evitar aquaplanagem ao passar sobre poças, o condutor deve:",
    "options": [
      "Reduzir a velocidade, usando apenas o freio-motor.",
      "Frear e acelerar simultaneamente para manter equilíbrio.",
      "Aumentar a velocidade para encurtar o tempo sobre a água.",
      "Manter velocidade e frear bruscamente."
    ],
    "answer": 0,
    "explicacao": "A prevenção da aquaplanagem exige redução de velocidade e uso do freio-motor, sem manobras bruscas."
  },
  {
    "question": "Um condutor iniciante em rodovia de pista dupla sente-se inseguro e nervoso, aumentando o risco de acidente. Essa é uma condição adversa relacionada a:",
    "options": [
      "Via.",
      "Clima.",
      "Veículo.",
      "Condutor."
    ],
    "answer": 3,
    "explicacao": "A insegurança e a falta de experiência configuram condição adversa do condutor, elevando o risco de erro ao dirigir."
  },
  {
    "question": "Antes de iniciar a circulação, o condutor deve verificar o funcionamento das luzes:",
    "options": [
      "Faróis, freio e luzes internas.",
      "Faróis, freio e ré.",
      "Faróis, freio, pisca-alerta, placa, indicadores de direção e ré.",
      "Faróis, freio e apenas o pisca-alerta."
    ],
    "answer": 2,
    "explicacao": "Todos os equipamentos obrigatórios de iluminação devem estar em funcionamento para circulação segura."
  },
  {
    "question": "Quando o farol baixo de veículo em sentido contrário ofusca outro condutor, é indício de:",
    "options": [
      "Problema na suspensão dianteira.",
      "Pneus descalibrados do lado direito.",
      "Lâmpada queimada em uma das lanternas.",
      "Falta de regulagem e alinhamento dos faróis."
    ],
    "answer": 3,
    "explicacao": "O desalinhamento dos faróis é a principal causa do ofuscamento indevido, comprometendo a segurança."
  },
  {
    "question": "São atitudes que caracterizam direção segura:",
    "options": [
      "Conhecimento da legislação associado à agressividade ao volante.",
      "Audácia e rapidez nas manobras.",
      "Prudência aliada à habilidade de condução.",
      "Conhecimento mecânico e ousadia nas ultrapassagens."
    ],
    "answer": 2,
    "explicacao": "Prudência e habilidade constituem o alicerce da direção segura e preventiva."
  },
  {
    "question": "O ofuscamento pela incidência direta do sol sobre os olhos do condutor caracteriza condição adversa ligada a:",
    "options": [
      "Condutor.",
      "Veículo.",
      "Clima/ambiente.",
      "Via."
    ],
    "answer": 2,
    "explicacao": "O sol, quando ofusca a visão do condutor, é condição adversa ambiental, exigindo cautela redobrada."
  },
  {
    "question": "Condições adversas de veículo incluem:",
    "options": [
      "Pneus gastos, freios desregulados e lâmpadas queimadas.",
      "Retrovisores defeituosos e cinto com mau funcionamento.",
      "Falta de buzina, limpadores inoperantes e falha em equipamentos obrigatórios.",
      "Modelo antigo do veículo e desgaste natural do motor."
    ],
    "answer": 2,
    "explicacao": "Equipamentos obrigatórios defeituosos, limpadores quebrados e ausência de buzina comprometem a segurança."
  },
  {
    "question": "Dirigir em rodovia sob forte chuva ou neblina é condição adversa. Nessa situação, a atitude que reduz a segurança é:",
    "options": [
      "Aumentar a velocidade para ultrapassar os mais lentos.",
      "Reduzir a velocidade e adequá-la às condições locais.",
      "Parar em local seguro até que o tempo melhore.",
      "Aumentar a distância de seguimento em relação ao da frente."
    ],
    "answer": 0,
    "explicacao": "Em clima adverso, aumentar a velocidade agrava o risco; a conduta correta é reduzir ou interromper a marcha."
  },
  {
    "question": "O condutor age preventivamente e torna o trânsito mais seguro quando:",
    "options": [
      "Atravessa o sinal vermelho com cautela.",
      "Posiciona o triângulo logo após curva fechada, colado no veículo.",
      "Mantém atenção a pedestres na pista de rolamento.",
      "Usa a buzina de forma insistente ao se aproximar de ciclistas."
    ],
    "answer": 2,
    "explicacao": "A atenção constante aos pedestres é elemento fundamental da direção preventiva."
  },
  {
    "question": "Se o condutor não adotar medidas preventivas, algumas condições que favorecem acidentes são:",
    "options": [
      "Granizo, vento forte e freios em perfeito estado.",
      "Faróis alinhados, fumaça e neblina.",
      "Boa visibilidade, pneus calibrados e óleo na pista.",
      "Chuva intensa, sono do condutor e buracos na via."
    ],
    "answer": 3,
    "explicacao": "Chuvas, fadiga e irregularidades na pista são fatores que, sem prevenção, podem culminar em sinistros."
  },
  {
    "question": "Demonstra comportamento seguro o condutor que:",
    "options": [
      "Excede o limite de velocidade para concluir ultrapassagem.",
      "Ultrapassa em cruzamento sinalizado.",
      "Ultrapassa em contramão sobre pontes.",
      "Reduz a velocidade ao ser ultrapassado por outro veículo."
    ],
    "answer": 3,
    "explicacao": "Reduzir a velocidade ao ser ultrapassado é conduta que evidencia consciência e respeito à segurança."
  },
  {
    "question": "Se, em linha reta, o veículo tende a puxar para um dos lados, isso geralmente decorre de:",
    "options": [
      "Amortecedores em bom funcionamento.",
      "Desalinhamento ou cambagem inadequada.",
      "Pneus devidamente calibrados.",
      "Problema no diferencial traseiro."
    ],
    "answer": 1,
    "explicacao": "A falta de alinhamento da direção ou da cambagem leva o veículo a puxar lateralmente."
  },
  {
    "question": "Insônia, estresse, dificuldade auditiva e falta de concentração são exemplos de condições adversas ligadas a:",
    "options": [
      "Veículo.",
      "Condutor.",
      "Trânsito.",
      "Pedestre."
    ],
    "answer": 1,
    "explicacao": "Esses fatores reduzem a capacidade de condução segura do condutor, aumentando o risco de acidentes."
  },
  {
    "question": "As colisões frontais são mais comuns em vias:",
    "options": [
      "De mão única.",
      "De tráfego rápido e exclusivo.",
      "De mão dupla.",
      "Com separação por canteiro central."
    ],
    "answer": 2,
    "explicacao": "Em vias de mão dupla os veículos circulam em sentidos opostos, aumentando o risco de colisão frontal."
  },
  {
  "question": "Segundo o CTB, o que caracteriza uma \"estrada\" e qual é o limite geral de velocidade quando não há sinalização?",
  "options": [
    "É via rural não pavimentada (revestimento primário, como terra/cascalho); sem sinalização, o limite geral é 60 km/h para todos os veículos.",
    "É via rural pavimentada destinada ao tráfego intermunicipal; sem sinalização, o limite geral é 110 km/h para autos e motos.",
    "É via urbana de trânsito rápido com acessos controlados; sem sinalização, o limite geral é 80 km/h.",
    "É qualquer via fora do perímetro urbano, pavimentada ou não; sem sinalização, o limite geral é 90 km/h."
  ],
  "answer": 0,
  "explicacao": "O CTB define estradas como vias rurais não pavimentadas (art. 60). Quando não houver placa, o limite geral para estradas é 60 km/h para todos os veículos (art. 61, §1º)."
  },
  {
    "question": "Um condutor que age em favor da segurança no trânsito é aquele que:",
    "options": [
      "Ultrapassa em curva sem sinalização em pista de mão dupla.",
      "Mantém pneus calibrados sempre acima da recomendação.",
      "Faz manutenções improvisadas sozinho no veículo.",
      "Guarda distância de segurança em relação ao da frente."
    ],
    "answer": 3,
    "explicacao": "Manter distância de segurança permite tempo de reação em emergências, reduzindo o risco de colisão."
  },
  {
    "question": "Durante descida de serra, o condutor deve utilizar o freio:",
    "options": [
      "De acionamento manual.",
      "Com motor desligado.",
      "Com veículo desengrenado.",
      "Usando marcha reduzida."
    ],
    "answer": 3,
    "explicacao": "A marcha reduzida utiliza o freio-motor e evita superaquecimento dos freios, garantindo maior segurança em declives."
  },
  {
    "question": "Em situação de chuva intensa ou neblina, alguns condutores ligam o pisca-alerta para 'serem vistos' enquanto seguem em movimento. De acordo com as regras de circulação e conduta, essa prática é:",
    "options": [
      "Correta nas rodovias, pois aumenta a visibilidade do veículo.",
      "Aceitável apenas se a velocidade for muito reduzida.",
      "Incorreta, pois o pisca-alerta se destina a veículo imobilizado ou a situação de emergência.",
      "Obrigatória sempre que a visibilidade for inferior a 50 metros."
    ],
    "answer": 2,
    "explicacao": "O pisca-alerta é destinado a veículo imobilizado ou a situação de emergência. Em movimento sob chuva/neblina, use farol baixo (ou de neblina, se houver), ajuste a velocidade e aumente a distância de seguimento."
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

