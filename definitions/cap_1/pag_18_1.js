const defBoards = {
  board_0: {
    style: {
      grid: true,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3, 3, 3, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],		        /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
        colory: '#000000',
        colorx: '#000000'
      },
    },
  },
  board_1: {
    style: {
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3, 3, 3, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],		        /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
        colory: '#000000',
        colorx: '#000000'
      },
      grid: true,
    },
    curves: [
      [
        [
          [-2.2, 1.5],
          [-2, 1],
          [-1.6, 0],
          [-1, -0.5],
          [-0.6, -0.7],
          [0, -0.8],
          [1, -1],
          [1.8, -1.45]
        ]
      ]
    ],
    points: [
      [-2.5, 2.1, true],
      [-2.35, 1.8, true],

      [2.1, -1.7, true],
      [2.5, -2, true],

    ],
  },
  board_2: {
    style: {

      maxHeight: 300,
      maxWidth: 300,
      grid: false,
      boundingbox: [-3, 3, 3, -3],
      axis: [false],
      curveType: 2,
    },
    curves: [
      [
        [
          [-2.2, 1.5],
          [-2, 1],
          [-1.5, 0.3],
          [0, 0.2,],

        ],

      ],
      [
        [
          [0, 0.2,],
          [1, 0.6,],
          [2, 0.8,],
        ], 'black', 4
      ],
      [
        [
          [2, 0.8],
          [2.3, 1],
          [2.4, 1.45]
        ]
      ]

    ],
    lines: [
      [[[-4, -1], [4, -1]]],
      [[[-1, -4], [-1, 4]]],

      [[[0, 4], [0, -1, false, 'a']], 2, false, false, 2],
      [[[2, 4], [2, -1, false, 'b']], 2, false, false, 2],

      [[[4, 0], [-1, 0, false, 'c']], 2, false, false, 2],
      [[[4, 1], [-1, 1, false, 'b']], 2, false, false, 2]
    ],
  },
  board_4: {
    style: {
      grid: false,
      maxHeight: 300,
      maxWidth: 300,
      boundingbox: [-3, 3, 3, -3],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],		        /*dirección del eje y*/
        xd: [[0, 0], [1, 0]],
        colory: '#000000',
        colorx: '#000000'
      },
    },
  },
};
const def = {
  artifact_1: {
    board: 'board_4',
    statementTop: 'Si x > 0',
    statementBottom: ' ƒ(x) > 0',
    conditions: {
      conexa: { type: 1 },
      dom: {
        text: ' Toma todos los x indicados en el intervalo,',
        range: [[[8, 1, 2], [5, 4], 3, false, false]],
      },
      eRange: {
        cotas: [{
          bottom: {
            dom: [0, 4],
            rang: 0.08,
          },
        }],
      },
    },
  },
  artifact_2: {
    board: 'board_4',
    statementTop: 'Si x > 0',
    statementBottom: ' ƒ(x) < 0',
    conditions: {
      conexa: { type: 1 },
      dom: {
        text: ' Toma todos los x indicados en el intervalo,',
        range: [[[8, 1, 2], [5, 6], 3, false, false]],
      },
      eRange: {
        cotas: [{
          top: {
            dom: [0, 4],
            rang: 0,
          },
        }],
      },
    },
  },

  artifact_3: {
    board: 'board_4',
    statementTop: 'Si x > 0',
    statementBottom: ' ƒ(x) = 0',
    conditions: {
      conexa: { type: 1 },
      dom: {
        text: ' Toma todos los x indicados en el intervalo,',
        range: [[[8, 1, 2], [5], 3, false, false]],
      },
      eRange: {
        cotas: [{

          top: {
            dom: [0, 4],
            rang: 0.05,
          },

          bottom: {
            dom: [0, 4],
            rang: -0.05,
          },

        }],
      },
    },
  },
  artifact_4: {
    board: 'board_4',
    statementTop: 'Si x < 0',
    statementBottom: ' ƒ(x) > 0',
    conditions: {
      conexa: { type: 1 },
      dom: {
        text: ' Toma todos los x indicados en el intervalo,',
        range: [[[1, 2], [5, 6, 4], 3, false, false]],
      },
      eRange: {
        cotas: [{
          bottom: {
            dom: [-4, 0],
            rang: 0.05,
          },
        }],
      },
    },
  },
  artifact_5: {
    board: 'board_4',
    statementTop: 'Si x < 0',
    statementBottom: ' ƒ(x) < 0',
    conditions: {
      conexa: { type: 1 },
      dom: {
        text: ' Toma todos los x indicados en el intervalo,',
        range: [[[1, 8], [5, 6, 4], 3, false, false]],
      },
      eRange: {
        cotas: [{
          top: {
            dom: [-4, 0],
            rang: -0.05,
          },
        }],
      },
    },
  },
  artifact_6: {
    board: 'board_4',
    statementTop: 'Si x < 0',
    statementBottom: ' ƒ(x) = 0',
    conditions: {
      conexa: { type: 1 },
      dom: {
        text: ' Toma todos los x indicados en el intervalo,',
        range: [[[1, 2], [5, 6, 4], 3, false, false]],
      },
      eRange: {
        cotas: [{
          top: {
            dom: [-4, 0],
            rang: 0.05,
          },
          bottom: {
            dom: [-4, 0],
            rang: -0.05,
          },
        }],
      },
    },
  },
  /////////////////////////////////////////////////////////
  artifact_7: {
    board: 'board_4',
    statementBottom: ['Si x > 0, ƒ(x) > 0', 'Si x < 0, ƒ(x) > 0'],
    conditions: {
      conexa: { type: 1 },
      dom: {
        text: ' Revisa o agrega los infinitos correspondientes',
        range: [[[1,2], [4, 5], 3, false, false]],
      },
      eRange: {
        cotas: [
          {
            bottom: {
              dom: [-4, 4],
              rang: 0,
            },
          },
        ],
      },
    },
  },

  artifact_8: {
    board: 'board_4',
    statementBottom: ['Si x > 0, ƒ(x) < 0', 'Si x < 0, ƒ(x) < 0'],
    conditions: {
      conexa: { type: 1 },
      dom: {
        text: ' Revisa o agrega los infinitos correspondientes',
        range: [[[1, 8], [5, 6], 3, false, false]],
      },
      eRange: {
        cotas: [
          {
            top: {
              dom: [-4, 4],
              rang: 0,
            },
          }
        ],
      },
    },
  },
  artifact_9: {
    board: 'board_4',
    statementBottom: ['Si x > 0, ƒ(x) > 0', 'Si x < 0, ƒ(x) < 0'],
    conditions: {
      conexa: { type: 1 },
      dom: {
        text: ' Revisa o agrega los infinitos correspondientes',
        range: [[[1, 8], [5, 4], 3, false, false]],
      },
      eRange: {
        cotas: [
          {
            bottom: {
              dom: [0.1, 4],
              rang: 0.05,
            },
          },
          {
            top: {
              dom: [-4, -0.1],
              rang: 0.0,
            },
          }
        ],
      },
    },
  },
  artifact_10: {
    board: 'board_4',
    statementBottom: ['Si x > 0, ƒ(x) < 0', 'Si x < 0, ƒ(x) > 0'],
    conditions: {
      conexa: { type: 1 },
      dom: {
        text: ' Revisa o agrega los infinitos correspondientes',
        range: [[[1, 2], [5, 6], 3, false, false]],
      },
      eRange: {
        cotas: [
          {
            top: {

              dom: [0.1, 4],
              rang: 0,
            },
          },
          {
            bottom: {
              dom: [-4, -0.1],
              rang: 0,
            },
          }
        ],
      },
    },
  },
  //////////////////////////////////////////////////
};

const bottomHtml = {
  chields: {

    p: {
      class:'infoText',
      type: 'p',
      content: 'Haga en cada recuadro una curva ƒ conexa dominio R, que satisfaga la condición indicada.',
    },
    div1: {
      class: 'd-flex flex-wrap oneContainer',
      style: 'max-width: 970px;',
      chields: {
        div1: {
          class: 'defCurveBoard',
          dataSet: [['artifact', 'artifact_1']],
        },
        div2: {
          class: 'defCurveBoard',
          dataSet: [['artifact', 'artifact_2']],
        },
        div3: {
          class: 'defCurveBoard',
          dataSet: [['artifact', 'artifact_3']],
        },
        div4: {
          class: 'defCurveBoard',
          dataSet: [['artifact', 'artifact_4']],
        },
        div5: {
          class: 'defCurveBoard',
          dataSet: [['artifact', 'artifact_5']],
        },
        div6: {
          class: 'defCurveBoard',
          dataSet: [['artifact', 'artifact_6']],
        }
      },
    },
    p2: {
      class:'infoText',
      type: 'p',
      content: 'Dibuje en cada recuadro una curva ƒ conexa dominio R que satisfaga ambas condiciones simultáneamente.',
    },
    div2: {
      class: 'd-flex flex-wrap oneContainer',
      style: 'max-width: 970px;',
      chields: {
        div1: {
          class: 'defCurveBoard',
          dataSet: [['artifact', 'artifact_7']],
        },
        div2: {
          class: 'defCurveBoard',
          dataSet: [['artifact', 'artifact_8']],
        },
        div3: {
          class: 'defCurveBoard',
          dataSet: [['artifact', 'artifact_9']],
        },
        div4: {
          class: 'defCurveBoard',
          dataSet: [['artifact', 'artifact_10']],
        },
      },
    },
  },
};

function recurcibe_object(iteration) {
  const element = document.createElement(iteration.type || 'div');
  setAttributeDivs(element, iteration);
  if (iteration.chields != undefined) {
    for (let divIter of Object.values(iteration.chields)) {
      element.appendChild(recurcibe_object(divIter));
    };
  };
  return element;
};

function setAttributeDivs(element, att) {
  if (att.id) {
    element.setAttribute('id', att.id);
  };
  if (att.class) {
    element.className = att.class + `${(att.type == 'button') ? ' button-marg buttonKey' : ''} 
		${(att.dataSet && (-1 != att.dataSet.findIndex((e) => e[0] === 'text'))) ? 'buttonText' : ''}
		${(att.dataSet && (-1 != att.dataSet.findIndex((e) => e[0] === 'tool'))) ? 'buttonTool' : ''}`;
  };
  if (att.title) {
    element.setAttribute('title', att.title);
  };
  if (att.dataSet) {
    att.dataSet.forEach((data) => {
      element.setAttribute('data-' + data[0], data[1]);
    });
  };
  if (att.style) {
    element.style = att.style;
  };
  element.textContent = att.content;
};

document.querySelector('#container').appendChild(recurcibe_object(bottomHtml));
window.onload = main();