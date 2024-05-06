let def = {
  artifact_example_1: {
    //depure: true,
    variableX: '2',
    buttonsActive: false,
    characteristicsArtifact: {
      typeForm: 'artifactGridNew',
      width: '250px',
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
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '2x=6',disabled: true},
          { textValue: '2x+3=6+3',disabled: true },
          { textValue: '2x+3=9',disabled: true},
        ],
      },
      key: {
        defaultText: [
          { textValue: '\\left(\\right)+3',disabled: true },
          { textValue: 'Simplificar',disabled: true, writeCss:'border:none !important; font-size:1rem !important; width: 100px; height: 50px;' },          
          

        
        ],
      },
    },
    conditions: {
      screen: [ 
        [],
      ],
      key: [
        [],
          
      ],
    },
  },
  artifact_1: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGridNew',
      width: '300px',
      height: 'auto',
      arrow: {
        direction: 'down',
        count: 2,
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
          { textValue: ''},
          { textValue: '\\frac{\\left(2x\\right)}{2}=\\frac{\\left(6\\right)}{2}',disabled: true},
          { textValue: ''},
  
        ],
      },
      key: {
        defaultText: [
          { textValue: '\\frac{\\left(\\right)}{2}',disabled: true },          
          { textValue: 'Simplificar',disabled: true, writeCss:'border:none !important; font-size:1rem !important; width: 100px; height: 50px;' },          
          

              
        ],
      },
    },
    conditions: {
      screen: [
        ['2x=6'],
        [],
        ['x=3']
      ],
      key: [
        //   ["left(right)+1"],
        [],
        [],

      ],
    },
  },
  artifact_2: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGridNew',
      width: '300px',
      height: 'auto',
      arrow: {
        direction: 'down',
        count: 2,
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
          { textValue: 'x+3=5',disabled: true},
          { textValue: ''},
          { textValue: '4x+12=20',disabled: true},
  
        ],
      },
      key: {
        defaultText: [
          { textValue: '4\\cdot\\left(\\right)',disabled: true},
          { textValue: 'Simplificar',disabled: true, writeCss:'border:none !important; font-size:1rem !important; width: 100px; height: 50px;' },          
          

        ],
      },
    },
    conditions: {
      screen: [
        [],
        ['4cdotleft(x+3right)=4cdotleft(5right)','4cdotleft(x+3right)=4cdot5', '4left(x+3right)=4cdot5','4left(x+3right)=4left(5right)','4left(x+3right)=4times5','4left(x+3right)=4left(5right)', '4cdotleft(x+3right)=4left(5right)','4cdotleft(x+3right)=4cdotleft(5right)','4left(x+3right)=4cdotleft(5right)'],
        []
      ],
      key: [
        [],        
        [],        
      ],
    },
  },
  artifact_3: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGridNew',
      width: '300px',
      height: 'auto',
      arrow: {
        direction: 'down',
        count: 2,
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
          { textValue: '\\exponentialE^x=2',disabled: true},
          { textValue: ''},
          { textValue: 'x=0.693147...',disabled: true},

        ],
      },
      key: {
        defaultText: [
          { textValue: ''},   
          { textValue: 'Simplificar',disabled: true, writeCss:'border:none !important; font-size:1rem !important; width: 100px; height: 50px;' },          
          
          //AGREGAR

          
        ],
      },
    },
    conditions: {
      screen: [
        [],
        ['lnleft(exponentialE^xright)=lnleft(2right)','lnleft(exponentialE^xright)=lnleft(2right)','lnleft(exponentialE^{left(xright)}right)=lnleft(2right)'],
        []
      ],
      key: [
        ['lnleft(right)'],
        []

      ],
    },
  },
  artifact_4: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGridNew',
      width: '300px',
      height: 'auto',
      arrow: {
        direction: 'down',
        count: 2,
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
          { textValue: '\\sin\\left(x\\right)=0.5',disabled: true},
          { textValue: ''},
          { textValue: ''},
  
        ],
      },
      key: {
        defaultText: [
          { textValue: '\\sin^{-1}\\left(\\right)',disabled: true},
          { textValue: 'Simplificar',disabled: true, writeCss:'border:none !important; font-size:1rem !important; width: 100px; height: 50px;' },          
          

        ],
      },
    },
    conditions: {
      screen: [
        [],
        ['sin^{-1}left(sinleft(xright)right)=sin^{-1}left(0.5right)'],
        ['x=0.523598','x=0.523599']
      ],
      key: [
        [],
        [],        
      ],
    },
  },
  artifact_5: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGridNew',
      width: '300px',
      height: 'auto',
      arrow: {
        direction: 'down',
        count: 2,
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
          { textValue: '\\sin\\left(2-x\\right)=0.5',disabled: true},
          { textValue: ''},
          { textValue: ''},
  
        ],
      },
      key: {
        defaultText: [
          { textValue: '\\sin^{-1}\\left(\\right)',disabled: true},
          { textValue: 'Simplificar',disabled: true, writeCss:'border:none !important; font-size:1rem !important; width: 100px; height: 50px;' },          
          

        ],
      },
    },
    conditions: {
      screen: [
        [],
        ['sin^{-1}left(sinleft(2-xright)right)=sin^{-1}left(0.5right)'/*,"sin^{-1}left(sinleft(-x+2right)right)=sin^{-1}left(0.5right)*/],
        ['2-x=0.523598','2-x=0.523599'/*"-x+2=0.523598"*/]
      ],
      key: [
        [],
        [],        
      ],
    },
  },
  artifact_6: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGridNew',
      width: '300px',
      height: 'auto',
      arrow: {
        direction: 'down',
        count: 2,
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
          { textValue: '-4\\left(3x+2\\right)=-2',disabled: true},
          { textValue: ''},
          { textValue: ''},
  
        ],
      },
      key: {
        defaultText: [
          { textValue: '-\\left(\\right)',disabled: true },
          { textValue: 'Simplificar',disabled: true, writeCss:'border:none !important; font-size:1rem !important; width: 100px; height: 50px;' },          
          

        ],
      },
    },
    conditions: {
      screen: [
        [],
        ['-left(-4left(3x+2right)right)=-left(-2right)','-left(-4cdotleft(3x+2right)right)=-left(-2right)'],
        ['4left(3x+2right)=2','4cdotleft(3x+2right)=2']
      ],
      key: [
        [],
        [],
      
      ],
    },
  },
  artifact_7: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGridNew',
      width: '300px',
      height: 'auto',
      arrow: {
        direction: 'down',
        count: 2,
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
          { textValue: '-4\\left(3x+2\\right)=-2',disabled: true},
          { textValue: ''},
          { textValue: ''},
  
        ],
      },
      key: {
        defaultText: [
          { textValue: '\\frac{\\left(\\right)}{-4}',disabled: true },
          { textValue: 'Simplificar',disabled: true, writeCss:'border:none !important; font-size:1rem !important; width: 100px; height: 50px;' },          
          

        ],
      },
    },
    conditions: {
      screen: [
        [],
        ['frac{-4left(3x+2right)}{-4}=frac{-2}{-4}','frac{-4left(3x+2right)}{-4}=-frac{2}{-4}','frac{left(-4left(3x+2right)right)}{-4}=frac{left(-2right)}{-4}'],
        ['3x+2=frac{1}{2}','3x+2=0.5',/*"3x+2=0.5"*/]
      ],
      key: [
        [],
        [],

      
      ],
    },
  },
  artifact_8: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGridNew',
      width: '300px',
      height: 'auto',
      arrow: {
        direction: 'down',
        count: 2,
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
          { textValue: '1-x=0',disabled: true},
          { textValue: ''},
          { textValue: ''},
  
        ],
      },
      key: {
        defaultText: [
          { textValue: '\\left(\\right)-1',disabled: true },      
          { textValue: 'Simplificar',disabled: true, writeCss:'border:none !important; font-size:1rem !important; width: 100px; height: 50px;' },          
          

        ],
      },
    },
    conditions: {
      screen: [
        [],
        ['left(1-xright)-1=0-1','left(1-xright)-1=left(0right)-1'/*"left(1-xright)-1=0-1","1-x-1=0-1","left(1-xright)-1=left(0right)-1","left(-x+1right)-1=left(0right)-1","left(-x+1right)-1=0-1","left(-x+1right)-1=left(0right)-1"*/ ],
        ['-x=-1']
      ],
      key: [
        [],
        [],

      
      ],

    },
  },
};
    
generateArtifact(def);
    