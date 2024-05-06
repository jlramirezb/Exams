//comentariox
let def = {
  artifact_example_1: {
    //depure: true,
    variableX: '2',
    buttonsActive: false,
    characteristicsArtifact: {
      typeForm: 'artifactGrid_1',
      width: '320px',
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
    equationsEnd: [
      {
        solution: {
          defaultText: {
            textValue: '2.304692',
            disabled: true,
          },
      
          size: {
            width: '280px',
            height: '50px',
          },
        },
      },
           
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '\\sin\\left(x-2\\right)=0.3',disabled: true},
          { textValue: 'x-2=0.304692',disabled: true },
          { textValue: 'x=2.304692',disabled: true},
        ],
      },
      key: {
        defaultText: [
          { textValue: '\\arcsin\\left(\\right)',disabled: true },
          { textValue: '\\left(\\right)+2',disabled: true },
          
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
      equation: [[]],
      solution: [[]],
    },
  },
  artifact_1: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid_1',
      width: '320px',
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
        solution: {
          defaultText: {
            textValue: '',
            disabled: false,
          },
      
          size: {
            width: '280px',
            height: '50px',
          },
        },
      },
           
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '\\exponentialE^{x}-1=0',disabled: true},
          { textValue: ''},
          { textValue: ''},
    
        ],
      },
      key: {
        defaultText: [
          { textValue: '' },
          { textValue: ''},
          
        ],
      },
    },
    conditions: {
      screen: [
        [],
        ['mathrm{e}^x=1','exponentialE^{x}=1','e^x=1','exponentialE^x=1'],
        ['x=0']
      ],
      key: [
        ['left(right)+1'],
        ['lnleft(right)']
            
      ],
      solution: [['0']],
    },
  },
  artifact_2: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid_1',
      width: '320px',
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
        solution: {
          defaultText: {
            textValue: '',
            disabled: false,
          },
    
          size: {
            width: '280px',
            height: '50px',
          },
        },
      },
       
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '3x+2=-2',disabled: true},
          { textValue: ''},
          { textValue: ''},
    
        ],
      },
      key: {
        defaultText: [
          { textValue: '' },
          { textValue: ''},
      
        ],
      },
    },
    conditions: {
      screen: [
        [],
        ['3x=-4'],
        ['x=-1.333333','x=-1.333334', 'x=-frac{4}{3}']
      ],
      key: [
        ['2','-2','left(right)-2'],
        ['frac{left(right)}{3}','frac{1}{3}left(right)']
        
      ],
      solution: [['-1.333333', '-frac{4}{3}','-1.333334']],
    },
  },
  artifact_3: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid_1',
      width: '320px',
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
        solution: {
          defaultText: {
            textValue: '',
            disabled: false,
          },
    
          size: {
            width: '280px',
            height: '50px',
          },
        },
      },
       
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '-3x+2=-2',disabled: true},
          { textValue: ''},
          { textValue: ''},
    
        ],
      },
      key: {
        defaultText: [
          { textValue: '' },
          { textValue: ''},
      
        ],
      },
    },
    conditions: {
      screen: [
        [],
        ['-3x=-4'],
        ['x=1.333333','x=1.333334', 'x=frac{4}{3}']
      ],
      key: [
        ['2','-2','left(right)-2'],
        ['frac{left(right)}{-3}']
        
      ],
      solution: [['1.333333','1.333334', 'frac{4}{3}']],
    },
  },
  artifact_4: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid_1',
      width: '320px',
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
        solution: {
          defaultText: {
            textValue: '',
            disabled: false,
          },
    
          size: {
            width: '280px',
            height: '50px',
          },
        },
      },
       
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '-3x-2=-2',disabled: true},
          { textValue: ''},
          { textValue: ''},
    
        ],
      },
      key: {
        defaultText: [
          { textValue: '' },
          { textValue: ''},
      
        ],
      },
    },
    conditions: {
      screen: [
        [],
        ['-3x=0'],
        ['x=0']
      ],
      key: [
        ['2','+2','left(right)+2'],
        ['frac{left(right)}{-3}']
        
      ],
      solution: [['0']],
    },
  },
  artifact_5: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid_1',
      width: '320px',
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
              width: '160px',
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
        solution: {
          defaultText: {
            textValue: '',
            disabled: false,
          },
    
          size: {
            width: '280px',
            height: '50px',
          },
        },
      },
       
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '\\cos^{-1}\\left(x+2\\right)=45',disabled: true},
          { textValue: ''},
          { textValue: ''},
    
        ],
      },
      key: {
        defaultText: [
          { textValue: '' },
          { textValue: ''},
      
        ],
      },
    },
    conditions: {
      screen: [
        [],
        ['x+2=0.525321', 'x+2=0.525322'],
        ['x=-1.474678','x=-1.474679']
      ],
      key: [
        ['cosleft(right)'],
        ['2','-2','left(right)-2',]
        
      ],
      solution: [['-1.474678','-1.474679']],
    },
  },
  artifact_6: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid_1',
      width: '320px',
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
        solution: {
          defaultText: {
            textValue: '',
            disabled: false,
          },
    
          size: {
            width: '280px',
            height: '50px',
          },
        },
      },
       
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '\\exponentialE^{x-2}=1',disabled: true},
          { textValue: ''},
          { textValue: ''},
    
        ],
      },
      key: {
        defaultText: [
          { textValue: '' },
          { textValue: ''},
      
        ],
      },
    },
    conditions: {
      screen: [
        [],
        ['x-2=0'],
        ['x=2']
      ],
      key: [
        ['lnleft(right)'],
        ['left(right)+2']
        
      ],
      solution: [['2']],
    },
  },
  artifact_7: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid_1',
      width: '320px',
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
        solution: {
          defaultText: {
            textValue: '',
            disabled: false,
          },
    
          size: {
            width: '280px',
            height: '50px',
          },
        },
      },
       
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '\\ln\\left(\\tan\\left(x\\right)\\right)=0.7',disabled: true},
          { textValue: ''},
          { textValue: ''},
    
        ],
      },
      key: {
        defaultText: [
          { textValue: '' },
          { textValue: ''},
      
        ],
      },
    },
    conditions: {
      screen: [
        [],
        ['tanleft(xright)=2.013752', 'tanleft(xright)=2.013753'],
        ['x=1.109884','x=1.109885' ]
      ],
      key: [
        ['e^{left(right)}', 'exponentialE^{left(right)}'],
        ['tan^{-1}left(right)']
        
      ],
      solution: [['1.109884', '1.109885']],
    },
  },
  artifact_8: {
    //depure: true,
    variableX: '2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid_1',
      width: '320px',
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
        solution: {
          defaultText: {
            textValue: '',
            disabled: false,
          },
    
          size: {
            width: '280px',
            height: '50px',
          },
        },
      },
       
    ],
    defaultinput: {
      screen: {
        defaultText: [
          { textValue: '\\frac{3}{x}=0.25',disabled: true},
          { textValue: ''},
          { textValue: ''},
    
        ],
      },
      key: {
        defaultText: [
          { textValue: '' },
          { textValue: '',},
      
        ],
      },
    },
    conditions: {
      screen: [
        [],
        ['frac{1}{x}=0.083333','frac{1}{x}=0.083334'],
        ['x=12','x=12.000048','x=12.000049']
      ],
      key: [
        ['frac{left(right)}{3}', 'frac{1}{3}left(right)'],
        ['frac{1}{left(right)}','left(right)^{-1}']
        
      ],
      solution: [['12','12.000048','12.000049']],
    },
  },
};
      
generateArtifact(def);
      