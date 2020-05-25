const btn = document.querySelector('#clear-board');
const pixel = document.querySelectorAll('.pixel');

btn.addEventListener('click', function () {
  for (let i = 0; i < pixel.length; i+=1) {
    pixel[i].style.backgroundColor = 'white';
  }
})

const cores = document.querySelectorAll('.color');

let colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', function (event) {
  let corEscolhida = event.target;
  for (let i = 0; i < cores.length; i+=1) {
    cores[i].classList.remove('selected');
  }
  corEscolhida.classList.add('selected');
})

let colorir = document.querySelector('tbody');
colorir.addEventListener('click', function (event) {
  let pixelEscolhido = event.target;
  for (let i = 0; i < cores.length; i+=1) {
    if (cores[i].classList.className === 'selected') {
      pixelEscolhido.style.backgroundColor = cores[i].style.backgroundColor;
    }
  }
})
