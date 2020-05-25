//Change class "selected"
let colorSelected = getElementsByClassName("selected")[0];
let colorBlack = getElementsByClassName("black")[0];
let colorGreen = getElementsByClassName("green")[0];
let colorYellow = getElementsByClassName("yellow")[0];
let colorRed = getElementsByClassName("red")[0];
let eachColor = querySelectorAll(".color");

function changeSelected() {
    if(event.target === colorBlack) {
        colorSelected.classList.remove("selected");
        colorBlack.classlist.add("selected");
    } else if(event.target === colorGreen) {
        colorSelected.classList.remove("selected");
        colorGreen.classlist.add("selected");
    } else if(event.target === colorYellow) {
        colorSelected.classList.remove("selected");
        colorYellow.classlist.add("selected");
    } else if(event.target === colorRed) {
        colorSelected.classList.remove("selected");
        colorRed.classlist.add("selected");
    }
}

colorBlack.addEventListener("click", changeSelected);
colorGreen.addEventListener("click", changeSelected);
colorYellow.addEventListener("click", changeSelected);
colorRed.addEventListener("click", changeSelected);