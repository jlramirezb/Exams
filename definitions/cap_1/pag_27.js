//__________________________________________________________________________________________________________________________
//:::::::::::::::::::::::::::::::::::::::::::::::::::|| Definición de los Boards ||:::::::::::::::::::::::::::::::::::::

const defBoards = {
  board_0: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3, 3, 3, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],		        /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
        colory: '#000000',
        colorx: '#000000'
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
        yd: [[0, 0], [0, 1]],		        /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
        colory: '#000000',
        colorx: '#000000'
      },
    },

  },

};
//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js

//_____________________________________________________________________________________________________________________________

//::::::::::::::::::::::::::::::::::::::::::::::::|| Definición de los Artefactos ||:::::::::::::::::::::::::::::::::::::::::::

const def = {
  artifactHtml: {
    datadefault: [
      [10, [
        'artifact_1',
        'artifact_2',
        'artifact_3',
        'artifact_4',
        'artifact_5',
        'artifact_6',
        'artifact_7',
        'artifact_8',
        'artifact_9',
      ]],
    ],

  },
  artifact_1: {//bien
    board: 'board_1',

    buttonsActive: {
      coteTop: false,
      coteDown: false,
      domKey: false,
      rangKey: false,
    },
    statementBottom: [' ƒ  no tiene cota sup. en R - R +', 'ƒ  no tiene cota inf. en R +'],
    conditions: {

      dom: {
        range: [[[2], [6], 1, false, false]],
      },
    },
  },

  artifact_2: {//bien
    board: 'board_1',

    buttonsActive: {
      domKey: true,
      rangKey: false,
    },
    statementBottom: ['Dom(ƒ) = [0,1]', 'ƒ  crece en [0,1]', 'ƒ(x)<0  si  x ∈[0,1]'],
    conditions: {

      axieX: [[1, '1']],
      dom: {
        xMod: true,
        range: [['0', '1', 1, false, false]],
      },
      ////////////////////////////////////////////////////////
      upDown: {
        xMod: true,
        intervals: [[true, ['0', '1']]]
      },

      cotes: {
        xMod: true,
        text: 'La altura de ƒ no cumple con la condición,',
        top: {
          dom: ['0', '1'],
          rang: -0.04,
        },
      },
    },
  },


  artifact_3: {//bien

    board: 'board_1',

    buttonsActive: {
      domKey: true,
      rangKey: false,
    },
    statementBottom: ['Dom(ƒ) = [-1,0]', 'ƒ  crece en [-1,0]', 'ƒ(x)>0  si  x<0'],
    conditions: {

      axieX: [[-1, '-1']],
      dom: {
        xMod: true,
        range: [['-1', '0', 1, false, false]],
      },
      ////////////////////////////////////////////////////////
      upDown: {
        xMod: true,
        intervals: [[true, ['-1', '0']]]
      },

      cotes: {
        xMod: true,
        text: 'La altura de ƒ no cumple con la condición,',
        bottom: {
          dom: ['-1', '0'],
          rang: 0.04,
        },
      },
    },
  },

  artifact_4: {
    board: 'board_1',
    buttonsActive: {
      domKey: true,
      rangKey: false,
    },
    statementBottom: ['Dom(ƒ) = [-1,0]', 'ƒ  decrece en [-1,0]', 'Si  x<0 ƒ(x)>0'],
    conditions: {

      axieX: [[-1, '-1']],
      dom: {
        xMod: true,
        range: [['-1', '0', 1, false, false]],
      },
      ////////////////////////////////////////////////////////
      upDown: {
        xMod: true,
        intervals: [[false, ['-1', '0']]]
      },

      cotes: {
        xMod: true,
        text: 'La altura de ƒ no cumple con la condición,',
        bottom: {
          dom: ['-1', '0'],
          rang: 0.04,
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
    statementBottom: ['Dom(ƒ) = [-1,0]', 'ƒ  decrece en [-1,0]', 'Si  x<0 ƒ(x)<0'],
    conditions: {

      axieX: [[-1, '-1']],
      dom: {
        xMod: true,
        range: [['-1', '0', 1, false, false]],
      },
      ////////////////////////////////////////////////////////
      upDown: {
        xMod: true,
        intervals: [[false, ['-1', '0']]]
      },

      cotes: {
        xMod: true,
        text: 'La altura de ƒ no cumple con la condición,',
        top: {
          dom: ['-1', '0'],
          rang: -0.04,
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
    statementBottom: ['Dom(ƒ) = [-1,0]', 'ƒ  crece en su dominio', 'ƒ(x)<0  si  x ∈ Dom(ƒ)'],
    conditions: {

      axieX: [[-1, '-1']],
      dom: {
        xMod: true,
        range: [['-1', '0', 1, false, false]],
      },
      ////////////////////////////////////////////////////////
      upDown: {
        xMod: true,
        intervals: [[true, ['-1', '0']]]
      },

      cotes: {
        xMod: true,
        text: 'La altura de ƒ no cumple con la condición,',
        top: {
          dom: ['-1', '0'],
          rang: -0.04,
        },
      },
    },
  },
  //Modificar
  artifact_7: {
    board: 'board_1',

    buttonsActive: {
      domKey: true,
      rangKey: false,
    },
    statementBottom: ['Dom(ƒ) = [-1,∞]', 'ƒ  decrece para x>0', 'Si  x>0,  ƒ(x) es negativa'],
    conditions: {

      axieX: [[-1, '-1']],
      dom: {
        xMod: true,
        range: [['-1', [4, 5, 6], 1, false, false]],
      },
      ////////////////////////////////////////////////////////
      upDown: {
        xMod: true,
        intervals: [[false, [0.09, 4]]]
      },

      cotes: {
        xMod: true,
        text: 'La altura de ƒ no cumple con la condición,',
        top: {
          dom: [0.09, 4],
          rang: -0.04,
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
    statementBottom: ['Dom(ƒ) = [-1,1]', 'ƒ(x) tiene signo contrario al de x'],
    conditions: {

      axieX: [[-1, '-1'], [1, '1']],
      dom: {
        xMod: true,
        range: [['-1', '1', 1, false, false]],
      },
      ////////////////////////////////////////////////////////
      upDown: {
        text: 'Revisa las condiciones,',
        xMod: true,
        intervals: [[false, ['-1', '1']]]
      },

      cotes: {
        xMod: true,
        text: 'La altura de ƒ no cumple con la condición,',
        top: {
          dom: [0.2, '1'],
          rang: 0,
        },

        bottom: {
          dom: ['-1', -0.2],
          rang: -0,
        },
      },
    },
  },

  artifact_9: {
    board: 'board_1',

    buttonsActive: {
      domKey: true,
      rangKey: true,
    },
    statementBottom: ['ƒ(-1).ƒ(1)< 0', 'ƒ(-1)+ƒ(1)= 0 '],
    conditions: {
      axieY: [[-1, '-1'], [1, '1']],
      oneTwentySeven: {
        xMod: true,
        xSearch: [['1', '-1']],
      },
      axieX: [[-1, '-1'], [1, '1']],



      dom: {
        xMod: true,
        range: [['-1', '1', 1, false, false]],
      },
      ///////////////////////////////////////////////////////
      // cotes: {
      //     xMod: true,
      //     top: {
      //         dom: ["0", "1"],
      //         rang: 0,
      //     },
      //     bottom: {
      //         dom: ["-1"],
      //         rang: -1,
      //     },
      // },

    },
  }, 
};

//_________________________________________________________________________________________________________

generator();
defBoardDefault();
window.onload = main();