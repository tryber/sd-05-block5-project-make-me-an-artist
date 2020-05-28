window.onload = function () {
    let id = 0;
    const quadroPixel = document.getElementById('pixel-board');
    for (let l = 0; l < 5; l += 1) {
        const line = document.createElement('div');
        line.className = 'linha largura';
        quadroPixel.appendChild(line);
        
        for (let i = 0; i < 5; i += 1) {
            const square = document.createElement('div');
            square.className = 'pixel fazLinha branco';
            square.id = (id);
            line.appendChild(square);
            id += 1;
        }
    }

    const paleta = document.getElementById('color-palette');
    const div = paleta.children;
    const pixelBoard = document.getElementById('pixel-board');
    let cor = ['preto'];

    paleta.addEventListener('click', mudaCorSelecionada);

    function mudaCorSelecionada(evento) {
        for (let i = 0; i < paleta.childElementCount; i += 1) {
            div[i].classList.remove('selected');
        }
        cor = [];
        const cornova = evento.target;
        const bloco = cornova.classList.value;
        const lista = bloco.split(' ');
        cor.push(lista[lista.length - 1]);
        cornova.classList.add('selected');
    }

    pixelBoard.addEventListener('click', pincel) 

    function pincel(event) {
        let contato = event.target;
        let listaString = contato.classList.value;
        let listaItem = listaString.split(' ');
        contato.classList.remove(listaItem[2]);
        contato.classList.add(cor);
    }

    const botaoLimpar = document.getElementById('clear-board');
    botaoLimpar.addEventListener('click', function() {
        for (let i = 0; i < id; i += 1) {
            let str = i.toString();
            let square = document.getElementById(str);
            let squar = square.classList.value;
            let resetList = squar.split(' ');
            square.classList.remove(resetList[2]);
            square.classList.add('branco');
        }
    })
}
