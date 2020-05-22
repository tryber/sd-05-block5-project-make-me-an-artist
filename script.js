let corActual = 'black';
function aplicaCorAtual(id) {
  let caixasPixelBoard = document.querySelector(`.${id}`);
  caixasPixelBoard.style.backgroundColor = corActual;
}
function selecionaPreto() {
  corActual = 'black';
}
function selecionaAmarelo() {
  corActual = 'yellow';
}
function selecionaAzul() {
  corActual = 'blue';
}
function selecionaVerde() {
  corActual = 'green';
}
