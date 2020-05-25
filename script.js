const btn = document.querySelector('#clear-board');
const pixel = document.querySelectorAll('.pixel');

btn.addEventListener('click', function () {
  for (let i = 0; i < pixel.length; i+=1) {
    pixel[i].className = 'pixel';
    pixel[i].style.backgroundColor = 'white';
  }
})

let cores = document.querySelectorAll('.color');
let colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', function (event) {
  corEscolhida = event.target;
  for (let i = 0; i < cores.length; i+=1) {
    cores[i].classList.remove('selected');
  }
  corEscolhida.classList.add('selected');
})

let trocaCor = document.querySelector('tbody');
trocaCor.addEventListener('click', function (event) {
  let trocaPixel = event.target;
})
