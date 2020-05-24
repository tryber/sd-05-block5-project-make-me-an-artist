const botaoReset = document.getElementById('clear-board');
const quadro = document.getElementById('pixel-board');

botaoReset.addEventListener('click', function limparQuadro() {
  quadro.style.backgroundColor = 'white' 
});
