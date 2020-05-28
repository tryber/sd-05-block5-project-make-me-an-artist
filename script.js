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