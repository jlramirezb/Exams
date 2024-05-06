//comentariox 
let def = {
  
  artifact_1: {
    variableX:'5',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid',
      width:'300px',
      height: 'auto',
      arrow: {
        count: 2,
        direction: 'down'
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
              height: '50px'
            }
          }
        },
        {
          square: {
            count: 2,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px'
            }
          }
        }
      ]
  
    },
    defaultinput: {
      screen: {defaultText:[{textValue:'5' ,disabled:true}, {textValue:''}, {textValue:'',disabled:false}] },
      key:{defaultText:[{textValue:'\\sqrt{\\left(\\right)}'},{textValue:'',disabled:false}],disabled:true}
    },
    conditions: {
      screen: [[], ['2.236067','2.236068'], ['5']],
      key: [[], ['left(right)^2']]
    }
  }, 
  artifact_2: {
    variableX:'0.91',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid',
      width:'300px',
      height: 'auto',
      arrow: {
        count: 2,
        direction: 'down'
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
              height: '50px'
            }
          }
        },
        {
          square: {
            count: 2,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px'
            }
          }
        }
      ]
  
    },
    defaultinput: {
      screen: {defaultText:[{textValue:'0.91' ,disabled:true}, {textValue:''}, {textValue:'',disabled:false}] },
      key:{defaultText:[{textValue:'',disabled:false},{textValue:'\\cos\\left(\\right)'}],disabled:true}
    },
    conditions: {
      screen: [[], ['0.427512'], ['0.91' ]],
      key: [['cos^{-1}left(right)','sin^{-1}left(right)'], []]
    }
  },
  artifact_3: {
    variableX:'-0.2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid',
      width:'300px',
      height: 'auto',
      arrow: {
        count: 2,
        direction: 'down'
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
              height: '50px'
            }
          }
        },
        {
          square: {
            count: 2,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px'
            }
          }
        }
      ]
  
    },
    defaultinput: {
      screen: {defaultText:[{textValue:'-0.2' ,disabled:true}, {textValue:''}, {textValue:'',disabled:false}] },
      key:{defaultText:[{textValue:'',disabled:false},{textValue:'\\frac{1}{\\left(\\right)}'}],disabled:true}
    },
    conditions: {
      screen: [[], ['-5',], ['-0.2',]],
      key: [['frac{1}{left(right)}','left(right)^{-1}'], []]
    }
  },
  artifact_4: {
    variableX:'-2',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid',
      width:'300px',
      height: 'auto',
      arrow: {
        count: 2,
        direction: 'down'
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
              height: '50px'
            }
          }
        },
        {
          square: {
            count: 2,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px'
            }
          }
        }
      ]
    
    },
    defaultinput: {
      screen: {defaultText:[{textValue:'-2' ,disabled:true}, {textValue:''}, {textValue:'',disabled:false}] },
      key:{defaultText:[{textValue:'\\left(\\right)^2'},{textValue:'',disabled:false}],disabled:true}
    },
    conditions: {
      screen: [[], ['4'], ['-2',]],
      key: [[], ['-left(sqrt{left(right)}right)','-sqrt{left(right)}']]
    }
  },   
  artifact_5: {
    variableX:'7.49',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid',
      width:'300px',
      height: 'auto',
      arrow: {
        count: 2,
        direction: 'down'
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
              height: '50px'
            }
          }
        },
        {
          square: {
            count: 2,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px'
            }
          }
        }
      ]
  
    },
    defaultinput: {
      screen: {defaultText:[{textValue:'7.49' ,disabled:true}, {textValue:''}, {textValue:'',disabled:false}] },
      key:{defaultText:[{textValue:'()-0.3'},{textValue:'',disabled:false}],disabled:true}
    },
    conditions: {
      screen: [[], ['7.19'], ['7.49']],
      key: [[], ['left(right)+0.3','()+0.3']]
    }
  },
  artifact_6: {
    variableX:'0.46',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid',
      width:'300px',
      height: 'auto',
      arrow: {
        count: 2,
        direction: 'down'
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
              height: '50px'
            }
          }
        },
        {
          square: {
            count: 2,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px'
            }
          }
        }
      ]
    
    },
    defaultinput: {
      screen: {defaultText:[{textValue:'0.46' ,disabled:true}, {textValue:''}, {textValue:'',disabled:false}] },
      key:{defaultText:[{textValue:'\\frac{\\left(\\right)}{-2}'},{textValue:'',disabled:false}],disabled:true}
    },
    conditions: {
      screen: [[], ['-0.23'], ['0.46']],
      key: [[], ['left(right)cdot-2','left(right)-2','-2cdotleft(right)','-2left(right)']]
    }
  },
  artifact_7: {
    variableX:'-7.47',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid',
      width:'300px',
      height: 'auto',
      arrow: {
        count: 2,
        direction: 'down'
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
              height: '50px'
            }
          }
        },
        {
          square: {
            count: 2,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px'
            }
          }
        }
      ]
  
    },
    defaultinput: {
      screen: {defaultText:[{textValue:'-7.47' ,disabled:true}, {textValue:''}, {textValue:'',disabled:false}] },
      key:{defaultText:[{textValue:'\\left(\\right)\\cdot\\left(-\\frac12\\right)'},{textValue:'',disabled:false}],disabled:true}
    },
    conditions: {
      screen: [[], ['3.735'], ['-7.47']],
      key: [[], ['frac{left(right)}{-frac12}','frac{left(right)}{-frac{1}{2}}','frac{left(right)}{-frac{1}{2}}']]
    }
  },
  artifact_8: {
    variableX:'6',
    buttonsActive: true,
    characteristicsArtifact: {
      typeForm: 'artifactGrid',
      width:'300px',
      height: 'auto',
      arrow: {
        count: 2,
        direction: 'down'
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
              height: '50px'
            }
          }
        },
        {
          square: {
            count: 2,
            border: '1px solid black',
            formClas: 'square',
            inputEnable: true,
            size: {
              width: '100px',
              height: '50px'
            }
          }
        }
      ]
      
    },
    defaultinput: {
      screen: {defaultText:[{textValue:'6Rad' ,disabled:true}, {textValue:''}, {textValue:'',disabled:false}] },
      key:{defaultText:[{textValue:'\\tan\\left(\\right)'},{textValue:'',disabled:false}],disabled:true}
    },
    conditions: {
      screen: [[], ['-0.291006',], ['-0.283185']],
      key: [[], ['tan^{-1}left(right)']]
    }
  },

}
  
generateArtifact(def)
