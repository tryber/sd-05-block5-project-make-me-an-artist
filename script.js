// criando a função que limpará todos os pixels:
let botaoLimpar = document.getElementById('clear-board');
let todosPixels = document.getElementsByClassName('pixel');
function limpaPixels () {
  for (let i = 0; i < todosPixels.length; i += 1) {
  todosPixels[i].style.backgroundColor = 'white';
  }
};
botaoLimpar.addEventListener('click', limpaPixels);
