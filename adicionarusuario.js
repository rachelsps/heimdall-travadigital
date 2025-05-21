import { db, collection, addDoc } from './dadostemp.js';

document.getElementById("formAdicionar").addEventListener("submit", async function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const uid = document.getElementById("UserID").value.trim();
  const matricula = document.getElementById("Matricula").value.trim();

  if (!nome || !uid || !matricula) {
    alert("Preencha todos os campos.");
    return;
  }

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
