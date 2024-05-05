/* 
EngineToWay Definition 
 
Nota: El valor que se debe colocar el VALUEINPUTS debe estar en formato LATEX

@ Link para ver de que se trata: https://cortexjs.io/mathlive/        
@ Documentación e información de Definiciones: https://docs.google.com/document/d/1EhjchD7XvrH148LPJC4sK1WNrSmJOPsBXtVtwLx28So/edit?usp=sharing


*/
let colorLinePointFinish = '#00FFFF';
const genericStyleBoard = {
  grid: false,
  minWidth: 100,
  boundingbox: [-1, 4, 4, -2],
  axis: [false, true, true],
  valueAxis: {
    yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
    xd: [[0, 0], [1, 0]],
    colory: '#000000',
    colorx: '#000000'
  },
  reflectionAxie: { B: true }

};

const etwDefBoards = {

  board_0: {
    //artifact: "artifact_2",
    style: {...genericStyleBoard, boundingbox: [-2, 4, 4, -1]},


    lines: [
      {

        points: [[1, 0], [1, 3]],
        dash: 2,
        lastArrow: true,
      },
      {
        points: [[1, 3], [3, 3]],
        dash: 2,
        lastArrow: true,
      },
      {
        points: [[3, 3], [3, 0.3]],
        dash: 2,
        lastArrow: true,
      },
      {
        points: [[1, 0.3], [3, 0.3]],
        dash: 2,
        firstArrow: true,
      },
      {
        points: [[1, 0], [1, 5]],
        strokeColor: colorLinePointFinish,
        layer: 2,
        strokeWidth: 6,
        dash: 2,
      },



    ],


    curves: [
      {

        strokeColor: 'darkorange',
        points: [
          [0, 3.10], [0.64, 3.06], [1.88, 2.7], [2.91, 1.95], [3.33, 1.21], [3.51, 0.67]
        ]
      },
      {
        strokeColor: 'purple',
        points: [

          [0, -1.10], [1.16, -0.89], [2.17, -0.44], [3, 0.3], [3.33, 1.21], [3.46, 1.75]

        ]
      },
      {
        points: [
          [-3.20, -3.20], [3.20, 3.20]
        ]
      },



    ],

    points: [
      [0.5, 3.2, false, 'ƒ', null, null, null, 18],
      [2.1, -0.8, false, 'g', null, null, null, 18],
      [1, 0.3, true, '', 2.5, null, 'green']


    ],

  },
  board_1: {
    //artifact: "artifact_2",
    style: genericStyleBoard,

    lines: [
      {
        points: [[1.8, 0.2], [1.8, 1.8]],
        dash: 2,
        firstArrow: true,
      },
      {
        points: [[1.8, 1.8], [3, 1.8]],
        dash: 2,
        firstArrow: true,
      },
      {
        points: [[3, 1.8], [3, 0]],
        dash: 2,
        firstArrow: true,
      },
      {
        points: [[1.8, 0.2], [3, 0.2]],
        dash: 2,
        lastArrow: true,
      },

      {
        points: [[3, 0], [3, 5]],
        strokeColor: colorLinePointFinish,
        layer: 2,
        strokeWidth: 6,
        dash: 2,
      },

    ],


    curves: [
      {
        strokeColor: 'darkorange',
        points: [
          [0, 3.10], [0.64, 3.06], [1.88, 2.7], [2.91, 1.95], [3.33, 1.21], [3.51, 0.67]
        ]
      },
      {
        strokeColor: 'purple',
        points: [

          [-0.63, -0.11], [0.13, -0.11], [1.77, 0.2], [2.5, 0.6], [3, 1.2], [3.5, 2.5]

        ]
      },
      {
        points: [
          [-3.20, -3.20], [3.20, 3.20]
        ]
      },



    ],

    points: [
      [1, 3, false, 'ƒ', null, null, null, 18],
      [2.1, 0.4, false, 'g', null, null, null, 18, null, null, 18],
      [3, 0.2, true, '', 2.5, null, 'green', 18]


    ],

  },
  board_2: {
    //artifact: "artifact_2",
    style: genericStyleBoard,

    lines: [


      {

        points: [[1, 0], [1, 1]],
        dash: 2,
        lastArrow: true,

      },
      {
        points: [[1, 1], [3.15, 1]],
        dash: 2,
        lastArrow: true,

      }, {
        points: [[3.15, 1], [3.15, 1.7]],
        dash: 2,
        lastArrow: true,

      }, {
        points: [[3.15, 1.7], [1, 1.7]],
        dash: 2,
        lastArrow: true,

      },
      {
        points: [[1, 0], [1, 5]],
        strokeColor: colorLinePointFinish,
        layer: 2,
        strokeWidth: 6,
        dash: 2,
      },
    ],


    curves: [
      {
        strokeColor: 'darkorange',
        points: [
          [0, 3.10], [0.82, 3.1], [2, 2.79], [3, 2], [3.33, 1.3], [3.51, 0.67]
        ]
      },
      {
        strokeColor: 'purple',
        points: [

          [0, -1.10], [1.16, -0.89], [2.17, -0.44], [2.97, 0.36], [3.28, 1.36]

        ]
      },
      {
        points: [
          [-3.20, -3.20], [3.20, 3.20]
        ]
      }


    ],

    points: [
      [0.5, 2.8, false, 'ƒ', null, null, null, 18],
      [0.5, -1.3, false, 'g', null, null, null, 18],
      [1, 1.7, true, '', 2.5, null, 'green']


    ],

  },
  board_3: {
    //artifact: "artifact_2",

    style: {
      ...genericStyleBoard,
      boundingbox: [-2, 4, 4, -2],
    },
    lines: [
      {
        points: [[1, 0], [1, 5]],
        strokeColor: colorLinePointFinish,
        layer: 2,
        strokeWidth: 6,
        dash: 2,
      },

      {

        points: [[1, 0], [1, 1]],
        dash: 2,
        lastArrow: true,

      },
      {
        points: [[1, 1], [2.3, 1]],
        dash: 2,
        lastArrow: true,

      },
      {
        points: [[2.3, 1], [2.3, 2.3]],
        dash: 2,
        lastArrow: true,

      },
      {
        points: [[2.3, 2.3], [1, 2.3]],
        dash: 2,
        lastArrow: true,
      },



    ],


    curves: [
      {
        strokeColor: 'darkorange',
        points: [

          [2.16, -3.17], [2.16, -2.01], [2.14, 0.32], [2.51, 1.32], [3.05, 1.91], [3.74, 2.24]
        ]
      },

      {
        points: [
          [-3.20, -3.20], [3.20, 3.20]
        ]
      },



    ],

    points: [

      [2.3, -1.5, false, 'ƒ', null, null, null, 18],
      [1, 2.30, true, '', 2.5, null, 'green']


    ],

  },
  board_4: {
    //artifact: "artifact_2",
    style: genericStyleBoard,
    lines: [
      {
        points: [[1, 0], [1, 5]],
        strokeColor: colorLinePointFinish,
        layer: 2,
        strokeWidth: 6,
        dash: 2,
      },
      {
        points: [[1, 0], [1, 2]],
        dash: 2,
        lastArrow: true,

      },
      {
        points: [[1, 2], [2, 2]],
        dash: 2,
        lastArrow: true,

      },

      {
        points: [[2, 2], [2, 3.3]],
        dash: 2,
        lastArrow: true,

      },
      {
        points: [[2, 3.3], [1, 3.3]],
        dash: 2,
        lastArrow: true,

      },


    ],


    curves: [
      {
        strokeColor: 'darkorange',
        points: [
          [0.68, -1.06], [1, 2], [1.40, 2.95],
          [2, 3.3], [3.07, 3.40]

        ]
      },
      {
        points: [
          [-3.20, -3.20], [5.20, 5.20]
        ]
      },

    ],

    points: [

      [1, -1, false, 'ƒ', null, null, null, 18],
      [1, 3.3, true, '', 2.5, null, 'green']


    ],

  },
  board_5: {
    //artifact: "artifact_2",
    style: {...genericStyleBoard, boundingbox: [-1, 4, 4, -2],},

    lines: [
      {
        points: [[1, 0], [1, 5]],
        strokeColor: colorLinePointFinish,
        layer: 2,
        strokeWidth: 6,
        dash: 2,
      },

      {
        points: [[1, 0], [1, 1]],
        dash: 2,
        lastArrow: true,

      },
      {
        points: [[1, 1], [2, 1]],
        dash: 2,
        lastArrow: true,

      },
      {
        points: [[2, 1], [2, 2]],
        dash: 2,
        lastArrow: true,

      },
      {
        points: [[2, 2], [2.8, 2]],
        dash: 2,
        lastArrow: true,

      },
      {
        points: [[2.8, 2], [2.8, 2.8]],
        dash: 2,
        lastArrow: true,

      },
      {
        points: [[2.8, 2.8], [1, 2.8]],
        dash: 2,
        lastArrow: true,
      },


    ],


    curves: [
      {
        strokeColor: 'darkorange',
        points: [
          [1.65, -1.61], [1.95, 0.89], [2.34, 1.65], [3.05, 2.11], [3.77, 2.26]
          //[2.16, -3.17],[2.16, -2.01],[2.14, 0.32],[2.51, 1.32],[3.05, 1.91],[3.74, 2.24]
        ]
      },

      {
        points: [
          [-3.20, -3.20], [3.20, 3.20]
        ]
      },



    ],

    points: [

      [2, -1.5, false, 'ƒ', null, null, null, 18],
      [1, 2.8, true, '', 2.5, null, 'green', 18]
    ],

  },
};

//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const etwDef = {

  example_1: {

    buttonsActive: { validate: false },

    showTitle: false,
    artifactTitle: 'Ida',
    showWayNameInput: true,

    textOfHelp: '',

    textOfExample: {
      title: 'HOLA COMO ESTA',
      info: 'texto abajo del board'
    },
    inputsDefault: [
      [[3, -0.2], false, 'f(x)', 1],
      [[1, -0.2], false, 'x', 2],
      [[-0.5, 3], false, 'f(x)', 3],
      [[-0.7, 0.3], false, 'g(f(x))', 4]],
    conditions: {
      valueWayName: [
        'g\\left(f\\left(x\\right)\\right)'],
    }
  },
  artifact_1: {
    debug: false,
    buttonsActive: { points: true },

    showTitle: false,
    artifactTitle: 'Ida',
    //showText: false,
    showWayNameInput: true,
    textOfHelp: '',

    textOfExample: {
      title: '',
      info: ''
    },
    inputsDefault: [
      [[3, -0.2], false, 'x', 1],
      [[1.8, -0.2], true, '', 2],
      [[-0.3, 1.9], true, '', 3],
      [[-0.3, 0.3], true, '', 4]],
    conditions: {
      valueWayName: 'g\\left(f\\left(x\\right)\\right)',


      valueInputs: [
        [2, 'f\\left(x\\right)'], [3, 'f\\left(x\\right)'], [4, 'g\\left(f\\left(x\\right)\\right)']
      ],




    }
  },
  artifact_2: {
    debug: false,
    buttonsActive: { points: true },
    showTitle: false,
    artifactTitle: 'Ida',
    //showText: false,
    showWayNameInput: true,
    textOfHelp: '',

    textOfExample: {
      title: '',
      info: ''
    },
    inputsDefault: [
      [[3.1, -0.2], true, '', 1],
      [[1, -0.2], false, 'x', 2],
      [[-0.3, 1.7], true, '', 3],
      [[-0.3, 1], true, '', 4]],
    conditions: {
      valueWayName: 'f\\left(g^{-1}\\left(x\\right)\\right)',


      valueInputs: [
        [1, 'g^{-1}\\left(x\\right)'],
        [3, 'f\\left(g^{-1}\\left(x\\right)\\right)'],
        [4, 'x']
      ],




    }
  },

  /////////////////////////
  artifact_3: {
    debug: false,
    buttonsActive: { points: true },

    showTitle: false,
    artifactTitle: 'Ida',
    showText: false,
    showWayNameInput: true,
    textOfHelp: '',

    textOfExample: {
      title: '',
      info: ''
    },

    inputsDefault: [
      [[2.1, -0.25], true, '', 1],
      [[1, -0.25], false, 'x', 2],
      [[-0.3, 2.3], true, '', 3],
      [[-0.3, 1], true, '', 4]
    ],
    conditions: {
      valueWayName: 'f^{-1}\\left(x\\right)',
      valueInputs: [
        [1, 'f^{-1}\\left(x\\right)'],
        [3, 'f^{-1}\\left(x\\right)'],
        [4, 'x']
      ],




    }
  },
  artifact_4: {
    debug: false,
    buttonsActive: { points: true },

    showTitle: false,
    artifactTitle: 'Ida',
    showText: false,
    showWayNameInput: true,
    textOfHelp: '',

    textOfExample: {
      title: '',
      info: ''
    },
    inputsDefault: [
      [[2, -0.2], true, '', 1],
      [[1, -0.2], false, 'x', 2],
      [[-0.3, 3.3], true, '', 3],
      [[-0.3, 2], true, '', 4]
    ],
    conditions: {

      valueWayName: 'f\\left(f\\left(x\\right)\\right)',
      valueInputs: [
        [1, 'f\\left(x\\right)'], [3, 'f\\left(f\\left(x\\right)\\right)'], [4, 'f\\left(x\\right)']
      ],




    }
  },
  artifact_5: {
    debug: false,
    buttonsActive: { points: true },

    showTitle: false,
    artifactTitle: 'Ida',
    showText: false,
    showWayNameInput: true,
    textOfHelp: '',

    textOfExample: {
      title: '',
      info: ''
    },
    inputsDefault: [
      [[2.8, -0.2], true, '', 1],
      [[1.9, -0.2], true, '', 2],
      [[1, -0.2], false, 'x', 3],
      [[-0.3, 2.8], true, '', 4],
      [[-0.3, 2], true, '', 5],
      [[-0.3, 1], true, '', 6]
    ],
    conditions: {
      valueWayName: 'f^{-1}\\left(f^{-1}\\left(x\\right)\\right)',

      valueInputs: [
        [1, 'f^{-1}\\left(f^{-1}\\left(x\\right)\\right)'],
        [2, 'f^{-1}\\left(x\\right)'],
        [4, 'f^{-1}\\left(f^{-1}\\left(x\\right)\\right)'],
        [5, 'f^{-1}\\left(x\\right)'],
        [6, 'x']
      ],




    }
  },


};

etwMain(etwDef, etwDefBoards);
