// variables
let n = 25;
let colorPalette = document.getElementById('color-palette');
let pixelBoard = document.getElementById('pixel-board');
let black = document.getElementById('black');
let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let color3 = document.getElementById('color3');
let boardSize = document.querySelector('#board-size');
let boardGenButton = document.querySelector('#generate-board');
let selected = document.getElementsByClassName('selected')[0];  
let cor = selected.classList[1];
let clearAllButton = document.getElementById('clear-board');
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

function createGridOfPixel(size) {
  if(parseInt(size, 10) < 5) {
    size = 5;
  } else if(parseInt(size, 10) > 50) {
    size = 50;
  }
  pixelBoard.innerHTML = '';
  for(let line = 1; line <= size; line += 1) {
    createBoardLines();
    for(let column = 2; column <= size; column += 1) {
      createBoardColumns();
    }
  }
}

function changeSize() {
  const size = boardSize.value;
  if (size.length == "" ) {
    alert("Board Inválida");
  } else{
    createGridOfPixel(size);
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

function getRandomColor() {
 const randomColor = Math.floor(Math.random()*16777215).toString(16);
 let newColor = "#" + randomColor;
 if(newColor === "#ffffff" || newColor === "#FFFFFF"){
   newColor = "#ff00ff";
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
pixelBoard.addEventListener('click', setColorPixel)
boardGenButton.addEventListener('click', changeSize);
window.addEventListener('load',createGridOfPixel(5));

setRandomColor();