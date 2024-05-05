
const defBoards = {
  board_0: {
    artifact: 'artifact_10',
    style: {
      grid: true,
      height: '550px',
      width: '600px',
      boundingbox: [-6, 7, 5, -6],
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]], /*dirección del eje y*/
        xd: [[0, 0], [1, 0]]
      }
    },

    curves: [
      {
        dash: 2,
        points: [[-7, 1], [7, 1]]
      }, {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-4, -1.9816843611112658],
          [-3.8, -1.9776292281438344],
          [-3.5999999999999996, -1.9726762775527074],
          [-3.3999999999999995, -1.9666267300396738],
          [-3.1999999999999993, -1.9592377960216338],
          [-2.999999999999999, -1.950212931632136],
          [-2.799999999999999, -1.939189937374782],
          [-2.5999999999999988, -1.925726421785666],
          [-2.3999999999999986, -1.9092820467105873],
          [-2.1999999999999984, -1.8891968416376659],
          [-1.9999999999999984, -1.8646647167633872],
          [-1.7999999999999985, -1.834701111778413],
          [-1.5999999999999985, -1.7981034820053443],
          [-1.3999999999999986, -1.7534030360583932],
          [-1.1999999999999986, -1.6988057880877974],
          [-0.9999999999999987, -1.6321205588285572],
          [-0.7999999999999987, -1.5506710358827778],
          [-0.5999999999999988, -1.4511883639059728],
          [-0.39999999999999875, -1.32967995396436],
          [-0.19999999999999873, -1.181269246922017],
          [1.27675647831893e-15, -0.9999999999999987],
          [0.2000000000000013, -0.7785972418398286],
          [0.4000000000000013, -0.5081753023587279],
          [0.6000000000000013, -0.17788119960948867],
          [0.8000000000000014, 0.22554092849247054],
          [1.0000000000000013, 0.7182818284590491],
          [1.2000000000000013, 1.3201169227365517],
          [1.4000000000000012, 2.05519996684468],
          [1.6000000000000012, 2.9530324243951203],
          [1.8000000000000012, 4.049647464412953],
          [2.0000000000000013, 5.38905609893066],
          [2.2000000000000015, 7.0250134994341344],
          [2.4000000000000017, 9.02317638064162],
          [2.600000000000002, 11.463738035001715],
          [2.800000000000002, 14.444646771097084]
        ]
      }
    ],
    texts: [
      { x: 0.2, y: -1.1, text: 'R', style: { fontSize: 10 } },
      { x: -0.3, y: -0.8, text: '-1', style: { fontSize: 14 } },
      { x: 0.3, y: -0.2, text: 'S', style: { fontSize: 10 } },

      { x: -0.4, y: -1.6, text: 'Q', style: { fontSize: 10 } },
      { x: 1, y: 1.3, text: 'w', style: { fontSize: 13 } },
      { x: 1, y: 0.3, text: 'U', style: { fontSize: 13 } },

      { x: -4.5, y: 6, text: 'Lejos del eje x', style: { fontSize: 16 } },
      { x: -4.5, y: 1.3, text: 'cerca de 1', style: { fontSize: 14 } },
      { x: -4.5, y: 0.7, text: 'cerca de 1', style: { fontSize: 14 } },
      { x: -2.5, y: 0.2, text: 'Cerca del eje x', style: { fontSize: 14 } }

    ],
    points: [
      // [-2, 6, false, "Lejos del eje x", true, "black"],
      [0, 1.2, true, '1', true, 'black'],

      // [-5, 0.5, false, "Cerca de 1", true, "black"],
      // [-3, 1.2, false, "Cerca de 1",false, "black"],

      // [-2, 0, false, "Cerca del eje x", true, "black"],

      [-3, -1.95, false, 'P', true],

      [0.7, 0, true, 'T', false],

      // [1,0.3, false,'U', true],

      // [1.1,1, false,'W', true],
      [1.5, 2.5, false, 'x', true]

    ],
    lines: [
      { points: [[-7, -1], [7, -1]], dash: 2, opacity: 0.5 },
      { points: [[-3, 8], [-3, -8]], dash: 2, opacity: 0.5 },
      { points: [[0.7, 8], [0.7, -8]], dash: 2, opacity: 0.5 },
      { points: [[1.5, 8], [1.5, -8]], dash: 2, opacity: 0.5 }

    ]
  },
  board_1: {
    artifact: 'artifact_1',
    style: {
      grid: true,
      width: '600px',
      boundingbox: [-3, 6, 3, -6],
      axis: [false, true, true],
      valueAxis: {
        yd: [
          [0, 0],
          [0, 1]
        ], /*dirección del eje y*/
        xd: [
          [0, 0],
          [1, 0]
        ],
        colory: '#000000',
        colorx: '#000000'
      }
    },
    lines: [
      {
        points: [
          [10, 1],
          [-10, 1]
        ],
        dash: 2
      },
      {
        points: [
          [11, -1],
          [-11, -1]
        ],
        dash: 2
      }
    ],
    curves: [
      {
        interactive: true,
        strokeColor: 'black',
        points: [
          [-2.3557046979865772, -1.9676113360323888],
          [-2.01, -1.9919028340080973],
          [-1.3993288590604027, -1.9433198380566803],
          [-0.714765100671141, -1.6518218623481782],
          [-0.32, -1.3360323886639678],
          [0.010067114093959733, -0.9716599190283401],
          [0.47, -0.36],
          [0.83, 0.17],
          [1.29, 1.0931174089068827],
          [1.5704697986577183, 1.8218623481781377],
          [1.8221476510067114, 2.6720647773279356],
          [1.9429530201342282, 3.7408906882591095]
        ]
      }
    ],

    points: [
      [-2, -2, true, '', true, 'black'], // p
      [-2, -2.59, false, 'P', true, 'black'],
      [-0.32, -1.32, true, '', true, 'black'], // Q
      [-0.51, -2.04, false, 'Q', true, 'black'],
      [-1.42, -2.5, false, 'f', true, 'black'],
      [0, -1, true, '', true, 'black'],
      [0.04, -0.81, false, 'R', true, 'black'],
      [0.53, -0.29, true, '', true, 'blue'], // s
      //  [0.57, -0.2, true, "-0.2", true, "black"], //s
      [0.71, 0, true, '', true, 'green'], // T
      [0.91, 0.34, true, '', true, 'blue'], // v

      [1.25, 1.02, true, '', true, 'green'], // w
      [1.9, 3.35, true, '', true, 'black'],
      [2, 3.15, false, 'Z', true, 'black']
    ],
    texts: [
      {
        x: 1.66,
        y: 3.38,
        text: '2.3',
        style: {
          fontWeight: 'bold',
          fontSize: 11
        }
      },
      {
        x: 0.06,
        y: -1.2,
        text: '-1',
        style: {
          fontWeight: 'bold',
          fontSize: 12
        }
      },
      {
        x: -0.26,
        y: -1.52,
        text: '-1.1',
        style: {
          fontWeight: 'bold',
          fontSize: 11
        }
      },
      {
        x: -1.95,
        y: -1.75,
        text: '-2',
        style: {
          fontWeight: 'bold',
          fontSize: 12
        }
      },
      {
        x: 0.59,
        y: -0.49,
        text: 'S',
        style: {
          color: 'blue',
          fontWeight: 'bold',
          fontSize: 12
        }
      },
      {
        x: 0.28,
        y: -0.19,
        text: '-0.2',
        style: {
          color: 'blue',
          fontWeight: 'bold',
          fontSize: 12
        }
      },
      {
        x: 0.76,
        y: -0.26,
        text: 'T',
        style: {
          color: 'green',
          fontWeight: 'bold',
          fontSize: 13
        }
      },
      {
        x: 0.74,
        y: 0.26,
        text: '0',
        style: {
          color: 'green',
          fontWeight: 'bold',
          fontSize: 12
        }
      },
      {
        x: 0.97,
        y: 0.24,
        text: '0.2',
        style: {
          color: 'blue',
          fontWeight: 'bold',
          fontSize: 12
        }
      },
      {
        x: 0.95,
        y: 0.66,
        text: 'V',
        style: {
          color: 'blue',
          fontWeight: 'bold',
          fontSize: 13
        }
      },
      {
        x: 1.3,
        y: 1.37,
        text: '1',
        style: {
          color: 'green',
          fontWeight: 'bold',
          fontSize: 12
        }
      },
      {
        x: 1.29,
        y: 0.74,
        text: 'W',
        style: {
          color: 'green',
          fontWeight: 'bold',
          fontSize: 12
        }
      },
      {
        x: -2.96,
        y: 5.2,
        text: 'POSICION VERTICAL',
        style: {
          color: 'black',
          fontWeight: 'bold',
          fontSize: 8
        }
      },

      {
        x: -2.89,
        y: 4.35,
        text: 'Lejos del eje x',
        style: {
          color: 'black',
          fontWeight: 'bold',
          fontSize: 11
        }
      },
      {
        x: -2.72,
        y: 1.26,
        text: 'Cerca de 1',
        style: {
          color: 'black',
          fontWeight: 'bold',
          fontSize: 11
        }
      },
      {
        x: -2.71,
        y: 0.78,
        text: 'Cerca de 1',
        style: {
          color: 'black',
          fontWeight: 'bold',
          fontSize: 11
        }
      },
      {
        x: 2.3,
        y: -1.29,
        text: 'Altura -1',
        style: {
          color: 'black',
          fontWeight: 'bold',
          fontSize: 12
        }
      },
      {
        x: 2.3,
        y: 1.24,
        text: 'Altura 1',
        style: {
          color: 'black',
          fontWeight: 'bold',
          fontSize: 11
        }
      }
    ],
    asymptotes: [
      { x: -2.01 },
      { x: -0.32 },
      { x: 0.53 },
      { x: 0.71 },
      { x: 0.9 },
      { x: 1.25 },
      { x: 1.9 }
    ]
  }
};
// si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
const rDef = {
  artifactHtml: {
    datadefault: [
      {
        type: 10, // tipo 10 genera los contenedores con los dataset y clases para los boards
        classGlobal: 'operationCurves',
        contents: [
          {
            dataSet: {
              board: 'board_1'
            }
          }
        ]
      },


      {
        customKeyboard:9,

        type: 13,
        variation: 1,
        classGlobal: 'QA',
        interactive: true,

        parent: '#tabla1',
        contents: {
          artifact_2: {
            allinputs: [],
            header: [
              'PUNTO',
              'Posición vertical del punto',
              'Altura aproximada del punto grueso',
            ],
            dataInteraction: { incorrect: 0, correct: 0, forAnswer: 0 },
            cells: [
              [
                [{
                  type: 0,
                  text: ['P', false],
                  conditions: {
                    correctIndex: null,
                  },
                },],
                [{
                  type: 0,
                  text: ['Lejos del eje x. Debajo', false],
                  conditions: {
                    correctIndex: null,
                  },
                },],
                [{
                  type: 0,
                  text: ['-2', false],
                  conditions: {
                    correctIndex: null,
                  },
                },]
              ],







              [





                [
                  {
                    type: 0,
                    text: ['Q', false],
                    conditions: {
                      correctIndex: null,
                    },
                  }
                ],
                [

                  {
                    type: 2,
                    answers_values: [
                      '',
                      'Muy lejos del eje x',
                      'Lejos del eje x',
                      'Cerca de 1',
                      'Sobre 1',
                      'Sobre 0',
                      'Sobre -1',
                      'Cerca de –1',
                      'Cerca del eje x',
                      'Muy cerca del eje x',
                      
                    ],
                    conditions: {
                      correctIndex: 7,
                    },

                  },

                  {
                    type: 2,
                    answers_values: [
                      '',
                      'Encima',
                      'Debajo',
                    ],
                    conditions: {
                      correctIndex: 2,
                    },



                  }


                ],
                [
                  {
                    type: 3, // una pregunta. Varios inputs
                    inputsDefault: [['', false]],

                    conditions: {
                      valueInputs: [-1.45],
                    },
                  },
                ]


              ],


              [





                [
                  {
                    type: 0,
                    text: ['R', false],
                    conditions: {
                      correctIndex: null,
                    },
                  }
                ],
                [

                  {
                    type: 2,
                    answers_values: [
                      '',
                      'Muy lejos del eje x',
                      'Lejos del eje x',
                      'Cerca de 1',
                      'Sobre 1',
                      'Sobre 0',
                      'Sobre -1',
                      'Cerca de –1',
                      'Cerca del eje x',
                      'Muy cerca del eje x',
                    ],
                    conditions: {
                      correctIndex: 6,
                    },

                  },

                  // {
                  //   type: 2,
                  //   answers_values: [
                  //     '',
                  //     'Encima',
                  //     'Debajo',
                  //   ],
                  //   conditions: {
                  //     correctIndex: 2,
                  //   },



                  // }


                ],
                [
                  {
                    type: 3, // una pregunta. Varios inputs
                    inputsDefault: [['', false]],

                    conditions: {
                      valueInputs: [-1],
                    },
                  },
                ]


              ],

              [
                [
                  {
                    type: 0,
                    text: ['S', false],
                    conditions: {
                      correctIndex: null,
                    },
                  }
                ],
                [

                  {
                    type: 2,
                    answers_values: [
                      '',
                      'Muy lejos del eje x',
                      'Lejos del eje x',
                      'Cerca de 1',
                      'Sobre 1',
                      'Sobre 0',
                      'Sobre -1',
                      'Cerca de –1',
                      'Cerca del eje x',
                      'Muy cerca del eje x',
                    ],
                    conditions: {
                      correctIndex: 9,
                    },

                  },

                  {
                    type: 2,
                    answers_values: [
                      '',
                      'Encima',
                      'Debajo',
                    ],
                    conditions: {
                      correctIndex: 2,
                    },



                  }


                ],
                [
                  {
                    type: 3, // una pregunta. Varios inputs
                    inputsDefault: [['', false]],

                    conditions: {
                      valueInputs: [-0.20],
                    },
                  },
                ]


              ],



              [
                [
                  {
                    type: 0,
                    text: ['T', false],
                    conditions: {
                      correctIndex: null,
                    },
                  }
                ],
                [

                  {
                    type: 2,
                    answers_values: [
                      '',
                      'Muy lejos del eje x',
                      'Lejos del eje x',
                      'Cerca de 1',
                      'Sobre 1',
                      'Sobre 0',
                      'Sobre -1',
                      'Cerca de –1',
                      'Cerca del eje x',
                      'Muy cerca del eje x',
                    ],
                    conditions: {
                      correctIndex: 5,
                    },

                  },

                  // {
                  //   type: 2,
                  //   answers_values: [
                  //     '',
                  //     'Encima',
                  //     'Debajo',
                  //     'Sobre 0'
                  //   ],
                  //   conditions: {
                  //     correctIndex: 3,
                  //   },



                  // }


                ],
                [
                  {
                    type: 3, // una pregunta. Varios inputs
                    inputsDefault: [['', false]],

                    conditions: {
                      valueInputs: [0],
                    },
                  },
                ]


              ],

              [
                [
                  {
                    type: 0,
                    text: ['U', false],
                    conditions: {
                      correctIndex: null,
                    },
                  }
                ],
                [

                  {
                    type: 2,
                    answers_values: [
                      '',
                      'Muy lejos del eje x',
                      'Lejos del eje x',
                      'Cerca de 1',
                      'Sobre 1',
                      'Sobre 0',
                      'Sobre -1',
                      'Cerca de –1',
                      'Cerca del eje x',
                      'Muy cerca del eje x',
                    ],
                    conditions: {
                      correctIndex: 9,
                    },

                  },

                  {
                    type: 2,
                    answers_values: [
                      '',
                      'Encima',
                      'Debajo',
                    ],
                    conditions: {
                      correctIndex: 1,
                    },



                  }


                ],
                [
                  {
                    type: 3, // una pregunta. Varios inputs
                    inputsDefault: [['', false]],

                    conditions: {
                      valueInputs: [0.20],
                    },
                  },
                ]


              ],

              [
                [
                  {
                    type: 0,
                    text: ['W', false],
                    conditions: {
                      correctIndex: null,
                    },
                  }
                ],
                [

                  {
                    type: 2,
                    answers_values: [
                      '',
                      'Muy lejos del eje x',
                      'Lejos del eje x',
                      'Cerca de 1',
                      'Sobre 1',
                      'Sobre 0',
                      'Sobre -1',
                      'Cerca de –1',
                      'Cerca del eje x',
                      'Muy cerca del eje x',
                    ],
                    conditions: {
                      correctIndex: 4,
                    },

                  },

                  // {
                  //   type: 2,
                  //   answers_values: [
                  //     '',
                  //     'Encima',
                  //     'Debajo',
                  //   ],
                  //   conditions: {
                  //     correctIndex: 1,
                  //   },



                  // }


                ],
                [
                  {
                    type: 3, // una pregunta. Varios inputs
                    inputsDefault: [['', false]],

                    conditions: {
                      valueInputs: [1],
                    },
                  },
                ]


              ],
              [
                [
                  {
                    type: 0,
                    text: ['X', false],
                    conditions: {
                      correctIndex: null,
                    },
                  }
                ],
                [

                  {
                    type: 2,
                    answers_values: [
                      '',
                      'Muy lejos del eje x',
                      'Lejos del eje x',
                      'Cerca de 1',
                      'Cerca del eje x',
                      'Muy cerca del eje x',
                      'Cerca de –1'
                    ],
                    conditions: {
                      correctIndex: 2,
                    },

                  },

                  {
                    type: 2,
                    answers_values: [
                      '',
                      'Encima',
                      'Debajo',
                    ],
                    conditions: {
                      correctIndex: 1,
                    },



                  }


                ],
                [
                  {
                    type: 3, // una pregunta. Varios inputs
                    inputsDefault: [['', false]],

                    conditions: {
                      valueInputs: [2.5],
                    },
                  },
                ]


              ],

            ],
          },
        },
      },



      {
        customKeyboard:9,

        type: 13,
        variation: 1,
        classGlobal: 'QA',
        interactive: true,

        parent: '#tabla2',
        contents: {
          artifact_3: {
            allinputs: [],
            header: [
              'Altura aproximada del nuevo punto',
              'Posición vertical del nuevo punto',
              'PUNTO NUEVO'
            ],
            dataInteraction: { incorrect: 0, correct: 0, forAnswer: 0 },
            cells: [
              [
                [{
                  type: 0,
                  text: ['\\frac{1}{-2}=0.5', true],
                  conditions: {
                    correctIndex: null
                  }
                }],
                [{
                  type: 0,
                  text: ['Por debajo del eje x. Cerca', false],
                  conditions: {
                    correctIndex: null
                  }
                }],
                [{
                  type: 0,
                  text: ['P\'', false],
                  conditions: {
                    correctIndex: null
                  }
                }]
              ],

              [
                [
                  {
                    type: 3, // una pregunta. Varios inputs
                    inputsDefault: [['', false]],

                    conditions: {
                      valueInputs: [-0.6]
                    }
                  }
                ],
                [

                  {
                    type: 2,
                    answers_values: [
                      '',
                      'Muy lejos del eje x',
                      'Lejos del eje x',
                      'Cerca de 1',
                      'Sobre 1',
                      'Sobre 0',
                      'Sobre -1',
                      'Cerca de –1',
                      'Cerca del eje x',
                      'Muy cerca del eje x',
                    ],
                    conditions: {
                      correctIndex: 7
                    }

                  },

                  {
                    type: 2,
                    answers_values: [
                      '',
                      'Encima',
                      'Debajo',
                    ],
                    conditions: {
                      correctIndex: 2
                    }

                  }

                ],
                [
                  {
                    type: 0,
                    text: ['Q\'', false],
                    conditions: {
                      correctIndex: null
                    }
                  }
                ]

              ],

              //new

              [
                [
                  {
                    type: 3, // una pregunta. Varios inputs
                    inputsDefault: [['', false]],

                    conditions: {
                      valueInputs: [-1]
                    }
                  }
                ],
                [

                  {
                    type: 2,
                    answers_values: [
                      '',
                      'Muy lejos del eje x',
                      'Lejos del eje x',
                      'Cerca de 1',
                      'Sobre 1',
                      'Sobre 0',
                      'Sobre -1',
                      'Cerca de –1',
                      'Cerca del eje x',
                      'Muy cerca del eje x',
                    ],
                    conditions: {
                      correctIndex: 6
                    }

                  },

                  // {
                  //   type: 2,
                  //   answers_values: [
                  //     '',
                  //     'Encima',
                  //     'Debajo',
                  //   ],
                  //   conditions: {
                  //     correctIndex: 2
                  //   }

                  // }

                ],
                [
                  {
                    type: 0,
                    text: ['R\'', false],
                    conditions: {
                      correctIndex: null
                    }
                  }
                ]
              ],
                     
                     
              [
                [
                  {
                    type: 3, // una pregunta. Varios inputs
                    inputsDefault: [['', false]],

                    conditions: {
                      valueInputs: [-5],
                    },
                  },
                ],
                [

                  {
                    type: 2,
                    answers_values: [
                      '',
                      'Muy lejos del eje x',
                      'Lejos del eje x',
                      'Cerca de 1',
                      'Sobre 1',
                      'Sobre 0',
                      'Sobre -1',
                      'Cerca de –1',
                      'Cerca del eje x',
                      'Muy cerca del eje x',
                    ],
                    conditions: {
                      correctIndex:  1,
                    },

                  },

                  {
                    type: 2,
                    answers_values: [
                      '',
                      'Encima',
                      'Debajo',
                    ],
                    conditions: {
                      correctIndex: 2,
                    },


                  }


                ],
                [
                  {
                    type: 0,
                    text: ['S\'', false],
                    conditions: {
                      correctIndex: null,
                    },
                  }
                ]

              ],

              //otra
              [
                [
                  {
                    type: 3, // una pregunta. Varios inputs
                    inputsDefault: [['', false]],

                    conditions: {
                      valueInputs: ["nexist","∄"]
                    }
                  }
                ],
                [

                  {
                    type: 2,
                    answers_values: [
                      '',
                      'Muy lejos del eje x',
                      'Lejos del eje x',
                      'Cerca de 1',
                      'Sobre 1',
                      'Sobre 0',
                      'Sobre -1',
                      'Cerca de –1',
                      'Cerca del eje x',
                      'Muy cerca del eje x',
                    ],
                    conditions: {
                      correctIndex: 5
                    }

                  },

                  // {
                  //   type: 2,
                  //   answers_values: [
                  //     '',
                  //     'Encima',
                  //     'Debajo',
                  //     'Sobre 0'
                  //   ],
                  //   conditions: {
                  //     correctIndex: 3
                  //   }

                  // }

                ],
                [
                  {
                    type: 0,
                    text: ['T\'', false],
                    conditions: {
                      correctIndex: null
                    }
                  }
                ]
              ],
              [
                [
                  {
                    type: 3, // una pregunta. Varios inputs
                    inputsDefault: [['', false]],

                    conditions: {
                      valueInputs: [5]
                    }
                  }
                ],
                [

                  {
                    type: 2,
                    answers_values: [
                      '',
                      'Muy lejos del eje x',
                      'Lejos del eje x',
                      'Cerca de 1',
                      'Sobre 1',
                      'Sobre 0',
                      'Sobre -1',
                      'Cerca de –1',
                      'Cerca del eje x',
                      'Muy cerca del eje x',
                    ],
                    conditions: {
                      correctIndex: 1
                    }

                  },

                  {
                    type: 2,
                    answers_values: [
                      '',
                      'Encima',
                      'Debajo',
                    ],
                    conditions: {
                      correctIndex: 1
                    }

                  }

                ],
                [
                  {
                    type: 0,
                    text: ['U\'', false],
                    conditions: {
                      correctIndex: null
                    }
                  }
                ]
              ],

              //w

              [
                [
                  {
                    type: 3, // una pregunta. Varios inputs
                    inputsDefault: [['', false]],

                    conditions: {
                      valueInputs: [1]
                    }
                  }
                ],
                [

                  {
                    type: 2,
                    answers_values: [
                      '',
                      'Muy lejos del eje x',
                      'Lejos del eje x',
                      'Cerca de 1',
                      'Sobre 1',
                      'Sobre 0',
                      'Sobre -1',
                      'Cerca de –1',
                      'Cerca del eje x',
                      'Muy cerca del eje x',
                    ],
                    conditions: {
                      correctIndex: 4
                    }

                  },

                  // {
                  //   type: 2,
                  //   answers_values: [
                  //     '',
                  //     'Encima',
                  //     'Debajo',
                  //   ],
                  //   conditions: {
                  //     correctIndex: 1
                  //   }

                  // }

                ],
                [
                  {
                    type: 0,
                    text: ['W\'', false],
                    conditions: {
                      correctIndex: null
                    }
                  }
                ]
              ],

              [
                [
                  {
                    type: 3, // una pregunta. Varios inputs
                    inputsDefault: [['', false]],

                    conditions: {
                      valueInputs: [0.4]
                    }
                  }
                ],
                [

                  {
                    type: 2,
                    answers_values: [
                      '',
                      'Muy lejos del eje x',
                      'Lejos del eje x',
                      'Cerca de 1',
                      'Sobre 1',
                      'Sobre 0',
                      'Sobre -1',
                      'Cerca de –1',
                      'Cerca del eje x',
                      'Muy cerca del eje x',
                    ],
                    conditions: {
                      correctIndex: 8,
                    },

                  },

                  {
                    type: 2,
                    answers_values: [
                      '',
                      'Encima',
                      'Debajo',
                    ],
                    conditions: {
                      correctIndex: 1,
                    },
                  }
                ],
                [
                  {
                    type: 0,
                    text: ['X\'', false],
                    conditions: {
                      correctIndex: null
                    }
                  }
                ]

              ]


            ]
          }

        }
      },




      // PREGUNTAS
      {
        type: 11, // switch case
        classGlobal: 'QA', //
        parent: '#oneContainer', //
        contents: {
          artifact_4: {
            allinputs: [], // nodos que se van generando
            dataInteraction: { incorrect: 0, correct: 0 }, // aciertos y fallas
            questions: [
              {
                type: 2,
                question: ['¿Por qué se llama la curva <math xmlns=\'http://www.w3.org/1998/Math/MathML\'><mfrac><mn>1</mn><mn>f</mn></mfrac></math>?', null],
                answers_values: [
                  '',
                  'Porque es la recíproca de f',
                  'Porque f es el nombre de la curva',
                  'Porque es una recíproca'
                ],
                conditions: {
                  correctIndex: 1
                }
              },

              ,
              {
                type: 2,
                question: ['¿Por qué  no se pueden unir los puntos de la izquierda de T con los de la derecha de T?', null],
                answers_values: [
                  '',

                  'Porque 1/T es una indeterminación',
                  'porque 1/0 no existe'
                ],
                conditions: {
                  correctIndex: 2
                }
              },
              ,
              {
                type: 1,
                question: 'Para contestar las siguientes preguntas tome en cuenta los resultados de la tabla: ¿Los transformados de puntos que estaban por encima del eje x quedaron por encima del eje x?',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'Sí'
                }
              },
              {
                type: 1,
                question: '¿Los transformados de puntos que estaban cerca del eje x quedaron por encima del eje x?',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'No'
                }
              },

              {
                type: 1,
                question: '¿Donde quedaron los transformados de puntos que estaban lejos del eje x?',
                answers_values: ['Lejos', 'Cerca'],
                conditions: {
                  correctIndex: 'Cerca'
                }
              }, {
                type: 1,
                question: '¿Hubo algunos puntos que coincidieron con sus transformados?',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'Sí'
                }
              },
              {
                type: 1,
                question: 'Cuales?',
                answers_values: ['R,S', 'R,W'],
                conditions: {
                  correctIndex: 'R,W'
                }
              },
              {
                type: 1,
                question: '¿todos los puntos gruesos tenían transformados?',
                answers_values: ['Sí', 'No'],
                conditions: {
                  correctIndex: 'No'
                }
              }
            ]
          }
        }
      }
    ]
  },
  artifact_1: {
    showStripes: true,
    conditions: {
      inverseCurve: [
        {
          points: [
            [-3, -1.95],
            [-0.6, -1.45],
            [0, -1],
            [0.6, -0.2]
          ],
          zones: [[-2, -5], [-3, -4], [-1, -6]]
        },
        {
          points: [
            [0.8, 0.2],
            [1.1, 1],
            [1.5, 2.5]
          ],
          zones: [[2, 5], [-1, -6]]

        }
      ]
    }
  }
};

generator(rDef);
colorInitMain(rDef, defBoards);
