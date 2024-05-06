let def = {
  artifact_example_1: {
    variableX:'-2',
    // buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGridSimple',   
      width:'320px',
      height: 'auto',
      arrow: {
        count: 1,
        direction: 'down'
      },
      typeDiv: [
        {
          rounded: {
            count: 2,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '200px',
              height: '50px'
            }
          }
        },
        {
          square: {
            count: 1,
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
      screen: {defaultText:[{textValue:'' ,disabled:true},{textValue:'-2' ,disabled:true}] },
      key:{defaultText:[{textValue:'\\left(\\right)^{\\frac12}'}],disabled:true}
    },
    conditions: {
      screen: [[], []],
    //    key: []
    }
  },

} 



let rDef = {
  artifactHtml: {
    datadefault: [
      {
        type: 13, 
        customKeyboard:4,

        interactive:true,
        classGlobal: 'QA', 
        parent: '#tabla1',
        contents: {
          artifact_1: {
            allinputs: [], 
            header:['T','Dominio de T'],
            dataInteraction: { incorrect: 0, correct: 0,forAnswer: 0},
            cells: [
              [
        
                {
                  type: 0,
                  text:['\\sqrt{\\left(\\right)}',true],
                  conditions:{
                    correctIndex: null,
                  }
                },

                {
                  type: 3, 
                  inputsDefault: [
                    ['a', false],
                     
                  ],
        
                  conditions: {
                    valueInputs: [
                      ['\\left\\lbrack0,\\infty\\right)'],
             
                    ],
                  },
                },
                
           
              ],
               
              [
        
                {
                  type: 0,
                  text:['\\sin\\left(\\right)',true],
                  conditions:{
                    correctIndex: null,
                  }
                },
                        

                {
                  type: 3, 
                  inputsDefault: [
                    ['a', false],
                           
                  ],
              
                  conditions: {
                    valueInputs: [
                      ['\\left(-\\infty,\\infty\\right)'],
                   
                    ],
                  },
                },
               
              ],
              [
        
                {
                  type: 0,
                  text:['\\cos\\left(\\right)',true],
                  conditions:{
                    correctIndex: null,
                  }
                },
                {
                  type: 3, 
                  inputsDefault: [
                    ['a', false],
                           
                  ],
              
                  conditions: {
                    valueInputs: [
                      ['\\left(-\\infty,\\infty\\right)'],
                   
                    ],
                  },
                },
               
              ],
              [
        
                {
                  type: 0,
                  text:['\\cos^{-1}',true],
                  conditions:{
                    correctIndex: null,
                  }
                },
                {
                  type: 3, 
                  inputsDefault: [
                    ['a', false],
                           
                  ],
              
                  conditions: {
                    valueInputs: [
                      ['\\left\\lbrack-1,1\\right\\rbrack'],
                   
                    ],
                  },
                },
               
              ],
              [
        
                {
                  type: 0,
                  text:['\\left(\\right)^2',true],
                  conditions:{
                    correctIndex: null,
                  }
                },
                {
                  type: 3, 
                  inputsDefault: [
                    ['a', false],
                           
                  ],
              
                  conditions: {
                    valueInputs: [
                      ['\\left(-\\infty,\\infty\\right)'],                   
                    ],
                  },
                },
               
              ],
              [
                {
                  type: 0,
                  text:['\\left(\\right)^{-1}',true],
                  conditions:{
                    correctIndex: null,
                  }
                },

                {
                  type: 3, 
                  inputsDefault: [
                    ['a', false],
                           
                  ],
              
                  conditions: {
                    valueInputs: [
                      ['\\left(-\\infty,0\\right)\\cup\\left(0,\\infty\\right)'],                   
                    ],
                  },
                },
               
              ],
            ],
          },
               
            
             
        
        },
      },



      {
        customKeyboard:4,

        type: 13, 
        interactive:true,
        classGlobal: 'QA', 
        parent: '#tabla1',
        contents: {
          artifact_2: {
            dataInteraction: { incorrect: 0, correct: 0,forAnswer: 0},

            allinputs: [], 
            dataInteraction: { incorrect: 0, correct: 0,forAnswer: 0},

            header:['T','Rango de T'],
            cells: [
              [
        
                {
                  type: 0,
                  text:['\\sqrt{\\left(\\right)}',true],
                  conditions:{
                    correctIndex: null,
                  }
                },

                {
                  type: 3, 
                  inputsDefault: [
                    ['a', false],
                     
                  ],
        
                  conditions: {
                    valueInputs: [
                      ['\\left\\lbrack0,\\infty\\right)'],
             
                    ],
                  },
                },
                
           
              ],
               
              [
        
                {
                  type: 0,
                  text:['\\sin\\left(\\right)',true],
                  conditions:{
                    correctIndex: null,
                  }
                },
                        

                {
                  type: 3, 
                  inputsDefault: [
                    ['a', false],
                           
                  ],
              
                  conditions: {
                    valueInputs: [
                      ['\\left\\lbrack-1,1\\right\\rbrack'],
                   
                    ],
                  },
                },
               
              ],
              [
        
                {
                  type: 0,
                  text:['\\cos\\left(\\right)',true],
                  conditions:{
                    correctIndex: null,
                  }
                },
                {
                  type: 3, 
                  inputsDefault: [
                    ['a', false],
                           
                  ],
              
                  conditions: {
                    valueInputs: [
                      ['\\left\\lbrack-1,1\\right\\rbrack'],
                   
                    ],
                  },
                },
               
              ],
              [
        
                {
                  type: 0,
                  text:['\\cos^{-1}',true],
                  conditions:{
                    correctIndex: null,
                  }
                },
                {
                  type: 3, 
                  inputsDefault: [
                    ['a', false],
                           
                  ],
              
                  conditions: {
                    valueInputs: [
                      ['\\left\\lbrack0,\\pi\\right\\rbrack'],
                   
                    ],
                  },
                },
               
              ],
              [
        
                {
                  type: 0,
                  text:['\\left(\\right)^2',true],
                  conditions:{
                    correctIndex: null,
                  }
                },
                {
                  type: 3, 
                  inputsDefault: [
                    ['a', false],
                           
                  ],
              
                  conditions: {
                    valueInputs: [
                      ['\\left\\lbrack0,\\infty\\right)'],                   
                    ],
                  },
                },
               
              ],
              [
                {
                  type: 0,
                  text:['\\left(\\right)^{-1}',true],
                  conditions:{
                    correctIndex: null,
                  }
                },

                {
                  type: 3, 
                  inputsDefault: [
                    ['a', false],
                           
                  ],
              
                  conditions: {
                    valueInputs: [
                      ['\\left(-\\infty,0\\right)\\cup\\left(0,\\infty\\right)'],                   
                    ],
                  },
                },
               
              ],
            ],
          },
               
            
             
        
        },
      },



    ]}
}

generateArtifact(def)
generator(rDef);
