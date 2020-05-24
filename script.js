const botao = document.getElementById('clear-board');
const quadroDeCores = document.getElementById('pixel-board');
let corInicial = document.getElementsByTagName('table').style.backgroundColor;

botao.addEventListener('click', function limparQuadro() {
  corInicial = 'white';
  quadroDeCores = corInicial;
});
