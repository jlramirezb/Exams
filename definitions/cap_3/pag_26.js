//comentariox
let def = {
  artifact_1: {
    buttonsActive: true,
    characteristicsArtifact: {
      width: '320px',
      tree: {
        contenedor: {
          tag: 'div',
          classStyle: 'borderDefault borderContentSize',
          child: [
            {
              contentUp: {
                tag: 'div',
                classStyle: 'treeOperator',
                child: [
                  {
                    contentLeft: {
                      tag: 'div',
                      classStyle: 'treeCenter contentSize',
                      child: [
                        {
                          contentNodoUp: {
                            tag: 'div',
                            classStyle: 'treeOperator',
                            child: [
                              {
                                nodoContent: {
                                  tag: 'div',
                                  classStyle: 'treeOperator',
                                  child: [
                                    {
                                      nodoLeft: {
                                        tag: 'div',
                                        classStyle: 'nodeOperation',
                                        id: 'nodoLeft',
                                        child: [
                                          {
                                            nodoUp: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',

                                              writeCss: 'width:120px;margin-left:15px'
                                            },
                                          },
                                          {
                                            nodoCenter: {
                                              tag: 'div',
                                              classStyle: 'treeLeft',

                                              child: [
                                                {
                                                  tag: 'math-field',
                                                  classStyle:
                                                    'squareMathfield math element ',
                                                  defaultValue:
                                                    'a\\cdot\\left(\\right)',
                                                  disabled: true,
                                                  writeCss: 'width:60px'
                                                },
                                                {
                                                  tag: 'div',
                                                  classStyle: 'arrowDown',
                                                },
                                              ],
                                            },
                                          },
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',

                                              writeCss: 'width:120px;margin-left:15px'

                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      nodoRight: {
                                        tag: 'div',
                                        classStyle: 'nodeOperation',
                                        id: 'nodoRight',
                                        child: [
                                          {
                                            nodoUp: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',

                                              writeCss: 'width:120px;margin:0px'
                                            },
                                          },
                                          {
                                            nodoCenter: {
                                              tag: 'div',
                                              classStyle: 'treeRigth',
                                              child: [
                                                {
                                                  tag: 'div',
                                                  classStyle: 'arrowDown',
                                                },
                                                {
                                                  tag: 'math-field',
                                                  classStyle:
                                                    'squareMathfield math element ',
                                                  defaultValue: '()+1',
                                                  disabled: true,
                                                  writeCss: 'width:60px'
                                                },
                                              ],
                                            },
                                          },
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',

                                              writeCss: 'width:120px;margin:0px'
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        },
                        {
                          contentNodoCenter: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            child: [
                              {
                                nodoOperator: {
                                  tag: 'div',
                                  classStyle: 'treeOperator borderOperator',
                                  child: [
                                    {
                                      operator: {
                                        tag: 'div',
                                        classStyle: 'sym',
                                        id: 'nodoOperator',
                                        child: [
                                          {
                                            sym: {
                                              defaultValue: '÷',
                                              disabled: true,
                                              tag: 'math-field',
                                              classStyle:
                                                'math element itemSym',
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                              {
                                nodoArrow: {
                                  tag: 'div',
                                  classStyle: 'arrowDown',
                                },
                              },
                            ],
                          },
                        },
                        {
                          contentNodoDown: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            id: 'nodoResult',
                            child: [
                              {
                                result: {
                                  defaultValue: '\\frac{ay}{x+1}',
                                  disabled: true,
                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
    conditions: {
      nodoLeft: [
        ['y'],
        [], //tecla
        ['ay', 'acdoty', 'aleft(yright)'],
      ],
      nodoRight: [
        ['x'],
        [], //tecla
        ['x+1'],
      ],
      nodoOperator: [[]],
    },
  },
  artifact_2: {
    buttonsActive: true,
    characteristicsArtifact: {
      width: '320px',
      tree: {
        contenedor: {
          tag: 'div',
          classStyle: 'borderDefault borderContentSize',
          child: [
            {
              contentUp: {
                tag: 'div',
                classStyle: 'treeOperator',
                child: [
                  {
                    contentLeft: {
                      tag: 'div',
                      classStyle: 'treeCenter contentSize',
                      child: [
                        {
                          contentNodoUp: {
                            tag: 'div',
                            classStyle: 'treeOperator',
                            child: [
                              {
                                nodoContent: {
                                  tag: 'div',
                                  classStyle: 'treeOperator',
                                  child: [
                                    {
                                      nodoLeft: {
                                        tag: 'div',
                                        classStyle: 'nodeOperation',
                                        id: 'nodoLeft',
                                        child: [
                                          {
                                            nodoUp: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              defaultValue: 'x',
                                              disabled: true,
                                              writeCss: 'width:100px'
                                            },
                                          },
                                          {
                                            nodoCenter: {
                                              tag: 'div',
                                              classStyle: 'treeLeft',
                                              defaultValue: 'aa', //teclaaa

                                              child: [
                                                {
                                                  tag: 'math-field',
                                                  classStyle:
                                                    'squareMathfield math element ',
                                                  defaultValue:
                                                    'a\\cdot\\left(\\right)',
                                                  disabled: true,
                                                  writeCss: 'width:60px'

                                                },
                                                {
                                                  tag: 'div',
                                                  classStyle: 'arrowDown',
                                                },
                                              ],
                                            },
                                          },
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              writeCss: 'width:100px',

                                            },
                                          },
                                          {
                                            nodoCenter: {
                                              tag: 'div',
                                              classStyle: 'treeLeft',
                                              defaultValue: 'aa', //teclaaa

                                              child: [
                                                {
                                                  tag: 'math-field',
                                                  classStyle:
                                                    'squareMathfield math element ',
                                                  defaultValue: '()+b',
                                                  disabled: true,
                                                  writeCss: 'width:60px'

                                                },
                                                {
                                                  tag: 'div',
                                                  classStyle: 'arrowDown',
                                                },
                                              ],
                                            },
                                          },
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              writeCss: 'width:100px',

                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      nodoRight: {
                                        tag: 'div',
                                        classStyle: 'nodeOperation',
                                        id: 'nodoRight',
                                        child: [
                                          {
                                            nodoUp: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              writeCss: 'width:100px',

                                              defaultValue: 'x',
                                              disabled: true,
                                            },
                                          },
                                          {
                                            nodoCenter: {
                                              tag: 'div',
                                              classStyle: 'treeLeft',
                                              defaultValue: '', //teclaaa

                                              child: [
                                                {
                                                  tag: 'math-field',
                                                  classStyle:
                                                    'squareMathfield math element ',
                                                  defaultValue:
                                                    'c\\cdot\\left(\\right)',
                                                  disabled: true,
                                                  writeCss: 'width:60px'


                                                },
                                                {
                                                  tag: 'div',
                                                  classStyle: 'arrowDown',
                                                },
                                              ],
                                            },
                                          },
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              writeCss: 'width:100px',

                                            },
                                          },
                                          {
                                            nodoCenter: {
                                              tag: 'div',
                                              classStyle: 'treeLeft',
                                              defaultValue: 'aa', //teclaaa

                                              child: [
                                                {
                                                  tag: 'math-field',
                                                  classStyle:
                                                    'squareMathfield math element ',
                                                  defaultValue: '()+d',
                                                  disabled: true,
                                                  writeCss: 'width:60px'
                                                },
                                                {
                                                  tag: 'div',
                                                  classStyle: 'arrowDown',
                                                },
                                              ],
                                            },
                                          },
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              writeCss: 'width:100px',

                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        },
                        {
                          contentNodoCenter: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            child: [
                              {
                                nodoOperator: {
                                  tag: 'div',
                                  classStyle: 'treeOperator borderOperator',
                                  child: [
                                    {
                                      operator: {
                                        tag: 'div',
                                        classStyle: 'sym',
                                        id: 'nodoOperator',
                                        child: [
                                          {
                                            sym: {
                                              defaultValue: '÷',
                                              disabled: true,
                                              tag: 'math-field',
                                              classStyle:
                                                'math element itemSym',
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                              {
                                nodoArrow: {
                                  tag: 'div',
                                  classStyle: 'arrowDown',
                                },
                              },
                            ],
                          },
                        },
                        {
                          contentNodoDown: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            id: 'nodoResult',
                            child: [
                              {
                                result: {
                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
    conditions: {
      nodoLeft: [
        [],
        [], //teckla
        ['ax', 'acdotx', 'aleft(xright)'],
        [], //tecla
        ['ax+b', 'acdotx+b', 'aleft(xright)+b'],
      ],
      nodoRight: [
        [],
        [], //tecla
        ['cx', 'ccdotx', 'cleft(xright)'],
        [], //tecla
        ['cx+d', 'ccdotx+d', 'cleft(xright)+d'],
      ],
      nodoOperator: [[]],
      nodoResult: [['frac{ax+b}{cx+d}', 'frac{ax+b}{ccdotx+d}', 'frac{ax+b}{cleft(xright)+d}',
        'frac{acdotx+b}{ccdotx+d}', 'frac{acdotx+b}{cx+d}', 'frac{acdotx+b}{cleft(xright)+d}',
        'frac{aleft(xright)+b}{cleft(xright)+d}', 'frac{aleft(xright)+b}{cx+d}', 'frac{aleft(xright)+b}{ccdotx+d}']],
    },
  },
  artifact_3: {
    buttonsActive: true,
    characteristicsArtifact: {
      width: '320px',
      tree: {
        contenedor: {
          tag: 'div',
          classStyle: 'borderDefault borderContentSize',
          child: [
            {
              contentUp: {
                tag: 'div',
                classStyle: 'treeOperator',
                child: [
                  {
                    contentLeft: {
                      tag: 'div',
                      classStyle: 'treeCenter contentSize',
                      child: [
                        {
                          contentNodoUp: {
                            tag: 'div',
                            classStyle: 'treeOperator',
                            child: [
                              {
                                nodoLeft: {
                                  tag: 'div',
                                  classStyle: 'nodoOperator',
                                  id: 'nodoLeft',
                                  child: [
                                    {
                                      nodoUp: {
                                        tag: 'math-field',
                                        classStyle:
                                          'circleMathfield math element',

                                        writeCss: 'margin: 0.6rem 0px;width:120px;'
                                      },
                                    },
                                    {
                                      nodoCenter: {
                                        tag: 'div',
                                        classStyle: 'treeLeft',
                                        child: [
                                          {
                                            tag: 'math-field',
                                            classStyle:
                                              'squareMathfield math element',

                                            writeCss: 'margin: 0.6rem 0px;width:60px;'

                                          },
                                          {
                                            tag: 'div',
                                            classStyle: 'arrowDown',
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      nodoDown: {
                                        tag: 'math-field',
                                        classStyle:
                                          'circleMathfield math element',


                                        writeCss: 'width:120px;margin:0px'
                                      },
                                    },
                                  ],
                                },
                              },
                              {
                                nodoRight: {
                                  tag: 'div',
                                  classStyle: 'nodoOperator',
                                  id: 'nodoRight',
                                  child: [
                                    {
                                      nodoDown: {
                                        tag: 'math-field',
                                        classStyle:
                                          'circleMathfield math element',

                                        writeCss: 'width:120px;'
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        },
                        {
                          contentNodoCenter: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            child: [
                              {
                                nodoOperator: {
                                  tag: 'div',
                                  classStyle: 'treeOperator borderOperator',
                                  child: [
                                    {
                                      operator: {
                                        tag: 'div',
                                        classStyle: 'sym',
                                        id: 'nodoOperator',
                                        child: [
                                          {
                                            sym: {
                                              tag: 'math-field',
                                              classStyle:
                                                'math element itemSym',
                                              defaultValue: '\\cdot',
                                              disabled: true
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                              {
                                nodoArrow: {
                                  tag: 'div',
                                  classStyle: 'arrowDown',
                                },
                              },
                            ],
                          },
                        },
                        {
                          contentNodoDown: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            id: 'nodoResult',
                            child: [
                              {
                                result: {
                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  defaultValue: 'ax^2',
                                  disabled: true
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
    conditions: {
      nodoLeft: [['x'], ['aleft(right)', 'acdotleft(right)'], ['aleft(xright)', 'acdotx', 'ax']],
      nodoRight: [['x']],
      nodoOperator: [[]],
      nodoResult: [[]],
    },
  },
  artifact_4: {
    buttonsActive: true,
    characteristicsArtifact: {
      width: '320px',
      tree: {
        contenedor: {
          tag: 'div',
          classStyle: 'borderDefault borderContentSize',
          child: [
            {
              contentUp: {
                tag: 'div',
                classStyle: 'treeOperator',
                child: [
                  {
                    contentLeft: {
                      tag: 'div',
                      classStyle: 'treeCenter contentSize',
                      child: [
                        {
                          contentNodoUp: {
                            tag: 'div',
                            classStyle: 'treeOperator',
                            child: [
                              {
                                nodoContent: {
                                  tag: 'div',
                                  classStyle: 'treeOperator',
                                  child: [
                                    {
                                      nodoLeft: {
                                        tag: 'div',
                                        classStyle: 'nodeOperation',
                                        id: 'nodoLeft',
                                        child: [
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              defaultValue: 'ax^2',
                                              disabled: true,
                                              writeCss: 'width:120px;'
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      nodoRight: {
                                        tag: 'div',
                                        classStyle: 'nodeOperation ',

                                        writeCss: 'margin-left:0px;',
                                        id: 'nodoRight',
                                        child: [
                                          {
                                            nodoLeft: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              writeCss: 'width:120px; margin:0px',

                                            },
                                          },
                                          {
                                            nodoRight: {
                                              tag: 'div',
                                              classStyle: 'treeRigth',
                                              child: [
                                                {
                                                  tag: 'div',
                                                  classStyle: 'arrowDown',
                                                },
                                                {
                                                  tag: 'math-field',
                                                  classStyle:
                                                    'squareMathfield math element ',
                                                  writeCss: 'width:60px;',

                                                },
                                              ],
                                            },
                                          },
                                          {
                                            nodoRight: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              writeCss: 'width:120px; margin:0px',

                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        },
                        {
                          contentNodoCenter: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            child: [
                              {
                                nodoOperator: {
                                  tag: 'div',
                                  classStyle: 'treeOperator borderOperator',
                                  child: [
                                    {
                                      operator: {
                                        tag: 'div',
                                        classStyle: 'sym',
                                        id: 'nodoOperator',
                                        child: [
                                          {
                                            sym: {
                                              tag: 'math-field',
                                              classStyle:
                                                'math element itemSym',
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                              {
                                nodoArrow: {
                                  tag: 'div',
                                  classStyle: 'arrowDown',
                                },
                              },
                            ],
                          },
                        },
                        {
                          nodoRight: {
                            tag: 'div',
                            classStyle: 'nodeOperation',
                            id: 'nodoRight',
                            child: [
                              {
                                nodoLeft: {
                                  tag: 'math-field',
                                  classStyle:
                                    'circleMathfield math element ',
                                },
                              },
                              {
                                nodoRight: {
                                  tag: 'div',
                                  classStyle: 'treeLeft',
                                  child: [
                                    {
                                      tag: 'math-field',
                                      classStyle:
                                        'squareMathfield math element ',
                                    },
                                    {
                                      tag: 'div',
                                      classStyle: 'arrowDown',
                                    },

                                  ],
                                },
                              },]
                          }
                        },
                        {
                          nodoResult: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            id: 'nodoResult',
                            child: [
                              {
                                result: {

                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  defaultValue: 'ax^2+bx+c',
                                  disabled: true
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
    conditions: {
      nodoLeft: [[],],
      nodoRight: [
        ['x'],
        ['bleft(right)', 'bcdotleft(right)', 'left(right)b', 'cdotleft(right)b'],
        ['bleft(xright)', 'bcdotx', 'bx'],
        ['aleft(x^2right)+bx', 'aleft(xright)^2+bx', 'acdotx^2+bx', 'ax^2+bx', 'aleft(x^2right)+bcdotx', 'aleft(xright)^2+bcdotx', 'acdotx^2+bcdotx', 'ax^2+bcdotx',
          'aleft(x^2right)+bleft(xright)', 'aleft(xright)^2+bleft(xright)', 'acdotx^2+bleft(xright)', 'ax^2+bleft(xright)'],
        ['left(right)+c', 'c+left(right)']],
      nodoOperator: [['+'],],
      nodoResult: [[]],
    },
  },

  artifact_5: {
    buttonsActive: true,
    characteristicsArtifact: {
      width: '320px',
      tree: {
        contenedor: {
          tag: 'div',
          classStyle: 'borderDefault borderContentSize',
          child: [
            {
              contentUp: {
                tag: 'div',
                classStyle: 'treeOperator',
                child: [
                  {
                    contentLeft: {
                      tag: 'div',
                      classStyle: 'treeCenter contentSize',
                      child: [
                        {
                          contentNodoUp: {
                            tag: 'div',
                            classStyle: 'treeOperator',
                            child: [
                              {
                                nodoContent: {
                                  tag: 'div',
                                  classStyle: 'treeOperator',
                                  child: [
                                    {
                                      nodoLeft: {
                                        tag: 'div',
                                        classStyle: 'nodeOperation',
                                        id: 'nodoLeft',
                                        child: [
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              writeCss: 'width:120px;margin:0px',

                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      nodoRight: {
                                        tag: 'div',
                                        classStyle: 'nodeOperation',
                                        id: 'nodoRight',
                                        child: [

                                          {
                                            nodoRight: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              writeCss: 'width:120px;margin:0px;',

                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        },
                        {
                          contentNodoCenter: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            child: [
                              {
                                nodoOperator: {
                                  tag: 'div',
                                  classStyle: 'treeOperator borderOperator',
                                  child: [
                                    {
                                      operator: {
                                        tag: 'div',
                                        classStyle: 'sym',
                                        id: 'nodoOperator',
                                        child: [
                                          {
                                            sym: {
                                              tag: 'math-field',
                                              classStyle:
                                                'math element itemSym',
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                              {
                                nodoArrow: {
                                  tag: 'div',
                                  classStyle: 'arrowDown',
                                },
                              },
                            ],
                          },
                        },
                        {
                          nodoResult: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            id: 'nodoResult',
                            child: [

                              {
                                result: {

                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  defaultValue: 'x^2',
                                  disabled: true
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
    conditions: {
      nodoRight: [
        ['x'],
      ],
      nodoLeft: [['x']],
      nodoOperator: [['cdot', 'times']],
      nodoResult: [[]],
    },
  },
  artifact_6: {
    buttonsActive: true,
    characteristicsArtifact: {
      width: '320px',
      tree: {
        contenedor: {
          tag: 'div',
          classStyle: 'borderDefault borderContentSize',
          child: [
            {
              contentUp: {
                tag: 'div',
                classStyle: 'treeOperator',
                child: [
                  {
                    contentLeft: {
                      tag: 'div',
                      classStyle: 'treeCenter contentSize',
                      child: [
                        {
                          contentNodoUp: {
                            tag: 'div',
                            classStyle: 'treeOperator',
                            child: [
                              {
                                nodoContent: {
                                  tag: 'div',
                                  classStyle: 'treeOperator',
                                  child: [
                                    {
                                      nodoLeft: {
                                        tag: 'div',
                                        classStyle: 'nodeOperation',
                                        id: 'nodoLeft',
                                        writeCss: 'margin-left:0px;',

                                        child: [
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              writeCss: 'width:120px;',

                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      nodoRight: {
                                        tag: 'div',
                                        classStyle: 'nodeOperation',
                                        id: 'nodoRight',

                                        child: [

                                          {
                                            nodoRight: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              writeCss: 'width:120px;margin:0px',

                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        },
                        {
                          contentNodoCenter: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            child: [
                              {
                                nodoOperator: {
                                  tag: 'div',
                                  classStyle: 'treeOperator borderOperator',
                                  child: [
                                    {
                                      operator: {
                                        tag: 'div',
                                        classStyle: 'sym',
                                        id: 'nodoOperator',
                                        child: [
                                          {
                                            sym: {
                                              tag: 'math-field',
                                              classStyle:
                                                'math element itemSym',
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                              {
                                nodoArrow: {
                                  tag: 'div',
                                  classStyle: 'arrowDown',
                                },
                              },
                            ],
                          },
                        },
                        {
                          nodoRight: {
                            tag: 'div',
                            classStyle: 'nodeOperation',
                            id: 'nodoRight',
                            child: [
                              {
                                nodoLeft: {
                                  tag: 'math-field',
                                  classStyle:
                                    'circleMathfield math element ',
                                },
                              },
                              {
                                nodoRight: {
                                  tag: 'div',
                                  classStyle: 'treeLeft',
                                  child: [
                                    {
                                      tag: 'math-field',
                                      classStyle:
                                        'squareMathfield math element ',
                                    },
                                    {
                                      tag: 'div',
                                      classStyle: 'arrowDown',
                                    },

                                  ],
                                },
                              },
                              {
                                nodoLeft: {
                                  tag: 'math-field',
                                  classStyle:
                                    'circleMathfield math element ',
                                },
                              },
                              {
                                nodoRight: {
                                  tag: 'div',
                                  classStyle: 'treeLeft',
                                  child: [
                                    {
                                      tag: 'math-field',
                                      classStyle:
                                        'squareMathfield math element ',
                                    },
                                    {
                                      tag: 'div',
                                      classStyle: 'arrowDown',
                                    },

                                  ],
                                },
                              },
                            ]
                          }
                        },
                        {
                          nodoResult: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            id: 'nodoResult',
                            child: [

                              {
                                result: {


                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  defaultValue: '2x^3-1',
                                  disabled: true
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
    conditions: {
      nodoRight: [
        ['x'],
        ['x^3'],
        ['2left(right)', '2cdotleft(right)', '2timesleft(right)', 'left(right)2', 'left(right)times2', 'left(right)cdot2'],
        ['2x^3', '2cdotx^3', '2cdotleft(x^3right)', '2left(x^3right)'],
        ['left(right)-1']],
      nodoLeft: [['x^2']],
      nodoOperator: [['cdot']],
      nodoResult: [[]],
    },
  },
  artifact_7: {
    buttonsActive: true,
    characteristicsArtifact: {
      width: '320px',
      tree: {
        contenedor: {
          tag: 'div',
          classStyle: 'borderDefault borderContentSize',
          child: [
            {
              contentUp: {
                tag: 'div',
                classStyle: 'treeOperator',
                child: [
                  {
                    contentLeft: {
                      tag: 'div',
                      classStyle: 'treeCenter contentSize',
                      child: [
                        {
                          contentNodoUp: {
                            tag: 'div',
                            classStyle: 'treeOperator',
                            child: [
                              {
                                nodoContent: {
                                  tag: 'div',
                                  classStyle: 'treeOperator',
                                  child: [
                                    {
                                      nodoLeft: {
                                        tag: 'div',
                                        classStyle: 'nodeOperation',
                                        id: 'nodoLeft',
                                        child: [
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              writeCss: 'width:120px;margin:0px',

                                            },
                                          },
                                        ],
                                      },
                                    },
                                    {
                                      nodoRight: {
                                        tag: 'div',
                                        classStyle: 'nodeOperation',
                                        id: 'nodoRight',
                                        child: [

                                          {
                                            nodoRight: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              writeCss: 'width:120px;margin:0px',

                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        },
                        {
                          contentNodoCenter: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            child: [
                              {
                                nodoOperator: {
                                  tag: 'div',
                                  classStyle: 'treeOperator borderOperator',
                                  child: [
                                    {
                                      operator: {
                                        tag: 'div',
                                        classStyle: 'sym',
                                        id: 'nodoOperator',
                                        child: [
                                          {
                                            sym: {
                                              tag: 'math-field',
                                              classStyle:
                                                'math element itemSym',
                                              defaultValue: '÷',
                                              disabled: true
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                              {
                                nodoArrow: {
                                  tag: 'div',
                                  classStyle: 'arrowDown',
                                },
                              },
                            ],
                          },
                        },
                        {
                          nodoResult: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            id: 'nodoResult',
                            child: [

                              {
                                result: {

                                  writeCss: 'width:auto; padding-left:0.5rem;padding-right:0.5rem;',
                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  defaultValue: '\\frac{ax^2+bx+c}{2x^3-1}',
                                  disabled: true,
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
    conditions: {
      nodoRight: [
        ['2x^3-1', '2cdotx^3-1', '2cdotleft(x^3right)-1', '2left(x^3right)-1'],
      ],
      nodoLeft: [['aleft(x^2right)+bx+c', 'aleft(xright)^2+bx+c', 'acdotx^2+bx+c', 'ax^2+bx+c', 'aleft(x^2right)+bcdotx+c', 'aleft(xright)^2+bcdotx+c', 'acdotx^2+bcdotx+c', 'ax^2+bcdotx+c',
        'aleft(x^2right)+bleft(xright)+c', 'aleft(xright)^2+bleft(xright)+c', 'acdotx^2+bleft(xright)+c', 'ax^2+bleft(xright)+c']],
      nodoOperator: [[]],
      nodoResult: [[]],
    },
  },
};

generateArtifact(def);

