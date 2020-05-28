window.onload = function () {
    const quadroPixel = document.getElementById('pixel-board');
    for (let l = 0; l < 5; l += 1) {
        const line = document.createElement('div');
        line.className = 'linha largura';
        quadroPixel.appendChild(line);
        for (let i = 0; i < 5; i += 1) {
            const square = document.createElement('div');
            square.className = 'pixel fazLinha';
            line.appendChild(square);
        }
    }
};

function mudaCorSelecionada(evento) {
    let cornova = evento.target;
    cornova.className = 'selected'
}

const paleta = document.getElementById('color-palette');
paleta.addEventListener('click', mudaCorSelecionada);
