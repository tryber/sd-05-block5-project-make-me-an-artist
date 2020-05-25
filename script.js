// começando de trás pra frente, botão de deixar o board branco:
const btn = document.getElementById("clear-board");

function limpa (){
  document.getElementById("pi1").style.backgroundColor = "white";
  document.getElementById("pi2").style.backgroundColor = "white";
  document.getElementById("pi3").style.backgroundColor = "white";
  document.getElementById("pi4").style.backgroundColor = "white";
  document.getElementById("pi5").style.backgroundColor = "white";
  document.getElementById("pi6").style.backgroundColor = "white";
  document.getElementById("pi7").style.backgroundColor = "white";
  document.getElementById("pi8").style.backgroundColor = "white";
  document.getElementById("pi9").style.backgroundColor = "white";
  document.getElementById("pi10").style.backgroundColor = "white";
  document.getElementById("pi11").style.backgroundColor = "white";
  document.getElementById("pi12").style.backgroundColor = "white";
  document.getElementById("pi13").style.backgroundColor = "white";
  document.getElementById("pi14").style.backgroundColor = "white";
  document.getElementById("pi15").style.backgroundColor = "white";
  document.getElementById("pi16").style.backgroundColor = "white";
  document.getElementById("pi17").style.backgroundColor = "white";
  document.getElementById("pi18").style.backgroundColor = "white";
  document.getElementById("pi19").style.backgroundColor = "white";
  document.getElementById("pi20").style.backgroundColor = "white";
  document.getElementById("pi21").style.backgroundColor = "white";
  document.getElementById("pi22").style.backgroundColor = "white";
  document.getElementById("pi23").style.backgroundColor = "white";
  document.getElementById("pi24").style.backgroundColor = "white";
  document.getElementById("pi25").style.backgroundColor = "white";
  alert("board limpo!")
};

btn.addEventListener("click", limpa);

// clicar na cor e pintar o pixel
//
// document.addEventListener('click', function (event) {
//     if ( event.target.classList.contains( 'accordion-link' ) ) {
//         // Do something...
//     }
// }, false);
