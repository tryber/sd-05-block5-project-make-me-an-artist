let blackColor = document.getElementsByClassName("black")[0];
let redColor = document.getElementsByClassName("red")[0];
let blueColor = document.getElementsByClassName("blue")[0];
let greenColor = document.getElementsByClassName("green")[0];

blackColor.className += " selected";

blackColor.addEventListener("click", selectColor);
redColor.addEventListener("click", selectColor);
blueColor.addEventListener("click", selectColor);
greenColor.addEventListener("click", selectColor);

let selectedColor = document.getElementsByClassName("selected")[0];

function selectColor (event){
  color = event.target;
  if (selectedColor !== newColor){
    selectedColor.className -= " selected";
    color.className += " selected";
    selectedColor = document.getElementsByClassName("selected")[0];
  }
}