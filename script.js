//clicar em pixel dentro quadro... preenchido com esta cor//

const colorPalette = document.getElementById('color-pallete');  //substitui query por element//
const pixelBoard = document.getElementById('pixel-board');

//classe selected ...e removida da cor anteriormente selecionada//

const select = document.getElementsByClassName('selected')[0];
const color = select.getElementsByClassName[1];
const target = '';

function Color() {
  colorPalette.innerHTML = '';
  const black = document.createElement('div');
  colorPalette.appendChild(black);
  black.className = 'selected';
  black.style.backgroundColor = 'black';
  for (let i = 0; i < n; i += 1) {
    const cor = document.createElement('div');
    colorPalette.appendChild(color);
    color.classList.add('secondcolor');
    color.style.backgroundColor = randomColor();
  }
} //função seletora//
for (c of color) {
  c.addEventListener('click', function (event) {
  for (s of color)  {
      s.classList.remove('selected')
  }
  event.target.classList.add('selected')
  })
  }
