// Variáveis
let black = document.querySelector("black");
let color1 = document.querySelector("color-1");
let color2 = document.querySelector("color-2");
let color3 = document.querySelector("color-3");
let colorPalette = document.getElementById("color-palette")
let pixelBoard = document.getElementById("pixel-board");
let botaoLimpar = document.getElementById("clear-board");
let selected = black;

//Funções
function changeSelected() {
  if (event.target === black) {
    selected.classList.remove("selected");
    black.classList.add("selected");
    selected = event.target;
  } else if (event.target === color1) {
    selected.classList.remove("selected");
    color1.classList.add("selected");
    selected = event.target;
  } else if (event.target === color2) {
    selected.classList.remove("selected");
    color2.classList.add("selected");
    selected = event.target;
  } else if (event.target === color3) {
    selected.classList.remove("selected");
    color3.classList.add("selected");
    selected = event.target;
  }
}

//Event Listeners
colorPalette.addEventListener("click", changeSelected);