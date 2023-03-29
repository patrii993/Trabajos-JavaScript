window.onload = () => {
  //Referencias al html
  const imagenes = document.querySelector(".inicio");
  const destinos = document.querySelector(".container");

  //Recoger datos
  async function recogerDatos() {
    const response = await fetch("animales.json");
    const data = await response.json();
    sacarDatos(data); //Primera funcion que saca los primeros bloques
    sacarDatos2(data);//Segunda función que crea la segunda fila de bloques
  }

  //Crea arrays de 10 con numeros aleatorios para luego usarlos
  function numAleatorio() {
    let set = new Set();
    do {
      let num = Math.floor(Math.random() * 10);
      set.add(num);
    } while (set.size <10);
    return set;
  }
  console.log(numAleatorio());

  //Funcion que imprime la primera fila de bloques
  function sacarDatos(data) {
    for (let i of numAleatorio()) {
      var cube = document.createElement("div");
      cube.classList.add("cube");
      cube.id = `${data[i].id}`;
      cube.setAttribute("draggable", "true");
      cube.setAttribute("data-animal", `${data[i].nombre}`);
      cube.style.backgroundImage = `url(./img/${data[i].imagen})`;
      cube.addEventListener("dragstart", dragStart);
      imagenes.appendChild(cube);
    }
  }
  //Funcion que imprime la sagunda fila de bloques
  function sacarDatos2(data){
    for (let i of numAleatorio()) {
      var cont = document.createElement("div");
      cont.textContent = data[i].familia;
      var destino = document.createElement("div");
      destino.classList.add("destino");
      destino.addEventListener("DragEnter", dragenter);
      destino.addEventListener("dragover", dragOver);
      destino.addEventListener("drop", drop);
      destino.setAttribute("data-animal", `${data[i].nombre}`);
      cont.appendChild(destino);
      destinos.appendChild(cont);
  }
}

  //Funcion empezar en el objeto que se coge, el que tiene draggable
  function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
  }
  //Funcion inicio del destino
  function dragenter(e) {
    e.preventDefault();
  }
  //Funcion encima del destino
  function dragOver(e) {
    e.preventDefault();
  }
  //Funcion soltar en destino
  function drop(e) {
    const id = e.dataTransfer.getData("text/plain");
    const draggable = document.getElementById(id);
    if (
      e.target.getAttribute("data-animal") ==
      draggable.getAttribute("data-animal")
    ) {
      e.target.appendChild(draggable);
      //console.log(e);
      draggable.style.border = "3px solid greenyellow";
      let text = document.createElement("p");
      text.textContent = "¡Correcto!";
      text.style.color = "green";
      text.style.backgroundColor = "white";
      draggable.appendChild(text);  
    } else {
      draggable.style.border = "3px solid red";
    }

    fin();
  }

  //Acabar, sale boton de reiniciar juego
  function fin() {
    const comprueba = document.querySelector(".inicio");
    if (comprueba.children.length < 1) {
      document.body.innerHTML += `<h3>Fin del juego ¡has ganado ^-^! </h3>`;
      const boton = document.createElement("button");
      boton.classList.add("boton");
      boton.textContent = "Volver a jugar";
      boton.addEventListener("click", () => {
        location.reload();
      });
      document.body.appendChild(boton);
    }
  }

  recogerDatos();
}; //onload
