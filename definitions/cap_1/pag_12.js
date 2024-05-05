const defBoards = {
  board_0: {
    style: {
      maxHeight: 300,
      maxWidth: 300,
    },
  },
};

//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js

const def = {
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
window.onload = main();