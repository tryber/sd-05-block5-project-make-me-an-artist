// Paint pixels
let colorSelected = document.getElementsByClassName('selected')[0];

function paintPixel() {
  const colorClass = colorSelected.classList[1];
  event.target.classList.remove(event.target.classList[1]);
  event.target.classList.add(colorClass);
}

// Create pixel board
const pixelBoard = document.getElementById('pixel-board');
const tagTR = document.getElementsByTagName('tr');
let numberTagTR;
const genBoardButton = document.getElementById('generate-board');
const numberOfPixels = document.getElementById('board-size');

function boardInit(pixelNumbers) {
  for (let i = 0; i < pixelNumbers; i += 1) {
    const pixelLine = document.createElement('tr');
    pixelBoard.appendChild(pixelLine);
  }
  for (let i = 0; i < pixelNumbers; i += 1) {
    for (let j = 0; j < tagTR.length; j += 1) {
      const pixelColumn = document.createElement('td');
      numberTagTR = tagTR[j];
      numberTagTR.appendChild(pixelColumn);
      pixelColumn.className = 'pixel white';
      pixelColumn.addEventListener('click', paintPixel);
    }
  }
}
boardInit(5);

function createBoardSize() {
  if (numberOfPixels.value === '') {
    alert('Board inválido!');
  }
  if (numberOfPixels.value < 5) {
    numberOfPixels.value = 5;
  }
  if (numberOfPixels.value > 50) {
    numberOfPixels.value = 50;
  }
  if (numberOfPixels.value >= 5 && numberOfPixels.value <= 50) {
    pixelBoard.innerText = '';
    for (let i = 0; i < numberOfPixels.value; i += 1) {
      const pixelLine = document.createElement('tr');
      pixelBoard.appendChild(pixelLine);
    }
    for (let i = 0; i < numberOfPixels.value; i += 1) {
      for (let j = 0; j < tagTR.length; j += 1) {
        const pixelColumn = document.createElement('td');
        numberTagTR = tagTR[j];
        numberTagTR.appendChild(pixelColumn);
        pixelColumn.className = 'pixel white';
        pixelColumn.addEventListener('click', paintPixel);
      }
    }
  }
}

genBoardButton.addEventListener('click', createBoardSize);

// Change class 'selected'
const colorBlack = document.getElementById('cor1');
const colorGreen = document.getElementById('cor2');
const colorYellow = document.getElementById('cor3');
const colorRed = document.getElementById('cor4');
const colorPalette = document.getElementById('color-palette');

function changeSelected() {
  if (event.target === colorBlack) {
    colorSelected.classList.remove('selected');
    colorBlack.classList.add('selected');
    colorSelected = event.target;
  } else if (event.target === colorGreen) {
    colorSelected.classList.remove('selected');
    colorGreen.classList.add('selected');
    colorSelected = event.target;
  } else if (event.target === colorYellow) {
    colorSelected.classList.remove('selected');
    colorYellow.classList.add('selected');
    colorSelected = event.target;
  } else if (event.target === colorRed) {
    colorSelected.classList.remove('selected');
    colorRed.classList.add('selected');
    colorSelected = event.target;
  }
}

colorPalette.addEventListener('click', changeSelected);

// Clear Board
function clearBoard() {
  const allPixels = document.querySelectorAll('#pixel-board > tr > td');
  for (let i = 0; i < allPixels.length; i += 1) {
    allPixels[i].classList.remove(allPixels[i].classList[1]);
    allPixels[i].classList.add((allPixels[i].classList[1] = 'white'));
  }
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearBoard);
