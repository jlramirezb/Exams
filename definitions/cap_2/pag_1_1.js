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
      [2.5, 2.1, false, 'ƒ', true, , , 18],
      [1, 3, false, 'Va del eje x al eje y', true, , , 16],


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

      [0.5, 3.5, false, 'La esquina está en la bisectriz', true, , , 16],


    ],
  },
  //board que contiene sin nombre de la curva

  board_2: {

    //artifact: "artifact_4",
    style: {
      grid: false,
      //maxHeight: 300,
      //maxWidth: 300,
      boundingbox: [-1, 4, 4, -1],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
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
        dash: 2,
      }
    ],




    curves: [
      {
        strokeColor: 'darkorange',
        points: [
          [-0.29, 3.3], [0, 2.7], [1, 2.2], [2, 2], [3, 2]
        ]
      }
    ],

    points: [
      [2.5, 2.1, false, '', true],

    ],

  },
  /////////////curvas situada abajo
  board_3: {

    style: {
      grid: false,
      //maxHeight: 300,
      //maxWidth: 300,
      //izquierda / arriba/ derecha / abajo
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
        xd: [[0, 0], [1, 0]],
        colory: '#000000',
        colorx: '#000000'
      }
    },
    lines: [
      {
        points: [[-1, -1], [-1, 0]],
        dash: 2,

      },

      {
        points: [[0, -1], [-1, -1]],
        dash: 2,
      }
    ],

    curves: [
      {
        strokeColor: 'purple',
        points: [
          [-3.57, -0.30],
          [-2.12, -0.53],
          [-1.09, -0.95],
          [-0.48, -1.83],
          [-0.35, -3.30]
        ]
      }
    ],

    points: [
      [-3.68, -0.7, false, 'g', true, , , 18],

    ],

  },
  board_4: {

    style: {
      grid: false,
      //maxHeight: 300,
      //maxWidth: 300,
      //izquierda / arriba/ derecha / abajo
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
        xd: [[0, 0], [1, 0]],
        colory: '#000000',
        colorx: '#000000'
      }
    },
    lines: [
      {
        points: [[-1, -1], [-1, 0]],
        dash: 2,

      },

      {
        points: [[0, -1], [-1, -1]],
        dash: 2,
      }
    ],

    curves: [
      {

        points: [
          [-3.57, -0.30],
          [-2.12, -0.53],
          [-1.09, -0.95],
          [-0.48, -1.83],
          [-0.35, -3.30]
        ]
      }
    ],

  },
  /////////////curvas situada ARRIBA
  board_5: {

    style: {

      grid: false,
      //maxHeight: 300,
      //maxWidth: 300,
      //izquierda / arriba/ derecha / abajo
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
        xd: [[0, 0], [1, 0]],
        colory: '#000000',
        colorx: '#000000'
      }
    },
    lines: [
      {
        points: [[-1, 3], [-1, 0]],
        dash: 2,

      },

      {
        points: [[0, 3], [-1, 3]],////////////
        dash: 2,
      }
    ],

    curves: [
      {
        strokeColor: 'darkorange',
        points: [
          [3.68, 3.62],
          [1.02, 3.61],
          [-0.57, 3.20],
          [-2.99, 1.76],
          [-3.54, 0.45]
        ]
      }
    ],

    points: [
      [-3.6, 1.45, false, 'ƒ', true, , , 18],

    ],

  }
};

//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const etwDef = {

  example_0: {
    debug : false,
    buttonsActive: { validate: false },
    showTitle: true,
    artifactTitle: 'IDA',


    textOfExample: {
      title: 'Nombre del punto final: ',
      info: 'va del eje x al eje y. Se pone entre parentesis el nombre del punto inicial. Y a la izquierda del paréntesis se pone el nombre de la curva'
    },
    inputsDefault: [[[-0.35, 2], false, 'f(x)', 1], [[2, -0.3], false, 'x', 2]],
    conditions: {





    }
  },

  example_1: {
    debug : false,
    buttonsActive: { validate: false },

    showTitle: true,
    artifactTitle: 'VUELTA',

    textOfExample: {
      title: 'Nombre del punto final: ',
      info: 'va del eje y al eje x. Se pone entre parentesis el nombre del punto inicial. Y a la izquierda del paréntesis se pone el nombre de la curva, con -1 en la posición de exponente. (Esto para distinguirlos de los nombres de caminos de ida).'
    },
    inputsDefault: [[[-0.35, 2], false, 'y', 1], [[2, -0.3], false, 'f^{-1}\\left(y\\right)', 2]],
    conditions: {





    }
  },

  example_2: {
    debug : false,
    buttonsActive: { validate: false },

    showTitle: true,
    artifactTitle: 'Por la BISECTRIZ',


    textOfExample: {
      title: 'Nombre del punto final: ',
      info: 'El nombre del punto final es igual al nombre del punto inicial.'
    },
    inputsDefault: [
      [[-0.35, 2], false, 'k', 1],
      [[-0.35, 3], false, 'h', 2],
      [[2, -0.3], false, 'k', 3],
      [[3, -0.3], false, 'h', 4],
    ],
    conditions: {





    }
  },
  ////////////ejercicios de abajo segunda parte////////////////////7
  artifact_1: {
    debug : false,
    buttonsActive: { points: true },
    showText: false,
    textOfHelp: 'Este artefacto va por el Camino de Vuelta',



    inputsDefault: [[[-0.35, 2], false, 'y', 1], [[2, -0.3], true, '', 2], [[2.5, 2.3], false, 'f^{-1}', 3]],
    conditions: {

      valueInputs: [
        [2, ['\\left(f^{-1}\\right)^{-1}\\left(y\\right)', 'f^{-1}\\left(f^{-1}\\left(y\\right)\\right)', 'f\\left(y\\right)', 'f^{-1}^{-1}\\left(y\\right)', 'f^{-1^{-1}}\\left(y\\right)']],
      ],

    }
  },

  artifact_2: {
    debug : false,
    buttonsActive: { points: true },


    inputsDefault: [[[-0.35, 2], true, '', 1], [[2, -0.3], false, 'f^{-1}\\left(x\\right)', 2]],
    conditions: {


      valueInputs: [
        [1, 'f\\left(f^{-1}\\left(x\\right)\\right)'],
      ],

    }
  },

  artifact_3: {
    debug : false,
    buttonsActive: { points: true },



    inputsDefault: [[[-0.35, 2], true, '', 1], [[2, -0.3], false, 'g\\left(x\\right)', 2]],
    conditions: {


      valueInputs: [
        [1, 'f\\left(g\\left(x\\right)\\right)'],
      ],

    }
  },

  artifact_4: {
    debug : false,
    buttonsActive: { points: true },


    inputsDefault: [[[-0.35, 2], true, '', 1], [[2, -0.3], false, 'f\\left(x\\right)', 2]],
    conditions: {


      valueInputs: [
        [1, 'f\\left(f\\left(x\\right)\\right)'],
      ],

    }
  },

  artifact_5: {
    debug : false,
    buttonsActive: { points: true },


    inputsDefault: [[[-1.03, 0.45, true], false, 'x', 1], [[0.52, -1.03], true, '', 2]],
    conditions: {


      valueInputs: [
        [2, 'g\\left(x\\right)'],
      ],

    }
  },

  artifact_6: {
    debug : false,
    buttonsActive: { points: true },


    inputsDefault: [[[-1.03, 0.45, true], true, '', 1], [[0.52, -1.03], false, 'h(t)', 2], [[-3, -0.9], true, '', 3]],
    conditions: {


      valueInputs: [
        [1, ['h^{-1}\\left(h\\left(t\\right)\\right)', 't']],
        [3, 'h'],
      ],

    }
  },

  artifact_7: {
    debug : false,
    buttonsActive: { points: true },


    inputsDefault: [[[-1.03, -0.45, true], true, '', 1], [[0.52, 3.03], false, 'y', 2]],
    conditions: {


      valueInputs: [
        [1, 'f^{-1}\\left(y\\right)'],
      ],

    }
  },

  artifact_8: {
    debug : false,
    buttonsActive: { points: true },


    inputsDefault: [[[-1.03, -0.45, true], false, 'x', 1], [[0.52, 3.03], true, '', 2]],
    conditions: {


      valueInputs: [
        [2, 'f\\left(x\\right)'],
      ],

    }
  }
};

etwMain(etwDef, etwDefBoards);
