
let def = {

  artifact_1: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'simplify_6',
      width: '320px',
      height: 'auto',
      arrow: {
        direction: 'down',
        count: 3,
      },
      typeDiv: [
        {
          rounded: {
            count: 4,
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
            count: 3,
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
        solution: {
          defaultText: {
            textValue: '',
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
          { textValue: '\\tan\\left(\\ln^2\\left(x\\right)\\right)=6', disabled: true },
          { textValue: '' },
          { textValue: '' },
          { textValue: '' },

        ],
      },
      key: {
        defaultText: [
          { textValue: '' },
          { textValue: '' },
          { textValue: '' },

        ],
      },
    },
    conditions: {
      screen: [
        [],
        ['ln^2left(xright)=1.405647',
          'ln^2left(xright)=1.405648'],
        ['lnleft(xright)=1.185600', 'lnleft(xright)=1.1856'],
        // ["x=3.27265022179","x=3.272","x=3.27"]
        ['x=3.272650', 'x=3.27265']

      ],
      key: [
        ['tan^{-1}left(right)'],
        ['sqrt{left(right)}'],
        ['exponentialE^{left(right)}']

      ],
      solution: [
        // ["x=3.27265022179","x=3.272","x=3.27"]
        ['3.272650', '3.27265']

      ],
    },
  },

  artifact_2: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'simplify_6',
      width: '320px',
      height: 'auto',
      arrow: {
        direction: 'down',
        count: 3,
      },
      typeDiv: [
        {
          rounded: {
            count: 4,
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
            count: 3,
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
          { textValue: '\\sin^2\\left(x-2\\right)=0.5', disabled: true },
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
        [],
        ['sinleft(x-2right)=0.707106', 'sinleft(x-2right)=0.707107',
        ],

        ['x-2=0.785398', 'x-2=0.785399'],
        ['x=2.785398', 'x=2.785399']
      ],
      key: [
        ['sqrt{left(right)}'],
        ['sin^{-1}left(right)'],
        ['left(right)+2']

      ],
      solution: [
        ['2.785398', '2.785399']

      ],
    },
  },

  artifact_3: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'simplify_6',
      width: '320px',
      height: 'auto',
      arrow: {
        direction: 'down',
        count: 3,
      },
      typeDiv: [
        {
          rounded: {
            count: 4,
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
            count: 3,
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
          { textValue: '\\cos\\left(\\sin\\left(\\frac{x}{2}\\right)\\right)=0.54', disabled: true },
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
        [],
        ['sinleft(frac{x}{2}right)=1.000359', 'sinleft(frac{x}{2}right)=1.000360', 'sinleft(frac{x}{2}right)=1.00036'],
        ['notin', '∄', 'notin ', 'emptyset'],
        ['notin', '∄', 'notin ', 'emptyset'],

      ],
      key: [
        ['cos^{-1}left(right)'],

        ['sin^{-1}left(right)'],
        ['2cdotleft(right)', 'left(right)cdot2', '2left(right)', 'left(right)2'],


      ],
      solution: [

        ['notin', '∄', 'notin ', 'emptyset']
      ],
    },
  },

}

generateArtifact(def);