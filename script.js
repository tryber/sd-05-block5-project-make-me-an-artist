//Essa parte do código preenche o de branco  fundo de todos os quadros
function PintarFundo(){
    const tdQuadroPixel = document.getElementsByClassName('pixel');
      for(let i = 0;i < tdQuadroPixel.length;i +=1){
        tdQuadroPixel[i].style.backgroundColor='white';
      }
}
let limparQuadros = document.getElementById('clear-board');
limparQuadros.addEventListener('click',PintarFundo);
//fim do código ...


//let corSelecionada = document.querySelector('.selected');

function selecionaCor(event){
    let corselect = document.querySelector('.selected');
    corselect.classList.remove('selected');
    event.target.classList.add('selected');
}

let paletaDecores = document.getElementById('color-palette');

paletaDecores.addEventListener('click',function(){
    if(event.target.classList.contains('color')){
        selecionaCor(event);
    }
})





