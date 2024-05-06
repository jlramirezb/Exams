//comentariox
let def = {
  artifact_example_1: {
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
                                        defaultValue: 'x',
                                        disabled: true,
                                        writeCss: 'width:120px;margin:0px;margin-top:10px;'
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
                                            defaultValue:
                                              'a\\cdot\\left(\\right)',
                                            disabled: true,
                                            writeCss: 'width:60px;margin:0px;'
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
                                        defaultValue: 'ax',
                                        disabled: true,
                                        writeCss: 'width:120px;margin:0px;'
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
                                        defaultValue: 'x',
                                        writeCss: 'width:120px;',
                                        disabled: true,
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
                                              disabled: true,
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
                                  writeCss: 'margin-bottom:10px',
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
      nodoLeft: [[], [], []],
      nodoRight: [[]],
      nodoOperator: [[]],
      nodoResult: [[]],
    },
  },

  artifact_example_2: {
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
                                        writeCss: 'width:120px;margin:0px;margin-top:10px;',
                                        defaultValue: 'x',
                                        disabled: true,
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
                                        defaultValue: 'x',
                                        disabled: true,
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
                                              disabled: true,
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
                                nodoUp: {
                                  tag: 'math-field',
                                  classStyle: 'circleMathfield math element ',
                                  defaultValue: 'x^2',
                                  disabled: true,
                                },
                              },
                              {
                                nodoCenterContent: {
                                  tag: 'div',
                                  writeCss:
                                    'display:flex; width:100%; justify-content: center; margin-right:100px;',
                                  child: [
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
                                          },
                                          {
                                            tag: 'div',
                                            classStyle: 'arrowDown',
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                              {
                                nodoDown: {
                                  tag: 'math-field',
                                  classStyle: 'circleMathfield math element ',
                                  defaultValue: 'ax^2',
                                  disabled: true,
                                  writeCss: 'margin-bottom:10px'
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
      nodoLeft: [[], [], []],
      nodoRight: [[]],
      nodoOperator: [[]],
      nodoResult: [[],],
    },
  },

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
                                        defaultValue: 'x',
                                        disabled: true,
                                        writeCss: 'width:120px;margin:0px; margin-top:10px;'
                                      },
                                    },
                                    {
                                      nodoCenter: {
                                        tag: 'div',
                                        classStyle: 'treeLeft',
                                        id: 'nodoCenter',
                                        child: [
                                          {
                                            tag: 'math-field',
                                            classStyle:
                                              'squareMathfield math element',
                                            writeCss: 'width:60px;margin:0px;',
                                            defaultValue:
                                              '3\\cdot\\left(\\right)',
                                            disabled: true,
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
                                        writeCss: 'width:120px;margin:0px; ',
                                        disabled: false,
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
                                        writeCss: 'width:120px;',
                                        defaultValue: 'x',
                                        disabled: true,
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
                                              disabled: true,
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
                                  writeCss: 'margin-bottom:10px'
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
      nodoLeft: [[], [], ['3x',]],
      nodoRight: [[],],
      nodoOperator: [],
      nodoResult: [['3x^2',],],
    },
  },

  artifact_2: {
    buttonsActive: true,
    //depure:true,
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
                                            nodoCenter: {
                                              tag: 'div',
                                              classStyle: 'treeLeft',
                                              child: [
                                              ],
                                            },
                                          },
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle: 'circleMathfield math element ',
                                              defaultValue: '3x^2',
                                              disabled: true,
                                              writeCss: 'width:120px;margin:0px;'
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
                                              classStyle: 'circleMathfield math element ',

                                              writeCss: 'width:120px;margin:0px;',
                                              disabled: true,
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
                                                  classStyle: 'squareMathfield math element ',
                                                  defaultValue: '-1\\cdot\\left(\\right)',
                                                  writeCss: 'width:60px;margin:0px;',
                                                  disabled: true,
                                                },
                                              ],
                                            },
                                          },
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle: 'circleMathfield math element ',

                                              writeCss: 'width:120px;margin:0px;'
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
                                              classStyle: 'math element itemSym'
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
                                  writeCss: 'margin-bottom:10px'
                                }
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
          ]
        },
      },
    },
    conditions: {
      nodoLeft: [
        [],],
      nodoRight: [
        ['x'],
        [],
        ['-x'],
      ],
      nodoOperator: [
        [],
      ],
      nodoResult: [
        ['3x^2-x'],
      ],
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
                                        classStyle: 'treeCenter',
                                        id: 'nodoLeft',

                                        child: [
                                          {
                                            nodoCenter: {
                                              tag: 'div',
                                              classStyle: 'treeOperator',
                                              child: [
                                                {
                                                  itemCenter: {
                                                    tag: 'div',
                                                    classStyle: 'treeOperator',
                                                    child: [
                                                      {
                                                        itemLeft: {
                                                          tag: 'div',
                                                          classStyle: 'nodeOperation',
                                                          id: 'nodoLeft',
                                                          writeCss: 'margin:0px',

                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                defaultValue: 'x',
                                                                disabled: true,
                                                                classStyle: 'circleMathfield math element ',
                                                                writeCss: 'width:80px;margin:0px'
                                                              },
                                                            },
                                                          ]
                                                        }
                                                      },
                                                      {
                                                        itemRigth: {
                                                          tag: 'div',
                                                          classStyle: 'nodeOperation',
                                                          id: 'nodoLeft',
                                                          writeCss: 'margin:10px 0px 0px 5px',

                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                defaultValue: 'x',
                                                                disabled: true,
                                                                classStyle: 'circleMathfield math element ',
                                                                writeCss: 'width:80px;margin-left:0px;'
                                                              },
                                                            },
                                                          ]
                                                        }
                                                      },
                                                    ]
                                                  }
                                                }
                                              ]
                                            }
                                          },
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
                                                          classStyle: 'math element itemSym'
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
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle: 'circleMathfield math element ',

                                              writeCss: 'width:100px;margin:0px;'

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

                                        writeCss: 'margin:0px;',

                                        child: [
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle: 'circleMathfield math element ',
                                              defaultValue: 'x',
                                              disabled: true,
                                              writeCss: 'width:100px;margin:0px;'

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
                                  writeCss: 'margin-left:1.8rem; width:140px  ',

                                  child: [
                                    {
                                      operator: {
                                        tag: 'div',
                                        classStyle: 'sym',
                                        id: 'nodoOperator',

                                        child: [
                                          {
                                            sym: {
                                              defaultValue: '\\cdot ',

                                              disabled: true,
                                              tag: 'math-field',
                                              classStyle: 'math element itemSym'
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
                                  writeCss: 'margin-left:2rem;',

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
                            writeCss: 'margin-left:2rem;',
                            child: [
                              {
                                nodoUp: {
                                  tag: 'math-field',
                                  classStyle:
                                    'circleMathfield math element ',
                                },
                              },
                              {
                                nodoCenter: {
                                  tag: 'div',
                                  classStyle: 'treeLeft',
                                  child: [
                                    {
                                      //nodo key izquierdo
                                      tag: 'math-field',
                                      disabled: true,
                                      defaultValue:
                                        '-2\\cdot\\left(\\right)',
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
                                  writeCss: 'margin-left:2rem; margin-bottom:10px',

                                }
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
          ]
        },
      },
    },
    conditions: {
      nodoLeft: [
        [],
        [],
        [],
        ['x^2']
      ],
      nodoRight: [
        [],
        ['x^3']
      ],
      nodoOperator: [
      ],
      nodoResult: [
        ['-2x^3'],

      ],

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
                                        defaultValue: '3x^2-x',
                                        disabled: true,
                                        writeCss: 'width:120px;margin:0px; margin-top:10px;'

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
                                        defaultValue: '-2x^3',
                                        disabled: true,
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
                                              defaultValue: '+',
                                              disabled: true,
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
                                nodoUp: {
                                  tag: 'math-field',
                                  classStyle: 'circleMathfield math element ',

                                  disabled: false,
                                },
                              },
                              {
                                nodoCenterContent: {
                                  tag: 'div',
                                  writeCss:
                                    'display:flex; width:100%; justify-content: center; margin-right:100px;',
                                  child: [
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
                                              '4+\\left(\\right)',
                                            disabled: true,
                                          },
                                          {
                                            tag: 'div',
                                            classStyle: 'arrowDown',
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                              {
                                nodoDown: {
                                  tag: 'math-field',
                                  classStyle: 'circleMathfield math element ',
                                  writeCss: 'margin-bottom:10px'

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
      nodoLeft: [[], [], []],
      nodoRight: [[]],
      nodoOperator: [[]],
      nodoResult: [['-2x^3+3x^2+left(-xright)',
        '-2x^3+3x^2-x',]
        , [], ['-2x^3+3x^2+left(-xright)+4', '-2x^3+3x^2-x+4']],
    },
  },

};

generateArtifact(def);
