window.onload = function () {

  const botaoMudaCor = document.querySelector('#clear-board');
  const cores = document.querySelectorAll('.color');
  
   
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
       let selectedDiv = querySelector('.selected');
       selectedDiv.classList.remove('selected');    
       event.target.classList.add('selected'); 
      }
  }

  for (let x = 0; x < cores.length; x+=1) {
    cores[x].addEventListener('click', trocaCor); 
  }

};
