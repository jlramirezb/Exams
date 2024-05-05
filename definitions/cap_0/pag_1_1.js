//2 infinito negativo 3 infinito positivo [infinitoN, infinitoP]
//0 punto abierto, 1 punto cerrado
//holaslasdklakldsñ
const def = {
  artifact_1: {
    interval: '[2,3)U(3,4]',
    conditions: {
      valRepre: ['2≤x<3o3<x≤4', '2≤x≤4yx≠3', '4≥x≥2yx≠3', '3>x≥2o4≥x>3'],//utlima validacion corregida
      board: [{
        pares: [['2', '4']],
        points: [['2', false], ['3', true], ['4', false]],
      },
      {
        pares: [['2', '3'], ['3', '4']],
        points: [['2', false], ['3', true], ['4', false]],
      }]


    },
  },
  artifact_2: {
    interval: '[2,4]-\\{3\\}',
    conditions: {
      valRepre: ['2≤x≤4yx≠3', '4≥x≥2yx≠3', '2≤x<3o3<x≤4', '3>x≥2o4≥x>3'],
      board: [{
        pares: [['2', '4']],
        points: [['2', false], ['3', true], ['4', false]],
      },
      {
        pares: [['2', '3'], ['3', '4']],
        points: [['2', false], ['3', true], ['4', false]],
      }]

    },

  },
  artifact_3: {
    interval: '[2,4]-(3,3)',
    conditions: {
      valRepre: ['2≤x≤4', '4≥x≥2'],
      board: [{
        pares: [['2', '4']],
        points: [['2', false], ['4', false]],
      }]
    },

  },
  artifact_4: {
    interval: '[0,1]-(-2,2)',
    preDefPoint: [[56, 0, 0, 't']],
    conditions: {
          //  valRepre: ['∅', '0≤x≤1y−2<x<2', '1≥x≥0y2>x>−2'],
    valRepre: ['∅'],
      board: [{
        pares: [['-2', '2'], ['0', '1']],
        points: [['-2', true], ['0', false], ['1', false], ['2', true]],

      }, {

      }]
    },

  },
  artifact_5: {
    interval: '[2,4]U[3,5]',
    conditions: {
      valRepre: ['2≤x≤4o3≤x≤5', '2≤x≤5', '4≥x≥2o5≥x≥3', '5≥x≥2'],
      board: [{
        pares: [['2', '4'], ['3', '5']],
        points: [['2', false], ['3', false], ['4', false], ['5', false]],

      },
      {
        pares: [['2', '5']],
        points: [['2', false], ['5', false]],

      }]
    },

  },
  artifact_6: {
    interval: '[2,4]∩[3,5]',
    conditions: {
      valRepre: ['3≤x≤4', '4≥x≥3', '2≤x≤4y3≤x≤5', '4≥x≥2y5≥x≥3'],
      board: [{
        pares: [['2', '4'], ['3', '5']],
        points: [['2', false], ['3', false], ['4', false], ['5', false]],

      },
      {
        pares: [['3', '4']],
        points: [['3', false], ['4', false]],

      }]
    },

  },
  artifact_7: {
    interval: '(2,3)U(1,4]',
    conditions: {
      valRepre: ['1<x≤4', '4≥x>1', '2<x<3o1<x≤4', '3>x>2o4≥x>1'],
      board: [{
        pares: [['1', '4'], ['2', '3']],
        points: [['1', true], ['2', true], ['3', true], ['4', false]],

      },
      {
        pares: [['1', '4']],
        points: [['1', true], ['4', false]],

      },

      {
        pares: [['2', '3']],
        points: [['2', false], ['3', false]],

      }
        
        
      ]
    },

  }, 
  artifact_8: {
    interval: '(2,3)∩(1,4]',
    conditions: {
      valRepre: ['2<x<3y1<x≤4', '3>x>2y4≥x>1', '2<x<3', '3>x>2'],
      board: [{
        pares: [['1', '4'], ['2', '3']],
        points: [['1', true], ['2', true], ['3', true], ['4', false]],

      },
      {
        pares: [['2', '3']],
        points: [['2', true], ['3', true]],

      }]

    },

  },
  artifact_9: {
    interval: '(1,2)∩(2,3)',
    preDefPoint: [[56, 0, 0, 't']],

    conditions: {
      valRepre: ['∅', '1<x<2y2<x<3', '2>x>1y3>x>2'],
      // board: [{
      //     pares: [['1', '2'], ['2', '3']],
      //     points: [['1', true], ['2', true], ['3', true]],

      // },
      // {}]

       
      board: [{
        pares: [['-2', '2'], ['0', '1']],
        points: [['-2', true], ['0', false], ['1', false], ['2', true]],

      }, {

      }]
        
    },

  },
  artifact_10: {
    interval: '(1,2]∩[2,3)',
    conditions: {
      valRepre: ['1<x≤2y2≤x<3', '2≥x>1y3>x≥2', '2≤x≤2', '2≥x≥2', 'x=2'],

      board: [{
        pares: [['1', '2'], ['2', '3']],
        points: [['1', true], ['2', false], ['3', true]],

      },
      {
        points: [['2', false]],
      }]
    },

  },
  //Artefacto para añadir en la proximo semestre!
  /* artifact_20: {
        interval: "(1,2)∩[2,3)",
        preDefPoint: [[56, 0, 0, 't']],
        conditions: {
            valRepre: ["∅", '0≤x≤1y-2<x<2', '1≥x≥0y2>x>-2'],
        }
    }, */

}

//Funcion que inicializa los elementos del DOM con el template y el Fragmento
function initMain() {
  generation(def);
};

//Funcion para iniciarlo cuando se cargue la pagina
window.onload = initMain();
