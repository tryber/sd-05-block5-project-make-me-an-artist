function createPixelBoard(){
    let pixdiv=document.createElement("div");
    for ( i = 0; i < 25; i += 1){
    let pixdiv = document.createElement("div");
        pixdiv.className = "pixel";
        document.getElementById("pixel-board").appendChild(pixdiv);
    }
}
createPixelBoard();
