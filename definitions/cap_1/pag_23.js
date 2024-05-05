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
        'artifact_5',
        'artifact_6',
        'artifact_7',
        'artifact_8',
        'artifact_9',
        'artifact_10',
      ]],
    ],
  },
  artifact_1: {
    board: 'board_1',
    statementBottom: ['Si x ≠ b.', 'ƒ(x) < ƒ(b)'],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 8], [5, 6], 3, false, false]],
        text: 'Dominio'
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          top: 1,
        },
      },
    },
  },
  artifact_2: {
    board: 'board_1',
    statementBottom: ['Si x ≠ a.', 'ƒ(x) < ƒ(a)'],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
        text:'Dominio',
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          top: -2,
        },
      },
    },
  },
  artifact_3: {
    board: 'board_1',
    statementBottom: ['Si x ≠ b.', 'ƒ(x) > ƒ(b)'],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
        text:'Dominio',
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          bottom: 1,
        },
      },
    },
  },
  artifact_4: {
    board: 'board_1',
    statementBottom: ['Si x ≠ a.', 'ƒ(x) > ƒ(a)'],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
        text:'Dominio',
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          bottom: -2,
        },
      },

    },
  },
  artifact_5: {
    buttonsActive: {
      domKey: false,
    },
    board: 'board_1',
    statementBottom: ['Si x ≠ a.', 'ƒ(x) > a'],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2], [4, 5], 3, false, false]],
        text:'Dominio',
      },
      cotes: {
        text: ' No cumple ƒ(x) > a',
        bottom: {
          rang: -2
        },
      },
    },
  },
  artifact_6: {
    board: 'board_1',
    statementBottom: ['ƒ(b) < 0', 'Si x ≠ b.', 'ƒ(x) < ƒ(b)'],
    statementBottomGrid: [true],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
        text:'Dominio'
      },
      cotes: {
        text: ' La altura de la curva no cumple la condición',
        top: {
          dom: [0.95, 1.05],
          rang: 0
        },
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          top: 1,
        },
      },
    },
  },
  artifact_7: {
    board: 'board_1',
    statementBottom: ['ƒ(a) > 0', 'Si x ≠ a.', 'ƒ(x) < ƒ(a)'],
    statementBottomGrid: [true],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
        text:'Dominio',
      },
      cotes: {
        text: ' No cumple la primera condición',
        bottom: {
          dom: [-2.05, -1.95],
          rang: 0
        },
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          top: -2,
        },
      },
    },
  },
  artifact_8: {
    board: 'board_1',
    statementBottom: ['ƒ(b) > 0', 'Si x ≠ b.', 'ƒ(x) > ƒ(b)'],
    statementBottomGrid: [true],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
        text:'Dominio',
      },
      cotes: {
        text: ' No cumple la primera condición',
        bottom: {
          dom: [0.95, 1.05],
          rang: 0
        },
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          bottom: 1,
        },
      },
    },
  },
  artifact_9: {
    board: 'board_1',
    statementBottom: ['ƒ(a) < 0', 'Si x ≠ a.', 'ƒ(x) > ƒ(a)'],
    statementBottomGrid: [true],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
        text:'Dominio'
      },
      cotes: {
        text: ' No cumple la primera condición',
        top: {
          dom: [-2.05, -1.95], rang: 0,
        },
      },
      xCote: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          bottom: -2,
        },
      },
    },
  },
  artifact_10: {
    buttonsActive: {
      domKey: true,
    },
    board: 'board_0',
    statementBottom: ['a > 0', 'Si x ≠ a.', 'ƒ(x) > a'],
    statementBottomGrid: [true],
    conditions: {
      axieX: [[1, 'a']],
      dom: {
        range: [[[1, 2], [4, 5], 3, false, false]],
        text:'Dominio'
      },
      xCote: {
        xMod: true,
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: { //contiene las características de lo que se quiere condicionar
          bottomX: 'a',
        },
      },
    },
  },
};

generator();
defBoardDefault();
window.onload = main();