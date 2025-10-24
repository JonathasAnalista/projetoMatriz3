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
    "question": "Em uma via com duplo sentido de circulação, sem sinalização horizontal, o condutor deve:",
    "options": ["Circular pelo lado esquerdo da via", "Circular pelo lado direito da via", "Circular pelo centro da pista", "Circular pelo acostamento"],
    "answer": 1,
    "explicacao": "Na ausência de sinalização, o condutor deve circular sempre pelo lado direito da via."
  },
  {
    "question": "Quando o condutor encontra uma placa de regulamentação R-2 'Dê a preferência', deve:",
    "options": ["Parar obrigatoriamente o veículo", "Diminuir a velocidade e ceder a passagem aos veículos da via preferencial", "Acelerar para entrar antes no cruzamento", "Ignorar se não houver veículos visíveis"],
    "answer": 1,
    "explicacao": "A placa R-2 obriga o condutor a ceder passagem, sem necessidade de parada obrigatória."
  },
  {
    "question": "Um motorista envolvido em acidente de trânsito com vítima deve:",
    "options": ["Retirar imediatamente a vítima do veículo e levá-la ao hospital", "Sinalizar o local, acionar o socorro e prestar auxílio até a chegada da ajuda", "Fornecer água ou alimento para acalmar a vítima", "Afastar os curiosos e deixar a vítima sozinha"],
    "answer": 1,
    "explicacao": "A conduta correta é sinalizar, acionar socorro e prestar auxílio, removendo apenas em último caso."
  },
  {
    "question": "O condutor que dirige sob efeito de álcool, de acordo com a Lei Seca, está sujeito a:",
    "options": ["Apenas multa", "Multa e suspensão do direito de dirigir", "Multa, suspensão e recolhimento da CNH", "Apenas advertência por escrito"],
    "answer": 2,
    "explicacao": "A Lei Seca prevê multa, suspensão e recolhimento da CNH do condutor alcoolizado."
  },
  {
    "question": "A cor amarela na sinalização horizontal indica:",
    "options": ["Separação de fluxos no mesmo sentido", "Separação de fluxos em sentidos opostos", "Estacionamento permitido", "Proibição de ultrapassagem apenas em curvas"],
    "answer": 1,
    "explicacao": "A cor amarela indica separação de fluxos em sentidos contrários."
  },
  {
    "question": "Quando um veículo em movimento apresenta fumaça azulada saindo pelo escapamento, isso indica:",
    "options": ["Combustível adulterado", "Queima de óleo do motor", "Problema no sistema de ignição", "Falha no catalisador"],
    "answer": 1,
    "explicacao": "A fumaça azulada é sinal de que o motor está queimando óleo lubrificante."
  },
  { "image": "tad04.png",
    "question": "O que significa esta placa de atrativos turísticos? tad-04",
    "options": [
      "Área destinada à prática de esportes náuticos.",
      "Local indicado para pesca esportiva.",
      "Área de banho e lazer aquático.",
      "Ponto de travessia de balsas ou embarcações."
    ],
    "answer": 0,
    "explicacao": "As placas de fundo marrom identificam atrativos turísticos. O pictograma mostrado representa esportes náuticos, indicando locais próprios para a prática dessa atividade."
  },
  {
    "question": "Se um motociclista transportar passageiro sem capacete, a infração é classificada como:",
    "options": ["Média", "Grave", "Gravíssima", "Leve"],
    "answer": 2,
    "explicacao": "Transportar passageiro sem capacete é infração gravíssima."
  },
  {
    "question": "Qual é a velocidade máxima permitida em rodovias de pista dupla, fora de perímetro urbano, para automóveis?",
    "options": ["80 km/h", "90 km/h", "100 km/h", "110 km/h"],
    "answer": 3,
    "explicacao": "A velocidade máxima em rodovias de pista dupla é 110 km/h para automóveis."
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
  ,
  {
    "question": "Ao iniciar uma ultrapassagem, o condutor deve:",
    "options": ["Verificar se há espaço e condições seguras para concluir a manobra", "Ligar o pisca-alerta", "Utilizar apenas o retrovisor interno", "Confiar que o veículo à frente dará passagem"],
    "answer": 0,
    "explicacao": "Ultrapassar exige verificação prévia de espaço e segurança."
  },
  {
    "question": "Em caso de derrapagem, a conduta correta é:",
    "options": ["Frear bruscamente e virar o volante para o lado contrário", "Acelerar para retomar a direção", "Tirar o pé do acelerador e virar o volante para o mesmo lado da derrapagem", "Puxar o freio de mão imediatamente"],
    "answer": 2,
    "explicacao": "Deve-se tirar o pé do acelerador e girar o volante no mesmo sentido da derrapagem."
  },
  {
    "question": "O sistema de freios ABS tem como principal vantagem:",
    "options": ["Aumentar a potência do motor", "Impedir que as rodas travem em freadas bruscas", "Reduzir o consumo de combustível", "Aumentar a velocidade máxima"],
    "answer": 1,
    "explicacao": "O ABS evita o travamento das rodas em freadas bruscas."
  },
  {
    "question": "Um pedestre atravessa fora da faixa de travessia. Nesse caso, o condutor deve:",
    "options": ["Acelerar para intimidar o pedestre", "Reduzir a velocidade ou parar, garantindo a segurança do pedestre", "Manter a velocidade e buzinar", "Ignorar o pedestre, pois ele está errado"],
    "answer": 1,
    "explicacao": "A prioridade é sempre a segurança do pedestre."
  },
  {
    "question": "O uso do farol baixo durante o dia é obrigatório:",
    "options": ["Apenas em túneis e rodovias", "Apenas em vias urbanas", "Apenas em áreas rurais", "Apenas à noite"],
    "answer": 0,
    "explicacao": "O farol baixo deve ser usado em túneis e rodovias, mesmo de dia."
  },
  {
    "question": "Uma pessoa com hemorragia arterial apresenta:",
    "options": ["Sangue vermelho-escuro e fluxo contínuo", "Sangue vermelho-vivo e jato pulsátil", "Sangue em pequenas gotas", "Apenas hematomas na pele"],
    "answer": 1,
    "explicacao": "Hemorragia arterial tem sangue vermelho-vivo e jato pulsátil."
  },
  {
    "question": "Qual órgão é responsável por normatizar o trânsito em âmbito nacional?",
    "options": ["CONTRAN", "DETRAN", "DNIT", "Polícia Rodoviária Federal"],
    "answer": 0,
    "explicacao": "O CONTRAN é o órgão normativo máximo do trânsito no Brasil."
  },
  {
    "question": "O condutor que deixa de dar passagem a veículo de transporte coletivo que deseja sair de um ponto de parada comete:",
    "options": ["Infração leve", "Infração média", "Infração grave", "Infração gravíssima"],
    "answer": 2,
    "explicacao": "Deixar de dar passagem ao transporte coletivo é infração grave."
  },
  {
    "question": "Quando a luz do óleo se acende no painel do veículo em movimento, o condutor deve:",
    "options": ["Acelerar para manter a pressão do óleo", "Continuar dirigindo até chegar ao destino", "Parar o veículo imediatamente e verificar o nível de óleo", "Apenas desligar o rádio para evitar sobrecarga"],
    "answer": 2,
    "explicacao": "A luz do óleo indica falta de pressão, o carro deve ser parado imediatamente."
  },
  {
    "question": "Em descidas longas e íngremes, o condutor deve:",
    "options": ["Descer em ponto morto para economizar combustível", "Utilizar marchas reduzidas para auxiliar o freio", "Manter apenas o freio de mão acionado", "Descer em alta velocidade para ganhar tempo"],
    "answer": 1,
    "explicacao": "Em descidas, o motor deve auxiliar os freios por meio de marchas reduzidas."
  },
  {
    "question": "O sistema de suspensão do veículo tem como função:",
    "options": ["Garantir a estabilidade e o conforto durante a condução", "Reduzir a emissão de poluentes", "Aumentar a potência do motor", "Melhorar a aerodinâmica do veículo"],
    "answer": 0,
    "explicacao": "A suspensão garante estabilidade e absorve irregularidades da pista."
  },
  {
    "question": "É considerado crime de trânsito:",
    "options": ["Estacionar em local proibido", "Dirigir sob influência de álcool acima do limite legal", "Deixar de usar o cinto de segurança", "Trafegar sem os documentos do veículo"],
    "answer": 1,
    "explicacao": "Dirigir alcoolizado acima do limite legal é crime de trânsito."
  },
  {
    "question": "Quando um veículo está em aquaplanagem, a conduta correta é:",
    "options": ["Frear bruscamente", "Acelerar para retomar o contato com o solo", "Tirar o pé do acelerador e segurar firme o volante", "Puxar o freio de mão"],
    "answer": 2,
    "explicacao": "Na aquaplanagem, deve-se soltar o acelerador e manter o volante firme."
  },
  {
    "question": "O condutor que transita em faixa ou via exclusiva de transporte coletivo comete:",
    "options": ["Infração leve", "Infração média", "Infração grave", "Infração gravíssima"],
    "answer": 2,
    "explicacao": "Transitar em faixa exclusiva de ônibus é infração grave."
  },
  {
    "question": "Um ciclista trafega na mesma via que veículos automotores. O motorista deve:",
    "options": ["Buzinar continuamente para afastá-lo", "Manter distância lateral mínima de 1,5 metro ao ultrapassar", "Forçar a ultrapassagem rapidamente", "Confiar que o ciclista vai se desviar"],
    "answer": 1,
    "explicacao": "A distância mínima lateral ao ultrapassar bicicletas é de 1,5 metro."
  },
  {
    "question": "A ultrapassagem é proibida:",
    "options": ["Em pontes e viadutos", "Em trechos de reta", "Em avenidas largas", "Em estradas rurais sem sinalização"],
    "answer": 0,
    "explicacao": "É proibido ultrapassar em pontes, viadutos e locais de risco."
  },
  {
    "question": "O excesso de carga em um veículo pode causar:",
    "options": ["Redução de consumo de combustível", "Maior estabilidade", "Desgaste prematuro dos freios e pneus", "Maior conforto aos ocupantes"],
    "answer": 2,
    "explicacao": "Excesso de carga sobrecarrega os sistemas e causa desgaste prematuro."
  },
  {
    "question": "O socorro à vítima com fratura exposta deve ser feito:",
    "options": ["Imobilizando o local e não tentando recolocar o osso", "Recolocando o osso no lugar", "Mantendo a vítima em pé", "Aplicando gelo diretamente no osso exposto"],
    "answer": 0,
    "explicacao": "Fraturas expostas devem ser imobilizadas, nunca manipular o osso."
  },
  {
    "question": "O condutor que não mantém distância de segurança em relação ao veículo à frente:",
    "options": ["Comete infração média", "Comete infração grave", "Comete infração gravíssima", "Não comete infração"],
    "answer": 1,
    "explicacao": "Deixar de manter distância de segurança é infração grave."
  },
  {
    "question": "O exame toxicológico é exigido:",
    "options": ["Apenas para motociclistas", "Para candidatos e condutores das categorias C, D e E", "Para todos os motoristas de automóveis", "Apenas para quem dirige em rodovias"],
    "answer": 1,
    "explicacao": "O exame toxicológico é obrigatório para condutores das categorias C, D e E."
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