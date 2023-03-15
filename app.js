document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "spiderman",
      img: "imagenes/spiderman.jpg"
    },
    {
      name: "spiderman2",
      img: "imagenes/spiderman2.jpg"
    },
    {
      name: "spiderman3",
      img: "imagenes/spiderman3.jpg"
    },
    {
      name: "spiderman4",
      img: "imagenes/spiderman4.jpg"
    },
    {
      name: "spiderman5",
      img: "imagenes/spiderman5.jpg"
    },
    {
      name: "spiderman6",
      img: "imagenes/spiderman6.jpg"
    },
    {
      name: "spiderman",
      img: "imagenes/spiderman.jpg"
    },
    {
      name: "spiderman2",
      img: "imagenes/spiderman2.jpg"
    },

    {
      name: "spiderman3",
      img: "imagenes/spiderman3.jpg"
    },
    {
      name: "spiderman4",
      img: "imagenes/spiderman4.jpg"
    },
    {
      name: "spiderman5",
      img: "imagenes/spiderman5.jpg"
    },
    {
      name: "spiderman6",
      img: "imagenes/spiderman6.jpg"
    }
  ];

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
  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
  crearTablero();
});
