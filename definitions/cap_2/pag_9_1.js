/*
<section id="container" data-viewurl=":cap_2/:pag_9" data-engineurl=":genericEngines/:mod_G,:genericEngines/:mathKeyboard,:genericEngines/:engineOwner,:cap_2/:engineToWay,:cap_2/:engineRoad,:cap_2/:engineToWay,:cap_2/:engineOperations" data-definitionurl=":cap_2/:pag_9"></section>
<script src="http://172.17.12.51:3032/artifact"></script>
*/
const styleBoardGenerid = {
  grid: true,
  maxHeight: 300,
  maxWidth: 300,
  Width: 400,
  boundingbox: [-4, 4, 4, -4],
  axis: [false, true, true],
  valueAxis: {
    yd: [
      [0, 0], [0, 1]
    ], /*dirección del eje y*/
    xd: [
      [0, 0], [1, 0]
    ],
    colory: '#000000',
    colorx: '#000000'
  }
};


/* 
artefacto?2

 points: [
         [-3, -1, true],
         [-1.93, -0.38, true],
         [-0.974, 0.00, true],
         [0.88, 0.32, true],
         [1.22, 0.38, true],
         [1.78, 0.53, true],
         [2.40, 0.80, true],
         [3.4, 2.1]
      ]
*/
const allCUrves = [
  {
    interactive: true,
    typeCurve: 'curve',
    name: {
      text: 'g',
      x: -2,
      y: 0.5
    },
    strokeColor: 'green',
    points: [
      [-2.45, -1.68], [-2.12, -0.84], [-1.37, 0.5], [-0.14, 1.45], [1.10, 1.75], [2.01, 1.70], [2.48, 1.55]
    ]
  },
  {
    name: {
      text: 'h',
      x: -3.5,
      y: -0.8
    },
    strokeColor: 'blue',
    interactive: true,
    typeCurve: 'curve',
    points: [
      [-3, -1], [-1.93, -0.38], [-0.974, 0.00], [0.88, 0.32], [1.22, 0.38], [1.78, 0.53], [2.40, 0.80], [3.4, 2.1]
    ]
  },

  {
    name: {
      text: 'f',
      x: -2,
      y: 2.7
    },
    typeCurve: 'curve',
    strokeColor: 'red',
    interactive: true,
    flex: 0,
    points: [
      [-2.30, 2.43],
      [-0.48, 2.03],
      [1, 1], [2, 0],
      [3, -0.39],
      [3.4, -0.7]
    ]
  }
];

const defBoards = {
  board_1: {
    artifact: 'artifact_1',
    style: styleBoardGenerid,
    curves: allCUrves,
    points: [
      { x: 1, y: 0, visible: true, interactive: true },
      { x: 1.3, y: 0, visible: true, interactive: true },
      { x: 2, y: 0, visible: true, interactive: true }
    ]
  },
  //curva modificada por el autor
  board_2: {
    artifact: 'artifact_3',
    style: styleBoardGenerid,
    curves: [
      {
        interactive: true,
        typeCurve: 'curve',
        name: {
          text: 'g',
          x: -2,
          y: 0.5
        },
        strokeColor: 'green',
        points: [
          [-2.45, -1.68], [-2.12, -0.84], [-1.37, 0.5], [-0.14, 1.45], [1.10, 1.75], [2.01, 1.70], [2.48, 1.55]
        ]
      },
      {
        name: {
          text: 'h',
          x: -3.5,
          y: -0.8
        },
        strokeColor: 'blue',
        interactive: true,
        typeCurve: 'curve',
        points: [
          [-3, -1], [-1.93, -0.38], [-0.974, 0.00], [0.10, 0.6], [1, 0.30], [1.40, 0.35], [1.80, 0.50], [2.30, 0.70], [3.4, 2.1]
        ]
      },

      {
        name: {
          text: 'f',
          x: -2,
          y: 2.7
        },
        typeCurve: 'curve',
        strokeColor: 'red',
        interactive: true,
        flex: 0,
        points: [
          [-2.30, 2.43],
          [-0.48, 2.03],
          [1, 1], [2, 0],
          [3, -0.39],
          [3.4, -0.7]
        ]
      }
    ],
    points: [
      { x: -3, y: 0, visible: true, interactive: true },
      { x: -2, y: 0, visible: true, interactive: true },
      { x: 1, y: 0, visible: true, interactive: true }
    ]
  },
  board_3: {
    artifact: 'artifact_5',
    style: styleBoardGenerid,
    curves: allCUrves,
    points: [
      { x: -3, y: 0, visible: true, interactive: true },
      { x: 1, y: 0, visible: true, interactive: true },
      { x: 2, y: 0, visible: true, interactive: true }
    ]
  }
};
// si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const rDef = {
  artifactHtml: {
    datadefault: [
      {
        type: 10, // tipo 10 genera los contenedores con los dataset y clases para los boards
        classGlobal: 'operationCurves',
        contents: [
          { dataSet: { board: 'board_1' } }, // fino
          { dataSet: { board: 'board_2' } }, // fino             
          { dataSet: { board: 'board_3' } }, // fino
        ]
      }
    ]
  },

  artifact_1: {
    debug: false,
    firsPointsDefault: true,
    buttonsActive: { points: true },
    conditions: {
      road: {
        points: [
          { forks: [[[1, 0], [1, 1.7400534515956048]]] },
          { forks: [[[1.3, 0], [1.3, 0.7], [0.7, 0.7], [0.7, 0.29134182279600207], [1.3, 0.29134182279600207]]] },
          { forks: [[[2, 0], [2, 1.7018130731914758], [-0.008430435265422177, 1.701813073191476], [0, 0.008430435265422177], [-0.9433551192849616, 0.008430435265422177], [-0.9433551192849616, -0.9433551192849616], [2, -0.9433551192849616]]] }
        ]
      }
    }
  },
  artifact_3: {
    debug: false,
    firsPointsDefault: true,
    buttonsActive: { points: true },
    conditions: {
      road: {
        points: [
          {
            forks: [
              [
                [
                  -3,
                  0
                ],
                [
                  -3,
                  -0.9999999999999867
                ],
                [
                  -0.9999999999999867,
                  -0.9999999999999867
                ],
                [
                  -0.9999999999999865,
                  0
                ],
                [
                  -0.9999999999999865,
                  2.144285714285692
                ],
                [
                  2.144285714285692,
                  2.144285714285692
                ],
                [
                  2.144285714285692,
                  0.609903173492169
                ],
                [
                  -3,
                  0.609903173492169
                ]
              ]
            ]
          },
          {
            forks: [
              [
                [
                  -2,
                  0
                ],
                [-2, -0.5818990242182637], [-0.5818990242182637, -0.5818990242182637],[-0.5818990242182638, 2.0523953899380825],[3.3630520872579135, 2.0523953899380825],[3.363052087257914, 3.363052087257914],[-2, 3.363052087257914]
              ]
            ]
          },
            
          {
            forks: [
              [
                [
                  1,
                  0
                ],
                [
                  1,
                  1.7400558615062487
                ],
                [
                  1.7348524213201646,
                  1.7400558615062487
                ],
                [
                  1.7348524213201642,
                  0.26514757867983585
                ],
                [
                  0.26514757867983585,
                  0.26514757867983585
                ],
                [
                  0.26514757867983585,
                  0.5875976513797423
                ],
                [
                  1,
                  0.5875976513797423
                ]
              ]
            ]
          },
        ]
      }
    }
  },

  artifact_5: {
    debug: false,
    firsPointsDefault: true,
    buttonsActive: { points: true },

    conditions: {
      road: {

        points: [
          {
            forks: [[
              [-3, 0], [-3, -1.000000000000006], [-1.000000000000006, -1.000000000000006], [-1.000000000000006, 2.1442857142856964], [2.1442857142856964, 2.1442857142856964], [2.1442857142856964, 1.6678009611426652], [-3, 1.6678009611426652]
            ]],
          },
          {
            forks: [[
              [1, 0], [1, 1.7400534515956048], [1.7348236820248124, 1.7400534515956048], [1.7348236820248126, 0.5146782191319947], [1, 0.5146782191319947]
            ]],
          },
          {
            forks: [[

              [2, 0], [2, 2]
            ]],
          }
        ]
      },
    },
  }

};
const newrDef = {
  artifactHtml: {
    datadefault: [
      {
        type: 12,
        conteiner: '.content_2',
        classGlobal: 'defRoad',
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
                    type: 3, // una pregunta. Varios inputs
                    layout: 1,
                    inputsDefault: [
                      ['g \\right(f\\right(1\\left)\\left) =', true],
                      ['h\\right(f\\right(1.3\\left)\\left) =', true],
                      ['h^{-1}\\right(f^{-1}\\right(g\\right(2\\left)\\left)\\left) =', true]
                    ],

                    conditions: {
                      noiseLevel: 0.1,

                      valueInputs: [

                        [1.7400534515956048],
                        [0.29134182279600207],
                        [-0.9433551192849616],
                                  

                      ]
                    }
                  }

                ]

              }

            }
          }

        ]
      },

      {
        type: 12,
        conteiner: '.content_2',
        classGlobal: 'defRoad',
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
                    type: 3, // una pregunta. Varios inputs
                    layout: 1,
                    inputsDefault: [
                      [' h\\left(f\\left(h\\left(-3\\right)\\right)\\right) =', true],
                      ['h^{-1}\\left(f\\left(g\\left(-2\\right)\\right)\\right) =', true],
                      ['h\\left(f\\left(g\\left(1\\right)\\right)\\right) =', true],
                    ],

                    conditions: {
                      noiseLevel: 0.1,

                      valueInputs: [
                        [0.609903173492169],

                        [3.363052087257914],
                        [0.5875976513797423],
                      ]
                    }
                  }

                ]

              }

            }
          }

        ]
      },

      {
        type: 12,
        conteiner: '.content_2',
        classGlobal: 'defRoad',
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
                    type: 3,
                    layout: 1,
                    inputsDefault: [
                      ['g\\left(f\\left(h\\left(-3\\right)\\right)\\right)=', true],
                      ['h\\left(g\\left(f\\left(1\\right)\\right)\\right)=', true],
                      ['h\\left(f\\left(g^{-1}\\left(2\\right)\\right)\\right)=', true]
                    ],

                    conditions: {
                      noiseLevel: 0.1,

                      valueInputs: [

                        [1.6678009611426652],
                        [0.5146782191319947],
                        ['\\nexists']

                      ]
                    }
                  }

                ]

              }

            }
          }

        ]
      }

    ]
  }
};

generator(newrDef);
roadMain(defBoards, rDef);
