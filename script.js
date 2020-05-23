window.onload = function () {

  function buildGrid(width, height){

    let board = document.getElementById("pixel-board");
    for(let i=0 ; i<height ; i++) {
      for(let j=0 ; j<width ; j++) {
      let div = document.createElement("div");
      let cel = board.appendChild(div);
      cel.setAttribute("class", "pixel");
      cel.style.left = (j*40).toString() + "px";
      cel.style.top= (i*40).toString() + "px";
      cel.addEventListener("click", function(){});
      }
    }
  }

  buildGrid(5, 5);
};