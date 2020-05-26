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
/* Gera cores aleatórias */
function generateColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `RGB(${r}, ${g}, ${b})`;
}
/* Constrói a Paleta */
function buildPalette() {
  const board = document.getElementById('color-palette');
  const colors = ['black', generateColor(), generateColor(), generateColor()];
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
/* Constrói a grade de pixels */
function buildGrid(size) {
  const board = document.getElementById('pixel-board');
  const wh = `${size * 42}px`;
  board.innerHTML = '';
  board.style.width = wh;
  document.getElementById('color-palette').style.width = wh;
  document.getElementById('tools-board').style.width = wh;
  for (let i = 0; i < size; i += 1) {
    const tr = document.createElement('tr');
    const line = board.appendChild(tr);
    for (let j = 0; j < size; j += 1) {
      const td = document.createElement('td');
      const cell = line.appendChild(td);
      cell.className = 'pixel';
      cell.style.backgroundColor = 'white';
      cell.addEventListener('click', setPixelColor);
    }
  }
}
/* Limpa tod o quadro */
function clearAll() {
  const cells = document.getElementById('pixel-board').children[0].children.length || 5;
  buildGrid(cells);
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
