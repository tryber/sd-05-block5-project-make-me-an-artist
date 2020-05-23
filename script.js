//gerando as cores da paleta

let paleta = document.getElementById("color-palete");
const pixelPaleta = document.getElementsByClassName('color');
let selectedColor = "black";

let colors = ["black", "blue", "green", "yellow"];

function setPaleteColors(colors) {
  for (let pixel = 0; pixel < pixelPaleta.length; pixel+=1) {
      pixelPaleta[pixel].style.backgroundColor = colors[pixel];
    }
}

window.addEventListener("load", setPaleteColors(colors));
