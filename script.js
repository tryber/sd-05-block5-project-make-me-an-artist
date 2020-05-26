// Variáveis
let black = document.querySelector(".black");
let color1 = document.querySelector(".color-1");
let color2 = document.querySelector(".color-2");
let color3 = document.querySelector(".color-3");
let colorPalette = document.getElementById("color-palette")
let pixelBoard = document.getElementById("pixel-board");
let botaoLimpar = document.getElementById("clear-board");
let corSelecionada = black;

//Funções

//Essa é pra selecionar uma cor da paleta de cores
function changeSelected() {
  if (event.target === black) {
    corSelecionada.classList.remove("selected");
    black.classList.add("selected");
    corSelecionada = event.target;
  } else if (event.target === color1) {
    corSelecionada.classList.remove("selected");
    color1.classList.add("selected");
    corSelecionada = event.target;
  } else if (event.target === color2) {
    corSelecionada.classList.remove("selected");
    color2.classList.add("selected");
    corSelecionada = event.target;
  } else if (event.target === color3) {
    corSelecionada.classList.remove("selected");
    color3.classList.add("selected");
    corSelecionada = event.target;
  }
}

//Essa é pra colorir um pixal quando clicar
function colorPixel() {
  let currentColor = corSelecionada.classList[1];
  event.target.classList.remove(event.target.classList[1]);
  event.target.classList.add(currentColor);
}

//Essa é pra fazer funcionar o botão limpar
function limparTudo() {
  for (i = 0; i < pixelBoard.children.length; i++) {
    let colorClass = pixelBoard.children[i].classList[1];
    pixelBoard.children[i].classList.remove(colorClass);
    pixelBoard.children[i].classList.add("blank");
  }
}

//Event Listeners
colorPalette.addEventListener("click", changeSelected);
pixelBoard.addEventListener("click", colorPixel);
botaoLimpar.addEventListener("click", limparTudo);