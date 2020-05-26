// variables
let n = 25;
let colorPalette = document.getElementById('color-palette');
let pixelBoard = document.getElementById('pixel-board');
let black = document.querySelector('.black');
let blue = document.querySelector('.blue');
let red = document.querySelector('.red');
let green = document.querySelector('.green');
let selected = document.getElementsByClassName('selected')[0];  
let cor = selected.classList[1];
let clearAllButton = document.getElementById('clear-board');
let inputSize = document.getElementById('board-size');
let inputSizeButton = document.getElementById('generate-board');
let target = '';

// functions
function createBoardLines() {
  let pixelLine = document.createElement('div');
  pixelLine.className = 'pixel firstLine blank';
  pixelBoard.appendChild(pixelLine);
}

function createBoardColumns() {
  let pixelColumn = document.createElement('div');
  pixelColumn.className = 'pixel blank';
  pixelBoard.appendChild(pixelColumn);
}

function changeSize() {
  const str = inputSize.value;
  if (str.length === 0 ) {
    alert('Board Inválido');
  } else {
    createGridOfPixel(str);
  }
}

function createGridOfPixel(str) {
  if (parseInt(str, 10) < 5) {
    str = 5;
  } else if (parseInt(str, 10) > 50) {
    str = 50;
  }
  pixelBoard.innerHTML = '';
  for(let line = 1; line <= str; line += 1) {
    createBoardLines();
    for(let column = 2; column <= str; column += 1) {
      createBoardColumns();
    }
  }
}

function changeSelectedColor(){
  target = event.target;
  selected.classList.remove('selected');
  target.classList.add('selected');
  selected = document.getElementsByClassName('selected')[0];
}

function setColorPixel(el) {
  let actualColorPixel = document.querySelector('.selected');
  let backgroundActual = actualColorPixel.classList[1];
  let actualPixel = el.target;
  actualPixel.style.backgroundColor = actualColorPixel.style.backgroundColor = backgroundActual;
  
  console.log(backgroundActual)
}

function clearAll() {
  pixel = pixelBoard.firstElementChild;
  for (let i = 0; i < pixelBoard.children.length; i += 1) {
    const corAntiga = pixel.classList[pixel.classList.length - 1];
    pixel.classList.remove(corAntiga);
    pixel.classList.add('blank');
    pixel.style = 'background-color: white';
    pixel = pixel.nextElementSibling;
  }
}

clearAllButton.addEventListener('click', clearAll);

// events
black.addEventListener('click', changeSelectedColor);
blue.addEventListener('click', changeSelectedColor);
red.addEventListener('click', changeSelectedColor);
green.addEventListener('click', changeSelectedColor);
pixelBoard.addEventListener('click', setColorPixel);
inputSizeButton.addEventListener('click',changeSize);