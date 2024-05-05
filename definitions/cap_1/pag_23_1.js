const defBoards = {
  board_0: {
    style: {
      grid: true,
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
  },
  board_1: {
    style: {
      grid: true,
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
  board_2: {
    style: {
      grid: true,
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
};
//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const def = {
  artifactHtml: {
    datadefault: [
      [1, ` Complete con una curva ƒ, cuyo dominio sea R y que satisfaga las condiciones indicadas. Sitúe primero (a,ƒ(a)) o
        (b,ƒ(b)), luego un x,
        sobre el eje x, que cumpla la condición dada para el x. En esa vertical escoja un punto (x,ƒ(x)), que cumpla con
        la condición indicada para ƒ(x).
        Esto le dará una idea de cómo dibujar la curva ƒ que cumple con las condiciones.`],
      [10, [
        'artifact_1',
        'artifact_2',
        'artifact_3',
        'artifact_4',
        'artifact_5'
      ]],
      [1, ' Dibuje una curva ƒ, que cumpla las condiciones indicadas.'],
      [10, [
        'artifact_6',
        'artifact_7',
        'artifact_8',
        'artifact_9',
        'artifact_10'
      ]],
    ],
  },
  artifact_1: {
    board: 'board_1',
    statementBottom: ['Si x ≠ b, x ≠ a.', 'ƒ(a) < ƒ(x) < ƒ(b)'],
    conditions: {
      conexa: {
        type: 3,
        text: ' La curva no es R,',
      },
      dom: {
        text: ' Dominio',
        range: [[[1], [5], 3, false, false]],
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          top: 1,
          bottom: -2
        },
      },
    },
  },
  artifact_2: {
    board: 'board_1',
    statementBottom: ['Si x ≠ b, x ≠ a.', 'ƒ(b) < ƒ(x) < ƒ(a)'],
    conditions: {
      conexa: {
        type: 3,
        text: ' La curva no es R',
      },
      dom: {
        text: 'Dominio',
        range: [[[1], [5], 3, false, false]],
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          bottom: 1,
          top: -2,
        },
      },
    },
  },
  artifact_3: {
    board: 'board_1',
    statementBottom: ['ƒ(b) ≤ ƒ(x) ≤ ƒ(a)'],
    conditions: {
      conexa: {
        type: 3,
        text: ' La curva no es R,',
      },
      dom: {
        text: 'Dominio',
        range: [[[1], [5], 3, false, false]],
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          bottom: 1,
          top: -2,
          bottomNoise: -0.06,
          topNoise: 0.06,
        },
      },
    },
  },
  artifact_4: {
    board: 'board_1',
    statementBottom: ['Si x ≠ a.', 'ƒ(a) < ƒ(x) ≤ ƒ(b)'],
    conditions: {
      conexa: {
        type: 3,
        text: ' No cumple con el R',
      },
      dom: {
        text: 'Dominio',
        range: [[[1], [5], 3, false, false]],
      },
      xCote: {
        text:'¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          top: 1,
          bottom: -2,
          topNoise: 0.06,
        },
      },
    },
  },
  artifact_5: {

    buttonsActive: {
      domKey: true,
      //rangKey: true,
    },
    statementBottom: ['a ≤ ƒ(x) ≤ ƒ(b)'],
    conditions: {
      axieX: [[-1, 'a'], [1, 'b']],
      conexa: {
        type: 3,
        text: ' La curva no es R,',
      },
      dom: {
        text: 'Dominio',
        range: [[[1], [5], 3, false, false]],
      },
      xCote: {
        xMod: true,
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          //topX: "b",
          bottomX: 'a',
          top: 'b',
          bottomNoise: -0.06,
          topNoise: 0.06,
        },
      },
    },
  },
  artifact_6: {
    board: 'board_2',
    statementBottom: ['x < b', 'ƒ(x) < ƒ(b)'],
    conditions: {
      conexa: {
        type: 3,
        text: ' La curva no es R,',
      },
      dom: {
        range: [[[1,8], [4, 5, 6], 3, false, false]],
        text: 'Dominio',
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: { top: 1, domTop: [-4, 0.95] },
      },

    },
  },
  artifact_7: {
    board: 'board_2',
    statementBottom: ['x < b', 'ƒ(x) > ƒ(b)'],
    conditions: {
      conexa: {
        type: 3,
        text: ' La curva no es R,',
      },
      dom: {
        text: 'Dominio',
        range: [[[1, 2], [4, 5, 6], 3, false, false]],
      },
      xCote: {
        text:'¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: { bottom: 1, domBottom: [-4, 0.95] },
      },
    },
  },
  artifact_8: {
    board: 'board_2',
    statementBottom: ['x > b', 'ƒ(x) > ƒ(b)'],
    conditions: {
      conexa: {
        type: 3,
        text: ' La curva no es R,',
      },
      dom: {
        text: ' Dominio',
        range: [[[1, 2, 8], [5, 4], 3, false, false]],
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: { bottom: 1, domBottom: [1.05, 4] },
      },
    },
  },
  artifact_9: {
    board: 'board_2',
    statementBottom: ['x > b.', 'ƒ(x) < ƒ(b)'],
    conditions: {
      conexa: {
        type: 3,
        text: ' La curva no es R,',
      },
      dom: {
        text: 'Dominio',
        range: [[[1, 2, 8, 3, 7], [5, 6], 3, false, false]],
      },
      xCote: {
        text:'¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: { top: 1, topNoise: 0.02, domTop: [1.05, 4] },
      },
    },
  },
  artifact_10: {
    board: 'board_2',
    statementBottom: ['x ≠ b', 'ƒ(x) < ƒ(b)'],
    conditions: {
      conexa: {
        type: 3,
        text: ' La curva no es R,',
      },
      dom: {
        text: 'Dominio',
        range: [[[1, 8], [6, 5], 3, false, false]]
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: { top: 1 },
      },

    },
  },
};

generator();
defBoardDefault();
window.onload = main();