let id = 0;
let altura = 5;

window.onload = function () {
  quadro(altura);
  criaPaleta();
};

const paleta = document.getElementById('color-palette');
const div = paleta.children;
const pixelBoard = document.getElementById('pixel-board');
let corPincel = 'rgb(0, 0, 0)';

function corRandom() {
  const r = Math.ceil(255 * Math.random());
  const g = Math.ceil(255 * Math.random());
  const b = Math.ceil(255 * Math.random());
  return ('rgb(' + r + ', ' + g + ', '  + b + ')');
}

function criaPaleta() {
  for (let i = 0; i < 4; i += 1) {
    let tinta = paleta.children;
    tinta = tinta[i];
    if (i === 0) {
      tinta.style.backgroundColor = 'rgb(0, 0, 0)';
      console.log(tinta)
    } else {
    tinta.style.backgroundColor = corRandom();
    console.log(tinta);
    }
  }
}

function quadro() {
  const medida = altura * 42 + 'px';
  pixelBoard.style.width = medida;
  pixelBoard.style.height = medida;
  for (let l = 0; l < altura; l += 1) {
    const line = document.createElement('div');
    line.className = 'linha';
    line.style.width = medida;
    quadroPixel.appendChild(line);
    for (let i = 0; i < altura; i += 1) {
      const square = document.createElement('div');
      square.className = 'pixel fazLinha';
      square.id = id;
      square.style.backgroundColor = 'rgb 255, 255, 255';
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
  }
  if (boardInput < 5) {
    altura = 5;
    mudaQuadro();
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
  document.querySelector('.selected').classList.remove('selected');
  evento.target.classList.add('selected');
}
paleta.addEventListener('click', mudaCorSelecionada);

function pincel(event) {
  const contato = event.target;
  let corP = document.querySelector('.selected');
  let corp = corP.style.backgroundColor;
  contato.style.backgroundColor = corp;
}

pixelBoard.addEventListener('click', pincel);
const botaoLimpar = document.getElementById('clear-board');
botaoLimpar.addEventListener('click', mudaQuadro);
