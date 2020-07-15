// função que mudará a classe selected:
let corSelecionada = document.getElementsByClassName('selected')[0];
function selecionaCorAtual(event) {
  let corAtual = event.target;
  if (corAtual != corSelecionada) {
    corSelecionada.classList.remove('selected');
    corAtual.classList.add('selected');
    corSelecionada = document.getElementsByClassName('selected')[0];
  }
}
// atribuindo selected com a função criada acima:
document.getElementById('cor1').addEventListener('click', selecionaCorAtual);
document.getElementById('cor2').addEventListener('click', selecionaCorAtual);
document.getElementById('cor3').addEventListener('click', selecionaCorAtual);
document.getElementById('cor4').addEventListener('click', selecionaCorAtual);

const pixelBoard = document.getElementById('pixel-board');
let altura = 5;
function criaQuadroPixels() {
  const tamanho = `${altura * 42}px`;
  pixelBoard.style.width = tamanho;
  pixelBoard.style.height = tamanho;
  for (let i = 0; i < tamanho; i += 1) {
    const linha = document.createElement('div');
    linha.className = 'pixel';
    linha.style.width = tamanho;
    linha.style.border = '1px solid black';
    pixelBoard.appendChild(linha);
    /*for (let j = 0; j < altura; j += 1) {
      const quadro = document.createElement('div');
      quadro.className = 'quadro pixel';
    quadro.style.backgroundColor = 'rgb 255, 255, 255';
    pixelBoard.appendChild(quadro)
    }*/
  }
}

window.onload = function() {
  criaQuadroPixels(altura);
}

/*
// agora função que dará cor aos pixels:
function colorePixels (eventpixel) {
  const cor = document.querySelector('.selected');
  const pixelSelecionado = eventpixel.target;
  pixelSelecionado.style.backgroundColor = cor.style.backgroundColor;
}
pixelBoard.addEventListener('click', colorePixels);

// criando a função que limpará todos os pixels:
const botaoLimpar = document.getElementById('clear-board');
const todosPixels = document.getElementsByClassName('pixel');
function limpaPixels() {
  for (let i = 0; i < todosPixels.length; i += 1) {
    todosPixels[i].style.backgroundColor = 'white';
  }
}
botaoLimpar.addEventListener('click', limpaPixels); */
