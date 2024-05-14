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
  artifact_1: {
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