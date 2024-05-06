//comentariox
let def = {
  artifact_example_1: {
    arrowUpDown: true,
    modeDouble: true,
    characteristicsArtifact: {
      typeForm: 'form_6',
      width: '320px',
      height: '400px',
      arrow: {
        count: 2,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 4,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '150px',
              height: '50px',
            },
          },
        },
        {
          square: {
            count: 2,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px',
            },
          },
        },
      ],
    },
    equationsEnd: [
      {
        equation: {
          defaultText: { textValue: 'Ecuación', disabled: true },

          size: {
            width: '300px',
            height: '50px',
          },
        },
      },
      {
        solution: {
          defaultText: { textValue: 'Solución', disabled: true },
        },
      },
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: 'Incógnita' },
          { textValue: 'Solución' },
          { textValue: 'Fórmula' },
          { textValue: 'Valor Final' },
        ],
        disabled: true,
      },
      key: {
        defaultText: [
          { textValue: 'Tecla' },
          {
            textValue: `\\begin{matrix}
          Tecla \\cr
          Inversa
          \\end{matrix}`,
          },
        ],
        disabled: true,
      },
    },
    conditions: {
      //\sin\left(\cos^2\left(x\right)\right)
      key: [
        ['left(right)+1'],
        ['exponentialE^{left(right)}'],
        ['frac{1}{left(right)}'],
        [
          'left(right)cdotfrac{1}{exponentialE^{left(x+1right)}}',
          'left(right)timesfrac{1}{exponentialE^{left(x+1right)}}',
        ],
      ],
    },
  },
  artifact_1: {
    // depure: true,
    variableX: '2',
    minDecimal:6,
    noiseDecimal:0.000001,
    buttonsActive: true,
    buttonsActive: true,
    arrowUpDown: true,
    modeDouble: true,
    characteristicsArtifact: {
      typeForm: 'form_6',
      width: '320px',
      height: '400px',
      arrow: {
        count: 2,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 4,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '150px',
              height: '50px',
            },
          },
        },
        {
          square: {
            count: 2,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px',
            },
          },
        },
      ],
    },
    equationsEnd: [
      {
        equation: {
          defaultText: { textValue: '\\frac{1}{x}=0.41', disabled: true },

          size: {
            width: '300px',
            height: '50px',
          },
        },
      },
      {
        solution: {
          defaultText: { textValue: '', disabled: false },
        },
      },
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '', disabled: false },
          { textValue: '', direction: false },
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
        ],
      },
      key: {
        defaultText: [
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
        ],
      },
    },
    conditions: {
      screen: [
        [2],
        [2.439024],
        [0.5],
        ['0.41'],
      ],
      key: [
        ['frac{1}{left(right)}','left(right)^{-1}'],
        ['frac{1}{left(right)}', 'left(right)^{-1}'],
      ],
      equation: [[]],
      solution: [
        [2.439024],
      ],
    },
  },
  artifact_2: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    arrowUpDown: true,
    modeDouble: true,
    characteristicsArtifact: {
      typeForm: 'form_6',
      width: '320px',
      height: '400px',
      arrow: {
        count: 2,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 4,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '150px',
              height: '50px',
            },
          },
        },
        {
          square: {
            count: 2,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px',
            },
          },
        },
      ],
    },
    equationsEnd: [
      {
        equation: {
          defaultText: { textValue: '-x = 2', disabled: true },
          validateText: { valText: '' },
          size: {
            width: '300px',
            height: '50px',
          },
        },
      },
      {
        solution: {
          defaultText: { textValue: '', disabled: false },
          validateText: { valText: '2' },
        },
      },
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '', disabled: false },
          { textValue: '', direction: false },
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
        ],
      },
      key: {
        defaultText: [
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
        ],
      },
    },
    conditions: {
      screen: [[2], [2, -2,'-2'], [-2,'-2'], [-2,'-2', 2]],
      key: [['-left(right)'], ['+left(right)', '-left(right)']],

      equation: [[]],
      solution: [[-2,'-2']],
    },
  },
  artifact_3: {
    //depure: true,
    variableX: '2',
    minDecimal:6,
    noiseDecimal:0.000001,
    buttonsActive: true,
    arrowUpDown: true,
    modeDouble: true,
    characteristicsArtifact: {
      typeForm: 'form_6',
      width: '320px',
      height: '400px',
      arrow: {
        count: 2,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 4,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '150px',
              height: '50px',
            },
          },
        },
        {
          square: {
            count: 2,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px',
            },
          },
        },
      ],
    },
    equationsEnd: [
      {
        equation: {
          defaultText: { textValue: '', disabled: false },
          size: {
            width: '300px',
            height: '50px',
          },
        },
      },
      {
        solution: {
          defaultText: { textValue: '3.27', disabled: true },
        },
      },
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: 'x', disabled: true },
          { textValue: '', direction: false },
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
        ],
      },
      key: {
        defaultText: [
          { textValue: '', disabled: false },
          { textValue: '()^2', disabled: true },
        ],
      },
    },
    conditions: {
      screen: [
        [],
        [3.27],
        [1.41421356237],
        [1.808314],
      ],
      key: [['sqrt{left(right)}','left(right)^{frac{1}{2}}'],],

      equation: [
        [
          'sqrt{x}=1.808314',
        ],
      ],
    },
  },
  artifact_4: {
    //depure: true,
    variableX: '2',
    
    buttonsActive: true,
    arrowUpDown: true,
    modeDouble: true,
    characteristicsArtifact: {
      typeForm: 'form_6',
      width: '320px',
      height: '400px',
      arrow: {
        count: 2,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 4,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '150px',
              height: '50px',
            },
          },
        },
        {
          square: {
            count: 2,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px',
            },
          },
        },
      ],
    },
    equationsEnd: [
      {
        equation: {
          defaultText: { textValue: 'x^2=-4', disabled: true },
          size: {
            width: '300px',
            height: '50px',
          },
        },
      },
      {
        solution: {
          defaultText: { textValue: '', disabled: false},
        },
      },
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '', disabled: false},
          { textValue: '', direction: false },
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
        ],
      },
      key: {
        defaultText: [
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
        ],
      },
    },
    conditions: {
      screen: [
        [2],
        ['∄'],
        [4],
        [-4, '-4'],
      ],
      key: [['left(right)^2'],['sqrt{left(right)}','left(right)^{frac{1}{2}}']],

      equation: [
        
      ],
      solution: [
        ['∄'],
      ],
    },
  },
  artifact_5: {
    //depure: true,
    variableX: '2',
    minDecimal:6,
    noiseDecimal:0.000001,
    buttonsActive: true,
    arrowUpDown: true,
    modeDouble: true,
    characteristicsArtifact: {
      typeForm: 'form_6',
      width: '320px',
      height: '400px',
      arrow: {
        count: 2,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 4,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '150px',
              height: '50px',
            },
          },
        },
        {
          square: {
            count: 2,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px',
            },
          },
        },
      ],
    },
    equationsEnd: [
      {
        equation: {
          defaultText: { textValue: 'Sen(x)=3', disabled: true },
          size: {
            width: '300px',
            height: '50px',
          },
        },
      },
      {
        solution: {
          defaultText: { textValue: '', disabled: false},
        },
      },
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '', disabled: false},
          { textValue: '', direction: false },
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
        ],
      },
      key: {
        defaultText: [
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
        ],
      },
    },
    conditions: {
      screen: [
        [2],
        ['∄'],
        [0.90929742682],
        [3, '3'],
      ],
      key: [['sinleft(right)'],['sin^{-1}left(right)']],

      equation: [
        
      ],
      solution: [
        ['∄'],
      ],
    },
  },
  artifact_6: {
    //depure: true,
    variableX: '2',
    minDecimal:6,
    noiseDecimal:0.000001,
    buttonsActive: true,
    arrowUpDown: true,
    modeDouble: true,
    characteristicsArtifact: {
      typeForm: 'form_6',
      width: '320px',
      height: '400px',
      arrow: {
        count: 2,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 4,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '150px',
              height: '50px',
            },
          },
        },
        {
          square: {
            count: 2,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px',
            },
          },
        },
      ],
    },
    equationsEnd: [
      {
        equation: {
          defaultText: { textValue: 'e^x=-2', disabled: true },
          size: {
            width: '300px',
            height: '50px',
          },
        },
      },
      {
        solution: {
          defaultText: { textValue: '', disabled: false},
        },
      },
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '', disabled: false},
          { textValue: '', direction: false },
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
        ],
      },
      key: {
        defaultText: [
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
        ],
      },
    },
    conditions: {
      screen: [
        [2],
        ['∄'],
        [7.389056],
        [-2, '-2' ],
      ],
      key: [['exponentialE^{left(right)}','e^{left(right)}'],['lnleft(right)']],

      equation: [
        
      ],
      solution: [
        ['∄'],
      ],
    },
  },
};
  
generateArtifact(def);
  