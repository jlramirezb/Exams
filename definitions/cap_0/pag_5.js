const c = {

  1: { x: 0.5, y: 2.5 },
  2: { x: -2, y: -1 },
  3: { x: 1.2, y: 2.2 },
  4: { x: 2.2, y: 1.2 },

  5: { x: 1, y: 1 },
  6: { x: 1, y: 1 },
  7: { x: 1, y: 1 },

};

const defBoards = {
  board_0: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      [1.1, 0, false, '1'],
      [0.1, 1, false, '1']
    ],
  },
  board_1: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-1, 5, 5, -1],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
  },
   
  board_2: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3, 3, 3, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
  },



  //board_1
  board_3: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-1, 5, 5, -1],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
  },

  //board_2
  board_4: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3, 3, 3, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
  },
};


//board_2



//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const rDef = {
  artifactHtml: {
    datadefault: [
      {
        type: 10,
        classGlobal: 'defCartesian',
        contents: [
          {
            dataSet: {
              artifact: 'artifact_1',
            }
          }, {
            dataSet: {
              artifact: 'artifact_2',
            }
          }, {
            dataSet: {
              artifact: 'artifact_3',
            },
          }, {
            dataSet: {
              artifact: 'artifact_4',
            }
          }, {
            dataSet: {
              artifact: 'artifact_5',
            }
          }, {
            dataSet: {
              artifact: 'artifact_6',
            },
          }, {
            dataSet: {
              artifact: 'artifact_7',
            },
          },
        ],
      },
    ]
  },/* <script src="http://172.17.12.40:3020/artifact"></script> */
  artifact_1: {
    // textTop: "Este es el de arriba",
    textBottom: '(2,1), (1,2),(0,0), (-2,0), (1,-2)',
    conditions: {
      texterror: {
        time: 6,
      },
      points: [//(2,1), (1,2), (0,0), (-1,0), (1,0)
        { p: [2, 1] },
        { p: [1, 2] },
        { p: [0, 0] },
        { p: [-2, 0] },
        { p: [1, -2] }
      ],
    },

  },
  artifact_2: {
    // textTop: "Este es el de arriba",
    textBottom: '(0, 1), (0, -1), (1, 2), (2, 3), (2, -3)',


    conditions: {
      texterror: {
        time: 6,
      },
      points: [//(2,1), (1,2), (0,0), (-1,0), (1,0)
        { p: [0, 1] },
        { p: [0, -1] },
        { p: [1, 2] },
        { p: [2, 3] },
        { p: [2, -3] }
      ],
    },

  },
  artifact_3: {
    // textTop: "Este es el de arriba",
    textBottom: '(-3,2), (2,-2), (-1,2), (2,2), (e, π)',


    conditions: {
      texterror: {
        time: 4,
      },
      points: [
        { p: [-3, 2] },
        { p: [2, -2] },
        { p: [-1, 2] },
        { p: [2, 2] },
        { p: [2.77, 3.14], text: 'e,π' }
      ],
    },

  },

  artifact_4: {
    defBoard: 'board_3',
    buttonsActive: { points: false },


    defaultInputs: [
      {//1
        position: [0, 4],
        value: '(0 , 4)',// si uqeiro agregar un valor
        // interactive: true
      }, {//2
        position: [2, 4],
        interactive: true
      }, {//3
        position: [4, 4],
        interactive: true
      },/////////////////////////////////////////////  
      {//4
        position: [0, 3],
        interactive: true
      }, {//5
        position: [2, 3],
        interactive: true
      }, {//6
        position: [4, 3],
        value: '(4 , 3)',
        //  interactive: true
      },///////////////////////////////////////////////
      {//7
        position: [0, 2],
        interactive: true
      }, {//8
        position: [2, 2],
        interactive: true
      }, {//9
        position: [3, 2],
        value: '(3 , 2)',
        //interactive: true
      }, {//10
        position: [4, 2],
        interactive: true
      },///////////////////////////////////////////////
      {//11
        position: [2, 0],
        value: '(2 , 0)'
      }
    ],
    conditions: {
      texterror: {
        time: 4,
      },
      points: [
        { p: [2, 4] },
        { p: [4, 4] },
        { p: [0, 3] },
        { p: [2, 3] },
        { p: [0, 2] },
        { p: [2, 2] },
        { p: [4, 2] },
      ],
    },

  },
  artifact_5: {
    defBoard: 'board_4',
    buttonsActive: { points: false },
    defaultInputs: [

      {//1
        position: [-c[5].x * 2, c[5].y * 2],
        interactive: true,
      }, {//3
        position: [0, c[5].y * 2],
        interactive: true,
        value: '(​, 2b)',
      }, {//4
        position: [c[5].x, c[5].y * 2],
        interactive: true,
      },





      , {//5
        position: [c[5].x * 2, c[5].y],
        interactive: true
      },



      {//6
        position: [-c[5].x * 2, 0],
        interactive: true
      }, {//9
        position: [c[5].x, 0],
        value: '(a ,　)',
        interactive: true
      },


      // row 4
      {//12
        position: [-c[5].x, -c[5].y],
        interactive: true,

      }, {//15
        position: [c[5].x * 2, -c[5].y],
        value: '(2a,-b)',
      },

      //row 5
      {//18
        position: [0, -c[5].y * 2],
        interactive: true,
      }
    ],
    conditions: {
      texterror: {
        time: 4,
      },












      points: [
        //row 1
        { p: [-c[5].x * 2, c[5].y * 2], text: '-2a,2b' },
        { p: [0, c[5].y * 2], text: '0,2b' },
        { p: [c[5].x, c[5].y * 2], text: 'a,2b' },
        { p: [c[5].x * 2, c[5].y], text: '2a,b' },
        { p: [-c[5].x * 2, 0], text: '-2a,0' },
        { p: [c[5].x, 0], text: 'a,0' },
        { p: [-c[5].x, -c[5].y], text: '-a,-b' },
        { p: [0, -c[5].y * 2], text: '0,-2b' },
      ],
    },

  },
  artifact_6: {
    defBoard: 'board_4',
    buttonsActive: { points: false },


    defaultInputs: [
      {//5
        position: [c[6].x * 2, c[6].y * 2],
        //  position: [5, 5],
        interactive: true,
      }, {//2
        position: [-c[6].x, c[6].y],
        // position: [-2.5, 2.5],
        value: '(-a​, b)',
      }, {//3
        position: [0, c[6].y],
        //position: [0, 2.5],
        interactive: true
      }, {//4
        position: [c[6].x, c[6].y],
        // position: [2.5, 2.5],
        interactive: true
      },
      {//10
        // position: [5, 0],
        position: [c[6].x * 2, 0],
        interactive: true
      },
      {//10
        position: [0, 0],
        interactive: true
      },
      {//11
        position: [-c[6].x * 2, -c[6].y],
        //  position: [-5, -2.5],
        interactive: true,
      }, {//14
        position: [c[6].x, -c[6].y],
        // position: [2.5, -2.5],
        interactive: true,
      }, {//17
        position: [-c[6].x, -c[6].y * 2],
        //position: [-2.5, -5],
        interactive: true,
      }
    ],
    conditions: {
      texterror: {
        time: 4,
      },
      points: [
        { p: [c[6].x * 2, c[6].y * 2], text: '2a,2b' },
        { p: [0, c[6].y], text: '0,b' },
        { p: [c[6].x, c[6].y], text: 'a,b' },
        { p: [c[6].x * 2, 0], text: '2a,0' },//
        { p: [0, 0], text: '0,0' },//
        { p: [-c[6].x * 2, -c[6].y], text: '-2a,-b' },//
        { p: [c[6].x, -c[6].y], text: 'a,-b' },
        { p: [-c[6].x, -c[6].y * 2], text: '-a,-2b' },//
      ],
    },
  },
  artifact_7: {
    defBoard: 'board_4',
    buttonsActive: { points: false },



    defaultInputs: [
      {//2
        position: [-c[7].x, 2 * c[7].y],
        interactive: true,
      }, {//1
        position: [-(2 * c[7].x), c[7].y],
        interactive: true
      }, {//4
        position: [c[7].x, c[7].y],
        interactive: true
      }, {//7
        position: [-c[7].x, 0],
        interactive: true
      }, {//10
        position: [2 * c[7].x, 0],
        interactive: true
      }, {//13
        position: [0, -c[7].y],
        interactive: true,
        value: '( ,-b)'
      }, {//16
        position: [-(2 * c[7].x), -(2 * c[7].y)],
        value: '(-2a,-2b)',
      }, {//17
        position: [-(c[7].x), -(2 * c[7].y)],
        interactive: true,
      }, {//20
        interactive: true,
        position: [2 * c[7].x, -(2 * c[7].y)],
      },
    ],
    conditions: {
      texterror: {
        time: 4,
      },
      points: [

        { p: [-c[7].x, 2 * c[7].y], text: '-a,2b' },
        { p: [-(2 * c[7].x), c[7].y], text: '-2a,b' },
        { p: [-c[7].x, 0], text: '-a,0' },//
        { p: [2 * c[7].x, 0], text: '2a,0' },//
        { p: [0, -c[7].y], text: '0,-b' },
        { p: [c[7].x, c[7].y], text: 'a,b' },
        { p: [-c[7].x, -(2 * c[7].x)], text: '-a,-2b' },//
        { p: [2 * c[7].x, -(2 * c[7].y)], text: '2a,-2b' },//

      ],
    },
  },
};
generator(rDef);
mainCartesian(defBoards, rDef);