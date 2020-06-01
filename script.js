let n = 5;
for (let i = 0; i < n; i++) {
    const pixelBoard = document.getElementById("pixel-board")
    const row = document.createElement('tr')
    pixelBoard.appendChild(row)
    for (let j = 0; j < n; j += 1) {
        const dot = document.createElement('td')
        dot.className='pixel';
        const tr=document.getElementsByTagName('tr')[i]
        tr.appendChild(dot)
    }
}
const buttons = document.getElementsByClassName('color')
for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', function(){
        for (let b = 0; b < buttons.length; b+=1) {
            buttons[b].classList.remove('selected')
        }
        buttons[i].classList.add('selected')
        const selectedColor= buttons[i].style.backgroundColor;
        sessionStorage.color = selectedColor;
    }
    )
    
}
 const pixel= document.getElementsByClassName('pixel')
 for (let i = 0; i < pixel.length; i+= 1) {
     pixel[i].addEventListener('click', function(){
         pixel[i].style.backgroundColor=sessionStorage.color
     })
     
 }
 document.getElementById('clear-board').addEventListener('click', function(){
     for (let i = 0; i < pixel.length; i+= 1) {
         pixel[i].style.backgroundColor='white'
         
     }
 })