
//Ao clicar em uma das cores da paleta, a cor selecionada é que vai ser usada para preencher os pixels no quadro.
// Somente uma cor da paleta de cores tem a classe `selected` de cada vez
// Os pixels dentro do quadro não podem ter a classe `selected` quando são clicados
let black = document.getElementById("black");
let orange = document.getElementById("orange");
let green = document.getElementById("green");
let blue = document.getElementById("blue");

let currentSelected = document.getElementsByClassName("selected")[0];
let colorSelected = "";
function changeSelected(event) { //function deve transferir a class selected
  let colorSelected = event.target;
  if (colorSelected != currentSelected) {
    currentSelected.className -= "selected";
    colorSelected.className += " selected";
    currentSelected = document.getElementsByClassName("selected")[0];
  }
}
black.addEventListener("click", changeSelected);
orange.addEventListener("click", changeSelected);
green.addEventListener("click", changeSelected);
blue.addEventListener("click", changeSelected);


let board = querySelector(".board");
// Ao clicar em um pixel dentro do quadro após selecionar uma cor na paleta, o pixel deve ser preenchido com esta cor.
// - Ao carregar a página deve ser possível pintar os pixels de preto
// (ou seja, interpretando: é o selected que conta para isso)
// - Após selecionar uma outra cor na paleta, deve ser possível pintar os pixels com essa cor
// - Somente o pixel que foi clicado deverá ser preenchido com a cor selecionada, sem influenciar na cor dos demais pixels.
// (ou seja nao usar a class que é igual para todas, e sim um event.target).
let selectedPixel = "";
function giveColor(eventpixel) {
  let selectedPixel = eventpixel.target;
  selectedPixel.style.backgroundColor = currentSelected.value;
}
board.addEventListener("click", giveColor);

//Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
let clearButton = document.getElementById("clear-board");
let pixels = document.getElementsByClassName("pixel");
function clearBoard() {
  pixels.style.backgroundColor = "white";
}
clearButton.addEventListener("click", clearBoard);



console.log("test");