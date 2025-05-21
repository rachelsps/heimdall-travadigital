import { db, collection, addDoc } from './dadostemp.js';

document.getElementById("formAdicionar").addEventListener("submit", async function (e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value.trim();
  const uid = document.getElementById("UserID").value.trim();
  const matricula = document.getElementById("Matricula").value.trim();

  if (!nome || !uid || !matricula) {
    alert("Preencha todos os campos.");
    return;
  }

  nome = formatarNome(nome)

  try {
    await addDoc(collection(db, "usuarios"), {
      nome: nome,
      uid: uid,
      matricula: matricula
    });
    window.location.href = "lista.html";
  } catch (error) {
    console.error("Erro ao adicionar usuário:", error);
    alert("Erro ao salvar. Veja o console.");
  }
});


function formatarNome(nome) {
  return nome
    .toLowerCase()
    .split(' ')
    .filter(palavra => palavra.trim() !== '')
    .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
    .join(' ');
}

document.getElementById("nome").addEventListener("blur", function () {
  const nomeFormatado = formatarNome(this.value);
  this.value = nomeFormatado;
});
