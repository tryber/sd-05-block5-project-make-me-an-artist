// Deixando a classe 'selected' em um elemento por vez.
let coresPaletta = document.getElementById("color-palette");
coresPaletta.addEventListener('click', trocandoClasseDasCores);
function trocandoClasseDasCores(loucura) {
  if ((loucura.target.className).indexOf("color") >= 0) {
    for(let index = 0; index < 4; index+=1){
     (coresPaletta.children[0].children[0].children[index].className = "color");
    }
    loucura.target.className += " selected";
  }
}

// Pintando o board

let board = document.getElementById("pixel-board");

board.addEventListener('click', pintandoOPixel);
function pintandoOPixel(evento) {
  let corSelecionada = document.getElementsByClassName("selected")[0];
  let cssProp = window.getComputedStyle(corSelecionada, null).getPropertyValue("background-color");
  if(evento.target.className.indexOf("pixel") >= 0) {
    evento.target.style.backgroundColor = cssProp;
  }
  console.log(cssProp);
}


// Botão para limpar o board
// let botao = document.getElementById("clear-board");
// let white = document.getElementById("white");

// function botaoParaLimparCores() {
//   let pixels = document.getElementsByClassName("pixel");
//   console.log(pixels[0])
//   for(let i = 0; i < pixels.length; i++) {
//     let temp = document.createElement("td")
//     temp.className = "pixel"
//     temp.style.backgroundColor = "white";
//   console.log(document.querySelectorAll("td.pixel")[i] = temp);
//   document.querySelectorAll("td.pixel")[i]
//   }
//   board.innerHTML = botao.replaceWith.white
// }
// botao.addEventListener('click', botaoParaLimparCores);
