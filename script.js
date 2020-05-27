// começando de trás pra frente, botão de deixar o board branco:

function limpa() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].setAttribute('style', 'background-color: rgb(255, 255, 255)');
  }
  alert('board limpo!');
}

document.getElementById('clear-board').addEventListener('click', limpa);

// clicar na cor e pintar o pixel

document.getElementById('cor1').addEventListener('click', function () {
  document.getElementById('corselecionada').style.backgroundColor = 'black';
  alert('cor selecionada preto');
  document.getElementById('cor1').className += ' selected';
  document.getElementById('cor2').className = 'color';
  document.getElementById('cor3').className = 'color';
  document.getElementById('cor4').className = 'color';
});

document.getElementById('cor2').addEventListener('click', function () {
  document.getElementById('corselecionada').style.backgroundColor = 'blue';
  alert('cor selecionada azul');
  document.getElementById('cor2').className += ' selected';
  document.getElementById('cor1').className = 'color';
  document.getElementById('cor3').className = 'color';
  document.getElementById('cor4').className = 'color';
});

document.getElementById('cor3').addEventListener('click', function () {
  document.getElementById('corselecionada').style.backgroundColor = 'red';
  alert('cor selecionada vermelho');
  document.getElementById('cor3').className += ' selected';
  document.getElementById('cor1').className = 'color';
  document.getElementById('cor2').className = 'color';
  document.getElementById('cor4').className = 'color';
});

document.getElementById('cor4').addEventListener('click', function () {
  document.getElementById('corselecionada').style.backgroundColor = 'green';
  alert('cor selecionada verde');
  document.getElementById('cor4').className += ' selected';
  document.getElementById('cor1').className = 'color';
  document.getElementById('cor2').className = 'color';
  document.getElementById('cor3').className = 'color';
});

let pixelselecionado = '';

function pintapixel(pixelevent) {
  pixelselecionado = pixelevent.target;
  const selected = document.querySelector('.selected');
  pixelselecionado.style.backgroundColor = selected.style.backgroundColor;
}

document.getElementById('pixel-board').addEventListener('click', pintapixel);

// document.addEventListener('click', function (event) {
//     if ( event.target.classList.contains( 'color' ) ) {
//     document.getElementById("corselecionada").style.backgroundColor
//     }
// }, false);
