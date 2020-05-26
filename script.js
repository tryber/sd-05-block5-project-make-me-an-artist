const firstColor = document.querySelectorAll(".color")[0];
firstColor.style.backgroundColor = "black"
const secondColor = document.querySelectorAll(".color")[1];
secondColor.style.backgroundColor = "red"
const thirdColor = document.querySelectorAll(".color")[2];
thirdColor.style.backgroundColor = "green"
const fourthColot = document.querySelectorAll(".color")[3];
fourthColot.style.backgroundColor = "gold"
const btnClean = document.querySelectorAll(".btnClean")[0];
let colors = document.querySelectorAll(".color");
let pixel = document.querySelectorAll(".pixel");
let selectedColor = colors[0].style.backgroundColor; 
let selectedClass = document.querySelectorAll(".color")[0]
selectedClass.classList.add("selected");

// trigger to clean all the pixel
btnClean.addEventListener("click", () => {
 for (let i = 0; i < pixel.length; i += 1){
 pixel[i].style.backgroundColor = "white"; 
 }
})

// trigger to selected color class
for (let i = 0; i < colors.length; i += 1){
  colors[i].addEventListener("click", () => {
   selectedColor = colors[i].style.backgroundColor;
   selectedClass.classList.remove("selected");
   selectedClass = colors[i];
   selectedClass.classList.add("selected")
  })
}

// trigger to select pixel and put the color into them
for (let i = 0; i < pixel.length; i += 1){
 pixel[i].addEventListener("click", () => {
  pixel[i].style.backgroundColor = selectedColor;
 })
}

