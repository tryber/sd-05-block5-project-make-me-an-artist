const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');
const clearButton = document.getElementById('clear-board');
const allColors = document.getElementsByClassName('color');
const boardSize = document.getElementById('board-size');
const generateBoard = document.getElementById('generate-board');
const pixelRow = document.getElementsByClassName('pixel-row');
const pixelBoard = document.getElementById('pixel-board');
const boardContainer = document.getElementById('board-container');
let selectedColor = 'black';

// generate board from input
function createBoard() {
  document.getElementById('pixel-board').remove();

  let newPixelBoard = document.createElement('div');
    newPixelBoard.setAttribute('id', 'pixel-board');
    boardContainer.appendChild(newPixelBoard);

  let input = boardSize.value;
  for(let i = 0; i < input; i++) {
    let newRow = document.createElement('div');
    newRow.setAttribute('class', 'pixel-row');
    newPixelBoard.appendChild(newRow);

    for(let j = 0; j < input; j++) {
      let newPixel = document.createElement('div');
      newPixel.setAttribute('class', 'pixel');
      newRow.appendChild(newPixel);
    }
  }
  clickablePixels()
}

generateBoard.addEventListener('click', createBoard);

// adding event listener to all pixels
function clickablePixels(){
  for (let i = 0; i < document.getElementsByClassName('pixel').length; i+=1) {
  document.getElementsByClassName('pixel')[i].addEventListener('click', changeColor);
}
}
clickablePixels()
// changing backgound color of selected pixel
function changeColor(e) {
  e.target.style.backgroundColor = selectedColor;
}

// remove class from all colors then apply to selected
function changeClass(a) {
  for (let i = 0; i < allColors.length; i+=1) {
    allColors[i].classList.remove('selected');
  }
  a.classList.add('selected');
}

// clicking on a color calls for changeClass and changes value of selectedColor
function changeColor1() {
  selectedColor = 'black';
  changeClass(color1);
}

function changeColor2() {
  selectedColor = 'rgb(254, 200, 216)';
  changeClass(color2);
}

function changeColor3() {
  selectedColor = 'rgb(255, 223, 211)';
  changeClass(color3);
}

function changeColor4() {
  selectedColor = 'rgb(224, 187, 228)';
  changeClass(color4);
}

// listening to clicks on palette and calling function to change selectedColor
color1.addEventListener('click', changeColor1);
color2.addEventListener('click', changeColor2);
color3.addEventListener('click', changeColor3);
color4.addEventListener('click', changeColor4);

// clearing all pixels
function clear() {
  for (let i = 0; i < document.getElementsByClassName('pixel').length; i+=1) {
    document.getElementsByClassName('pixel')[i].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clear);

// alert when input is empty
function alertEmpty() {
  if(boardSize.value == ''){
    alert('Board inválido!')
  }
}
generateBoard.addEventListener('click', alertEmpty);

// change values when above or below limit 
function changeValues() {
  if(boardSize.value > 50){
    boardSize.value = 50
  }
}
generateBoard.addEventListener('click', changeValues);

