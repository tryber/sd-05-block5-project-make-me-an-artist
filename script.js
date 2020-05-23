window.onload = function () {
  function buildPalette() {
    const palette = document.getElementsByClassName('color');
    let colors = ['black', 'red', 'green', 'blue'];
    for(let i=0 ; i<palette.length ; i++){
      palette[i].style.backgroundColor = colors[i];
      if(i == 0) palette[i].classList.add('selected');
    }
  }
  buildPalette();
};
