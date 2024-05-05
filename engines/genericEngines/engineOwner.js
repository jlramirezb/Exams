//const { Response } = require("node-fetch");


// const { template } = require("@babel/core");
let KeyBoardsCollection = {

  'CustomKeyBoard1-19': {
    MG_KEYBOARD_LAYER: {
      styles: 'margin: 0 auto;',
      simbolos: {
        styles: '',
        rows: [
          [

          ], [



            { latex: '<' },
            { latex: '>' },
            { latex: '\\leq' },
            { latex: '\\geq' },
            {
              class: 'action font-glyph bottom right',
              label: '&#x232b;',
              command: ['performWithFeedback', 'deleteBackward']
            }




          ],
          [
            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
              command: ['performWithFeedback', 'moveToPreviousChar'],
            },
            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
              command: ['performWithFeedback', 'moveToNextChar'],
            },
            {},
            { label: '∄', insert: '\\nexists' },
            { label: '≠', insert: '≠' },






          ],
          // [



          // ],


        ],
      },
    },
    MG_KEYBOARD: {
      simbolos: {
        label: 'Simbolos',

        layer: 'simbolos',
      }
    },
    virtualKeyboards: 'simbolos'
    ,
  },

  'CustomKeyBoard2-4-7': {
    MG_KEYBOARD_LAYER: {
      numeros: {
        rows: [
          [],
          [
            { label: '1', key: '1', },
            { label: '2', key: '2' },
            { label: '3', key: '3' },
            { label: '4', key: '4' },
            { label: '5', key: '5' },

            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
              command: ['performWithFeedback', 'moveToPreviousChar'],
            },

            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
              command: ['performWithFeedback', 'moveToNextChar'],
            },
          ],
          [
            { label: '6', key: '6' },
            { label: '7', key: '7' },
            { label: '8', key: '8' },
            { label: '9', key: '9' },
            { label: '0', key: '0' },
            { label: '=', key: '='},
            {
              class: 'action font-glyph bottom right',
              label: '&#x232b;',
              command: ['performWithFeedback', 'deleteBackward'],
            },
          ],
          [
            { label: '+', key: '+' },
            { latex: '-', key: '-' },
            { label:'*', key:'*'},
            { latex:'\\frac{\\placeholder{}}{\\placeholder{}}'},
            { label: '.', key: '.' },
            { label: ',', key: ',' },
            { label: ';', key: ';' },

          ],
        ],
      },
      funciones: {
        rows: [
          [],
          [
            {class: 'small', latex: '\\sin'},
            {class: 'small', latex: '\\cos'},
            {class: 'small', latex: '\\tan'},
            {class: 'small', latex: '\\ln'},
            {class: 'small', latex: '\\placeholder{}^{\\placeholder{}}'},
            {class: 'small', latex: '\\placeholder{}^2'},
            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
              command: ['performWithFeedback', 'moveToPreviousChar'],
            },

            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
              command: ['performWithFeedback', 'moveToNextChar'],
            },
            
          ], [
            {class: 'small', latex: '\\sin^{-1}'},
            {class: 'small',  latex: '\\cos^{-1}'},
            {class: 'small', latex: '\\tan^{-1}'},
            {class: 'small', latex: '\\exponentialE'},
            {class: 'small', latex: '\\sqrt{\\placeholder{}}'},
            {class: 'small', label: '(', key: '(' },
            {class: 'small', label: ')', key: ')' },            
            {
              class: 'action font-glyph bottom right',
              label: '&#x232b;',
              command: ['performWithFeedback', 'deleteBackward'],
            },
          ],
          [
            {class: 'small', latex: 'f'},
            {class: 'small', latex: 'f^{-1}'},
            {class: 'small', latex: 'g'},
            {class: 'small', latex: 'g^{-1}'},
            {class: 'small', latex: 'k'},
            {class: 'small', latex: 'k^{-1}'},
            {class: 'small', latex: 'h'},
            {class: 'small', latex: 'h^{-1}'},
          ],
        ],
      },
      alfabeto: {
        rows: [
          [],
          [
            { label: 'a', key: 'a' },
            { label: 'b', key: 'b' },
            { label: 'c', key: 'c' },
            { label: 'd', key: 'd' },
            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
              command: ['performWithFeedback', 'moveToPreviousChar'],
            }, {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
              command: ['performWithFeedback', 'moveToNextChar'],
            },
          ], [
            { label: 'x', key: 'x' },
            { label: 'y', key: 'y' },
            { label: 'z', key: 'z' },
            {latex:'\\emptyset '},
            {label: '∄', key: '∄'},
            {
              class: 'action font-glyph bottom right',
              label: '&#x232b;',
              command: ['performWithFeedback', 'deleteBackward']
            }
          ],
          [ {latex:'\\pi'},{}, {},{}, {},{},]
        ],
      },

    },
    MG_KEYBOARD: {
      numeros: {
        label: '123',
        layer: 'numeros',
      },
       
      alfabeto: {
        label: 'Alfabeto',
        layer: 'alfabeto',
      },
      funciones: {
        label: 'ƒ()',
        layer: 'funciones',
      },
    },
    virtualKeyboards: 'numeros funciones alfabeto'
  },

  'CustomKeyBoard3__27_14':{

    MG_KEYBOARD_LAYER: {
      styles: 'margin: 0 auto;',
      operadores: {
        styles: '',
        rows: [[],  [     {
          label: 'x',
          key: 'x'
        }, 

        {
          label: 'Error',
          key: 'Error'
        },

        {
          label: '0',
          key: '0'
        },
        {
          label: '1',
          key: '1'
        },
        {
          'class': 'small',
          latex: '\\frac{#@}{#0}',
          key: '/'
        }, {
          'class': 'action',
          label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
          command: ['performWithFeedback', 'moveToPreviousChar']
        }, {
          'class': 'action',
          label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
          command: ['performWithFeedback', 'moveToNextChar']
        }, {
          'class': 'action font-glyph bottom right',
          label: '&#x232b;',
          command: ['performWithFeedback', 'deleteBackward']
        }]
          /////////////////
        ]
      },


      variables: {
        styles: '',
        rows: [[], [
       
          {
            'class': 'action',
            label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
            command: ['performWithFeedback', 'moveToPreviousChar']
          }, {
            'class': 'action',
            label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
            command: ['performWithFeedback', 'moveToNextChar']
          }, {
            'class': 'action font-glyph bottom right',
            label: '&#x232b;',
            command: ['performWithFeedback', 'deleteBackward']
          }]]
      },

    }, MG_KEYBOARD: {

      numeros: {
        label: 'Números',
        layer: 'numeros'
      },
      variables: {
        label: 'Variables',
        layer: 'variables'
      },
      operadores: {
        label: 'Operadores',
        layer: 'operadores'
      }
    }, virtualKeyboards: 'operadores   '

  },
  'CustomKeyBoard3--24_1':{
    MG_KEYBOARD_LAYER: {
      styles: 'margin: 0 auto;',
      operadores: {
        styles: '',
        rows: 
            [
              [{
                label: '+',
                key: '+'
              }, {
                label: '-',
                key: '-'
              },  {
                latex: '('
              }, {
                latex: ')'
              }, 
      
              {
                label: '*',
                key: '*'
              },


         
         
              ], [
           

                {
                  latex:  '∞'
                }, 
                {
                  latex: '['
                }, {
                  latex: ']'
                },
                {
                  latex: '\\cup'
                }, 
                {
                  latex: '∩'
                }, 

        
              ],

              [               {
                latex: '\\pi'
              },  {
                'class': 'action',
                label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
                command: ['performWithFeedback', 'moveToPreviousChar']
              }, {
                'class': 'action',
                label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
                command: ['performWithFeedback', 'moveToNextChar']
              }, {
                'class': 'action font-glyph bottom right',
                label: '&#x232b;',
                command: ['performWithFeedback', 'deleteBackward']
              }]
              /////////////////
            ]
      },

      numeros: {
        styles: '',
        rows: [
          [
   
            { label: '1', key: '1' },
            { label: '2', key: '2' },
            { label: '3', key: '3' },
            { label: '4', key: '4' },
            { label: '5', key: '5' },
   
          ], [
   
            { label: '6', key: '6' },
            { label: '7', key: '7' },
            { label: '8', key: '8' },
            { label: '9', key: '9' },
            { label: '0', key: '0' },
   
   
          ], [
            { label: '.', key: '.' },
            { label: ',', key: ',' },
            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
              command: ['performWithFeedback', 'moveToPreviousChar'],
            }, {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
              command: ['performWithFeedback', 'moveToNextChar'],
            }, {
              class: 'action font-glyph bottom right',
              label: '&#x232b;',
              command: ['performWithFeedback', 'deleteBackward']
            }
          ],
        ],
      },


        

    }, MG_KEYBOARD: {

      // numeros: {
      //   label: "Números",
      //   layer: "numeros"
      // },
 
      operadores: {
        label: 'Operadores',
        layer: 'operadores'
      },


 
      numeros: {
        label: 'Numeros',
        layer: 'numeros'
      }

    }, virtualKeyboards: 'operadores  numeros '
  },

  'CustomKeyBoard3--1':{
    MG_KEYBOARD_LAYER: {
      numeros: {
        rows: [
          [],
          [
            {class: 'small', label: '1', key: '1', },
            {class: 'small',  label: '2', key: '2' },
            {class: 'small',  label: '3', key: '3' },
            {class: 'small',  label: '4', key: '4' },
            {class: 'small',  label: '5', key: '5' },

            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
              command: ['performWithFeedback', 'moveToPreviousChar'],
            },

            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
              command: ['performWithFeedback', 'moveToNextChar'],
            },
          ],
          [
            {class: 'small',  label: '6', key: '6' },
            {class: 'small',  label: '7', key: '7' },
            {class: 'small',  label: '8', key: '8' },
            {class: 'small',  label: '9', key: '9' },
            {class: 'small',  label: '0', key: '0' },
            {class: 'small',  label: '=', key: '='},
            {
              class: 'action font-glyph bottom right',
              label: '&#x232b;',
              command: ['performWithFeedback', 'deleteBackward'],
            },
          ],
          [
            { label: '+', key: '+' },
            { latex: '-', key: '-' },
            { label:'*', key:'*'},
            { latex:'\\frac{\\placeholder{}}{\\placeholder{}}'},
            { label: '.', key: '.' },
            { label: ',', key: ',' },
            { label: ';', key: ';' },

          ],
        ],
      },
      funciones: {
        rows: [
          [],
          [
            {class: 'small',  insert: '\\sin'},
            {class: 'small',  insert: '\\cos'},
            {class: 'small',  insert: '\\tan'},
            {class: 'small',  insert: '\\ln'},
            {class: 'small',  insert: '\\placeholder{}^{\\placeholder{}}'},
            {class: 'small',  insert: '\\placeholder{}^2'},
            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
              command: ['performWithFeedback', 'moveToPreviousChar'],
            },

            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
              command: ['performWithFeedback', 'moveToNextChar'],
            },
            
          ], [
            {class: 'small',  insert: '\\sin^{-1}'},
            {class: 'small',  insert: '\\cos^{-1}'},
            {class: 'small',  insert: '\\tan^{-1}'},
            {class: 'small',  insert: '\\exponentialE'},
            {class: 'small',  insert: '\\sqrt{\\placeholder{}}'},
            {class: 'small',  label: '(', key: '(' },
            {class: 'small',  label: ')', key: ')' },            
            {
              class: 'action font-glyph bottom right',
              label: '&#x232b;',
              command: ['performWithFeedback', 'deleteBackward'],
            },
          ],
          [
            {class: 'small', insert: 'f'},
            {class: 'small',  insert: 'f^{-1}'},
            {class: 'small',  insert: 'g'},
            {class: 'small',  insert: 'g^{-1}'},
            {class: 'small',  insert: 'k'},
            {class: 'small',  insert: 'k^{-1}'},
            {class: 'small',  insert: 'h'},
            {class: 'small',  insert: 'h^{-1}'},
          ],
        ],
      },
      alfabeto: {
        rows: [
          [],
          [
            {class: 'small',  label: 'a', key: 'a' },
            {class: 'small',  label: 'b', key: 'b' },
            {class: 'small',  label: 'c', key: 'c' },
            {class: 'small',  label: 'd', key: 'd' },
            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
              command: ['performWithFeedback', 'moveToPreviousChar'],
            }, {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
              command: ['performWithFeedback', 'moveToNextChar'],
            },
          ], [
            {class: 'small', label: 'x', key: 'x' },
            {class: 'small', label: 'y', key: 'y' },
            {class: 'small', label: 'z', key: 'z' },
            {class: 'small', insert:'\\emptyset '},
            {class: 'small', label: '∄', key: '∄'},
            {
              class: 'action font-glyph bottom right',
              label: '&#x232b;',
              command: ['performWithFeedback', 'deleteBackward']
            }
          ],
          [ {class: 'small',  insert:'\\pi'},{}, {},{}, {},{},]
        ],
      },

    },
    MG_KEYBOARD: {
      numeros: {
        label: '123',
        layer: 'numeros',
      },
       
      funciones: {
        label: 'ƒ()',
        layer: 'funciones',
      },
    },
    virtualKeyboards: 'numeros funciones'


  },

  'CustomKeboard3--14':{

    MG_KEYBOARD_LAYER: {
      numeros: {
        rows: [
          [],
          [
            { label: '1', key: '1', },
            { label: '2', key: '2' },
            { label: '3', key: '3' },
            { label: '4', key: '4' },
            { label: '5', key: '5' },

            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
              command: ['performWithFeedback', 'moveToPreviousChar'],
            },

            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
              command: ['performWithFeedback', 'moveToNextChar'],
            },
          ],
          [
            { label: '6', key: '6' },
            { label: '7', key: '7' },
            { label: '8', key: '8' },
            { label: '9', key: '9' },
            { label: '0', key: '0' },
            { label: '=', key: '='},
            {
              class: 'action font-glyph bottom right',
              label: '&#x232b;',
              command: ['performWithFeedback', 'deleteBackward'],
            },
          ],
          [
            { label: '+', key: '+' },
            { latex: '-', key: '-' },
            { label:'*', key:'*'},
            { latex:'\\frac{\\placeholder{}}{\\placeholder{}}'},
            { label: '.', key: '.' },
            { label: ',', key: ',' },
            { label: ';', key: ';' },

          ],
        ],
      },
      funciones: {
        rows: [
          [],
          [
            { latex: '\\sin'},
            { latex: '\\cos'},
            { latex: '\\tan'},
            { latex: '\\ln'},
            { latex: '\\placeholder{}^{\\placeholder{}}'},
            { latex: '\\placeholder{}^2'},
            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
              command: ['performWithFeedback', 'moveToPreviousChar'],
            },

            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
              command: ['performWithFeedback', 'moveToNextChar'],
            },
            
          ], [
            { latex: '\\sin^{-1}'},
            { latex: '\\cos^{-1}'},
            { latex: '\\tan^{-1}'},
            { latex: '\\exponentialE'},
            { latex: '\\sqrt{\\placeholder{}}'},
            { label: '(', key: '(' },
            { label: ')', key: ')' },            
            {
              class: 'action font-glyph bottom right',
              label: '&#x232b;',
              command: ['performWithFeedback', 'deleteBackward'],
            },
          ],
          [
            { latex: 'f'},
            { latex: 'f^{-1}'},
            { latex: 'g'},
            { latex: 'g^{-1}'},
            { latex: 'k'},
            { latex: 'k^{-1}'},
            { latex: 'h'},
            { latex: 'h^{-1}'},
          ],
        ],
      },
      alfabeto: {
        rows: [
          [],
          [
            { label: 'a', key: 'a' },
            { label: 'b', key: 'b' },
            { label: 'c', key: 'c' },
            { label: 'd', key: 'd' },
            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
              command: ['performWithFeedback', 'moveToPreviousChar'],
            }, {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
              command: ['performWithFeedback', 'moveToNextChar'],
            },
          ], [
            { label: 'x', key: 'x' },
            { label: 'y', key: 'y' },
            { label: 'z', key: 'z' },
            {latex:'\\emptyset '},
            {label: '∄', key: '∄'},
            {
              class: 'action font-glyph bottom right',
              label: '&#x232b;',
              command: ['performWithFeedback', 'deleteBackward']
            }
          ],
          [ {latex:'\\pi'},{}, {},{}, {},{},]
        ],
      },

    },
    MG_KEYBOARD: {
      numeros: {
        label: '123',
        layer: 'numeros',
      },
       
      alfabeto: {
        label: 'Alfabeto',
        layer: 'alfabeto',
      },
      funciones: {
        label: 'ƒ()',
        layer: 'funciones',
      },
    },
    virtualKeyboards: 'numeros funciones alfabeto'
   
  },

  'CustomKeyBorad1--10':{
    MG_KEYBOARD_LAYER: {
      styles: 'margin: 0 auto;',
      operadores: {
        styles: '',
        rows: [[], [{
          label: '+',
          key: '+'
        }, {
          label: '-',
          key: '-'
        }, {
          label: '*',
          key: '*'
        }, {
          latex: '('
        }, {
          latex: ')'
        }, 

        {
          latex: '\\cup'
        }, 
        {
          latex: '∩'
        }, 

        {
          latex: '\\pi'
        }, 
      
      
      
        ], [
        

          {
            latex:  '∞'
          }, 
          {
            latex: '['
          }, {
            latex: ']'
          },

          {
            'class': 'action',
            label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
            command: ['performWithFeedback', 'moveToPreviousChar']
          }, {
            'class': 'action',
            label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
            command: ['performWithFeedback', 'moveToNextChar']
          }, {
            'class': 'action font-glyph bottom right',
            label: '&#x232b;',
            command: ['performWithFeedback', 'deleteBackward']
          }]
          /////////////////
        ]
      },

      numeros: {
        styles: '',
        rows: [
          [

            { label: '1', key: '1' },
            { label: '2', key: '2' },
            { label: '3', key: '3' },
            { label: '4', key: '4' },
            { label: '5', key: '5' },

          ], [

            { label: '6', key: '6' },
            { label: '7', key: '7' },
            { label: '8', key: '8' },
            { label: '9', key: '9' },
            { label: '0', key: '0' },


          ], [
            { label: '.', key: '.' },
            { label: ',', key: ',' },
            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
              command: ['performWithFeedback', 'moveToPreviousChar'],
            }, {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
              command: ['performWithFeedback', 'moveToNextChar'],
            }, {
              class: 'action font-glyph bottom right',
              label: '&#x232b;',
              command: ['performWithFeedback', 'deleteBackward']
            }
          ],
        ],
      },

      simbolos: {
        styles: '',
        rows: [[], [{
          latex: 'e',
          key: 'e'
        }, {
          label: '∄',
          insert: '\\nexists'
        }, {
          latex: '\\pi'
        }, {
          latex: '\\empty'
        }, {
          latex: '\\infty'
        }, {
          label: '≠',
          insert: '≠'
        }], [{
          latex: '<'
        }, {
          latex: '>'
        }, {
          latex: '\\leq'
        }, {
          latex: '\\geq'
        }, {
          'class': 'action',
          label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
          command: ['performWithFeedback', 'moveToPreviousChar']
        }, {
          'class': 'action',
          label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
          command: ['performWithFeedback', 'moveToNextChar']
        }, {
          'class': 'action font-glyph bottom right',
          label: '&#x232b;',
          command: ['performWithFeedback', 'deleteBackward']
        }]]
      },
      variables: {
        styles: '',
        rows: [[], [{
          label: 'a',
          key: 'a'
        }, {
          label: 'b',
          key: 'b'
        }, {
          label: 'c',
          key: 'c'
        }, {
          latex: 'd',
          key: 'd'
        }, {
          latex: 'e',
          key: 'e'
        }, {
          latex: 'f',
          key: 'f'
        }, {
          latex: 'g',
          key: 'g'
        }, {
          latex: 'h',
          key: 'h'
        }, {
          latex: 'i',
          key: 'i'
        }], [{
          latex: 'j',
          key: 'j'
        }, {
          latex: 'k',
          key: 'k'
        }, {
          latex: 't',
          key: 't'
        }, {
          label: 'x',
          key: 'x'
        }, {
          label: 'y',
          key: 'y'
        }, {
          label: 'z',
          key: 'z'
        }, {
          'class': 'action',
          label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
          command: ['performWithFeedback', 'moveToPreviousChar']
        }, {
          'class': 'action',
          label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
          command: ['performWithFeedback', 'moveToNextChar']
        }, {
          'class': 'action font-glyph bottom right',
          label: '&#x232b;',
          command: ['performWithFeedback', 'deleteBackward']
        }]]
      },


     

    }, MG_KEYBOARD: {

      // numeros: {
      //   label: "Números",
      //   layer: "numeros"
      // },

      operadores: {
        label: 'Operadores',
        layer: 'operadores'
      },



      numeros: {
        label: 'Numeros',
        layer: 'numeros'
      },
      simbolos: {
        label: 'Simbolos',
        layer: 'simbolos'
      },
      variables: {
        label: 'Variables',
        layer: 'variables'
      },

    }, virtualKeyboards: 'operadores  numeros variables simbolos '

  },
  'CustomKeyBoard3-20': {
    MG_KEYBOARD_LAYER: {
      numeros: {
        rows: [
          [],
          [
            { label: '1', key: '1', },
            { label: '2', key: '2' },
            { label: '3', key: '3' },
            { label: '4', key: '4' },
            { label: '5', key: '5' },

            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
              command: ['performWithFeedback', 'moveToPreviousChar'],
            },

            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
              command: ['performWithFeedback', 'moveToNextChar'],
            },
          ],
          [
            { label: '6', key: '6' },
            { label: '7', key: '7' },
            { label: '8', key: '8' },
            { label: '9', key: '9' },
            { label: '0', key: '0' },
            { label: '=', key: '='},
            {
              class: 'action font-glyph bottom right',
              label: '&#x232b;',
              command: ['performWithFeedback', 'deleteBackward'],
            },
          ],
          [
            { label: '+', key: '+' },
            { latex: '-', key: '-' },
            { label:'*', key:'*'},
            { latex:'\\frac{\\placeholder{}}{\\placeholder{}}'},
            { label: 'x', key: 'x' },
            {latex: '('}, {latex: ')'},

          ],
        ],
      },

   

    },
    MG_KEYBOARD: {
      numeros: {
        label: '123',
        layer: 'numeros',
      },
       
      alfabeto: {
        label: 'Alfabeto',
        layer: 'alfabeto',
      },
 
    },
    virtualKeyboards: 'numeros'
  },
  'simpleNumeric': {
    MG_KEYBOARD_LAYER: {
      numeros: {
        rows: [
          [],
          [
            { label: '1', key: '1', },
            { label: '2', key: '2' },
            { label: '3', key: '3' },
            { label: '4', key: '4' },
            { label: '5', key: '5' },

            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
              command: ['performWithFeedback', 'moveToPreviousChar'],
            },

            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
              command: ['performWithFeedback', 'moveToNextChar'],
            },
          ],
          [
            { label: '6', key: '6' },
            { label: '7', key: '7' },
            { label: '8', key: '8' },
            { label: '9', key: '9' },
            { label: '0', key: '0' },
             {},{
              class: 'action font-glyph bottom right',
              label: '&#x232b;',
              command: ['performWithFeedback', 'deleteBackward'],
            }
          ],
          [{latex: '∄'}       ,   {latex: '-'} ,             {latex: '.'},{},{},{},{}],

        ],
      },

   

    },
    MG_KEYBOARD: {
      numeros: {
        label: '123',
        layer: 'numeros',
      },
       
      alfabeto: {
        label: 'Alfabeto',
        layer: 'alfabeto',
      },
 
    },
    virtualKeyboards: 'numeros'
  },

};





let ownerTargetActive = '';
let ownerTargetInput = '';





function addCustomKeybord(definition) {
  let keyboardOption;

  if (definition?.customKeyboard) {
    let customKb = definition?.customKeyboard;
    let parent = document.querySelector(definition.parent);


    let allMyInputs = parent.querySelectorAll('math-field[data-question="true"]');

    if (customKb === 0) {
      keyboardOption = null;
    }
    else if (customKb === 1) {
      keyboardOption = KeyBoardsCollection['CustomKeyBoard2-4-7'];
    }
    else if (customKb === 2) {
      keyboardOption = KeyBoardsCollection['CustomKeyBoard1-19'];

    }
    else if (customKb === 3){
      keyboardOption = KeyBoardsCollection['CustomKeyBoard3__27_14'];

    }
    else if (customKb === 4){
      keyboardOption = KeyBoardsCollection['CustomKeyBoard3--24_1'];

    }
    else if (customKb === 5){
      keyboardOption = KeyBoardsCollection['CustomKeyBoard3--1'];

    }
    else if (customKb === 6){
      keyboardOption = KeyBoardsCollection['CustomKeyBoard3--14'];

    }

    else if (customKb === 7){
      keyboardOption = KeyBoardsCollection['CustomKeyBorad1--10'];


    }
    else if (customKb === 8){
      keyboardOption = KeyBoardsCollection['CustomKeyBoard3-20'];


    }   
    else if (customKb === 9){
      keyboardOption = KeyBoardsCollection['simpleNumeric'];


    }   
    allMyInputs.forEach((element) => {
      const optionsKeyboard = getKeyboardMath(window.screen.width, keyboardOption);
      element.setOptions({
        customVirtualKeyboardLayers: optionsKeyboard[0],
        customVirtualKeyboards: optionsKeyboard[1],
        virtualKeyboards: optionsKeyboard[2],
      });
    });


  }
}
let allMyInputs;
function generator(def) {
  let mainOwner = document.querySelector('#mainOwner');
  let grid = document.querySelector('#grid');
  let template = document.querySelector('#template');
  let fragment = new DocumentFragment();
  for (let key of Object.keys(def)) {
    let defDefault = {
      defInput: [],
      dataInteraction: {
        correct: 0,
        incorrect: 0,
      },
      defValueInput: def[key].defValueInput || false,
      changeContent: def[key].changeContent || false,
      sizeInput: def[key].sizeInput || false,
    };
    const clone = template.content.firstElementChild.cloneNode(true);
    const conteiner = clone.querySelector('.content_2');
    clone.setAttribute('data-ejercicio', key);
    clone.addEventListener('mouseenter', (e) => {
      ownerTargetActive = clone.dataset.ejercicio;
    });
    clone.addEventListener('mouseleave', (e) => {
      ownerTargetActive = '';
    });
    def[key] = { ...def[key], ...defDefault };
    fragment.appendChild(clone);
    add(key, conteiner, def[key].datadefault, grid);
    if (def[key].changeContent) {
      grid.appendChild(fragment);
    } else {
      mainOwner.appendChild(fragment);
    }
  }
}

function add(key, conteiner, iterator, grid) {

  if (iterator) {
    for (let el of iterator) {

      if (Array.isArray(el)) {
        //Parrafo = 1
        if (el[0] == 1) {
          let div = document.createElement('div');

          let p = document.createElement('p');
          p.textContent = el[1];
          div.appendChild(p);
          div.className = 'contenedor texto';
          p.className = 'parrafo';
          conteiner.appendChild(p);
        }
        //subtitulo = 2
        if (el[0] == 2) {
          let div = document.createElement('div');
          let h5 = document.createElement('h5');
          h5.textContent = el[1];
          div.appendChild(h5);
          conteiner.appendChild(div);
          div.className = 'contenedor';
          h5.className = 'subtitulo';
        }
        //Subtitulo y parrafo  = 3
        if (el[0] == 3) {
          let div = document.createElement('div');
          let p = document.createElement('p');
          let h5 = document.createElement('h5');
          h5.textContent = el[1];
          p.textContent = el[2];
          div.appendChild(h5);
          div.appendChild(p);
          conteiner.appendChild(div);
          div.className = 'contenedor textDouble';
          p.className = 'parrafo margen-5';
          h5.className = 'subtitulo margen-5';
        }
        //Board de la curvas
        if (el[0] == 4) {
          let padre = document.createElement('div');
          let hijo = document.createElement('div');
          conteiner.appendChild(padre);
          padre.appendChild(hijo);
          padre.className = 'content_1';
          hijo.className = 'defBoard jxgbox short-board';
          hijo.setAttribute('data-board', el[1]);
        }
        //Tableros
        if (el[0] == 5) {
          let ExprestionSort = [];
          let ResulExpressItem = [];

          //Contenedor
          let div = document.createElement('div');
          div.className =
                  'contenedor table-responsive reduce-table margen-bottom-50 margen-top-50';
          let table = document.createElement('table');
          table.className = 'table table-bordered table-width ';
          let thead = document.createElement('thead');
          let tbody = document.createElement('tbody');

          //Botones
          let ownerTargetInput = '';
          //posicion del cursor en el input
          let targetStart = '';
          let targetEnd = '';
          let btn_content = document.createElement('div');
          let allButtons = document.createElement('div');
          allButtons.className = 'content_1 allbuttons';
          btn_content.className = 'content_1';

          let btn_check = document.createElement('button');
          let btn_reset = document.createElement('button');
          let btn_empty = document.createElement('button');
          let btn_setOf = document.createElement('button');
          let btn_infinity = document.createElement('button');
          let btn_ParenthesisRight = document.createElement('button');
          let btn_ParenthesisLeft = document.createElement('button');
          let btn_BracketsLeft = document.createElement('button');
          let btn_BracketsRight = document.createElement('button');
          btn_empty.setAttribute('data-text', '∅');
          btn_setOf.setAttribute('data-text', '∪');
          btn_infinity.setAttribute('data-text', '∞');
          btn_ParenthesisRight.setAttribute('data-text', ')');
          btn_ParenthesisLeft.setAttribute('data-text', '(');
          btn_BracketsLeft.setAttribute('data-text', '[');
          btn_BracketsRight.setAttribute('data-text', ']');
          btn_check.className = 'check buttonPrimary button-marg buttonKey';
          btn_reset.className = 'reset buttonSecundary button-marg buttonKey';
          btn_empty.className =
                  'empty buttonTertiary button-marg buttonTarget buttonKey';
          btn_setOf.className =
                  'setOf buttonTertiary button-marg buttonTarget buttonKey';
          btn_infinity.className =
                  'infiniteWrite buttonTertiary button-marg buttonTarget buttonKey';
          btn_ParenthesisRight.className =
                  'parenthesisRight buttonTertiary button-marg buttonTarget buttonKey';
          btn_ParenthesisLeft.className =
                  'parenthesisLeft buttonTertiary button-marg buttonTarget buttonKey';
          btn_BracketsLeft.className =
                  'bracketsLeft buttonTertiary button-marg buttonTarget buttonKey';
          btn_BracketsRight.className =
                  'bracketsRight buttonTertiary button-marg buttonTarget buttonKey';

          allButtons.appendChild(btn_ParenthesisLeft);
          allButtons.appendChild(btn_ParenthesisRight);
          allButtons.appendChild(btn_BracketsLeft);
          allButtons.appendChild(btn_BracketsRight);
          allButtons.appendChild(btn_setOf);
          allButtons.appendChild(btn_infinity);
          allButtons.appendChild(btn_empty);
          //btn_content.appendChild(allButtons);
          btn_content.appendChild(btn_reset);
          btn_content.appendChild(btn_check);

          //generadores de filas y columnas
          for (let i = 0; i < el[1]; i++) {
            let th = document.createElement('th');
            th.setAttribute('scope', 'row');
            thead.appendChild(th);
          }

          for (let i = 0; i < el[2]; i++) {
            let tr = document.createElement('tr');
            let th = document.createElement('th');
            th.className = 'media-th';
            th.setAttribute('scope', 'row');
            tr.appendChild(th);
            tbody.appendChild(tr);

            for (inputFor = 0; inputFor < el[1] - 1; inputFor++) {
              let td = document.createElement('td');
              td.className = 'center-td';
              let input = document.createElement('input');
              input.setAttribute('inputmode', 'none');

              if (el[1] > 3) {
                input.classList.add('input-width');
                table.classList.add('table-width');
                div.className = 'reduce-table';
              }
              input.style = 'text-align:center';
              input.classList.add('input-width-normalice');
              def[key].defInput.push(input);

              td.appendChild(input);
              tr.appendChild(td);
              input.addEventListener('click', () => {
                ownerTargetInput = input;
              });
            }
          }
          for (let item of Object.keys(thead.children)) {
            thead.children[item].classList.add('item');
            thead.children[item].textContent = el[3][item];
          }
          for (let element of Object.keys(tbody.children)) {
            tbody.children[element].children[0].classList.add('item');
            tbody.children[element].children[0].textContent = el[4][element];
          }
          //Valor predefinido
          if (def[key].defValueInput) {
            tbody.children[0].children[1].children[0].setAttribute(
              'disabled',
              'disabled'
            );
            tbody.children[0].children[2].children[0].setAttribute(
              'disabled',
              'disabled'
            );
            tbody.children[0].children[1].children[0].value =
                     def[key].defValueInput[0];
            tbody.children[0].children[2].children[0].value =
                     def[key].defValueInput[1];
          }

          /* /\(-?[0-9],-?[0-9]\)[,;]\(-?[0-9],-?[0-9]\)/g */
          btn_check.addEventListener('click', () => {
            def[key].dataInteraction.correct = 0;
            def[key].dataInteraction.incorrect = 0;

            if (def[key].defValueInput) {
              for (item = 2; item < def[key].defInput.length; item++) {
                const regex = /(\+∞)/g;
                let ExpresRex = /\)[,y]\(/;
                //let toLower = def[key].defInput[item].value.replace(new RegExp("[' ']", 'g'), "").replace(new RegExp(ExpresRex, 'g'), ");(").replace(regex, '∞').toLocaleLowerCase()
                let toLower = def[key].defInput[item].value
                  .replace(new RegExp('[\' \']', 'g'), '')
                  .replace(regex, '∞')
                  .toLocaleLowerCase();
                const separador =
                           toLower.match(/[∪]/g) !== null &&
                              toLower.match(/[;y]/g) !== null
                              ? false
                              : toLower.match(/[∪]/g) !== null &&
                                 toLower.match(/[;y]/g) !== null
                                 ? '∪'
                                 : ';';
                //(?<=chau)hola
                let oper = /[y;∪]|(?<=\)|\]),/g;
                //console.log(toLower.match(oper));

                if (
                  def[key].conditions[item].includes(
                    toLower.split(oper).sort().join(';')
                  )
                ) {
                  def[key].defInput[item].classList.add('pass');
                  def[key].defInput[item].classList.remove('failed');
                  def[key].dataInteraction.correct += 1;
                } else {
                  def[key].defInput[item].classList.remove('pass');
                  def[key].defInput[item].classList.add('failed');
                  def[key].dataInteraction.incorrect += 1;
                }
              }
            } else {
              for (item in def[key].conditions) {
                //

                const regex = /(\+∞)/g;
                let ExpresRex = /\)[,y;]\(|\][,y;]\(|\)[,y;]\[|\][,y;]\[/;
                let ExpressCondition = /[,y;]/;

                let toLower = def[key].defInput[item].value
                  .replace(new RegExp('[\' \']', 'g'), '')
                  .replace(regex, '∞')
                  .toLocaleLowerCase();
                if (ExpresRex.test(toLower)) {
                  let t1 = toLower.replace(
                    new RegExp(ExpresRex, 'g'),
                    `${toLower[toLower.search(ExpresRex)]}${toLower[
                      toLower.search(ExpresRex) + 1
                    ].replace(new RegExp(ExpressCondition, 'g'), ';')}${toLower[toLower.search(ExpresRex) + 2]
                    }`
                  );

                  if (
                    def[key].conditions[item].includes(
                      t1.split(';').sort().join(';')
                    )
                  ) {
                    def[key].defInput[item].classList.add('pass');
                    def[key].defInput[item].classList.remove('failed');
                    def[key].dataInteraction.correct += 1;
                  } else {
                    def[key].defInput[item].classList.remove('pass');
                    def[key].defInput[item].classList.add('failed');
                    def[key].dataInteraction.incorrect += 1;
                  }

                  //(-1,0],(1,0)

                  //console.log('Separador', def[key].defInput[item].value[def[key].defInput[item].value.search(ExpresRex) + 1])
                  //console.log('Expresion', def[key].defInput[item].value)
                  //console.log('replace', toLower.replace(new RegExp(ExpresRex, 'g'), `${toLower[toLower.search(ExpresRex)]}${toLower[toLower.search(ExpresRex) + 1].replace(new RegExp(ExpressCondition, 'g'), ';')}${toLower[toLower.search(ExpresRex) + 2]}`))
                } else {
                  if (def[key].conditions[item].includes(toLower)) {
                    def[key].defInput[item].classList.add('pass');
                    def[key].defInput[item].classList.remove('failed');
                    def[key].dataInteraction.correct += 1;
                  } else {
                    def[key].defInput[item].classList.remove('pass');
                    def[key].defInput[item].classList.add('failed');
                    def[key].dataInteraction.incorrect += 1;
                  }
                }
              }
            }

            sendData(cleanDataJ());
          });

          btn_reset.addEventListener('click', () => {
            if (def[key].defValueInput) {
              for (
                itemInput = 1;
                itemInput < tbody.children.length;
                itemInput++
              ) {
                for (
                  count = 2;
                  count < tbody.children[itemInput].children.length;
                  count++
                ) {
                  for (
                    i = 1;
                    i < tbody.children[itemInput].children.length;
                    i++
                  ) {
                    tbody.children[itemInput].children[i].children[0].value =
                                 '';
                    tbody.children[itemInput].children[
                      i
                    ].children[0].classList.remove('pass');
                    tbody.children[itemInput].children[
                      i
                    ].children[0].classList.remove('failed');
                  }
                }
              }
            } else {
              for (element of Object.keys(tbody.children)) {
                for (
                  itemInput = 1;
                  itemInput < tbody.children[element].children.length;
                  itemInput++
                ) {
                  tbody.children[element].children[
                    itemInput
                  ].children[0].value = '';
                  tbody.children[element].children[
                    itemInput
                  ].children[0].classList.remove('pass');
                  tbody.children[element].children[
                    itemInput
                  ].children[0].classList.remove('failed');
                }
              }
            }
          });

          window.addEventListener('click', (e) => {
            if (e.target.tagName === 'INPUT') {
              ownerTargetInput = e.target;
            }
          });

          allButtons.addEventListener('click', (e) => {
            if (
              e.target.classList.value.includes('buttonTarget') &&
                     ownerTargetInput != null
            ) {
              defAllBottons(e.target.dataset.text);
              ownerTargetInput.focus();
            }
          });

          function defAllBottons(buttons) {
            targetStart = ownerTargetInput.selectionStart;
            targetEnd = ownerTargetInput.selectionEnd;
            if (ownerTargetInput) {
              ownerTargetInput.setRangeText(buttons, targetStart, targetEnd, 'end');
            }
          }

          //insertando tablas y contenedores de boton al container principal
          table.appendChild(thead);
          table.appendChild(tbody);
          div.appendChild(table);
          div.appendChild(btn_content);

          conteiner.appendChild(div);
        }
        //Board_Double and tablet 2x6
        if (el[0] == 6) {
          let contenedor = document.createElement('div');
          let contentBoardTable = document.createElement('div');
          let contentBoard = document.createElement('div');
          let board_1 = document.createElement('div');
          let board_2 = document.createElement('div');

          let contentBoard_1 = document.createElement('div');
          let contentBoard_2 = document.createElement('div');
          let contentConexa = document.createElement('div');
          let contentDisconexa = document.createElement('div');
          let conexa = document.createElement('p');
          let disconexa = document.createElement('p');
          contentConexa.appendChild(conexa);
          contentDisconexa.appendChild(disconexa);
          conexa.className = 'titulo';
          disconexa.className = 'titulo';
          conexa.textContent = el[7];
          disconexa.textContent = el[8];
          contentBoard_1.className = 'item reduce-table';
          contentBoard_2.className = 'item reduce-table';
          contentBoard_1.appendChild(contentConexa);
          contentBoard_2.appendChild(contentDisconexa);
          contentBoard_1.appendChild(board_1);
          contentBoard_2.appendChild(board_2);

          contentBoardTable.classList.add('table-board');
          contentBoard.classList.add('contentBoard_Double');
          contentBoard.classList.add('margen-button');
          board_1.className = 'defBoard jxgbox short-board board-item';
          board_1.setAttribute('data-board', el[5]);
          board_2.className = 'defBoard jxgbox short-board';
          board_2.setAttribute('data-board', el[6]);

          contenedor.classList.add('contenedor');
          contentBoardTable.classList.add('table-board');
          let contentTable = document.createElement('div');
          contentTable.classList.add('contentTable');
          let table = document.createElement('table');
          table.className = 'table table-bordered tablet3x6';
          let thead = document.createElement('thead');
          let tbody = document.createElement('tbody');
          table.appendChild(thead);
          table.appendChild(tbody);
          contentTable.appendChild(table);

          //Botones

          let ownerTargetInput = '';
          //posicion del cursor en el input
          let targetStart = '';
          let targetEnd = '';
          let btn_content = document.createElement('div');
          btn_content.className = 'content_1';
          let btn_check = document.createElement('button');
          let btn_reset = document.createElement('button');
          let btn_empty = document.createElement('button');
          btn_empty.setAttribute('data-text', '∅');
          btn_check.className = 'check buttonPrimary button-marg buttonKey';
          btn_reset.className = 'reset buttonSecundary button-marg buttonKey';
          btn_empty.className = 'empty buttonTertiary buttonKey';
          btn_content.appendChild(btn_reset);
          btn_content.appendChild(btn_check);
          //btn_content.appendChild(btn_empty)

          //generadores de filas y columnas
          for (i = 0; i < el[1]; i++) {
            let th = document.createElement('th');
            th.setAttribute('scope', 'col');
            thead.appendChild(th);
          }
          for (i = 0; i < el[2]; i++) {
            let tr = document.createElement('tr');
            let th = document.createElement('th');

            th.setAttribute('scope', 'row');
            tr.appendChild(th);
            tbody.appendChild(tr);

            for (input = 0; input < el[1] - 1; input++) {
              let td = document.createElement('td');
              let input = document.createElement('input');
              input.style = 'text-align:center';
              def[key].defInput.push(input);
              td.appendChild(input);
              tr.appendChild(td);
              input.addEventListener('click', () => {
                ownerTargetInput = input;
              });
            }
          }
          for (item of Object.keys(thead.children)) {
            thead.children[item].className = 'item';
            thead.children[item].textContent = el[3][item];
          }
          for (element of Object.keys(tbody.children)) {
            tbody.children[element].children[0].className = 'item';
            tbody.children[element].children[0].textContent = el[4][element];
          }
          btn_check.addEventListener('click', () => {
            def[key].dataInteraction.correct = 0;
            def[key].dataInteraction.incorrect = 0;

            for (item in def[key].defInput) {
              let toLower = def[key].defInput[item].value
                .replace(new RegExp('[\' \']', 'g'), '')
                .toLowerCase();
              if (toLower === def[key].conditions[item][0]) {
                def[key].defInput[item].classList.add('pass');
                def[key].defInput[item].classList.remove('failed');

                def[key].dataInteraction.correct += 1;
              } else {
                def[key].defInput[item].classList.remove('pass');
                def[key].defInput[item].classList.add('failed');
                def[key].dataInteraction.incorrect += 1;
              }
            }
            sendData(cleanDataJ());
          });
          btn_reset.addEventListener('click', () => {
            for (element of Object.keys(tbody.children)) {
              for (
                itemInput = 1;
                itemInput < tbody.children[element].children.length;
                itemInput++
              ) {
                tbody.children[element].children[itemInput].children[0].value =
                           '';
                tbody.children[element].children[
                  itemInput
                ].children[0].classList.remove('pass');
                tbody.children[element].children[
                  itemInput
                ].children[0].classList.remove('failed');
              }
            }
          });

          //añdiendo contenedores
          contentBoard.appendChild(contentBoard_1);
          contentBoard.appendChild(contentBoard_2);
          contenedor.appendChild(contentBoardTable);
          contentBoardTable.appendChild(contentBoard);
          contentBoardTable.appendChild(contentTable);
          contentTable.appendChild(btn_content);
          conteiner.appendChild(contenedor);
        }
        //Genera div con board y cada unno tiene un texto
        if (el[0] == 7) {
          //create elements
          let contenedor = document.createElement('div');
          let BoardContainer = document.createElement('div');
          let BoardPositive = document.createElement('div');
          let BoardNegative = document.createElement('div');
          let arrayDiv = [[], []];
          let contenedorBoardPositive = document.createElement('div');
          let contenedorBoardNegative = document.createElement('div');
          let p = document.createElement('p');
          let searchBoard = /board/gi;
          let elementEmpty = /[' ']/gi;

          if (el[1] > 0) {
            for (i = 0; i < el[1]; i++) {
              let contentText = document.createElement('div');
              contentText.classList.add('contenedor');
              contentText.classList.add('inputCenter');
              contentText.classList.add('content_1');
              contentText.classList.add(`div_${[i]}`);
              contentText.classList.add('borderIndividual');
              BoardPositive.appendChild(contentText);
              arrayDiv[0].push(contentText);
            }

            for (i = 0; i < el[1]; i++) {
              let contentText = document.createElement('div');
              contentText.classList.add('contenedor');
              contentText.classList.add('inputCenter');
              contentText.classList.add('content_1');
              contentText.classList.add('borderIndividual');
              BoardNegative.appendChild(contentText);
              contentText.classList.add(`div_${[i]}`);
              arrayDiv[1].push(contentText);
            }
          }

          if (el[1] > 3) {
            if (searchBoard.test(el[2][1])) {
              //Parte Positiva del cuadro del baord
              arrayDiv[0][0].textContent = el[2][0];
              arrayDiv[0][0].classList.remove('borderIndividual');
              arrayDiv[0][0].classList.add('bold-example');
              contenedorBoardPositive.className = 'defBoard short-board nota';
              contenedorBoardPositive.setAttribute('data-board', el[2][1]);
              arrayDiv[0][1].appendChild(contenedorBoardPositive);
              arrayDiv[0][1].classList.remove('borderIndividual');
                     arrayDiv[0][2] == null
                        ? arrayDiv[0][2].classList.remove('borderIndividual')
                        : (arrayDiv[0][2].textContent = el[2][2]);
                     arrayDiv[0][3] == null
                        ? arrayDiv[0][3].classList.remove('borderIndividual')
                        : (arrayDiv[0][3].textContent = el[2][3]);
                     arrayDiv[0][4] == null
                        ? arrayDiv[0][4].classList.remove('borderIndividual')
                        : (arrayDiv[0][4].textContent = el[2][4]);

                     //Parte Negativa del cuadro del baord
                     arrayDiv[1][0].textContent = el[3][0];
                     arrayDiv[1][0].classList.remove('borderIndividual');
                     arrayDiv[1][0].classList.add('bold-example');
                     contenedorBoardNegative.className = 'defBoard short-board nota';
                     contenedorBoardNegative.setAttribute('data-board', el[3][1]);
                     arrayDiv[1][1].appendChild(contenedorBoardNegative);
                     arrayDiv[1][1].classList.remove('borderIndividual');
                     arrayDiv[1][2] == undefined
                        ? console.log('no hay nada aqui')
                        : (arrayDiv[1][2].textContent = el[3][2]);
                     arrayDiv[1][3] == undefined
                        ? console.log('no hay nada aqui')
                        : (arrayDiv[1][3].textContent = el[3][3]);
                     arrayDiv[1][4] == undefined
                        ? console.log('no hay nada aqui')
                        : (arrayDiv[1][4].textContent = el[3][4]);
            } else {
              //Parte Positiva del cuadro del baord
              arrayDiv[0][0].textContent = el[2][0];
              arrayDiv[0][0].classList.add('bold-example');
              arrayDiv[0][1].textContent = el[2][1];
              contenedorBoardPositive.className = 'defBoard short-board nota';
              arrayDiv[0][2].appendChild(contenedorBoardPositive);
              arrayDiv[0][2].classList.add('content_1');
              contenedorBoardPositive.setAttribute('data-board', el[2][2]);
              arrayDiv[0][3].textContent = el[2][3];

              //Parte Negativa del cuadro del baord
              arrayDiv[1][0].textContent = el[3][0];
              arrayDiv[1][0].classList.add('bold-example');
              arrayDiv[1][1].textContent = el[3][1];
              contenedorBoardNegative.className = 'defBoard short-board nota';
              arrayDiv[1][2].appendChild(contenedorBoardNegative);
              arrayDiv[1][2].classList.add('content_1');
              contenedorBoardNegative.setAttribute('data-board', el[3][2]);
              arrayDiv[1][3].textContent = el[3][3];
            }
          } else {
            if (searchBoard.test(el[2][1])) {
              //Parte Positiva del cuadro del baord
              arrayDiv[0][0].textContent = el[2][0];
              arrayDiv[0][0].classList.remove('borderIndividual');
              arrayDiv[0][0].classList.add('bold-example');
              contenedorBoardPositive.className = 'defBoard short-board nota';
              contenedorBoardPositive.setAttribute('data-board', el[2][1]);
              arrayDiv[0][1].appendChild(contenedorBoardPositive);
              arrayDiv[0][1].classList.remove('borderIndividual');
              arrayDiv[0][2].textContent = el[2][2];

              //Parte Negativa del cuadro del baord
              arrayDiv[1][0].textContent = el[3][0];
              arrayDiv[1][0].classList.remove('borderIndividual');
              arrayDiv[1][0].classList.add('bold-example');
              contenedorBoardNegative.className = 'defBoard short-board nota';
              contenedorBoardNegative.setAttribute('data-board', el[3][1]);
              arrayDiv[1][1].appendChild(contenedorBoardNegative);
              arrayDiv[1][1].classList.remove('borderIndividual');
              arrayDiv[1][2].textContent = el[3][2];
            } else {
              //Parte Positiva del cuadro del baord
              arrayDiv[0][0].textContent = el[2][0];
              arrayDiv[0][0].classList.add('bold-example');
              arrayDiv[0][1].textContent = el[2][1];
              contenedorBoardPositive.className = 'defBoard short-board nota';
              arrayDiv[0][2].appendChild(contenedorBoardPositive);
              arrayDiv[0][2].classList.add('content_1');
              contenedorBoardPositive.setAttribute('data-board', el[2][2]);
              arrayDiv[0][3].textContent = el[2][3];

              //Parte Negativa del cuadro del baord
              arrayDiv[1][0].textContent = el[3][0];
              arrayDiv[1][0].classList.add('bold-example');
              arrayDiv[1][1].textContent = el[3][1];
              contenedorBoardNegative.className = 'defBoard short-board nota';
              arrayDiv[1][2].appendChild(contenedorBoardNegative);
              arrayDiv[1][2].classList.add('content_1');
              contenedorBoardNegative.setAttribute('data-board', el[3][2]);
              arrayDiv[1][3].textContent = el[3][3];
            }
          }

          //adding style in the elements
          contenedor.classList.add('contenedor');
          BoardContainer.classList.add('contentDoubleBaord');
          BoardPositive.classList.add('sizeBoardDouble');
          BoardNegative.classList.add('sizeBoardDouble');

          BoardContainer.appendChild(BoardPositive);
          BoardContainer.appendChild(BoardNegative);
          contenedor.appendChild(BoardContainer);
          conteiner.appendChild(contenedor);
        }
        //Genera los 6 ejercicios del principio de pagina mas sus curvas con titulos
        if (el[0] == 8) {
          let content = document.createElement('div');
          let contentArtefact = document.createElement('div');
          let arrayDivBoard = [];
          let arraDivText = [];
          if (el[1] > 0) {
            for (let i = 0; i < el[1]; i++) {
              let contentExampleText = document.createElement('div');
              let example = document.createElement('div');
              let exampleText = document.createElement('div');
              contentExampleText.appendChild(exampleText);
              contentExampleText.appendChild(example);
              exampleText.classList.add('bold-example');
              contentArtefact.appendChild(contentExampleText);
              contentExampleText.className = 'artefact';
              example.className = 'defBoard test short-board margen-5';
              example.setAttribute('data-board', el[3][i]);
              arrayDivBoard.push(contentExampleText);

              for (let text = 0; text < el[2]; text++) {
                let span = document.createElement('span');
                span.textContent = el[4][i][text];
                arraDivText.push(span);
                exampleText.appendChild(span);
              }
            }
          }
          content.classList.add('contenedorGrid');
          contentArtefact.classList.add('contenTest');
          content.appendChild(contentArtefact);
          conteiner.appendChild(content);

          /* for(i = 0; i < el[1]; i++){
                      let contentExampleText = document.createElement('div');
                      let example = document.createElement('div');
                      let exampleText = document.createElement('div');
                      contentExampleText.appendChild(exampleText);
                      contentExampleText.appendChild(example);
                      contentArtefact.appendChild(contentExampleText);
                      exampleText.classList.add('bold-example');
                      example.className = 'defBoard test short-board margen-5'; 
                      example.setAttribute('data-board',el[3][i]);
                      arrayDivBoard.push(contentExampleText);
                      for(text = 0; text < el[2]; text++){
                        let span = document.createElement('span');
                        span.textContent = el[4][i][text];
                        arraDivText.push(span);
                        exampleText.appendChild(span);
                        
                      }
                    }
                    content.classList.add('contenedorGrid');
                    contentArtefact.classList.add('contenTest');
                    content.appendChild(contentArtefact); 
                    conteiner.appendChild(content); */
        }
        if (el[0] == 9) {
          let regex = /(∞\+|\+∞)/g;
          let searchNum = /{([1-9]+|[1-9]+[.,][1-9]+)}/gi; //  /{(\d+|\d+[.,]\d+)}/gi
          let searchBoard = /board/gi;
          let itemDivText = [];
          let itemInput = [];
          let ownerTargetInput = '';
          let targetBox = '';

          if (el[1] > 0) {
            let contenedorGrid = document.createElement('div');

            for (container = 0; container < el[1]; container++) {
              let box = document.createElement('div');
              box.classList.add('contentArtefact', 'sizeContenedor');
              box.setAttribute('data-content', `${container}`);
              itemDivText.push([container]);
              itemInput.push([]);

              if (el[2] > 0) {
                for (div = 0; div < el[2]; div++) {
                  let contenedorText = document.createElement('div');
                  contenedorText.setAttribute('data-text', `${div}`);
                  contenedorText.classList.add('divOrdenate');
                  itemDivText[container][div] = contenedorText;
                  box.appendChild(contenedorText);

                  if (el[4] === true) {
                    if (el[5].hasOwnProperty('shortInputText')) {
                      box.classList.remove('sizeContenedor');

                      for (
                        count = 0;
                        count < el[5].shortInputText.countInput;
                        count++
                      ) {
                        let divC = document.createElement('div');
                        divC.classList.add('divAlignDouble');
                        divC.style = 'margin:10px ';

                        if (count == 0) {
                          if (el[5].shortInputText.item.at(0) == 'p') {
                            let p = document.createElement('p');
                            p.textContent = el[3][container][div][0][0];
                            p.style = 'margin:0';
                            divC.appendChild(p);
                          }
                          if (el[5].shortInputText.item.at(1) == true) {
                            let input = document.createElement('input');
                            input.classList.add(
                              'inputCenter',
                              'sizeInput-Default'
                            );
                            input.style.height = '28px';
                            divC.appendChild(input);
                            input.addEventListener('click', (e) => {
                              ownerTargetInput = e.target;
                            });
                            itemInput[container].push(input);
                            if (el[5].hasOwnProperty('widthInput')) {
                              input.classList.remove('sizeInput-Default');
                              input.style.width = el[5].widthInput;
                            }
                          }
                          if (el[5].shortInputText.item.at(-1) == 'p') {
                            let p = document.createElement('p');
                            p.textContent = el[3][container][div][0][2];
                            p.style = 'margin:0';
                            divC.appendChild(p);
                          }

                          itemDivText[container][div].appendChild(divC);
                        }
                        if (count == 1) {
                          if (el[5].shortInputText.item.at(0) == 'p') {
                            let p = document.createElement('p');
                            p.textContent = el[3][container][div][1][0];
                            p.style = 'margin:0';
                            divC.appendChild(p);
                          }
                          if (el[5].shortInputText.item.at(1) == true) {
                            let input = document.createElement('input');
                            input.classList.add(
                              'inputCenter',
                              'sizeInput-Default'
                            );
                            input.style.height = '28px';
                            divC.appendChild(input);
                            input.addEventListener('click', (e) => {
                              ownerTargetInput = e.target;
                            });
                            itemInput[container].push(input);
                            if (el[5].hasOwnProperty('widthInput')) {
                              input.classList.remove('sizeInput-Default');
                              input.style.width = el[5].widthInput;
                            }
                          }
                          if (el[5].shortInputText.item.at(-1) == 'p') {
                            let p = document.createElement('p');
                            p.textContent = el[3][container][div][1][2];
                            p.style = 'margin:0';
                            divC.appendChild(p);
                          }

                          itemDivText[container][div].appendChild(divC);
                        }
                      }
                    } else {
                      if (el[5].hasOwnProperty('doubleLayel')) {
                        box.classList.remove('sizeContenedor');

                        for (
                          count = 0;
                          count < el[5].doubleLayel.inputCount;
                          count++
                        ) {
                          let divC = document.createElement('div');
                          divC.classList.add('divAlignDouble');
                          divC.style = 'margin:10px ';

                          let input = document.createElement('input');
                          let p = document.createElement('p');
                          input.classList.add(
                            'inputCenter',
                            'sizeInput-Default'
                          );
                          input.style.height = '28px';

                          if (el[5].hasOwnProperty('widthInput')) {
                            input.classList.remove('sizeInput-Default');
                            input.style.width = el[5].widthInput;
                          } else {
                            console.log('');
                          }
                          p.textContent = el[3][container][div][count];
                          p.style = 'margin:0';
                          divC.appendChild(p);
                          divC.appendChild(input);
                          itemDivText[container][div].appendChild(divC);

                          input.addEventListener('click', (e) => {
                            ownerTargetInput = e.target;
                          });
                          itemInput[container].push(input);
                        }
                      } else {
                        box.classList.remove('sizeContenedor');
                        let divC = document.createElement('div');
                        let order = document.createElement('div');
                        order.classList.add('divAlignSingle');
                        divC.style = 'margin:10px ';
                        let p = document.createElement('p');
                        p.style = 'margin:0';
                        p.textContent = el[3][container][div];
                        let input = document.createElement('input');
                        input.classList.add('inputCenter');
                        if (el[5].nullLittle) {
                          divC.classList.add('orderLitte');
                        } else {
                          divC.classList.add('orderLarge');
                        }
                        if (el[5].hasOwnProperty('sizeInput')) {
                          input.setAttribute('maxlength', el[5].sizeInput);
                          input.classList.add('sizeInput-Default');
                        } else {
                          input.classList.add('input-reduce');
                          input.setAttribute('maxlength', 2);
                        }
                        if (!p.textContent.match(searchBoard)) {
                          divC.appendChild(p);
                          divC.appendChild(input);
                          order.appendChild(divC);
                          itemDivText[container][div].appendChild(order);
                          input.addEventListener('click', (e) => {
                            ownerTargetInput = e.target;
                          });
                          itemInput[container].push(input);
                        } else {
                          divC.appendChild(p);
                          order.appendChild(divC);
                          itemDivText[container][div].appendChild(order);
                          itemDivText.map((content) => {
                            let result = content.findIndex((item) =>
                              item.textContent.match(searchBoard)
                            );

                            if (content[result]) {
                              content[result].setAttribute(
                                'data-board',
                                content[result].textContent
                              );
                              content[result].classList.add(
                                'defBoard',
                                'short-board',
                                'board-item'
                              );
                              content[result].classList.remove('textValInput');
                            } else {
                                             content.length !== 0 ? false : false;
                            }
                          });
                        }
                      }
                    }
                  } else {
                    box.classList.remove('sizeContenedor');
                    let divC = document.createElement('div');
                    let order = document.createElement('div');
                    order.classList.add('divAlignSingle');
                    divC.style = 'margin:10px ';
                    let p = document.createElement('p');
                    p.style = 'margin:0';
                    p.textContent = el[3][container][div];
                    divC.classList.add('itemContenFlex');
                    divC.appendChild(p);
                    order.appendChild(divC);
                    itemDivText[container][div].appendChild(order);
                    console.warn('Se han desabilitado los inputs');
                    itemDivText.map((content) => {
                      let result = content.findIndex((item) =>
                        item.textContent.match(searchBoard)
                      );

                      if (content[result]) {
                        content[result].setAttribute(
                          'data-board',
                          content[result].textContent
                        );
                        content[result].classList.add(
                          'defBoard',
                          'short-board',
                          'board-item'
                        );
                        content[result].classList.remove('textValInput');
                      } else {
                                    content.length !== 0 ? false : false;
                      }
                    });
                  }

                  contenedorText.addEventListener('click', (e) => { });
                }
              }
              box.addEventListener('mouseenter', () => {
                targetBox = box.dataset.content;
              });

              if (el[4] === true) {
                let divControlled = document.createElement('div');
                divControlled.classList.add(
                  'content_1',
                  'allbuttons',
                  'border-dark-top'
                );
                let btn_check = document.createElement('button');
                let btn_reset = document.createElement('button');
                btn_check.className =
                           'check buttonPrimary button-marg buttonKey';
                btn_reset.className =
                           'reset buttonSecundary button-marg buttonKey';
                divControlled.appendChild(btn_reset);
                divControlled.appendChild(btn_check);
                box.appendChild(divControlled);

                btn_check.addEventListener('click', () => {
                  let counterInput = [];
                  let defaultInputValue =
                              def[ownerTargetActive].datadefault[0][5].conditions[targetBox];

                  def[key].dataInteraction.correct = 0;
                  def[key].dataInteraction.incorrect = 0;

                  for (
                    inputVal = 0;
                    inputVal < defaultInputValue.length;
                    inputVal++
                  ) {
                    itemInput[targetBox][inputVal].setAttribute(
                      'id',
                      `input_${inputVal + 1}`
                    );
                    counterInput.push(itemInput[targetBox][inputVal]);
                    let valNum = itemInput[targetBox][inputVal].value
                      .replace(new RegExp('[\' \']', 'g'), '')
                      .replace(regex, '∞')
                      .toLocaleLowerCase();
                    let searNN = /\[(\d+[,]\d+)\]/gi;
                    let braket = /[\[\]]/gi;

                    if (defaultInputValue[inputVal].includes(null)) {
                      if (
                        valNum.match(searNN) !== null &&
                                    valNum
                                      .match(searNN)[0]
                                      .replace(new RegExp(braket), '')
                                      .split(',')
                      ) {
                        let nnResult = valNum
                          .match(searNN)[0]
                          .replace(new RegExp(braket), '')
                          .split(',');
                        if (nnResult[0] === nnResult[1]) {
                          itemInput[targetBox][inputVal].classList.remove(
                            'failed'
                          );
                          itemInput[targetBox][inputVal].classList.add('pass');
                          def[key].dataInteraction.correct += 1;
                        } else {
                          itemInput[targetBox][inputVal].classList.remove(
                            'pass'
                          );
                          itemInput[targetBox][inputVal].classList.add(
                            'failed'
                          );
                          def[key].dataInteraction.incorrect += 1;
                        }
                      } else {
                        if (valNum.search(searchNum) !== -1) {
                          itemInput[targetBox][inputVal].classList.remove(
                            'failed'
                          );
                          itemInput[targetBox][inputVal].classList.add('pass');
                          def[key].dataInteraction.correct += 1;
                        } else {
                          itemInput[targetBox][inputVal].classList.remove(
                            'pass'
                          );
                          itemInput[targetBox][inputVal].classList.add(
                            'failed'
                          );
                          def[key].dataInteraction.incorrect += 1;
                        }
                      }
                    } else {
                      const regex = /(\+∞)/g;
                      let ExpresRex = /\)[,y]\(/;
                      let toLower = itemInput[targetBox][inputVal].value
                        .replace(new RegExp('[\' \']', 'g'), '')
                        .replace(regex, '∞')
                        .toLocaleLowerCase();
                      const separador =
                                    toLower.match(/[∪]/g) !== null &&
                                       toLower.match(/[;y]/g) !== null
                                       ? false
                                       : toLower.match(/[∪]/g) !== null &&
                                          toLower.match(/[;y]/g) !== null
                                          ? '∪'
                                          : ';';
                      let oper = /[y;]|(?<=\)|\]),/g;
                      //validation anterior itemInput[targetBox][inputVal].value.replace(new RegExp("[' ']", "g"), "").replace(regex, "∞").replace(searchNum, "").toLocaleLowerCase())
                      if (
                        defaultInputValue[inputVal].includes(
                          toLower.split(oper).sort().join(';')
                        )
                      ) {
                        itemInput[targetBox][inputVal].classList.remove(
                          'failed'
                        );
                        itemInput[targetBox][inputVal].classList.add('pass');
                        def[key].dataInteraction.correct += 1;
                      } else {
                        itemInput[targetBox][inputVal].classList.remove('pass');
                        itemInput[targetBox][inputVal].classList.add('failed');
                        def[key].dataInteraction.incorrect += 1;
                      }
                    }
                  }

                  sendData(cleanDataJ(counterInput));
                });

                btn_reset.addEventListener('click', () => {
                  itemInput[targetBox].map((el) => {
                    el.classList.remove('pass', 'failed', 'borderNone');
                    el.value = '';
                  });
                });
              } else {
                console.warn(
                  `Se han desabilitado los botones del contenedor ${container}`
                );
              }
              conteiner.appendChild(box);
            }
          }
        }
        //Genera los 3 ejercicios del principio de pagina mas sus curvas validadas
      } else {
        let fragment = new DocumentFragment();
        let mainOwner = document.querySelector('#mainOwner');
        let globalTemplate;
        let templateClone;
        try {
          globalTemplate = document.querySelector('#globalTemplate');
          templateClone = globalTemplate.content.firstElementChild.cloneNode(true);

        } catch (error) {
          globalTemplate = '';
          templateClone = '';
        }

        let allMyInputs;

        switch (el.type) {
          case 10: // en caso de ser 10 agregara la cantidad de boards con sus correspondientes dataset
            let contentArtiacts = '';
            el.contents.forEach((element) => {
              contentArtiacts += `
                     <div class='border border-primary rounded fixed-content' style="margin:8px;">
                     ${element.childAfter
                           ? `<div class="${element.childAfter.class
                           }" data-artifact ='${element.childAfter.dataSet.artifact ?? ''
                           }' data-board ='${element.childAfter.dataSet.board ?? ''
                           }'> 
                        </div>`
                           : ''
}
                     <div class="${el.classGlobal}" data-artifact ='${element.dataSet.artifact ?? ''
}' data-board ='${element.dataSet.board ?? ''}'> 
                     </div>
                     </div>`;
            });
            const templateString = `<div class="contenedorGrid">
         <div class="d-flex flex-wrap justify-content-center">
            ${contentArtiacts}
         </div>
         </div>`;
            conteiner.insertAdjacentHTML('beforeend', templateString);
            break;
          case 11:

            const definition = el;
            templateClone.querySelector('#content').classList.add('question__content');

            generateQuestion(definition, false, null, templateClone);
            addCustomKeybord(definition);
            break;

          case 12:
            el.contents.forEach((definition) => {
              let totalClone = generateCard(definition, el, templateClone);
              fragment.appendChild(totalClone);
            });
            mainOwner.appendChild(fragment);


            allMyInputs = document.querySelectorAll('math-field[data-question="true"]');

            allMyInputs.forEach((element) => {
              const optionsKeyboard = getKeyboardMath(window.screen.width);
              element.setOptions({
                customVirtualKeyboardLayers: optionsKeyboard[0],
                customVirtualKeyboards: optionsKeyboard[1],
                virtualKeyboards: optionsKeyboard[2],
              });
            });



            break;
          case 13:

            let totalClone = generateTable(el, templateClone);


            allMyInputs = document.querySelectorAll('math-field[data-question="true"]');
            addCustomKeybord(el);

            // allMyInputs.forEach((element) => {
            //    const optionsKeyboard = getKeyboardMath(window.screen.width);
            //    element.setOptions({
            //       customVirtualKeyboardLayers: optionsKeyboard[0],
            //       customVirtualKeyboards: optionsKeyboard[1],
            //       virtualKeyboards: optionsKeyboard[2],
            //    });
            // });


            //tableContainer = document.querySelector("#contenedorTablass");
            break;
          case 15:
            generateParagraph(el, templateClone);

            allMyInputs = document.querySelectorAll('math-field[data-question="true"]');
            addCustomKeybord(el);


            break;


          case 14:
            generateParagraph(el, templateClone);

            allMyInputs = document.querySelectorAll('math-field[data-question="true"]');

            allMyInputs.forEach((element) => {
              const optionsKeyboard = getKeyboardMath(window.screen.width);
              element.setOptions({
                customVirtualKeyboardLayers: optionsKeyboard[0],
                customVirtualKeyboards: optionsKeyboard[1],
                virtualKeyboards: optionsKeyboard[2],
              });
            });
            break;
          default:
            break;
        }
      }
    }


  } else {
    return false;
  }
}
function generateParagraph(el, templateClone) {
  
  //let contenedorParrafo = document.querySelector(el.parent)
  // globalTemplate =  document.querySelector("#globalTemplate")
  // templateClone = globalTemplate.content.firstElementChild.cloneNode(true);
  let content = templateClone.querySelector('#content');
  content.classList.add('wrapper');

  for (let artefacto in el.content) {
  //  el.content[artefacto].changed = false
    let listaPreguntas = el.content[artefacto].questions;
    listaPreguntas.forEach(element => {
      let totalClone = generateQuestion(element, true, null, templateClone,el);
      if (totalClone.nodeName.toLowerCase() !== 'p') {
        let nodoAndAnswer = [];
        nodoAndAnswer.push(totalClone);
        if (element.conditions?.valueInputs) {
          nodoAndAnswer.push(element.conditions.valueInputs);
        }
        else if (element.conditions?.correctIndex) {
          nodoAndAnswer.push(element.conditions.correctIndex);
        }
        el.content[artefacto].allinputs.push(nodoAndAnswer);
      }
      content.appendChild(totalClone);
      // contenedorParrafo.appendChild(templateClone)
      addToDOM(totalClone, el.parent, mainOwner, templateClone);
    });


    templateClone.addEventListener('click', (e) => {
      if (e.target.classList.contains('check')) {
        el.content[artefacto].artifact = artefacto;
        validationInline(el.content[artefacto]);
      }
      if (e.target.classList.contains('reset')) {
        resetInline(el.content[artefacto]);

      }
    });

  }

}
function generateCards(template, element) {
  let carcdConteiner = document.querySelector('#cardCol');
  const containerClone = carcdConteiner.content
    .querySelector('div')
    .cloneNode(true);

  let NEWcontentArtiacts = '';
  const clone = template.content.querySelector('.card').cloneNode(true);
  clone.setAttribute('artifact', element.dataSet.board);
  const cardBodyContainer = clone.querySelector('.card-body');
  const cardHeadContainer = clone.querySelector('.card-header');
  const cardFooterContainer = clone.querySelector('.card-footer');
  NEWcontentArtiacts += `<div class="${el.classGlobal
  } d-flex justify-content-center" data-artifact ='${element.dataSet.artifact ?? ''
  }' data-board ='${element.dataSet.board ?? ''
  }' style="width:100% min-width:280px"> </div>`;
  const templateString1 = `<div class="contenedorGrid ">
                            <div class="d-flex flex-wrap justify-content-center" style="min-width:280px !important; width:100%">
                               ${NEWcontentArtiacts}
                            </div>
                            </div>`;
  cardBodyContainer.insertAdjacentHTML('beforeend', templateString1);

  containerClone.appendChild(clone);
  return containerClone;
}
function cleanDataJ(countInput_9) {
  let result = {};
  result.elementArtifact = { inputValue: {} };
  if (def[ownerTargetActive].defInput.length == 0) {
    Object.values(countInput_9).map((element, index) => {
      result.elementArtifact.inputValue[element.id] = element.value;
    });
  } else {
    Object.values(def[ownerTargetActive].defInput).map((element, index) => {
      element.setAttribute('id', `input_${index + 1}`);
      result.elementArtifact.inputValue[element.id] = element.value;
    });
  }
  result.typeArtifact = 'Standard';
  result.artifact = Number(ownerTargetActive.split('_').at(-1));
  result.results = def[ownerTargetActive].dataInteraction;

  return result;
}
function cleanDataQ(artefacto) {

  let result = {};



  result.typeArtifact = 'Standard';
  result.artifact = Number(artefacto.artifact.split('_').at(-1));
  result.results = artefacto.dataInteraction;
  return result;

}
function changeHanlder(question,definition,isSimple){
  // console.log(isSimple)
if(isSimple == false){
  let nodo = question?.querySelector('math-field[data-question="true"]') || question?.querySelector('select') || question?.querySelectorAll('input[type ="radio"]') 
  // console.log(nodo)
if (NodeList.prototype.isPrototypeOf(nodo) ){
  nodo.forEach((element) => {
    element.addEventListener("input",(e)=>{
      console.log("tu elemento ha cambiado")

      definition.changed = true
    })
  })
}


else{

  // console.log("No es un array")
  // console.log(nodo)

      nodo.addEventListener("input",(e)=>{
        // console.log("tu elemento ha cambiado")
        console.log("tu elemento ha cambiado")

    definition.changed = true
  })
}
}

else{
  // let nodo = question?.querySelector('math-field[data-question="true"]') || question?.querySelector('select') || question?.querySelectorAll('input[type ="radio"]') 
  
 // let artifact =Object.keys(definition.content)
  question.addEventListener("input",(e)=>{

    try {
      Object.values(definition.content)[0].changed = true

    } catch (error) {
      definition.changed = true

    }


  console.log("tu elemento  simple ha cambiado")
  })
}

 
}

function generateQuestion(definition, isIndividual, nodeCollection = null, templateClone,wholeDef=null) {
  let labelContainer = document.createElement('div');
  labelContainer.classList.add('labelContainer');
  let fragment = new DocumentFragment();
  let totalClone;
  let inputList;

  if (isIndividual === true) {
   // wholeDef.changed =false

    let p;


    if (definition.type == 0) {
      if (definition.text[1]) {
        p = document.createElement('math-field');
        p.setAttribute('read-only', 'true');
        p.classList.add('m-auto');
        p.setAttribute('style', 'width:fit-content');
        p.textContent = definition.text[0];
      }
      else if (definition.text[1] === null) {
        let p = document.createElement('div');
        p.insertAdjacentHTML('afterbegin', definition.text[0]);

        return p;
      }
      else if (!definition.text[1]) {

        p = document.createElement('p');
        p.textContent = definition.text[0];
      }

      if (definition?.classStyle) {
        p.classList.add(definition.classStyle);
      }
      return p;
    }
    else if (definition.type == 1) {

      totalClone = generateRadio(definition, true);
      changeHanlder(totalClone,wholeDef,true)

    //  changeHanlder(totalClone,definition,isIndividual)

      return totalClone;
    }
    else if (definition.type == 2) {
      totalClone = generateSelect(definition, true);
      changeHanlder(totalClone,wholeDef,true)

      // console.log("DEFINITION",definition)
//      changeHanlder(totalClone,definition,isIndividual)

      if (definition?.classStyle) {
        totalClone.classList.add(definition.classStyle);
        changeHanlder(totalClone,definition,true)

        totalClone.classList.remove('input-for-way');
      }
      return totalClone;
    }
    else if (definition.type == 3) {
      totalClone = generateInput(definition, true);
    //  changeHanlder(totalClone,definition,isIndividual)
 
    changeHanlder(totalClone,wholeDef,true)

      if (definition?.classStyle) {
        totalClone.classList.add(definition.classStyle);
        totalClone.classList.remove('input-for-way');


      }



      return totalClone;
    }


  } 
  else {

    for (const [key, value] of Object.entries(definition.contents)) {
    
     value.changed =false
      //  templateClone = globalTemplate.content.firstElementChild.cloneNode(true);
      templateClone.setAttribute('artifact', key);
      templateClone.setAttribute('data-artifact', key);
      // templateClone.setAttribute(
      //   "style",
      //   "border:1px solid gray; border-radius:10px; padding:15px; margin:0px;"
      // );
      Object.values(value.questions).map((question, index) => {
        if (definition.type === 0) {
          totalClone = definition.text;
          return totalClone;
        }
        if (question.type === 1) {
          question.artifact = `${key}${index}`;
          totalClone = generateRadio(question, false, key);
          changeHanlder(totalClone,value,isIndividual)

          let nodoAndAnswer = [];
          nodoAndAnswer.push(totalClone);
          nodoAndAnswer.push(question.conditions.correctIndex);
          value.allinputs.push(nodoAndAnswer);

        }
        if (question.type === 2) {
          totalClone = generateSelect(question, false);
          changeHanlder(totalClone,value,isIndividual)
          let nodoAndAnswer = [];
          nodoAndAnswer.push(totalClone);
          nodoAndAnswer.push(question.conditions.correctIndex);
          value.allinputs.push(nodoAndAnswer);


          fragment.appendChild(totalClone);
        }
        if (question.type === 3) {
        
          totalClone = generateInput(question, false);
          inputList = totalClone.querySelectorAll('math-field[data-question="true"]');
          changeHanlder(totalClone,value,isIndividual)

          inputList.forEach((element, i) => {
            let nodoAndAnswer = [];

            if(element.dataset.question  ==  'true'){
              nodoAndAnswer.push(element);



              //console.log(i, question.conditions.valueInputs[i])
              nodoAndAnswer.push(question.conditions.valueInputs);
              //console.log("NODOANANDSWER",question.conditions.valueInputs)



              if(question.conditions?.noiseLevel){
                nodoAndAnswer.push({noiseLevel:question.conditions?.noiseLevel})
              }  

              if (question?.oneToManyInput) {
                value.allinputs.push(nodoAndAnswer);

                nodoAndAnswer.push(question.oneToManyInput);

              }
              if(nodoAndAnswer?.[1]?.[0]){

                value.allinputs.push(nodoAndAnswer);

              }
                    
              //8888888888888888888
              // console.log("Hla",nodoAndAnswer[1])
                     

            }

          });



          fragment.appendChild(totalClone);
        }
        fragment.appendChild(totalClone);
      });

      if (definition.parentBoard) {
      } else {


        addToDOM(fragment, definition.parent, mainOwner, templateClone);

      }
      // console.log("eu",definition.contents[key])
      templateClone.addEventListener('click', (e) => {
        if (e.target.classList.contains('check')) {
          definition.contents[key].artifact = key;
          BasicValidation(definition.contents[key]);
        }
        if (e.target.classList.contains('reset')) {
          BasicReset(definition.contents[key]);
        }
      });
    }
    templateClone.addEventListener('copy', (e) => {
      removeDelimitersFromCopiedText(e);
    });
    return fragment;
  }

}
function generateTable(definition, templateClone) {
  const clone = document.createElement('table');
  clone.classList.add('table', 'table-bordered');
  templateClone.querySelector('#content').classList.add('question__content__table');
  let defincion;
  for (let key in definition.contents) {

    templateClone.setAttribute('artifact', key);
    templateClone.setAttribute('data-artifact', key);

    definition.contents[key].changed =false

    let nodeCollection = definition.contents[key].allinputs;
    let table = clone;
    table.classList.add('table', 'table-bordered');
    const thead = document.createElement('thead');
    table.appendChild(thead);
    const headerRow = document.createElement('tr');
    thead.appendChild(headerRow);
    if (definition.contents[key].hasOwnProperty('header')) {
      let header = definition.contents[key].header;
      header.forEach((element) => {
        const headerCell1 = document.createElement('th');
        //headerCell1.classList.add("text-center", "align-middle");

        const headerCellText1 = document.createTextNode(element);
        headerCell1.appendChild(headerCellText1);
        headerRow.appendChild(headerCell1);
      });
      const tbody = document.createElement('tbody');
      table.appendChild(tbody);
      for (let i = 0; i < definition.contents[key].cells.length; i++) {
        const contentRow = document.createElement('tr');
            
        tbody.appendChild(contentRow);
        for (let j = 0; j < definition.contents[key].cells[i].length; j++) {
          const contentCell = document.createElement('td');
          contentCell.classList.add('text-center', 'align-middle');


          if (Array.isArray(definition.contents[key].cells[i][j])) {
            definition.contents[key].cells[i][j].forEach(element => {
              let node = generateQuestion(
                element,
                true,
                nodeCollection, templateClone,definition
              );

              changeHanlder(node,definition.contents[key],true)



              defincion = element.type;
              if (defincion === 0) {
              } else {
                let questionAnswer = [];
                questionAnswer.push(node);
                let respuestaCorrecta = (element.conditions.correctIndex || element.conditions.valueInputs);
                let respuestaCorrecta2 = (element.conditions.correctIndex || element.conditions.evaluateCote) || false;

                questionAnswer.push(respuestaCorrecta);
                questionAnswer.push(respuestaCorrecta2);
                if (element?.oneToManyInput && element?.oneToManyInput != null) {
                  questionAnswer.push(true);
                }
                else {
                  questionAnswer.push(false);

                }

                definition.contents[key].allinputs.push(questionAnswer);
              }


              contentCell.appendChild(node);

              contentRow.appendChild(contentCell);

            });

          }
          else {

            //const contentCell = document.createElement("td");
            //contentCell.setAttribute("style", "width:200px; height:1px");

            let data = definition.contents[key].cells[i][
              j
            ].artifact = `${key}${i}${j}`;

            let node = generateQuestion(
              definition.contents[key].cells[i][j],
              true,
              nodeCollection, templateClone
            );
            defincion = definition.contents[key].cells[i][j].type;
            if (defincion === 0) {
            } else {
              let questionAnswer = [];
              questionAnswer.push(node);
              let respuestaCorrecta = (definition.contents[key].cells[i][j].conditions.correctIndex || definition.contents[key].cells[i][j].conditions.valueInputs);
              let respuestaCorrecta2 = (definition.contents[key].cells[i][j].conditions.correctIndex || definition.contents[key].cells[i][j].conditions.evaluateCote) || false;

              questionAnswer.push(respuestaCorrecta);
              questionAnswer.push(respuestaCorrecta2);
              if (definition.contents[key].cells[i][j]?.oneToManyInput && definition.contents[key].cells[i][j]?.oneToManyInput != null) {
                questionAnswer.push(true);
              }
              else {
                questionAnswer.push(false);

              }

              definition.contents[key].allinputs.push(questionAnswer);
            }
            contentCell.appendChild(node);
            contentRow.appendChild(contentCell);



          }


        }
      }

      if (definition.interactive) {
        templateClone.setAttribute('style', 'border:1px solid black; border-radius:40pxs;width:fit-content');
        templateClone.querySelector('#content').appendChild(table);

      } else {
        template;
        templateClone.querySelector('#content').appendChild(table);
        let check = templateClone.querySelector('.check');
        let reset = templateClone.querySelector('.reset');
        check.remove();
        reset.remove();
      }

      templateClone.addEventListener('click', (e) => {
        if (e.target.classList.contains('check')) {
          definition.contents[key].artifact = key;
          tableValidation(definition.contents[key]);
        }
        if (e.target.classList.contains('reset')) {
          tableReset(definition.contents[key]);
        }
      });
      addToDOM(table, definition.parent, mainOwner, templateClone);
    }
  }
}

function generateCard(definition, el, templateClone) {

  let NEWcontentArtiacts = '';
  let template = document.querySelector('#card-template');
  let carcdConteiner = document.querySelector('#cardCol');
  let nodo;
  const containerClone = carcdConteiner.content
    .querySelector('div')
    .cloneNode(true);

  const clone = template.content.firstElementChild.cloneNode(true);
  const cardBodyContainer = clone.querySelector('.card-body');
  const cardHeadContainer = clone.querySelector('.card-header');
  const cardFooterContainer = clone.querySelector('.card-footer');
  const globalTemplate = document.querySelector('#globalTemplate');
  templateClone = globalTemplate.content.firstElementChild.cloneNode(true);
  clone.setAttribute('artifact', definition.parentBoard);
  clone.setAttribute('data-artifact', definition.parentBoard);




  nodo = generateQuestion(definition, false, null, templateClone);



  templateClone.querySelector('#content').appendChild(nodo);
  cardFooterContainer.appendChild(templateClone);

  NEWcontentArtiacts += `<div class="${el.classGlobal
  } d-flex justify-content-center" data-artifact ='${definition.artifact ?? ''
  }' data-board ='${el.board ?? ''}' style="width:100%"> </div>`;
  const templateString1 = `<div class="contenedorGrid">
                             <div class="d-flex flex-wrap justify-content-center" style="width:100%">
                                ${NEWcontentArtiacts}
                             </div>
                             </div>`;
  cardBodyContainer.insertAdjacentHTML('beforeend', templateString1);

  containerClone.appendChild(clone);

  return containerClone;
}
function addToDOM(content, parent = null, defaultContainer, templateClone) {

  if (parent !== null) {
    const mainContainer = document.querySelector(parent);

    templateClone.querySelector('#content').appendChild(content);
    mainContainer.appendChild(templateClone);
  } else {
    templateClone.querySelector('#content').appendChild(content);
    defaultContainer.appendChild(templateClone);
  }

}
function generateInput(question, isSimple) {

  let mydiv = document.createElement('div');
  let inputClone;
  let inputList;
  if (isSimple === true) {




    let mathInput = document.createElement('math-field');

    mathInput.setAttribute('virtual-keyboard-mode', 'onfocus');
    mathInput.setAttribute('data-question', 'true');
    mathInput.setAttribute('data-qtype', 'input');

    //mathInput.setAttribute("style", "min-width:60px");
    mathInput.classList.add('table__mathfield');
    mathInput.classList.add('input-for-way');
    mathInput.classList.add('toValidate');

    if (question.placeholder){
      mathInput.classList.add('m-auto')
      mathInput.setAttribute('style','width:fit-content; align-items:center')

      mathInput.setAttribute('value',question.placeholder)

    }
    mathInput = testing(mathInput);











    return mathInput;
  } else {

    const templateInput = document.querySelector('#templateInput');
    inputClone = templateInput.content.firstElementChild.cloneNode(true);
 
    const title = inputClone.querySelector('#title');

    if (!Array.isArray(question.question)){

      let text = document.createElement('p');
      text.textContent = question.question;
      title.appendChild(text);
    }

    const content = inputClone.querySelector('#content');

    let setOfInputs = document.createElement('div');
    //setOfInputs.classList.add("row");
    let contentCol = document.createElement('div');

    contentCol.classList.add('contentCol');
    // contentCol.classList.add(
    //   "contentCol",
    //   "col-12",
    //   "d-flex",
    //   "justify-content-between",
    //   "mt-1"
    // );

      

    let formGroup = document.createElement('div');
    formGroup.classList.add('formGroup');

    question.inputsDefault.forEach((element) => {
      // console.log('e',element)
        
      const mathInput = document.createElement('math-field');
      mathInput.classList.add('toValidate');
      let label;
    
                
      if (element[1] === true) {
        label = document.createElement('math-field');
        label.setAttribute('read-only', '');
        label.setAttribute('data-question', 'false');
        label.textContent = element[0];
        content.appendChild(label);


      }

      else if (element[1] === false) {

        label = document.createElement('label');
        label.textContent = element[0];
        content.appendChild(label);

      }


      else if (element[1] === null) {
      //   console.log('a')

        label = inputClone.querySelector('label');
        label.insertAdjacentHTML('afterbegin', question.question[0]);
      }

      else if (question.question[1] === null) {
        label = inputClone.querySelector('label');
        label.insertAdjacentHTML('afterbegin', question.question[0]);
   
   
      }
      else{

        label = document.createElement('label');
        label.textContent = question.question[0];
          
          
      }
         
     

      mathInput.setAttribute('virtual-keyboard-mode', 'onfocus');
      mathInput.setAttribute('data-question', 'true');
      //  mathInput.setAttribute("style", "min-width:60px");
      mathInput.classList.add('input-for-way');
      let mewMathInput = testing(mathInput)


      let contentCol = document.createElement('div');
      //contentCol.classList.add("contentCol","col-xs-6","col-sm-6","col-md-6","d-flex","justify-content-between","mt-1")
      //  contentCol.appendChild(label)
      //  contentCol.appendChild(mathInput)
      //  setOfInputs.appendChild(contentCol)
      if(!label === undefined){
        content.appendChild(label);
     

      }

      content.appendChild(mewMathInput);
    });
      


  


  }
  mydiv.appendChild(inputClone);
  return mydiv;
}
function generateSelect(question, isSimple) {
  let selectClone;
  if (isSimple === true) {
    selectClone = document.createElement('select');
    
    selectClone.setAttribute('virtual-keyboard-mode', 'onfocus');
    selectClone.setAttribute('data-question', 'true');
    selectClone.setAttribute('data-qtype', 'select');
    selectClone.setAttribute('style', 'border: 0px');

    selectClone.classList.add('input-for-way');

    question.answers_values.forEach((element) => {

      let option = document.createElement('option');
      option.value = element;
      option.text = element;
      selectClone.appendChild(option);
    });
  } else {

    const completeSelectTemplate = document.querySelector('#templateSelect');
    selectClone = completeSelectTemplate.content.firstElementChild.cloneNode(
      true
    );
    let label;
    const select = selectClone.querySelector('select');
    if (Array.isArray(question.question)) {

      if (question.question[1]) {
        let label = selectClone.querySelector('label');
        let parent = label.parentNode;
        let mathField = document.createElement('math-field');

        parent.replaceChild(mathField, label);
        parent.querySelector('math-field').textContent = question.question[0];
      }

      else if (!question.question[1] && question.question[1] != null) {

        label = selectClone.querySelector('label');
        label.textContent = question.question;
      }

      else if (question.question[1] === null) {
        label = selectClone.querySelector('label');
        label.insertAdjacentHTML('afterbegin', question.question[0]);


      }
    }
    else {

      label = selectClone.querySelector('label');
      label.textContent = question.question;

    }

    question.answers_values.forEach((element) => {
      let option = document.createElement('option');
      option.value = element;
      option.text = element;
      select.appendChild(option);
    });
  }





  return selectClone;
}
function generateRadio(question, isSimple) {
  let fragment = new DocumentFragment();
  const template = document.querySelector('#templateCheck');

  let clone = template.content.firstElementChild.cloneNode(true);

  let title = clone.querySelector('.title');
  let content = clone.querySelector('.content');



  let radioClone;
  let contenido;
  if (isSimple === true) {
    radioClone = document.createElement('div');
    // radioClone.classList.add("d-flex", "justify-content-around");

    question.answers_values.forEach((element, index) => {
      contenido = document.createElement('div');
      // contenido.setAttribute("style", "min-width:70px");
      //contenido.classList.add("d-flex", "justify-content-start");

      let label = document.createElement('label');
      let input = document.createElement('input');
      label.textContent = element;
      label.setAttribute('for', `${question.artifact}`);
      label.classList.add('form-check-label', 'ml-3');
      input.classList.add('form-check-input', 'ml-0');
      input.setAttribute('id', 'flexRadioDefault1');
      input.setAttribute('type', 'radio');
      input.setAttribute('name', `${question.artifact}`);
      input.setAttribute('data-qtype', 'radio');

      input.setAttribute('value', element);

      contenido.appendChild(label);

      contenido.appendChild(input);

      radioClone.appendChild(contenido);
      radioClone.setAttribute('data-qtype', 'radio');

    });

    return radioClone;
  }

  else {
    const radioTemplate = document.querySelector('#templateCheck');
    let radioClone = radioTemplate.content.firstElementChild.cloneNode(true);
    const title = radioClone.querySelector('.title');
    title.textContent = question.question;


    let indice = 0;
    const texto = document.createElement('p');

    const content = radioClone.querySelector('.content');
    texto.textContent = question.question;

    let radioContainerRow = document.createElement('div');
    radioContainerRow.classList.add('row', 'd-flex', 'justify-content-center');

    question.answers_values.forEach((element, index) => {
      indice = index;
      indice = indice - 1;
      let radioContainerCol = document.createElement('div');

      radioContainerCol.classList.add(
        'col-md-6',
        'd-flex',
        'justify-content-center'
      );
      radioContainerCol.setAttribute('style', 'width:fit-content');
      let label = document.createElement('label');
      let input = document.createElement('input');
      input.classList.add('custom-radio', 'ml-2');
      input.type = 'radio';
      input.value = element;
      label.textContent = element;

      input.setAttribute('name', `${question.artifact}`);
      label.setAttribute('for', `${question.artifact}`);
      radioContainerCol.appendChild(label);
      radioContainerCol.appendChild(input);
      radioContainerRow.appendChild(radioContainerCol);
      content.appendChild(radioContainerRow);

      //content.appendChild(input)
    });
    return radioClone;
  }
}
//para calcular las entradas de los inputs
function calculate(valor) {
  const ce = new ComputeEngine.ComputeEngine({ numericMode: 'machine' });
  let result = ce.parse(valor).N().valueOf();
  return result;
}
function answersChangesHandler(definition){

  //Verificamos si esta propiedad está presente en la definición
  if (definition.previousValidation === undefined){
//De no estar se define con los valores presentes en los nodos que se están validando
    definition.previousValidation = definition.allinputs.map((element)=>{
      let nodo = (element[0]?.querySelector('select') || element[0]?.querySelector('input[type ="radio"]:checked') )|| ( element[0])
      let aux = nodo?.selectedIndex  || nodo?.value 
      return aux
    })

    //Quiero saber si la cantidad de ForAnswers de las preguntas concuenta con la cantidad de preguntas dentro del artefacto
if ((definition.dataInteraction.forAnswer == definition.allinputs.length)){
//de no haber respondido ninguna procede a devolver false
return false
}
//de lo contrario devolver true ya que cumple con la condición de que no hay respuesta previa pero  hizo alguna interacción
return true

  }
  else{

//En el caso de que si haya previamente un previousValidation necesito saber si este es igual al anterior pero que no sea igual a que están vacios o sin contestar

//exploramos las nuevas respuestas
let newAnswers = definition.allinputs.map((element)=>{
  let nodo = (element[0]?.querySelector('select') || element[0]?.querySelector('input[type ="radio"]:checked') )|| ( element[0])
  let aux = nodo?.selectedIndex  || nodo?.value 
  return aux
})

//verifico si mis nuevas respuestas son iguales a las anteriores
    let tienenMismosElementos =(definition.previousValidation.every(function(element, index) {
      return element === newAnswers[index];
    }))
// verifico si mis nuevas interacciones de inactividad no son las mismas que la anterior
    let checkForAnswers = (definition.dataInteraction.forAnswer === definition.allinputs.length)
    definition.previousValidation = newAnswers


    if ((!tienenMismosElementos) && (!checkForAnswers)){

          return true
    }
    else{ 
console.warn("No se ha contestado nada o no has hecho ningún cambio significativo en tus respuestas, Revisa nuevamente.")
      return false
    }
  }
}

function BasicValidation(definition) {

  //let previousValidation = []
  let noiseValue = 0
  let nodo;
  let userResponse
  let aux;
  definition.dataInteraction.forAnswer = 0;
  definition.dataInteraction.correct = 0;
  definition.dataInteraction.incorrect = 0;
  let index =0
  // console.log(definition);
  let auxQuestions =  []
  
  
  definition.allinputs.forEach((element, i) => {
    nodo = element[0];
    userResponse = nodo.value;

    if(element[2] != undefined && element[2]?.noiseLevel){
      noiseValue = element[2]?.noiseLevel

    }
    //console.log(element)

    if (Array.isArray(element[1])){
      let auxValidation


 
      let textoSinBarra = userResponse.replace(/\\/g, '');
      let textoSinEspacios = textoSinBarra.replace(/\s/g, '');
      let calculated


      //convertir esas validaciones problematicas en textonormal


      auxValidation = element[1][index].map((element)=>{


        if(typeof element == 'string'){

          //console.log(calculate(userResponse))
          // if(calculate(userResponse) != Number){
          //   console.log("no es")


          // }else{
          //   console.log("es numero")
          //   aux =auxValidation.some((vElement)=>{
          //   comparacion = gInterPoint(calculate(userResponse), vElement, noiseValue);
          //   return comparacion
  
          //   })

          // }
          //try to resolver this string
     
   
          let vtextoSinBarra = element.replace(/\\/g, '');
          let vtextoSinEspacios = vtextoSinBarra.replace(/\s/g, '');
          return vtextoSinEspacios

        }
        else{
          // console.log(userResponse)
          // calculated = calculate(userResponse)
          // console.log("hola",calculated, element)
          // comparacion = gInterPoint(calculated, element, noiseValue);
          return element
   
        }

      })
      //nodo = element[0];
      //console.log("auxValidation",auxValidation,textoSinEspacios)
      // console.log(textoSinEspacios)

      // console.log(vtextoSinEspacios)
      // console.log("Validacion",element[1][index],"inputUsuario",textoSinEspacios)



      aux = auxValidation.some((vElement)=>{


        if(typeof vElement == 'string'){
          return vElement == textoSinEspacios

        }
        else{
          console.log('vElement',vElement)

          calculated =  calculate(userResponse)
          console.log('calculated',calculated)

          comparacion = gInterPoint(calculated, vElement, noiseValue);
          return comparacion
        }

     
      })

   

      index +=1
      // console.log("AUX",aux)





 
    }
    else {

      nodo = element[0]?.querySelector('select') || element[0]?.querySelector('input[type ="radio"]:checked');
      aux = nodo?.selectedIndex === element[1] || nodo?.value === element[1];
    }


    if (aux) {
      nodo?.classList.remove('failed');
      nodo?.classList.add('pass');
      definition.dataInteraction.correct += 1;
      // nodo.checked =false
    }
    else if (nodo?.value === '' || nodo?.selectedIndex == 0 || nodo == null) {

      nodo?.classList.remove('failed');
      nodo?.classList.remove('pass');
      definition.dataInteraction.forAnswer += 1;
    }
    else if( aux===false){
      //console.log('AUX',aux)

      nodo?.classList.add('failed');
      nodo?.classList.remove('pass');
      definition.dataInteraction.incorrect += 1;
    }
  });

  //Si No hay cambios por interacción ni cambios de respuestas no puede enviar la respueta
  if (!answersChangesHandler(definition) && !definition.changed){
    definition.changed = false
    return
  }
  definition.changed = false



  if (typeof Android !== 'undefined' && typeof Android.sendData === 'function') {
    Android.sendData(JSON.stringify(cleanDataQ(definition)));
    // La función Android.sendData(json) está disponible
  } else {
    console.log({
      messageError:
           'Esta funcion no se encuentra definida o no esta en el mismo ambito',
    });
  }
  // console.log("DEFINICION",definition.dataInteraction.forAnswer, definition.allinputs.length, answersChanged)



 
    sendData(cleanDataQ(definition));
  




}
function BasicReset(definition) {
  let nodo;
  definition.allinputs.forEach((element, i) => {

    if (Array.isArray(element[1])) {
      nodo = element[0];
      nodo?.classList.remove('failed');
      nodo?.classList.remove('pass');
      nodo.value = '';



    }
    else {

      if (element[0].querySelector('select')) {

        nodo = element[0].querySelector('select');
        nodo.selectedIndex = 0;
        nodo?.classList.remove('failed');
        nodo?.classList.remove('pass');
      }
      else if (element[0].querySelector('input[type ="radio"]:checked')) {

        nodo = element[0].querySelector('input[type ="radio"]:checked');
        nodo?.classList.remove('failed');
        nodo?.classList.remove('pass');
        if (nodo != null && 'checked' in nodo) {
          nodo.checked = false;
          nodo?.classList.remove('failed');
          nodo?.classList.remove('pass');
          //nodo.selectedIndex = 0

        }
      }


    }

  });


}
function validationInline(definition) {
  if (definition != undefined || definition != null) {

    definition.allinputs.forEach((element, i) => {
      let aux;
      if (Array.isArray(element[1])) {
        const succesValues = element[1];
        const userResponse = element[0].value;



        definition.dataInteraction.forAnswer = 0;
        definition.dataInteraction.correct = 0;
        definition.dataInteraction.incorrect = 0;


        aux = succesValues.some(value => value == userResponse);

      }
      else {
        aux = element[0].selectedIndex === element[1];
      }

      if (aux) {
        element[0].classList.remove('failed');
        element[0].classList.add('pass');
        definition.dataInteraction.correct += 1;

      }
      else if (element[0].value === '' || element == null) {
        element[0].classList.remove('failed');
        element[0].classList.remove('pass');
        definition.dataInteraction.forAnswer += 1;

      }
      else {
        element[0].classList.add('failed');
        element[0].classList.remove('pass');
        definition.dataInteraction.incorrect += 1;

      }
    });

  } else {
    console.log(
      'Estas ingresando un artefacto nulo o indefinido, verifica donde estás llamando la función validar'
    );
  }
  //Si No hay cambios por interacción ni cambios de respuestas no puede enviar la respueta

  console.log("before",definition)

  if (!answersChangesHandler(definition) && !definition.changed){
    definition.changed = false
    return
  }

  definition.changed = false
  console.log("after",definition.changed)





  if (typeof Android !== 'undefined' && typeof Android.sendData === 'function') {
    Android.sendData(JSON.stringify(cleanDataQ(definition)));
    // La función Android.sendData(json) está disponible
  } else {
    console.log({
      messageError:
            'Esta funcion no se encuentra definida o no esta en el mismo ambito',
    });
  }

  console.log("Hola")

  
    sendData(cleanDataQ(definition));
  
}
function resetInline(m) {
  let valor;
  let nodo;
  let index = 0;
  if (m != undefined || m != null) {
    m.allinputs.forEach((element, i) => {
      const succesValues = element[1];
      const userResponse = element[0].value;
      element[0].classList.remove('failed');
      element[0].classList.remove('pass');
      if (Array.isArray(element[1])) {
        m.allinputs[index][0].value = '';
      }
      else {
        m.allinputs[index][0].selectedIndex = 0;

      }

      index = index + 1;
    });

  }
}
function tableValidation(definition) {
  definition.dataInteraction.forAnswer = 0;
  definition.dataInteraction.correct = 0;
  definition.dataInteraction.incorrect = 0;
  definition.allinputs.forEach((element, i) => {
    //console.log("Mi Respuesta",element[0]?.value, "Correcta",element[1])
    let aux;
    if (Array.isArray(element[1])) {

      //console.log(element[1])
      //Valor Ingresado
      const userResponse = element[0].value;

      //Valores a esperar
      let succesValues = element[1];
      //Valores a esperar otra vez
      let auxArray = element[1].slice();
      //   console.log("AuxArray",auxArray)
      //recibe los valores
      // los convierte en un array
      //console.log("elment3",element[3],element[2],element[1],element[0])
      if (element[3] === true) {

        let responseArray = userResponse.split(/[;,]/);
        //los itera y compara
        let results = [];
        responseArray.forEach(element => {
          succesValues = auxArray.slice();
          element = calculate(element);
          succesValues.forEach((values, i) => {
            let comparacion = gInterPoint(element, values, 0.2);
            //     console.log("comparacion",comparacion)
            if (comparacion) {
              succesValues.splice(i, 1);
              results.push(true);
              return;
            }
          });

        });
        aux = (results.length == auxArray.length && auxArray.length === responseArray.length);
      }
      else {
        if (isNaN(calculate(userResponse))) {
          try{

            aux = succesValues[0].some((value) =>{

              console.log('VALUE', value)
              console.log('element.value', element[0],element[0].value)
              //   console.log(value == element[0].value )
                                 

              //console.log('VALUE ',value, 'ELEMENT ',element[0].value)
              //console.log(value == element[0].value) 
              return value == userResponse && value != ''
  
            } );
          }
          catch (error) {
            console.log('CONDICION')
            let result = calculate(element[0].value);

            aux = succesValues.some((value) =>{


              //  console.log("value",value, element[0].value)

              return ((value == element[0].value || value == result) && value != '' )
            } )
          }
               
       
    




        }
        else if (userResponse != null) {
              
          //console.log(succesValues[0])
          console.log('succ',Array.isArray(succesValues))
          let result = calculate(element[0].value);
          if (Array.isArray(succesValues)){

            try {
              aux = succesValues[0].some((value) =>{
                console.log('value',value, element[0].value)
                return value == element[0].value || value == result 
   
              } ) 
            } catch (error) {
              aux = succesValues.some((value) =>{
      
                return (value == element[0].value || value == result) || (gInterPoint(result, value, 0.1))  
    
              } )
            }
       
          }
          else{

            aux = succesValues.some((value) =>{
      
              return (value == element[0].value || value == result) || (gInterPoint(result, value, 0.1))  
    
            } )


      
          }
          // succesValues.forEach((value) => {
          //    console.log("value",value)
          //    aux = gInterPoint(result, value, 0.2);


          // });
        }


      }
    }
    else {

      aux = element[0].selectedIndex === element[1];

    }

    //agregado para que se valide lo de las cotas pag-10
    if (element[2]) {

      if (element[2]?.top || element[2]?.top == '0') {

        const valueCondition = element[2].top;
        const valueUser = element[0].value;

        aux = (valueUser >= valueCondition) && valueUser != '' ? true : false;
      }

      if (element[2].bottom || element[2].bottom == '0') {

        const valueCondition = element[2].bottom;
        const valueUser = element[0].value;

        aux = (valueUser <= valueCondition) && valueUser != '' ? true : false;
      }
    }

    if (aux == true) {
      element[0].classList.remove('failed');
      element[0].classList.add('pass');
      definition.dataInteraction.correct += 1;

    }
    else if (element[0].value === '' || element == null ) {
         
      element[0].classList.remove('failed');
      element[0].classList.remove('pass');
      definition.dataInteraction.forAnswer += 1;

    }
    else if (aux ==false) {
      element[0].classList.add('failed');
      element[0].classList.remove('pass');
      definition.dataInteraction.incorrect += 1;

    }

  });
  //Si No hay cambios por interacción ni cambios de respuestas no puede enviar la respueta
  if (!answersChangesHandler(definition) && !definition.changed){
    definition.changed = false
    return
  }
  definition.changed = false




  
  if (typeof Android !== 'undefined' && typeof Android.sendData === 'function') {
    Android.sendData(JSON.stringify(cleanDataQ(definition)));
    // La función Android.sendData(json) está disponible
  } else {
    console.log({
      messageError:
            'Esta funcion no se encuentra definida o no esta en el mismo ambito',
    });
  }



  
    sendData(cleanDataQ(definition));
  

}
function tableReset(definition) {
  let nodo;
  definition.allinputs.forEach((element, i) => {

    nodo = element[0];

    nodo.classList.remove('failed');
    nodo.classList.remove('pass');
    nodo.value = '';
    nodo.selectedIndex = 0;

  });
}

function validation(definition) {
  let valor;
  let nodo;
  let index = 0;

  if (m != undefined || m != null) {
    if (m.hasOwnProperty('questions')) {
      m.questions?.forEach((question, i) => {
        let RadioAnswers = m.allinputs[index].querySelector(
          'input[type ="radio"]:checked'
        );
        let SelectAnswers = m.allinputs[index].querySelector('select');
        let InputAnswers = m.allinputs[index].querySelectorAll(
          'math-field[data-question="true"]'
        );
        if (RadioAnswers != null) {
          if (RadioAnswers.value === question.conditions.correctIndex) {
            RadioAnswers.classList.add('pass');
            RadioAnswers.classList.remove('failed');
          } else {
            RadioAnswers.classList.add('failed');
            RadioAnswers.classList.remove('pass');
            dataInteraction.incorrect++;
          }
        }

        else if (SelectAnswers != null) {
          if (
            SelectAnswers.selectedIndex === question.conditions.correctIndex
          ) {
            SelectAnswers.classList.add('pass');
            SelectAnswers.classList.remove('failed');
          } else if (SelectAnswers.selectedIndex === 0) {
            SelectAnswers.classList.remove('failed');
            SelectAnswers.classList.remove('pass');
          } else {
            SelectAnswers.classList.add('failed');
            SelectAnswers.classList.remove('pass');
          }

          if (InputAnswers.length != 0) {
            InputAnswers.forEach((element, i) => {
              if (element.value === question.conditions.valueInputs[i]) {
                element.classList.add('pass');
                element.classList.remove('failed');
              } else if (element.value === '') {
                element.classList.remove('failed');
                element.classList.remove('pass');
              } else {
                element.classList.add('failed');
                element.classList.remove('pass');
              }
            });
          }
        }
        else if (InputAnswers.length != 0) {
          let computerEngine = new ComputeEngine.ComputeEngine({
            numericMode: 'machine',
          });
          InputAnswers.forEach((element, i) => {
            const succesValues = question.conditions.valueInputs[0];
            const userResponse = element.value;


            const aux = succesValues.some((value) => {
              if (typeof value === 'number') {
                return gInterPoint(Array.isArray(computerEngine.parse(userResponse).N()._value)
                           ? computerEngine.parse(userResponse).evaluate()._value
                           : computerEngine.parse(userResponse).N()._value, value);
              } else {
                return value === userResponse;
              }

            });


            // const aux = succesValues[i].some((value) => value == userResponse);

            if (aux) {
              element.classList.add('pass');
              element.classList.remove('failed');
            } else if (element.value === '') {
              element.classList.remove('failed');
              element.classList.remove('pass');
            } else {
              element.classList.add('failed');
              element.classList.remove('pass');
            }
          });
        }

        index = index + 1;
      });
    } else {
      matriz_aplanada = m.cells.flat();
      const matrizFiltrada = matriz_aplanada.filter(
        (elemento) => elemento.type !== 0
      );
      matrizFiltrada.forEach((question, i) => {
        if (question.conditions.hasOwnProperty('valueInputs')) {
          correctAnswer = question.conditions.valueInputs[0][0];
        } else if (question.conditions.hasOwnProperty('correctIndex')) {
          correctAnswer = question.conditions.correctIndex;
        }

        if (m.allinputs[index].dataset.qtype === 'input') {
          nodo = m.allinputs[index];
          valor = m.allinputs[index].value;
          if (valor === '') {
            nodo.classList.remove('failed');
            nodo.classList.remove('pass');
          } else {
            // let resuelto = calculate(valor)
            let computerEngine = new ComputeEngine.ComputeEngine({
              numericMode: 'machine',
            });

            const succesValues = question.conditions.valueInputs[0];
            const userResponse = valor;
            const aux = succesValues.some((value) => {

              if (typeof value === 'number') {
                return gInterPoint(Array.isArray(computerEngine.parse(userResponse).N()._value)
                           ? computerEngine.parse(userResponse).evaluate()._value
                           : computerEngine.parse(userResponse).N()._value, value);
              } else {
                return value === userResponse;
              }

            });

            if (aux) {
              nodo.classList.remove('failed');
              nodo.classList.add('pass');
            } else {
              nodo.classList.add('failed');
              nodo.classList.remove('pass');
            }
          }
        }
        if (m.allinputs[index].dataset.qtype === 'select') {
          nodo = m.allinputs[index];
          valor = m.allinputs[index].selectedIndex;

          if (valor === 0) {
            nodo.classList.remove('failed');
            nodo.classList.remove('pass');
          }
          if (valor === correctAnswer) {
            nodo.classList.remove('failed');
            nodo.classList.add('pass');
          }
          if (valor !== correctAnswer && valor !== 0) {
            nodo.classList.add('failed');
            nodo.classList.remove('pass');
          }
        } else if (m.allinputs[index].dataset.qtype === 'radio') {
          nodo = m.allinputs[index].querySelector(
            'input[type ="radio"]:checked'
          );
          valor = m.allinputs[index].querySelector(
            'input[type ="radio"]:checked'
          ).value;
          if (valor === '') {
            nodo.classList.remove('failed');
            nodo.classList.remove('pass');
          }

          if (valor === correctAnswer) {
            nodo.classList.remove('failed');
            nodo.classList.add('pass');
          }
          if (valor !== correctAnswer && valor !== '') {
            nodo.classList.add('failed');
            nodo.classList.remove('pass');
          }
        }

        index = index + 1;
      });
    }
  } else {
    console.log(
      'Estas ingresando un artefacto nulo o indefinido, verifica donde estás llamando la función validar'
    );
  }
  if (typeof Android !== 'undefined' && typeof Android.sendData === 'function') {
    Android.sendData(JSON.stringify(cleanDataQ(definition)));
    // La función Android.sendData(json) está disponible
  } else {
    console.log({
      messageError:
            'Esta funcion no se encuentra definida o no esta en el mismo ambito',
    });
  }

  sendData(cleanDataQ(definition));
}
function reset(m) {
  let nodo;
  let index = 0;
  if (m != undefined || m != null) {
    if (m.hasOwnProperty('questions')) {


      m.questions?.forEach((question, i) => {
        let RadioAnswers = m.allinputs[index].querySelector(
          'input[type ="radio"]:checked'
        );
        let SelectAnswers = m.allinputs[index].querySelector('select');
        let InputAnswers = m.allinputs[index].querySelectorAll(
          'math-field[data-question="true"]'
        );


        if (RadioAnswers != null) {
          RadioAnswers.classList.remove('pass');
          RadioAnswers.classList.remove('failed');
        }
        if (SelectAnswers != null) {
          SelectAnswers.classList.remove('pass');
          SelectAnswers.classList.remove('failed');
          SelectAnswers.selectedIndex = 0;
        }
        if (InputAnswers.length != 0) {
          InputAnswers.forEach((element, i) => {
            element.classList.remove('pass');
            element.classList.remove('failed');
            element.value = '';
          });
        }
        index = index + 1;
      });
    } else {
      // let valor
      matriz_aplanada = m.cells.flat();
      const matrizFiltrada = matriz_aplanada.filter(
        (elemento) => elemento.type !== 0
      );
      matrizFiltrada.forEach((question, i) => {
        if (question.conditions.hasOwnProperty('valueInputs')) {
          correctAnswer = question.conditions.valueInputs[0][0];
        } else if (question.conditions.hasOwnProperty('correctIndex')) {
          correctAnswer = question.conditions.correctIndex;
        }
        if (m.allinputs[index].dataset.qtype === 'input') {
          nodo = m.allinputs[index];
          nodo.value = '';
          nodo.classList.remove('failed');
          nodo.classList.remove('pass');


        }
        if (m.allinputs[index].dataset.qtype === 'select') {
          nodo = m.allinputs[index];
          valor = m.allinputs[index].selectedIndex;
          nodo.value = '';
          nodo.classList.remove('failed');
          nodo.classList.remove('pass');
        } else if (m.allinputs[index].dataset.qtype === 'radio') {
          nodo = m.allinputs[index].querySelector(
            'input[type ="radio"]:checked'
          );
          nodo.value = '';
          nodo.classList.remove('failed');
          nodo.classList.remove('pass');
          valor = m.allinputs[index].querySelector(
            'input[type ="radio"]:checked'
          ).value;




        }

        index = index + 1;
      });
    }
  }
}

function removeDelimitersFromCopiedText(event) {
  // Obtener el texto seleccionado
  var selectedText = window.getSelection().toString();
  // Eliminar los delimitadores "$$" del texto seleccionado
  var textWithoutDelimiters = selectedText.replace(/\$\$/g, '');

  // Copiar el texto sin delimitadores al portapapeles
  event.clipboardData.setData('text/plain', textWithoutDelimiters);

  // Prevenir el comportamiento predeterminado de la acción de copiar
  event.preventDefault();
}
function testing(pointLatex) {
  pointLatex.addEventListener('keydown', (e) => {
    e.preventDefault();
    e.target.blur();
  });

  pointLatex.addEventListener('focus', (e) => {
    document.querySelectorAll('math-field').forEach((element) => {
      element.blur();
    });
  });

  return pointLatex;
}