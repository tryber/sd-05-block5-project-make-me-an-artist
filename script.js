let paleta =  document.getElementById('color-palette');

paleta.addEventListener('click', function(duKaralho){
  if (duKaralho.target.classList[0] == 'color') {
  let corAntiga = document.getElementsByClassName('selected')[0];
  console.log(corAntiga.classList.toggle('selected'));
  let corEscolhida = duKaralho.target;
  corEscolhida.classList.toggle('selected');
  }
});

