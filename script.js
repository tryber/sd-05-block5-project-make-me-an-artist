// Definição das variáveis
const black = document.getElementById('black');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const clearBoard = document.getElementById('clear-board');
let corAtual = black;

// Funções
// Seleção de cor na paleta de cores
function selectColor() {
  corAtual.classList.remove('selected');
  event.target.classList.add('selected');
  corAtual = event.target;
}

// Colorir a paleta com a cor escolhida
function colorPixel() {
  let currentColor = corAtual.classList[1];
  event.target.classList.remove(event.target.classList[1]);
  event.target.classList.add(currentColor);
}

// Limpa a paleta de cores
function clear() {
  let pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

// Event Listeners
colorPalette.addEventListener('click', selectColor);
clearBoard.addEventListener('click', clear);
pixelBoard.addEventListener('click', colorPixel);
