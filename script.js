window.onload = function () {

  function buildPalette(){
    let palette = document.getElementsByClassName('color');
    let colors = ["black" , "red" , "green" , "blue"];
    for(let i=0 ; i<palette.length ; i++){
      palette[i].style.backgroundColor = colors[i];
      if(i == 0) palette[i].classList.add("selected");
    }
  }

  function buildGrid (size) {
    let board = document.getElementById('pixel-board');
    for(let i=0 ; i<Math.pow(size,2) ; i++) {
      let div = document.createElement('div');
      let cel = board.appendChild(div);
      cel.setAttribute('class', 'pixel');
    }
  }
  buildPalette();
  buildGrid(5);
};
