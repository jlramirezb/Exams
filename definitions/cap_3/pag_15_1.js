let def = {
  artifact_example_1: {
    buttonsActive: false,
    characteristicsArtifact: {
      tablet: {
        typeParent: 'tbody',
        typeChild: [
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'th', textDefault: 'Ecuación' },
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '3x+2=1', disabled: true },
                },
              ],
            },
          },
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'th', textDefault: 'Tecla alejada' },
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '()+2', disabled: true },
                },
              ],
            },
          },
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'th', textDefault: 'Inversa de la tecla alejada' },
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '()-2', disabled: true },
                },
              ],
            },
          },
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'th', textDefault: 'Aplicación de la inversa' },
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: '(3x+2)-2=(1)-2',
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
                { tag: 'th', textDefault: 'Simplificación' },
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '3x= -1', disabled: true },
                },
              ],
            },
          },
        ],
      },
    },
    conditions: {
      //\sin\left(\cos^2\left(x\right)\right)

    },
  },

  artifact_1: {
    buttonsActive: true,
    characteristicsArtifact: {
      tablet: {
        typeParent: 'tbody',
        typeChild: [
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'th', textDefault: 'Ecuación' },
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: 'sin\\left(\\frac{x}{2}\\right)=0.3',
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
                { tag: 'th', textDefault: 'Tecla alejada' },
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
                { tag: 'th', textDefault: 'Inversa de la tecla alejada' },
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
                { tag: 'th', textDefault: 'Aplicación de la inversa' },
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: '',
                    disabled: false,
                  },
                },
              ],
            },
          },
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'th', textDefault: 'Simplificación' },
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
        ['sinleft(right)'],
        ['sin^{-1}left(right)'],
        ['sin^{-1}left(sinleft(frac{x}{2}right)right)=sin^{-1}left(0.3right)', 'sin^{-1}left(sinleft(frac{x}{2}right)right)=sin^{-1}left(0.3right)'],
        // ["frac{x}{2}=sin^{-1}left(0.3right)","frac{x}{2}=0.304692","frac{x}{2}=0.304693"], //"frac{x}{2}=0.3046", "frac{x}{2}=0.304", "frac{x}{2}=0.30

        ['frac{x}{2}=0.304692', 'frac{x}{2}=0.304693'],


      ],
    },
  },
  artifact_2: {
    buttonsActive: true,
    characteristicsArtifact: {
      tablet: {
        typeParent: 'tbody',
        typeChild: [
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'th', textDefault: 'Ecuación' },
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: '\\frac{x}{2}=0.304692',
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
                { tag: 'th', textDefault: 'Tecla alejada' },
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
                { tag: 'th', textDefault: 'Inversa de la tecla alejada' },
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: '',
                    disabled: false,
                  },
                },
              ],
            },
          },
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'th', textDefault: 'Aplicación de la inversa' },
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: '',
                    disabled: false,
                  },
                },
              ],
            },
          },
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'th', textDefault: 'Simplificación' },
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: '',
                    disabled: false,
                  },
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
        ['frac{left(right)}{2}'],
        ['2left(right)', '2.left(right)', '2cdotleft(right)'],
        [

          '2left(frac{x}{2}right)=2left(0.304692right)',

          '2cdotfrac{x}{2}=2cdot0.304692',

          '2cdotleft(frac{x}{2}right)=2cdotleft(0.304692right)',


          'left(frac{x}{2}right)2=2left(0.304692right)',

          'left(frac{x}{2}right)2=left(0.304692right)2',
          '2left(2frac{x}{2}2right)2=2left(0.304692right)2',
          '2left(frac{x}{2}right)=left(0.304692right)2',
          'left(frac{x}{2}right)2=2left(0.304692right)',
          'left(frac{x}{2}right)cdot2=2cdotleft(0.304692right)',
          '2cdotleft(frac{x}{2}right)=left(0.304692right)cdot2',

        ],
        // [

        //   "x=0.609384",
        //   "x=2left(0.304692right)", "x=2cdotleft(0.304692right)"

        // ],

        [

          'x=0.609384'


        ],
      ],
    },
  },
  artifact_3: {
    buttonsActive: true,
    characteristicsArtifact: {
      tablet: {
        typeParent: 'tbody',
        typeChild: [
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'th', textDefault: 'Ecuación' },
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: '\\frac{3}{x}=0.25',
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
                { tag: 'th', textDefault: 'Tecla alejada' },
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
                { tag: 'th', textDefault: 'Inversa de la tecla alejada' },
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
                { tag: 'th', textDefault: 'Aplicación de la inversa' },
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: '',
                    disabled: false,
                  },
                },
              ],
            },
          },
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'th', textDefault: 'Simplificación' },
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
        ['3left(right)', '3.left(right)', '3cdotleft(right)'],
        ['frac{3}{left(right)}', 'frac{left(right)}{3}', 'frac13left(right)', 'frac13cdotleft(right)', 'frac{1}{3}left(right)', 'frac{1}{3}cdotleft(right)'],
        ['frac{3}{frac{x}{3}}=frac{0.25}{3}', 'frac{frac{3}{x}}{3}=frac{0.25}{3}', 'frac{1}{3}left(frac{3}{x}right)=frac{1}{3}left(0.25right)', 'frac13left(frac{3}{x}right)=frac13left(0.25right)', 'frac{1}{3}cdotleft(frac{3}{x}right)=frac{1}{3}cdotleft(0.25right)', 'frac{1}{3}cdotleft(frac{3}{x}right)=frac{1}{3}cdotleft(0.25right)'],
        // ["frac{1}{x}=frac{0.25}{3}", "frac{1}{x}=0.083333" /* "frac{1}{x}=0.083333333", "frac{1}{x}=0.0833333", "frac{1}{x}=0.083333", "frac{1}{x}=0.08333",
        // "frac{1}{x}=0.0833", "frac{1}{x}=0.083" */],
        ['frac{1}{x}=0.083333'],

      ],
    },
  },
  artifact_4: {
    buttonsActive: true,
    characteristicsArtifact: {
      tablet: {
        typeParent: 'tbody',
        typeChild: [
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'th', textDefault: 'Ecuación' },
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: '\\frac{1}{x}=0.083333',
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
                { tag: 'th', textDefault: 'Tecla alejada' },
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
                { tag: 'th', textDefault: 'Inversa de la tecla alejada' },
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: '',
                    disabled: false,
                  },
                },
              ],
            },
          },
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'th', textDefault: 'Aplicacion de la inversa' },
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: '',
                    disabled: false,
                  },
                },
              ],
            },
          },
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'th', textDefault: 'Simplificación' },
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: '',
                    disabled: false,
                  },
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
        ['frac{1}{left(right)}'],
        ['frac{1}{left(right)}'],
        [
          'frac{1}{frac{1}{x}}=frac{1}{0.083333}',

          'frac{1}{frac{1}{x}}=frac{1}{0.083333}',
          'frac{1}{frac{1}{left(xright)}}=frac{1}{0.083333}'

        ],
        // ["x=12", "x=12.000048","x=frac{1}{0.083333}",],
        ['x=12.000048'],

      ],
    },
  },
  artifact_5: {
    buttonsActive: true,
    characteristicsArtifact: {
      tablet: {
        typeParent: 'tbody',
        typeChild: [
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'th', textDefault: 'Ecuación' },
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: '1-x=3',
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
                { tag: 'th', textDefault: 'Tecla alejada' },
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
                { tag: 'th', textDefault: 'Inversa de la tecla alejada' },
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
                { tag: 'th', textDefault: 'Aplicación de la inversa' },
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: '',
                    disabled: false,
                  },
                },
              ],
            },
          },
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'th', textDefault: 'Simplificación' },
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
        ['left(right)+1', '1+left(right)'],
        ['left(right)-1', '-1+left(right)'],
        ['left(1-xright)-1=left(3right)-1', 'left(1-xright)-1=3-1', 'left(-x+1right)-1=3-1',
          'left(-x+1right)-1=left(3)-1right.', 'left(1-xright)-1=left(3right)-1', ' -1+left(1-xright)=-1+left(3right)'],
        //["-x=3-1", "-x=2", "-x=left(3right)-1"],
        ['-x=2'],



      ],
    },
  },
  artifact_6: {
    buttonsActive: true,
    characteristicsArtifact: {
      tablet: {
        typeParent: 'tbody',
        typeChild: [
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'th', textDefault: 'Ecuación' },
                {
                  tag: 'td',
                  child: { tag: 'math-field', value: '-x=2', disabled: true },
                },
              ],
            },
          },
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'th', textDefault: 'Tecla alejada' },
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
                { tag: 'th', textDefault: 'Inversa de la tecla alejada' },
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: '',
                    disabled: false,
                  },
                },
              ],
            },
          },
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'th', textDefault: 'Aplicacion de la inversa' },
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: '',
                    disabled: false,
                  },
                },
              ],
            },
          },
          {
            nodeChild: {
              tag: 'tr',
              child: [
                { tag: 'th', textDefault: 'Simplificación' },
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: '',
                    disabled: false,
                  },
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
        ['-left(right)'],
        ['-left(right)'],
        ['-left(-xright)=-2', '-left(-xright)=-left(2right)'],
        // ["x=-2", "x=-left(2right)"],
        ['x=-2'],

      ],
    },
  },
};

generateArtifact(def);
