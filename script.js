const botaoReset = document.getElementById('clear-board');
const quadrados = document.getElementsByClassName('pixel');

botaoReset.addEventListener('click', function limparQuadro() {
  for (let i = 0; i < quadrados.length; i += 1) {
    quadrados[i].className = 'pixel';
    quadrados[i].style.background = 'white';
  }
});
