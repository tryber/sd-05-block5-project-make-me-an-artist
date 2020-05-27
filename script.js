window.onload = function () {
  const botaoMudaCor = document.querySelector('#clear-board');
  function trocaCorBranca() {
      const pixels = document.querySelectorAll('.pixel');
      for (let c = 0; c < pixels.length; c+=1) {
          pixels[c].style.backgroundColor = 'white';
        }
    }
  botaoMudaCor.addEventListener('click', trocaCorBranca);
};
