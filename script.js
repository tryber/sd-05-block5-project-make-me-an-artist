let cor1 = document.getElementsByClassName('preto');
let cor2 = document.getElementsByClassName('amarelo');
let cor3 = document.getElementsByClassName('azul');
let cor4 = document.getElementsByClassName('vermelho');
let corSelected = style.color;

cor1.addEventListener('click', function selectColor1() {
    corSelected = cor1;
});

cor2.addEventListener('click', function selectColor2() {
    corSelected = cor2;
});

cor3.addEventListener('click', function selectColor3() {
    corSelected = cor3;
});

cor4.addEventListener('click', function selectColor4() {
    corSelected = cor4;
});
