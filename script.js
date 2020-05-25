
//Ao clicar em uma das cores da paleta, a cor selecionada é que vai ser usada para preencher os pixels no quadro.
// Somente uma cor da paleta de cores tem a classe `selected` de cada vez
// Os pixels dentro do quadro não podem ter a classe `selected` quando são clicados

function changeSelected(ecolor) { //function deve transferir a class selected
  let colorSelected = ecolor.target;
  if (ecolor.target != document.getElementsByClassName("selected")[0]) {
    document.getElementsByClassName("selected")[0].className -= "selected";
  }
  else {
    colorSelected.className += " selected";
  }

}

colorSelected.addEventListener("click", selectColor);

// Ao clicar em um pixel dentro do quadro após selecionar uma cor na paleta, o pixel deve ser preenchido com esta cor.
// - Ao carregar a página deve ser possível pintar os pixels de preto
// (ou seja, interpretando: é o selected que conta para isso)
// - Após selecionar uma outra cor na paleta, deve ser possível pintar os pixels com essa cor
// - Somente o pixel que foi clicado deverá ser preenchido com a cor selecionada, sem influenciar na cor dos demais pixels.
// (ou seja nao usar a class que é igual para todas, e sim um event.target).

let currentSelected = document.getElementsByClassName("selected")[0];

function giveColor(epixel) {
  let selectedPixel = epixel.target;
  selectedPixel.style.backgroundColor = currentSelectedstyle.backgroundColor;
}
selectedPixel.addEventListener("click", giveColor);

//Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
let clearButton = document.getElementById("clear-board");
let pixels = document.getElementsByClassName("pixel");
function clearBoard() {
  pixels.style.backgroundColor = "white";
}
clearButton.addEventListener("click", clearBoard);