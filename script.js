



let palette = document.querySelector("#color-palette");
palette.addEventListener("click", myClickpalette);
let classCopy = ["color", "cor1", "selected"];

function myClickpalette(paletteEvent){
let a = paletteEvent.target.className.split(" ");
if(a[1] === "cor1" ){
  console.log(a)
  classCopy = a 
  classCopy[2] = "selected"

}else if(a[1] === "cor2"){
  console.log(a)
  classCopy = a 
  classCopy[2] = "selected"

}else if(a[1] === "cor3"){
  console.log(a)
  classCopy = a 
  classCopy[2] = "selected"

}else if(a[1] === "cor4"){
  console.log(a)
  classCopy = a 
  classCopy[2] = "selected"

}
  return(classCopy);
}

//------------------------------------------------------------
let board = document.querySelector("#pixel-board")
board. addEventListener("click", myPasteColor);

function myPasteColor(selectedPaste){
  console.log(selectedPaste.target)

  let a =selectedPaste.target.className.split(" ");

  if(selectedPaste.target.className !== "linha"){
    a[1] = classCopy[1]
    a = a[0] + " " + a[1];
    selectedPaste.target.className = a;
    console.log(a)
   }
}

//------------------------------------------------------------
let clearBt = document.querySelector("#clear-board");
let clean = document.getElementById("pixel-board").querySelectorAll(".pixel");
console.log(clean)
clearBt.addEventListener("click", function (){
  for(let i = 0; i < clean.length; i += 1){
   clean[i].style.background = "rgb(255, 255, 255)"
  }

})
