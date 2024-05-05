const def = {
  artifact_1: {

    conditions: {
      valInterval: ['{u,c,v}', '[u,u]∪[c,c]∪[v,v]'],
      valRepre: ['x=uox=cox=v', 'u≤x≤uoc≤x≤cov≤x≤v', 'u≥x≥uoc≥x≥cov≥x≥v', '{u,c,v}'],
    },
    preDefPoint: [[2.5, 0, 0, 'U'], [3.5, 0, 0, 'C'], [4.5, 0, 0, 'V']]
  },
  artifact_2: {
    representation: 'a≤x≤b',
    conditions: {
      valInterval: ['[a,b]'],
      board: [{
        pares: [['a', 'b']],
        points: [['a', false], ['b', false]],
      }],
    },

  },
  artifact_3: {
    representation: 'b≤x≤a',
    conditions: {
      valInterval: ['[b,a]'],
      board: [{
        pares: [['b', 'a']],
        points: [['b', false], ['a', false]],
      }],
    },

  },
  artifact_4: {
    representation: '0<x≤2 o −2<x<−1',
    conditions: {
      valInterval: ['(−2,−1)∪(0,2]','(0,2]∪(−2,−1)'],
      board: [{
        pares: [['−2', '−1'], ['0', '2']],
        points: [['−2', true], ['−1', true], ['0', true], ['2', false]],
      }],
    },

  },
  artifact_5: {
    representation: '∅∩R',
    preDefPoint: [[56, 0, 0, 't']], 
    conditions: {
      valInterval: ['∅'],
    },
    equalMatch: true

  },
  artifact_6: {
    representation: '∅∪R',
    conditions: {
      valInterval: ['(−∞,∞)','r'],
      board: [{
        pares: [['-∞', '+∞']],
      }]
    },
    equalMatch: true

        

  },
  artifact_7: {
    representation: '∅∪(a,b)',
    conditions: {
      valInterval: ['(a,b)'],
      board: [{
        pares: [['a', 'b']],
        points: [['a', true], ['b', true]],
      }],
    },
       
  },
  artifact_8: {
    representation: 'R−(1,2)',
    conditions: {
      valInterval: ['(−∞,∞)−(1,2)', '(−∞,1]∪[2,∞)','[2,∞)∪(−∞,1]'],
      board: [{
        pares: [['-∞', '1'], ['2', '+∞']],
        points: [['1', false], ['2', false]],
      }],
    },

  },
  artifact_9: {
    representation: 'R−(1,2]',
    conditions: {
      valInterval: ['(−∞,∞)−(1,2]', '(−∞,1]∪(2,∞)'],
      board: [{
        pares: [['-∞', '1'], ['2', '+∞']],
        points: [['1', false], ['2', true]],
      }],
    },

  },
  artifact_10: {
    representation: 'R−[1,2)',
    conditions: {
      valInterval: ['(−∞,∞)−[1,2)', '(−∞,1)∪[2,∞)'],
      board: [{
        pares: [['-∞', '1'], ['2', '+∞']],
        points: [['1', true], ['2', false]],
      }],
    },

  },
  artifact_11: {
    representation: 'R−[1,2]',
    conditions: {
      valInterval: ['(−∞,∞)−[1,2]', '(−∞,1)∪(2,∞)'],
      board: [{
        pares: [['-∞', '1'], ['2', '+∞']],
        points: [['1', true], ['2', true]],
      }],
    },

  },
  artifact_12: {
    representation: 'R∪[1,2]',
    conditions: {
      valInterval: ['(−∞,∞)∪[1,2]', '(−∞,∞)','r'],
      board: [{
        pares: [['-∞', '+∞']],
      },
      {
        pares: [['-∞', '+∞'], ['1', '2']],
        points: [['1', false], ['2', false]],
      }],
    },

  },
  artifact_13: {
    representation: 'R∩[1,2]',
    conditions: {
      valInterval: ['(−∞,∞)∩[1,2]', '[1,2]'],
      board: [{
        pares: [['1', '2']],
        points: [['1', false], ['2', false]],
      },
      {
        pares: [['-∞', '+∞'], ['1', '2']],
        points: [['1', false], ['2', false]],
      }],
    },

  },
  artifact_14: {
    interval: '[xi, xi+1)',
    conditions: {
      valRepre: ['xi≤x<xi+1', 'xi+1>x≥xi'],
      board: [{
        pares: [['xi', 'xi+1']],
        points: [['xi', false], ['xi+1', true]],
      }]
    },
    modeText:true

  },
}

//Funcion que inicializa los elementos del DOM con el template y el Fragmento
function initMain() {
  generation(def);
};

//Funcion para iniciarlo cuando se cargue la pagina
window.onload = initMain();
