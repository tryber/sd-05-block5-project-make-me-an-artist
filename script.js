const botaoMudaCor = document.querySelector('#clear-board');
function trocaCorBranca() {
    const pixels = document.querySelectorAll('.pixel');
    for (let c = 0; c < pixels.length; c+=1) {
        pixels[c].style = "background-color: rgb(255, 255, 255);";
      }
  }
botaoMudaCor.addEventListener('click', trocaCorBranca);
