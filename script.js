sessionStorage.setItem("selected", "color1");
let colorSelected = sessionStorage.getItem("selected");
let paleta = document.getElementById("color-palette");
let pixelBoard = document.getElementById("pixel-board");
function cor() {
  let sort = Math.floor(Math.random() * 255);
  return sort > 10 ? sort : 10;
}
function rgb(a, b, c) {
  return 'rgb(' + a + ',' + b + ',' + c + ')';
}
function maisCor() {
  let nomeCor = "color" + (Object.keys(colorArray).length + 1);
  colorArray[nomeCor] = rgb(cor(), cor(), cor());
  let v = document.createElement("div");
  v.className = "color " + nomeCor + " ";
  v.style.backgroundColor = colorArray[nomeCor];
  document.getElementById("color-palette").appendChild(v);
}
document.getElementById("maisCor").addEventListener("click", maisCor);
let colorArray = {
  'color1': 'black',
  'color2': rgb(cor(), cor(), cor()),
  'color3': rgb(cor(), cor(), cor()),
  'color4': rgb(cor(), cor(), cor())
}
let v1 = document.createElement("div");
v1.className = "color color1 selected ";
v1.style.backgroundColor = colorArray["color1"];
//
let v2 = document.createElement("div");
v2.className = "color color2 ";
v2.style.backgroundColor = colorArray["color2"];
//
let v3 = document.createElement("div");
v3.className = "color color3 ";
v3.style.backgroundColor = colorArray["color3"];
//
let v4 = document.createElement("div");
v4.className = "color color4 ";
v4.style.backgroundColor = colorArray["color4"];
document.getElementById("color-palette").appendChild(v1);
document.getElementById("color-palette").appendChild(v2);
document.getElementById("color-palette").appendChild(v3);
document.getElementById("color-palette").appendChild(v4);
//
paleta.addEventListener("click", function (evento) {
  if (evento.target.className.toString().indexOf("color") >= 0) {
    changeColorSelected(colorSelected, evento.target.className);
    //console.log(document.getElementsByClassName("color"))
  }
});
//
function changeColorSelected(oldColor, newColor) {
  let elementOld = document.getElementsByClassName("selected")[0];
  let elementNew = document.getElementsByClassName(newColor)[0];;
  elementOld.className = elementOld.className.replace("selected", "");
  elementNew.className += "selected";
  sessionStorage.setItem("selected", elementNew.className.toString().substr(elementNew.className.toString().lastIndexOf("color"), 6));
}
pixelBoard.addEventListener("click", function (evento) {
  if (evento.target.className.toString().indexOf("pixel") >= 0)
    evento.target.style.backgroundColor = colorArray[sessionStorage.getItem("selected")];
});
let botaoLimpar = document.getElementById("clear-board");
botaoLimpar.addEventListener("click", function () {
  let count = document.getElementsByClassName("pixel").length;
  for (let i = 0; i < count; i += 1) {
    document.getElementsByClassName("pixel")[i].style.backgroundColor = "white";
  }
});
let botaoDimensao = document.getElementById("generate-board");
botaoDimensao.addEventListener("click", function () {
  let texto = document.getElementById("board-size");
  if (texto.value == "") {
    alert("Board inválido!");
    return;
  }
  if (parseInt(texto.value) < 5)
    texto.value = 5;

  if (parseInt(texto.value) > 50)
    texto.value = 50;
  createBoard(parseInt(texto.value));
});
function createBoard(dimension) {
  pixelBoard.innerHTML = "";
  for (let i1 = 0; i1 < dimension; i1 += 1) {
    let lin = document.createElement("div");
    lin.className = "linha";
    console.log(lin);
    for (let j1 = 0; j1 < dimension; j1 += 1) {
      let quadro = document.createElement("div");
      quadro.className = "pixel";
      quadro.style.backgroundColor = "white";
      lin.appendChild(quadro);
    }
    pixelBoard.className = "conf2";
    pixelBoard.appendChild(lin);
  }
}
