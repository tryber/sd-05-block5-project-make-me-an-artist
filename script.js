// testes:
const divMae = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(divMae);
divMae.className = "divMae";

const divFilho = document.createElement("div");
document.querySelector("div.divMae").appendChild(divFilho);
