// Retira a classe 'selected' de todas as divs da paletta
function removeClassSelected() {
  const paletteColor = document.querySelectorAll('.color');
  for (let i = 0; i < paletteColor.length; i += 1) {
    paletteColor[i].classList.remove('selected');
  }
}

// Adiciona a classe 'selected' e pega a cor do objeto clicado
let selectedColor = 'black'; //Valor default da cor igual a black
let getPixelColor = document.querySelector('#color-palette');
function getPixel(e) {
  let element = e.target;
  removeClassSelected ();
  element.classList.add('selected');
  selectedColor = getComputedStyle(e.target, null).getPropertyValue('background-color');
}
getPixelColor.addEventListener('click', getPixel);

// Essa função usa a cor da variável 'selectedColor' para pintar os pixeis clicados
let pickPixel = document.querySelector('#pixel-board');
function changePixelColor(e) {
  let pixel = e.target;
  pixel.style.backgroundColor = selectedColor;
}
pickPixel.addEventListener('click', changePixelColor);

// Limpa todos os pixeis do quadro
let buttonClear = document.getElementById('clear-board');
function clearBoard() {
  const board = document.getElementById('pixel-board');
  for (let i = 0; i < board.children.length; i += 1){
    for (let j = 0; j < board.children.length; j += 1){
      board.children[i].children[j].style.backgroundColor = 'white';
    }
  }
}
buttonClear.addEventListener('click', clearBoard);

// Cria um board com n x n pixels
let buttonSize = document.getElementById('generate-board');
function generateBoard() {
  document.getElementById('pixel-board').innerHTML = '';
  let size = document.getElementById('board-size').value;
  console.log(size);
  if (size == false){
    alert('Board inválido!');
    size = 5;
  }
  if (size < 5){
    size = 5; 
  }
  if (size > 50){
    size = 50; 
  }
  for (let i = 0; i < size; i += 1){
    let divLine = document.createElement('div');
    divLine.className = 'pixel-line';
    document.getElementById('pixel-board').appendChild(divLine);
    for (let j = 0; j < size; j += 1){
      let divPixel = document.createElement('div');
      divPixel.className = 'pixel';
      document.querySelectorAll('.pixel-line')[i].appendChild(divPixel);
    }
  }
}
buttonSize.addEventListener('click', generateBoard);

// Cria um grid de 5 x 5 ao iniciar a página
window.onload = generateBoard;


