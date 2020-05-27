// Definição das variáveis
const black = document.getElementById('black');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const colorPalette = document.getElementById('color-palette');
const pixelQuadro = document.getElementById('pixel-board');
const clearBoard = document.getElementById('clear-board');
let corAtual = black;

// Funções
// Seleção de cor na paleta de cores
function selectColor() {
  corAtual.classList.remove('selected');
  event.target.classList.add('selected');
  corAtual = event.target;
}

// Altera a cor do pixel para a cor selecionada da paleta 
function changeColor() {
  
}

// Limpa a paleta de cores
function clear() {
  let pixels = document.getElementsByClassName('pixel');
  for (let i=0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

// Event Listeners
colorPalette.addEventListener('click' , selectColor);
clearBoard.addEventListener('click', clear);