const botaoLogin = document.getElementById('botaoLogin');
const email = document.getElementById('e-mail');
const senha = document.getElementById('senha');
const botaoEnviar = document.getElementById('submit-btn');
const inputAgreement = document.getElementById('agreement');

botaoLogin.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

botaoEnviar.disabled = true;

inputAgreement.addEventListener('click', () => {
  if (botaoEnviar.disabled === true) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
});
