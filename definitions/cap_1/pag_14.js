//__________________________________________________________________________________________________________________________
//:::::::::::::::::::::::::::::::::::::::::::::::::::|| Definición de los Boards ||:::::::::::::::::::::::::::::::::::::

const defBoards = {
  board_1: {
    style: {
      boundingbox: [-3, 3, 3, -3],
      axis: [false, true, true],
      grid: true,
      valueAxis: {
        yd: [[0, 0], [0, 1]],		        
        xd: [[0, 0], [1, 0]],
      },
      maxHeight: 300,
      maxWidth: 300,
    },
  },
};  

//____________________________________________________________________________________________________________________________


//_____________________________________________________________________________________________________________________________

//::::::::::::::::::::::::::::::::::::::::::::::::|| Definición de los Artefactos ||:::::::::::::::::::::::::::::::::::::::::::

const def = {
  artifact_1: {
    board: 'board_1',                                                          //board a utilizar
    statementBottom: ['ƒ(-2) = -2','ƒ(1) = 1', 'ƒ(2) = 2'],                   //enunciado 
    conditions: {                                                            //Condiciones para la validación
      conexa: { type: 1 },                                                //tipo de curva
      compare: {values: [[-2, '=', -2], [1, '=', 1], [2, '=', 2]]},      //valores a comparar para saber si es valido
    },
  },

  artifact_2: {
    board: 'board_1',
    statementBottom: ['ƒ(-2) = -2', 'ƒ(1) = 1', 'ƒ(2) = 1'],
    conditions: {
      conexa: { type: 1 }, 
      compare: {values: [[-2, '=', -2], [1, '=', 1], [2, '=', 1]]},
    },
  },

  artifact_3:{
    board: 'board_1',   
    statementBottom:['ƒ(-2) = 1','ƒ(1) = 1','ƒ(2) = 1 '],
    conditions :{
      conexa: { type: 1 },
      compare: {values: [[-2, '=', 1],[1, '=', 1],[2, '=', 1]]},
    },
  },

  artifact_4:{
    board: 'board_1',   
    statementBottom:['ƒ(-2) = 1','ƒ(1) = -2','ƒ(2) = 1 '],
    conditions :{
      conexa: { type: 1 },
      compare: {values: [[2, '=', 1],[1, '=', -2],[2, '=',1]]},
    },
  },

  artifact_5:{
    board: 'board_1', 
    statementBottom: ['ƒ(-2) = 1','ƒ(1) = 2','ƒ(2) = 1'],       
    conditions:{
      conexa: { type: 1 },
      compare: {values: [[-2, '=', 1], [1, '=', 2], [2, '=', 1]]},
    },
  },

  artifact_6:{
    board: 'board_1', 
    statementBottom: ['ƒ(-1) = 2','ƒ(2) = 0','ƒ(0) = -1'],
    conditions:{
      conexa: { type: 1 },
      compare: {values: [[-1, '=', 2], [2, '=', 0], [0, '=', -1]]},
    },
  },

  artifact_7:{
    board: 'board_1', 
    statementBottom: ['ƒ(-1) = 1','ƒ(0) = 0','ƒ(1) = 1'],
    conditions:{
      conexa: { type: 1 },
      compare: {values: [[-1, '=', 1], [0, '=', 0], [1, '=', 1]]},
    },
  },

  artifact_8:{
    board: 'board_1', 
    statementBottom: ['ƒ(-1) = -1','ƒ(0) = 0','ƒ(1) = -1'],
    conditions:{
      conexa: { type: 1 },
      compare: {values: [[-1, '=', -1], [0, '=', 0],[1, '=', -1]]},
    },
  },
    
  artifact_9:{
    board: 'board_1', 
    statementBottom: ['ƒ(-2) = 2','ƒ(0) = 0','ƒ(2) = 2'],
    conditions:{
      conexa: { type: 1 },
      compare: {values: [[-2, '=', 2],[0, '=', 0],[2,'=',2]]},
    },
  },
    
  artifact_10:{
    board: 'board_1', 
    statementBottom: ['ƒ(-1) = 0','ƒ(0) = 1','ƒ(1) = 0'],
    conditions:{
      conexa: { type: 1 },
      compare: {values: [[-1, '=', 0],[0, '=', 1],[1, '=', 0]]},
    },
  },
    
  artifact_11:{
    board: 'board_1', 
    statementBottom: ['ƒ(-1) = 0','ƒ(0) = -1','ƒ(1) = 0'],
    conditions:{
      conexa: { type: 1 },
      compare: {values: [[-1, '=', 0], [0, '=', -1],[1, '=', 0]]},
    },
  },
    
  artifact_12:{
    board: 'board_1', 
    statementBottom: ['ƒ(-1) < 0','ƒ(0) = 0','ƒ(1) < 0'],
    conditions:{
      conexa: { type: 1 },
      compare: {values: [[-1, '<', 0], [0, '=', 0], [1, '<', 0]]},
    },
  },
};
//_________________________________________________________________________________________________________

window.onload = main();