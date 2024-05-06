let def = {
  artifact_1: {
    variableX:'7',
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
      screen: {defaultText:[{textValue:'7' ,disabled:true}, {textValue:''}, {textValue:''}] },
      key:{defaultText:[{textValue:'-()'},{textValue:'-()'}],disabled:true}
    },
    conditions: {
      screen: [[], [-7], [7]],
      //    key: []
    }
  },
  artifact_2: {
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
      screen: {defaultText:[{textValue:'1' ,disabled:true}, {textValue:''}, {textValue:''}] },
      key:{defaultText:[{textValue:'\\exponentialE^{\\left(\\right)}'},{textValue:'\\ln\\left(\\right)'}],disabled:true}
    },
    conditions: {
      screen: [[], ['2.718281','2.718282'], [1]],
      //  key: []
    }
  },
  artifact_3: {
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
      screen: {defaultText:[{textValue:'2' ,disabled:true}, {textValue:''}, {textValue:''}] },
      key:{defaultText:[{textValue:'\\left(\\right)^{-1}'},{textValue:'\\left(\\right)^{-1}'}],disabled:true}
    },
    conditions: {
      screen: [[], ['0.5'], ['2']],
      //        key: []
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
      screen: {defaultText:[{textValue:'0.3' ,disabled:true}, {textValue:''}, {textValue:''}] },
      key:{defaultText:[{textValue:'sin\\left(\\right)'},{textValue:'sin^{-1}\\left(\\right) '}],disabled:true}
    },
    conditions: {
      screen: [[], ['0.295520'], ['0.3']],
      //  key: []
    }
  },
  artifact_5: {
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
      screen: {defaultText:[{textValue:'0.4' ,disabled:true}, {textValue:''}, {textValue:''}] },
      key:{defaultText:[{textValue:'\\cos\\left(\\right)'},{textValue:'cos^{-1}\\left(\\right)'}],disabled:true}
    },
    conditions: {
      screen: [[], ['0.921060','0.921061'], ['0.4']],
      //  key: []
    }
  },
  /**
  artifact_6: {
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
        screen: {defaultText:[{textValue:'-2' ,disabled:true}, {textValue:''}, {textValue:''}] },
        key:{defaultText:[{textValue:`\\left(\\right)^2`},{textValue:`\\left(\\right)^{\\frac12}`}],disabled:true}
      },
      conditions: {
        screen: [[-2], [-4], [-2]],
      //  key: []
      }
    }, */
  artifact_6: {
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
      screen: {defaultText:[{textValue:'2' ,disabled:true}, {textValue:''}, {textValue:''}] },
      key:{defaultText:[{textValue:'\\ln\\left(\\right)'},{textValue:'\\exponentialE^{\\left(\\right)}'}],disabled:true}
    },
    conditions: {
      screen: [[], ['0.693147'], ['2']],
      // key: []
    }
  },
  artifact_7: {
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
      screen: {defaultText:[{textValue:'5' ,disabled:true}, {textValue:'',disabled:false}, {textValue:''}] ,disabled:false},
      key:{defaultText:[{textValue:'\\left(\\right)+2'},{textValue:'',disabled:false}],disabled:true}
    },
    conditions: {
      screen: [[], ['7'], ['5']],
      key: [[], ['left(right)-2']]
    }
  },

}
  
generateArtifact(def)