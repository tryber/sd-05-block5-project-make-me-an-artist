let corPixel = '';
function corSelecionada(e) {
  let selecao = e.target;
  let removerSelected = document.querySelectorAll('.color');
  for(let i = 0; i < removerSelected.length; i+=1) {
    removerSelected[i].classList.remove('selected');
  }

  selecao.classList.add('selected');
  corPixel = getComputedStyle(selecao, null).getPropertyValue('background-color');
  
}

const acessarPalette = document.querySelector('#color-palette');
acessarPalette.addEventListener('click', corSelecionada);

function mudaCor (e) {
  const pixelQuadro = e.target;
  pixelQuadro.style.backgroundColor = corPixel;
}

const pixelQuadro = document.querySelector('#pixel-board');
pixelQuadro.addEventListener('click', mudaCor);



