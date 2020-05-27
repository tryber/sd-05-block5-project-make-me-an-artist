window.onload = function () {
    const quadroPixel = document.getElementById('pixel-board');
    for (let l = 0; l < 5; l += 1) {
        const line = document.createElement('div');
        line.id = 'linha';
        quadroPixel.appendChild(line);
        for (let i = 0; i < 5; i += 1) {
            const square = document.createElement('div');
            square.className = 'pixel fazLinha';
            line.appendChild(square);
        }
    }
};
