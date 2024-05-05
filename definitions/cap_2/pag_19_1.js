const genericStyles = {
  grid: true,
  axis: [false, true, true],
  boundingbox: [-4, 4, 4, -4],
  valueAxis: {
    yd: [[0, 0], [0, 1]], /*dirección del eje y*/
    xd: [[0, 0], [1, 0]],
  },
};

const boardChield = {
  grid: true,
  maxWidth: 150,
  maxHeight: 150,
  axis: [false, true, true],
  boundingbox: [-4, 4, 4, -4],
  valueAxis: {
    yd: [[0, 0], [0, 1]], /*dirección del eje y*/
    xd: [[0, 0], [1, 0]],
  },
};

const allDef = {
  debug: false,
  buttonsActive: { points: true },
  conditions: {
    reciprocalCurves: {
      curves: [
        {
          points: [[-1.5, 1], [1.5, 1]]
        }
      ],
    },

  },
};

const defBoards = {
  board_0: {//chield
    style: {
      ...boardChield
    },
    curves: [
      [[
        [-2, -3],
        [-1.4, -1],
        [0, 1],
        [1.4, -1],
        [2, -3]
      ]],
    ],
  },
  board_1: {//1
    artifact: 'artifact_1',
    style: {
      ...genericStyles
    },
    curves: [
      {
        flex: 0,
        points: [[-2, -3], [3, 2]],
      }, {
        strokeCOlor: 'violet',
        visible: false,
        points: [
          [-2, 1],
          [2, -3]
        ]
      }, /* {
            strokeCOlor: 'blue',
            points: [
               [-2, -3],
               [-1.4, -1],
               [0, 1],
               [1.4, -1],
               [2, -3]
            ]
         }, */

    ],
  },

  board_2: {//chield
    style: {
      ...boardChield
    },
    curves: [
      [[
        [-2, 3],
        [-1.4, 1],
        [0, -1],
        [1.4, 1],
        [2, 3]
      ]],
    ],

  },
  board_3: {//2
    artifact: 'artifact_2',
    style: {
      ...genericStyles
    },
    curves: [
      {
        flex: 0,
        points: [[-2, -3], [3, 2]],
      }, {
        strokeCOlor: 'violet',
        visible: false,
        points: [
          [-2, -1],
          [2, 3]
        ]
      }, /* {
            strokeCOlor: 'blue',
            points: [
               [-2, 3],
               [-1.4, 1],
               [0, -1],
               [1.4, 1],
               [2, 3]
            ]
         }, */



    ],
  },

  board_4: {//chield
    style: {
      ...boardChield
    },

    curves: [

      [[
        [-2, 3],
        [-1.4, 1],
        [0, -1],
        [1.4, 1],
        [2, 3]
      ]],

    ],

  },
  board_5: {//3 falta
    artifact: 'artifact_3',
    style: {
      ...genericStyles,
    },
    curves: [
      {

        points: [
          [-2, 3],
          [2, -1]
        ]
      }, {
        interactive: true,
        points: [[2, -3], [-2, 1]],
        strokeCOlor: 'violet',
        visible: false,
      }, /* {
            interactive: true,
            points: [
               [-2, 3],
               [-1.4, 1],
               [0, -1],
               [1.4, 1],
               [2, 3]
            ],
         } */


    ],

  },

  board_6: {//chield
    style: {
      ...boardChield
    },
    curves: [
      [[
        [-2, -3],
        [-1.4, -1],
        [0, 1],
        [1.4, -1],
        [2, -3]
      ]],
    ],
  },
  board_7: {//4
    artifact: 'artifact_4',
    style: {
      ...genericStyles,
    },
    curves: [
      {
        strokeCOlor: 'violet',
        visible: false,
        flex: 0,
        points: [[-2, -3], [2, 1]],
      }, {

        points: [
          [-2, 1],
          [2, -3]
        ]
      }, /* {
            strokeCOlor: 'blue',
            points: [
               [-2, -3],
               [-1.4, -1],
               [0, 1],
               [1.4, -1],
               [2, -3]
            ]
         }, */
    ],

  },

  board_8: {//chield
    style: {
      ...boardChield
    },

    curves: [
      [[
        [-3, -3],
        [-2.4, -1],
        [-1, 1],
        [0.4, -1],
        [1, -3]
      ]],
    ],

  },
  board_9: {//5
    artifact: 'artifact_5',
    style: {
      ...genericStyles
    },

    curves: [
      {
        strokeCOlor: 'violet',
        visible: false,
        flex: 0,
        points: [[-3, -3], [1, 1]],
      }, {

        points: [
          [-3, 1],
          [1, -3]
        ]
      }, /* {
            strokeCOlor: 'blue',
            points: [
               [-3, -3],
               [-2.4, -1],
               [-1, 1],
               [0.4, -1],
               [1, -3]
            ]
         }, */
    ],

  },

  board_10: {//chield
    style: {
      ...boardChield
    },
    curves: [

      [[
        [-3, 3],
        [-2.4, 1],
        [-1, -1],
        [0.4, 1],
        [1, 3]
      ]]
    ],

  },
  board_11: {//6
    artifact: 'artifact_6',
    style: {
      ...genericStyles
    },
    curves: [
      {
        strokeCOlor: 'violet',
        visible: false,
        flex: 0,
        points: [[-3, -3], [1, 1]],
      }, {

        points: [
          [-3, -1],
          [1, 3]
        ]
      }, /* {
            strokeCOlor: 'blue',
            points: [
               [-3, 3],
               [-2.4, 1],
               [-1, -1],
               [0.4, 1],
               [1, 3]
            ]
         }, */
    ],
  },
};
//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const rDef = {
  artifactHtml: {
    datadefault: [

      {
        type: 10,//tipo 10 genera los contenedores con los dataset y clases para los boards
        classGlobal: 'operationCurves',
        contents: [

          {
            childAfter: { class: 'defBoard otherBoard', dataSet: { board: 'board_0' } },
            dataSet: { board: 'board_1' },
          },
          {
            childAfter: { class: 'defBoard otherBoard', dataSet: { board: 'board_2' } },
            dataSet: { board: 'board_3' },
          }, {
            childAfter: { class: 'defBoard otherBoard', dataSet: { board: 'board_4' } },
            dataSet: { board: 'board_5' },
          }, {
            childAfter: { class: 'defBoard otherBoard', dataSet: { board: 'board_6' } },
            dataSet: { board: 'board_7' },
          },
          {
            childAfter: { class: 'defBoard otherBoard', dataSet: { board: 'board_8' } },
            dataSet: { board: 'board_9' },
          },
          {
            childAfter: { class: 'defBoard otherBoard', dataSet: { board: 'board_10' } },
            dataSet: { board: 'board_11' },
          }
        ],
      },
    ]
  },
  artifact_1: {
    debug: false,
    buttonsActive: { points: true },
    conditions: {
      reciprocalCurves: {
        curves: [
          {
            points: [[-2, 1], [2, -3]]
          }
        ],
      },

    },
  },
  artifact_2: {
    debug: false,
    buttonsActive: { points: true },
    conditions: {
      reciprocalCurves: {
        curves: [
          {
            points: [[-2, -1], [2, 3]]
          }
        ],
      },

    },
  },
  artifact_3: {
    debug: false,
    buttonsActive: { points: true },
    conditions: {
      reciprocalCurves: {
        curves: [
          {
            points: [[-2, 1], [2, -3]]
          }
        ],
      },
    },
  },
  artifact_4: {
    debug: false,
    buttonsActive: { points: true },
    conditions: {
      reciprocalCurves: {
        curves: [
          {
            points: [[2, 1], [-2, -3]]
          }
        ],
      },

    },
  },
  artifact_5: {
    debug: false,
    buttonsActive: { points: true },
    conditions: {
      reciprocalCurves: {
        curves: [
          {
            points: [[-3, -3], [1, 1]]
          }
        ],
      },
    },
  },
  artifact_6: {
    debug: false,
    buttonsActive: { points: true },
    conditions: {
      reciprocalCurves: {
        curves: [
          {
            points: [[1, 1], [-3, -3]]
          }
        ],
      },
    },
  },
};

generator(rDef);
mainOperation(defBoards, rDef);
defBoardDefault();