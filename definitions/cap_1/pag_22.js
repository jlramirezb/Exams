let def = {
  artifactsContent: {
    datadefault: [
      //[Bandera, numero de contenedores, numero de divs,[[array con el contenido de las condiciones ]] ]
      [
        10,
        [
          'artifact_1',
          'artifact_2',
          'artifact_3',
          'artifact_4',
          'artifact_5',
          'artifact_6',
          'artifact_7',
        ],
      ],
    ],
  },
  artifact_1: {
    statementBottom: [
      'x ∈[a, b] entonces ƒ(x)∈[a, b]',
      'x ∈[a, 0] entonces ƒ(x)∈[0, b]',
      'x ∈[0, b] entonces ƒ(x)∈[a, 0]',
    ],
    statementBottomGrid: [true, true],
    conditions: {
      eRange: {
        cotas: [
          {
            top: {
              dom: [-0.99, 1.99],
              rang: 2.1,
            },
            bottom: {
              dom: [-0.99, 1.99],
              rang: -1.1,
            },
          },
          {
            top: {
              dom: [-0.99, -0.05],
              rang: 2.1,
            },
            bottom: {
              dom: [-1, -0.05],
              rang: -0.1,
            },
          },
          {
            top: {
              dom: [0.01, 2.1],
              rang: 0.1,
            },
            bottom: {
              dom: [0.01, 2.1],
              rang: -1.1,
            },
          },
        ],
      },
    },
  },
  artifact_2: {
    statementBottom: [
      'x ∈(-∞, a] entonces ƒ(x)∈[b, ∞)',
      'x ∈[a, b] entonces ƒ(x)∈[a, b]',
      'x ∈[b, ∞) entonces ƒ(x)∈(-∞, a]',
    ],
    statementBottomGrid: [true, true],
    conditions: {
      eRange: {
        cotas: [
          {
            top: {
              dom: [-4, -1.1],
              rang: 4,
            },
            bottom: {
              dom: [-4, -1.1],
              rang: 1.99,
            },
          },
          {
            top: {
              dom: [-0.99, 2],
              rang: 2.1,
            },
            bottom: {
              dom: [-0.99, 2],
              rang: -1.1,
            },
          },
          {
            top: {
              dom: [2.1, 4],
              rang: -0.99,
            },
            bottom: {
              dom: [2.1, 4],
              rang: -4,
            },
          },
        ],
      },
    },
  },
  artifact_3: {
    statementBottom: [
      'x ∈[a, b] entonces ƒ(x)∈(-∞, b]ㅤㅤㅤㅤ',
      'x ∈(-∞, b] entonces ƒ(x)∈[a, 0] ㅤㅤ¡Ojo!',
      'x ∈[b, ∞) entonces ƒ(x)∈[0, b]ㅤㅤㅤㅤ',
    ],
    statementBottomGrid: [true, true],
    conditions: {
      eRange: {
        cotas: [
          {
            top: {
              dom: [-0.99, 1.95],
              rang: 2.1,
            },
            bottom: {
              dom: [-0.99, 1.95],
              rang: -1.1,
            },
          },
          {
            top: {
              dom: [-4, 1.95],
              rang: 0.01,
            },
            bottom: {
              dom: [-4, 1.95],
              rang: -1.1,
            },
          },
          {
            top: {
              dom: [2.01, 4],
              rang: 2.1,
            },
            bottom: {
              dom: [2.01, 4],
              rang: -0.05,
            },
          },
        ],
      },
    },
  },
  artifact_4: {
    statementBottom: [
      'x ∈(-∞, a] entonces ƒ(x)∈[a, 0]',
      'x ∈[0, ∞) entonces ƒ(x)∈[b, ∞)',
      'x ∈[a, 0] entonces ƒ(x)∈[0, b]',
    ],
    statementBottomGrid: [true, true],
    conditions: {
      eRange: {
        cotas: [
          {
            top: {
              dom: [-4, -1.05],
              rang: 0.1,
            },
            bottom: {
              dom: [-4, -1.05],
              rang: -1.05,
            },
          },
          {
            top: {
              dom: [0.05, 4],
              rang: 4,
            },
            bottom: {
              dom: [0.05, 4],
              rang: 1.98,
            },
          },
          {
            top: {
              dom: [-0.98, -0.05],
              rang: 2.1,
            },
            bottom: {
              dom: [-0.98, -0.05],
              rang: -0.01,
            },
          },
        ],
      },
    },
  },
  artifact_5: {
    statementBottom: ['ƒ(b)>b ㅤ y ㅤ ƒ(a)>b'],
    conditions: {
      compare: {
        values: [
          [2, '>', 2],
          [-1, '>', 2],
        ],
      },
    },
  },
  artifact_6: {
    statementBottom: ['ƒ(a)>ƒ(b)  ㅤyㅤ   b> ƒ(a) >0'],
    conditions: {
      xCote: {
        coteReference: [
          {
            top: -1,
            domTop: [1.9, 2.1],
          },
        ],
      },
      compare: {
        values: [
          [-1, '<', 2],
          [-1, '>', 0],
        ],
      },
    },
  },
  artifact_7: {
    statementBottom: ['ƒ(a)=a  ㅤyㅤ   ƒ(b)=a'],
    conditions: {
      compare: {
        values: [
          [-1, '=', -1],
          [2, '=', -1],
        ],
      },
    },
  },
};

let defBoards = {
  board_0: {
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
