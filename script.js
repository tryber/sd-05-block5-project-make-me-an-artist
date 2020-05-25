let pallete = document.querySelector("#color-pallete");
pallete.addEventListener("mouseover",palleteColors)

function palleteColors(eventoPallete){
  console.log(eventoPallete.target);
}