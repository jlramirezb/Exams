const defBoards = {
  board_0: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],		        /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
        xp: [1],
        xv: ['1'],
        yp: [1],
        yv: ['1'],
        colory: '#000000',
        colorx: '#000000'
      },
    },
  },
  board_1: {
    style: {
      grid: true,

      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],		        /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
        xp: [1],
        xv: ['1'],
        yp: [1],
        yv: ['1'],
        colory: '#000000',
        colorx: '#000000'
      },
    },
    curves: [
      [[[0.4, 3.1], [1, 1], [1.65, 3.1]]],
      [[[-3.3, 0.3], [-2.8, 0.7], [-2.7, 1], [-2, 2], [-1, 0]]],
      [[[2, -2], [2.5, -1], [3, -2], [3.4, -3]]],
    ],
    points: [
      [-3.45, 0.3, true,],
      [-3.7, 0.25, true,],
      [0.2, 3.6, true,],
      [0.3, 3.3, true,],
      [1.7, 3.3, true,],
      [1.8, 3.6, true,],
      [3.5, -3.2, true,],
      [3.6, -3.5, true,],
    ],
  },
};
// si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const def = {
  artifact_0: {
    board: 'board_1',
    buttons: false,

    datadefault: [
      [10,
        [
          'artifact_0',
        ],
      ],
    ],
  },
  artifact_1: {
    datadefault: [
      [9, 1, 8,
        [
          ['Puntos de corte con el eje x ⠀',
            'Puntos de corte con el eje y ⠀',
            'Dominio ⠀',
            'Rango ⠀',
            'Parte positiva ⠀',
            'Parte negativa ⠀',
            'Crece en ⠀',
            'Decrece en ⠀',
          ],],
        true,
        {
          conditions: [
            [
              ['(-1,0)'],
              ['∄', '∅'],
              ['(-∞,-1];(0,2);[2,∞)'],
              ['[-1,-∞);[0,∞)', '(-∞,-1];(∞,0]', '(∞,0];[-1,-∞)'],
              ['(0,2);(∞,-1)'],
              ['(2,∞)'],
              ['(1,2);(2,2.5);(∞,-2)'],
              ['(-2,-1);(0,1);(2.5,∞)']
            ],
          ],
          sizeInput: 25
        }
      ],
    ], changeContent: true,

  },

  artifact_2: {

    datadefault: [
      [9, 1, 8,
        [
          ['max abs ⠀',
            ' Alcanzado en ⠀',
            'max rel ⠀',
            'Alcanzado en ⠀',
            'min abs ⠀',
            'Alcanzado en⠀',
            'min rel ⠀',
            'Alcanzado en ⠀',
          ],],
        true,
        {
          conditions: [
            [
              ['(-1,0)'],
              ['∄', '∅'],
              ['(-∞,-1],(0,2),[2,∞)'],
              ['[0,∞),[-1,-∞)', '(∞,0],(-∞,-1]', '(∞,0],[-1,-∞)'],
              ['(∞,-1),(0,2)'],
              ['(2,∞)'],
              ['(∞,-2),(1,2),(2,2.5)'],
              ['(-2,-1),(0,1),(2.5,∞)']
            ],
          ],
          sizeInput: 20
        }
      ],
    ], changeContent: true,

  },
  artifact_3: {
    datadefault: [
      [9, 1, 5,
        [
          [
            'ƒ(-1)= ⠀',
            'ƒ(0.2)= ⠀',
            'ƒ(-3)= ⠀',
            'ƒ( ⠀⠀ )= 0.5 ⠀',
            'ƒ( ⠀⠀ )= 2 ⠀',
          ],
        ],
        true,
        {
          conditions: [
            [
              ['(-1,0)'],
              ['∄', '∅'],
              ['(-∞,-1],(0,2),[2,∞)'],
              ['[0,∞),[-1,-∞)', '(∞,0],(-∞,-1]', '(∞,0],[-1,-∞)'],
              ['(∞,-1),(0,2)'],
            ],
          ],
          sizeInput: 20
        },
      ],
    ],
    changeContent: true,
  },
  artifact_4: {
    datadefault: [
      [9, 1, 6,
        [
          [
            'Conta Inf. en (-3,0)⠀',
            'Conta Inf. en (0,∞)⠀',
            'Conta Inf. en (0,∞)⠀',
            'Conta Inf. en R⠀',
            'Conta Inf. en (-∞,-1)⠀',
            'Conta Inf. en (0,1)⠀',
          ],],
        true,
        {
          conditions: [
            [
              ['0'],
              ['∄'],
              ['∄'],
              ['∄'],
              ['2'],
              ['∄'],
            ],
          ],
          sizeInput: 20
        }
      ],
    ],
    changeContent: true,
  },
  artifact_00: {
    changeContent: true,
    datadefault: [
      [10,
        [
          'artifact_5',
          'artifact_6',
          'artifact_7',
        ],
      ],
    ],
  },
  artifact_5: {
    statementBottom: ['Mínimo alcanzado en -2 y 2 ', 'No tiene máximos'],
    conditions: {
      min: {
        global: [-2, 2],
      },

      max: {
        global: 0,
        localcount: 0,
      },
    },
  },
  artifact_6: {
    statementBottom: ['Mínimo alcanzado en -2 y 2 ', 'Máximo de ƒ es -1 alcanzado en 0.', ' Dominio R'],
    conditions: {
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
      },
      min: {
        global: [-2, 2],
      },

      max: {
        global: [0],
        maxTotal: -1,
      },
    },
  },
  artifact_7: {
    statementBottom: [' Dominio [ -2,2 ]', 'Rango ( -∞ , -1 ) U ( 1 , ∞ )', 'ƒ decreciente en (-2,0)'],
    yellow: true,
    conditions: {
      // upDown: {
      //     intervals: [[false, [-2, 0]]],
      // },
      //dom esta mal.
      dom: {
        noise: 3,
        first: true,
        end: true,
        range: [
          [[7, 8, 1], 'x', 3, false, true, [-2, 'x']],
          ['x', [4, 5, 6], 3, true, false, ['x', 2]]
        ],
      },
      // rang: {
      //     mulIntervals: [
      //         [[-1, [], true, false], [[], 1, false, true]]
      //     ],
      // },
    },
  },
};
generator();
defBoardDefault();
window.onload = main();

