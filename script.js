window.onload = function () {
  buildPalette();
  function buildPalette() {
    const palette = document.getElementsByClassName('color');
    const colors = ['black', 'red', 'green', 'blue'];
    for (let i = 0 ; i < palette.length ; i++) {
      palette[i].style.backgroundColor = colors[i];
      if(i === 0) palette[i].classList.add('selected');
    }
    buildGrid();
  }
  function buildGrid() {
    const cells = document.getElementsByClassName('pixel');
    for (let i = 0 ; i < cells.length ; i++) {
      cells[i].style.backgroundColor = 'white';
      cells[i].addEventListener("click", function(el){
        const selected = document.querySelector(".selected");
        el.target.style.backgroundColor = selected.style.backgroundColor;
      });
    }
  }
};
