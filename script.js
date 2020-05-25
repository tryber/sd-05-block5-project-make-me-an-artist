//Variaveis de cor
const colorBlack = document.querySelector('.black');
const color1 = document.querySelector('.red');
const color2= document.querySelector('.blue');
const color3= document.querySelector('.green');

let board = document.querySelector('#pixel-board')
let selected = document.getElementsByClassName('selected')[0];
let corSelecionada = selected.classList[1];
let target = '',pixel ='';

function changeSel(){
  target = event.target;
  selected.classList.remove('selected');
  target.classList.add('selected');
  selected= document.getElementsByClassName('selected')[0];
}
function colorPixel() {
  corSelecionada = selected.classList[1];
  target = event.target;
  target.style.backgroundColor=corSelecionada;
  
}
colorBlack.addEventListener('click',changeSel);
color1.addEventListener('click',changeSel);
color2.addEventListener('click',changeSel);
color3.addEventListener('click',changeSel);
board.addEventListener('click', colorPixel);
