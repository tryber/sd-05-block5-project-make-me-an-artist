// document.querySelectorAll('.color').forEach(item => {
//   item.addEventListener('click', event => {

//   })
// })

let coresPaletta = document.getElementById("color-palette");

function trocandoClasseDasCores(loucura) {
  if ((loucura.target.className).indexOf("color") >= 0) {
    for(let index = 0; index < 4; index+=1){
     (coresPaletta.children[0].children[0].children[index].className = "color");
    }
    loucura.target.className += " selected";
  }
}
coresPaletta.addEventListener('click', trocandoClasseDasCores);