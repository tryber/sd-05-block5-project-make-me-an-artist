
    const clearButton = document.getElementById('clear-board');
    const selectedColor = document.querySelectorAll(".color");
    const cores = document.getElementById("color-palette");
    let pixelBoard = document.querySelector("#pixel-board");
    let pixel = document.querySelectorAll(".pixel");
    document.querySelector(".black").classList.add("selected");
    let boardSize = document.getElementById("board-size").value;
    const botaoGeraQuadro = document.getElementById("generate-board");
    let corEscolhida = 'black';


    boardSize
    clearButton.addEventListener('click', limpaPixel);
    function limpaPixel(){
        for(apaga in pixel){
        pixel[apaga].style = "background-color: white";
        }
    }
    cores.addEventListener('click', selecionaCor);
    function selecionaCor(e){
        corEscolhida = e.target;
        for(i = 0; i < selectedColor.length; i+=1){ 
            selectedColor[i].classList.remove("selected");

            if(  selectedColor[i] == corEscolhida){
                corEscolhida.classList.add("selected");
                document.querySelector(".selecao").textContent = e.target.classList[0];
            }
            else {            
        }
        }
         corEscolhida = getComputedStyle(corEscolhida, null).getPropertyValue('background-color');
        // console.log(corEscolhida)
    }

    pixelBoard.addEventListener('click', colorePixel);
    function colorePixel(e){
        let pixelClicado = e.target;
        pixelClicado.style.backgroundColor = corEscolhida;
    }