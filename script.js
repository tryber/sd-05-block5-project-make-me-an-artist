let paleta = document.getElementById('color-palette');

paleta.addEventListener('click', function (duKaralho) {
  if (duKaralho.target.classList[0] == 'color') {
    let corAntiga = document.getElementsByClassName('selected')[0];
    corAntiga.classList.toggle('selected');
    let corEscolhida = duKaralho.target;
    corEscolhida.classList.toggle('selected');
  }
});

let pixelBoard = document.getElementById('pixel-board');

pixelBoard.addEventListener('click', function (doiDimais) {
  if (doiDimais.target.classList[0] == "pixel") {
    let pixelEscolhido = doiDimais.target;
    let corEscolhida = document.getElementsByClassName('selected')[0];
    let propriedadeCss = window.getComputedStyle(corEscolhida, null).getPropertyValue("background-color");
    pixelEscolhido.style.backgroundColor = propriedadeCss;
    console.log(pixelEscolhido.style.backgroundColor);
  }
});

let botaoLimpar = document.getElementById('clear-board');

botaoLimpar.addEventListener('click', function(){
  let limparCor = document.getElementsByClassName('pixel');
  for (let i = 0; i < limparCor.length; i++) {
    limparCor[i].style.backgroundColor = "white";
  }
})



