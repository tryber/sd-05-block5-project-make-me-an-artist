window.onload = function () {
  // create variable to store each color element
  const black = document.querySelector('#black');
  const yellow = document.querySelector('#yellow');
  const red = document.querySelector('#red');
  const blue = document.querySelector('#blue');

  // include class selected on black element when the window  is loaded
    black.className += ' selected';  
    let selectedColor = document.querySelector('.color.selected').id;

  // add a event listener to each collor in the palett
  black.addEventListener('click', function () {
    // if clas is not selected already, add class selected to   it
    if (black.className != 'color selected') {
      black.className += ' selected';
    }
    // keep other colors without the selected class
    yellow.className = 'color';
    red.className = 'color';
    blue.className = 'color';
    selectedColor = 'black';
  });
  yellow.addEventListener('click', function () {
    if (yellow.className != 'color selected') {
      yellow.className += ' selected';
    }
    black.className = 'color';
    red.className = 'color';
    blue.className = 'color';
    selectedColor = 'yellow';
  });
  red.addEventListener('click', function () {
    if (red.className != 'color selected') {
      red.className += ' selected';
    }
    yellow.className = 'color';
    black.className = 'color';
    blue.className = 'color';
    selectedColor = 'red';    
  });
  blue.addEventListener('click', function () {
    if (blue.className != 'color selected') {
      blue.className += ' selected';
    }
    yellow.className = 'color';
    red.className = 'color';
    black.className = 'color';
    selectedColor = 'blue';
  });

  // change the color of the pixel when it's clicked
  const board = document.getElementById('pixel-board');
  board.addEventListener('click', function (event) {
    event.target.id = selectedColor;
  });

  // create a button that clears the board colors when clicked
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', function () {
    let pixelDivs = document.querySelectorAll('.pixel');
    for (i in pixelDivs) {
      pixelDivs[i].id = "white";
    }
  });

  // create a variable N to get the input of the number o pixels
  const N = document.getElementById('board-size');

  // create divs inside pixel-board based on the number of pixels of the input
  function createPixels() {
    //clear all the divs created before creating a new board
    board.innerHTML = '';
    let boardColumns = '';
    let numberOfPixels = N.value;
    if (numberOfPixels < 5) {
      numberOfPixels = 5;
      for (let i = 0; i < numberOfPixels; i+=1) {
        boardColumns += 'max-content ';
        for (let j = 0; j < numberOfPixels; j+=1) {
          const div = document.createElement('div');
          div.className = 'pixel white';
          board.appendChild(div);
        }
      }
    } else if (numberOfPixels > 50) {
      numberOfPixels = 50;
      for (let i = 0; i < numberOfPixels; i+=1) {
        boardColumns += 'max-content ';
        for (let j = 0; j < numberOfPixels; j+=1) {
          const div = document.createElement('div');
          div.className = 'pixel white';
          board.appendChild(div);
        }
      }
    } else {
      for (let i = 0; i < numberOfPixels; i+=1) {
        boardColumns += 'max-content ';
        for (let j = 0; j < numberOfPixels; j+=1) {
          const div = document.createElement('div');
          div.className = 'pixel white';
          board.appendChild(div);
        }
      }
    }
    
    board.style.gridTemplateColumns = boardColumns;
  }
  
  // create a event listener to create the board once the button VQV is clicked
  const vqvBtn = document.getElementById('generate-board');
  vqvBtn.addEventListener('click', createPixels);
}
