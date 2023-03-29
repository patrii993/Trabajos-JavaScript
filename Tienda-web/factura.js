window.onload = () => {
  //Recuperar la factura
  const factura = JSON.parse(sessionStorage.getItem("factura"));
  //Elementos refencias del html
  const contenedor = document.querySelector(".container");
  const total = document.querySelector(".all");
  const empresa = document.querySelector(".empresa");
  const facturacion = document.querySelector(".facturacion");
  const descarga = document.querySelector(".btnpdf");
  // console.log(factura);

  var fechahoy = new Date();
  // console.log(fechahoy)
  //Datos de la empresa
  var datosempresa = {
    imagen: "logo.png",
    nombre: "La tienda de Nana SL",
    correo: "latiendadenana@ejemplo.com",
    calle: "C/Uría, nº 4",
    cp: "33003, Oviedo, Asturias",
  };
  //Datos de facturacion
  var datosfacturacion = {
    num: random(1, 100),
    nombre: random(1, 100),
    fecha: fechahoy.toLocaleDateString(),
  };

  //Datos de los productos carrito
  function facturaproductos() {
    let idprd = 0;
    for (let f in factura) {
      idprd++;
      let filaproducto = document.createElement("tr");
      filaproducto.id = idprd;
      let celda1 = document.createElement("td");
      celda1.classList.add("celda");
      let imagen = document.createElement("img");
      imagen.classList.add("pfi");
      imagen.src = `${factura[f][0]}`;
      let celda2 = document.createElement("td");
      celda2.classList.add("celda");
      let titulo = document.createElement("p");
      titulo.classList.add("pft");
      titulo.textContent = f;
      let celda3 = document.createElement("td");
      celda3.classList.add("celda");
      let unidades = document.createElement("p");
      unidades.classList.add("pfu");
      unidades.textContent = factura[f][2];
      let celda4 = document.createElement("td");
      celda4.classList.add("celda");
      let iva = document.createElement("p");
      iva.textContent = "21%";
      let celda5 = document.createElement("td");
      celda5.classList.add("celda");
      let preciosinIVA = document.createElement("p");
      preciosinIVA.classList.add("pfpsiniva");
      preciosinIVA.textContent =
        Number((parseFloat(factura[f][1]) / 1.21).toFixed(2)) + factura[f][3];
      let celda6 = document.createElement("td");
      celda6.classList.add("celda");
      let precio = document.createElement("p");
      precio.classList.add("pfpu");
      precio.textContent = factura[f][1] + factura[f][3];
      let celda7 = document.createElement("td");
      celda7.classList.add("celda");
      let preciototal = document.createElement("p");
      preciototal.classList.add("pfpt");
      preciototal.setAttribute(
        "valor",
        Number((parseFloat(factura[f][1]) * factura[f][2]).toFixed(2))
      );
      preciototal.textContent =
        Number((parseFloat(factura[f][1]) * factura[f][2]).toFixed(2)) +
        factura[f][3];
      celda1.appendChild(imagen);
      celda2.appendChild(titulo);
      celda3.appendChild(unidades);
      celda4.appendChild(iva);
      celda5.appendChild(preciosinIVA);
      celda6.appendChild(precio);
      celda7.appendChild(preciototal);
      filaproducto.appendChild(celda1);
      filaproducto.appendChild(celda2);
      filaproducto.appendChild(celda3);
      filaproducto.appendChild(celda4);
      filaproducto.appendChild(celda5);
      filaproducto.appendChild(celda6);
      filaproducto.appendChild(celda7);
      contenedor.appendChild(filaproducto);
    }
    precioTotal();
  }

  //Calcular el precio total de los producto para la facturacion
  function precioTotal() {
    let filatotal = document.createElement("td");
    filatotal.classList.add("totales");
    var calculo = 0;
    var pTotal = document.querySelectorAll(".pfpt");

    for (let p of pTotal) {
      calculo += Number(parseFloat(p.getAttribute("valor")).toFixed(2));
      //console.log(p);
    }
    filatotal.textContent = "Total a pagar: " + calculo + "€";
    total.replaceChildren();
    total.appendChild(filatotal);
  }

  //Calcular numero random para el numero de la factura y del cliente usando una id
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //Crear la factura
  function crearFactura() {
    let logo = document.createElement("img");
    logo.src = "./img/" + datosempresa.imagen;
    let nomemp = document.createElement("h2");
    nomemp.textContent = datosempresa.nombre;
    let correo = document.createElement("h3");
    correo.textContent = datosempresa.correo;
    let calle = document.createElement("h3");
    calle.textContent = datosempresa.calle;
    let cp = document.createElement("h4");
    cp.textContent = datosempresa.cp;

    let numf = document.createElement("h3");
    numf.textContent = "Factura Num: " + "#" + datosfacturacion.num;
    let nomf = document.createElement("h3");
    nomf.textContent = "Cliente ID Num: " + "#" + datosfacturacion.nombre;
    let fechaf = document.createElement("h4");
    fechaf.textContent = "Fecha de facturación: " + datosfacturacion.fecha;

    empresa.appendChild(logo);
    empresa.appendChild(nomemp);
    empresa.appendChild(correo);
    empresa.appendChild(calle);
    empresa.appendChild(cp);
    facturacion.appendChild(numf);
    facturacion.appendChild(nomf);
    facturacion.appendChild(fechaf);
    facturaproductos();
  }

  //Llamamos a la funcion para que cree la factura
  crearFactura();
  //Evento para descargar la factura
  descarga.addEventListener("click", descargafactura);

  //Creamos el pdf para descargarlo
  function descargafactura() {
    let facturahtml = document.querySelector(".facturacompleta");
    html2pdf()
      .set({
        margin: 1,
        filename: "facturaLTN.pdf",
        image: {
          type: "jpeg",
          quality: 0.98,
        },
        html2canvas: {
          scale: 2,
          letterRendering: true,
        },
        jsPDF: {
          unit: "in",
          format: "a3",
          orientation: "portrait",
        },
      })
      .from(facturahtml)
      .save();
  }
};//onload
