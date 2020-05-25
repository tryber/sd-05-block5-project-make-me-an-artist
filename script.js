//Desenhar o pixel board;

var totalRows = 5;
var totalPixels = 5;

function createBoard() {
  let table = document.querySelector("table");
  for (let r = 0; r < totalRows; r += 1) {
    let pixelRow = document.createElement('tr');

    for (let p = 0; p < totalPixels; p += 1) {
      let pixels = document.createElement('td');
      pixels.className = "pixel";
      pixelRow.appendChild(pixels);
    }
  table.appendChild(pixelRow);
  }
}

window.onload=createBoard;

// Selectionar e pintar pixels;
var colorSelect = "black";

function selectColor(pickedColor) {
  colorSelect = pickedColor;
  console.log(colorSelect); 
}
function changeColor() {
  colorPaint = colorSelect;
  console.log(colorPaint);
}

