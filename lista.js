import { db, collection, getDocs, updateDoc, deleteDoc, doc } from './dadostemp.js';

const tbody = document.getElementById("tabela-corpo");

async function carregarUsuarios() {
  tbody.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "usuarios"));
  querySnapshot.forEach((documento) => {
    const pessoa = documento.data();
    const id = documento.id;

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

    tr.querySelector(".editar-btn").addEventListener("click", () => editarUsuario(id, pessoa));
    tr.querySelector(".excluir-btn").addEventListener("click", () => excluirUsuario(id));
  });
}

async function editarUsuario(id, dados) {
  const novoNome = prompt("Novo nome:", dados.nome);
  const novaMatricula = prompt("Nova matrícula:", dados.matricula);

  if (novoNome && novaMatricula) {
    try {
      await updateDoc(doc(db, "usuarios", id), {
        nome: novoNome.trim(),
        matricula: novaMatricula.trim()
      });
      alert("Atualizado com sucesso!");
      carregarUsuarios();
    } catch (error) {
      console.error("Erro ao atualizar:", error);
    }
  }
}

async function excluirUsuario(id) {
  if (confirm("Tem certeza que deseja excluir este usuário?")) {
    try {
      await deleteDoc(doc(db, "usuarios", id));
      carregarUsuarios();
    } catch (error) {
      console.error("Erro ao excluir:", error);
    }
  }
}

document.getElementById("sair-btn").addEventListener("click", () => {
  if (confirm("Tem certeza que deseja sair?")) {
    window.location.href = "acesso.html";
  }
});

document.getElementById("adicionar-btn").addEventListener("click", () => {
  window.location.href = "adicionarusuario.html";
});


carregarUsuarios();
