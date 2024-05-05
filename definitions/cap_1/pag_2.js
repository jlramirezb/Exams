
const defBoards = {
  board_1: {

    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 250,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      boundingbox: [-4, 4, 4, -2],
    },

    points: [
      [-2.2, 2.2, true], [-2.4, 2.4, true], [-2.6, 2.6, true],
      [2.2, 2.2, true], [2.4, 2.4, true], [2.6, 2.6, true]
    ],
    curves: [
      [[[-2, 2], [-1, 0], [0, -1], [1, 0], [2, 2]]],
    ],
  },
  board_2: {

    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 250,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      boundingbox: [-4, 4, 4, -2],
    },
    points: [[-2.7, 2.3, true], [-3.05, 2.5, true], [-3.4, 2.7, true]],
    lines: [
      [[[3, -0.5], [-2.5, 2.2]]]
    ],

  },
  board_3: {

    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 250,

      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      boundingbox: [-4, 4, 4, -4],
    },
    points: [
      [-2.3, -0.45, true], [-2.65, -0.38, true], [-3.1, -0.3, true],
      [-0.25, -2.7, true], [-0.2, -3.1, true],

      [3.3, 0.4, true], [3.6, 0.3, true],
      [0.25, 3.4, true], [0.2, 3.7, true],
    ],

    curves: [
      [[[-2.1, -0.5], [-1, -1], [-0.5, -1.8], [-0.3, -2.5]]],
      [[[0.3, 3.2], [0.7, 2], [2, 0.7], [1.2, 1.2], [3.1, 0.4]]]
    ],
  },
  board_4: {

    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 250,

      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      boundingbox: [-4, 4, 4, -4],
    },
    points: [
      [0.19, -3.2, true], [0.15, -3.5, true],
      [3.2, 1.4, true], [3.4, 1.6, true], [3.6, 1.8, true]
    ],
    curves: [
      [[[0.2, -3], [0.5, -1], [1, 0], [2, 0.5], [3, 1.2]]]
    ],
  },
  board_5: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 200,

      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      boundingbox: [-4, 2, 4, -2],
    },
    curves: [
      [[[-3, 0], [-1.5, 1], [0, 0], [1.5, -1], [3, 0]]]
    ],
  },
  board_6: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 200,

      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      boundingbox: [-4, 2, 4, -2],
    },
    lines: [
      [[[3, 1.5, true, '', 2, true], [2, -1.5]]],
      [[[0.5, 1.5], [2, -1.5]]],
      [[[0.5, 1.5], [-1.5, -0.5]]],
      [[[-1.5, -0.5], [-2, 1.5]]],
      [[[-2, 1.5], [-2.5, 1]]]
    ],
  },
  board_7: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 200,

      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      boundingbox: [-4, 2, 4, -2],
    },
    points: [
      [3, 1.5, true, '', true]
    ],
    lines: [
      [[[3, 1.5], [2, -1.5]]],
      [[[0.5, 1.5], [2, -1.5]]],
      [[[0.5, 1.5], [-1.5, -0.5]]],
      [[[-1.5, -0.5], [-2, 1.5]]],
      [[[-2, 1.5], [-2.5, 1]]]
    ],
  },
};

const def = {
  artifact_1: {
    board: 'board_1',
    inputs: ['-2', false, false, '-2', '0', false, false, '-1'],
    conditions: {
      inputs: [
        ['-2'], 2, '∄', ['-2'],
        ['0'], -1, 0, ['-1']
      ],
    },
  },
  artifact_2: {
    board: 'board_2',
    noise: [
      0, 0.15, 0, 0,
      0, 0.2, 0, 0
    ],
    inputs: ['-1', false, false, '0', '3', false, false, '2'],
    conditions: {
      inputs: [
        ['-1'], 1.5, 2, ['0'],
        ['3'], -0.5, -2, ['2']
      ],
    },
  },
  artifact_3: {
    board: 'board_3',
    noise: [
      0, 0.2, 0, 0.1,
      0, 0, 0.2, 0
    ],
    inputs: ['-2', false, '1', false, '0', false, false, '2'],
    conditions: {
      inputs: [
        ['-2'], -0.5, ['1'], 1.5,
        ['0'], '∄', 0.7, ['2']],
    },
  },
  artifact_4: {
    board: 'board_4',
    noise: [
      0, 0, 0, 0,
      0, 0.1, 0, 0
    ],
    inputs: ['1', false, '-1', false, '1/4', false, false, '0'],
    conditions: {
      inputs: [
        ['1'], 0, ['-1'], '∄',
        ['1/4'], -3, 1, ['0']],
    },
  },
  artifact_5: {
    board: 'board_5',
    noise: [
      0, 0.1, 0.1, 0,
      0, 0, 0.1, 0
    ],
    inputs: ['1/2', false, false, '1/2', false, '2', false, '1/2'],
    conditions: {
      inputs: [
        ['1/2'], -0.5, -0.5, ['1/2'],
        '∄', ['2'], -2.5, ['1/2']
      ],
    },
  },
  artifact_6: {
    board: 'board_6',
    noise: [
      0, 0.1, 0, 0,
      0, 0, 0, 0
    ],
    inputs: ['-1.5', false, '3.5', false, '0', false, false, '3'],
    conditions: {
      inputs: [
        ['-1.5'], -0.5, ['3.5'], '∄',
        ['0'], 1, '∄', ['3']],
    },
  },
};
//                ∄
let bridge = [-0.5, -2.5];


window.onload = initMain();
