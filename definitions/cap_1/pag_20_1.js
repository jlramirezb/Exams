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

  board_7: {
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
      [[[0, -5], [0, 4.9]],0,true, true, '' ],
      [[[-6, 0], [3.4, 0]],0,true, 'gray' ],
    ],
    points: [
      [1.6, -0.6, false, '𝒂'],
      [1.5, 0, true, ''],
    ],
    curves: [//[[lista de puntos],Color]
      [[ [-2, -0.7,false], [-1.4, 0.5,false], [1, 2.8,false],  [3.3, 3.3,false]],'black'],
    ],
  }, 

  board_8: {
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
      [[[0, -5], [0, 4.9]],0,true, true, '' ],
      [[[-6, 0], [3.4, 0]],0,true, 'gray' ],
    ],
    points: [
      [2.1, -0.6, false, '𝒂'],
      [2, 0, true, ''],
    ],
    curves: [//[[lista de puntos],Color]
      [[ [-3, 3,false], [-2.9, 2.8,false], [-2.5, 1.5,false],[-1.6, 0.5,false], [-1, 0.5,false],  /*[-0.8, 1.2,true]*/, [0, 1.5,false], [1, 2.5,false],[1.5, 2.5,false], [2, 2.5,false], [3.3, 1.5,false]],'black'],
    ],
  }, 


  board_9: {
    style: {
      boundingbox: [-4, 4, 4, -4],
      axis: [false, false, false],
      grid: false,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[-1, 0], [1, 0]],
      },
      maxHeight: 300,
      maxWidth: 300,
    },
    lines: [
      [[[0, -5], [0, 4.9]],0,true, true, '' ],
      [[[-6, 0], [3.4, 0]],0,true, 'gray' ],

      [[[-3.5, 2], [3.5, 2]] ],

    ],

    points: [
      [0.5, -0.6, false, '𝒂'],
      [0.6, 0, true, ''],
    ],
  },

  board_10: {
    style: {
      boundingbox: [-5.5, 5, 3.5, -2],
      axis: [false, false, false],
      grid: false,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      maxHeight: 300,
      maxWidth: 300,
    },
    points: [
      [0, -0.6, false, '𝒂'],
      [0, 0, true, ''],
    ],

    lines: [
      [[[-1, -5], [-1, 4.9]],0,true, true, '' ],
      [[[-6, 0], [3.4, 0]],0,true, 'gray' ],


    ],

    curves:[
      [[[-2.9, 0.7681145748, false],[-2.8, 1.077032961,false], [-2.6, 1.496662955,false], [-2.4, 1.8,false], [-2.2, 2.039607805,false], [-2, 2.236067977,false], [-1.8, 2.4,false], [-1.6, 2.537715508,false], [-1.4, 2.653299832,false], [-1.2, 2.749545417,false], [-1, 2.828427125,false],[-0.8, 2.891366459,false], [-0.6, 2.939387691, false], [-0.4, 2.973213749, false], [-0.2, 2.993325909, false], [0, 3,false],  [0.2, 2.993325909,false],  [0.4, 2.973213749,false],  [0.6, 2.939387691,false],  [0.8, 2.891366459,false], [1, 2.828427125,false], [1.2, 2.749545417,false], [1.4, 2.653299832,false], [1.6, 2.537715508,false], [1.8, 2.4,false], [2, 2.236067977,false], [2.2, 2.039607805,false], [2.4, 1.8,false], [2.6, 1.496662955,false], [2.8, 1.077032961,false], [2.9, 0.7681145748,false]],'black'],

    ]
  },

  board_11: {
    style: {
      boundingbox: [-7.5, 5, 3.5, -3],
      axis: [false, false, false],
      grid: false,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [-2, 0]],
      },
      maxHeight: 300,
      maxWidth: 300,
    },
    points: [
      [0.5, -0.6, false, '𝒂'],
      [0.6, 0, true, ''],
    ],
    lines: [
      [[[-1, -5], [-1, 4.9]],0,true, true, '' ],
      [[[-8.3, 0], [2.9, 0]],0,true, 'gray' ],
    ],
    curves:[
      [[[-2.9, 3.4, false] , [0, 1.1, false],[0.6, 1, false], [2.9, 3.4,false]],'black'],
    ]
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

  artifact_1: {
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

  artifact_2: {
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

  artifact_3: {
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

  artifact_4: {
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

  artifact_5: {
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

  artifact_6: {
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


  artifact_7: {
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
                        rang: -3,
                      },
                    }]
      },
    },
  },

  //******* */
  artifact_8: {
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

  artifact_9: {
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

  artifact_10: {
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

  artifact_11: {
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

  artifact_12: {
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

