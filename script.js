let palette, cells;
function setCurrentColor(el) {
  for (let p of palette) {
    p.classList.remove('selected');
  }
  el.target.classList.add('selected');
};
function setPixelColor(el) {
  const selected = document.querySelector('.selected');
  el.target.style.backgroundColor = selected.style.backgroundColor;
};
function buildPalette() {
  const colors = ['black', 'red', 'green', 'blue'];
  for (let i = 0; i < palette.length; i += 1) {
    palette[i].style.backgroundColor = colors[i];
    if (i === 0) palette[i].classList.add('selected');
    palette[i].addEventListener('click', setCurrentColor);
  }
};
function buildGrid() {
  for (let i = 0; i < cells.length; i += 1) {
    cells[i].style.backgroundColor = 'white';
    cells[i].addEventListener('click', setPixelColor);
  }
};
window.onload = function () {
  palette = document.getElementsByClassName('color');
  cells = document.getElementsByClassName('pixel');
  buildPalette();
  buildGrid();
};
