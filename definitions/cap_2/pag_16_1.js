const genericStyles = {
  grid: true,
  maxHeight: 300,
  maxWidth: 300,
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
};
const allDefArtifactBase = {
  buttonsActive: { points: true },
  conditions: {
    operation: {
      curves: [[0, 1]],
      type: 2, //suma: 1 / Multipicacion: 2
    },
  },
};
const defBoards = {
  board_1: {
    artifact: 'artifact_1',
    style: {
      ...genericStyles,
      boundingbox: [-0.25, 1.25, 1.25, -0.25],
    },
    points: [
      [0.5, 0.56, false, 'ƒ'],
      [0.5, 0.18, false, 'g'],
      [0.01, 1, false, '1'],
    ],
    lines: [
      {
        points: [
          [0, 1],
          [1, 1],
        ],
        lastArrow: true,
        dash: 2,
      },
    ],
    curves: [
      {
        points: [
          [0, 0],
          [1, 1],
        ],
        strokeColor: 'darkorange',
      },
      {
        points: [
          [0, 0],
          [1, 0.5],
        ],
        strokeColor: 'purple',
      },
    ],
  },
  board_2: {
    artifact: 'artifact_2',
    style: {
      ...genericStyles,
      boundingbox: [-0.5, 2.5, 2.5, -0.5],
    },
    points: [
      [1, 1.16, false, 'ƒ'],
      [1.0, 0.38, false, 'g'],
      [0.02, 2, false, '2'],
    ],
    lines: [
      {
        points: [
          [0, 2],
          [2, 2],
        ],
        lastArrow: true,
        dash: 2,
      },
    ],
    curves: [
      {
        points: [
          [0, 0],
          [2, 2],
        ],
        strokeColor: 'darkorange',
      },
      {
        points: [
          [0, 0],
          [2, 1],
        ],
        strokeColor: 'purple',
      },
    ],
  },
  board_3: {
    artifact: 'artifact_3',
    style: {
      ...genericStyles,
      boundingbox: [-0.15, 4, 4, -0.15],
      grid:false
    },
    points: [
      [1.4, 1.5, false, 'ƒ'],
      [1.6, 0.9, false, 'g'],
      [0.1, 3, false, '0.5'],
    ],
    lines: [
      {
        points: [
          [0, 3],
          [3, 3],
        ],
        lastArrow: true,
        dash: 2,
      },
    ],
    curves: [
      {
        points: [
          [0, 0],
          [3, 3],
        ],
        strokeColor: 'darkorange',
      },
      {
        points: [
          [0, 0],
          [3, 1.5],
        ],
        strokeColor: 'purple',
      },
    ],
  },

  board_4: {
    artifact: 'artifact_4',
    style: {
      ...genericStyles,
      boundingbox: [-0.5, 1.5, 1.5, -0.5],
    },
    points: [
      [0.47, 0.52, false, 'ƒ'],
      [0.78, 0.41, false, 'g'],
      { x: 0.01, y: 1, name: '1' },
    ],
    lines: [
      {
        points: [
          [0, 1],
          [1, 1],
        ],
        lastArrow: true,
        dash: 2,
      },
    ],

    curves: [
      { points: [[0, 0], { x: 1, y: 1 }], strokeColor: 'purple' },
      {
        points: [
          [0, 0],
          [0.77, 0.52, false],
          [1, 1],
        ],
        strokeColor: 'darkorange',
      },
    ],
  },
  board_5: {
    artifact: 'artifact_5',
    style: {
      ...genericStyles,
      boundingbox: [-1, 5, 3, -1],
    },
    points: [
      [1.32, 1.45, false, 'ƒ'],
      [1.74, 0.95, false, 'g'],
      { x: 0.02, y: 2, name: '2' },
    ],
    lines: [
      {
        points: [
          [0, 2],
          [2, 2],
        ],
        lastArrow: true,
        dash: 2,
      },
    ],
    curves: [
      { points: [[0, 0], { x: 2, y: 2 }], strokeColor: 'purple' },
      {
        points: [
          [0, 0],
          [1.48, 0.83],
          [2, 2],
        ],
        strokeColor: 'darkorange',
      },
    ],
  },
  board_6: {
    artifact: 'artifact_6',
    style: {
      ...genericStyles,
      boundingbox: [-0.2, 1, 1, -0.2],
    },
    points: [
      [0.29, 0.33, false, 'ƒ'],
      [0.42, 0.25, false, 'g'],
      { x: 0.02, y: 0.5, name: '0.5' },
    ],
    lines: [
      {
        points: [
          [0, 0.5],
          [0.5, 0.5],
        ],
        lastArrow: true,
        dash: 2,
      },
    ],
    curves: [
      { points: [[0, 0], { x: 0.5, y: 0.5 }], strokeColor: 'purple' },
      {
        points: [
          [0, 0],
          [0.35, 0.22, false],
          [0.5, 0.5],
        ],
        strokeColor: 'darkorange',
      },
    ],
  },
  board_7: {
    artifact: 'artifact_7',
    style: {
      ...genericStyles,
      boundingbox: [-0.5, 1.5, 1.5, -0.5],
    },
    points: [
      [0.5, 0.6, false, 'ƒ'],
      [0.01, 1, false, '1'],
    ],
    lines: [
      {
        points: [
          [0, 1],
          [1, 1],
        ],
        lastArrow: true,
        dash: 2,
      },
    ],
    curves: [
      {
        points: [
          [0, 0],
          [1.01, 1.01],
        ],
        strokeColor: 'purple',
      },
      {
        points: [
          [0, 0],
          [1.01, 1.01],
        ],
        strokeColor: 'darkorange',
      },
    ],
  },
  board_8: {
    artifact: 'artifact_8',
    style: {
      ...genericStyles,
      boundingbox: [-1, 4.5, 3, -1],
    },
    points: [
      [1, 0.7, false, 'ƒ'],
      [0.01, 1, false, '1'],
    ],
    lines: [
      {
        points: [
          [0, 1],
          [1, 1],
        ],
        lastArrow: true,
        dash: 2,
      },
    ],
    curves: [
      {
        points: [
          [0, 0],
          [2, 2],
        ],
        strokeColor: 'purple',
      },
      {
        points: [
          [0, 0],
          [2, 2],
        ],
        strokeColor: 'darkorange',
      },
    ],
  },
  board_9: {
    artifact: 'artifact_9',
    style: {
      ...genericStyles,
      boundingbox: [-0.3, 5, 3, -0.3],
    },
    points: [
      [1, 0.7, false, 'ƒ'],
      [0.02, 2, false, '2'],
    ],
    lines: [
      {
        points: [
          [0, 2],
          [2, 2],
        ],
        lastArrow: true,
        dash: 2,
      },
    ],
    curves: [
      {
        points: [
          [0, 0],
          [2.02, 2.02],
        ],
        strokeColor: 'purple',
      },
      {
        points: [
          [0, 0],
          [2.02, 2.02],
        ],
        strokeColor: 'darkorange',
      },
    ],
  },
};
//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const rDef = {
  artifactHtml: {
    datadefault: [
      [
        1,
        'Grafique el producto en cada uno de los recuadros. (En algunos casos deberá considerar más de tres verticales).',
      ],
      {
        type: 10, //tipo 10 genera los contenedores con los dataset y clases para los boards
        classGlobal: 'operationCurves',
        contents: [
          { dataSet: { board: 'board_1' } },
          { dataSet: { board: 'board_2' } },
          { dataSet: { board: 'board_3' } },
          { dataSet: { board: 'board_4' } },
          { dataSet: { board: 'board_5' } },
          { dataSet: { board: 'board_6' } },
        ],
      },
      [1, 'Grafique ƒ²'],
      {
        type: 10, //tipo 10 genera los contenedores con los dataset y clases para los boards
        classGlobal: 'operationCurves',
        contents: [
          { dataSet: { board: 'board_7' } },
          { dataSet: { board: 'board_8' } },
          { dataSet: { board: 'board_9' } },
        ],
      },
    ],
  },
  artifact_1: {
    buttonsActive: { points: true },
    conditions: {
      operation: {
        curves: [[0, 1]],
        type: 2, //suma: 1 / Multipicacion: 2
        noise: 32,
      },
    },
  },
  artifact_2: {
    buttonsActive: { points: true },
    conditions: {
      operation: {
        curves: [[0, 1]],
        type: 2, //suma: 1 / Multipicacion: 2
        noise: 15,
      },
    },
  },
  artifact_3: {
    buttonsActive: { points: true },
    conditions: {
      minPoints:4,
      reciprocalCurves: {
        text: 'la curva no es la inversa',
        curves: [
          {
            mode: true,
            points: [
              [
                0.010598120777462363,
                0.00101693399977836
              ],
              [
                1.6311790969566817,
                0.18351462384327072
              ],
              [
                3.003562005277047,
                0.7529077636849594
              ]
            ]
          },
        ],
      },
    },
  },
  artifact_4: {
    buttonsActive: { points: true },
    conditions: {
      operation: {
        curves: [[0, 1]],
        type: 2, //suma: 1 / Multipicacion: 2
        noise: 32,
      },
    },
  },
  artifact_5: {
    buttonsActive: { points: true },
    conditions: {
      operation: {
        curves: [[0, 1]],
        type: 2, //suma: 1 / Multipicacion: 2
        noise: 15,
      },
    },
  },
  artifact_6: {
    buttonsActive: { points: true },
    conditions: {
      operation: {
        curves: [[0, 1]],
        type: 2, //suma: 1 / Multipicacion: 2
        noise: 32,
      },
    },
  },
  artifact_7: {
    buttonsActive: { points: true },
    conditions: {
      operation: {
        curves: [[0, 1]],
        type: 2, //suma: 1 / Multipicacion: 2
        noise: 35,
      },
    },
  },
  artifact_8: {
    buttonsActive: { points: true },
    conditions: {
      operation: {
        curves: [[0, 1]],
        type: 2, //suma: 1 / Multipicacion: 2
        noise: 15,
      },
    },
  },
  artifact_9: {
    buttonsActive: { points: true },
    conditions: {
      operation: {
        curves: [[0, 1]],
        type: 2, //suma: 1 / Multipicacion: 2
      },
    },
  },
};
generator(rDef);
mainOperation(defBoards, rDef);
