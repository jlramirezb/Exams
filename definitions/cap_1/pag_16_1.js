let def = {
  artifact_Text: {
    datadefault: [
      //[Bandera, numero de contenedores, numero de divs,[[array con el contenido de las condiciones ]].[[Respuestas Si o No]] ] 
      [1, 'Complete en cada caso con una curva ƒ que cumpla con las desigualdades indicadas.'],

    ],
    changeContent: true,
  },
  artifact: {
    datadefault: [
      //[Bandera, numero de contenedores, numero de divs,[[array con el contenido de las condiciones ]].[[Respuestas Si o No]] ] 
      [10, ['artifact_1', 'artifact_2', 'artifact_3', 'artifact_4', 'artifact_5']],

    ],
    changeContent: true
  },

  artifact_1: {
    changeContent: true,
    statementBottom: ['ƒ(a) < ƒ(c) < ƒ(b)'],
    statementBottomGrid: [true],
    conditions: {
      xCote: {
        coteReference: [{
          top: 0.9,
          domTop: [2.9, 3.1]
        },
        {
          top: 2.9,
          domTop: [-3.1, -2.9]
        }]
      },
      //positiveNegative:  top: 3,{ intervals: [[false, [-3.1, -2.9]],[true, [0.9, 1.1]], [false, [2.9, 3.1]]] },
    },
  },
  artifact_2: {
    board: 'board_1',
    changeContent: true,
    statementBottom: ['ƒ(a) < ƒ(c) < ƒ(b)'],
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
  artifact_3: {
    board: 'board_2',
    changeContent: true,
    statementBottom: ['ƒ(a) < ƒ(c) < ƒ(b)'],
    statementBottomGrid: [true],
    conditions: {
      xCote: {
        coteReference: [{
          top: -2.9,
          domTop: [2.9, 3.1]
        },
        {
          top: 2.9,
          domTop: [0.9, 1.1]
        }]
      },
      //positiveNegative:  top: 3,{ intervals: [[false, [-3.1, -2.9]],[true, [0.9, 1.1]], [false, [2.9, 3.1]]] },
    },
  },
  artifact_4: {
    board: 'board_3',
    changeContent: true,
    statementBottom: ['ƒ(a) < ƒ(c) < ƒ(b)'],
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
    board: 'board_4',
    changeContent: true,
    statementBottom: ['ƒ(a) < ƒ(c) < ƒ(b)'],
    statementBottomGrid: [true],
    conditions: {
      xCote: {
        coteReference: [{
          top: 0.9,
          domTop: [-3.1, -2.9]
        },
        {
          top: -2.9,
          domTop: [2.9, 3.1]
        }]
      },
      //positiveNegative:  top: 3,{ intervals: [[false, [-3.1, -2.9]],[true, [0.9, 1.1]], [false, [2.9, 3.1]]] },
    },
  },

  artifact_Text_1: {
    datadefault: [
      //[Bandera, numero de contenedores, numero de divs,[[array con el contenido de las condiciones ]].[[Respuestas Si o No]] ] 
      [1, 'Grafique en cada recuadro una curva ƒ que satisfaga las condiciones indicadas.'],

    ],
    changeContent: true
  },
  artifactContent_1: {
    datadefault: [
      //[Bandera, numero de contenedores, numero de divs,[[array con el contenido de las condiciones ]].[[Respuestas Si o No]] ] 
      [10, ['artifact_6', 'artifact_7', 'artifact_8']],

    ],
    changeContent: true
  },
  artifact_6: {
    board: 'board_6',
    changeContent: true,
    statementBottom: ['ƒ(b) > ƒ(a) ㅤyㅤ ƒ(a) = b'],
    statementBottomGrid: [true],
    conditions: {
      compare: {
        values: [
          [-1, '=', 2],
          [2, '>', 2],
        ],
      },
    },
  },
  artifact_7: {
    board: 'board_6',
    changeContent: true,
    statementBottom: ['ƒ(b) > ƒ(a) ㅤyㅤ ƒ(b) < 0'],
    statementBottomGrid: [true],
    conditions: {
      compare: {
        values: [
          [2, '<', 0],

        ],
      },
      xCote: {
        coteReference: [
          {
            top: 2,
            domTop: [-1.1, -0.9],
          },
        ],
      },
    },
  },
  artifact_8: {
    board: 'board_6',
    changeContent: true,
    statementBottom: ['ƒ(a) = b ㅤyㅤ ƒ(b) = a'],
    statementBottomGrid: [true, true],
    conditions: {
      compare: {
        values: [
          [-1, '=', 2],
          [2, '=', -1]

        ],
      },
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
      grid: false,
      maxWidth: 310,
      maxHeight: 300,

      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      boundingbox: [-4, 4, 4, -4],
    },
    lines: [
      [[[-1, 0, false, 'a'], [-1, 0]], 0],
      [[[3, 0, false, 'b'], [3, 0],], 0],
      [[[0, -1, false, 'a'], [0, -1]], 0],
      [[[0, 3, false, 'b'], [0, 3],], 0],

      [[[-1, -3.5, false, ''], [-1, 3.5],], 2],
      [[[3, -3.5, false, ''], [3, 3.5],], 2],
      [[[4, 3, false, ''], [-3, 3],], 2],
      [[[4, -1, false, ''], [-3, -1],], 2],

    ],
    curves: [
      [[[-1, 0], [-0.4, 2.5], [0, 3], [0.4, 3], [1, 2.4], [3, 0]]],
    ],
    points: [
      [-1, 0], [3, 0], [0, -1], [0, 3]

    ],
  },

  board_6: {
    style: {
      axis: [false, true, true],
      valueAxis: {
        yd: [
          [0, 0],
          [0, 1],
        ],
        xd: [
          [0, 0],
          [1, 0],
        ],
        yp: [2.4, -1],
        yv: ['b', 'a'],
        xp: [2.3, -1],
        xv: ['b', 'a'],
      },
      grid: false,
      boundingbox: [-4, 4, 4, -4],
      maxWidth: 350,
      maxHeight: 350,
    },
    curves: [[[]]],
    lines: [
      [
        [
          [-3.8, 2],
          [3.8, 2],
        ],
        2,
      ],
      [
        [
          [-3.8, -1],
          [3.8, -1],
        ],
        2,
      ],
      [
        [
          [-1, 3.8],
          [-1, -3.8],
        ],
        2,
      ],
      [
        [
          [2, 3.8],
          [2, -3.8],
        ],
        2,
      ],
    ],
  },


};

generator();
defBoardDefault();
main();