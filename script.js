//criar quadros dinâmicamente
function criarQuadros() {
  const div1 = document.querySelector('.pixel-board');

  for(let i = 0; i < 25; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    div1.appendChild(newDiv);
  }
}

criarQuadros();

//evento de click nas cores
const coresBlack = document.querySelector('.selected');
coresBlack.addEventListener('click', corBlack);

let corAtual = 'black';

function corBlack() {
  corAtual = 'black';
}

const coresYellow = document.querySelector('.color-yellow');
coresYellow.addEventListener('click', corYellow);

function corYellow() {
  corAtual = 'yellow';
}

const coresBlue = document.querySelector('.color-blue');
coresBlue.addEventListener('click', corBlue);

function corBlue() {
  corAtual = 'blue';
}

const coresGreen = document.querySelector('.color-green');
coresGreen.addEventListener('click', corGreen);

function corGreen() {
  corAtual = 'green';
}

//Identificar click na caixa de pixel e aplicar cor
const pixels = document.querySelectorAll('.pixel');
for(let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', identicarPixel);
}

function identicarPixel(evento) {
  evento.target.style.backgroundColor = corAtual;
}

//limpar cores associando ao botão
let botaoApagarCores = document.querySelector('#clear-board');
botaoApagarCores.addEventListener('click', apagarEstilos);

function apagarEstilos() {
  for(let i = 0; i < pixels.length; i += 1) {
    document.querySelectorAll('.pixel')[i].style.backgroundColor = null;
  }
}
