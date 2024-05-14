let defBoards = {
  board_0: {
    style: {
      maxHeight: 300,
      maxWidth: 300,
    },
  },
};

//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js

let def = {
  /*artifact_1: {
    statementBottom: ['Dominio = [ -1,2 ]', 'conexa', 'Tiene dos puntos de corte con el eje x.'],
    conditions: {
      conexa: { type: 1 },
      dom: { range: [[-1, 2, 1, false, false]] },
      countsX: { value: 2 },
    },
  },
  artifact_2: {
    statementBottom: 'Dominio = [ -1,2 ], conexa. Tiene dos puntos de corte con el eje x, máximo absoluto alcanzado solo en -1',
    conditions: {
      conexa: { type: 1 },
      dom: { range: [[-1, 2, 1, false, false]] },
      max: { global: [-1] },
      countsX: { value: 2 },
    },
  },
  artifact_3: {
    statementBottom: 'Dominio = [ -1,2 ], conexa. Tiene dos puntos de corte con el eje x, máximo absoluto alcanzado solo en -1 y 2',
    conditions: {
      conexa: { type: 1 },
      dom: { range: [[-1, 2, 1, false, false]] },
      max: { global: [-1, 2] },
      countsX: { value: 2 },
    },
  },
  artifact_4: {
    statementBottom: 'Dominio = ( -1,2 ), conexa. Tiene dos puntos de corte con el eje x, máximo absoluto alcanzado solo en 0',
    conditions: {
      conexa: { type: 1 },
      dom: { range: [[-1, 2, 3, true, true]] },
      max: { global: [0], noise: 0.12, },
      countsX: { value: 2 },
    },
  },
  artifact_5: {
    statementBottom: 'Dominio = [ -1,2 ], conexa. Tiene dos puntos de corte con el eje x, máximo absoluto alcanzado solo en 0, minimo absoluto alcanzado solo en -1',
    conditions: {
      dom: { range: [[-1, 2, 1, false, false]] },
      max: { global: [0], noise: 0.12, },
      min: { global: [-1] },
      countsX: { value: 2 },
    },
  },
  artifact_6: {
    statementBottom: 'Dominio = ( -1,2 ), conexa. negativa creciente en (-1,1) decreciente (1,2)',
    conditions: {
      conexa: { type: 1 },
      dom: { range: [[-1, 2, 1, true, true]], },
      upDown: { intervals: [[true, [-1, 1]], [false, [1, 2]]] },
      positiveNegative: { intervals: [[false, [-4, 4]]] },
    },
  },*/
  //Examenes elaborados por Annelys
  artifact_1: {
    statementBottom: ['Mínimo absoluto alcanzado en -1,5 y 1,5.', 'No tiene máximos.'],
    conditions: {
      conexa: { type: 4 },
      max:
      {global:0,
      localcount:0,},
      min: { global: [-1.5,1.5]},
    },
  },
  artifact_2: {
    //No funcionan los maximos y minimos simultaneamente. Ampliar board (Modificar maximo).
    statementBottom: ['Mínimo absoluto alcanzado en -1,5 y 1,5.','Máximo de f es -3 alcanzado en 0,5.','Dominio R.'],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1,2],[4,5], 3, false, false]],
      },
      max:{
        maxTotal: 3,
        global:[0.5],
      },
      min: { global: [-1.5,1.5],},
    },
  },
  artifact_3: {
    //¿Que se hace en caso de una union e infinitos en el rango?. Ampliar board (Modificar dominio).
    statementBottom: ['Dominio = [ -4,4 ]', 'Rango ( -∞,-2 )U( 2,∞ )','f es creciente en ( -3,-1 )'],
    conditions: {
      conexa: { type: 4 },
      dom: { range: [[-3, 3, 3, false, false]] },
      upDown:{intervals:[[true,[-3,-1]]]},
      rang: {
        mulIntervals: [
          [[3,2, false, false]]
          //[[-2,-3,false,false]]
        ],
      },
    },
  },
  artifact_4: {
    statementBottom: ['Máximo absoluto alcanzado en -2,5 y 2,5.', 'Dominio R.'],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1,2,8],[4,5,6], 3, false, false]],
      },
      max:
      {global: [-2.5, 2.5]},
    },
  },
  artifact_5: {
    //Igual que artefacto 2.
    statementBottom: ['Mínimo absoluto alcanzado en -2,5 y 2,5.', 'Máximo de f es 2 alcanzado en 0.','Dominio R.'],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1,2,8],[4,5,6], 3, false, false]],
      },
      max:{
        maxTotal: 2,
        global:[0],    
      },
      min: { global: [-2.5,2.5]},
    },
  },
  artifact_6: {
    //Corregir el infinito del rango. Ampliar board (Modificar dominio).
    statementBottom: ['Dominio [ -3,4 ]', 'Rango [ -3,∞ )','f decrece en ( 0,2 )'],
    conditions: {
      conexa: { type: 3 },
      dom: { range: [[-3, [3], 3, false, false]] },
      rang: {
        mulIntervals: [
          [[3,-3, false, false]]
        ],
      },
      upDown:{intervals:[[false,[0,2]]]},
    },
  },
  artifact_7: {
    //Ampliar board (Modificar dominio).
    statementBottom: ['Mínimo absoluto alcanzado en dos puntos.', 'Dominio [ -4,2 )'],
    conditions: {
      conexa: { type: 3 },
      dom: { range: [[-3, 2, 3, false, true]] },
      min: { global: 2},
    },
  },
  artifact_8: {
    //Igual que artefacto 2 y 5.
    statementBottom: ['Mínimo absoluto alcanzado en -1 y 3,5.','Máximo de f es 2 alcanzado en 0.','Dominio R.'],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1,8],[5,6], 3, false, false]],
      },
      max:{
        maxTotal: 2,
        global:[0],   
      },
      min: { global: [-1,3.5]},
    },
  },
  artifact_9: {
    //¿Como hago que el rango sea R?. Ampliar board (Modificar dominio). 
    statementBottom: ['Dominio [ -4,0 ]','Rango R','f creciente en ( -2,-0.5)'],
    conditions: {
      conexa: { type: 3 },
      dom: { range: [[-3, 0, 3, false, false]] },
      //rang: {
        //mulIntervals: [
          //[[[3],[7], false, false]]
        //],
      //},
      upDown:{intervals:[[true,[-2,-0.5]]]},
    },
  },
  artifact_10: {
    //Ampliar board (Problema con el máximo).
    statementBottom: ['Mínimo absoluto alcanzado en dos puntos.', 'Un máximo absoluto alcanzado en 2.5'],
    conditions: {
      conexa: { type: 3 },
      max:{ global: [2.5]},
      min: { global: 2},
    },
  },
  artifact_11: {
    //Igual que artefacto 2,5 y 8.
    statementBottom: ['Máximo absoluto alcanzado en 0 y 3.','Mínimo de f es -1,5 alcanzado en 1.', 'Dominio R'],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1,8],[5,6], 3, false, false]],
      },
      max:{ global:[0,3] },
      min:{
        minTotal: 2,
        global:[0],    
      },
    },
  },
  artifact_12: {
    //Ampliar board (Modificar dominio). Problema con el rango.
    statementBottom: ['Dominio [ -3,4 ]','Rango ( -∞,-2 )U( 2,∞ )','f decreciente en (2,4)'],
    conditions: {
      conexa: { type: 3 },
      dom: { range: [[-3, 4, 3, false, false]] },
      //rang: {
        //mulIntervals: [
          //[[[3],[7], false, false]]
        //],
      //},
      upDown:{intervals:[[false,[2,4]]]},
    },
  },
};



function seleccionarTresAleatorios(min, max) {
  // Crear un array con los números consecutivos
  const numeros = [];
  for (let i = min; i <= max; i++) {
    numeros.push(i);
  }

  // Seleccionar 3 números aleatorios distintos
  const seleccionados = [];
  while (seleccionados.length < 3) {
    const indiceAleatorio = Math.floor(Math.random() * numeros.length);
    const numeroAleatorio = numeros[indiceAleatorio];

    // Verificar si el número ya está seleccionado
    if (!seleccionados.includes(numeroAleatorio)) {
      seleccionados.push(numeroAleatorio);
      numeros.splice(indiceAleatorio, 1); // Eliminar el número del array
    }
  }

  // Devolver los números seleccionados
  return seleccionados;
}

const seleccionados = seleccionarTresAleatorios(1, 6);
//console.log(seleccionados); // Ejemplo: [17, 8, 23]

let i=1;

let divfather = document.getElementById("container").firstChild.nextSibling;
seleccionados.forEach(element => {
  let divbefore1 = document.createElement("div");
  divbefore1.className = 'question-container';
  let divbefore2 = document.createElement("div");
  divbefore2.className = 'question-box';
  let span1 = document.createElement("span");
  span1.className = 'question-text';
  span1.textContent = 'P'+i.toString();
  i++;
  let div = document.createElement("div");
  div.className = 'defBoard';
  let att = 'artifact_'+element.toString();
  //console.log(att)
  div.setAttribute('data-artifact',att);
  let divbottom = document.createElement("div");
  divbottom.className = 'oval-container';
  let span2 = document.createElement("span");
  span2.className = 'oval-number';
  span2.textContent = '3pts';
  divbefore2.appendChild(span1);
  divbefore1.appendChild(divbefore2);
  divbefore1.appendChild(div);
  divfather.appendChild(divbefore1);
  divbottom.appendChild(span2);
  divbefore1.appendChild(divbottom);

  //console.log(divfather);
});
 
window.onload = main();