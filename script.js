//gerando as cores da paleta
const paleta = document.getElementById("color-palette");
const pixelPaleta = document.getElementsByClassName('color');
const pixelBoard = document.getElementById("pixel-board");
let selectedColor = "black";
let nPixLine = 5;

let colors = ["black", "blue", "green", "yellow"];

function setPaleteColors(colors) {
  for (let pixel = 0; pixel < pixelPaleta.length; pixel+=1) {
      pixelPaleta[pixel].style.backgroundColor = colors[pixel];
    }
}

// Gerando pixel-board

function genBoardElement(className, idx) {
  let boardElement = document.createElement("div");
  boardElement.setAttribute("class", className);
  boardElement.setAttribute("id", idx);
  return boardElement; 
}

function genPixels(numberPix) {
  let pixels = [];
  for (let pixel = 0; pixel < numberPix; pixel+=1) {
    let pix =  genBoardElement("pixel", `pixel-${pixel+1}`);
    pixels.push(pix);
  }
  return pixels;
}

function populateBoard(pixels, elemento) {
  for (let pixel of pixels) {
    elemento.appendChild(pixel);
  }
}

// Eventos
window.addEventListener("load", function () {
  let pixels = genPixels(nPixLine*nPixLine);
  populateBoard(pixels, pixelBoard);
  pixelBoard.style.width = `${nPixLine * 42}px`;
  // pixelBoard.style.height = `${nPixLine * 41}px`;

  });

window.addEventListener("load", setPaleteColors(colors));
