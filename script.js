let colorBlack = document.getElementById('colorOne');
let colorRed = document.getElementById('colorTwo');
let colorBlue = document.getElementById('colorThree');
let colorGreen = document.getElementById('colorFour');
let colorSelected = document.querySelector('.selected');
let pixelUnit = document.querySelectorAll('.pixel');
let color = "black";
let clearButton = document.getElementById('clear-board');

colorBlack.addEventListener('click', selectedColor);
colorRed.addEventListener('click', selectedColor);
colorBlue.addEventListener('click', selectedColor);
colorGreen.addEventListener('click', selectedColor);

function selectedColor(event) {
  if (event.target === colorBlack) {
    colorSelected.classList.remove("selected");
    colorBlack.classList.add("selected");
    colorSelected = document.querySelector('.selected');
    color = "black";
  } else if (event.target === colorRed) {
    colorSelected.classList.remove("selected");
    colorRed.classList.add("selected");
    colorSelected = document.querySelector('.selected');
    color = "red";
  } else if (event.target === colorBlue) {
    colorSelected.classList.remove("selected");
    colorBlue.classList.add("selected");
    colorSelected = document.querySelector('.selected');
    color = "blue";
  } else if (event.target === colorGreen) {
    colorSelected.classList.remove("selected");
    colorGreen.classList.add("selected");
    colorSelected = document.querySelector('.selected');
    color = "green";
  }
  console.log(colorSelected);
}


for (let i = 0; i < pixelUnit.length; i += 1) {
  pixelUnit[i].addEventListener('click', function() {
    pixelUnit[i].style.backgroundColor = color;
  })
}

for (let i = 0; i < pixelUnit.length; i += 1) {
  clearButton.addEventListener('click', function() {
    pixelUnit[i].style.backgroundColor = 'white';
  })
}
