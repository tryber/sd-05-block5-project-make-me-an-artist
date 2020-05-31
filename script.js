let palette = document.querySelectorAll(".color");
let pixelSelect = document.querySelectorAll(".pixel")
let limparTudo = document.querySelector("#clear-board")


for (let a = 0; a < palette.length; a++){
    palette[a].addEventListener("click",selectColor);
}
function selectColor (event){
    for (let b = 0; b < palette.length; b++){
        palette[b].classList.remove("selected");
    }
    let selected = event.target.classList.contains('selected');
    event.target.classList.add('selected')
}

for (let c = 0; c < pixelSelect.length; c++){
    pixelSelect[c].addEventListener("click",pintDiv);
}
function pintDiv (event){
    let selectDiv = document.querySelector('.selected'); 
    event.target.style.backgroundColor = getComputedStyle(selectDiv).backgroundColor;
}

limparTudo.addEventListener("click", limpar);
function limpar (){
    for (let d = 0; d < pixelSelect.length; d++){
        pixelSelect[d].style.backgroundColor = "white";
    }
}