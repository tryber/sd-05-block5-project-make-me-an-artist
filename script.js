let pallete = document.querySelector("#color-palette");
pallete.addEventListener("mouseover", palleteColors)

function palleteColors(eventoPallete){
  console.log(eventoPallete.target);
}