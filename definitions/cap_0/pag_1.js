//Definir cantidad de artifactos
const def = {
  //True = Punto abierto, False = Punto Cerrado
  artifact_example_1: {
    interval: '[2,3]',
    representation: '2≤x≤3',
    preDefPar: [
      [
        [2, 0, true, '2'],
        [5, 0, true, '3'],
      ],
    ],
    preDefPoint: [[-2, 0, 0, '']],
  },
  artifact_1: {    
    interval: '(2,3)',
    conditions: {
      valRepre: ['2<x<3', '3>x>2'],
      board: [
        {
          pares: [['2', '3']],
          points: [
            ['2', true],
            ['3', true],
          ],
        },
      ],
    },
  },
  artifact_2: {
    interval: '(−∞,2)',
    conditions: {
      valRepre: ['−∞<x<2', '2>x>−∞', 'x<2', '2>x'], board: [
        {
          pares: [['-∞', '2']],
          points: [['2', true]],
        },
      ],
    },
  },
  artifact_3: {
    representation: 'x≥2',
    conditions: {
      valInterval: ['[2,∞)'],
      board: [
        {
          pares: [['2', '+∞']],
          points: [['2', false]],
        },
      ],
    },
  },
  artifact_4: {
    interval: '[1,1]',
    conditions: {
      valRepre: ['x=1', '1≤x≤1', '1≥x≥1'],
      board: [
        {
          points: [['1', false]],
        },
      ],
    },
  },
  artifact_5: {
    interval: '(1,1)',
    conditions: {
      valRepre: ['∅', '1<x<1', '1>x>1'],
      board: [
        {
          points: [['1', true]],
        },
      ],
    },
  },
  artifact_6: {
    interval: '(−2,2]',
    conditions: {
      valRepre: ['−2<x≤2', '2≥x>−2'],
      board: [
        {
          pares: [['−2', '2']],
          points: [
            ['−2', true],
            ['2', false],
          ],
        },
      ],
    },
  },
  artifact_7: {
    representation: '−2<x<2',
    conditions: {
      valInterval: ['(−2,2)'],
      board: [
        {
          pares: [['−2', '2']],
          points: [
            ['−2', true],
            ['2', true],
          ],
        },
      ],
    },
  },
  artifact_8: {
    representation: 'R',
    conditions: {
      valInterval: ['(−∞,∞)', 'r', '(−∞,∞)'],
      board: [
        {
          pares: [['-∞', '+∞']],
        },
      ],
    },
  },
  //New artifact to test
  artifact_9: {
    representation: '-2<x<2',
    conditions: {
      valInterval: ['(-2,2)'],
      board: [
        {
          pares: [['-2', '2']],
          points: [
            ['-2', true],
            ['2', true],
          ],
        },
      ],
    },
  },
}
const artifact = def.artifact_2;
//Funcion que inicializa los elementos del DOM con el template y el Fragmento
function initMain() {
  generation(def);
}

//Funcion para iniciarlo cuando se cargue la pagina
window.onload = initMain();
