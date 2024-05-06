//comentariox 
let def = {
  artifact_1: {
    //depure:true,
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 4,
        direction: 'down'
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
              height: '50px'
            }
          }
        },
        {
          square: {
            count: 4,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px'
            }
          }
        }
      ]

    },
    defaultinput: {

      screen: { defaultText: [{ textValue: 'x' }, { textValue: '\\sqrt{\\left(x\\right)}' }, { textValue: '\\sin\\left(\\sqrt{x}\\right)' }, { textValue: '\\sqrt{ \\sin\\left(\\sqrt{x}\\right)}' }, { textValue: '\\sin\\left(\\sqrt{sin\\left(\\sqrt{x}\\right)}\\right)' },], disabled: true },
      key: { defaultText: [{ textValue: '' }, { textValue: '' }, { textValue: '' }, { textValue: '' }], disabled: false }

    },
    conditions: {
      screen: [[], [], [], []],
      key: [['sqrt{left(right)}'], ['sinleft(right)', 'senleft(right)'], ['sqrt{left(right)}'], ['sinleft(right)', 'senleft(right)']]
    }
  },
  artifact_2: {
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 4,
        direction: 'down'
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
              height: '50px'
            }
          }
        },
        {
          square: {
            count: 4,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px'
            }
          }
        }
      ]

    },
    defaultinput: {

      screen: { defaultText: [{ textValue: 'x' }, { textValue: '\\sqrt{\\left(x\\right)}' }, { textValue: '\\exponentialE^{\\sqrt{\\left(x\\right)}}' }, { textValue: '\\left(e^{\\sqrt{\\left(x\\right)}}\\right)^2' }, { textValue: '2\\ln\\left(\\exponentialE^{\\sqrt{x}}\\right)' },], disabled: true },
      key: { defaultText: [{ textValue: '' }, { textValue: '' }, { textValue: '' }, { textValue: '' }], disabled: false }

    },
    conditions: {
      screen: [[], [], [], []],     
      key: [['sqrt{left(right)}'], ['exponentialE^{left(right)}'], ['left(right)^2'], ['lnleft(right)']]
    }
  },
  artifact_3: {
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 4,
        direction: 'down'
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
              height: '50px'
            }
          }
        },
        {
          square: {
            count: 4,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px'
            }
          }
        }
      ]

    },
    defaultinput: {

      screen: { defaultText: [{ textValue: 'y' }, { textValue: '2y' }, { textValue: '\\ln\\left(y\\right)+\\ln\\left(2\\right)' }, { textValue: '\\ln\\left(y\\right)' }, { textValue: '\\exponentialE^{\\ln\\left(y\\right)}' },], disabled: true },
      key: { defaultText: [{ textValue: '' }, { textValue: '' }, { textValue: '' }, { textValue: '' }], disabled: false }

    },
    conditions: {
      screen: [[], [], [], []],      
      key: [['2left(right)', '2cdotleft(right)'], ['lnleft(right)'], ['left(right)-lnleft(2right)'], ['exponentialE^{left(right)}']]
    }
  },
  artifact_4: {
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 4,
        direction: 'down'
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
              height: '50px'
            }
          }
        },
        {
          square: {
            count: 4,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px'
            }
          }
        }
      ]

    },
    defaultinput: {

      screen: { defaultText: [{ textValue: 'z' }, { textValue: '2z' }, { textValue: '\\exponentialE^{2z}' }, { textValue: '\\exponentialE^{4z}' }, { textValue: '\\exponentialE^{8z}' },], disabled: true },
      key: { defaultText: [{ textValue: '' }, { textValue: '' }, { textValue: '' }, { textValue: '' }], disabled: false }

    },
    conditions: {
      screen: [[], [], [], []],
      key: [['2left(right)', '2cdotleft(right)'], ['exponentialE^{left(right)}'], ['left(right)^2'], ['left(right)^2']]
    }
  },
  artifact_5: {
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 4,
        direction: 'down'
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
              height: '50px'
            }
          }
        },
        {
          square: {
            count: 4,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px'
            }
          }
        }
      ]

    },
    defaultinput: {

      screen: { defaultText: [{ textValue: 'x' }, { textValue: 'x^2' }, { textValue: '2\\ln\\left(x\\right)' }, { textValue: '4\\left(\\ln\\left(x\\right)\\right)^2' }, { textValue: '\\ln4+2\\ln\\ln x' },], disabled: true },
      key: { defaultText: [{ textValue: '' }, { textValue: '' }, { textValue: '' }, { textValue: '' }], disabled: false }

    },
    conditions: {
      screen: [[], [], [], []],
      key: [['left(right)^2'], ['lnleft(right)'], ['left(right)^2'], ['lnleft(right)']]
    }
  },
  artifact_6: {
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 4,
        direction: 'down'
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
              height: '50px'
            }
          }
        },
        {
          square: {
            count: 4,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px'
            }
          }
        }
      ]

    },
    defaultinput: {

      screen: { defaultText: [{ textValue: 'x' }, { textValue: 'x+2' }, { textValue: '\\exponentialE^x\\cdot\\exponentialE^2' }, { textValue: '2 + x' }, { textValue: '\\left(x+2\\right)^{\\frac{1}{2}}' },], disabled: true },
      key: { defaultText: [{ textValue: '' }, { textValue: '' }, { textValue: '' }, { textValue: '' }], disabled: false }

    },
    conditions: {
      screen: [[], [], [], []],
      key: [['left(right)+2'], ['exponentialE^{left(right)}'], ['lnleft(right)'], ['left(right)^{frac{1}{2}}','sqrt{left(right)}']]
    }
  },
  artifact_7: {
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'form_1',
      width: '300px',
      height: 'auto',
      arrow: {
        count: 4,
        direction: 'down'
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
              height: '50px'
            }
          }
        },
        {
          square: {
            count: 4,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px'
            }
          }
        }
      ]

    },
    defaultinput: {

      screen: { defaultText: [{ textValue: 'x' }, { textValue: 'x+1' }, { textValue: '\\exponentialE^{x+1}' }, { textValue: '\\frac{1}{\\exponentialE^{x+1}}' }, { textValue: '\\frac{1}{\\exponentialE^{2 x+2}}' },], disabled: true },
      key: { defaultText: [{ textValue: '' }, { textValue: '' }, { textValue: '' }, { textValue: '' }], disabled: false }

    },
    conditions: {
      screen: [[], [], [], []],
      key: [['left(right)+1'], ['exponentialE^{left(right)}'], ['frac{1}{left(right)}', 'left(right)^{-1}'], ['left(right)^2']]
    }
  },
}

generateArtifact(def)
