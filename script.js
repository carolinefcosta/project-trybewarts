// Minhas Constantes
const botaoLogin = document.getElementById('botaoLogin');
const email = document.getElementById('e-mail');
const senha = document.getElementById('senha');

const botaoEnviar = document.getElementById('submit-btn');
const inputAgreement = document.getElementById('agreement');

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

// Desabilita o botão enviar:

botaoEnviar.disabled = true;

inputAgreement.addEventListener('click', ()=>{
  if (botaoEnviar.disabled === true){
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
})

