const pix = document.querySelector("pixel")
let pal = document.getElementById("color-pallete")
let sel = document.querySelector("selected")
const cor = document.querySelector('color')

function changeColor() {
sel.classList.remove("selected")
event.target.classList.add('selected')
sel = document.querySelector('selected')
}

cor.addEventListener('click', changeColor)

console.log(sel)
console.log("Olá, mundo!")