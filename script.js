function createPixelBoard(){
    for ( i = 0; i < 25; i += 1){
    const pixdiv = document.createElement("div");
        pixdiv.className = "pixel";
        document.getElementById("pixel-board").appendChild(pixdiv);
    }
}
createPixelBoard();


let colorSelected = "black"

function estaSelecionado(){
    let sel = document.querySelector(".selected");
    if (sel) {
        sel.classList.remove("selected");
    }
}

function selectBlack(){
    colorSelected = "black"
    estaSelecionado();
    if (black.classList.contains("selected")){
        black.classList.remove("selected");
    } else {
        black.classList.add("selected");
    }
}

function selectGreen(){
    colorSelected = "green"
    estaSelecionado();
    if (green.classList.contains("selected")){
        green.classList.remove("selected");
    } else {
        green.classList.add("selected");
    }
}

function selectBlue(){
    colorSelected = "blue"
    estaSelecionado();
    if (blue.classList.contains("selected")){
        blue.classList.remove("selected");
    } else {
        blue.classList.add("selected");
    }
}

function selectRed(){
    colorSelected = "red"
    estaSelecionado();
    if (red.classList.contains("selected")){
        red.classList.remove("selected");
    } else {
        red.classList.add("selected");
    }
}

var black = document.getElementById("black");
var green = document.getElementById("green");
var red = document.getElementById("red");
var blue = document.getElementById("blue");

black.addEventListener("click", selectBlack);
green.addEventListener("click", selectGreen);
red.addEventListener("click", selectRed);
blue.addEventListener("click", selectBlue);

document.querySelector("#pixel-board").addEventListener("click", selecionarPixel)

function selecionarPixel(event) {
  event.target.style.backgroundColor = colorSelected
}

document.getElementById("clear-board").addEventListener("click", ApagarTudo)

function ApagarTudo(){
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
        document.querySelectorAll('.pixel')[i].style.backgroundColor = "null";
    }
}