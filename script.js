const botaoReset = document.getElementById('clear-board');
const quadrados = document.getElementsByClassName('pixel');
const paletaDeCores = document.querySelectorAll('.color');
let coresAtuais = ['preta', '2', '3', '4'];
const cores = ['black', 'paleta-2', 'paleta-3', 'paleta-4'];
let cor = "black";

function selecionarCor() {
    let selected = document.getElementById('selected')
    if( event.target.classList.contains('selected')) {
        removerSelected();
    }
    else if (!selected) {
        event.target.classList.add('selected');
    } else{alert('error');}
}

function atribuirCor() {
    let selectedDiv = document.querySelector('.selected');
    event.target.style.backgroundColor = getComputedStyle(selectedDiv).backgroundColor;
}

function removerSelected() {
    for (let i = 0; i < paletaDeCores.length; i++) {
        paletaDeCores[i].className = ` color paleta-${coresAtuais[i]}`
    }
}

function gerarCor() {
    const hexaDecimais = '0123456789ABCDEF'
    let corAleatoria = '#';
    for(let i = 0; i < 4; i += 1) {
        corAleatoria += hexaDecimais[Math.floor(Math.random() * 16)];
    }
    return corAleatoria;
}

for(let i = 1; i <= 3; i+= 1) {
    const corAleatoria = gerarCor();
    paletaDeCores[i].style.backgroundColor = corAleatoria;
    cores[i] = corAleatoria;
}

for (let i = 0; i < quadrados.length; i++) {
    quadrados[i].addEventListener('click', atribuirCor);
}

for (let i = 0; i < paletaDeCores.length; i++) {
    paletaDeCores[i].addEventListener('click', selecionarCor);
}

botaoReset.addEventListener('click', function resetarQuadro() {
    for (let i = 0; i < quadrados.length; i++) {
        quadrados[i].className = 'pixel';
        quadrados[i].style.backgroundColor = 'white';
    }
})
