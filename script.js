// Feito por Elisângelo
// scripts para pintar os pixels de cores que foram seleciondas pelo usuario
/*window.onload = function(){
let selected = document.getElementsByClassName("black")[0];
let cores = document.getElementById("color-palette");
let clearButton = document.getElementById('clear-board');
let pixelBoard = document.querySelector("#pixel-board");

let corSelecionada= '';
cores.addEventListener('click', selecionaCor);
clearButton.addEventListener('click',limpaPixel);
pixelBoard.addEventListener('click', colorePixel);

if( selecionaCor != undefined){
selected.classList.remove("selected");
}
function selecionaCor(e){
    let selecao = document.querySelector(".selecao");
    let cor = e.target;
    selecao.innerHTML = cor.classList[1];
    corSelecionada.classList= cor.classList[1];    
    console.log("passei por aqui");
}
function limpaPixel(e){
    if(e.target){ 
    for(let child = parent.firstChild; child != null; child = child.nextSibling ){
        pixelBoard[child].style.backgroundColor = "white";
        pixelBoard.classList[child] = corSelecionada.classList[0];
    }
}
}
function colorePixel(e){
    let  pixelSelecionado = document.querySelector(".pixel")[0];
    pixelSelecionado.style = corSelecionada.style.backgroundColor  
}

}*/
// Feito por Elisângelo
// scripts para pintar os pixels de cores que foram seleciondas pelo usuario
window.onload = function(){
    document.querySelector(".color.black").className += "selected";
    let clearButton = document.getElementById('clear-board');
    clearButton.addEventListener('click',limpaPixel);
    let pixelBoard = document.querySelectorAll("#pixel-board")[0];
    let pixel = document.getElementsByTagName("pixel");
    
    function limpaPixel(){
                for( let i = 0; i < pixelBoard.lastElementChild; i +=1){
                  pixel[i].style = "background-color: white";
        }
    }
    
    
    }