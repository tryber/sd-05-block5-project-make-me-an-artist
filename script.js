//Change class "selected"
let colorBlack = document.getElementById("cor1");
let colorGreen = document.getElementById("cor2");
let colorYellow = document.getElementById("cor3");
let colorRed = document.getElementById("cor4");
let colorSelected = colorBlack;
let colorPalette = document.getElementById("color-palette");

function changeSelected() {
    if(event.target === colorBlack) {
        colorSelected.classList.remove("selected");
        colorBlack.classList.add("selected");
        colorSelected = event.target;
    } else if(event.target === colorGreen) {
        colorSelected.classList.remove("selected");
        colorGreen.classList.add("selected");
        colorSelected = event.target;
    } else if(event.target === colorYellow) {
        colorSelected.classList.remove("selected");
        colorYellow.classList.add("selected");
        colorSelected = event.target;
    } else if(event.target === colorRed) {
        colorSelected.classList.remove("selected");
        colorRed.classList.add("selected");
        colorSelected = event.target;
    }
}

colorPalette.addEventListener("click", changeSelected);
