// SETA A COR SELECIONADA INICIAL COMO PRETO
window.onload = function(){
  let selectedClass = document.getElementsByClassName("firstColor")[0]
  selectedClass.className += " selected"
}

//GERA CORES ALEATORIAS
function geraCor(){
  let hexadecimais = '0123456789ABCDEF';
  let cor = '#';
  
  for ( i = 0; i < 6; i++ ) {
    cor += hexadecimais[Math.floor(Math.random() * 16)];
  }
  return cor;
}

//GERA LINHAS DO GRID
function lineGenerate(lineNumbers) {
  
  for( i = 0 ; i < lineNumbers ; i += 1) {
    let lineCreate = document.createElement("div");
    lineCreate.className = "line"+i
    lineCreate.style.width = "210px"
    lineCreate.style.height = "42px"
    
    
    
    let fatherDiv = document.getElementById("pixel-board");
    fatherDiv.appendChild(lineCreate)
    
  }
  
  
}

//GERA PIXELS DO GRID
function pixelGenerate (pixelNumbers) {
  let pixelCreate
  let pixelFather 
  for (i = 0 ; i < pixelNumbers ; i += 1) {
    if (i <= 4) {
      pixelCreate = document.createElement("div");
      pixelCreate.className = "pixel blank";
      
      pixelFather = document.getElementsByClassName("line0")[0];
      pixelFather.appendChild(pixelCreate);
    }
    if (i <= 9 && i > 4 ) {
      pixelCreate = document.createElement("div");
      pixelCreate.className = "pixel blank";
      
      pixelFather = document.getElementsByClassName("line1")[0];
      pixelFather.appendChild(pixelCreate);
    }
    if (i <= 14 && i > 9 ) {
      pixelCreate = document.createElement("div");
      pixelCreate.className = "pixel blank";
      
      pixelFather = document.getElementsByClassName("line2")[0];
      pixelFather.appendChild(pixelCreate);
    }
    if (i <= 19 && i > 14 ) {
      pixelCreate = document.createElement("div");
      pixelCreate.className = "pixel blank";
      
      pixelFather = document.getElementsByClassName("line3")[0];
      pixelFather.appendChild(pixelCreate);
    }
    if (i<= 24 && i > 19) {
      pixelCreate = document.createElement("div");
      pixelCreate.className = "pixel blank";
      
      pixelFather = document.getElementsByClassName("line4")[0];
      pixelFather.appendChild(pixelCreate);
    }
  }
}
lineGenerate(5);
pixelGenerate(25);

//TROCA A SELEÇÃO DA PALETA DE CORES
function selection (event){
  let oldSelection = document.getElementsByClassName("selected")[0];
  oldSelection.classList.remove("selected")

  let target = event.target
  target.classList.add("selected")
  oldSelection = document.getElementsByClassName("selected")[0]
}
let black = document.getElementsByClassName("firstColor")[0]
black.addEventListener('click', selection);
let color1 = document.getElementsByClassName("default1")[0]
color1.addEventListener('click', selection);
let color2 = document.getElementsByClassName("default2")[0]
color2.addEventListener('click', selection);
let color3 = document.getElementsByClassName("default3")[0]
color3.addEventListener('click', selection);

//TROCA A COR DO PIXEL
function changeColor(event) {
  let selectedPallete = document.getElementsByClassName("selected")[0];
  let selectedPixel = event.target
  
  selectedPixel.classList.remove(selectedPixel.classList[1]);
  selectedPixel.classList.add(selectedPallete.classList[1])
}
let pixTable = document.getElementById("pixel-board")
pixTable.addEventListener("click", changeColor)

//BLANK EVERYTHING
function  blankColor() {
  let blanker = document.getElementsByClassName("pixel")
  for (i = 0 ; i < blanker.length ; i += 1) {

    blanker[i].className = "pixel"
  }
}
let blankerBut = document.getElementById("clear-board")
blankerBut.addEventListener("click", blankColor)