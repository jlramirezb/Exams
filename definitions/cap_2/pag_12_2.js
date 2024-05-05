
const defBoards = {
  board_1: {
    artifact: 'artifact_1',
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3, 3, 3, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [
          [0, 0],
          [0, 1],
        ] /*dirección del eje y*/,
        xd: [
          [0, 0],
          [1, 0],
        ],
        colory: '#000000',
        colorx: '#000000',
      },
    },

    curves: [
      {
        //2-12 ejercicio 11
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-2.5, -1],
          [2.5, -1,],
        ],
      },
      {
        interactive: true,
        strokeColor: 'purple',
        points: [

          [-2, 0.75],
          [-1,-0.39],
          [0, -0.75],
          [1, -0.39],
          [2, 0.75]

        ],
      },
      {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-0.05, 1],[0.1, 1]
        ]
      },
      {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-0.05, -1],[0.1, -1]
        ]
      },
    ],
    points: [
      [-0.3, -1, false, '-1', true, 'black'],
      [-0.3, 1, false, '1', true, 'black'],
    ],
  },
  board_2: {
    artifact: 'artifact_2',
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3, 4, 3, -2],
      axis: [false, true, true],
      valueAxis: {
        yd: [
          [0, 0],
          [0, 1],
        ] /*dirección del eje y*/,
        xd: [
          [0, 0],
          [1, 0],
        ],
        colory: '#000000',
        colorx: '#000000',
      },
    },

    curves: [
      {
        //2-12 ejercicio 11
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-2, 1.60],
          [2, 1.60],
        ],
      },
      {
        interactive: true,
        strokeColor: 'purple',
        points: [

          [-1.40, 1.60],
          [-1.0031744739996693, 0.6857144794766865],
          [-0.021164021164021163, -0.008465802228009259],
          [0.9777780361276455, 0.6518519164393188],
          [1.40, 1.60]

        ],
      },
      {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-0.05, 1],[0.1, 1]
        ]
      },
      {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-0.05, -1],[0.1, -1]
        ]
      },
    ],
    points: [
      [-0.3, -1, false, '-1', true, 'black'],
      [-0.3, 1, false, '1', true, 'black'],
    ],
  },
  board_3: {
    artifact: 'artifact_3',
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-0.5, 4, 5.5, -2],
      axis: [false, true, true],
      valueAxis: {
        yd: [
          [0, 0],
          [0, 1],
        ] /*dirección del eje y*/,
        xd: [
          [0, 0],
          [1, 0],
        ],
        colory: '#000000',
        colorx: '#000000',
      },
    },

    curves: [
      {
        //2-12 ejercicio 11
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [0, 0.75], [4, 2.60]
        ],
      },
      {
        //2-12 ejercicio 11
        interactive: true,
        strokeColor: 'purple',
        points: [
          [0.5, 0],
          [1, 1],
          [2, 1.58],
          [3, 1],
          [3.61, 0]
        ],
      },
      {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-0.05, 1],[0.1, 1]
        ]
      },
      {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-0.05, -1],[0.1, -1]
        ]
      },
    ],
    points: [
      [-0.3, -1, false, '-1', true, 'black'],
      [-0.3, 1, false, '1', true, 'black'],
    ],

  },
  board_4: {
    artifact: 'artifact_4',
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-0.5, 3, 5.5, -3],

      axis: [false, true, true],
      valueAxis: {
        yd: [
          [0, 0],
          [0, 1],
        ] /*dirección del eje y*/,
        xd: [
          [0, 0],
          [1, 0],
        ],
        colory: '#000000',
        colorx: '#000000',
      },
    },
    curves: [
      {
        //2-12 ejercicio 11
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [0.50, -1.65], [5, 0.40]
        ],
      },
      {
        //2-12 ejercicio 11
        interactive: true,
        strokeColor: 'purple',
        points: [
          [1, 0.50],
          [1.50, 1.50],
          [2.50, 2.08],
          [3.50, 1.50],
          [4.11, 0.50]
        ],
      },
      {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-0.05, 1],[0.1, 1]
        ]
      },
      {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-0.05, -1],[0.1, -1]
        ]
      },
    ],
    points: [
      [-0.3, -1, false, '-1', true, 'black'],
      [-0.3, 1, false, '1', true, 'black'],
    ],
  },
  board_5: {
    artifact: 'artifact_5',
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-0.5, 4, 5.5, -2],
      axis: [false, true, true],
      valueAxis: {
        yd: [
          [0, 0],
          [0, 1],
        ] /*dirección del eje y*/,
        xd: [
          [0, 0],
          [1, 0],
        ],
        colory: '#000000',
        colorx: '#000000',
      },
    },

    curves: [
      {
        //2-12 ejercicio 11
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [0.30, 1.70], [4.50, -0.25]
        ],
      },
      {
        //2-12 ejercicio 11
        interactive: true,
        strokeColor: 'purple',
        points: [
          [1, 0],
          [1.50, 1],
          [2.50, 1.58],
          [3.50, 1],
          [3.98, 0]
        ],
      },
      {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-0.05, 1],[0.1, 1]
        ]
      },
      {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-0.05, -1],[0.1, -1]
        ]
      },
    ],
    points: [
      [-0.3, -1, false, '-1', true, 'black'],
      [-0.3, 1, false, '1', true, 'black'],
    ],

  },
  board_6: {
    artifact: 'artifact_6',
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [
          [0, 0],
          [0, 1],
        ] /*dirección del eje y*/,
        xd: [
          [0, 0],
          [1, 0],
        ],
        colory: '#000000',
        colorx: '#000000',
      },
    },

    curves: [
      {
        //2-12 ejercicio 11
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-3, -1],
          [3, -3,],
        ],
      },
      {
        interactive: true,
        strokeColor: 'purple',
        points: [
          [-3.005291005291005, -0.01058217205067791],
          [-0.6349199890459656, 0.7513232357287533],
          [1.9894186352926588, 1.005290843822338],
          [2.9544974836722884, -0.01058217205067791]
        ]
      },
      {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-0.05, 1],[0.1, 1]
        ]
      },
      {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-0.05, -1],[0.1, -1]
        ]
      },
    ],
    points: [
      [-0.3, -1, false, '-1', true, 'black'],
      [-0.3, 1, false, '1', true, 'black'],
    ],
      

  },

};
//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const rDef = {
  artifactHtml: {
    datadefault: [
      {
        type: 10, //tipo 10 genera los contenedores con los dataset y clases para los boards
        classGlobal: 'operationCurves',
        contents: [

          {
            dataSet: {
              board: 'board_1',
            },
          },
          {
            dataSet: {
              board: 'board_2',
            },
          },
          {
            dataSet: {
              board: 'board_3',
            },
          },
          {
            dataSet: {
              board: 'board_4',
            },
          },
          {
            dataSet: {
              board: 'board_5',
            },
          },
          {
            dataSet: {
              board: 'board_6',
            },
          },
        ],
      },
    ],
  },

  artifact_1: {
    defBoard: 'board_1',

    // debug: false,
    buttonsActive: { points: true },
    curveMod: {
      color: 'black',
      interactive: true,
    },

    conditions: {
      text: 'texto error definido 2',
      // asymptotes: {
      //    addpoints: true,
      //    positions: [-2, 2], //[1, 3, 5, 7],
      //    color: "grey",
      // },
      operation: {
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
        noise: 15,
      },


    },
  },
  artifact_2: {
    defBoard: 'board_2',

    // debug: false,
    buttonsActive: { points: true },
    curveMod: {
      color: 'red',
      interactive: true,
    },

    conditions: {
      // asymptotes: {
      //    addpoints: true,
      //    positions: [-1.4, 1.4], //[1, 3, 5, 7],
      //    color: "grey",
      // },
      operation: {
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
        noise: 15,
      },
    },
  },
  artifact_3: {
    defBoard: 'board_3',

    // debug: false,
    buttonsActive: { points: true },
    curveMod: {
      color: 'black',
      interactive: true,
    },

    conditions: {
      text: 'texto error definido 2',
      // asymptotes: {
      //    addpoints: true,
      //    positions: [0.45, 3.56], //[1, 3, 5, 7],
      //    color: "grey",
      // },
      operation: {
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
        noise: 15,
      },
    },
  },
  artifact_4: {
    // debug: false,
    curveMod: {
      color: 'red',
      interactive: true,
    },
    buttonsActive: { points: true },

    conditions: {
      // asymptotes: {
      //    addpoints: true,
      //    positions: [1, 4.1], //[1, 3, 5, 7],
      //    color: "grey",
      // },
      operation: {
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
        noise: 15,
      },
    },
  },
  artifact_5: {
    // debug: false,
    curveMod: {
      color: 'red',
      interactive: true,
    },
    buttonsActive: { points: true },

    conditions: {
      // asymptotes: {
      //    addpoints: true,
      //    positions: [1, 4],
      //    color: "grey",
      // },
      operation: {
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
        noise: 15,
      },
    },
  },
  artifact_6: {
    // debug: false, 
    curveMod: {
      color: 'red',
      interactive: true,
    },
    buttonsActive: { points: true },

    conditions: {
      // asymptotes: {
      //    addpoints: true,
      //    positions: [-3, 3],
      //    color: "grey",
      // },
      operation: {
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
        noise: 15,
      },
    },
  },

};

generator(rDef);
mainOperation(defBoards, rDef);