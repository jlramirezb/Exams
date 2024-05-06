let def = {
  artifact_1: {
    //depure:true,
    variableX: '3',
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
          { textValue: 'y', disabled: false },
          { textValue: 'sin(x)', disabled: true },
          { textValue: 'sin(sin(x))', disabled: true },
        ],
      },
      key: {
        defaultText: [{ textValue: 'sin{()}' }, { textValue: 'sin{()}' }],
        disabled: true,
      }, //teclas
    },
    conditions: {
      screen: [[3]],

    },
  },
  artifact_2: {
    //depure:true,
    variableX: '2',
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
          { textValue: '\\placeholder{', disabled: false },
          { textValue: '\\exponentialE^{\\left(\\placeholder{}^{}\\right)}', disabled: false },
          { textValue: 'sin{(e^x)}}', disabled: true },
        ],
      },
      key: {
        defaultText: [{ textValue: 'e⁽⁾' }, { textValue: 'sin{()}' }],
        disabled: true,
      }, //teclas
    },
    conditions: {
      screen: [[2], [7.3890560989306495], []],

    },
  },

  artifact_3: {
    //depure:true,
    variableX: '3',
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
          { textValue: '\\sin', disabled: false },
          { textValue: '\\exponentialE^{\\sin\\left(\\right)}', disabled: false },
        ],
      },
      key: {
        defaultText: [{ textValue: 'sin{()}' }, { textValue: 'e⁽⁾' }],
        disabled: true,
      }, //teclas
    },
    conditions: {
      screen: [[], ['sinleft(xright)',/* 0.1411200080598672 */],
        ['exponentialE^{left(sinleft(xright)right)}',
          'exponentialE^{sinleft(xright)}',/* 1.151562836514535 */]], //pantalla error

    },
  },

  artifact_4: {
    //depure:true,
    variableX: '3',
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
          { textValue: 'sin(x)', disabled: true },
          { textValue: '\\sin^2\\left(x\\right)', disabled: false },
        ],
      },
      key: {
        defaultText: [{ textValue: 'sin{()}' }, { textValue: 'sin{()}' }],
        disabled: true,
      }, //teclas
    },
    conditions: {
      screen: [[], [], ['sinleft(sinleft(xright)right)', 'sin^{}left(sinleft(xright)right)'/* 0.14065207678644337 */]], //pantalla ERRORR

    },
  },

  artifact_5: {
    //depure:true,
    variableX: '3',
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
          { textValue: 'x^2', disabled: true },
          { textValue: '\\left(\\exponentialE^x\\right)^2', disabled: false },
        ],
      },
      key: {
        defaultText: [{ textValue: '()^2' }, { textValue: 'e^{()}' }],
        disabled: true,
      }, //teclas
    },

    conditions: {
      screen: [[], [], [8103.083927575381]], //eroorr

    },
  },
  artifact_6: {
    //depure:true,
    variableX: '3',
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
          { textValue: 'e^x', disabled: true },
          { textValue: '\\exponentialE^{x^2}', disabled: false },
        ],
      },
      key: {
        defaultText: [{ textValue: 'e⁽⁾' }, { textValue: '()^2' }],
        disabled: true,
      },
    },
    conditions: {
      screen: [[], [], [403.428793492735, 'left(exponentialE^x)^2right.', 'left(exponentialE^{x^{}}right)^2', 'left(exponentialE^x)right.^2',]],

    },
  },
  artifact_7: {
    depure: true,
    variableX: '3',
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
          { textValue: '\\cos', disabled: false },
          { textValue: '\\cos\\left(x+1\\right)', disabled: false },
        ],
      },
      key: {
        defaultText: [{ textValue: 'cos()' }, { textValue: '()+1' }],
        disabled: true,
      }, //teclas
    },
    conditions: {
      screen: [[], [/* -0.9899924966004454 */, 'cosleft(xright)'], [/* 0.010007503399554585 */, 'cosleft(xright)+1',  
        'left(cosleft(xright)+1right)']],

    },
  },

  artifact_8: {
    //depure: true,
    variableX: '3',
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
          { textValue: 'x+1', disabled: true },
          { textValue: '\\cos\\left(x\\right)+1', disabled: false },
        ],
      },
      key: {
        defaultText: [{ textValue: '()+1' }, { textValue: 'cos()' }],
        disabled: true,
      }, //teclas
    },
    conditions: {
      screen: [[], [], [-0.6536436208636119]],

    },
  },


};

generateArtifact(def);
