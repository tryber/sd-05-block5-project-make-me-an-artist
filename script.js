const pix = document.getElementsByClassName("pixel")
let pal = document.getElementById("color-palette")
let sel = document.getElementsByClassName("selected")
const cor = document.getElementsByClassName('color')

function changeColor(event) {
    for (c of cor) {
        c.classList.remove("selected")
    }
event.target.classList.add('selected')
}

for (c of cor) {
    c.addEventListener('click', changeColor)
}
