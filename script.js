//variaveis constantes
const colorBlack = document.querySelector('.black');
const colorRed = document.querySelector('.red');
const colorGreen = document.querySelector('.green');
const colorBlue = document.querySelector('.blue');
const pixelBoard = document.getElementById('pixel-board');
//variavel que muda
let corSelecionada = document.querySelector('.selected');
let corEscolhida = corSelecionada.classList[1];
//função de selecionar a cor
function selecionaCor(){
    let seleciona = event.target
    seleciona.classList.add('selected')
    corSelecionada.classList.remove('selected')
    corEscolhida = seleciona.classList[1]
    corSelecionada = seleciona;
}
//função para pintar com a cor selecionada
function pintaCor(){
    let seleciona = event.target
    seleciona.classList.remove(seleciona.classList[1])
    seleciona.classList.add(corEscolhida);
}
//botão de limpar o quadro
const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', function () {
  const pixelDivs = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelDivs.length; i += 1) {
    pixelDivs[i].style.backgroundColor = 'white';
  }
});
//eventos
colorBlack.addEventListener('click', selecionaCor);
colorRed.addEventListener('click', selecionaCor);
colorGreen.addEventListener('click', selecionaCor);
colorBlue.addEventListener('click', selecionaCor);
pixelBoard.addEventListener('click', pintaCor);
