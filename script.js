window.onload = function() {

  criaBoard(5);

  function criaBoard(n) {
    

    for (let i=1; i<=n; i+=1) {
      let ultimaPosDentroBoard = document.getElementById("pixel-board");
      let criaDivLinha = document.createElement("div");
      criaDivLinha.className = "Linha" + i;
      ultimaPosDentroBoard.appendChild(criaDivLinha);

      for (let j = 1; j<=n; j+=1){
        let criaColuna = document.createElement("div");
        criaColuna.className = "pixel " + "Coluna"+j;
        let ultimaPosDentroLinha = ultimaPosDentroBoard.lastElementChild;
        ultimaPosDentroLinha.appendChild(criaColuna); 
      }
      
    }
  }
}
