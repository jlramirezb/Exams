let def = {
  example: {
    datadefault: [
      
      [7, 5, ['CURVA CRECIENTE', 'board_1'], ['CURVA DECRECIENTE', 'board_2']],
      [
        7,
        3,
        ['PARTES CRECIENTES', 'board_3', 'C crece en (-2,-1) y (1,2).'],
        ['PARTES DECRECIENTES', 'board_4', 'C decrece en (-1,1).'],
      ],

    ],


  },
  artifact_1: {
    datadefault: [
      [8, 1, 4, ['board_5',], [['EJEMPLO 1']]],
      [5, 2, 0,
        ['Crece en  ', 'Decrece en'],

      ],


    ],
    conditions: [
      ['(0,∞)'], ['(-∞,0)'],
    ],
    newContent: true,
    modeMath:true


  },

  artifact_2: {
    datadefault: [
      [8, 1, 4, ['board_6',], [['EJEMPLO 2']]],
      [5, 2, 0,
        ['Crece en  ', 'Decrece en'],

      ],


    ],
    conditions: [
      ['∅', 'nocrece'], ['(-∞,3)'],
    ],
    newContent: true,
    modeMath:true


  },

  artifact_3: {
    datadefault: [
      [8, 1, 4, ['board_7',], [['EJEMPLO 3']]],
      [5, 2, 0,
        ['Crece en  ', 'Decrece en'],

      ],


    ],
    conditions: [
      ['∅', 'nocrece'], ['(-∞,0);(0,∞)'],
    ],
    newContent: true,
    modeMath:true


  },

  artifact_4: {
    datadefault: [
      [8, 1, 4, ['board_8',], [['EJEMPLO 4']]],
      [5, 2, 0,
        ['Crece en  ', 'Decrece en'],

      ],


    ],
    conditions: [
      ['(0,∞)'], ['∅', 'nocrece'],
    ],
    newContent: true,
    modeMath:true


  },

  artifact_5: {
    datadefault: [
      [8, 1, 4, ['board_9',], [['EJEMPLO 5']]],
      [5, 2, 0,
        ['Crece en  ', 'Decrece en'],

      ],


    ],
    conditions: [
      ['(-3,-1.4);(1.4,3)',
        '(-3,-1.5);(1.5,3)',
        '(-3,-1.6);(1.6,3)',
        '(-3,-1.5);(1.4,3)',
        '(-3,-1.5);(1.6,3)',
        '(-3,-1.4);(1.5,3)',
        '(-3,-1.6);(1.5,3)',
        '(-3,-1.4);(1.6,3)',
        '(-3,-1.6);(1.4,3)',
        '(-3,-1.6);(1.6,3)',
        '(-3,-1.5);(1.6,3)',
        '(-3,-1.4);(1.6,3)',
      ],
      [
        '(-1.4,1.4)',
        '(-1.5,1.5)',
        '(-1.6,1.6)',
        '(-1.4,1.5)',
        '(-1.6,1.5)',
        '(-1.5,1.4)',
        '(-1.5,1.6)',
        '(-1.4,1.6)',
        '(-1.6,1.4)',
      ],
    ],
    newContent: true,
    modeMath:true


  },

  artifact_6: {
    datadefault: [
      [8, 1, 4, ['board_10',], [['EJEMPLO 6']]],
      [5, 2, 0,
        ['Crece en  ', 'Decrece en'],

      ],


    ],
    conditions: [
      [ //1 era tanda
        '(-1.4,0.4);(-2.4,-2);(2,3)',
        '(-1.4,0.4);(-2.5,-2);(2,3)',
        '(-1.4,0.4);(-2.6,-2);(2,3)',

        '(-1.4,0.5);(-2.4,-2);(2,3)',
        '(-1.4,0.5);(-2.5,-2);(2,3)',
        '(-1.4,0.5);(-2.6,-2);(2,3)',

        '(-1.4,0.6);(-2.4,-2);(2,3)',
        '(-1.4,0.6);(-2.5,-2);(2,3)',
        '(-1.4,0.6);(-2.6,-2);(2,3)',

        //2da tanda
        '(-1.5,0.4);(-2.4,-2);(2,3)',
        '(-1.5,0.4);(-2.5,-2);(2,3)',
        '(-1.5,0.4);(-2.6,-2);(2,3)',

        '(-1.5,0.5);(-2.4,-2);(2,3)',
        '(-1.5,0.5);(-2.5,-2);(2,3)',
        '(-1.5,0.5);(-2.6,-2);(2,3)',

        '(-1.5,0.6);(-2.4,-2);(2,3)',
        '(-1.5,0.6);(-2.5,-2);(2,3)',
        '(-1.5,0.6);(-2.6,-2);(2,3)',

        //3raa tanda
        '(-1.6,0.4);(-2.4,-2);(2,3)',
        '(-1.6,0.4);(-2.5,-2);(2,3)',
        '(-1.6,0.4);(-2.6,-2);(2,3)',

        '(-1.6,0.5);(-2.4,-2);(2,3)',
        '(-1.6,0.5);(-2.5,-2);(2,3)',
        '(-1.6,0.5);(-2.6,-2);(2,3)',

        '(-1.6,0.6);(-2.4,-2);(2,3)',
        '(-1.6,0.6);(-2.5,-2);(2,3)',
        '(-1.6,0.6);(-2.6,-2);(2,3)',
      ],
      [
        '(-2,-1.4);(0.6,2)',
        '(-2,-1.5);(0.5,2)',
        '(-2,-1.4);(0.4,2)',
        '(-2,-1.6);(0.6,2)',
        '(-2,-1.5);(0.4,2)',
        '(-2,-1.5);(0.6,2)',
        '(-2,-1.6);(0.5,2)',
        '(-2,-1.4);(0.5,2)',
        '(-2,-1.6);(0.4,2)',
      ],
    ],
    newContent: true,
    modeMath:true


  },
  
};

let defBoards = {
  board_1: {
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
      },
      grid: false,
      boundingbox: [-4, 4, 4, -4],
      maxWidth: 350,
      maxHeight: 225,
    },
    /* lines: [
            [[[-3, 0, false, "a"], [-3, -1.5],], 2 ],
            [[[-3, 0], [-1, 0],], 2, false, false, 3], 
            [[[-1, 0, false, "b"], [-1, 1.5]], 2], 
            [[[1, 0, false, "c"], [1, 2.5],], 2],
            [[[1, 0], [3.2, 0],], 2, false, false, 3],
            [[[3.1, 0, false, "d"], [3.4, 0]], 2]
        ], */

    curves: [
      [
        [
          [-0.5, -0.4],
          [-0.8, -0.5],
          [-1.4, -0.6],
          [0, 0],
          [0.3, 0.5],
          [0.5, 1],
          [0.7, 2],
          [0.8, 3],
        ],
      ],
    ],
  },
  board_2: {
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
      },
      grid: false,
      boundingbox: [-4, 4, 4, -4],
      maxWidth: 350,
      maxHeight: 225,
    },
    /* lines: [
            [[[0, 2.5, false, "k"], [1, 2.5]], 2],
            [[[0, -1.5, false, "s"], [-3, -1.5],], 2],
            [[[0, 2.5], [0, -1.5],], 2, false,false,3],  
            
            
        ], */

    curves: [
      [
        [
          [0.6, 3.5],
          [1, 3.4],
          [1.4, 3.2],
          [1.8, 2.9],
          [1.9, 2.8],
          [2, 2.7],
          [2.2, 2.4],
          [2.4, 2.1],
          [2.6, 1.7],
          [2.8, 1.2],
          [
            2.9, 0.9,
          ] /* [0.8,3.4,true],[1,3.2,true],[1.2,3,true],[3.4,0,true] */,
        ],
      ],
      /* [[[1,2.5,true,'',3,true],[1.4,1.5,],[2,0.5,],[2.4,0,],[3,-0.4],[3.4,-0.5]]], */
    ],
  },
  board_3: {
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
      },
      grid: false,
      boundingbox: [-4, 4, 4, -4],
      maxWidth: 350,
      maxHeight: 225,
    },
    lines: [
      [
        [
          [-2, 0, false, '-2'],
          [-1, 1, false, 'C'],
        ],
      ],
      [
        [
          [-2, 0],
          [-1, 0, false, '-1'],
        ],
        2,
        false,
        false,
        3,
      ],
      [
        [
          [-1, 1],
          [0, 0],
        ],
      ],

      [
        [
          [0, 0],
          [1, -1],
        ],
      ],
      [
        [
          [1, 0, false, '1'],
          [2, 0, false, '2'],
        ],
        2,
        false,
        false,
        3,
      ],
      [
        [
          [1, -1],
          [2, 0],
        ],
      ],
    ],
  },
  board_4: {
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
      },
      grid: false,
      boundingbox: [-4, 4, 4, -4],
      maxWidth: 350,
      maxHeight: 225,
    },

    lines: [
      [
        [
          [-2, 0, false, '-2'],
          [-1, 1, false, 'C'],
        ],
      ],
      [
        [
          [-1, 1],
          [0, 0],
        ],
      ],
      [
        [
          [0, 0],
          [1, -1],
        ],
      ],
      [
        [
          [-1, 0, false, '-1'],
          [1, 0, false, '1'],
        ],
        2,
        false,
        false,
        3,
      ],
      [
        [
          [1, -1],
          [2, 0, false, '2'],
        ],
      ],
    ],
  },
  board_5: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxWidth: 310,
      maxHeight: 250,
      valueAxis: {
        yd: [
          [0, 0],
          [0, 1],
        ],
        xd: [
          [0, 0],
          [1, 0],
        ],
      },
      boundingbox: [-4, 4, 4, -2],
    },

    points: [
      [-2.2, 2.2, true],
      [-2.4, 2.4, true],
      [-2.6, 2.6, true],
      [2.2, 2.2, true],
      [2.4, 2.4, true],
      [2.6, 2.6, true],
    ],
    curves: [
      [
        [
          [-2, 2],
          [-1, 0],
          [0, -1],
          [1, 0],
          [2, 2],
        ],
      ],
    ],
  },
  board_6: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxWidth: 310,
      maxHeight: 250,
      valueAxis: {
        yd: [
          [0, 0],
          [0, 1],
        ],
        xd: [
          [0, 0],
          [1, 0],
        ],
      },
      boundingbox: [-4, 4, 4, -2],
    },
    points: [
      [-2.7, 2.3, true],
      [-3.05, 2.5, true],
      [-3.4, 2.7, true],
    ],
    lines: [
      [
        [
          [3, -0.5],
          [-2.5, 2.2],
        ],
      ],
    ],
  },
  board_7: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxWidth: 310,
      maxHeight: 250,

      valueAxis: {
        yd: [
          [0, 0],
          [0, 1],
        ],
        xd: [
          [0, 0],
          [1, 0],
        ],
      },
      boundingbox: [-4, 4, 4, -4],
    },
    points: [
      [-2.3, -0.45, true],
      [-2.65, -0.38, true],
      [-3.1, -0.3, true],
      [-0.25, -2.7, true],
      [-0.2, -3.1, true],

      [3.3, 0.4, true],
      [3.6, 0.3, true],
      [0.25, 3.4, true],
      [0.2, 3.7, true],
    ],

    curves: [
      [
        [
          [-2.1, -0.5],
          [-1, -1],
          [-0.5, -1.8],
          [-0.3, -2.5],
        ],
      ],
      [
        [
          [0.3, 3.2],
          [0.7, 2],
          [2, 0.7],
          [1.2, 1.2],
          [3.1, 0.4],
        ],
      ],
    ],
  },
  board_8: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxWidth: 310,
      maxHeight: 250,

      valueAxis: {
        yd: [
          [0, 0],
          [0, 1],
        ],
        xd: [
          [0, 0],
          [1, 0],
        ],
      },
      boundingbox: [-4, 4, 4, -4],
    },
    points: [
      [0.19, -3.2, true],
      [0.15, -3.5, true],
      [3.2, 1.4, true],
      [3.4, 1.6, true],
      [3.6, 1.8, true],
    ],
    curves: [
      [
        [
          [0.2, -3],
          [0.5, -1],
          [1, 0],
          [2, 0.5],
          [3, 1.2],
        ],
      ],
    ],
  },
  board_9: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxWidth: 310,
      maxHeight: 250,

      valueAxis: {
        yd: [
          [0, 0],
          [0, 1],
        ],
        xd: [
          [0, 0],
          [1, 0],
        ],
      },
      boundingbox: [-4, 2, 4, -2],
    },
    curves: [
      [
        [
          [-3, 0],
          [-1.5, 1],
          [0, 0],
          [1.5, -1],
          [3, 0],
        ],
      ],
    ],
  },
  board_10: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxWidth: 310,
      maxHeight: 250,

      valueAxis: {
        yd: [
          [0, 0],
          [0, 1],
        ],
        xd: [
          [0, 0],
          [1, 0],
        ],
      },
      boundingbox: [-4, 2, 4, -2],
    },

    lines: [
      [
        [
          [3, 1.5, true, '', 2, true],
          [2, -1.5],
        ],
      ],
      [
        [
          [0.5, 1.5],
          [2, -1.5],
        ],
      ],
      [
        [
          [0.5, 1.5],
          [-1.5, -0.5],
        ],
      ],
      [
        [
          [-1.5, -0.5],
          [-2, 1.5],
        ],
      ],
      [
        [
          [-2, 1.5],
          [-2.5, 1],
        ],
      ],
    ],
  },
};

generator();
defBoardDefault();