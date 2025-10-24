$content = Get-Content script.js -Raw

$patternReset = 'async function resetSenha\(\) \{.*?\n\}\n'
$replacementReset = @'
async function resetSenha() {
  const email = normalizeEmail((document.getElementById("email")?.value || ""));
  const show = (m)=>{ if (typeof mostrarAlertaLogin==="function") mostrarAlertaLogin(m); else alert(m); };
  if (!email) { show("Digite seu e-mail no campo acima e clique em 'Esqueci minha senha'."); document.getElementById("email")?.focus(); return; }
  const btn = document.getElementById("btn-reset");
  const authInstance = auth || (typeof firebase !== "undefined" && typeof firebase.auth === "function" ? firebase.auth() : null);
  if (!authInstance || typeof authInstance.sendPasswordResetEmail !== "function") {
    show("Nao foi possivel carregar o servico de login. Atualize a pagina e tente novamente.");
    if (btn) btn.disabled = false;
    return;
  }
  if (btn) btn.disabled = true;
  try { await authInstance.sendPasswordResetEmail(email); show(`Enviamos um e-mail para redefinir sua senha. Remetente: ${RESET_SENDER_HINT} ?o.`); }
  catch (e) {
    console.error("resetSenha erro:", e);
    const map = {"auth/user-not-found":"Nuo encontramos esse e-mail.","auth/invalid-email":"E-mail involido.","auth/missing-email":"Digite seu e-mail."};
    show(map[e.code] || "Nuo foi poss??vel enviar agora. Tente novamente.");
  } finally { setTimeout(()=>{ if (btn) btn.disabled=false; },3000); }
}
'
$content = [regex]::Replace($content, $patternReset, $replacementReset, 'Singleline')

$patternLogin = 'function login\(\) \{.*?\n\}\n'
$replacementLogin = @'
function login() {
  clearFieldErrors();
  const email = normalizeEmail((document.getElementById("email")?.value || ""));
  const senha = (document.getElementById("senha")?.value || "");
  const btn = document.getElementById("botaoLogin");
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  if (!email || !senha || !emailOk) { showLoginBanner("Verifique e-mail e senha e tente novamente."); return; }
  const authInstance = auth || (typeof firebase !== "undefined" && typeof firebase.auth === "function" ? firebase.auth() : null);
  if (!authInstance || typeof authInstance.signInWithEmailAndPassword !== "function") {
    showLoginBanner("Servico de login indisponivel no momento. Atualize a pagina e tente novamente.");
    return;
  }
  if (btn) btn.disabled = true;
  authInstance.signInWithEmailAndPassword(email, senha)
    .then(() => {
      const salvo = JSON.parse(localStorage.getItem("usuarioLogado") || "{}");
      const nomeSalvo = salvo.nome || email.split("@")[0];
      window.currentUser = { email, nome: nomeSalvo || "Aluno" };
      localStorage.setItem("usuarioLogado", JSON.stringify(window.currentUser));
      renderMenuPrincipal();
    })
    .catch(() => { showLoginBanner("E-mail ou senha incorretos."); document.getElementById("senha")?.focus(); })
    .finally(()=>{ if (btn) btn.disabled=false; });
}
'
$content = [regex]::Replace($content, $patternLogin, $replacementLogin, 'Singleline')

$patternLogout = 'function logout\(\) \{.*?\n\}\n'
$replacementLogout = @'
function logout() {
  const finalizar = () => {
    localStorage.removeItem("usuarioLogado");
    renderLogin();
  };
  const authInstance = auth || (typeof firebase !== "undefined" && typeof firebase.auth === "function" ? firebase.auth() : null);
  if (authInstance && typeof authInstance.signOut === "function") {
    authInstance.signOut()
      .then(finalizar)
      .catch((erro) => { console.warn("Erro ao sair da conta:", erro); finalizar(); });
  } else {
    finalizar();
  }
}
'
$content = [regex]::Replace($content, $patternLogout, $replacementLogout, 'Singleline')

$oldCadastro = "  if (!auth || typeof auth.createUserWithEmailAndPassword !== \"function\") {\r\n    console.warn(\"[Cadastro] Firebase Auth indisponível.\");\r\n    return showMsg(\"Falha ao iniciar o Firebase Auth. Recarregue a página (Ctrl+F5).\");\r\n  }\r\n\r\n  try {\r\n    showMsg(\"Criando sua conta...\", true);\r\n    await auth.createUserWithEmailAndPassword(email, senha);"
$newCadastro = "  const authInstance = auth || (typeof firebase !== \"undefined\" && typeof firebase.auth === \"function\" ? firebase.auth() : null);\r\n  if (!authInstance || typeof authInstance.createUserWithEmailAndPassword !== \"function\") {\r\n    console.warn(\"[Cadastro] Firebase Auth indisponível.\");\r\n    return showMsg(\"Falha ao iniciar o Firebase Auth. Recarregue a página (Ctrl+F5).\");\r\n  }\r\n\r\n  try {\r\n    showMsg(\"Criando sua conta...\", true);\r\n    await authInstance.createUserWithEmailAndPassword(email, senha);"
$content = $content.Replace($oldCadastro, $newCadastro)

$oldAuthState = "  try {\r\n    auth.onAuthStateChanged((user) => {\r\n      if (user) {\r\n        const s = JSON.parse(localStorage.getItem(\"usuarioLogado\") || \"{}\");\r\n        const emailNorm = normalizeEmail(user.email);\r\n        window.currentUser = { email: emailNorm, nome: s.nome || \"Aluno\" };\r\n        renderMenuPrincipal();\r\n      }\r\n    });\r\n  } catch {}"
$newAuthState = "  try {\r\n    const authInstance = auth || (typeof firebase !== \"undefined\" && typeof firebase.auth === \"function\" ? firebase.auth() : null);\r\n    if (authInstance && typeof authInstance.onAuthStateChanged === \"function\") {\r\n      authInstance.onAuthStateChanged((user) => {\r\n        if (user) {\r\n          const s = JSON.parse(localStorage.getItem(\"usuarioLogado\") || \"{}\");\r\n          const emailNorm = normalizeEmail(user.email);\r\n          window.currentUser = { email: emailNorm, nome: s.nome || \"Aluno\" };\r\n          renderMenuPrincipal();\r\n        }\r\n      });\r\n    }\r\n  } catch {}"
$content = $content.Replace($oldAuthState, $newAuthState)

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText("script.js", $content, $utf8NoBom)
