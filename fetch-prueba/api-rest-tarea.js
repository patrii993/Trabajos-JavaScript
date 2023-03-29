//Obtenemos datos
function ObtenerPersonajes() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((personaje) => personaje.json())
    .then((personaje) => {
      ponPersonaje(personaje);
    });
//Pintamos los personajes
  function ponPersonaje(personaje) {
    console.log(personaje);
    for (let p of personaje.results) {
      //console.log(p);
      document.body.innerHTML+= `<div class"contenedor">
      <ul>  
      <img id="${p.id}" src="${p.image}" alt="${p.name}" title="${p.name}">
      <li> Nombre: ${p.name}</li>
      <li>Estado: ${p.status}</li>
      <li>Especie: ${p.species}</li>
      <li>Género: ${p.gender}</li>
      
      </ul>
      </div> <br>`
    }
  }
}
ObtenerPersonajes();