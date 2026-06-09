var tela = document.getElementById("display");
var aux = ""

function pressed(v){
    aux = aux + v
    tela.innerHTML = aux
}

function clearAll(){
    aux = "";
    tela.innerHTML = ""
}

function backspace(){
    aux = aux.slice(0,-1);
    tela.innerHTML = aux
}

function calculate(){
    try{
    aux = eval(aux)
    tela.innerHTML = aux
}
catch{
    tela.innerHTML = "Erro";
    aux ="";
    }
}

window.addEventListener("keydown", function(event){

    let tecla = event.key;

    if(!isNaN(tecla) || tecla === "."){
        pressed(tecla);
    }

    else if(["+", "-", "*", "/"].includes(tecla)){
        pressed(tecla);
    }

    else if(tecla === "Enter"){
        calculate();
    }

    else if(tecla === "Backspace"){
        backspace();
    }

    else if(tecla === "Escape"){
        clearAll();
    }
});

var botoes = document.getElementsByTagName("button");
for (let i = 0; i < botoes.length; i++) {

    botoes[i].addEventListener('mousedown', function() {
        botoes[i].style.backgroundImage = 'linear-gradient(gray, red)';
    });

    function voltarPadrao() {
        botoes[i].style.backgroundImage = '';
    }

    botoes[i].addEventListener('mouseup', voltarPadrao);
    botoes[i].addEventListener('mouseleave', voltarPadrao);
}