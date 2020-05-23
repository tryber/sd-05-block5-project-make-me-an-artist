// variaveis
const black = document.getElementById('black');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');
const board = document.getElementById('pixel-board');
const limpar = document.getElementById('clear-board');
const inputTamanho = document.getElementById('board-size');
const botaoTamanho = document.getElementById('generate-board');
let selected = document.getElementsByClassName('selected')[0];
let cor = selected.classList[1];
let target = '';
let pixel = '';
// functions
function changeSelected() {
  target = event.target;
  selected.classList.remove('selected');
  target.classList.add('selected');
  selected = document.getElementsByClassName('selected')[0];
}

function changeSize() {
  if (inputTamanho.value === '') {
    alert('Board inválido');
  }
}

function clearBoard() {
  pixel = board.firstElementChild;
  for (let i = 0; i < board.children.length; i += 1) {
    const corAntiga = pixel.classList[pixel.classList.length - 1];
    pixel.classList.remove(corAntiga);
    pixel.classList.add('blank');
    pixel.style = 'background-color: white';
    pixel = pixel.nextElementSibling;
  }
}

function colorPixel() {
  cor = selected.classList[1];
  target = event.target;
  const corAntiga = target.classList[target.classList.length - 1];
  target.classList.remove(corAntiga);
  target.classList.add(cor);
  const novaCor = `background-color: ${cor} !important`;
  target.style = novaCor;
}

// ListenerEvents
black.addEventListener('click', changeSelected);
red.addEventListener('click', changeSelected);
blue.addEventListener('click', changeSelected);
yellow.addEventListener('click', changeSelected);
board.addEventListener('click', colorPixel);
limpar.addEventListener('click', clearBoard);
botaoTamanho.addEventListener('click', changeSize);
