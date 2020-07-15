// declarando variáveis e botões:
const pixelBoard = document.getElementById('pixel-board');
const quadroPixel = document.getElementById('pixel-board');
let quant = 5;
let id = 0;
const botaoLimpar = document.getElementById('clear-board');
const botaoQuadroPersonalizado = document.getElementById('generate-board');


// função que mudará a classe selected:
let corSelecionada = document.getElementsByClassName('selected')[0];
function selecionaCorAtual(event) {
  const corAtual = event.target;
  if (corAtual !== corSelecionada) {
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

function criaQuadroPixels() {
  const tamanho = `${quant * 42}px`;
  pixelBoard.style.width = tamanho;
  pixelBoard.style.height = tamanho;
  for (let i = 0; i < quant; i += 1) {
    const linhas = document.createElement('div');
    linhas.className = 'linha';
    linhas.style.width = tamanho;
    quadroPixel.appendChild(linhas);
    for (let j = 0; j < quant; j += 1) {
      const quadro = document.createElement('div');
      quadro.className = 'pixel fazLinha';
      quadro.id = id;
      quadro.style.backgroundColor = 'rgb 255, 255, 255';
      linhas.appendChild(quadro);
      id += 1;
    }
  }
}

function refazQuadroPixels() {
  pixelBoard.innerHTML = '';
  criaQuadroPixels(quant);
}

// evento que limpa todo o quadro de pixels ao ser clicado:
botaoLimpar.addEventListener('click', refazQuadroPixels);

function quadroPersonalizado() {
  const quantPixels = document.getElementById('board-size').value;
  if (quantPixels >= 5 && quantPixels <= 50) {
    quant = quantPixels;
    refazQuadroPixels();
  } else if (quantPixels > 50) {
    quant = 50;
    refazQuadroPixels();
  } else if (quantPixels < 5) {
    quant = 5;
    refazQuadroPixels();
  }
  if (quantPixels === '') {
    alert('Board inválido!');
  }
}

botaoQuadroPersonalizado.addEventListener('click', quadroPersonalizado);

function geraRgb() {
  const r = Math.ceil(255 * Math.random());
  const g = Math.ceil(255 * Math.random());
  const b = Math.ceil(255 * Math.random());
  return (`rgb(${r}, ${g}, ${b})`);
}

function geraPaleta() {
  document.getElementById('cor1').style.backgroundColor = 'rgb(0, 0, 0)';
  document.getElementById('cor2').style.backgroundColor = geraRgb();
  document.getElementById('cor3').style.backgroundColor = geraRgb();
  document.getElementById('cor4').style.backgroundColor = geraRgb();
}

window.onload = function () {
  criaQuadroPixels(quant);
  geraPaleta();
};

function colorePixel(evento) {
  const click = evento.target;
  const corClicada = document.querySelector('.selected').style.backgroundColor;
  click.style.backgroundColor = corClicada;
}

pixelBoard.addEventListener('click', colorePixel);
