let def = {
  artifact_Text: {
    datadefault: [
      //[Bandera, numero de contenedores, numero de divs,[[array con el contenido de las condiciones ]].[[Respuestas Si o No]] ] 
      [1, 'En cada plano cartesiano dibuje una curva ƒ que cumpla con las condiciones.'],

    ],
    changeContent: true,
  },
  artifact: {
    datadefault: [
      //[Bandera, numero de contenedores, numero de divs,[[array con el contenido de las condiciones ]].[[Respuestas Si o No]] ] 
      [10, ['artifact_1', 'artifact_2', 'artifact_3', 'artifact_4', 'artifact_5', 'artifact_6']],

    ],
    changeContent: true
  },

  artifact_1: {
    changeContent: true,
    statementBottom: ['ƒ(a) < ƒ(c)', 'ƒ(a) < ƒ(b)'],
    statementBottomGrid: [true],
    conditions: {
      xCote: {
        coteReference: [{
          top: 2.9,
          domTop: [-3.1, -2.9]
        },
        {
          top: 0.9,
          domTop: [-3.1, -2.9]
        }]
      },
      //positiveNegative:  top: 3,{ intervals: [[false, [-3.1, -2.9]],[true, [0.9, 1.1]], [false, [2.9, 3.1]]] },
    },
  },
  artifact_2: {
    changeContent: true,
    statementBottom: ['ƒ(a) < ƒ (c)', 'ƒ (a) > ƒ(b)'],
    statementBottomGrid: [true],
    conditions: {
      xCote: {
        coteReference: [{
          top: 2.9,
          domTop: [-3.1, -2.9]
        },
        {
          top: -2.9,
          domTop: [0.9, 1.1]
        }]
      },
      //positiveNegative:  top: 3,{ intervals: [[false, [-3.1, -2.9]],[true, [0.9, 1.1]], [false, [2.9, 3.1]]] },
    },
  },
  artifact_3: {
    changeContent: true,
    statementBottom: ['ƒ (a) < ƒ(b)', 'ƒ (b) < ƒ(c)'],
    statementBottomGrid: [true],
    conditions: {
      xCote: {
        coteReference: [{
          top: 2.9,
          domTop: [0.9, 1.1]
        },
        {
          top: 0.9,
          domTop: [-3.1, -2.9]
        }]
      },
      //positiveNegative:  top: 3,{ intervals: [[false, [-3.1, -2.9]],[true, [0.9, 1.1]], [false, [2.9, 3.1]]] },
    },
  },
  artifact_4: {
    changeContent: true,
    statementBottom: ['ƒ(a) > ƒ(b)', 'ƒ (b) > ƒ(c)'],
    statementBottomGrid: [true],
    conditions: {
      xCote: {
        coteReference: [{
          top: -2.9,
          domTop: [0.9, 1.1]
        },
        {
          top: 0.9,
          domTop: [2.9, 3.1]
        }]
      },
      //positiveNegative:  top: 3,{ intervals: [[false, [-3.1, -2.9]],[true, [0.9, 1.1]], [false, [2.9, 3.1]]] },


    },
  },
  artifact_5: {
    changeContent: true,
    statementBottom: ['ƒ(b) < ƒ(c)', 'ƒ(a) > ƒ(b)'],
    statementBottomGrid: [true],
    conditions: {
      xCote: {
        coteReference: [{
          top: -2.9,
          domTop: [0.9, 1.1]
        },
        {
          top: 2.9,
          domTop: [0.9, 1.1]
        }]
      },
      //positiveNegative:  top: 3,{ intervals: [[false, [-3.1, -2.9]],[true, [0.9, 1.1]], [false, [2.9, 3.1]]] },
    },
  },
  artifact_6: {
    changeContent: true,
    statementBottom: ['ƒ(b) > ƒ(c)', 'ƒ(a) > ƒ(b)'],
    conditions: {
      xCote: {
        coteReference: [{
          top: -2.9,
          domTop: [0.9, 1.1]
        },
        {
          top: 0.9,
          domTop: [2.9, 3.1]
        }]
      },
      //positiveNegative:  top: 3,{ intervals: [[false, [-3.1, -2.9]],[true, [0.9, 1.1]], [false, [2.9, 3.1]]] },
    },
  },
  artifact_Text_1: {
    datadefault: [
      //[Bandera, numero de contenedores, numero de divs,[[array con el contenido de las condiciones ]].[[Respuestas Si o No]] ] 
      [1, 'En cada plano cartesiano dibuje una curva ƒ que cumpla con las condiciones.'],

    ],
    changeContent: true
  },
  artifactContent_1: {
    datadefault: [
      //[Bandera, numero de contenedores, numero de divs,[[array con el contenido de las condiciones ]].[[Respuestas Si o No]] ] 
      [10, ['artifact_7', 'artifact_8', 'artifact_9', 'artifact_10', 'artifact_11', 'artifact_12']],

    ],
    changeContent: true
  },
  artifact_7: {
    statementBottom: ['ƒ(a) < 0', 'ƒ(b) > 0', 'ƒ(c) < 0'],
    statementBottomGrid: [true, true],
    conditions: {
      positiveNegative: { text: 'No cumple con las condiciones', intervals: [[false, [-3.1, -2.9]], [true, [0.9, 1.1]], [false, [2.9, 3.1]]] },
    },
  },
  artifact_8: {
    board: 'board_1',
    changeContent: true,
    statementBottom: ['ƒ(a) < 0', 'ƒ(b) > 0', 'ƒ(c) < 0'],
    statementBottomGrid: [true, true],
    conditions: {
      positiveNegative: { text: 'No cumple con las condiciones', intervals: [[false, [-3.1, -2.9]], [false, [0.9, 1.1]], [true, [2.9, 3.1]]] },
    },
  },
  artifact_9: {
    board: 'board_2',
    changeContent: true,
    statementBottom: ['ƒ(a) < 0', 'ƒ(b) > 0', 'ƒ(c) < 0'],
    statementBottomGrid: [true, true],
    conditions: {
      positiveNegative: { text: 'No cumple con las condiciones', intervals: [[true, [-3.1, -2.9]], [false, [0.9, 1.1]], [false, [2.9, 3.1]]] },
    },
  },
  artifact_10: {
    board: 'board_3',
    changeContent: true,
    statementBottom: ['ƒ(a) < 0', 'ƒ(b) > 0', 'ƒ(c) < 0'],
    statementBottomGrid: [true, true],
    conditions: {
      positiveNegative: { text: 'No cumple con las condiciones', intervals: [[true, [-3.1, -2.9]], [false, [0.9, 1.1]], [false, [2.9, 3.1]]] },
    },
  },
  artifact_11: {
    board: 'board_4',
    changeContent: true,
    statementBottom: ['ƒ(a) < 0', 'ƒ(b) > 0', 'ƒ(c) < 0'],
    statementBottomGrid: [true, true],
    conditions: {
      positiveNegative: { text: 'No cumple con las condiciones', intervals: [[false, [-3.1, -2.9]], [true, [0.9, 1.1]], [false, [2.9, 3.1]]] },
    },
  },
  artifact_12: {
    board: 'board_5',
    changeContent: true,
    statementBottom: ['ƒ(a) < 0', 'ƒ(b) > 0', 'ƒ(c) < 0'],
    statementBottomGrid: [true, true],
    conditions: {
      positiveNegative: { text: 'No cumple con las condiciones', intervals: [[false, [-3.1, -2.9]], [false, [0.9, 1.1]], [true, [2.9, 3.1]]] },
    },
  },




}

let defBoards = {
  board_0: {
    style: {
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],

      },
      grid: false,
      boundingbox: [-4, 4, 4, -4],
      maxWidth: 350,
      maxHeight: 350,
    },
    points: [
      [-3, 0, true, 'a'], [1, 0, true, 'b'], [3, 0, true, 'c']

    ],
  },
  board_1: {
    style: {
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],

      },
      grid: false,
      boundingbox: [-4, 4, 4, -4],
      maxWidth: 350,
      maxHeight: 350,
    },
    points: [
      [-3, 0, true, 'a'], [1, 0, true, 'c'], [3, 0, true, 'b']

    ],
  },
  board_2: {
    style: {
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],

      },
      grid: false,
      boundingbox: [-4, 4, 4, -4],
      maxWidth: 350,
      maxHeight: 350,
    },
    points: [
      [-3, 0, true, 'b'], [1, 0, true, 'a'], [3, 0, true, 'c']

    ],
  },
  board_3: {
    style: {
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],

      },
      grid: false,
      boundingbox: [-4, 4, 4, -4],
      maxWidth: 350,
      maxHeight: 350,
    },
    points: [
      [-3, 0, true, 'b'], [1, 0, true, 'c'], [3, 0, true, 'a']

    ],
  },
  board_4: {
    style: {
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],

      },
      grid: false,
      boundingbox: [-4, 4, 4, -4],
      maxWidth: 350,
      maxHeight: 350,
    },
    points: [
      [-3, 0, true, 'c'], [1, 0, true, 'b'], [3, 0, true, 'a']

    ],
  },
  board_5: {
    style: {
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],

      },
      grid: false,
      boundingbox: [-4, 4, 4, -4],
      maxWidth: 350,
      maxHeight: 350,
    },
    points: [
      [-3, 0, true, 'c'], [1, 0, true, 'a'], [3, 0, true, 'b']

    ],
  }

};

generator();
defBoardDefault();
main();