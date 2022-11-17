// Minhas Constantes
const botaoLogin = document.getElementById('botaoLogin');
const email = document.getElementById('e-mail');
const senha = document.getElementById('senha');

// Minhas Funções
function validaUsuario () {
  if(email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

// Minhas Chamadas
botaoLogin.addEventListener('click', validaUsuario);