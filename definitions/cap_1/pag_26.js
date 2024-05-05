
const defBoards = {
  board_0: {
    style: {
      boundingbox: [-4, 4, 4, -4],
      axis: [false, true, true],
      grid: false,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      maxHeight: 300,
      maxWidth: 300,
    },
  },
};

const def = {
  artifact_1: {
    statementBottom: ['ƒ es ac. sup. en R⁺,', 'no ac. inf. en R⁺,', 'en (–1,0) es ac. inf.', 'y no es ac. sup.', 'Curva Conexa'],
    statementBottomGrid: [true, true, true, true],
    buttonsActive: {
      coteTop: true,
      coteDown: true,
      domKey: true,
    },
    conditions: {

      axieX: [[-1, '-1']],
      modCoteTop: { interval: [0, 5] }, //acotado superiormente sin altura definida; el 1 indica que la cota es positiva
      modCoteBottom: { interval: [-5, 0] },

      dom: {
        text: 'El ángulo del infinito.',
        range: [[[2, 3], [6, 7], 1, false, false]],
      },

      cotes: {
        text: 'verifica que no sea menor o mayor a las cotas',
        xMod: true,
        modCoteTop: true,
        modCoteBottom: true,

        top: {
          dom: [0, 4],
          rang: 1,
        },
        bottom: {
          dom: ['-1', 0],
          rang: -1
        }
      }
    }
  },

  artifact_2: {
    statementBottom: ['ƒ es ac. inf. en R⁺,', 'no ac. sup. en R⁺,', 'en (-3,0) es ac. sup.', 'y no es ac. inf.', 'Curva Conexa'],
    statementBottomGrid: [true, true, true, true],
    buttonsActive: {
      coteTop: true,
      coteDown: true,
      domKey: true,
    },

    conditions: {
      axieX: [[-1, '-3']],
      modCoteTop: { interval: [0, 5] }, //acotado superiormente sin altura definida; el 1 indica que la cota es positiva
      modCoteBottom: { interval: [-5, 0] },


      dom: {
        text: 'El ángulo del infinito.',
        range: [[[7, 8], [3, 4], 1, false, false]],
      },

      cotes: {
        text: 'verifica que no sea menor o mayor a las cotas',
        modCoteTop: true,
        modCoteBottom: true,
        top: {
          dom: [-4, 0],
          rang: 1
        },

        bottom: {
          dom: [0, 4],
          rang: -1
        }
      }
    }
  },

  artifact_3: {    
    statementBottom: ['-2 < ƒ(x) < 2, si x ∈ (-2,2)', 'ƒ no ac. ni sup. ni inf. en R','Curva Conexa'],
    statementBottomGrid: [true, true],

    buttonsActive: {
      domKey: true,
      rangKey: true,
    },

    conditions: {
      axieX: [[-1, '-2'], [1, '2']],
      axieY: [[-1, '-2'], [1, '2']],

      dom: {
        range: [[[2, 3, 7, 8], [3, 4, 6, 7], 1, false, false]]
      },

      eRange: {
        text: 'La curva debe ser mayor que -2 y menor a 2 en el dominio (-2,2).',
        xMod: true,
        yMod: true,
        cotas: [{//los intervalos a validar van dentro de una lista de de objetos 
          top: {
            dom: ['-2', '2'],//intervalo
            rang: '2',//punto del eje y donde está acotado
          },
          bottom: {// acotada inferiormente
            dom: ['-2', '2'],//intervalo
            rang: '-2',//punto del eje y donde está acotado
          },
        }],
      }

    },
  },  

  artifact_4: {
    statementBottom: ['-2 < ƒ(x) < 2, si  x ∈ (-2,2)', 'ƒ(x) > 3, si x < -3','Curva Conexa'],
    statementBottomGrid: [true, true],

    buttonsActive: {

      domKey: true,
      rangKey: true,
    },


    conditions: {
      axieX: [[-1, '-3'], [-1, '-2'], [1, '2']],
      axieY: [[-1, '-2'], [1, '2'], [1, '3']],

      dom: {
        range: [[[2, 3], [3, 4, 5, 6, 7], 1, false, false]]
      },

      eRange: {
        text: 'verifica que no sea menor o mayor a las cotas',
        xMod: true,
        yMod: true,
        cotas: [{//los intervalos a validar van dentro de una lista de de objetos 

          bottom: {// acotada inferiormente
            dom: [-4, '-3'],//intervalo
            rang: '3',//punto del eje y donde está acotado
          },
        },//end
        {//los intervalos a validar van dentro de una lista de de objetos 
          top: {
            dom: ['-2', '2'],//intervalo
            rang: '2',//punto del eje y donde está acotado
          },
          bottom: {// acotada inferiormente
            dom: ['-2', '2'],//intervalo
            rang: '-2',//punto del eje y donde está acotado
          },
        }

        ],
      }


    }
  }, 

  artifact_5: {
    statementBottom: ['-2 < ƒ(x) < 2 para x ∈ R','Curva Conexa'],
    statementBottomGrid: [true, true],

    buttonsActive: {
      rangKey: true,
    },

    conditions: {
      axieY: [[-1, '-2'], [1, '2']],

      dom: {
        text: 'El ángulo del infinito.',
        range: [[[1], [5], 1, false, false]]
      },

      eRange: {
        text: 'La curva no puede ser mayor a 2 ni menor a -2.',
        yMod: true,
        cotas: [{//los intervalos a validar van dentro de una lista de de objetos 
          top: { // acotada superiormente
            dom: [-4, 4],//intervalo
            rang: '2',//punto del eje y donde está acotado 
          },
          bottom: {// acotada inferiormente
            dom: [-4, 4],//intervalo
            rang: '-2',//punto del eje y donde está acotado
          },
        }],
      }

    }

  },

  artifact_6: {
    statementBottom: ['ƒ(x) ≥ 0, si x ∈ R - R⁺', 'ƒ(x) < 0, si x ∈ R⁺','Curva Conexa'],
    statementBottomGrid: [true, true],
    buttonsActive: {
      rangKey: true,
    },

    conditions: {
         

      dom: {
        text: 'El dominio o el angulo del infinito.',
        //range: [[[1, 2, 3], 0, 3, false, false], [0, [5, 6], 2, true, false]],
        range: [[[1,2], [5,6], 1, false, false]]
      },

      eRange: {
        text: 'verifica que no sea menor o mayor a las cotas',
        yMod: true,
        cotas: [{
          top: {
            dom: [0, 4],
            topNoise: 0,
            rang: 0,
          },

          bottom: {
            dom: [-4, 0],
            bottomNoise: -0.2,
            rang: 0,
          }

        }

        ],
      },
    }

  },

  artifact_7: {
      
    statementBottom: ['ƒ es ac. inf. por 3 en (-∞, 3),', 'ƒ es ac. sup. por 3 en (3, ∞)', 'Curva Conexa'],
    statementBottomGrid: [true, true],
    buttonsActive: {
      domKey: true,
      rangKey: true,
    },

    conditions: {
      axieX: [[1, '3']],
      axieY: [[1, '3']],

      dom: {
        range: [[[1, 2, 3], [5, 6], 1, false, false]]
      },

      eRange: {
        text: 'Verifica que no sea menor o mayor a las alturas',
        xMod: true,
        yMod: true,
        cotas: [{//los intervalos a validar van dentro de una lista de de objetos 
          top: { // acotada superiormente
            dom: ['3', 4],//intervalo
            topNoise: 0.2,
            rang: '3',//punto del eje y donde está acotado 
          },
          bottom: {// acotada inferiormente
            dom: [-4, '3'],//intervalo
            bottomNoise: -0.2,
            //domPlus: [-1, 1],
            rang: '3',//punto del eje y donde está acotado
          },
        }],
      }
    }

  },

  artifact_8: {
    statementBottom: ['ƒ no es ac. inf. en [0,1]', 'ƒ no es ac. sup. en [0,1]','Curva Conexa'],
    statementBottomGrid: [true, true],

    buttonsActive: {
      domKey: true,
    },

    conditions: {
      axieX: [[1, '1']],

      dom: {
        text: 'El ángulo del infinito',
        range: [[[3, 7], [3, 7], 1, false, false]],
      }

    }

  },

  artifact_9: {
   
    statementBottom: ['Dominio (-∞,1)','ƒ no es ac. sup. en [0,1]', '0 es una cota inferior de ƒ', 'Curva Conexa'],
    statementBottomGrid: [true, true, true],
    buttonsActive: {

      domKey: true,
      rangKey: true,
    },

    conditions: {
      axieX: [[1, '1']],

      dom: {
        xMod: true,
        range: [[[1, 2,],[3], 1, false, true]]

      },

      eRange: {
        text: 'verifica que no sea menor o mayor a las cotas',
        xMod: true,
        yMod: true,
        cotas: [{//los intervalos a validar van dentro de una lista de de objetos 
          bottom: {// acotada inferiormente
            dom: [-4, '1'],//intervalo
            bottomNoise: -0.2,
            //domPlus: [-1, 1],
            rang: '0',//punto del eje y donde está acotado
          },
        },
            
        ],
      },

    }
  }
};

//__________________________________________________________________________________________________________________

window.onload = main();