function criarQuadros() {
  const div1 = document.querySelector('.session1');

  for(let i = 0; i < 5; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    div1.appendChild(newDiv);
  }
}

function criarQuadros2() {
  const div1 = document.querySelector('.session2');

  for(let i = 0; i < 5; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    div1.appendChild(newDiv);
  }
}

function criarQuadros3() {
  const div1 = document.querySelector('.session3');

  for(let i = 0; i < 5; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    div1.appendChild(newDiv);
  }
}

function criarQuadros4() {
  const div1 = document.querySelector('.session4');

  for(let i = 0; i < 5; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    div1.appendChild(newDiv);
  }
}

function criarQuadros5() {
  const div1 = document.querySelector('.session5');

  for(let i = 0; i < 5; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    div1.appendChild(newDiv);
  }
}

criarQuadros();
criarQuadros2();
criarQuadros3();
criarQuadros4();
criarQuadros5();


let corActual = 'black';
function aplicaCorAtual(id) {
  let caixasPixelBoard = document.querySelector(`.${id}`);
  caixasPixelBoard.style.backgroundColor = corActual;
}
function selecionaPreto() {
  corActual = 'black';
}
function selecionaAmarelo() {
  corActual = 'yellow';
}
function selecionaAzul() {
  corActual = 'blue';
}
function selecionaVerde() {
  corActual = 'green';
}
