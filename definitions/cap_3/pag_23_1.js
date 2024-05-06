let rDef = {
  artifactHtml: {
    datadefault: [
      {
        customKeyboard: 3,

        type: 11, // switch case
        classGlobal: 'QA', //
        parent: '#oneContainer', //
        contents: {
          artifact_1: {
            allinputs: [], //nodos que se van generando
            dataInteraction: { incorrect: 0, correct: 0 }, // aciertos y fallas
            questions: [


              {
                type: 3, // una pregunta. Varios inputs
                question:
                  '¿Qué apareció? ',
                inputsDefault: [
                  ['', false],

                ],

                conditions: {
                  valueInputs: [
                    ['Error', 'error']

                  ],
                },
              },


            ],
          },

        },
      },

      {
        type: 11, // switch case
        classGlobal: 'QA', //
        parent: '#twoContainer', //
        contents: {
          artifact_2: {
            allinputs: [], //nodos que se van generando
            dataInteraction: { incorrect: 0, correct: 0 }, // aciertos y fallas
            questions: [


              {
                type: 2,
                question: '¿Para cuales números obtuvo un número?',
                answers_values: [
                  '',
                  '-1, -3, -10, -2.3',
                  '3, 5, 6.1, 4.2',

                ],
                conditions: {
                  correctIndex: 2,
                },
              },

              {
                type: 1,
                question: '¿Signo?',
                answers_values: [
                  '+',
                  '-',

                ],
                conditions: {
                  correctIndex: '+',
                },
              },

              {
                type: 2,
                question: '¿Para cuales números no obtuvo un número?',
                answers_values: [
                  '',
                  '3, 5, 6.1, 4.2',
                  '-1, -3, -10, -2.3',


                ],
                conditions: {
                  correctIndex: 2,
                },
              },


              {
                type: 1,
                question: '¿Signo?',
                answers_values: [
                  '+',
                  '-',

                ],
                conditions: {
                  correctIndex: '-',
                },
              }


            ],
          },

        },
      },
    ]
  }
}






generator(rDef);

