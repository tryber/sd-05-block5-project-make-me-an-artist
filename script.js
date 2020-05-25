window.onload = function() {
  function criaBoard(n) {
    for (let i=1; i<=n; i+=1) {
      const ultimaPosDentroBoard = document.getElementById('pixel-board');
      let criaDivLinha = document.createElement('div');
      criaDivLinha.className = 'Linha' + i;
      ultimaPosDentroBoard.appendChild(criaDivLinha);

      for (let j = 1; j<=n; j+=1){
        let criaColuna = document.createElement('div');
        criaColuna.className = 'pixel ' + 'Coluna'+j;
        let ultimaPosDentroLinha = ultimaPosDentroBoard.lastElementChild;
        ultimaPosDentroLinha.appendChild(criaColuna); 
      }
    }
  }
  function selecionaCorPaleta (event) {
    let pegaPosSelecionada = event.target;
    let pegaCorSelecionada = getComputedStyle(event.target, null).getPropertyValue('background-color');
    let pegaClasseSelecionada = event.target.className;
    console.log(pegaPosSelecionada);
    console.log(pegaCorSelecionada);
    console.log(pegaClasseSelecionada);
    if (pegaClasseSelecionada !== "color selected") {
      let elementosPaleta = document.getElementById('color-palette').children;
      for (let i=0; i<elementosPaleta.length; i+=1){
        if(elementosPaleta[i].className === 'color selected') {
          elementosPaleta[i].className = 'color';
        }
      }
      event.target.className = 'color selected';
    }
  }
  let monitoraColorPalette = document.getElementById("color-palette");
  monitoraColorPalette.addEventListener("click", selecionaCorPaleta);

  criaBoard(5);
  }
