var Numero = document.getElementById("NumeroInput");
var ImparBtn = document.getElementById("ImparBtn");
var ParBtn = document.getElementById("ParBtn");
var StartBtn = document.getElementById("StartBtn");

var user = "";

ImparBtn.addEventListener("click", function () {
    user = "Impar";
    console.log("Escolha: Ímpar");
});

ParBtn.addEventListener("click", function () {
    user = "Par";
    console.log("Escolha: Par");
});

StartBtn.addEventListener("click", function Iniciar() {
    if (user === "") {
        alert("Por favor, escolha Par ou Ímpar antes de jogar!");
        return;
    }

    var valorDigitado = parseInt(Numero.value);

    if (isNaN(valorDigitado)) {
        alert("Por favor, digite um número válido!");
        return;
    }

    var oculto = Math.floor(Math.random() * 5) + 1;
    var soma = valorDigitado + oculto;
    var deuPar = soma % 2 === 0;

    console.log(
        "Você jogou: " +
            valorDigitado +
            " | PC jogou: " +
            oculto +
            " | Soma: " +
            soma,
    );

    if (deuPar && user === "Par") {
        alert("A soma é " + soma + " (Par). Você ganhou!");
    } else if (!deuPar && user === "Impar") {
        alert("A soma é " + soma + " (Ímpar). Você ganhou!");
    } else {
        var resultadoTexto = deuPar ? "Par" : "Ímpar";
        alert("A soma é " + soma + " (" + resultadoTexto + "). Você perdeu!");
    }
});