//clicar em pixel dentro quadro após selecionar cor paleta, o pixel deve ser preenchido com esta cor//
let colorPalette = document.getElementById("color-pallete");//substitui query por element//
let pixelBoard = document.getElementById("pixel-board");
//classe selected adicionada à cor selecionada e removida da cor anteriormente selecionada//
let select = document.getElementsByClassName("selected")[0];
let changeColor = selected.classList[1]
function change (event) {
target = event.target;
selected.classList.remove('selected');
target.classList.add('selected');
selected = document.getElementsByClassName('selected')[0];
}//função seletora//
