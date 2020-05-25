//Variáveis
let colorBase1 = document.querySelectorAll(".color")[0];
let colorBase2 = document.querySelectorAll(".color")[1];
let colorBase3 = document.querySelectorAll(".color")[2];
let colorBase4 = document.querySelectorAll(".color")[3];
let listaDePixels = document.querySelectorAll(".pixel");
let clearButton = document.querySelector("button");

//definições de cor prederminadas
colorBase1.style.background = "black";
colorBase2.style.background = "green";
colorBase3.style.background = "red";
colorBase4.style.background = "pink";

//funções
function clear() {
for (let i = 0; i < listaDePixels.length; i += 1) {
    listaDePixels[i].style.background = "white"
    }
}

//eventos
clearButton.addEventListener('click', clear);
