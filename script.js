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

let clearButton = document.querySelector('#clear-board');

function clearBoard(){
    const board = document.querySelector('#pixel-board');
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            board.children[i].children[j].style.backgroundColor = 'white';
        }
    }
}

clearButton.addEventListener('click', clearBoard);