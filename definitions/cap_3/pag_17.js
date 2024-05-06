
let def = {
  artifact_example_1: {
    variableX: '4',
    // buttonsActive: true,
    characteristicsArtifact: {
      width: '280px',
      tablet: {
        typeParent: 'tbody',
        typeChild: [
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'td', child: { tag: 'math-field', value: '\\ln\\left(\\tan\\left(\\sin\\left(\\exponentialE^{x}\\right)\\right)\\right)=0.1', disabled: true } },
              ],
            },
          },

          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '\\tan\\left(\\sin\\left(\\exponentialE^x\\right)\\right)=\\exponentialE^{0.1}', disabled: true },
                },
              ],
            },
          },

          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '\\sin\\left(\\exponentialE^x\\right)=\\tan^{-1}\\left(\\exponentialE^{0.1}\\right)', disabled: true },
                },
              ],
            },
          },

          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '\\exponentialE^x=\\sin^{-1}\\left(\\tan^{-1}\\left(\\exponentialE^{0.1}\\right)\\right)', disabled: true },
                },
              ],
            },
          },

          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: 'x=\\ln\\left(\\sin^{-1}\\left(\\tan^{-1}\\left(\\exponentialE^{0.1}\\right)\\right)\\right)',
                    disabled: true,
                  },
                },
              ],
            },
          },
          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: 'x=-0.0113586',
                    disabled: true,
                  },
                },
              ],
            },
          },
        ],
      },
    },
    conditions: {
      // table: [
      //   ["3x+1",13],
      //   ["()+2"],
      //   ["cos^2left(xright)"],
      //   ["sinleft(cos^2left(xright)right)"],
      //   ["x"],
      //   ["cosleft(xright)"],
      //   ["cos^2left(xright)"],
      //   ["sinleft(cos^2left(xright)right)"],
      //   ["cos^2left(xright)"],
      //   ["sinleft(cos^2left(xright)right)"],
      // ],
    },
  },

  artifact_1: {
    buttonsActive: true,
    variableX: '4',


    characteristicsArtifact: {
      width: '280px',
      tablet: {
        typeParent: 'tbody',
        typeChild: [
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'td', child: { tag: 'math-field', value: '\\sin^{-1}\\left(\\ln\\left(\\sin\\left(\\exponentialE^x\\right)\\right)\\right)=0.2', disabled: true } },
              ],
            },
          },

          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },




          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },



          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },



          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },

          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },

        ],
      },
    },
    conditions: {
      table: [
        [],

        ['lnleft(sinleft(exponentialE^xright)right)=sinleft(0.2right)', 'lnleft(sinleft(exponentialE^{left(xright)}right)right)=sinleft(0.2right)', 'lnleft(sinleft(exponentialE^{x}right)right)=sinleft(0.2right)', 'lnleft(sinleft(exponentialE^xright)right)=sinleft(0.2right)'],

        ['sinleft(exponentialE^xright)=exponentialE^{sinleft(0.2right)}', 'sinleft(exponentialE^{left(xright)}right)=exponentialE^{left(sinleft(0.2right)right)}',
          'sinleft(exponentialE^{x}right)=exponentialE^{sinleft(0.2right)}', 'sinleft(exponentialE^xright)=exponentialE^{sinleft(0.2right)}', 'sinleft(exponentialE^xright)=exponentialE^{left(sinleft(0.2right)right)}'],

        ['exponentialE^{left(xright)}=sin^{-1}left(exponentialE^{left(sinleft(0.2right)right)}right)',
          'exponentialE^{x}=sin^{-1}left(exponentialE^{sinleft(0.2right)}right)',
          'exponentialE^x=sin^{-1}left(exponentialE^{left(sinleft(0.2right)right)}right)', 'exponentialE^x=sin^{-1}left(exponentialE^{sinleft(0.2right)}right)',
          'exponentialE^x=sin^{-1}left(exponentialE^{sinleft(0.2right)}right)',

          'exponentialE^x=sin^{-1}left(exponentialE^{left(sinleft(0.2right)right)}right)'],

        ['x=lnleft(sin^{-1}left(exponentialE^{left(sinleft(0.2right)right)}right)right)',
          'x=lnleft(sin^{-1}left(exponentialE^{sinleft(0.2right)}right)right)', 'x=lnleft(sin^{-1}left(exponentialE^{sinleft(0.2right)}right)right)', 
          'x=lnleft(sin^{-1}left(exponentialE^{left(sinleft(0.2right)right)}right)right)'],
        ['nexists', 'notin', '∄', 'emptyset']

      ],
    },
  },

  artifact_2: {
    buttonsActive: true,
    variableX: '4',
    characteristicsArtifact: {
      width: '280px',
      tablet: {
        typeParent: 'tbody',
        typeChild: [
          {
            nodeChild: {
              tag: 'tr',
              child: [
                // { tag: "th", textDefault: "Ecuacion" },
                { tag: 'td', child: { tag: 'math-field', value: '\\tan\\left(\\ln^2\\left(x^2\\right)\\right)=6', disabled: true } },
              ],
            },
          },

          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },



          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },


          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },



          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },

          {
            nodeChild: {
              tag: 'tr',
              child: [
                // { tag: "th", textDefault: "Resultado" },
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },

        ],
      },
    },
    conditions: {
      table: [
        [],//inicio
        ['ln^2left(x^2right)=tan^{-1}left(6right)', 'ln^2left(x^2right)=tan^{-1}left(6right)'],
        ['lnleft(x^2right)=sqrt{tan^{-1}left(6right)}', 'lnleft(x^2right)=sqrt{tan^{-1}left(6right)}'],
        ['x^2=lnleft(sqrt{tan^{-1}left(6right)}right)', 'x^2=exponentialE^{sqrt{tan^{-1}left(6right)}}'],
        ['x=sqrt{lnleft(sqrt{tan^{-1}left(6right)}right)}', 'x=sqrt{exponentialE^{sqrt{tan^{-1}left(6right)}}}'],

        ['x=1.809046', 'x=1.809047']
      ],
    },
  },

  artifact_3: {
    buttonsActive: true,
    variableX: '4',
    characteristicsArtifact: {
      width: '280px',
      tablet: {
        typeParent: 'tbody',
        typeChild: [
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'td', child: { tag: 'math-field', value: '\\exponentialE^{-\\frac{1}{x^2}}=0.3', disabled: true } },
              ],
            },
          },

          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },




          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },


          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },



          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },

          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },

        ],
      },
    },
    conditions: {
      table: [
        [],
        ['-frac{1}{x^2}=lnleft(0.3right)'],
        ['frac{1}{x^2}=-lnleft(0.3right)'],
        ['x^2=frac{1}{-lnleft(0.3right)}', 'frac{1}{x}=sqrt{-lnleft(0.3right)}'],
        ['x=sqrt{frac{1}{-lnleft(0.3right)}}', 'x=frac{1}{sqrt{-lnleft(0.3right)}}', 'x=left(sqrt{-lnleft(0.3right)}right)^{-1}', 'x=left(sqrt{-lnleft(0.3right)}right)^{-1}'],

        ['x=0.911363']
      ],
    },
  },

  artifact_4: {
    buttonsActive: true,
    variableX: '4',
    characteristicsArtifact: {
      width: '280px',
      tablet: {
        typeParent: 'tbody',
        typeChild: [
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'td', child: { tag: 'math-field', value: '\\ln\\left(3x^2-1\\right)=3', disabled: true } },
              ],
            },
          },

          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },


          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },



          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },



          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },

          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },

        ],
      },
    },
    conditions: {
      table: [
        [],//inicio
        ['3x^2-1=exponentialE^{left(3right)}', '3x^2-1=exponentialE^3'],
        ['3x^2=exponentialE^{left(3right)}+1', '3x^2=exponentialE^3+1'],
        ['x^2=frac{exponentialE^3+1}{3}', 'x^2=exponentialE^{left(3right)}+1', 'x^2=exponentialE^{left(3right)}+1', 
          'x^2=frac{exponentialE^{left(3right)}+1}{3}',  'x^2=frac{exponentialE^3+1}{3}'],
        //["3x=sqrt{exponentialE^3+1}","3x=sqrt{exponentialE^3+1}"],
        //["x=frac{sqrt{exponentialE^{left(right)3}+1}}{3}","x=frac{sqrt{exponentialE^3+1}}{3}"],
        ['x=sqrt{frac{exponentialE^{left(right)3}+1}{3}}', 'x=sqrt{frac{exponentialE^3+1}{3}}',
          'x=sqrt{frac{exponentialE^{3+1}}{3}}', 'x=sqrt{frac{exponentialE^{left(3right)+1}}{3}}',
          'x=sqrt{frac{exponentialE^{left(left(3right)+1right)}}{3}}', 'x=sqrt{frac{exponentialE^{left(3+1right)}}{3}}',
          'x=sqrt{frac{exponentialE^{left(left.3right)+1right.}}{3}}'],
        ['x=2.651134', 'x=2.651135']
      ],
    },
  },

  artifact_5: {
    buttonsActive: true,
    variableX: '4',
    characteristicsArtifact: {
      width: '280px',

      tablet: {
        typeParent: 'tbody',
        typeChild: [
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'td', child: { tag: 'math-field', value: '\\cos^2\\left(\\exponentialE^{x^2}\\right)=1', disabled: true } },
              ],
            },
          },

          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },




          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },



          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },



          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },
                },
              ],
            },
          },

          {


            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '', disabled: false },

                },
              ],
            },
          },

        ],
      },
    },
    conditions: {
      table: [
        [],//inicio
        ['cosleft(exponentialE^{x^2}right)=sqrt1', 'cosleft(exponentialE^{left(right)x^2}right)=sqrt1',
          'cosleft(exponentialE^{x^2}right)=sqrt{1}'],
        ['left(exponentialE^{left(x^2right)}right)=cos^{-1}left(right)sqrt1', 'exponentialE^{x^2}=cos^{-1}left(sqrt1right)',
          'exponentialE^{x^2}=cos^{-1}left(sqrt{1}right)'],
        ['x^2=lnleft(cos^{left(right)-1}left(sqrt1right)right)', 'x^2=lnleft(cos^{-1}left(sqrt1right)right)',
          'x^2=lnleft(cos^{-1}left(sqrt{1}right)right)'],
        ['x=sqrt{lnleft(cos^{left(right)-1}left(sqrt1right)right)}', 'x=sqrt{lnleft(cos^{-1}left(sqrt1right)right)}',
          'x=sqrt{lnleft(cos^{-1}left(sqrt{1}right)right)}'],
        ['nexists', 'notin', '∄', 'emptyset']


      ],
    },
  },


}

generateArtifact(def);