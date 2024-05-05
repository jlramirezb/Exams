
const genericStyles = {
  grid: false,
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

const defBoards = {
  board_1: {
    artifact: 'artifact_1',
    style: {
      grid: false,
      fillColor: 'red',
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
        points: [[-8, 1], [8, 1]],
      },
      {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-3.4642857142857144, -1.5827338129496402],
          [-3.0357142857142856, -1.2949640287769784],
          [-2.0535714285714284, 0.5467625899280576],
          [-1.7857142857142858, 0.4892086330935252],
          [-0.8, -2],
          [-0.49, -1.95],
          [0.44, 0],
          [1.8571428571428572, 2.935251798561151],
          [2.1785714285714284, 2.906474820143885],
          [2.892857142857143, 0.8633093525179856],
          [3.392857142857143, -1.6978417266187051],
          [3.5357142857142856, -2.0719424460431655],
        ],
      },
    ],

    points: [
      [0, 1, true, '1', true, 'black'],
      [0, -1, true, '-1', true, 'black'],
      /*          [-2.4, 0, true],
         [-1.55,0, true] */
    ],
    lines: [{ points: [[-8, -1], [8, -1]], dash: 2 },
      { points: [[-2.4, 8], [-2.4, -8]], dash: 2 },
      { points: [[-1.55, 8], [-1.55, -8]], dash: 2 },
      { points: [[0.45, 8], [0.45, -8]], dash: 2 },
      { points: [[3.07, 8], [3.07, -8]], dash: 2 }

    ],
  },
  /////////////////////////
  board_2: {
    //1
    points: [
      [0, 1, true, '1', true, 'black'],
      [0, -1, true, '-1', true, 'black'],
    ],
    //asymptotes: asynVisual_1,
    artifact: 'artifact_2',
    style: {
      ...genericStyles,
      boundingbox: [-5, 7, 5, -2],

    },

    curves: [
      {
        dash: 2,
        points: [[-8, 1], [8, 1]],
      },
      {
        points: [[-2, 1], [-1.72, 0.78], [-1.6, 0.5]],
      },
      {
        points: [[-1, 1], [-0.68, 0.7], [-0.5, 0.4]],
      },
      {
        points: [[2, 1], [2.6, 0.6], [3, 0]],
      },
      {
        points: [[1, 1], [1.4, 0.7], [1.6, 0.2]],
      },
    ],

    lines: [
      { points: [[-8, -1], [8, -1]], dash: 2 },
      { points: [[3, 8], [3, -8]], dash: 2, strokeColor: '#6a019f', opacity: 0.4, strokeWidth: 3 }
    ],
  },
  board_3: {
    //2
    points: [
      [0, 1, true, '1', true, 'black'],
      [0, -1, true, '-1', true, 'black'],
    ],
    //asymptotes: asynVisual_1,
    artifact: 'artifact_3',
    style: {
      ...genericStyles,
    },
    lines: [{ points: [[-8, -1], [8, -1]], dash: 2 },
      { points: [[3, 8], [3, -8]], dash: 2, strokeColor: '#6a019f', opacity: 0.4, strokeWidth: 3 }
    ],
    curves: [
      {
        dash: 2,
        points: [[-8, 1], [8, 1]],
      },
      {
        points: [[-2, -1], [-1.72, -0.78], [-1.6, -0.5]],
      },
      {
        points: [[-1, -1], [-0.68, -0.7], [-0.5, -0.4]],
      },
      {
        points: [[2, -1], [2.6, -0.6], [3, 0]],
      },
      {
        points: [[1, -1], [1.4, -0.7], [1.6, -0.2]],
      },
    ],
  },
  board_4: {
    //3
    points: [
      [0, 1, true, '1', true, 'black'],
      [0, -1, true, '-1', true, 'black'],
    ],
    //asymptotes: asynVisual_2,
    artifact: 'artifact_4',
    style: {
      ...genericStyles,
    },
    lines: [{ points: [[-8, -1], [8, -1]], dash: 2 },
      { points: [[3, 8], [3, -8]], dash: 2, strokeColor: '#6a019f', opacity: 0.4, strokeWidth: 2 },
      { points: [[2, 8], [2, -8]], dash: 2, strokeColor: '#6a019f', opacity: 0.4, strokeWidth: 2 },
      { points: [[1.55, 8], [1.55, -8]], dash: 2, strokeColor: '#6a019f', opacity: 0.4, strokeWidth: 2 },
      { points: [[0.45, 8], [0.45, -8]], dash: 2, strokeColor: '#6a019f', opacity: 0.4, strokeWidth: 2 },
      { points: [[-0.45, 8], [-0.45, -8]], dash: 2, strokeColor: '#6a019f', opacity: 0.4, strokeWidth: 2 },
      { points: [[-1.5, 8], [-1.5, -8]], dash: 2, strokeColor: '#6a019f', opacity: 0.4, strokeWidth: 2 },
      { points: [[-2.5, 8], [-2.5, -8]], dash: 2, strokeColor: '#6a019f', opacity: 0.4, strokeWidth: 2 },
      { points: [[-3.5, 8], [-3.5, -8]], dash: 2, strokeColor: '#6a019f', opacity: 0.4, strokeWidth: 2 },







    ],
    curves: [
      {
        dash: 2,
        points: [[-8, 1], [8, 1]],
      },
      {
        points: [[-3.5, 0], [-3.2, 0.3], [-2.8, 0.3], [-2.5, 0]],
      },
      {
        points: [[-1.5, 0], [-1.2, 0.4], [-0.8, 0.4], [-0.5, 0]],
      },
      {
        points: [[1.5, 0], [1.2, 0.6], [0.8, 0.6], [0.5, 0]],
      },
      {
        points: [[3, 0], [2.7, 0.9], [2.5, 1], [2.3, 0.9], [2, 0]],
      },
    ],
  },
  /////////////////////////////
  board_5: {
    //4
    points: [
      [0, 1, true, '1', true, 'black'],
      [0, -1, true, '-1', true, 'black'],
    ],
    //asymptotes: asynVisual_1,
    artifact: 'artifact_5',
    style: {
      ...genericStyles,
    },

    curves: [
      {
        dash: 2,
        points: [[-8, 1], [8, 1]],
      },
      {
        points: [[-2, 1 - 0.5], [-1.72, 0.78 - 0.5], [-1.6, 0.5 - 0.5]],
      },
      {
        points: [[-1, 1 - 0.4], [-0.68, 0.7 - 0.4], [-0.5, 0.4 - 0.4]],
      },
      {
        points: [[2, 1], [2.6, 0.6], [3, 0]],
      },
      {
        points: [[1, 1 - 0.2], [1.4, 0.7 - 0.2], [1.6, 0.2 - 0.2]],
      },
    ],

    lines: [{ points: [[-8, -1], [8, -1]], dash: 2 },
      { points: [[-1.55, 8], [-1.55, -8]], dash: 2, strokeColor: '#6a019f', opacity: 0.4, strokeWidth: 2 },
      { points: [[-0.5, 8], [-0.5, -8]], dash: 2, strokeColor: '#6a019f', opacity: 0.4, strokeWidth: 2 },
      { points: [[1.65, 8], [1.65, -8]], dash: 2, strokeColor: '#6a019f', opacity: 0.4, strokeWidth: 2 },
      { points: [[3, 8], [3, -8]], dash: 2, strokeColor: '#6a019f', opacity: 0.4, strokeWidth: 2 },




    ],
  },
  board_6: {
    //6 verificado resultado
    points: [
      [0, 1, true, '1', true, 'black'],
      [0, -1, true, '-1', true, 'black'],
    ],
    artifact: 'artifact_6',
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-5, 5, 5, -5],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
        xd: [[0, 0], [1, 0]],
        colory: '#000000',
        colorx: '#000000',
      },
    },
    lines: [
      { points: [[-1, 8], [-1, -8]], dash: 2, strokeColor: '#6a019f', opacity: 0.4, strokeWidth: 2 },
      { points: [[-2, 8], [-2, -8]], dash: 2, strokeColor: '#6a019f', opacity: 0.4, strokeWidth: 2 },
      { points: [[1, 8], [1, -8]], dash: 2, strokeColor: '#6a019f', opacity: 0.4, strokeWidth: 2 },
      { points: [[2, 8], [2, -8]], dash: 2, strokeColor: '#6a019f', opacity: 0.4, strokeWidth: 2 },



    ],

    curves: [
      {
        dash: 2,
        points: [[-8, 1], [8, 1]],
      },
      {
        points: [[-2, 0], [-1.72, -0.22], [-1.6, -0.5]],
      },
      {
        points: [[-1, 0], [-0.68, -0.3], [-0.5, -0.6]],
      },
      {
        points: [[2, 0], [2.6, -0.3], [3, -1]],
      },
      {
        points: [[1, 0], [1.4, -0.3], [1.6, -0.8]],
      },
      {
        dash: 2,
        points: [[-8, -1], [8, -1]],
      },
    ],
    //asymptotes: asynVisual_1
  },
  board_7: {
    //verificado resultado bien
    points: [
      [0, 1, true, '1', true, 'black'],
      [0, -1, true, '-1', true, 'black'],
    ],
    artifact: 'artifact_7',
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-5, 5, 5, -5],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
        xd: [[0, 0], [1, 0]],
        colory: '#000000',
        colorx: '#000000',
      },
    },

    curves: [
      {
        dash: 2,
        points: [[-8, 1], [8, 1]],
      },
      {
        points: [[-3.5, 1], [-3.2, 1.2], [-2.8, 1.2], [-2.5, 1]],
      },
      {
        points: [[-1.5, 1], [-1.2, 1.5], [-0.8, 1.5], [-0.5, 1]],
      },
      {
        points: [[1.5, 1], [1.2, 1.7], [0.8, 1.7], [0.5, 1]],
      },
      {
        points: [[3, 1], [2.7, 1.9], [2.5, 2], [2.3, 1.9], [2, 1]],
      },
      {
        dash: 2,
        points: [[-8, -1], [8, -1]],
      },
    ],
    //asymptotes: asynVisual_2
  },
  // board_8: {
  //    //verificado resultado bien
  //    artifact: "artifact_8",
  //    points: [
  //       [0, 1, true, "1", true, "black"],
  //       [0, -1, true, "-1", true, "black"],
  //    ],
  //    style: {
  //       grid: false,
  //       maxHeight: 300,
  //       maxWidth: 300,
  //       boundingbox: [-4, 5, 4, -5],
  //       axis: [false, true, true],
  //       valueAxis: {
  //          yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
  //          xd: [[0, 0], [1, 0]],
  //          colory: "#000000",
  //          colorx: "#000000",
  //       },
  //    },

  //    curves: [
  //       {
  //          dash: 2,
  //          points: [[-8, 1], [8, 1]],
  //       },
  //       {
  //          points: [[-2, 2], [-1.72, 1.78], [-1.6, 1.5]],
  //       },
  //       {
  //          points: [[-1, 2], [-0.68, 1.7], [-0.5, 1.4]],
  //       },
  //       {
  //          points: [[2, 2], [2.6, 1.6], [3, 1]],
  //       },
  //       {
  //          points: [[1, 2], [1.4, 1.7], [1.6, 1.2]],
  //       },
  //    ],
  //    lines: [{ points: [[-8, -1], [8, -1]], dash: 2 }],
  //    //asymptotes: asynVisual_1
  // },
  // board_9: {
  //    //9
  //    points: [
  //       [0, 1, true, "1", true, "black"],
  //       [0, -1, true, "-1", true, "black"],
  //    ],
  //    artifact: "artifact_9",
  //    style: {
  //       grid: false,
  //       maxHeight: 300,
  //       maxWidth: 300,
  //       boundingbox: [-5, 5, 5, -5],
  //       axis: [false, true, true],
  //       valueAxis: {
  //          yd: [[0, 0], [0, 1]] /*dirección del eje y*/,
  //          xd: [[0, 0], [1, 0]],
  //          colory: "#000000",
  //          colorx: "#000000",
  //       },
  //    },
  //    lines: [{ points: [[-8, -1], [8, -1]], dash: 2 }],
  //    curves: [
  //       {
  //          dash: 2,
  //          points: [[-8, 1], [8, 1]],
  //       },
  //       {
  //          points: [[-2, -2], [-1.72, -2.22], [-1.6, -2.5]],
  //       },
  //       {
  //          points: [[-1, -2], [-0.68, -2.3], [-0.5, -2.6]],
  //       },
  //       {
  //          points: [[2, -2], [2.6, -2.3], [3, -3]],
  //       },
  //       {
  //          points: [[1, -2], [1.4, -2.3], [1.6, -2.8]],
  //       },
  //    ],
  //    //asymptotes: asynVisual_1,
  // },
  // board_10: {
  //    //10
  //    points: [
  //       [0, 1, true, "1", true, "black"],
  //       [0, -1, true, "-1", true, "black"],
  //    ],
  //    artifact: "artifact_10",
  //    style: {

  //       ...genericStyles,

  //    },

  //    lines: [{ 
  //       points: [[-8, -1], [8, -1]], dash: 2 },
  //    { points: [[2.5,8],[2.5,-8]], dash:2, strokeColor:'#6a019f', opacity: 0.4, strokeWidth:2},
  //    { points: [[1,8],[1,-8]], dash:2, strokeColor:'#6a019f', opacity: 0.4, strokeWidth:2},
  //    { points: [[-1,8],[-1,-8]], dash:2, strokeColor:'#6a019f', opacity: 0.4, strokeWidth:2},
  //    { points: [[-3,8],[-3,-8]], dash:2, strokeColor:'#6a019f', opacity: 0.4, strokeWidth:2},



  // ],
  //    curves: [
  //       {
  //          dash: 2,
  //          points: [[-8, 1], [8, 1]],
  //       },
  //       {
  //          points: [
  //             [-3.5, 0.3],
  //             [-3.3, 0.15],
  //             [-3, 0.0],
  //             [-2.7, 0.15],
  //             [-2.5, 0.3],
  //          ],
  //       },
  //       {
  //          points: [
  //             [-1.5, 0.5],
  //             [-1.3, 0.1],
  //             [-1, 0],
  //             [-0.7, 0.1],
  //             [-0.5, 0.5],
  //          ],
  //       },
  //       {
  //          points: [[1.5, 0.7], [1.3, 0.1], [1, 0], [0.7, 0.1], [0.5, 0.7]],
  //       },
  //       {
  //          points: [[3, 1], [2.7, 0.1], [2.5, 0], [2.3, 0.1], [2, 1]],
  //       },
  //    ],
  //    /* asymptotes: asynCond_2, */
  // },
};
//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const rDef = {
  artifactHtml: {
    /* datadefault: [
         {
            type: 10, //tipo 10 genera los contenedores con los dataset y clases para los boards
            classGlobal: "operationCurves",
            contents: [{ dataSet: { board: "board_1" } }],
         },
         [
            1,
            `Grafique 1 / f para cada curvas f que aparecen en las gráficas. 
         En los casos en que 1 / f se sale del recuadro, utilice puntos suspensivos,
         pero haga notar cuales ramas llegan más arriba o más abajo.`,
         ],
         {
            type: 10, //tipo 10 genera los contenedores con los dataset y clases para los boards
            classGlobal: "operationCurves",
            contents: [
               { dataSet: { board: "board_2" } }, //fino
               { dataSet: { board: "board_3" } }, //fino
               { dataSet: { board: "board_4" } },//fino

               ///////////
               { dataSet: { board: "board_5" } },//fino
               { dataSet: { board: "board_6" } },//fino
               { dataSet: { board: "board_7" } },//fino
               ///////////////////////////////////
              //   { dataSet: { board: "board_8" } },//mall
                { dataSet: { board: "board_9" } },//mall
                { dataSet: { board: "board_10" } } //fino 
            ],
         },
      ], */
  },

  artifact_1: {
    maxCurves: 8,
    showStripes: true,
    buttonsActive: { points: true, infinities: true },
    conditions: {

      inverseCurve: [
        { //curva
          id: 1,
          points: [[-2.40, 0.01, false], [-1.95, 0.55], [-2.2, 0.4], [-1.73, 0.4], [-1.55, 0.01, false]],
          zones: [[2, 5]]
        },
        {
          points: [[0.45, 0.01, false], [0.87, 1], [1.04, 1.4], [1.39, 2.25], [2.85, 1], [2, 2.95], [2.5, 2.25], [2.75, 1.4], [3.07, 0.01, false]],
          zones: [[2, 5,], [3, 4],[1,6] ]
        },
        {
          points: [[-0.7, -2.02], [-0.2, -1.5], [-1.33, -0.7], [-1.5, -0.1, false], [0.4, -0.1, false]],
          zones: [[-3, -4], [-2, -5]]
        }

      ],

    },
  },

  artifact_2: {
    //fino
    showStripes: true,

    buttonsActive: { points: true, infinities: true },
    maxCurves: 4,
    conditions: {
      inverseCurve: [
        {
          points: [[-2, 1], [-1.75, 0.8], [-1.59, 0.5]],
          zones: [[3, 4], [2, 5]]
        },
        {
          points: [[-1, 1], [-0.75, 0.75], [-0.53, 0.4]],
          zones: [[3, 4], [2, 5]]
        },
        {
          points: [[1, 1], [1.35, 0.75], [1.56, 0.2599]],
          zones: [[3, 4], [2, 5]]
        },
        {
          points: [[2, 1], [2.39, 0.75], [2.75, 0.4], [3, 0.01, false]],
          zones: [[3, 4], [2, 5]]
        }
      ]


    },
  },
  artifact_3: {
    //fino
    showStripes: true,

    maxCurves: 4,
    buttonsActive: { points: true, infinities: true },
    conditions: {
      inverseCurve: [
        {
          points: [[-2, -1], [-1.75, -0.8], [-1.6, -0.5]],
          zones: [[-3, -4], [-2, -5]]
        },
        {
          points: [[-1, -1], [-0.75, -0.8], [-0.5, -0.4]],
          zones: [[-3, -4], [-2, -5]]
        },
        {
          points: [[1, -1], [1.3, -0.8], [1.5, -0.5], [1.59, -0.25]],
          zones: [[-3, -4], [-2, -5], [-1, -6]]
        },
        {
          points: [[2, -1], [2.3, -0.8], [2.69, -0.5], [2.95, -0.1, false]],
          zones: [[-3, -4], [-2, -5]]
        },
      ]
    },
  },

  artifact_4: {
    //fino
    showStripes: true,

    maxCurves: 4,
    maxCurves: 4,
    buttonsActive: { points: true, infinities: true },
    conditions: {

      inverseCurve: [
        {
          points: [[-3, 0.34], [-3.35, 0.2], [-2.7, 0.2], [-3.45, 0.01, false], [-2.55, 0.01, false]],
          zones: [[1, 6], [2, 5]]
        },
        {
          points: [[-1, 0.45], [-1.35, 0.2], [-0.65, 0.2], [-0.5, 0.01, false], [-1.5, 0.01, false]],
          zones: [[1, 6], [2, 5]]

        },
        {
          points: [[0.45, 0.01, false], [0.6, 0.2], [0.7, 0.45], [1, 0.65], [1.4, 0.2], [1.4, 0.2], [1.3, 0.45], [1.5, 0.01, false]],
          zones: [[1, 6], [2, 5], [3, 4]]

        },
        {
          points: [[2, 0.01, false], [2.08, 0.2], [2.13, 0.45], [2.22, 0.75], [2.5, 1], [2.77, 0.75], [2.88, 0.45], [2.95, 0.2], [3, 0.01, false]],
          zones: [[1, 6], [2, 5], [3, 4]]

        }

      ],

    },
  },
  //////////////////////////////////////

  artifact_5: {
    //fino
    showStripes: true,

    maxCurves: 4,
    buttonsActive: { points: true, infinities: true },
    conditions: {

      inverseCurve: [
        {
          points: [[-2, 1], [-1.7, 0.7]],
          zones: [[2, 5]]
        },
        {
          points: [[-1, 1], [-0.7, 0.7]],
          zones: [[2, 5]]

        },
        {
          points: [[1, 1], [1.44, 0.6], [1.6, 0.25]],
          zones: [[2, 5], [3, 4]]

        },
        {
          points: [[2, 1], [2.4, 0.75], [2.7, 0.45], [3, 0.01, false]],
          zones: [[2, 5], [3, 4]]
        }
      ]

    },
  },

  artifact_6: {
    //fino
    showStripes: true,
    maxCurves: 4,
    buttonsActive: { points: true, infinities: true },
    conditions: {
      asymptotes: asynCond_1,
      inverseCurve: [
        {
          points: [[-1.8, -0.1, false], [-1.6, -0.45]],
          zones: [[-2, -5]]

        },
        {
          points: [[-1, -0.01, false], [-0.65, -0.35], [-0.5, -0.6]],
          zones: [[-2, -5], [-3, -4]]


        },
        {
          points: [[1, -0.01, false], [1.43, -0.35], [1.58, -0.75]],
          zones: [[-2, -5], [-3, -4]]


        },
        {
          points: [[2, -0.01, false], [2.6, -0.35], [2.85, -0.7], [3, -1]],
          zones: [[-2, -5], [-3, -4]]

        },
      ]

    },
  },
  artifact_7: {
    //fino
    showStripes: true,

    maxCurves: 4,
    conditions: {
      inverseCurve: [
        {
          points: [[-3.5, 1], [-3, 1.25], [-2.55, 1]],
          zones: [[3, 4]]
        },
        {
          points: [[-1.5, 1], [-1, 1.55], [-0.5, 1]],
          zones: [[3, 4]]

        },
        {
          points: [[0.5, 1], [0.65, 1.5], [1, 1.75], [1.35, 1.5], [1.5, 1]],
          zones: [[3, 4], [2, 5]]

        },

        {
          points: [[2, 1], [2.15, 1.5], [2.5, 2], [2.85, 1.5], [3, 1]],
          zones: [[3, 4], [2, 5]]
        }
      ]
    },
  },
  //////////////////////////////////////////
  // artifact_8: {
  //    //fino
  //    showStripes:true,
  //    maxCurves: 4,
  //    conditions: {
  //          inverseCurve:[
  //             {
  //                points:[[-2,2],[-1.75,1.8],[-1.55,1.4]],
  //                zones:[[3,4],[2,5]]
  //             },
  //             {
  //                points:[[-1,2],[-0.75,1.8],[-0.5,1.4]],
  //                zones:[[3,4],[2,5]]

  //             },
  //             {points:[[1,2],[1.3,1.8],[1.56,1.25]],
  //                zones:[[3,4],[2,5]]

  //             },
  //             {
  //                points:[[2,2],[2.3,1.8],[2.75,1.4],[3,1]],
  //                zones:[[3,4],[2,5]]

  //             }
  //          ]


  //    },
  // },
  // artifact_9: {
  //    //fino
  //    maxCurves: 4,
  //    showStripes:true,
  //    conditions: {
  //       asymptotes: asynCond_1,

  //       inverseCurve:[
  //          {
  //             points:[[-2,-2],[-1.6, -2.45]],
  //             zones:[[-2,-5]]
  //          },
  //          {
  //             points:[[-1,-2],[-0.5, -2.6]],   
  //             zones:[[-2,-5]]
  //          },
  //          {
  //             points:[[1,-2],[1.55,-2.8]],   
  //             zones:[[-2,-5]]
  //          },
  //          {
  //             points:[[2,-2],[2.55,-2.25],[3,-3]],   
  //             zones:[[-2,-5]]
  //          }
  //       ]
  //    },
  // },

  // artifact_10: {
  //    //fino
  //    maxCurves: 8,
  //    showStripes:true,

  //    buttonsActive: { points: true, infinities: true },
  //    conditions: {
  //       asymptotes: asynCond_2,
  //       inverseCurve:[
  //          {
  //             points:[[-3.5, 0.3],[-3,0.01,false],[-2.5,0.3]],
  //             zones:[[2,5]]

  //          },

  //          {
  //             points:[[-1.5,0.5],[-1.4,0.25],[-1,0.01, false],[-0.6,0.25],[-0.5,0.5]],
  //             zones:[[2,5]]

  //          },

  //          {
  //             points:[[0.5,0.7],[0.55,0.45],[1,0.01, false],[1.45,0.45],[1.5,0.7]],
  //             zones:[[2,5]]
  //          },
  //          {
  //             points:[[2,1],[2.15,0.5],[2.5,0.01, false],[2.85,0.5],[3,1]],
  //             zones:[[2,5]]
  //          }
  //       ]
  //    },
  // },
};
//generator(rDef);
colorInitMain(rDef, defBoards)
//mainOperation(defBoards, rDef);
