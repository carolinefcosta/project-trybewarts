const botaoLogin = document.getElementById('botaoLogin');
const email = document.getElementById('e-mail');
const senha = document.getElementById('senha');
const inputAgreement = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const contador = document.getElementById('counter');
const botaoEnviar = document.getElementById('submit-btn');

botaoLogin.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

inputAgreement.addEventListener('click', () => {
  if (botaoEnviar.disabled === true) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
});

textArea.addEventListener('keyup', () => {
  const contacaracter = textArea.value.length;
  const subtracao = 500 - contacaracter;
  contador.innerText = subtracao;
});
