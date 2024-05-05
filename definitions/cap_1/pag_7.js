'use strict';

var targetActive = '';
var inputActive = '';
var defBoards = {
  board_8: {
    style: {
      axis: [false, true, true],
      grid: false,
      maxHeight: 300,
      maxWidth: 500,
      boundingbox: [-4.4, 4.5, 4.8, -4.6],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        yp: [[0, 0], [0, 1]],
        yv: [],
        xd: [[0, 0], [1, 0]],
        xp: [-3.5, -3],
        xv: ['x1', 'x2']
      }
    },
    points: [
    //[x,y,visible,name,type]
      [-3, 3.5, true], [0.6, 3.3, false, 'M4'], [0.2, 3.5, false, 'M5'], [-0.5, 0, false], [2.5, 2, true], [3.5, -3.5, true], [-0.49, -3, true], [4.5, 3.5, true],
      //
      [0, -3.8, false, 'M1'], [0.2, -3.3, false, 'M2'],
      //            [0.1, -3.1, false, "M2"] no queda tan cerca,
      [-0.4, 1.7, false, 'M3'],
      //
      [2.4, -0.6, false, 'x4'], [3.4, 0, false, 'x5'], [-0.6, 0.1, false, 'x3'], [4.4, -0.6, false, 'x6']
    //
    ],

    lines: [
    //[[lista de puntos],dash,flecha primera,flecha segunda,color]
      [[[-3, 0], [-3, 3.5]], 1, false, false], [[[-3.5, 0], [-3.5, 3]], 1, false, false], [[[-0.5, 0], [-0.5, -3]], 1, false, false], [[[-3.5, 3], [0, 3]], 1, false, false], [[[-3, 3.5], [4.5, 3.5]], 1, false, false], [[[0, 2], [2.5, 2]], 1, false, false], [[[-0.5, -3], [0, -3]], 1, false, false], [[[0, -3.5], [3.5, -3.5]], 1, false, false], [[[3.5, 0], [3.5, -3.5]], 1, false, false], [[[2.5, 2], [2.5, 0]], 1, false, false], [[[4.5, 3.5], [4.5, 0]], 1, false, false]],
    curves: [
    //[[lista de puntos],Color]
      [[[-3, 3.5, false], [-3.5, 3, true], [-0.5, -3, false], [0, -2.7], [1.5, 0, false], [2.3, 1.9, false], [2.5, 2, true], [2.6, 1.9, false], [3.5, -3.5, true], [3.6, -3.4, false], [4.5, 3.5, true]], 'black']]
  }
};
window.onload = initMain();
function initMain() {
  defBoardDefault();
}
;

// function cleanData() {
//     return Object.keys(def).map((artifact) => {
//         let result = {}
//         result[artifact] = def[artifact].dataInteraction
//         return result
//     });
// };

// def = {
//     artifact_1:{
//         conditions:[
//             ["1","2","3","4","5"],
//             ["1","2","3","4","5"],
//     ],
//     }
// }
// //+++++++++++++++++++++++

// const counters = {
//     respCorrect: 0,
//     respIncorrect: 0,
// }

// const successResponse = [
//     {
//         idInput: 'input_1',
//         responses: ['elminimolocal','elmínimolocal', 'elminimorelativo', 'elmínimorelativo',
//         'minimolocal', 'mínimolocal', 'minimorelativo', 'mínimorelativo' ]
//     },
//     {
//         idInput: 'input_2',
//         responses: ['x3']
//     },
//     {
//         idInput: 'input_3',
//         responses: ['elmaximolocal', 'elmáximolocal', 'elmaximorelativo', 'elmáximorelativo',
//         'maximolocal', 'máximolocal', 'maximorelativo', 'máximorelativo']
//     },
//     {
//         idInput: 'input_4',
//         responses: ['x4']
//     },
//     {
//         idInput: 'input_5',
//         responses: ['elminimolocal', 'elmínimolocal', 'elminimorelativo', 'elmínimorelativo',
//         'minimolocal', 'mínimolocal', 'minimorelativo', 'mínimorelativo']
//     },
//     {
//         idInput: 'input_6',
//         responses: ['x1']
//     },
//     {
//         idInput: 'input_7',
//         responses: ['elmaximoglobal', 'elmáximoglobal', 'elmaximoabsoluto', 'elmáximoabsoluto',
//         'maximoglobal', 'máximoglobal', 'maximoabsoluto', 'máximoabsoluto']
//     },
//     {
//         idInput: 'input_8',
//         responses: ['x6x2', 'x2x6', '{x6,x1}', '{x2,x6}']
//     },
// ]

// const btnValidate = document.querySelector('#btn-validation1')
// const btnReset = document.querySelector('#btn-reset1')
// const inputs = document.querySelectorAll('.input-form');

// btnValidate.addEventListener('click', () => {

//     const dataInteraction = []
//     const inputs = document.querySelectorAll('.input-form');
//     // const input2Value = input2.value.trim().replaceAll(' ', '').replaceAll('.', '').toLowerCase();

//     inputs.forEach((input) => {
//         const successValues = successResponse.find((object) => object.idInput === input.id);
//         const inputValue = input.value.trim().replaceAll(' ', '').replaceAll('.', '').toLowerCase().replaceAll('y', '').replaceAll(';', '')
//         dataInteraction.push({
//             name: input.id,
//             value: input.value
//         })
//         if (successValues.responses.includes(inputValue)) {
//             counters.respCorrect += 1
//             document.querySelector(`#${input.id}`).classList.remove("input_invalid")
//             document.querySelector(`#${input.id}`).classList.add("input_valid")

//         } else {
//             counters.respIncorrect += 1
//             document.querySelector(`#${input.id}`).classList.remove("input_valid")
//             document.querySelector(`#${input.id}`).classList.add("input_invalid")

//         }        
//     })

//     sendData(createData({ artifactType: "Standard", artifactName: 1, respCorrect: counters.respCorrect, respIncorrect: counters.respIncorrect, useElementArtifact: true, inputsValues: dataInteraction}))
//     counters.respCorrect = 0
//     counters.respIncorrect = 0

// })

// btnReset.addEventListener('click', () => {
//     const inputs = document.querySelectorAll('.input-form')
//     inputs.forEach((input) => {
//     input.value = ''
//     document.querySelector(`#${input.id}`).classList.remove("input_invalid")
//     document.querySelector(`#${input.id}`).classList.remove("input_valid")

// })

// })

// function createData ({ artifactType, artifactName, respCorrect = 0, respIncorrect = 0, comments = null, useElementArtifact = false, inputsValues = null }) {
//     let data = {
//         typeArtifact: artifactType,
//         artifact: artifactName,
//         results: {
//             correct: respCorrect,
//             incorrect: respIncorrect
//         }

//     }
//     if (comments) {
//         data.comments = {}
//         comments.forEach((field) => {
//             data.comments[field.name] = field.value 
//         })
//     }
//     if (useElementArtifact) {
//         data.elementArtifact = {
//             inputsValues: {}
//         }
//         inputsValues.forEach((input) => {
//             data.elementArtifact.inputsValues[input.name] = input.value
//         })
//     }

//     return data;
// }

// function cleanData(artifactName, respCorrect, respIncorrect) {
//     // const data = {
//     //     [artifactName]: {
//     //         respCorrect: respCorrect,
//     //         respIncorrect: respIncorrect,
//     //     }
//     // }

//     const data = {
//         typeArtifact: "Standard",
//         artifact: artifactName,
//         results: {
//             correct: respCorrect,
//             incorrect: respIncorrect,
//         },
//     }

//     return data
// }

var rDef = {
  artifactHtml: {
    datadefault: [{
      type: 13,
      interactive: true,
      classGlobal: 'QA',
      parent: '#oneContainer',
      contents: {
        artifact_1: {
          allinputs: [],
          header: [],
          dataInteraction: {
            incorrect: 0,
            correct: 0,
            forAnswer: 0
          },
          cells: [
          //   [

            //  {
            //    type: 0,
            //    text:['<math><msub>  <mi>M</mi>  <mn>1</mn></msub></math>  es',null],
            //    conditions:{
            //      correctIndex: null,
            //    }
            //  },
            //  {
            //    type: 2,
            //     answers_values: ["","Mínimo global", "Mínimo local","Máximo global","Máximo local"],
            //     conditions: {
            //     correctIndex: 1,
            //    },
            //  },
            //  {
            //   type: 0,
            //   text:["Es alcanzado en",null],
            //   conditions:{
            //     correctIndex: null,
            //   },

            // },
            // {
            //   type: 2,
            //    answers_values: ["","x1", "x2","x3","x4","x5","x6","X2,X6"],
            //    conditions: {
            //    correctIndex: 5,
            //   },
            // },
            // ],
            [{
              type: 0,
              text: ['<math><msub>  <mi>M</mi>  <mn>2</mn></msub></math>  es', null],
              conditions: {
                correctIndex: null
              }
            }, {
              type: 2,
              answers_values: ['', 'Mínimo global', 'Mínimo local', 'Máximo global', 'Máximo local'],
              conditions: {
                correctIndex: 2
              }
            }, {
              type: 0,
              text: ['Es alcanzado en', null],
              conditions: {
                correctIndex: null
              }
            }, {
              type: 2,
              answers_values: ['', 'x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'X2,X6'],
              conditions: {
                correctIndex: 3
              }
            }], [{
              type: 0,
              text: ['<math><msub>  <mi>M</mi>  <mn>3</mn></msub></math>  es', null],
              conditions: {
                correctIndex: null
              }
            }, {
              type: 2,
              answers_values: ['', 'Mínimo global', 'Mínimo local', 'Máximo global', 'Máximo local'],
              conditions: {
                correctIndex: 4
              }
            }, {
              type: 0,
              text: ['Es alcanzado en', null],
              conditions: {
                correctIndex: null
              }
            }, {
              type: 2,
              answers_values: ['', 'x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'X2,X6'],
              conditions: {
                correctIndex: 4
              }
            }], [{
              type: 0,
              text: ['<math><msub>  <mi>M</mi>  <mn>4</mn></msub></math>  es', null],
              conditions: {
                correctIndex: null
              }
            }, {
              type: 2,
              answers_values: ['', 'Mínimo global', 'Mínimo local', 'Máximo global', 'Máximo local'],
              conditions: {
                correctIndex: 2
              }
            }, {
              type: 0,
              text: ['Es alcanzado en', null],
              conditions: {
                correctIndex: null
              }
            }, {
              type: 2,
              answers_values: ['', 'x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'X2,X6'],
              conditions: {
                correctIndex: 1
              }
            }], [{
              type: 0,
              text: ['<math><msub>  <mi>M</mi>  <mn>5</mn></msub></math>  es', null],
              conditions: {
                correctIndex: null
              }
            }, {
              type: 2,
              answers_values: ['', 'Mínimo global', 'Mínimo local', 'Máximo global', 'Máximo local'],
              conditions: {
                correctIndex: 3
              }
            }, {
              type: 0,
              text: ['Es alcanzado en', null],
              conditions: {
                correctIndex: null
              }
            }, {
              type: 2,
              answers_values: ['', 'x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'X2,X6'],
              conditions: {
                correctIndex: 7
              }
            }]]
        }
      }
    }]
  }
};
generator(rDef);