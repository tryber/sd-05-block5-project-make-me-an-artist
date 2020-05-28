let blackColor = document.getElementsByClassName("black")[0];
let redColor = document.getElementsByClassName("red")[0];
let blueColor = document.getElementsByClassName("blue")[0];
let greenColor = document.getElementsByClassName("green")[0];

blackColor.className += " selected";
let selectedColor = document.getElementsByClassName("selected")[0];

blackColor.addEventListener("click", selectColor);
redColor.addEventListener("click", selectColor);
blueColor.addEventListener("click", selectColor);
greenColor.addEventListener("click", selectColor);

function selectColor(event){
  let chosenColor = event.target;
  if (chosenColor === blackColor){
    selectedColor.classList.remove("selected");
    blackColor.classList.add("selected");
  } else if (chosenColor === redColor){
    selectedColor.classList.remove("selected");
    redColor.classList.add("selected");
  } else if (chosenColor === blueColor){
    selectedColor.classList.remove("selected");
    blueColor.classList.add("selected");
  } else if (chosenColor === greenColor){
    selectedColor.classList.remove("selected");
    greenColor.classList.add("selected");
  }
  selectedColor = document.getElementsByClassName("selected")[0];
} 

let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", clearButton);

function clearButton(){
  let pixels = document.getElementsByClassName("pixel");
  for(let i = 0; i < pixels.length; i+=1){
    pixels[i].style.backgroundColor = "white";
  }
}

function colorPixel(event){
  let selectedPixel = event.target;
  let palletElement = document.getElementsByClassName("selected")[0];
  let bgColor = getComputedStyle(palletElement).backgroundColor;
  selectedPixel.style.backgroundColor = bgColor;
}

let pixels = document.getElementsByClassName("pixel");
for (let i = 0; i < pixels.length; i+=1){
  pixels[i].addEventListener("click", colorPixel)
}
