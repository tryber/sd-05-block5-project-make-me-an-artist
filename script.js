const paletteColor = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');
const clear = document.getElementById('clear-board');
const gridSize = document.getElementById('generate-board');
const gridSizeInput = document.getElementById('board-size');

// --------------------------------------------------SETUP INICIAL------------------------------------------------------- //

// Cria Grid
function setGrid(n) {
  pixelBoard.innerHTML = '';
  pixelBoard.style.width = `${42 * n}px`;
  for (let index = 0; index < n * n; index += 1) {
    const pixel = document.createElement('div');
    pixelBoard.append(pixel);
    pixel.classList.add('pixel');
  }
}
setGrid(5);

// Random Number
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Random Color
function randomColor() {
  const r = randomNumber(0, 255);
  const g = randomNumber(0, 255);
  const b = randomNumber(0, 255);
  const color = `rgb(${r},${g},${b})`;
  return color;
}

// Set Color

function setColor(...palette) {
  for (let param = 0; param < palette.length; param += 1) {
    palette[param].style.backgroundColor = randomColor();
  }
}
setColor(color2, color3, color4);

// --------------------------------------------------------------------------------------------------------------------- //

// Colore Pixel
pixelBoard.addEventListener('click', function () {
  const selectedColor = document.querySelector('.selected');
  event.target.style.backgroundColor = window
    .getComputedStyle(selectedColor)
    .getPropertyValue('background-color');
});

// Select Color
paletteColor.addEventListener('click', function () {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
});

// Clear Board
clear.addEventListener('click', function () {
  for (let pixel = 0; pixel < pixelBoard.childElementCount; pixel += 1) {
    pixelBoard.children[pixel].style.backgroundColor = 'white';
  }
});

// Change Grid Size
function changeGridSize() {
  n = gridSizeInput.value
  if (n < 5) {
    n = 5;
    setGrid(n)
  } else if (n > 50) {
    n = 50;
    setGrid(n)
  } else {
    setGrid(n)
  }
}
gridSize.addEventListener('click', changeGridSize);
