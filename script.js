//Ao clicar em uma das cores da paleta, a cor selecionada é que vai ser usada para preencher os pixels no quadro//
//variáveis declaradas//
const paletaDeCores = document.querySelectorAll('.color');
const corSelecionada = document.getElementById('selected');
const quadrados = document.querySelectorAll('.pixel');
const corBranca = document.getElementById('white');
const botaoLimpar = document.getElementById('clear-board');
const coresAtuais = document.getElementById('#color-palete');
  //funções//
function selecionaCor (event) {
  console.log(event.target);
  for (q = 0; q < paletaDeCores.length; q+=1) {
    paletaDeCores[q].classList.remove('selected');
  }
    event.target.classList.add('selected');
  }
function colocarCor (event) {
  let selecionaDiv = document.querySelector('.selected');
    event.target.style.backgroundColor = selecionaDiv.id;
}
function removeSelected () {
  for (let j = 0; j < paletaDeCores.length; j+=1) {
    paletaDeCores[j].className = 'color-${coresAtuais[j]}';
    }
}
for (let k = 0; k < paletaDeCores.length; k+=1) {
  paletaDeCores[k].addEventListener('click', selecionaCor);
}
for (let l = 0; l < quadrados.length; l+=1) {
quadrados[l].addEventListener('click', colocarCor);
}