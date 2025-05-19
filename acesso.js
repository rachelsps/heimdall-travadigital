
document.getElementById('acessoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const senha = e.target.senha.value;

  if (senha === '1234') {
    window.location.href = 'lista.html';
  } else {
    alert('Senha incorreta!');
  }
});