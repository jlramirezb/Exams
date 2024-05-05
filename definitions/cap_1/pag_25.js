//__________________________________________________________________________________________________________________________
//:::::::::::::::::::::::::::::::::::::::::::::::::::|| Definición de los Boards ||:::::::::::::::::::::::::::::::::::::
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
//____________________________________________________________________________________________________________________________


//_____________________________________________________________________________________________________________________________

//::::::::::::::::::::::::::::::::::::::::::::::::|| Definición de los Artefactos ||:::::::::::::::::::::::::::::::::::::::::

const def = {
  artifact_1: {
    statementBottom: ['ƒ es acotada'], //enunciado

    buttonsActive: {    //Botones a utilizar
      coteTop: true,
      coteDown: true,
    },

    conditions: {

      modCoteTop: { interval: [0, 5] }, //acotado superiormente sin altura definida; el 1 indica que la cota es positiva
      modCoteBottom: { interval: [-5, 0] }, //acotado inferiormente sin altura definida; el -1 indica que la cota es negativa

      dom: {
        text: 'El ángulo del infinito.',
        range: [[[1], [5], 3, false, false]]
      },


      cotes: {
        text: 'La curva debe estar entre las cotas.',
        modCoteTop: true, //bandera que indica si está acotado superiormente sin definición del altura
        modCoteBottom: true, //bandera que indica si está acotado inferiormente sin definición de altura

        top: {
          rang: 1,
        },
        bottom: {
          rang: -1,
        },

      },
    }

  },

  artifact_2: {
    statementBottom: ['ƒ no es acotada'],

    conditions: {

      dom: {
        text: 'Los infinitos tienen un ángulo recto y la curva no puede ser acotada.',
        range: [[[2, 7, 8], [4, 6, 7], 3, false, false]], //curva con infinito apuntando a sectores del plano indicado en los arrays
      }

    }
  },

  artifact_3: {
    statementBottom: ['ƒ es acotada superiormente,', 'ƒ no es acotada inferiormente'],

    buttonsActive: {
      coteTop: true,
    },

    conditions: {
      modCoteTop:  { interval: [0, 5] } ,

      dom: {
        text: 'El ángulo del infinito.',
        range: [[[1, 7, 8], [5, 6], 3, false, false]],
      },


      cotes: {
        text: 'La curva no debe sobrepasar la cota.',
        modCoteTop: true,

        top: {
          rang: 1,
        }
      }

    }
  },

  artifact_4: {
    statementBottom: ['ƒ es acotada inferiormente,', 'ƒ no es acotada superiormente'],

    buttonsActive: {
      coteDown: true,
    },

    conditions: {

      modCoteBottom: { interval: [-5, 0] },

      dom: {
        text: 'El ángulo del infinito.',
        range: [[[1, 2, 3], [3, 4, 5], 3, false, false]],
      },

      cotes: {
        text: 'La curva no debe ser inferior a la cota.',
        modCoteBottom: true,

        bottom: {
          rang: -1
        },
      }
    }
  },

  artifact_5: {
    statementBottom: ['ƒ es ac. sup. en R⁺,', 'no ac. inf. en R⁻'],

    buttonsActive: {
      coteTop: true,
    },

    conditions: {
      modCoteTop:  { interval: [0, 5] },

      dom: {
        text: 'El ángulo del infinito.',
        range: [[[7, 8], [5, 6], 3, false, false]],
      },


      cotes: {
        text: 'La curva no debe sobrepasar la cota.',
        modCoteTop: true,

        top: {
          dom: [0, 4],
          rang: 1,
        }
      }
    }
  },

  artifact_6: {
    statementBottom: ['ƒ no es ac. sup. en R⁺,', 'ac. inf. en R⁻'],



    buttonsActive: {
      coteDown: true,
    },

    conditions: {
      modCoteBottom: { interval: [-5, 0] },

      dom: {
        text: 'El ángulo del infinito.',
        range: [[[1, 2], [3, 4], 3, false, false]],
      },
      /* cotes: {
             text: "La curva no debe ser inferior a la cota.",
             modCoteBottom: true,
             bottom: {
                 dom: [-4, 0],
                 rang: -1
             }
         } */
      cotes: {
        text: 'La curva no debe ser inferior a las cotas establecidas.',

        modCoteBottom: true,

        bottom: {
          dom: [-4, 0],
          rang: -1
        }
      }
    }
  },

  artifact_7: {
    statementBottom: [, 'ƒ ac. sup. en R⁺,', 'ac. inf. en R⁻',],

    buttonsActive: {
      coteTop: true,
      coteDown: true,
    },

    conditions: {
      modCoteTop:{ interval: [0, 5] },
      modCoteBottom: { interval: [-5, 0] },

      dom: {
        text: 'El ángulo del infinito.',
        range: [[[1, 2, 3], [5, 6], 3, false, false]],
      },

      cotes: {
        text: 'La curva no debe ser inferior ni superior a las cotas establecidas.',
        modCoteTop: true,
        modCoteBottom: true,

        top: {
          dom: [0, 4],
          rang: 1
        },

        bottom: {
          dom: [-4, 0],
          rang: -1
        }
      }
    }
  },

  artifact_8: {
    statementBottom: ['ƒ es ac. sup. en R⁺,', 'no ac. inf. en R⁺,', 'ƒ es ac. sup. en [-1,0],', 'no ac. inf. en [-1,0]'],
    buttonsActive: {
      coteTop: true,
      domKey: true,
    },

    conditions: {
      axieX: [[-1, '-1']], //el "-1" indica la cadena a validar como correcta en el input del eje x
      modCoteTop:{ interval: [0, 5] },

      dom: {
        text: 'El ángulo del infinito.',
        range: [[[7], [7, 6], 3, false, false]]
      },

      cotes: {
        text: 'La curva no debe ser superior a las cotas establecidas.',
        modCoteTop: true,
        xMod: true, // indica que debe tomar el punto que el usuario coloca sobre el eje como una referencia al punto indicado

        top: {

          dom: ['-1', 4], // el "-1" es la posición que indica el usuario con el punto que colocó y el 4 es la coordenada en el plano por defecto
          rang: 1
        }
      }

    }
  },

  artifact_9: {
    statementBottom: ['ƒ es ac. inf. en R⁺', 'no ac. sup. en R⁺,', 'en (-2,0) es ac. inf. y no ac. sup.'],
    buttonsActive: {
      coteDown: true,
      domKey: true,
    },

    conditions: {
      axieX: [[-1, '-2']],
      modCoteBottom: { interval: [-5, 0] },

      dom: {
        text: 'El ángulo del infinito.',
        range: [[[2, 3], [4, 3], 3, false, false]]
      },

      cotes: {
        text: 'La curva no debe ser inferior a las cotas establecidas.',
        xMod: true,
        modCoteBottom: true,

        bottom: {
          dom: ['-2', 4],
          rang: -1
        }
      }

    }
  }

};
//_______________________________________________________________________________________________________________-

window.onload = main();