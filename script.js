// Feito por Elisângelo
// scripts para pintar os pixels de cores que foram seleciondas pelo usuario
window.onload = function(){
let selectedColor = document.getElementsByClassName("black").className =selectedColor+" "+"selected";
let clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click',limpaPixel);
let pixelBoard = document.getElementsByClassName("pixel")[0].children;
function limpaPixel(){
    for( limpa in pixelBoard){
        [limpa].children.style.backgroundColor = "white";
    }
}
}