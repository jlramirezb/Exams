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
  artifact_example_2: {
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
          defaultText: { textValue: 'f(x) = a', disabled: true },
          validateText: { valText: 'Ecuación' },
          size: {
            width: '300px',
            height: '50px',
          },
        },
      },
      {
        solution: {
          defaultText: { textValue: 'f^{-1}(a)', disabled: true },
        },
      },
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: 'x' },
          { textValue: 'f^{-1}(a)' },
          { textValue: 'f(x)' },
          { textValue: 'a' },
        ],
        disabled: true,
      },
      key: {
        defaultText: [{ textValue: 'f( )' }, { textValue: 'f^{-1}()' }],
        disabled: true,
      },
    },
    conditions: {},
  },
  artifact_1: {
    // depure: true,
    variableX: '2',
    buttonsActive: true,
    arrowUpDown: true,
    minDecimal:6,
    noiseDecimal:0.000001,
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
          validateText: { valText: '\\tan\\left(x\\right)=16' },
          size: {
            width: '300px',
            height: '50px',
          },
        },
      },
      {
        solution: {
          defaultText: { textValue: '1.508377', disabled: true },
        },
      },
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: 'x', disabled: true },
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
          { textValue: '16', disabled: true },
        ],
      },
      key: {
        defaultText: [
          { textValue: 'tan()', disabled: true },
          { textValue: '', disabled: false },
        ],
      },
    },
    conditions: {
      screen: [
        [],
        [1.5083775167989393,1.50,],
        [-2.185039863261519,-2.18, 'tanleft(xright)'],
        [],
      ],
      key: [[], ['arctanleft(right)', 'tan^{-1}left(right)']],

      equation: [['tanleft(xright)=16']],
      solution: [[]],
    },
  },
  artifact_2: {
    // depure: true,
    variableX: '2',
    buttonsActive: true,
    minDecimal:6,
    noiseDecimal:0.000001,
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
          defaultText: { textValue: 'Sin(x)= 0.5', disabled: true },
          validateText: { valText: 'Ecuación' },
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
          { textValue: '', disabled: false },
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
      screen: [[2], [0.5235987755982989], [0.9092974268256817, 2], [0.5]],
      key: [
        ['sinleft(right)', 'sinleft(right)'],
        ['sin^{-1}left(right)', 'arsinhleft(right)', 'arsinleft(right)'],
      ],
      equation: [[]],
      solution: [[0.5235987755982989]],
    },
  },
  artifact_3: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    buttonsActive: true,
    minDecimal:6,
    noiseDecimal:0.000001,
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
          defaultText: { textValue: 'e^x = 1', disabled: true },
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
      screen: [[2], [0], [7.3890560989306495], [1]],
      key: [['e^{()}', 'exponentialE^{left(right)}'], ['lnleft(right)']],
      equation: [[]],
      solution: [[0]],
    },
  },





  artifact_4: {
    //depure: true,
    variableX: '2',
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
          defaultText: { textValue: 'g(z)=5', disabled: true },
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
      screen: [['z'], ['g^{-1}left(5right)'], ['gleft(zright)'], [5]],
      key: [['gleft(right)'], ['g^{-1}left(right)']],
      equation: [[]],
      solution: [['g^{-1}left(5right)']],
    },
  },


  artifact_5: {
    //depure: true,
    minDecimal:6,
    noiseDecimal:0.000001,
    variableX: '2',
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
          defaultText: { textValue: 'sin(x)=1', disabled: true },
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
      screen: [['x'], ['frac{pi}{2}','sin^{-1}left(1right)',1.57079632679,1.570], [0.909297,'sinleft(2right)','sinleft(frac{pi}{2}right)','sinleft(1.570right)','sinleft(xright)'], [1]],
      key: [['sinleft(right)' ], ['sin^{-1}left(right)']],
      equation: [[]],
      solution: [[1.57079632679,1.570796]],
    },
  },
  artifact_6: {
    //depure: true,
    variableX: '2',
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
          defaultText: { textValue: '3x=6', disabled: true },
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
      screen: [[2, 'x'], ['frac63',2], ['3cdot2',6, '3cdotleft(xright)','3cdotx','3x','3x','xcdot3','left(xright)cdot3','left(xright)3'], [6] ],
      key: [['3cdotleft(right)','left(right)cdot3','3left(right)'], ['frac{left(right)}{3}']],
      equation: [[]],
      solution: [[2]],
    },
  },


  artifact_7: {
    //depure: true,
    variableX: '5',
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
          defaultText: { textValue: 'x+2=7', disabled: true },
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
      screen: [[5], [5,'5-2','2-5'], [7,'5+2','2+5'], [7]],
      key: [['left(right)+2','2+left(right)'], ['left(right)-2','2-left(right)']],
      equation: [[]],
      solution: [['7-2',5]],
    },
  },
  artifact_8: {
    //depure: true,
    variableX: '2',
    
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
          defaultText: { textValue: '-x=3', disabled: true },
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
      screen: [[2], [-3,'-3'], [-2,'-x'], [3]],
      key: [['-1cdotleft(right)','left(right)cdot-1','-1left(right)','-left(right)'], ['-left(right)']],
      equation: [[]],
      solution: [['-1cdotleft(3right)','-1cdot3','3cdot-1',-3]],
    },
  },



};

generateArtifact(def);
