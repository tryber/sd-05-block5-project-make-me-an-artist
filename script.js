// Gerando as cores da paleta
const paleta = document.getElementById('color-palette');
const pixelPaleta = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');
const cleanButton = document.getElementById('clear-board');
const nPixLine = 5;
const colors = ['black', 'blue', 'green', 'yellow'];

function selectNewColor(event) {
  let selectedColor = document.getElementsByClassName('selected')[0];
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let pixel = 0; pixel < pixels.length; pixel += 1) {
    pixels[pixel].style.backgroundColor = 'white';
  }
}

function setPaleteColors(colorsList) {
  for (let pixel = 0; pixel < pixelPaleta.length; pixel += 1) {
    pixelPaleta[pixel].style.backgroundColor = colorsList[pixel];
  }
}

// Gerando pixel-board

function genBoardElement(className, idx) {
  const boardElement = document.createElement('div');
  boardElement.setAttribute('class', className);
  boardElement.setAttribute('id', idx);
  return boardElement;
}

function genPixels(numberPix) {
  const pixels = [];
  for (let pixel = 0; pixel < numberPix; pixel += 1) {
    const pix = genBoardElement('pixel', `pixel-${pixel + 1}`);
    pixels.push(pix);
  }
  return pixels;
}

function populateBoard(pixels, elemento) {
  for (let pixel in pixels) {
    if (pixel && pixels[pixel]) {
      elemento.appendChild(pixels[pixel]);
    }
  }
}

// Eventos
window.addEventListener('load', function () {
  const pixels = genPixels(nPixLine * nPixLine);
  populateBoard(pixels, pixelBoard);
  pixelBoard.style.width = `${nPixLine * 42}px`;
});

window.addEventListener('load', setPaleteColors(colors));
cleanButton.onclick = clearBoard;
paleta.addEventListener('click', selectNewColor);
pixelBoard.addEventListener('click', function (event) {
  let selectedColor = document.getElementsByClassName('selected')[0];
  event.target.style.backgroundColor = selectedColor.style.backgroundColor;
});
