// Definição das variáveis
const black = document.getElementById('black');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const colorPalette = document.getElementById('color-palette');
let corAtual = black;

// Funções
function selectColor() {
  corAtual.classList.remove('selected');
  event.target.classList.add('selected');
  corAtual = event.target;
}

// Event Listeners
colorPalette.addEventListener('click' , selectColor);