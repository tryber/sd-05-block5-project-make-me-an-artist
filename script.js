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

/*function trocaCorBranca() {
  const quadrados = document.querySelectorAll('.pixel-board');
    for (let i = 0; i < quadrados.length; i+=1) {
  quadrados[i].style.backgroundColor = 'white';
}
}

botaoMudar.addEventListener('click', trocaCorBranca);
  let pixels = document.querySelectorAll('.pixel');
    for (let m = 0; m < pixels.length-1; m+=1) {
      pixels[m].style.backgroundColor = 'white'
    }*/
   /* function botaoParaLimparCores() {
    let pixels = document.getElementsByClassName("pixel");
    for(let i = 0; i < pixels.length; i+=1) {
    let temp = document.createElement("td");
    temp.className = "pixel";
    temp.style.backgroundColor = "white";
    console.log(document.querySelectorAll("td.pixel")[i] = temp);
    document.querySelectorAll("td.pixel")[i];
    }
    let board = document.getElementsByClassName("pixel");
    board.innerHTML = botao.replaceWith.white
    }
    botaoLimpar.addEventListener('click', botaoLimpar);*/