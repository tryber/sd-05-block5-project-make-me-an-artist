// variaveis
const black = document.getElementById('black');
const cor2 = document.getElementById('cor2');
const cor3 = document.getElementById('cor3');
const cor4 = document.getElementById('cor4');
const board = document.getElementById('pixel-board');
const limpar = document.getElementById('clear-board');
const inputTamanho = document.getElementById('board-size');
const botaoTamanho = document.getElementById('generate-board');
let selected = document.getElementsByClassName('selected')[0];
let cor = selected.classList[1];
let target = '';
let pixel = '';

// functions

// função que troca cor selecionada no palette
function changeSelected() {
  target = event.target; // seta variavel target
  selected.classList.remove('selected'); // remove a class selected do elemento antigo
  target.classList.add('selected'); // adiciona a class selected no target da função
  selected = document.getElementsByClassName('selected')[0];
  // define o novo valor para variavel selected(o target que acabou de receber a class selected)
}

// funcao que define nova linha no grid
function createBoardLine() {
  const firstDiv = document.createElement('div'); //cria um novo elemento div
  firstDiv.className = 'pixel first blank'; // adiciona as classes ao div
  // pixel - tem os styles de height, height, float left, e border
  // first - tem o style clear:left(assim ele cria uma nova linha no grid)
  // blank - tem a unica função de ''placeholder'' da classe que define a cor
  board.appendChild(firstDiv); // adiciona o div no board
}

// funcao que define as colunas no grid
function createBoardCollumn() {
  const otherDivs = document.createElement('div'); // cria o elemento div
  otherDivs.className = 'pixel blank'; // adiciona as classes ao div
  // pixel - tem os styles de height, height, float left, e border
  // blank - tem a unica função de ''placeholder'' da classe que define a cor
  // como quero que fique ao lado do primeiro pixel da linha não coloco a classe first
  board.appendChild(otherDivs); // adiciona o div no board
}

// funcao que monta o grid
function createGrid(str) {
  if (parseInt(str, 10) < 5) {
    // verifica se o input do usuario foi menor q 5
    str = 5; // define o valor do input sendo o minimo de 5
  } else if (parseInt(str, 10) > 50) {
    // verifica se o input do usuario foi maior q 50
    str = 50; // define o valor do input sendo o maximo de 50
  }
  board.innerHTML = ''; // limpa o grid anterior removendo tudo no innerHTML do board
  for (let linha = 1; linha <= str; linha += 1) {
    // adiciona o primeiro pixel da linha, começando da linha 1 e indo até o tamanho desejado
    createBoardLine();
    for (let coluna = 2; coluna <= str; coluna += 1) {
      // adiciona os proximos pixels da linha,
      //como a coluna 1 já tem o pixel adicionado anteriormente coluna começa com valor 2
      createBoardCollumn();
    }
  }
}

// função que define se o tamanho do grid é valido
function changeSize() {
  const str = inputTamanho.value; // pega o valor do input do tamanho do grid
  if (str.length === 0) {
    // se o input estiver vazio
    alert('Board inválido!'); // retorna alerta de valor invalido
  } else {
    // caso contrario chama a função que cria o grid
    createGrid(str);
  }
}

// funcao que limpa a cor de todos os quadrados do board
function clearBoard() {
  pixel = board.firstElementChild; // seta a variavel pixel como o primeiro pixel do grid
  for (let i = 0; i < board.children.length; i += 1) {
    // for que vai de 0 até a quantidade de pixels no grid inteiro
    const corAntiga = pixel.classList[pixel.classList.length - 1];
    // seta a variavel pegando a ultima classe do elemento(é como defini as cores de cada pixel)
    pixel.classList.remove(corAntiga); // remove a classe que possui a cor do pixel
    pixel.classList.add('blank'); // adiciona a classe blank como ''placeholder'' quando adicionar uma nova cor
    pixel.style = 'background-color: white'; // adiciona o style 'background-color: white'
    pixel = pixel.nextElementSibling; // define pixel como o proximo div do grid para o proximo loop do for
  }
}
// funcao q colore o pixel com a cor selecionada
function colorPixel() {
  cor = selected.classList[1]; // pega a classe mais a direita no array do elemento selecionado
  target = event.target; // define a variavel target
  const corAntiga = target.classList[target.classList.length - 1];
  // encontra a cor atual do pixel clicado
  target.classList.remove(corAntiga); // remove a classe com a cor do pixel
  target.classList.add(cor); // adiciona nova classe com a cor do pixel
  const novaCor = `background-color: ${cor} !important`; // define o string da nova cor
  target.style = novaCor; // adiciona a nova cor ao style do pixel
}

// funcao que gera um numero random
function getRandomInt(min, max) {
  // funcao recebe 2 valores (minimo e maximo) para randomizar as cores
  min = Math.ceil(min); // arredonda o numero menor para cima
  max = Math.floor(max); // arredonda o numero maior para baixo
  return Math.floor(Math.random() * (max - min)) + min;
  // formula que retorna um valor aleatorio entre o menor e maior numero fornecido
  // poderia ter usado * 255 ja que as cores ficam entre 0 e 255
  // mas dessa maneira posso trocar os valores na proxima funcao caso queira
  // para cores mais escuras colocaria um valor maximo mais baixo
  // para cores claras colocaria um valor minimo mais alto
}

// funcao que recebe os valores da função anterior para gerar as cores
function getRandomColor() {
  const r = getRandomInt(0, 255); // define um valor entre 0 e 255
  const g = getRandomInt(0, 255); // define um valor entre 0 e 255
  const b = getRandomInt(0, 255); // define um valor entre 0 e 255
  const color = `rgb(${r},${g},${b}`; // adiciona os valores definidos em um string
  return color; // retorna a cor randomizada
}

// função que define as 3 cores aleatorias quando a pagina é carregada
function setRandomColor() {
  const setCor2 = getRandomColor(); // chama a função anterior e seta em uma variavel com a cor aleatoria
  cor2.style.backgroundColor = setCor2; // seta o style com o valor da variavel
  cor2.classList.add(setCor2); // adiciona uma classe com o valor da cor aleatoria ao elemento da segunda cor
  const setCor3 = getRandomColor(); // chama a função anterior e seta em uma variavel com a cor aleatoria
  cor3.style.backgroundColor = setCor3; // seta o style com o valor da variavel
  cor3.classList.add(setCor3); // adiciona uma classe com o valor da cor aleatoria ao elemento da terceira cor
  const setCor4 = getRandomColor(); // chama a função anterior e seta em uma variavel com a cor aleatoria
  cor4.style.backgroundColor = setCor4; // seta o style com o valor da variavel
  cor4.classList.add(setCor4); // adiciona uma classe com o valor da cor aleatoria ao elemento da quarta cor
}
// ListenerEvents
black.addEventListener('click', changeSelected); // listener para trocar a seleção para a cor preta
cor2.addEventListener('click', changeSelected); // listener para trocar a seleção para a cor2
cor3.addEventListener('click', changeSelected); // listener para trocar a seleção para a cor3
cor4.addEventListener('click', changeSelected); // listener para trocar a seleção para a cor4
board.addEventListener('click', colorPixel); // listener que aplica cor no pixel clicado
limpar.addEventListener('click', clearBoard); // listener que limpa o board
botaoTamanho.addEventListener('click', changeSize); // listener que troca o tamanho do grid

setRandomColor(); // chama a função para gerar as cores iniciais da pagina
