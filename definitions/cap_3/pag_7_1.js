//comentariox 
let def = {
  
  artifact_1: {
    buttonsActive: true,
    variableX:'5',
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
      key:{defaultText:[{textValue:'\\left(\\right)\\cdot2'},{textValue:'',disabled:false}],disabled:true}
    },
    conditions: {
      screen: [[], ['10'], ['5']],
      key: [[], ['frac{left(right)}{2}']]
    }
  },
     
  artifact_2: {
    variableX:7,
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
      screen: {defaultText:[{textValue:'7' ,disabled:true}, {textValue:''}, {textValue:'',disabled:false}] },
      key:{defaultText:[{textValue:'\\frac{\\left(\\right)}{3}'},{textValue:'',disabled:false},{textValue:''},{textValue:''}],disabled:true}
    },
    conditions: {
      screen: [[], ['2.333333'], ['7']],
      key: [[], ['3cdotleft(right)','3left(right)','left(right)3','left(right)cdot3']]
    }
  },
  
  artifact_3: {
    variableX:'1.12',
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
      screen: {defaultText:[{textValue:'1.12' ,disabled:true}, {textValue:''}, {textValue:'',disabled:false}] },
      key:{defaultText:[{textValue:'-2\\cdot\\left(\\right)'},{textValue:'',disabled:false},{textValue:''},{textValue:''}],disabled:true}
    },
    conditions: {
      screen: [[], ['-2.24'], ['1.12']],
      key: [[], ['frac{left(right)}{-2}']]
    }
  },
   
  artifact_4: {
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
      screen: {defaultText:[{textValue:'3' ,disabled:true}, {textValue:''}, {textValue:'',disabled:false}] },
      key:{defaultText:[{textValue:'\\left(\\right)^{-2}'},{textValue:'',disabled:false},{textValue:''},{textValue:''}],disabled:true}
    },
    conditions: {
      screen: [[], ['0.111111'], ['3']],
      key: [[], ['sqrt{frac{1}{left(right)}}','frac{1}{sqrt{left(right)}}', 'left(right)^{-frac{1}{2}}','left(right)^{-left(frac{1}{2}right)}']]
    }
  },
    
  artifact_5: {
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
      key:{defaultText:[{textValue:'\\cos^{-1}\\left(\\right)'},{textValue:'',disabled:false}],disabled:true}
    },
    conditions: {
      screen: [[], ['1.092801'], ['0.46']],
      key: [[], ['cosleft(right)','cos()']]
    }
  },
  artifact_6: {
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
      key:{defaultText:[{textValue:'\\exponentialE^{\\left(\\right)}'},{textValue:'',disabled:false}],disabled:true}
    },
    conditions: {
      screen: [[], ['148.413159'], ['5']],
      key: [[], ['lnleft(right)']]
    }
  },  
  artifact_7: {
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
      key:{defaultText:[{textValue:'\\ln\\left(\\right)'},{textValue:'',disabled:false}],disabled:true}
    },
    conditions: {
      screen: [[], ['1.609437','1.609438'], ['5']],
      key: [[], ['exponentialE^{left(right)}']]
    }
  }, 
  artifact_8: {
    variableX:'0.71',
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
      screen: {defaultText:[{textValue:'0.71' ,disabled:true}, {textValue:''}, {textValue:'',disabled:false}] },
      key:{defaultText:[{textValue:'\\left(\\right)^{-1}'},{textValue:'',disabled:false}],disabled:true}
    },
    conditions: {
      screen: [[], ['1.408450','1.408451'], ['0.71']],
      key: [[], ['frac{1}{left(right)}','left(right)^{-1}']]
    }
  }, 


}
  
generateArtifact(def)
