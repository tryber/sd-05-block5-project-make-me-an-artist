const btn = document.querySelector('#clear-board');
const pixel = document.querySelectorAll('.pixel');

btn.addEventListener('click', function () {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].className = 'pixel';
  }
})

const cores = document.querySelectorAll('.color');

const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', function (event) {
  let corEscolhida = event.target;
  for (let i = 0; i < cores.length; i += 1) {
    cores[i].classList.remove('selected');
  }
  corEscolhida.classList.add('selected');
})

const colorir = document.querySelector('tbody');
colorir.addEventListener('click', function (event) {
  let pixelEscolhido = event.target;
  pixelEscolhido.className = ' ';
  let lista = document.querySelector('.selected').classList;
  for (let i = 0; i < lista.length; i += 1) {
    if (lista[i] !== 'color' && lista[i] !== 'selected') {
      pixelEscolhido.classList.add(lista[i]);
    }
  }
  pixelEscolhido.classList.add('pixel');
})
