let penColour = "black";
function setPenColour(color,num) {
  penColour = color;
  let cont = document.getElementById('color-palette').childElementCount
  for(let i = 0; i < cont; i ++){
    document.getElementById('color-palette').children[i].className = 'color'
  }
  document.getElementById('color-palette').children[num].className = 'color selected'
}

function setPixelColour(pixel) {
  pixel.style.backgroundColor = penColour;
}


let cleaner = document.getElementById('clear-board');
cleaner.addEventListener("click", function(){
  let cont = document.getElementsByClassName("pixel").length
  
  for (let index = 0; index < cont; index++) {
   document.getElementsByClassName("pixel")[index].style.backgroundColor ="white"
    
  }
})

