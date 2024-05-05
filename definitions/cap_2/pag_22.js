const defBoards = {

  board_1: {
    artifact: 'artifact_1',
    style: {
      axis: [false, true, true],
      grid: false,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      boundingbox: [-6, 6, 6, -6],
    },
    lines: [
      //horizontal
      {
        points: [
          [-10, 1],
          [10, 1],
        ],
        dash: 1,
        strokeColor:'#6a019f'
      },
      {
        points: [
          [-10, -1],
          [10, -1],
        ],
        strokeColor:'#6a019f',
        dash: 1,
      },
    ],
    asymptotes: [
      { x: -4,style:{strokeColor:'#6a019f', opacity: 0.4, strokeWidth:3} },
      { x: -3,style:{strokeColor:'#6a019f', opacity: 0.4, strokeWidth:3}},
      { x: -2.7,style:{strokeColor:'#6a019f', opacity: 0.4, strokeWidth:3} },
      { x: -2.4,style:{strokeColor:'#6a019f', opacity: 0.4, strokeWidth:3} },
      { x: -0.5,style:{strokeColor:'#6a019f', opacity: 0.4, strokeWidth:3} },
      { x: 1,style:{strokeColor:'#6a019f', opacity: 0.4, strokeWidth:3} },
      { x: 1.25,style:{strokeColor:'#6a019f', opacity: 0.4, strokeWidth:3} },
      { x: 1.55,style:{strokeColor:'#6a019f', opacity: 0.4, strokeWidth:3} },
      { x: 1.8,style:{strokeColor:'#6a019f', opacity: 0.4, strokeWidth:3} },
      { x: 2,style:{strokeColor:'#000', opacity: 1, strokeWidth:4} },
      { x: 2.9,style:{strokeColor:'#6a019f', opacity: 0.5, strokeWidth:3} },
      { x: 3.2,style:{strokeColor:'#6a019f', opacity: 0.5, strokeWidth:3} },
      { x: 3.5,style:{strokeColor:'#6a019f', opacity: 0.5, strokeWidth:3} },
    ],

    curves: [
      {
        interactive: true,
        strokeColor: 'black',
        points: [
          //    [
          //        -4,
          //        1
          //    ],
          //    [
          //        -3,
          //        3.3333333333333335
          //    ],
          //    [
          //        -2.7,
          //        2
          //    ],
          //    [
          //        -2.4,
          //        1.25
          //    ],
          //    [
          //        -1.8,
          //        -1
          //    ],
          //    [
          //        1,
          //        -1.4285714285714286
          //    ],
          //    [
          //        1.25,
          //        -0.7692307692307692
          //    ],
          //    [
          //        1.55,
          //        -0.5
          //    ],
          //    [
          //        1.8,
          //        -0.2857142857142857
          //    ],
          //    [
          //        2,
          //        0
          //    ],
          //    [
          //        2.88,
          //        5
          //    ],
          //    [
          //        3.2,
          //        2.5
          //    ],
          //    [
          //        3.5,
          //        1.25
          //    ]
        ],
      },


    ],
    points: [
      { x: 2, y: 0, visible: true, name: '', fixed: true, color: '#000' },
      /* 
         { x: -4, y: 1, visible: true, name: 'a', fixed: true, color: "black" },
         { x: -3, y: 0.3, visible: true, name: 'b', fixed: true, color: "black" },
         { x: -2.7, y: 0.5, visible: true, name: 'c', fixed: true, color: "black" },
         { x: -2.4, y: 0.8, visible: true, name: 'd', fixed: true, color: "black" },
         { x: -0.5, y: -1, visible: true, name: 'e', fixed: true, color: "black" },
         { x: 1, y: -0.7, visible: true, name: 'f', fixed: true, color: "black" },
         { x: 1.25, y: -1.3, visible: true, name: 'g', fixed: true, color: "black" },
         { x: 1.55, y: -2, visible: true, name: 'h', fixed: true, color: "black" },
 
         { x: 1.80, y: -3.5, visible: true, name: 'i', fixed: true, color: "#000" },
         { x: 2, y: 0, visible: true, name: 'j', fixed: true, color: "#000" },
         { x: 2.88, y: 0.2, visible: true, name: 'k', fixed: true, color: "#000" },
         { x: 3.2, y: 0.4, visible: true, name: 'l', fixed: true, color: "#000" },
         { x: 3.5, y: 0.8, visible: true, name: 'm', fixed: true, color: "#000" },
*/

    ],
  },
};


const rDef = {
  artifactHtml: {
    datadefault: [
     


    ],
  },



  artifact_1: {

    debug: false,
    helpMsg: true,
    showStripes : true,
    validateCurves: true,
    buttonsActive: { curves: true },
    curveMod: {
      color: 'red',
      interactive: true,
    },
    inputsDefault: [[[-0.35, 2], true, '', 1], [[2, -0.2], false, '2', 2]],

    conditions: {  
      inverseCurve: [
        { //curva
          id:1,
          points:[[-4, 1],[-3,0.4],[-2.7,0.5],[-2.4,0.8],[-0.5,-1],[1,-0.7],[1.25,-1.3],[1.55,-2],[1.80, -5]],
          zones: [[3,4],[2,5],[-3,-4],[-2,-5]]
        },
        {
          points:[[2.88,0.2],[3.2,0.4],[3.5,0.8],[2.2,0.1, false]],
          zones: [[1,6],[2,5],[3,4]]

        }
      ],



      /* asymptotes: {
            positionY: [
               [-4, [1]],
               [-3, [3.33]],
               [-2.7, [2]],
               [-2.4, [1.25]],
               [-0.5, [-1]],
               [1, [-1.42]],
               [1.25, [-0.76]],
               [1.55, [-0.5]],
               [1.8, [-0.28]],
               [2, [0]],
               [2.9, [5]],
               [3.2, [2.5]],
               [3.5, [1.25]],

            ],





            //   reciprocalCurves:{
            //    curves: [{

            //      points:
            //      [       
            //        [
            //          -4,
            //          1
            //      ],
            //      [
            //          -3,
            //          3.3333333333333335
            //      ],
            //      [
            //          -2.7,
            //          2
            //      ],
            //      [
            //          -2.4,
            //          1.25
            //      ],
            //      [
            //          -1.8,
            //          -1
            //      ],
            //      [
            //          1,
            //          -1.4285714285714286
            //      ],
            //      [
            //          1.25,
            //          -0.7692307692307692
            //      ],
            //      [
            //          1.55,
            //          -0.5
            //      ],
            //      [
            //          1.8,
            //          -0.2857142857142857
            //      ],
            //      [
            //          2,
            //          0
            //      ],
            //      [
            //          2.88,
            //          5
            //      ],
            //      [
            //          3.2,
            //          2.5
            //      ],
            //      [
            //          3.5,
            //          1.25
            //      ]]

            //  }
            //    ]
            //    }



         }, */
    }
  }
};

generator(rDef);
//mainOperation(defBoards, rDef);
colorInitMain(rDef,defBoards)
console.log(
  defBoards.board_1.points.map((element) => {

    return [element.x, 1 / element.y];
  })
);