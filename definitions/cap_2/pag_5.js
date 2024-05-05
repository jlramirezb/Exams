const defBoards = {
  board_0: {
    artifact: 'artifact_1',
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
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
        typeCurve: 'finishCurve',
        strokeColor: 'green',
        flex: 0,
        points: [
          [-3, -3],
          [-1, -2],
          [0, 0],
          [1, 2],
          [3, 3],
        ],
      },
      {
        typeCurve: 'curve',
        flex: 0,
        points: [
          [-3, -3],
          [-2, -1],
          [0, 0],
          [2, 1],
          [3, 3],
        ],
      },
    ],
    lines: [
      {
        typeCurve: 'bisectriz',
        name: {
          x: 3,
          y: 1,
        },
        points: [
          [-8, -8],
          [8, 8],
        ],
        interactive: true,
      },
    ],
    points: [
      { x: -3, y: 0, visible: true, interactive: true },
      { x: -2, y: 0, visible: true, interactive: true },
      { x: -1, y: 0, visible: true, interactive: true },
      { x: 0, y: 0, visible: true, interactive: true },
      { x: 1, y: 0, visible: true, interactive: true },
      { x: 2, y: 0, visible: true, interactive: true },
      { x: 3, y: 0, visible: true, interactive: true },
    ],
  },
  board_1: {
    artifact: 'artifact_2',
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
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
    lines: [
      {
        points: [
          [-8, -8],
          [8, 8],
        ],
        interactive: true,
        typeCurve: 'bisectriz',
      },
    ],
    curves: [
      {
        typeCurve: 'curve',
        interactive: true,

        points: [
          [1, 3],
          [1.8, 2.9],
          [2.5, 2.5],
          [2.9, 1.8],
          [3, 1],
        ],
      },
    ],
    points: [
      { x: -3, y: 0, visible: true, interactive: true },
      { x: -2, y: 0, visible: true, interactive: true },
      { x: -1, y: 0, visible: true, interactive: true },
      { x: 0, y: 0, visible: true, interactive: true },
      { x: 1, y: 0, visible: true, interactive: true },
      { x: 1.5, y: 0, visible: true, interactive: true },
      { x: 2, y: 0, visible: true, interactive: true },
      { x: 2.5, y: 0, visible: true, interactive: true },
      { x: 3, y: 0, visible: true, interactive: true },
    ],
  },
  board_2: {
    artifact: 'artifact_3',
    style: {
      reflectionAxie: {
        Y: { interactive: true },
        X: { interactive: true },
        B: { interactive: true },
      },
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
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
    points: [
      //resultados correctos------
      { x: -3, y: 0, visible: true, interactive: true },
      { x: -2, y: 0, visible: true, interactive: true },
      { x: -1, y: 0, visible: true, interactive: true },
      { x: 0, y: 0, visible: true, interactive: true },


      { x: 0.29, y: 0, visible: true, interactive: true },
      { x: 0.52, y: 0, visible: true, interactive: true },
      //
      //

      { x: 0.76, y: 0, visible: true, interactive: true },
      { x: 1, y: 0, visible: true, interactive: true },
      { x: 2, y: 0, visible: true, interactive: true },
      { x: 3, y: 0, visible: true, interactive: true },

      //resultados correctos------
    ],
    curves: [
      {
        typeCurve: 'curve',
        visible: true,
        interactive: true,
        points: [
          [1.25, 3.32],
          [0.8, 2.03],
          [0.08, 1.12],
          [-1.02, 0.51],
          [-2.71, 0.22],
          [-3.2, 0.22],
        ],
      },
    ],
  },
  board_3: {
    artifact: 'artifact_4',
    style: {
      reflectionAxie: {
        Y: { interactive: true },
        X: { interactive: true },
        B: { interactive: true },
      },
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
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
    points: [
      { x: -3, y: 0, visible: true, interactive: true, fixed: true },
      { x: -2, y: 0, visible: true, interactive: true, fixed: true },
      { x: -1, y: 0, visible: true, interactive: true, fixed: true },
      { x: 0, y: 0, visible: true, interactive: true, fixed: true },
      { x: 1, y: 0, visible: true, interactive: true, fixed: true },
      { x: 2, y: 0, visible: true, interactive: true, fixed: true },
      { x: 3, y: 0, visible: true, interactive: true, fixed: true },
    ],
    curves: [
      {
        typeCurve: 'curve',
        visible: true,
        interactive: true,

        points: [
          [-3.2, 3.6],
          [-3, 2.94],
          [-2.43, 1.7],
          [-1.39, 0.53],
          [0, 0],
          [1.39, 0.53],
          [2.43, 1.7],
          [3, 2.94],
          [3.2, 3.6],
        ],
      },
    ],
  },
};

const rDef = {
  artifactHtml: {
    datadefault: [
      {
        type: 10, // tipo
        classGlobal: 'defRoad',
        contents: [
          { dataSet: { board: 'board_0' } },
          { dataSet: { board: 'board_1' } },
          { dataSet: { board: 'board_2' } },
          { dataSet: { board: 'board_3' } },
        ],
      },
      {
        type: 11, // tipo
        classGlobal: 'QA',
        parent: '#oneContainer',
        contents: {
          artifact_5: {
            allinputs: [],
            dataInteraction: { incorrect: 0, correct: 0 },
            questions: [
              {
                type: 1,
                question:
                           'En el artefacto 3: ¿Alcanzan la curva los caminos que salen de los puntos que parten de la parte negativa del eje x hasta el punto 0?',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'No',
                },
              },
              {
                type: 1,
                question:
                           '¿Qué signo tienen las ordenadas de los puntos finales, de los caminos que salen de los puntos que estan entre el punto amarillo y verde claro',
                answers_values: ['+', '-'],
                conditions: {
                  correctIndex: '-',
                },
              },
            ],
          },
        },
      },
      {
        type: 11, // tipo
        classGlobal: 'QA',
        parent: '#twoContainer',
        contents: {
          artifact_6: {
            allinputs: [],
            dataInteraction: { incorrect: 0, correct: 0 },
            questions: [
              {
                type: 2,
                question:
                           'En el artefacto 4: ¿Cuántos caminos pueden hacerse partiendo de los puntos que se encuentran en la parte positiva del eje x?  ',
                answers_values: ['', '1', '2'],
                conditions: {
                  correctIndex: 2,
                },
              },
              {
                type: 1,
                question:
                           ' ¿Alcanzan los caminos que salen de los puntos negativos del eje x la curva? ',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'No',
                },
              },
            ],
          },
        },
      },
      {
        type: 11, // tipo
        classGlobal: 'QA',
        parent: '#thirdContainer',
        contents: {
          artifact_7: {
            allinputs: [],
            dataInteraction: { incorrect: 0, correct: 0 },
            questions: [
              {
                type: 1,
                question:
                           'En los recuadros 1, 3 y 4, ¿existe algún parecido entre la curva y su inversa?',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'Sí',
                },
              },
              {
                type: 1,
                question: '¿Son simétricas? ',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'Sí',
                },
              },
              {
                type: 1,
                question: '¿Es la bisectriz el eje de simetría? ',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'Sí',
                },
              },

              {
                type: 1,
                question: '¿En el artefacto 2 la curva y su inversa coinciden? ',
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
    /* enumTop: '(x)+(x)',
      enumBottom: '(x)-(x)', */
    numberBoard: '1',
    conditions: {
      road: {
        curveReflex: [{ curve: { index: [0] } }],
        points: [
          { forks: [[[0, 0]]] },
          {
            forks: [
              [
                [3, 0],
                [3, 3],
              ],
            ],
          },
          {
            forks: [
              [
                [2, 0],
                [2, 2],
                [2.5, 2],
                [2.5, 2.5],
                [2, 2.5],
              ],
            ],
          },
          {
            forks: [
              [
                [1, 0],
                [1, 1],
                [2, 1],
                [2, 2],
                [1, 2],
              ],
            ],
          },
          {
            forks: [
              [
                [-3, 0],
                [-3, -3],
              ],
            ],
          },
          {
            forks: [
              [
                [-2, 0],
                [-2, -2],
                [-2.5, -2],
                [-2.5, -2.5],
                [-2, -2.5],
              ],
            ],
          },
          {
            forks: [
              [
                [-1, 0],
                [-1, -1],
                [-2, -1],
                [-2, -2],
                [-1, -2],
              ],
            ],
          },
        ],
      },
    },
  },
  artifact_2: {
    buttonsActive: { points: true },
    numberBoard: '2',
    conditions: {
      road: {
        curveReflex: [
          {
            axie: 'axieB',
            index: [0],
          },
        ],
        points: [
          {
            forks: [
              [
                [3, 0],
                [3, 3],
                [1, 3],
                [1, 1],
                [3, 1],
              ],
            ],
          },
          {
            forks: [
              [
                [1.5, 0],
                [1.5, 1.5],
                [3, 1.5],
                [3, 3],
                [1.5, 3],
              ],
            ],
          },
          {
            forks: [
              [
                [2, 0],
                [2, 2],
                [2.8, 2],
                [2.8, 2.8],
                [2, 2.8],
              ],
            ],
          },
          {
            forks: [
              [
                [1, 0],
                [1, 1],
                [3, 1],
                [3, 3],
                [1, 3],
              ],
            ],
          },
          {
            forks: [
              [
                [2.5, 0],
                [2.5, 2.5],
              ],
            ],
          },
          { forks: [[[0, 0]]] },
          { forks: [[[-1, 0]]] },
          { forks: [[[-2, 0]]] },
          { forks: [[[-3, 0]]] },
        ],
      },
    },
  },
  artifact_3: {
    numberBoard: '3',
    conditions: {
      road: {
        curveReflex: [
          {
            axie: 'axieB',
            index: [0],
          },
        ],
        points: [
          {
            forks: [
              [
                [3, 0],
                [3, 3],
                [1.15, 3],
                [1.11, 1.11],
                [3, 1.15],
              ],
            ],
          },
          //resultados correctos------
          { forks: [[[0, 0]]] },
          {
            forks: [
              [
                [2, 0],
                [2, 2],
                [0.78, 2],
                [0.8, 0.8],
                [2, 0.8],
              ],
            ],
          },
          {
            forks: [
              [
                [1, 0],
                [1, 1],
                [0, 1],
                [0, 0],
                [1, 0],
              ],
            ],
          },
          {
            forks: [
              [
                [0.76, 0],
                [0.76, 0.76],
                [-0.45, 0.76],
                [-0.45, -0.45],
                [0.76, -0.45],
              ],
            ],
          },
          {
            forks: [
              [
                [0.52, 0],
                [0.52, 0.52],
                [-1.1, 0.48],
                [-1.1, -1.1],
                [0.52, -1.1],
              ],
            ],
          },
          {
            forks: [
              [
                [0.29, 0],
                [0.29, 0.29],
                [-2.1, 0.29],
                [-2.06, -2.06],
                [0.29, -2.06],
              ],
            ],
          },
          { forks: [[[-1, 0]]] },
          { forks: [[[-2, 0]]] },
          { forks: [[[-3, 0]]] },
        ],
      },
    },
  },
  artifact_4: {
    numberBoard: '4',
    conditions: {
      road: {
        curveReflex: [
          {
            axie: 'axieB',
            index: [0],
          },
        ],
        points: [
          { forks: [[[-3, 0]]] },
          { forks: [[[-2, 0]]] },
          { forks: [[[-1, 0]]] },
          { forks: [[[0, 0]]] },
          {
            forks: [
              //este no necesita camnio
              [
                [1, 0],
                [1, 1],
                [2, 1],
                [2, 2],
                [1, 2],
              ],
              [
                [1, 0],
                [1, 1],
                [-2, 1],
                [-2, -2],
                [1, -2],
              ],
            ],
          },
          {
            forks: [
              [
                [2, 0],
                [2, 2],
                [2.6, 2],
                [2.6, 2.6],
                [2, 2.6],
              ],
              [
                [2, 0],
                [2, 2],
                [-2.6, 2],
                [-2.6, -2.6],
                [2, -2.6],
              ],
            ],
          },
          {
            forks: [
              [
                [3, 0],
                [3, 3],
              ],
              [
                [3, 0],
                [3, 3],
                [-3, 3],
                [-3, -3],
                [3, -3],
              ],
            ],
          },
        ],
      },
    },
  }
};

generator(rDef);
roadMain(defBoards, rDef);