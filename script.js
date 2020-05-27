const botao = document.getElementById ('clear-board');
const cor1 = document.getElementById ('sqr1');
const cor2 = document.getElementById ('sqr2');
const cor3 = document.getElementById ('sqr3');
const cor4 = document.getElementById ('sqr4');
let black = document.querySelector(".black");
let cor = black;
const quadrado = document.getElementById ('pixel-board');
const pixels = document.querySelectorAll ('.pixel');

cor1.addEventListener("click", selecionaCor);
cor2.addEventListener("click", selecionaCor);
cor3.addEventListener("click", selecionaCor);
cor4.addEventListener("click", selecionaCor);
quadrado.addEventListener ("click", mudaCor);

function selecionaCor (event) {
    if (event.target === black) {
        cor.classList.remove ("selected");
        cor1.classList.add ("selected");
        cor = event.target;
    }
    else if (event.target === cor2) {
        cor.classList.remove("selected");
        cor2.classList.add ("selected")
        cor = event.target;
    }
    else if (event.target === cor3) {
        cor.classList.remove ("selected");
        cor3.classList.add ("selected");
        cor = event.target;
    }
    else if (event.target === cor4) {
        cor.classList.remove ("selected");
        cor4.classList.add ("selected");
        cor = event.target;
    }
}

function mudaCor (event) {
    let novaCor = document.querySelector ('.selected');
    event.target.style.backgroundColor = getComputedStyle (novaCor).backgroundColor;
}


for (let i=0; i < pixels.length; i += 1){
     botao.addEventListener ('click', function () {
         pixels[i].style.backgroundColor = 'white';
     });               
}
