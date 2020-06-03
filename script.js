let clear_button = document.getElementById('clear-board');
let all_pixels = document.getElementsByClassName('pixel')

clear_button.addEventListener('click', clear);

function clear(){
  for (let i = 0; i < all_pixels.length; i++){
    all_pixels[i].style.backgroundColor = 'white'
  }
}