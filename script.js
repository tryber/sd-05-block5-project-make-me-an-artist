const botaoReset = document.getElementById('clear-board');
const quadrados = document.getElementsByClassName('pixel');
const paletaDeCores = document.querySelectorAll('.color')


let coresAtuais = ['preto', 'amarelo', 'azul', 'vermelho'];
const cores = ['preto', 'amarelo', 'azul', 'vermelho'];
let cor = "black"

function selecionarCor() {
    for (let i = 0; i < 4; i += 1) {
        if (this.className === `  ${coresAtuais[i]}`) {
            removerSelected();
            this.className = ` ${coresAtuais[i]} selected`;
            cor = cores[i];
        }
    }
}

for (let i = 0; i < paletaDeCores.length; i += 1) {
    paletaDeCores[i].addEventListener('click', selecionarCor)
}

function atribuirCor() {
    this.style.backgroungColor = "cor";
}

for (let i = 0; i < quadrados.length; i += 1) {
    quadrados[i].addEventListener('click', atribuirCor)
}
function removerSelected() {
    for (let i = 0; i < paletaDeCores.length; i += 1) {
        paletaDeCores[i].className = ` color ${coresAtuais[i]}`
    }
}

botaoReset.addEventListener('click', function limparQuadro() {
    for (let i = 0; i < quadrados.length; i += 1) {
        quadrados[i].className = 'pixel';
        quadrados[i].style.background = 'white';
    }
});
