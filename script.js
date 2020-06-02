let id = 0;
let altura = 5;

window.onload = function () {
  quadro(altura);
  criaPaleta();
};

const paleta = document.getElementById('color-palette');
const div = paleta.children;
const pixelBoard = document.getElementById('pixel-board');
let cor = ['preto'];

function corRandom() {
  const r = Math.ceil(255 * Math.random());
  const g = Math.ceil(255 * Math.random());
  const b = Math.ceil(255 * Math.random());
  return('rgb(' + r + ', ' + g + ', '  + b + ')');
}

function criaPaleta() {
  for (let i = 1; i < 4; i += 1) {
    let tinta = paleta.children;
    tinta = tinta[i];
    tinta.style.backgroundColor = corRandom();
    console.log(tinta);
  }
}

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
      square.className = 'pixel fazLinha';
      square.id = id;
      square.style.backgroundColor = 'rgb 255, 255, 255'
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
    return(alert('Board inválido!'));
  }
  if (boardInput >= 5 && boardInput <= 50) {
    altura = boardInput;
    mudaQuadro();
  }
});

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
  let cor = document.querySelector('.selected');
  cor = cor.style.backgroundColor;
  contato.style.backgroundColor = cor;
}

pixelBoard.addEventListener('click', pincel);
const botaoLimpar = document.getElementById('clear-board');
botaoLimpar.addEventListener('click', mudaQuadro);
