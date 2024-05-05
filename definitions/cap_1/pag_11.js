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
    statementBottom: 'Dominio = [0,3], creciente.',
    conditions: {
      conexa: { type: 3 },
      upDown: { intervals: [[true, [0, 3]]], },
      dom: {
        range: [[0, 3, 3, false, false]],
      },
    },
  },

  artifact_2: {
    statementBottom: 'Dominio = [0,3], creciente, maximo 2',
    conditions: {
      conexa: { type: 3 },
      upDown: { intervals: [[true, [0, 3]]], },
      dom: {
        range: [[0, 3, 3, false, false]],
      },
      max: {///
        maxTotal: 2,
      },
    },
  },

  artifact_3: {
    statementBottom: 'Dominio = [0,3], creciente, minimo 2',
    conditions: {
      conexa: { type: 3 },
      upDown: { intervals: [[true, [0, 3]]], },
      dom: {
        range: [[0, 3, 3, false, false]],
      },
      min: {///
        minTotal: 2,
      },

    },
  },

  artifact_4: {
    conexa: { type: 3 },
    statementBottom: 'Dominio = R, creciente.',
    conditions: {
      dom: {
        range: [[[1, 8], [4, 5], 3, false, false]],
      },
      upDown: { intervals: [[true, [-4, 4]]] },
    },
  },

  artifact_5: {
    conexa: { type: 3 },
    statementBottom: 'Dominio = R, creciente, positiva.',
    conditions: {
      dom: {
        range: [[[1], [4, 5], 3, false, false]],
      },
      upDown: { intervals: [[true, [-4, 4]]] },
      positiveNegative: { intervals: [[true, [-4, 4]]] },
    },
  },

  artifact_6: {
    conexa: { type: 3 },
    statementBottom: 'Dominio = R, creciente, negativa',
    conditions: {
      dom: {
        range: [[[1, 8], [5], 3, false, false]],
      },
      upDown: { intervals: [[true, [-4, 4]]] },
      positiveNegative: { intervals: [[false, [-4, 4]]] },
    },
  },
};

window.onload = main();