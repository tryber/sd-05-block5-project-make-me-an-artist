// Variáveis
const black = document.querySelector('.black');
const color1 = document.querySelector('.color-1');
const color2 = document.querySelector('.color-2');
const color3 = document.querySelector('.color-3');
const colorPalette = document.getElementById('color-palette')
const pixelBoard = document.getElementById('pixel-board');
const boardSize = document.getElementById('board-size');
const botaoLimpar = document.getElementById('clear-board');
const botaoGenerateBoard = document.getElementById('generate-board')


// Funções
function changeSelected() {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.classList.remove('selected');
  event.target.classList.add('selected');
}

function colorPixel() {
  const corSelecionada = document.querySelector('.selected');
  event.target.style.backgroundColor = window.getComputedStyle(corSelecionada).getPropertyValue('background-color');
}

function limparTudo() {
  for (i = 0; i < pixelBoard.children.length; i++) {
    pixelBoard.children[i].style.backgroundColor = 'white';
  }
}

function criarBoard(n) {
  pixelBoard.style.width = `${n * 42}px`;
  pixelBoard.innerHTML = '';
  for (i = 0; i < n * n; i++) {
    let pixel = document.createElement('div');
    pixelBoard.appendChild(pixel);
    pixel.classList.add('pixel');
  }
}

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

criarBoard(5);

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor() {
  const r = randomNumber(0, 255);
  const g = randomNumber(0, 255);
  const b = randomNumber(0, 255);
  const color = `rgb(${r},${g},${b})`;
  return color;
}

function setColor() {
  color1.style.backgroundColor = randomColor();
  color2.style.backgroundColor = randomColor();
  color3.style.backgroundColor = randomColor();
}

setColor();

// Event Listeners
colorPalette.addEventListener('click', changeSelected);
pixelBoard.addEventListener('click', colorPixel);
botaoLimpar.addEventListener('click', limparTudo);
botaoGenerateBoard.addEventListener('click', checkGridSize);