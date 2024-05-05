//comentario
const def = {
  artifact_1: {
    interval: '(1/4,1/2)',
    conditions: {
      valRepre: [
        '1/4<x<1/2',
        '1/2>x>1/4',
        '0.25<x<0.5',
        '0.5>x>0.25',
        '0,25<x<0,5',
        '0,5>x>0,25',
      ],
      board: [
        {
          pares: [['1/4', '1/2']],
          points: [
            ['1/4', true],
            ['1/2', true],
          ],
        },
        {
          pares: [['0.25', '0.5']],
          points: [
            ['0.25', true],
            ['0.5', true],
          ],
        },
        {
          pares: [['0,25', '0,5']],
          points: [
            ['0,25', true],
            ['0,5', true],
          ],
        },
      ],
    },
  },
  artifact_2: {
    interval: '(−1/2,−1/4)',
    conditions: {
      valRepre: [
        '−1/2<x<−1/4',
        '−1/4>x>−1/2',
        '−0.5<x<−0.25',
        '−0.25>x>−0.5',
        '−0,5<x<−0,25',
        '−0,25>x>−0,5',
      ],
      board: [
        {
          pares: [['−1/2', '−1/4']],
          points: [
            ['−1/2', true],
            ['−1/4', true],
          ],
        },
        {
          pares: [['−0.5', '−0.25']],
          points: [
            ['−0.5', true],
            ['−0.25', true],
          ],
        },
        {
          pares: [['−0,5', '−0,25']],
          points: [
            ['−0,5', true],
            ['−0,25', true],
          ],
        },
      ],
    },
  },
  artifact_3: {
    interval: '(−2,−1]',
    conditions: {
      valRepre: ['−2<x≤−1', '−1≥x>−2'],
      board: [
        {
          pares: [['−2', '−1']],
          points: [
            ['−2', true],
            ['−1', false],
          ],
        },
      ],
    },
  },
  artifact_4: {
    conditions: {
      valInterval: ['(−3/2,−1/2)∪[0,0]','(−3/2,−1/2)∪{0}'],
                 
      valRepre: ['−3/2<x<−1/2ox=0', '−1/2>x>−3/2ox=0', '−3/2<x<−1/2o0≤x≤0'],
    },
    preDefPar: [
      [
        [2, 0, 0, '-3/2'],
        [4, 0, 0, '-1/2'],
      ],
    ],
    preDefPoint: [[6, 0, 0, '0']],
  },
  artifact_5: {
    conditions: {
      //-3≤x<-1 o x=0
      valInterval: ['[−3,−1)∪[0,0]', '[−3,−1)∪{0}'],
      valRepre: ['−3≤x<−1ox=0', '−1≥x>−3ox=0', '−3≤x<−1o0≤x≤0','−1>x≥−3o0≥x≥0'],
    },
    preDefPar: [
      [
        [2, 0, 1, '-3'],
        [4, 0, 0, '-1'],
      ],
    ],
    preDefPoint: [[6, 0, 0, '0']],
  },
  artifact_6: {
    conditions: {
      valInterval: ['{−1,1}', '[−1,−1]∪[1,1]','{-1}∪{1}'],
      valRepre: ['−1≤x≤−1o1≤x≤1', '−1≥x≥−1o1≥x≥1', 'x=−1ox=1','x=1ox=−1'],
    },
    preDefPoint: [
      [3, 0, 0, '-1'],
      [4, 0, 0, '1'],
    ],
  },
  artifact_7: {
    representation: '1<x<2',
    conditions: {
      valInterval: ['(1,2)'],
      board: [
        {
          pares: [['1', '2']],
          points: [
            ['1', true],
            ['2', true],
          ],
        },
      ],
    },
  },
  artifact_8: {
    representation: 'x> 1 ⠀ y ⠀ x<2',
    conditions: {
      valInterval: ['(−∞,2)∩(1,∞)', '(1,2)'],
      board: [
        {
          pares: [
            ['-∞', '2'],
            ['1', '+∞'],
          ],
          points: [
            ['1', true],
            ['2', true],
          ],
        },
        {
          pares: [['1', '2']],
          points: [
            ['1', true],
            ['2', true],
          ],
        },
      ],
    },
  },
  artifact_9: {
    representation: 'x>1 ⠀ o ⠀ x<2',
    conditions: {
      valInterval: ['(−∞,∞)', '(−∞,2)∪(1,∞)','r'],
      board: [
        {
          pares: [
            ['-∞', '2'],
            ['1', '+∞'],
          ],
          points: [
            ['1', true],
            ['2', true],
          ],
        },
        {
          pares: [['-∞', '+∞']],
        },
      ],
    },
  },
  artifact_10: {
    representation: '1<x≤2',
    conditions: {
      valInterval: ['(1,2]'],
      board: [
        {
          pares: [['1', '2']],
          points: [
            ['1', true],
            ['2', false],
          ],
        },
      ],
    },
  },
  artifact_11: {
    representation: '1<x<2 ⠀ o ⠀ x=3',
    conditions: {
      valInterval: ['(1,2)∪[3,3]','(1,2)∪{3}'],
      board: [
        {
          pares: [['1', '2']],
          points: [
            ['1', true],
            ['2', true],
            ['3', false],
          ],
        },
      ],
    },
  },
};

//Funcion que inicializa los elementos del DOM con el template y el Fragmento
function initMain() {
  generation(def);
}

//Funcion para iniciarlo cuando se cargue la pagina
window.onload = initMain();
