
//def 10

class Boards {
  constructor() {
    this.asymptotes = []
    this.lines =false
    this.texts = false
    this.points = []
    this.curves = []
    this.top = 4
    this.bottom = -4
    this.polygons = []
    this.left = -4
    this.right = 4
    this.style = {
      axis: [false, true, true],
      boundingbox:[-4,4,4,-4]
    }
  } 
    
  /* points: [
        [0, 1, true, "1", true, "black"],
        [0, -1, true, "-1", true, "black"],
     ], */
 
 
 
  createPoints(label, coord, open = false){
    const data = [coord[0], coord[1], true, label,false, open]
    this.points.push(data)
  }
 
  createPolygons(color,...points){
    const data = {
      points: [],
      styles:{
        fillColor:color,
        opacity: .2,
      }
    }
 
    points.forEach(p => data.push(points))
    this.polygons.pus(data)
  }
 
 
  /* curves: [
         {
            dash: 2,
            points: [[-8, 1], [8, 1]],
         },
         {
            interactive: true,
            strokeColor: "black",
            points: [
               [-3.4642857142857144, -1.5827338129496402],
               [-3.0357142857142856, -1.2949640287769784],
               [-2.0535714285714284, 0.5467625899280576],
               [-1.7857142857142858, 0.4892086330935252],
               [-0.8, -2],
               [-0.49, -1.95],
               [0.44, 0],
               [1.8571428571428572, 2.935251798561151],
               [2.1785714285714284, 2.906474820143885],
               [2.892857142857143, 0.8633093525179856],
               [3.392857142857143, -1.6978417266187051],
               [3.5357142857142856, -2.0719424460431655],
            ],
         },
      ], */
 
  createCurve(dashParam = 2, ...points){
    const data = {
      dash:dashParam,
      interactive: false,
      points:[]
    }
   
    points.sort((a,b)=>{ b[0] - a[0]})
 
    points.forEach(point => data.points.push(point))
 
    this.curves.push(data)
  }
  /* 
      lines: [
        {
          points: [
            [10, 1],
            [-10, 1],
          ],
          dash: 2,
        },
        {
          points: [
            [11, -1],
            [-11, -1],
          ],
          dash: 2,
        },
      ],
  
  */
  setGrid(boolean = true) {
    this.style['grid'] = boolean
  }
  
  /* texts: [
            
          {
            x: 1.3,
            y: 1.37,
            text: "1",
            style: {
              color: "green",
              fontWeight: "bold",
              fontSize: 12,
            },
          },
          {
            x: 1.29,
            y: 0.74,
            text: "W",
            style: {
              color: "green",
              fontWeight: "bold",
              fontSize: 12,
            },
          },
          {
            x: -2.96,
            y: 5.2,
            text: "POSICION VERTICAL",
            style: {
              color: "black",
              fontWeight: "bold",
              fontSize: 9,
            },
          },
    
        ],
     * 
     */
  
  
  createText(textParam = '<texto>', coords = [1,1], styleParam = { color: 'black', fontWeight: 'bold', fontSize: 12,}){
    this.texts = !this.texts ? [] : this.texts
  
    const data  = {
      x: coords[0],
      y: coords[1],
      text: textParam,
      style:styleParam,
    }
    this.texts.push(data)
  
  }
  
  createLine(dashParam = 2, ...points){
  
    this.lines = !this.lines ? [] : this.lines
  
    const data = {
      points: [],
      dash: dashParam,
       
    }
    points.forEach(coord => {
      data.points.push(coord)
    })
    this.lines.push(data)
  }
  
  createAsymptotes(dashParam = 2,...asymptotesParams){
    /*  asymptotes.forEach((x)=>{
        this.asymptotes.push(x)
      })
      return */
  
    asymptotesParams.forEach((coordX)=>{
      this.createLine(dashParam, [coordX, this.top], [coordX, this.bottom])
    })
      
  
   
  
  }
  
  boardSize(width, height) {
    this.style['width'] = width;
    this.style['height'] = height
  }
  
  boardMaxSize(maxWidth, maxHeight){
    this.style['maxWidth'] = maxWidth;
    this.style['maxHeight'] = maxHeight
  }
  
  setOrigin(boolean = true) {
    this.style['origin'] = boolean
  }
  
  setBourdingBox(x1 = -4, y1 = 4, x2 = 4, y2 = -4) {
    this.left = x1
    this.top = y1
    this.right = x2
    this.bottom = y2
    this.style['boundingbox'] = [x1, y1, x2, y2]
  }
  
  createBoard(type = 1) {
    if (type === 1) {
  
      this.setGrid()
      this.setOrigin()
      this.setBourdingBox()
      this.style['valueAxis'] = {
        yd: [[0, 0], [0, 1]], //dirección del eje y
        xd: [[0, 0], [1, 0]],
        colory: '#000',
        colorx: '#000',
        color:'#000'
      }
    }
  }
 
  builder() {
    return {
      style: this.style,
      texts:this.texts,
      points:this.points,
      lines:this.lines,
      curves:this.curves,
      asymptotes: this.asymptotes
    }
  }
}
 
/* 
 [ [[-5, -1.5], [5,-1.5]],0,false,false ] ,     
            [ [[-5, -1], [5,-1]],0,false,false ] , 
            [ [[-5, 1], [5, 1]],0,false,false ] , 
            [ [[-5, 2], [5,2]],0,false,false ] ,      
 */
 
const b0 = new Boards()
b0.createBoard()
b0.setBourdingBox(-5, 5, 5,-3)
b0.createCurve(0,[-4, -1], [-2, -1.3], [0,- 1], [2,0], [3,1.25], [3.5, 2.1] )
 
b0.createLine(1,[-5, -1.5], [5,-1.5])
b0.createLine(1,[-5, -1], [5,-1])
b0.createLine(1,[-5, 1], [5, 1])
b0.createLine(1,[-5, 2], [5,2])
 
b0.createText('C', [-0.3,2.3])
b0.createText('H', [-0.3,1.3])
b0.createText('M', [-0.3,-0.7])
b0.createText('P', [0.3,-1.3])
b0.createText('f', [2.5,1.3],{size:'6'})
 
b0.createPoints('',[3.59,2.25])
b0.createPoints('',[3.85,2.54])
b0.createPoints('',[4.07,2.88])
 
b0.createPoints('',[0,2],true,false)
b0.createPoints('',[0,1],true,false)
b0.createPoints('',[0,-1],true,false)
b0.createPoints('',[0,-1.5],true,false)
 
 
const b1 = new Boards()  
b1.createBoard()
b1.createCurve(0, [-2, 2], [-1, 0], [0, -1], [1, 0], [2, 2])
b1.createPoints('',[2.06,2.16])
b1.createPoints('',[2.13,2.39])
b1.createPoints('',[2.17,2.67])
b1.createPoints('',[-2.06,2.16])
b1.createPoints('',[-2.13,2.39])
b1.createPoints('',[-2.17,2.67])
 
 
const b2 = new Boards()
b2.createBoard()
b2.createLine(0,[3, -0.5], [-2.5, 2.2])
b2.createPoints('',[-2.61, 2.28])
b2.createPoints('',[-2.76,2.39])
b2.createPoints('',[-2.91, 2.51])
 
const b3 = new Boards()  
b3.createBoard()
 
b3.createCurve(0,[-3.5,-0.2857142857142857], [-3,-0.3333333333333333],[-2.5,-0.4],[-2,-0.5],[-1.5,-0.6666666666666666],[-1,-1],[-0.5,-2],[-0.3,-3.3333333333333335])
b3.createCurve(0,[0.3, 3.3333333333333335], [0.5,2],[1,1],[1.5,0.6666666666666666],[2,0.5],[2.5,0.4],[3,0.3333333333333333],[3.5,0.2857142857142857])
b3.createPoints('',[0.29, 3.5])
b3.createPoints('',[0.27, 3.7])
b3.createPoints('',[3.59, 0.30])
b3.createPoints('',[3.7, 0.30])
 
b3.createPoints('',[-0.29, -3.5])
b3.createPoints('',[-0.27,-3.7])
b3.createPoints('',[-3.59, -0.30])
b3.createPoints('',[-3.7, -0.30])
 
//[0.2, -3], [0.5, -1], [1, 0], [2, 0.5], [3, 1.2]
 
const b4 = new Boards()
b4.createBoard()
b4.createCurve(0,[0.2, -3], [0.5, -1], [1, 0], [2, 0.5], [3, 1.2])
b4.createPoints('',[3.08, 1.30])
b4.createPoints('',[3.18, 1.43])
b4.createPoints('',[3.29, 1.55])
b4.createPoints('',[0.18, -3.17])
b4.createPoints('',[0.16,-3.39])
b4.createPoints('',[0.13, -3.61])
const b5 = new Boards()
b5.createBoard()
b5.createCurve(0,[-3, 0], [-1.5, 1], [0, 0], [1.5, -1], [3, 0])
 
const b6 = new Boards()
b6.createBoard()
b6.createLine(0,[3, 1.5], [2, -1.5])
b6.createLine(0,[0.5, 1.5], [2, -1.5])
b6.createLine(0,[0.5, 1.5], [-1.5, -0.5])
b6.createLine(0,[-1.5, -0.5], [-2, 1.5])
b6.createLine(0,[-2, 1.5], [-2.5, 1])
b6.createPoints('',[3, 1.5], true)
 
const b7 = new Boards()
b7.createBoard()
 
 
 
 
//::::::::::::::::::::::::::::|| OTRAS DEFINICIONES ||::::::::::::::::::::::
 
 
const rDef = {
  artifactHtml: {
    datadefault: [

 

      //_____________________________________________/ejercicio 4
      //tabla1
      {
        type: 13,
        customKeyboard:7,

        classGlobal: 'QA',
        interactive: true,
        parent: '#tabla7',
        contents: {
          artifact_1: {
            allinputs: [],
            header: [
              'Interv.',
              'R',
              '(0, ∞)',
              '(-∞,0)'
            ],
            dataInteraction: { incorrect: 0, correct: 0, forAnswer: 0 },
            ///////tabla 1/////////////////////////////
            cells: [
                  
 
              [
                {
                  type: 0,
                  text: ['Cota Sup.', false],
                  conditions: {
                    correctIndex: 'a',
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1', false]],
 
                  conditions: {
                    valueInputs: ['\\nexists'],
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1.1', false]],
 
                  conditions: {
                    valueInputs: ['\\nexists'],
 
                  },
                },  
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1.1', false]],
 
                  conditions: {
                    valueInputs: ['\\nexists'],
 
                  },
                },
              ],
              [
                {
                  type: 0,
                  text: ['Cota Inf.', false],
                  conditions: {
                    correctIndex: [['\\leq0']],
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1', false]],
 
                  conditions: {
                    valueInputs: ['\\nexists'],
                              
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1', false]],
 
                  conditions: {
                    valueInputs: ['\\nexists'],
 
                  },
                },
 
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1.1', false]],
 
                  conditions: {
                    valueInputs: ['\\nexists'],
 
                  },
                },
 
              ],
                   
            ],
          },
        },
      },
      ///////////tabla 2 /////////////////
      {
        type: 13,
        customKeyboard:7,

        classGlobal: 'QA',
        interactive: true,
        parent: '#tabla8',
        contents: {
          artifact_2: {
            allinputs: [],
            header: [
              'Interv.',
              '[0,1]',
              '[-1,1]',
              '[-1,0]',
              '[-2,-1]'
            ],
            dataInteraction: { incorrect: 0, correct: 0, forAnswer: 0 },
            ///////tabla 1/////////////////////////////
            cells: [
                 
 
              [
                {
                  type: 0,
                  text: ['Cota Sup.', false],
                  conditions: {
                    correctIndex: null,
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1', false]],
 
                  conditions: {
                    //valueInputs: [['0',]],
                    evaluateCote:{
                      top:0
                      // bottom: 1
                    }
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1', false]],
 
                  conditions: {
                    //valueInputs: [['0',]],
                    evaluateCote:{
                      top:0
                      // bottom: 1
                    }
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1.1', false]],
 
                  conditions: {
                    valueInputs: ['\\nexists'],
 
 
                  },
                },  
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1.1', false]],
 
                  conditions: {
                    valueInputs: ['\\nexists'],
 
 
                  },
                },
              ],
              [
                {
                  type: 0,
                  text: ['Cota Inf.', false],
                  conditions: {
                    correctIndex: [['\\leq-1']],
                             
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1', false]],
 
                  conditions: {
                    valueInputs: ['\\nexists'],
 
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1', false]],
 
                  conditions: {
                    valueInputs: ['\\nexists'],
 
 
 
                  },
                },
 
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1.1', false]],
 
                  conditions: {
                    valueInputs: ['\\nexists',],
 
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1.1', false]],
 
                  conditions: {
                    valueInputs: ['\\nexists',]
 
                  },
                },
 
              ],
                  
            ],
          },
        },
      },
      //____________________________________________________________________________________-
 
      //_____________________________________________/ejercicio 5
      //tabla1
      {
        type: 13,
        customKeyboard:7,

        classGlobal: 'QA',
        interactive: true,
        parent: '#tabla9',
        contents: {
          artifact_3: {
            allinputs: [],
            header: [
              'Interv.',
              'R',
              '(0, ∞)',
              '(-∞,0)'
            ],
            dataInteraction: { incorrect: 0, correct: 0, forAnswer: 0 },
            ///////tabla 1/////////////////////////////
            cells: [
                  
 
              [
                {
                  type: 0,
                  text: ['Cota Sup.', false],
                  conditions: {
                    correctIndex: 'a',
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1', false]],
 
                  conditions: {
                    //valueInputs: [['1',]],
                    evaluateCote:{
                      top:1
                      //bottom: -1
                    }
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1.1', false]],
 
                  conditions: {
                    //valueInputs: [['0',]],
                    evaluateCote:{
                      top:0
                      //bottom: -1
                    }
                  },
                },  
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1.1', false]],
 
                  conditions: {
                    //valueInputs: [['1',]],
                    evaluateCote:{
                      top:1
                      //bottom: -1
                    }
                  },
                },
              ],
              [
                {
                  type: 0,
                  text: ['Cota Inf.', false],
                  conditions: {
                    correctIndex: [['-1']],
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1', false]],
 
                  conditions: {
                    //valueInputs: [['-1',]],
                    evaluateCote:{
                      //top:0
                      bottom: -1
                    }
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1', false]],
 
                  conditions: {
                    //valueInputs: [['-1',]],
                    evaluateCote:{
                      //top:0
                      bottom: -1
                    }
                  },
                },
 
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1.1', false]],
 
                  conditions: {
                    //valueInputs: [['0',]],
                    evaluateCote:{
                      //top:0
                      bottom:0
                    }
                  },
                },
 
              ],
                   
            ],
          },
        },
      },
      ///////////tabla 2 /////////////////
      {
        type: 13,
        customKeyboard:7,

        classGlobal: 'QA',
        interactive: true,
        parent: '#tabla10',
        contents: {
          artifact_4: {
            allinputs: [],
            header: [
              'Interv.',
              '[0,1]',
              '[-1,1]',
              '[-1,0]',
              '[-2,-1]'
            ],
            dataInteraction: { incorrect: 0, correct: 0, forAnswer: 0 },
            ///////tabla 1/////////////////////////////
            cells: [
                 
 
              [
                {
                  type: 0,
                  text: ['Cota Sup.', false],
                  conditions: {
                    correctIndex: null,
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1', false]],
 
                  conditions: {
                    // valueInputs: [['0',]],
                    evaluateCote:{
                      top:-1
                      //bottom: -1
                    }
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1', false]],
 
                  conditions: {
                    //valueInputs: [['0.8',]],
                    evaluateCote:{
                      top:0.7
                      //bottom: -1
                    }
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1.1', false]],
 
                  conditions: {
                    //valueInputs: [['0.8',]],
                    evaluateCote:{
                      top:0.7
                      //bottom: -1
                    }
 
                  },
                },  
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1.1', false]],
 
                  conditions: {
                    //valueInputs: [['1',]],
                    evaluateCote:{
                      top:1
                      //bottom: -1
                    }
 
                  },
                },
              ],
              [
                {
                  type: 0,
                  text: ['Cota Inf.', false],
                  conditions: {
                    correctIndex: [['\\leq-1']],
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1', false]],
 
                  conditions: {
                    //valueInputs: [['0',]],
                    evaluateCote:{
                      //top:1
                      bottom: -0.7 
                    }
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1', false]],
 
                  conditions: {
                    //valueInputs: [['0',]],
                    evaluateCote:{
                      //top:1
                      bottom: 0
                    }
 
 
                  },
                },
 
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1.1', false]],
 
                  conditions: {
                    //valueInputs: [['0',]],
                    evaluateCote:{
                      //top:1
                      bottom: 0
                    }
                  },   
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1.1', false]],
 
                  conditions: {
                    //valueInputs: [['0.8',]],
                    evaluateCote:{
                      //top:1
                      bottom: 0.8
                    }
                  },
                },
 
              ],
                  
            ],
          },
        },
      },
      //____________________________________________________________________________________-
 
 
      //_____________________________________________/ejercicio 6
      //tabla1
      {
        type: 13,
        customKeyboard:7,

        classGlobal: 'QA',
        interactive: true,
        parent: '#tabla11',
        contents: {
          artifact_5: {
            allinputs: [],
            header: [
              'Interv.',
              'R',
              '(0, ∞)',
              '(-∞,0)'
            ],
            dataInteraction: { incorrect: 0, correct: 0, forAnswer: 0 },
            ///////tabla 1/////////////////////////////
            cells: [
                  
 
              [
                {
                  type: 0,
                  text: ['Cota Sup.', false],
                  conditions: {
                    correctIndex: 'a',
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1', false]],
 
                  conditions: {
                    //valueInputs: [['1.5',]],
                    evaluateCote:{
                      top:1.4
                      //bottom: 0
                    }
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1.1', false]],
 
                  conditions: {
                    //valueInputs: [['1.5',]],
                    evaluateCote:{
                      top:1.4
                      //bottom: 0
                    }
                  },
                },  
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1.1', false]],
 
                  conditions: {
                    //valueInputs: [['1.5',]],
                    evaluateCote:{
                      top:1.4
                      //bottom: 0
                    }
                  },
                },
              ],
              [
                {
                  type: 0,
                  text: ['Cota Inf.', false],
                  conditions: {
                    correctIndex: [['-1']],
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1', false]],
 
                  conditions: {
                    //valueInputs: [['-1.5',]],
                    evaluateCote:{
                      //top:1.5
                      bottom: -1.4
                    }
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1', false]],
 
                  conditions: {
                    //valueInputs: [['-1.5',]],
                    evaluateCote:{
                      //top:1.5
                      bottom: -1.4
                    }
                  },
                },
 
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1.1', false]],
 
                  conditions: {
                    valueInputs: [['-0',]],
                    evaluateCote:{
                      //top:1.5
                      bottom: -0.4
                    }
                  },
                },
 
              ],
                   
            ],
          },
        },
      },
      ///////////tabla 2 /////////////////
      {
        type: 13,
        customKeyboard:7,

        classGlobal: 'QA',
        interactive: true,
        parent: '#tabla12',
        contents: {
          artifact_6: {
            allinputs: [],
            header: [
              'Interv.',
              '[0,1]',
              '[-1,1]',
              '[-1,0]',
              '[-2,-1]'
            ],
            dataInteraction: { incorrect: 0, correct: 0, forAnswer: 0 },
            ///////tabla 1/////////////////////////////
            cells: [
                 
 
              [
                {
                  type: 0,
                  text: ['Cota Sup.', false],
                  conditions: {
                    correctIndex: null,
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1', false]],
 
                  conditions: {
                    //valueInputs: [['1.5',]],
                    evaluateCote:{
                      top:1.4
                      //bottom: -1.5
                    }
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1', false]],
 
                  conditions: {
                    //valueInputs: [['1.5',]],
                    evaluateCote:{
                      top:1.4
                      //bottom: -1.5
                    }
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1.1', false]],
 
                  conditions: {
                    //valueInputs: [['1',]],
                    evaluateCote:{
                      top:1
                      //bottom: -1.5
                    }
 
                  },
                },  
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1.1', false]],
 
                  conditions: {
                    //valueInputs: [['1.5',]],
                    evaluateCote:{
                      top:1.4
                      //bottom: -1.5
                    }
 
                  },
                },
              ],
              [
                {
                  type: 0,
                  text: ['Cota Inf.', false],
                  conditions: {
                    correctIndex: [['\\leq-1']],
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1', false]],
 
                  conditions: {
                    //valueInputs: [['0.5',]],
                    evaluateCote:{
                      //op:1.5
                      bottom: 0.4
                    }
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1', false]],
 
                  conditions: {
                    //valueInputs: [['0',]],
                    evaluateCote:{
                      // top:1.5
                      bottom: 0
                    }
 
 
                  },
                },
 
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1.1', false]],
 
                  conditions: {
                    //valueInputs: [['0',]],
                    evaluateCote:{
                      // top:1.5
                      bottom: 0
                    }
                  },
                },
                {
                  type: 3, // una pregunta. Varios inputs
                  inputsDefault: [['-1.1', false]],
 
                  conditions: {
                    valueInputs: [['-0.5',]],
                    evaluateCote:{
                      //top:1.5
                      bottom: -0.4
                    }
                  },
                },
 
              ],
                  
            ],
          },
        },
      },
      //____________________________________________________________________________________-
 
 
 
      //PREGUNTAS
         
    ],
  },
 
  
};
 
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 
 
const defLayout = {



 
  element7:{
    parentContainer: '.artifact_1',
    typeLayout:'',
    classes: 'excesice',

    style : '',
    containers:[
 
      {
        id:'board7',
        boardName: 'board_0',
        boardObject: b4.builder(),
        attributes:[['board', 'board_0'],[]],
        classes:'subcontainer c-2',
           
        style:'min-width: 200px;height: 400px;max-width: 600px;',

        typeElement:'',
      },
      {
        classes:'c-4 Element__tables',
        id:'tabla7',
        attributes:[['board', 'board_0']],
 
        style:'min-width: 200px;padding-top: 10px;',
        typeElement:'',
      },
     
    ]
  },
  element8:{
    parentContainer: '.artifact_2',
    typeLayout:'',
    classes: 'excesice',

    style : '',
    containers:[
 
      {
        id:'board8',
        boardName: 'board_0',
        boardObject: b4.builder(),
        attributes:[['board', 'board_0'],[]],
        classes:'subcontainer c-2',
           
        style:'min-width: 200px;height: 400px;max-width: 600px;',

        typeElement:'',
      },
      {
        classes:'c-4 Element__tables',
        id:'tabla8',
        attributes:[['board', 'board_0']],
 
        style:'min-width:200px;padding-top: 10px;',
        typeElement:'',
      },
     
    ]
  },
  element9:{
    parentContainer: '.artifact_3',
 
    typeLayout:'',
    classes: 'x excesice',

 
    containers:[
 
      {
        id:'board9',
        boardName: 'board_0',
        boardObject: b5.builder(),
        attributes:[['board', 'board_0'],[]],
        classes:'subcontainer c-2',
           
        style:'min-width: 200px;height: 400px;max-width: 600px;',

        typeElement:'',
      },
      {
        classes:'c-4 Element__tables',
        id:'tabla9',
        attributes:[['board', 'board_0']],
 
        style:'min-width: 200px;padding-top: 10px;',
        typeElement:'',
      },
     
    ]
  },
  element10:{
    parentContainer: '.artifact_4',
    typeLayout:'',
    classes: 'x excesice',
 
    containers:[
 
      {
        id:'board10',
        boardName: 'board_0',
        boardObject: b5.builder(),
        attributes:[['board', 'board_0'],[]],
        classes:'subcontainer c-2',
        style:'min-width: 200px;height: 400px;max-width: 600px;',
        typeElement:'',
      },
      {
        classes:'c-4 Element__tables',
        id:'tabla10',
        attributes:[['board', 'board_0']],
        style:'min-width: 200px;padding-top: 10px;',
        typeElement:'',
      },
     
    ]
  },
  element11:{
    parentContainer: '.artifact_5',
    typeLayout:'',
    classes: 'x excesice',
  
    containers:[
 
      {
        id:'board11',
        boardName: 'board_0',
        boardObject: b6.builder(),
        attributes:[['board', 'board_0'],[]],
        classes:'subcontainer c-2',
           
        style:'min-width: 200px;height: 400px;max-width: 600px;',

        typeElement:'',
      },
      {
        classes:'c-4 Element__tables',
        id:'tabla11',
        attributes:[['board', 'board_0']],
 
        style:'min-width: 200px;padding-top: 10px;',
        typeElement:'',
      },
     
    ]
  },
  element12:{
    parentContainer: '.artifact_6',
    typeLayout:'',
    classes: 'x excesice',

 
    containers:[
 
      {
        id:'board12',
        boardName: 'board_0',
        boardObject: b6.builder(),
        attributes:[['board', 'board_0'],[]],
        classes:'subcontainer c-2',
           
        style:'min-width: 200px;height: 400px;max-width: 600px;',
        typeElement:'',
      },
      {
        classes:'c-4 Element__tables',
        id:'tabla12',
        attributes:[['board', 'board_0']],
 
        style:'min-width: 200px;padding-top: 10px;',
        typeElement:'',
      },
     
    ]
  }
}
 
createLayouts(defLayout)
generator(rDef);
 
