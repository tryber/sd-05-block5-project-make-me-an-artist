const black = document.getElementsByClassName("color")[0];
black.className += " selected";
const cor1 = document.getElementsByClassName("color")[1];
const cor2 = document.getElementsByClassName("color")[2];
const cor3 = document.getElementsByClassName("color")[3];

let selected = document.getElementsByClassName("selected")[0];
let corSelecionada = window
  .getComputedStyle(selected, null)
  .getPropertyValue("background-color");
console.log("cor selecionada é:" + corSelecionada);

black.addEventListener("click", function () {
  cor1.className = "color td";
  black.className += " selected";
  cor2.className = "color td";
  cor3.className = "color td";
  selected = document.getElementsByClassName("selected")[0];
  corSelecionada = window
    .getComputedStyle(selected, null)
    .getPropertyValue("background-color");
  console.log("cor selecionada é:" + corSelecionada);
});

cor1.addEventListener("click", function () {
  black.className = "color td";
  cor1.className += " selected";
  cor2.className = "color td";
  cor3.className = "color td";
  selected = document.getElementsByClassName("selected")[0];
  corSelecionada = window
    .getComputedStyle(selected, null)
    .getPropertyValue("background-color");
  console.log("cor selecionada é:" + corSelecionada);
});

cor3.addEventListener("click", function () {
  black.className = "color td";
  cor3.className += " selected";
  cor2.className = "color td";
  cor1.className = "color td";
  selected = document.getElementsByClassName("selected")[0];
  corSelecionada = window
    .getComputedStyle(selected, null)
    .getPropertyValue("background-color");
  console.log("cor selecionada é:" + corSelecionada);
});

cor2.addEventListener("click", function () {
  black.className = "color td";
  cor2.className += " selected";
  cor3.className = "color td";
  cor1.className = "color td";
  selected = document.getElementsByClassName("selected")[0];
  corSelecionada = window
    .getComputedStyle(selected, null)
    .getPropertyValue("background-color");
  console.log("cor selecionada é:" + corSelecionada);
});

function myFunction() {
  document.getElementById("demo").innerHTML = corSelecionada;
}

document.querySelectorAll(".pixel").forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log(item);
    item.setAttribute("style", "background-color: " + corSelecionada + ";");
  });
});

const buttonClear = document.getElementsByTagName("button")[0];
buttonClear.addEventListener("click", function () {
  console.log(document.querySelectorAll(".pixel"));
  const pixel = document.querySelectorAll(".pixel");
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].setAttribute("style", "background-color: rgb(255, 255, 255)");
  }
});

let randomColor;
let cor = document.querySelectorAll(".color");
  for (let c = 1; c < cor.length; c += 1) {
    randomColor = "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    cor[c].setAttribute("style", ("background-color: " + randomColor));
}