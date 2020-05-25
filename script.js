// começando de trás pra frente, botão de deixar o board branco:
const btn = document.getElementById("clear-board");

function limpa (){
  document.getElementById("pi1").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi2").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi3").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi4").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi5").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi6").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi7").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi8").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi9").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi10").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi11").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi12").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi13").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi14").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi15").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi16").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi17").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi18").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi19").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi20").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi21").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi22").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi23").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi24").style.backgroundColor = "rgb(255, 255, 255)";
  document.getElementById("pi25").style.backgroundColor = "rgb(255, 255, 255)";
  alert("board limpo!")
};

btn.addEventListener("click", limpa);

// clicar na cor e pintar o pixel

document.getElementById("cor1").addEventListener("click", function(){
    document.getElementById("corselecionada").style.backgroundColor= "black";
    alert("cor selecionada preto");
    });

document.getElementById("cor2").addEventListener("click", function(){
    document.getElementById("corselecionada").style.backgroundColor="blue";
    alert("cor selecionada azul");
});

document.getElementById("cor3").addEventListener("click", function(){
    document.getElementById("corselecionada").style.backgroundColor="red";
    alert("cor selecionada vermelho");
});

document.getElementById("cor4").addEventListener("click", function(){
    document.getElementById("corselecionada").style.backgroundColor="green";
    alert("cor selecionada verde");
});
                    
// document.addEventListener('click', function (event) {
//     if ( event.target.classList.contains( 'color' ) ) {
//     document.getElementById("corselecionada").style.backgroundColor
//     }
// }, false);
