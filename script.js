const btn = document.querySelector('#clear-board');
const pixel = document.querySelectorAll('.pixel');

btn.addEventListener('click', function () {
  for (let i = 0; i < pixel.length; i+=1) {
    pixel[i].className = 'pixel';
    pixel[i].style.backgroundColor = 'white';
  }
})
