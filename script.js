const generateBoard = document.getElementById('generate-board');
const colorBlack = document.getElementById('color1');
const colorRed = document.getElementById('color2');
const colorBlue = document.getElementById('color3');
const colorGreen = document.getElementById('color4');
let pixelUnit = document.querySelectorAll('.pixel');
let colorSelected = document.querySelector('.selected');
let color = 'black';
const clearButton = document.getElementById('clear-board');

function createBoard() {
  let size = document.getElementById('board-size').value;
  if (size > 0 && size < 5) {
    size = 5;
    alert('Será considerado tamanho mínimo de 5px para o board.');
  } else if (size > 50) {
    size = 50;
    alert('Será considerado tamanho máximo de 50px para o board.');
  }
  document.getElementsByTagName('tbody')[0].innerHTML = '';
  if (size >= 5 && size <=50) {
    for (let j = 0; j < size; j += 1) {
      const tr = document.createElement('tr');
      for (let i = 0; i < size; i += 1) {
        const td = document.createElement('td');
        td.className = 'pixel';
        tr.appendChild(td);
      }
      document.getElementById('pixel-board').children[0].appendChild(tr);
    }
    pixelUnit = document.querySelectorAll('.pixel');
  } else {
    alert('Board inválido!');
  }
}
generateBoard.addEventListener('click', createBoard);

vetorCores = {
  color1: 'rgb(0, 0, 0)',
}

function selectedColor(event) {
  
  if (event.target === colorBlack) {
    colorSelected.classList.remove('selected');
    colorBlack.classList.add('selected');
    colorSelected = document.querySelector('.selected');
    color = 'black';
  } else if (event.target === colorRed) {
    colorSelected.classList.remove('selected');
    colorRed.classList.add('selected');
    colorSelected = document.querySelector('.selected');
    color = 'red';
  } else if (event.target === colorBlue) {
    colorSelected.classList.remove('selected');
    colorBlue.classList.add('selected');
    colorSelected = document.querySelector('.selected');
    color = 'blue';
  } else if (event.target === colorGreen) {
    colorSelected.classList.remove('selected');
    colorGreen.classList.add('selected');
    colorSelected = document.querySelector('.selected');
    color = 'green';
  }
}

colorBlack.addEventListener('click', selectedColor);
colorRed.addEventListener('click', selectedColor);
colorBlue.addEventListener('click', selectedColor);
colorGreen.addEventListener('click', selectedColor);


const pixelBoard = document.getElementById('pixel-board');
pixelBoard.addEventListener('click', function(evento) {
  if (evento.target.className === 'pixel') {
    evento.target.style.backgroundColor = color;
  }
});

clearButton.addEventListener('click', function () {
  pixelUnit = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelUnit.length; i += 1) {
    pixelUnit[i].style.backgroundColor = 'white';
  }
});
