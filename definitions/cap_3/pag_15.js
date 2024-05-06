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
                  child: { tag: 'math-field', value: '()+2', disabled: true, },
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
  artifact_example_2: {
    variableX: '3',
    depure: false,
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
                  child: { tag: 'math-field', value: '3x= -1', disabled: true },
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
                  child: { tag: 'math-field', value: '3.()', disabled: true },
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
                    value: '\\frac{\\left(\\right)}{3}',
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
                { tag: 'th', textDefault: 'Aplicacion de la inversa' },
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value:
                      '\\frac{\\left(3x\\right)}{3}=\\frac{\\left(-1\\right)}{3}',
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
                  child: {
                    tag: 'math-field',
                    value: 'x=\\frac{-1}{3}',
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
      table: [
        [''],
        ['3left(right)', '3.left(right)', '3cdotleft(right)'],
        ['frac{left(right)}{3}'],
        ['frac{3left(x+2right)}{3}=frac{1}{3}'],
        ['x+2=frac{1}{3}'],
        ['x+2=frac{1}{3}'],
        ['left(right)+2'],
        ['left(right)-2'],
        ['left(x+2right)-2=frac{1}{3}-2'],
        ['x=-frac{5}{3}'],
      ],
    },
  },
  artifact_1: {
    variableX: '3',
    depure: true,
    changeWidth: true,
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
                    value: '3(x+2)=1',
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
        ['frac{left(right)}{3}'],
        [
          'frac{3left(x+2right)}{3}=frac{1}{3}',
          'frac{3left(x+2right)}{3}=frac{left(1right)}{3}',
        ],
        //        ["x+2=frac{1}{3}", "x+2=0.333333"],
        ['x+2=0.333333'],

      ],
    },
  },
  artifact_2: {
    variableX: '3',
    depure: true,
    changeWidth: true,
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
                    value: 'x+2=\\frac13',
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
        ['left(right)+2'],
        ['left(right)-2'],
        [
          'left(x+2right)-2=frac{1}{3}-2',
          'left(x+2right)-2=left(frac{1}{3}right)-2',
        ],
        //  ["x=-frac{5}{3}", "x=-1.666666", "x=frac{1}{3}-2", "x=left(frac{1}{3}right)-2", "x=frac{1}{3}-2"],

        ['x=-1.666666'],

      ],
    },
  },
  artifact_3: {
    buttonsActive: true,
    changeWidth: true,
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
                    value: 'sin(x-2)=0.3',
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
        ['sin^{-1}left(sinleft(x-2right)right)=sin^{-1}left(0.3right)'],
        ['x-2=0.304692',
        ]],
    },
  },
  artifact_4: {
    buttonsActive: true,
    changeWidth: true,
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
                    value: 'x-2=0.304692',
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
        ['left(right)-2'],
        ['left(right)+2'],
        ['left(x-2right)+2=left(0.304692right)+2', '2+left(x-2right)=2+left(0.304692right)', 'left(x-2right)+2=2+left(0.304692right)', '2+left(x-2right)=left(0.304692right)+2'
        ],
        ['x=2.304692'],
      ],
    },
  },

};

generateArtifact(def);
