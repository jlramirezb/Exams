
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
    //verificado resultado bien
    artifact: 'artifact_8',
    points: [
      [0, 1, true, '1', true, 'black'],
      [0, -1, true, '-1', true, 'black'],
    ],
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-4, 5, 4, -5],
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
        points: [[-2, 2], [-1.72, 1.78], [-1.6, 1.5]],
      },
      {
        points: [[-1, 2], [-0.68, 1.7], [-0.5, 1.4]],
      },
      {
        points: [[2, 2], [2.6, 1.6], [3, 1]],
      },
      {
        points: [[1, 2], [1.4, 1.7], [1.6, 1.2]],
      },
    ],
    lines: [{ points: [[-8, -1], [8, -1]], dash: 2 }],
    //asymptotes: asynVisual_1
  },
  board_2: {
    //9
    points: [
      [0, 1, true, '1', true, 'black'],
      [0, -1, true, '-1', true, 'black'],
    ],
    artifact: 'artifact_9',
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
    lines: [{ points: [[-8, -1], [8, -1]], dash: 2 }],
    curves: [
      {
        dash: 2,
        points: [[-8, 1], [8, 1]],
      },
      {
        points: [[-2, -2], [-1.72, -2.22], [-1.6, -2.5]],
      },
      {
        points: [[-1, -2], [-0.68, -2.3], [-0.5, -2.6]],
      },
      {
        points: [[2, -2], [2.6, -2.3], [3, -3]],
      },
      {
        points: [[1, -2], [1.4, -2.3], [1.6, -2.8]],
      },
    ],
    //asymptotes: asynVisual_1,
  },
  board_3: {
    //10
    points: [
      [0, 1, true, '1', true, 'black'],
      [0, -1, true, '-1', true, 'black'],
    ],
    artifact: 'artifact_10',
    style: {
      
      ...genericStyles,
         
    },
    
    lines: [{ 
      points: [[-8, -1], [8, -1]], dash: 2 },
    { points: [[2.5,8],[2.5,-8]], dash:2, strokeColor:'#6a019f', opacity: 0.4, strokeWidth:2},
    { points: [[1,8],[1,-8]], dash:2, strokeColor:'#6a019f', opacity: 0.4, strokeWidth:2},
    { points: [[-1,8],[-1,-8]], dash:2, strokeColor:'#6a019f', opacity: 0.4, strokeWidth:2},
    { points: [[-3,8],[-3,-8]], dash:2, strokeColor:'#6a019f', opacity: 0.4, strokeWidth:2},


      
    ],
    curves: [
      {
        dash: 2,
        points: [[-8, 1], [8, 1]],
      },
      {
        points: [
          [-3.5, 0.3],
          [-3.3, 0.15],
          [-3, 0.0],
          [-2.7, 0.15],
          [-2.5, 0.3],
        ],
      },
      {
        points: [
          [-1.5, 0.5],
          [-1.3, 0.1],
          [-1, 0],
          [-0.7, 0.1],
          [-0.5, 0.5],
        ],
      },
      {
        points: [[1.5, 0.7], [1.3, 0.1], [1, 0], [0.7, 0.1], [0.5, 0.7]],
      },
      {
        points: [[3, 1], [2.7, 0.1], [2.5, 0], [2.3, 0.1], [2, 1]],
      },
    ],
    /* asymptotes: asynCond_2, */
  },
  board_4: {//verificado resultado bien
    artifact: 'artifact_1',
    points: [
      [0, 1, true, '1', true, 'black'],
      [0, -1, true, '-1', true, 'black'],
    ],
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-4, 5, 4, -5],
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

    curves: [{
      dash: 2,
      points: [[-4, 1], [4, 1]]
    }, {
      points: [
        [-2, 2],
        [-1.72, 1.78],
        [-1.6, 1.5]
      ]
    }, {
      points: [
        [-1, 2],
        [-0.68, 1.7],
        [-0.5, 1.4]
      ]
    }, {
      points: [
        [2, 2],
        [2.6, 1.6],
        [3, 1]
      ]
    }, {
      points: [
        [1, 2],
        [1.4, 1.7],
        [1.6, 1.2]
      ]
    }],
    lines: [
      { points: [[-4, -1], [4, -1]], dash: 2, }
    ],
    //asymptotes: asynVisual_1
  },
  board_5: {//9
    points: [
      [0, 1, true, '1', true, 'black'],
      [0, -1, true, '-1', true, 'black'],
    ],
    artifact: 'artifact_2',
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-5, 5, 5, -5],
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
      { points: [[-4, -1], [4, -1]], dash: 2, }
    ],
    curves: [{
      dash: 2,
      points: [[-4, 1], [4, 1]]
    }, {
      points: [
        [-2, -2],
        [-1.72, -2.22],
        [-1.6, -2.5]
      ]
    }, {
      points: [
        [-1, -2],
        [-0.68, -2.3],
        [-0.5, -2.6]
      ]
    }, {
      points: [
        [2, -2],
        [2.6, -2.3],
        [3, -3]
      ]
    }, {
      points: [
        [1, -2],
        [1.4, -2.3],
        [1.6, -2.8]
      ]
    }],
    //asymptotes: asynVisual_1,
  },
  board_6: {//10
    points: [
      [0, 1, true, '1', true, 'black'],
      [0, -1, true, '-1', true, 'black'],
    ],
    artifact: 'artifact_3',
    style: {
      ...genericStyles
    },
    lines: [
      { points: [[-4, -1], [4, -1]], dash: 2, }
    ],
    curves: [
      {
        dash: 2,
        points: [[-4, 1], [4, 1]]
      }, {
        points: [
          [-3.5, 0.3],
          [-3.3, 0.15],
          [-3, 0.0],
          [-2.7, 0.15],
          [-2.5, 0.3]
        ],
      }, {
        points: [
          [-1.5, 0.5],
          [-1.3, 0.1],
          [-1, 0],
          [-0.7, 0.1],
          [-0.5, 0.5]
        ]
      }, {
        points: [
          [1.5, 0.7],
          [1.3, 0.1],
          [1, 0],
          [0.7, 0.1],
          [0.5, 0.7]
        ]
      }, {
        points: [
          [3, 1],
          [2.7, 0.1],
          [2.5, 0],
          [2.3, 0.1],
          [2, 1]
        ]
      },
    ],
    /* asymptotes: asynCond_2, */
  },
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

  //////////////////////////////////////////
  artifact_1: {
    //fino
    showStripes:true,
    maxCurves: 4,
    conditions: {
      inverseCurve:[
        {
          points:[[-2,2],[-1.75,1.8],[-1.55,1.4]],
          zones:[[3,4],[2,5]]
        },
        {
          points:[[-1,2],[-0.75,1.8],[-0.5,1.4]],
          zones:[[3,4],[2,5]]

        },
        {points:[[1,2],[1.3,1.8],[1.56,1.25]],
          zones:[[3,4],[2,5]]

        },
        {
          points:[[2,2],[2.3,1.8],[2.75,1.4],[3,1]],
          zones:[[3,4],[2,5]]

        }
      ]

         
    },
  },
  artifact_2: {
    //fino
    maxCurves: 4,
    showStripes:true,
    conditions: {
      asymptotes: asynCond_1,

      inverseCurve:[
        {
          points:[[-2,-2],[-1.6, -2.45]],
          zones:[[-2,-5]]
        },
        {
          points:[[-1,-2],[-0.5, -2.6]],   
          zones:[[-2,-5]]
        },
        {
          points:[[1,-2],[1.55,-2.8]],   
          zones:[[-2,-5]]
        },
        {
          points:[[2,-2],[2.55,-2.25],[3,-3]],   
          zones:[[-2,-5]]
        }
      ]
    },
  },

  artifact_3: {
    //fino
    maxCurves: 8,
    showStripes:true,

    buttonsActive: { points: true, infinities: true },
    conditions: {
      asymptotes: asynCond_2,
      inverseCurve:[
        {
          points:[[-3.5, 0.3],[-3,0.01,false],[-2.5,0.3]],
          zones:[[2,5]]

        },
 
        {
          points:[[-1.5,0.5],[-1.4,0.25],[-1,0.01, false],[-0.6,0.25],[-0.5,0.5]],
          zones:[[2,5],[1,6]]
               
        },

        {
          points:[[0.5,0.7],[0.55,0.45],[1,0.01, false],[1.45,0.45],[1.5,0.7]],
          zones:[[2,5],[3,4]]
        },
        {
          points:[[2,1],[2.15,0.5],[2.5,0.01, false],[2.85,0.5],[3,1]],
          zones:[[2,5],[3,4]]
        }
      ]
    },
  },
/* 
   artifact_4:{
      showStripes:true,
      conditions:{
         inverseCurve:[

         ]
      }
   },
   artifact_5:{
      showStripes:true,

      conditions:{
         inverseCurve:[
            
         ]
      }
   },
   artifact_6:{
      showStripes:true,

      conditions:{
         inverseCurve:[
            
         ]
      }
   } */
};
//generator(rDef);
colorInitMain(rDef, defBoards)
//mainOperation(defBoards, rDef);
