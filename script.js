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

