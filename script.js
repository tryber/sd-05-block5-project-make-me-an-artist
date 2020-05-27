const botao = document.getElementById ('clear-board');
const cor1 = document.getElementById ('sqr1');
const cor2 = document.getElementById ('sqr2');
const cor3 = document.getElementById ('sqr3');
const cor4 = document.getElementById ('sqr4');
let cor = "";
const quadrado = document.getElementsByClassName ('.pixel');

cor1.addEventListener("click", selecionaCor);
cor2.addEventListener("click", selecionaCor);
cor3.addEventListener("click", selecionaCor);
cor4.addEventListener("click", selecionaCor);
botao.addEventListener ("click", limpar);

function selecionaCor (event) {
    if (event.target === cor1) {
        cor = event.target;
    }
    else if (event.target === cor2) {
        cor = event.target;
    }
    else if (event.target === cor3) {
        cor = event.target;
    }
    else if (event.target === cor4) {
        cor = event.target;
    }
}

function mudaCor () {
    let novaCor = cor.classList[1];
    event.target.classList.remove(event.target.classList[1]);
    event.target.classList.add(novaCor);
}

function limpar (){
    sqr = quadrado.firstChild;
    for (let a = 1; a <= quadrado.children.length; a += 1){
        sqr.style = 'background-color:  white';                                                                 
    }
}