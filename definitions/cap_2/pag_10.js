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
          [-3.28, 2.38, false, 'f', null, null, null, 22,],
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
          [-3.34, -0.95, false, 'g', null, null, null, 22, [0, -25]],
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
                type: 1,
                question: '¿Si x∈Dom(ƒ+g) debe estar en Dom(ƒ)∩Dom(g)? ',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'No',
                },
              },
              {
                type: 2,
                question:
                           '¿Cuáles son los valores de corte de la curva ƒ con el eje horizontal?',
                answers_values: ['', 'a', 'd', 'c'],
                conditions: {
                  correctIndex: 2,
                },
              },
              {
                type: 2,
                question:
                           ' ¿Cuáles son los valores de corte de la curva g con el eje horizontal? ',
                answers_values: ['', 'a,d,c', 'a,d,b', 'a,0,d'],
                conditions: {
                  correctIndex: 3,
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
                type: 1,
                question:
                           '¿Existen puntos donde la curva suma coincide con alguna de las curvas ƒ o g? ',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'Sí',
                },
              },
              {
                type: 2,
                question:
                           ' ¿Cuáles son sus abcisas? ',
                answers_values: ['', 'a,c,b', 'a,0,d', 'a,b,0'],
                conditions: {
                  correctIndex: 2,
                },
              },
              {
                type: 1,
                question:
                           ' Los puntos de la curva suma que corresponden a los x del intervalo(a,c) han debido quedar por encima de la curva  ƒ ¿Cuál es el signo de g en el intervalo (a,0)?',
                answers_values: ['+', '-'],
                conditions: {
                  correctIndex: '+',
                },
              },
              {
                type: 1,
                question:
                           ' En cambio, los puntos que corresponden a los x del intervalo (c,d) han debido quedar por debajo de la curva  ƒ ¿Cuál es el signo de g en el intervalo (0,c)?',
                answers_values: ['+', '-'],
                conditions: {
                  correctIndex: '-',
                },
              },
            ],
          },
        },
      },

    ],
  },

  artifact_1: {
    debug: false,
    curveMod: {
      color: 'red',
      interactive: true,
    },
    buttonsActive: { curve: true, asymptotes: false, config: false },
    conditions: {
      //ejemplo de la validacion
      //primero va la posicion donde estaria la asintota y despues en un arrau los puntos que contiene dicha asintota
      /* operation: {
            curves: [[0, 1]],
            type: 1, //suma: 1 / Multipicacion: 2
            noise: 26,
         }, */
      asymptotes: {
        noise: 0.2,
        positionY: [
          [
            -2.5,
            [2.248677410145916]
          ],
          [
            -1,
            [2.50264566411417]
          ],
          [
            0,
            [1.4021165635850694]
          ],
          [
            1,
            [0.09841305364376654]
          ],
          [
            2.03,
            [-0.003173989593667329]
          ]
        ],
      },
    },
  },
};

generator(rDef);
mainOperation(defBoards, rDef);
