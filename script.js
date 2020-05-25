let preta = document.querySelector("#black");
let vermelha = document.querySelector("#red");
let verde = document.querySelector("#green");
let azul = document.querySelector("#blue");

function removeClassSelected(){
    const corDaPaleta = document.querySelectorAll(".color");
    for(let i = 0; i < corDaPaleta.length; i++){
        corDaPaleta[i].classList.remove('selected');
    }
}

let selectedColor = "black";
function getBlackColor(e){
    let element = e.target;
    removeClassSelected();
    element.classList.add('selected');
    selectedColor = 'black'
}

preta.addEventListener('click', getBlackColor);

function getRedColor(e){
    let element = e.target;
    removeClassSelected();
    element.classList.add('selected');
    selectedColor = 'red';
}
vermelha.addEventListener('click', getRedColor);

function getGreenColor(e){
    let element = e.target;
    removeClassSelected();
    element.classList.add('selected');
    selectedColor = 'green';
}

verde.addEventListener('click', getGreenColor);

function getBlueColor(e){
    let element = e.target;
    removeClassSelected();
    element.classList.add('selected');
    selectedColor = 'blue';
}

azul.addEventListener('click', getBlueColor);

let pickPixel = document.querySelector('#pixel-board');

function changePixelColor(e){
    let pixel = e.target;
    pixel.style.backgroundColor = selectedColor;
}

pickPixel.addEventListener('click', changePixelColor);

//botao de limpar

const board = document.getElementById('pixel-board');

let buttonClear = document.getElementById('clear-board');


function clearBoard(){
    document.getElementById('1').style.backgroundColor = "white";
    document.getElementById('2').style.backgroundColor = "white";
    document.getElementById('3').style.backgroundColor = "white";
    document.getElementById('4').style.backgroundColor = "white";
    document.getElementById('5').style.backgroundColor = "white";
    document.getElementById('6').style.backgroundColor = "white";
    document.getElementById('7').style.backgroundColor = "white";
    document.getElementById('8').style.backgroundColor = "white";
    document.getElementById('9').style.backgroundColor = "white";
    document.getElementById('10').style.backgroundColor = "white";
    document.getElementById('11').style.backgroundColor = "white";
    document.getElementById('12').style.backgroundColor = "white";
    document.getElementById('13').style.backgroundColor = "white";
    document.getElementById('14').style.backgroundColor = "white";
    document.getElementById('15').style.backgroundColor = "white";
    document.getElementById('16').style.backgroundColor = "white";
    document.getElementById('17').style.backgroundColor = "white";
    document.getElementById('18').style.backgroundColor = "white";
    document.getElementById('19').style.backgroundColor = "white";
    document.getElementById('20').style.backgroundColor = "white";
    document.getElementById('21').style.backgroundColor = "white";
    document.getElementById('22').style.backgroundColor = "white";
    document.getElementById('23').style.backgroundColor = "white";
    document.getElementById('24').style.backgroundColor = "white";
    document.getElementById('25').style.backgroundColor = "white";
}
  

buttonClear.addEventListener('click', clearBoard);