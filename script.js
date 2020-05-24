// variables
let n = 5;
let colorPalette = document.getElementById('color-palette');
let pixelBoard = document.getElementById('pixel-board');
let target = '';
let black = document.getElementById('black');
let blue = document.getElementById('blue');
let red = document.getElementById('red');
let green = document.getElementById('green');
let selected = document.getElementsByClassName('selected')[0];  

// functions
function createBoardLines() {
  let pixelLine = document.createElement('div');
  pixelLine.className = 'pixel firstLine';
  pixelBoard.appendChild(pixelLine);
}

function createBoardColumns() {
  let pixelColumn = document.createElement('div');
  pixelColumn.className = 'pixel';
  pixelBoard.appendChild(pixelColumn);
}

function createGridOfPixel(n) {
  pixelBoard.innerHTML = '';
  for(let line = 1; line <= n; line += 1) {
    createBoardLines();
    for(let column = 2; column <= n; column += 1) {
      createBoardColumns();
    }
  }
}

function changeColor(){
  target = event.target;
  selected.classList.remove('selected');
  target.classList.add('selected');
  selected = document.getElementsByClassName('selected')[0];
}

// events
black.addEventListener('click', changeColor);
blue.addEventListener('click', changeColor);
red.addEventListener('click', changeColor);
green.addEventListener('click', changeColor);

createGridOfPixel(n)