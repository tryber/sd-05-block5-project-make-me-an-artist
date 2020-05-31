//Ao clicar em uma das cores da paleta, a cor selecionada é que vai ser usada para preencher os pixels no quadro//
//variáveis declaradas//
const paletaDeCores = document.querySelectorAll('.color');
const quadrados = document.getElementById('pixel');
const corSelecionada = document.getElementById('selected');
const caixasVazias = document.getElementById('pixel-board');
const corBranca = document.getElementById('white');
const botaoLimpar = document.getElementById('clear-board');
const corPreta = "black";
const coresAtuais = ['c1', 'c2','c3', 'c4'];
  //funções//
function selecionaCor (event) {
  console.log(event.target);
  console.log(selecionaDiv.style.backgroundColor);
  let selected = event.target.classList.contains('selected');
  removeSelected();
  if (!selected) {
    event.target.classList.add('selected')
  }
}
function colocarCor (event) {
  let selecionaDiv = document.querySelector('.selected')
    event.target.style.backgroundColor = getComputedStyle(selecionaDiv).backgroundColor;
}
function removeSelected () {
  for(let j = 0; j < paletaDeCores.length; j+=1) {
    paletaDeCores[j].className = 'color paleta-${coresAtuais[i]}';
  }
}
/*for(let k = 0; k < quadrados.length; k+=1) {quadrados[k].addEventListener('click', colocarCor);
}*/

function trocaCorBranca() {
    const caixasVazias = document.querySelectorAll('.pixel-board');
      for (let i = 0; i < caixasVazias.length; i+=1) {
    caixasVazias[i].style.backgroundColor = 'white';
  }
}
