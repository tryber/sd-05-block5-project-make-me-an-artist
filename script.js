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
    console.log(event)
  });
  console.log(event)

  // create a button that clears the board colors when clicked
  const clearButton = document.getElementById('clear-board');
  const pixelDivs = document.querySelectorAll('.pixel')
  clearButton.addEventListener('click', function () {
    for (i in pixelDivs) {
      pixelDivs[i].id = "white";
    }
  })
}
