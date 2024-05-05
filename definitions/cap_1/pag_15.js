

let def = {
  artifact_Text: {
    datadefault: [
      //[Bandera, numero de contenedores, numero de divs,[[array con el contenido de las condiciones ]].[[Respuestas Si o No]] ] 
      [1, 'Para cada expresión simbólica, si la expresión se cumple para la curva del comienzo de la columna escriba sí en el recuadrito adyacente. En caso contrario escriba no. (Se supone que todas las curvas de esta página tienen por nombre f )'],
    ],
    changeContent: false
  },
  artifact_1: {
    datadefault: [
      //[Bandera, numero de contenedores, numero de divs,[[array con el contenido de las condiciones ]].[[Respuestas Si o No]] ] 
      [9, 1, 6,
        [['board_1', 'f(a) > f(b)', 'f(a) < f(b)', 'f(a) ≤ f(b)', 'f(a) ≥ f(b)', 'f(a) = f(b)']],
        true,
        {
          conditions: [[['si','sí'], ['no'], ['no'], ['si','sí'], ['no']]],
          nullLittle:true,
        }
      ],

    ],
    changeContent: true
  },
  artifact_2: {
    datadefault: [
      [9, 1, 6,
        [
          ['board_2', 'f(a) > f(b)', 'f(a) < f(b)', 'f(a) ≤ f(b)', 'f(a) ≥ f(b)', 'f(a) = f(b)'],
        ],
        true,
        {
          conditions: [[['no'], ['no'], ['si','sí'], ['si','sí'], ['si','sí']]],
          nullLittle:true,
        }

      ],
    ],
    changeContent: true
  },
  artifact_3: {
    datadefault: [
      [9, 1, 6,
        [
          ['board_3', 'f(a) > f(b)', 'f(a) < f(b)', 'f(a) ≤ f(b)', 'f(a) ≥ f(b)', 'f(a) = f(b)'],

        ],
        true,
        {
          conditions: [[['si','sí'], ['no'], ['no'], ['si','sí'], ['no']]],
          nullLittle:true,
        }

      ],
    ],
    changeContent: true
  },
  artifact_4: {
    datadefault: [
      [9, 1, 6,
        [
          ['board_4', 'f(a) > f(b)', 'f(a) < f(b)', 'f(a) ≤ f(b)', 'f(a) ≥ f(b)', 'f(a) = f(b)'],
        ],
        true,
        {
          conditions: [[['no'], ['si','sí'], ['si','sí'], ['no'], ['no']]],
          nullLittle:true,
        }
      ],
    ],
    changeContent: true
  },
  artifact_5: {
    datadefault: [
      [9, 1, 6,
        [
          ['board_5', 'f(a) > f(b)', 'f(a) < f(b)', 'f(a) ≤ f(b)', 'f(a) ≥ f(b)', 'f(a) = f(b)']
        ],
        true,
        {
          conditions: [[['si','sí'], ['no'], ['no'], ['si','sí'], ['no']]],
          nullLittle:true,
        }

      ],
    ],
    changeContent: true
  },
  artifact_6: {
    datadefault: [
      [9, 1, 11,
        [
          ['board_6', 'f(b) > f(a)', 'f(a) > f(b)', 'f(a) > aㅤ', 'f(a) > bㅤ', 'f(b) > aㅤ', 'f(b) > bㅤ', 'f(a) = aㅤ', 'f(b) = bㅤ', 'f(a) = bㅤ', 'f(b) = aㅤ'],
        ],
        true,
        {
          conditions: [[['si','sí'], ['no'], ['si','sí'], ['no'], ['si','sí'], ['no'], ['no'], ['no'], ['no'], ['no']]],
          nullLittle:true,
        }

      ],
    ],
    changeContent: true
  },
  artifact_7: {
    datadefault: [
      [9, 1, 11,
        [
          ['board_7', 'f(b) > f(a)', 'f(a) > f(b)', 'f(a) > aㅤ', 'f(a) > bㅤ', 'f(b) > aㅤ', 'f(b) > bㅤ', 'f(a) = aㅤ', 'f(b) = bㅤ', 'f(a) = bㅤ', 'f(b) = aㅤ'],
        ],
        true,
        {
          conditions: [[['no'], ['si','sí'], ['si','sí'], ['no'], ['no'], ['no'], ['no'], ['no'], ['si','sí'], ['no']]],
          nullLittle:true,
        }

      ],
    ],
    changeContent: true
  },
  artifact_8: {
    datadefault: [
      [9, 1, 11,
        [
          ['board_8', 'f(b) > f(a)', 'f(a) > f(b)', 'f(a) > aㅤ', 'f(a) > bㅤ', 'f(b) > aㅤ', 'f(b) > bㅤ', 'f(a) = aㅤ', 'f(b) = bㅤ', 'f(a) = bㅤ', 'f(b) = aㅤ'],
        ],
        true,
        {
          conditions: [[['no'], ['no'], ['si','sí'], ['no'], ['si','sí'], ['no'], ['no'], ['no'], ['no'], ['no']]],
          nullLittle:true,
        }
      ],
    ],
    changeContent: true
  },

}

let defBoards = {
  board_1: {
    style: {
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      grid: false,
      boundingbox: [-0.5, 2.3, 4.3, -0.5],
      maxWidth: 350,
      maxHeight: 250,
    },
    lines: [
      [[[0.5, 0, false, 'a'], [0.5, 0]], 0],
      [[[2.5, 0, false, 'b'], [2.5, 0],], 0]
    ],
    curves: [
      [[[-0.2, 2], [0, 2], [2.2, 1.4], [3, 0.6], [3.1, 0.4]]]
    ],
    points: [
      [0.5, 0, true], [2.5, 0, true]

    ],
  },
  board_2: {
    style: {
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      grid: false,
      boundingbox: [-1.5, 5, 5, -1.5],
      maxWidth: 310,
      maxHeight: 250,
    },
    lines: [
      [[[1, 0, false, 'a'], [1, 0]], 0],
      [[[3, 0, false, 'b'], [3, 0],], 0]
    ],

    curves: [
      [[[0.25, 3], [1, 0, true], [2, -1], [3, 0, true], [3.80, 3]]]
    ],
  },
  board_3: {
    style: {
      axis: [false, true, true],
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      grid: false,
      boundingbox: [-1.5, 5, 5, -1.5],
      maxWidth: 310,
      maxHeight: 250,
    },
    lines: [
      [[[1, 0, false, 'a'], [1, 0]], 0],
      [[[3, 0, false, 'b'], [3, 0],], 0]
    ],
    curves: [
      [[[0.25, 2], [0.5, 1], [1, 0], [1.5, -0.5], [2, -0.7], [3, -0.8], [3.5, -0.8]]],

    ],
    points: [
      [1, 0, true], [3, 0, true]

    ],
  },
  board_4: {

    style: {
      axis: [false, true, true],
      grid: false,
      maxWidth: 310,
      maxHeight: 250,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      boundingbox: [-1.5, 5, 5, -1.5],
    },
    lines: [
      [[[1, 0, false, 'a'], [1, 0]], 0],
      [[[3, 0, false, 'b'], [3, 0],], 0]
    ],

    curves: [

      [[[0.5, -0.8], [1, -0.8], [1.5, -0.8], [2, -0.7], [3, 0], [4, 2]]],
    ],
    points: [
      [1, 0, true], [3, 0, true]

    ],
  },
  board_5: {

    style: {
      axis: [false, true, true],
      grid: false,
      maxWidth: 310,
      maxHeight: 250,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      boundingbox: [-1.5, 5, 5, -1.5],
    },
    lines: [
      [[[1, 0, false, 'a'], [1, 0]], 0],
      [[[3, 0, false, 'b'], [3, 0],], 0]
    ],
    curves: [
      [[[-0.25, 4], [3.3, -1]]],
    ],
    points: [
      [1, 0, true], [3, 0, true]

    ],

  },
  board_6: {

    style: {
      axis: [false, true, true],
      grid: false,
      maxWidth: 310,
      maxHeight: 300,

      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      boundingbox: [-4, 4, 4, -4],
    },
    lines: [
      [[[-1, 0, false, 'a'], [-1, 0]], 0],
      [[[3, 0, false, 'b'], [3, 0],], 0],
      [[[0, -1, false, 'a'], [0, -1]], 0],
      [[[0, 3, false, 'b'], [0, 3],], 0],

      [[[-1, -3.5, false, ''], [-1, 3.5],], 2],
      [[[3, -3.5, false, ''], [3, 3.5],], 2],
      [[[4, 3, false, ''], [-3, 3],], 2],
      [[[4, -1, false, ''], [-3, -1],], 2],

      [[[-2, 1], [4, 2.5]], 0],

    ],

    points: [
      [-1, 0], [3, 0], [0, -1], [0, 3]

    ],

  },
  board_7: {

    style: {
      axis: [false, true, true],
      grid: false,
      maxWidth: 310,
      maxHeight: 300,

      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      boundingbox: [-4, 4, 4, -4],
    },
    lines: [
      [[[-1, 0, false, 'a'], [-1, 0]], 0],
      [[[3, 0, false, 'b'], [3, 0],], 0],
      [[[0, -1, false, 'a'], [0, -1]], 0],
      [[[0, 3, false, 'b'], [0, 3],], 0],

      [[[-1, -3.5, false, ''], [-1, 3.5],], 2],
      [[[3, -3.5, false, ''], [3, 3.5],], 2],
      [[[4, 3, false, ''], [-3, 3],], 2],
      [[[4, -1, false, ''], [-3, -1],], 2],




    ],
    curves: [
      [[[-1.5, 3.6], [-1, 3], [-0.5, 1.2], [0, 0], [0.2, -0.2], [3, -1.5], [3.2, -1.5]]],
    ],
    points: [
      [-1, 0], [3, 0], [0, -1], [0, 3]

    ],
  },
  board_8: {
    style: {
      axis: [false, true, true],
      grid: false,
      maxWidth: 310,
      maxHeight: 300,

      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]],
      },
      boundingbox: [-4, 4, 4, -4],
    },
    lines: [
      [[[-1, 0, false, 'a'], [-1, 0]], 0],
      [[[3, 0, false, 'b'], [3, 0],], 0],
      [[[0, -1, false, 'a'], [0, -1]], 0],
      [[[0, 3, false, 'b'], [0, 3],], 0],

      [[[-1, -3.5, false, ''], [-1, 3.5],], 2],
      [[[3, -3.5, false, ''], [3, 3.5],], 2],
      [[[4, 3, false, ''], [-3, 3],], 2],
      [[[4, -1, false, ''], [-3, -1],], 2],

    ],
    curves: [
      [[[-1, 0], [-0.4, 2.5], [0, 3], [0.4, 3], [1, 2.4], [3, 0]]],
    ],
    points: [
      [-1, 0], [3, 0], [0, -1], [0, 3]

    ],
  },


};






generator();
defBoardDefault();

