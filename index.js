const cofre1 = document.getElementById("cofre1");
const cofre2 = document.getElementById("cofre2");
const cofre3 = document.getElementById("cofre3");

const mensagem = document.getElementById("mensagem");
const tentativasTxt = document.getElementById("tentativas");
const vitoriasTxt = document.getElementById("vitorias");
const jogarDenovo = document.getElementById("jogarDenovo");

let tentativas = 0;
let vitorias = 0;

let cofrePremiado = Math.floor(Math.random() * 3) + 1;

function escolher(numeroDoCofre) {
    tentativas++;
    tentativasTxt.textContent = "Tentativas: " + tentativas;

    if (numeroDoCofre === cofrePremiado) {
        mensagem.textContent = `Você escolheu o cofre ${numeroDoCofre}: Parabéns! Você encontrou o tesouro!!`;
        vitorias++;
        vitoriasTxt.textContent = "Vitorias: " + vitorias;
    } else {
        mensagem.textContent = `Você escolheu o cofre ${numeroDoCofre}: Que pena, o cofre está vazio...`;
    }

    if (cofrePremiado === 1) cofre1.style.backgroundColor = "green";
    else cofre1.style.backgroundColor = "red";

    if (cofrePremiado === 2) cofre2.style.backgroundColor = "green";
    else cofre2.style.backgroundColor = "red";

    if (cofrePremiado === 3) cofre3.style.backgroundColor = "green";
    else cofre3.style.backgroundColor = "red";

    cofre1.disabled = true;
    cofre2.disabled = true;
    cofre3.disabled = true;
}

cofre1.addEventListener("click", function () {
    escolher(1);
});

cofre2.addEventListener("click", function () {
    escolher(2);
});

cofre3.addEventListener("click", function () {
    escolher(3);
});

cofre3.addEventListener("mouseover", function () {
    if (!cofre3.disabled) {
        let x = Math.random() * 200 - 100;
        let y = Math.random() * 200 - 100;
        cofre3.style.transform = `translate(${x}px, ${y}px)`;
    }
});

jogarDenovo.addEventListener("click", function () {
    cofrePremiado = Math.floor(Math.random() * 3) + 1;
    mensagem.textContent = "";
    
    cofre1.disabled = false;
    cofre2.disabled = false;
    cofre3.disabled = false;

    cofre1.style.backgroundColor = "";
    cofre2.style.backgroundColor = "";
    cofre3.style.backgroundColor = "";
    
    cofre3.style.transform = "translate(0px, 0px)";
});