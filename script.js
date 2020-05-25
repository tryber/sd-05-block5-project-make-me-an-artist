// Variáveis
let black = document.getElementById("black");
let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let pixelBoard = document.getElementById("pixel-board");
let botaoLimpar = document.getElementById("clear-board");

//Funções

function colorPixel() {
  let cor = selected.classList[1];
  target = event.target;
  let corAnterior = target.classList[target.classList.length - 1];
  target.classList.remove(corAnterior);
  target.classList.add(cor);
  let novaCor = "background-color: ${cor} !important";
  target.style = novaCor;
}

function changeSelected() {
  target = event.target;
  selected.classList.remove("selected");
  target.classList.add("selected"); 
  selected = document.getElementsByClassName("selected")[0];
}

function clearBoard() {
  pixel = board.firstElementChild;
    for (let i = 0; i < board.children.length; i += 1) {
    let corAntiga = pixel.classList[pixel.classList.length - 1];
    pixel.classList.remove(corAnterior);
    pixel.classList.add("blank");
    pixel.style = "background-color: white";
    pixel = pixel.nextElementSibling;
  }
}

//Event Listeners

black.addEventListener("click", changeSelected);
red.addEventListener("click", changeSelected);
green.addEventListener("click", changeSelected);
blue.addEventListener("click", changeSelected);
pixelBoard.addEventListener("click", colorPixel);
botaoLimpar.addEventListener("click", clearBoard);