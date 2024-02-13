let nome = document.querySelector("#name");
let email = document.querySelector("#email");
let texto = document.querySelector("#message");

let nomeOk = false;
let emailOk = false;
let textoOk = false;

function validarNome() {
    
    let textoNome = document.querySelector("#text-name");
    
    if (nome.value.length < 3) {
        textoNome.innerHTML = "Nome inválido";
        textoNome.style.color = "red";
    } else {
        textoNome.innerHTML = "Nome válido";
        textoNome.style.color = "green";
        nomeOk = true;
    }
}

function validarEmail() {
    
    let textoEmail = document.querySelector("#text-email");
    
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        textoEmail.innerHTML = "Email inválido";
        textoEmail.style.color = "red";
    } else {
        textoEmail.innerHTML = "Email válido";
        textoEmail.style.color = "green";
        emailOk = true;
    }
}

function validarMensagem() {
    
    let textoMensagem = document.querySelector("#text-message");
    
    if (texto.value.length >= 100) {
        textoMensagem.innerHTML = "Mensagem ultrapassou 100 caracteres";
        textoMensagem.style.color = "red";
        textoMensagem.style.display = "block";
    } else {
        textoMensagem.style.display = "none";
        textoOk = true;
    }
}

function enviar() {

    if (nomeOk == true && emailOk == true && textoOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente!")
    }
}