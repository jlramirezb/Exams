

const styleArrow = {
  size: 1,
  opacity: 1,
  strokecolor: '#7C96E7',

};
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

const etwDefBoards = {
  board_0: {
    style: {
      grid: false,
      boundingbox: [-3.5, 3.5, 3.5, -3.5],
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
        colory: '#000000',
        colorx: '#000000',
      },
      reflectionAxie: {
        B: true,
      },
    },

    lines: [
      {
        //a
        points: [
          // HACIA Abajo
          [-2, -3],
          [-2, -0],
        ],
        dash: 2,
        firstArrow: true,

        strokecolor: globalColor[0],
      },

      {
        points: [
          // horizontal
          [-2.99, -3],
          [-2, -3],
        ],
        dash: 2,
        firstArrow: true,
        strokecolor: globalColor[0],

      },

      {
        points: [
          // HACIA ARRIBA vertical
          [-2.99, 2.1],
          [-2.99, -3],
        ],
        dash: 2,
        firstArrow: true,
        strokecolor: globalColor[0],


      },

      {
        points: [
          // arriba horizontal
          [-2, 2.1],
          [-2.99, 2.1],
        ],
        dash: 2,
        firstArrow: true,
        strokecolor: globalColor[0],


      },
      ////////////////////////////////////////////////

      {
        points: [
          //B HACIA ARRIBA
          [1, 0.5],
          [1, 0],
        ],
        dash: 2,
        firstArrow: true,
        strokecolor: globalColor[2],


      },
      {
        points: [
          //arriba primera horizontal
          [0.43, 0.5],
          [1, 0.5],
        ],
        dash: 2,
        firstArrow: true,
        strokecolor: globalColor[2],


      },
      {
        points: [
          //arriba vertical
          [0.49, 1.44],
          [0.5, 0.5],
        ],
        dash: 2,
        firstArrow: true,
        strokecolor: globalColor[2],


      },

      {
        points: [
          //arriba segunda horizontal
          [0.93, 1.4],
          [0.5, 1.4],
        ],
        dash: 2,
        firstArrow: true,
        strokecolor: globalColor[2],


      },
      ///////////////////////////////////////////////////
      {
        points: [
          [2, 1],
          [2, 1.99],
        ],
        dash: 2,
        firstArrow: true,
        strokecolor: globalColor[3],


      },

      {
        points: [
          /// C la primera vertical
          [2.4, 1.98],
          [2.4, 0], //DIRECCION no es
        ],
        dash: 2,
        firstArrow: true,
        strokecolor: globalColor[3],


      },

      {
        points: [
          /// C
          [2, 2],
          [2.4, 2], //arriba horizontal
        ],
        dash: 2,
        firstArrow: true,
        strokecolor: globalColor[3],


      },
      {
        points: [
          [2, 1],
          [2.37, 1],
        ],
        dash: 2,
        lastArrow: true,
        strokecolor: globalColor[3],


      },
    ],
    curves: [
      {
        strokeColor: 'darkorange',
        points: [
          [-3.39, 1.7],
          [-1.76, 3.02],
          [-0.75, 2.86],
          [1.43, 0.64],
          [2.58, 1.63],
          [3.28, 1.19],
        ],
      },
      {
        strokeColor: 'purple',
        points: [
          [-2.27, -3.41],
          [-0.26, -0.87],
          [1.24, 0.75],
          [1.43, 0.9],
          [2.37, 1.87],
          [2.85, 2.20],
          [3.30, 2.58],
        ],
      },
      {
        points: [
          [-3.2, -3.2],
          [3.2, 3.2],
        ],
      },
    ],
    points: [
      [3.2, 0.70, false, 'ƒ', true, , , 17],
      [3.2, 2.6, false, 'g', true, , , 17],
      // [2.4, -0.5, false, "c", true],
      //[1, 0, false, "b",,],
      //[-1, -0.5, false, "x", true],
      // { x: 1, y: -0.5, visible: true, name: 'x', color: 'black' },
      {
        x: -1,
        y: 0,
        name: 'x',
        visible: true,
        color: globalColor[1],
      },
      // [-1, -0, true],
      {
        x: -2,
        y: 0,
        name: 'a',
        visible: true,
        color: globalColor[0],
      },
      {
        x: 1,
        y: 0,
        name: 'b',
        visible: true,
        color: globalColor[2],
        label: {
          autoPosition: true,
          offset: [0, -18],
          fontSize: 18,
        },
      },
      {
        x: 2.4,
        y: 0,
        name: 'c',
        label: {
          autoPosition: true,
          offset: [0, -18],
          fontSize: 18,
        },
        visible: true,
        color: globalColor[3],
      }
      //[-2, 0, true, "a", 3, , 'red'],
    ],
  },

};

//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js

const etwDef = {
  artifact_1: {
    debug: false,
    buttonsActive: { points: true },

    inputsDefault: [
      //c
      [[-1.6, 2.1], true, '', 3],
      [[2.7, 1], true, '', 1],
      [[1.3, 1.4], true, '', 2],
    ],
    conditions: {
      valueInputs: [
        [1, 'f\\left(g\\left(c\\right)\\right)'],
        [2, 'f\\left(g\\left(b\\right)\\right)'],
        [3, 'f\\left(g\\left(a\\right)\\right)'],
      ],
    },
  },
};

const rDef = {
  artifactHtml: {
    datadefault: [
      {
        type: 11, // switch case
        customKeyboard: 1,
        classGlobal: 'QA', //
        parent: '#oneContainer', //
        contents: {
          artifact_2: {
            allinputs: [], //nodos que se van generando
            dataInteraction: { incorrect: 0, correct: 0 }, // aciertos y fallas
            questions: [
              {
                type: 1,
                question: ' ¿Tienen igual forma los caminos? ',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'No',
                },
              },

              {
                type: 2,
                question: '¿Sobre cuál curva está la primera esquina?',
                answers_values: ['', 'Bisectriz', 'Curva g', 'Curva ƒ'],
                conditions: {
                  correctIndex: 2,
                },
              },
              {
                type: 2,
                question: '¿Sobre cuál curva está la segunda esquina?',
                answers_values: ['', 'Bisectriz', 'Curva g', 'Curva ƒ'],
                conditions: {
                  correctIndex: 1,
                },
              },

              {
                type: 2,
                question: '¿Sobre cuál curva está la tercera esquina?',
                answers_values: ['', 'Bisectriz', 'Curva g', 'Curva ƒ'],
                conditions: {
                  correctIndex: 3,
                },
              },
            ],
          },
        },
      },
      {
        type: 11, // tipo
        customKeyboard: 1,

        classGlobal: 'QA',
        parent: '#twoContainer',
        contents: {
          artifact_3: {
            allinputs: [],
            dataInteraction: { incorrect: 0, correct: 0 },
            questions: [


              {
                type: 3, // una pregunta. Varios inputs
                question:
                           'Las coordenadas de las esquinas del camino de la compuesta ƒ(g()), que comienza en (x,0), son: ',
                inputsDefault: [
                  ['Coordenadas en la primera esquina:', false],
                  ['Coordenadas en la segunda esquina:', false],
                  ['Coordenadas en la tercera esquina:', false],
                  ['Coordenadas en el punto final:', false],
                ],

                conditions: {
                  valueInputs: [
                    ['\\left(x,g\\left(x\\right)\\right)'],
                    ['\\left(g\\left(x\\right),g\\left(x\\right)\\right)'],
                    ['\\left(g\\left(x\\right),f\\left(g\\left(x\\right)\\right)\\right)'],
                    ['\\left(x,f\\left(g\\left(x\\right)\\right)\\right)'],


                  ],
                },
              },
            ],
          },
        },
      },
    ],
  },
};

etwMain(etwDef, etwDefBoards);
generator(rDef);
