// create variable to store each color element
const black = document.querySelector('#black');
const yellow = document.querySelector('#yellow');
const red = document.querySelector('#red');
const blue = document.querySelector('#blue');

// include class selected on black element when the window is loaded
window.onload = function () {
  black.className += ' selected';
};
console.log(black);