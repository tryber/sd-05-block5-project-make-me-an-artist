//clicar em pixel dentro quadro... preenchido com esta cor//
let colorPalette = document.getElementById("color-pallete");  //substitui query por element//
let pixelBoard = document.getElementById("pixel-board");
//classe selected ...e removida da cor anteriormente selecionada//

let select = document.getElementsByClassName("selected")[0];
let color = select.classList[1];
let target = "";

function setColor(n) {
  paletteColor.innerHTML = '';
  let preto = document.createElement('div');
  paletteColor.appendChild(black);
  black.className = 'color selected';
  black.style.backgroundColor = 'black';
  for (let param = 0; param < n; param += 1) {
    let cor = document.createElement('div');
    paletteColor.appendChild(color);
    color.classList.add('secondcolor');
    color.style.backgroundColor = randomColor();
  }
} //função seletora//

paletteColor.addEventListener('click', function () {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}
