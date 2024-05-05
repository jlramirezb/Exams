
/*  strokeColor: "purple",
            strokeColor: "darkorange", */
const defOne = {
  style: {
    grid: true,
    maxHeight: 300,
    maxWidth: 300,
    boundingbox: [-4, 4, 4, -4],
    axis: [false, true, true],
    valueAxis: {
      yd: [
        [0, 0], [0, 1]
      ] /*dirección del eje y*/,
      xd: [
        [0, 0], [1, 0]
      ],
      colory: '#000000',
      colorx: '#000000'
    },
  },
  curves: [
    {
      typeCurve: 'curve',
      name: {
        text: 'g',
        x: 1.4,
        y: 3.6,
      },
      strokeColor: 'darkorange',
      interactive: true,
      form: 0,
      points: [[-3.3, -1.3], [1.3, 3.3]],
    },
    {
      typeCurve: 'curve',
      strokeColor: 'purple',
      name: {
        text: 'f',
        x: 2.2,
        y: 0.6,
      },
      interactive: true,
      form: 1,
      points: [[1, 0], [1.40, 0.7], , [2, 1], [2.65, 0.7], [3, 0]],
    },
  ],
  lines: [
    {
      typeCurve: 'bisectriz',

      points: [[-8, -8], [8, 8]],
      interactive: true,
    },
  ],
  points: [
    { x: -3, y: 0, visible: true, interactive: true },
    { x: -2, y: 0, visible: true, interactive: true },
    { x: -1, y: 0, visible: true, interactive: true },
    { x: 0, y: 0, visible: true, interactive: true },
    { x: 1, y: 0, visible: true, interactive: true },
    { x: 2, y: 0, visible: true, interactive: true },
    { x: 3, y: 0, visible: true, interactive: true },
    { x: 3.3, y: 0, visible: true, interactive: true },
  ],
};

const two = {
  style: {
    grid: true,
    maxHeight: 300,
    maxWidth: 300,
    boundingbox: [-4, 4, 4, -4],
    axis: [false, true, true],
    valueAxis: {
      yd: [
        [0, 0], [0, 1]
      ] /*dirección del eje y*/,
      xd: [
        [0, 0], [1, 0]
      ],
      colory: '#000000',
      colorx: '#000000'
    },
  },
  curves: [
    {
      strokeColor: 'purple',
      name: {
        text: 'f',
        x: 1.4,
        y: 3.6,
      },
      typeCurve: 'curve',
      interactive: true,
      points: [[-3, -0.9], [-1, 0], [0, 0.8], [1, 2], [1.52, 3]],
    },
    {
      strokeColor: 'darkorange',
      name: {
        text: 'g',
        x: 3.3,
        y: 1.6,
      },
      typeCurve: 'curve',
      interactive: true,
      points: [[-0.9, -3], [0, -1], [0.8, 0], [2, 1], [3, 1.52]],
    },


  ],
  lines: [
    {
      typeCurve: 'bisectriz',

      points: [[-8, -8], [8, 8]],
      interactive: true,
    },
  ],
  points: [
    { x: -3, y: 0, visible: true, interactive: true },
    { x: -2, y: 0, visible: true, interactive: true },
    { x: -1, y: 0, visible: true, interactive: true },
    { x: 0, y: 0, visible: true, interactive: true },
    { x: 1, y: 0, visible: true, interactive: true },
    { x: 2, y: 0, visible: true, interactive: true },
    { x: 3, y: 0, visible: true, interactive: true },
    { x: 3.3, y: 0, visible: true, interactive: true },
  ],

};
const defBoards = {
  board_0: {
    artifact: 'artifact_1',
    ...defOne,
    curves: [
      ...defOne.curves,
      {
        addToObjet: {
          useIntersection: false,
        },
        layer: 9,
        visible: false,
        strokeColor: 'green',
        points: [[-1, 0], [-0.65, 0.7], [0, 1], [0.65, 0.7], [1, 0]]
      }
    ]
  },
  board_1: {
    artifact: 'artifact_2',

    ...defOne,
    curves: [
      ...defOne.curves,
      {
        addToObjet: {
          useIntersection: false,
        },
        visible: false,
        strokeColor: 'green',
        points: [[1, 1], [1.35, 1.7], [2, 2], [2.65, 1.7], [3, 1]]
      }
    ]
  },
  board_2: {
    artifact: 'artifact_3',
    ...two,
    curves: [
      ...two.curves,
      {
        addToObjet: {
          useIntersection: false,
        },
        layer: 9,
        visible: false,
        strokeColor: 'green',
        points: [[0, 0], [3, 3]]
      }
    ]
  },
  board_3: {
    artifact: 'artifact_4',
    ...two,
    curves: [
      ...two.curves,
      {
        addToObjet: {
          useIntersection: false,
        },
        layer: 9,
        visible: false,
        strokeColor: 'green',
        points: [[-1, -1], [2, 2]]
      }
    ]
  },

  board_4: {
    artifact: 'artifact_5',
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [
          [0, 0], [0, 1]
        ] /*dirección del eje y*/,
        xd: [
          [0, 0], [1, 0]
        ],
        colory: '#000000',
        colorx: '#000000'
      },
    },
    curves: [
      {
        typeCurve: 'curve',
        interactive: true,
        form: 0,
        points: [[-2.58, 0.28],
          [2.15, 1.25],
          [2.65, 1.75],
          [2.7, 2.25]],
      }
    ],
    lines: [
      {
        typeCurve: 'bisectriz',
        name: {
          text: 'f',
          x: 3,
          y: 1,
        },
        points: [[-8, -8], [8, 8]],
        interactive: true,
      },
    ],

  },
};
//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const rDef = {
  artifact_1: {
    numberBoard: '1',
    enumTop: 'f(g( ))',
    buttonsActive: { points: true },
    conditions: {
      road: {
        curveReflex: [{
          curve: { index: 2 },
        }],
        points: [
          { forks: [[[-3, 0]]] },
          { forks: [[[-2, 0]]] },
          { forks: [[[-1, 0], [-1, 1], [1, 1], [1, 0], [-1, 0]]] },
          { forks: [[[0, 0], [0, 2], [2, 2], [2, 1], [0, 1]]] },
          { forks: [[[1, 0], [1, 3], [3, 3], [3, 0], [1, 0]]] },
          { forks: [[[2, 0]]] },
          { forks: [[[3, 0]]] },
          { forks: [[[3.3, 0]]] }

        ],
      },
    },
  },
  artifact_2: {
    enumTop: 'g(f( ))',
    numberBoard: '2',
    conditions: {
      road: {
        curveReflex: [{
          curve: { index: 2 },
        }],
       // text: 'texto error definido 2',
        points: [
          { forks: [[[-3, 0]]] },
          { forks: [[[-2, 0]]] },
          { forks: [[[-1, 0]]] },
          { forks: [[[0, 0]]] },
          { forks: [[[1, 0], [0, 0], [0, 2], [1, 2]]] },
          { forks: [[[2, 0], [2, 1], [1, 1], [1, 3], [2, 3]]] },
          { forks: [[[3, 0], [0, 0], [0, 2], [3, 2]]] },
          { forks: [[[3.3, 0]]] },


        ],
      },
    },
  },
  /* voy por aqui */
  artifact_3: {

    enumTop: 'f(g( ))',
    numberBoard: '3',
    conditions: {
      road: {
        curveReflex: [{
          curve: { index: 2 },
        }],
        points: [
          { forks: [[[-3, 0]]] },
          { forks: [[[-2, 0]]] },
          { forks: [[[-1, 0]]] },
          { forks: [[[0, 0], [0, -1], [-1, -1], [-1, 0], [0, 0]]] },
          { forks: [[[1, 0], [1, 0.2], [0.2, 0.2], [0.2, 1], [1, 1]]] },
          { forks: [[[2, 0], [2, 1], [1, 1], [1, 2], [2, 2]]] },
          { forks: [[[3, 0], [3, 1.52], [1.52, 1.52], [1.52, 3], [3, 3]]] },
          { forks: [[[3.3, 0]]] }
        ]
      },
      /*   road: {
              points: [
                 { forks: [[[-3, 0]]] },
                 { forks: [[[-2, 0]]] },
                 { forks: [[[-1, 0]]] },
                 { forks: [[[0, 0]]] },
                 { forks: [[[0, 0], [0, -1], [-1, -1], [-1, 0], [0, 0]]] },
                 { forks: [[[1, 0], [1, 1], [0, 1], [0, 0], [1, 0]]] },
                 { forks: [[[2, 0], [1, 1], [1, 0], [1, 2], [2, 2]]] },
                 { forks: [[[3, 0], [3, 5.7], [1.5, 1.5], [1.35, 2.96], [3, 3]]] },
  
  
  
              ],
           }, */
    },
  },

  artifact_4: {
    enumTop: ' g(f())',

    numberBoard: '4',
    conditions: {
      road: {
        points: [
          { forks: [[[-3, 0], [-3, -1], [-1, -1], [-0.97, -3.01], [-3, -3]]] },
          { forks: [[[-2, 0], [-2, -0.5], [-0.51, -0.51], [-0.51, -2], [-2, -2]]] },
          { forks: [[[-1, 0], [-1, -1], [0, -1], [0, 0]]] },
          { forks: [[[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]]] },
          { forks: [[[1, 0], [1, 1], [0, 1], [0, 0]]] },
          { forks: [[[2, 0]]] },
          { forks: [[[3, 0]]] },
          { forks: [[[3.3, 0]]] },

        ],
      },
    },
  },
  artifact_5: {
    numberBoard: '5',
    buttonsActive: { config: false, asymptotes: false },
    conditions: {
      reciprocalCurves: {
        curves: [
          {
            mode: true,
            points: [
              [0.28, -2.58],
              [1.25, 2.15],
              [1.75, 2.65],
              [2.25, 2.7]
            ],
          },

        ],
      },
    },
  },

};
const newrDef = {
  artifactHtml: {
    datadefault: [
      {
        type: 10,
        classGlobal: 'defRoad',
        contents: [
          { dataSet: { board: 'board_0' } },
          { dataSet: { board: 'board_1' } },
          { dataSet: { board: 'board_2' } },
          { dataSet: { board: 'board_3' } },
        ],
      },
      [1,'En este recuadro grafique la curva g tal que la curva g(ƒ()) sea la bisectriz.'],
      {
        type: 10,
        classGlobal: 'operationCurves',
        contents: [
          { dataSet: { board: 'board_4' } },
        ],
      },
      {
        type: 11,// tipo 
        classGlobal: 'QA',
        parent: '#oneContainer',
        contents: {

          artifact_6: {
            allinputs: [],
            dataInteraction: { incorrect: 0, correct: 0 },
            questions: [
              {
                type: 1,
                question: '¿En los recuadros 1 y 2 las curvas son las mismas?',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'Sí'
                }
              }, {
                type: 1,
                question: '¿En los cuadros 1 y 2 las curvas compuestas resultaron ser las mismas?',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'No'
                }
              }, {
                type: 1,
                question: '¿Es importante el orden de composición?.',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'Sí'
                }
              },
              {
                type: 1,
                question: '¿En los cuadros 3 y 4, el orden de composición influye en la curva resultante?',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'No'
                }
              }
            ]

          },




        },

      },
    ]
  }
};

generator(newrDef);
mainOperation(defBoards, rDef);
roadMain(defBoards, rDef);