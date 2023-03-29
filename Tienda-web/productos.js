window.onload = () => {
  //Variables referencias al HTML
  const almacen = document.querySelector(".videojuego");
  const carrito = document.querySelector(".carro-content");
  const carro = document.querySelector(".carrito");
  const car1=document.querySelector(".car");
  //Elementos del carrito;
 
  tituloc = document.createElement("h2");
  tituloc.textContent = "Mi carrito";
  carrito.appendChild(tituloc);
  total = document.createElement("p");
  total.textContent = "Total: ";
  total.classList.add("total");
  carrito.appendChild(total);
  //Eventos
  carro.addEventListener("click", () => {
    carrito.classList.toggle("invisible");
  });

  //Funcion que recoge los datos del JSON y los pinta en el HTML
  async function recogerDatos() {
    const response = await fetch("datos.json");
    const data = await response.json();
    sacarDatos(data);
  }
  var mapa = new Map();
  function sacarDatos(data) {
    for (let v of data) {
      // almacen.innerHTML += `
      //   <div class="flip  grid-item" id="v${v.id}" >
      //       <div class="flip-inner">
      //           <div class="front">
      //               <img src="./img/${v.imagen}" alt=${v.titulo} title=${v.titulo} >
      //               <h3 class="titulo">${v.titulo}</h3>
      //               <p class="genero">${v.genero}</p>
      //           </div>
      //           <div class="back">
      //               <p class="descripcion">${v.descripcion}</p>
      //               <p class="precio"><span class="precio">${v.precio}</span> ${v.moneda} </p>
      //               <button onclick="comprar('v${v.id}')">Comprar</button>
      //           </div>
      //       </div>
      //   </div>
      //   `;
      var flip = document.createElement("div");
      flip.classList.add("flip");
      flip.classList.add("grid-item");
      flip.id = `v${v.id}`;
      var flipinterno = document.createElement("div");
      flipinterno.classList.add("flip-inner");
      var front = document.createElement("div");
      front.classList.add("front");
      var img = document.createElement("img");
      img.classList.add("img");
      img.src = `./img/${v.imagen}`;
      img.alt = v.titulo;
      img.title = v.titulo;
      var titulo = document.createElement("h3");
      titulo.textContent = v.titulo;
      titulo.classList.add("titulo");
      var genero = document.createElement("p");
      genero.textContent = v.genero;
      genero.classList.add("genero");
      var back = document.createElement("div");
      back.classList.add("back");
      var descripcion = document.createElement("p");
      descripcion.classList.add("descripcion");
      descripcion.textContent = v.descripcion;
      var precio = document.createElement("p");
      precio.classList.add("precio");
      precio.textContent = v.precio + v.moneda;
      precio.setAttribute("data-precio", v.precio);
      precio.setAttribute("data-moneda", v.moneda);
      // var moneda = document.createElement("p");
      // moneda.classList.add("moneda");
      // moneda.textContent = v.moneda;
      var boton = document.createElement("button");
      boton.classList.add("comprar");
      boton.id = `v${v.id}`;
      boton.textContent = "Comprar";
      boton.addEventListener("click", comprar);
      front.appendChild(img);
      front.appendChild(titulo);
      front.appendChild(genero);
      back.appendChild(descripcion);
      back.appendChild(precio);
      //back.appendChild(moneda);
      back.appendChild(boton);
      flipinterno.appendChild(front);
      flipinterno.appendChild(back);
      flip.appendChild(flipinterno);
      almacen.appendChild(flip);
    }
    // botones = document.querySelectorAll("button");
    // for(let boton of botones){
    //  //console.log(boton);
    //   boton.addEventListener('click', comprar);
    // }
  }
  //Funcion del boton comprar
  function comprar() {
    //console.log(this.parentNode);

    const name = this.parentNode.parentNode.querySelector("h3").textContent;
    //console.log(name);
    const precio = this.parentNode
      .querySelector(".precio")
      .getAttribute("data-precio");
    //console.log(precio);
    const img = this.parentNode.parentNode.querySelector("img").src;
    const moneda = this.parentNode
      .querySelector(".precio")
      .getAttribute("data-moneda");
    //console.log(img);

    if (mapa.has(name)) {
      let u = mapa.get(name);
      u[2]++;
      //console.log(u[2]);
      mapa.set(name, u);
    } else {
      mapa.set(name, [img, precio, 1, moneda]);
    }
    //console.log(mapa);
    pintar();
  }

  //Funcion para pintar los productos en el carrito
  function pintar() {
    //carrito.innerHTML=``;
    carrito.replaceChildren();
    carrito.appendChild(tituloc);
    for (let [clave, valor] of mapa) {
      // carrito.innerHTML+=
      // `
      // <div class="producto">
      // <img class="carrito-img" src="${valor[0]}"><p class="p-v" >${clave}  precio:${(valor[1]*valor[2]).toFixed(2)}€ u:${valor[2]}<button class="eliminar"></button></p>
      // </div> `
      let producto = document.createElement("div");
      producto.classList.add("producto");
      let img = document.createElement("img");
      img.classList.add("carrito-img");
      img.src = `${valor[0]}`;
      let contenedor = document.createElement("p");
      contenedor.classList.add("p-v");
      let titulo = document.createElement("h6");
      titulo.textContent = clave;
      let preciop = document.createElement("p");
      preciop.textContent = (valor[1] * valor[2]).toFixed(2) + valor[3];
      preciop.classList.add("preciot");
      preciop.setAttribute("preciou", (valor[1] * valor[2]).toFixed(2));
      preciop.setAttribute("preciom", valor[3]);
      let unidad = document.createElement("p");
      unidad.classList.add("unit");
      unidad.setAttribute("u", valor[2]);
      unidad.textContent = valor[2];
      // contenedor.innerHTML= `<div><b>${clave}</b> <span>Precio: ${(valor[1]*valor[2]).toFixed(2)}€ U:${valor[2]}</span></div> `;
      let btnp = document.createElement("button");
      btnp.classList.add("eliminar");
      btnp.addEventListener("click", eliminar);
      producto.appendChild(img);
      producto.appendChild(contenedor);
      contenedor.appendChild(titulo);
      contenedor.appendChild(unidad);
      contenedor.appendChild(preciop);
      producto.appendChild(btnp);
      carrito.appendChild(producto);
    }
    carrito.appendChild(total);
    preciototal();
    unidadesTotal();
    guardarCarrito();
    var comprarC=document.createElement("a");
    comprarC.classList.add("btncompra");
    comprarC.href="factura.html"
    comprarC.textContent="Comprar";
    carrito.appendChild(comprarC);
  }
 
  //Funcion para calcular el precio total
  function preciototal() {
    const total = document.querySelector(".total");
    const precio = document.querySelectorAll(".preciot");
    var conttotal=0;
    console.log(precio);
    for (let p of precio) {
      console.log(p.getAttribute("preciou"));
      conttotal +=Number(parseFloat(p.getAttribute("preciou")).toFixed(2));
    }
    total.textContent="Total: " + conttotal+ " €";
  }
 
  //Para marcar las unidades totales del carrito
  function unidadesTotal() {
    const utotal = document.querySelectorAll(".unit");
    console.log(utotal);
    var contu=0; 
    var cantidad=document.createElement("span");
    cantidad.classList.add("cant");
    for (let u of utotal) {
      contu+=Number(parseInt(u.getAttribute("u")));
      console.log(contu);
    }
    cantidad.textContent=contu;
    car1.replaceChildren();
    car1.appendChild(cantidad);
  }

  //Funcion eliminar producto.
  function eliminar() {
    let producto = this.parentNode.querySelector("h6").textContent;
    //console.log(producto);
    let videojuego = mapa.get(producto);
    if (videojuego[2] > 1) {
      videojuego[2]--;
      mapa.set(producto, videojuego);
    } else {
      mapa.delete(producto);
    }
    pintar();
    guardarCarrito();
  }
//Guardar el carrito para usarlo en la factura
  function guardarCarrito() {
    var obj = Object.fromEntries(mapa);
    sessionStorage.setItem("factura", JSON.stringify(obj));
  }

  recogerDatos();
}; //onload
