const genericStyles = {
  grid: true,
  maxHeight: 300,
  maxWidth: 300,
  axis: [false, true, true],
  boundingbox: [-1, 3, 4, -3],
  valueAxis: {
    yd: [[0, 0], [0, 1]], /*dirección del eje y*/
    xd: [[0, 0], [1, 0]],
  },
};
const allDef = {
  debug: false,
  buttonsActive: { points: true },
  conditions: {
    operation: {
      curves: [[0, 1]],
      type: 2,//suma: 1 / Multipicacion: 2
      noise: 25
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

      { x: 0, y: 1, visible: true, name: '1', fixed: true, color: 'black' },
      { x: 0, y: -1, visible: true, name: '-1', fixed: true, color: 'black' },
    ],
    curves: [
      { points: [[1, 1], [3.02, -1]], strokeColor: 'purple' },
      { points: [[1, -1], [3.02, 1]], strokeColor: 'darkorange' },

    ],
  },

  board_2: {
    artifact: 'artifact_2',
    style: {
      ...genericStyles,
      boundingbox: [-1, 5, 4, -2],
    },
    points: [

      { x: 0, y: 1, visible: true, name: '1', fixed: true, color: 'black' },
      { x: 0, y: -1, visible: true, name: '-1', fixed: true, color: 'black' },
    ],
    curves: [
      { points: [[1, 1], [3.02, 3]], strokeColor: 'purple' },
      { points: [[1, 3], [3.02, 1]], strokeColor: 'darkorange' },
    ],
  },

  board_3: {
    artifact: 'artifact_3',
    style: {
      ...genericStyles,
      boundingbox: [-1, 5, 4, -4],
    },
    points: [

      { x: 0, y: 1, visible: true, name: '1', fixed: true, color: 'black' },
      { x: 0, y: -1, visible: true, name: '-1', fixed: true, color: 'black' },
    ],
    curves: [
      { points: [[1, -1], [3.02, -3]], strokeColor: 'purple' },
      { points: [[1, -3], [3.02, -1]], strokeColor: 'darkorange' },
    ],
  },

  board_4: {
    artifact: 'artifact_4',
    style: {
      ...genericStyles,
    },
    points: [

      { x: 0, y: 1, visible: true, name: '1', fixed: true, color: 'black' },
      { x: 0, y: -1, visible: true, name: '-1', fixed: true, color: 'black' },
    ],
    curves: [
      { points: [[1, 0.5], [3.02, -1.5]], strokeColor: 'purple', },
      { points: [[1, -1.5], [3.02, 0.5]], strokeColor: 'darkorange', },

    ],
  },

  board_5: {
    artifact: 'artifact_5',
    style: {
      ...genericStyles,
    },
    points: [

      { x: 0, y: 1, visible: true, name: '1', fixed: true, color: 'black' },
      { x: 0, y: -1, visible: true, name: '-1', fixed: true, color: 'black' },
    ],
    curves: [
      { points: [[1, 0], [3.02, 2]], strokeColor: 'purple' },
      { points: [[1, 2], [3.02, 0]], strokeColor: 'darkorange' },
    ],

  },

  board_6: {
    artifact: 'artifact_6',
    style: {
      ...genericStyles,
      boundingbox: [-1, 3, 4, -3]
    },
    points: [
      { x: 0, y: 1, visible: true, name: '1', fixed: true, color: 'black' },
      { x: 0, y: -1, visible: true, name: '-1', fixed: true, color: 'black' },
    ],
    curves: [
      { points: [[1, 0], [3.02, -2]], strokeColor: 'purple' },
      { points: [[1, -2], [3.02, 0]], strokeColor: 'darkorange' },
    ],

  },
  board_7: {

    artifact: 'artifact_7',

    style: {
      ...genericStyles,
      boundingbox: [-1, 4, 4, -4],
    },
    points: [
      { x: 0, y: 1, visible: true, name: '1', fixed: true, color: 'black' },
      { x: 0, y: -1, visible: true, name: '-1', fixed: true, color: 'black' },
    ],
    curves: [
      { points: [[1, 3.02], [3.02, -1.02]], strokeColor: 'purple', },
      { points: [[1, -1], [3.02, 2.02]], strokeColor: 'darkorange', },
    ],
    lines: [
      {
        points: [[0, 1], [2, 1]],
        lastArrow: true,
        dash: 2,
      },
    ],

  },
};
//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const rDef = {
  artifactHtml: {
    datadefault: [

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
          { dataSet: { board: 'board_7' } },
        ],
      },
    ]
  },
  artifact_1: { ...allDef },
  artifact_2: { ...allDef },
  artifact_3: { ...allDef },
  artifact_4: { ...allDef },
  artifact_5: { ...allDef },
  artifact_6: { ...allDef },
  artifact_7: { ...allDef },
};
generator(rDef);
mainOperation(defBoards, rDef);