let def = {  //
  artifact_DefaultText: {
    modeDoubleBoard:true,

    datadefault: [
            
      [2, 'CONEXAS o DISCONEXAS'],
      [4, 'board_2','board_3',['Conexa','Disconexa']],
    ],
        

  },
  artifact_1:{
    modeRefact:true,
    newContent:true,
    datadefault:[
      [4, 'board_4'],
      [5, 1, 1,
        ['Conexa o Disconexa'],
      ],
    ],
    conditions:[
      ['conexa'],
    ],
  },
  artifact_2:{
    modeRefact:true,
    newContent:true,
    datadefault:[
      [4, 'board_5'],
      [5, 1, 1,
        ['Conexa o Disconexa'],
      ],
    ],
    conditions:[
      ['conexa'],
    ],
  },
  artifact_3:{
    modeRefact:true,
    newContent:true,
    datadefault:[
      [4, 'board_6'],
      [5, 1, 1,
        ['Conexa o Disconexa'],
      ],
    ],
    conditions:[
      ['disconexa'],
    ],
  },
  artifact_4:{
    modeRefact:true,
    newContent:true,
    datadefault:[
      [4, 'board_7'],
      [5, 1, 1,
        ['Conexa o Disconexa'],
      ],
    ],
    conditions:[
      ['conexa'],
    ],
  },
  artifact_5:{
    modeRefact:true,
    newContent:true,
    datadefault:[
      [4, 'board_8'],
      [5, 1, 1,
        ['Conexa o Disconexa'],
      ],
    ],
    conditions:[
      ['conexa'],
    ],
  },
  artifact_6:{
    modeRefact:true,
    newContent:true,
    datadefault:[
      [4, 'board_9'],
      [5, 1, 1,
        ['Conexa o Disconexa'],
      ],
    ],
    conditions:[
      ['conexa'],
    ],
  },

}

let defBoards = {
  board_1: {
    style: {
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      grid: false,
      boundingbox: [-4, 4, 4, -4],
      maxWidth: 350,
      maxHeight: 225,
    },
    curves: [
      [[[-3, -0.5], [-2, 0, true,], [0, 1.5, true], [2, 0, true], [2.5, -0.5], [3, 0, true], [3.5, 0.5]]]
    ],
  },
  board_2: {
    style: {
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      grid: false,
      boundingbox: [-2, 4, 2, -2],
      maxWidth: 310,
      maxHeight: 220,
    },
    curves: [
      [[[-1.1, -1.2], [-0.8, 0], [0, 1.5], [1, 1.7]]]
    ],
  },
  board_3: {
    style: {
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      grid: false,
      boundingbox: [-4, 4, 2, -2],
      maxWidth: 310,
      maxHeight: 225,
    },
    curves: [
      [[[-3.5, -1], [-3, 0], [-2.5, 0.6], [-2.1, 0.8], [-1.2, 0.9]]],
      [[[-0.7, 0.9], [0, 1.1], [0.6, 1.6], [1, 2.6]]]
    ],
  },
  board_4: {

    style: {
      axis: [false, true, true],
      grid: true,
      maxWidth: 310,
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
  board_5: {

    style: {
      axis: [false, true, true],
      grid: true,
      maxWidth: 310,
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
  board_6: {

    style: {
      axis: [false, true, true],
      grid: true,
      maxWidth: 310,
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
  board_7: {

    style: {
      axis: [false, true, true],
      grid: true,
      maxWidth: 310,
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
  board_8: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxWidth: 310,
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
  board_9: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxWidth: 310,
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
      [[[3, 1.5, true, '', 2, true], [2, -1.5]]],
      [[[0.5, 1.5], [2, -1.5]]],
      [[[0.5, 1.5], [-1.5, -0.5]]],
      [[[-1.5, -0.5], [-2, 1.5]]],
      [[[-2, 1.5], [-2.5, 1]]]
    ],
  },

};

generator();
defBoardDefault();



