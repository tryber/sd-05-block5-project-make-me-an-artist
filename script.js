// Feito por Elisângelo
// scripts para pintar os pixels de cores que foram seleciondas pelo usuario
window.onload = function(){
let selected = document.getElementsByClassName("black")[0];
let cores = document.getElementById("color-palette");
let clearButton = document.getElementById('clear-board');
let pixelBoard = document.querySelectorAll("pixel");

let corSelecionada= '';
cores.addEventListener("click", selecionaCor);
clearButton.addEventListener('click',limpaPixel);
pixelBoard.addEventListener("click", colorePixel);

if( selecionaCor()){
selected.classList.remove("selected");
}
function selecionaCor(e){
    let selecao = document.querySelector(".selecao");
    let cor = e.target;
    selecao.innerHTML = cor.classList[1];
    corSelecionada.classList= cor.classList[1];    
    console.log("passei por aqui");
}
function limpaPixel(e){
    if(e.target){ 
    for(let child = parent.firstChild; child != null; child = child.nextSibling ){
        pixelBoard[child].style.backgroundColor = "white";
        pixelBoard.classList[child] = corSelecionada.classList[0];
    }
}
}
function colorePixel(e){
    let  pixelSelecionado = document.querySelectorAll("pixel")[e.target];
    pixelSelecionado.style = corSelecionada.style.backgroundColor  
}

}