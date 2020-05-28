//clicar em pixel dentro quadro... preenchido com esta cor//

const colorPalette = document.getElementById('color-pallete');  //substitui query por element//
const pixelBoard = document.getElementById('pixel-board');

//classe selected ...e removida da cor anteriormente selecionada//

const select = document.getElementsByClassName('selected')[0];
const color = select.classList[1];
const target = '';

function Color() {
  paletteColor.innerHTML = '';
  const black = document.createElement('div');
  paletteColor.appendChild(black);
  black.className = 'selected';
  black.style.backgroundColor = 'black';
  for (let i = 0; i < n; i += 1) {
    const cor = document.createElement('div');
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
