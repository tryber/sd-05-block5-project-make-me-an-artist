// Retira a classe "selected" de todas as divs da paletta
function removeClassSelected (){
  let paletteColor = document.querySelectorAll(".color");
  for(let i = 0; i < paletteColor.length; i += 1){
    paletteColor[i].classList.remove('selected');
    console.log(paletteColor[i].classList);
  }
}

// Adiciona a classe "selected" ao objeto clicado
let black = document.querySelector(".black");
function getBlackColor (e){
  let element = e.target;
  removeClassSelected ();
  element.classList.add('selected'); 
}
black.addEventListener('click', getBlackColor);

let green = document.querySelector(".green");
function getGreenColor (e){
  let element = e.target;
  removeClassSelected ();
  element.classList.add('selected'); 
}
green.addEventListener('click', getGreenColor);

let blue = document.querySelector(".blue");
function getBlueColor (e){
  let element = e.target;
  removeClassSelected ();
  element.classList.add('selected'); 
}
blue.addEventListener('click', getBlueColor);

let yellow = document.querySelector(".yellow");
function getYellowColor (e){
  let element = e.target;
  removeClassSelected ();
  element.classList.add('selected'); 
}
yellow.addEventListener('click', getYellowColor);


