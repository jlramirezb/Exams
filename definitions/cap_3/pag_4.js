let def = {
  artifact_1: {
    //depure: true,
    variableX: '4',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 4,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 5,
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
            count: 4,
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
        defaultText: [{ textValue: 'x', disabled: true }],
      },
      key: {
        defaultText: [
          { textValue: '2$$ \\cdot()' },
          { textValue: 'sin()' },
          { textValue: '3\\cdot()' },
          { textValue: '2+()' },
        ],
        disabled: true,
      },
    },
    conditions: {
      screen: [
        [],
        [8, '2x'],
        [0.9893582466233818, 'sinleft(2xright)'],
        [
          2.9680747398701453,
          '3cdotsinleft(2xright)',
          '3left(sinleft(2xright)right)',
          '3timessinleft(2xright)',
          '3sinleft(2xright)',
          '3cdotleft(sinleft(2xright)right)',
          '3timesleft(sinleft(2xright)right)',
          '3timesleft(sinleft(2cdotxright)right)',
          '3cdotsinleft(2xright)',
          '3cdotsinleft(2cdotxright)'
        ],
        [
          4.968074739870145,
          '2+3cdotsinleft(2xright)',
          '2+3left(sinleft(2xright)right)',
          '2+3timessinleft(2xright)',
          '2+3sinleft(2xright)',
          '2+3left(sinleft(2cdotxright)right)',
          '2+3cdotleft(sinleft(2cdotxright)right)',
          '2+3left(sinleft(2xright)right)',
          '2+3cdotleft(sinleft(2xright)right)',
          '2+left(3cdotsinleft(2xright)right)',
          '2+left(3sinleft(2xright)right)',
        ],
      ],
    },
  },

  artifact_2: {
    //depure: true,
    variableX: '4',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 4,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 5,
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
            count: 4,
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
        defaultText: [{ textValue: 'x', disabled: true }],
      },
      key: {
        defaultText: [
          { textValue: '3\\cdot()' },
          { textValue: '()+1' },
          { textValue: 'sin()' },
          { textValue: '()+1' },
        ],
        disabled: true,
      },
    },
    conditions: {
      screen: [
        [],
        [12, '3x'],
        [13, '3x+1', 'left(3xright)+1'],
        [0.4201670368266409, 'sinleft(3x+1right)', 'sinleft(left(3xright)+1right)'],
        [1.420167036826641, 'sinleft(3x+1right)+1', 'sinleft(left(3xright)+1right)+1',
          '1+sinleft(left(3xright.right)+1)', '1+sinleft(3xright+1)', '1+sinleft(3times xright+1)',
          '1+sinleft(3left(xright)right+1)', '1+sinleft(3cdotxright.+1)', '1+left(sinleft(3xright)+1right)', '1+sinleft(left(3xright)+1right)',
          '1+sinleft(3x+1right)', '1+sinleft(3cdotx+1right)', '1+sinleft(3times x+1right)', '1+sinleft(3left(xright)+1right)', 'left(sinleft(left(3xright)+1right)right)+1', 'left(sinleft(3x+1right)right)+1'],
      ],
    },
  },

  artifact_3: {
    //depure: true,
    variableX: '4',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 4,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 5,
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
            count: 4,
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
        defaultText: [{ textValue: 'x', disabled: true }],
      },
      key: {
        defaultText: [
          { textValue: '3\\cdot()' },
          { textValue: '()-1' },
          { textValue: 'Ln()' },
          { textValue: '()+0.5' },
        ],
        disabled: true,
      },
    },
    conditions: {
      screen: [
        [],
        [12, '3x'],
        [11, '3x-1', 'left(3xright)-1'],
        [
          2.3978952727983707,
          'lnleft(3x-1right)',
          'lnleft(left(3cdotxright)-1right)', 'lnleft(left(3xright)-1right)'
        ],
        [2.8978952727983707, 'lnleft(3x-1right)+0.5', 'lnleft(left(3xright)-1right)+0.5', 'lnleft(left(3xright)-1right)+left(0.5right)', '0.5+lnleft(3x-1right)', '0.5+lnleft(3times x-1right)', '0.5+lnleft(3cdot x-1right)', '0.5+lnleft(3left(xright)-1right)'],
      ],
    },
  },

  artifact_4: {
    //depure: true,
    variableX: '4',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 4,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 5,
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
            count: 4,
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
        ],
      },
      key: {
        defaultText: [
          { textValue: '()+1',disabled: true },
          { textValue: '0.3\\cdot()',disabled: true },
          { textValue: 'sin()',disabled: true },
          { textValue: '()+1',disabled: true },
        ],
        
      },
    },
    conditions: {
      screen: [
        [],
        [5, 'x+1'],
        [ '0.3x+0.3', '0.3left(x+1right)', '0.3left(x+1right)',
          '0.3cdotleft(x+1right)', '0.3cdotx+0.3'], /* "0.3cdotx+1" */

        ['sinleft(0.3x+0.3right)',  'sinleft(0.3left(x+1right)right)',
          'sinleft(0.3left(x+1right)right)', 'sinleft(0.3cdotleft(x+1right)right)', 'sinleft(0.3cdotx+0.3right)', /* "sinleft(0.3cdotx+1right)" */ ],

        ['sinleft(0.3x+0.3right)+1', 'sinleft(0.3left(x+1right)right)+1',
          '1+sinleft(0.3left(x+1right)right)', '1+sinleft(0.3x+1right)', '1+sinleft(0.3times x+1right)', '1+sinleft(0.3cdotx+1right)', '1+sinleft(0.3left(xright)+1right)',
          '1+sinleft(0.3x+0.3right)', 'sinleft(0.3cdotleft(x+1right)right)+1', 'sinleft(0.3left(x+1right)right)+1', 'sinleft(0.3cdotx+1right)+1',
          'sinleft(0.3cdotx+1right)+1', 'sinleft(0.3cdotx+0.3right)+1', 'sinleft(0.3cdotx+0.3right)+1'], /* "sinleft(0.3x+1right)+1", "sinleft(0.3cdot x+1right)+1",  */
      ],
    },
  },

  artifact_5: {
    //depure: true,
    variableX: '4',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 4,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 5,
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
            count: 4,
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
        defaultText: [{ textValue: 'x', disabled: true }],
      },

      key: {
        defaultText: [
          { textValue: 'tan()' },
          { textValue: '()^{-1}' },
          { textValue: 'sin()' },
          { textValue: 'cos()' },
        ],
        disabled: true,
      },
    },
    conditions: {
      screen: [
        [],
        [1.1578212823495777],
        [0.8636911544506165, 1.1578212823495777, 'cotleft(xright)'],
        [0.7602456422380123],
        [0.7246667606686735, 'cosleft(sinleft(cotleft(xright)right)right)'],
      ],
    },
  },

  artifact_6: {
    //depure: true,
    variableX: '4',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 4,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 5,
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
            count: 4,
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
        defaultText: [{ textValue: 'x', disabled: true }],
      },

      key: {
        defaultText: [
          { textValue: '()^2' },
          { textValue: '()^{-1}' },
          { textValue: '-1\\cdot()' },
          { textValue: 'e^{()}' },
        ],
        disabled: true,
      },
    },
    conditions: {
      screen: [
        [],
        [16],
        [0.0625],
        [-0.0625, '-1left(xright)', '-1left(x^{-2}right)', '-1cdotleft(x^{-2}right)'],
        [
          0.9394130628134758,
          'exponentialE^{-1left(xright)}',
          'exponentialE^{left(-1left(xright)right)}',
        ],
      ],
    },
  },

  artifact_7: {
    // depure: true,
    variableX: '4',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 4,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 5,
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
            count: 4,
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
        defaultText: [{ textValue: 'x^3', disabled: true }],
      },

      key: {
        defaultText: [
          { textValue: 'sin()' },
          { textValue: 'ln()' },
          { textValue: '()\\cdot(-5)' },
          { textValue: 'e^{()}' },
        ],
        disabled: true,
      },
    },
    conditions: {
      screen: [
        [],
        [0.9200260381967906],
        [-0.08335330695174017],
        [0.41676653475870085, 'lnleft(sinleft(x^3right)right)left(-5right)',
          'lnleft(sinleft(x^3right)right)cdot-5', 'lnleft(sinleft(x^3right)right)left(-5right)', 'lnleft(sinleft(x^3right)right)timesleft(-5right)',
          'lnleft(sinleft(x^3right)right)cdotleft(-5right)', 'left(lnleft(sinleft(x^3right)right)right)cdotleft(-5right)', 
          'left(lnleft(sinleft(x^3right)right)right)left(-5right)', 'left(lnleft(sin x^3right)right)cdotleft(-5right)', 'left(lnleft(sin x^3right)right)left(-5right)'],
        [
          1.5170482935418212,
          'exponentialE^{lnleft(sinleft(x^3right)right)left(-5right)}',
          'exponentialE^{left(lnleft(sinleft(x^3right)right)left(-5right)right)}',
          'exponentialE^{-5left(lnleft(sin x^3right)right)}', 'exponentialE^{left(lnleft(sinleft(x^3right)right)cdot-5right)}',
          'exponentialE^{left(left(lnleft(sinleft(x^3right)right)right)cdotleft(-5right)right)}', 'exponentialE^{left(left(lnleft(sinleft(x^3right)right)right)left(-5right)right)}',
          'exponentialE^{left(lnleft(sinleft(x^3right)right)right)cdotleft(-5right)}', 'exponentialE^{left(lnleft(sinleft(x^3right)right)right)left(-5right)}', 'exponentialE^{left(left(lnleft(sinleft(x^3right)right)right)cdotleft(-5right)right)}', 'exponentialE^{left(left(lnleft(sinleft(x^3right)right)right)left(-5right)right)}',
          'exponentialE^{left(left(lnleft(sin x^3right)right)cdotleft(-5right)right)}', 'exponentialE^{left(left(lnleft(sin x^3right)right)left(-5right)right)}', 'exponentialE^{left(lnleft(sinleft.x^3right)right)left(-5right)right.}'
        ], ]
    },
  },
  artifact_8: {
    //depure: true,
    variableX: '4',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 4,
        direction: 'down',
      },
      typeDiv: [
        {
          rounded: {
            count: 5,
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
            count: 4,
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
        defaultText: [{ textValue: 'x^2', disabled: true }],
      },

      key: {
        defaultText: [
          { textValue: '()^{-1}' },
          { textValue: '()+1' },
          { textValue: '()^{-1}' },
          { textValue: '()+1' },
        ],
        disabled: true,
      },
    },
    conditions: {
      screen: [
        [],
        [0.0625],
        [1.0625],
        [0.9411764705882353, 'left(left(x^2right)^{-1}+1right)^{-1}',
          'left(left(x^{-2}right)+1right)^{-1}', 'left(left(x^{-2}right)+1right)^{-1}', 'left(x^{-2}+1right)^{-1}', 'left(x^{-2}+1right)^{-1}+1'],
        [
          1.9411764705882353,
          'left(left(x^2right)^{-1}+1right)^{-1}+1',
          'left(left(x^{-2}right)^{-1}+1right)^{-1}+1',
          'left(left(frac{1}{x^2}+1right)^{-1}right)+1',
          '1+left(left(x^{-2}right)^{-1}+1right)^{-1}',
          'frac{2x^2+1}{x^2+1}'
        ],
      ],
    },
  },
};

generateArtifact(def);
