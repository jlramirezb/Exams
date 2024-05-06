let def = {

  artifact_1: {
    //depure: true,
    variableX: '2',
    arrowUpDown: true,
    modeDouble: true,
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'simplify_3',
      width: 'auto',
      height: '320px',
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
          { textValue: 'x', disabled: true },
        ]
      },
      key: {
        defaultText: [
          { textValue: 'f( )', disabled: true },
          { textValue: 'f^{-1}()', disabled: true, }
        ]
      }
    },
    conditions: {
      screen: [
        [],
        ['f^{-1}left(fleft(xright)right)', 'f^{-1}left(xright)', 'x'],
        ['fleft(xright)'],
        ['fleft(xright)'],

      ],

    },
  },

  artifact_2: {
    //depure: true,
    variableX: '2',
    arrowUpDown: true,
    modeDouble: true,
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'simplify_3',
      width: 'auto',
      height: '320px',
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
          { textValue: 'x', disabled: true },

        ],
      },
      key: {
        defaultText: [{ textValue: 'f^{-1}()', disabled: true, }, { textValue: 'f()', disabled: true, }],

      },
    },

    conditions: {
      screen: [
        [],
        ['x', 'fleft(f^{-1}left(xright)right)'],
        ['f^{-1}left(xright)'],
        ['f^{-1}left(xright)'],


      ],
      key: [
        [],
        [],

      ],
    },
  },
};

generateArtifact(def);

