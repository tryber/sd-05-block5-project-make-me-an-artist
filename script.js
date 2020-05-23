// variaveis
const black = document.getElementById('black');
const cor2 = document.getElementById('cor2');
const cor3 = document.getElementById('cor3');
const cor4 = document.getElementById('cor4');
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
// let str = inputTamanho.value.split(' ').join('');
function changeSize() {
  let str = inputTamanho.value;
  if (str.length === 0 || str === '0') {
    alert('Board inválido!');
  } else {
    if (parseInt(str, 10) < 5) {
      str = 5;
    } else if (parseInt(str, 10) > 50) {
      str = 50;
    }
    board.innerHTML = '';
    for (let linha = 1; linha <= str; linha += 1) {
      const firstDiv = document.createElement('div');
      firstDiv.className = 'pixel first blank';
      board.appendChild(firstDiv);
      for (let coluna = 2; coluna <= str; coluna += 1) {
        const otherDivs = document.createElement('div');
        otherDivs.className = 'pixel blank';
        board.appendChild(otherDivs);
      }
    }
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

function getRandomColor() {
  const r = getRandomInt(0,255);
  const g = getRandomInt(0,255);
  const b = getRandomInt(0,255);
  const color = `rgb(${r},${g},${b}`
  return color;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function setRandomColor() {
  const setCor2 = getRandomColor();
  cor2.style.backgroundColor = setCor2
  cor2.classList.add(setCor2)
  const setCor3 = getRandomColor();
  cor3.style.backgroundColor = setCor3
  cor3.classList.add(setCor3)
  const setCor4 = getRandomColor();
  cor4.style.backgroundColor = setCor4
  cor4.classList.add(setCor4)
}
// ListenerEvents
black.addEventListener('click', changeSelected);
cor2.addEventListener('click', changeSelected);
cor3.addEventListener('click', changeSelected);
cor4.addEventListener('click', changeSelected);
board.addEventListener('click', colorPixel);
limpar.addEventListener('click', clearBoard);
botaoTamanho.addEventListener('click', changeSize);

setRandomColor()