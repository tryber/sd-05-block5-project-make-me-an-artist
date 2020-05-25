// Feito por Elisângelo
// scripts para pintar os pixels de cores que foram seleciondas pelo usuario
window.onload = function(){
let selected = document.getElementsByClassName("black")[0];
let cores = document.getElementById("color-palette");
let clearButton = document.getElementById('clear-board');
let pixelBoard = document.getElementById("pixel-board");

let corSelecionada= '';
cores.addEventListener("click", selecionaCor);
clearButton.addEventListener('click',limpaPixel);
pixelBoard.addEventListener("click", colorePixel);


selected.classList.remove("selected");

function selecionaCor(e){
    let selecao = document.querySelector(".selecao");
    let cor = e.target;
    selecao.innerHTML = cor.classList[1];
    corSelecionada.className = cor.classList[1].className;
    console.log(corSelecionada.className);
    console.log("passei por aqui");
}
function limpaPixel(){
    for( limpa in pixelBoard){
        pixelBoard[limpa].children.style = "background-color: white";
    }
}
function colorePixel(e){
    let  pixelSelecionado = document.querySelectorAll("pixel")[e.target];
    pixelSelecionado.style = corSelecionada.style.backgroundColor;  
}

}