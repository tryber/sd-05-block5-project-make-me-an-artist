window.onload = function(){
    const clearButton = document.getElementById('clear-board');
    const selectedColor = document.querySelectorAll(".color");
    const cores = document.getElementById("color-palette");
    const pixelBoard = document.querySelector("#pixel-board");
    const pixel = document.querySelectorAll(".pixel");

    let corEscolhida = ''; 
    
    document.querySelector(".black").classList.add("selected");
    
    clearButton.addEventListener('click', limpaPixel);
    function limpaPixel(){
        for(apaga in pixel){
        pixel[apaga].style = "background-color: white";
        }
    }
    cores.addEventListener('click', selecionaCor);
    function selecionaCor(e){
        let cor = e.target
        for(i = 0; i < cores.childElementCount; i+=1){ 
            if(  selectedColor[i] == cor){
                document.querySelector(".selecao").textContent = e.target.classList[0];
                cor.classList.add("selected");
            }
            else {selectedColor[i].classList.remove("selected");}
        }
         corEscolhida = getComputedStyle(e.target, null).getPropertyValue('background-color');
         console.log(corEscolhida)
    }

    pixelBoard.addEventListener('click', colorePixel);
    function colorePixel(e){
        let idpixel = e.target;
        idpixel.style.backgroundColor = corEscolhida;
    }
    
}