
let def = {
  artifact_example_1: {
    //depure: true,
    variableX: '2',
    arrowUpDown: true,
    modeDouble: true,
    // buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'simplify_3',
      width: 'auto',
      height: '300px',
      arrow: {
        count: 2,
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
    defaultinput: {
      screen: {
        defaultText: [{ textValue: '', disabled: true },
          { textValue: '', disabled: true },
          { textValue: '', disabled: true },
          { textValue: '', disabled: true },
        ],
        
      },
      key: {
        defaultText: [
          { textValue: 'f( )', disabled: true },
          { textValue: 'f^{-1}()', disabled: true },
        ],
      },
    },
    conditions: {
      screen: [
        ['x'],
        ['f^{-1}left(xright)'],
        ['fleft(xright)'],
        ['fleft(xright)'],
      ],
    },
  },

  artifact_1: {
    depure: true,
    variableX: '2',
    arrowUpDown: true,
    modeDouble: true,
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'simplify_3',
      width: 'auto',
      height: '300px',
      arrow: {
        count: 2,
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
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
          { textValue: '2', disabled: true },
          { textValue: '2', disabled: true },
        ],
      },
      key: {
        defaultText: [
          { textValue: '\\exponentialE^{\\left(\\right)}', disabled: true },
          { textValue: '\\ln\\left(\\right)', disabled: true },
        ],
      },
    },
    conditions: {
      screen: [
        [
          '0.69314718056',
          '0.6',
          '0.69',
          '0.693',
          '0.6931',
          '0.69314',
          '0.693147',
          '0.6931471',
          '0.69314718',
          '0.693147180',
          '0.6931471805',
          '0.69314718056',
        ],
        [
          '0.69314718056',
          '0.6',
          '0.69',
          '0.693',
          '0.6931',
          '0.69314',
          '0.693147',
          '0.6931471',
          '0.69314718',
          '0.693147180',
          '0.6931471805',
          '0.69314718056',
        ],
        [],
        [],
      ],
    },
  },
  artifact_2: {
    depure: true,
    variableX: '2',
    arrowUpDown: true,
    modeDouble: true,
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'simplify_3',
      width: 'auto',
      height: '300px',
      arrow: {
        count: 2,
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
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
          { textValue: '3', disabled: true },
          { textValue: '', disabled: false },
        ],
      },
      key: {
        defaultText: [
          { textValue: '()+2', disabled: true },
          { textValue: '', disabled: false },
        ],
      },
    },
    conditions: {
      screen: [[1], [1], [], [3]],
      key: [[], ['left(right)-2']],
    },
  },
  artifact_3: {
    depure: true,
    variableX: '2',
    arrowUpDown: true,
    modeDouble: true,
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'simplify_3',
      width: 'auto',
      height: '300px',
      arrow: {
        count: 2,
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
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
          { textValue: '8', disabled: true },
          { textValue: '', disabled: false },
        ],
      },
      key: {
        defaultText: [
          { textValue: '4\\cdot\\left(\\right)', disabled: true },
          { textValue: '', disabled: false },
        ],
      },
    },
    conditions: {
      screen: [[2], [2], [], [8]],
      key: [[], ['frac{left(right)}{4}', 'frac{4}{left(right)}']],
    },
  },
  artifact_4: {
    depure: true,
    variableX: '2',
    arrowUpDown: true,
    modeDouble: true,
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'simplify_3',
      width: 'auto',
      height: '300px',
      arrow: {
        count: 2,
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
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
          { textValue: '2', disabled: true },
          { textValue: '2', disabled: true },
        ],
      },
      key: {
        defaultText: [
          { textValue: '\\ln\\left(\\right)', disabled: true },
          { textValue: '\\exponentialE^{\\left(\\right)}', disabled: true },
        ],
      },
    },
    conditions: {
      screen: [
        // 5.43656365692, 5.4, 5.43, 5.436, 5.4365, 5.43656, 5.436563, 5.4365636,
        // 5.43656365, 5.436563656, 5.4365636569,  

        [
      
          '7.389056'
        ],

        // 5.43656365692, 5.4, 5.43, 5.436, 5.4365, 5.43656, 5.436563, 5.4365636,
        // 5.43656365, 5.436563656, 5.4365636569,  
        [
          '7.389056'
        ],
        [],
        [],
      ],
      key: [[], []],
    },
  },
  artifact_5: {
    depure: true,
    variableX: '2',
    arrowUpDown: true,
    modeDouble: true,
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'simplify_3',
      width: 'auto',
      height: '300px',
      arrow: {
        count: 2,
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
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
          { textValue: '3', disabled: true },
          { textValue: '', disabled: false },
        ],
      },
      key: {
        defaultText: [
          { textValue: '', disabled: false },
          { textValue: '()+2', disabled: true },
        ],
      },
    },
    conditions: {
      screen: [[5], [5], [], [3]],
      key: [['left(right)-2'], []],
    },
  },
  artifact_6: {
    depure: true,
    variableX: '2',
    arrowUpDown: true,
    modeDouble: true,
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'simplify_3',
      width: 'auto',
      height: '300px',
      arrow: {
        count: 2,
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
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
          { textValue: '3', disabled: true },
          { textValue: '', disabled: false },
        ],
      },
      key: {
        defaultText: [
          { textValue: '', disabled: false },
          { textValue: '3\\cdot\\left(\\right)', disabled: true },
        ],
      },
    },
    conditions: {
      screen: [[9], [9], [], [3]],
      key: [[ 'frac{left(right)}{3}'], []],
    },
  },
  artifact_7: {
    depure: true,
    variableX: '2',
    arrowUpDown: true,
    modeDouble: true,
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'simplify_3',
      width: 'auto',
      height: '300px',
      arrow: {
        count: 2,
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
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
          { textValue: '3', disabled: true },
          { textValue: '', disabled: false },
        ],
      },
      key: {
        defaultText: [
          { textValue: '-()', disabled: true },
          { textValue: '', disabled: false },
        ],
      },
    },
    conditions: {
      screen: [[-3], [-3], [], [3]],
      key: [[], ['-left(right)']],
    },
  },
  artifact_8: {
    depure: true,
    variableX: '2',
    arrowUpDown: true,
    modeDouble: true,
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'simplify_3',
      width: 'auto',
      height: '300px',
      arrow: {
        count: 2,
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
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '2', disabled: true },
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
        ],
      },
      key: {
        defaultText: [
          { textValue: '()^{-1}', disabled: true },
          { textValue: '', disabled: false },
        ],
      },
    },
    conditions: {
      screen: [[], [2], [0.5], [0.5]],
      key: [[], ['left(right)^{-1}','frac{1}{left(right)}']],
    },
  },
  artifact_9: {
    depure: true,
    variableX: '2',
    arrowUpDown: true,
    modeDouble: true,
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'simplify_3',
      width: 'auto',
      height: '300px',
      arrow: {
        count: 2,
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
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '5', disabled: true },
          { textValue: '', disabled: false },
          { textValue: '-5', disabled: true},
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
      screen: [[], [5], [], [-5]],
      key: [['-left(right)'], ['-left(right)']],
    },
  },
};

generateArtifact(def);
