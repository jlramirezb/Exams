//comentario
const def = {
  artifact_1: {
    representation: '1<x<2 ⠀ y ⠀ x>3',
    preDefPoint: [[56, 0, 0, 't']],
    conditions: {
      valInterval: ['(1,2)∩(3,∞)', '∅'],
    }
  },
  artifact_2: {
    representation: '1<x<2 ⠀ o ⠀ x>3',
    conditions: {
      valInterval: ['(1,2)∪(3,∞)'],
      board: [{
        pares: [['1', '2'], ['3', '+∞']],
        points: [['1', true], ['2', true], ['3', true]],
      }],
    }
  },
  artifact_3: {
    representation: 'x<3 ⠀ o ⠀ x>3',
    conditions: {
      valInterval: ['(−∞,3)∪(3,∞)', '(−∞,∞)−[3,3]', '(−∞,∞)−{3}'],
      points: ['3, true'],
      board: [{
        pares: [['-∞', '3'], ['3', '+∞']],
        points: [['3', true]],
      },
      {
        pares: [['-∞', '+∞']],
        points: [['3', true]],
      }],
    }
  },
  artifact_4: {
    representation: 'x≠3',
    conditions: {
      valInterval: ['(−∞,3)∪(3,∞)', '(−∞,∞)−[3,3]', '(−∞,∞)−{3}'],
      board: [{
        pares: [['-∞', '3'], ['3', '+∞']],
        points: [['3', true]],
      },
      {
        pares: [['-∞', '+∞']],
        points: [['3', true]],
      }]
    }
  },
  artifact_5: {
    representation: 'x≠1 y x≠2 y x≠3',
    conditions: {
      valInterval: ['(−∞,∞)−{1,2,3}','(−∞,1)∪(1,2)∪(2,3)∪(3,∞)'],

      board: [{
        pares: [['-∞', '1'], ['1', '2'], ['2', '3'], ['3', '+∞']],
        points: [['1', true], ['2', true], ['3', true]],
      },
      {
        pares: [['-∞', '+∞']],
        points: [['1', true], ['2', true], ['3', true]],
      }]
    }
  },
  artifact_6: {
    representation: 'x≠1 ⠀ o ⠀ x≠2',
    //preDefPoint: [[56, 0, 0, 't']],
    conditions: {
      valInterval: ['(−∞,∞)', 'r','r−{1}∪r−{2}','(−∞,∞)-{1}∪(−∞,∞)−{2}','(-∞,∞)−[1,1]∪(−∞,∞)−[2,2]','r−[1,1]∪r−[2,2]'],
        
      board: [

        {
          pares: [['-∞', '+∞']],
        }]
        
    }
  },
  artifact_7: {
    representation: 'x≤3 ⠀ y ⠀ x≥3',
    conditions: {
      valInterval: ['(−∞,3]∩[3,∞)', '[3,3]'],
      board: [{
        pares: [['−∞', '3'], ['3', '+∞']],
        points: [['3', false]],
      },
      {

        points: [['3', false]],
      }]
    }
  },
  artifact_8: {
    representation: 'R−\\{1,2\\}',
    conditions: {
      valInterval: ['(−∞,∞)−{1,2}','(−∞,1)∪(1,2)∪(2,∞)','(−∞,∞)−[1,1]∪[2,2]'],
      board: [{
        pares: [['-∞', '1'], ['1', '2'], ['2', '+∞']],
        points: [['1', true], ['2', true]],
      },
      {
        pares: [['-∞', '+∞']],
        points: [['1', true], ['2', true]],
      }]
    }
  },
  artifact_9: {
    representation: 'R−\\{−1,2\\}',
    conditions: {
      valInterval: ['(−∞,∞)−{−1,2}','(−∞,−1)∪(−1,2)∪(2,∞)','(−∞,∞)−[−1,−1]∪[2,2]'],
      board: [{
        pares: [['-∞', '−1'], ['−1', '2'], ['2', '+∞']],
        points: [['−1', true], ['2', true]],
      },
      {
        pares: [['-∞', '+∞']],
        points: [['−1', true], ['2', true]],
      }]
    }
  },
  artifact_10: {
    representation: 'R−(−1,1)',
    conditions: {
      valInterval: ['(−∞,∞)−(−1,1)', '(−∞,−1]∪[1,∞)','r−(−1,1)'],

      board: [{
        pares: [['-∞', '−1'], ['1', '+∞']],
        points: [['−1', false], ['1', false]],
      },
      {
        pares: [['−∞', '+∞'], ['−1', '1']],
        points: [['−1', true], ['1', true]],
      }]
    }
  },
  artifact_11: {
    conditions: {
      valInterval: ['(x0,x1]'],
      valRepre: ['x0<x≤x1', 'x1≥x>x0'],
    },
    preDefPar: [[[2, 0, 0, 'x0'], [4, 0, 1, 'x1']]],
    preDefPoint: [[2, 0, 0, 'x0'], [4, 0, 1, 'x1']]
  },
  artifact_12: {
    conditions: {
      valInterval: ['[r,s)∪[t,t]','[r,s)∪{t}'], //≥
      valRepre: ['r≤x<sox=t', 's>x≥rox=t','r≤x<sot≤x≤t','s>x≥rot≥x≥t'],
    },
    preDefPar: [[[2, 0, 1, 'r'], [4, 0, 0, 's']]],
    preDefPoint: [[5, 0, 0, 't']]
  },

}


//Funcion que inicializa los elementos del DOM con el template y el Fragmento
function initMain() {
  generation(def);
};

//Funcion para iniciarlo cuando se cargue la pagina
window.onload = initMain();
