const black = document.getElementsByClassName("color")[0];
black.className += " selected";
const cor1 = document.getElementsByClassName("color")[1];
const cor2 = document.getElementsByClassName("color")[2];
const cor3 = document.getElementsByClassName("color")[3];

let selected = document.getElementsByClassName("selected")[0];
let corSelecionada = window
  .getComputedStyle(selected, null)
  .getPropertyValue("background-color");

black.addEventListener("click", function () {
  cor1.className = "color td";
  black.className += " selected";
  cor2.className = "color td";
  cor3.className = "color td";
  selected = document.getElementsByClassName("selected")[0];
  corSelecionada = window
    .getComputedStyle(selected, null)
    .getPropertyValue("background-color");
});

cor1.addEventListener("click", function () {
  black.className = "color td";
  cor1.className += " selected";
  cor2.className = "color td";
  cor3.className = "color td";
  selected = document.getElementsByClassName("selected")[0];
  corSelecionada = window
    .getComputedStyle(selected, null)
    .getPropertyValue("background-color");
});

cor3.addEventListener("click", function () {
  black.className = "color td";
  cor3.className += " selected";
  cor2.className = "color td";
  cor1.className = "color td";
  selected = document.getElementsByClassName("selected")[0];
  corSelecionada = window
    .getComputedStyle(selected, null)
    .getPropertyValue("background-color");
});

cor2.addEventListener("click", function () {
  black.className = "color td";
  cor2.className += " selected";
  cor3.className = "color td";
  cor1.className = "color td";
  selected = document.getElementsByClassName("selected")[0];
  corSelecionada = window
    .getComputedStyle(selected, null)
    .getPropertyValue("background-color");
});

const buttonClear = document.getElementById("clear-board");
buttonClear.addEventListener("click", function () {
  const pixel = document.querySelectorAll(".pixel");
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].setAttribute("style", "background-color: rgb(255, 255, 255)");
  }
});

let randomColor;
let cor = document.querySelectorAll(".color");
for (let c = 1; c < cor.length; c += 1) {
  randomColor =
    "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
  cor[c].setAttribute("style", "background-color: " + randomColor);
}

const boardSizeInput = document.getElementById("board-size");
const buttonGenerateBoard = document.getElementById("generate-board");
const table = document.getElementsByClassName("table")[1];
const board = document.getElementById("pixel-board");

buttonGenerateBoard.addEventListener("click", function () {
  var boardSize = boardSizeInput.value;

  if (boardSize < 5) {
    boardSize = 5;
    criaGrid();
  }
  if (boardSize > 50) {
    boardSize = 50;
    criaGrid();
  }

//   criaGrid();
    poeListenerParaTodosPixels();
});

function poeListenerParaTodosPixels() {
  document.querySelectorAll(".pixel").forEach((item) => {
    item.addEventListener("click", (event) => {
      item.setAttribute("style", "background-color: " + corSelecionada + ";");
    });
  });
}
poeListenerParaTodosPixels();

function criaGrid() {
//   boardSize = boardSizeInput.value;
//   board.innerHTML = "";
  for (let linha = 0; linha < boardSize; linha += 1) {
    let divLinha = document.createElement("div");
    divLinha.className = "tr";
    table.appendChild(divLinha);
    for (let coluna = 0; coluna < boardSize; coluna += 1) {
      let div = document.createElement("div");
      div.className = "pixel td";
      divLinha.appendChild(div);
    }
  }
  document.querySelectorAll(".pixel").forEach((item) => {
    item.addEventListener("click", (event) => {
      console.log("hello");
      item.setAttribute("style", "background-color: " + corSelecionada + ";");
    });
  });
