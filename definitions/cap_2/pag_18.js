/* <section id="container" data-viewurl=":cap_2/:pag_18" data-engineurl=":genericEngines/:mathKeyboard,:genericEngines/:mod_G,:cap_1/:boardDefault,:cap_2/:engineOperations,:genericEngines/:engineOwner,:genericEngines/:mod_G" data-definitionurl=":cap_2/:pag_18"></section> */
const genericStyles = {
  grid: true,

  axis: [false, true, true],
  boundingbox: [-1, 3, 4, -3],
  valueAxis: {
    yd: [[0, 0], [0, 1]], /*dirección del eje y*/
    xd: [[0, 0], [1, 0]],
  },
};
const allDef = {
  // buttonsActive: { points: true },
  conditions: {
    // operation: {
    //   curves: [[0, 1]],
    //   type: 2,//suma: 1 / Multipicacion: 2
    //   noise: 25
    // },
    asymptotes: [
      { x: 1, name: '+' },
      { x: 4, name: '-' },
      { x: 8.85, name: '-' },

    ]
  },
};
const defBoards = {
  board_0: {
    style: {
      grid: true,
      maxHeight: 350,
      maxWidth: 500,
      boundingbox: [-1, 3, 10, -3],

      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
      curveType: 2,
    },
    points: [
      [0, 2, true, '2', null, 'black'],
      [0, 1, true, '1', null, 'black'],
      [0, -1, true, '-1', null, 'black'],
      [0, -2, true, '', null, 'black'],
      //Simbolos positivos
      [0.5, 1, false, '+'],
      [1.5, 1, false, '+'],
      [2.5, 1, false, '+'],
      [5, 1.5, false, '+'],

      [7.5, 2.1, false, '+'],
      [8, 0.5, false, '+'],

      [9, 2, false, '+'],
      //Simbolos negativos
      [0.5, -1, false, '-'],
      [5, -1, false, '-'],
      [9, -1, false, '-'],

    ],
    curves: [
      [
        [[0, 0],
          [1.5, 1.0],
          [4.5, -1],
          [7.5, 1],
          [9.2, -0.33],
        ], null, null, 0
      ], [
        [
          [-0.3, -1.8],
          [0, -1],
          [1, 0],
          [3, 0.8],
          [6, 1.6],
          [7.5, 1.9],
          [9.2, 2],
        ], null, null, 1
      ],
    ],
    lines: [
      [[[0, -6], [0, 6]], 2],
      [[[1, -6], [1, 6]], 2],
      [[[3, -6], [3, 6]], 2],
      [[[6, -6], [6, 6]], 2],
      [[[8.8, -6], [8.8, 6]], 2]
    ],
  },

  board_1: {
    artifact: 'artifact_1',
    style: {

      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-1, 4, 10, -4],

      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      { x: 0, y: 2, visible: true, name: '2', fixed: true, color: 'black' },
      { x: 0, y: 1, visible: true, name: '1', fixed: true, color: 'black' },
      { x: 0, y: -1, visible: true, name: '-1', fixed: true, color: 'black' },
    ],
    curves: [

      { //pagina 2-18  grafica 1
        interactive: true,
        strokeColor: 'purple',
        points: [
          [0, 0],
          [1.5, 1.0],
          [4.5, -1],
          [7.5, 1],
          [9.2, -0.33]
        ],
      }, {
        interactive: true,
        strokeColor: 'darkorange',
        flex: 0,
        //  points: [[-3, -1], [-2, 1], [-1, -1]],
        points: [[0, 2], [10, 2]],
      }
    ],
    asymptotes: [
      { x: 0, },
      { x: 1.5, validate: true },
      { x: 3 },
      { x: 4.5, validate: true },
      { x: 6 },
      {x:7.5,validate: true},
      { x: 8.85  },
    ],
    /* asymptotes: [
         { x: 0 },
         { x: 3 },
         { x: 6 },
         { x: 8.85 },
      ], */
  },
  board_2: {
    artifact: 'artifact_2',
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-1, 4, 10, -4],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      { x: 0, y: 2, visible: true, name: '2', fixed: true, color: 'black' },
      { x: 0, y: 1, visible: true, name: '1', fixed: true, color: 'black' },
      { x: 0, y: -1, visible: true, name: '-1', fixed: true, color: 'black' },
      { x: 0, y: -2, visible: true, name: '-2', fixed: true, color: 'black' },
    ],
    curves: [
      { //pagina 2-18  grafica 1
        interactive: true,
        strokeColor: 'purple',
        points: [
          [0, 0],
          [1.5, 1.0],
          [4.5, -1],
          [7.5, 1],
          [9.2, -0.33]
        ],
      }, {
        interactive: true,
        strokeColor: 'darkorange',
        flex: 0,
        points: [[0, -2,], [10, -2,]],
      }
    ],

    asymptotes: [
      { x: 0, },
      { x: 1.5, validate: true },
      { x: 3 },
      { x: 4.5, validate: true },
      { x: 6 },
      {x:7.5,validate: true},
      { x: 8.85  },
    ],
    /* asymptotes: [
         { x: 0 },
         { x: 3 },
         { x: 6 },
         { x: 8.85 },
      ], */
  },
  board_3: {
    artifact: 'artifact_3',
    style: {

      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-1, 4, 10, -2],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },
    points: [
      { x: 0, y: 1, visible: true, name: '1', fixed: true, color: 'black' },
    ],
    curves: [

      { //pagina 2-18  grafica 1
        interactive: true,
        strokeColor: 'purple',
        points: [
          [0, 0],
          [1.5, 1.0],
          [4.5, -1],
          [7.5, 1],
          [9.2, -0.33]
        ],
      }, {
        interactive: true,
        strokeColor: 'darkorange',
        flex: 1,
        points: [
          [0, 0.17],
          [4.33, 0.48],
          [5.58, 1.43],
          [6.9, 2.38],
          [9.25, 3]
        ],
      }
    ],

    asymptotes: [
      { x: 0},
      { x: 1.5, validate: true },
      // { x: 3 },
      { x: 4.5, validate: true },
      { x: 6 },
      {x:7.5,validate: true},
      { x: 8.85  },
    ],
    /* asymptotes: [
         { x: 0 },
         { x: 3 },
         { x: 6 },
         { x: 8.85 },
      ], */
  },
  board_4: {
    artifact: 'artifact_4',
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-1, 6, 8, -1],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
      },
    },

    curves: [
      {
        interactive: true,
        strokeColor: 'purple',
        points: [
          [1.8, 4],
          [2.5, 1],
          [4, -0],
          [5.5, 1],
          [6.2, 4]
        ],
      }, {
        interactive: true,
        strokeColor: 'darkorange',
        flex: 1,

        points: [
          [1, 4],
          [2, 1],
          [4, -0],
          [6, 1],
          [7, 4]
        ],
      }
    ],
    points: [
      { x: 0, y: 1, visible: true, name: '1', fixed: true, color: 'black' },
      { x: 1, y: 4.5, visible: false, name: 'Tome muy en cuenta los puntos de altura 1', fixed: true, color: 'black' },

    ],

    asymptotes: [
   //   { x: 0},
      {x:2, validate: true},
      { x: 4 },
      {x:6 , validate: true}
  
    ],
    /* asymptotes: [
         { x: 4 },
      ], */
  },
  board_5: {
    artifact: 'artifact_5',
    style: {
      ...genericStyles,
      boundingbox: [-1, 3, 10, -3],
    },
    points: [

      { x: 0, y: 2, visible: true, name: '2', fixed: true, color: 'black' },
      { x: 0, y: 1, visible: true, name: '1', fixed: true, color: 'black' },
      { x: 0, y: -1, visible: true, name: '-1', fixed: true, color: 'black' },
    ],
    curves: [
      { //pagina 2-18  grafica 1
        interactive: true,
        strokeColor: 'purple',
        points: [
          [0, 0],
          [1.5, 1.0],
          [4.5, -1],
          [7.5, 1],
          [9.2, -0.33]
        ],
      }, {
        interactive: true,
        strokeColor: 'darkorange',
        //  points: [[-3, -1], [-2, 1], [-1, -1]],
        points: [[0, -1], [10, -1]],
      }
    ],

    
    asymptotes: [
      //   { x: 0},
      { x: 0, },
      { x: 1.5, validate: true },
      { x: 3 },
      { x: 4.5, validate: true },
      { x: 6 },
      {x:7.5,validate: true},
      { x: 8.85  },
       ],
    
    /* asymptotes: [
         { x: 0 },
         { x: 3 },
         { x: 6 },
         { x: 8.85 },
      ], */
  },
  board_6: {
    artifact: 'artifact_6',
    style: {
      ...genericStyles,
      boundingbox: [-1, 3, 10, -3],
    },
    points: [

      { x: 0, y: 2, visible: true, name: '2', fixed: true, color: 'black' },
      { x: 0, y: 1, visible: true, name: '1', fixed: true, color: 'black' },
      { x: 0, y: -1, visible: true, name: '-1', fixed: true, color: 'black' },
      { x: 3, y: -1.8, visible: false, name: 'Dibuje f^2', fixed: true, color: 'black' },


    ],
    curves: [
      { //pagina 2-18  grafica 1
        interactive: true,
        strokeColor: 'darkorange',
        points: [
          [0, 0],
          [1.5, 1.0],
          [4.5, -1],
          [7.5, 1],
          [9.2, -0.33]
        ],
      }, { //pagina 2-18  grafica 1
        interactive: true,
        strokeColor: 'purple',
        points: [
          [0, 0],
          [1.5, 1.0, false, 'ƒ', null, null, null, 20],

          [4.5, -1],
          [7.5, 1],
          [9.2, -0.33]

        ],
      },
    ],

    asymptotes: [
      { x: 0, },
      { x: 1.5, validate: true },
      { x: 3 },
      { x: 4.5, validate: true },
      { x: 6 },
      {x:7.5,validate: true},
      { x: 8.85  },
    ],
    /* asymptotes: [
         { x: 0 },
         { x: 3 },
         { x: 6 },
         { x: 8.85 },
      ], */

  },

};

//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const rDef = {
  artifactHtml: {
    datadefault: [
      [1, 'Observe atentamente la figura siguiente:'],
      {
        type: 10,//tipo 10 genera los contenedores con los dataset y clases para los boards
        classGlobal: 'defBoard productR',
        contents: [
          { dataSet: { board: 'board_0' } },
        ],
      },
      [1, `Las verticales punteadas pasan por los puntos de corte con el eje x (note que hay una que no se ve porque
está confundida con el eje y). Estas rectas se ponen para ayudar a ver los signos de los trozos de curvas que
quedan entre ellas. Donde la curva está por encima del eje x, la curva "es positiva" y por ello se pone el
signo más. Se hace lo análogo con las partes que están por debajo del eje x. Esto sirve, usando la regla de
los signos (+ por + = +, - por + = - etc), para saber el signo de la curva producto entre dos cortes
consecutivos con el eje x.`],
      [1, `Complete usted la figura dibujando un esbozo de la curva producto. La curva deberá pasar por los puntos de
corte de las curvas factores con el eje x. 
   La curva deberá tener los signos que resultan de la regla de los
signos. Además, usted al trazarla, debe tomar en cuenta los puntos de altura 1 de las curvas factores. `],
    
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
        ],
      },
    ]
  },
  artifact_1: { 

    conditions: {

      asymptotes: [
        { x: 1.5, name: '+' },
        { x: 4.5, name: '-' },
        { x: 7.5, name: '+' },
      ]
    },

  },
  artifact_2: {    
     conditions: {

    asymptotes: [
      { x: 1.5, name: '-' },
      { x: 4.5, name: '+' },
      { x: 7.5, name: '-' },
    ]
  }, },

  artifact_3: {  conditions: {

    asymptotes: [
      { x: 1.5, name: '+' },
      { x: 4.5, name: '-' },
      { x: 7.5, name: '+' },
    ]
  }, },
  artifact_4: {


conditions: {

    asymptotes: [
      { x: 2, name: '+' },
    
      { x: 6, name: '+' },
    ]
  }},
  artifact_5: {     conditions: {

    asymptotes: [
      { x: 1.5, name: '-' },
      { x: 4.5, name: '+' },
      { x: 7.5, name: '-' },
    ]
  }, },
  artifact_6: { 

    conditions: {

      asymptotes: [
        { x: 1.5, name: '+' },
        { x: 4.5, name: '+' },
        { x: 7.5, name: '+' },
      ]
    }, 

   },
};

generator(rDef);
mainAsymptotes(defBoards, rDef);
defBoardDefault();