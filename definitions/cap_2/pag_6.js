/**<section id="container" data-viewurl=":cap_2/:pag_6_1" data-engineurl=":genericEngines/:mod_G,:cap_2/:symmetric" data-definitionurl=":cap_2/:pag_6_1"></section> */
const defBoards = {
  /* board_0: {
     artifact: "artifact_1",
     style: {
       //   grid:true,
       maxHeight: 300,
       maxWidth: 300,
       boundingbox: [-4, 4, 4, -4],
       axis: [false, true, true],
       valueAxis: {
         yd: [
           [0, 0],
           [0, 1],
         ] //dirección del eje y,
         xd: [
           [0, 0],
           [1, 0],
         ],
       },
     },
    
     curves: [
       {
         points: [
           [-2, 2],
           [-1, 0],
           [0, -1],
           [1, 0],
           [2, 2],
         ],
       },
     ],
     arcs: [
       {
         points: [
           [1, 0],
           [0, 0],
           [2, 0],
         ],
       },
       {
         points: [
           [0, 1],
           [0, 2],
           [0, 0],
         ],
       },
     ],
   },
   board_1: {
     artifact: "artifact_2",
     style: {
       // grid: false,
       maxHeight: 300,
       maxWidth: 300,
       boundingbox: [-4, 4, 4, -4],
       axis: [false, true, true],
       valueAxis: {
         yd: [
           [0, 0],
           [0, 1],
         ] //dirección del eje y,
         xd: [
           [0, 0],
           [1, 0],
         ],
       },
     },
     curves: [
       {
         points: [
           [-2, 2],
           [-1, 0],
           [0, -3],
           [1, 0],
           [2, 2, true],
         ],
       },
     ],
   }, */

  board_1: {
    artifact: 'artifact_1',
    style: {
      reflectionAxie: { B: true },
      // grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-4, 4, 4, -4],
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
    curves: [
      {
        points: [
          [-3.92, 0.18],
          [-1.49, 1.02],
          [0.8, 0.037],
          [1.85, 0.78],
          [2.43, 2.3],
        ],
      },
    ],
  },

  board_2: {
    artifact: 'artifact_2',
    style: {
      reflectionAxie: { B: true },
      // grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-4, 4, 4, -4],
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
    arcs: [
      {
        style: {
          strokeColor: 'black',
        },
        points: [
          [1, 0],
          [0, 0],
          [2, 0],
        ],
      },
      {
        style: {
          strokeColor: 'black',
        },
        points: [
          [0, 1],
          [0, 2],
          [0, 0],
        ],
      },
    ],
    /* curves: [
        {
          points: [
            [-0.11, 1.66, true],
            [-1.41, 1.42, true],
            [-1.43, 0.36, true],
  
            [0, 0, true],
  
            [0.5, -1.4, true],
  
            [1.45, -1.32, true],
            [1.72, -0.0423, true],
          ],
        },
      ],*/
  },
  board_3: {
    artifact: 'artifact_3',
    style: {
      reflectionAxie: { B: true },
      // grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-4, 4, 4, -4],
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
    curves: [
      {
        points: [
          [-2.65, -0.074],
          [-1.85, -0.95],
          [-0.94, -0.94],
          [-0.0336, -0.0242],
          [1.43, 0.99],
          [2.28, 0.76],
          [2.71, 0.16],
        ],
      },
    ],
  },
  board_4: {
    artifact: 'artifact_4',
    style: {
      reflectionAxie: { B: true },
      // grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-4, 4, 4, -4],
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
    curves: [
      {
        points: [
          [0.0726, 0.0425],
          [1.64, 1.19],
          [2.79, 1.72],
        ],
      },
    ],
  },
};
//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js

const def = {
  /*  artifact_1: {
   
      inputActive: true,
      conditions: {
        state: 1,
        inpValue: "eje x",
      },
    },
    artifact_2: {
   
      buttonsActive: true,
      conditions: {
        state: 2,
      },
    }, */
  artifact_1: {
    buttonsActive: true,
    conditions: {
      state: 3,
    },
  },
  artifact_2: {
    buttonsActive: true,
    conditions: {
      state: 2,
    },
  },
  artifact_3: {
    buttonsActive: true,
    conditions: {
      state: 1,
    },
  },
  artifact_4: {
    buttonsActive: true,
    conditions: {
      state: 3,
    },
  },
};
mainSym(defBoards);
