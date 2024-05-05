let def = {
  htmlStringOne: {
    datadefault: [
      //[Bandera, numero de contenedores, numero de divs,[[array con el contenido de las condiciones ]] ]
      [
        1,
        'Escriba “sí” o “No” en cada recuadro □, de acuerdo a la curva ƒ del gráfico.',
      ],
    ],
  },
  artifact_1: {
    datadefault: [
      //[Bandera, numero de contenedores, numero de divs,[[array con el contenido de las condiciones ]].[[Respuestas Si o No]] ]
      [
        9,
        1,
        9,
        [
          [
            'board_1',
            'x ∈[a, b] entonces ƒ(x)∈[a, b]ㅤ',
            'x ∈[0, b] entonces ƒ(x)∈[0, b]ㅤ',
            'x ∈[a, 0] entonces ƒ(x)∈[a, 0]ㅤ',
            'x ∈(-∞, a] ∩ Dom(f) entonces ƒ(x)∈(-∞, a]',
            'x ∈[b, ∞) ∩ Dom(f) entonces ƒ(x)∈[b, ∞)ㅤ',
            'x ∈(-∞, b] ∩ Dom(f) entonces ƒ(x)∈(-∞, b]',
            'x ∈[a, ∞) ∩ Dom(f) entonces ƒ(x)∈[a, ∞)ㅤ',
            'x ∈(-∞, ∞) ∩ Dom(f) entonces ƒ(x)∈(-∞, ∞)',
          ],
        ],
        true,
        {
          conditions: [
            [
              ['si', 'sí'],
              ['no'],
              ['si', 'sí'],
              ['no'],
              ['no'],
              ['si', 'sí'],
              ['si', 'sí'],
              ['si', 'sí'],
            ],
          ],
        },
      ],
    ],
    changeContent: true,
  },

  artifact_2: {
    datadefault: [
      //[Bandera, numero de contenedores, numero de divs,[[array con el contenido de las condiciones ]].[[Respuestas Si o No]] ]
      [
        9,
        1,
        9,
        [
          [
            'board_2',
            'x ∈[a, b] entonces ƒ(x)∈(-∞, b]ㅤ',
            'x ∈[0, b] entonces ƒ(x)∈(-∞, a]ㅤ',
            'x ∈[a, 0] entonces ƒ(x)∈[a, b]ㅤ',
            'x ∈(-∞, a] ∩ Dom(f) entonces ƒ(x)∈[a, 0]ㅤ',
            'x ∈[b, ∞) ∩ Dom(f) entonces ƒ(x)∈[0, b]ㅤ',
            'x ∈(-∞, b] ∩ Dom(f) entonces ƒ(x)∈(-∞, ∞)',
            'x ∈[a, ∞) ∩ Dom(f) entonces ƒ(x)∈[b, ∞)ㅤ',
            'x ∈(-∞, ∞) ∩ Dom(f) entonces ƒ(x)∈[a, ∞)',
          ],
        ],
        true,
        {
          conditions: [
            [
              ['no'],
              ['no'],
              ['no'],
              ['no'],
              ['no'],
              ['si', 'sí'],
              ['no'],
              ['no'],
            ],
          ],
        },
      ],
    ],
    changeContent: true,
  },

  htmlStringTwo: {
    datadefault: [
      //[Bandera, numero de contenedores, numero de divs,[[array con el contenido de las condiciones ]] ]
      [
        1,
        'Grafique en cada cuadro una curva ƒ que cumpla con las condiciones indicadas. (La curva debe ser conexa)',
      ],
      [10, ['artifact_3', 'artifact_4']],
    ],
    changeContent: true,
  },

  artifact_3: {
    statementBottom: [
      'x ∈(-∞,a] entonces ƒ(x)∈(-∞,a]',
      'x ∈[a,b] entonces ƒ(x)∈[a,b]',
      'x ∈[b,∞] entonces ƒ(x)∈[b,∞)',
    ],
    changeContent: true,
    statementBottomGrid: [true, true],
    conditions: {
      conexa: { type: 1 },
      eRange: {
        cotas: [
          {
            top: {
              dom: [-4, -1.1],
              rang: -0.9,
            },
          },
          {
            top: {
              dom: [-1, 2],
              rang: 2.1,
            },
            bottom: {
              dom: [-1, 2],
              rang: -1.1,
            },
          },
          {
            top: {
              dom: [2, 4],
              rang: 4.1,
            },
            bottom: {
              dom: [2, 4],
              rang: 1.9,
            },
          },
        ],
      },
    },
  },

  artifact_4: {
    statementBottom: [
      'x ∈[a, b] entonces ƒ(x)∈[a,b]',
      'x ∈[a,0] entonces ƒ(x)∈[a,0]',
      'x ∈[0,b] entonces ƒ(x)∈[0,b]',
    ],
    changeContent: true,
    statementBottomGrid: [true, true],
    conditions: {
      conexa: { type: 1 },
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
              dom: [-0.99, 0],
              rang: 0.09,
            },
            bottom: {
              dom: [-0.99, 0],
              rang: -1.1,
            },
          },
          {
            top: {
              dom: [0, 1.99],
              rang: 2.1,
            },
            bottom: {
              dom: [0, 1.99],
              rang: -0.1,
            },
          },
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
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
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
    lines: [
      [[[-3.8, 2], [3.8, 2]], 2],
      [[[-3.8, -1], [3.8, -1]], 2],
      [[[-1, 3.8], [-1, -3.8]], 2],
      [[[2, 3.8], [2, -3.8]], 2],
    ],
  },
  board_1: {
    style: {
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
        yp: [2.4, -1],
        yv: ['b', 'a'],
        xp: [2.3, -1],
        xv: ['b', 'a'],
      },
      grid: false,
      boundingbox: [-4, 4, 4, -4],
      maxWidth: 350,
      maxHeight: 350,
      curveType: 2,
    },
    curves: [[[[-2.8, -0.9], [0, -0.45], [2, 0.3], [3.4, 2.2], [3.6, 2.8]]]],
    lines: [
      [[[-3.8, 2], [3.8, 2]], 2],
      [[[-3.8, -1], [3.8, -1]], 2],
      [[[-1, 3.8], [-1, -3.8]], 2],
      [[[2, 3.8], [2, -3.8]], 2],
    ],
  },
  board_2: {
    style: {
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
        yp: [2.4, -1],
        yv: ['b', 'a'],
        xp: [2.3, -1],
        xv: ['b', 'a'],
      },
      grid: false,
      boundingbox: [-4, 4, 4, -4],
      maxWidth: 350,
      maxHeight: 350,
      curveType: 2,
    },
    curves: [
      [
        [
          [-2.64, 2.67],
          [-1.03, 2.31],
          [0, 1.82],
          [0.97, 1.02],
          [1.63, 0.17],
          [2.05, -0.59],
          [2.32, -1.92],
          [2.39, -3.42],
        ],
      ],
    ],
    lines: [
      [[[-3.8, 2], [3.8, 2]], 2],
      [[[-3.8, -1], [3.8, -1]], 2],
      [[[-1, 3.8], [-1, -3.8]], 2],
      [[[2, 3.8], [2, -3.8]], 2],
    ],
  },
};

generator();
defBoardDefault();
main();