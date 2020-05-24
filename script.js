let botao = document.getElementById('clear-board');
let corInicial = document.getElementsByTagName('table').style.backgroundColor;

botao.addEventListener('click', function limparQuadro() {
  corInicial = 'white';
  botao = corInicial;
});
