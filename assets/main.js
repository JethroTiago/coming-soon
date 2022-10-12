const btn = document.getElementById('botao');

btn.addEventListener("click", (e) => {
    e.preventDefault();
    checkEmail()
});

function checkEmail() {
    let emailValue = email.value.trim();

    if(emailValue = 'true') {
        console.log('Email enviado!');
    } else {
        console.log('Falha');
    }
}