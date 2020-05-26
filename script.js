//Create pixel board
let pixelBoard = document.getElementById("pixel-board");

function createPixelsLine(numberOfPixels) {
  for(let i = 0; i < numberOfPixels; i += 1) {
  let pixelLine = document.createElement("tr");
  pixelBoard.appendChild(pixelLine);
  }
}
createPixelsLine(5);

let tagTR = document.getElementsByTagName("tr");
let numberTagTR;

function createPixelsColumn(numberOfPixels) {
  for(let i = 0; i < numberOfPixels; i += 1) {
    for(let j = 0; j < tagTR.length; j += 1) {
      let pixelColumn = document.createElement("td");
      numberTagTR = tagTR[j];
      numberTagTR.appendChild(pixelColumn);
      pixelColumn.className = "pixel white";
      pixelColumn.addEventListener("click", paintPixel);
    }
  }
}
createPixelsColumn(5);

//Change class "selected"
let colorBlack = document.getElementById("cor1");
let colorGreen = document.getElementById("cor2");
let colorYellow = document.getElementById("cor3");
let colorRed = document.getElementById("cor4");
let colorSelected = document.getElementsByClassName("selected")[0];
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

//Paint pixels
function paintPixel() {
  let colorClass = colorSelected.classList[1];
  event.target.classList.remove(event.target.classList[1]);
  event.target.classList.add(colorClass);
}

