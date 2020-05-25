// Retira a classe 'selected' de todas as divs da paletta
function removeClassSelected() {
  const paletteColor = document.querySelectorAll('.color');
  for (let i = 0; i < paletteColor.length; i += 1) {
    paletteColor[i].classList.remove('selected');
  }
}

// Adiciona a classe 'selected' e pega a cor do objeto clicado
let selectedColor = 'black'; // Valor default da cor igual a black
const getPixelColor = document.querySelector('#color-palette');
function getPixel(e) {
  const element = e.target;
  removeClassSelected();
  element.classList.add('selected');
  selectedColor = getComputedStyle(e.target, null).getPropertyValue('background-color');
}
getPixelColor.addEventListener('click', getPixel);

// Essa função usa a cor da variável 'selectedColor' para pintar os pixeis clicados
const pickPixel = document.querySelector('#pixel-board');
function changePixelColor(e) {
  const pixel = e.target;
  pixel.style.backgroundColor = selectedColor;
}
pickPixel.addEventListener('click', changePixelColor);

// Limpa todos os pixeis do quadro
const buttonClear = document.getElementById('clear-board');
function clearBoard() {
  const board = document.getElementById('pixel-board');
  for (let i = 0; i < board.children.length; i += 1) {
    for (let j = 0; j < board.children.length; j += 1) {
      board.children[i].children[j].style.backgroundColor = 'white';
    }
  }
}
buttonClear.addEventListener('click', clearBoard);

// Cria um board com n x n pixels
const buttonSize = document.getElementById('generate-board');
function generateBoard() {
  document.getElementById('pixel-board').innerHTML = '';
  let size = document.getElementById('board-size').value;
  if (size.length < 1 || size === '' || size === null || isNaN(size) || size === false) {
    alert('Board inválido!');
    size = 5;
  }
  if (size < 5) {
    size = 5;
  }
  if (size > 50) {
    size = 50;
  }
  for (let i = 0; i < size; i += 1) {
    const divLine = document.createElement('tr');
    divLine.className = 'pixel-line';
    document.getElementById('pixel-board').appendChild(divLine);
    for (let j = 0; j < size; j += 1) {
      const divPixel = document.createElement('td');
      divPixel.className = 'pixel';
      document.querySelectorAll('.pixel-line')[i].appendChild(divPixel);
    }
  }
}
buttonSize.addEventListener('click', generateBoard);

// Cria um grid de 5 x 5 ao iniciar a página
let rGBColor = '';
function ramdomColor() {
  rGBColor = 'rgb(';
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  rGBColor += red + ',' + green + ',' + blue + ')';
}

function createColor(classe) {
  ramdomColor();
  document.querySelector(classe).style.backgroundColor = rGBColor;
}

function init() {
  generateBoard();
  createColor('.color2');
  createColor('.color3');
  createColor('.color4');
}
window.onload = init;
