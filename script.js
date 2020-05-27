// Variáveis
const black = document.querySelector(".black");
const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");
const color3 = document.querySelector(".color-3");
const colorPalette = document.getElementById("color-palette")
const pixelBoard = document.getElementById("pixel-board");
const botaoLimpar = document.getElementById("clear-board");
const boardSize = document.getElementById('board-size');
const generateBoard = document.getElementById('generate-board')

// Funções

// Essa é pra selecionar uma cor da paleta de cores
function changeSelected() {
  const corSelecionada = document.querySelector('.selected'); 
  corSelecionada.classList.remove('selected');
  event.target.classList.add('selected');
}

// Essa é pra colorir um pixal quando clicar
function colorPixel() {
  corSelecionada = document.querySelector('.selected');
  let currentColor = corSelecionada.classList[1];
  event.target.classList.remove(event.target.classList[1]);
  event.target.classList.add(currentColor);
}

// Essa é pra fazer funcionar o botão limpar
function limparTudo() {
  for (i = 0; i < pixelBoard.children.length; i++) {
    let colorClass = pixelBoard.children[i].classList[1];
    pixelBoard.children[i].classList.remove(colorClass);
    pixelBoard.children[i].classList.add("blank");
  }
}

// Essa é pra criar o board
function criarBoard(n) {
  pixelBoard.style.width = `${n * 42}px`;
  pixelBoard.innerHTML = '';
  for (i = 0; i < n * n; i++) {
    let pixel = document.createElement('div');
    pixelBoard.appendChild(pixel);
    pixel.classList.add('pixel');
  }
}

// Essa é pra definir o tamanho máximo e mínimo do board
function checkGridSize() {
  let n = boardSize.value;
  if (n === '') {
    alert('Board inválido!')
  } else if (n <= 5) {
    n = 5;
  } else if (n >= 50) {
    n = 50;
  }
  criarBoard(n);
}

// Event Listeners
colorPalette.addEventListener("click", changeSelected);
pixelBoard.addEventListener("click", colorPixel);
botaoLimpar.addEventListener("click", limparTudo);
generateBoard.addEventListener('click', checkGridSize);