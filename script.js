
// create variable to store each color element
const black = document.querySelector('.color.black');
const yellow = document.querySelector('.color.yellow');
const red = document.querySelector('.color.red');
const blue = document.querySelector('.color.blue');

// include class selected on black element
black.className += ' selected';  
let selectedColor = 'black';

  // add a event listener to each collor in the palett
black.addEventListener('click', function () {
  // if clas is not selected already, add class selected to   it
  if (black.className !== 'color black selected') {
    black.className += ' selected';
  }
  // keep other colors without the selected class
  yellow.className = 'color yellow';
  red.className = 'color red';
  blue.className = 'color blue';
  selectedColor = 'black';
});

yellow.addEventListener('click', function () {
  if (yellow.className !== 'color yellow selected') {
    yellow.className += ' selected';
  }
  black.className = 'color black';
  red.className = 'color red';
  blue.className = 'color blue';
  selectedColor = 'yellow';
});

red.addEventListener('click', function () {
  if (red.className !== 'color red selected') {
    red.className += ' selected';
  }
  yellow.className = 'color yellow';
  black.className = 'color black';
  blue.className = 'color blue';
  selectedColor = 'red';
});

blue.addEventListener('click', function () {
  if (blue.className !== 'color blue selected') {
    blue.className += ' selected';
  }
  yellow.className = 'color yellow';
  red.className = 'color red';
  black.className = 'color black';
  selectedColor = 'blue';
});

// change the color of the pixel when it's clicked
const board = document.getElementById('pixel-board');
board.addEventListener('click', function (event) {
  event.target.className = 'pixel ' + selectedColor;
});

// create a button that clears the board colors when clicked
const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', function () {
  const pixelDivs = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelDivs.length; i += 1) {
    pixelDivs[i].className = 'pixel white';
  }
});

// create a variable N to get the input of the number o pixels
const N = document.getElementById('board-size');

// create divs inside pixel-board based on the number of pixels ofthe input
function createPixels() {
  // clear all the divs created before creating a new board
  board.innerHTML = '';
  let boardColumns = '';
  let numberOfPixels = N.value;
  // limit 5 <= N <= 50
  if (numberOfPixels < 5) {
    numberOfPixels = 5;
  }
  if (numberOfPixels > 50) {
    numberOfPixels = 50;
  }
  for (let i = 0; i < numberOfPixels; i += 1) {
    boardColumns += 'max-content ';
    for (let j = 0; j < numberOfPixels; j += 1) {
      const div = document.createElement('div');
      div.className = 'pixel white';
      board.appendChild(div);
    }
  }
  board.style.gridTemplateColumns = boardColumns;
}


// create a event listener to create the board once the button VQVis clicked
const vqvBtn = document.getElementById('generate-board');
vqvBtn.addEventListener('click', createPixels);
