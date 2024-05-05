

let def = {
  artifact_Text: {
    datadefault: [
      //[Bandera, numero de contenedores, numero de divs,[[array con el contenido de las condiciones ]].[[Respuestas Si o No]] ] 
      [1, 'Complete con una curva adecuada.'],
    ],
    changeContent: false
  },

  artifact: {
    datadefault: [
      //[Bandera, numero de contenedores, numero de divs,[[array con el contenido de las condiciones ]].[[Respuestas Si o No]] ] 
      [10, ['artifact_1', 'artifact_2', 'artifact_3', 'artifact_4', 'artifact_5', 'artifact_6', 'artifact_7', 'artifact_8', 'artifact_9', 'artifact_10']],

    ],
    changeContent: true
  },

  artifact_1: {
    changeContent: true,
    statementBottom: ['ƒ es conexa', 'Dominio: [0,1]', 'Rango: [0,1]'],
    buttonsActive: {
      coteTop: false,
      coteDown: false,
      domKey: true,
      rangKey: true,
    },

    conditions: {
      axieX: [[1, '1']],
      axieY: [[1, '1']],

      dom: {
        range: [['0', '1', 1, false, false]],
        xMod: true,
      },
      rang: {
        range: ['0', '1'],
        max: false,
        min: false,
        yMod: true,
      }


    },
  },
  artifact_2: {
    changeContent: true,
    statementBottom: ['ƒ es conexa','Dominio: [-1,0]', 'Rango: [0,1]'],
    buttonsActive: {
      coteTop: false,
      coteDown: false,
      domKey: true,
      rangKey: true,
    },
    conditions: {
      axieX: [[-1, '-1']],
      axieY: [[1, '1']],

      dom: {
        range: [['-1', '0', 1, false, false]],
        xMod: true,
      },
      rang: {
        range: ['0', '1'],
        max: false,
        min: false,
        yMod: true,
      }


    }
  },
  artifact_3: {
    changeContent: true,
    statementBottom: ['Dominio: R', 'Rango: R - {-1}'],
    buttonsActive: {
      coteTop: false,
      coteDown: false,
      domKey: false,
      rangKey: true,
    },
    conditions: {
      axieY: [[-1, '-1']],
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
      },
      rang: {
        yMod: true,
        mulIntervals: [
          [['-1', [], true, false], [[], '-1', false, true]]
        ],
      },
    },
  },
  artifact_4: {
    changeContent: true,
    statementBottom: ['ƒ es conexa', 'Dominio: [0,∞)', 'Rango: [0,∞)'],
    buttonsActive: {
      coteTop: false,
      coteDown: false,
      domKey: true,
      rangKey: true,
    },
    conditions: {

      dom: { range: [[0, [4], 1, false, false]] },
      rang: {
        mulIntervals: [[[[], 0, false, false]]],
      },
    },
  },
   
  artifact_5: {
    changeContent: true,
    statementBottom: ['Dominio: [-1,1]', 'Rango: {-1,1}'],
    buttonsActive: {
      coteTop: false,
      coteDown: false,
      domKey: true,
      rangKey: true,
    },
    conditions: {
      axieX: [[-1, '-1'], [1, '1']],
      axieY: [[-1, '-1'], [1, '1']],

      dom: {
        range: [['-1', '1', 3, false, false]],
        xMod: true,
      },
      rang: {
        yMod: true,
        mulIntervals: [
          [['-1', '-1'], ['1', '1']]
        ],
      },


    },
  },
   
  artifact_6: {
    changeContent: true,
    statementBottom: ['Dominio: R', 'Rango: {-1,1}'],
    buttonsActive: {
      rangKey: true,
    },
    conditions: {
      axieY: [[-1, '-1'], [1, '1']],
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 2, false, false]],
      },
      rang: {
        yMod: true,
        mulIntervals: [
          [['-1', '-1'], ['1', '1']]
        ],
      },
    },
  }, 

  // artifact_7: {
  //    changeContent: true,
  //    statementBottom: ["Dominio: [-1,1]", "Rango: R - (-1,1)"],
  //    buttonsActive: {
  //       coteTop: true,
  //       coteDown: true,
  //       domKey: true,
  //       rangKey: true,
  //    },
  //    conditions: {
  //       axieX: [[-1, "-1"], [1, '1']],
  //       axieY: [[-1, "-1"], [1, '1']],

  //       dom: {
  //          range: [
  //             ["-1", "-1", 3, false, false],
  //             ["1", "1", 3, false, false],
  //             [[1, 2, 8], [4, 5, 6], 3, false, false]],
  //          xMod: true,
  //       },
  //       rang: {
  //          yMod: true,
  //          mulIntervals: [
  //             [[[], '1'], ['-1', []],]
  //          ],
  //       },
  //    },
  // },
  artifact_7: {
    changeContent: true,
    statementBottom: ['ƒ es conexa','Dominio: (0,∞)', 'Rango: (0,∞)'],
    buttonsActive: {
      coteTop: false,
      coteDown: false,
      domKey: true,
      rangKey: true,
    },
    conditions: {

      dom: { range: [[0, [4], 1, true, false]] },
      rang: {
        mulIntervals: [[[[], 0, false, true]]],
      },
    },
  },

  artifact_8: {   //8
    changeContent: true,
    statementBottom: ['Dominio: R ', 'Rango: R - {0}'],
    buttonsActive: {
      domKey: false,
      rangKey: true,
    },
    conditions: {
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
        // range: [[[1, 2, 8], 0, 3, false, true], [0, [4, 5, 6], 3, true, false]],
      },
      rang: {
        mulIntervals: [
          [[0, [], true, false], [[], 0, false, true]]
          // [['0', [], true, false], [[], '0', false, true]]

        ],
      },
    },
  },
  artifact_9: {     //9
    changeContent: true,
    statementBottom: ['Dominio: R - {1}', 'Rango: (0,1)'],
    buttonsActive: {
      domKey: true,
      rangKey: true,
    },
    conditions: {
      axieX: [[1, '1']],
      axieY: [[1, '1']],
      dom: {
        xMod: true,
        text:'Revisa dominio o inclinación de los infinitos,',
        range: [[[1], '1', 3, false, true], ['1', [5], 3, true, false]],
      },
      rang: {
        yMod: true,
        mulIntervals: [
          [['1', '0']]
        ],
      },
    },
  },
  // artifact_10: {  //10
  //    changeContent: true,
  //    statementBottom: ["Dominio: R - {0}", "Rango: R - {0}"],
  //    buttonsActive: {
  //       domKey: true,
  //       rangKey: true,
  //    },
  //    conditions: {
  //       dom: {
  //        xMod: true,
  //        text:"Ojo1",
  //       // range: [[[1, 2, 8], '0', 3, false, true], ['0', [4, 5, 6], 3, true, false]],
  //       range:  [ ["0", [ 4], 3, true, false]],

  //       },
  //       eRange: {
  //          cotas:
  //              [{
  //                text:"OJO",
  //                  bottom: {
  //                      dom: [0, 4],
  //                      rang: 0,
  //                  },
  //              }]
  //      },
  //      compare: {values:  [[0, ">", 0]]}, 


  //    },
  // },

  artifact_10: {
    changeContent: true,
    statementBottom: ['ƒ es conexa', 'Dominio: (-∞,0]', 'Rango: [0,∞)'],
    buttonsActive: {
      coteTop: false,
      coteDown: false,
      domKey: true,
      rangKey: true,
    },
    conditions: {

      dom: { range: [[[2],0, 1, false, false]] },
      rang: {
        mulIntervals: [[[[], 0, false, false]]],
      },
    },
  },
};

let defBoards = {
  board_0: {
    style: {
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],

      },
      grid: false,
      boundingbox: [-4, 4, 4, -4],
      maxWidth: 350,
      maxHeight: 350,
    },

  },

};

generator();
defBoardDefault();
main();