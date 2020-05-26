let penColour = "black";
function setPenColour(color) {
  penColour = color;
}

function setPixelColour(pixel) {
  pixel.style.backgroundColor = penColour;
}


let cleaner = document.getElementsByClassName('clear-board')[0];
cleaner.addEventListener("click", function(){
  let cont = document.getElementsByClassName("pixel").length // quantidade - cumprimento
  
  for (let index = 0; index < cont; index++) {
   document.getElementsByClassName("pixel")[index].style.backgroundColor ="white"
    
  }
})

