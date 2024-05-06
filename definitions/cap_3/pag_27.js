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

                                              writeCss: 'width:120px;margin:0px;',

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

                                                  writeCss: 'width:60px',
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

                                              writeCss: 'width:120px;margin:0px;',
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

                                              writeCss: 'width:120px;margin:0px;',
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

                                                  writeCss: 'width:60px',
                                                },
                                              ],
                                            },
                                          },
                                          {
                                            nodoDown: {
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
                                              defaultValue: '\\cdot',
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
                                  defaultValue: 'x^2\\cdot e^{x}',
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
      nodoLeft: [['x'], ['left(right)^2'], ['x^2']],
      nodoRight: [['x'], ['exponentialE^{left(right)}'], ['exponentialE^x']],
      nodoOperator: [[]],
      nodoResult: [[]],
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
                            ///s
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

                                              writeCss: 'width:120px;margin:0px',
                                            },
                                          },
                                          {
                                            nodoCenter: {
                                              tag: 'div',
                                              classStyle: 'treeLeft',
                                              child: [
                                                {
                                                  disabled: true,
                                                  tag: 'math-field', //node key izquierdo,
                                                  defaultValue:
                                                    '\\left(\\right)+1',
                                                  classStyle:
                                                    'squareMathfield math element ',
                                                  writeCss: 'width:60px',
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

                                              writeCss: 'width:120px;margin:0px;',
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

                                              writeCss: 'width:120px;margin:0px;',
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
                                                  //nodo key izquierdo
                                                  tag: 'math-field',
                                                  disabled: true,
                                                  defaultValue:
                                                    'e^{\\left(\\right)}',
                                                  classStyle:
                                                    'squareMathfield math element ',
                                                  writeCss: 'width:60px',
                                                },
                                              ],
                                            },
                                          },
                                          {
                                            nodoDown: {
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
                                              defaultValue: '+',
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
                                  defaultValue: '2',
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
      nodoLeft: [[0], [], [1]],
      nodoRight: [[0], [], ['1']],
      nodoOperator: [[]],
      nodoResult: [[]],
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
                                              defaultValue: 'x',
                                              disabled: true,
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
                                            nodoLeft: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',

                                              writeCss: 'width:120px;margin:0px;',
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
                                                  disabled: true,
                                                  defaultValue: '\\sin\\left(\\right)',
                                                  tag: 'math-field',
                                                  classStyle:
                                                    'squareMathfield math element ',
                                                  writeCss: 'width:60px',
                                                },
                                              ],
                                            },
                                          },
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
                          nodoResult: {
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
      nodoLeft: [[],],
      nodoRight: [['x'], [], ['sinleft(xright)']],
      nodoOperator: [[],],
      nodoResult: [['xsinleft(xright)', 'xleft(sinleft(xright)right)', 'xcdotsinleft(xright)', 'xtimessinleft(xright)']],
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
                                                },
                                              ],
                                            },
                                          },
                                          {
                                            nodoRight: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
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
                                      nodoRight: {
                                        tag: 'div',
                                        classStyle: 'nodeOperation',
                                        id: 'nodoRight',
                                        child: [

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
                                                },
                                              ],
                                            },
                                          },
                                          {
                                            nodoRight: {
                                              disabled: true,
                                              defaultValue: 'tan\\left(cos\\left(x\\right)\\right)',
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
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
                ],
              },
            },
          ],
        },
      },
    },
    conditions: {
      nodoRight: [['x'], ['cosleft(right)'], ['cosleft(xright)'], ['tanleft(right)'], [],],
      nodoLeft: [],
      nodoOperator: [],
      nodoResult: []
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

                                              writeCss: 'width:120px;margin:0px;',
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
                                  disabled: true,
                                  defaultValue: '\\cos\\left(x\\sin\\left(x\\right)+\\tan\\left(\\cos\\left(x\\right)\\right)\\right)',
                                  writeCss: 'width:auto',
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
      nodoRight: [['tanleft(cosleft(xright)right)'], ['xsinleft(xright)+tanleft(cosleft(xright)right)', 'xtimessinleft(xright)+tanleft(cosleft(xright)right)', 'xcdotsinleft(xright)+tanleft(cosleft(xright)right)', 'xleft(sinleft(xright)right)+tanleft(cosleft(xright)right)'], ['cosleft(right)']],
      nodoLeft: [['xsinleft(xright)', 'xleft(sinleft(xright)right)', 'xcdotsinleft(xright)', 'xtimessinleft(xright)']],
      nodoOperator: [['+'],],
      nodoResult: [],
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
                                            nodoLeft: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',

                                              writeCss: 'width:120px;margin:0px;',
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
                                  defaultValue: 'xcos\\left(x\\right)',
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
      nodoLeft: [['x'],],
      nodoRight: [['x'], ['cosleft(right)'], ['cosleft(xright)']],
      nodoOperator: [['cdot', 'times'],],
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

                                              writeCss: 'width:120px;margin:0px;',
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

                                              writeCss: 'width:120px;margin:0px',
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
                                                  defaultValue: '\\sin\\left(\\right)',
                                                  disabled: true,

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
                                  defaultValue: 'x+\\sin\\left(x\\cos\\left(x\\right)\\right)',
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
      nodoLeft: [['x'],],
      nodoRight: [
        ['xcosleft(xright)', 'xleft(cosleft(xright)right)', 'xcdotcosleft(xright)', 'xtimescosleft(xright)'],
        [],
        ['sinleft(xcosleft(xright)right)', 'sinleft(xleft(cosleft(xright)right)right)', 'sinleft(xcdotcosleft(xright)right)', 'sinleft(xtimescosleft(xright)right)']],
      nodoOperator: [['+'],],
      nodoResult: [[]],
    },
  },
  artifact_8: {
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

                                              writeCss: 'width:80px;margin:0px;',

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

                                        writeCss: 'margin:16px 0px 0px;',
                                        child: [
                                          {
                                            nodoLeft: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              defaultValue: 'x+\\sin\\left(x\\cos\\left(x\\right)\\right)',
                                              disabled: true,
                                              writeCss: 'width:180px;margin:0px;',
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

                                              writeCss: 'width:180px;margin:0px;',
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

                                  writeCss: 'width:190px;',
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
                                  writeCss: 'width:14rem;',
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
                                  defaultValue:
                                    '\\cos\\left(x\\tan\\left(x+\\sin\\left(x\\cos\\left(x\\right)\\right)\\right)\\right)',
                                  disabled: true,
                                  writeCss: 'width:auto; padding:0px 10px;',
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
      nodoLeft: [['x'],],
      nodoRight: [
        [],
        ['tanleft(right)'],
        ['tanleft(x+sinleft(xcosleft(xright)right)right)', 'tanleft(x+sinleft(xleft(cosleft(xright)right)right)right)', 'tanleft(x+sinleft(xcdotcosleft(xright)right)right)', 'tanleft(x+sinleft(xtimescosleft(xright)right)right)'],
        ['xleft(tanleft(x+sinleft(xcosleft(xright)right)right)right', 'xleft(tanleft(x+sinleft(xleft(cosleft(xright)right)right)right)right)', 'xleft(tanleft(x+sinleft(xcdotcosleft(xright)right)right)right)',
          'xtanleft(x+sinleft(xcosleft(xright)right)right)', 'xtanleft(x+sinleft(xleft(cosleft(xright)right)right)right)', 'xtanleft(x+sinleft(xcdotcosleft(xright)right)right)',
          'xcdottanleft(x+sinleft(xcosleft(xright)right)right)', 'xcdottanleft(x+sinleft(xleft(cosleft(xright)right)right)right)', 'xcdottanleft(x+sinleft(xcdotcosleft(xright)right)right)'],
        ['cosleft(right)']],
      nodoOperator: [['times', 'cdot'],],
      nodoResult: [[]],
    },
  },
};

generateArtifact(def);

