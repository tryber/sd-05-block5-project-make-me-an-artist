// FUNÇÃO PARA GERAR CORES ALEATÓRIAMENTE
function geraCor () {
  let hexadecimais = '0123456789ABCDEF';
  let cor = '#';
  for ( i = 0; i < 6; i++ ) {
    cor += hexadecimais[Math.floor(Math.random () * 16)];
  }
  return cor;
};

// DECLAREI A VARIÁVEL FORA DA FUNÇÃO PARA CHAMÁ-LA NOVAMENTE
let randonColor = document.getElementsByClassName('color');
// AO CARREGAR A PÁGINA A FUNÇÃO É EXECUTADA
window.onload = function () {
  randonColor[0].classList.add('selected');
  randonColor[0].style.backgroundColor = 'black';
  randonColor[1].style.backgroundColor = geraCor();
  randonColor[2].style.backgroundColor = geraCor();
  randonColor[3].style.backgroundColor = geraCor();
  // let randonColor1 = document.getElementsByClassName("default1")[0]
  // randonColor1.style.backgroundColor = geraCor()
  // let randonColor2 = document.getElementsByClassName("default2")[0]
  // randonColor2.style.backgroundColor = geraCor()
  // let randonColor3 = document.getElementsByClassName("default3")[0]
  // randonColor3.style.backgroundColor = geraCor()
};

// TROCA A SELEÇÃO DA PALETA DE CORES
function selection (event) {
  let oldSelection = document.getElementsByClassName("selected")[0];
  oldSelection.classList.remove("selected");
  let target = event.target;
  target.classList.add("selected");
};
// let black = document.getElementsByClassName('color')[0];
randonColor[0].addEventListener('click', selection);
// let color1 = document.getElementsByClassName('color')[1];
randonColor[1].addEventListener('click', selection);
// let color2 = document.getElementsByClassName('color')[2];
randonColor[2].addEventListener('click', selection);
// let color3 = document.getElementsByClassName('color')[3];
randonColor[3].addEventListener('click', selection);

//TROCA A COR DO PIXEL
let pixTable = document.getElementById("pixel-board");
pixTable.addEventListener("click", changeColor);
function changeColor (event) {
  let selectedPallete = document.getElementsByClassName("selected")[0];
  let selectedPixel = event.target;
  let novaCor = selectedPallete.style.backgroundColor;
  selectedPixel.classList.remove(selectedPixel.classList[1]);
  selectedPixel.style.backgroundColor = novaCor;
};
