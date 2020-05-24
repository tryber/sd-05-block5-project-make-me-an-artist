const colorPalette = document.getElementsByClassName('color-palette');
const preto = document.getElementsByClassName('preto');
const azul = document.getElementsByClassName('azul');
const vermelho = document.getElementsByClassName('vermelho');
const amarelo = document.getElementsByClassName('amarelo');
const pixelBoard = document.getElementById('pixel-board');
const tableRow = document.getElementsByClassName('tr');
const pixel = document.getElementsByClassName('pixel');
let selectedColor = '';

function selectColor() { 
  if (event.target === preto[0]) {
    selectedColor = 'black';
  }
  if (event.target === azul[0]) {
    selectedColor = 'blue';
  }
  if (event.target === vermelho[0]) {
    selectedColor = 'red';
  } 
  if (event.target === amarelo[0]) {
    selectedColor = 'yellow';
  }
}

function changeColor() {
  event.target.style.backgroundColor = selectedColor
}

preto[0].addEventListener('click', selectColor);
azul[0].addEventListener('click', selectColor);
vermelho[0].addEventListener('click', selectColor);
amarelo[0].addEventListener('click', selectColor);

for (let i = 0; i < pixel.length; i++) {
  pixel[i].addEventListener('click', changeColor)
}