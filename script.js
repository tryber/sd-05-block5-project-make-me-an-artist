const botaoReset = document.getElementById('clear-board');
const quadrados = document.getElementsByClassName('pixel');
const paletaDeCores = document.querySelectorAll('.color')
let coresAtuais = ['preta', '2', '3', '4'];
const cores = ['black', 'paleta-2', 'paleta-3', 'paleta-4'];
let cor = "black"

function selecionarCor() {
    for(let i = 0; i < 4; i++) {
        if(this.className === `color paleta-${coresAtuais[i]}`) {
            removerSelected();
            this.className = `color paleta-${coresAtuais[i]} selected`;
            cor = cores[i];
        }
    }
}

function atribuirCor() {
    this.style.backgroundColor = cor;
}

function removerSelected() {
    for(let i = 0; paletaDeCores.length; i++) {
        paletaDeCores[i].className = ` color paleta-${coresAtuais[i]}`
    }
}


for(let i = 0; i < quadrados.length; i++) {
    quadrados[i].addEventListener('click', atribuirCor);
}

botaoReset.addEventListener('click', function resetarQuadro() {
    for(let i = 0 ; i < quadrados.length; i++) {
        quadrados[i].className = 'pixel';
        quadrados[i].style.backgroundColor = 'white';
    }
})