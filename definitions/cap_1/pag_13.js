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
    statementBottom: 'Dominio = ( -1,2 ), conexa. decreciente, positiva.',
    conditions: {
      conexa: { type: 1 },
      dom: { range: [[-1, 2, 1, true, true]] },
      positiveNegative: { intervals: [[true, [-1, 2]]] },
      upDown: { intervals: [[false, [-1, 2]]] },
    },
  },
  artifact_2: {
    statementBottom: 'Dominio = [ 0,∞ ), disconexa, creciente, acotada superiormente por 2.',
    conditions: {
      conexa: { type: 2 },//se tiene en cuenta para el dominio
      dom: { range: [[0, [5], 2, false, false]] },
      upDown: { intervals: [[true, [-4, 4]]] },
      cotes: {
        top: {
          rang: 2.1
        },
      },
    },
  },

  artifact_3: {
    statementBottom: 'Dominio = [ 0,∞ ), disconexa, creciente, acotada inferiormente por -2.',
    conditions: {
      conexa: { type: 2 },//se tiene en cuenta para el dominio
      dom: { range: [[0, [5, 4], 2, false, false]] },
      upDown: { intervals: [[true, [-4, 4]]] },
      cotes: {
        bottom: {
          rang: -2.1
        },
      },
    },
  },
  artifact_4: {
    statementBottom: 'Rango = [ -1,3 ], decreciente.',

    conditions: {
      conexa: { type: 3 },
      upDown: { intervals: [[false, [-1, 3]]] },
      rang: {
        mulIntervals: [
          [[3, -1, false, false]]
        ],
      },
    },
  },
  //////////////////////////////////
  artifact_5: {
    statementBottom: 'Rango = [ -1,3 ], decreciente, Minimo alcanzado en 2',
    conditions: {
      conexa: { type: 3 },
      upDown: { intervals: [[false, [-1, 3]]] },
      rang: {
        mulIntervals: [
          [[3, -1, false, false]]
        ],
      },
      min: { global: [2] },
    },
  },

  artifact_6: {
    statementBottom: 'Rango = [ -1,3 ), decreciente, Dominio = ( -2,2 ]',
    conditions: {
      conexa: { type: 3 },
      dom: { range: [[-2, 2, 1, true, false]] },
      rang: {
        mulIntervals: [
          [[3, -1, true, false]]
        ],
      },
      upDown: { intervals: [[false, [-2, 2]]] },
    },
  },
};

window.onload = main();