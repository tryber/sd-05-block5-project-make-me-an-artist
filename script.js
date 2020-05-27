window.onload = function () {
    console.log("ate aqui ok");
    let quadroPixel = document.getElementById("pixel-board");
    for (let l = 0; l < 5; l++) {
        let line = document.createElement("div");
        line.id ="linha";
        quadroPixel.appendChild(line);
        for (let i = 0; i < 5; i++) {
            console.log("ate aqui ok3");
            let square = document.createElement("div");
            square.className = "pixel fazLinha";
            line.appendChild(square);
        }
    }
}