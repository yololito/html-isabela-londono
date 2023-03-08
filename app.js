document.addEventListener("DOMContentLoaded", () => {
  const cardsAdj = [
    {
      name: "spiderman",
      imagenes: "imagenes/spiderman.jpg"
    },
    {
      name: "spiderman2",
      imagenes: "imagenes/spiderman.jpg"
    },
    {
      name: "spiderman",
      imagenes: "imagenes/spiderman2.jpg"
    },
    {
      name: "spiderman3",
      imagenes: "imagenes/spiderman3.jpg"
    },
    {
      name: "spiderman4",
      imagenes: "imagenes/spiderman4.jpg"
    },
    {
      name: "spiderman5",
      imagenes: "imagenes/spiderman5.jpg"
    },
    {
      name: "spiderman6",
      imagenes: "imagenes/spiderman6.jpg"
    },
    {
      name: "spiderman",
      imagenes: "imagenes/spiderman.jpg"
    },
    {
      name: "spiderman2",
      imagenes: "imagenes/spiderman.jpg"
    },
    {
      name: "spiderman",
      imagenes: "imagenes/spiderman2.jpg"
    },
    {
      name: "spiderman3",
      imagenes: "imagenes/spiderman3.jpg"
    },
    {
      name: "spiderman4",
      imagenes: "imagenes/spiderman4.jpg"
    },
    {
      name: "spiderman5",
      imagenes: "imagenes/spiderman5.jpg"
    },
    {
      name: "spiderman6",
      imagenes: "imagenes/spiderman6.jpg"
    }
  ];
});

const cuadricula = document.querySelector(".cuadricula");
const resultado = document.querySelector("#resultado");
var cartasEscogidas = [];
var cartasEscogidasId = [];
var cartasGanadas = [];

//----------------- lecture_03 ----------------------------------//
function crearTablero() {
  for (let i = 0; i < cardAdj.length; i++) {
    var carta = document.createElement("img");
    carta.setAttribute("src", "imagenes/reverso.png");

    carta.setAttribute("data-id", i);
    carta.addEventListener("click", voltearCarta);
    cuadricula.appendChild(carta);
  }
}
fuction voltearCarta(){
  var cardId = this.getAttribute("data-id");
  cartasEscogidas.push(cardAdj[cardId].name);
  cartasEscogidasId.push(cardId);
  this.setAttribute("src", cardAdj[cardId].img);
  if (cartasEscogidas.length === 2){
    setTimeout(verificarPareja, 1000);
  }
}
crearTablero();
});