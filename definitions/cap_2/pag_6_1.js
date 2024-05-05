const defBoards = {
  board_1: {
    artifact: 'artifact_1',
    style: {
      reflectionAxie: {
        Y: { interactive: true },
        X: { interactive: true },
        B: { interactive: true },
      },
      grid: true,
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
      },
    },

    curves: [
      {
        typeCurve: 'curve',
        visible: false,
        interactive: true,
        points: [
          [1, 3],
          [1.8, 2.9],
          [2.5, 2.5],
          [2.9, 1.8],
          [3, 1],
        ],
      },
    ],
  },
  board_2: {
    artifact: 'artifact_2',
    style: {
      reflectionAxie: {
        Y: { interactive: true },
        X: { interactive: true },
        B: { interactive: true },
      },
      grid: true,
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
      {
        points: [
          [-8, -8],
          [8, 8],
        ],
        interactive: true,
        typeCurve: 'bisectriz',
      },
    ],

    curves: [
      {
        visible: true,
        points: [
          [-2.85, 1.01],
          [-2.54, 1.82],
          [-0.53, 2.8],
          [1.5, 3.07],
          [3.47, 2.97],
        ],
      },

    ],
  },
  board_3: {
    artifact: 'artifact_3',
    style: {
      reflectionAxie: {
        Y: { interactive: true },
        X: { interactive: true },
        B: { interactive: true },
      },
      grid: true,
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

    texts: [
      {
        x: -2.7,
        y: 3.4,
        text: 'Curva=Bisectriz',
        style: {
          fontWeight: 'bold',
          fontSize: 14,
        },
      },

    ],

    // points: [[-2.7, 2.98, false, "Curva = Bisectriz", false]],
  },
  board_4: {
    artifact: 'artifact_4',
    style: {
      reflectionAxie: {
        Y: { interactive: true },
        X: { interactive: true },
        B: { interactive: true },
      },
      grid: true,
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
      {
        points: [
          [-8, -8],
          [8, 8],
        ],
        interactive: true,
        typeCurve: 'bisectriz',
      },
    ],

    curves: [
      {
        visible: true,
        points: [
          [0.21, 0.23],
          [1.67, 0.44],
          [3.58, 0.45],
        ],
      },

    ],
  },
  board_5: {
    artifact: 'artifact_5',
    style: {
      reflectionAxie: {
        Y: { interactive: true },
        X: { interactive: true },
        B: { interactive: true },
      },
      grid: true,
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
      {
        points: [
          [-8, -8],
          [8, 8],
        ],
        interactive: true,
        typeCurve: 'bisectriz',
      },
    ],

    curves: [
      {
        points: [
          [1.75, 0],
          [1.97, 0.57],
          [2.39, 0.86],
          [2.96, 0.83],
          [3.3, 0.5],
          [3.4, 0],
        ],
      },

    ],
  },
  board_6: {
    artifact: 'artifact_6',
    style: {
      reflectionAxie: {
        Y: { interactive: true },
        X: { interactive: true },
        B: { interactive: true },
      },
      grid: true,
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
      {
        points: [
          [-8, -8],
          [8, 8],
        ],
        interactive: true,
        typeCurve: 'bisectriz',
      },
    ],

    curves: [
      {
        points: [
          [-1.58, 0],
          [-1.39, 0.57],
          [-0.84, 0.83],
          [-0.25, 0.68],
          [-0, 0.3],
          [0, 0],
          [0.98, 0.53],
          [1.84, 1.14],
          [2.83, 2.05],
          [3.18, 3.15],
        ],
      },

    ],
  },
  board_7: {
    artifact: 'artifact_7',
    style: {
      reflectionAxie: {
        Y: { interactive: true },
        X: { interactive: true },
        B: { interactive: true },
      },
      grid: true,
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
      {
        points: [
          [-8, -8],
          [8, 8],
        ],
        interactive: true,
        typeCurve: 'bisectriz',
      },
    ],

    curves: [
      {
        points: [
          [-3, 0.34],
          [-1.73, 0.79],
          [-0.75, 1.41],
          [0.46, 1.63],
          [1.55, 1.05],
          [1.9, 0],
        ],
      },

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
          { dataSet: { board: 'board_1', }, },
        ],
      },
    ],
  },
  artifactHtml_1: {
    datadefault: [
      [1, 'Dibuje, sin utilizar los caminos, las curvas inversas.'],
      {
        type: 10, //tipo 10 genera los contenedores con los dataset y clases para los boards
        classGlobal: 'operationCurves',
        contents: [
          { dataSet: { board: 'board_2', }, },
          { dataSet: { board: 'board_3', }, },
          { dataSet: { board: 'board_4', }, },

          { dataSet: { board: 'board_5', }, },
          { dataSet: { board: 'board_6', }, },
          { dataSet: { board: 'board_7', }, },
        ],
      },
    ],
  },

  artifact_1: {
    buttonsActive: {
      points: true,
      asymptotes: false
    },
    curveMod: {
      sort: false,
      color: 'black',
      interactive: true,
    },
    helpMsg: {
      title: 'Operaciones con curva',
      text: 'La inversa de la curva a crear, debe ser igual a ella misma.',
    },

    conditions: {
      others: {
        curve: {
          same: true,
          modNegative: [0],
        },
        mod: true,
        text: 'Error curva invalida',
      },
    },
  },
  artifact_2: {
    buttonsActive: {
      points: true,
      asymptotes: false
    },
    curveMod: {
      sort: false,
      color: 'black',
      interactive: true,
    },

    conditions: {
      reciprocalCurves: {
        text: 'la curva no es la inversa',
        curves: [
          {
            mode: true,
            points: [
              [1.01, -2.85],
              [1.82, -2.54],
              [2.8, -0.53],
              [3.07, 1.5],
              [2.97, 3.47],
            ],
          },

        ],
      },
    },
  },

  artifact_3: {
    buttonsActive: {
      points: true,
      asymptotes: false
    },
    curveMod: {
      sort: false,
      color: 'black',
      interactive: true,
    },

    conditions: {
      reciprocalCurves: {
        text: 'Error, esta curva no es la inversa,',
        curves: [
          {
            mode: true,
            points: [[-4, -4], [4, 4]],
          },
        ],
      },
    },
  },

  artifact_4: {
    buttonsActive: {
      points: true,
      asymptotes: false
    },
    curveMod: {
      sort: false,
      color: 'red',
      interactive: true,
    },


    conditions: {
      reciprocalCurves: {
        text: 'Error, esta curva no es la inversa,',
        curves: [
          {
            strokeColor: 'orange',
            mode: true,
            points: [
              [0.23, 0.21],
              [0.44, 1.67],
              [0.45, 3.58],
            ],
          },
        ],
      },
    },
  },

  artifact_5: {
    buttonsActive: {
      points: true,
      asymptotes: false
    },
    curveMod: {
      sort: false,
      color: 'red',
      interactive: true,
    },


    conditions: {
      reciprocalCurves: {
        text: 'Error, esta curva no es la inversa,',
        curves: [
          {
            strokeColor: 'green',
            mode: true,
            points: [
              [0, 1.75],
              [0.57, 1.97],
              [0.86, 2.39],
              [0.83, 2.96],
              [0.5, 3.3],
              [0, 3.4],
            ],
          },
        ],
      },
    },
  },

  artifact_6: {
    buttonsActive: {
      points: true,
      asymptotes: false
    },
    curveMod: {
      sort: false,
      color: 'red',
      interactive: true,
    },

    conditions: {
      reciprocalCurves: {
        text: 'La curva no es la inversa,',
        curves: [
          {
            mode: true,
            visible: false,
            points: [
              [0, -1.58],
              [0.57, -1.39],
              [0.83, -0.84],
              [0.68, -0.25],
              [0.3, -0],
              [0, 0],
              [0.53, 0.98],
              [1.14, 1.84],
              [2.05, 2.83],
              [3.15, 3.18],
            ],
          },
        ],
      },

    },
  },
  artifact_7: {
    buttonsActive: {
      points: true,
      asymptotes: false
    },
    curveMod: {
      sort: false,
      color: 'red',
      interactive: true,
    },

    conditions: {
      reciprocalCurves: {
        text: 'Error, esta curva no es la inversa,',
        curves: [
          {
            mode: true,
            points: [
              [0.34, -3],
              [0.79, -1.73],
              [1.41, -0.75],
              [1.63, 0.46],
              [1.05, 1.55],
              [0, 1.9],
            ],
          },

        ],
      },
    },
  }

};

generator(rDef);
mainOperation(defBoards, rDef);
