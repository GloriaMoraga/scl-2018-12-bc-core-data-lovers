let data;
fetch('./data/pokemon/pokemon.json')
  .then(res => res.json())
   .then(pokeData => {
    data = pokeData.pokemon;
 })
        

window.poke = {

  
  processData: (textSearch) => {
    
    for (let valor of data) {
      //  console.log(valor.name)
      if (valor.name === textSearch){
        return valor;
        
      
      }
    }
  // let nombres = []; // arreglo vacío donde pushearé los nombres nuevos.
  // for (let i = 0; i < data.length; i++) {
  
  //   if (data[i].name === textSearch){
  //     nombres.push(data[i].name, data[i].img, data[i].weaknesses, data[i].type,data[i].candy,data[i].egg, data[i].weight)
  //   }
  // }
  //   return nombres;
  
    // Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.
  
    },
  
    filterData:(selectedchoose) => {
 
    const typePoke = data.filter(elemento => {
    
        if (elemento.type[0] === selectedchoose){
          return elemento;
        }
        if (elemento.type[1] === selectedchoose){
          return elemento;
        }
        if (elemento.type[2] === selectedchoose){
          return elemento;
        }
       
      
      
      

      })
      return typePoke;
  
  },
  
  
    sortData:(sortOrder) => {
     
      data.sort(function(a, b) {
      if( sortOrder === "a-z"){
       
        if (a.name < b.name ) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      
        // names must be equal
        return 0;
      }
      else if( sortOrder === "z-a"){
       
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
      
        // names must be equal
        return 0;
      }
  
      else if( sortOrder === "1-151"){
       
        if (a.id < b.id ) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
      
        // names must be equal
        return 0;
      }
      });
       return data;
      
  
      
      // esta función sort u ordenar recibe tres parámetros.
      //  El primer parámetro, data, nos entrega los datos. 
      //  El segundo parámetro, sortBy, nos dice con respecto
      //   a cuál de los campos de la data se quiere ordenar. 
      //   El tercer parámetro, sortOrder, indica si se quiere 
      //   ordenar de manera ascendente o descendente.
      
    },
  
  
    computeStats:() => {
      
          
     
          const firepokemon = data.filter((element )=> {return element.type.indexOf('Fuego') >= 0 });
          let fire = firepokemon.length;
       

          const grasspokemon = data.filter((element )=> {return element.type.indexOf('Planta') >= 0 });
            let grass = grasspokemon.length;
          

            const icepokemon = data.filter((element )=> {return element.type.indexOf('Hielo') >= 0 });
             let ice = icepokemon.length;

             const electricpokemon = data.filter((element )=> {return element.type.indexOf('Eléctrico') >= 0 });
             let electric = electricpokemon.length;

             const psiquicopokemon = data.filter((element )=> {return element.type.indexOf('Psíquico') >= 0 });
             let psiquico = psiquicopokemon.length;

             const normalpokemon = data.filter((element )=> {return element.type.indexOf('Normal') >= 0 });
             let normal = normalpokemon.length;
             
             const earthpokemon = data.filter((element )=> {return element.type.indexOf('Tierra') >= 0 });
             let earth = earthpokemon.length;

             const ghostpokemon = data.filter((element )=> {return element.type.indexOf('Fantasma') >= 0 });
             let ghost = ghostpokemon.length;


             const fightpokemon = data.filter((element )=> {return element.type.indexOf('Lucha') >= 0 });
             let fight = fightpokemon.length;

             const poisonpokemon = data.filter((element )=> {return element.type.indexOf('Veneno') >= 0 });
             let poison = poisonpokemon.length;
        

             const rockpokemon = data.filter((element )=> {return element.type.indexOf('Roca') >= 0 });
             let rock= rockpokemon.length;

             const waterpokemon = data.filter((element )=> {return element.type.indexOf('Agua') >= 0 });
             let water= waterpokemon.length;
             const flyingpokemon = data.filter((element )=> {return element.type.indexOf('Volador') >= 0 });
             let flying= flyingpokemon.length;


          // let count = firepokemon.reduce((acum, element) => {return acum + element.type}, '');

        //  //  Promediar datos
      
         window.google.charts.load("current", {packages:["corechart"]});
         window.google.charts.setOnLoadCallback(drawChart);

         
         function drawChart() {
           let data = window.google.visualization.arrayToDataTable([
             ['Task', 'Tipos de Pokemon'],
             ['Planta', grass],
             ['Fuego',  fire],
             ['Electrico', electric],
             ['Psíquico', psiquico],
             ['Hielo', ice],
             ['Normal', normal],
             ['Tierra', earth],
             ['Fantasma', ghost],
             ['Lucha', fight],
             ['Veneno', poison],
             ['Bicho', earth],
             ['Roca', rock],
             ['Dragón', earth],
             ['Volador', flying],
             ['Agua', water]
           ]);
   
           let options = {
             title: '',
             pieHole: 0.5,
             
             backgroundColor: 'transparent'
           };
   
           let chart = new window.google.visualization.PieChart(document.getElementById('donutchart'));
           chart.draw(data, options);
           
         }

    },
  
  
    completeData:() => {

      let nameComplete = []; // arreglo vacío donde pushearé los nombres nuevos.
      for (let i = 0; i < data.length; i++) {
          nameComplete.push(data[i].name)
     }
        return nameComplete;
      
    },
  
    showDatafilter:() => {
      let imgData = []; // arreglo vacío donde pushearé los nombres nuevos.
      for (let i = 0; i < data.length; i++) {
       imgData.push(data[i].img)
        
      }
      return imgData;
    },
  
  };

  window.data;
  window.google;
