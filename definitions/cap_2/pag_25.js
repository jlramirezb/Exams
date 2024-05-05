
const genericStyles = {
  grid: true,
  maxHeight: 300,
  maxWidth: 300,
  axis: [false, true, true],
  boundingbox: [-5, 4, 5, -4],
  valueAxis: {
    yd: [[0, 0], [0, 1]], /*dirección del eje y*/
    xd: [[0, 0], [1, 0]],
  },
};
const asynCond_1 = { positions: [-2, -1.6, -0.5, -1, 1, 1.6, 2, 3], };
const asynCond_2 = { positions: [-3.5, -2.5, -1.5, -0.5, 0.5, 1.5, 2, 3] };
const asynVisual_1 = [
  { x: -2 },
  { x: -1.6 },
  { x: -0.5 },
  { x: -1 },
  { x: 1 },
  { x: 1.6 },
  { x: 2 },
  { x: 3 },
];
const asynVisual_2 = [
  { x: -3.5 },
  { x: -2.5 },
  { x: -1.5 },
  { x: -0.5 },
  { x: 0.5 },
  { x: 1.5 },
  { x: 2 },
  { x: 3 },
];

const allDefArtifactBase = {
  buttonsActive: { points: true },
  conditions: {
    operation: {
      curves: [[0, 1]],
      type: 2,//suma: 1 / Multipicacion: 2
    },
  },
};


const defBoards = {

  //  board_a: {//verificado resultado bien
  //      artifact: "artifact_1",
  //      points: [
  //         [0, 1, true, "1", true, "black"],
  //         [0, -1, true, "-1", true, "black"],
  //      ],
  //      style: {
  //         grid: true,
  //         maxHeight: 300,
  //         maxWidth: 300,
  //         boundingbox: [-4, 5, 4, -5],
  //         axis: [false, true, true],
  //         valueAxis: {
  //            yd: [
  //               [0, 0],
  //               [0, 1],
  //            ] /*dirección del eje y*/,
  //            xd: [
  //               [0, 0],
  //               [1, 0],
  //            ],
  //            colory: "#000000",
  //            colorx: "#000000",
  //         },
  //      },

  //      curves: [{
  //         dash: 2,
  //         points: [[-4, 1], [4, 1]]
  //      }, {
  //         points: [
  //            [-2, 2],
  //            [-1.72, 1.78],
  //            [-1.6, 1.5]
  //         ]
  //      }, {
  //         points: [
  //            [-1, 2],
  //            [-0.68, 1.7],
  //            [-0.5, 1.4]
  //         ]
  //      }, {
  //         points: [
  //            [2, 2],
  //            [2.6, 1.6],
  //            [3, 1]
  //         ]
  //      }, {
  //         points: [
  //            [1, 2],
  //            [1.4, 1.7],
  //            [1.6, 1.2]
  //         ]
  //      }],
  //      lines: [
  //         { points: [[-4, -1], [4, -1]], dash: 2, }
  //      ],
  //      //asymptotes: asynVisual_1
  //   },
  //  board_b: {//9
  //      points: [
  //         [0, 1, true, "1", true, "black"],
  //         [0, -1, true, "-1", true, "black"],
  //      ],
  //      artifact: "artifact_2",
  //      style: {
  //         grid: true,
  //         maxHeight: 300,
  //         maxWidth: 300,
  //         boundingbox: [-5, 5, 5, -5],
  //         axis: [false, true, true],
  //         valueAxis: {
  //            yd: [
  //               [0, 0],
  //               [0, 1],
  //            ] /*dirección del eje y*/,
  //            xd: [
  //               [0, 0],
  //               [1, 0],
  //            ],
  //            colory: "#000000",
  //            colorx: "#000000",
  //         },
  //      },
  //      lines: [
  //         { points: [[-4, -1], [4, -1]], dash: 2, }
  //      ],
  //      curves: [{
  //         dash: 2,
  //         points: [[-4, 1], [4, 1]]
  //      }, {
  //         points: [
  //            [-2, -2],
  //            [-1.72, -2.22],
  //            [-1.6, -2.5]
  //         ]
  //      }, {
  //         points: [
  //            [-1, -2],
  //            [-0.68, -2.3],
  //            [-0.5, -2.6]
  //         ]
  //      }, {
  //         points: [
  //            [2, -2],
  //            [2.6, -2.3],
  //            [3, -3]
  //         ]
  //      }, {
  //         points: [
  //            [1, -2],
  //            [1.4, -2.3],
  //            [1.6, -2.8]
  //         ]
  //      }],
  //      //asymptotes: asynVisual_1,
  //   },
  //   board_c: {//10
  //          points: [
  //             [0, 1, true, "1", true, "black"],
  //             [0, -1, true, "-1", true, "black"],
  //          ],
  //          artifact: "artifact_3",
  //          style: {
  //             ...genericStyles
  //          },
  //          lines: [
  //             { points: [[-4, -1], [4, -1]], dash: 2, }
  //          ],
  //          curves: [
  //             {
  //                dash: 2,
  //                points: [[-4, 1], [4, 1]]
  //             }, {
  //                points: [
  //                   [-3.5, 0.3],
  //                   [-3.3, 0.15],
  //                   [-3, 0.0],
  //                   [-2.7, 0.15],
  //                   [-2.5, 0.3]
  //                ],
  //             }, {
  //                points: [
  //                   [-1.5, 0.5],
  //                   [-1.3, 0.1],
  //                   [-1, 0],
  //                   [-0.7, 0.1],
  //                   [-0.5, 0.5]
  //                ]
  //             }, {
  //                points: [
  //                   [1.5, 0.7],
  //                   [1.3, 0.1],
  //                   [1, 0],
  //                   [0.7, 0.1],
  //                   [0.5, 0.7]
  //                ]
  //             }, {
  //                points: [
  //                   [3, 1],
  //                   [2.7, 0.1],
  //                   [2.5, 0],
  //                   [2.3, 0.1],
  //                   [2, 1]
  //                ]
  //             },
  //          ],
  //          /* asymptotes: asynCond_2, */
  //       },
  board_1: {
    artifact: 'artifact_4',
    style: {
      grid: true,
      height: '550px',
      width: '600px',
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
        xd: [[0, 0], [1, 0]],
      },
    },

    curves: [
      {
        dash: 2,
        points: [[-4, 1], [4, 1]]
      }, {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-2.2, 3.0],
          [2, -2],

        ],
      },
    ],

    points: [
      [0, 1, true, '1', true, 'black'],
      [0, -1, true, '-1', true, 'black'],
    ],
    lines: [
      { points: [[-4, -1], [4, -1]], dash: 2, },
      { points: [[0.3, 8], [0.3, -8]], dash: 2 }

    ],
  },
  board_2: {
    artifact: 'artifact_5',
    style: {
      grid: true,
      height: '550px',
      width: '600px',
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
        xd: [[0, 0], [1, 0]],
      },
    },

    curves: [
      {
        dash: 2,
        points: [[-4, 1], [4, 1]]
      }, {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-2.2, -3.0],
          [2.2, 2],

        ],
      },
    ],

    points: [
      [0, 1, true, '1', true, 'black'],
      [0, -1, true, '-1', true, 'black'],
    ],
    lines: [
      { points: [[-4, -1], [4, -1]], dash: 2, },
      { points: [[0.5, 8], [0.5, -8]], dash: 2 }
    ],
  },
  board_3: {
    artifact: 'artifact_6',
    style: {
      grid: true,
      height: '550px',
      width: '600px',
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
        xd: [[0, 0], [1, 0]],
      },
    },

    curves: [
      {
        dash: 2,
        points: [[-4, 1], [4, 1]]
      }, {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-2, -2],
          [2, 2],

        ],
      },
    ],

    points: [
      [0, 1, true, '1', true, 'black'],
      [0, -1, true, '-1', true, 'black'],
    ],
    lines: [
      { points: [[-4, -1], [4, -1]], dash: 2, }
    ],
  },

  board_4: {
    artifact: 'artifact_7',
    style: {
      grid: true,
      height: '550px',
      width: '600px',
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
        xd: [[0, 0], [1, 0]],
      },
    },

    curves: [
      {
        dash: 2,
        points: [[-4, 1], [4, 1]]
      }, {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-2, 2],
          [2, -2],

        ],
      },
    ],

    points: [
      [0, 1, true, '1', true, 'black'],
      [0, -1, true, '-1', true, 'black'],
    ],
    lines: [
      { points: [[-4, -1], [4, -1]], dash: 2, }
    ],
  },
  // board_5: {
  //         artifact: "artifact_8",
  //         style: {
  //            grid: true,
  //            height: "550px",
  //            width: "600px",
  //            boundingbox: [-4, 4, 4, -4],
  //            axis: [false, true, true],
  //            valueAxis: {
  //               yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
  //               xd: [[0, 0], [1, 0]],
  //            },
  //         },

  //         curves: [
  //            {
  //               dash: 2,
  //               points: [[-4, 1], [4, 1]]
  //            }, {
  //               interactive: true,
  //               strokeColor: "black",
  //               points: [
  //              [-2, 2],
  //                 [2, -2],

  //               ],
  //            },
  //         ],

  //         points: [
  //            [0, 1, true, "1", true, "black"],
  //            [0, -1, true, "-1", true, "black"],
  //         ],
  //         lines: [
  //            { points: [[-4, -1], [4, -1]], dash: 2, }
  //         ],
  //      },
  board_6: {
    artifact: 'artifact_9',
    style: {
      grid: true,
      height: '550px',
      width: '600px',
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
        xd: [[0, 0], [1, 0]],
      },
    },

    curves: [
      {
        dash: 2,
        points: [[-4, 1], [4, 1]]
      }, {
        interactive: true,
        strokeColor: 'black',
        points: [
          /*  [-0.70, 3,],
               [-0.35, 2,],
               [0, 1.7,],
               [0.35, 2,],
               [0.70,3,], */
          [-1.2, 3.1399999999999997],
          [-1, 2.7],
          [-0.8, 2.34],
          [-0.6000000000000001, 2.06],
          [-0.4000000000000001, 1.86],
          [-0.20000000000000007, 1.74],
          [-5.551115123125783e-17, 1.7],
          [0.19999999999999996, 1.74],
          [0.39999999999999997, 1.8599999999999999],
          [0.6, 2.06],
          [0.8, 2.34],
          [1, 2.7],
          [1.2, 3.1399999999999997],

        ],
      },
    ],

    points: [
      [0, 1, true, '1', true, 'black'],
      [0, -1, true, '-1', true, 'black'],
    ],
    lines: [
      { points: [[-4, -1], [4, -1]], dash: 2, }
    ],
  },

  board_7: {
    artifact: 'artifact_10',
    style: {
      grid: true,
      height: '550px',
      width: '600px',
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
        xd: [[0, 0], [1, 0]],
      },
    },

    curves: [
      {
        dash: 2,
        points: [[-4, 1], [4, 1]]
      }, {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-1.2, 2.44],
          [-1, 2],
          [-0.8, 1.6400000000000001],
          [-0.6000000000000001, 1.36],
          [-0.4000000000000001, 1.1600000000000001],
          [-0.20000000000000007, 1.04],
          [-5.551115123125783e-17, 1],
          [0.19999999999999996, 1.04],
          [0.39999999999999997, 1.16],
          [0.6, 1.3599999999999999],
          [0.8, 1.6400000000000001],
          [1, 2],
          [1.2, 2.44]
          /*      
            [ -1 , 2 ],
            [ -0.5 , 1.25 ],
            [ 0 , 1 ],
            [ 0.5 , 1.25 ],
            [ 1 , 2 ],
                      */
          /*     [ -0.7 , 2],
              [ -0.39999999999999994 , 1.25 ],
              [ -0.29999999999999993 , 1.0899999999999999 ],
              [ -0.09999999999999992 , 1.01 ],
              [ 0.10000000000000009 , 1.01 ],
              [ 0.3000000000000001 , 1.09 ],
              [ 0.4000000000000001 , 1.25 ],
              [ 0.7000000000000002 , 2 ] */
        ],
      },
    ],

    points: [
      [0, 1, true, '1', true, 'black'],
      [0, -1, true, '-1', true, 'black'],
    ],
    lines: [
      { points: [[-4, -1], [4, -1]], dash: 2, }
    ],
  },

  board_8: {
    artifact: 'artifact_11',
    style: {
      grid: true,
      height: '550px',
      width: '600px',
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
        xd: [[0, 0], [1, 0]],
      },
    },

    curves: [
      {
        dash: 2,
        points: [[-4, 1], [4, 1]]
      }, {
        interactive: true,
        strokeColor: 'black',
        points: [
          /*  [-0.55, 2.4],
               [-0.35, 0.8,],
               [0, 0.5,],
               [0.35, 0.8,],
               [0.55,2.4], */
          [-1.2, 1.94],
          [-1, 1.5],
          [-0.8, 1.1400000000000001],
          [-0.6000000000000001, 0.8600000000000001],
          [-0.4000000000000001, 0.66],
          [-0.20000000000000007, 0.54],
          [-5.551115123125783e-17, 0.5],
          [0.19999999999999996, 0.54],
          [0.39999999999999997, 0.6599999999999999],
          [0.6, 0.86],
          [0.8, 1.1400000000000001],
          [1, 1.5],
          [1.2, 1.94],
        ],
      },
    ],

    points: [
      [0, 1, true, '1', true, 'black'],
      [0, -1, true, '-1', true, 'black'],
    ],
    lines: [
      { points: [[-4, -1], [4, -1]], dash: 2, }
    ],
  },
  board_9: {
    artifact: 'artifact_12',
    style: {
      grid: true,
      height: '550px',
      width: '600px',
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
        xd: [[0, 0], [1, 0]],
      },
    },

    curves: [
      {
        dash: 2,
        points: [[-4, 1], [4, 1]]
      }, {
        interactive: true,
        strokeColor: 'black',
        points: [
          /*         [-0.55, 1.4],
                 [-0.35, -0.1,],
                 [0, -0.5,],
                 [0.35, -0.1,],
                 [0.55,1.4], */
          [-1.2, 1.44],
          [-1, 1],
          [-0.8, 0.6400000000000001],
          [-0.6000000000000001, 0.3600000000000001],
          [-0.4000000000000001, 0.16000000000000006],
          [-0.20000000000000007, 0.04000000000000003],
          [-5.551115123125783e-17, 3.0814879110195774e-33],
          [0.19999999999999996, 0.03999999999999998],
          [0.39999999999999997, 0.15999999999999998],
          [0.6, 0.36],
          [0.8, 0.6400000000000001],
          [1, 1],
          [1.2, 1.44],
        ],
      },
    ],

    points: [
      [0, 1, true, '1', true, 'black'],
      [0, -1, true, '-1', true, 'black'],
    ],
    lines: [
      { points: [[-4, -1], [4, -1]], dash: 2, }
    ],
  },
  // board_10: {
  //    artifact: "artifact_13",
  //    style: {
  //       grid: true,
  //       height: "550px",
  //       width: "600px",
  //       boundingbox: [-4, 4, 4, -4],
  //       axis: [false, true, true],
  //       valueAxis: {
  //          yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
  //          xd: [[0, 0], [1, 0]],
  //       },
  //    },

  //    curves: [
  //       {
  //          dash: 2,
  //          points: [[-4, 1], [4, 1]]
  //       }, {
  //          interactive: true,
  //          strokeColor: "black",
  //          points: [
  //               [-0.55, 1.5,],
  //                [-0.35, 0.4,],
  //                [0, 0,],
  //                [0.35, 0.4,],
  //                [0.55,1.5,],
  //          ],
  //       },
  //    ],

  //    points: [
  //       [0, 1, true, "1", true, "black"],
  //       [0, -1, true, "-1", true, "black"],
  //    ],
  //    lines: [
  //       { points: [[-4, -1], [4, -1]], dash: 2, }
  //    ],
  // },
  // board_11: {
  //    artifact: "artifact_14",
  //    style: {
  //       grid: true,
  //       height: "550px",
  //       width: "600px",
  //       boundingbox: [-4, 4, 4, -4],
  //       axis: [false, true, true],
  //       valueAxis: {
  //          yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
  //          xd: [[0, 0], [1, 0]],
  //       },
  //    },

  //    curves: [
  //       {
  //          dash: 2,
  //          points: [[-4, 1], [4, 1]]
  //       }, {
  //          interactive: true,
  //          strokeColor: "black",
  //          points: [
  //                [-0.55, 0.8,],
  //                [-0.35, -0.4,],
  //                [0, -1,],
  //                [0.35, -0.4],
  //                [0.55,0.8,],
  //          ],
  //       },
  //    ],

  //    points: [
  //       [0, 1, true, "1", true, "black"],
  //       [0, -1, true, "-1", true, "black"],
  //    ],
  //    lines: [
  //       { points: [[-4, -1], [4, -1]], dash: 2, }
  //    ],
  // },

  // board_12: {
  //    artifact: "artifact_15",
  //    style: {
  //       grid: true,
  //       height: "550px",
  //       width: "600px",
  //       boundingbox: [-4, 4, 4, -4],
  //       axis: [false, true, true],
  //       valueAxis: {
  //          yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
  //          xd: [[0, 0], [1, 0]],
  //       },
  //    },

  //    curves: [
  //       {
  //          dash: 2,
  //          points: [[-4, 1], [4, 1]]
  //       }, {
  //          interactive: true,
  //          strokeColor: "black",
  //          points: [
  //                   [-1, 1],
  //                [-0.60, -0.90,],
  //                [0, -1.5,],
  //                [0.60, -0.90,],
  //                [1,1,],
  //          ],
  //       },
  //    ],

  //    points: [
  //       [0, 1, true, "1", true, "black"],
  //       [0, -1, true, "-1", true, "black"],
  //    ],
  //    lines: [
  //       { points: [[-4, -1], [4, -1]], dash: 2, }
  //    ],
  // },

  // board_13: {
  //    artifact: "artifact_16",
  //    style: {
  //       grid: true,
  //       height: "550px",
  //       width: "600px",
  //       boundingbox: [-4, 4, 4, -4],
  //       axis: [false, true, true],
  //       valueAxis: {
  //          yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
  //          xd: [[0, 0], [1, 0]],
  //       },
  //    },

  //    curves: [
  //       {
  //          dash: 2,
  //          points: [[-4, 1], [4, 1]]
  //       }, {
  //          interactive: true,
  //          strokeColor: "black",
  //          points: [
  //               [-1, -1,],
  //                [-0.60, 1,],
  //                [0, 2,],
  //                [0.60, 1,],
  //                [1,-1,],
  //          ],
  //       },
  //    ],

  //    points: [
  //       [0, 1, true, "1", true, "black"],
  //       [0, -1, true, "-1", true, "black"],
  //    ],
  //    lines: [
  //       { points: [[-4, -1], [4, -1]], dash: 2, }
  //    ],
  // },

  // board_14: {
  //    artifact: "artifact_17",
  //    style: {
  //       grid: true,
  //       height: "550px",
  //       width: "600px",
  //       boundingbox: [-4, 4, 4, -4],
  //       axis: [false, true, true],
  //       valueAxis: {
  //          yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
  //          xd: [[0, 0], [1, 0]],
  //       },
  //    },

  //    curves: [
  //       {
  //          dash: 2,
  //          points: [[-4, 1], [4, 1]]
  //       }, {
  //          interactive: true,
  //          strokeColor: "black",
  //          points: [
  //                [-2, 0,],
  //                [-1, -0.3,],
  //                [0, -1,],
  //                [1, -0.3,],
  //                [2,0,],
  //          ],
  //       },
  //    ],

  //    points: [
  //       [0, 1, true, "1", true, "black"],
  //       [0, -1, true, "-1", true, "black"],
  //    ],
  //    lines: [
  //       { points: [[-4, -1], [4, -1]], dash: 2, }
  //    ],
  // },

  // board_15: {
  //    artifact: "artifact_18",
  //    style: {
  //       grid: true,
  //       height: "550px",
  //       width: "600px",
  //       boundingbox: [-4, 4, 4, -4],
  //       axis: [false, true, true],
  //       valueAxis: {
  //          yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
  //          xd: [[0, 0], [1, 0]],
  //       },
  //    },

  //    curves: [
  //       {
  //          dash: 2,
  //          points: [[-4, 1], [4, 1]]
  //       }, {
  //          interactive: true,
  //          strokeColor: "black",
  //          points: [
  //                [-1.56, -0.84],
  //                [-0.50, -0.65],
  //                [0.50, 0.65],
  //                [1.56, 0.84],
  //          ],
  //       },
  //    ],

  //    points: [
  //       [0, 1, true, "1", true, "black"],
  //       [0, -1, true, "-1", true, "black"],
  //    ],
  //    lines: [
  //       { points: [[-4, -1], [4, -1]], dash: 2, }
  //    ],
  // },
  // board_16: {
  //    artifact: "artifact_19",
  //    style: {
  //       grid: true,
  //       height: "550px",
  //       width: "600px",
  //       boundingbox: [-4, 4, 4, -4],
  //       axis: [false, true, true],
  //       valueAxis: {
  //          yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
  //          xd: [[0, 0], [1, 0]],
  //       },
  //    },

  //    curves: [
  //       {
  //          dash: 2,
  //          points: [[-4, 1], [4, 1]]
  //       }, {
  //          interactive: true,
  //          strokeColor: "black",
  //          points: [
  //                   [-1.50, 0,],
  //                [-0.50, 1,],



  //                [0.50, -1,],
  //                [1.50, 0,],
  //          ],
  //       },
  //    ],

  //    points: [
  //       [0, 1, true, "1", true, "black"],
  //       [0, -1, true, "-1", true, "black"],
  //    ],
  //    lines: [
  //       { points: [[-4, -1], [4, -1]], dash: 2, }
  //    ],
  // },

  // board_17: {
  //    artifact: "artifact_20",
  //    style: {
  //       grid: true,
  //       height: "550px",
  //       width: "600px",
  //       boundingbox: [-4, 4, 4, -4],
  //       axis: [false, true, true],
  //       valueAxis: {
  //          yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
  //          xd: [[0, 0], [1, 0]],
  //       },
  //    },

  //    curves: [
  //       {
  //          dash: 2,
  //          points: [[-4, 1], [4, 1]]
  //       }, {
  //          interactive: true,
  //          strokeColor: "black",
  //          points: [
  //                     [-1.40, 0.22],
  //                [-0.50, 0.50],
  //                [0, 1],
  //                [0.60, 3.29],
  //          ],
  //       },
  //    ],

  //    points: [
  //       [0, 1, true, "1", true, "black"],
  //       [0, -1, true, "-1", true, "black"],
  //    ],
  //    lines: [
  //       { points: [[-4, -1], [4, -1]], dash: 2, }
  //    ],
  // },



};

const rDef = {

  //  artifact_a: { //fino
  //      maxCurves: 4,
  //      conditions: {
  //         asymptotes: asynCond_2,
  //         /* operation: {
  //            curves: [[0, 1], [0, 2], [0, 3], [0, 4]],
  //            type: 4, //suma: 1 / Multipicacion: 2
  //            noise: 30,
  //            fake: true,
  //            minPoints: 3,
  //         }, */
  //         reciprocalCurves: {
  //            curves: [
  //               {
  //                  mode: true,
  //                  points: [
  //                     [-1.9821239194659406, 0.5432493475419057],
  //                     [-1.5615141955835963, 0.6276367284074614]
  //                  ],
  //               }, {
  //                  mode: true,
  //                  points: [
  //                     [-0.9936903703852031, 0.4799577254283277],
  //                     [-0.4468971998533616, 0.733122282390353]
  //                  ],
  //               }, {
  //                  mode: true,
  //                  points: [
  //                     [1.0042069010930106, 0.5010544499264488],
  //                     [1.4037859703088034, 0.5854427965381477],
  //                     [1.5720292822419657, 0.7964134216308594]
  //                  ],
  //               }, {
  //                  mode: true,
  //                  points: [
  //                     [2, 0.4799577254283277],
  //                     [2.6866457966223876, 0.6698311431498467],
  //                     [3, 0.922995700111872]
  //                  ],
  //               },
  //            ]
  //         }
  //      },
  //   },
  //   artifact_b: {//fino
  //      maxCurves: 4,
  //      conditions: {
  //         asymptotes: asynCond_1,
  //         /* operation: {
  //            curves: [[0, 1], [0, 2], [0, 3], [0, 4]],
  //            type: 4, //suma: 1 / Multipicacion: 2
  //            noise: 30,
  //            fake: true,
  //            minPoints: 3,
  //         }, */
  //         reciprocalCurves: {
  //            curves: [
  //               {
  //                  mode: true,
  //                  points: [
  //                     [-1.9721472038412993, -0.540194801959513],
  //                     [-1.5947887132752616, -0.3763443936583817],
  //                  ],
  //               },
  //               {
  //                  mode: true,
  //                  points: [
  //                     [-0.9838272790488957, -0.49923233661173066],
  //                     [-0.4986520083445423, -0.41730685900616393],
  //                  ],
  //               },
  //               {
  //                  mode: true,
  //                  points: [
  //                     [1.0107819539196086, -0.5197135692856218],
  //                     [1.3342322943345555, -0.47875110393783954],
  //                     [1.5858046213785808, -0.3558631609844905],
  //                  ],
  //               },
  //               {
  //                  mode: true,
  //                  points: [
  //                     [2.0350406454794063, -0.4787505570278373],
  //                     [2.5561551627872876, -0.4582698712639484],
  //                     [3.005391186888113, -0.3353819283105994],
  //                  ],
  //               },
  //            ],
  //         },
  //      },
  //   },
  //   artifact_c: {//fino
  //        maxCurves: 8,
  //        buttonsActive: { points: true, infinities: true },
  //        conditions: {
  //           asymptotes: asynCond_2,
  //           reciprocalCurves: {
  //              curves: [
  //                 {
  //                    infinities: [false, true],
  //                    points: [
  //                       [-3.4995507294276975, 3.303635463919691],
  //                       [-3.4456420994404726, 3.8443421941504257],
  //                    ],
  //                 },
  //                 {
  //                    infinities: [true, false],
  //                    points: [
  //                       [-2.5471695714026876, 3.827956989247312],
  //                       [-2.49326118133353, 3.287250477780578],
  //                    ],
  //                 },
  //                 {
  //                    infinities: [false, true],
  //                    points: [
  //                       [-1.4869718731574293, 2.041986718399978],
  //                       [-1.3971249562389445, 3.811572003108199],
  //                    ],
  //                 },
  //                 {
  //                    infinities: [true, false],
  //                    points: [
  //                       [-0.5705299617359473, 3.8771123851926523],
  //                       [-0.4806825649813286, 2.009216746121752],
  //                    ],
  //                 },
  //                 {
  //                    infinities: [false, true],
  //                    points: [
  //                       [0.507637359811075, 1.468510015891017],
  //                       [0.6154541399493907, 3.8607271802895387],
  //                    ],
  //                 },
  //                 {
  //                    infinities: [true, false],
  //                    points: [
  //                       [1.40610988784886, 3.8607271802895387],
  //                       [1.5139261881510417, 1.4357400436127912],
  //                    ],
  //                 },
  //                 {
  //                    infinities: [false, true],
  //                    points: [
  //                       [2.0170708422390917, 1.0097286538838486],
  //                       [2.196765635748329, 2.5663084624915995],
  //                       [2.250674265735554, 3.8443421941504257],
  //                    ],
  //                 },
  //                 {
  //                    infinities: [true, false],
  //                    points: [
  //                       [2.8077285094830975, 3.827957426775314],
  //                       [2.8796050833456173, 2.5826934486307125],
  //                       [2.951482616880405, 1.0424990636900762],
  //                    ],
  //                 },
  //              ],
  //           },

  //         //    operation: {
  //         //       curves: [[0, 1], [0, 2], [0, 3], [0, 4]],
  //         //       type: 4, //suma: 1 / Multipicacion: 2
  //         //       noise: 36,
  //         //       minPoints: 3,
  //         //       fake: true,
  //         //    }, 
  //        },
  //     },
  artifact_1: {//fino
    showStripes: true,
    maxCurves: 8,
    buttonsActive: { points: true, infinities: true },
    conditions: {
      // operation: {
      //    fake: true,
      //    curves: [[0, 1]],
      //    type: 4, //suma: 1 / Multipicacion: 2
      //    noise: 26,
      // },
      inverseCurve: [
        {
          points: [[2.2, 2], [0.9, 0.5], [1.55, 1.25], [0.6, 0.2, false]],
          zones: [[2, 5], [3, 4]]
        },
        {
          points: [[-2.2, -3], [-0.9, -1.5], [-1.55, -2.25], [0, -0.5], [0.3, -0.15, false]],
          zones: [[-2, -5], [-3, -4]]

        }
      ]
    },
  },
  artifact_2: {//fino
    showStripes: true,

    maxCurves: 8,
    buttonsActive: { points: true, infinities: true },
    conditions: {
      // operation: {
      //    fake: true,
      //    curves: [[0, 1]],
      //    type: 4, //suma: 1 / Multipicacion: 2
      //    noise: 26,
      // },
      inverseCurve: [
        {
          points: [[-2.2, 3], [-0.9, 1.5], [-1.55, 2.25], [-0.4, 0.85], [0, 0.4], [0.2, 0.2, false]],
          zones: [[2, 5], [3, 4]]
        },
        {
          points: [[0.5, -0.2, false], [1.15, -1], [0.75, -0.5], [1.5, -1.4], [2, -2]],
          zones: [[-2, -5], [-3, -4]]

        }
      ]
    },
  },
  artifact_3: {//fino
    showStripes: true,

    maxCurves: 8,
    buttonsActive: { points: true, infinities: true },
    conditions: {
      // operation: {
      //    fake: true,
      //    curves: [[0, 1]],
      //    type: 4, //suma: 1 / Multipicacion: 2
      //    noise: 26,
      // },
      inverseCurve: [
        {
          points: [[0.1, 0.1, false], [0.5, 0.5], [1, 1], [1.5, 1.5], [2, 2]],
          zones: [[2, 5], [3, 4]]
        },
        {
          points: [[-0.1, -0.1, false], [-0.5, -0.5], [-1, -1], [-1.5, -1.5], [-2, -2]],
          zones: [[-2, -5], [-3, -4]]

        }
      ]
    },
  },
  artifact_4: {//fino
    showStripes: true,

    maxCurves: 8,
    buttonsActive: { points: true, infinities: true },
    conditions: {
      // operation: {
      //    fake: true,
      //    curves: [[0, 1]],
      //    type: 4, //suma: 1 / Multipicacion: 2
      //    noise: 26,
      // },
      inverseCurve: [
        {
          points: [[-0.1, 0.1, false], [-0.5, 0.5], [-1, 1], [-1.5, 1.5], [-2, 2]],
          zones: [[2, 5], [3, 4]]
        },
        {
          points: [[0.1, -0.1, false], [0.5, -0.5], [1, -1], [1.5, -1.5], [2, -2]],
          zones: [[-2, -5], [-3, -4]]

        }
      ]
    },
  },
  artifact_5: {//fino
    showStripes: true,

    maxCurves: 8,
    buttonsActive: { points: true, infinities: true },
    conditions: {
      // operation: {
      //    fake: true,
      //    curves: [[0, 1]],
      //    type: 4, //suma: 1 / Multipicacion: 2
      //    noise: 26,
      // },
      inverseCurve: [
        {
          points: [
            /*  [-0.70, 3,],
                   [-0.35, 2,],
                   [0, 1.7,],
                   [0.35, 2,],
                   [0.70,3,], */
            [-1.2, 3.1399999999999997],
            [-0.8, 2.34],
            [-5.551115123125783e-17, 1.7],
            [0.8, 2.34],
            [1.2, 3.1399999999999997],

          ],
          zones: [[2, 5]]
        }
      ]
    },
  },
  artifact_6: {//fino
    showStripes: true,

    maxCurves: 8,
    buttonsActive: { points: true, infinities: true },
    conditions: {
      // operation: {
      //    fake: true,
      //    curves: [[0, 1]],
      //    type: 4, //suma: 1 / Multipicacion: 2
      //    noise: 26,
      // },
      inverseCurve: [
        {
          points: [
            [-1.2, 2.44],
            [-1, 2],

            [-0.6000000000000001, 1.36],

            [-5.551115123125783e-17, 1],

            [0.6, 1.3599999999999999],

            [1, 2],
            [1.2, 2.44]
          ],
          zones: [[3, 4], [2, 5]]
        }
      ]
    },
  },

  //   artifact_7: {//fino
  //       showStripes:true,
  //      maxCurves: 8,
  //      buttonsActive: { points: true, infinities: true },
  //      conditions: {
  //          // operation: {
  //          //    fake: true,
  //          //    curves: [[0, 1]],
  //          //    type: 4, //suma: 1 / Multipicacion: 2
  //          //    noise: 26,
  //          // },
  //         reciprocalCurves: {
  //            curves: [

  //                {
  //                  infinities: [false, false],
  //                  points: [
  //                     [-0.53, 0.38],
  //                     [-0.38,0.70],
  //                     [0,1],
  //                     [0.38,0.70],
  //                     [0.53, 0.38],

  //                  ],
  //               },

  //            ],
  //         },
  //      },
  //   },
  artifact_7: {//fino
    showStripes: true,
    maxCurves: 8,
    buttonsActive: { points: true, infinities: true },
    conditions: {
      // operation: {
      //    fake: true,
      //    curves: [[0, 1]],
      //    type: 4, //suma: 1 / Multipicacion: 2
      //    noise: 26,
      // },
      inverseCurve: [
        {
          points: [
            [-1.2, 1.94],
            [-1, 1.5],
            [-0.8, 1.1400000000000001],
            [-0.6000000000000001, 0.8600000000000001],


            [-5.551115123125783e-17, 0.5],

            [0.6, 0.86],
            [0.8, 1.1400000000000001],
            [1, 1.5],
            [1.2, 1.94],
          ],
          zones: [[2, 5], [3, 4]]
        }
      ]
    },
  },
  artifact_8: {//fino
    showStripes: true,
    maxCurves: 8,
    buttonsActive: { points: true, infinities: true },
    conditions: {
      //  operation: {
      //     fake: true,
      //     curves: [[0, 1]],
      //     type: 4, //suma: 1 / Multipicacion: 2
      //     noise: 26,
      //  },
      inverseCurve: [
        {
          points: [
            [-1.2, 1.44],
            [-1, 1],
            [-0.8, 0.6400000000000001],
            [-0.6000000000000001, 0.3600000000000001],
            [-0.4000000000000001, 0.16000000000000006],
            [-0.20000000000000007, 0.04000000000000003, false],

            [0.19999999999999996, 0.03999999999999998, false],
            [0.39999999999999997, 0.15999999999999998],
            [0.6, 0.36],
            [0.8, 0.6400000000000001],
            [1, 1],
            [1.2, 1.44],
          ],
          zones: [[1, 6], [2, 5], [3, 4]]
        }
      ]
    },
  },
  //   artifact_10: {//fino

  //      maxCurves: 8,
  //      buttonsActive: { points: true, infinities: true },
  //      conditions: {
  //          // operation: {
  //          //    fake: true,
  //          //    curves: [[0, 1]],
  //          //    type: 4, //suma: 1 / Multipicacion: 2
  //          //    noise: 26,
  //          // },
  //         reciprocalCurves: {
  //            curves: [

  //                {
  //                  infinities: [false, true],
  //                  points: [
  //                     [-0.50, 0.78],
  //                     [-0.40,2],
  //                     [-0.27,4],



  //                  ],
  //               },


  //               {
  //                  infinities: [true, false],
  //                  points: [
  //                     [0.27,4],
  //                     [0.40,2],
  //                     [0.50, 0.78],



  //                  ],
  //               },

  //            ],
  //         },
  //      },
  //   },
  //   artifact_11: {//fino

  //      maxCurves: 8,
  //      buttonsActive: { points: true, infinities: true },
  //      conditions: {
  //          // operation: {
  //          //    fake: true,
  //          //    curves: [[0, 1]],
  //          //    type: 4, //suma: 1 / Multipicacion: 2
  //          //    noise: 26,
  //          // },
  //         reciprocalCurves: {
  //            curves: [

  //                {
  //                  infinities: [false, true],
  //                  points: [
  //                     [-0.54, 1.40],
  //                     [-0.49,4],
  //                  ],
  //               },


  //               {
  //                  infinities: [true, true],
  //                  points: [
  //                     [-0.45,-4],
  //                     [-0.45,4],




  //                  ],
  //               },

  //               {
  //                  infinities: [true, true],
  //                  points: [
  //                     [-0.39,-4],

  //                     [-0.29,-1.76],
  //                     [0,-1],

  //                     [0.29,-1.76],

  //                     [0.39,-4],

  //                  ],
  //               },










  //               {
  //                  infinities: [true, true],
  //                  points: [
  //                     [0.45,-4],
  //                     [0.45,4],




  //                  ],
  //               },



  //               {
  //                  infinities: [true, false],
  //                  points: [
  //                     [0.54, 1.40],
  //                     [0.49,4],
  //                  ],
  //               },


  //            ],
  //         },
  //      },
  //   },
  //   artifact_12: {//fino

  //      maxCurves: 8,
  //      buttonsActive: { points: true, infinities: true },
  //      conditions: {
  //          // operation: {
  //          //    fake: true,
  //          //    curves: [[0, 1]],
  //          //    type: 4, //suma: 1 / Multipicacion: 2
  //          //    noise: 26,
  //          // },
  //         reciprocalCurves: {
  //            curves: [

  //                {
  //                  infinities: [false, true],
  //                  points: [
  //                     [-0.95, 1.23],
  //                     [-0.88,4],
  //                  ],
  //               },



  //                {
  //                  infinities: [true, true],
  //                  points: [
  //                     [-0.83, 4],
  //                     [-0.83,-4],
  //                  ],
  //               },



  //               {
  //                  infinities: [true, true],
  //                  points: [
  //                     [-0.80, -4],
  //                     [-0.55, -1],

  //                     [-0, -0.63],
  //                     [0.55, -1],
  //                     [0.80,-4],
  //                  ],
  //               },




  //               {
  //                  infinities: [true, true],
  //                  points: [
  //                     [0.83, 4],
  //                     [0.83,-4],
  //                  ],
  //               },


  //               {
  //                  infinities: [true, false],
  //                  points: [
  //                     [0.95, 1.23],
  //                     [0.88,4],
  //                  ],
  //               },






  //            ],
  //         },
  //      },
  //   },

  //   artifact_13: {//fino

  //      maxCurves: 8,
  //      buttonsActive: { points: true, infinities: true },
  //      conditions: {
  //          // operation: {
  //          //    fake: true,
  //          //    curves: [[0, 1]],
  //          //    type: 4, //suma: 1 / Multipicacion: 2
  //          //    noise: 26,
  //          // },
  //         reciprocalCurves: {
  //            curves: [

  //                {
  //                  infinities: [false, true],
  //                  points: [
  //                     [-1, -1],
  //                     [-0.95, -1.23],
  //                     [-0.88,-4],
  //                  ],
  //               },



  //                {
  //                  infinities: [true, true],
  //                  points: [
  //                     [-0.83, 4],
  //                     [-0.83,-4],
  //                  ],
  //               },



  //               {
  //                  infinities: [true, true],
  //                  points: [
  //                     [-0.80, 4],
  //                     [-0.59, 1],

  //                     [-0, 0.54],
  //                     [0.59, 1],
  //                     [0.80,4],
  //                  ],
  //               },




  //               {
  //                  infinities: [true, true],
  //                  points: [
  //                     [0.83, 4],
  //                     [0.83,-4],
  //                  ],
  //               },


  //               {
  //                  infinities: [true, false],
  //                  points: [
  //                      [1, -1],
  //                     [0.95, -1.23],
  //                     [0.88,-4],
  //                  ],
  //               },






  //            ],
  //         },
  //      },
  //   },
  //   artifact_14: {//fino


  //    maxCurves: 8,
  //    buttonsActive: { points: true, infinities: true },
  //    conditions: {
  //       //  operation: {
  //       //     fake: true,
  //       //     curves: [[0, 1]],
  //       //     type: 4, //suma: 1 / Multipicacion: 2
  //       //     noise: 26,
  //       //  },
  //       reciprocalCurves: {
  //          curves: [


  //             {
  //                infinities: [true, true],
  //                points: [
  //                   [-1.10, -4],
  //                   [-0.62, -1.68],

  //                   [-0, -1],
  //                   [0.62, -1.68],
  //                   [1.10,-4],
  //                ],
  //             },






  //            ],
  //         },
  //      },
  //   },
  //    artifact_15: {//fino

  //    maxCurves: 8,
  //    buttonsActive: { points: true, infinities: true },
  //    conditions: {
  //       //  operation: {
  //       //     fake: true,
  //       //     curves: [[0, 1]],
  //       //     type: 4, //suma: 1 / Multipicacion: 2
  //       //     noise: 26,
  //       //  },
  //       reciprocalCurves: {
  //          curves: [

  //             {
  //                infinities: [false, true],
  //                points: [
  //                   [-1.54, -1.19],
  //                   [-0.66,-1.34],
  //                   [-0.26,-2.43],
  //                   [-0.16,-4],
  //                ],
  //             },


  //  {
  //                infinities: [true, true],
  //                points: [
  //                   [0, 4],
  //                   [0,-4],

  //                ],
  //             },


  //  {
  //                infinities: [true, false],
  //                points: [
  //                   [0.16,4],
  //                   [0.26,2.49],
  //                   [0.60,1.36],

  //                   [1.51, 1.22],
  //                ],
  //             },









  //          ],
  //       },
  //    },
  // },

  // artifact_16: {//fino

  //    maxCurves: 8,
  //    buttonsActive: { points: true, infinities: true },
  //    conditions: {
  //       //  operation: {
  //       //     fake: true,
  //       //     curves: [[0, 1]],
  //       //     type: 4, //suma: 1 / Multipicacion: 2
  //       //     noise: 26,
  //       //  },
  //       reciprocalCurves: {
  //          curves: [


  //             {
  //                infinities: [false, true],
  //                points: [
  //                   [-1.30, 4],

  //                   [-1, 1.54],



  //                   [-0.58, 1],
  //                   [-0.26, 1.35],
  //                   [-0.1,4],

  //                ],
  //             },

  //             {
  //                infinities: [true, true],
  //                points: [
  //                   [0, 4],
  //                   [0,-4],

  //                ],
  //             },




  //             {
  //                infinities: [true, true],
  //                points: [
  //                   [1.30, -4],

  //                   [1, -1.54],



  //                   [0.58, -1],
  //                   [0.26, -1.35],
  //                   [0.1,-4],

  //                ],
  //             },









  //          ],
  //       },
  //    },
  // },
  // artifact_27: {//fino

  //    maxCurves: 8,
  //    buttonsActive: { points: true, infinities: true },
  //    conditions: {
  //       //  operation: {
  //       //     fake: true,
  //       //     curves: [[0, 1]],
  //       //     type: 4, //suma: 1 / Multipicacion: 2
  //       //     noise: 26,
  //       //  },
  //       reciprocalCurves: {
  //          curves: [


  //             {
  //                infinities: [true, false],
  //                points: [

  //                   [-1.3, 4],

  //                   [-1, 3.2],

  //                   [-0.18, 1.38],
  //                   [0.25, 0.55],
  //                   [0.57,0.28],

  //                ],
  //             },







  //          ],
  //       },
  //    },
  // },
};


//generator(rDef);
//mainOperation(defBoards, rDef);
colorInitMain(rDef, defBoards)
