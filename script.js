//Ao clicar em uma das cores da paleta, a cor selecionada é que vai ser usada para preencher os pixels no quadro//
//variáveis declaradas//
const paletaDeCores = document.querySelectorAll('.color');
/*const quadrados = document.getElementById('pixel');*/
const corSelecionada = document.getElementById('selected');
const quadrados = document.getElementById('pixel');
const corBranca = document.getElementById('white');
const botaoLimpar = document.getElementById('clear-board');
const coresAtuais = ['c1', 'c2','c3', 'c4'];
  //funções//
function selecionaCor (event) {
  console.log(event.target);
  let selected = event.target.classList.contains('selected');
  removeSelected ()
  if (!selected) {
    event.target.classList.add('selected');
  }
}
function colocarCor (event) {
  let selecionaDiv = document.querySelector('.selected');
    event.target.style.backgroundColor = getComputedStyle(selecionaDiv).backgroundColor;
}
function removeSelected () {
  for (let j = 0; j < paletaDeCores.length; j+=1) {
    paletaDeCores[j].className = 'color paleta-${coresAtuais[j]}';
    }
}
for (let k = 0; k < paletaDeCores.length; k+=1) {
  paletaDeCores[k].addEventListener('click', selecionaCor);
}
for (let l = 0; l < quadrados.length; l+=1) {
quadrados[l].addEventlistener('click', colocarCor);
}

/*function trocaCorBranca() {
  const quadrados = document.querySelectorAll('.pixel-board');
    for (let i = 0; i < quadrados.length; i+=1) {
  quadrados[i].style.backgroundColor = 'white';
}
}*/
