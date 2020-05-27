// Deixando a classe 'selected' em um elemento por vez.
let coresPaletta = document.getElementById("color-palette");

function trocandoClasseDasCores(loucura) {
  if ((loucura.target.className).indexOf("color") >= 0) {
    for(let index = 0; index < 4; index+=1){
     (coresPaletta.children[0].children[0].children[index].className = "color");
    }
    loucura.target.className += " selected";
  }
}
coresPaletta.addEventListener('click', trocandoClasseDasCores);

// Botão para limpar o board
let botao = document.getElementById("clear-board");
let board = document.getElementsByClassName("pixel");
let white = document.getElementById("white");

function botaoParaLimparCores() {
  board.innerHTML = botao.replaceWith.white
}
botao.addEventListener('click', botaoParaLimparCores);