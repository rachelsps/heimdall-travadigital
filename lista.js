const tbody = document.getElementById("tabela-corpo");
let usuarios = obterUsuarios();

function renderizarTabela() {
  tbody.innerHTML = "";
  usuarios.forEach((pessoa, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${pessoa.nome}</td>
      <td>${pessoa.uid}</td>
      <td>${pessoa.matricula}</td>
      <td>
        <button class="editar-btn">Editar</button>
        <button class="excluir-btn">Excluir</button>
      </td>
    `;
    tbody.appendChild(tr);

    tr.querySelector(".editar-btn").addEventListener("click", () => editar(index));
    tr.querySelector(".excluir-btn").addEventListener("click", () => excluir(index));
  });
}

function editar(index) {
  const novoNome = prompt("Novo nome:", usuarios[index].nome);
  const novaMatricula = prompt("Nova matrícula:", usuarios[index].matricula);

  if (novoNome && novaMatricula) {
    usuarios[index].nome = novoNome.trim();
    usuarios[index].matricula = novaMatricula.trim();
    salvarUsuarios(usuarios);
    alert("Informações atualizadas com sucesso!");
    renderizarTabela();
  }
}

function excluir(index) {
  if (confirm("Tem certeza que deseja excluir este usuário?")) {
    usuarios.splice(index, 1);
    salvarUsuarios(usuarios);
    renderizarTabela();
  }
}

// Botão "Sair" com confirmação
document.getElementById("sair-btn").addEventListener("click", () => {
  if (confirm("Tem certeza que deseja sair?")) {
    window.location.href = "acesso.html";
  }
});

renderizarTabela();