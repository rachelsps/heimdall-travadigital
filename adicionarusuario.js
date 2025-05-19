document.getElementById("formAdicionar").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const uid = document.getElementById("UserID").value.trim();
  const matricula = document.getElementById("Matricula").value.trim();

  if (!nome || !uid || !matricula) {
    alert("Preencha todos os campos.");
    return;
  }

  const novosDados = { nome, uid, matricula };
  const usuarios = obterUsuarios();

  usuarios.push(novosDados);
  salvarUsuarios(usuarios);

    window.location.href = "lista.html";
  });