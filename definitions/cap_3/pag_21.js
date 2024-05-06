
let def = {

  artifact_1: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid_2',
      width: 'auto',
      height: 'auto',
      arrow: {
        count: 2,
        direction: 'down'

      },
      typeDiv: [
        {
          rounded: {
            count: 3,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '180px',
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
              width: '120px',
              height: '50px',
            },
          },
        },
      ],
    },
    equationsEnd: [
      {
        equation: {
          defaultText: {
            textValue: '2x-3=4',
            disabled: true,
          },

          size: {
            width: '280px',
            height: '50px',
          },
        },
      },
      {
        solution: {
          defaultText: {
            textValue: '',
            disabled: false,
          },

          size: {
            width: '280px',
            height: '50px',
          },
        },
      },
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '2\\cdot x+\\left(-3\\right)=4', disabled: true },
          { textValue: '' },
          { textValue: '' },

        ],
      },
      key: {
        defaultText: [
          { textValue: '()-(-3)', disabled: true },
          { textValue: '()/2', disabled: true },

        ],
      },
    },
    conditions: {
      screen: [
        [],
        ['2x=7', '2cdotx=7', '2times x=7', '2left(xright)=7'],
        ['x=frac{7}{2}', 'x=3.5'],

      ],
      key: [
        [],
        [],

      ],
      equation: [[]],
      solution: [['frac{7}{2}', '3.5']],
    },
  },
  artifact_2: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid_2',
      width: 'auto',
      height: 'auto',
      arrow: {
        count: 2,
        direction: 'down'
      },
      typeDiv: [
        {
          rounded: {
            count: 3,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '180px',
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
              width: '120px',
              height: '50px',
            },
          },
        },
      ],
    },
    equationsEnd: [
      {
        equation: {
          defaultText: {
            textValue: '5-4x=2',
            disabled: true,
          },

          size: {
            width: '280px',
            height: '50px',
          },
        },
      },
      {
        solution: {
          defaultText: {
            textValue: '',
            disabled: false,
          },

          size: {
            width: '280px',
            height: '50px',
          },
        },
      },
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '' },
          { textValue: '' },
          { textValue: '' },

        ],
      },
      key: {
        defaultText: [
          { textValue: '' },
          { textValue: '' },

        ],
      },
    },
    conditions: {
      screen: [

        ['5+left(-4xright)=2', '5+left(-4cdotxright)=2', '5+left(-4times xright)=2', '-4x+5=2', '-4cdotx+5=2'],
        ['-4cdotx=-3', '-4times x=-3', '-4left(xright)=-3', '-4x=-3'],
        ['x=frac{3}{4}', 'x=0.75'],

      ],
      key: [
        ['left(-5right)+left(right)', 'left(right)-5'],
        ['frac{left(right)}{-4}', 'frac{1}{-4}left(right)', 'frac{1}{-4}cdotleft(right)'],

      ],
      equation: [[]],
      solution: [['frac{3}{4}', '0.75']],
    },
  },
  artifact_3: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid_2',
      width: 'auto',
      height: 'auto',
      arrow: {
        count: 2,
        direction: 'down'
      },
      typeDiv: [
        {
          rounded: {
            count: 3,
            border: '1px solid black',
            formClas: 'rounded',
            inputEnable: true,
            size: {
              width: '180px',
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
              width: '120px',
              height: '50px',
            },
          },
        },
      ],
    },
    equationsEnd: [
      {
        equation: {
          defaultText: {
            textValue: '-5+4x=2',
            disabled: true,
          },

          size: {
            width: '280px',
            height: '50px',
          },
        },
      },
      {
        solution: {
          defaultText: {
            textValue: '',
            disabled: false,
          },

          size: {
            width: '280px',
            height: '50px',
          },
        },
      },
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '' },
          { textValue: '' },
          { textValue: '' },

        ],
      },
      key: {
        defaultText: [
          { textValue: '' },
          { textValue: '' },

        ],
      },
    },
    conditions: {
      screen: [

        ['4x-5=2', '4cdotx-5=2', '4x+left(-5right)=2', "4cdotx+left(-5right)=2"],
        ['4x=7', '4cdot x=7', '4left(xright)=7', '4times x=7',],
        ['x=frac{7}{4}', 'x=1.75'],

      ],
      key: [
        ['left(right)-5', 'left(right)-left(-5right)', 'left(right)+left(-5right)'],
        ['frac{left(right)}{4}', 'frac{1}{4}left(right)'],

      ],
      equation: [[]],
      solution: [['frac{7}{4}', '1.75']],
    },
  },
};

generateArtifact(def);
