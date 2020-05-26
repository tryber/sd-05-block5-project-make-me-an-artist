/*
if (sessionStorage.key("selected").toString().indexOf("color") < 0) {
  sessionStorage.setItem("selected", "color1")
}
*/
let colorSelected = sessionStorage.getItem("selected")
let paleta = document.getElementById("color-palette");
/*
paleta.addEventListener("click", function (evento) {
  if (evento.target.className.toString().indexOf("color") >= 0) {
    changeColorSelected(colorSelected, evento.target.className);
    //console.log(document.getElementsByClassName("color"))
  }
});
function changeColorSelected(oldColor, newColor) {
  let elementOld = document.getElementsByClassName("selected")[0];
  let elementNew = document.getElementsByClassName(newColor)[0];
  elementOld.className = elementOld.className.replace("selected", "")
  elementNew.className += "selected"
  sessionStorage.setItem("selected", elementNew.className.toString().substr(elementNew.className.toString().lastIndexOf("color"), 6))
}
*/