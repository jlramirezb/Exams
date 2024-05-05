const defBoards = {

  board_1: {
    artifact: 'artifact_1',
    style: {
      grid: false,
      height: '750px',
      width: '600px',
      minWidth: '200px',
      // maxHeight: 300,
      // maxWidth: 300,
      boundingbox: [-5, 
        6, 5, -6],
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
    },
    lines: [
      {
        points: [
          [-10, 1],
          [10, 1],
        ],
        dash: 2,
      },
      {
        points: [
          [-11, -1],
          [11, -1],
        ],
        dash: 2,
      },
     
  
    ],
  

    curves: [
      {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-4.30, -2],
          [-2.23, -1.8],
          [0, -1],
          [1, 0],
          [1.69, 1.71],
        ],
      },
      {
        interactive: true,
        strokeColor: 'black',
        points:[
          // [
          //     -4,
          //     -0.5
          // ],
          // [
          //     0,
          //     -1
          // ],
          // [
          //     0.8,
          //     -5
          // ],
          // [
          //     1,
          //     0
          // ],
          // [
          //     1.1,
          //     5
          // ],
          // [
          //     1.45,
          //     1
          // ],
          // [
          //     1.6,
          //     0.6666666666666666
          // ]
        ],
      },
  
    ],
    points: [
      /* { x: -4, y: -2, visible: true, name: 'a', fixed: true, color: "black" },
        { x: 0, y: -1, visible: true, name: 'b', fixed: true, color: "black" },
       // { x: 0.8, y: -0.2, visible: true, name: 'c', fixed: true, color: "black" },
       
       //  { x: 1.1, y: 0.2, visible: true, name: 'e', fixed: true, color: "black" },
     
        { x: 1.45, y: 1, visible: true, name: 'f', fixed: true, color: "black" },
        { x: 1.6, y: 1.5, visible: true, name: 'g', fixed: true, color: "black" },
       */
      { x: 1, y: 0, visible: true, name: 'd', fixed: true, color: 'black' },
    ],
    asymptotes:[
      {x:-4},
      {x:0},
      {x:1},
      {x:1.45},
      {x:1.6},
        
    ],
  },
};
  
console.log(
  defBoards.board_1.points.map((element)=>{
   
    return  [element.x,1/element.y];
  })
)
  

const rDef = {
  artifactHtml: {
    datadefault: [
      {
        type: 10, 
        classGlobal: 'operationCurves',
        contents: [
          {
            dataSet: {
              board: 'board_1',
            },
          },
        ],
      },
  
    
    ],
  },
  
  artifact_1: {

    debug:false,
    helpMsg:true,
    //useAsymptotes:true,
    validateCurves:true, 
    buttonsActive: { curves: true },
    showStripes:true,
    curveMod: {
      color: 'red',
      interactive: true,
    },
    inputsDefault:[[[-0.35, 2], true, '', 1], [[2, -0.2], false, '2', 2]],
  
    conditions: {

      /* 
              { x: -4, y: -2, visible: true, name: 'a', fixed: true, color: "black" },
        { x: 0, y: -1, visible: true, name: 'b', fixed: true, color: "black" },
       // { x: 0.8, y: -0.2, visible: true, name: 'c', fixed: true, color: "black" },
        { x: 1, y: 0, visible: true, name: 'd', fixed: true, color: "black" },
      //  { x: 1.1, y: 0.2, visible: true, name: 'e', fixed: true, color: "black" },
        { x: 1.45, y: 1, visible: true, name: 'f', fixed: true, color: "black" },
        { x: 1.6, y: 1.5, visible: true, name: 'g', fixed: true, color: "black" },

        */
      inverseCurve: [
        { //curva
          id:1,
          points:[[-4,-2], [0,-1],[0.85,-0.2]],
          zones: [[-1,-6],[-2,-5]]
        },
        { //curva
          id:2,
          points:[[1.1,0.2],[1.45, 1],[1.6,1.5]],
          zones: [[3,4],[1,6]]

        },
          
      ],
      asymptotes:{
        positionY:[
          [-4,[-0.5]],
          [0,[-1]],
          //[0.8,[-5]],
          [1,[0]],
          //   [1.1,[5]],
          [1.45,[1]],
          [1.6,[0.66]],

        ]
      },


      //  reciprocalCurves:{
      //   curves: [{
                  
      //     points:
      //     [       
      //          [
      //       -4,
      //       -0.5
      //   ],
      //   [
      //       0,
      //       -1
      //   ],
      //   [
      //       0.8,
      //       -5
      //   ],
      //   [
      //       1,
      //       0
      //   ],
      //   [
      //       1.1,
      //       5
      //   ],
      //   [
      //       1.45,
      //       1
      //   ],
      //   [
      //       1.6,
      //       0.6666666666666666
      //   ]]

      // }


      //   ]
      //   }
               
              
   
         
    },
  }}
  
colorInitMain(rDef, defBoards)
generator(rDef);
//mainOperation(defBoards, rDef);
  