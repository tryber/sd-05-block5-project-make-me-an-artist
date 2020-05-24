// Feito por Elisângelo
// scripts para pintar os pixels de cores que foram seleciondas pelo usuario
window.load = function(){
document.querySelector(".color.black").className += "selected";
let clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click',limpaPixel);
let pixelBoard = document.getElementsByClassName("pixel")[0];
function limpaPixel(e){
    for( limpa in pixelBoard){
        pixelBoard[limpa].style.backgroundColor = "white";

    }
}


}