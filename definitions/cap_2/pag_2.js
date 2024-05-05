/* 
EngineToWay Definition 

Nota: El valor que se debe colocar el VALUEINPUTS debe estar en formato LATEX

@ Link para ver de que se trata: https://cortexjs.io/mathlive/        
@ Documentación e información de Definiciones: https://docs.google.com/document/d/1EhjchD7XvrH148LPJC4sK1WNrSmJOPsBXtVtwLx28So/edit?usp=sharing

*/

const etwDefBoards = {

  board_1: {
    // artifact: "artifact_2",
    style: {
      grid: false,

      boundingbox: [-4, 5, 4, -4],
      axis: [false, true, true],
      reflectionAxie: { B: true },
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
        colory: '#000000',
        colorx: '#000000'
      }
    },
    lines: [
      {
        points: [[2, 2], [2, 0]],
        dash: 2,

      },

      {
        points: [[0, 2], [2, 2]],
        dash: 2
      },
      {
        points: [[0, -2], [-2, -2]],
        dash: 2
      },

      {
        points: [[-2, -2], [-2, 0]],
        dash: 2
      },

      {
        points: [[-2, 2], [-2, 0]],
        dash: 2
      },

      {
        points: [[-2, 2], [0, 2]],
        dash: 2
      },

      {
        points: [[0, -2], [2, -2]],
        dash: 2
      }

    ],
    curves: [

      {
        strokeColor: 'darkorange',
        points: [
          [-3.50, 1.40], [-2.74, 1.48], [-2.00, 2.00], [-1.70, 2.69], [-1.65, 3.40]
        ]
      }
    ],

    points: [
      [-2.1, 3, false, 'ƒ', null, null, null, 18]

    ]

  },
  board_2: {
    // artifact: "artifact_2",
    style: {
      grid: false,
      reflectionAxie: { B: true },
      boundingbox: [-2, 5, 5, -5],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
        colory: '#000000',
        colorx: '#000000'
      }
    },
    lines: [


      {
        points: [[2, 2], [2, 0]],
        dash: 2

      },
      {
        points: [[2, 2], [2, 2]],
        dash: 2
      },

      {
        points: [[4, 2], [0, 2]],
        dash: 2
      },
      {
        points: [[4, 2], [4, 0]],
        dash: 2
      },
      {
        points: [[2, 0], [2, -2]],
        dash: 2
      },
      {
        points: [[2, -2], [4, -2]],
        dash: 2
      }

    ],
    curves: [


      {
        strokeColor: 'darkorange',
        points: [
          [3.01, 2.50], [3.56, 2.40], [4, 2], [4.30, 1.38], [4.36, 0.68]
        ]
      },
      {
        strokeColor: 'purple',
        points: [
          [3.01, -2.50], [2.56, -2.40], [2, -2], [1.60, -1.38], [1.50, -0.68]
        ]
      }

    ],

    points: [
      [4.1, 2.2, false, 'ƒ', null, null, null, 18],
      [1.7, -2.2, false, 'g', null, null, null, 18]

    ]

  },

};
// si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const etwDef = {
  artifact_1: {
    debug: false,
    buttonsActive: { points: true },

    showTitle: false,
    artifactTitle: 'Ida',
    showText: false,

    inputsDefault: [[[2, 0], false, 'a', 1], [[0, 2], true, '', 2], [[-2, 0], true, '', 3], [[0, -2], true, '', 4]],
    conditions: {
      valueInputs: [
        [2, 'a'],
        [3, 'f^{-1}\\left(a\\right)'],
        [4, 'f^{-1}\\left(a\\right)']
      ]

    }
  },
  artifact_2: {
    debug: false,
    buttonsActive: { points: true },

    showTitle: false,
    artifactTitle: 'Ida',
    showText: false,

    inputsDefault: [[[2, 0], true, '', 1], [[0, 2], true, '', 2], [[-2, 0], false, 'a', 3], [[0, -2], true, '', 4]],
    conditions: {
      valueInputs: [
        [1, 'f\\left(a\\right)'], [2, 'f\\left(a\\right)'], [4, 'a']
      ]

    }
  },
  artifact_3: {
    debug: false,
    buttonsActive: { points: true },

    showTitle: false,
    artifactTitle: 'Ida',
    showText: false,

    inputsDefault: [[[2, 0], true, '', 1], [[0, 2], true, '', 2], [[-2, 0], true, '', 3], [[0, -2], false, 'a', 4]],
    conditions: {
      valueInputs: [
        [1, 'f\\left(a\\right)'], [2, 'f\\left(a\\right)'], [3, 'a']
      ]

    }
  },
  artifact_4: {
    debug: false,
    buttonsActive: { points: true },

    showTitle: false,
    artifactTitle: 'Ida',
    showText: false,

    inputsDefault: [[[2, 0], true, '', 1], [[0, 2], false, 'a', 2], [[-2, 0], true, '', 3], [[0, -2], true, '', 4]],
    conditions: {
      valueInputs: [
        [1, 'a'], [3, 'f^{-1}\\left(a\\right)'], [4, 'f^{-1}\\left(a\\right)']
      ]

    }
  },
  artifact_5: {
    debug: false,
    buttonsActive: { points: true },

    showTitle: false,
    artifactTitle: 'Ida',
    showText: false,

    inputsDefault: [
      [[4, 0], false, 'h', 1],
      [[0, 2], true, '', 2],
      [[2, 0], true, '', 3],
      [[0, -2], true, '', 4]
    ],
    conditions: {
      valueInputs: [
        [2, 'f\\left(h\\right)'], [3, 'f\\left(h\\right)'], [4, 'g\\left(f\\left(h\\right)\\right)']
      ]

    }
  },
  artifact_6: {
    debug: false,
    buttonsActive: { points: true },
    showTitle: false,
    artifactTitle: 'Ida',
    showText: false,

    inputsDefault: [
      [[4, 0], true, '', 1],
      [[0, 2], false, 'h', 2],
      [[2, 0], true, '', 3],
      [[0, -2], true, '', 4]
    ],
    conditions: {
      valueInputs: [
        [1, 'f^{-1}\\left(h\\right)'], [2, 'h'], [3, 'h'], [4, 'g\\left(h\\right)']
      ]

    }
  },
  artifact_7: {
    debug: false,
    buttonsActive: { points: true },

    showTitle: false,
    artifactTitle: 'Ida',
    showText: false,

    inputsDefault: [[[4, 0], true, '', 1], [[2, 0], false, 'h', 2], [[0, 2], true, '', 3], , [[0, -2], true, '', 4]],
    conditions: {
      valueInputs: [
        [1, 'f^{-1}\\left(h\\right)'], [3, 'h'], [4, 'g\\left(h\\right)']
      ]

    }
  },
  artifact_8: {
    debug: false,
    buttonsActive: { points: true },
    showTitle: false,
    artifactTitle: 'Ida',
    showText: false,

    inputsDefault: [[[4, 0], true, '', 1], [[0, 2], true, '', 2], [[2, 0], true, '', 3], [[0, -2], false, 'h', 4]],
    conditions: {
      valueInputs: [
        [1, 'f^{-1}\\left(g^{-1}\\left(h\\right)\\right)'], [2, 'g^{-1}\\left(h\\right)'], [3, 'g^{-1}\\left(h\\right)']
      ]

    }
  }
};

etwMain(etwDef, etwDefBoards);
