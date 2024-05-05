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
    statementBottom: ['ƒ(b) < 0', 'x < b.', 'ƒ(x) < ƒ(b)'],
    statementBottomGrid: [true],
    conditions: {
      conexa: { text: ' No tiene todo el R,', type: 3 },
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
        text: ' Dominio',
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {

          top: 1,
          domTop: [-8, 0.9],
        },
      },
      positiveNegative: { text: 'la altura de la curva no es correcta en b', intervals: [[false, [0.9, 1.1]]] },
    },
  },
  artifact_2: {
    statementBottom: ['ƒ(b) > 0', 'x < b.', 'ƒ(x) > ƒ(b)'],
    statementBottomGrid: [true],
    conditions: {
      conexa: { text: ' No tiene todo el R,', type: 3 },
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
        text: 'Dominio',
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          top: 1,
          domTop: [0.9, 8],
        },
      },
      positiveNegative: { text: ' Menor a 0', intervals: [[true, [0.9, 1.1]]] },
    },
  },
  artifact_3: {
    statementBottom: ['ƒ(b) < 0', 'x > b.', 'ƒ(x) > ƒ(b)'],
    statementBottomGrid: [true],
    conditions: {
      conexa: { text: ' No tiene todo el R,', type: 3 },
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
        text: 'Dominio',
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          bottom: 1,
          domBottom: [1.1, 8],
        },
      },
      positiveNegative: { text: ' Mayor a 0', intervals: [[false, [0.9, 1.1]]] },
    },
  },
  artifact_4: {
    statementBottom: ['ƒ(b) > 0', 'x > b.', 'ƒ(x) < ƒ(b)'],
    statementBottomGrid: [true],
    conditions: {
      conexa: { text: ' No tiene todo el R,', type: 3 },
      dom: {
        text:'Dominio',
        range: [[[1, 2, 8], [5, 6], 3, false, false]],
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          top: 1,
          domTop: [1.1, 8],
        },
      },
      positiveNegative: { text: ' Menor a 0', intervals: [[true, [0.9, 1.1]]] },
    },
  },
  artifact_5: {
    statementBottom: ['ƒ(b) = 0', 'x ≠ b.', 'ƒ(x) < ƒ(b)'],
    statementBottomGrid: [true],
    conditions: {
      conexa: { text: ' No cumple todo R,', type: 3 },
      dom: {
        text: 'Dominio',
        range: [[[1, 8], [5, 6], 3, false, false]],
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          top: 1,
        },
      },
      compare: { text: ' ƒ(b) = 0,', values: [[1, '=', 0]] },
    },
  },
  artifact_6: {
    statementBottom: ['ƒ(b) = 0', 'x < b, ƒ(x) < ƒ(b),', 'x > b, ƒ(x) > ƒ(b)'],
    statementBottomGrid: [true, true],
    conditions: {
      conexa: { type: 3 },
      dom: {
        text: 'Dominio',
        range: [[[1, 8], [4, 5], 3, false, false]],
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: [{ top: 1, domTop: [-8, 0.9] }, { bottom: 1, domBottom: [1.1, 8] }]
      },
      compare: { text: 'ƒ(b) = 0', values: [[1, '=', 0]] },
    },
  },
  artifact_7: {
    statementBottom: ['ƒ(b) = 0', 'x < b, ƒ(x) > ƒ(b),', 'x > b, ƒ(x) < ƒ(b)'],
    statementBottomGrid: [true, true],
    conditions: {
      conexa: { type: 3 },
      dom: {
        text: ' Dominio',
        range: [[[1, 2], [6, 5], 3, false, false]],
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: [{ bottom: 1, domBottom: [-8, 0.9] }, { top: 1, domTop: [1.1, 8] }]
      },
      compare: { text: 'ƒ(b) = 0', values: [[1, '=', 0]] },
    },
  },
  artifact_8: {
    statementBottom: ['ƒ(b) = 0', 'x < b, ƒ(x) > ƒ(b),', 'x > b, ƒ(x) > ƒ(b)'],
    statementBottomGrid: [true, true],
    conditions: {
      conexa: { type: 3 },
      dom: {
        text: 'Dominio',
        range: [[[1, 2], [4, 5], 3, false, false]],
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: [{ bottom: 1, domBottom: [-8, 0.9] }, { bottom: 1, domBottom: [1.1, 8] }]
      },
      compare: { text: 'ƒ(b) = 0', values: [[1, '=', 0]] },
    },
  },
  artifact_9: {
    statementBottom: ['ƒ(b) = 0', 'x < b, ƒ(x) < ƒ(b),', 'x > b, ƒ(x) < ƒ(b)'],
    statementBottomGrid: [true, true],
    conditions: {
      conexa: { type: 3 },
      dom: {
        text: ' Dominio',
        range: [[[1, 8], [6, 5], 3, false, false]],
      },
      xCote: {
        text: '¿Las alturas de ƒ cumplen con la condición?',
        coteReference: [{ top: 1, domTop: [-8, 0.9] }, { top: 1, domTop: [1.1, 8] }]
      },
      compare: { text: 'ƒ(b) = 0', values: [[1, '=', 0]] },
    },
  },
  artifact_10: {
    statementBottom: ['ƒ(b) < 0', 'x ≠ b, ', 'ƒ(x) < ƒ(b)'],
    statementBottomGrid: [true],
    conditions: {
      conexa: { type: 3 },
      dom: {
        text: 'Dominio',
        range: [[[1, 8], [6, 5], 3, false, false]],
      },
      xCote: {
        text: '¿Las alturas de ƒ cumplen con la condición?',
        coteReference: [{ top: 1 }]
      },
      positiveNegative: { text: ' Mayor a 0', intervals: [[false, [0.9, 1.1]]] },
    },
  },
};
generator();
defBoardDefault();
window.onload = main();
