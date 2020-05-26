const colorBlack = document.querySelector('.black');
const colorRed = document.querySelector('.red');
const colorGreen = document.querySelector('.green');
const colorBlue = document.querySelector('.blue');
const pixelBoard = document.getElementById('pixel-board');
const clearBoard = document.getElementById('clear-board');


let corSelecionada = document.querySelector('.selected');
let corEscolhida = corSelecionada.classList[1];

function selecionaCor(){
    let seleciona = event.target
    seleciona.classList.add('selected')
    corSelecionada.classList.remove('selected')
    corEscolhida = seleciona.classList[1]
    corSelecionada = seleciona;
}

function pintaCor(){
    let seleciona = event.target
    seleciona.classList.remove(seleciona.classList[1])
    seleciona.classList.add(corEscolhida);
}

colorBlack.addEventListener('click', selecionaCor);
colorRed.addEventListener('click', selecionaCor);
colorGreen.addEventListener('click', selecionaCor);
colorBlue.addEventListener('click', selecionaCor);
pixelBoard.addEventListener('click', pintaCor);
