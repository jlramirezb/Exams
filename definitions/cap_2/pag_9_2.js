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
      [-0.4, 2],
      [1, 1], [2, 0],
      [3, -0.39],
      [3.6, -0.9]
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
      { x: 2, y: 0, visible: true, interactive: true }
    ]
  },
  board_2: {
    artifact: 'artifact_3',
    style: styleBoardGenerid,
    curves: allCUrves,
    points: [
      { x: 1, y: 0, visible: true, interactive: true },
      { x: 2, y: 0, visible: true, interactive: true }
    ]
  },
  board_3: {
    artifact: 'artifact_5',
    style: styleBoardGenerid,
    curves: allCUrves,
    points: [
      { x: -1, y: 0, visible: true, interactive: true },
      { x: 2, y: 0, visible: true, interactive: true }
    ]
  }
};
// si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const rDef = {
  artifact_1: {
    debug: false,
    firsPointsDefault: true,
    buttonsActive: { points: true },
    conditions: {

      road: {
        points: [
          {
            forks: [
              [
                [1, 0],
                [1, 1],
                [-0.85, 1],
                [-0.85, 2.1],
                [1, 2.1]
              ]
            ]
          },
          {
            forks: [
              [
                [2, 0],
                [2, 2]
              ]
            ],
          }
        ],
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
                [1, 0],
                [1, 1],
                [-0.85, 1],
                [-0.85, -0.85],
                [3.54, -0.85],
                [3.54, 3.5367503236648417],
                [1, 3.36]
              ]
            ]
          },
          {
            forks: [
              [
                [2, 0],
                [2, 2]
              ]
            ],
          }
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
            forks: [[[-1, 0], [-1, 2.1], [2.1, 2.1], [2.1, 0], [-1, 0]]],
          },
          { forks: [[[2, 0], [2, 2]]] }
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
                      ['f\\left(g^{-1}\\left(1\\right)\\right)\\right) =', true],
                      ['h\\left(f^{-1}\\left(g^{-1}\\left(2\\right)\\right)\\right) =', true],
                    ],
                    conditions: {
                      noiseLevel: 0.1,

                      valueInputs: [
                        [2.1],
                        ['\\nexists']
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
                dataInteraction: {
                  incorrect: 0,
                  correct: 0
                },
                questions: [
                  {
                    type: 3, // una pregunta. Varios inputs
                    layout: 1,
                    inputsDefault: [
                      ['h^{-1}\\left(f\\left(g^{-1}\\left(2\\right)\\right)\\right) =', true],
                      ['f^{-1}\\left(g^{-1}\\left(1\\right)\\right)\\right) =', true],
                    ],
                    conditions: {
                      noiseLevel: 0.1,

                      valueInputs: [
                        ['\\nexists'],[3.36]
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
                      ['h^{-1}(f^{-1}(g^{-1}(2))) = ', true],
                      ['f(f(-1)) = ', true],
                    ],

                    conditions: {
                      noiseLevel: 0.1,
                      valueInputs: [
                        ['\\nexists'], [0]
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