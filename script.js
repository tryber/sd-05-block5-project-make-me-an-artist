// function that generates random colors
function randomColors () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// create variable to store each color element
const black = document.querySelector('.color.black');
const color1 = document.querySelector('.color.color1');
color1.style.backgroundColor = randomColors();
const color2 = document.querySelector('.color.color2');
color2.style.backgroundColor = randomColors();
const color3 = document.querySelector('.color.color3');
color3.style.backgroundColor = randomColors();

// include class selected on black element
black.className += ' selected';
let selectedColor = 'black';

// add a event listener to each collor in the palett
black.addEventListener('click', function () {
  if (!black.className.includes('selected')) {
    black.classList.add('selected');
  }
    color1.classList.remove('selected');
    color2.classList.remove('selected');
    color3.classList.remove('selected');
    selectedColor = 'black';
});

color1.addEventListener('click', function () {
  if (!color1.className.includes('selected')) {
    color1.classList.add('selected');
  }
    black.classList.remove('selected');
    color2.classList.remove('selected');
    color3.classList.remove('selected');
    selectedColor = color1.style.backgroundColor;
    console.log(selectedColor);
});

color2.addEventListener('click', function () {
  if (!color2.className.includes('selected')) {
    color2.classList.add('selected');
  }
    black.classList.remove('selected');
    color1.classList.remove('selected');
    color3.classList.remove('selected');
    selectedColor = color2.style.backgroundColor;
    console.log(selectedColor);
});

color3.addEventListener('click', function () {
  if (!color3.className.includes('selected')) {
    color3.classList.add('selected');
  }
    black.classList.remove('selected');
    color1.classList.remove('selected');
    color2.classList.remove('selected');
    selectedColor = color3.style.backgroundColor;
    console.log(selectedColor);
});

// change the color of the pixel when it's clicked
const board = document.getElementById('pixel-board');
board.addEventListener('click', function (event) {
  event.target.style.backgroundColor = selectedColor;
});

// create a button that clears the board colors when clicked
const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', function () {
  const pixelDivs = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelDivs.length; i += 1) {
    pixelDivs[i].style.backgroundColor = 'white';
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
  if (numberOfPixels === '') {
    alert('Board Inválido!');
  }
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
