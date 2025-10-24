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
    "question": "O termômetro é utilizado para indicar:",
    "options": ["Alterações na composição do fluido de freio.", "A temperatura do líquido de arrefecimento.", "A temperatura no interior do veículo.", "A temperatura no exterior do veículo."],
    "answer": 1,
    "explicacao": "O termômetro mede a temperatura do líquido de arrefecimento, garantindo o controle do aquecimento do motor."
  },
  {
    "question": "A baixa calibragem dos pneus:",
    "options": ["Aumenta a sua vida útil.", "Facilita as manobras.", "Traz maior conforto aos ocupantes do veículo.", "Causa seu desgaste prematuro."],
    "answer": 3,
    "explicacao": "Pneus murchos desgastam mais rápido e de forma irregular, além de aumentar o consumo de combustível."
  },
  {
    "question": "A bobina tem a função de:",
    "options": ["Condensar a corrente elétrica.", "Diminuir a tensão da corrente elétrica.", "Transformar a corrente elétrica de baixa para alta tensão.", "Distribuir a corrente elétrica."],
    "answer": 2,
    "explicacao": "A bobina transforma a corrente de baixa para alta tensão, essencial para gerar faísca na vela."
  },
  {
    "question": "A circulação da água entre o motor e o radiador é forçada:",
    "options": ["Pelo carburador.", "Pela bomba d’água.", "Pela bomba de óleo.", "Pela roda d’água."],
    "answer": 1,
    "explicacao": "A bomba d’água é responsável por fazer circular o líquido de arrefecimento entre motor e radiador."
  },
  {
    "question": "A energia mecânica necessária para movimentar um veículo é gerada pelo:",
    "options": ["Motor.", "Sistema de transmissão.", "Motor de arranque.", "Bateria."],
    "answer": 0,
    "explicacao": "O motor converte energia em movimento, gerando a força que move o veículo."
  },
  {
    "question": "A estabilidade do veículo também está condicionada aos pneus. O condutor deve conferir regularmente:",
    "options": ["A calibragem dos pneus.", "O desgaste dos pneus.", "A existência de possíveis deformações na carcaça.", "Todas acima estão corretas."],
    "answer": 3,
    "explicacao": "Todos os fatores citados influenciam na estabilidade e segurança do veículo."
  },
  {
    "question": "A finalidade da sangria no sistema de freios é:",
    "options": ["Eliminar bolhas de ar do sistema de freios.", "Melhorar a sua lubrificação.", "Manter a altura do pedal constante.", "Aumentar a pressão do pedal de freio."],
    "answer": 0,
    "explicacao": "A sangria remove o ar das tubulações, garantindo eficiência da frenagem."
  },
  {
    "question": "A finalidade do carburador é:",
    "options": ["Bombear o combustível para o motor.", "Pressionar o ar para a câmara de combustão.", "Manter a temperatura do ar limpo e aquecido.", "Misturar o ar com o combustível na proporção recomendada."],
    "answer": 3,
    "explicacao": "O carburador mistura ar e combustível na proporção correta para combustão."
  },
  {
    "question": "A função básica do sistema de suspensão nos veículos automotores é:",
    "options": ["Absorver os balanços do veículo, somente quando está fazendo uma curva.", "Melhorar o controle do carro em pistas escorregadias.", "Absorver os choques provocados pelo piso irregular com o veículo em movimento.", "Absorver impactos no momento de um acidente."],
    "answer": 2,
    "explicacao": "O sistema de suspensão absorve impactos do solo, garantindo conforto e estabilidade."
  },
  {
    "question": "A finalidade da válvula termostática é:",
    "options": ["Diminuir o fluxo da água.", "Impedir a passagem da água do radiador para o carburador.", "Indicar a temperatura quando o fluxo de água diminuir.", "Permitir a passagem de água do motor para o radiador quando a temperatura ideal for atingida."],
    "answer": 3,
    "explicacao": "A válvula termostática libera o líquido de arrefecimento quando o motor atinge temperatura ideal."
  },
  {
    "question": "A função do sistema de freios montados nos veículos é:",
    "options": ["Provocar a moderação da marcha, a redução de velocidade e a imobilização do veículo.", "Distribuir de forma homogênea a rotação do motor para as rodas.", "Aumentar o atrito entre as rodas, travando-as, ao ser acionado.", "Parar e acelerar o veículo."],
    "answer": 0,
    "explicacao": "Os freios reduzem a velocidade e imobilizam o veículo com segurança."
  },
  {
    "question": "A indústria automobilística está em constante aperfeiçoamento nos veículos modernos. A direção que ajuda a diminuir o esforço físico é:",
    "options": ["Dinâmica.", "Normal.", "Elétrica.", "Mecânica."],
    "answer": 2,
    "explicacao": "A direção elétrica (ou hidráulica) reduz o esforço do condutor ao esterçar."
  },
  {
    "question": "A injeção eletrônica é uma das inovações da década de 90 e veio para substituir o “velho” carburador. Sobre ela, marque a incorreta:",
    "options": ["Sua manutenção deve ser feita a cada 20.000 km.", "Por ser um componente eletrônico, dispensa manutenção periódica.", "Os bicos injetores são os elementos que mais precisam de reparos.", "Agrega mais eficiência ao sistema de alimentação."],
    "answer": 1,
    "explicacao": "Mesmo sendo eletrônica, a injeção requer manutenção; por isso a alternativa B está incorreta."
  },
  {
    "question": "A luz do freio do seu veículo está apresentando problema. Nessa situação, você:",
    "options": ["Sai assim mesmo.", "Procura imediatamente um autoelétrico.", "Sinaliza de outra forma.", "Desconsidera o fato, pois o freio está normal."],
    "answer": 1,
    "explicacao": "Luz de freio é item essencial de segurança e deve ser consertada imediatamente."
  },
  {
    "question": "A quilometragem percorrida pelo veículo é indicada pelo:",
    "options": ["Odômetro.", "Velocímetro.", "Manômetro.", "Conta-giros."],
    "answer": 0,
    "explicacao": "O odômetro mede a distância total percorrida pelo veículo."
  },
  {
    "question": "A verificação de eventual complementação do nível de água do radiador deve ser feita:",
    "options": ["Em qualquer hora do dia.", "Com motor quente.", "Com o motor frio.", "No final de sua jornada diária."],
    "answer": 2,
    "explicacao": "A verificação deve ser feita com o motor frio para evitar riscos de queimaduras."
  },
  {
    "question": "Absorve os vapores dos gases emitidos pelo tanque de combustível:",
    "options": ["Injeção eletrônica.", "Cânister.", "Canalizador.", "Todas as afirmativas acima."],
    "answer": 1,
    "explicacao": "O cânister retém vapores do combustível para evitar sua liberação na atmosfera."
  },
  {
    "question": "Airbag é um equipamento obrigatório para prevenir:",
    "options": ["Superaquecimento do motor.", "Problemas de postura.", "Ferimentos graves em casos de colisão.", "Falhas eletrônicas."],
    "answer": 2,
    "explicacao": "O airbag reduz lesões graves em colisões ao amortecer o impacto."
  },
  {
    "question": "Amperímetro, odômetro, botão de luzes e do limpador de para-brisas são:",
    "options": ["Instrumentos do painel.", "Órgãos auxiliares do motor.", "Equipamentos obrigatórios.", "Componentes externos do painel."],
    "answer": 0,
    "explicacao": "Esses são instrumentos do painel que auxiliam o condutor na condução."
  },
  {
    "question": "Antes de efetuar uma viagem, o condutor deverá verificar os itens:",
    "options": ["Luzes indicadoras de direção e luzes de freio.", "Nível de óleo lubrificante e água do radiador.", "Palhetas do limpador de para-brisas e funcionamento dos faróis.", "Todas as alternativas estão corretas."],
    "answer": 3,
    "explicacao": "Todos esses itens são fundamentais para segurança antes de viajar."
  },
  {
    "question": "Ao acionar a chave de ignição e o motor do veículo não dar sinal de partida, o defeito pode ser:",
    "options": ["Falta de combustível.", "Falta de água no radiador.", "Na bateria ou motor de arranque.", "Entupimento no carburador."],
    "answer": 2,
    "explicacao": "Problemas comuns de partida estão ligados à bateria ou motor de arranque."
  },
  {
    "question": "Ao utilizar o extintor de incêndio de um veículo, o jato de seu conteúdo deve ser:",
    "options": ["Na direção do tanque.", "Dirigido para a base das chamas, com movimentos horizontais na forma de um leque.", "Na direção somente das chamas.", "Em qualquer direção."],
    "answer": 1,
    "explicacao": "A forma correta é direcionar o jato na base das chamas em movimentos de leque."
  },
  {
    "question": "Ao utilizar um veículo com motor ainda frio, deve-se:",
    "options": ["Pressionar o acelerador até o assoalho do veículo antes de dar a partida.", "Acelerar bastante para atingir a temperatura ideal.", "Evitar acelerações bruscas até o motor atingir a temperatura ideal.", "Aguardar a temperatura ideal dos pneus antes de sair."],
    "answer": 2,
    "explicacao": "Deve-se dirigir suavemente até o motor aquecer, evitando acelerações bruscas."
  },
  {
    "question": "As duas válvulas permanecem fechadas em qual(is) dos tempos do motor?",
    "options": ["Admissão.", "Explosão.", "Compressão.", "As afirmativas ‘B’ e ‘C’ estão corretas."],
    "answer": 3,
    "explicacao": "Durante explosão e compressão as válvulas permanecem fechadas."
  },
  {
    "question": "Assinale a alternativa correta sobre a Luz Indicadora de Direção (seta):",
    "options": ["É a luz do veículo destinada a aumentar a iluminação da via em caso de neblina, chuva forte ou nuvens de pó.", "É a luz do veículo destinada a indicar aos demais usuários da via que o condutor tem propósito de mudar de direção para a direita ou para a esquerda.", "É a luz que se encontram atrás do veículo, que o condutor está aplicando o freio de serviço.", "É o facho de luz do veículo destinada a iluminação a via até uma grande distância do veículo."],
    "answer": 1,
    "explicacao": "A seta serve para indicar mudança de direção do veículo."
  },
  {
    "question": "As peças que compõem o motor necessitam de lubrificação para:",
    "options": ["O veículo funcionar facilmente de manhã.", "Engatar melhor as marchas.", "Aumentar a sua potência.", "Reduzir seu desgaste e aquecimento."],
    "answer": 3,
    "explicacao": "A lubrificação reduz atrito, desgaste e aquecimento das peças."
  },
  {
    "question": "As motocicletas, em sua maioria, são equipadas com espelhos convexos. Se você olhar um veículo através de um espelho convexo, a posição correta deste veículo é:",
    "options": ["Mais próxima do que aquela em que você pensa que ele está.", "Não há distinção entre espelho convexo e os demais.", "Mais distante do que aquela em que você pensa que ele está.", "Distância real."],
    "answer": 2,
    "explicacao": "Nos espelhos convexos os veículos parecem mais distantes do que realmente estão."
  },
  {
    "question": "Assinale a alternativa correta:",
    "options": ["Amperímetro: indica o nível da água no radiador.", "Odômetro: indica o nível de combustível.", "Tacógrafo: registra a pressão dos pneus.", "Manômetro: indica a pressão do óleo do motor."],
    "answer": 3,
    "explicacao": "O manômetro mede a pressão do óleo do motor, garantindo sua correta lubrificação."
  },
  {
    "question": "Atualmente são adotados no Brasil três tipos de cinto de segurança. Qual deles oferece maior proteção?",
    "options": ["O transversal.", "O abdominal.", "O de três pontos.", "Todos os cintos oferecem proteção com a mesma intensidade."],
    "answer": 2,
    "explicacao": "O cinto de três pontos oferece maior proteção por segurar tronco e quadril."
  },
  {
    "question": "Banda de rodagem, carcaça de lonas, talões e flancos fazem parte do:",
    "options": ["Motor.", "Freio.", "Roda.", "Pneu."],
    "answer": 3,
    "explicacao": "Essas partes são componentes estruturais de um pneu."
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