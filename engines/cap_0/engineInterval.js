//Variables para saber En que ejercicio esta posicionado el usuario y estado de la vista
let siteMode = 'desktop'; //movile
// let targetActive = "";
let firstPoint = null;
//Funcion qye genera elementos del DOM con el template y el Fragmento

function generation(def) {
  //VAriables del DOM
  let main = document.querySelector('#container-all-artifact');
  const template = document.getElementById('template-interval');
  //Creamos un Fragmento para clonar los  template
  const fragment = new DocumentFragment();

  for (let index of Object.keys(def)) {
    const clone = template.content.firstElementChild.cloneNode(true);
    const aux = index;
    //Parametos predefinidos de los ejercicios
    let defDefault = {
      debug: true,
      interval: def[index].interval || false,
      representation: def[index].representation || false,
      conditions: {
        board: def[index].conditions?.board || false,
        valRepre: def[index].conditions?.valRepre || false,
        valInterval: def[index].conditions?.valInterval || false,
      },
      dataInteraction: {
        correct: 0,
        incorrect: 0,
      },
      preDefPoint: def[index].preDefPoint || false,
      preDefPar: def[index].preDefPar || false,
      others: [],
      pointsPares: [],
      floatPoint: [],
      board: null,
      change: false,
      inputRight: null,
      inputLeft: null,
      state: false,
      comment: def[index].comment || false,
      equalMatch: def[index].equalMatch || false,
      buttonActive: null,
      timeInteraction: 0,
      statusValidate: false,
      modeText: def[index].modeText || false
    };
    // Captura de los botones creados en el template
    const board = clone.querySelector('#board');
    const allButtons = clone.querySelector('.allButtons');
    const inputLeft = clone.querySelector('.inpEngInt1');
    const inputRight = clone.querySelector('.inpEngInt2');

    keyboardCustom(defDefault, inputLeft);
    keyboardCustom(defDefault, inputRight);

    clone.addEventListener('click', (e) => {
      if (e.target.tagName === 'INPUT') {
        var targetInput = e.target;
      }
      if (e.target.id == 'btn-reset') {
        defButtonToggle(def[index], null, '');
        defReset(defDefault, aux);
      }
      if (e.target.id == 'btn-validation') {
        defButtonToggle(def[index], null, '');
        defValidation(defDefault, aux);
      }
    });

    //Añadimos atrubutos al clone
    clone.setAttribute('id', index);
    //Seteamos el id del board para saber en que ejercicio
    board.setAttribute('id', 'board_' + index);

    if (defDefault.interval) {
      inputLeft.textContent = def[index].interval;
      inputLeft.setAttribute('disabled', 'disabled');
      //qui tienen que ir los botones que estaran desabilitados cuando el intervalo este declarado
    }
    if (defDefault.representation) {
      inputRight.textContent = def[index].representation;
      inputRight.setAttribute('disabled', 'disabled');
      //qui tienen que ir los botones que estaran desabilitados cuando la reprecentacion esta declarado
    }
    if (
      defDefault.representation &&
      (defDefault.preDefPoint || defDefault.preDefPar) &&
      defDefault.interval
    ) {
      clone.querySelector('#contentButtons').remove();
    }

    //Condicion para deshabilitar los botones si en el ejercicio tiene por defecto los puntos en el plano
    fragment.appendChild(clone);
    defDefault.inputLeft = inputLeft;
    defDefault.inputRight = inputRight;
    def[index] = defDefault;
    if (def[index].comment) {
      inputLeft.classList.add('yellow');
      board.classList.add('yellow');
    }
    interactionKeyboard(defDefault, allButtons);

    clone.addEventListener('mouseenter', () => {
      gTime(defDefault);
    });
    clone.addEventListener('click', () => {
      gTime(defDefault);
    });

    clone.addEventListener('mouseleave', () => {
      gTime(defDefault, false, false);
    });
  }
  main.appendChild(fragment);
  defBoard(def);
}
//Creamos el board de los ejercicio (Plano)
function defBoard(def) {
  for (let index of Object.keys(def)) {
    const divparent = document.querySelector('#board_' + index);
    let board = JXG.JSXGraph.initBoard('board_' + index, {
      boundingbox: [-1, 0.5, 8, -1],
      grid: false,
      showNavigation: false,
      showCopyright: false,
      keyboard: {
        enabled: false,
        dy: 30,
        panShift: true,
        panCtrl: false,
      },
      pan: {
        needTwoFingers: false,
        enabled: false,
        needShift: true,
      },
      zoom: {
        needShift: false,
        pinchHorizontal: false,
        pinchVertical: false,
        pinchSensitivity: 0,
        min: 1000,
        max: 0,
        factorX: 0,
        factorY: 0,
        wheel: false,
      },
    });
    def[index].board = board;
    let point1 = board.create('point', [0, 0], {
      name: '-∞',
      fixed: true,
      fillcolor: 'white',
      visible: false,
      label: {
        color: 'black',
        fontSize: 20,
        offset: [-25, 1],
        visible: true,
        precision: {
          touch: 10,
          mouse: 5,
          pen: 5,
          hasPoint: 1,
        },
      },
    });

    let point2 = board.create('point', [7, 0], {
      name: '+∞',
      fixed: true,
      fillcolor: 'white',
      visible: false,
      label: {
        color: 'black',
        fontSize: 20,
        offset: [3, 1],
        visible: true,
        precision: {
          touch: 10,
          mouse: 5,
          pen: 5,
          hasPoint: 1,
        },
      },
    });

    let arrow = board.create('arrow', [point1, point2], {
      layer: 0,
      precision: {
        touch: 6,
        touchMax: 5,
        mouse: 5,
        pen: 3,
        hasPoint: 0,
      },
    });
    const def2 = def[index];
    const aux = index;
    // board.addEventListener("click", (e) => defNewPoint(e, aux));
    arrow.on('down', (e) => defNewPoint(def2, e, aux));
    point1.label.on('down', () => {
      defConection(
        def2,
        [point1, point1.name, true, point1.X()],
        firstPoint,
        aux
      );
    });

    point2.label.on('down', () => {
      defConection(
        def2,
        [point2, point2.name, true, point2.X()],
        firstPoint,
        aux
      );
    });
    //Condicion para crear los puntos predefinidos y sus conexiones
    if (def2.preDefPoint) {
      defPointDefault(index, board);
      divparent.classList.add('disabledGraph');
    }
    if (def2.preDefPar) {
      defParDefault(index, board);
      divparent.classList.add('disabledGraph');
    }
  }
  defResponsibe();
}
//creacion de nuevos puntos al pulsar el board
function defNewPoint(def, e, target) {
  const size = siteMode == 'desktop' ? 6 : 6;
  const offset = [
    siteMode == 'desktop' ? 0.2 : 0.15,
    siteMode == 'desktop' ? -0.5 : -0.6,
  ];
  //evita que se solapen los puntos
  const elementIn = def.board.getAllUnderMouse();
  if (elementIn.findIndex((item) => item.elType === 'point') != -1) {
    return;
  }


  let aux = [null, null, null, null];
  //Aqui estamos diciendo que lols ejercicios tiene la propiedad preDefPoint me va a bloquear el board
  if (!def.preDefPoint) {
    //Condicion para que no pinta mas de 4 puntos en el board

    if (
      def.floatPoint.length > 3 ||
      (def.state != 'pointC' && def.state != 'pointA')
    ) {
      return;
    }

    //Coordenadas del los puntos
    let mouse = def.board.getUsrCoordsOfMouse(e);

    //Condicion para generar los puntos abiertos
    let point = null;
    let x = mouse[0];

    /* FUNCIONALIDAD PARA SEPARAR LOS PUNTOS Y EVITAR QUE NO SE GENEREN JUNTOS EL INPUT */
    if (def.floatPoint.findIndex((el) => {
      if (gDist([x, 0], [el[3], 0]) < 0.8) {
        return true;
      }
    }) != -1) {
      return;
    }

    aux[3] = x;

    if (def.state == 'pointA') {
      point = def.board.create('point', [x, 0], {
        name: '',
        fillcolor: 'white',
        fixed: true,
        size,
        precision: {
          touch: 6,
          touchMax: 8,
          mouse: 5,
          pen: 5,
          hasPoint: 1,
        },
      });

      aux[2] = true;
    }
    //Condicion para generar los puntos cerrados
    if (def.state == 'pointC') {
      point = def.board.create('point', [x, 0], {
        name: '',
        fixed: true,
        size,
        precision: {
          color: onratechange,
          touch: 6,
          touchMax: 8,
          mouse: 5,
          pen: 5,
          hasPoint: 1,
        },
      });
      aux[2] = false;
    }

    /* Inicio */
    /* Refactorizando esta variable input para que cree una etiqueta html math-field de la nueva libreria de formulas*/
    let input = def.board.create(
      'text',
      [
        x + offset[1] + 0.3,
        offset[1] - 0.1,
        `<math-field
         virtual-keyboard-mode='onfocus' 
         placeholder = '(x, y)
         fonts-directory='fonts'
         class='colorInput'
         keypress-sound ='none'></math-field>`,
      ],
      {
        cssStyle: 'width: 30px',
        fixed: true,
        precision: {
          touch: 0.01,
          touchMax: 0.1,
          mouse: 5,
          pen: 1,
        },
      }
    );
    let pointLatex = input.rendNode.childNodes[0];

    /* Llamando la funcion keyboardCustom para añadirle el teclado personalizado al input ya creado */
    keyboardCustom(def, pointLatex);

    /* Fin de la Refactorizacion */
    pointLatex.addEventListener('input', () => {
      def.change = true;
      def.statusValidate = false;
      gTime(def);
    });
    aux[1] = input;
    aux[0] = point;

    def.floatPoint.push(aux);
    aux[0].on('down', (e) => {
      defConection(def, aux, firstPoint, target);
      def.change = true;
      def.statusValidate = false;
      gTime(def);
    });
    styleMath(pointLatex);
  }

  gTime(def);
  def.change = true;
  def.statusValidate = false;

};

//Resetear ejercicios
function defReset(def, target) {
  const intervalInput = def.inputLeft;
  const repreInput = def.inputRight;
  const divBoardActive = document.getElementById('board_' + target);
  def.board.removeObject(def.others);
  def.board.removeObject(def.floatPoint);
  def.floatPoint = [];
  def.others = [];
  def.pointsPares = [];
  //interval input
  intervalInput.classList.remove('pass');
  intervalInput.classList.remove('failed');
  intervalInput.classList.remove('input-sended');
  if (!def.interval) {
    intervalInput.value = '';
  }
  //representasion
  repreInput.classList.remove('pass');
  repreInput.classList.remove('failed');
  if (!def.representation) {
    repreInput.value = '';
  }
  //board
  divBoardActive.classList.remove('failed');
  divBoardActive.classList.remove('pass');
  divBoardActive.classList.remove('input-sended');
  def.statusValidate = true;
  def.board.update();
}
//Validar ejercicios
function defValidation(def, target) {

  if (def.statusValidate || !def.change) { return; };

  const divBoardActive = document.getElementById('board_' + target);
  def.dataInteraction.incorrect = 0;
  def.dataInteraction.correct = 0;
  def.dataInteraction.forAnswer = 0;
  let conditions = def.conditions;

  if (!def.comment) {
    if (!def.interval) {
      if (def.inputLeft.value.replace(/\\text{}/gi, '').replace(/\\text{}/gi, '') !== '') {

        if (defCorrectionInputs(conditions.valInterval, def.inputLeft, def)) {
          def.dataInteraction.correct += 1;
        } else {
          def.dataInteraction.incorrect += 1;
        }
      } else {
        def.dataInteraction.forAnswer += 1;
        def.inputLeft.classList.remove('pass');
        def.inputLeft.classList.remove('failed');
        def.inputLeft.classList.remove('bounce');
      }
    }

    if (!def.preDefPoint) {

      if (defCorrectionBoard(conditions, target).length !== 0) {
        if (defCorrectionBoard(conditions, target) === true) {
          def.dataInteraction.correct += 1;
        } else {
          def.dataInteraction.incorrect += 1;
        }
      } else {
        def.dataInteraction.forAnswer += 1;
      }
    }

    if (!def.representation) {
      if (def.inputRight.value.replace(/\\text{}/gi, '').replace(/\\text{}/gi, '') !== '') {
        if (defCorrectionInputs(conditions.valRepre, def.inputRight, def)) {
          def.dataInteraction.correct += 1;
        } else {
          def.dataInteraction.incorrect += 1;
        }
      } else {
        def.dataInteraction.forAnswer += 1;
        def.inputRight.classList.remove('pass');
        def.inputRight.classList.remove('failed');
        def.inputRight.classList.remove('bounce');

      }
    }
  } else {
    def.inputLeft.classList.add('input-sended');
    divBoardActive.classList.add('input-sended');
  }
  if (
    typeof Android !== 'undefined' &&
    typeof Android.sendData === 'function'
  ) {
    Android.sendData(JSON.stringify(cleanData(def, target)));
    // La función Android.sendData(json) está disponible
    gTime(def, false);
    def.change = false;
    def.statusValidate = false;
  }

  sendData(cleanData(def, target));

  gTime(def, false);
  def.statusValidate = true;
  def.change = false;
}
//evalua las condiciones con respecto los puntos y pares en el board
function defCorrectionBoard(conditions, target) {
  const mathDestructuring = {
    'left\\(': '(',
    'right\\)': ')',
    lbrack: '[',
    rbrack: ']',
    lbrace: '{',
    rbrace: '}',
    infty: '∞',
  };

  const boardActive = document
    .getElementById(target)
    .querySelector('#board_' + target);

  const sortPoints = def[target].floatPoint.sort(function (a, b) {
    return a[3] - b[3];
  });
  const sortPares = def[target].pointsPares.sort((p1, p2) => {
    return p1[0][3] - p2[0][3];
  });
  const allPointResult = sortPoints.map((item) => {
    //return [item[1].rendNode.childNodes[0].value.toLowerCase(), item[2]];
    return [latexClear(item[1].rendNode.childNodes[0], mathDestructuring), item[2]];

  });
  let resp = false;
  boardActive.classList.remove('pass');
  boardActive.classList.remove('failed');


  if (conditions.board === undefined || conditions.board.length == 0) {
    resp = allPointResult.length == 0 && pointAll.length == 0;
  } else {
    let pointsPares = sortPares.map((element) => {
      if (def[target].modeText) {
        return [
          typeof element[0][1] === 'string'
            ? element[0][1].toLowerCase()
            : latexClear(element[0][1].rendNode.childNodes[0], mathDestructuring),
          typeof element[1][1] === 'string'
            ? element[1][1].toLowerCase()
            : latexClear(element[1][1].rendNode.childNodes[0], mathDestructuring),
        ];

      } else {
        return [
          typeof element[0][1] === 'string'
            ? element[0][1].toLowerCase()
            : latexClear(element[0][1].rendNode.childNodes[0], mathDestructuring),
          typeof element[1][1] === 'string'
            ? element[1][1].toLowerCase()
            : latexClear(element[1][1].rendNode.childNodes[0], mathDestructuring),
        ];/* return [
               typeof element[0][1] === "string"
                  ? element[0][1].toLowerCase()
                  : element[0][1].rendNode.childNodes[0].value.toLowerCase(),
               typeof element[1][1] === "string"
                  ? element[1][1].toLowerCase()
                  : element[1][1].rendNode.childNodes[0].value.toLowerCase(),
            ]; */
      }
      /* return [
            typeof element[0][1] === "string"
               ? element[0][1].toLowerCase()
               : element[0][1].rendNode.childNodes[0].value.toLowerCase(),
            typeof element[1][1] === "string"
               ? element[1][1].toLowerCase()
               : element[1][1].rendNode.childNodes[0].value.toLowerCase(),
         ]; */


    });


    if (conditions.board) {
      if (
        sortPoints.length === 0 &&
        sortPares.length === 0 &&
        allPointResult.length === 0
      ) {
        return (resp = []);
      } else {
        //busca dentro de todas las posibles condiciones una coinsidencia
        var validPointPars = conditions.board.findIndex((item, i) => {
          return (
            JSON.stringify(pointsPares) ===
            (item.pares != undefined ? JSON.stringify(item.pares) : '[]') &&
            JSON.stringify(allPointResult) ===
            (item.points != undefined ? JSON.stringify(item.points) : '[]')
          );
        });

        if (validPointPars != -1) {
          resp = true;
        }
      }
    } else {
      console.warn('Error en la definición');
      resp = false;
    }
  }

  if (!resp) {
    /* Se modifico esta validacion para que la variable resp pueda tambien no se coloque como incorrecto si no ha interactuado con el board */

    if (!def[target].preDefPoint) {
      boardActive.classList.add('failed');
    }
  } else {
    boardActive.classList.add('pass');
  }

  return resp;
}

function defPointDefault(index, board) {
  const size = siteMode == 'desktop' ? 6 : 6;
  const offset = [
    siteMode == 'desktop' ? 0.2 : 0.15,
    siteMode == 'desktop' ? -0.5 : -0.6,
  ];

  for (let element of def[index].preDefPoint) {
    board.create('point', [element[0], element[1]], {
      name: ' ',
      fixed: true,
      size,
      fillcolor: element[2] ? 'white' : '#dc5b19',
    });
    board.create('text', [element[0], element[1] - 0.5, element[3]], {
      fixed: true,
    });
  }
}

function defParDefault(index, board) {
  const size = siteMode == 'desktop' ? 6 : 6;
  const offset = [
    siteMode == 'desktop' ? 0.2 : 0.15,
    siteMode == 'desktop' ? -0.5 : -0.6,
  ];
  let yx = 0.15;

  for (let element of def[index].preDefPar) {
    let p1 = board.create('point', [element[0][0], element[0][1]], {
      name: '', //element[0][2] ? "(" : "[",
      fixed: true,
      size,
      fillcolor: element[0][2] == 0 ? 'white' : '#dc5b19',
      visible: true,
      label: {
        fontSize: 15,
        offset: [0, 1],
        visible: true,
      },
    });

    let p2 = board.create('point', [element[1][0], element[1][1]], {
      name: '', //element[1][2] ? ")" : "]",
      fixed: true,
      size,
      fillcolor: element[1][2] == 0 ? 'white' : '#dc5b19',
      visible: true,
      label: {
        fontSize: 15,
        offset: [0, 1],
        visible: true,
      },
    });

    board.create('text', [element[0][0], element[0][1] - 0.5, element[0][3]], { fixed: true });
    board.create('text', [element[1][0], element[1][1] - 0.5, element[1][3]], { fixed: true });
    let curvepoints = [];

    for (let i = element[0][0]; i <= element[1][0]; i += 0.25) {
      curvepoints.push([
        i + (i == element[0][0] ? 0.05 : 0),
        i == element[0][0] || i == element[1][0] ? 0 : yx,
      ]);
      yx = yx * -1;
    }

    board.create('cardinalspline', [curvepoints, 0, 'centripetal'], {
      layer: 2,
      strokeColor: 'black',
      strokeWidth: 1.5,
      createPoints: false,
    });
  }
}

//Creamos la conexiones de los puntos
function defConection(def, onePoint, twoPoint, target) {
  const size = siteMode == 'desktop' ? 8 : 8;
  const sizeDouble = siteMode == 'desktop' ? 10 : 10;
  const colorPalet = ['black', '#ff8000', 'blue', 'red', 'green'];

  if (
    def.pointsPares.length >= colorPalet.length ||
    def.state != 'conection' ||
    Boolean(def.preDefPoint) ||
    Boolean(def.preDefPar)
  ) {
    return;
  }
  //valor en y del dash
  let yx = 0.15;
  if (twoPoint == null) {
    firstPoint = onePoint;
    onePoint[0].setAttribute({
      strokeColor: 'gray',
      size: sizeDouble,
      label: { color: 'violet' },
    });
    return;
  } else {
    if (twoPoint[0].id === onePoint[0].id) {
      twoPoint[0].setAttribute({
        strokeColor: '#dc5b19',
        size,
        label: { color: 'black' },
      });
      twoPoint = null;
      defRemoveState(def);
      return;
    }
    const parPoints = [twoPoint, onePoint].sort((p1, p2) => p1[3] - p2[3]);
    onePoint[0].setAttribute({
      strokeColor: '#dc5b19',
      size,
      label: { color: 'black' },
    });
    twoPoint[0].setAttribute({
      strokeColor: '#dc5b19',
      size,
      label: { color: 'black' },
    });

    let curvepoints = [];

    for (let i = parPoints[0][3]; i <= parPoints[1][3]; i += 0.25) {
      curvepoints.push(
        //agrega un array de X y Y a todo lo largo del espacio entre los dos puntos
        [
          i == parPoints[0][3]
            ? parPoints[0][3] + 0.05
            : i + 0.25 >= parPoints[1][3]
              ? parPoints[1][3]
              : i,
          i == parPoints[0][3] ||
            i + 0.25 <= parPoints[0][3] ||
            i + 0.25 >= parPoints[1][3]
            ? 0
            : yx,
        ]
      );
      yx = yx * -1;
    }
    def.others.push(
      def.board.create('cardinalspline', [curvepoints, 0, 'centripetal'], {
        layer: 2,
        strokeColor: colorPalet[def.pointsPares.length],
        strokeWidth: 1.5,
        createPoints: false,
      })
    );

    def.pointsPares.push(parPoints);

    /*
      twoPoint[0].setAttribute({
        strokeColor: "#dc5b19",
        size,
        label: { color: "black" },
      });
      console.log(onePoint);
      firstPoint[0].setAttribute({
        strokeColor: "#dc5b19",
        size,
        label: { color: "black" },
      }); */
    firstPoint = null;
    defRemoveState(def);
  }
  def.statusValidate = false;
  def.change = true;
  gTime(def);
}
/*((?<!\w)\(\d+[,]\d+\)∩r[^\w])*/
function defCorrectionInputs(conditions, input, propsTarget) {
  const regex = /(∞\+|\+∞)/g;
  const equalMatchExprex = /^\(\d+[,]\d+\)∩r$|^\(\d+[,]\d+\)∩\(-∞,(∞|∞\+|\+∞)\)$|^\(\d+[,]\d+\)$/g;
  ///   /(\(\d+[,]\d+\)∩r|\(\d+[,]\d+\)∩\(-∞,(∞|∞\+|\+∞)\)|\(\d+[,]\d+\))/g;
  const mathEmpty = /\\|\$/gi;
  const mathGroup = /(left|right)/gi;
  const mathBreackL = /(lbrack)/gi;
  const mathBreackR = /(rbrack)/gi;
  const mathDestructuring = {
    'left\\(': '(',
    'right\\)': ')',
    lbrack: '[',
    rbrack: ']',
    lbrace: '{',
    rbrace: '}',
    infty: '∞',
    emptyset: '∅',
    cup: '∪',
    cap: '∩',
    le: '≤',
    ge: '≥',
    '^^^^2260': '≠',
    lparen: '(',
    rparen: ')',
    textbraceleft: '{',
    textbraceright: '}'
  };
  if (propsTarget.equalMatch) {

    const result = latexClear(input, mathDestructuring)
      .toLowerCase()
      .replace(new RegExp('[\' \']', 'g'), '');

    if (result.match(equalMatchExprex) !== null && result.match(equalMatchExprex)[0].replace(new RegExp('[()]', 'g'), '').split('∩')[0].split(',')) {
      const vald = result
        .match(equalMatchExprex)[0]
        .replace(new RegExp('[()]', 'g'), '')
        .split('∩')[0]
        .split(',');

      if (vald[0] == vald[1]) {
        input.classList.remove('failed');
        input.classList.add('pass');
        return true;
      } else {
        input.classList.remove('pass');
        input.classList.add('failed');
        return false;
      }
    } else {
      if (conditions) {
        if (
          !conditions.includes(
            latexClear(input, mathDestructuring)
              .replace(new RegExp('[\' \']', 'g'), '')
              .replace(regex, '∞')
              .toLocaleLowerCase()
          )
        ) {
          input.classList.remove('pass');
          input.classList.add('failed');

          return false;
        }

        input.classList.remove('failed');
        input.classList.add('pass');
      }
    }
  } else {
    if (conditions) {


      if (!conditions.includes(latexClear(input, mathDestructuring).replace(new RegExp('[\' \']', 'g'), '').replace(regex, '∞').toLocaleLowerCase())) {
        if (input.classList.value.includes('failed')) {
          input.classList.toggle('bounce');
        } else {
          input.classList.remove('pass');
          input.classList.add('failed');
        }
        return false;
      }
      if (input.classList.value.includes('pass')) {
        input.classList.toggle('bounce');
      } else {
        input.classList.remove('failed');
        input.classList.add('pass');
      }
    }
  }
  return true;
}

window.addEventListener('resize', defResponsibe);
function defResponsibe() {
  const divIteratorAll = document.querySelectorAll('.artifacts');
  const docWidth = document.documentElement.clientWidth;
  if (siteMode === 'desktop' && docWidth < 800) {
    divIteratorAll.forEach((divIterator) => {
      siteMode = 'movile';
      const input1 = divIterator.querySelector('.divEngInt1');
      const input2 = divIterator.querySelector('.divEngInt2');
      input1.classList.remove('inpEngInt-1');
      input2.classList.remove('inpEngInt-1');
      input1.classList.add('inpEngInt-2');
      input2.classList.add('inpEngInt-2');
      divIterator.querySelector('.containerTow').appendChild(input1);
      divIterator.querySelector('.containerTow').appendChild(input2);
    });
  }

  if (siteMode === 'movile' && docWidth > 800) {
    divIteratorAll.forEach((divIterator) => {
      siteMode = 'desktop';
      const input1 = divIterator.querySelector('.divEngInt1');
      const input2 = divIterator.querySelector('.divEngInt2');
      input1.classList.remove('inpEngInt-2');
      input2.classList.remove('inpEngInt-2');
      input1.classList.add('inpEngInt-1');
      input2.classList.add('inpEngInt-1');
      divIterator.querySelector('.containerOne').appendChild(input1);
      divIterator.querySelector('.containerOne').appendChild(input2);
    });
  }
}

//envia la data limpia
function cleanData(def, target) {
  let inputLeftComment = def.inputLeft;
  let graphPointPares = def.pointsPares;
  let graphPoint = def.floatPoint;

  let auxResult = {};
  auxResult.typeArtifact = 'Standard';
  let refactTypeArtifact = target.split('_');
  auxResult.artifact = Number(
    refactTypeArtifact[refactTypeArtifact.length - 1]
  );
  auxResult.results = def.dataInteraction;
  auxResult.elementArtifact = {
    ...cleamBoardsPoints(graphPoint, graphPointPares),
  };
  if (!def.interval || !def.representation) {
    auxResult.elementArtifact.inputsValues = {};
    if (!def.interval) {
      auxResult.elementArtifact.inputsValues.inpEngInt1 = def.inputLeft.value;
    }

    if (!def.representation) {
      auxResult.elementArtifact.inputsValues.inpEngInt2 = def.inputRight.value;
    }
  }

  if (def.comment) {
    delete auxResult.results;
    auxResult.typeArtifact = 'Yellow';
    auxResult.comments = { input_1: inputLeftComment.value };
  }
  return auxResult;
}

function cleamBoardsPoints(points, par) {
  const cleamPoints = points.map((p) => [p[0].id, p[3], p[1]._value, p[2]]);
  const cleamPar = par.map((p) => [p[0][0].id, p[1][0].id]);
  return { cleamPoints, cleamPar };
}
//funcion puente entre el keyboard y este js

/* Creando funcion para crear un teclado personalizado */
function keyboardCustom(def, pointLatex) {
  const cap_0 = {
    MG_KEYBOARD_LAYER: {
      numeros: {
        rows: [
          [],
          [
            { label: '1', key: '1', },
            { label: '2', key: '2' },
            { label: '3', key: '3' },
            { label: '4', key: '4' },
            { label: '5', key: '5' },

            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
              command: ['performWithFeedback', 'moveToPreviousChar'],
            },

            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
              command: ['performWithFeedback', 'moveToNextChar'],
            },
          ],
          [
            { label: '6', key: '6' },
            { label: '7', key: '7' },
            { label: '8', key: '8' },
            { label: '9', key: '9' },
            { label: '0', key: '0' },
            {
              label: '&#9141;',
              key: ' '
            },
            {
              class: 'action font-glyph bottom right',
              label: '&#x232b;',
              command: ['performWithFeedback', 'deleteBackward'],
            },
          ],
          [
            { label: '-', key: '-' },
            { label: '+', key: '+' },
            { label: '/', key: '/' },
            { label: '.', key: '.' },
            { label: ',', key: ',' },
            { label: ';', key: ';' },
            {}
          ],
        ],
      },
      agrupaciones: {

        rows: [
          [],

          [
            { label: '(', key: '(' },
            { label: '[', key: '[' },
            { label: '{', key: '{' },
            { label: '<', key: '<' },
            { label: '>', key: '>' },
            { label: '=', key: '=' },
          ],
          [
            { label: ')', key: ')' },
            { label: ']', key: ']' },
            { label: '}', key: '}' },
            { label: '≤', key: '≤' },
            { label: '≥', key: '≥' },
            { label: '&#8800;', key: '&ne;' },


          ],
          [
            { label: '&#9141;', key: ' ' },
            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
              command: ['performWithFeedback', 'moveToPreviousChar'],
            },
            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
              command: ['performWithFeedback', 'moveToNextChar'],
            },
            {
              class: 'action font-glyph bottom right',
              label: '&#x232b;',
              command: ['performWithFeedback', 'deleteBackward'],
            },

          ]
        ],
      },
      conjuntos: {

        rows: [
          [],
          [
            { label: 'a', key: 'a' },
            { label: 'i', key: 'i' },
            { label: 'x', key: 'x' },
            { label: 'y', key: 'y' },
            { label: 'o', key: 'o' },
            { label: 't', key: 't' },
            { label: 'u', key: 'u' },
          ],

          [
            { label: 'c', key: 'c' },
            { label: 'v', key: 'v' },
            { label: 'b', key: 'b' },
            { label: 's', key: 's' },
            { label: 'r', key: 'r' },
            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
              command: ['performWithFeedback', 'moveToPreviousChar'],
            },
            {
              class: 'action',
              label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
              command: ['performWithFeedback', 'moveToNextChar'],
            },
          ],
          [

            { label: '∅', key: '∅' },
            { label: '∪', key: '∪' },
            { label: '∩', key: '∩' },
            { label: 'R', key: 'R' },
            { label: '∞', key: '∞' },
            { label: '&#9141;', key: ' ' },
            {
              class: 'action font-glyph bottom right',
              label: '&#x232b;',
              command: ['performWithFeedback', 'deleteBackward'],
            },
          ],
        ],
      },
    },
    MG_KEYBOARD: {
      numeros: {
        label: 'Números',

        layer: 'numeros',
      },
      agrupaciones: {
        label: 'Agrupaciones',

        layer: 'agrupaciones',
      },
      conjuntos: {
        label: 'Conjuntos',

        layer: 'conjuntos',
      },
    },
    virtualKeyboards: 'numeros  agrupaciones conjuntos',
  };


  pointLatex.addEventListener('input', (e) => {
    def.statusValidate = false;
    def.change = true;
    gTime(def);
  });

  pointLatex.addEventListener('keydown', (e) => {
    e.preventDefault();
    e.target.blur();
  });

  pointLatex.addEventListener('focus', (e) => {
    document.querySelectorAll('math-field').forEach((element) => {
      element.blur();
    });

    e.target.setOptions({
      customVirtualKeyboardLayers: cap_0.MG_KEYBOARD_LAYER,
      customVirtualKeyboards: cap_0.MG_KEYBOARD,
      virtualKeyboards: cap_0.virtualKeyboards,
    });

    if (pointLatex.classList.value !== 'colorInput') {
      e.target.executeCommand(['switch-mode', 'text']);
    }
    if (def.modeText) {
      e.target.executeCommand(['switch-mode', 'text']);
    }


  });

  return pointLatex;

}

/* Añadiendo funciones  reutilizables de los motores de keyBoard */
function interactionKeyboard(def, allButtons) {
  window.addEventListener('click', (e) => {
    if (e.target.tagName === 'MATH-FIELD') {
      var targetInput = e.target;
      defButtonToggle(def);
    }
  });

  allButtons.addEventListener('click', (e) => {
    if (e.target.classList.value.includes('buttonTool')) {
      if (e.target != def.buttonActive && def.buttonActive != null) {
        defButtonToggle(def);
      }

      if (e.target.dataset.tool == def.state) {
        defButtonToggle(def);
      } else {
        def.buttonActive = e.target;
        def.state = def.buttonActive.dataset.tool;
        def.buttonActive.classList.add('buttonDownActive');
      }
    }
  });
}

//remove el estado de los tools
function defRemoveState(def) {
  if (def.buttonActive != null) {
    def.buttonActive.classList.remove('buttonDownActive');
    def.buttonActive = null;
    def.state = null;
  }
}

function defButtonToggle(def, button = null, classButton = '', option = true) {
  if (def.state != classButton) {
    if (
      def.buttonActive != null &&
      !def.buttonActive.classList.contains('curve')
    ) {
      def.buttonActive.classList.toggle('buttonDownActive');
    }
    def.state = classButton;
    def.buttonActive = button;
    if (button == null) {
      def.state = '';
      def.buttonActive = null;
      return;
    }
    if (option) {
      def.buttonActive.classList.toggle('buttonDownActive');
    }
  } else {
    if (
      def.buttonActive != null &&
      !def.buttonActive.classList.contains('curve')
    ) {
      def.buttonActive.classList.toggle('buttonDownActive');
      def.buttonActive = null;
      def.state = '';
    }
  }
}

function latexClear(input, mathDestructuring) {

  if (input.getAttribute('default-mode') !== null) {

    let inputClean = input.value.replace(/(\\text{|})/gi, '');

    let format = inputClean.replace(
      /(lbrack|lbrace|rbrace|rbrack|right\)|left\(|infty|emptyset|cup|cap|le|ge|\^\^\^\^2260|lparen|rparen|textbraceleft|textbraceright)/g,
      (match) => {

        return mathDestructuring[match];
      }
    ).replace(/\\/gi, '');

    let cleanInputDef = format.replace(/[\\]|[\$]/g, '');
    // console.log(gTextToLatex(format))

    const output = cleanInputDef
      .replace(/\(([-\d.]+)\)/g, '$1')
      .replace(new RegExp('[\' \']', 'g'), '')
      .replace(/\"/g, '').replace(/-/g, '−').toLocaleLowerCase();

    console.log(output);
    return output;
  } else {
    let inputClean = input.getValue('ascii-math');

    let format = inputClean.replace(
      /(lbrack|lbrace|rbrace|rbrack|right\)|left\()/gi,
      (match) => {

        return mathDestructuring[match];
      }
    );
    let cleanInputDef = format.replace(/[\\]|[\$]/g, '');
    // console.log(gTextToLatex(format))

    const output = cleanInputDef
      .replace(/\(([-\d.]+)\)/g, '$1')
      .replace(new RegExp('[\' \']', 'g'), '')
      .replace(/\"/g, '').replace(/-/g, '−').toLocaleLowerCase();
    console.log(output);
    return output;
  }

}

function styleMath(pointLatex) {
  pointLatex._mathfield.element.style.width = '100%';
  pointLatex._mathfield.element.style.height = '100%';
  pointLatex._mathfield.element.childNodes[1].style.cssText =
    'justify-content: center;';
  pointLatex._mathfield.element.childNodes[1].childNodes[0].style.cssText =
    'justify-content: center; font-weight: bolder;';
}



