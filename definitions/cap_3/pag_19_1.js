let def = {

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
                                  disabled:true,
                                  defaultValue: '-2-5x',
                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  writeCss: 'width:180px; margin:1rem 0rem;border-radius:0.2rem;'

                                }
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
                                                          classStyle: 'nodeOperation',
                                                          id: 'nodoLeft',
                                                          
                                                          writeCss:'margin:0px;margin-right:10px',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
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
                                                          
                                                          writeCss:'margin:0px',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                defaultValue:'x',
                                                                disabled:true,
                                                                classStyle: 'circleMathfield math element ',
                                                                writeCss: 'width:80px;margin:0px;'
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
                                              
                                              writeCss: 'width:100px !important;'

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
                                              classStyle: 'circleMathfield math element ',
                                              
                                              writeCss: 'width:80px;margin:0px'

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
                                  writeCss:'margin-left:3rem;width:130px;',
                                  
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
                                  writeCss:'margin-left:3rem;',
                                  
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
                                  writeCss:'margin-left:3rem;',
                                  
                                }
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
                                  writeCss: 'width:180px; margin:1rem 0rem;border-radius:0.2rem;'
                              
                                  
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
        ['-5'],
        [],
        [],
        ['-5x','-5cdotx']
      ],
      nodoRight: [
        ['-2'],
      ],
      nodoOperator: [
      ],
      nodoResult: [
        [],
        ['-5x-2','-5cdotx-2','-5x+left(-2right)','-5cdotx+left(-2right)'],
        ['-5cdotx+left(-2right)'],
      ],

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
                                  disabled:true,
                                  defaultValue: '-3',
                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  writeCss: 'width:180px; margin:1rem 0rem;border-radius:0.2rem;'

                                }
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
                                                          classStyle: 'nodeOperation',
                                                          id: 'nodoLeft',
                                                          
                                                          writeCss:'margin:0px',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                
                                                                classStyle: 'circleMathfield math element ',
                                                                writeCss: 'width:80px ;margin:0px;'
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
                                                          
                                                          writeCss:'margin:0px;margin-left:10px;',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                defaultValue:'x',
                                                                disabled:true,
                                                                classStyle: 'circleMathfield math element ',
                                                                writeCss: 'width:80px;margin:0px;'
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
                                              
                                              writeCss: 'width:100px !important;'

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
                                              classStyle: 'circleMathfield math element ',
                                              
                                              writeCss: 'width:80px;margin:0px:'

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
                                  writeCss:'margin-left:3rem;width:130px;',
                                  
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
                                  writeCss:'margin-left:3rem;',
                                  
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
                                  writeCss:'margin-left:3rem;',
                                  
                                }
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
                                  writeCss: 'width:180px; margin:1rem 0rem;border-radius:0.2rem;'
                              
                                  
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
        ['0'],
        [],
        [],
        ['0','0x','0cdotx']
      ],
      nodoRight: [
        ['-3'],
      ],
      nodoOperator: [
      ],
      nodoResult: [
        [],
        ['-3','0-3','0x-3','0cdotx-3', '0+left(-3right)','0x+left(-3right)','0cdotx+left(-3right)'],
        ['0cdotx+left(-3right)'],
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
                                  disabled:true,
                                  defaultValue: '6+\\frac{x}{5}',
                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  writeCss: 'width:180px; margin:1rem 0rem;border-radius:0.2rem;'

                                }
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
                                                          classStyle: 'nodeOperation',
                                                          id: 'nodoLeft',
                                                          
                                                          writeCss:'margin:0px',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                
                                                                classStyle: 'circleMathfield math element ',
                                                                writeCss: 'width:80px ;margin:0px;'
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
                                                          
                                                          writeCss:'margin:0px;margin-left:10px;',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                defaultValue:'x',
                                                                disabled:true,
                                                                classStyle: 'circleMathfield math element ',
                                                                writeCss: 'width:80px;margin:0px;'
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
                                              
                                              writeCss: 'width:100px !important;'

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
                                              classStyle: 'circleMathfield math element ',
                                              
                                              writeCss: 'width:80px ;margin:0px;'

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
                                  writeCss:'margin-left:3rem;width:130px;',
                                  
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
                                  writeCss:'margin-left:3rem;',
                                  
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
                                  writeCss:'margin-left:3rem;',
                                  
                                }
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
                                  writeCss: 'width:180px; margin:1rem 0rem;border-radius:0.2rem;'
                              
                                  
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
        ['frac{1}{5}'],
        [],
        [],
        ['frac{x}{5}','frac{1}{5}x','frac{1}{5}cdotx']
      ],
      nodoRight: [
        ['6'],
      ],
      nodoOperator: [
      ],
      nodoResult: [
        [],
        ['frac{x}{5}+6','frac{1}{5}x +6','frac{1}{5}cdotx+6'],
        ['frac{1}{5}cdotx+6'],
      ],

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
                                  disabled:true,
                                  defaultValue: '-6+\\frac{x}{5}',
                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  writeCss: 'width:180px; margin:1rem 0rem;border-radius:0.2rem;'

                                }
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
                                                          classStyle: 'nodeOperation',
                                                          id: 'nodoLeft',
                                                          
                                                          writeCss:'margin:0px',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                
                                                                classStyle: 'circleMathfield math element ',
                                                                writeCss: 'width:80px;margin:0px;'
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
                                                          
                                                          writeCss:'margin:0px;margin-left:10px;',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                defaultValue:'x',
                                                                disabled:true,
                                                                classStyle: 'circleMathfield math element ',
                                                                writeCss: 'width:80px;margin:0px'
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
                                              
                                              writeCss: 'width:100px !important;'

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
                                              classStyle: 'circleMathfield math element ',
                                              
                                              writeCss: 'width:80px;margin:0px;'

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
                                  writeCss:'margin-left:3rem;width:130px;',
                                  
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
                                  writeCss:'margin-left:3rem;',
                                  
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
                                  writeCss:'margin-left:3rem;',
                                  
                                }
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
                                  writeCss: 'width:180px; margin:1rem 0rem;border-radius:0.2rem;'
                              
                                  
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
        ['frac{1}{5}'],
        [],
        [],
        ['frac{x}{5}','frac{1}{5}x','frac{1}{5}cdotx']
      ],
      nodoRight: [
        ['-6'],
      ],
      nodoOperator: [
      ],
      nodoResult: [
        [],
        ['frac{x}{5}+left(-6right)','frac{1}{5}x+left(-6right)','frac{1}{5}cdotx+left(-6right)',
          'frac{x}{5}-6','frac{1}{5}x-6','frac{1}{5}cdotx-6',],

        ['frac{1}{5}cdotx+left(-6right)'],
      ],

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
                                  disabled:true,
                                  defaultValue: '6-\\frac{x}{5}',
                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  writeCss: 'width:180px; margin:1rem 0rem;border-radius:0.2rem;'

                                }
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
                                                          classStyle: 'nodeOperation',
                                                          id: 'nodoLeft',
                                                          
                                                          writeCss:'margin:0px',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                
                                                                classStyle: 'circleMathfield math element ',
                                                                writeCss: 'width:80px;margin:0px;'
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
                                                          
                                                          writeCss:'margin:0px;margin-left:10px;  ',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                defaultValue:'x',
                                                                disabled:true,
                                                                classStyle: 'circleMathfield math element ',
                                                                writeCss: 'width:80px;margin:0px;'
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
                                              
                                              writeCss: 'width:100px !important;'

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
                                              classStyle: 'circleMathfield math element ',
                                              
                                              writeCss: 'width:80px;margin:0px;'

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
                                  writeCss:'margin-left:3rem;width:130px;',
                                  
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
                                  writeCss:'margin-left:3rem;',
                                  
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
                                  writeCss:'margin-left:3rem;',
                                  
                                }
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
                                  writeCss: 'width:180px; margin:1rem 0rem;border-radius:0.2rem;'
                              
                                  
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
        ['-frac{1}{5}'],
        [],
        [],
        ['-frac{x}{5}','-frac{1}{5}x','-frac{1}{5}cdotx']
      ],
      nodoRight: [
        ['6'],
      ],
      nodoOperator: [
      ],
      nodoResult: [
        [],
        ['-frac{x}{5}+6','-frac{1}{5}x+6','-frac{1}{5}cdotx+6'],
        ['-frac{1}{5}cdotx+6'],
      ],

    },
  },
  artifact_6: {
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
                                  disabled:true,
                                  defaultValue: '-6-\\frac{x}{5}',
                                  tag: 'math-field',
                                  classStyle: 'result math element',
                                  writeCss: 'width:180px; margin:1rem 0rem;border-radius:0.2rem;'

                                }
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
                                                          classStyle: 'nodeOperation',
                                                          id: 'nodoLeft',
                                                          
                                                          writeCss:'margin:0px',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                
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
                                                          
                                                          writeCss:'margin:0px;margin-left:10px;',
                                                          child: [
                                                            {
                                                              itemDown: {
                                                                tag: 'math-field',
                                                                defaultValue:'x',
                                                                disabled:true,
                                                                classStyle: 'circleMathfield math element ',
                                                                writeCss: 'width:80px;margin:0px;'
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
                                              
                                              writeCss: 'width:100px !important;'

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
                                              classStyle: 'circleMathfield math element ',
                                              
                                              writeCss: 'width:80px;margin:0px'

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
                                  writeCss:'margin-left:3rem;width:130px;',
                                  
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
                                  writeCss:'margin-left:3rem;',
                                  
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
                                  writeCss:'margin-left:3rem;',
                                  
                                }
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
                                  writeCss: 'width:180px; margin:1rem 0rem;border-radius:0.2rem;'
                              
                                  
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
        ['-frac{1}{5}'],
        [],
        [],
        ['-frac{x}{5}','-frac{1}{5}x','-frac{1}{5}cdotx']
      ],
      nodoRight: [
        ['-6'],
      ],
      nodoOperator: [
      ],
      nodoResult: [
        [],
        ['-frac{x}{5}-6','-frac{1}{5}x-6','-frac{1}{5}cdotx-6','-frac{x}{5}+left(-6right)','-frac{1}{5}x+left(-6right)','-frac{1}{5}cdotx+left(-6right)'],
        ['-frac{1}{5}cdotx+left(-6right)'],
      ],

    },
  },
}

generateArtifact(def);
