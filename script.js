
sessionStorage.setItem("selected", "color1")

let colorSelected = sessionStorage.getItem("selected")
let paleta = document.getElementById("color-palette");
let pixelBoard = document.getElementById("pixel-board")
let colorArray = {
  'color1': 'black',
  'color2': 'red',
  'color3': 'blue',
  'color4': 'green'
}

paleta.addEventListener("click", function (evento) {
  if (evento.target.className.toString().indexOf("color") >= 0) {
    changeColorSelected(colorSelected, evento.target.className);
    //console.log(document.getElementsByClassName("color"))
  }
});

function changeColorSelected(oldColor, newColor) {
  let elementOld = document.getElementsByClassName("selected")[0];
  let elementNew = document.getElementsByClassName(newColor)[0];
  elementOld.className = elementOld.className.replace("selected", "")
  elementNew.className += "selected"
  sessionStorage.setItem("selected", elementNew.className.toString().substr(elementNew.className.toString().lastIndexOf("color"), 6))
}

pixelBoard.addEventListener("click", function (evento) {
  if (evento.target.className.toString().indexOf("pixel") >= 0)
    evento.target.style.backgroundColor = colorArray[sessionStorage.getItem("selected")]    
});


let botaoLimpar = document.getElementById("clear-board")
botaoLimpar.addEventListener("click",function () {
  let count = document.getElementsByClassName("pixel").length
  for (let i = 0; i <count; i++) {
    document.getElementsByClassName("pixel")[i].style.backgroundColor="white"
    
  }
  
});
let botaoDimensao = document.getElementById("generate-board")
botaoDimensao.addEventListener("click",function(){
  let texto=document.getElementById("generate-board")
  if(texto.value==""){
    alert("Board inválido!")
    return;
  }
})
function createBoard(dimension){
  let lin=document.createElement("div")
  lin.className="linha"
  console.log(lin)
  for (let i1 = 0; i1 < dimension; i1++) {
    
  }
}