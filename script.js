window.onload = function () {
  //const caixaUm = document.querySelector('.color-black');
  //const caixaDois = document.querySelector('.color-red');
  //const caixaTres = document.querySelector('.color-blue');
  //const caixaQuatro = document.querySelector('.color-green');
  const botaoMudaCor = document.querySelector('#clear-board');
  function trocaCorBranca () {
      let pixels = document.querySelectorAll('.pixel')
      for (let c = 0; c < pixels.length; c+=1) {
          pixels[c].style.backgroundColor = 'white';
        }
    }
  botaoMudaCor.addEventListener('click', trocaCorBranca);    
}
