
const globalColor = [
  '#f16413',
  'violet',
  '#4955FE',
  '#ffa420',
  '#083964',
  '#0073e8',
  '#31379a',
  '#048E62',
  '#6B1B9A',
  '#195E20'
].reverse();

const rDef = {
  artifactHtml: {
    datadefault: [
      {
        type: 11,// tipo 
        //classGlobal: "QA",
        customKeyboard: 1,
        parent: '#oneContainer',
        contents: {
          artifact_2: {
            allinputs: [],
            dataInteraction: { incorrect: 0, correct: 0, forAnswer: 0 },
            questions: [
              {
                type: 1,
                question: ' ¿Tienen igual forma los caminos? ',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'No'
                }
              },
              {
                type: 3, // una pregunta. Varios inputs
                question: 'Escriba la ordenada de cada uno de los puntos finales de los caminos del gráfico  ',
                inputsDefault: [
                  ['a:', false],
                  ['b:', false,],
                  ['c:', false],
                ],
                //classStyle: 'flex-row',
                conditions: {
                  valueInputs: [
                    ['f^{-1}\\left(a\\right)'],
                    ['f^{-1}\\left(b\\right)'],
                    //"a",
                    // "a",
                    ['f^{-1}\\left(c\\right)']


                  ],
                },
              },


            ]

          },



        },
      },

      {
        type: 11,// tipo 
        //classGlobal: "QA",
        customKeyboard: 1,
        parent: '#oneContainer-second',
        contents: {
          artifact_3: {
            allinputs: [],
            dataInteraction: { incorrect: 0, correct: 0, forAnswer: 0 },
            questions: [

              , {
                type: 2,
                question: ' Sobre cuál Curva (o recta) está la primera esquina de los caminos ',
                answers_values: ['', 'Bisectriz', 'Curva f'],
                conditions: {
                  correctIndex: 1
                }
              },
              , {
                type: 2,
                question: ' Sobre cuál Curva (o recta) está la Segunda esquina de los caminos ',
                answers_values: ['', 'Bisectriz', 'Curva f'],
                conditions: {
                  correctIndex: 2
                }
              },
              , {
                type: 2,
                question: ' Sobre cuál Curva (o recta) está la Tercera esquina de los caminos ',
                answers_values: ['', 'Bisectriz', 'Curva f'],
                conditions: {
                  correctIndex: 1
                }
              },
            ]

          },



        },
      },

      {
        type: 11,// tipo 
        customKeyboard: 1,

        parent: '#twoContainer',
        contents: {

          artifact_4: {
            allinputs: [],
            dataInteraction: { incorrect: 0, correct: 0, forAnswer: 0 },
            questions: [
              {
                type: 3, // una pregunta. Varios inputs
                // question:   "Las coordenadas de las esquinas del camino inverso de ƒ , es decir de ƒ-1, que comienza en (x,0), son: ",
                inputsDefault: [
                  ['Coordenadas en la primera esquina:', false],
                  ['Coordenadas en la segunda esquina:', false],
                  ['Coordenadas en la tercera esquina:', false],
                  ['Coordenadas en el punto final:', false],
                ],

                conditions: {
                  valueInputs: [
                    ['\\left(x,x\\right)',],
                    ['\\left(f^{-1}\\left(x\\right),x\\right)',],
                    ['\\left(f^{-1}\\left(x\\right),f^{-1}\\left(x\\right)\\right)'],
                    ['\\left(x,f^{-1}\\left(x\\right)\\right)']








                  ],
                },
              },
              //   ,{
              //     type:2,
              //     question:" Sobre cuál Curva (o recta) está la primera esquina de los caminos ",
              //     answers_values:["Bisectriz","Curva f"],
              //     conditions:{
              //        correctIndex:0
              //     }
              //  },
              //  ,{
              //     type:2,
              //     question:" Sobre cuál Curva (o recta) está la Segunda esquina de los caminos ",
              //     answers_values:["Bisectriz","Curva f"],
              //     conditions:{
              //        correctIndex:1
              //     }
              //  },


            ]

          },



        },

      },
    ]
  },
};


const etwDefBoards = {
  board_0: {
    style: {
      maxHeight: '600px',
      height: '500px',
      width: '600px',
      maxWidth: '300px',

      grid: false,
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
        xd: [[0, 0], [1, 0]],
        colory: '#000000',
        colorx: '#000000'
      },
      reflectionAxie: {
        B: true
      },
    },
    lines: [
      {
        points: [[2.5, 2.5], [2.5, 0]],
        dash: 2,
        strokecolor: globalColor[3],
        firstArrow: true,
      },
      {
        points: [[2.5, 2.5], [3.3, 2.5]],
        dash: 2,
        strokecolor: globalColor[3],
        lastArrow: true,
      },
      {
        points: [[3.3, 3.30], [3.3, 2.45]],
        dash: 2,
        strokecolor: globalColor[3],
        firstArrow: true,
      },
      {
        points: [[2.5, 3.3], [3.3, 3.3]],
        dash: 2,
        strokecolor: globalColor[3],
        firstArrow: true,
      },
      //---------------------
      {
        points: [[1, 1], [1, 0]],
        dash: 2,
        strokecolor: globalColor[1],
        firstArrow: true,
      },

      {
        points: [[-0.8, 1], [1, 1]],
        dash: 2,
        strokecolor: globalColor[1],
        firstArrow: true,
      },
      {
        points: [[-0.8, -0.8], [-0.8, 1]],
        dash: 2,
        strokecolor: globalColor[1],
        firstArrow: true,
      },
      {
        points: [[1, -0.8], [-0.8, -0.8]],
        dash: 2,
        strokecolor: globalColor[1],
        firstArrow: true,
      },
      //---------------------
      {
        points: [[-3, -3], [-3, 0]],
        dash: 2,
        strokecolor: globalColor[0],
        firstArrow: true,
      },
      {
        points: [[-2.35, -3], [-3, -3]],
        dash: 2,
        strokecolor: globalColor[0],
        firstArrow: true,
      },
      {
        points: [[-2.35, -2.3], [-2.35, -3]],
        dash: 2,
        strokecolor: globalColor[0],
        firstArrow: true,
      },
      {
        points: [[-3, -2.3], [-2.4, -2.3]],
        dash: 2,
        strokecolor: globalColor[0],
        firstArrow: true,
      },
    ],
    curves: [
      {
        strokeColor: 'darkorange',
        points: [
          [-3.54, -3.27], [-2.49, -3.14], [0, 2.47], [0.90, 1.44], [2.14, 1.52], [3.79, 2.92]
        ],
      }
    ],
    points: [
      {
        x: -3,
        y: 0,
        name: 'a',
        label: {
          autoPosition: true,
          fontSize: 18,
        },
        visible: true,
        color: globalColor[0],
      },
      {
        x: 1,
        y: 0,
        name: 'b',
        visible: true,
        label: {
          autoPosition: true,
          offset: [0, -18],
          fontSize: 18,
        },
        color: globalColor[1]
      },
      {
        x: 2.5,
        y: 0,
        name: 'c',
        visible: true,
        label: {
          autoPosition: true,
          offset: [0, -18],
          fontSize: 18,
        },
        color: globalColor[3]
      },
      {
        x: 1.8,
        y: 0,
        name: 'x',
        visible: true,
        label: {
          autoPosition: true,
          offset: [0, -18],
          fontSize: 18,
        },
        color: globalColor[2]
      },
      {
        x: 2.8,
        y: 2.5,
        name: 'f',
        label: {
          visible: true,
          autoPosition: true,
          fontSize: 28,
        },
        color: globalColor[2]
      },
      //[3.8, 2.5, false, "f", true],
    ],
    inputsDefault: [[[-0.35, 2], true, '', 1], [[2, -0.2], false, '2', 2]],
    showWayNameInput: true,
  },
};

const etwDef = {

  artifact_1: {
    // helpMsg: true,
    // textOfHelp: {
    //   title: 'ejercicio 1',
    //   text: 'ejercicio definido'
    // },

    inputsDefault: [
      [[2.1, 3.3], true, '', 4],
      [[1.3, -0.8], true, '', 8],
      [[-3.5, -2.3], true, '', 12],
    ],

    conditions: {
      valueInputs: [
        [4, 'f^{-1}\\left(c\\right)'],
        [8, 'f^{-1}\\left(b\\right)'],
        [12, 'f^{-1}\\left(a\\right)'],
      ],

    },
  },
};
generator(rDef);
etwMain(etwDef, etwDefBoards);
