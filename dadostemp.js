
function obterUsuarios() {
  return JSON.parse(localStorage.getItem("usuarios") || "[]");
}


function salvarUsuarios(dados) {
  localStorage.setItem("usuarios", JSON.stringify(dados));
}