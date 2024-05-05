/*
<section id="container" data-viewurl=":cap_2/:pag_9" data-engineurl=":genericEngines/:mod_G,:genericEngines/:mathKeyboard,:genericEngines/:engineOwner,:cap_2/:engineToWay,:cap_2/:engineRoad,:cap_2/:engineToWay,:cap_2/:engineOperations" data-definitionurl=":cap_2/:pag_9"></section>
<script src="http://172.17.12.51:3032/artifact"></script>
*/

//rDef.artifact_1.roadData.map(p=>p.map(p1=>p1.map(p3=>[p3.X(),p3.Y()])))
//rDef.artifact_1.roadData.map(p=>p.map(p1=>p1.map(p3=>[p3.X(),p3.Y()])))
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

const defBoards = {
  board_0: {
    artifact: 'artifact_1',
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
          [-3, -1], [-1.93, -0.38], [-0.974, 0.00], [0.88, 0.32], [1.22, 0.38], [1.78, 0.53], [2.40, 0.80], [3.4, 2]
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
      { x: -1, y: 0, visible: true, interactive: true }
    ]
  },
  board_1: {
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
          [-3, -1], [-1.93, -0.38], [-0.974, 0.00], [0.88, 0.32], [1.22, 0.38], [1.78, 0.53], [2.40, 0.80], [3.4, 2]
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
      { x: 2, y: 0, visible: true, interactive: true }

    ]
  },
  //////////////////////////////////////////////
  board_2: {
    artifact: 'artifact_5',
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
          [-3, -1], [-1.93, -0.38], [-0.974, 0.00], [0.88, 0.32], [1.22, 0.38], [1.78, 0.53], [2.40, 0.80], [3.4, 2]
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
      { x: 1, y: 0, visible: true, interactive: true },
      { x: 1.3, y: 0, visible: true, interactive: true },
      { x: 1.5, y: 0, visible: true, interactive: true }
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
          { forks: [[[-3, 0], [-3, -1], [-1, -1], [-1, 0.9], [-3, 0.9]]], },
          { forks: [[[-2, 0], [-2, 2.36], [2.36, 2.36], [2.36, 1.6], [1.6, 1.6], [1.6, 0.47], [-2, 0.5]]], },
          { forks: [[[-1, 0], [-1, 2.15], [2.15, 2.15], [2.15, -0.056], [0, -0.056], [0, 1.695], [-1, 1.7]]] }
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
            forks: [[ [-3, 0],[-3, -1.000000000000006], [-1.000000000000006, -1.000000000000006],[-1.000000000000006, 2.1442857142856964],[-3, 2.1442857142856964] ]],
          },
          {
            forks: [[ [-2, 0],[-2, -0.5818990242182637],[3.2476116441525917, -0.5818990242182637],[3.247611644152592, 1.8086430612222648],[-2, 1.8086430612222648]] ],
          },
          {
            forks: [[[2, 0], [2, 1.7018130731914758],[1.701813073191476, 1.701813073191476],[1.7018130731914758, 0.2981869268085208],[2, 0.2981869268085208] ]]
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
          { forks: [[ [1, 0], [1, 1.7400534515956048], [1.7348236820248124, 1.7400534515956048],[1.7348236820248126, 0.2651763179751874],[1, 0.2651763179751874] ]], },
          { forks: [[   [1.3, 0], [1.3, 1.7607256609944975], [1.7607256609944975, 1.7607256609944975],[1.7607256609944977, 0.5233485480561856], [1.3, 0.5233485480561856] ]], },
          { forks: [[[1.5, 0],[1.5, 1.5], [0, 1.5],[0, 1.5114748128007225],[0, 1.6959459459459456],[1.6959459459459456, 1.6959459459459456],[1.6959459459459456, 0.5021420876151818],[1.5, 0.5021420876151818]]] },
        ]
      }
    }
  }
};

const newrDef = {
  artifactHtml: {
    datadefault: [
      {
        type: 12,
        conteiner: '.content_2',
        classGlobal: 'defRoad',
        board: 'board_0',
        contents: [

          {
            type: 11,
            parentBoard: 'board_0',
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
                      ['g\\left(h\\left(-3\\right)\\right)=', true],
                      ['f\\left(f\\left(f\\left(-1\\right)\\right)\\right)=', true],
                      ['h\\left(g\\left(f\\left(-2\\right)\\right)\\right)=', true],
                    ],

                    conditions: {
                      noiseLevel: 0.1,

                      valueInputs: [
                        [0.9], [1.7], [0.5]
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
        board: 'board_1',
        contents: [

          {
            type: 11,
            parentBoard: 'board_1',
            parent: '.card-footer',
            contents: {
              artifact_4: {
                allinputs: [],

                dataInteraction: { incorrect: 0, correct: 0 },
                questions: [
                  {

                    type: 3,
                    layout: 1,
                    inputsDefault: [

                      ['f\\left(h\\left(-3\\right)\\right)=', true],
                      ['h\\left(f^{-1}\\left(g(-2\\right)\\right)) =', true],
                      ['f\\left(g\\left(2\\right)\\right)=', true],
                    ],
                    conditions: {
                      noiseLevel: 0.1,

                      valueInputs: [[-3, 2.1442857142856964], [1.8086430612222648], [0.2981869268085208]]
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
              artifact_6: {
                allinputs: [],

                dataInteraction: { incorrect: 0, correct: 0 },
                questions: [
                  {
                    type: 3, // una pregunta. Varios inputs
                    layout: 1,
                    inputsDefault: [
                      ['f\\left(g\\left(1\\right)\\right) = ', true],
                      ['h\\left(g\\left(1.3\\right)\\right) = ', true],
                      ['h\\left(f\\left(g^{-1}\\left(1.5\\right)\\right)\\right) = ', true],
                    ],
                    conditions: {
                      noiseLevel: 0.1,

                      valueInputs: [
                        [0.2651763179751874], [ 0.5233485480561856], [0.5021420876151818]
                      ]
                    }
                  }

                ]

              }

            }
          }

        ]
      },
    ]
  }
};

generator(newrDef);
roadMain(defBoards, rDef);

