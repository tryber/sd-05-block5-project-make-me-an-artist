window.onload = function () {

  let selecionaPreto = document.getElementById("preto");
  let pegaCorSelecionada = getComputedStyle(selecionaPreto, null).getPropertyValue('background-color');
  let monitoraColorPalette = document.getElementById("color-palette");
  monitoraColorPalette.addEventListener("click", selecionaCorPaleta);
  //monitorar "elements" nao deu certo - descobrir pq.
  //let monitoraPixelBoard = document.getElementsByClassName('pixel');
  //for (let i=0; i<monitoraPixelBoard.length; i+=1) {
  //  monitoraPixelBoard[i].addEventListener("click", encheCor(event));
  //  console.log(monitoraPixelBoard[i]);
  //}
  let monitoriaLimpar = document.getElementById('clear-board');
  monitoriaLimpar.addEventListener('click', limpaTudo);

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('pixel')) {
      event.target.style.backgroundColor = pegaCorSelecionada;
    }
  }, false);

  criaBoard(5);

  function criaBoard(n) {
    for (let i = 1; i <= n; i += 1) {
      const ultimaPosDentroBoard = document.getElementById('pixel-board');
      let criaDivLinha = document.createElement('div');
      criaDivLinha.className = 'Linha' + i;
      ultimaPosDentroBoard.appendChild(criaDivLinha);

      for (let j = 1; j <= n; j += 1) {
        let criaColuna = document.createElement('div');
        criaColuna.className = 'pixel';
        criaColuna.className = 'pixel ' + 'Coluna' + j;
        let ultimaPosDentroLinha = ultimaPosDentroBoard.lastElementChild;
        ultimaPosDentroLinha.appendChild(criaColuna);
      }
    }
  }
  function selecionaCorPaleta(event) {
    let pegaPosSelecionada = event.target;
    pegaCorSelecionada = getComputedStyle(event.target, null).getPropertyValue('background-color');
    let pegaClasseSelecionada = event.target.className;
    if (pegaClasseSelecionada !== "color selected") {
      let elementosPaleta = document.getElementById('color-palette').children;
      for (let i = 0; i < elementosPaleta.length; i += 1) {
        if (elementosPaleta[i].className === 'color selected') {
          elementosPaleta[i].className = 'color';
        }
      }
      event.target.className = 'color selected';
    }
  }

  function encheCor(event) {
    event.target.style.backgroundColor = pegaCorSelecionada;
  }

  function limpaTudo() {
    let pegaPosicaoPixels = document.getElementsByClassName("pixel");
    for (let i=0; i<pegaPosicaoPixels.length; i+=1){
      pegaPosicaoPixels[i].style.backgroundColor = "white";
    }
  }
}
