window.onload = function () {
  //Referencias html
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  canvas.addEventListener("click", (e) => {
    console.log(e.offsetX, e.offsetY);
  });

  //Crear contenido dinámmico para pintar las celdas de la palabra que sale.
  var contenedor = document.getElementById("palabra");
  //Array de palabras
  var palabras = [
    "Esternocleidomastoideo",
    "Desoxirribonucleotido",
    "Ornitorrinco",
    "Pelusa",
    "Programador",
    "Revolucion",
    "Okapi",
    "Epidermis",
    "Bombon",
    "Fonetica",
    "Carnaval",
    "Campanario",
    "Jirafa",
    "Hipocampo",
    "Lagarto",
    "Mamifero",
    "Bombero",
    "Kombucha",
    "Karaoke",
    "Supercalifragilisticoespialidoso",
  ];
  var palabraselec;
  var contletra;
  var letra = [];
  var fallo = [];
  var pista = 0;
  var pista1 = 0;
  var pista2 = 0;
  var conterror = 0;
  var contpistas;

  btnP = document.createElement("input");
  btnP.type = "button";
  btnP.name = "btnpartida";
  btnP.value = "Nueva partida";
  document.body.appendChild(btnP);
  btnP.addEventListener("click", () => {
    location.reload();
  });
  escogepalabra();

  function escogepalabra() {
    palabraselec = "";
    let num = Math.floor(Math.random() * palabras.length);
    console.log(palabras[num]);
    palabraselec = palabras[num].toUpperCase();
    palabraselec = palabraselec.split("");
    contletra = 0;
    for (let i = 0; i <= palabraselec.length - 1; i++) {
      let espacio = document.createElement("span");
      espacio.classList.add("letra");
      espacio.classList.add("ocultar");
      espacio.id = contletra;
      espacio.textContent = "*";
      contenedor.appendChild(espacio);
      console.log(espacio);
      contletra += 1;
    }
    if (palabraselec.length <= 8) {
      let indexp = Math.floor(Math.random() * palabraselec.length);
      pista = indexp;
      let element = palabraselec[pista];
      let repetida = false;
      contpistas = 0;
      while (indexp != -1) {
        document.getElementById(indexp).textContent = palabraselec[pista];
        document.getElementById(indexp).classList.remove("ocultar");
        contpistas += 1;
        indexp = palabraselec.indexOf(element, indexp + 1);
      }
    } else {
      let indexp1 = Math.floor(Math.random() * palabraselec.length);
      pista1 = indexp1;
      let element1 = palabraselec[pista1];
      let indexp2 = Math.floor(Math.random() * palabraselec.length);
      pista2 = indexp2;
      let element2 = palabraselec[pista1];
      let repetida = false;
      contpistas = 0;
      if (pista1 != pista2) {
        while (indexp1 != -1) {
          document.getElementById(indexp1).textContent = palabraselec[pista1];
          document.getElementById(indexp1).classList.remove("ocultar");
          contpistas += 1;
          indexp1 = palabraselec.indexOf(element1, indexp1 + 1);
        }
        while (indexp2 != -1) {
          document.getElementById(indexp2).textContent = palabraselec[pista2];
          document.getElementById(indexp2).classList.remove("ocultar");
          contpistas += 1;
          indexp2 = palabraselec.indexOf(element2, indexp2 + 1);
        }
      }
    }
    let errores = document.createElement("span");
    errores.id = "errores";
    document.body.appendChild(errores);
  }

  var contaciertos = 0;
  onkeydown = (e) => {
    let letraescogida = e.key.toUpperCase();
    if (
      !letra.includes(letraescogida) &&
      palabraselec.includes(letraescogida)
    ) {
      letra.push(letraescogida);
      let index = palabraselec.indexOf(letraescogida);
      while (index != -1) {
        document.getElementById(index).textContent = palabraselec[index];
        document.getElementById(index).classList.remove("ocultar");
        contaciertos += 1;
        index = palabraselec.indexOf(letraescogida, index + 1);
      }

      if (contaciertos == palabraselec.length) {
        if (
          window.confirm("Has ganado el juego, ¿quieres volver a jugar?") ==
          true
        ) {
          location.reload();
        } else {
          document.write = "Gracias por jugar";
        }
      }
    } else {
      if (
        !fallo.includes(letraescogida) &&
        !letra.includes(letraescogida) &&
        letraescogida.match(/^[aA-zZñ]$/i)
      ) {
        conterror += 1;
        fallo.push(letraescogida);
        if (conterror == 1) {
          pintaerror1(ctx);
        } else if (conterror == 2) {
          pintaerror2(ctx);
        } else if (conterror == 3) {
          pintaerror3(ctx);
        } else if (conterror == 4) {
          pintaerror4(ctx);
        } else if (conterror == 5) {
          pintaerror5(ctx);
        } else if (conterror == 6) {
          pintaerror6(ctx);
        } else if (conterror == 7) {
          pintaerror7(ctx);
        } else if (conterror == 8) {
          pintaerror8(ctx);
        }

        errores.textContent = fallo;
        mensaje();
      }
    }

    function pintaerror1(ctx) {
      //Base
      ctx.beginPath();
      ctx.moveTo(100, 289);
      ctx.fillStyle = "#3F2817";
      ctx.fillRect(100, 289, 400, 30);
      ctx.fillRect(100, 275, 165, 25);
      ctx.stroke();
      ctx.closePath();
      ctx.beginPath();
      ctx.lineWidth = 7.5;
      ctx.strokeStyle = "#3F2817";
      ctx.moveTo(125, 277);
      ctx.lineTo(170, 200);
      ctx.moveTo(212, 277);
      ctx.lineTo(170, 200);
      ctx.moveTo(122, 277);
      ctx.stroke();
      ctx.moveTo(170, 200);
      ctx.lineTo(170, 23);
      ctx.lineTo(350, 23);
      ctx.stroke();
      ctx.lineTo(350, 70);
      ctx.stroke();
      ctx.closePath();
    }

    function pintaerror2(ctx) {
      //Cabeza
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "black";
      ctx.arc(350, 90, 24, 0, 2 * Math.PI, true);
      ctx.fillStyle = "	#FCD0B4";
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }

    function pintaerror3(ctx) {
      //Ojos y boca
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "black";
      ctx.arc(341, 86, 5, 0, 2 * Math.PI, true);
      ctx.fillStyle = "	white";
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(341, 88, 2, 0, 2 * Math.PI, true);
      ctx.fillStyle = "	black";
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(359, 86, 5, 0, 2 * Math.PI, true);
      ctx.fillStyle = "	white";
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(359, 88, 2, 0, 2 * Math.PI, true);
      ctx.fillStyle = "	black";
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.bezierCurveTo(341, 105, 350, 94, 360, 105);
      ctx.stroke();
      ctx.closePath();
    }
    function pintaerror4(ctx) {
      //Cuerpo
      ctx.beginPath();
      ctx.moveTo(350, 115);
      ctx.bezierCurveTo(410, 245, 290, 220, 350, 115);
      ctx.fillStyle = "	#FCD0B4";
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }

    function pintaerror5(ctx) {
      //brazo izq
      ctx.beginPath();
      ctx.lineWidth = 1.5;
      ctx.moveTo(339, 138);
      ctx.bezierCurveTo(300, 230, 350, 170, 323, 185);
      ctx.fillStyle = "	white";
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }

    function pintaerror6(ctx) {
      //brazo decha
      ctx.beginPath();
      ctx.lineWidth = 1.5;
      ctx.moveTo(360, 138);
      ctx.bezierCurveTo(350, 230, 380, 170, 360, 185);
      ctx.fillStyle = "	white";
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }
    function pintaerror7(ctx) {
      //Piernas izq
      ctx.beginPath();
      ctx.lineWidth = 1.5;
      ctx.moveTo(340, 195);
      ctx.bezierCurveTo(340, 260, 350, 240, 330, 250);
      ctx.fillStyle = "	white";
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }

    function pintaerror8(ctx) {
      //Piernas decha
      ctx.beginPath();
      ctx.lineWidth = 1.5;
      ctx.moveTo(362, 198);
      ctx.bezierCurveTo(370, 260, 360, 240, 376, 250);
      ctx.stroke();
      ctx.closePath();
    }

    function mensaje() {
      if (conterror > 8) {
        if (
          window.confirm("Has perdido el juego, ¿quieres volver a jugar?") ==
          true
        ) {
          location.reload();
        } else {
          document.write = "Gracias por jugar";
        }
      }
    }
  };

  document.body.appendChild(contenedor);
}; //onload
