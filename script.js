// Evento do botao limpar pixels
const btn = document.querySelector('#clear-board');
btn.addEventListener('click', function () {
  const pixel = document.querySelectorAll('.pixel');
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
const colorir = document.querySelector('table');
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

// Função do botão que cria Pixels
function createPixels() {
  if (document.querySelector('#board-size').value === '') {
    alert('Board inválido!');
  }
  else {
    for (let i = 0; i < document.querySelector('#board-size').value; i += 1) {
      const linha = document.createElement('tr');
      linha.className = 'linha';
      document.querySelector('#pixel-board').appendChild(linha);
    }
    for (let i = 0; i < document.querySelectorAll('.linha').length; i += 1) {
      for (let n = 0; n < document.querySelector('#board-size').value; n += 1) {
        const novoPixel = document.createElement('td');
        novoPixel.className = 'pixel';
        document.querySelectorAll('.linha')[i].appendChild(novoPixel);
      }
    }
  }
}

// Função que cria quadro de pixels inicial
function buildPixels(j) {
  for (let i = 0; i < j; i += 1) {
    const linha = document.createElement('tr');
    linha.className = 'linha';
    document.querySelector('#pixel-board').appendChild(linha);
  }
  for (let i = 0; i < document.querySelectorAll('.linha').length; i += 1) {
    for (let n = 0; n < j; n += 1) {
      const novoPixel = document.createElement('td');
      novoPixel.className = 'pixel';
      document.querySelectorAll('.linha')[i].appendChild(novoPixel);
    }
  }
}
buildPixels(5);
