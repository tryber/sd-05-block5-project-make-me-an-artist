const generateBoard = document.getElementById('generate-board'); // table, onde serao inseridos tr e td;
// const palette = document.getElementById('color-palette'); // seção que terá os pixels de selação de cor;
let pixelUnit = document.querySelectorAll('.pixel');
let color = 'black';
const clearButton = document.getElementById('clear-board');

// função para gerar os pixels
// verificação do tamanho definido, sendo entre 5 e 50 pixels.
function createBoard() {
  let size = document.getElementById('board-size').value;
  if (size > 0 && size < 5) {
    size = 5;
    alert('Será considerado tamanho mínimo de 5px para o board.');
  } else if (size > 50) {
    size = 50;
    alert('Será considerado tamanho máximo de 50px para o board.');
  }
  document.getElementsByTagName('tbody')[0].innerHTML = '';
  // verificação do tamanho do board e criação dos tr e td já com classe .pixel.
  if (size >= 5 && size <= 50) {
    for (let j = 0; j < size; j += 1) {
      const tr = document.createElement('tr');
      for (let i = 0; i < size; i += 1) {
        const td = document.createElement('td');
        td.className = 'pixel';
        tr.appendChild(td);
      }
      document.getElementById('pixel-board').children[0].appendChild(tr);
    }
    pixelUnit = document.querySelectorAll('.pixel');
  } else {
    alert('Board inválido!');
  }
}
generateBoard.addEventListener('click', createBoard);

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
}
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
document.querySelectorAll('.color').forEach( (element) => {
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
// limpa todo o board.
clearButton.addEventListener('click', function () {
  pixelUnit = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelUnit.length; i += 1) {
    pixelUnit[i].style.backgroundColor = 'white';
  }
});
