function geraCor(){
  let hexadecimais = '0123456789ABCDEF';
  let cor = '#';

  for ( i = 0; i < 6; i++ ) {
      cor += hexadecimais[Math.floor(Math.random() * 16)];
  }
  return cor;
}


function lineGenerate(lineNumbers) {

  for( i = 0 ; i < lineNumbers ; i += 1) {
    let lineCreate = document.createElement("div");
    lineCreate.className = "line"+i
    lineCreate.style.width = "210px"
    lineCreate.style.height = "42px"
    
    

    let fatherDiv = document.getElementById("pixel-board");
    fatherDiv.appendChild(lineCreate)
    
  }

  
}

 function pixelGenerate (pixelNumbers) {
    let pixelCreate
    let pixelFather 
    for (i = 0 ; i < pixelNumbers ; i += 1) {
      if (i <= 4) {
        pixelCreate = document.createElement("div");
        pixelCreate.className = "pixel";

        pixelFather = document.getElementsByClassName("line0")[0];
        pixelFather.appendChild(pixelCreate);
      }
      if (i <= 9 && i > 4 ) {
        pixelCreate = document.createElement("div");
        pixelCreate.className = "pixel";

        pixelFather = document.getElementsByClassName("line1")[0];
        pixelFather.appendChild(pixelCreate);
      }
      if (i <= 14 && i > 9 ) {
        pixelCreate = document.createElement("div");
        pixelCreate.className = "pixel";

        pixelFather = document.getElementsByClassName("line2")[0];
        pixelFather.appendChild(pixelCreate);
      }
      if (i <= 19 && i > 14 ) {
        pixelCreate = document.createElement("div");
        pixelCreate.className = "pixel";

        pixelFather = document.getElementsByClassName("line3")[0];
        pixelFather.appendChild(pixelCreate);
      }
      if (i<= 24 && i > 19) {
        pixelCreate = document.createElement("div");
        pixelCreate.className = "pixel";

        pixelFather = document.getElementsByClassName("line4")[0];
        pixelFather.appendChild(pixelCreate);
      }
    }
 }
 
 
 lineGenerate(5);
 pixelGenerate(25);

 