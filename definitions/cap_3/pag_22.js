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
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: '3x+1=2-x',
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
                    value: '3x+1-\\left(2-x\\right)=2-x-\\left(2-x\\right)',
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
                    value: '3x+1-2+x=0',
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
                    value: '3x+x+1-2=0',
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
                    value: '4x+(-1)=0',
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
                  child: { tag: 'math-field', value: '4x=1', disabled: true },
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
                  child: { tag: 'math-field', value: 'x=\\frac{1}{4}', disabled: true },
                },
              ],
            },
          },
        ],
      },
    },
    conditions: {

    },
  },
  artifact_1: {
    buttonsActive: true,
    //varibaleX : "1",
    characteristicsArtifact: {
      tablet: {
        typeParent: 'tbody',
        typeChild: [
          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: '1+6x=2-7x',
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
        ['1+6x-left(2-7xright)=2-7x-left(2-7xright)'],
        ['1+6x-2+7x=0'],
        ['6x+7x+1-2=0', '6x+7x-2+1=0', '7x+6x+1-2=0', '7x+6x-2+1=0'],
        ['13x+left(-1right)=0'],
        ['13x=1'],
        ['x=frac{1}{13}'],
      ],
    },
  },
  artifact_2: {
    buttonsActive: true,
    //varibaleX : "1",
    characteristicsArtifact: {
      tablet: {
        typeParent: 'tbody',
        typeChild: [
          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: '1+6x=2+7x',
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
        ['1+6x-left(2+7xright)=2+7x-left(2+7xright)'],
        ['1+6x-2-7x=0'],
        ['6x-7x+1-2=0', '6x-7x-2+1=0', '-7x+6x+1-2=0', '-7x+6x-2+1=0'],
        ['-x-1=0', '-1x-1=0'],
        [
          'left(-1right)cdotleft(-xright)=1cdotleft(-1right)',
          'left(-1right)left(-xright)=1left(-1right)',
          'left(-1right)-x=1left(-1right)',
          'left(-1right)cdot-x=1cdotleft(-1right)',
          'left(-1right)-x=1cdotleft(-1right)', 'left(-1right).-x=1.left(-1right)',
          'left(-1right)left(-xright)=left(1right)left(-1right)', 'left(-1right)left(-xright)=left(-1right)left(1right)',
          'left(-1right)left(-xright)=left(1right)left(-1right)', 'left(-1right)cdotleft(-xright)=left(1right)cdotleft(-1right)',
          'left(-1right)cdotleft(-xright)=left(-1right)cdotleft(1right)', 'left(-1right)left(-xright)=left(-1right)left(1right)',
          'left(-1right)-x=left(-1right)1', 'left(-1right)cdot-x=left(-1right)cdot1', '-1cdot-x=1cdot-1', '-1cdot-x=1cdot-1', '-1x=1'
        ],
        ['x=-1'],
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
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: 'x-\\frac13=1-2x',
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
        ['x-frac{1}{3}-left(1-2xright)=1-2x-left(1-2xright)'],
        ['x-frac{1}{3}-1+2x=0'],
        ['x+2x-frac{1}{3}-1=0', 'x+2x-1-frac{1}{3}=0', '2x+x-frac{1}{3}-1=0', '2x+x-1-frac{1}{3}=0'],
        ['3x-frac{4}{3}=0'],
        [
          'left(frac{1}{3}right)cdot3x=frac{4}{3}cdotleft(frac{1}{3}right)',
          'left(frac{1}{3}right)3x=frac{4}{3}left(frac{1}{3}right)',
          'x=frac{4}{frac{3}{3}}', 'left(frac{1}{3}right).3x=frac43.left(frac13right)',
          'left(frac{1}{3}right).left(3xright)=left(frac{4}{3}right).left(frac{1}{3}right)',
          'left(frac{1}{3}right)left(3xright)=left(frac{4}{3}right)left(frac{1}{3}right)', 'left(frac{1}{3}right)left(3xright)=left(frac{4}{3}right)left(frac{1}{3}right)',
          'left(frac{1}{3}right)cdotleft(3xright)=left(frac{4}{3}right)cdotleft(frac{1}{3}right)', 'left(frac{1}{3}right)cdotleft(3xright)=left(frac{1}{3}right)cdotleft(frac{4}{3}right)',
          'left(frac{1}{3}right)left(3xright)=left(frac{1}{3}right)left(frac{4}{3}right)', 'left(frac{1}{3}right)3x=left(frac{1}{3}right)frac{4}{3}',
          'left(frac{1}{3}right)cdot3x=left(frac{1}{3}right)cdotfrac{4}{3}', 'frac{1}{3}\cdot3x=frac{4}{3}\cdotfrac{1}{3}',
          'frac{1}{3}cdot3x=frac{1}{3}cdotfrac{4}{3}', '3x=frac{4}{3}'
        ],
        ['x=frac{4}{9}'],
      ],
    },
  },
  artifact_4: {
    buttonsActive: true,
    //varibaleX : "1",
    characteristicsArtifact: {
      tablet: {
        typeParent: 'tbody',
        typeChild: [
          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: '\\frac{x}{4}-1=x-2',
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
        ['frac{x}{4}-1-left(x-2right)=x-2-left(x-2right)'],
        ['frac{x}{4}-x-1+2=0', 'frac{x}{4}-x+2-1=0', '-x+frac{x}{4}+2-1=0', '-x+frac{x}{4}-1+2=0', 'frac{x}{4}-1-x+2=0'],
        ['-frac{3x}{4}=-1', 'frac{-3x}{4}=-1', 'frac{x}{4}-x-1+2=0'],
        ['-3x=-4', '-frac{3x}{3}=-frac{4}{3}', 'frac{-3x}{3}=frac{-4}{3}', '-frac{3}{4}x+1=0'],
        ['left(-frac{1}{3}right)cdot-3x=-4cdotleft(-frac{1}{3}right)', 'left(-frac{1}{3}right)-3x=-4left(-frac{1}{3}right)',
          'left(-1right)-x=-frac{4}{3}left(-1right)', 'left(-1right)cdot-x=-frac{4}{3}cdotleft(-1right)', 'left(frac{-1}{3}right)cdot-3x=-4left(frac{-1}{3}right)',
          'left(frac{-1}{3}right)cdot-3x=-4cdotleft(frac{-1}{3}right)', 'left(frac{-1}{3}right)-3x=-4left(frac{-1}{3}right)', 'left(frac{-1}{3}right).-3x=-4.left(frac{-1}{3}right)',
          'left(frac{-1}{3}right)left(-3xright)=left(-4right)left(frac{-1}{3}right)', 'left(-1right)cdot-x=frac{-4}{3}cdotleft(-1right)',
          'left(-1right).-x=frac{-4}{3}.left(-1right)', 'left(-1right)-x=frac{-4}{3}left(-1right)', 'left(-1right)left(-xright)=left(frac{-4}{3}right)left(-1right)',
          'left(frac{-1}{3}right)cdotleft(-3xright)=left(-4right)cdotleft(frac{-1}{3}right)', 'left(frac{-1}{3}right)-3x=left(frac{-1}{3}right)-4',
          'left(frac{-1}{3}right)cdot-3x=left(frac{-1}{3}right)cdot-4', 'left(frac{-1}{3}right)cdotleft(-3xright)=left(frac{-1}{3}right)cdotleft(-4right)',
          'left(frac{-1}{3}right)left(-3xright)=left(frac{-1}{3}right)left(-4right)', 'left(-1right)cdotleft(-xright)=left(frac{-4}{3}right)cdotleft(-1right)',
          'left(-1right)left(-xright)=left(-1right)left(frac{-4}{3}right) ', 'left(-1right)cdotleft(-xright)=left(-1right)cdotleft(frac{-4}{3}right)',
          'left(-1right)cdot-x=left(-1right)cdotfrac{-4}{3}', 'left(-1right)-x=left(-1right)frac{-4}{3}', 'frac{-1}{3}cdot-3x=-4cdotfrac{-1}{3}', 'frac{-1}{3}cdot-3x=frac{-1}{3}cdot-4', '-frac{3}{4}x=-1'],
        ['x=frac{4}{3}'],
      ],
    },
  },
  artifact_5: {
    buttonsActive: true,
    //varibaleX : "1",
    characteristicsArtifact: {
      tablet: {
        typeParent: 'tbody',
        typeChild: [
          {
            nodeChild: {
              tag: 'tr',
              child: [
                {
                  tag: 'td',
                  child: {
                    tag: 'math-field',
                    value: ' Ojo!\\quad\\frac{x-5}{5}=1-2x',
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
                  child: { tag: 'math-field', value: '\\frac{1}{5}\\cdot x+\\left(-1\\right)=1-2x', disabled: true },
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
        [],

        ['frac{1}{5}cdot x+left(-1right)-left(1-2xright)=1-2x-left(1-2xright)', 'frac{1}{5}.x+left(-1right)-left(1-2xright)=1-2x-left(1-2xright)',
          'frac{1}{5}cdotx+left(-1right)-left(1-2xright)=1-2x-left(1-2xright)', 'left(frac{1}{5}right)x+left(-1right)-left(1-2xright)=1-2x-left(1-2xright)', 'frac{1}{5}x-1-left(1-2xright)=1-2x-left(1-2xright)'],

        ['frac{1}{5}cdotx+left(-1right)-left(1-2xright)=0', 'frac{1}{5}.x+left(-1right)-left(1-2xright)=0', 'left(frac{1}{5}right)x+left(-1right)-left(1-2xright)=0', 'frac{1}{5}x-1-1+2x=0'],

        ['frac{1}{5}cdotx+left(-1right)-1+2x=0', 'frac{1}{5}.x+left(-1right)-1+2x=0', 'left(frac{1}{5}right)x+left(-1right)-1+2x=0', 'frac{1}{5}x+2x-1-1=0'],

        ['frac{1}{5}cdotx+2x+left(-1right)-1=0', 'frac{1}{5}.x+2x+left(-1right)-1=0', 'left(frac{1}{5}right)x+2x+left(-1right)-1=0',
          'frac{1}{5}cdot2x+x+left(-1right)-1=0', 'left(frac{1}{5}right)2x+x+left(-1right)-1=0', 'frac{11}{5}x-2=0'],
        ['frac{11}{5}cdotx+left(-2right)=0', 'frac{11}{5}.x+left(-2right)=0', 'left(frac{11}{5}right)x+left(-2right)=0', 'frac{11}{5}x=2'],

        ['x=frac{10}{11}']

      ],
    },
  },
};

let xDef = {
  artifactHtml: {
    datadefault: [
      {
        type: 11, // switch case
        classGlobal: 'QA', //
        parent: '#oneContainer', //
        contents: {
          artifact_6: {
            allinputs: [], //nodos que se van generando
            dataInteraction: { incorrect: 0, correct: 0 }, // aciertos y fallas
            questions: [

              {
                question: '¿Que pasa con 2x-1=2x-3? ¿Cuántas soluciones tiene?',
                type: 2,
                answers_values: ['', '1', '2', '3', 'No tiene solución'],
                conditions: {
                  correctIndex: 4,
                },
              },
            ],
          },
        },
      },
    ],
  },
};
generateArtifact(def);
generator(xDef);



