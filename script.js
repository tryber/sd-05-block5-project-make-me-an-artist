//window.onload = boardSize.addEventListener('keyup', perguntaUsuario);

    const clearButton = document.getElementById('clear-board');
    const selectedColor = document.querySelectorAll(".color");
    const cores = document.getElementById("color-palette");
    let pixelBoard = document.querySelector("#pixel-board");
    let pixel = document.querySelectorAll(".pixel");
    document.querySelector(".black").classList.add("selected");
    let boardSize = document.getElementById("board-size").value;
    const botaoGeraQuadro = document.getElementById("generate-board");

    boardSize = '';
    let corEscolhida = 'black';
    let tamanhoDoBoard = 0;
    let tamanho= '';
   
    window.alert("Ola! para pintar o sete insira o tamanho do quadro");    

   function configuraBoard(b){
    let board ='';
        for(let c=0; c < b; c +=1){
            let divLine = document.createElement("div");
            divLine[c].className = "lines";
            for(let cont=c; cont < b; cont +=1){
                let divPixel = document.createElement("div");
                divPixel[cont].className = "pixel";
                document.getSelection(divLine[c])[0].appendChild(divPixel[cont]);
            }
            document.pixelBoard[0].appendChild(divLine[c]);
            board.push(divLine[c]);
        }
        return board;
    } 
function checaEntrada(a){ 
    a = Number(boardSize);
    let valor = 0;
if(boardSize != null){

  // if(boardSize == 0){
  //alert("Board inválido!");
 //  }
   if(a < 5){
       valor = 5;
   }
   else if(a > 50){
        valor = 50;
   }
   else {
        valor = a;
   }       
    return valor;
}
    else prompt("Preencha o valor e clique em \'VQV:\'") 
}
    function limpaPixel(){
        for(apaga in pixel){
        pixel[apaga].style = "background-color: white";
        }
    }
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
    }
    function colorePixel(e){
        let pixelClicado = e.target;
        pixelClicado.style.backgroundColor = corEscolhida;
    }
   
    clearButton.addEventListener('click', limpaPixel);
    cores.addEventListener('click', selecionaCor);
    pixelBoard.addEventListener('click', colorePixel);
   // tamanho =  botaoGeraQuadro.addEventListener('click', checaEntrada(boardSize))
   // tamanhoDoBoard =  configuraBoard(tamanho);
    //pixelBoard.innerHTML = " ";
    //pixelBoard.innerHTML = tamanhoDoBoard;