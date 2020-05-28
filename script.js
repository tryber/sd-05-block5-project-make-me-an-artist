sessionStorage.setItem('selected', 'color1');
const colorSelected = sessionStorage.getItem('selected');
const paleta = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
function concatena(vetor) {
  let vari = '';
  for (let i = 0; i < vetor.length; i += 1) {
    vari += vetor[i];
  }
  return vari;
}
function cor() {
  const sort = Math.floor(Math.random() * 255);
  return sort > 10 ? sort : 10;
}
function rgb(a, b, c) {
  return concatena(['rgb(' , a , ',', b , ',' , c , ')']);
}
let colorArray = {
  color1: 'black',
  color2: rgb(cor(), cor(), cor()),
  color3: rgb(cor(), cor(), cor()),
  color4: rgb(cor(), cor(), cor())
};
function maisCor() {
  const nomeCor = concatena(['color' , (Object.keys(colorArray).length + 1)]);
  colorArray[nomeCor] = rgb(cor(), cor(), cor());
  const v = document.createElement('div');
  v.className = concatena(['color ' , nomeCor , ' ']);
  v.style.backgroundColor = colorArray[nomeCor];
  document.getElementById('color-palette').appendChild(v);
}
document.getElementById('maisCor').addEventListener('click', maisCor);
const v1 = document.createElement('div');
v1.className = 'color color1 selected ';
v1.style.backgroundColor = colorArray.color1;
//
const v2 = document.createElement('div');
v2.className = 'color color2 ';
v2.style.backgroundColor = colorArray.color2;
//
const v3 = document.createElement('div');
v3.className = 'color color3 ';
v3.style.backgroundColor = colorArray.color3;
//
const v4 = document.createElement('div');
v4.className = 'color color4 ';
v4.style.backgroundColor = colorArray.color4;
document.getElementById('color-palette').appendChild(v1);
document.getElementById('color-palette').appendChild(v2);
document.getElementById('color-palette').appendChild(v3);
document.getElementById('color-palette').appendChild(v4);
//
//
function changeColorSelected(oldColor, newColor) {
  const elementOld = document.getElementsByClassName('selected')[0];
  const elementNew = document.getElementsByClassName(newColor)[0];
  elementOld.className = elementOld.className.replace('selected', '');
  elementNew.className += 'selected';
  sessionStorage.setItem('selected', elementNew.className.toString().substr(elementNew.className.toString().lastIndexOf('color'), 6));
}
paleta.addEventListener('click', function (evento) {
  if (evento.target.className.toString().indexOf('color') >= 0) {
    changeColorSelected(colorSelected, evento.target.className);
    //  console.log(document.getElementsByClassName('color'))
  }
});
pixelBoard.addEventListener('click', function (evento) {
  if (evento.target.className.toString().indexOf('pixel') >= 0) {
    evento.target.style.backgroundColor = colorArray[sessionStorage.getItem('selected')];
  }
});
const botaoLimpar = document.getElementById('clear-board');
botaoLimpar.addEventListener('click', function () {
  const count = document.getElementsByClassName('pixel').length;
  for (let i = 0; i < count; i += 1) {
    document.getElementsByClassName('pixel')[i].style.backgroundColor = 'white';
  }
});
const botaoDimensao = document.getElementById('generate-board');
function createBoard(dimension) {
  pixelBoard.innerHTML = '';
  for (let i1 = 0; i1 < dimension; i1 += 1) {
    const lin = document.createElement('div');
    lin.className = 'linha';
    for (let j1 = 0; j1 < dimension; j1 += 1) {
      const quadro = document.createElement('div');
      quadro.className = 'pixel';
      quadro.style.backgroundColor = 'white';
      lin.appendChild(quadro);
    }
    pixelBoard.className = 'pixel-board conf2';
    pixelBoard.appendChild(lin);
  }
}
botaoDimensao.addEventListener('click', function () {
  const texto = document.getElementById('board-size');
  let textoValor = parseInt(texto.value, 10);
  if (texto.value === '') {
    alert('Board inválido!');
    return;
  }
  if (textoValor < 5) {
    textoValor = 5;
    texto.value = 5;
  }

  if (textoValor > 50) {
    textoValor = 50;
    texto.value = 0;
  }
  createBoard(textoValor);
});
