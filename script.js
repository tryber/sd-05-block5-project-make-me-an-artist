const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');
const clearButton = document.getElementById('clear-board');
const allPixels = document.getElementsByClassName('pixel');
const allColors = document.getElementsByClassName('color');
const boardSize = document.getElementById('board-size');
const generateBoard = document.getElementById('generate-board');
let selectedColor = 'black';

// adding event listener to all pixels
for (let i = 0; i < allPixels.length; i+=1) {
  allPixels[i].addEventListener('click', changeColor);
}

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
  for (let i = 0; i < allPixels.length; i+=1) {
    allPixels[i].style.backgroundColor = 'white';
  }
}

clearButton.addEventListener('click', clear);

// alert when input is empty
generateBoard.addEventListener('click', alertEmpty);
function alertEmpty() {
  if(boardSize.value == ''){
    alert('Board inválido!')
  }
}