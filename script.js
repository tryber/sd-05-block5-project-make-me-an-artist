//clicar em pixel dentro quadro após selecionar cor paleta, o pixel deve ser preenchido com esta cor//
let colorPalette = document.getElementById("color-pallete");//substitui query por element//
let pixelBoard = document.getElementById("pixel-board");
//classe selected adicionada à cor selecionada e removida da cor anteriormente selecionada//

let select = document.getElementsByClassName("selected")[0];
let color = select.classList[1];
let target = "";

function change() {
target = event.target;
selected.classList.remove("selected");
target.classList.add('selected');
selected = document.getElementsByClassName('selected')[0];
}

function Pixel() {
color = selected.classList[1];
target = event.target;
let firstColor = target.classList[target.classList.length - 1];
target.classList.remove(firstColor);
target.classList.remove(firstColor);
let secondColor = "background-color: ${cor} !important";
target.classList.add(color);
target.style = secondColor;
}//função seletora//
