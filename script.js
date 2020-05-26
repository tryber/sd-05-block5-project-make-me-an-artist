const firstColor = document.querySelectorAll(".color")[0];
const secondColor = document.querySelectorAll(".color")[1];
const thirdColor = document.querySelectorAll(".color")[2];
const fourthColot = document.querySelectorAll(".color")[3];
const btnClean = document.querySelectorAll(".btnClean")[0];
const pixel = document.getElementsByClassName("pixel");
let selectedClass = firstColor.classList.add("selected")
let selectedColor = firstColor.style.backgroundColor; 


// trigger to clean all the pixel
btnClean.addEventListener("click", () => {
 for (let i = 0; i < pixel.length; i += 1){
  pixel[i].classList.add("clear")
 }
})

// trigger to selected color class
const colorLoop = document.querySelectorAll(".color");
for (let i = 0; i < colorLoop.length; i += 1){
 const loop = colorLoop[i]
  colorLoop[i].addEventListener("click", () => {
   selectedColor = colorLoop[i].style.backgroundColor;
   selectedColor.classList.re
  })
}



