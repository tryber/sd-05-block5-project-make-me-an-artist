const black = document.getElementsByClassName('color')[0];
black.className += ' selected';
const cor1 = document.getElementsByClassName('color')[1];
const cor2 = document.getElementsByClassName('color')[2];
const cor3 = document.getElementsByClassName('color')[3];

let selected = document.getElementsByClassName('selected')[0];
let corSelecionada = window.getComputedStyle(selected, null).getPropertyValue("background-color");
console.log(corSelecionada);

black.addEventListener('click', function() {
    cor1.className = 'color td';
    black.className += ' selected';
    cor2.className = 'color td';
    cor3.className = 'color td';
    selected = document.getElementsByClassName('selected')[0]
    corSelecionada = window.getComputedStyle(selected, null).getPropertyValue("background-color");
console.log(corSelecionada);
})

cor1.addEventListener('click', function() {
    black.className = 'color td';
    cor1.className += ' selected';
    cor2.className = 'color td';
    cor3.className = 'color td';
    selected = document.getElementsByClassName('selected')[0]
    corSelecionada = window.getComputedStyle(selected, null).getPropertyValue("background-color");
console.log(corSelecionada);
})

cor3.addEventListener('click', function() {
    black.className = 'color td';
    cor3.className += ' selected';
    cor2.className = 'color td';
    cor1.className = 'color td';
    selected = document.getElementsByClassName('selected')[0]
    corSelecionada = window.getComputedStyle(selected, null).getPropertyValue("background-color");
console.log(corSelecionada);
})

cor2.addEventListener('click', function() {
    black.className = 'color td';
    cor2.className += ' selected';
    cor3.className = 'color td';
    cor1.className = 'color td';
    selected = document.getElementsByClassName('selected')[0]
    corSelecionada = window.getComputedStyle(selected, null).getPropertyValue("background-color");
console.log(corSelecionada)   
})

function myFunction() {    
    document.getElementById("demo").innerHTML = corSelecionada;
}
