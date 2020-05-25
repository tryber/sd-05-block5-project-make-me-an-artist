let palette = document.querySelector("#color-palette");
palette.addEventListener("click", myClickpalette);

function myClickpalette(paletteEvent){
 classCopy = paletteEvent.target.className.split(" ")
 console.log(classCopy);
 return(classCopy)
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
  
   return(a);
}

//------------------------------------------------------------
let clearBt = document.querySelector("#clear-board");
clearBt.addEventListener("click", clearAllPixels);
function clearAllPixels(){
  console.log(a)

}
