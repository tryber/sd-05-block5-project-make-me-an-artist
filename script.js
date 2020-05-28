const generateBoard = document.getElementById('generate-board');
const colorBlack = document.getElementById('colorOne');
const colorRed = document.getElementById('colorTwo');
const colorBlue = document.getElementById('colorThree');
const colorGreen = document.getElementById('colorFour');
let colorSelected = document.querySelector('.selected');
const pixelUnit = document.querySelectorAll('.pixel');
let color = 'black';
const clearButton = document.getElementById('clear-board');

function createBoard() {
  const size = document.getElementById('board-size').value;
  console.log(size);
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
  } else {
    alert('Board inválido!');
  }
}
generateBoard.addEventListener('click', createBoard);

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

for (let i = 0; i < pixelUnit.length; i += 1) {
  pixelUnit[i].addEventListener('click', function () {
    pixelUnit[i].style.backgroundColor = color;
  });
}

for (let i = 0; i < pixelUnit.length; i += 1) {
  clearButton.addEventListener('click', function () {
    pixelUnit[i].style.backgroundColor = 'white';
  });
}
