let def = {
  artifact_Text: {
    datadefault: [
      //[Bandera, numero de contenedores, numero de divs,[[array con el contenido de las condiciones ]].[[Respuestas Si o No]] ] 
      [1, 'Complete de acuerdo a cada curva'],
    ],
    changeContent: false
  },
  artifact_Example: {
    datadefault: [
      [9, 1, 3,
        [['board_1', 'Dominio: R', 'Rango: R']],
        false
      ],
    ],
    changeContent: true,
        
  },
  artifact_1: {
    datadefault: [
      [9, 1, 3,
        [['board_2', 'Dominio: ', 'Rango:⠀ ']],
        true,
        {
          conditions: [[['r','(−∞,∞)'], ['[0,∞)']]],
          sizeInput: 22
        }
      ],
    ],
    changeContent: true,
    modeMath:true
  },
  artifact_2: {
    datadefault: [
      [9, 1, 3,
        [['board_3', 'Dominio: ', 'Rango:⠀ ']],
        true,
        {
          conditions: [[['(0,∞)'], ['(−∞,∞)','r']]],
          sizeInput: 20
        }
      ],
    ],
    changeContent: true,
    modeMath:true
  },
  artifact_3: {
    datadefault: [
      [9, 1, 3,
        [['board_4', 'Dominio: ', 'Rango:⠀ ']],
        true,
        {
          conditions: [[['[−2,0]'], ['[0,3]']]],
          sizeInput: 20
        }
      ],
    ],
    changeContent: true,
    modeMath:true
  },
  artifact_4: {
    datadefault: [
      [9, 1, 3,
        [['board_5', 'Dominio: ', 'Rango:⠀ ']],
        true,
        {
          conditions: [[['(0,∞)'], ['(0,∞)']]],
          sizeInput: 20
        }
      ],
    ],
    changeContent: true,
    modeMath:true
  },
  artifact_5: {
    datadefault: [
      [9, 1, 3,
        [['board_6', 'Dominio: ', 'Rango:⠀ ']],
        true,
        { 
          conditions: [[['(−∞,0)∪(0,∞)','(−∞,∞)−{0}','r−{0}'], ['(−∞,0)∪(0,∞)','(−∞,∞)−{0}','r−{0}']]],
          sizeInput: 20
        }
      ],
    ],
    changeContent: true,
    modeMath:true
  },
  artifact_6: {
    datadefault: [
      [9, 1, 3,
        [['board_7', 'Dominio: ', 'Rango:⠀ ']],
        true,
        {
          conditions: [[['(−∞,∞)','r'], [null]]],
          sizeInput: 20
        }
      ],
    ],
    changeContent: true,
    modeMath:true
  },
  artifact_7: {
    datadefault: [
      [9, 1, 3,
        [['board_8', 'Dominio: ', 'Rango:⠀ ']], 
        true,
        {
          conditions: [[['(−∞,−1/2)∪[1/2,∞)'], ['{−1,1}','[−1,−1]∪[1,1]']]], 
          sizeInput: 20
        }
      ],
    ],
    changeContent: true,
    modeMath:true
  },
  artifact_8: {
    datadefault: [
      [9, 1, 3,
        [['board_9', 'Dominio: ', 'Rango:⠀ ']],
        true,
        {
          conditions: [[['(−∞,∞)','r'], ['[−1,1]']]],
          sizeInput: 20
        }
      ],
    ],
    changeContent: true,
    modeMath:true
  },
  artifact_9: {
    datadefault: [
      [9, 1, 3,
        [['board_10', 'Dominio: ', 'Rango:⠀ ']],
        true,
        {
          conditions: [[['(0,∞)','(0,2)∪[2,∞)'], ['(−∞,−1)∪[1,∞)']]],
          sizeInput: 20
        }
      ],
    ],
    changeContent: true,
    modeMath:true
  }



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

  },
  board_1: {
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

    curves: [
      [[[-2, -0.6, true,  '',2, 'blue'], [2, 1.7, true, '', 2, 'blue']]]],
    points: [
      [-2.53, -1, true, '',2, 'blue'], [-2.28, -0.80, true, '',2, 'blue'], [2.23, 1.85, true, '',2, 'blue'], [2.46, 2, true, '',2, 'blue']

    ],
  },
  board_2: {
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

    curves: [
      [[[-2.03, 1.16, true,'', 2, 'blue'], [-1.30, 0.50], [0, 0], [1.18, 0.50], [1.94, 1.11, true,'', 2, 'blue'],]]],
    points: [
      [-2.49, 1.61, true, '', 2, 'blue'], [-2.26, 1.39, true, '', 2, 'blue'], [2.15, 1.31, true, '', 2, 'blue'], [2.36, 1.51, true, '', 2, 'blue']

    ],
  },
  board_3: {
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

    curves: [
      [[[0.35, -1.7, true,'', 2, 'blue'], [0.80, 0.90], [1.45, 2.30, true,'', 2, 'blue']]]
    ],
    points: [
      [0.31, -2.27, true,'', 2, 'blue'], [0.32, -2, true,'', 2, 'blue'], [1.62, 2.52, true,'', 2, 'blue'], [1.79, 2.74, true,'', 2, 'blue']

    ],
  },
  board_4: {
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

    curves: [
      [[[-1, 1.5], [0, 0]]]
    ],
    lines: [
      [[[-1, 0, false, '-2'], [-1, 1.5]], 2],
      [[[0, 1.5, false, '3'], [-1, 1.5]], 2],


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

    curves: [
      [[[2.1, 0.5, true,'', 2, 'blue'], [1, 1], [0.5, 1.8], [0.3, 2.5, true,'', 2, 'blue']]],
    ],
    points: [
      [0.28, 2.75, true,'', 2, 'blue'], [0.25, 3, true,'', 2, 'blue'], [2.35, 0.40, true,'', 2, 'blue'], [2.60, 0.35, true,'', 2, 'blue']

    ],
  },
  board_6: {
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

    points: [
      [-2.3, -0.45, true,'', 2, 'blue'], [-2.65, -0.38, true,'', 2, 'blue'],
      [-0.25, -2.7, true,'', 2, 'blue'], [-0.2, -3.1, true,'', 2, 'blue'],

      [3.3, 0.4, true,'', 2, 'blue'], [3.6, 0.3, true,'', 2, 'blue'],
      [0.25, 3.4, true,'', 2, 'blue'], [0.2, 3.7, true,'', 2, 'blue'],
    ],

    curves: [
      [[[-2.1, -0.5], [-1, -1], [-0.5, -1.8], [-0.3, -2.5]]],
      [[[0.3, 3.2], [0.7, 2], [2, 0.7], [1.2, 1.2], [3.1, 0.4]]]
    ],
  },
  board_7: {
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

    points: [
      [-2.3, 2, true, '', 2, 'blue'], [-2.6, 2, true, '', 2, 'blue'],
      [2.3, 2, true, '', 2, 'blue'], [2.6, 2, true, '', 2, 'blue']
    ],

    curves: [
      [[[-2, 2], [2, 2]]]
    ],
  },
  board_8: {
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
      [[[0, 1.8, false, '1'], [0, 1.8]], 0],  
      [[[-1.2, 0, false, '-1/2'], [-1.2, 0]], 0],
      [[[1, 0, false, '1/2'], [1, 0]], 0],
      [[[0, -2.2, false, '-1'], [0, -2.2]], 0], 

    ],
    curves: [
      [[[1, 2], [2, 2]]],
      [[[-2, -2], [-1, -2, true, '', 3,true]]],

    ],

    points: [
      [-2.2, -2, true,'', 2, 'blue'], [-2.5, -2, true,'', 2, 'blue'], [2.2, 2, true,'', 2, 'blue',], [2.5, 2, true,'', 2, 'blue'],
    ],
  },
  board_9: {
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
      [[[0, 1.8, false, '1'], [0, 1.8]], 0],  
      [[[0, -2.2, false, '-1'], [0, -2.2]], 0],

    ],
    curves: [
      [[[1.5, 2], [2, 2]]],
      [[[-0.90, -2], [0, -0.5], [1.5, 2]]],
      [[[-1.5, -2], [-0.90, -2]]],


    ],

    points: [
      [-2, -2, true, '', 2, 'blue'], [-1.70, -2, true, '', 2, 'blue'], [2.2, 2, true, '', 2, 'blue',], [2.5, 2, true, '', 2, 'blue'],
    ],
  },
  board_10: {
    style: {
      axis: [false, true, true],
      grid: false,
      maxWidth: 310,
      maxHeight: 300,

      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },  
      boundingbox: [-2, 4, 4, -4],
    },
    lines: [
      [[[0, 1.7, false, '1'], [0, 1.7]], 0],
      [[[0, -1.6, false, '-1'], [0, -1.6]], 0],
      [[[1.5, 0, false, '2'], [1.5, 0]], 0],

    ],
    curves: [
      [[[1.5, 1.90], [1.90, 2.10], [2.2, 2.5]]],
      [[[0.25,-3],[0.3,-2.6],[0.4,-2.2],[1.5, -1.3, true, '', 3, true]]],
      //[[[0.4, -3], [0.6, -2.4], [0.80, -1.9], [1, -1.7], [1.5, -1.5, true, '', 3, true]]],
      /* [[[-0.90, -2], [0, -0.5], [1.5, 2]]],
            [[[-1.5, -2], [-0.90, -2]]],
 */

    ],

    points: [
      [0.25, -3.6, true, '', 2, 'blue'], [0.25, -3.3, true, '', 2, 'blue'], [2.3, 2.7, true, '', 2, 'blue',], [2.4, 2.95, true, '', 2, 'blue'],
    ],
  },

};



generator();
defBoardDefault();
main();
