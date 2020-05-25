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
  const width = `${size*40}px`;
  board.style.width = width;
  document.getElementById('color-palette').style.width = width;
  document.getElementById('tools-board').style.width = width;
  board.innerHTML = '';
  for (let i = 0; i < Math.pow(size, 2); i += 1) {
    const div = document.createElement('div');
    const cell = board.appendChild(div);
    cell.className = 'pixel';
    cell.style.backgroundColor = 'white';
    cell.addEventListener('click', setPixelColor);
  }
}
function clearAll() {
  for (let i = 0; i < cells.length; i += 1) {
    cells[i].style.backgroundColor = 'white';
  }
}
window.onload = function () {
  palette = document.getElementsByClassName('color');
  clearButton = document.getElementById('clear-board');
  clearButton.addEventListener("click", this.clearAll);
  // Defines configurations
  const boardSizeInput = document.getElementById('board-size');
  buildPalette();
  buildGrid(boardSizeInput.value);
  document.getElementById('generate-board').addEventListener('click', function () {
    if (!boardSizeInput.value) {
      window.alert("Board inválido!");
      return;
    }
    const size = (boardSizeInput.value > 50) ? 50 : (boardSizeInput.value < 5) ? 5 : boardSizeInput.value;
    buildGrid(size);
  });
};
