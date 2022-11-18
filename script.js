const botaoLogin = document.getElementById('botaoLogin');
const email = document.getElementById('e-mail');
const senha = document.getElementById('senha');
const botaoEnviar = document.getElementById('submit-btn');
const inputAgreement = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const contador = document.getElementById('counter');

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

textArea.addEventListener('keypress', () => {
  const quantCaracteres = textArea.value.length;
  contador.innerText = quantCaracteres + 1;
});
