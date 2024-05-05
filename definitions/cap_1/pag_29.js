let def = {
  artifact_Text: {
    datadefault: [
      //[Bandera, numero de contenedores, numero de divs,[[array con el contenido de las condiciones ]].[[Respuestas Si o No]] ]
      [
        1,
        `Las curvas que va a dibujar no deben tener más máximos, o mínimos o puntos donde se alcanzan
            que los que indican las condiciones.`,
      ],
    ],
    changeContent: false,
  },

  artifact: {
    datadefault: [
      //[Bandera, numero de contenedores, numero de divs,[[array con el contenido de las condiciones ]].[[Respuestas Si o No]] ]
      [
        10,
        [
          'artifact_1',
          'artifact_2',
          'artifact_3',
          'artifact_4',
          'artifact_5',
          'artifact_6',
          'artifact_7',
          'artifact_8',
          'artifact_9',
        ],
      ],
    ],
    changeContent: true,
  },

  artifact_1: {
    changeContent: true,
    statementBottom: [
      '1 máx. rel., no absoluto alcanzado en 1 punto.',
      '1 Mín. abs. alcanzado en 2 puntos.',
      'ƒ  es conexa',
      'Dominio: R',
    ],

    conditions: {
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 1, false, false]],
      },
      max: {
        //xMod: true,
        //minTotal: "2",
        //localGlobal: ["x", "x"],
        noise: 0.15, // cuando se busca sin referencia en el eje lo mejor es reducir el noise por defecto en 0.18 para reducir el error
        localcount: 1,
      },
      min: {
        //xMod: true,
        //minTotal: "2",
        //localGlobal: ["x", "x"],
        noise: 0.15, // cuando se busca sin referencia en el eje lo mejor es reducir el noise por defecto en 0.18 para reducir el error
        global: 2, //si no tiene x se utiliza para indicar la cantidad que tenen que ser del mismo alto
      },

      //positiveNegative:  top: 3,{ intervals: [[false, [-3.1, -2.9]],[true, [0.9, 1.1]], [false, [2.9, 3.1]]] },
    },
  },
  artifact_2: {

    changeContent: true,
    statementBottom: [
      'Máx. abs. alcanzado en 1 punto.',
      '1 mín. abs. alcanzado en 2 puntos.',
      'ƒ es conexa',
      'Dominio: R',
    ],
    conditions: {
      dom: {
        range: [[[1, 8, 2], [4, 5, 6], 1, false, false]],
      },
      max: {
        //xMod: true,
        //minTotal: "2",
        //localGlobal: ["x", "x"],
        noise: 0.15, // cuando se busca sin referencia en el eje lo mejor es reducir el noise por defecto en 0.18 para reducir el error
        global: 1,
      },
      min: {
        //xMod: true,
        //minTotal: "2",
        //localGlobal: ["x", "x"],
        noise: 0.15, // cuando se busca sin referencia en el eje lo mejor es reducir el noise por defecto en 0.18 para reducir el error
        global: 2, //si no tiene x se utiliza para indicar la cantidad que tenen que ser del mismo alto
      },

      //positiveNegative:  top: 3,{ intervals: [[false, [-3.1, -2.9]],[true, [0.9, 1.1]], [false, [2.9, 3.1]]] },
    },
  },
  artifact_3: {
    changeContent: true,
    statementBottom: [
      'En todos los puntos alcanza máximo y mínimo.',
      'Dominio: R',
    ],
    conditions: {
      dom: {
        range: [[[1], [5], 3, false, false]],
      },
      parallels: {
        mode: true,
        type: 1,
      },

      //positiveNegative:  top: 3,{ intervals: [[false, [-3.1, -2.9]],[true, [0.9, 1.1]], [false, [2.9, 3.1]]] },
    },
  },
  artifact_4: {
    changeContent: true,
    statementBottom: [
      'Máx. abs. alcanzado en 1 punto.',
      'La curva está por encima del eje x.',
      'Dominio: R',
    ],
    conditions: {
      dom: {
        text: 'La curva tiende a la parte negativa',
        range: [[[1, 2], [4, 5], 3, false, false]],
      },
      max: {
        //xMod: true,
        //minTotal: "2",
        //localGlobal: ["x", "x"],
        noise: 0.15, // cuando se busca sin referencia en el eje lo mejor es reducir el noise por defecto en 0.18 para reducir el error
        global: 1,
      },
      positiveNegative: { intervals: [[true, [-4, 4]]] },
    },
  },
  artifact_5: {
    changeContent: true,
    statementBottom: ['Máx. abs. alcanzado en 2 puntos.', 'Dominio: R', 'ㅤ'],
    conditions: {
      dom: {
        range: [[[1, 8], [5, 6], 3, false, false]],
      },
      max: {
        //xMod: true,
        //minTotal: "2",
        //localGlobal: ["x", "x"],
        noise: 0.15, // cuando se busca sin referencia en el eje lo mejor es reducir el noise por defecto en 0.18 para reducir el error
        global: 2,
      },

      //positiveNegative:  top: 3,{ intervals: [[false, [-3.1, -2.9]],[true, [0.9, 1.1]], [false, [2.9, 3.1]]] },
    },
  },
  artifact_6: {
    changeContent: true,
    statementBottom: ['1 Máx. rel.no absoluto. alcanzado en 1 punto.', 'Dominio: R', 'ㅤ'],
    conditions: {
      dom: {
        range: [[[1, 8, 2], [4, 5, 6], 3, false, false]],
      },
      max: {
        //xMod: true,
        //minTotal: "2",
        //localGlobal: ["x", "x"],
        noise: 0.15, // cuando se busca sin referencia en el eje lo mejor es reducir el noise por defecto en 0.18 para reducir el error
        localcount: 1,
      },

      //positiveNegative:  top: 3,{ intervals: [[false, [-3.1, -2.9]],[true, [0.9, 1.1]], [false, [2.9, 3.1]]] },
    },
  },
  artifact_7: {
    changeContent: true,
    statementBottom: [
      'Máx. abs. alcanzado en 1 punto.',
      'Máx. rel. (y no abs.) alcanzado en 1 punto.',
      'Mín. abs. alcanzado en 1 punto.',
      'Mín. rel. (y no abs.) alcanzado en 1 punto.',
      'Dominio: R',
      'ㅤ',
    ],
    conditions: {
      dom: {
        range: [[[1], [5], 3, false, false]],
      },
      max: {
        //xMod: true,
        //minTotal: "2",
        //localGlobal: ["x", "x"],
        noise: 0.15, // cuando se busca sin referencia en el eje lo mejor es reducir el noise por defecto en 0.18 para reducir el error
        global: 1, //si no tiene x se utiliza para indicar la cantidad que tenen que ser del mismo alto
        //en caso contrario se crea el array que indica los x donde su altura es la misma [1,2]
        localcount: 1,
      },
      min: {
        //xMod: true,
        //minTotal: "2",
        //localGlobal: ["x", "x"],
        noise: 0.15, // cuando se busca sin referencia en el eje lo mejor es reducir el noise por defecto en 0.18 para reducir el error
        global: 1, //si no tiene x se utiliza para indicar la cantidad que tenen que ser del mismo alto
        //en caso contrario se crea el array que indica los x donde su altura es la misma [1,2]
        localcount: 1,
      },
    },
  },
  artifact_8: {
    changeContent: true,
    statementBottom: [
      'Máx. abs. alcanzado en 1 punto.',
      'Máx. rel. (y no abs.) alcanzado en 1 punto.',
      'Mín. abs. alcanzado en 1 punto.',
      'Mín. rel. (y no abs.) alcanzado en 1 punto.',
      'Máx. rel. < Mín. rel.',
      'Dominio: R',
    ],
    conditions: {
      dom: {
        range: [[[1], [5], 3, false, false]],
      },
      max: {
        //xMod: true,
        //minTotal: "2",
        //localGlobal: ["x", "x"],
        noise: 0.15, // cuando se busca sin referencia en el eje lo mejor es reducir el noise por defecto en 0.18 para reducir el error
        global: 1, //si no tiene x se utiliza para indicar la cantidad que tenen que ser del mismo alto
        //en caso contrario se crea el array que indica los x donde su altura es la misma [1,2]
        localcount: 1,
      },
      min: {
        //xMod: true,
        //minTotal: "2",
        //localGlobal: ["x", "x"],
        noise: 0.15, // cuando se busca sin referencia en el eje lo mejor es reducir el noise por defecto en 0.18 para reducir el error
        global: 1, //si no tiene x se utiliza para indicar la cantidad que tenen que ser del mismo alto
        //en caso contrario se crea el array que indica los x donde su altura es la misma [1,2]
        localcount: 1,
      },
      //relativeMaxMIn: { cond: true }, max locales mayor a los min locales
      relativeMaxMIn: { cond: false }, //max locales menor a los min locales
    },
  },
  artifact_9: {
    changeContent: true,
    statementBottom: [
      'Máx. abs. alcanzado en 1 punto.',
      'Máx. rel. (y no abs.) alcanzado en 1 punto.',
      'Mín. abs. alcanzado en 1 punto.',
      'Mín. rel. (y no abs.) alcanzado en 1 punto.',
      'Máx. rel. > Mín. rel.',
      'Dominio: R',
    ],
    conditions: {
      dom: {
        range: [[[1, 2, 8], [4, 5, 6], 3, false, false]],
      },
      max: {
        //xMod: true,
        //minTotal: "2",
        //localGlobal: ["x", "x"],
        noise: 0.15, // cuando se busca sin referencia en el eje lo mejor es reducir el noise por defecto en 0.18 para reducir el error
        global: 1, //si no tiene x se utiliza para indicar la cantidad que tenen que ser del mismo alto
        //en caso contrario se crea el array que indica los x donde su altura es la misma [1,2]
        localcount: 1,
      },
      min: {
        //xMod: true,
        //minTotal: "2",
        //localGlobal: ["x", "x"],
        noise: 0.15, // cuando se busca sin referencia en el eje lo mejor es reducir el noise por defecto en 0.18 para reducir el error
        global: 1, //si no tiene x se utiliza para indicar la cantidad que tenen que ser del mismo alto
        //en caso contrario se crea el array que indica los x donde su altura es la misma [1,2]
        localcount: 1,
      },
      //relativeMaxMIn: { cond: true }, max locales mayor a los min locales
      relativeMaxMIn: { cond: true }, //max locales menor a los min locales
    },
  },
};

let defBoards = {
  board_0: {
    style: {
      axis: [false, true, true],
      valueAxis: {
        yd: [
          [0, 0],
          [0, 1],
        ],
        xd: [
          [0, 0],
          [1, 0],
        ],
      },
      grid: false,
      boundingbox: [-4, 4, 4, -4],
      maxWidth: 350,
      maxHeight: 350,
    },
  },
};

generator();
defBoardDefault();
main();
