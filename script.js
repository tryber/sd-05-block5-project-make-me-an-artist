// Desenhar o pixel board;
let totalRows = 5;
let totalPixels = 5;

function createBoard() {
  let table = document.querySelector('table');
  for (let r = 0; r < totalRows; r += 1) {
    let pixelRow = document.createElement('tr');

    for (let p = 0; p < totalPixels; p += 1) {
      let pixels = document.createElement('td');
      pixels.className = 'pixel';
      pixels.addEventListener('click', changeColor);
      pixelRow.appendChild(pixels);
    }
  table.appendChild(pixelRow);
  }
}
window.onload=createBoard;

// Função para tirar a class '.selected'
function removeSelected() {
  let paletteColor = document.querySelectorAll('.color');
  for (i = 0; i < paletteColor.length; i += 1) {
    paletteColor[i].classList.remove('selected');
  }
}

// Selecionar e pintar os pixels;
let colorSelect = 'black';
let pixelColor = document.querySelector('#color-palette');

function selectColor(event) {
  let element = event.target;
  removeSelected();
  element.classList.add('selected');
  colorSelect = getComputedStyle(event.target, null).getPropertyValue('background-color');
}
pixelColor.addEventListener('click', selectColor);

function changeColor(event) {
  let pixel = event.target;
  pixel.style.backgroundColor = colorSelect;
}

// Botão de limpeza
let clearButton = document.getElementById('clear-board');
function clearPixels() {
  let board = document.getElementById('pixel-board');
  for (let i = 0; i < board.children.length; i += 1) {
    for (let j = 0; j < board.children.length; j += 1) {
      board.children[i].children[j].style.backgroundColor = 'white';
    }
  }
}
clearButton.addEventListener('click', clearPixels);
