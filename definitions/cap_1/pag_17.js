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
      curveType: 2,
    },
  },
  board_1: {
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
      curveType: 1,
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
        ],
      ],
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
      [[[4, 1], [-1, 1, false, 'd']], 2, false, false, 2]
    ],
  },
};
//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const def = {
  example0: {
    statementBottom: 'Si x ∈[0,∞)',
    statementTop: 'ƒ(x)∈(-∞,0)',
    board: 'board_2',
    buttons: false,
    flag: true,
  },
  example: {
    statementBottom: 'Si x ∈[0,∞)',
    statementTop: 'ƒ(x)∈(-∞,0)',
    board: 'board_1',
    buttons: false,
    flag: true,
  },
  artifact_1: {
    statementBottom: 'Si x ∈[0,1]',
    statementTop: 'ƒ(x)∈(-∞,0)',
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
      },
      parallels: {
        mode: false,
        type: 1,
      },
      eRange: {
        cotas:
               [{
                 top: {
                   dom: [0, 1],
                   rang: 0.05,
                 },
               }]
      },
    },
    flag: true,
  },
  artifact_2: {
    statementBottom: 'Si -1 < x < 3',
    statementTop: 'ƒ(x)∈(-∞,0)',
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
      },
      parallels: {
        mode: false,
        type: 1,
      },
      eRange: {
        cotas: [{
          top: {
            dom: [-1, 3],
            rang: 0,
          },
        }],
      },
    },
    flag: true,
  },
  artifact_3: {
    statementBottom: 'Si x ∈[0,∞)',
    statementTop: 'ƒ(x)∈[-1, 2]',
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
      },
      parallels: {
        mode: false,
        type: 1,
      },
      eRange: {
        cotas: [{
          top: {
            dom: [0, 4],
            rang: 2.1
          },
          bottom: {
            dom: [0, 4],
            rang: -1,
          },
        }],
      },
    },
    flag: true,
  },
  artifact_4: {
    statementBottom: 'Si x ∈[0,1]',
    statementTop: 'ƒ(x)∈[-1, 2]',
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
      },
      parallels: {
        mode: false,
        type: 1,
      },
      eRange: {
        cotas: [{
          top: {
            dom: [0, 1],
            rang: 2.1,
          },
          bottom: {
            dom: [0, 1],
            rang: -1,
          },
        }],
      },
    },
    flag: true,
  },
  artifact_5: {/////////////
    statementBottom: 'Si -1 < x < 3',
    statementTop: 'ƒ(x)∈[-1, 2]',
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
      },
      parallels: {
        mode: false,
        type: 1,
      },
      eRange: {
        cotas: [{
          top: {
            dom: [-1, 3],
            rang: 2.1
          },
          bottom: {
            dom: [-1, 3],
            rang: -1,
          },
        }],
      },
    },
    flag: true,
  },
  artifact_6: {
    statementBottom: 'Si x ∈[0,∞)',
    statementTop: 'ƒ(x)∈[0, 1]',
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [5], 3, false, false]],
      },
      parallels: {
        mode: false,
        type: 1,
      },
      eRange: {
        cotas: [{
          top: {
            dom: [0, 4],
            rang: 1,
          },
          bottom: {
            dom: [0, 4],
            rang: 0,
          },
        }],
      },
    },
    flag: true,
  },
  artifact_7: {
    statementBottom: 'Si x ∈[0,1]',
    statementTop: 'ƒ(x)∈[0, 1]',
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
      },
      parallels: {
        mode: false,
        type: 1,
      },
      eRange: {
        cotas: [{
          top: {
            dom: [0, 1],
            rang: 1.1,
          },
          bottom: {
            dom: [0, 1],
            rang: -0.1,
          },
        }],
      },
    },
    flag: true,
  },
  artifact_8: {/////////////////
    statementBottom: 'Si -1 < x < 3',
    statementTop: 'ƒ(x)∈[0, 1]',
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1, 2, 8], [5], 3, false, false]],
      },
      parallels: {
        mode: false,
        type: 1,
      },
      eRange: {
        cotas: [{
          top: {
            dom: [-1, 3],
            rang: 1.08,
          },
          bottom: {
            dom: [-1, 3],
            rang: -0.08,
          },
        }],
      },
    },
    flag: true,
  },

};
const htmlfirst = {
  id: '',
  class: 'd-flex justify-content-center align-items-center flex-column w-100 ml-2 ',
  style: 'max-width: 970px;',
  chields: {
    p1: {
      class: 'text-center rounded p-2 border border-dark operationContainer mt-3',
      type: 'p',
      content: 'Si x ∈[ a,b ] entonces ƒ(x)∈[ c,d ]'
    },
    div: {
      class: 'mb-5 ml-2 d-flex  flex-column flex-md-row d-flex align-items-center',

      chields: {
        p2: {
          type: 'p',
          id: 'closeKeyBoard',
          content: 'ƒ(x)∈[ c,d ]',
          style: 'min-width: 82px;'
        }, div3: {
          class: 'd-flex flex-column ',
          chields: {
            div4: {
              class: 'defCurveBoard ',
              dataSet: [['artifact', 'example0']],
            },
            p3: {
              class: 'text-center operationContainer rounded p-2 border border-dark operationContainer',
              type: 'p',
              content: 'Si x ∈[ a,b ]',
            },
          },
        },
        p4: {
          class: 'infoText',
          content: `Note que la parte de la curva que corresponde al intervalo [a,b] ha sido dibujada con un trazo más
                grueso. La condición obliga a que las alturas de ese trozo deben estar entre c y d. Fuera del intervalo a la
                curva no se le exige ninguna condición (puede ser como sea).`,
        },
      },
    },
    p4: {
      class: 'infoText',
      content: `En cada plano cartesiano, dibuje una curva ƒ, cuyo dominio sea R, que no sea una paralela al eje x y que
            cumpla para la zona del eje x indicada al pie de la columna (donde está el plano cartesiano), la condición
            que aparece al comienzo de la fila (donde está el plano cartesiano).`
    }
  },
};

function defRowColumn() {
  const defColumns = {
    column1: 'ƒ(x)∈(-∞, 0)',
    column2: 'ƒ(x)∈[-1, 2]',
    column3: 'ƒ(x)∈[0, 1]',
  };
  const row = {
    row1: 'Si x ∈[0,∞)',
    row2: 'Si x ∈[0,1]',
    row3: 'Si -1 < x < 3'
  };
  Object.keys(defColumns).forEach((clas) => {
    document.querySelector('.' + clas).textContent = defColumns[clas];
  });
  Object.keys(row).forEach((clas) => {
    document.querySelector('.' + clas).textContent = row[clas];
  });
};

function defResponsibe(state = true) {
  const docWidth = document.documentElement.clientWidth;
  if (siteMode === 'desktop' && docWidth < 1042) {
    defChangeSwitch(state);
    siteMode = 'movile';
  };

  if (siteMode === 'movile' && docWidth > 1042) {
    defChangeSwitch(state);
    siteMode = 'desktop';
  };
  document.querySelector('.tableMain').style.display = (stateFlag) ? 'none' : 'block';
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

document.querySelector('.mainTop').appendChild(recurcibe_object(htmlfirst));
window.addEventListener('resize', defResponsibe);
window.onload = main();
defResponsibe();
defRowColumn();