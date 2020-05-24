let botao = document.getElementById('clear-board');
let corInicial = document.getElementById('pixel-board').style.backgroundColor;

botao.addEventListener('click', function limparQuadro() {
  corInicial = 'white';
  botao = corInicial;
});
