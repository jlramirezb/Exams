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
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
          { textValue: '', disabled: false },
        ],
      },
      key: {
        defaultText: [{ textValue: '' }, { textValue: '' }],
        disabled: false,
      }, //teclas
    },
    conditions: {
      screen: [
        ['5'],
        ['sinleft(5right)','-0.958924',-0.958924274663,-0.958924],
        ['exponentialE^{sinleft(5right)}','exponentialE^{left(sinleft(5right)right)}',0.383304, '0.383304','0.383305']
      ],
      key: [['sinleft(right)'], ['exponentialE^{left(right)}']],

    },
  },
};

generateArtifact(def);
