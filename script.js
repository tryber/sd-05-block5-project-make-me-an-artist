// Evento do botao limpar pixels
const btn = document.querySelector('#clear-board');
const pixel = document.querySelectorAll('.pixel');

btn.addEventListener('click', function () {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].className = 'pixel';
  }
});

// Evento que troca classe selected para cor clicada
const cores = document.querySelectorAll('.color');

const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', function (event) {
  const corEscolhida = event.target;
  for (let i = 0; i < cores.length; i += 1) {
    cores[i].classList.remove('selected');
  }
  corEscolhida.classList.add('selected');
});

// Evento que colore o pixel clicado com a cor selecionada
const colorir = document.querySelector('tbody');
colorir.addEventListener('click', function (event) {
  const pixelEscolhido = event.target;
  pixelEscolhido.className = ' ';
  const lista = document.querySelector('.selected').classList;
  for (let i = 0; i < lista.length; i += 1) {
    if (lista[i] !== 'color' && lista[i] !== 'selected') {
      pixelEscolhido.classList.add(lista[i]);
    }
  }
  pixelEscolhido.classList.add('pixel');
});

// Evento do botão VQV
const btnVqv = document.querySelector('#generate-board');
btnVqv.addEventListener('click', function () {
  const tamanhoPixels = document.querySelector('#board-size').value;
  if (tamanhoPixels === '') {
    alert('Board inválido!');
    return;
  }
  if (tamanhoPixels < 5) {
    tamanhoPixels = 5;
  }
  if (tamanhoPixels > 50) {
    tamanhoPixels = 50;
  }
  

})
