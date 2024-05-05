
const defBoards = {
  board_0: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3, 3, 3, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],		        /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
        colory: '#000000',
        colorx: '#000000'
      },
    },
    points: [
      [1.0, 0, true, 'b', 2, 'black']
    ],
  },
  board_1: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3, 3, 3, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],		        /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
        colory: '#000000',
        colorx: '#000000'
      },
    },
    points: [
      [-2, 0, true, 'a', 2, 'black'],
      [1.0, 0, true, 'b', 2, 'black']
    ],
  },
};
// si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const def = {
  artifactHtml: {
    changeContent: true,
    datadefault: [
      [1, ` Complete con una curva ƒ, cuyo dominio sea R y que satisfaga las condiciones indicadas. Sitúe primero (a,ƒ(a)) o
        (b,ƒ(b)), luego un x,
        sobre el eje x, que cumpla la condición dada para el x. En esa vertical escoja un punto (x,ƒ(x)), que cumpla con
        la condición indicada para ƒ(x).
        Esto le dará una idea de cómo dibujar la curva ƒ que cumple con las condiciones.`],
      [10,
        [
          'artifact_1',
          'artifact_2',
          'artifact_3',
          'artifact_4',
          'artifact_5',
          'artifact_6',
          'artifact_7',
          'artifact_8',
          'artifact_9',
          'artifact_10',
        ],
      ],

    ],
  },
  artifact_1: {
    board: 'board_1',
    statementBottom: ['Si a < x < b,', 'ƒ(a) < ƒ(x) < ƒ(b)'],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [6, 4, 5], 3, false, false]],
        text:'Dominio' 
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          top: 1,
          domTop: [-2, 1],
          bottom: -2,
          domBottom: [-2, 1],
        },
      },
    },
  },
  artifact_2: {
    board: 'board_1',
    statementBottom: ['Si a < x < b,', 'ƒ(a) > ƒ(x) > ƒ(b)'],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [6, 4, 5], 3, false, false]],
        text:'Dominio' 
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          top: -2,
          domTop: [-2, 1],
          bottom: 1,
          domBottom: [-2, 1],
        },
      },
    },
  },
  artifact_3: {
    board: 'board_1',
    statementBottom: ['Si a < x,', 'ƒ(a) > ƒ(x) > ƒ(b)'],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [6, 4, 5], 3, false, false]],
        text:'Dominio' 
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          top: -2,
          domTop: [-2, 8],
          bottom: 1,
          domBottom: [-2, 8],
        },
      },
    },
  },
  artifact_4: {
    board: 'board_1',
    statementBottom: ['Si x > b,', 'ƒ(a) > ƒ(x) > ƒ(b)'],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [6, 4, 5], 3, false, false]],
        text:'Dominio' 
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          top: -2,
          domTop: [1.1, 8],
          bottom: 1,
          domBottom: [1.1, 8],
        },
      },
    },
  },
  artifact_5: {
    board: 'board_1',
    statementBottom: ['Si x > b ㅤ o ㅤ x < a,', 'ƒ(a) > ƒ(x) > ƒ(b)'],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [6, 4, 5], 3, false, false]],
        text:'Dominio' 
      },

      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: [{
          top: -2,
          domTop: [-8, -2.1],
          bottom: 1,
          domBottom: [1.1, 8],
        }, {
          top: -2,
          domTop: [1, 8],
          bottom: 1,
          domBottom: [1, 8],
        }],
      },
    },
  },
  artifact_6: {
    board: 'board_1',
    statementBottom: ['Si a < x < b', 'ƒ(a) < ƒ(x) < ƒ(b)', 'Si x < a ㅤ o ㅤ x > b', 'ƒ(b) > ƒ(x)'],
    statementBottomGrid: [false, true],
    conditions: {

      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
        text: 'Dominio'
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: [{
          top: 1,
          bottom: -2,
          domBottom: [-2, 1],
        }],
      },
    },
  },
  artifact_7: {
    board: 'board_1',
    statementBottom: ['Si a < x < b,', 'ƒ(a) > ƒ(x) > ƒ(b)', 'Si x > b ㅤ o ㅤ x < a', 'ƒ(x) > ƒ(b)'],
    statementBottomGrid: [false, true],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
        text: 'Dominio'
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: [{
          top: -2,
          domTop: [-2, 1],
          bottom: 1,
        }],
      },
    },
  },
  artifact_8: {
    board: 'board_1',
    statementBottom: ['Si a < x,', 'ƒ(a) > ƒ(x) ≥ ƒ(b)', 'Si a > x,', 'ƒ(a) < ƒ(x)'],
    statementBottomGrid: [false, true],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
        text: 'Dominio'
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: [{
          top: -2,
          domTop: [-2, 8],
          bottom: 1,
          domBottom: [-2, 8],
          bottomNoise: -0.06,
          topNoise: 0.06,
        }, {
          bottom: -2,
          bottomNoise: -0.06,
          domBottom: [-8, -2.1],
        }],
      },
    },
  },
  artifact_9: {
    board: 'board_1',
    statementBottom: ['Si x > b', 'ƒ(a) > ƒ(x) > ƒ(b)', 'Si x < b', 'ƒ(x) > ƒ(b)'],
    statementBottomGrid: [false, true],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2], [4, 5, 6], 3, false, false]],
        text: 'Dominio'
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: [{
          top: -2,
          domTop: [1, 8],
          bottom: 1,
          domBottom: [1, 8],
        }, {
          bottom: 1,
          domBottom: [-8, 1],
        }],
      },
    },
  },
  artifact_10: {
    board: 'board_1',
    statementBottom: ['Si x > b ㅤ o ㅤ x < a,', 'ƒ(a) > ƒ(x) > ƒ(b)', 'ƒ(a) = 0'],
    statementBottomGrid: [false, true],
    conditions: {
      conexa: { type: 3 },

      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
        text: 'Dominio'
      },

      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: [{
          top: -2,
          domTop: [1, 8],
          bottom: 1,
          domBottom: [1, 8],
        }, {
          top: -2,
          domTop: [-8, -2],
          bottom: 1,
          domBottom: [-8, -2],
        }],
      },

    },
  },
};

generator();
defBoardDefault();
window.onload = main();
