//__________________________________________________________________________________________________________________________
//:::::::::::::::::::::::::::::::::::::::::::::::::::|| Definición de los Boards ||:::::::::::::::::::::::::::::::::::::


//Ejercicios Parte 2

const defBoards = {

  //Ejercicio parte 1

  board_6: {
    style: {
      boundingbox: [-4, 4, 4, -4],
      axis: [false, false, false],
      grid: false,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      maxHeight: 300,
      maxWidth: 300,
    },

    lines: [
      [[[0, -5], [0, 5]],0,true, true, '' ],
      [[[-6, 0], [3.4, 0]],0,true, 'gray' ],
    ],
    points: [
      [-1.6, -0.6, false, '𝒂'],
      [-1.5, 0, true, ''],
    ],
    curves: [//[[lista de puntos],Color]
      [[[-3.7, -0.2,false],  [-3.5, -0.6,false],  [0, -3.4,false], [3.4, -3.4,false]],'black'],
    ],
  },

  //
  board_1: {
    style: {
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      grid: false,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      maxHeight: 300,
      maxWidth: 300,
    },
    lines: [

      [[[-4, -2], [4, -2, false, 'a']], 2, false, false, 2],

    ],
    points: [
      [0, -2.3, false, '𝒂'],
    ],
  },

  board_2: {
    style: {
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      grid: false,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      maxHeight: 300,
      maxWidth: 300,
    },
    lines: [
      [[[-4, 2], [4, 2, false, '𝒂']], 2, false, false, 2],

    ],
    points: [
      [0.2, 2.3, false, 'b'],
    ],
  },

  board_3: {
    style: {
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      grid: false,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      maxHeight: 300,
      maxWidth: 300,
    },
    lines: [
      [[[-4, 1], [4, 1, false, 'b']], 2, false, false, 2],
      [[[-4, -1.5], [4, -1.5, false, 'a']], 2, false, false, 2],



    ],
    points: [
      [0.2, 1.3, false, 'b'],
      [-0.3, -2, false, '𝒂'],

    ],
  },

  board_4: {
    style: {
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      grid: false,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      maxHeight: 300,
      maxWidth: 300,
    },

    lines: [
    ],
    points: [
      [0, 1, true, ''],
      [-0, -3, true, ''],

      [0.3, 0.8, false, 'b'],
      [-0.5, -3.3, false, '𝒂'],
    ],
  },

  board_5: {
    style: {
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      grid: false,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      maxHeight: 300,
      maxWidth: 300,
    },

    lines: [
    ],
    points: [
      [0.3, -2.2, false, 'c'],
      [0, -2, true, ''],
    ],
  },

}

//____________________________________________________________________________________________________________________________


//_____________________________________________________________________________________________________________________________

//::::::::::::::::::::::::::::::::::::::::::::::::|| Definición de los Artefactos ||:::::::::::::::::::::::::::::::::::::::::::

const def = {

  //Ejercicios Primera parte de la página 
  //Segunda Parte 

  artifact_1: {
    board: 'board_1',                                                          //board a utilizar
    statementBottom: [' 𝒂 < ƒ(x)'],                                           //enunciado 
    conditions: {                                                            //Condiciones para la validación
      conexa: { type: 3 },                                                //tipo de curva
      eRange: {
        cotas:
                    [{
                      bottom: {
                        dom: [-4, 4],
                        rang: -1.9,
                      },
                    }]
      },
    },

  },

  artifact_2: {
    board: 'board_2',
    statementBottom: ['ƒ(x)<b'],
    conditions: {
      conexa: { type: 3 },
      eRange: {
        cotas:
                    [{
                      top: {
                        dom: [-4, 4],
                        rang: 1.9,
                      }
                    }]
      },
    },
  },

  artifact_3: {
    board: 'board_3',
    statementBottom: ['𝒂 < ƒ(x) <b '],
    conditions: {
      conexa: { type: 3 },
      eRange: {
        cotas:
                    [{
                      top: {
                        dom: [-4, 4],
                        rang: 0.9,
                      },
                      bottom: {
                        dom: [-4, 4],
                        rang: -1.49,
                      },
                    }]
      },
    },
  },

  artifact_4: {
    board: 'board_4',
    statementBottom: ['ƒ(x) > 𝒂'],
    conditions: {
      conexa: { type: 3 },
      eRange: {
        cotas:
                    [{
                      bottom: {
                        dom: [-3, 3],
                        rang: -2.9,
                      },
                    }]
      },
    },
  },

  artifact_5: {
    board: 'board_4',
    statementBottom: ['ƒ(x) > b'],
    conditions: {
      conexa: { type: 3 },
      eRange: {
        cotas:
                    [{
                      bottom: {
                        dom: [-3, 3],
                        rang: 1.1,
                      },
                    }]
      },
    },
  },

  artifact_6: {
    board: 'board_4',
    statementBottom: ['ƒ(x) > 0'],
    conditions: {
      conexa: { type: 3 },
      eRange: {
        cotas:
                    [{
                      bottom: {
                        dom: [-4, 4],
                        rang: 0,
                      },
                    }]
      },
    },
  },

  artifact_13: {
    board: 'board_4',
    statementBottom: ['𝒂 < f(x) < 0 '],
    conditions: {
      conexa: { type: 3 },
      eRange: {
        cotas:
                    [{
                      top: {
                        dom: [-4, 4],
                        rang: 0,
                      },
                      bottom: {
                        dom: [-4, 4],
                        rang: -2.9,
                      },
                    }]
      },
    },
  },

  artifact_14: {
    board: 'board_4',
    statementBottom: ['b > ƒ(x) >0 '],
    conditions: {
      conexa: { type: 3 },
      eRange: {
        cotas:
                    [{
                      top: {
                        dom: [-4, 4],
                        rang: 0.9,
                      },
                      bottom: {
                        dom: [-4, 4],
                        rang: 0.1,
                      },
                    }]
      },
    },
  },

  artifact_15: {
    board: 'board_4',
    statementBottom: ['ƒ(x)<0 '],
    conditions: {
      conexa: { type: 3 },
      eRange: {
        cotas:
                    [{
                      top: {
                        dom: [-3, 3],
                        rang: -0.1,
                      },
                    }]
      },
    },
  },

  artifact_16: {
    board: 'board_5',
    statementBottom: ['ƒ(x)< -c'],
    conditions: {
      conexa: { type: 3 },
      eRange: {
        cotas:
                    [{
                      top: {
                        dom: [-3, 3],
                        rang: 1.9,
                      },
                    }]
      },
    },
  },

  artifact_17: {
    board: 'board_5',
    statementBottom: ['c < ƒ(x)'],
    conditions: {
      conexa: { type: 3 },
      eRange: {
        cotas:
                    [{
                      bottom: {
                        dom: [-3, 3],
                        rang: -1.9,
                      },
                    }]
      },
    },
  },

  artifact_18: {
    board: 'board_5',
    statementBottom: ['c < ƒ(x)< -c'],
    conditions: {
      conexa: { type: 3 },
      eRange: {
        cotas:
                    [{
                      top: {
                        dom: [-4, 4],
                        rang: 1.9,
                      },
                      bottom: {
                        dom: [-4, 4],
                        rang: -1.9,
                      },
                    }]
      },
    },
  },


  artifact_19: {
    board: 'board_4',
    statementBottom: ['ƒ(x) ∈ [𝒂,b]'],
    conditions: {
      conexa: { type: 3 },
      eRange: {
        cotas:
                    [{
                      top: {
                        dom: [-4, 4],
                        rang: 1.9,
                      },
                      bottom: {
                        dom: [-4, 4],
                        rang: -1.9,
                      },
                    }]
      },
    },
  },

  //******* */
  artifact_20: {
    board: 'board_4',
    statementBottom: ['ƒ(x) ∈ (-∞, 𝒂]'],
    conditions: {
      conexa: { type: 3 },
      eRange: {
        cotas:
                    [{
                      top: {
                        dom: [-4, 4],
                        rang: -2.98,
                      }
                    }]
      },
    },
  },

  artifact_21: {
    board: 'board_4',
    statementBottom: ['ƒ(x) ∈ [b, ∞)'],
    conditions: {
      conexa: { type: 3 },
      eRange: {
        cotas:
                    [{
                      bottom: {
                        dom: [-3, 3],
                        rang: 1.05
                      },
                    }]
      },
    },
  },

  artifact_22: {
    board: 'board_4',
    statementBottom: ['ƒ(x) ∈ [0,b]'],
    conditions: {
      conexa: { type: 3 },
      eRange: {
        cotas:
                    [{
                      top: {
                        dom: [-4, 4],
                        rang: 1.9,
                      },
                      bottom: {
                        dom: [-4, 4],
                        rang: 0,
                      },
                    }]
      },
    },
  },

  artifact_23: {
    board: 'board_4',
    statementBottom: ['ƒ(x) ∈ (-∞, ∞)'],
    conditions: {
      conexa: { type: 3 },
      eRange: {
        cotas:
                    [{
                      top: {
                        dom: [-3, 3],
                        rang: 6,
                      },
                    }]
      },
    },
  },

  artifact_24: {
    board: 'board_4',
    statementBottom: ['ƒ(x) ∈ [𝒂, ∞)'],
    conditions: {
      conexa: { type: 3 },
      eRange: {
        cotas:
                    [{
                      bottom: {
                        dom: [-4, 4],
                        rang: -3,
                      },
                    }]
      },
    },
  },
};

//_________________________________________________________________________________________________________

window.onload = main();

