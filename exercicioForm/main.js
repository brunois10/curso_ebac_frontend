console.log("Js funcional")
const form = document.getElementById('formulario');
let formEValido = false;


function verificaMaior(campoA, campoB) {
    if (campoB > campoA) {
        let validade = true;
        return validade
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const campoA = document.getElementById('campoA').value;
    const campoB = document.getElementById('campoB').value;
    
    formEValido = verificaMaior(campoA, campoB);

    const containerMensagemSucesso = document.querySelector('.sucess-message');
    const containerMensagemError = document.querySelector('.error-message');

    containerMensagemSucesso.style.display = 'none'
    containerMensagemError.style.display = 'none'
    containerMensagemSucesso.innerHTML = null;
    containerMensagemError.innerHTML = null;


    if (formEValido) {
        containerMensagemSucesso.innerHTML = 'SUCESSO! B é maior do que A!';
        containerMensagemSucesso.style.display = 'block';
    } else {
        containerMensagemError.innerHTML = 'ERRO! A é maior que B';
        containerMensagemError.style.display = 'block';
    }
})
