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
    "options": ["Código de Trânsito Brasileiro.", "Código Nacional de Trânsito.", "Código Brasileiro de Trânsito.", "Código de Trânsito."],
    "answer": 0,
    "explicacao": "A lei que rege o trânsito é o Código de Trânsito Brasileiro (CTB)."
  },
  {
    "question": "Considera-se trânsito a utilização das vias por:",
    "options": ["Pessoas e animais, isolados ou em grupos.", "Pessoas, veículos e animais, isolados ou em grupos, conduzidos ou não.", "Veículos conduzidos por condutores habilitados.", "Pessoas e veículos, conduzidos ou não."],
    "answer": 1,
    "explicacao": "Trânsito envolve pessoas, veículos e animais, conduzidos ou não."
  },
  {
    "question": "As praias abertas à circulação pública, as vias internas pertencentes aos condomínios constituídos por unidades autônomas e os estacionamentos privados de uso coletivo são, para efeito do Código de Trânsito Brasileiro, considerados:",
    "options": ["Vias terrestres.", "Áreas autônomas.", "Vias privativas.", "Áreas restritas."],
    "answer": 0,
    "explicacao": "Todos esses locais são considerados vias terrestres para efeitos do CTB."
  },
  {
    "question": "O infrator que julgar improcedente a penalidade de multa que lhe foi aplicada poderá interpor recurso, em 1ª instância, junto:",
    "options": ["ao CETRAN.", "ao DENATRAN.", "ao CONTRAN.", "à JARI."],
    "answer": 3,
    "explicacao": "O recurso em primeira instância é feito junto à JARI (Junta Administrativa de Recursos de Infrações)."
  },
  {
    "question": "Organizar e manter o Registro Nacional de Carteiras de Habilitação (RENACH) compete ao:",
    "options": ["CONTRAN.", "DENATRAN.", "DETRAN.", "CETRAN."],
    "answer": 1,
    "explicacao": "A responsabilidade pelo RENACH é do DENATRAN."
  },
  {
    "question": "Os Departamentos de Estradas de Rodagens são órgãos:",
    "options": ["Normativos do Sistema Nacional de Trânsito.", "Com jurisdição em todo território nacional.", "Executivos do Sistema Nacional de Trânsito.", "Normativos do Conselho Nacional de Trânsito."],
    "answer": 2,
    "explicacao": "Os DERs são órgãos executivos do Sistema Nacional de Trânsito."
  },
  {
    "question": "Vistoriar, inspecionar quanto às condições de segurança veicular, registrar, emplacar, selar a placa, licenciar veículos, expedindo o Certificado de Registro e Licenciamento Anual, mediante delegação do órgão federal competente, é de responsabilidade de:",
    "options": [
      "Órgãos e entidades executivos de trânsito dos Estados e do Distrito Federal, no âmbito de sua circunscrição.",
      "Órgãos e entidades executivos rodoviários de União e dos Estados, no âmbito de sua circunscrição.",
      "Policiais Militares dos Estados e do Distrito Federal.",
      "Departamento Nacional de Infraestrutura de Trânsito."
    ],
    "answer": 0,
    "explicacao": "Essa atribuição é dos DETRANs estaduais e do Distrito Federal."
  },
  {
    "question": "Os órgãos técnicos e consultivos que se destinam a realizar estudos e oferecer sugestões sobre assuntos específicos, são chamados de:",
    "options": ["JARI.", "DENATRAN.", "CETRAN.", "Câmaras Temáticas."],
    "answer": 3,
    "explicacao": "As Câmaras Temáticas têm função técnica e consultiva."
  },
  {
    "question": "A função exercida pela Polícia Rodoviária Federal, com o objetivo de garantir obediência às normas de trânsito, é:",
    "options": ["Fiscalização.", "Operação.", "Policiamento.", "Patrulhamento."],
    "answer": 3,
    "explicacao": "A PRF realiza patrulhamento nas rodovias federais."
  },
  {
    "question": "O Sistema Nacional de Trânsito é integrado por:",
    "options": ["Órgãos normativos, executivos, fiscalizadores e recursais.", "Órgãos de direção e executivos.", "Órgãos executivos, somente.", "Órgãos colegiados e temáticos."],
    "answer": 0,
    "explicacao": "O SNT é composto por órgãos normativos, executivos, fiscalizadores e recursais."
  },
  {
    "question": "O candidato que quiser se habilitar para conduzir veículo automotor e elétrico deverá preencher os seguintes requisitos:",
    "options": [
      "Saber ler e escrever, somente.",
      "Saber ler, escrever e possuir documento de identidade, somente.",
      "Saber ler e escrever, ser penalmente imputável, possuir CPF e documento de identificação.",
      "Ser penalmente imputável, somente."
    ],
    "answer": 2,
    "explicacao": "São requisitos: saber ler e escrever, ser imputável, ter CPF e documento de identificação."
  },
  {
    "question": "A Licença de Aprendizagem (LADV) suspensa poderá ser obtida novamente após decorridos:",
    "options": ["Seis meses.", "Três meses.", "Doze meses.", "Nove meses."],
    "answer": 0,
    "explicacao": "A LADV suspensa pode ser revalidada após seis meses."
  },
  {
    "question": "A habilitação subordinada às condições estabelecidas em convenções e acordos internacionais e às normas do CONTRAN, é aquela obtida:",
    "options": ["No Brasil.", "No seu Estado.", "No seu município.", "Em outro país."],
    "answer": 3,
    "explicacao": "É a habilitação obtida em outro país, que precisa seguir normas internacionais."
  },
  {
    "question": "O condutor para conduzir veículo motorizado de duas ou três rodas, com ou sem carro lateral, deverá estar habilitado na categoria:",
    "options": ["“A”.", "“B”.", "“C”.", "“D”."],
    "answer": 0,
    "explicacao": "Para motocicletas e similares, a categoria é a A."
  },
  {
    "question": "Assinale a alternativa que completa a questão: A categoria _____ habilita o condutor a dirigir veículo motorizado utilizado em transporte de carga, cujo peso bruto total exceda a 3.500 quilogramas.",
    "options": ["“D”.", "“E”.", "“C”.", "“B”."],
    "answer": 2,
    "explicacao": "A categoria C é para veículos de carga acima de 3.500kg."
  },
  {
    "question": "No caso de reprovação no exame teórico sobre legislação de trânsito ou de prática de direção veicular, o candidato somente poderá repetir o exame:",
    "options": [
      "A partir do 15º dia da divulgação do resultado.",
      "A partir do 16º dia da divulgação do resultado.",
      "A partir do dia seguinte da divulgação do resultado.",
      "Não há período a ser aguardado."
    ],
    "answer": 3,
    "explicacao": "Não existe prazo de carência para repetir o exame."
  },
  {
    "question": "O candidato que pretender se habilitar para a categoria “D” deverá realizar o exame de direção num veículo que tenha:",
    "options": [
      "No mínimo, 08 (oito) lugares, sem contar com o do condutor.",
      "No mínimo, 20 (vinte) lugares.",
      "Capacidade para transportar, no mínimo, 6000 (seis mil) quilogramas de carga.",
      "No mínimo, 10 (vinte) lugares."
    ],
    "answer": 1,
    "explicacao": "A categoria D exige exame em veículo com pelo menos 20 lugares."
  },
  {
    "question": "Para habilitar-se na categoria “E”, o condutor deverá possuir no mínimo:",
    "options": [
      "3 anos na categoria “B” ou 2 anos na categoria “C”.",
      "1 ano na categoria “C” ou 1 ano na categoria “D”.",
      "2 anos na categoria “C”.",
      "2 anos na categoria “D”."
    ],
    "answer": 1,
    "explicacao": "Para categoria E é preciso 1 ano em C ou 1 ano em D."
  },
  {
    "question": "O candidato à primeira habilitação poderá requerer simultaneamente:",
    "options": [
      "A habilitação nas categorias “A” e “C”.",
      "A habilitação na “A” e “D”, mais a ACC.",
      "A habilitação nas categorias “A” e “B”, ou ainda ACC e categoria “B”.",
      "As categorias “A” e “E”."
    ],
    "answer": 2,
    "explicacao": "Na primeira habilitação pode-se pedir A e B, ou ACC e B."
  },
  {
    "question": "Assinale a alternativa que completa a questão: O condutor de veículo destinado à condução de escolares deve ter idade superior a ______ anos e ser habilitado pelo menos na categoria ______.",
    "options": ["21; “B”.", "18; “D”.", "18; “B”.", "21; “D”."],
    "answer": 3,
    "explicacao": "Para escolares, exige-se idade mínima de 21 anos e categoria D."
  },
  {
    "question": "Quando da renovação da CNH, o condutor de veículo automotor deverá ser submetido ao exame de aptidão física e mental, nos seguintes períodos:",
    "options": [
      "De 05 em 05 anos, após completar 70 anos de idade.",
      "De 10 em 10 anos, até os 50 anos de idade.",
      "De 05 em 05 anos, a partir dos 40 anos de idade.",
      "De 10 em 10 anos, com idade inferior à 50 anos."
    ],
    "answer": 1,
    "explicacao": "Até os 50 anos, a renovação da CNH é a cada 10 anos."
  },
  {
    "question": "O processo do candidato à primeira habilitação ficará ativado no Órgão ou Entidade Executivo de Trânsito pelo prazo de:",
    "options": ["06 meses.", "24 meses.", "12 meses.", "Durante a validade do exame de sanidade física e mental."],
    "answer": 1,
    "explicacao": "O processo de habilitação fica ativo por 24 meses."
  },
  {
    "question": "Significa mudança de característica do veículo:",
    "options": [
      "Colocação de bancos de couro e troca da manopla de câmbio.",
      "Descarga livre e troca da marca dos pneus.",
      "A instalação de equipamentos de som e alarme.",
      "Rebaixamento da suspensão e mudança de cor."
    ],
    "answer": 3,
    "explicacao": "Mudança estrutural é rebaixamento da suspensão e alteração de cor."
  },
  {
    "question": "Denomina-se motocicleta:",
    "options": [
      "Veículo automotor de duas rodas, conduzido em posição sentada.",
      "Veículo automotor, cuja carroceria seja fechada e destinada a alojamentos, escritório, comércio ou finalidades análogas.",
      "Veículo automotor de duas rodas, com ou sem carro lateral, conduzido em posição montada.",
      "Veículo automotor com potência máxima de 50cc."
    ],
    "answer": 2,
    "explicacao": "Motocicleta é veículo de duas rodas, com ou sem carro lateral, em posição montada."
  },
  {
    "question": "Dois ciclistas descuidados colidiram em uma avenida movimentada. Machucados, os dois foram levados ao hospital. Qual dos dois tem direito ao reembolso por despesas médicas do Seguro Obrigatório – DPVAT?",
    "options": [
      "Nenhum dos dois, já que foram culpados pelo acidente.",
      "Os dois, porque a avenida que trafegavam era movimentada.",
      "Nenhum dos dois, pois o acidente não envolveu veículo automotor.",
      "Ciclistas sempre têm direito à indenização, por mais que caiam 'sozinhos'."
    ],
    "answer": 2,
    "explicacao": "O DPVAT só cobre acidentes com veículos automotores."
  },
  {
    "question": "A classificação geral dos veículos é:",
    "options": [
      "Misto, passageiros, carga, tração e coleção.",
      "Tração, espécie e categoria.",
      "Aluguel, aprendizagem, oficial e diplomático.",
      "Automotor, Misto e Particular."
    ],
    "answer": 1,
    "explicacao": "A classificação geral considera tração, espécie e categoria."
  },
  {
    "question": "Caminhonete e carro de mão são veículos, quanto a espécie, classificados como:",
    "options": ["Misto.", "De tração.", "De passageiros.", "De carga."],
    "answer": 3,
    "explicacao": "Ambos são classificados como veículos de carga."
  },
  {
    "question": "Para transitar em via pública, todo veículo automotor, elétrico, articulado, reboque ou semirreboque deverá ser licenciado:",
    "options": [
      "Semestralmente, pelo órgão executivo rodoviário do estado.",
      "Semestralmente, pelo órgão executivo de trânsito do estado.",
      "Anualmente, pelo órgão executivo de trânsito do estado.",
      "Anualmente, pelo órgão municipal de trânsito."
    ],
    "answer": 2,
    "explicacao": "O licenciamento de veículos é anual, feito pelo DETRAN."
  },
  {
    "question": "São dispensados da placa dianteira, os veículos de:",
    "options": ["Duas e três rodas.", "Quatro rodas.", "Mais de quatro rodas.", "Todos os veículos são obrigados a ter placa dianteira."],
    "answer": 0,
    "explicacao": "Somente veículos de duas e três rodas não precisam de placa dianteira."
  },
  {
    "question": "Ao comprar um veículo já registrado, o novo proprietário deverá providenciar a transferência, junto ao Detran, no prazo máximo de:",
    "options": ["60 dias.", "45 dias.", "90 dias.", "30 dias."],
    "answer": 3,
    "explicacao": "O prazo para transferência de propriedade é de 30 dias."
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