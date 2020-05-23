// create variable to store each color element
const black = document.querySelector('#black');
const yellow = document.querySelector('#yellow');
const red = document.querySelector('#red');
const blue = document.querySelector('#blue');

// include class selected on black element when the window is loaded
window.onload = function () {
  black.className += ' selected';
};

// add a event listener to each collor in the palett
black.addEventListener('click', function () {
  if (black.className != 'color selected') {
    black.className += ' selected';
  }
  yellow.className = 'color';
  red.className = 'color';
  blue.className = 'color';
});
yellow.addEventListener('click', function () {
  if (yellow.className != 'color selected') {
    yellow.className += ' selected';
  }
  black.className = 'color';
  red.className = 'color';
  blue.className = 'color';
});
red.addEventListener('click', function () {
  if (red.className != 'color selected') {
    red.className += ' selected';
  }
  yellow.className = 'color';
  black.className = 'color';
  blue.className = 'color';
});
blue.addEventListener('click', function () {
  if (blue.className != 'color selected') {
    blue.className += ' selected';
  }
  yellow.className = 'color';
  red.className = 'color';
  black.className = 'color';
});