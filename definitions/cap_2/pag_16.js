const genericStyles = {
  grid: true,
  maxHeight: 300,
  maxWidth: 300,
  axis: [false, true, true],
  bxoundingbox: [-4, 4, 4, -4],
  valueAxis: {
    yd: [[0, 0], [0, 1]], /*dirección del eje y*/
    xd: [[0, 0], [1, 0]],
  },
};
const allDefArtifactBase = {
  debug: false,
  buttonsActive: {
    points: true, asymptotes: false,
  },
  conditions: {
    operation: {
      curves: [[0, 1]],
      type: 2,//suma: 1 / Multipicacion: 2
    },
  },
};
const defBoards = {

  board_1: {
    artifact: 'artifact_1',
    style: {
      ...genericStyles,
    },
    points: [
      [3, 2.05, false, 'ƒ'],
      [3, 0.10, false, 'g'],
      [0, 1, true, '1', 2, 'black'],
      [0, -1, true, '-1', 2, 'black'],
    ],
    curves: [
      { points: [[-3, 2], [3, 2]], strokeColor: 'darkorange', },
      { points: [[-3, 0.5], [3, 0.5]], strokeColor: 'purple', },

    ],
  },

  board_2: {
    artifact: 'artifact_2',
    style: {
      ...genericStyles,
    },
    points: [
      [3, 1.6, false, 'ƒ'],
      [3, -0.5, false, 'g'],
      [0, 1, true, '1', 2, 'blank'],
      [0, -1, true, '-1', 2, 'blank'],
    ],
    curves: [
      { points: [[-3, 1.5], [3, 1.5]], strokeColor: 'darkorange', },
      { points: [[-3, -0.6], [3, -0.6]], strokeColor: 'purple', },
    ],
  },

  board_3: {
    artifact: 'artifact_3',
    style: {
      ...genericStyles,
    },
    points: [
      [3, 1, false, 'ƒ'],
      [3, -2, false, 'g'],
      [0, 1, true, '1', 2, 'blank'],
      [0, -1, true, '-1', 2, 'blank'],
    ],
    curves: [
      { points: [[-3, 1], [3, 1]], strokeColor: 'darkorange', },
      { points: [[-3, -2], [3, -2]], strokeColor: 'purple', },
    ],
  },

  board_4: {
    artifact: 'artifact_4',
    style: {
      ...genericStyles,
    },
    points: [
      [3, 1, false, 'ƒ'],
      [3, -1, false, 'g'],
      [0, 1, true, '1', 2, 'blank'],
      [0, -1, true, '-1', 2, 'blank'],
    ],
    curves: [
      { points: [[-3, 1], [3, 1]], strokeColor: 'darkorange', },
      { points: [[-3, -1], [3, -1]], strokeColor: 'purple', },
    ],
  },

  board_5: {
    artifact: 'artifact_5',
    style: {
      ...genericStyles,
    },
    points: [
      [3, -0.9, false, 'ƒ'],
      [3, -1.9, false, 'g'],
      [0, 1, true, '1', 2, 'blank'],
      [0, -1, true, '-1', 2, 'blank'],
    ],
    curves: [
      { points: [[-3, -1], [3, -1]], strokeColor: 'darkorange', },
      { points: [[-3, -2], [3, -2]], strokeColor: 'purple', },
    ],
  },

  board_6: {
    artifact: 'artifact_6',
    style: {
      ...genericStyles,
    },
    points: [
      [3, -2.6, false, 'ƒ'],
      [3, -1.4, false, 'g'],
      [0, 1, true, '1', 2, 'blank'],
      [0, -1, true, '-1', 2, 'blank'],
    ],
    curves: [
      { points: [[-3, -2], [3, -2]], strokeColor: 'darkorange', },
      { points: [[-3, -1.5], [3, -1.5]], strokeColor: 'purple', },
    ],

  },
};
//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const rDef = {
  artifactHtml: {
    datadefault: [
      [1, 'Grafique en cada caso la curva producto.'],
      {
        type: 10,//tipo 10 genera los contenedores con los dataset y clases para los boards
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
    ]
  },
  artifact_1: { ...allDefArtifactBase },
  artifact_2: { ...allDefArtifactBase },
  artifact_3: { ...allDefArtifactBase },
  artifact_4: { ...allDefArtifactBase },
  artifact_5: { ...allDefArtifactBase },
  artifact_6: { ...allDefArtifactBase },
};
generator(rDef);
mainOperation(defBoards, rDef);