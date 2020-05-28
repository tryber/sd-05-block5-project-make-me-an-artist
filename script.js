window.onload = function () {

  const botaoMudaCor = document.querySelector('#clear-board');
  const caixaUm = document.querySelector('.color-black');
  const caixaDois = document.querySelector('.color-red');
  const caixaTres = document.querySelector('.color-blue');
  const caixaQuatro = document.querySelector('.color-green');
   
  function trocaCorBranca() {
      const pixels = document.querySelectorAll('.pixel');
      for (let c = 0; c < pixels.length; c+=1) {
          pixels[c].style.backgroundColor = 'white';
        }
    }
  botaoMudaCor.addEventListener('click', trocaCorBranca);

  function trocaCor(event) {
      const cores = document.querySelectorAll('.pixel');
      for (let x = 0; c < pixels.length; c+=1) {

      }
    }

  caixaUm.addEventListener('click', trocaCor);

};
