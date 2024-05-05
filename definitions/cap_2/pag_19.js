const genericStyles = {
  grid: true,
  axis: [false, true, true],
  boundingbox: [-4, 4, 4, -4],
  valueAxis: {
    yd: [[0, 0], [0, 1]], /*dirección del eje y*/
    xd: [[0, 0], [1, 0]],
  },
};
const allDef = {
  buttonsActive: { points: true },
  conditions: {
    operation: {
      curves: [[0, 1]],
      type: 2,//suma: 1 / Multipicacion: 2
      noise: 28
    },

  },
};
const defBoards = {

  board_1: {
    artifact: 'artifact_1',
    style: {
      ...genericStyles
    },
    points: [
      { x: 0, y: 2, visible: true, name: '2', fixed: true, color: 'black' },
      { x: 0, y: 1, visible: true, name: '1', fixed: true, color: 'black' },
      { x: 0, y: -1, visible: true, name: '-1', fixed: true, color: 'black' },
      { x: 0, y: -2, visible: true, name: '-2', fixed: true, color: 'black' },
    ],
    curves: [
      {
        strokeColor: 'darkorange',
        points: [
          [-1.5, 2],
          [-0.8, 0.5],
          [0, 0],
          [0.8, 0.5],
          [1.5, 2]
        ],
      }, {
        strokeColor: 'purple',
        flex: 0,
        points: [[-2.2, -2.2], [2.2, 2.2]],
      }
    ],
  },

  board_2: {
    artifact: 'artifact_2',
    style: {
      ...genericStyles
    },
    points: [
      { x: 0, y: 2, visible: true, name: '2', fixed: true, color: 'black' },
      { x: 0, y: 1, visible: true, name: '1', fixed: true, color: 'black' },
      { x: 0, y: -1, visible: true, name: '-1', fixed: true, color: 'black' },
      { x: 0, y: -2, visible: true, name: '-2', fixed: true, color: 'black' },
    ],
    curves: [
      {
        strokeColor: 'darkorange',
        points: [
          [-1.5, -2],
          [-0.8, -0.5],
          [0, 0],
          [0.8, 0.5],
          [1.5, 2]
        ],
      }, {
        strokeColor: 'purple',
        flex: 0,
        points: [[-2.2, -2.2], [2.2, 2.2]],
      }
    ],

  },

  board_3: {
    artifact: 'artifact_3',
    style: {
      ...genericStyles,
      boundingbox: [-1, 5, 4, -5],
    },
    points: [
      { x: 0, y: 1, visible: true, name: '1', fixed: true, color: 'black' },
    ],
    curves: [
      {
        strokeColor: 'darkorange',
        points: [
          [0.15, 2.2],
          [0.6, 0.6],
          [2, 0.2]
        ],
      }, {
        strokeColor: 'purple',
        points: [
          [0.15, -2.2],
          [0.6, -0.6],
          [2, -0.2]
        ],
      }
    ],

  },
  board_4: {
    artifact: 'artifact_4',
    style: {
      ...genericStyles,
      boundingbox: [-4, 5, 4, -5],
    },

    curves: [
      {//pagina 2-18  grafica 4
        interactive: true,
        strokeColor: 'darkorange',
        points: [[-2, -2], [2, 0]],
      }, {
        interactive: true,
        strokeColor: 'purple',
        flex: 1,

        points: [[-2, 2], [2, 0]],
      }
    ],
    points: [
      { x: 0, y: 1, visible: true, name: '1', fixed: true, color: 'black' },
      { x: 0, y: 2, visible: true, name: '2', fixed: true, color: 'black' },
    ],
  },

  board_5: {
    artifact: 'artifact_5',
    style: {
      ...genericStyles,
    },
    points: [

      { x: 0, y: 2, visible: true, name: '2', fixed: true, color: 'black' },
      { x: 0, y: 1, visible: true, name: '1', fixed: true, color: 'black' },
      { x: 0, y: -1, visible: true, name: '-1', fixed: true, color: 'black' },
    ],
    curves: [
      { //pagina 2-18  grafica 1
        interactive: true,
        strokeColor: 'darkorange',
        points: [[-2, 0], [2, -0.5]],
      }, { //pagina 2-18  grafica 1
        interactive: true,
        strokeColor: 'purple',
        points: [
          [-2, -1.5], [2, -0.5]
        ],
      },
    ],

  },
  board_6: {
    artifact: 'artifact_6',
    style: {
      ...genericStyles,
    },
    points: [

      { x: 0, y: 2, visible: true, name: '2', fixed: true, color: 'black' },
      { x: 0, y: 1, visible: true, name: '1', fixed: true, color: 'black' },
      { x: 0, y: -1, visible: true, name: '-1', fixed: true, color: 'black' },
    ],
    curves: [
      { //pagina 2-18  grafica 1
        interactive: true,
        strokeColor: 'darkorange',
        points: [

          [-3, 0],

          [-2.7, 0.95],
          [-2.3, 0.95],

          [-1.3, -2.45],
          [-0.7, -2.45],
          ////////////////////////////////////
          [0.3, 2.6],
          [0.8, 2.6],


          [1.56, 0],

          [2.1, -1.2],
          [2.5, -1.2],

          [3.01, 0]
        ],
      }, { //pagina 2-18  grafica 1
        interactive: true,
        strokeColor: 'purple',
        points: [
          [-3, -1], [3, -1]
        ],
      },
    ],

  },
  board_7: {
    artifact: 'artifact_7',
    style: {
      ...genericStyles,
    },
    points: [

      { x: 0, y: 2, visible: true, name: '2', fixed: true, color: 'black' },
      { x: 0, y: 1, visible: true, name: '1', fixed: true, color: 'black' },
      { x: 0, y: -1, visible: true, name: '-1', fixed: true, color: 'black' },
    ],
    curves: [
      { //pagina 2-18  grafica 1
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-3, 0], [-1.5, 1], [0, 0], [1.5, -1], [3, 0]
        ],
      }, { //pagina 2-18  grafica 1
        interactive: true,
        strokeColor: 'purple',
        points: [
          [-3, -3], [3, 3]
        ],
      },
    ],

  },
  board_8: {
    artifact: 'artifact_8',
    style: {
      ...genericStyles,
    },
    points: [

      { x: 0, y: 2, visible: true, name: '2', fixed: true, color: 'black' },
      { x: 0, y: 1, visible: true, name: '1', fixed: true, color: 'black' },
      { x: 0, y: -1, visible: true, name: '-1', fixed: true, color: 'black' },
    ],
    curves: [
      { //pagina 2-18  grafica 1
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-3, 0], [-1.5, 1], [0, 0], [1.5, -1], [3, 0]
        ],
      }, { //pagina 2-18  grafica 1
        interactive: true,
        strokeColor: 'purple',
        points: [
          [-3, 2],
          [-1.26, 0.82],
          [-0.5, 0.33],
          [0.36, 0],
          [1.81, 0.32],
          [3, 1]
        ]
      },
    ],

  },
  board_9: {
    artifact: 'artifact_9',
    style: {
      ...genericStyles
    },
    points: [
      { x: 0, y: 2, visible: true, name: '2', fixed: true, color: 'black' },
      { x: 0, y: 1, visible: true, name: '1', fixed: true, color: 'black' },
      { x: 0, y: -1, visible: true, name: '-1', fixed: true, color: 'black' },
      { x: 0, y: -2, visible: true, name: '-2', fixed: true, color: 'black' },
    ],
    curves: [
      {
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [-1.5, 2],
          [-0.95, 0.75],
          [0, 0],
          [0.95, -0.75],
          [1.51, -2]
        ],
      }, {
        interactive: true,
        strokeColor: 'purple',
        flex: 0,
        points: [[-2.2, -2.2], [2.2, 2.2]],
      }
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
          { dataSet: { board: 'board_8' } },
          { dataSet: { board: 'board_9' } },
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
  artifact_5: { ...allDef },
  artifact_7: { ...allDef },
  artifact_8: { ...allDef },
  artifact_9: { ...allDef },
};

generator(rDef);
mainOperation(defBoards, rDef);