let def = {
  artifact_example_1: {
    buttonsActive: false,
    characteristicsArtifact: {
      width:'320px',
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
                          contentNodoEcuation: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            id: 'nodoResult',
                            child: [
                              {
                                result: {
                                  disabled: true,
                                  defaultValue: '3x+6',
                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  writeCss:
                                    'width:180px; margin:1rem 0rem; border-radius: 0.2rem;',
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
                                                          classStyle:
                                                            'nodeOperation',
                                                          id: 'nodoLeft',
                                                          
                                                          writeCss:'margin:0px',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                
                                                                defaultValue:
                                                                  '3',
                                                                disabled: true,
                                                                classStyle:
                                                                  'circleMathfield math element ',
                                                                writeCss:
                                                                  'width:80px !important;margin:0px;',
                                                              },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                      {
                                                        itemRigth: {
                                                          tag: 'div',
                                                          classStyle:
                                                            'nodeOperation',
                                                          id: 'nodoLeft',
                                                          
                                                          writeCss:'margin:0px',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                
                                                                defaultValue:
                                                                  'x',
                                                                disabled: true,
                                                                classStyle:
                                                                  'circleMathfield math element ',
                                                                writeCss:
                                                                  'width:80px !important;margin:0px;margin-left:10px',
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
                                            nodoOperator: {
                                              tag: 'div',
                                              classStyle:
                                                'treeOperator borderOperator',
                                              
                                              child: [
                                                {
                                                  operator: {
                                                    tag: 'div',
                                                    classStyle: 'sym',
                                                    id: 'nodoOperator',

                                                    child: [
                                                      {
                                                        sym: {
                                                          defaultValue:
                                                            '\\cdot',
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
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              disabled: true,
                                              defaultValue: '3x',
                                              writeCss:
                                                'width:100px !important;margin:0px;',
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
                                        
                                        writeCss:'margin:0px',
                                        child: [
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              defaultValue: '6',
                                              disabled: true,
                                              writeCss:
                                                'width:80px !important;margin:0px;',
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
                                  writeCss: 'margin-left:3rem;width:130px;',
                                  
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
                                  writeCss: 'margin-left:3rem;',
                                  
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
                                  writeCss: 'margin-left:3rem;',
                                  defaultValue: '3\\cdot x+6',
                                  disabled: true,
                                },
                              },
                            ],
                          },
                        },
                        {
                          contentNodoSolution: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            id: 'nodoResult',
                            child: [
                              {
                                result: {
                                  defaultValue: '3\\cdot x+6',
                                  disabled: true,
                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  writeCss:
                                    'width:180px; margin:1rem 0rem; border-radius: 0.2rem;',
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
        ['left(right)+2', 2, 'aqii'],
        ['exponentialE^{left(right)}'],
        ['lnleft(right)'],
      ],
      nodoRight: [
        ['left(right)+2'],
        ['exponentialE^{left(right)}'],
        ['lnleft(right)'],
      ],
      nodoOperator: [['left(right)+2', 2]],
      nodoResult: [['left(right)+2', 1], [2], [3]],
    },
  },
  artifact_1: {
    buttonsActive: true,
    characteristicsArtifact: {
      width:'320px',
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
                          contentNodoEcuation: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            id: 'nodoResult',
                            child: [
                              {
                                result: {
                                  disabled: true,
                                  defaultValue: '2+7x',
                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  writeCss:
                                    'width:180px; margin:1rem 0rem; border-radius: 0.2rem;',
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
                                                          classStyle:
                                                            'nodeOperation',
                                                          id: 'nodoLeft',
                                                          
                                                          writeCss:'margin:0px; margin-right:10px;',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                
                                                                
                                                                classStyle:
                                                                  'circleMathfield math element ',
                                                                  
                                                                writeCss:'width:80px !important;margin:0px;',
                                                              },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                      {
                                                        itemRigth: {
                                                          tag: 'div',
                                                          classStyle:
                                                            'nodeOperation',
                                                          id: 'nodoLeft',
                                                          
                                                          writeCss:'margin:0px',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                
                                                                defaultValue:
                                                                  'x',
                                                                disabled: true,
                                                                classStyle:
                                                                  'circleMathfield math element ',
                                                                  
                                                                writeCss:'width:80px !important;margin:0px;',
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
                                            nodoOperator: {
                                              tag: 'div',
                                              classStyle:
                                                'treeOperator borderOperator',

                                              child: [
                                                {
                                                  operator: {
                                                    tag: 'div',
                                                    classStyle: 'sym',
                                                    id: 'nodoOperator',

                                                    child: [
                                                      {
                                                        sym: {
                                                          defaultValue:
                                                            '\\cdot',
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
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              
                                              writeCss:
                                                'width:100px !important;margin:0px;',
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
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              
                                              writeCss:
                                                'width:80px !important;margin:0px;',
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
                                  writeCss: 'margin-left:2rem;width:140px;',
                                  
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
                                  writeCss: 'margin-left:2rem;',
                                  
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
                                  writeCss: 'margin-left:2rem;',
                                  
                                },
                              },
                            ],
                          },
                        },
                        {
                          contentNodoSolution: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            id: 'nodoResult',
                            child: [
                              {
                                result: {
                                  defaultValue: '\\cdot x+',
                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  writeCss:
                                    'width:180px; margin:1rem 0rem; border-radius: 0.2rem;',
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
      nodoLeft: [['7'], [], [], ['7x', '7cdotx']],
      nodoRight: [['2']],
      nodoOperator: [],
      nodoResult: [[], ['7x+2', '7cdotx+2'], ['7cdotx+2']],
    },
  },
  artifact_2: {
    buttonsActive: true,
    characteristicsArtifact: {
      width:'320px',
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
                          contentNodoEcuation: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            id: 'nodoResult',
                            child: [
                              {
                                result: {
                                  disabled: true,
                                  defaultValue: '7x-1',
                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  writeCss:
                                    'width:180px; margin:1rem 0rem; border-radius: 0.2rem;',
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
                                                          classStyle:
                                                            'nodeOperation',
                                                          id: 'nodoLeft',
                                                          
                                                          writeCss:'margin:0px',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                
                                                                
                                                                classStyle:
                                                                  'circleMathfield math element ',
                                                                  
                                                                writeCss:'width:80px !important;margin:0px;',
                                                              },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                      {
                                                        itemRigth: {
                                                          tag: 'div',
                                                          classStyle:
                                                            'nodeOperation',
                                                          id: 'nodoLeft',
                                                          
                                                          writeCss:'margin:0px; margin-left:10px;',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                
                                                                defaultValue:
                                                                  'x',
                                                                disabled: true,
                                                                classStyle:
                                                                  'circleMathfield math element ',
                                                                  
                                                                writeCss:'width:80px !important;margin:0px;',
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
                                            nodoOperator: {
                                              tag: 'div',
                                              classStyle:
                                                'treeOperator borderOperator',

                                              child: [
                                                {
                                                  operator: {
                                                    tag: 'div',
                                                    classStyle: 'sym',
                                                    id: 'nodoOperator',

                                                    child: [
                                                      {
                                                        sym: {
                                                          defaultValue:
                                                            '\\cdot',
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
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              
                                              writeCss:
                                                'width:100px !important;margin:0px;',
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
                                        
                                        writeCss:'margin:0px',
                                        child: [
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              
                                              writeCss:
                                                'width:80px !important;margin:0px;',
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
                                  writeCss: 'margin-left:3rem;width:130px;',
                                  
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
                                  writeCss: 'margin-left:3rem;',
                                  
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
                                  writeCss: 'margin-left:3rem;',
                                  
                                },
                              },
                            ],
                          },
                        },
                        {
                          contentNodoSolution: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            id: 'nodoResult',
                            child: [
                              {
                                result: {
                                  defaultValue: '\\cdot x+',
                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  writeCss:
                                    'width:180px; margin:1rem 0rem; border-radius: 0.2rem;',
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
      nodoLeft: [['7'], [], [], ['7x', '7cdotx']],
      nodoRight: [['-1']],
      nodoOperator: [],
      nodoResult: [
        [],
        ['7x-1', '7x+left(-1right)', '7cdotx-1', '7cdotx+left(-1right)'],
        ['7cdotx+left(-1right)'],
      ],
    },
  },
  artifact_3: {
    buttonsActive: true,
    characteristicsArtifact: {
      width:'320px',
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
                          contentNodoEcuation: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            id: 'nodoResult',
                            child: [
                              {
                                result: {
                                  disabled: true,
                                  defaultValue: '-7x+1',
                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  writeCss:
                                    'width:180px; margin:1rem 0rem; border-radius: 0.2rem;',
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
                                                          classStyle:
                                                            'nodeOperation',
                                                          id: 'nodoLeft',
                                                          
                                                          writeCss:'margin:0px;margin-right:10px',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                
                                                                
                                                                classStyle:
                                                                  'circleMathfield math element ',
                                                                writeCss:
                                                                  'width:80px;margin:0px',
                                                              },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                      {
                                                        itemRigth: {
                                                          tag: 'div',
                                                          classStyle:
                                                            'nodeOperation',
                                                          id: 'nodoLeft',
                                                          
                                                          writeCss:'margin:0px',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                
                                                                defaultValue:
                                                                  'x',
                                                                disabled: true,
                                                                classStyle:
                                                                  'circleMathfield math element ',
                                                                writeCss:
                                                                  'width:80px;margin:0px;',
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
                                            nodoOperator: {
                                              tag: 'div',
                                              classStyle:
                                                'treeOperator borderOperator',

                                              child: [
                                                {
                                                  operator: {
                                                    tag: 'div',
                                                    classStyle: 'sym',
                                                    id: 'nodoOperator',

                                                    child: [
                                                      {
                                                        sym: {
                                                          defaultValue:
                                                            '\\cdot',
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
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              
                                              writeCss:
                                                'width:100px !important;margin:0px;',
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
                                        
                                        writeCss:'margin:0px',
                                        child: [
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              
                                              writeCss:
                                                'width:80px ;margin:0px;',
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
                                  writeCss: 'margin-left:3rem;width:130px',
                                  
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
                                  writeCss: 'margin-left:3rem;',
                                  
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
                                  writeCss: 'margin-left:3rem;',
                                  
                                },
                              },
                            ],
                          },
                        },
                        {
                          contentNodoSolution: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            id: 'nodoResult',
                            child: [
                              {
                                result: {
                                  defaultValue: '\\cdot x+',
                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  writeCss:
                                    'width:180px; margin:1rem 0rem; border-radius: 0.2rem;',
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
      nodoLeft: [['-7'], [], [], ['-7x', '-7cdotx']],
      nodoRight: [['1']],
      nodoOperator: [],
      nodoResult: [[], ['-7x+1', '-7cdotx+1'], ['-7cdotx+1']],
    },
  },
  artifact_4: {
    buttonsActive: true,
    characteristicsArtifact: {
      width:'320px',
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
                          contentNodoEcuation: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            id: 'nodoResult',
                            child: [
                              {
                                result: {
                                  disabled: true,
                                  defaultValue: '2-7x',
                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  writeCss:
                                    'width:180px; margin:1rem 0rem; border-radius: 0.2rem;',
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
                                                          classStyle:
                                                            'nodeOperation',
                                                          id: 'nodoLeft',
                                                          
                                                          writeCss:'margin:0px',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                
                                                                
                                                                classStyle:
                                                                  'circleMathfield math element ',
                                                                writeCss:
                                                                  'width:80px;margin:0px',
                                                              },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                      {
                                                        itemRigth: {
                                                          tag: 'div',
                                                          classStyle:
                                                            'nodeOperation',
                                                          id: 'nodoLeft',
                                                          
                                                          writeCss:'margin:0px;margin-left:10px',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                
                                                                defaultValue:
                                                                  'x',
                                                                disabled: true,
                                                                classStyle:
                                                                  'circleMathfield math element ',
                                                                writeCss:
                                                                  'width:80px;margin:0px;',
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
                                            nodoOperator: {
                                              tag: 'div',
                                              classStyle:
                                                'treeOperator borderOperator',

                                              child: [
                                                {
                                                  operator: {
                                                    tag: 'div',
                                                    classStyle: 'sym',
                                                    id: 'nodoOperator',

                                                    child: [
                                                      {
                                                        sym: {
                                                          defaultValue:
                                                            '\\cdot',
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
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              
                                              writeCss:
                                                'width:100px !important;margin:0px;',
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
                                        
                                        writeCss:'margin:0px',
                                        child: [
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              
                                              writeCss:
                                                'width:80px;margin:0px;',
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
                                  writeCss: 'margin-left:3rem;width:130px;',
                                  
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
                                  writeCss: 'margin-left:3rem;',
                                  
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
                                  writeCss: 'margin-left:3rem;',
                                  
                                },
                              },
                            ],
                          },
                        },
                        {
                          contentNodoSolution: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            id: 'nodoResult',
                            child: [
                              {
                                result: {
                                  defaultValue: '\\cdot x+',
                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  writeCss:
                                    'width:180px; margin:1rem 0rem; border-radius: 0.2rem;',
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
      nodoLeft: [['-7'], [], [], ['-7x', '-7cdotx']],
      nodoRight: [['2']],
      nodoOperator: [],
      nodoResult: [[], ['-7x+2', '-7cdotx+2'], ['-7cdotx+2']],
    },
  },
  artifact_5: {
    buttonsActive: true,
    characteristicsArtifact: {
      width:'320px',
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
                          contentNodoEcuation: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            id: 'nodoResult',
                            child: [
                              {
                                result: {
                                  disabled: true,
                                  defaultValue: '-x-1',
                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  writeCss:
                                    'width:180px; margin:1rem 0rem; border-radius: 0.2rem;',
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
                                                          classStyle:
                                                            'nodeOperation',
                                                          id: 'nodoLeft',
                                                          
                                                          writeCss:'margin:0px',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                
                                                                
                                                                classStyle:
                                                                  'circleMathfield math element ',
                                                                writeCss:
                                                                  'width:80px;margin:0px;',
                                                              },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                      {
                                                        itemRigth: {
                                                          tag: 'div',
                                                          classStyle:
                                                            'nodeOperation',
                                                          id: 'nodoLeft',
                                                          
                                                          writeCss:'margin:0px;margin-left:10px;',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                
                                                                defaultValue:
                                                                  'x',
                                                                disabled: true,
                                                                classStyle:
                                                                  'circleMathfield math element ',
                                                                writeCss:
                                                                  'width:80px !important;margin:0px;',
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
                                            nodoOperator: {
                                              tag: 'div',
                                              classStyle:
                                                'treeOperator borderOperator',

                                              child: [
                                                {
                                                  operator: {
                                                    tag: 'div',
                                                    classStyle: 'sym',
                                                    id: 'nodoOperator',

                                                    child: [
                                                      {
                                                        sym: {
                                                          defaultValue:
                                                            '\\cdot',
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
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              
                                              writeCss:
                                                'width:100px !important;margin:0px;',
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
                                        
                                        writeCss:'margin:0px',
                                        child: [
                                          {
                                            nodoDown: {
                                              tag: 'math-field',
                                              classStyle:
                                                'circleMathfield math element ',
                                              
                                              writeCss:
                                                'width:80px !important;margin:0px;',
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
                                  writeCss: 'margin-left:3rem;width:130px;',
                                  
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
                                  writeCss: 'margin-left:3rem;',
                                  
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
                                  writeCss: 'margin-left:3rem;',
                                  
                                },
                              },
                            ],
                          },
                        },
                        {
                          contentNodoSolution: {
                            tag: 'div',
                            classStyle: 'treeCenter',
                            id: 'nodoResult',
                            child: [
                              {
                                result: {
                                  defaultValue: '\\cdot x+',
                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  writeCss:
                                    'width:180px; margin:1rem 0rem; border-radius: 0.2rem;',
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
      nodoLeft: [['-1'], [], [], ['-x', '-1x', '-1cdotx']],
      nodoRight: [['-1']],
      nodoOperator: [],
      nodoResult: [
        [],
        [
          '-x-1',
          '-1x-1',
          '-1cdotx-1',
          '-x+left(-1right)',
          '-1x+left(-1right)',
          '-1cdotx+left(-1right)',
        ],
        ['-1cdotx+left(-1right)'],
      ],
    },
  },
};

generateArtifact(def);
