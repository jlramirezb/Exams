const defBoards = {
  board_1: {
    artifact: 'artifact_1',
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3.4, 3.4, 3.4, -3.4],
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
        strokeColor: 'purple',
        points: [
          [-3.0, 0],
          [-2, -0.85],
          [-1.50, -1],
          [-1, -0.85],
          [0, 0],
          [1, 0.85],
          [1.5, 1],
          [2, 0.85],
          [3, 0]
        ],
      },
      {
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-3.15, -1.04], [-3, -1], [3, 1],
          [3.15, 1.04],
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
  /* points: [
        [3.47, 0.4, false, "g", true, "black"],
        [3.42, 1.6, false, "f", true, "black"],
     ],*/
  },
  board_2: {
    artifact: 'artifact_2',
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3.5, 3.4, 3.5, -3.4],
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
        strokeColor: 'purple',
        points: [
          [-3.0, 0],
          [-2, -0.44],
          [-1.50, -0.5],
          [-1, -0.44],
          [0, 0],
          [1, 0.44],
          [1.5, 0.5],
          [2, 0.44],
          [3, 0], 
        ],
      },
      {
        //2-12 ejercicio 11
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-3, 1.5],[3, -1.5]
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
      boundingbox: [-3.4, 3.4, 3.4, -3.4],
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
        strokeColor: 'purple',
        points: [
          [-3.0, 0],
          [-2, -0.85],
          [-1.50, -1],
          [-1, -0.85],
          [0, 0],
          [1, 0.85],
          [1.5, 1],
          [2, 0.85],
          [3, 0]
        ],
      },
      {
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-3.01, -1.40], [-2, -1.35], [-1.02, -1.24],
          [0, -1], [2, 0], [2.65, 0.80], [3, 1.30]
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
  /* points: [
        [3.43, -3.2, false, "g", true, "black"],
        [3.43, 1.8, false, "f", true, "black"],
     ],*/
  },
  board_4: {
    artifact: 'artifact_4',
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3.4, 3.4, 3.4, -3.4],
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
        strokeColor: 'purple',
        points: [
          [-3.0, 0],
          [-2, -0.85],
          [-1.50, -1],
          [-1, -0.85],
          [0, 0],
          [1, 0.85],
          [1.5, 1],
          [2, 0.85],
          [3, 0]
        ],
      },
      {
        interactive: true,
        strokeColor: 'orange',
        points: [
          [-3., 1.5], [-1.5, 0], [-0.5, -0.6],
          [1.5, -1], [3, -1.1]
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
      boundingbox: [-3.4, 3.4, 3.4, -3.4],
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
        interactive: true,
        strokeColor: 'purple',
        points: [
          [-3, 0], [-2.6, 0.65], [-2.25, 0.80],
          [-1.90, 0.65], [-1.5, 0], [-1, -0.65], [-0.70, -0.80], [-0.40, -0.65], [0, 0],
          [0.40, 0.65], [0.70, 0.80], [1, 0.65], [1.5, 0], [1.90, -0.65], [2.25, -0.80], [2.6, -0.65], [3, 0]
        ],
      },
      {
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-3, 0],
          [0, 0.80, false, ''],
        ],

      },
      {
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [0, -0.80],
          [3, 0, false, ''],
        ],

      },
      {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-0.05, 0.8],[0.1, 0.8]
        ]
      },
      {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-0.05, -0.8],[0.1, -0.8]
        ]
      },
    ],
    points: [
      [0, -0.80, true, '', true,true],
        
      [-0.3, -1, false, '-1', true, 'black'],
      [-0.3, 1, false, '1', true, 'black'],
    ],
    /*  points: [
       [3.33, -1.78, false, "f", true, "black"],
       [3.5, -3.39, false, "g", true, "black"],
     ], */

  },
  board_6: {
    artifact: 'artifact_6',
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3.3, 3.3, 3.3, -3.3],
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
        interactive: true,
        strokeColor: 'purple',
        points: [
          [-3, 0], [-2.6, 0.65], [-2.25, 0.80],
          [-1.90, 0.65], [-1.5, 0], [-1, -0.65], [-0.70, -0.80], [-0.40, -0.65], [0, 0],
          [0.40, 0.65], [0.70, 0.80], [1, 0.65], [1.5, 0], [1.90, -0.65], [2.25, -0.80], [2.6, -0.65], [3, 0]
        ],
      },
      {
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-3, 0],[-2, 0.40],[-0.98, 0.73],[0, 0.81],[0.98, 0.73],[2, 0.41],
          [3, 0, false, ''],
        ],
      },
      {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-0.05, 0.8],[0.1, 0.8]
        ]
      },
      {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-0.05, -0.8],[0.1, -0.8]
        ]
      },
    ],
    points: [
      [-0.3, 0.8, false, '1', true, 'black'],         
      [-0.3, -0.8, false, '-1', true, 'black'],
    ],
  },
  board_7: {
    artifact: 'artifact_7',
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
        interactive: true,
        strokeColor: 'purple',
        points: [
          [-3, 2.50], [3, -0.50]
        ],
      },
      {
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-3, -1.50],[0, 0],[3, 1.50],
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
      [0.3, -1.05, false, '-1', true, 'black'],
      [-0.3, 1, false, '1', true, 'black'],
    ],
  },
  board_8: {
    artifact: 'artifact_8',
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
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-2, -2], [3, 0.50]
        ],
      },
      {
        interactive: true,
        strokeColor: 'purple',
        points: [
          [-3, -0.50], [-2, 0],[3, 2.50],
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
      [0.3, -1.05, false, '-1', true, 'black'],
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
          {
            dataSet: {
              board: 'board_7',
            },
          },
          {
            dataSet: {
              board: 'board_8',
            },
          },
        ],
      },
    ],
  },
  artifact_1: {
    defBoard: 'board_1',
     
    debug: false,
    buttonsActive: { points: true },
    curveMod: {
      color: 'black',
      interactive: true,
    },

    conditions: {
      text: 'texto error definido 2',
      operation: {
        minPoints:4,
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
        noise: 15,
      },
      // asymptotes: {
      //    addpoints: true,
      //    positions: [-3, 3],
      //    color: "grey",
      // },
    },
  },
  artifact_2: {
    defBoard: 'board_2',

    debug: false, 
    buttonsActive: { points: true },
    curveMod: {
      color: 'black',
      interactive: true,
    },

    conditions: {
      operation: {
        minPoints:4,
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
        noise: 15,
      },
      // asymptotes: {
      //    addpoints: true,
      //    positions: [-3, 3],
      //    color: "grey",
      // },
    },
  },
  artifact_3: {
    defBoard: 'board_3',

    debug: false,
    buttonsActive: { points: true },
    curveMod: {
      color: 'black',
      interactive: true,
    },

    conditions: {
      text: 'texto error definido 2',
      operation: {
        minPoints:4,
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
        noise: 15,
      },
      // asymptotes: {
      //    addpoints: true,
      //    positions: [-3, 3],
      //    color: "grey",
      // },
    },
  },
  artifact_4: {
    debug: false,
    curveMod: {
      color: 'red',
      interactive: true,
    },
    buttonsActive: { points: true },

    conditions: {
      operation: {
        minPoints:4,
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
        noise: 15,
      },
      // asymptotes: {
      //    addpoints: true,
      //    positions: [-3, 3],
      //    color: "grey",
      // },
    },
  },
  artifact_5: {
    maxCurves:2,
     
    curveMod: {
      color: 'red',
      interactive: true,
    },
    buttonsActive: { points: true },

    conditions: {
      operation: {
        minPoints:4,
        curves: [[0, 1],[0, 2]],
        type: 1, //suma: 1 / Multipicacion: 2
        noise: 15,
      },
      // asymptotes: {
      //    addpoints: true,
      //    positions: [-3, 3],
      //    color: "grey",
      // },
    },
  },
  artifact_6: {
    debug: false,
    curveMod: {
      color: 'red',
      interactive: true,
    },
    buttonsActive: { points: true },

    conditions: {
      operation: {
        minPoints:6,
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
        noise: 15,
      },
      // asymptotes: {
      //    addpoints: true,
      //    positions: [-3, 3],
      //    color: "grey",
      // },
    },
  },
  /*   artifact_6: {
      //
      curveMod: {
        color: "red",
        interactive: true,
      },
      buttonsActive: { points: true },
  
      conditions: {
        operation: {
          curves: [[0, 1]],
          type: 1, //suma: 1 / Multipicacion: 2
          noise: 15,
        },
      },
    }, */
  artifact_7: {
    debug: false,
    curveMod: {
      color: 'red',
      interactive: true,
    },
    buttonsActive: { points: true },

    conditions: {
      operation: {
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
        noise: 15,
      },
      // asymptotes: {
      //    addpoints: true,
      //    positions: [-3, 3],
      //    color: "grey",
      // },
    },
  },
  artifact_8: {
    debug: false,
    curveMod: {
      color: 'red',
      interactive: true,
    },
    buttonsActive: { points: true },

    conditions: {
      operation: {
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
        noise: 15,
      },
      // asymptotes: {
      //    addpoints: true,
      //    positions: [-3, 3],
      //    color: "grey",
      // },
    },
  },
};

generator(rDef);
mainOperation(defBoards, rDef);