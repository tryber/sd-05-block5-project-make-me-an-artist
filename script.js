// variaveis
const black = document.getElementById('black');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const white = document.getElementById('white');
const board = document.getElementById('pixel-board');
let selected = document.getElementsByClassName('selected')[0];
let cor = selected.classList[1];
let target = '';
// functions
function changeSelected() {
  target = event.target;
  selected.classList.remove('selected');
  target.classList.add('selected');
  selected = document.getElementsByClassName('selected')[0];
}

function colorPixel() {
  cor = selected.classList[1];
  const target = event.target;
  const corAntiga = target.classList[target.classList.length-1];
  target.classList.remove(corAntiga);
  target.classList.add(cor);
}
// ListenerEvents
black.addEventListener('click', changeSelected);
red.addEventListener('click', changeSelected);
blue.addEventListener('click', changeSelected);
white.addEventListener('click', changeSelected);
board.addEventListener('click', colorPixel);
