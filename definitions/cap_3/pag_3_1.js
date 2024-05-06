let def = {
  artifact_1: {
    //depure: true,
    variableX: '6',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 2,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 3,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '200px',
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
          { textValue: 'x+1', disabled: true },
          { textValue: '3x+3', disabled: false },
          { textValue: '\\exponentialE^{3x}+3', disabled: false },
        ],
      },
      key: {
        defaultText: [{ textValue: '3\\cdot()' }, { textValue: 'e^(^)' }],
        disabled: true,
      }, //teclas
    },
    conditions: {
      screen: [
        [],
        ['3left(x+1right)', '3timesleft(x+1right)', '3cdotleft(x+1right)', '3cdotx+3', '3timesx+3', '3x+3', '3left(xright)+3'],
        [/* 178482300.9631871, */'exponentialE^{left(3left(x+1right)right)}', 'exponentialE^{3timesleft(x+1right)}',
          'exponentialE^{3left(x+1right)}', 'exponentialE^{left(3x+3right)}', 'exponentialE^{3cdotleft(x+1right)}', 'exponentialE^{left(3cdotleft(x+1right)right)}',
          'exponentialE^{3x+3}', 'exponentialE^{left(3cdotx+3right)}', 'exponentialE^{3cdotx+3}', 'exponentialE^{3timesx+3}', 'exponentialE^{left(3timesx+3right)}',
          'exponentialE^{left(3left(xright)+3right)}', 'exponentialE^{3left(xright)+3}', 'exponentialE^{left(3left(xright)+3right)}', 'exponentialE^{left(3timesleft(x+1right)right)}', 'exponentialE^{3timesleft(x+1right)}'],
      ],

    },
  },
  artifact_2: {
    //depure: false,
    variableX: '7',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 2,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 3,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '200px',
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
          { textValue: 'x', disabled: true },
          { textValue: 'x+1', disabled: false },
          { textValue: '3x+1', disabled: false },
        ],
      },
      key: {
        defaultText: [{ textValue: '1+()' }, { textValue: '3\\cdot()' }],
        disabled: true,
      }, //teclas
    },
    conditions: {
      screen: [
        [],
        [8],
        [/* 10, */ '3x+3', '3left(x+1right)', '3timesleft(x+1right)',
          '3cdotleft(x+1right)', '3cdotx+3', '3timesx+3', '3x+3', '3left(xright)+3',
          '3left(1+xright)', '3timesleft(1+xright)', '3cdotleft(1+xright)', '3+3cdotx', '3+3timesx', '3+3x', '3+3left(xright)'],
      ],
    },
  },
  artifact_3: {
    //depure: false,
    variableX: '4',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 2,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 3,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '200px',
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
          { textValue: 'x', disabled: true },
          { textValue: 'x+2', disabled: true },
          { textValue: '\\sin\\left(x\\right)+\\sin\\left(2\\right)', disabled: false },
        ],
      },
      key: {
        defaultText: [{ textValue: '()+2' }, { textValue: 'sin{()}' }],
        disabled: true,
      }, //teclas
    },
    conditions: {
      screen: [[], [], [-0.27941549819892586, 'sinleft(x+2right)']],
    },
  },

  artifact_4: {
    //depure: false,
    variableX: '4',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 2,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 3,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '200px',
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
          { textValue: 'x', disabled: true },
          { textValue: 'x+2', disabled: true },
          { textValue: 'x^2+4', disabled: false },
        ],
      },
      key: {
        defaultText: [{ textValue: '( )+2' }, { textValue: '( )²' }],
        disabled: true,
      }, //teclas
    },
    conditions: {
      screen: [[], [], [36, 'x^2+4x+4', 'left(x+2)^2right.', 'left(2+x)^2right.'
        ,'left(x+2right)^2',  'left(2+xright)^2', 'left(x^{}+2right)^2', 'left(2+x^{}right)^2']], //pantalla
    },
  },

  artifact_5: {
    //depure: false,
    variableX: '1',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 2,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 3,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '200px',
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
          { textValue: 'e^x', disabled: true },
          { textValue: '\\exponentialE^{-x}', disabled: false },
          { textValue: '\\exponentialE^x', disabled: false },
        ],
      },
      key: {
        defaultText: [{ textValue: '()^{-1}' }, { textValue: '-1\\cdot()' }],
        disabled: true,
      }, //teclas
    },
    conditions: {
      screen: [[], ['exponentialE^{-x}','exponentialE^x','frac{1}{\exponentialE^x}','exponentialE^{left(xright)}','-1cdotleft(exponentialE^{left(xright)}right)^{-1}',
      /* 0.36787944117144233 */],
      ['-1cdotleft(exponentialE^xright)^{-1}', '-1left(exponentialE^{left(xright)}right)^{-1}','-1timesleft(exponentialE^{left(xright)}right)^{-1}',
        '-1left(exponentialE^xright)^{-1}','-1timesleft(exponentialE^xright)^{-1}', '-1cdotleft(left(exponentialE^xright)^{-1}right)', '-1cdotleft(left(exponentialE^{left(xright)}right)^{-1}right)',
        '-1left(left(exponentialE^{left(xright)}right)^{-1}right)','-1timesleft(left(exponentialE^{left(xright)}right)^{-1}right)',
        '-1left(left(exponentialE^xright)^{-1}right)','-1timesleft(left(exponentialE^xright)^{-1}right)', 
        '-1cdotleft(frac{1}{exponentialE^x}right)','-1left(frac{1}{exponentialE^x}right)', '-1timesleft(frac{1}{exponentialE^x}right)',
        '-1cdotleft(frac{1}{exponentialE^{left(xright)}}right)','-1left(frac{1}{exponentialE^{left(xright)}}right)','-1timesleft(frac{1}{exponentialE^{left(xright)}}right)', 
        '-1cdotleft(exponentialE^{-x}right)','-1timesleft(exponentialE^{-x}right)','-1left(exponentialE^{-x}right)', '-1cdotfrac{1}{exponentialE^x}'/* -0.36787944117144233 */]], //pantalla
    },
  },

  artifact_6: {
    //depure: false,
    variableX: '4',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 2,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 3,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '200px',
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
          { textValue: 'x', disabled: true },
          { textValue: 'x+3', disabled: true },
          { textValue: '\\sqrt{x}+\\sqrt{3}', disabled: false },
        ],
      },
      key: {
        defaultText: [{ textValue: '()+3' }, { textValue: '\\sqrt{{▢}}' }],
        disabled: true,
      }, //teclas
    },
    conditions: {
      screen: [[], [], [2.6457513110645907]],
    },
  },
  artifact_7: {
    //depure: false,
    variableX: '4',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 2,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 3,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '200px',
              height: '58px',
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
          { textValue: 'x', disabled: true },
          { textValue: 'x+1', disabled: true },
          { textValue: '\\frac{1}{x}+1', disabled: false },
        ],
      },
      key: {
        defaultText: [{ textValue: '()+1' }, { textValue: '()^{-1}' }],
        disabled: true,
      }, //teclas
    },
    conditions: {
      screen: [[], [], [0.2]],
    },
  },
  artifact_8: {
    //depure: false,
    variableX: '4',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 2,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 3,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '200px',
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
          { textValue: 'x', disabled: true },
          { textValue: '-x', disabled: false },
          { textValue: 'x', disabled: false },
        ],
      },
      key: {
        defaultText: [{ textValue: '()^{^{-1}}' }, { textValue: '-()' }],
        disabled: true,
      }, //teclas
    },
    conditions: {
      screen: [[], [0.25], [-0.25]],
    },
  },
};

generateArtifact(def);
