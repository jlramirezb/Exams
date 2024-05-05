let defBoards = {
  board_1: {
    style: {
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0],
          [0, 1],],
        yp: [-1, 1, 2, 3],
        yv: ['-1', '1', '2', '3'],
        xd: [[0, 0],
          [1, 0],],
      },
      grid: false,
      boundingbox: [-4, 4, 4, -2],
 
    },
    lines: [
      [[[2.5, 0, false, 'd'], [2.5, -1.3]], 0, true, true],
      [[[0.5, 0, false, 'c'], [0.5, 2.4]], 0, true, true],
      [[[-1.2, 0, false, 'b'], [-1.2, 3.3]], 0, true, true],
      [[[-2.8, 0, false, 'a'], [-2.8, 1.8]], 0, true, true],
 
 
      [[[-8, 0.9], [8, 0.9]], 0, false, false],
      [[[-8, 1.9], [8, 1.9]], 0, false, false],
      [[[-8, 2.9], [8, 2.9]], 0, false, false],
      [[[-8, -0.9], [8, -0.9]], 0, false, false],
 
 
 
    ],
    curves: [
      [[[-3, 1.5], [-2, 2.9], [-1.5, 3.2], [0, 3], [1.5, 0], [1.7, -0.8],
        [2, -1.2], [2.4, -1.3], [3, -0.8], [3.6, 0, false, 'e'],],],
    ],
    pointsReference: [],
  },
  board_2: {
    style: {
      axis: [false, true, true],
      grid: false,
      valueAxis: {
        yd: [[0, 0], [0, 1],],
        xd: [[0, 0], [1, 0],],
      },
      boundingbox: [-3, 3, 3, -2],
    },
    lines: [
      [[[0.5, -4, false], [0.5, 4],], 2, false, false,],
    ],
    curves: [
      [[[-2, 0.2], [-1.18, 0.3], [0.2, 0.23], [0.8, 0.47], [0.9, 0.6], [1, 1]]],
      [[[0.1, 1.2], [0.2, 1.1], [0.5, 1.1], [1, 1]]],
      [[[0.1, 1.2], [0.2, 1.8], [0.3, 2]]],
      [[[0.3, 2], [0.5, 2.07], [1, 2], [1.2, 2.2]]],
    ],
  },
};
 
const rDef = {
  artifactHtml: {
    datadefault: [
         
      {
        type: 11, // switch case
        classGlobal: 'QA', //
        parent: '#oneContainer', //
        contents: {
          artifact_1: {
            allinputs: [], //nodos que se van generando
            dataInteraction: { incorrect: 0, correct: 0 }, // aciertos y fallas
            questions: [
              {
                type: 2,
                question:
                           '¿En cuáles la curva tiene altura mayor que 2? ',
                answers_values: ['' ,'a,c', 'b,c' ,'a,b'],
                conditions: {
                  correctIndex: 2,
                },
              },
 
              ,
              {
                type: 2,
                question:
                          ' ¿En cuáles la curva tiene altura menor que 2? ',
                answers_values: ['', 'a,b,c', 'a,d,e', 'a,c,e'],
                conditions: {
                  correctIndex: 2,
                },
              },
              {
                type: 2,
                question:
                          ' ¿En cuáles la altura es positiva? ',
                answers_values: ['', 'a,d,c', 'a,d,e', 'a,b,c'],
                conditions: {
                  correctIndex: 3,
                },
              },
              {
                type: 2,
                question:
                          ' ¿En cuáles la altura es negativa? ',
                answers_values: ['', 'e', 'c', 'd'],
                conditions: {
                  correctIndex: 3,
                },
              },
              {
                type: 2,
                question:
                          '¿Puede decir cual es la altura de la curva en "e"? ',
                answers_values: ['', '0','1', '2', '3'],
                conditions: {
                  correctIndex: 1,
                },
              },
 
              {
                type: 1,
                question:
                          '¿La altura en "a" es mayor que la altura en "b"? ',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'No',
                },
              },
              {
                type: 1,
                question:
                          '¿La altura en "a" es mayor que la altura en "c"? ',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'No',
                },
              },
 
            ],
          },
        },
      },
      {
        type: 11, // switch case
        classGlobal: 'QA', //
        parent: '#oneContainer2', //
        contents: {
          artifact_2: {
            allinputs: [], //nodos que se van generando
            dataInteraction: { incorrect: 0, correct: 0 }, // aciertos y fallas
            questions: [
              {
                type: 1,
                question:
                           '¿Existe algún punto diferente de "e", para el cuál la altura de la curva es cero? ',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'Sí',
                },
              },
  
              ,
              {
                type: 1,
                question: '¿Existe algún punto para el cuál la curva tenga altura 6?',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'No',
                },
              },
              ,
              {
                type: 2,
                question:
                           '¿Dónde la curva es "más alta"? ',
                answers_values: ['', 'a', 'c', 'b','d', 'e'],
                conditions: {
                  correctIndex: 3,
                },
              },
              {
                type: 2,
                question:
                           ' ¿Dónde la curva es "más baja"?  ',
                answers_values: ['', 'a', 'c', 'b', 'd','e'],
                conditions: {
                  correctIndex: 4,
                },
              },
              {
                type: 1,
                question:
                           '¿3 es mayor que todas las posibles alturas de la curva?',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'No',
                },
              },
  
              {
                type: 1,
                question:
                           '¿2 es mayor que todas las posibles alturas de la curva? ',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'No',
                },
              },
  
  
              {
                type: 1,
                question:
                           '¿-1 es menor que cualquiera de las alturas de la curva?',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'No',
                },
              },
  
              ,
              {
                type: 1,
                question:
                           '¿-2 es menor que cualquiera de las alturas de la curva? ',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'Sí',
                },
              },
  
            ],
          },
        },
      },
    ],
  },
 
 
};
 
generator(rDef);
 
 
defBoardDefault();