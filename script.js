let n = 5;
let colorPalette = document.getElementById('color-palette');
let pixelBoard = document.getElementById('pixel-board');

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

createGridOfPixel(n)