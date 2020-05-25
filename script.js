//Change class "selected"
let colorSelected = getElementsByClassName("selected")[0];
let colorBlack = getElementsByClassName("black")[0];
let colorGreen = getElementsByClassName("green")[0];
let colorYellow = getElementsByClassName("yellow")[0];
let colorRed = getElementsByClassName("red")[0];
let eachColor = querySelectorAll(".color");

function changeSelected() {
  colorSelected.classList.remove("selected");
  event.target.classList.add("selected");
}

colorBlack.addEventListener("click", changeSelected);
colorGreen.addEventListener("click", changeSelected);
colorYellow.addEventListener("click", changeSelected);
colorRed.addEventListener("click", changeSelected);