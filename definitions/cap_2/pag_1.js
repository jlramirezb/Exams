const etwDefBoards = {
  board_0: {
    //artifact: "artifact_2",
    style: {
      grid: false,
      boundingbox: [-1, 4, 4, -1],
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
          [2, 2],
          [2, 0],
        ],
        dash: 2,
      },

      {
        points: [
          [0, 2],
          [2, 2],
        ],
        dash: 2,
      },
    ],

    curves: [
      {
        strokeColor: 'darkorange',
        points: [
          [-0.29, 3.3],
          [0, 2.7],
          [1, 2.2],
          [2, 2],
          [3, 2],
        ],
      },
    ],

    points: [
      [2.5, 2.1, false, 'ƒ', true],
      [1, 3, false, 'Va del eje x al eje y', true],


    ],
  },
  //board que no contiene nombre de la curva
  board_1: {
    artifact: 'artifact_3',
    style: {
      grid: false,
      boundingbox: [-1, 4, 4, -1],
      axis: [false, true, true],
      reflectionAxie: { B: true },
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
          [2, 2],
          [2, 0],
        ],
        dash: 2,
      },
      {
        points: [
          [0, 2],
          [2, 2],
        ],
        dash: 2,
      },
      ////////////////////////////////////////////
      {
        points: [
          [3, 3],
          [3, 0],
        ],
        dash: 2,
      },
      {
        points: [
          [0, 3],
          [3, 3],
        ],
        dash: 2,
      },
    ],

    points: [

      [0.5, 3.5, false, 'La esquina está en la bisectriz', true],


    ],
  },

  //board que contiene "g" como nombre de la curva
  board_2: {
    //artifact: "artifact_2",
    style: {
      grid: false,
      boundingbox: [-1, 4, 4, -1],
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
          [2, 2],
          [2, 0],
        ],
        dash: 2,
      },

      {
        points: [
          [0, 2],
          [2, 2],
        ],
        dash: 2,
      },
    ],

    curves: [
      {
        strokeColor: 'purple',
        points: [
          [-0.29, 3.3],
          [0, 2.7],
          [1, 2.2],
          [2, 2],
          [3, 2],
        ],
      },
    ],

    points: [
      [2.5, 2.1, false, 'g', true],

    ],
  },
  //board que tiene como nombre de la curva "x"
  board_3: {
    //artifact: "artifact_2",
    style: {
      grid: false,
      boundingbox: [-1, 4, 4, -1],
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
          [2, 2],
          [2, 0],
        ],
        dash: 2,
      },

      {
        points: [
          [0, 2],
          [2, 2],
        ],
        dash: 2,
      },
    ],

    curves: [
      {
        strokeColor: 'blue',
        points: [
          [-0.29, 3.3],
          [0, 2.7],
          [1, 2.2],
          [2, 2],
          [3, 2],
        ],
      },
    ],

    points: [[2.5, 2.1, false, 'x', true]],
  },

  board_4: {
    style: {
      grid: false,
      boundingbox: [-1, 4, 4, -1],
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
          [2, 2],
          [2, 0],
        ],
        dash: 2,
      },

      {
        points: [
          [0, 2],
          [2, 2],
        ],
        dash: 2,
      },
    ],

    curves: [
      {
        points: [
          [-0.29, 3.3],
          [0, 2.7],
          [1, 2.2],
          [2, 2],
          [3, 2],
        ],
      },
    ],

    points: [[2.5, 2.1, false, '', true]],
  },
};

//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const etwDef = {
  artifact_1: {
    debug: false,
    buttonsActive: { points: true },

    showTitle: true,
    artifactTitle: 'IDA',
    showText: true,
    textOfHelp:
         'Cuando el camino va desde el eje \'x\' al eje \'y\' se dice que es un camino de \'ida\'.',
    helpMsg: false,

    textOfExample: {
      title: 'Nombre del punto final: ',
      info: 'Se pone entre paréntesis el nombre del punto inicial. Y a la izquierda del paréntesis se pone el nombre de la curva.',
    },
    inputsDefault: [
      [[-0.35, 2], true, '', 1],
      [[2, -0.3], false, 'x', 2],
    ],
    conditions: {
      valueInputs: [[1, 'f\\left(x\\right)']],
    },
  },

  artifact_2: {
    debug: false,
    buttonsActive: { points: true },
    showTitle: true,
    artifactTitle: 'VUELTA',
    showText: true,
    textOfHelp:
         'Cuando el camino va desde el eje \'y\' al eje \'x\' se dice que es un camino de \'Vuelta\'.',
    helpMsg: false,

    textOfExample: {
      title: 'Nombre del punto final: ',
      info: 'Se pone entre paréntesis el nombre del punto inicial. Y a la izquierda del paréntesis se pone el nombre de la curva, con -1 en la posición de exponente. (Esto para distinguirlo de los nombres de caminos de ida).',
    },
    inputsDefault: [
      [[-0.35, 2], false, 'y', 1],
      [[2, -0.4], true, '', 2],
    ],
    conditions: {
      valueInputs: [[2, 'f^{-1}\\left(y\\right)']],
    },
  },

  artifact_3: {
    debug: false,
    buttonsActive: { points: true },
    showTitle: true,
    artifactTitle: 'Por la BISECTRIZ',
    showText: true,
    textOfHelp: 'La esquina esta en la bisectriz.',
    helpMsg: false,

    textOfExample: {
      title: 'Nombre del punto final: ',
      info: 'El nombre del punto final es igual al nombre del punto inicial.',
    },
    inputsDefault: [
      [[-0.35, 2], true, '', 1],
      [[-0.35, 3], false, 'h', 2],
      [[2, -0.3], false, 'k', 3],
      [[3, -0.3], true, '', 4],
    ],
    conditions: {
      valueInputs: [
        [1, 'k'],
        [4, 'h'],
      ],
    },
  },

  ////////////ejercicios de abajo
  artifact_4: {
    debug: false,
    buttonsActive: { points: true },
    textOfHelp: 'Este artefacto va por el Camino de Ida',
    helpMsg: false,

    inputsDefault: [
      [[-0.35, 2], true, '', 1],
      [[2, -0.3], false, '2', 2],
    ],
    conditions: {
      valueInputs: [[1, 'f\\left(2\\right)']],
    },
  },

  artifact_5: {
    debug: false,
    buttonsActive: { points: true },
    textOfHelp: 'Este artefacto Camino de Vuelta',
    helpMsg: false,

    inputsDefault: [
      [[-0.35, 2], false, '2', 1],
      [[2, -0.3], true, '', 2],
    ],
    conditions: {
      valueInputs: [[2, 'f^{-1}\\left(2\\right)']],
    },
  },

  artifact_6: {
    debug: false,
    buttonsActive: { points: true },
    textOfHelp: 'Este artefacto va por el Camino de Ida',
    helpMsg: false,

    inputsDefault: [
      [[-0.35, 2], true, '', 1],
      [[2, -0.3], false, 'y', 2],
    ],
    conditions: {
      valueInputs: [[1, 'f\\left(y\\right)']],
    },
  },

  artifact_7: {
    debug: false,
    buttonsActive: { points: true },
    textOfHelp: 'Este artefacto va por el Camino de Vuelta',
    helpMsg: false,

    inputsDefault: [
      [[-0.35, 2], false, 'x', 1],
      [[2, -0.3], true, '', 2],
    ],
    conditions: {
      valueInputs: [[2, 'f^{-1}\\left(x\\right)']],
    },
  },

  artifact_8: {
    debug: false,
    buttonsActive: { points: true },
    textOfHelp: 'Este artefacto va por el Camino de Ida',
    helpMsg: false,

    inputsDefault: [
      [[-0.35, 2], true, '', 1],
      [[2, -0.3], false, '1.5', 2],
    ],
    conditions: {
      valueInputs: [[1, 'g\\left(1.5\\right)']],
    },
  },

  artifact_9: {
    debug: false,
    buttonsActive: { points: true },
    textOfHelp: 'Este artefacto va por el Camino de Ida',
    helpMsg: false,

    inputsDefault: [
      [[-0.35, 2], true, '', 1],
      [[2, -0.3], false, 'y', 2],
    ],
    conditions: {
      valueInputs: [[1, 'x\\left(y\\right)']],
    },
  },

  artifact_10: {
    debug: false,
    buttonsActive: { points: true },
    textOfHelp: 'Este artefacto va por el Camino de Ida',
    helpMsg: false,

    inputsDefault: [
      [[-0.35, 2], true, '', 1],
      [[2, -0.3], false, 'ƒ', 2],
    ],
    conditions: {
      valueInputs: [[1, 'x\\left(f\\right)']],
    },
  },

  artifact_11: {
    debug: false,
    buttonsActive: { points: true },
    textOfHelp:
         'Este artefacto va por el Camino de Ida. Debes colocar el nombre de la curva',
    helpMsg: false,

    inputsDefault: [
      [[-0.5, 2], false, 'g(h)', 1],
      [[2, -0.3], false, 'h', 2],
      [[2, 2.22], true, '', 3],
    ],
    conditions: {
      valueInputs: [
        [1, ''],
        [3, 'g'],
      ],
    },
  },
};

etwMain(etwDef, etwDefBoards);