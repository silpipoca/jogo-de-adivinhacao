const campoPalpite = document.getElementById("palpite");
const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");
const textoTentativas = document.getElementById("tentativas");

function gerarNumero() {
    return Math.floor(Math.random() * 10) + 1;
}

let numeroSecreto = gerarNumero();
let tentativas = 0;

campoPalpite.addEventListener("input", function () {
    if (campoPalpite.value >= 1 && campoPalpite.value <= 10) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
});

function enviarPalpite() {
    let palpite = Number(campoPalpite.value);

    tentativas++;
    textoTentativas.textContent = "Tentativas: " + tentativas;

    if (palpite === numeroSecreto) {
        mensagem.textContent = "Parabéns! Você acertou! Nova rodada iniciada!";
        numeroSecreto = gerarNumero();
        tentativas = 0;
        textoTentativas.textContent = "Tentativas: 0";
    } else if (palpite > numeroSecreto) {
        mensagem.textContent = "O número secreto é menor.";
    } else {
        mensagem.textContent = "O número secreto é maior.";
    }

    campoPalpite.value = "";
    botao.disabled = true;
    campoPalpite.focus();
}

botao.addEventListener("click", function () {
    enviarPalpite();
});

campoPalpite.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && botao.disabled === false) {
        enviarPalpite();
    }
});