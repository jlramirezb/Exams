//comentariox
let def = {
  artifact_example_1: {
    //depure: true,
    variableX: '2',
    arrowUpDown: true,
    modeDouble: true,
    buttonsActive: false,
    characteristicsArtifact: {
      typeForm: 'simplify_1',
      width: 'auto',
      height: 'auto',
      arrow: {
        count: 4,
      },
      typeDiv: [
        {
          rounded: {
            count: 6,
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
    equationsEnd: [
      {
        equation: {
          defaultText: {
            textValue: 'g\\left(f\\left(x\\right)\\right)=a',
            disabled: true,
          },

          size: {
            width: '320px',
            height: '50px',
          },
        },
      },
      {
        solution: {
          defaultText: {
            textValue: 'f^{-1}\\left(g^{-1}\\left(a\\right)\\right)',
            disabled: true,
          },
        },
      },
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: 'x', disabled: true },
          {
            textValue: 'f^{-1}\\left(g^{-1}\\left(a\\right)\\right)',
            disabled: true,
          },
          { textValue: 'f\\left(x\\right)', disabled: true },
          { textValue: 'g^{-1}\\left(a\\right)', disabled: true },
          { textValue: 'g\\left(f\\left(x\\right)\\right)', disabled: true },
          { textValue: 'a', disabled: true },
        ],
      },
      key: {
        defaultText: [
          { textValue: 'f\\left(\\right)', disabled: true },
          { textValue: 'f^{-1}\\left(\\right)', disabled: true },
          { textValue: 'g\\left(\\right)', disabled: true },
          { textValue: 'g^{-1}\\left(\\right)', disabled: true },
        ],
      },
    },
    conditions: {
      screen: [[], []],
      key: [[], []],
      equation: [['']],
      solution: [[0]],
    },
  },
  artifact_example_2: {
    //depure: true,
    variableX: '2',
    arrowUpDown: true,
    modeDouble: true,
    buttonsActive: false,
    characteristicsArtifact: {
      typeForm: 'simplify_2',
      width: 'auto',
      height: '450px',
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
    equationsEnd: [
      {
        equation: {
          defaultText: {
            textValue: 'f\\left(x\\right)=g^{-1}\\left(a\\right)',
            disabled: true,
            disabled: true,
          },

          size: {
            width: '320px',
            height: '50px',
          },
        },
      },
      {
        solution: {
          defaultText: {
            textValue: 'f^{-1}\\left(g^{-1}\\left(a\\right)\\right)',
            disabled: true,
          },
        },
      },
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: 'x', disabled: true },
          {
            textValue: 'f^{-1}\\left(g^{-1}\\left(a\\right)\\right)',
            disabled: true,
          },
          { textValue: 'f\\left(x\\right)', disabled: true },
          { textValue: 'g^{-1}\\left(a\\right)', disabled: true },
        ],
      },
      key: {
        defaultText: [
          { textValue: 'f\\left(\\right)', disabled: true },
          { textValue: 'f^{-1}\\left(\\right)', disabled: true },
        ],
      },
    },
    conditions: {
      screen: [
        [2],
        ['∄'],
        [3],
        ['∄'],
        [0.1411200080598672],
        [1.442695040888963427],
        [7.086167395737187],
        [0.6931471805599453],
        [0.8683850922340686, ''],
        [''],
      ],
      key: [
        ['left(right)+1'],
        ['left(right)-1'],
        ['sinleft(right)'],
        ['sin^{-1}left(right)'],
        ['frac{1}{left(right)}'],
        ['frac{1}{left(right)}'],
        ['e^{left(right)}', 'exponentialE^{left(right)}'],
        ['lnleft(right)'],
      ],
      equation: [['']],
      solution: [[0]],
    },
  },
  artifact_example_3: {
    //depure: true,
    variableX: '2',
    arrowUpDown: true,
    modeDouble: true,
    buttonsActive: false,
    characteristicsArtifact: {
      typeForm: 'simplify_4',
      width: 'auto',
      height: '280px',
      arrow: {
        count: 0,
      },
      typeDiv: [
        {
          rounded: {
            count: 2,
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
            count: 0,
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
          defaultText: {
            textValue: 'x=f^{-1}\\left(g^{-1}\\left(a\\right)\\right)',
            disabled: true,
          },

          size: {
            width: '320px',
            height: '50px',
          },
        },
      },
      {
        solution: {
          defaultText: {
            textValue: 'f^{-1}\\left(g^{-1}\\left(a\\right)\\right)',
            disabled: true,
          },
        },
      },
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: 'x', disabled: true },
          {
            textValue: 'f^{-1}\\left(g^{-1}\\left(a\\right)\\right)',
            disabled: true,
          },
        ],
      },
      key: {
        defaultText: [{ textValue: '' }, { textValue: '' }],
      },
    },
    conditions: {
      screen: [
        [2],
        ['∄'],
        [3],
        ['∄'],
        [0.1411200080598672],
        [1.442695040888963427],
        [7.086167395737187],
        [0.6931471805599453],
        [0.8683850922340686, ''],
        [''],
      ],
      key: [['left(right)+1'], ['left(right)-1']],
      equation: [['']],
      solution: [[0]],
    },
  },
};
let xDef = {
  artifactHtml: {
    datadefault: [
      {

        customKeyboard: 6,

        type: 11, // switch case
        classGlobal: 'QA', //
        parent: '#oneContainer', //
        contents: {
          artifact_1: {
            allinputs: [], //nodos que se van generando
            dataInteraction: { incorrect: 0, correct: 0 }, // aciertos y fallas
            questions: [
              {
                type: 1,
                question: 'Estas 3 ecuaciones ¿son equivalentes?',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'Sí',
                },
              },

              ,
              {
                type: 1,
                question: '¿Tienen la misma solución?',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'Sí',
                },
              },
              ,
              {
                type: 3, // una pregunta. Varios inputs
                question: 'Escriba la solución común ',
                inputsDefault: [['', false]],

                conditions: {
                  valueInputs: [
                    ['f^{-1}\\left(g^{-1}\\left(a\\right)\\right)'],
                  ],
                },
              },
              {
                question: '¿Cuál es la ecuación que es más fácil de resolver?',
                type: 2,
                answers_values: ['', '1', '2', '3'],
                conditions: {
                  correctIndex: 3,
                },
              },
            ],
          },
        },
      },
    ],
  },
};
window.onload = (() => {
  inserImg('3', '1');
  inserImg('3', '2');
})();

function inserImg(cap, name) {
  const img = document.createElement('img');

  if (typeof Android !== 'undefined' && typeof Android.sendData === 'function'
  ) {
    img.setAttribute('src', `../../../assets/cap_${cap}/${name}.png`); //para q se vea en html sacar esta condicion
  } else {
    img.setAttribute('src', `${ip}asset/:cap_${cap}/:${name}.png`); //comentar esta
  }
  //img.setAttribute("src", `${ip}asset/:cap_${cap}/:${name}.png`);

  img.className = 'img14';
  const container = document.querySelector('#container');
  if (container) {
    container.appendChild(img);
  } else {
    document.body.appendChild(img);
  }
}
generateArtifact(def);
generator(xDef);
