const cores = document.getElementsByClassName ('color');
const botao = document.getElementById ('clear-board');
const cor1 = document.getElementById ('sqr1');
const cor2 = document.getElementById ('sqr2');
const cor3 = document.getElementById ('sqr3');
const cor4 = document.getElementById ('sqr4');
let sqr = "";
const quadrado = document.getElementsByClassName ('pixel');

cor1.addEventListener("click", selecionaCor);
cor2.addEventListener("click", selecionaCor);
cor3.addEventListener("click", selecionaCor);
cor4.addEventListener("click", selecionaCor);
botao.addEventListener ("click", limpar);

function selecionaCor (event) {
    if (event.target === cor1) {
        sqr = "black";
    }
    else if (event.target === cor2) {
        sqr = "darkmagenta";
    }
    else if (event.target === cor3) {
        sqr = "yellow";
    }
    else if (event.target === cor4){
        sqr = "lightseagreen";
    }
}

function mudaCor () {
    quadrado.style.getElementsByClassName = "background-color: sqr";
}

function limpar (){
    sqr = quadrado.firstChild;
    for (let a = 1; a <= quadrado.children.length; a += 1){
        sqr.style = 'background-color:  white';                                                                 
    }
}