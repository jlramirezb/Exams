
const defBoards = {
  board_1: {
    artifact: 'artifact_1',
    style: {
      grid: true,
      boundingbox: [-4, 4, 4, -4],
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
      },
    },

    curves: [
      {
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-3.28, 2.38],
          [-1.78, 2.10],
          [0, 1.40],
          [0.78, 1.02],
          [1.60, 0.48],
          [2, 0],
          [2.31, -0.70],
          [2.70, -1.58],
          [3, -1.66],
        ],
      },

      {
        interactive: true,
        strokeColor: 'purple',
        points: [
          [-3.34, -0.95],
          [-2.94, -0.81],
          [-2.5, 0],
          [-1.21, 0.78],
          [0, 0],
          [0.50, -0.7],
          [1.10, -0.79],
          [1.71, -0.51],
          [2, 0],
          [2.97, 1.14],
          [3.27, 1.04],
        ],
      },
    ],
    points: [

      [-1, -0, true, 'b', true, 'black'],
      [-2.5, 0, true, 'a', true, 'black'],
      [0, 0, true, '0', true, 'black'],
      [1, 0, true, 'c', true, 'black'],
      [2, 0, true, 'd', true, 'black'],

      [-3, 2.5, false, 'ƒ', null, null, null, 18],
      [-3, -1.2, false, 'g', null, null, null, 18],


      //puntos

    ],

    asymptotes: [

      { x: -1, style: { color: 'gray' } },
      { x: -2.5, style: { color: 'gray' } },
      { x: 0, style: { color: 'gray' } },
      { x: 1, style: { color: 'gray' } },
      { x: 2.03, style: { color: 'gray' } },


    ],
  },


};
//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const rDef = {
  artifactHtml: {
    datadefault: [
      {
        type: 10, //tipo 10 genera los contenedores con los dataset y clases para los boards
        classGlobal: 'operationCurves',
        contents: [
          {
            dataSet: {
              board: 'board_1',
            },
          },
        ],
      },

      {
        type: 11, // switch case
        classGlobal: 'QA', //
        parent: '#oneContainer', //
        contents: {
          artifact_2: {
            allinputs: [], //nodos que se van generando
            dataInteraction: { incorrect: 0, correct: 0 }, // aciertos y fallas
            questions: [


              {
                type: 2,
                question: '¿Cuales son los valores de corte de la curva f con el eje horizontal?',
                answers_values: ['', 'a', 'b', '0', 'c', 'd'],
                conditions: {
                  correctIndex: 5,
                },
              },

              ,
              {
                type: 2,
                question: '¿Cuales son los valores de corte de la curva g con el eje horizontal ',
                answers_values: ['',
                  'a,0,d',
                  'a,b,e',
                  'a,b,c',
                  'a,c,e',
                ],
                conditions: {
                  correctIndex: 1,
                },
              },

              {
                type: 1,
                question: '¿Existen puntos donde la curva producto coincide con alguna de las curvas f o g? ',
                answers_values: [
                  'Sí',
                  'No',

                ],
                conditions: {
                  correctIndex: 'Sí',
                },
              },


            ],
          },

        },
      },
      {
        type: 11, // switch case
        classGlobal: 'QA', //
        parent: '#towContainer', //
        contents: {

          artifact_3: {
            allinputs: [], //nodos que se van generando
            dataInteraction: { incorrect: 0, correct: 0 }, // aciertos y fallas
            questions: [

              {
                type: 2,
                question: ' ¿Cuáles son sus abcisas? ',
                answers_values: ['', 'a,0,d', 'a,b,c,d'],
                conditions: {
                  correctIndex: 1,
                },
              },
              {
                type: 2,
                question: ' ¿En cual de ellos f tiene altura 0? ',
                answers_values: [
                  '',
                  'd',
                  'a',

                ],
                conditions: {
                  correctIndex: 1,
                },
              },
              {
                type: 2,
                question:
                           ' ¿En cual de ellos g tiene altura 0?',
                answers_values: ['', 'a,0,d', 'a,d,b'],
                conditions: {
                  correctIndex: 1,
                },
              },
              ,
              {
                type: 2,
                question: ' ¿Cuánto es g(b)? ',
                answers_values: [
                  '',
                  '1',
                  '0.7',

                ],
                conditions: {
                  correctIndex: 2,
                },
              },


            ],
          },

        },
      },

      {
        type: 11, // switch case
        classGlobal: 'QA', //
        parent: '#treContainer', //
        contents: {
          artifact_4: {
            allinputs: [], //nodos que se van generando
            dataInteraction: { incorrect: 0, correct: 0 }, // aciertos y fallas
            questions: [



              {
                type: 1,
                question:
                           ' ¿En b, las curvas f y f·g coinciden?',
                answers_values: [
                  'Sí', 'No'

                ],
                conditions: {
                  correctIndex: 'No',
                },
              },



              {
                type: 1,
                question:
                           '¿En (b) cuál es el signo de g?',
                answers_values: [
                  '+', '-'

                ],
                conditions: {
                  correctIndex: '+',
                },
              },


              {
                type: 1,
                question:
                           '¿Y el signo de f · g?',
                answers_values: [
                  '+', '-'

                ],
                conditions: {
                  correctIndex: '+',
                },
              },
              {
                type: 1,
                question:
                           '¿Y el signo de f?',
                answers_values: [
                  '+', '-'

                ],
                conditions: {
                  correctIndex: '+',
                },
              },



            ],
          },
        },
      }
    ],
  },
  artifact_1: {
    curveMod: {
      color: 'red',
      interactive: true,
    },
    buttonsActive: { curve: true, asymptotes: false, config: false },
    conditions: {

      asymptotes: {
        noise: 10.5,
        positionY: [
          [
            -2.5,
            [0]
          ],
          [
            -1,
            [1.4]
          ],
          [
            0,
            [0]
          ],
          [
            1,
            [-0.6]
          ],
          [
            2.03,
            [0]
          ]
        ],
      },
    },
  },

};

generator(rDef);
mainOperation(defBoards, rDef);

