const table = document.getElementById('pixel-board');
const preto = document.getElementsByClassName('preto');
const azul = document.getElementsByClassName('azul');
const vermelho = document.getElementsByClassName('vermelho');
const amarelo = document.getElementsByClassName('amarelo');
const btnClean = document.getElementById('clear-board');
var pixel = document.getElementsByClassName('pixel');
var selectedColor = '';

function generateBoard(value = null) {
    let size = value
    
    if (value == null) size = document.getElementById("board-size").value  

    if (size > 50) {
        window.alert("Insira no maximo 50 colunas"); 
        return
    } 
        
    const init = '<div class="tr">';
    const cell = '<div class="pixel"></div>';
    const final = '</div>';

    let content = "";
    
    for (let line = 1; line <= size; line+=1) {
        content += init;
        // <div class="tr">

        for (let column = 1; column <= size; column+=1) {
            content += cell;
            // <div class="pixel"></div>
        }

        content += final;
        // </div>
    }

    table.innerHTML = content;
    console.log(content);

    pixel = document.getElementsByClassName('pixel');

    for (let i = 0; i < pixel.length; i+= 1) {
        pixel[i].addEventListener('click', changeColor);
    }
}

generateBoard(5);

function selectColor() {
  if (event.target === preto[0]) {
    selectedColor = 'black';
  }
  if (event.target === azul[0]) {
    selectedColor = 'blue';
  }
  if (event.target === vermelho[0]) {
    selectedColor = 'red';
  }
  if (event.target === amarelo[0]) {
    selectedColor = 'yellow';
  }
}

function changeColor() {
  event.target.style.backgroundColor = selectedColor;
}

function cleanBoard() {
    pixel = document.getElementsByClassName('pixel');  

    for (let index = 0; index < pixel.length; index+= 1) {
        pixel[index].style.backgroundColor = "white";
    }
}

preto[0].addEventListener('click', selectColor);
azul[0].addEventListener('click', selectColor);
vermelho[0].addEventListener('click', selectColor);
amarelo[0].addEventListener('click', selectColor);
btnClean.addEventListener('click', cleanBoard);

for (let i = 0; i < pixel.length; i+= 1) {
    pixel[i].addEventListener('click', changeColor);
}