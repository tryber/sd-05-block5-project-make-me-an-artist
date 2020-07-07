//limpar cores
const botaoApagarCores = document.querySelector('#clear-board');
function apagarEstilos() {
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].style.backgroundColor = null;
      }
    }
    botaoApagarCores.addEventListener('click', apagarEstilos);
    let color = 'black';

// criar random colors.
function createColor() {
  const hexadecimais = '0123456789ABCDEF';
  let colorRan = '#';
  for (let i = 0; i < 6; i += 1) {
    colorRan += hexadecimais[Math.floor(Math.random() * 16)];
  }
  return colorRan;
}
// array dos pixels da paleta de cores
const palettePixel = document.getElementsByClassName('color');
// funcao para definir as cores da paleta - utilizada ao carregar a pagina
window.onload = function () {
  palettePixel[0].classList.add('selected');
  palettePixel[0].style.backgroundColor = 'black';
  // adiciona uma random color como background de cada pixel da paleta, exeto o primeiro.
  for (let pixel = 1; pixel < palettePixel.length; pixel += 1) {
    palettePixel[pixel].style.backgroundColor = createColor();
  }
};
// encontra pixel selecionado, remove classe. Adiciona a classe ao item que recebeu o evento.
function selectColor(event) {
  const lastSelected = document.getElementsByClassName('selected')[0];
  lastSelected.classList.remove('selected');
  const target = event.target;
  target.classList.add('selected');
  // armazena a cor em uma variável
  color = target.style.backgroundColor;
}
// adiciona evento para todos os itens da paleta.
document.querySelectorAll('.color').forEach((element) => {
  element.addEventListener('click', (event) => {
    selectColor(event);
  });
});
// altera a cor do pixel no board.
const pixelBoard = document.getElementById('pixel-board');
pixelBoard.addEventListener('click', function (evento) {
  if (evento.target.className === 'pixel') {
    evento.target.style.backgroundColor = color;
  }
});
// função para gerar os pixels
// verificação do tamanho definido, sendo entre 5 e 50 pixels.
const generateBoard = document.getElementById('generate-board');
const board = document.querySelector('.pixel-board');

// Cria Grid
function setGrid(n) {
  pixelBoard.innerHTML = '';
  pixelBoard.style.width = `${42 * n}px`;
  for (let index = 0; index < n * n; index += 1) {
    const pixel = document.createElement('div');
    board.append(pixel);
    pixel.classList.add('pixel');
  }
}
setGrid(5);

const gridSizeInput = document.getElementById('board-size');
// Change Grid Size
function changeGridSize() {
  const n = gridSizeInput.value;
  setGrid(n);
}
generateBoard.addEventListener('click', changeGridSize);
