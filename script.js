let palette;
let clearButton;
function setCurrentColor(el) {
  for (let i = 0; i < palette.length; i += 1) {
    palette[i].classList.remove('selected');
  }
  el.target.classList.add('selected');
}
function setPixelColor(el) {
  const selected = document.querySelector('.selected');
  el.target.style.backgroundColor = selected.style.backgroundColor;
}
function buildPalette() {
  const colors = ['black', 'red', 'green', 'blue'];
  for (let i = 0; i < palette.length; i += 1) {
    palette[i].style.backgroundColor = colors[i];
    if (i === 0) palette[i].classList.add('selected');
    palette[i].addEventListener('click', setCurrentColor);
  }
}
function buildGrid(size) {
  const board = document.getElementById('pixel-board');
  const width = `${size * 41}px`;
  board.style.width = width;
  document.getElementById('color-palette').style.width = width;
  document.getElementById('tools-board').style.width = width;
  board.innerHTML = '';
  for (let i = 0; i < size ** 2; i += 1) {
    const div = document.createElement('div');
    const cell = board.appendChild(div);
    cell.className = 'pixel';
    cell.style.backgroundColor = 'white';
    cell.addEventListener('click', setPixelColor);
  }
}
function clearAll() {
  const cells = document.getElementById('pixel-board').children;
  for (let i = 0; i < cells.length; i += 1) {
    cells[i].style.backgroundColor = 'white';
  }
}
window.onload = function () {
  palette = document.getElementsByClassName('color');
  clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', clearAll);
  // Defines configurations
  const boardSizeInput = document.getElementById('board-size');
  buildPalette();
  buildGrid(5);
  document.getElementById('generate-board').addEventListener('click', function () {
    if (!boardSizeInput.value) {
      window.alert('Board inválido!');
      return;
    }
    let size = boardSizeInput.value || 5;
    if (boardSizeInput.value > 50) size = 50;
    else if (boardSizeInput.value < 5) size = 5;
    buildGrid(size);
  });
};
