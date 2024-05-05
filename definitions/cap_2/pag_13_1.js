const defBoards = {
  board_0: {
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
        colory: '#000000',
        colorx: '#000000',
      },
    },

    curves: [
      {
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-3.5, -2.5, false, 'f', null, null, null, 20],
          [2.5, 3.5],
        ],
      },
      {
        interactive: true,
        strokeColor: 'red',
        points: [
          [-3, 1],
          [2, -4],
        ],
      },
      {
        interactive: true,
        strokeColor: 'purple',
        points: [
          [-3.5, 1.5, false, 'g', null, null, null, 20],
          [2, -4],
        ],
      },
    ],
    points: [
      [0, 0, true, '', true, 'black'],
      [1, 0, true, '', true, 'black'],
      [2, 0, true, '', true, 'black'],
      [-1, 0, true, '', true, 'black'],
      [-2, 0, true, '', true, 'black'],
      [-3, 0, true, '', true, 'black'],
      [-0.3, 1, false, '1', true, 'black'],
      [1.1, -0.5, false, '1', true, 'black'],
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
              board: 'board_0',
            },
          },
        ],
      },
      {
        type: 11, // tipo
        //classGlobal: "QA",
        parent: '#oneContainer',

        contents: {
          artifact_2: {
            allinputs: [],
            dataInteraction: { incorrect: 0, correct: 0 },
            questions: [
              {
                type: 1,
                question: ' ¿Nota algo especial en la curva suma? ',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'Sí',
                },
              },
              ,
              {
                type: 2,
                question: '¿Qué es lo que nota?',
                answers_values: [
                  '',
                  'Son dos curvas',
                  'La curva es disconexa',
                  'La curva  es constante ',
                ],
                conditions: {
                  correctIndex: 3,
                },
              },
              {
                type: 1,
                question:
                  'Pregunta para más adelante: ¿La curva suma de dos rectas siempre dará una recta?',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'Sí',
                },
              },
            ],
          },
        },
      },
    ],
  },
  artifact_1: {
    defBoard: 'board_0',
    config: {
      curves: {
        flex: 0,
      },
    },
    buttonsActive: { points: true },
    curveMod: {
      color: 'black',
      interactive: true,
    },

    conditions: {
      text: 'texto error definido 2',
      operation: {
        curves: [[0, 1]],
        type: 1, //suma: 1 / Multipicacion: 2
        noise: 16,
      },
    },
  },
};

generator(rDef);
mainOperation(defBoards, rDef);
