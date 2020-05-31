// evento de click nas cores
let currentColor = 'black';

function aplicarCorBlack() {
  currentColor = 'black';
}

function aplicarCorRed() {
  currentColor = 'red';
}

function aplicarCorBlue() {
  currentColor = 'blue';
}

function aplicarCorGreen() {
  currentColor = 'green';
}

// caixas de pixel em branco
const pixels = document.querySelectorAll('.pixel');
function identicarPixel(event) {
  event.target.style.backgroundColor = currentColor;
}

// limpar cores
function apagarEstilos() {
  for (let i = 0; i < pixels.length; i += 1) {
    document.querySelectorAll('.pixel')[i].style.backgroundColor = null;
  }
}

const black = document.querySelector('.selected');
black.addEventListener('click', aplicarCorBlack);

const red = document.querySelector('.red');
red.addEventListener('click', aplicarCorRed);

const blue = document.querySelector('.blue');
blue.addEventListener('click', aplicarCorBlue);

const green = document.querySelector('.green');
green.addEventListener('click', aplicarCorGreen);

for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', identicarPixel);
}

const botaoApagarCores = document.querySelector('#clear-board');
botaoApagarCores.addEventListener('click', apagarEstilos);
