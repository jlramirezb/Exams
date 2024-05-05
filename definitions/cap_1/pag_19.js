
//def 10

class Boards {
  constructor() {
    this.asymptotes = []
    this.lines =false
    this.texts = false
    this.points = []
    this.curves = []
    this.polygons = []
    this.top = 4
    this.bottom = -4
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
b0.createCurve(0,[-2.8, 1.077032961], [-2.6, 1.496662955], [-2.4, 1.8], [-2.2, 2.039607805], [-2, 2.236067977], [-1.8, 2.4], [-1.6, 2.537715508], [-1.4, 2.653299832], [-1.2, 2.749545417], [-1, 2.828427125], [-0.8, 2.891366459], [-0.6, 2.939387691], [-0.4, 2.973213749, false], [-0.2, 2.993325909, false], [0, 3, false], [0.2, 2.993325909, false], [0.4, 2.973213749, false], [0.6, 2.939387691, false], [0.8, 2.891366459, false], [1, 2.828427125, false], [1.2, 2.749545417, false], [1.4, 2.653299832, false], [1.6, 2.537715508, false], [1.8, 2.4, false], [2, 2.236067977, false], [2.2, 2.039607805, false], [2.4, 1.8, false], [2.6, 1.496662955, false], [2.8, 1.077032961, false] )
b0.setGrid(false)
b0.createLine(1,[-1.4, 0], [-1.4, 2.6])
b0.createText('a', [-1.5,-0.2],{size:'6'})

const b1 = new Boards()
b1.createBoard()
b1.setBourdingBox(-5, 5, 5,-3)
b1.createCurve(0,[-2.8, 1.077032961, false], [-2.6, 1.496662955, false], [-2.4, 1.8, false], [-2.2, 2.039607805, false], [-2, 2.236067977, false], [-1.8, 2.4, false], [-1.6, 2.537715508, false], [-1.4, 2.653299832, false], [-1.2, 2.749545417, false], [-1, 2.828427125, false], [-0.8, 2.891366459, false], [-0.6, 2.939387691, false], [-0.4, 2.973213749, false], [-0.2, 2.993325909, false], [0, 3, false], [0.2, 2.993325909, false], [0.4, 2.973213749, false], [0.6, 2.939387691, false], [0.8, 2.891366459, false], [1, 2.828427125, false], [1.2, 2.749545417, false], [1.4, 2.653299832, false], [1.6, 2.537715508, false], [1.8, 2.4, false], [2, 2.236067977, false], [2.2, 2.039607805, false], [2.4, 1.8, false], [2.6, 1.496662955, false], [2.8, 1.077032961, false])
b1.setGrid(false)
b1.createLine(1,[0.7, 0], [0.7, 2.9])
b1.createText('a', [0.5,-0.2],{size:'6'})

// graficasW

const b2 = new Boards()
b2.createBoard()
b2.setBourdingBox(-1, 1, 0.3, -0.5)
b2.setGrid(false)
b2.createLine(0,[-0.7, 0.8], [0.25, -0.4])
b2.createLine(2,[-0.5, 0.9], [-0.5, -0.4])
b2.createLine(2,[-0.95, 0.55], [0.3, 0.55])
b2.createText('a',[-0.6, -0.1],{size:'6'})
b2.createText('ƒ(a)',[0.1, 0.65],{size:'6'})
b2.createText('ƒ',[0.1, -0.1],{size:'6'})

const b3 = new Boards()
b3.createBoard()
b3.setBourdingBox(-1, 1, 0.3, -0.5)
b3.setGrid(false)
b3.createLine(0,[-0.9, 0.2], [-0.15, 0.85])
b3.createLine(2,[-0.5, 0.9], [-0.5, -0.4])
b3.createLine(2,[-0.95, 0.55], [0.3, 0.55])
b3.createText('a',[-0.6, -0.1],{size:'6'})
b3.createText('ƒ(a)',[0.1, 0.65],{size:'6'})
b3.createText('ƒ',[-0.8, 0.43],{size:'6'})

const b4 = new Boards()
b4.createBoard()
b4.setBourdingBox(-1, 1, 0.3, -0.5)
b4.setGrid(false)
b4.createLine(0,[-0.5, 0.55], [0.25, 0.85])
b4.createLine(0,[-0.8, 0.85], [-0.5, 0.55])
b4.createLine(2, [-0.5, 0.9], [-0.5, -0.4])
b4.createLine(2,[-0.95, 0.55], [0.3, 0.55])
b4.createText('a',[-0.6, -0.1],{size:'6'})
b4.createText('ƒ (a)',[0.1, 0.65],{size:'6'})
b4.createText('ƒ',[-0.7, 0.8],{size:'6'})

const b5 = new Boards()
b5.createBoard()
b5.setBourdingBox(-1, 1, 0.3, -0.5)
b5.setGrid(false)
b5.createLine(0,[-1, 0.35], [-0.75, 0.75])
b5.createLine(0,[-0.75, 0.75], [-0.25, 0.35])
b5.createLine(0,[-0.25, 0.35], [0.1, 0.85])
b5.createLine(0,[0.1, 0.85], [0.2, 0.75])
b5.createLine(2, [-0.5, 0.9], [-0.5, -0.4])
b5.createLine(2,[-0.95, 0.55], [0.3, 0.55])
b5.createText('a',[-0.6, -0.1],{size:'6'})
b5.createText('ƒ(a)',[0.1, 0.65],{size:'6'})
b5.createText('ƒ',[-0.7, 0.8],{size:'6'})




/* 

         [[[-0.5, 0.9], [-0.5, -0.4]], 2, false, false],
         [[[-0.95, 0.55], [0.3, 0.55]], 2, false, false],

*/



let targetActive = '';
let inputActive = '';

const defBoards = {
  board_draw1: {
    style: {
      axis: [false, false, false],
      grid: false,
      maxHeight: 220,
      maxWidth: 220,
      boundingbox: [-4, 4, 1, -4],
      valueAxis: {
        colory: 'black',
        yd: [[0, 0], [0, 1]],

        yp: [[0, 0], [0, 1]],
        yv: [],

        xd: [[0, 0], [1, 0]],

        xp: [-3.5, -3],
        xv: ['x1', 'x2'],
      },
    },
    lines: [//[[lista de puntos],dash,flecha primera,flecha segunda,color]
      [[[0, -4], [0, 4]], 0, true, false, 1.2, 'black'],
    ],
    points: [
      //[x,y,visible,name,type]
      [-4, 0.5, false, 'Localice sobre el <br> eje x la  región  <br> que cumple con la <br> condición <br> especificada <br>para la x'],
      //
    ],
  },

  board_draw2: {
    style: {
      axis: [false, false, true],
      grid: false,
      maxHeight: 220,
      maxWidth: 220,
      boundingbox: [-0.5, 4, 4, -4],
      valueAxis: {
        colory: 'black',
        yd: [[0, 0], [0, 1]],

        yp: [[0, 0], [0, 1]],
        yv: [],

        xd: [[0, 0], [1, 0]],

        xp: [-3.5, -3],
        xv: ['x1', 'x2'],
      },
    },

    points: [
      //[x,y,visible,name,type]
      [0.35, 0.6, false, 'Si hay una desigualdad que se cumple para TODAS las x de la región especificada entonces puede completar la expresión con ella'],
      //
    ],
  },

  board_draw3: {
    style: {
      axis: [false, true, true],
      grid: false,
      maxHeight: 220,
      maxWidth: 220,
      boundingbox: [-1, 1, 1, -1],
      valueAxis: {
        yd: [[0, 0], [0, 1]],

        yp: [[0, 0], [0, 1]],
        yv: [],

        xd: [[0, 0], [1, 0]],

        xp: [-3.5, -3],
        xv: ['x1', 'x2'],
      },
    },
    lines: [//[[lista de puntos],dash,flecha primera,flecha segunda,color]
      [[[-1, -0.01], [-0.98, 0.02]], 0, false, false],
      [[[-0.97, -0.01], [-0.94, 0.02]], 0, false, false],
      [[[-0.93, -0.01], [-0.90, 0.02]], 0, false, false],
      [[[-0.89, -0.01], [-0.86, 0.02]], 0, false, false],

      [[[-0.85, -0.01], [-0.82, 0.02]], 0, false, false],
      // [ [[-0.81, -0.01], [-0.78, 0.02]],0,false,false ],
      [[[-0.77, -0.01], [-0.74, 0.02]], 0, false, false],
      // [ [[-0.73, -0.01], [-0.70, 0.02]],0,false,false ],
      [[[-0.69, -0.01], [-0.66, 0.02]], 0, false, false],
      // [ [[-0.67, -0.01], [-0.64, 0.02]],0,false,false ],
      [[[-0.63, -0.01], [-0.60, 0.02]], 0, false, false],
      [[[-0.59, -0.01], [-0.56, 0.02]], 0, false, false],
      // [ [[-0.57, -0.01], [-0.54, 0.02]],0,false,false ],
      [[[-0.53, -0.01], [-0.50, 0.02]], 0, false, false],
      [[[-0.49, -0.01], [-0.46, 0.02]], 0, false, false],
      // [ [[-0.47, -0.01], [-0.44, 0.02]],0,false,false ],
      [[[-0.43, -0.01], [-0.40, 0.02]], 0, false, false],
      [[[-0.39, -0.01], [-0.36, 0.02]], 0, false, false],
      // [ [[-0.37, -0.01], [-0.34, 0.02]],0,false,false ],
      [[[-0.33, -0.01], [-0.30, 0.02]], 0, false, false],
      [[[-0.29, -0.01], [-0.26, 0.02]], 0, false, false],
      // [ [[-0.27, -0.01], [-0.24, 0.02]],0,false,false ],
      [[[-0.23, -0.01], [-0.20, 0.02]], 0, false, false],
      [[[-0.19, -0.01], [-0.16, 0.02]], 0, false, false],
      // [ [[-0.17, -0.01], [-0.14, 0.02]],0,false,false ],
      [[[-0.13, -0.01], [-0.10, 0.02]], 0, false, false],
      [[[-0.09, -0.01], [-0.06, 0.02]], 0, false, false],
      // [ [[-0.07, -0.01], [-0.04, 0.02]],0,false,false ],
      [[[-0.03, -0.01], [0, 0.02]], 0, false, false],

      [[[0.06, -0.01], [0.09, 0.02]], 0, false, false],
      [[[0.12, -0.01], [0.15, 0.02]], 0, false, false],
      [[[0.18, -0.01], [0.21, 0.02]], 0, false, false],
      [[[0.24, -0.01], [0.27, 0.02]], 0, false, false],
      [[[0.30, -0.01], [0.33, 0.02]], 0, false, false],
      [[[0.36, -0.01], [0.39, 0.02]], 0, false, false],
      [[[0.42, -0.01], [0.45, 0.02]], 0, false, false],
      [[[0.49, -0.01], [0.52, 0.02]], 0, false, false],
      // [ [[-0.47, -0.01], [-0.44, 0.02]],0,false,false ],
      // [ [[-0.37, -0.01], [-0.34, 0.02]],0,false,false ],
      // [ [[-0.27, -0.01], [-0.24, 0.02]],0,false,false ],
      // [ [[-0.17, -0.01], [-0.14, 0.02]],0,false,false ],
      // [ [[-0.07, -0.01], [-0.04, 0.02]],0,false,false ],
    ],
    points: [
      //[x,y,visible,name,type]
      [0.5, -0.2, false, '𝒂'],
      //
    ],
  },

  board_draw4: {
    style: {
      axis: [false, false, false],
      grid: false,
      maxHeight: 220,
      maxWidth: 220,
      boundingbox: [-0.01, 1, 1, -1],
      valueAxis: {
        yd: [[0, 0], [0, 1]],

        yp: [[0, 0], [0, 1]],
        yv: [],

        xd: [[0, 0], [1, 0]],

        xp: [-3.5, -3],
        xv: ['x1', 'x2'],
      },
    },
    points: [
      //[x,y,visible,name,type]
      [0, 0.6, false, 'Compare la altura ƒ(a) con TODAS las alturas ƒ(x), para las x de la región'],
      //
    ],
    lines: [//[[lista de puntos],dash,flecha primera,flecha segunda,color]
      [[[0, 0], [0.9, 0]], 0, false, true],

    ],
  },

  board_draw5: {
    style: {
      axis: [false, true, true],
      grid: false,
      maxHeight: 220,
      maxWidth: 220,
      boundingbox: [-1, 1, 1, -1],
      valueAxis: {
        yd: [[0, 0], [0, 1]],

        yp: [[0, 0], [0, 1]],
        yv: [],

        xd: [[0, 0], [1, 0]],

        xp: [-3.5, -3],
        xv: ['x1', 'x2'],
      },
    },
    lines: [//[[lista de puntos],dash,flecha primera,flecha segunda,color]
      [[[-1, 1], [1.1, 0]], 0, false, false],
      [[[-0.4, 0], [-0.4, 0.71]], 1, false, false],
      [[[0.4, 0], [0.4, 0.33]], 1, false, false],

      [[[-1, -0.01], [-0.98, 0.02]], 0, false, false],
      [[[-0.97, -0.01], [-0.94, 0.02]], 0, false, false],
      [[[-0.93, -0.01], [-0.90, 0.02]], 0, false, false],
      [[[-0.89, -0.01], [-0.86, 0.02]], 0, false, false],

      [[[-0.85, -0.01], [-0.82, 0.02]], 0, false, false],
      [[[-0.77, -0.01], [-0.74, 0.02]], 0, false, false],
      [[[-0.69, -0.01], [-0.66, 0.02]], 0, false, false],
      [[[-0.63, -0.01], [-0.60, 0.02]], 0, false, false],
      [[[-0.59, -0.01], [-0.56, 0.02]], 0, false, false],
      [[[-0.53, -0.01], [-0.50, 0.02]], 0, false, false],
      [[[-0.49, -0.01], [-0.46, 0.02]], 0, false, false],
      [[[-0.43, -0.01], [-0.40, 0.02]], 0, false, false],
      [[[-0.39, -0.01], [-0.36, 0.02]], 0, false, false],
      [[[-0.33, -0.01], [-0.30, 0.02]], 0, false, false],
      [[[-0.29, -0.01], [-0.26, 0.02]], 0, false, false],
      [[[-0.23, -0.01], [-0.20, 0.02]], 0, false, false],
      [[[-0.19, -0.01], [-0.16, 0.02]], 0, false, false],
      [[[-0.13, -0.01], [-0.10, 0.02]], 0, false, false],
      [[[-0.09, -0.01], [-0.06, 0.02]], 0, false, false],
      [[[-0.03, -0.01], [0, 0.02]], 0, false, false],

      [[[0.06, -0.01], [0.09, 0.02]], 0, false, false],
      [[[0.12, -0.01], [0.15, 0.02]], 0, false, false],
      [[[0.18, -0.01], [0.21, 0.02]], 0, false, false],
      [[[0.24, -0.01], [0.27, 0.02]], 0, false, false],
      [[[0.30, -0.01], [0.33, 0.02]], 0, false, false],
      [[[0.36, -0.01], [0.39, 0.02]], 0, false, false],
    ],
    points: [
      //[x,y,visible,name,type]
      [0.38, -0.2, false, '𝒂'],
      [-0.41, -0.2, false, 'x'],
    ],
  },

  //Boards de 1ra parte 

  board_13: {
    style: {
      axis: [false, true, true],
      grid: false,
      maxHeight: 220,
      maxWidth: 220,
      boundingbox: [-3.1, 4.3, 3.1, -1.8],
      valueAxis: {
        yd: [[0, 0], [0, 1]],

        yp: [[0, 0], [0, 1]],
        yv: [],

        xd: [[0, 0], [1, 0]],

        xp: [-3.5, -3],
        xv: ['x1', 'x2'],
      },
    },

    points: [
      //[x,y,visible,name,type]
      [-1.45, -0.6, false, '𝒂'],
    ],
    lines: [//[[lista de puntos],dash,flecha primera,flecha segunda,color]
      [[[-1.4, 0], [-1.4, 2.6]], 2, false, false],
    ],
    curves: [//[[lista de puntos],Color]
      [[[-2.8, 1.077032961, false], [-2.6, 1.496662955, false], [-2.4, 1.8, false], [-2.2, 2.039607805, false], [-2, 2.236067977, false], [-1.8, 2.4, false], [-1.6, 2.537715508, false], [-1.4, 2.653299832, false], [-1.2, 2.749545417, false], [-1, 2.828427125, false], [-0.8, 2.891366459, false], [-0.6, 2.939387691, false], [-0.4, 2.973213749, false], [-0.2, 2.993325909, false], [0, 3, false], [0.2, 2.993325909, false], [0.4, 2.973213749, false], [0.6, 2.939387691, false], [0.8, 2.891366459, false], [1, 2.828427125, false], [1.2, 2.749545417, false], [1.4, 2.653299832, false], [1.6, 2.537715508, false], [1.8, 2.4, false], [2, 2.236067977, false], [2.2, 2.039607805, false], [2.4, 1.8, false], [2.6, 1.496662955, false], [2.8, 1.077032961, false]], 'black'],
    ],
  },
  board_13_1: {
    style: {
      axis: [false, true, true],
      grid: false,
      maxHeight: 220,
      maxWidth: 220,
      boundingbox: [-3.1, 4.3, 3.1, -1.8],
      valueAxis: {
        yd: [[0, 0], [0, 1]],

        yp: [[0, 0], [0, 1]],
        yv: [],

        xd: [[0, 0], [1, 0]],

        xp: [-3.5, -3],
        xv: ['x1', 'x2'],
      },
    },

    points: [
      //[x,y,visible,name,type]
      [0.6, -0.6, false, '𝒂'],
    ],
    lines: [//[[lista de puntos],dash,flecha primera,flecha segunda,color]
      [[[0.7, 0], [0.7, 3]], 2, false, false],
    ],
    curves: [//[[lista de puntos],Color]
      [[[-2.8, 1.077032961, false], [-2.6, 1.496662955, false], [-2.4, 1.8, false], [-2.2, 2.039607805, false], [-2, 2.236067977, false], [-1.8, 2.4, false], [-1.6, 2.537715508, false], [-1.4, 2.653299832, false], [-1.2, 2.749545417, false], [-1, 2.828427125, false], [-0.8, 2.891366459, false], [-0.6, 2.939387691, false], [-0.4, 2.973213749, false], [-0.2, 2.993325909, false], [0, 3, false], [0.2, 2.993325909, false], [0.4, 2.973213749, false], [0.6, 2.939387691, false], [0.8, 2.891366459, false], [1, 2.828427125, false], [1.2, 2.749545417, false], [1.4, 2.653299832, false], [1.6, 2.537715508, false], [1.8, 2.4, false], [2, 2.236067977, false], [2.2, 2.039607805, false], [2.4, 1.8, false], [2.6, 1.496662955, false], [2.8, 1.077032961, false]], 'black'],
    ],
  },

  board_13_2: {
    style: {
      axis: [false, true, true],
      grid: false,
      maxHeight: 220,
      maxWidth: 220,
      boundingbox: [-2, 3.5, 2, -2],
      valueAxis: {
        yd: [[0, 0], [0, 1]],

        yp: [[0, 0], [0, 1]],
        yv: [],

        xd: [[0, 0], [1, 0]],

        xp: [-3.5, -3],
        xv: ['x1', 'x2'],
      },
    },
    points: [
      //[x,y,visible,name,type]
    ],
    lines: [//[[lista de puntos],dash,flecha primera,flecha segunda,color]
      [[[-0.5, 0], [-0.5, 2]], 1, false, false],
    ],
    curves: [//[[lista de puntos],Color]
      [[[-2, 0, false], [-1.03, 1.71, true], [0, 2, true], [1.03, 1.71, true], [2, 0, false]], 'black'],
      [[[-2, 0, false], [-1.9, 0.1, false], [-1.8, 0.2, false], [-1.7, 0.3, false], [-1.6, 0.4, false], [-1.5, 0.5, false], [-1.4, 0.6, false], [-1.3, 0.7, false], [-1.2, 0.8, false], [-1.1, 0.9, true], [1, 1, true]], 'black'],
    ],
  },

  board_13_3: {
    style: {
      axis: [false, true, true],
      grid: false,
      maxHeight: 220,
      maxWidth: 220,
      boundingbox: [-2, 3.5, 2, -2],
      valueAxis: {
        yd: [[0, 0], [0, 1]],

        yp: [[0, 0], [0, 1]],
        yv: [],

        xd: [[0, 0], [1, 0]],

        xp: [-3.5, -3],
        xv: ['x1', 'x2'],
      },
    },
    points: [
      //[x,y,visible,name,type]
    ],
    lines: [//[[lista de puntos],dash,flecha primera,flecha segunda,color]
      [[[-0.5, 0], [-0.5, 2]], 1, false, false],
    ],
    curves: [//[[lista de puntos],Color]
      [[[-2, 0, false], [-1.03, 1.71, true], [0, 2, true], [1.03, 1.71, true], [2, 0, false]], 'black'],
      [[[-2, 0, false], [-1.9, 0.1, false], [-1.8, 0.2, false], [-1.7, 0.3, false], [-1.6, 0.4, false], [-1.5, 0.5, false], [-1.4, 0.6, false], [-1.3, 0.7, false], [-1.2, 0.8, false], [-1.1, 0.9, true], [1, 1, true]], 'black'],
    ],
  },

  //Board 2da parte
  board_14: {
    style: {
      axis: [false, true, true],
      grid: false,
      maxHeight: 290,
      maxWidth: 290,
      boundingbox: [-1, 1, 0.3, -0.5],
      valueAxis: {
        yd: [[0, 0], [0, 1]],

        yp: [[0, 0], [0, 1]],
        yv: [],

        xd: [[0, 0], [1, 0]],

        xp: [-3.5, -3],
        xv: ['x1', 'x2'],
      },
    },
    points: [
      //[x,y,visible,name,type]
      [-3, 3.5, true],
      [0.2, 0.55, false, 'ƒ(𝒶)'],
      [-0.5, -0.1, false, '𝒶'],


      //

    ],
    lines: [//[[lista de puntos],dash,flecha primera,flecha segunda,color],

      [[[-0.7, 0.8], [0.25, -0.4]], 0, false, false],

      [[[-0.5, 0.9], [-0.5, -0.4]], 2, false, false],
      [[[-0.95, 0.55], [0.3, 0.55]], 2, false, false],



    ],
    curves: [//[[lista de puntos],Color]
    ],
  },

  board_15: {
    style: {
      axis: [false, true, true],
      grid: false,
      maxHeight: 290,
      maxWidth: 290,
      boundingbox: [-1, 1, 0.3, -0.5],
      valueAxis: {
        yd: [[0, 0], [0, 1]],

        yp: [[0, 0], [0, 1]],
        yv: [],

        xd: [[0, 0], [1, 0]],

        xp: [-3.5, -3],
        xv: ['x1', 'x2'],
      },
    },
    points: [
      //[x,y,visible,name,type]
      [-3, 3.5, true],
      [0.2, 0.55, false, 'ƒ(𝒶)'],
      [-0.5, -0.1, false, '𝒶'],

      //

    ],
    lines: [//[[lista de puntos],dash,flecha primera,flecha segunda,color],

      [[[-0.9, 0.2], [-0.15, 0.85]], 0, false, false],

      [[[-0.5, 0.9], [-0.5, -0.4]], 2, false, false],
      [[[-0.95, 0.55], [0.3, 0.55]], 2, false, false],



    ],
    curves: [//[[lista de puntos],Color]
    ],
  },

  board_16: {
    style: {
      axis: [false, true, true],
      grid: false,
      maxHeight: 290,
      maxWidth: 290,
      boundingbox: [-1, 0.9, 0.3, -0.5],
      valueAxis: {
        yd: [[0, 0], [0, 1]],

        yp: [[0, 0], [0, 1]],
        yv: [],

        xd: [[0, 0], [1, 0]],

        xp: [-3.5, -3],
        xv: ['x1', 'x2'],
      },
    },
    points: [
      //[x,y,visible,name,type]
      [-3, 3.5, true],
      [0.2, 0.55, false, 'ƒ(𝒶)'],
      [-0.5, -0.1, false, '𝒶'],

      //

    ],
    lines: [//[[lista de puntos],dash,flecha primera,flecha segunda,color],

      [[[-0.5, 0.55], [0.25, 0.85]], 0, false, false],
      [[[-0.8, 0.85], [-0.5, 0.55]], 0, false, false],



      [[[-0.5, 0.9], [-0.5, -0.4]], 2, false, false],
      [[[-0.95, 0.55], [0.3, 0.55]], 2, false, false],



    ],
    curves: [//[[lista de puntos],Color]
    ],
  },


  board_17: {
    style: {
      axis: [false, true, true],
      grid: false,
      maxHeight: 290,
      maxWidth: 290,
      boundingbox: [-1, 0.9, 0.3, -0.5],
      valueAxis: {
        yd: [[0, 0], [0, 1]],

        yp: [[0, 0], [0, 1]],
        yv: [],

        xd: [[0, 0], [1, 0]],

        xp: [-3.5, -3],
        xv: ['x1', 'x2'],
      },
    },
    points: [
      //[x,y,visible,name,type]
      [-3, 3.5, true],
      [0.2, 0.55, false, 'ƒ(𝒶)'],
      [-0.5, -0.1, false, '𝒶'],
    ],
    lines: [//[[lista de puntos],dash,flecha primera,flecha segunda,color],

      //Grafica
      [[[-1, 0.35], [-0.75, 0.75]], 0, false, false],
      [[[-0.75, 0.75], [-0.25, 0.35],], 0, false, false],

      [[[-0.25, 0.35], [0.1, 0.85]], 0, false, false],
      [[[0.1, 0.85], [0.2, 0.75]], 0, false, false],

      //cotas
      [[[-0.50, 0.9], [-0.5, -0.4]], 2, false, false],
      [[[-0.95, 0.55], [0.3, 0.55]], 2, false, false],
    ],

    curves: [//[[lista de puntos],Color]

    ],
  },


  board_18: {
    style: {
      axis: [false, true, true],
      grid: false,
      maxHeight: 290,
      maxWidth: 290,
      boundingbox: [-1, 0.9, 0.3, -0.5],
      valueAxis: {
        yd: [[0, 0], [0, 1]],

        yp: [[0, 0], [0, 1]],
        yv: [],

        xd: [[0, 0], [1, 0]],

        xp: [-3.5, -3],
        xv: ['x1', 'x2'],
      },
    },
    points: [
      //[x,y,visible,name,type]
      [-3, 3.5, true],
      [0.2, 0.55, false, 'ƒ(𝒶)'],
      [-0.5, -0.1, false, '𝒶'],
    ],

    lines: [//[[lista de puntos],dash,flecha primera,flecha segunda,color],
    ],

    curves: [//[[lista de puntos],Color]
      [[[-1, -0.1, false], [0, -0.8, true], [1, -1, true]], 'black'],
    ],
  },

};


const rDef = {
  artifactHtml: {
    datadefault: [
      {
        customKeyboard:2,

        type:15,
        parent: '#question',
        dataInteraction: { },
        content: {
          artifact_1:{
            allinputs: [],
            dataInteraction: { incorrect: 0, correct: 0,forAnswer: 0},

            questions:[
                 
              {
                type:0,
                text:['ƒ(x)'],
                classStyle:'inlineText'
              },
              {
                    
                type: 3, // una pregunta. Varios inputs
                inputsDefault: [['-1.1', false]],
                classStyle:'inlineInput',
    
                conditions: {
                  valueInputs: [['\\nexists']],
                },
                     
              },
              {
                type:0,
                text:['ƒ(a)'],
                classStyle:'inlineText'
              },
                    
               
                 
            ]} 
                
        }
               
      },
      {
        customKeyboard:2,

        type:15,
        parent: '#question2',
        dataInteraction: { },
        content: {
          artifact_2:{
            allinputs: [],
            dataInteraction: { incorrect: 0, correct: 0,forAnswer: 0},

            questions:[
              
              {
                type:0,
                text:['ƒ(x)'],
                classStyle:'inlineText'
              },
              {
                 
                type: 3, // una pregunta. Varios inputs
                inputsDefault: [['-1.1', false]],
                classStyle:'inlineInput',
 
                conditions: {
                  valueInputs: [['<']],
                },
                  
              },
              {
                type:0,
                text:['ƒ(a)'],
                classStyle:'inlineText' 
              },
                 
            
              
            ]} 
             
        }
            
      },
      {
        customKeyboard:2,

        type:15,
        parent: '#question3',
        dataInteraction: { },
        content: {
          artifact_3:{
            allinputs: [],
            dataInteraction: { incorrect: 0, correct: 0,forAnswer: 0},

            questions:[
           
              {
                type:0,
                text:['ƒ(x)'],
                classStyle:'inlineText'
              },
              {
              
                type: 3, // una pregunta. Varios inputs
                inputsDefault: [['-1.1', false]],
                classStyle:'inlineInput',

                conditions: {
                  valueInputs: [['<']],
                },
               
              },
              {
                type:0,
                text:['ƒ(a)'],
                classStyle:'inlineText'
              },
              
         
           
            ]} 
          
        }
         
      },
      {
        customKeyboard:2,

        type:15,
        parent: '#question4',
        dataInteraction: { },
        content: {
          artifact_4:{
            allinputs: [],
            dataInteraction: { incorrect: 0, correct: 0,forAnswer: 0},

            questions:[
        
              {
                type:0,
                text:['ƒ(x)'],
                classStyle:'inlineText'
              },
              {
           
                type: 3, // una pregunta. Varios inputs
                inputsDefault: [['-1.1', false]],
                classStyle:'inlineInput',

                conditions: {
                  valueInputs: [['\\nexists']],
                },
            
              },
              {
                type:0,
                text:['ƒ(a)'],
                classStyle:'inlineText'
              },
           
      
        
            ]} 
       
        }
      
      },


      /* --------------------------------- Segunda Parte --------------------------------- */

      //______________________________/Ejercicio1

      {
        customKeyboard:2,

        type:15,
        parent: '#question5',
        dataInteraction: { },
        content: {
          artifact_5:{
            allinputs: [],
            dataInteraction: { incorrect: 0, correct: 0,forAnswer: 0},

            questions:[
           
              {
                type:0,
                text:['ƒ(x) > ƒ(a) si x '],
                classStyle:'inlineText'
              },
              {
              
                type: 3, // una pregunta. Varios inputs
                inputsDefault: [['-1.1', false]],
                classStyle:'inlineInput',

                conditions: {
                  valueInputs: [['<']],
                },
               
              },
              {
                type:0,
                text:['a'],
                classStyle:'inlineText'
              },
              
         
           
            ]} 
          
        }
         
      },
      //_________________________________________

      //______________________________/Ejercicio2

      {
        customKeyboard:2,

        type:15,
        parent: '#question6',
        dataInteraction: { },
        content: {
          artifact_6:{
            allinputs: [],
            dataInteraction: { incorrect: 0, correct: 0,forAnswer: 0},
   
            questions:[
              
              {
                type:0,
                text:['ƒ(x) > ƒ(a) si x '],
                classStyle:'inlineText'
              },
              {
                 
                type: 3, // una pregunta. Varios inputs
                inputsDefault: [['-1.1', false]],
                classStyle:'inlineInput',
   
                conditions: {
                  valueInputs: [['>']],
                },
                  
              },
              {
                type:0,
                text:['a'],
                classStyle:'inlineText'
              },
                 
            
              
            ]} 
             
        }
            
      },
      //_________________________________________

      //______________________________/Ejercicio3

      {
        customKeyboard:2,

        type:15,
        parent: '#question7',
        dataInteraction: { },
        content: {
          artifact_7:{
            allinputs: [],
            dataInteraction: { incorrect: 0, correct: 0,forAnswer: 0},
      
            questions:[
                 
              {
                type:0,
                text:['ƒ(x) > ƒ(a) si x '],
                classStyle:'inlineText'
              },
              {
                    
                type: 3, // una pregunta. Varios inputs
                inputsDefault: [['-1.1', false]],
                classStyle:'inlineInput',
      
                conditions: {
                  valueInputs: [['≠']],
                },
                     
              },
              {
                type:0,
                text:['a'],
                classStyle:'inlineText'
              },
                    
               
                 
            ]} 
                
        }
               
      },
      //_________________________________________
      //______________________________/Ejercicio4

      {
        customKeyboard:2,

        type:15,
        parent: '#question8',
        dataInteraction: { },
        content: {
          artifact_8:{
            allinputs: [],
            dataInteraction: { incorrect: 0, correct: 0,forAnswer: 0},

            questions:[
           
              {
                type:0,
                text:['ƒ(x) > ƒ(a) si x '],
                classStyle:'inlineText'
              },
              {
              
                type: 3, // una pregunta. Varios inputs
                inputsDefault: [['-1.1', false]],
                classStyle:'inlineInput',

                conditions: {
                  valueInputs: [['\\nexists']],
                },
               
              },
              {
                type:0,
                text:['a'],
                classStyle:'inlineText'
              },
              
         
           
            ]} 
          
        }
         
      },
      //_________________________________________

  


      //PREGUNTAS
        
    ],
  },

 
};

/* 


*/

const defLayout = {
 
  element1:{
    parentContainer: '.artifact_1',
    typeLayout:'',
    classes: ' ',
    typeLayout:'rowElements',
    style : '',
    addHtml:'<p class = \'statement\'>Si x > a </p>',
    containers:[
      {
        id:'board1',
        boardName: 'board_0',
        boardObject: b0.builder(),
        attributes:[['board', 'board_0'],[]],
        classes:' c-2 boardContainer',
            
        style:'',
        typeElement:'',
      },
      {
        classes:'questions',
        id:'question',
        attributes:[]
      }

    ]
  },
  element2:{
    parentContainer: '.artifact_2',
    typeLayout:'',
    classes: ' ',
    typeLayout:'rowElements',
    style : '',
    addHtml:'<p class = \'statement\'>Si x > a </p>',
    containers:[
      {
        id:'board2',
        boardName: 'board_0',
        boardObject: b1.builder(),
        attributes:[['board', 'board_0'],[]],
        classes:' c-2 boardContainer',

           
        style:'',
        typeElement:'',
      },
      {
        classes:'questions',
        id:'question2',
        attributes:[]
      }

    ]
  },
  element3:{
    parentContainer: '.artifact_3',
    typeLayout:'',
    classes: '',
    typeLayout:'rowElements',
    style : '',
    addHtml:'<p class = \'statement\'>Si x < a </p>',
    containers:[
      {
        id:'board3',
        boardName: 'board_0',
        boardObject: b0.builder(),
        attributes:[['board', 'board_0'],[]],
        classes:' c-2 boardContainer',
        
        style:'',
        typeElement:'',
      },
      {
        classes:'questions',
        id:'question3',
        attributes:[]
      }

    ]
  },
  element4:{
    parentContainer: '.artifact_4',
    typeLayout:'',
    classes: '',
    typeLayout:'rowElements',
    style : '',
    addHtml:'<p class = \'statement\'>Si x < a </p>',
    containers:[
      {
        id:'board4',
        boardName: 'board_0',
        boardObject: b1.builder(),
        attributes:[['board', 'board_0'],[]],
        classes:' c-2 boardContainer',

        
        style:'',
        typeElement:'',
      },
      {
        classes:'questions',
        id:'question4',
        attributes:[]
      }

    ]
  },
  // Ejercicios 

  element5:{
    parentContainer: '.artifact_5',
    typeLayout:'',
    classes: '',
    typeLayout:'rowElements',
    style : '',
    
    containers:[
      {
        id:'board5',
        boardName: 'board_0',
        boardObject: b2.builder(),
        attributes:[['board', 'board_0'],[]],
        classes:' c-2 boardContainer',
        style:'',
        typeElement:'',
      },
      {
        classes:'questions',
        id:'question5',
        attributes:[]
      }

    ]
  },

  element6:{
    parentContainer: '.artifact_6',
    typeLayout:'',
    classes: ' ',
    typeLayout:'rowElements',
    style : '',
 
    containers:[
      {
        id:'board6',
        boardName: 'board_0',
        boardObject: b3.builder(),
        attributes:[['board', 'board_0'],[]],
        classes:' c-2 boardContainer',

        
        style:'',
        typeElement:'',
      },
      {
        classes:'questions',
        id:'question6',
        attributes:[]
      }

    ]
  },


  element7:{
    parentContainer: '.artifact_7',
    typeLayout:'',
    classes: ' ',
    typeLayout:'rowElements',
    style : '',
 
    containers:[
      {
        id:'board7',
        boardName: 'board_0',
        boardObject: b4.builder(),
        attributes:[['board', 'board_0'],[]],
        classes:' c-2 boardContainer',

        style:'',
        typeElement:'',
      },
      {
        classes:'questions',
        id:'question7',
        attributes:[]
      }

    ]
  },
  element8:{
    parentContainer: '.artifact_8',
    typeLayout:'',
    classes: '',
    typeLayout:'rowElements',
    style : '',
 
    containers:[
      {
        id:'board8',
        boardName: 'board_0',
        boardObject: b5.builder(),
        attributes:[['board', 'board_0'],[]],
        classes:' c-2 boardContainer',

        style:'',
        typeElement:'',
      },
      {
        classes:'questions',
        id:'question8',
        attributes:[]
      }

    ]
  },


}


window.onload = initMain();

function initMain() {
  defBoardDefault()
  createLayouts(defLayout)
  generator(rDef);

};




