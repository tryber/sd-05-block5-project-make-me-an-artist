//clicar em pixel dentro quadro... preenchido com esta cor//

const colorPalette = document.getElementById('color-pallete');  //substitui query por element//
const pixelBoard = document.getElementById('pixel-board');

//classe selected ...e removida da cor anteriormente selecionada//

const select = document.getElementsByClassName('selected');
const color2 = document.getElementsByClassName('color2  ');
const target = '';

function Color() {
  colorPalette.innerHTML = '';
  const black = document.createElement('div');
  colorPalette.appendChild(black);
  black.className = 'selected';
  black.style.backgroundColor = 'black';
  for (let i = 0; i < n; i += 1) {
    const color2 = document.createElement('div');
    colorPalette.appendChild(color2);
    color2.classList.add('secondcolor');
    color2.style.backgroundColor = randomColor();
  }
} //função seletora//
for (c of color2) {
c.addEventListener('click', function (event) {
for (s of color2) {
    s.classList.remove('selected');
}
event.target.classList.add('selected');
})
}

function Pixel(event) {
  let color3 = document.querySelector(".selected");
    event.target.style.backgroundColor = color3.id;
 }

 for (p of Pixel) {
     p.addEventListener('click', Pixel);
 }
