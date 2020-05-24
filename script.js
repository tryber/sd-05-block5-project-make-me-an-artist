// Feito por Elisângelo
// scripts para pintar os pixels de cores que foram seleciondas pelo usuario
window.load = function(){
let selectedColor = document.querySelector(".color.black").className = className + " " + "selected";
let clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click',limpaPixel);
let pixelBoard = document.getElementsByClassName("pixel")[0];
function limpaPixel(){
    for( limpa in pixelBoard){
        [limpa].style.backgroundColor = "white";

    }
}


}