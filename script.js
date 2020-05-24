let botao = document.getElementById('clear-board');
let quadroDeCores = document.getElementById('pixel-board');
let corInicial = style.backgroundColor;

botao.addEventListener('click', function limparQuadro() {
    corInicial = "white";
    quadroDeCores = corInicial;
})