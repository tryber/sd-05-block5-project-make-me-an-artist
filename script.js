window.onload = function () {
  const botaoMudaCor = document.querySelector('#clear-board');
  const cores = document.querySelectorAll('.color');
  const mudaCor = document.querySelector('#pixel-board');
  //const umQuadrado = document.querySelector('#um');
  
  function coresPixels() {
    let selected = document.querySelector('.selected');
    let pixelClicado = selected.classList[1];
    let corRemovida = event.target.classList[1];
    event.target.classList.remove(corRemovida);
    event.target.classList.add(pixelClicado);
  }
  mudaCor.addEventListener('click', coresPixels);
  

  function trocaCorBranca() {
      const pixels = document.querySelectorAll('.pixel');
      for (let c = 0; c < pixels.length; c+=1) {
          pixels[c].style.backgroundColor = 'white';
      }
  }
  botaoMudaCor.addEventListener('click', trocaCorBranca);

  function trocaCor(event) {
    let selected = event.target.classList.contains('selected');
     if (!selected) {
       let selectedDiv = document.querySelector('.selected');
       selectedDiv.classList.remove('selected');    
       event.target.classList.add('selected'); 
      }
  }

  for (let x = 0; x < cores.length; x+=1) {
    cores[x].addEventListener('click', trocaCor); 
  }

};
