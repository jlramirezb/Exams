

const defBoards = {
  board_1: {
    artifact: 'artifact_1',

    style: {
      grid: true,
      maxHeight: 300,
      height: 500,
      width: 500,
      maxWidth: 300,
      minWidth: 100,
      boundingbox: [-2, 8, 8, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },

    curves: [
      {
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-1.30, 0.44], [-1.14, 1], [-0.9, 1.40], [0.20, 2.44], [2.50, 3.20], [5.572, 3.20]
        ],
      },
      {
        interactive: true,
        strokeColor: 'purple',
        points: [
          [-1.30, 3.20], [2.50, 3.20], [5.0, 1.53], [5.572, 0.44]
        ],
      },
    ],
    lines: [
      {
        points: [[2.5, 0], [2.5, 3.2]],
        dash: 2,
      },

    ],
    points: [
      [2.5, 0, false, 'a', null, null, null],
      [-1, 3.5, false, 'f ', null, null, null],
      [5, 3.5, false, 'f + g', null, null, null],
    ],
  },
  board_2: {
    artifact: 'artifact_3',

    style: {
      grid: true,
      maxHeight: 300,
      height: 500,
      width: 500,
      maxWidth: 300,
      minWidth: 100,
      boundingbox: [-2, 6, 6, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },

    curves: [
      {
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-1.30, 3.20], [2.50, 3.20], [5.0, 1.53], [5.572, 0.44]
        ],
      },
      {
        interactive: true,
        strokeColor: 'purple',
        points: [
          [-1.30, 0.44], [-1.14, 1], [-0.9, 1.40], [0.20, 2.44], [2.50, 3.20], [5.572, 3.20]
        ],
      }

    ],
    lines: [
      {
        points: [[2.5, 0], [2.5, 3.2]],
        dash: 2,
      },

    ],
    points: [
      [2.5, 0, false, 'a', null, null],
      [-1, 3.5, false, 'f + g', null, null],
      [5, 3.5, false, 'f', null, null],
    ],
  },
  board_3: {
    artifact: 'artifact_5',

    style: {
      grid: true,
      maxHeight: 300,
      height: 500,
      width: 500,
      maxWidth: 300,
      minWidth: 100,
      boundingbox: [-2, 7, 7, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
    arcs: [
      //  { points: [[2, 5,], [-0.30, 5.06], [4.67, 5.14]] },
      //    { points: [[2, 0.35],  [4.36, 0.31],[-0.24, 0.23]] },

    ],

    curves: [
      {
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-0.40, 5.01], [-0.27, 4.59], [-0.06, 4.02], [0.43, 3.32], [1.03, 2.92], [1.60, 2.75], [2.32, 2.73], [2.84, 2.85], [3.41, 3.22], [3.96, 3.85], [4.4, 5.01]
        ],
      },

      {
        interactive: true,
        strokeColor: 'purple',
        points: [
          [-0.41, 0.22], [-0.34, 0.74], [-0.06, 1.44], [0.43, 2.10], [1.03, 2.47], [1.60, 2.67], [2.32, 2.67], [2.84, 2.52], [3.41, 2.20], [4.0, 1.45], [4.4, 0.22]
        ],
      },


    ],
    lines: [
      {
        points: [[2, 0], [2, 2.7]],
        dash: 2,
      },

    ],
    points: [
      [2, 0, false, 'a', null, null, null],
      [2, 3, false, 'f + g', null, null, null],
      [4.3, 1.5, false, 'f', null, null, null],
    ],
  },
  board_4: {
    artifact: 'artifact_7',

    style: {
      grid: true,
      maxHeight: 300,
      height: 500,
      width: 500,
      maxWidth: 300,
      minWidth: 100,
      boundingbox: [-3, 6,6, -6],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
    arcs: [
      //  { points: [[2, 5,], [-0.30, 5.06], [4.67, 5.14]] },
      //    { points: [[2, 0.35],  [4.36, 0.31],[-0.24, 0.23]] },

    ],

    curves: [
      {
        interactive: true,
        strokeColor: 'purple',
        points: [
          [-0.40, 0.22], [-0.32, 0.74], [-0.06, 1.44], [0.43, 2.10], [1.03, 2.47], [1.60, 2.67], [2.32, 2.67], [2.84, 2.52], [3.41, 2.24], [3.96, 1.68], [4.26, 1.02], [4.5, 0.22]
        ],
      },
      {
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-0.40, 5.01], [-0.32, 4.61], [-0.06, 4.02], [0.43, 3.32], [1.03, 2.92], [1.60, 2.75], [2.32, 2.73], [2.84, 2.85], [3.41, 3.22], [3.96, 3.85], [4.38, 4.61], [4.5, 5.01]
        ],
      },




    ],
    lines: [
      {
        points: [[2, 0], [2, 2.7]],
        dash: 2,
      },

    ],
    points: [
      [2, 0, false, 'a', null, null, null],
      [2, 3.2, false, 'f', null, null, null],
      [4.3, 1.5, false, 'f + g', null, null, null],
    ],
  },
  board_5: {
    artifact: 'artifact_9',

    style: {
      grid: true,
      maxHeight: 300,
      height: 500,
      width: 500,
      maxWidth: 300,
      minWidth: 100,
      boundingbox: [-2, 6, 6, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },

    curves: [
      {
        interactive: true,
        strokeColor: 'darkorange',
        points: [

          [-1.63, 1.42], [-1.15, 2.09], [-0.17, 2.68], [1.17, 3.01], [2.56, 3.22], [4.98, 3.51]
        ],
      },
      {
        interactive: true,
        strokeColor: 'purple',
        points: [
          [-1.63, 0.42], [-1.15, 1.09], [-0.17, 1.68], [1.17, 2.01], [2.56, 2.22], [4.98, 2.51]

        ],
      }

    ],
    lines: [
      {
        points: [[2.5, 0], [2.5, 3.2]],
        dash: 2,
      },

    ],
    points: [
      [2.5, 0, false, 'a', null, null],
      [4, 4, false, 'f + g', null, null],
      [-1, 0.5, false, 'f', null, null],
    ],
  },
  board_6: {
    artifact: 'artifact_11',

    style: {
      grid: true,
      maxHeight: 300,
      height: 500,
      width: 500,
      maxWidth: 300,
      minWidth: 100,
      boundingbox: [-2, 6, 6, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },

    curves: [
      {
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-1.63, 0.42], [-1.15, 1.09], [-0.17, 1.68], [1.17, 2.01], [2.56, 2.22], [4.98, 2.51]

        ],
      },
      {
        interactive: true,
        strokeColor: 'purple',
        points: [

          [-1.63, 1.42], [-1.15, 2.09], [-0.17, 2.68], [1.17, 3.01], [2.56, 3.22], [4.98, 3.51]
        ],
      },


    ],
    lines: [
      {
        points: [[2.5, 0], [2.5, 3.2]],
        dash: 2,
      },

    ],
    points: [
      [2.5, 0, false, 'a', true, 'black'],
      [4, 4, false, 'f', true, 'black'],
      [-1, 0.5, false, 'f + g', true, 'black'],
    ],
  },



};
const rDef = {
  artifactHtml: {
    datadefault: [
      {
        type: 12,
        conteiner: '.content_2',
        classGlobal: 'operationCurves',
        board: 'board_1',
        contents: [

          {
            type: 11,
            parentBoard: 'board_1',
            parent: '.card-footer',
            contents: {

              artifact_2: {
                allinputs: [],
                dataInteraction: { incorrect: 0, correct: 0 },
                questions: [
                  {
                    type: 2,
                    question: 'Si x > a, f + g está ',
                    answers_values: ['', 'Por encima de f ', 'Por debajo de f'],
                    conditions: {
                      correctIndex: 1
                    }
                  },
                  {
                    type: 2,
                    question: 'Por lo tanto si x > a, g está',
                    answers_values: ['', 'Por encima del eje x (g(x)>0)', 'Por debajo del eje x (g(x)<0)'],
                    conditions: {
                      correctIndex: 1
                    }
                  },



                  {
                    type: 2,
                    question: 'Si x < a. f + g está ',
                    answers_values: ['', 'Por encima de f ', 'Por debajo de f'],
                    conditions: {
                      correctIndex: 2
                    }
                  }, {
                    type: 2,
                    question: 'Por lo tanto si x < a. g está',
                    answers_values: ['', 'Por encima del eje x (g(x)>0)', 'Por debajo del eje x (g(x)<0)'],
                    conditions: {
                      correctIndex: 2
                    }
                  },



                ]

              },




            },
          },


        ],
      },


      {
        type: 12,
        conteiner: '.content_2',
        classGlobal: 'operationCurves',
        board: 'board_2',
        contents: [

          {
            type: 11,
            parentBoard: 'board_2',
            parent: '.card-footer',
            contents: {

              artifact_4: {
                allinputs: [],
                dataInteraction: { incorrect: 0, correct: 0 },
                questions: [
                  {
                    type: 2,
                    question: 'Si x > a. f + g está ',
                    answers_values: ['', 'Por encima de f ', 'Por debajo de f'],
                    conditions: {
                      correctIndex: 2
                    }
                  },
                  {
                    type: 2,
                    question: 'Por lo tanto si x > a, g está',
                    answers_values: ['', 'Por encima del eje x (g(x)>0)', 'Por debajo del eje x (g(x)<0)'],
                    conditions: {
                      correctIndex: 2
                    }
                  },



                  {
                    type: 2,
                    question: 'Si x < a, f + g está ',
                    answers_values: ['', 'Por encima de f ', 'Por debajo de f'],
                    conditions: {
                      correctIndex: 1
                    }
                  }, {
                    type: 2,
                    question: 'Por lo tanto si x < a,f + g está',
                    answers_values: ['', 'Por encima del eje x (g(x)>0)', 'Por debajo del eje x (g(x)<0)'],
                    conditions: {
                      correctIndex: 1
                    }
                  },

                ]

              },



            },
          },

        ],
      },
      {
        type: 12,
        conteiner: '.content_2',
        classGlobal: 'operationCurves',
        board: 'board_3',
        contents: [

          {
            type: 11,
            parentBoard: 'board_3',
            parent: '.card-footer',
            contents: {

              artifact_6: {
                allinputs: [],
                dataInteraction: { incorrect: 0, correct: 0 },
                questions: [
                  {
                    type: 2,
                    question: 'Si x > a. f + g está ',
                    answers_values: ['', 'Por encima de f ', 'Por debajo de f'],
                    conditions: {
                      correctIndex: 2
                    }
                  },
                  {
                    type: 2,
                    question: 'Por lo tanto si x > a, g está',
                    answers_values: ['', 'Por encima del eje x (g(x)>0)', 'Por debajo del eje x (g(x)<0)'],
                    conditions: {
                      correctIndex: 2
                    }
                  },



                  {
                    type: 2,
                    question: 'Si x < a, f + g está ',
                    answers_values: ['', 'Por encima de f ', 'Por debajo de f'],
                    conditions: {
                      correctIndex: 1
                    }
                  }, {
                    type: 2,
                    question: 'Por lo tanto si x < a,f + g está',
                    answers_values: ['', 'Por encima del eje x (g(x)>0)', 'Por debajo del eje x (g(x)<0)'],
                    conditions: {
                      correctIndex: 1
                    }
                  },

                ]

              },



            },
          },



        ],
      },
      {
        type: 12,
        conteiner: '.content_2',
        classGlobal: 'operationCurves',
        board: 'board_4',
        contents: [
          {
            type: 11,
            parentBoard: 'board_4',
            parent: '.card-footer',
            contents: {

              artifact_8: {
                allinputs: [],
                dataInteraction: { incorrect: 0, correct: 0 },
                questions: [
                  {
                    type: 2,
                    question: 'Si x > a. f + g está ',
                    answers_values: ['', 'Por encima de f ', 'Por debajo de f'],
                    conditions: {
                      correctIndex: 2
                    }
                  },
                  {
                    type: 2,
                    question: 'Por lo tanto si x < a. g está',
                    answers_values: ['', 'Por encima del eje x (g(x)>0)', 'Por debajo del eje x (g(x)<0)'],
                    conditions: {
                      correctIndex: 2
                    }
                  },
                  {
                    type: 2,
                    question: 'Si x < a. f + g está ',
                    answers_values: ['', 'Por encima de f ', 'Por debajo de f'],
                    conditions: {
                      correctIndex: 2
                    }
                  }, {
                    type: 2,
                    question: 'Por lo tanto si x < a. g está',
                    answers_values: ['', 'Por encima del eje x (g(x)>0)', 'Por debajo del eje x (g(x)<0)'],
                    conditions: {
                      correctIndex: 2
                    }
                  },

                ]

              },



            },
          },













        ],
      },

      {
        type: 12,
        conteiner: '.content_2',
        classGlobal: 'operationCurves',
        board: 'board_5',
        contents: [
          {
            type: 11,
            parentBoard: 'board_5',
            parent: '.card-footer',
            contents: {

              artifact_10: {
                allinputs: [],
                dataInteraction: { incorrect: 0, correct: 0 },
                questions: [
                  {
                    type: 2,
                    question: 'Si x > a. f + g está ',
                    answers_values: ['', 'Por encima de f ', 'Por debajo de f'],
                    conditions: {
                      correctIndex: 1
                    }
                  },
                  {
                    type: 2,
                    question: 'Por lo tanto si x < a. g está',
                    answers_values: ['', 'Por encima del eje x (g(x)>0)', 'Por debajo del eje x (g(x)<0)'],
                    conditions: {
                      correctIndex: 1
                    }
                  },
                  {
                    type: 2,
                    question: 'Si x < a. f + g está ',
                    answers_values: ['', 'Por encima de f ', 'Por debajo de f'],
                    conditions: {
                      correctIndex: 1
                    }
                  }, {
                    type: 2,
                    question: 'Por lo tanto si x < a. g está',
                    answers_values: ['', 'Por encima del eje x (g(x)>0)', 'Por debajo del eje x (g(x)<0)'],
                    conditions: {
                      correctIndex: 1
                    }
                  },

                ]

              },



            },
          },













        ],
      },

      {
        type: 12,
        conteiner: '.content_2',
        classGlobal: 'operationCurves',
        board: 'board_6',
        contents: [
          {
            type: 11,
            parentBoard: 'board_6',
            parent: '.card-footer',
            contents: {

              artifact_12: {
                allinputs: [],
                dataInteraction: { incorrect: 0, correct: 0 },
                questions: [
                  {
                    type: 2,
                    question: 'Si x > a. f + g está ',
                    answers_values: ['', 'Por encima de f ', 'Por debajo de f'],
                    conditions: {
                      correctIndex: 2
                    }
                  },
                  {
                    type: 2,
                    question: 'Por lo tanto si x < a. g está',
                    answers_values: ['', 'Por encima del eje x (g(x)>0)', 'Por debajo del eje x (g(x)<0)'],
                    conditions: {
                      correctIndex: 2
                    }
                  },
                  {
                    type: 2,
                    question: 'Si x < a. f + g está ',
                    answers_values: ['', 'Por encima de f ', 'Por debajo de f'],
                    conditions: {
                      correctIndex: 2
                    }
                  }, {
                    type: 2,
                    question: 'Por lo tanto si x < a. g está',
                    answers_values: ['', 'Por encima del eje x (g(x)>0)', 'Por debajo del eje x (g(x)<0)'],
                    conditions: {
                      correctIndex: 2
                    }
                  },

                ]

              },



            },
          },


        ],
      },





    ]
  },

  artifact_1: {
    curveMod: {
      
      color: 'red',
      interactive: true,
    },
    buttonsActive: { points: true },
    conditions: {

      operation: {
        curves: [[0, 1]],
        type: 3,
      },
    },

  },
  artifact_3: {


    curveMod: {
      color: 'red',
      interactive: true,
    },
    buttonsActive: { points: true },
    conditions: {

      operation: {
        curves: [[0, 1]],
        type: 3,
      },

    },

  },
  artifact_5: {

    curveMod: {
      color: 'red',
      interactive: true,

    },
    buttonsActive: { points: true },
    conditions: {

      operation: {
        curves: [[0, 1]],
        type: 3,
      },

    },

  },
  artifact_7: {
    curveMod: {
      color: 'red',
      interactive: true,
    },
    buttonsActive: { points: true },
    conditions: {

      operation: {
        curves: [[0, 1]],
        type: 3,
      },

    },

  },
  artifact_9: {
    curveMod: {
      color: 'red',
      interactive: true,
    },
    buttonsActive: { points: true },
    conditions: {

      operation: {
        curves: [[0, 1]],
        type: 3,
      },

    },

  },
  artifact_11: {
    curveMod: {
      color: 'red',
      interactive: true,
    },
    buttonsActive: { points: true },
    conditions: {

      operation: {
        curves: [[0, 1]],
        type: 3,
      },

    },

  },


};

generator(rDef);
mainOperation(defBoards, rDef);

