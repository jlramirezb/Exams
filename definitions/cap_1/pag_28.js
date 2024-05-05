//__________________________________________________________________________________________________________________________
//:::::::::::::::::::::::::::::::::::::::::::::::::::|| Definición de los Boards ||:::::::::::::::::::::::::::::::::::::

const defBoards = {
  board_0: {
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
  },
  board_1: {
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
  },
};

//_____________________________________________________________________________________________________________________________

//::::::::::::::::::::::::::::::::::::::::::::::::|| Definición de los Artefactos ||:::::::::::::::::::::::::::::::::::::::::::

const def = {
  artifactHtml: {
    datadefault: [
      [
        10,
        [
          'artifact_1',
          'artifact_2',
          'artifact_3',
          'artifact_4',
          'artifact_5',
          'artifact_6',
          'artifact_7',
          'artifact_8',
          'artifact_9',
        ],
      ],
    ],
  },
  artifact_1: {
    board: 'board_1',

    buttonsActive: {
      domKey: true,
      rangKey: false,
    },
    statementBottom: [
      'ƒ es conexa',
      ' ƒ  decrece en (-∞, 0)',
      'ƒ   decrece en (0, ∞)',
      'ƒ (1)< 0 < ƒ(-1)',
    ],
    conditions: {
      conexa: { type: 1 },
      axieX: [
        [-1, '-1'],
        [1, '1'],
      ],
      dom: {
        range: [[[1, 2, 8], [6, 5, 4], 1, false, false]], //a juro es tipo 2 para ser dixconexa
        text: ' Dominio',
      },

      compare: {
        xMod: true,
        text: '¿Las alturas de ƒ cumplen con la condición?',
        values: [
          ['-1', '>', 0],
          ['1', '<', 0],
        ],
      },

      upDown: {
        text: 'La curva debe decrecer.',
        continue: false,
        intervals: [
          [false, [-4, 0]],
          [false, [0, 4]],
        ],
      },
    },
  },

  artifact_2: {
    board: 'board_1',
    buttonsActive: {
      coteTop: false,
      coteDown: false,
      domKey: true,
      rangKey: false,
    },
    statementBottom: [
      'ƒ es conexa',
      'ƒ   crece en (-1,0)',
      'ƒ   decrece en (0,1)',
      'Dominio: a escoger',
    ],
    conditions: {
      conexa: { type: 1 },
      axieX: [
        [-1, '-1'],
        [1, '1'],
      ],
      conexa: { type: 1 },

      //  max: {
      //    global: 0,
      //    localcount: 0,
      //  },

      upDown: {
        xMod: true,
        continue: false,
        intervals: [
          [true, ['-1', 0]],
          [false, [0, '1']],
        ],
      },
    },
  },

  //Modificar
  artifact_3: {
    board: 'board_1',
    buttonsActive: {
      domKey: true,
      rangKey: true,
    },
    statementBottom: [
      'ƒ es conexa',
      'ƒ (x)> 1, si  x> 1',
      'ƒ (x)< 1, si  x< -1',
      'Dominio: R',
    ],
    conditions: {

      axieX: [
        [-1, '-1'],
        [1, '1'],
      ],
      axieY: [[1, '1']],
      dom: {
        range: [[[1, 2, 8], [6, 5, 4], 1, false, false]], //a juro es tipo 2 para ser dixconexa
        text: ' Dominio',
      },

      eRange: {
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        xMod: true,
        yMod: true,
        cotas: [
          {
            //los intervalos a validar van dentro de una lista de de objetos
            bottom: {
              bottomNoise: -0.1,
              // acotada superiormente
              dom: ['1', 5], //intervalo
              rang: '1', //punto del eje y donde está acotado
            },
            top: {
              topNoise: 0.1,
              // acotada inferiormente
              dom: [-5, '-1'], //intervalo
              rang: '1', //punto del eje y donde está acotado
            },
          },
        ],
      },
    },
  },

  artifact_4: {
    board: 'board_1',
    buttonsActive: {
      domKey: true,
      rangKey: false,
    },
    statementBottom: [
      'ƒ es conexa',
      'ƒ (x)> f(1) para todo x ≠ 1',
      'ƒ (1)<0',
      'Dominio a escoger',
    ],
    conditions: {
      conexa: { type: 1 },
      axieX: [[1, '1']],

      compare: {
        xMod: true,
        values: [['1', '<', 0]],
        text: '¿Las alturas de ƒ  cumplen con la condición?',
      },

      xCote: {
        xMod: true,
        text: '¿La altura menor ƒ  cumple con la condición?',
        coteReference: {
          bottom: '1',
        },
      },
    },
  },

  artifact_5: {
    board: 'board_1',

    buttonsActive: {
      domKey: true,
      rangKey: false,
    },
    statementBottom: [
      'ƒ es conexa',
      'ƒ (x)< f(1) para todo x≠ 1',
      'ƒ (1)<0',
      'Dominio a escoger',
    ],
    conditions: {
      conexa: { type: 1 },
      axieX: [[1, '1']],
      ////////////////////////////////////////////////////////

      compare: {
        xMod: true,
        yMod: true,
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        values: [['1', '<', '0']],
      },

      xCote: {
        xMod: true,
        text: '¿La altura mayor de ƒ  cumple con la condición?',

        coteReference: {
          top: '1',
        },
      },
    },
  },

  artifact_6: {
    board: 'board_1',

    buttonsActive: {
      domKey: true,
      rangKey: false,
    },
    statementBottom: [
      'ƒ es conexa',
      'ƒ (x) < f(1) para todo x ≠ 1',
      'ƒ (1)>0',
      'Dominio a escoger',
    ],
    conditions: {
      conexa: { type: 1 },
      axieX: [[1, '1']],
      ////////////////////////////////////////////////////////
      compare: {
        xMod: true,
        yMod: true,
        text: '¿Las alturas de ƒ  cumplen con la condición?.',
        values: [['1', '>', '0']],
      },

      xCote: {
        xMod: true,
        text: '¿La altura mayor de ƒ  cumple con la condición?',
        coteReference: {
          top: '1',
        },
      },
    },
  },
  artifact_7: {
    board: 'board_1',

    buttonsActive: {
      domKey: true,
      rangKey: false,
    },
    statementBottom: [
      'ƒ es conexa',
      'ƒ (x)> f(1) para todo x ≠ 1',
      'ƒ (1)>0',
      'Dominio a escoger',
    ],
    conditions: {
      conexa: {
        type: 1,
      },
      axieX: [[1, '1']],
      ////////////////////////////////////////////////////////
      compare: {
        xMod: true,
        yMod: true,
        values: [['1', '>', '0']],
        text: '¿Las alturas de ƒ  cumple con la condición?.',
      },
      xCote: {
        xMod: true,
        text: '¿La altura menor de ƒ  cumple con la condición?',
        coteReference: {
          bottom: '1',
        },
      },
    },
  },

  artifact_8: {
    board: 'board_1',

    buttonsActive: {
      domKey: true,
      rangKey: false,
    },
    statementBottom: [
      'ƒ es conexa',
      'Para x ∈R -{1,2}',
      'ƒ(2) < ƒ(x) < ƒ(1)',
      'Dominio: R',
    ],
    conditions: {
      conexa: {
        type: 1,

      },
      axieX: [
        [1, '1'],
        [1, '2'],

      ],
      dom: {
        range: [[[1], [5], 1, false, false]], //a juro es tipo 2 para ser dixconexa
        text: ' Dominio',
      },


      //////////////////////////////////////////////////////
      xCote: {
        xMod: true,
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          top: '1',
          bottom: '2',
        },
      },
    },
  },

  //En es espera
  artifact_9: {
    board: 'board_1',

    buttonsActive: {
      domKey: true,
      rangKey: false,
    },
    statementBottom: [
      ' ƒ es conexa',
      ' ƒ crece en (-∞, 0)',
      'ƒ decrece en (0, ∞)',
      'ƒ(-1)< f(1) < 0',
    ],
    conditions: {

      axieX: [
        [-1, '-1'],
        [1, '1'],
      ],

      dom: {
        range: [[[1, 8], [5, 6], 1, false, false]], //a juro es tipo 2 para ser dixconexa
        text: 'Revisar el dominio',
      },

      upDown: {
        text: 'La curva debe crecer o decrecer en el dominio indicado segun las condiciones',
        continue: false,

        intervals: [
          [true, [-4, 0]],
          [false, [0, 4]],
        ],
      },

      xCote: {
        xMod: true,
        text: '¿Las alturas de ƒ  cumplen con la condición?',
        coteReference: {
          //contiene las características de lo que se quiere condicionar
          top: '1',
          domPlus: [-0.15, 0.15],
          domTop: ['-1', '-1'],
        },
      },
      cotes: {
        xMod: true,
        top: {
          dom: ['1', '1'],
          domPlus: [-0.15, 0.15],
          rang: 0,
        },
      },
    },
  },
};
generator();
defBoardDefault();
window.onload = main();
