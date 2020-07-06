// criando a função que limpará todos os pixels:
const botaoLimpar = document.getElementById('clear-board');
const todosPixels = document.getElementsByClassName('pixel');
function limpaPixels() {
  for (let i = 0; i < todosPixels.length; i += 1) {
    todosPixels[i].style.backgroundColor = 'white';
  }
}
botaoLimpar.addEventListener('click', limpaPixels);
