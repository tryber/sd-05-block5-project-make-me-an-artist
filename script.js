//variaveis
const black = document.getElementById("black");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const white = document.getElementById("white");
let selected = document.getElementsByClassName("selected")[0];

//functions
function changeSelected(){
  let target = event.target
  selected.classList.remove("selected");
  target.classList.add("selected");
  selected = document.getElementsByClassName("selected")[0];
}

//ListenerEvents
black.addEventListener("click", changeSelected)
red.addEventListener("click", changeSelected)
blue.addEventListener("click", changeSelected)
white.addEventListener("click", changeSelected)