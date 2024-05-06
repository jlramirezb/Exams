let def = {

  example_artifact_1: {

    variableX:'7',
    buttonsActive: false,
    characteristicsArtifact: {
      typeForm: 'artifactGrid',
      width:'250px',
      height: 'auto',
      arrow: {
        count: 2,
        direction: 'down'
      },
      typeDiv: [
        {
          rounded: {
            count: 3,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '150px',
              height: '50px'
            }
          }
        },
        {
          square: {
            count: 2,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px'
            }
          }
        }
      ]
  
    },
    defaultinput: {
      screen: {defaultText:[{textValue:'2' ,disabled:true}, {textValue:'0.909297426',disabled:true}, {textValue:'2.482577728',disabled:true}] },
      key:{defaultText:[{textValue:'\\sin\\left(\\right)'},{textValue:'\\exponentialE^{\\left(\\right)}'}],disabled:true}
    },
    conditions: {
      screen: [[], [-7], [7]],
    //    key: []
    }
  },}



const rDef = {
  artifactHtml: {
    datadefault: [
              
      {
        customKeyboard:5,

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
                question: 'El número que aparece en la pantalla es',
                inputsDefault: [
                  ['', false],
                             
                ],
                //classStyle: 'flex-row',
                conditions: {
                  valueInputs: [
                    [2.48257772802],
                       
    
    
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
        customKeyboard:5,

        parent: '#twoContainer', //
        contents: {
          artifact_2: {
            allinputs: [], //nodos que se van generando
            dataInteraction: { incorrect: 0, correct: 0 }, // aciertos y fallas
            questions: [
              {
                type: 3, // una pregunta. Varios inputs
                question:                              ['quiere decir efectuar los pasos I), II) y III) descritos al comienzo, con la salvedad de que en I) en vez de marcar 2 hay que marcar...', false],
                           
                inputsDefault: [
                  ['',null]
                ],
                //classStyle: 'flex-row',
                conditions: {
                  valueInputs: [
                    ['5'],
                      
   
   
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
        customKeyboard:5,
        parent: '#thirdContainer', //
        contents: {
          artifact_3: {
            allinputs: [], //nodos que se van generando
            dataInteraction: { incorrect: 0, correct: 0 }, // aciertos y fallas
            questions: [
              {
                type: 3, // una pregunta. Varios inputs
                question: ['Complete <math display="" class="tml-display" ><msup><mtext>e</mtext><mrow><mrow><mi>sin</mi><mo>⁡</mo></mrow><mrow><mo fence="true" form="prefix">(</mo><mn>5</mn> <mo fence="true" form="postfix">)</mo></mrow> </mrow> </msup></math>', null],
                inputsDefault: [
                  ['',null]                            
                ],
                //classStyle: 'flex-row',
                conditions: {
                  valueInputs: [
                    [0.38330499517],
                     
  
  
                  ],
                },
              },
    
            ],
          },
        },
      },
          
    ],
  },
      
      
};


generateArtifact(def)            
generator(rDef);
