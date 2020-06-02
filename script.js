let id = 0;
let altura = 5;

window.onload = function () {
  quadro(altura);
};

function quadro() {
  const medida = altura * 42 + 'px';
  pixelBoard.style.width = medida;
  pixelBoard.style.height = medida;
  for (let l = 0; l < altura; l += 1) {
    const line = document.createElement('div');
    line.className = 'linha largura';
    line.style.width = medida;
    quadroPixel.appendChild(line);
    for (let i = 0; i < altura; i += 1) {
      const square = document.createElement('div');
      square.className = 'pixel fazLinha branco';
      square.id = id;
      line.appendChild(square);
      id += 1;
    }
  }
}

function mudaQuadro () {
  pixelBoard.innerHTML = '';
  quadro(altura);
}

const botaoBoard = document.getElementById('generate-board');
const quadroPixel = document.getElementById('pixel-board');

botaoBoard.addEventListener('click', function () {
  const boardInput = document.getElementById('board-size').value;
  if (boardInput > 50) {
    altura = 50;
    mudaQuadro();
  };
  if (boardInput < 5) {
    altura = 5;
    mudaQuadro()
  };
  if (boardInput === '') {
    alert('Board inválido!');
  }
  if (boardInput >= 5 && boardInput <= 50) {
    altura = boardInput;
    mudaQuadro();
  }
});

const paleta = document.getElementById('color-palette');
const div = paleta.children;
const pixelBoard = document.getElementById('pixel-board');
let cor = ['preto'];

function mudaCorSelecionada(evento) {
  for (let i = 0; i < paleta.childElementCount; i += 1) {
    div[i].classList.remove('selected');
  }
  cor = [];
  const cornova = evento.target;
  const bloco = cornova.classList.value;
  const lista = bloco.split(' ');
  cor.push(lista[lista.length - 1]);
  cornova.classList.add('selected');
}
paleta.addEventListener('click', mudaCorSelecionada);

function pincel(event) {
  const contato = event.target;
  const listaString = contato.classList.value;
  const listaItem = listaString.split(' ');
  contato.classList.remove(listaItem[2]);
  contato.classList.add(cor);
}

pixelBoard.addEventListener('click', pincel);
const botaoLimpar = document.getElementById('clear-board');
botaoLimpar.addEventListener('click', mudaQuadro);
