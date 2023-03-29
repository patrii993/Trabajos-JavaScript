import { test } from "./json.js";

window.onload = function () {
  //Referencias html
  const seccion = document.querySelector(".test");
  const navi = document.querySelector(".nav");
  const head = document.querySelector("header");
  let cuestionario = [];
  //Creamos un contenedor para añadir todo y que luego se añada al body
  let contenedor = document.createElement("div");
  contenedor.classList.add("contenedor");
  var navcat;

  //Añadimos una imagen en le header
  var foto = document.createElement("img");
  foto.srcset = "img/Quiz1.png";
  head.appendChild(foto);

  //Bucle para crear el navegador a partir de las categorías
  for (let cat of test) {
    //nav
    navcat = document.createElement("ul");
    navcat.classList.add("test-categoria");
    navcat.textContent = cat.categoria;
    //Evento para acceder a crear el test según la categoría seleccionada
    navcat.addEventListener("click", selectC);
    navi.appendChild(navcat);
  }
  //Añadimos el nav al body
  document.body.appendChild(navi);

  //funcion del evento del navagador
  function selectC() {
    //hasChildNodes booleano que da true si hay nodos hijos, borramos todo hasta que de false
    //Vuelve a pintar de nuevo otro test
    //Bucle que vamos borrando los nodos hijos desde el último hasta que no hay más
    while (seccion.hasChildNodes()) {
      seccion.removeChild(seccion.lastChild);
    }
    //Obtenemos la categoría
    let categoria = this.textContent;
    //Capturamos la categoria del json que lo almacenamos en una array, para poder utilizarlo.
    cuestionario = test.find((c) => c.categoria === categoria);
    //Creamos también los elementos que están al mismo nivel que la categoria
    //Añadimos los atributos necesarios a cada elemento
    let imagen = document.createElement("img");
    imagen.srcset = `${cuestionario.imagen}`;
    let article = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.textContent = cuestionario.categoria;
    article.appendChild(h2);
    article.appendChild(imagen);
    //id contador de las preguntas
    let idpreg = 0;
    //Obtenemos las preguntas
    for (let preg of cuestionario.preguntas) {
      idpreg += 1;
      //Creamos las preguntas
      //También los mismos elementos que hay en su nivel
      //Añadimos los atributos necesarios a cada elemento
      let divP = document.createElement("div");
      divP.classList.add("preg"); //Le añadimos un class name a las preguntas
      divP.id = idpreg;
      let h3 = document.createElement("h3");
      h3.textContent = preg.pregunta;
      let tipo = document.createElement("span");
      tipo.textContent = preg.tipo;
      if (preg.tipo == "simple") {
        tipo.style.color = "blue";
      } else {
        tipo.style.color = "violet";
      }
      let au = document.createElement("audio");
      au.textContent = preg.audio;
      //Si no hay audio no añade este elemento
      if (preg.audio != null) {
        au.type = "audio/mpeg";
        au.setAttribute("src", `${preg.audio}`);
        au.controls = true; //muestra los controles
        au.load(); //Se queda esperando para activar el audio
      }
      divP.appendChild(h3);
      divP.appendChild(tipo);
      divP.appendChild(au);
      article.appendChild(divP);
      seccion.appendChild(article);
      //Id contador de respuestas
      let idr = 0;
      //Obtenemos lo que hay dentro de respuestas
      //Obtenemos cada una de las respuestas y si es correcta
      //Añadimos los atributos necesarios a cada elemento
      for (let r of preg.respuestas) {
        idr += 1;
        //Creamos cada respuesta
        let divR = document.createElement("div");
        divR.classList.add("res"); //Le añadimos un class name a las respuestas
        divR.id = idr;
        let inputR = document.createElement("input");
        inputR.checked = false;
        //Asociamos al tipo el tipo de selector
        if (preg.tipo == "simple") {
          inputR.type = "radio";
        } else {
          inputR.type = "checkbox";
          inputR.multiple = "multiple";
        }
        inputR.id = `${idpreg}${idr}`;
        //Para que los input funcionen correctamente han de tener el mismo nombre
        inputR.name = `${idpreg}`;
        //Añadimos al valor la propiedad correcta como un atributo
        inputR.value = r.correcta;
        let label = document.createElement("label");
        label.textContent = r.respuesta;
        label.setAttribute("for", `${divR.id}`);
        divR.appendChild(inputR);
        divR.appendChild(label);
        article.appendChild(divR);
      }
    }
    //Creamos el boton corregir
    let divC = document.createElement("div");
    let boton = document.createElement("button");
    boton.textContent = "Corregir";
    //Evento para corregir las preguntas
    boton.addEventListener("click", correcion);

    divC.appendChild(boton);
    article.appendChild(divC);
    seccion.appendChild(article);
    contenedor.appendChild(seccion);
  }

  //Funcion del boton corregir
  function correcion() {
    //variable booleana para combrar que está chequeado
    let checked = false;
    //variable contador para almacenar las respuestas correctas
    let contRcorrect = 0;
    //Seleccionamos todo el contenedor de las respuestas
    let divs = document.querySelectorAll(".res");
    for (let div of divs) {
      //Empezamos el bucle por el primer hijo
      if (div.firstChild.checked) {
        checked = true;
        //Condicion que cambia el color si es correcta o falsa la respuesta seleccionada
        if (div.firstChild.value === "true") {
          div.setAttribute("style", "background-color:green");
          contRcorrect++;
        } else {
          div.setAttribute("style", "background-color:red");
        }
      }
    }
    //Si no se seleccion nada avisa que está en blanco
    if (!checked) {
      window.alert("¡No has seleccionado ninguna pregunta! Vuelve ha intentarlo");
    }
    //si se ha seleccionado al menos una, muestra el total
    else {
      //si es igual o mayor de 5 está aprobado
      if (contRcorrect >= 5) {
        window.alert("Tienes " + contRcorrect + " correctas. ¡Estás aprobado!");
      }
      //Si es menos de 5 está suspenso
      else {
        window.alert("Tienes " + contRcorrect + " correctas. ¡Estás suspenso!");
      }
    }
  }

  //Añadimos el contenedor al body, donde se pinta el test
  document.body.appendChild(contenedor);
}; // window.onload
