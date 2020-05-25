/* Define as variáveis globais */
let palette;
let clearButton;
/* Seleciona uma cor da paleta */
function setCurrentColor(el) {
  for (let i = 0; i < palette.length; i += 1) {
    palette[i].classList.remove('selected');
  }
  el.target.classList.add('selected');
}
/* Pinta uma célula (pixel) com a cor selecionada */
function setPixelColor(el) {
  const selected = document.querySelector('.selected');
  el.target.style.backgroundColor = selected.style.backgroundColor;
}
/* Constrói a Paleta */
function buildPalette() {
  const board = document.getElementById('color-palette');
  const colors = ['black', 'red', 'green', 'blue'];
  for (let i = 0; i < colors.length; i += 1) {
    const div = document.createElement('div');
    const cell = board.appendChild(div);
    cell.style.backgroundColor = colors[i];
    cell.className = 'color';
    if (i === 0) cell.classList.add('selected');
    cell.addEventListener('click', setCurrentColor);
    board.appendChild(document.createTextNode('\n'));
  }
}
/* Constrói a grade de pixels [BUG] */
function buildGrid(size) {
  const board = document.getElementById('pixel-board');
  const width = `${size * 38}px`;
  board.innerHTML = '';
  board.style.width = width;
  document.getElementById('color-palette').style.width = width;
  document.getElementById('tools-board').style.width = width;
  for (let i = 0; i < size ** 2; i += 1) {
    const div = document.createElement('div');
    const cell = board.appendChild(div);
    cell.className = 'pixel';
    cell.style.backgroundColor = 'white';
    cell.addEventListener('click', setPixelColor);
    //if ((i+1) % size === 0) board.appendChild(document.createTextNode('\n\n'));
  }
}
/* Limpa tod o quadro */
function clearAll() {
  const cells = document.getElementById('pixel-board').children;
  for (let i = 0; i < cells.length; i += 1) {
    cells[i].style.backgroundColor = 'white';
  }
}
/* Define toda a estrutura do programa */
window.onload = function () {
  /* Define os valores das variáveis globais */
  palette = document.getElementsByClassName('color');
  clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', clearAll);
  /* Define as configurações */
  const boardSizeInput = document.getElementById('board-size');
  /* Constrói a paleta e a grade */
  buildPalette();
  buildGrid(5);
  /* Atribui função ao botão de gerar nova grade */
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
