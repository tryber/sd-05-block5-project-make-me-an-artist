// cria dinamicamente os pixels
function criarQuadros() {
  const div1 = document.querySelector('.pixel-board');

  for (let i = 0; i < 25; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    div1.appendChild(newDiv);
  }
}
criarQuadros();

// evento de click nas cores
let corAtual = 'black';

function aplicarCorBlack() {
  corAtual = 'black';
}

const coresBlack = document.querySelector('.selected');
coresBlack.addEventListener('click', aplicarCorBlack);


function aplicarCorYellow() {
  corAtual = 'yellow';
}

const coresYellow = document.querySelector('.color-yellow');
coresYellow.addEventListener('click', aplicarCorYellow);


function aplicarCorBlue() {
  corAtual = 'blue';
}

const coresBlue = document.querySelector('.color-blue');
coresBlue.addEventListener('click', aplicarCorBlue);

function aplicarCorGreen() {
  corAtual = 'green';
}

const coresGreen = document.querySelector('.color-green');
coresGreen.addEventListener('click', aplicarCorGreen);

// caixas de pixel em branco
const pixels = document.querySelectorAll('.pixel');
function identicarPixel(evento) {
  evento.target.style.backgroundColor = corAtual;
}

for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', identicarPixel);
}

// limpar cores
function apagarEstilos() {
  for (let i = 0; i < pixels.length; i += 1) {
    document.querySelectorAll('.pixel')[i].style.backgroundColor = null;
  }
}

const botaoApagarCores = document.querySelector('#clear-board');
botaoApagarCores.addEventListener('click', apagarEstilos);
