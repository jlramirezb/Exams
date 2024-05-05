const defBoards = {
  board_1: {
    artifact: 'artifact_1',
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-4, 7, 4, -1],
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
          [-3, 2],
          [3, 2],
        ],
      },
      {
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-3, 3],
          [3, 3],
        ],
      },
    ],
    lines: [
      //Curva guia punteada
      {
        points: [
          [-4, 1],
          [4, 1],
        ],
        dash: 2,
      },
      //Curva guia punteada
      {
        points: [
          [-4, -1],
          [4, -1],
        ],
        dash: 2,
      },
    ],
    points: [
      [3.25, 3, false, 'g', true, 'black'],
      [3.25, 2, false, 'f', true, 'black'],

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
    lines: [
      //Curva guia punteada
      {
        points: [
          [-4, 1],
          [4, 1],
        ],
        dash: 2,
      },
      //Curva guia punteada
      {
        points: [
          [-4, -1],
          [4, -1],
        ],
        dash: 2,
      },
    ],

    curves: [
      {
        //2-12 ejercicio 11
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-3, -1.5],
          [3, -1.5],
        ],
      },
      {
        interactive: true,
        strokeColor: 'purple',
        points: [
          [-3, 1],
          [3, 1],
        ],
      },
    ],
    points: [
      [3.22, -1.5, false, 'g', true, 'black'],
      [3.22, 1, false, 'f', true, 'black'],

      [-0.3, -1, false, '-1', true, 'black'],
      [-0.3, 1, false, '1', true, 'black'],

      [0, -1, true, '', true, 'black'],
      [0, 1, true, '', true, 'black']
    ],
  },
  board_3: {
    artifact: 'artifact_3',
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
    lines: [
      //Curva guia punteada
      {
        points: [
          [-4, 1],
          [4, 1],
        ],
        dash: 2,
      },
      //Curva guia punteada
      {
        points: [
          [-4, -1],
          [4, -1],
        ],
        dash: 2,
      },
    ],
    curves: [
      {
        //2-12 ejercicio 11
        interactive: true,
        strokeColor: 'purple',
        points: [
          [-3, -1],
          [3, -1],
        ],
      },
      {
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-3, 0.50],
          [3, 0.50],
        ],
      },
    ],
    points: [
      [3.2, -1, false, 'f', true, 'black'],
      [3.2, 0.50, false, 'g', true, 'black'],
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
    lines: [
      //Curva guia punteada
      {
        points: [
          [-4, 1],
          [4, 1],
        ],
        dash: 2,
      },
      //Curva guia punteada
      {
        points: [
          [-4, -1],
          [4, -1],
        ],
        dash: 2,
      },
    ],
    curves: [
      {
        //2-12 ejercicio 11
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-3, -1],
          [3, -1],
        ],
      },
      {
        interactive: true,
        strokeColor: 'purple',
        points: [
          [-3, 1.5],
          [3, 1.5],
        ],
      },
    ],
    points: [
      [3.25, -1, false, 'g', true, 'black'],
      [3.25, 1.3, false, 'f', true, 'black'],
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
    lines: [
      //Curva guia punteada
      {
        points: [
          [-4, 1],
          [4, 1],
        ],
        dash: 2,
      },
      //Curva guia punteada
      {
        points: [
          [-4, -1],
          [4, -1],
        ],
        dash: 2,
      },
    ],

    curves: [
      {
        //2-12 ejercicio 11
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-3, -1.5],
          [3, -1.5, false, 'g'],
        ],
      },
      {
        interactive: true,
        strokeColor: 'purple',
        points: [
          [-3, 1.5],
          [3, 1.5, false, 'f'],
        ],
      },
    ],
    points: [
      [-0.3, -1, false, '-1', true, 'black'],
      [-0.3, 1, false, '1', true, 'black'],

      [0, -1, true, '', true, 'black'],
      [0, 1, true, '', true, 'black']
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
    lines: [
      //Curva guia punteada
      {
        points: [
          [-4, 1],
          [4, 1],
        ],
        dash: 2,
      },
      //Curva guia punteada
      {
        points: [
          [-4, -1],
          [4, -1],
        ],
        dash: 2,
      },
    ],
    curves: [
      {
        //2-12 ejercicio 11
        interactive: true,
        strokeColor: 'purple',
        points: [
          [-3, -0.5],
          [3, -0.5, false, 'f'],
        ],
      },
      {
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-3, -1],
          [3, -1, false, 'g'],
           
        ],
      },
    ],


    points: [
    
      [-0.3, -1, false, '-1', true, 'black'],
      [-0.3, 1, false, '1', true, 'black'],
    ],
    /*  points: [
        [3.33, -1.78, false, "g", true, "black"],
        [3.5, -3.39, false, "f", true, "black"],
      ], */
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
    defBoard: 'board_0',

    buttonsActive: { points: true },
    curveMod: {
      color: 'black',
      interactive: true,
    },

    conditions: {
      text: 'texto error definido 2',
      operation: {
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
        //noise: 15,
        //            noiseY:0.2
      },
    },
  },
  artifact_2: {
    defBoard: 'board_1',

    buttonsActive: { points: true },
    curveMod: {
      color: 'red',
      interactive: true,
    },

    conditions: {
      operation: {
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
        noise: 15,
      },
    },
  },
  artifact_3: {
    defBoard: 'board_2',

    buttonsActive: { points: true },
    curveMod: {
      color: 'black',
      interactive: true,
    },

    conditions: {
      text: 'texto error definido 2',
      operation: {
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
        noise: 15,
      },
    },
  },
  artifact_4: {
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
    },
  },
  artifact_5: {
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
    },
  },
  artifact_6: {
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
    },
  },
  /*   artifact_6: {
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
};

generator(rDef);
mainOperation(defBoards, rDef);
