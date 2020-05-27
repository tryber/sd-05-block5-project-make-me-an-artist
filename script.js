// variables
const size = 5;
const pixelBoard = document.getElementById('pixel-board');
const black = document.getElementById('black');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const boardSize = document.querySelector('#board-size');
const boardGenButton = document.querySelector('#generate-board');
let selected = document.getElementsByClassName('selected')[0];
const clearAllButton = document.getElementById('clear-board');
let target = '';

// functions
function createBoardLines() {
  const pixelLine = document.createElement('div');
  pixelLine.className = 'pixel firstLine blank';
  pixelBoard.appendChild(pixelLine);
}

function createBoardColumns() {
  const pixelColumn = document.createElement('div');
  pixelColumn.className = 'pixel blank';
  pixelBoard.appendChild(pixelColumn);
}

function createGridOfPixel(size) {
  if (parseInt(size, 10) < 5) {
    size = 5;
  } else if (parseInt(size, 10) > 50) {
    size = 50;
  }
  pixelBoard.innerHTML = '';
  for (let line = 1; line <= size; line += 1) {
    createBoardLines();
    for (let column = 2; column <= size; column += 1) {
      createBoardColumns();
    }
  }
}

function changeSize() {
  const size = boardSize.value;
  if (size.length === '') {
    alert('Board Inválido!');
  } else {
    createGridOfPixel(size);
  }
}

function changeSelectedColor() {
  target = event.target;
  selected.classList.remove('selected');
  target.classList.add('selected');
  selected = document.getElementsByClassName('selected')[0];
}

function setColorPixel(el) {
  const actualColorPixel = document.querySelector('.selected');
  const backgroundActual = actualColorPixel.classList[1];
  const actualPixel = el.target;
  actualPixel.style.backgroundColor = backgroundActual;
}

function clearAll() {
  const blanker = document.getElementsByClassName('pixel');
  for (let i = 0; i < blanker.length; i += 1) {
    blanker[i].style.backgroundColor = 'white';
  }
}

function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let newColor = `#${randomColor}`;
  if (newColor === '#ffffff' || newColor === '#FFFFFF') {
    newColor = '#ff00ff';
  }
  return newColor;
}

function setRandomColor() {
  const setColor1 = getRandomColor();
  color1.style.backgroundColor = setColor1;
  color1.classList.add(setColor1);
  const setColor2 = getRandomColor();
  color2.style.backgroundColor = setColor2;
  color2.classList.add(setColor2);
  const setColor3 = getRandomColor();
  color3.style.backgroundColor = setColor3;
  color3.classList.add(setColor3);
}

// events
clearAllButton.addEventListener('click', clearAll);
black.addEventListener('click', changeSelectedColor);
color1.addEventListener('click', changeSelectedColor);
color2.addEventListener('click', changeSelectedColor);
color3.addEventListener('click', changeSelectedColor);
pixelBoard.addEventListener('click', setColorPixel);
boardGenButton.addEventListener('click', changeSize);
window.addEventListener('load', createGridOfPixel(size));

setRandomColor();
