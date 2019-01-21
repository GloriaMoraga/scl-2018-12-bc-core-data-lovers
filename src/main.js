
window.onload = (() => {// Buscar con click del botón y Mostrar
document.getElementById('btnSearch').addEventListener('click',
    (evento) => {evento.preventDefault();    // Funcion al clickear boton

document.getElementById('root').innerHTML = '';   // cada vez limpia el div donde se muestra el resultado.
let textSearch = document.getElementById('search').value;  // variable de input buscar
let result = window.poke.processData(textSearch);  // llamando el resultado desde Data.js

document.getElementById('root').innerHTML += 
`<div class="container">
<div class="columns">
  <div class="column"></div>
  <div class="column">
<div class="card gradiantContainer">
<div class ="backgroundColor">
<div class="card-content">
  <div class="media-content">
      <p class="title is-4 has-text-white">${result.name}</p>
  </div>
</div>
</div>
<div class="card-content is-flex is-horizontal-center">
  <figure class="image is-128x128">
      <img class="backgroundImage is-rounded" src="${result.img}">
  </figure>
  </div>
  <div class="card-content is-horizontal-center">
  <div class="control">
    <div class="tags has-addons">
     
      <span class="tag is-primary">${result.type[0]}</span>
      <span class="tag is-primary">${result.type[1]}</span>
      
    </div>
  </div>
  </div>


  <div class="card-content centered">
  <div class="content has-text-white">
    <div class="columns is-mobile">
        <div class="column  tipographyWeight is-one-third">
      <p>Caramelos</p>
      <p>Huevo</p>
      <p>Debilidades</p>
      <p>Peso</p>
        </div>
        <div class="column">
      <p> ${result.candy}</p>
      <p> ${result.egg}</p>
      <p> ${result.weaknesses}</p>
      <p> ${result.weight}</p>
        </div>
    </div>
  
  </div>
  </div>
  </div>
  </div>

<div class="column"></div>

</div>
</div>`   // mostrando el rsultado en array para diferentes keys del objeto.

// scroll para que al apretar boton buscar me posicione en la pantalla de perfil
let element = document.getElementById("root");
element.scrollIntoView();
element.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start' });

document.getElementById("search").value = "";// limpia el input
});




// Autocompletar desde Data con datalist

let resultNames = window.poke.completeData(); // llamando propiedad nombre desde data.js
let datalist = document.getElementById('names'); // variable para mostrar en datalist

document.getElementById('search').addEventListener('keyup', function () {
  let searchComplete = document.getElementById('search').value;
    if (searchComplete.length === 0) { // si el input search es igual a 0 lo devuelve.
        return;
    }
    datalist.textContent = ''; // limpia la busqueda por letra.
    // recorre la data  la muestra en el search
    for (let i = 0; i < resultNames.length; i++) {
        if (resultNames[i].toLowerCase().indexOf(searchComplete.toLowerCase()) !== 0) {
            continue;
            
        }
        let option = document.createElement('option');
        option.value = resultNames[i];
        datalist.appendChild(option); // muestra la lista de datos en datalist
        
    }
    
    });

    

 // mostrar todos los pokemones en div
let resultAllPokemons = window.poke.showDatafilter(); 
document.getElementById('allPokemons').innerHTML = ''; // limpio el div cada vez que se hace click
 for (let i = 0; i < resultAllPokemons.length; i++) {
    document.getElementById('allPokemons').innerHTML += ` <div class="column is-one-quarter">
    <div class="card gradiantContainer">
  
    <div class="card-content is-flex is-horizontal-center">
      <figure class="image is-128x128">
          <img class="backgroundImage is-rounded" src="${resultAllPokemons[i]}">
      </figure>
      </div>
  
      </div>
      </div>` // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
  }


//  ordenar de la A-Z ,Z-A Y 1-151

document.getElementById("orderPokemon").addEventListener("change", sort => {
document.getElementById('allPokemons').innerHTML  = '';

let sortOrder = sort.target.value;
let resultsort = window.poke.sortData(sortOrder); 


resultsort.forEach(elementos => {
    document.getElementById('allPokemons').innerHTML += 
    `
    <div class="column is-one-quarter">
  <div class="card gradiantContainer">
  <div class ="backgroundColor">
  <div class="margin-card">
    <div class="media-content">
        <p class="title is-6 has-text-white">${elementos.name}</p>
    </div>
  </div>
  </div>
  <div class="card-content is-flex is-horizontal-center">
    <figure class="image is-128x128">
        <img class="backgroundImage is-rounded" src="${elementos.img}">
    </figure>
    </div>

    </div>
    </div>` // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
})

});

//  Filtrar por tipo
document.getElementById("typePokemon").addEventListener("change", choose => {
document.getElementById('allPokemons').innerHTML  = '';
let selectedchoose = choose.target.value;
let resultfilter = window.poke.filterData( selectedchoose); 


resultfilter.forEach(elemento => {
            document.getElementById('allPokemons').innerHTML += 
            `
              <div class="column is-one-quarter">
            <div class="card gradiantContainer">
            <div class ="backgroundColor">
            <div class="margin-card">
              <div class="media-content">
                  <p class="title is-6 has-text-white">${elemento.name}</p>
              </div>
            </div>
            </div>
            <div class="card-content is-flex is-horizontal-center">
              <figure class="image is-128x128">
                  <img class="backgroundImage is-rounded" src="${elemento.img}">
              </figure>
              </div>
        
              </div>
              </div>` // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
      
        })

   
});



window.poke.computeStats(); 
// resultcompute();


})




document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });




