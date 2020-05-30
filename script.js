//clicar em pixel dentro quadro... preenchido com esta cor//
const paleta = document.getElementById('color-pallete');
const caixaDePixels = document.getElementById('pixel-board');
const select = document.getElementsByClassName('selected');
const selecionaCor = document.getElementsByClassName('color2');
const target = '';
//classe selected ...e removida da cor anteriormente selecionada//
function Color() {
paleta.innerHTML = '';
const black = document.createElement('div');
paleta.appendChild(black);
black.className = 'selected';
black.style.backgroundColor = 'black';
for (let i = 0; i < n; i += 1) {
const color2 = document.createElement('div');
paleta.appendChild(color2);
color2.classList.add('secondcolor');
color2.style.backgroundColor = randomColor();
}
} //função seletora//
for (c of selecionaCor) {
c.addEventListener('click', function (event) {
for (s of selecionaCor) {
s.classList.remove('selected');
}
event.target.classList.add('selected');
})
}

function Pixel(event) {
const colorPixel = document.querySelector(".selected");
event.target.style.backgroundColor = colorPixel.id;
for (p of Pixel) {
p.addEventListener('click', Pixel);
}
}
