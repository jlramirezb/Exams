let states = '',
    buttonActive = null,
    engineSwitch = false,
    stateFlag = false,
    siteMode = 'desktop';

function defCreateHtml() {
  const $template = document.querySelector('#templateCurvesInteraction'),
      divs = document.querySelectorAll('.defBoard,.defCurveBoard');
  divs.forEach((div, index) => {
    div.classList.remove('defBoard', 'defCurveBoard');
    let refArtifact = div.dataset.artifact;
    if (def[refArtifact] === undefined) {
      console.warn('definicion no definida', refArtifact);
      return;
    }
    const defArtifact = def[refArtifact];
    let boardSelect = defArtifact.board || 'board_0';
    if (def[refArtifact].boardReference === null) {
      console.warn('solo se puede usar una vez cada definicion', refArtifact);
      return;
    }

    const infDefault = {
      statementBottomGrid: false,
      statementTopGrid: false,
      statementBottom: false,
      statusInfinity: false,
      statusValidate: true,
      boardReference: null,
      statementTop: false,
      textAlert: null,
      infinity: [],
      buttons: true,
      points: [[]],
      curves: [],
      others: [],
      change: false,
      yellow: false,
      debug: false,
      board: 'board_0',
      axieX: [],
      axieY: [],
      flag: false,
      cote: {
        top: [],
        bottom: [],
        special: [],
      },
      ...def[refArtifact],
      conditions: {
        conexa: { type: 4 },
        positiveNegative: false,
        relativeMaxMIn: false,
        oneTwentySeven: false,
        modCoteSpecial: false,
        modCoteBottom: false,
        modCoteTop: false,
        parallels: false,
        compare: false,
        countsX: false,
        countsY: false,
        eRange: false,
        upDown: false,
        xCote: false,
        cotes: false,
        axieY: false,
        axieX: false,
        rang: false,
        dom: false,
        min: false,
        max: false,
        ...defArtifact.conditions,
      },

      dataInteraction: {
        incorrect: 0,
        correct: 0,
        forAnswer: 0
      },

      buttonsActive: {
        infinity: true,
        conect: true,
        pOpen: true,
        pClose: true,
        coteSpecial: false,
        coteTop: false,
        coteDown: false,
        domKey: false,
        rangKey: false,
        ...defArtifact.buttonsActive,
      },
    };

    const $clone = $template.content.firstElementChild.cloneNode(true),
        $statementBotton = $clone.querySelector('.statement-bottom'),
        $statementTop = $clone.querySelector('.statement-top'),
        $divInputs = $clone.querySelector('#inputs'),
        $board = $clone.querySelector('#board');

    if (!infDefault.buttons) {
      $clone.querySelector('#inputs').style.display = 'none';
    }

    if (!infDefault.buttonsActive.infinity) {
      $clone.querySelector('.infinite').style.display = 'none';
    }
    if (!infDefault.buttonsActive.conect) {
      $clone.querySelector('.curve').style.display = 'none';
    }
    if (!infDefault.buttonsActive.pOpen) {
      $clone.querySelector('.pointOpen').style.display = 'none';
    }
    if (!infDefault.buttonsActive.pClose) {
      $clone.querySelector('.pointClose').style.display = 'none';
    }
    //botones para permitirle al usuario acotar o limitar el dominio por defecto no aparecen
    if (!infDefault.buttonsActive.coteTop) {
      $clone.querySelector('.coteTop').style.display = 'none';
    }
    if (!infDefault.buttonsActive.coteSpecial) {
      $clone.querySelector('.coteSpecial').style.display = 'none';
    }
    if (!infDefault.buttonsActive.coteDown) {
      $clone.querySelector('.coteDown').style.display = 'none';
    }
    if (!infDefault.buttonsActive.coteSpecial) {
      $clone.querySelector('.coteSpecial').style.display = 'none';
    }
    if (!infDefault.buttonsActive.domKey) {
      $clone.querySelector('.domKey').style.display = 'none';
    }
    if (!infDefault.buttonsActive.rangKey) {
      $clone.querySelector('.rangKey').style.display = 'none';
    }
    if (infDefault.statementBottom) {
      defStatements(
        $statementBotton,
        infDefault.statementBottom,
        infDefault.statementBottomGrid
      );
    } else {
      $statementBotton.style.display = 'none';
    }

    if (infDefault.statementTop) {
      defStatements(
        $statementTop,
        infDefault.statementTop,
        infDefault.statementTopGrid
      );
    } else {
      $statementTop.style.display = 'none';
    }
    //esta bandera indica que no se mostraran ninguno de los dos statements
    if (infDefault.flag) {
      $statementTop.style.display = 'none';
      $statementBotton.style.display = 'none';
    }

    $board.setAttribute('id', 'board_' + (index + 1));
    $clone.setAttribute('id', refArtifact);
    div.appendChild($clone);

    if (!defBoards[boardSelect]) {
      console.warn('<!> board undefined <!>');
      return;
    }
    const style = defBoards[boardSelect].style;
    if (infDefault.yellow) {
      $board.classList.add('yellow');
    }

    $board.style = `width:  ${style.width ? style.width + 'px' : '100%'};
         height:  ${style.height ? style.height + 'px' : '300px'};
         max-height: ${style.maxHeight || ''}px;
         max-width:  ${style.maxWidth || ''}px;
      `;

    let board = JXG.JSXGraph.initBoard($board.id, {
      label: { visible: false },
      axis:
            style.axis == undefined
               ? true
               : style.axis != undefined
                  ? style.axis[0]
                  : false,
      boundingbox: style.boundingbox || [-4, 4, 4, -4],
      maxboundingbox: [-8, 8, 8, -8],
      grid: style.grid == undefined || false,
      grid: {
        strokeColor:
               style.grid == undefined
                  ? 'grey'
                  : style.grid
                     ? style.gridColor
                        ? style.gridColor
                        : 'grey'
                     : false,
      },
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

    if (infDefault.buttons && infDefault) {
      infDefault.boardReference = board;
      board.on('down', () => defAddPoint(infDefault, board, refArtifact));
    }

    def[refArtifact] = infDefault;

    $divInputs.addEventListener('click', (e) => {
      const classDiv = e.target.classList.value;
      if (classDiv.includes('check')) {
        defValidation(def[refArtifact], board, refArtifact);
        defButtonToggle(null, '');
      } else if (classDiv.includes('reset')) {
        defButtonToggle(null, '');
        defReset(def, def[refArtifact], board, refArtifact);
      } else if (classDiv.includes('curve')) {
        defButtonToggle(e.target, '', false);
        defAddCurv(infDefault, board, refArtifact);
      } else {
        if (e.target.tagName !== 'DIV') {
          defButtonToggle(e.target, e.target.classList[0]);
        }
      }
    });

    if (style.axis && !style.axis[0] && style.axis[1]) {
      defAxies(
        board,
        style.valueAxis?.xd,
        style.valueAxis?.xp,
        style.valueAxis?.xv,
        style.valueAxis?.colorx
      );
    }

    if (style.axis && !style.axis[0] && style.axis[2]) {
      defAxies(
        board,
        style.valueAxis?.yd,
        style.valueAxis?.yp,
        style.valueAxis?.yv,
        style.valueAxis?.colory
      );
    }
    //pintar lista de puntos par ordenado de x/y
    if (defBoards[boardSelect].points) {
      defAllPointsDefault(board, defBoards[boardSelect].points, true);
    }
    //pintar lista de lineas
    if (defBoards[boardSelect].lines) {
      defLineDefault(board, defBoards[boardSelect].lines);
    }
    //pintar lista de curvas
    if (defBoards[boardSelect].curves) {
      defCurveDefault(board, defBoards[boardSelect].curves, style.curveType);
    }
  });
  defChangeSwitch();
}
function defStatements(div, statement, grids) {
  if (typeof statement === 'string') {
    let pHtml = document.createElement('p');
    pHtml.classList.add('w-100', 'mb-0');
    pHtml.style = 'min-height: 35px margin:0px; font-size: 13px;';
    pHtml.textContent = statement;
    div.appendChild(pHtml);
  } else if (typeof statement === 'object') {
    statement.forEach((pText, i) => {
      let pHtml = document.createElement('p');
      pHtml.style = 'min-height: 30px margin:0px; font-size: 13px;';
      pHtml.classList.add(
        'w-100',
        'mb-0',
            grids[i] && statement.length - 1 > i ? 'border-dark' : 'x',
            grids[i] && statement.length - 1 > i ? 'border-bottom' : 'x'
      );
      pHtml.textContent = pText;
      div.appendChild(pHtml);
    });
  }
}
function defChangeFlag() {
  document.querySelectorAll('.statement-top').forEach((p) => {
    if (def[p.parentElement.id].statementTop && def[p.parentElement.id].flag) {
      p.style.display = !stateFlag ? 'block' : 'none';
    }
  });
  document.querySelectorAll('.statement-bottom').forEach((p) => {
    if (
      def[p.parentElement.id].statementBottom &&
         def[p.parentElement.id].flag
    ) {
      p.style.display = !stateFlag ? 'block' : 'none';
    }
  });
  stateFlag = !stateFlag;
}
//funcion para crear los puntos
function defAddPoint(def, board, refArtifact) {
  const size = siteMode == 'desktop' ? 2.5 : 4;
  let pointData = [null, null];
  const elementIn = board.getAllUnderMouse();
  if (
    states === '' ||
      states === 'infinite' ||
      elementIn.findIndex(
        (p) =>
          !Array.isArray(p) &&
            p.elType === 'point' &&
            p.ignore != undefined &&
            !p.ignore
      ) !== -1
  ) {
    return;
  }
  let coords = board.getUsrCoordsOfMouse(),
      x = coords[0],
      y = coords[1];
  if (states == 'pointOpen' || states == 'pointClose') {
    pointData[0] = board.create('point', [x, y], {
      size: size,
      fillcolor: states == 'pointOpen' ? 'white' : '#D55E00',
      opacity: 0.8,
      name: '',
      fixed: false,
    });
    pointData[1] = states == 'pointOpen' ? true : false;
    pointData[0].typePoint = states == 'pointOpen' ? true : false;
    pointData[0].ignore = false;
    pointData[0].on('drag', () => { def.change = true; });
    def.points[def.points.length - 1].push(pointData);
  } else {
    const condition = def.conditions;

    let coteTop = { ...condition.modCoteTop };
    let coteBottom = { ...condition.modCoteBottom };
    let coteSpecial = { ...condition.coteSpecial };

    if (Array.isArray(condition.modCoteTop)) {
      coteTop = {
        position: condition.modCoteTop[0],
        value: condition.modCoteTop[1],
        input: condition.modCoteTop[2],
      };
    }
    if (Array.isArray(condition.modCoteBottom)) {
      coteBottom = {
        position: condition.modCoteBottom[0],
        value: condition.modCoteBottom[1],
        input: condition.modCoteBottom[2],
      };
    }
    if (Array.isArray(condition.modCoteSpecial)) {
      coteSpecial = {
        position: condition.modCoteSpecial[0],
        value: condition.modCoteSpecial[1],
        input: condition.modCoteSpecial[2],
      };
    }

    switch (states) {
      case 'coteTop':
        def.cote.top = coteView({
          def,
          board,
          y,
          size,
          input: coteTop.input,
          conteiner: def.cote.top,
        });
        break;
      case 'coteSpecial':
        def.cote.special = coteView({
          def,
          board,
          y,
          size,
          input: coteSpecial.input,
          conteiner: def.cote.special,
        });
        break;
      case 'coteDown':
        def.cote.bottom = coteView({
          def,
          board,
          y,
          size,
          input: coteBottom.input,
          conteiner: def.cote.bottom,
        });
        break;
      case 'domKey':
        def.axieX.push(
          coteView({
            def,
            board,
            x,
            size,
            input: true,
          })
        );
        break;
      case 'rangKey':
        def.axieY.push(
          coteView({
            def,
            board,
            y,
            size,
            input: true,
          })
        );
        break;
      default:
        return;
    }
  }
  board.update();

  def.change = true;
}
//Funcion de la curva
function defAddCurv(def, board, refArtifact, points = false) {

  const size = siteMode == 'desktop' ? 2.5 : 3;
  if (
    !points &&
      (!def.points[def.points.length - 1] ||
         def.points[def.points.length - 1].length < 2)
  ) {
    return;
  }

  def.points[def.points.length - 1].sort(
    (e, f) => e[0].coords.usrCoords[1] - f[0].coords.usrCoords[1]
  );

  let curvePoints = !points
      ? def.points[def.points.length - 1].map(
        (e) => e[0]
      )
      : points;
  let pointsTypes = !points
      ? def.points[def.points.length - 1].map(
        (e) => e[1]
      )
      : points;

  let curve = board.create(
    'cardinalspline',
    [curvePoints, 0.8, 'centripetal'],
    { strokeColor: 'black', strokeWidth: size }
  );

  curve.pointsTypes = pointsTypes;
  curve.infinities = [];

  const firsPoint = curvePoints[0];
  //const lastPoint = curvePoints.at(-1);
  const lastPoint = curvePoints[curvePoints.length - 1];

  firsPoint.on('down', (e) => {
    callInteractions({
      //board, pointMode, curve,
      def,
      point: firsPoint,
      board,
      curve,
      pointMode: false,
    });
  });
  lastPoint.on('down', (e) => {
    callInteractions({
      //board, pointMode, curve,
      def,
      point: lastPoint,
      board,
      curve,
      pointMode: true,
    });
  });

  board.update();
  /////////////////////////////////// direccionar al def /////////////////////////////////////////
  if (!points) {
    def.curves.push(curve);
    def.points.push([]);
    def.infinity.push([]);
  } else {
    return curve;
  }
  def.change = true;
}

//Funcion del infinito

function defViewInfinity(board, refArtifact, anchorP, curve, option) {
  let p1 = board.create(
    'point',
    [
      function () {
        if (
          curve.points[option == 2 ? curve.points.length - 14 : 14] != undefined
        ) {
          return curve.points[option == 2 ? curve.points.length - 14 : 14]
            .usrCoords[1];
        } else {
          return anchorP[0].X();
        }
      },
      function () {
        if (
          curve.points[option == 2 ? curve.points.length - 14 : 14] != undefined
        ) {
          return curve.points[option == 2 ? curve.points.length - 14 : 14]
            .usrCoords[2];
        } else {
          return anchorP[0].Y();
        }
      },
    ],
    { name: '', visible: false, fillcolor: 'blue' }
  );

  let pFin = board.create(
    'point',
    [
      function () {
        return anchorP[0].X();
      },
      function () {
        return anchorP[0].Y();
      },
    ],
    { name: '', label: { visible: true }, visible: false, fillcolor: 'blue' }
  );

  let espejo = board.create('mirrorpoint', [p1, pFin], {
    size: 1.5,
    visible: true,
    name: '',
    strokeColor: 'blue',
    fillcolor: 'blue',
  });
  let espejo1 = board.create('mirrorpoint', [pFin, espejo], {
    size: 1.5,
    visible: true,
    name: '',
    strokeColor: 'blue',
    fillcolor: 'blue',
  });

  def[refArtifact].others.push(p1);
  def[refArtifact].others.push(pFin);

  return [p1, pFin, espejo1, anchorP];
}

function defReset(allDef, def, board, refArtifact) {
  def.axieX.forEach((e) => {
    board.removeObject([e[1], e[2], e[3]]);
  });
  def.axieY.forEach((e) => {
    board.removeObject([e[1], e[2], e[3]]);
  });

  board.removeObject([
    ...def.points,
    ...def.curves,
    ...def.others,
    def.cote.special,
    def.cote.bottom,
    def.cote.top,
  ]);

  board.update();
  def.statusInfinity = false;
  if (def.textAlert) {
    def.textAlert.remove();
    def.textAlert = null;
  }

  def.infinity = [];
  def.others = [];
  def.points = [[]];
  def.curves = [];
  def.axieX = [];
  def.axieY = [];
  def.cote = {
    special: [],
    bottom: [],
    top: []
  };
};

function main() {
  const $templateDefaults = `<template id="templateCurvesInteraction">    
            <div id="artifacts" class="d-flex flex-column border-board-dark m-2 board-validation-curves"
               ">
                <div class="statement-top border-board-dark w-100 h-100 textCenter mt-1 mb-1 " style="height:100%; min-height: 30px;"></div>
                <div id="board" class="jxgbox defBoard align-self-center"></div>
                <div class="statement-bottom border-board-dark w-100 h-100 textCenter mt-1 mb-1" style="height:100%; min-height: 30px; "></div>
                <div id="inputs" class="align-self-center m-1 mb-2 w-100">
                    <div class="d-flex flex-wrap justify-content-center border border-dark rounded">
                        <button class="infinite button-marg buttonTertiary buttonKey" title="Infinito"></button>
                        <button class="curve button-marg buttonTertiary buttonKey" title="Crear curva"></button>
                        <button class="pointOpen button-marg buttonTertiary buttonKey" title="Punto abierto"></button>
                        <button class="pointClose button-marg buttonTertiary buttonKey" title="Punto cerrado"></button>
                        <button class="rangKey button-marg buttonTertiary buttonKey" title="Escala eje Y"></button>
                        <button class="coteSpecial button-marg buttonTertiary buttonKey" title='cota'></button>
                        <button class="domKey button-marg buttonTertiary buttonKey"  title="Escala eje X"></button>
                        <button class="coteTop button-marg buttonTertiary buttonKey"  title="Cota superior"></button>
                        <button class="coteDown button-marg buttonTertiary buttonKey"  title="Cota inferior"></button>
                        <div>
                            <button class="reset button-marg buttonSecundary buttonKey" title="Reset"></button>
                            <button class="check button-marg buttonPrimary buttonKey" title="Validar"></button>
                        </div>
                    </div>
                </div>
            </div>
        </template>`;

  document.body.insertAdjacentHTML('afterend', $templateDefaults);
  defCreateHtml();
}
//funtion para validar conexas y disconexas en el eje x
// salida [x1, x2, type, final, comienzo, [comienzo infinito, final infinito], y1, y2];
function defValConex(curves, allPoints, infinitys = []) {
  const lastPoints = allPoints[allPoints.length - 1].map((x) => x);
  const doms = [];
  let infCombination = [null, null];
  let domContinueCurve = false;
  let lastContinue = false;
  let first = null;
  let pass = 1;
  //recorre las curvas sacando el indice para sacar sus puntos asignados e infinitos
  for (let curve in curves) {
    const listPoints = allPoints[curve];

    if (domContinueCurve) {
      pass = 2;
    } else {
      first = listPoints[0];
      pass = 1;
      infCombination = [null, null];
    }
    //va combinando los infinitos que traen por cada curva si hay mas de 1 por lado se sobreescribira el anterior
    if (infinitys[curve].length > 0) {
      if (infinitys[curve][0] != null) {
        infCombination[0] = infinitys[curve][0];
      }

      if (infinitys[curve][1] != null) {
        infCombination[1] = infinitys[curve][1];
      }
      infCombination[2] = infinitys[curve][2];
    }

    for (let point in listPoints) {
      if (point > 0 && point < listPoints.length - 1 && listPoints[point][1]) {
        const findPoint = defGetPoint(
          lastPoints,
          defExtractCoordsXY(listPoints[point][0])[0],
          false,
          0.1
        );
        if (findPoint == -1) {
          const findPointFirst = defGetPoint(
            lastPoints,
            defExtractCoordsXY(first[0])[0]
          );
          let modInf = infCombination.map((x) => x);
          modInf[1] = null;
          const x1 = defExtractCoordsXY(first[0]),
              x2 = defExtractCoordsXY(listPoints[point][0]);
          doms.push([
            x1[0], //x1
            x2[0], //x2
                  findPointFirst != -1 ? 2 : pass,
                  first[1] && findPointFirst != -1 && !lastPoints[findPointFirst][1]
                     ? false
                     : first[1], //primer punto
                  listPoints[point][1], //segundo punto
                  modInf,
                  x1[1], //y1
                  x2[1], //y2
          ]);
          infCombination[0] = null;
          first = listPoints[point];
          domContinueCurve = false;
          if (findPointFirst != -1) {
            lastPoints.splice(findPointFirst, 1);
          }
          pass = 1;
        } else {
          pass = 2;
          if (findPoint != -1) {
            lastPoints.splice(findPoint, 1);
          }
        }
      } else {
        //esto lo hace al llegar al primero o al ultimo de cada curva
        if (point == listPoints.length - 1) {
          for (
            let curvePoint = 0;
            curvePoint < allPoints.length - 1;
            curvePoint++
          ) {
            if (curve == curvePoint) {
              continue;
            }
            const findPoint = defGetPoint(
              lastPoints,
              defExtractCoordsXY(listPoints[listPoints.length - 1][0])[0],
              false,
              0.1
            );
            if (
            //el primer punto de alguna curva coinside con el ultimo de la curva recorrida
              defInterPoint(
                defExtractCoordsXY(allPoints[curvePoint][0][0])[0],
                defExtractCoordsXY(listPoints[point][0])[0]
              ) &&
                     //si la curva esta true en el final y alguna otra false en el el comienzo
                     ((allPoints[curvePoint][0][1] &&
                        !listPoints[listPoints.length - 1][1]) ||
                        //si la curva esta false en el final y alguna otra true en el el comienzo
                        (!allPoints[curvePoint][0][1] &&
                           listPoints[listPoints.length - 1][1]) ||
                        //si la curva esta true en el final y alguna otra tambien esta en true en el el comienzo
                        //ademas que un punto cerrado este en ese mismo lugar
                        (allPoints[curvePoint][0][1] &&
                           listPoints[listPoints.length - 1][1] &&
                           findPoint != -1))
            ) {
              if (findPoint != -1) {
                lastPoints.splice(findPoint, 1);
              }
              domContinueCurve = true;
              pass = 2;
            } else {
              if (domContinueCurve) {
                lastContinue = true;
                pass = 2;
              }
              domContinueCurve = false;
            }
            if (domContinueCurve) {
              break;
            }
          }
        }
      }
    }
    // si no continua en una curva siguiente
    if (!domContinueCurve) {
      const findPointLast = defGetPoint(
        lastPoints,
        defExtractCoordsXY(listPoints[listPoints.length - 1][0])[0]
      );
      const findPointFirst = defGetPoint(
        lastPoints,
        defExtractCoordsXY(first[0])[0]
      );
      const x1 = defExtractCoordsXY(first[0]),
          x2 = defExtractCoordsXY(listPoints[listPoints.length - 1][0]);

      doms.push([
        x1[0],
        x2[0],
            lastContinue ||
               (listPoints[listPoints.length - 1][1] && findPointLast != -1) ||
               (first[1] && findPointFirst != -1)
               ? 2
               : pass,
            first[1] && findPointFirst != -1 && !lastPoints[findPointFirst][1]
               ? false
               : first[1],

            listPoints[listPoints.length - 1][1] &&
               findPointLast != -1 &&
               !lastPoints[findPointLast][1]
               ? false
               : listPoints[listPoints.length - 1][1],
            infCombination,
            x1[1],
            x2[1],
      ]);

      if (first[1] && findPointFirst != -1) {
        lastPoints.splice(findPointFirst, 1);
      }

      if (listPoints[listPoints.length - 1][1] && findPointLast != -1) {
        lastPoints.splice(findPointLast, 1);
      }

      infCombination = [null, null];
      lastContinue = false;
    }
  }
  lastPoints.forEach((element) => {
    if (!element[1]) {
      doms.push([
        parseFloat((element[0].X() + -0.08).toFixed(3)),
        parseFloat((element[0].X() + 0.08).toFixed(3)),
        1,
        false,
        false,
        [null, null],
        parseFloat(element[0].Y().toFixed(3)),
        parseFloat(element[0].Y().toFixed(3)),
      ]);
    }
  });
  return doms;
}
//funcion de rango
function defValRange({
  def,
  mulIntervals = false,
  range = [-2, 2],
  yMod = false,
  max = false,
  min = false,
  noise = 0.2,
  rangFilter,
} = {}) {
  if (mulIntervals) {
    return mulIntervals.some((interval, i) => {
      const rangFilterCopy = rangFilter.map((x) => x);
      // copia del rango filtrado para ir comparando si al final termina vacio es verdadero.
      if (interval.length === rangFilterCopy.length) {
        for (var i = rangFilterCopy.length - 1; i >= 0; i--) {
          const match = interval.findIndex((intervalY, k) => {
            let y1 =
                     !yMod || Array.isArray(intervalY[0])
                        ? intervalY[0]
                        : defModsXY(def, yMod, intervalY[0], 2);
            let y2 =
                     !yMod || Array.isArray(intervalY[1])
                        ? intervalY[1]
                        : defModsXY(def, yMod, intervalY[1], 2);

            let point1 =
                     intervalY[3] != undefined
                        ? intervalY[3] == rangFilterCopy[i][3]
                        : true;
            let point2 =
                     intervalY[2] != undefined
                        ? intervalY[2] == rangFilterCopy[i][2]
                        : true;

            return (
              point1 && point2 &&
                     (Array.isArray(y1) || defInterPoint(rangFilterCopy[i][0], y1, noise)) &&
                     (Array.isArray(y2) || defInterPoint(rangFilterCopy[i][1], y2, noise))
            );
          });
          if (match != -1) {
            rangFilterCopy.splice(i, 1);
          }
        }
      } else {
        return false;
      }

      if (rangFilterCopy.length == 0) {
        return true;
      } else {
        return false;
      }
    });
  } else {
    let y1 = null;
    let y2 = null;
    if (yMod) {
      y1 = defModsXY(def, yMod, range[0], 2);
      y2 = defModsXY(def, yMod, range[1], 2);
    }

    let resp = true;
    resp = resp && max != undefined ? rangFilter[0][2] == max : true;
    resp = resp && min != undefined ? rangFilter[0][3] == min : true;
    resp = resp && defInterPoint(rangFilter[0][1], y1, 0.15);
    resp = resp && defInterPoint(rangFilter[0][0], y2, 0.15);
    return resp;
  }
}
// funcion de ascendente o desendente ademas de poder validar
// si el x es menor al x anterior para que la curva sea valida no se puede dar ese caso
function defUpDown({
  def,
  board,
  curves,
  up = true,
  dom = [-4, 4],
  change = true,
  noise = 0.08,
  parallels = false,
  xMod = false,
  option = false,
  _continue = true,
} = {}) {
  let x1 = !xMod ? dom[0] : defModsXY(def, xMod, dom[0], 1);
  let x2 = !xMod ? dom[1] : defModsXY(def, xMod, dom[1], 1);

  if (def.debug && option) {
    const lines = [
      [
        [
          [x1, 0],
          [x2, 0],
        ],
        1,
        false,
        false,
        3,
        'blue',
      ],
    ];
    defLineDefault(board, lines).forEach((p) => def.others.push(p));
  }

  let firstParallels = null;
  let lastY = null;
  let lastX = null;

  for (const curve of curves) {
    if (!_continue) {
      lastY = null;
      lastX = null;
    }

    for (const point of curve.points) {
      let upIn = false;
      const x = parseFloat(point.usrCoords[1]);
      const y = parseFloat(point.usrCoords[2]);

      if (lastY != null) {
        if (change && !parallels) {
          if (lastY < y) {
            upIn = true;
          } else {
            upIn = false;
          }

          if (x > x1 + noise && x < x2 - noise && !upIn && up) {
            return false;
          }

          if (x > x1 + noise && x < x2 - noise && upIn && !up) {
            return false;
          }
        } else {
          if (lastX >= x) {
            return false;
          }
        }

        if (
          parallels &&
               !defInterPoint(
                 firstParallels,
                  parallels == 1 ? lastY : parallels == 2 ? lastX : 0,
                  noise
               )
        ) {
          return false;
        }
      }

      lastY = y;
      lastX = x;
      if (parallels && null == firstParallels) {
        firstParallels = parallels == 1 ? lastY : parallels == 2 ? lastX : 0;
      }
    }
  }
  return true;
}
function defPositiveNegative(
  def,
  board,
  curves,
  positive = false,
  dom = [-8, 8],
  rang = 0,
  noise = 0,
  option = true,
  xMod = false,
  yMod = false
) {
  let mach = false;
  let upIn = null;
  let x1 = !xMod ? dom[0] : defModsXY(def, xMod, dom[0], 1);
  let x2 = !xMod ? dom[1] : defModsXY(def, xMod, dom[1], 1);
  let y1 = defModsXY(def, yMod, rang, 2);

  if (def.debug && option) {
    const lines = [
      [
        [
          [x1, y1],
          [x2, y1],
        ],
        1,
        false,
        false,
        3,
        'green',
      ],
    ];
    defLineDefault(board, lines).forEach((p) => def.others.push(p));
  }

  if (curves.length == 0) {
    return false;
  }
  for (const curve of curves) {
    for (const point of curve.points) {
      const x = parseFloat(point.usrCoords[1]);
      const y = parseFloat(point.usrCoords[2]);

      if (!mach && x > x1 && x < x2) {
        mach = true;
      }

      if (noise + y1 < y) {
        upIn = true;
      } else {
        upIn = false;
      }

      if (x > x1 && x < x2 && !upIn && positive) {
        return false;
      }

      if (x > x1 && x < x2 && upIn && !positive) {
        return false;
      }
    }
  }
  return true && mach;
}
//cuenta los puntos de corte con los ejes
function defCountAxieXY(curves) {
  let count = [0, 0];
  for (const curve of curves) {
    let lastY = null;
    let lastX = null;
    for (const point of curve.points) {
      const y = parseFloat(point.usrCoords[2]);
      const x = parseFloat(point.usrCoords[1]);
      if (lastY == null) {
        lastY = y;
        lastX = x;
      } else {
        if ((lastY < 0 && y > 0) || (lastY > 0 && y < 0)) {
          count[0]++;
        }
        if ((lastX > 0 && x < 0) || (lastX < 0 && x > 0)) {
          count[1]++;
        }
        lastY = y;
        lastX = x;
      }
    }
  }
  return count;
}
//extrae todos los maximos y minimos de la curva
function defMinimunY(def, board, inf = []) {
  const allPoints = def.points;
  const lastPoints = allPoints[allPoints.length - 1];
  const infinity = def.infinity;
  const curves = def.curves;
  const resp = [[], []];
  let min = null,
      max = null;
  let positionInfinitMax = 0;
  let positionInfinitMin = 0;

  const notMaxGlobal = inf.every((curveInf) => {
    return [2, 3].includes(curveInf[0]) || [4, 3].includes(curveInf[1]);
  });
  const notMinGlobal = inf.every((curveInf) => {
    return [8, 7].includes(curveInf[0]) || [6, 7].includes(curveInf[1]);
  });

  if (lastPoints.length == 0 && curves.length == 0) {
    return false;
  };

  curves.forEach((curve, i) => {
    let yReference = null,
        ylast = false,
        lastX = null,
        lastY = null,
        down = false,
        up = false;

    const infCurveTarge = curve.infinities;

    curve.points.forEach((point, j) => {
      const x = parseFloat(point.usrCoords[1]),
          y = parseFloat(point.usrCoords[2]);

      if (lastY == null) {
        yReference = y;
        lastY = y;
        lastX = x;
      } else {
        if (j > curve.points.length - 60 && !ylast) {
          yReference = curve.points[curve.points.length - 1].usrCoords[2];
          ylast = true;
        }

        if (yReference - 0.1 > lastY || yReference + 0.1 < lastY) {
          if (lastY < y) {
            up = true;
          } else {
            down = true;
          }
        } else {
          up = false;
          down = false;
        }

        if (
          (j == 1 && infCurveTarge.length == 0) ||
               (j == 1 && infinity[i].length != 0 && infCurveTarge[0] == null)
        ) {
          yReference = lastY;
          if (def.debug) {
            def.others.push(
              defAllPointsDefault(board, [[x, y, true, '', 3, 'red']])
            );
          }
          let index = allPoints[i].findIndex((p) => {
            const pointxy = defExtractCoordsXY(p[0]);
            return defInterPoint(pointxy[0], x) && defInterPoint(pointxy[1], y);
          });

          if (lastY > y) {
            if (notMaxGlobal) {
              resp[0].push([
                lastX,
                lastY,
                        index != -1 && allPoints[i][index][1] ? true : false,
              ]);
            } else {
              if (max == null || max[1] < lastY) {
                if (max != null && max[1] < lastY) {
                  resp[0].push(max);
                }
                max = [
                  lastX,
                  lastY,
                           index != -1 && allPoints[i][index][1] ? true : false,
                ];
              } else {
                if (max != null && max[1] > lastY) {
                  resp[0].push([
                    lastX,
                    lastY,
                              index != -1 && allPoints[i][index][1] ? true : false,
                  ]);
                }
              }
            }
          } else {
            yReference = lastY;
            if (notMinGlobal) {
              resp[1].push([
                lastX,
                lastY,
                        index != -1 && allPoints[i][index][1] ? true : false,
              ]);
            } else {
              if (min == null || min[1] > lastY) {
                if (min != null && min[1] > lastY) {
                  resp[1].push(min);
                }
                min = [
                  lastX,
                  lastY,
                           index != -1 && allPoints[i][index][1] ? true : false,
                ];
              } else {
                resp[1].push([
                  lastX,
                  lastY,
                           index != -1 && allPoints[i][index][1] ? true : false,
                ]);
              }
            }
          }
        }

        if (
          (j == curve.points.length - 1 && infCurveTarge.length == 0) ||
               (j == curve.points.length - 1 &&
                  infinity[i].length != 0 &&
                  infCurveTarge[1] == null)
        ) {
          yReference = lastY;
          if (def.debug) {
            def.others.push(
              defAllPointsDefault(board, [[x, y, true, '', 3, 'red']])
            );
          }

          let index = allPoints[i].findIndex((p) => {
            const pointxy = defExtractCoordsXY(p[0]);
            return defInterPoint(pointxy[0], x) && defInterPoint(pointxy[1], y);
          });

          if (lastY < y) {
            if (notMaxGlobal) {
              resp[0].push([
                lastX,
                lastY,
                        index != -1 && allPoints[i][index][1] ? true : false,
              ]);
            } else {
              if (max == null || max[1] < lastY) {
                if (max != null && max[1] < lastY) {
                  resp[0].push(max);
                }
                max = [
                  lastX,
                  lastY,
                           index != -1 && allPoints[i][index][1] ? true : false,
                ];
              } else {
                resp[0].push([
                  lastX,
                  lastY,
                           index != -1 && allPoints[i][index][1] ? true : false,
                ]);
              }
            }
          } else {
            yReference = lastY;
            if (notMinGlobal) {
              resp[1].push([
                lastX,
                lastY,
                        index != -1 && allPoints[i][index][1] ? true : false,
              ]);
            } else {
              if (min == null || min[1] > lastY) {
                if (min != null && min[1] > lastY) {
                  resp[1].push(min);
                }
                min = [
                  lastX,
                  lastY,
                           index != -1 && allPoints[i][index][1] ? true : false,
                ];
              } else {
                resp[1].push([
                  lastX,
                  lastY,
                           index != -1 && allPoints[i][index][1] ? true : false,
                ]);
              }
            }
          }
        }

        //maximos
        if (up && lastY > y) {
          yReference = lastY;
          if (def.debug) {
            def.others.push(
              defAllPointsDefault(board, [[x, y, true, '', 3, 'red']])
            );
          }

          let index = allPoints[i].findIndex((p) => {
            const pointxy = defExtractCoordsXY(p[0]);
            return defInterPoint(pointxy[0], x) && defInterPoint(pointxy[1], y);
          });
          if (!notMaxGlobal && (max == null || max[1] < y)) {
            if (max != null && max[1] < lastY) {
              resp[0].push(max);
            }
            max = [
              lastX,
              lastY,
                     index != -1 && allPoints[i][index][1] ? true : false,
            ];
          } else {
            resp[0].push([
              lastX,
              lastY,
                     index != -1 && allPoints[i][index][1] ? true : false,
            ]);
          }
          up = false;
        }
        //minimos
        if (down && lastY < y) {
          yReference = lastY;
          if (def.debug) {
            def.others.push(
              defAllPointsDefault(board, [[x, y, true, '', 3, 'red']])
            );
          }

          let index = allPoints[i].findIndex((p) => {
            const pointxy = defExtractCoordsXY(p[0]);
            return defInterPoint(pointxy[0], x) && defInterPoint(pointxy[1], y);
          });

          if (!notMinGlobal && (min == null || min[1] > y)) {
            if (min != null && min[1] > lastY) {
              resp[1].push(min);
            }
            min = [
              lastX,
              lastY,
                     index != -1 && allPoints[i][index][1] ? true : false,
            ];
          } else {
            resp[1].push([
              lastX,
              lastY,
                     index != -1 && allPoints[i][index][1] ? true : false,
            ]);
          }
          down = false;
        }

        lastY = y;
        lastX = x;
      }
    });
    lastY = null;
  });
  lastPoints.forEach((e, i) => {
    const pointxy = defExtractCoordsXY(e[0]);
    if (!e[1]) {
      if (!notMaxGlobal && (max == null || max[1] < pointxy[1])) {
        if (max != null && max[1] < pointxy[1]) {
          resp[0].push(max);
        }
        max = [pointxy[0], pointxy[1], false];
      } else {
        resp[0].push([pointxy[0], pointxy[1], false]);
      }

      if (!notMinGlobal && (min == null || min[1] > pointxy[1])) {
        if (min != null && min[1] > pointxy[1]) {
          resp[1].push(min);
        }
        min = [pointxy[0], pointxy[1], false];
      } else {
        resp[1].push([pointxy[0], pointxy[1], false]);
      }
    }
  });
  // despues de caracterizar todos los maximos y minimos elimina los que sean abiertos que no son ni maximos ni minimos.
  if (max != null && max[2]) {
    max = null;
  }
  if (min != null && min[2]) {
    min = null;
  }
  resp[0] = resp[0].filter((e) => !e[2]);
  resp[1] = resp[1].filter((e) => !e[2]);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return [max, min, resp, resp[0].length, resp[1].length];
}
//valida la cota superior e inferior ojo la cota es x <= cota
//la dondicion tiene que tener una olgura para cumplir que toque el limite superior o inferior;
function defValidateCote(
  def,
  board,
  curves,
  allDoms,
  cotes,
  noise = 0,
  option = true,
  xMod = false,
  yMod = false,
  modCoteTop = false,
  modCoteBottom = false
) {
  if (curves.length == 0) {
    return false;
  }
  if (cotes.top) {
    //cota superior indica que en todo el dominio señalado no puede ser mayor de hay
    if (
      (modCoteTop && def.cote.top.length == 0) ||
         (!modCoteTop && def.cote.top.length > 0)
    ) {
      return;
    }
    let y1 = modCoteTop
         ? def.cote.top[0]
         : defModsXY(def, yMod, cotes.top.rang, 2);
    y1 = y1 + (cotes.top?.topNoise || 0);
    let x1 = !xMod
         ? cotes.top?.dom != undefined
            ? cotes.top?.dom[0]
            : -8
         : cotes.top?.dom != undefined
            ? defModsXY(def, xMod, cotes.top?.dom[0], 1)
            : -8;
    let x2 = !xMod
         ? cotes.top?.dom != undefined
            ? cotes.top?.dom[1]
            : 8
         : cotes.top?.dom != undefined
            ? defModsXY(def, xMod, cotes.top?.dom[1], 1)
            : 8;

    x1 = x1 + (cotes.top?.domPlus != undefined ? cotes.top?.domPlus[0] : 0);
    x2 = x2 + (cotes.top?.domPlus != undefined ? cotes.top?.domPlus[1] : 0);

    if (def.debug && option) {
      const lines = [
        [
          [
            [x1, y1],
            [x2, y1],
          ],
          1,
          false,
          false,
          3,
          'orange',
        ],
      ];
      defLineDefault(board, lines).forEach((p) => def.others.push(p));
    }

    if (
      -1 ==
         allDoms.findIndex((dom) => {
           if (cotes.top?.dom == undefined) {
             return dom[0] >= -4 && dom[1] <= 4;
           } else {
             return (
               (dom[0] <= (x1 || -4) && dom[1] >= (x2 || 4)) ||
                  (dom[0] <= (x2 || 4) && dom[1] >= (x2 || 4)) ||
                  (dom[0] <= (x1 || -4) && dom[1] >= (x1 || -4)) ||
                  (dom[0] >= (x1 || -4) && dom[1] <= (x2 || 4))
             );
           }
         })
    ) {
      return false;
    }

    if (
      !defPositiveNegative(
        def,
        board,
        curves,
        false,
        [x1, x2],
        y1,
        noise,
        false
      )
    ) {
      return false;
    }
  }

  if (cotes.bottom) {

    //cota superior indica que en todo el dominio señalado no puede ser menor de hay
    if (
      (modCoteBottom && def.cote.bottom.length == 0) ||
         (!modCoteBottom && def.cote.bottom.length > 0)
    ) {
      return;
    }
    //(curvas,encima de / abajo de,cominio señalado,rango desde donde se validara si es superior o inferior)
    let y1 = modCoteBottom
         ? def.cote.bottom[0]
         : defModsXY(def, yMod, cotes.bottom.rang, 2);

    y1 = y1 + (cotes.bottom?.bottomNoise || 0);

    let x1 = !xMod
         ? cotes.bottom?.dom != undefined
            ? cotes.bottom?.dom[0]
            : -8
         : cotes.bottom?.dom != undefined
            ? defModsXY(def, xMod, cotes.bottom?.dom[0], 1)
            : -8;
    let x2 = !xMod
         ? cotes.bottom?.dom != undefined
            ? cotes.bottom?.dom[1]
            : 8
         : cotes.bottom?.dom != undefined
            ? defModsXY(def, xMod, cotes.bottom?.dom[1], 1)
            : 8;

    x1 =
         x1 + (cotes.bottom?.domPlus != undefined ? cotes.bottom?.domPlus[0] : 0);
    x2 =
         x2 + (cotes.bottom?.domPlus != undefined ? cotes.bottom?.domPlus[1] : 0);

    if (def.debug) {
      const lines = [
        [
          [
            [x1, y1],
            [x2, y1],
          ],
          1,
          false,
          false,
          3,
          'violet',
        ],
      ];
      defLineDefault(board, lines).forEach((p) => def.others.push(p));
    }
    if (
      -1 ==
         allDoms.findIndex((dom) => {
           if (cotes.bottom?.dom == undefined) {
             return dom[0] >= -4 && dom[1] <= 4;
           } else {
             return (
               (dom[0] <= (x1 || -4) && dom[1] >= (x2 || 4)) ||
                  (dom[0] <= (x2 || 4) && dom[1] >= (x2 || 4)) ||
                  (dom[0] <= (x1 || -4) && dom[1] >= (x1 || -4)) ||
                  (dom[0] >= (x1 || -4) && dom[1] <= (x2 || 4))
             );
           }
         })
    ) {
      return false;
    }
    if (
      !defPositiveNegative(def, board, curves, true, [x1, x2], y1, noise, false)
    ) {
      return false;
    }
  }
  return true;
}
// (modemod indica si es modificado,value valor a buscar en el axie, option indica si es en el eje x o el y,)
//todas las definiciones modificadas se declaran en texto
function defModsXY(def, modeMod, value, option, m = false) {
  if (def.debug) {
    console.log('modeMod:', modeMod, 'value:', value);
  }

  const axie = option == 1 ? def.axieX : def.axieY;
  if (!modeMod || typeof value == 'number') {
    return value;
  }
  if (value.replace(new RegExp('[\' \']', 'g'), '') == '0') {
    return 0;
  }
  let mach = axie.find((p) => p[2]._value.replace(new RegExp('[\' \']', 'g'), '') === value);
  if (mach[1]) {
    return option == 1 ? mach[1].X() : mach[1].Y();
  } else {
    return false;
  };
};

// dominio recuerda el valor por default pasado a la funcion cuidado con eso
/* def,
allDom,
...conditions.dom,
axieX: def.axieX, */
function defValDom({
  def,
  allDom = [],
  range = [[-4, 4, 1, false, false]],
  xMod = false,
} = {}) {
  const auxRanges = range.map((e) => e);
  if (auxRanges.length != allDom.length) {
    return false;
  }

  for (let i = allDom.length - 1; i >= 0; i--) {
    const macht = auxRanges.findIndex((domValid) => {
      const dom = allDom[i];

      if (dom[2] != 3) {
        if (dom[2] != domValid[2] && domValid[2] != 3) {
          return false;
        }
      }

      if (!Array.isArray(domValid[0])) {
        let x1 = xMod
               ? defModsXY(def, xMod, domValid[0], 1, true)
               : domValid[0];
        if (
          !(
            defInterPoint(dom[0], x1) &&
                  dom[5][0] == null &&
                  dom[3] == domValid[3]
          )
        ) {
          return false;
        }
      } else {
        if (!domValid[0].includes(dom[5][0])) {
          return false;
        }
      }
      if (!Array.isArray(domValid[1])) {
        let x2 = xMod
               ? defModsXY(def, xMod, domValid[1], 1, true)
               : domValid[1];
        if (
          !(
            defInterPoint(dom[1], x2) &&
                  dom[5][1] == null &&
                  dom[4] == domValid[4]
          )
        ) {
          return false;
        }
      } else {
        if (!domValid[1].includes(dom[5][1])) {
          return false;
        }
      }
      return true;
    });

    if (macht != -1) {
      auxRanges.splice(macht, 1);
    }
  }
  return auxRanges.length == 0 ? true : false;
}
//                           funcion de comapracion con puntos o mayor y menor
function defCompare(
  def,
  board,
  curves,
  compares,
  xMod = false,
  yMod = false
) {
  if (curves.length == 0) {
    return false;
  }
  const compare = compares.map((x) => x);
  for (let curve of curves) {
    for (let point of curve.points) {
      const y = parseFloat(point.usrCoords[2]);
      const x = parseFloat(point.usrCoords[1]);
      const mt = compare.findIndex((cond) => {
        if (cond[0] != 'x') {
          let x1 = !xMod ? cond[0] : defModsXY(def, xMod, cond[0], 1);
          let y1 = !yMod ? cond[2] : defModsXY(def, yMod, cond[2], 2);
          if (defInterPoint(x, x1, 0.04)) {
            if (cond[1] === '=') {
              if (defInterPoint(y, y1)) {
                if (def.debug) {
                  defAllPointsDefault(board, [[x1, y1, true, '']]).forEach(
                    (p) => def.others.push(p)
                  );
                }
                return true;
              }
            } else if (cond[1] === '<') {
              if (y < y1) {
                if (def.debug) {
                  const lines = [
                    [
                      [
                        [-8, y1],
                        [8, y1],
                      ],
                      1,
                      false,
                      false,
                      3,
                      'blue',
                    ],
                  ];
                  defLineDefault(board, lines).forEach((p) =>
                    def.others.push(p)
                  );
                }
                return true;
              }
            } else if (cond[1] === '>') {
              if (y > y1) {
                if (def.debug) {
                  const lines = [
                    [
                      [
                        [-8, y1],
                        [8, y1],
                      ],
                      1,
                      false,
                      false,
                      3,
                      'blue',
                    ],
                  ];
                  defLineDefault(board, lines).forEach((p) =>
                    def.others.push(p)
                  );
                }
                return true;
              }
            }
          }
        }
      });
      if (mt != -1) {
        compare.splice(mt, 1);
      }
    }
  }
  if (compare.length == 0) {
    return true;
  } else {
    return false;
  }
}

// funsiones  basicas
// compara si un valor esta dentro de un rango no mayor al noise uni direccional
function defInterPoint(value, compare, noise = 0.1) {
  if (
    Number(value.toFixed(2)) <= Number(compare.toFixed(2)) + noise &&
      Number(value.toFixed(2)) >= Number(compare.toFixed(2)) - noise
  ) {
    return true;
  } else {
    return false;
  }
}
// extrae cordenadas X y Y de un punto
function defExtractCoordsXY(e) {
  return [
    parseFloat(e.coords.usrCoords[1].toFixed(3)),
    parseFloat(e.coords.usrCoords[2].toFixed(3)),
  ];
}
// funcion para indicar direccion del infinito y si es constante positivo negativo
function defValInf(def) {
  let resp = [];
  def.curves.forEach((curve) => {
    let respInter = [];
    let angleFirts = null;
    let angleLast = null;

    if (def.debug) {
      console.log(
        `Grados infinitos: ${curve?.infinities[0]
               ? defAngle(
                 curve.infinities[0][1].X(),
                 curve.infinities[0][1].Y(),
                 curve.infinities[0][2].X(),
                 curve.infinities[0][2].Y()
               )
               : ''
        };${curve.infinities[1]
               ? defAngle(
                 curve.infinities[1][1].X(),
                 curve.infinities[1][1].Y(),
                 curve.infinities[1][2].X(),
                 curve.infinities[1][2].Y()
               )
               : ''
        }`
      );
    }

    if (curve.infinities[0]) {
      angleFirts = parseFloat(
        defAngle(
          curve.infinities[0][1].X(),
          curve.infinities[0][1].Y(),
          curve.infinities[0][2].X(),
          curve.infinities[0][2].Y()
        )
      );

      respInter[2] = respInter[2] ?? [];
      respInter[2][0] = defExtractCoordsXY(curve.infinities[0][2]);
      respInter[0] = defOrientation(angleFirts);
    } else if (curve.infinities[0] == null) {
      respInter[0] = null;
    }

    if (curve.infinities[1]) {
      angleLast = parseFloat(
        defAngle(
          curve.infinities[1][1].X(),
          curve.infinities[1][1].Y(),
          curve.infinities[1][2].X(),
          curve.infinities[1][2].Y()
        )
      );

      respInter[2] = respInter[2] ?? [];
      respInter[2][1] = defExtractCoordsXY(curve.infinities[1][2]);
      respInter[1] = defOrientation(angleLast);
    } else if (curve.infinities[1] == null) {
      respInter[1] = null;
    }
    resp.push(respInter);
  });
  return resp;
}

function defAngle(x1, y1, x2, y2) {
  return (Math.atan2(y2 - y1, -1 * x2 - -1 * x1) * 180) / Math.PI;
}
function defOrientation(angle) {
  let orientation = null;
  if ((angle > 0 && angle < 10) || (angle < 0 && angle > -10)) {
    //sector 1
    orientation = 1;
  }

  if (angle > 10 && angle < 80) {
    //sector 2
    orientation = 2;
  }

  if (angle > 80 && angle < 100) {
    //sector 3
    orientation = 3;
  }

  if (angle > 100 && angle < 170) {
    //sector 4
    orientation = 4;
  }

  if ((angle > 170 && angle < 180) || (angle < -170 && angle > -180)) {
    //sector 5
    orientation = 5;
  }

  if (angle < -100 && angle > -170) {
    //sector 6
    orientation = 6;
  }

  if (angle > -100 && angle < -80) {
    //sector 7
    orientation = 7;
  }

  if (angle < -10 && angle > -80) {
    //sector 8
    orientation = 8;
  }

  return orientation;
}
// busca dentro de una lista de referencias de puntos cual coinside con los parametros X y Y
// o con alguno de los dos de manera independiente
function defGetPoint(allPoints, x = false, y = false, noise = 0) {
  if (allPoints.length <= 0) {
    return -1;
  }
  return allPoints.findIndex((p) => {
    const pointxy = defExtractCoordsXY(p[0]);
    return (
      (x &&
            y &&
            defInterPoint(pointxy[0], x, noise) &&
            defInterPoint(pointxy[1], y, noise)) ||
         (!y && x && defInterPoint(pointxy[0], x, noise)) ||
         (y && !x && defInterPoint(pointxy[1], y, noise))
    );
  });
}
function defButtonToggle(button, classButton, option = true) {
  if (states != classButton) {
    if (buttonActive != null && !buttonActive.classList.contains('curve')) {
      buttonActive.classList.toggle('buttonDownActive');
    }
    states = classButton;
    buttonActive = button;
    if (button == null) {
      states = '';
      buttonActive = null;
      return;
    }
    if (option) {
      buttonActive.classList.toggle('buttonDownActive');
    }
  } else {
    if (buttonActive != null && !buttonActive.classList.contains('curve')) {
      buttonActive.classList.toggle('buttonDownActive');
      buttonActive = null;
      states = '';
    }
  }
}
// fin funsiones  basicas

function curvesCleanData(def, artifact, points, yellow) {
  console.log(def, artifact, points, yellow);
  const cleanPoints = points.map((p1) =>
    p1.map((p2) => [defExtractCoordsXY(p2[0]), p2[1]])
  );
  const cleanInfinites = def.infinity.map((inf) => {
    let resp = [null, null];
    if (inf.length > 0 && inf[0] != null) {
      resp[0] = [
        defExtractCoordsXY(inf[0][0]),
        defExtractCoordsXY(inf[0][1]),
        defExtractCoordsXY(inf[0][2]),
        [defExtractCoordsXY(inf[0][3][0]), inf[0][3][1]],
      ];
    }

    if (inf.length > 0 && inf[1] != null) {
      resp[1] = [
        defExtractCoordsXY(inf[1][0]),
        defExtractCoordsXY(inf[1][1]),
        defExtractCoordsXY(inf[1][2]),
        [defExtractCoordsXY(inf[1][3][0]), inf[1][3][1]],
      ];
      return resp;
    }
  });

  let auxResult = {};
  auxResult = { results: { ...def.dataInteraction } };
  auxResult.elementArtifact = { cleanPoints, cleanInfinites };
  //console.log(artifact.split("_").at(-1));
  //auxResult.artifact = Number(artifact.split("_").at(-1));
  auxResult.artifact = Number(artifact.split('_')[artifact.split('_').length - 1]);
  if (yellow) {
    delete auxResult.results;
    auxResult.typeArtifact = 'Yellow';
  } else {
    auxResult.typeArtifact = 'Standard';
  }

  return auxResult;
}
//Estructura del responsibe arega o quita los enunciados inferior o superior dependiendo si estan declarados
function defChangeSwitch(flagChange = false) {
  const AllSwitch = document.querySelectorAll('.switch');
  if (flagChange) {
    defChangeFlag();
  }

  Object.values(AllSwitch).forEach((div) => {
    document
      .querySelector('.' + div.dataset[engineSwitch ? 'destiny' : 'from'])
      .appendChild(div);
  });

  engineSwitch = !engineSwitch;
}
function defAlerts({ def, id, text, type = 1, size = 15, timer = 4 }) {

  if (def.timeAlertCounts == undefined) {
    def.timeAlertCounts = 0;
  };

  if (def.timerAlertState) {
    if (def.textAlert) {
      def.textAlert.remove();
      def.textAlert = null;
    }
    def.timeAlertCounts = 0;
    clearInterval(def.timerAlert);
    def.timerAlertState = false;
  };

  const textAlert = document.createElement('p');
  textAlert.textContent = text;
  textAlert.classList.add(
      type == 1 ? 'passInLibrary' : type == 2 ? 'failedInLibrary' : 'warnInLibrary',
      'justify-Content-center',
      'centerFloat',
      'gAlert',
      'pr-1',
      'pl-1'
  );

  if (!def.timerAlertState && type != 1) {
    def.timerAlert = setInterval(function () {
      def.timeAlertCounts++;
      if (def.debug) {
        console.log(def.timeAlertCounts);
      };
      if (timer == def.timeAlertCounts) {
        def.timeAlertCounts = 0;
        clearInterval(def.timerAlert);
        if (def.textAlert) {
          def.textAlert.remove();
          def.textAlert = false;
        }
        def.timerAlertState = false;
      }
    }, 1000);
    def.timerAlertState = true;
  }

  textAlert.width = 'fit-content';
  textAlert.maxWidth = '90%';

  if (document.querySelector('#' + id).querySelector('.jxgbox')) {
    const board = document.querySelector('#' + id).querySelector('.jxgbox');
    board.style.display = 'grid';
    board.style.placeItems = 'center';
    board.appendChild(textAlert);

  } else {
    document.querySelector('#' + id).appendChild(textAlert);
  };

  def.textAlert = textAlert;
}
//extraer la altura de la curva en un punto del eje x;
function defExtractHeight(
  def,
  curves,
  lastPoints,
  xSearch,
  option = 1,
  noise = 0.08,
  xMod = false
) {
  let x1 = defModsXY(def, xMod, xSearch, 1);
  let max = null;
  for (let index in curves) {
    const curve = curves[index];

    for (let point of curve.points) {
      const x = parseFloat(point.usrCoords[1]);
      const y = parseFloat(point.usrCoords[2]);

      if (defInterPoint(x1, x, noise)) {
        const matchFloat = defGetPoint(lastPoints, x, null, 0.15);
        const matchInCurve = defGetPoint(def.points[index], x, null, 0.15);

        if (matchInCurve != -1) {
          //si el punto es abierto
          if (def.points[index][matchInCurve][1]) {
            //si el punto flotante es cerrado
            if (matchFloat != -1 && lastPoints[matchFloat][1] == false) {
              const pointMacth = lastPoints[matchFloat][0];
              //si el max es nulo pasa directo
              if (max == null) {
                max = pointMacth.Y();
              } else {
                //en caso que el max sea menor al punto flotante
                if (option == 1 && max < pointMacth.Y() + 0.05) {
                  max = pointMacth.Y();
                }
                if (option == 2 && max > pointMacth.Y() - 0.05) {
                  max = pointMacth.Y();
                }
                if (option == 3 && max > pointMacth.Y()) {
                  max = pointMacth.Y();
                }
              }
              continue;
            } else {
              continue;
            }
          }
        }

        if (max == null) {
          max = y;
        } else {
          if (option == 1 && max < y + 0.05) {
            max = y + 0.05;
          }
          if (option == 2 && max > y - 0.05) {
            max = y - 0.05;
          }
          if (option == 3 && max > y) {
            max = y;
          }
        }
      }
    }
  }

  if (lastPoints.length > 0) {
    lastPoints.forEach((e) => {
      if (defInterPoint(e[0].X(), x1, noise)) {
        if (option == 1 && max < e[0].Y() + 0.05) {
          max = e[0].Y() + 0.05;
        }
        if (option == 2 && max > e[0].Y() - 0.05) {
          max = e[0].Y() - 0.05;
        }
        if (option == 3 && max > e[0].Y()) {
          max = e[0].Y();
        }
      }
    });
  }
  return max == null ? false : max;
}
//maximo/min global indica todos los puntos en x donde su y tiene la misma altura
function defValMaxMinGlobal(def, cond, maxMin, option = 1) {
  const condGlobal = cond.global,
      condMod = cond.condMod,
      noise = cond.noise || 0.18;

  if (condGlobal === 0) {
    return (
      (option !== 1 &&
            condGlobal === 0 &&
            maxMin[0] == null &&
            maxMin[2][0] == 0) ||
         (option === 1 &&
            condGlobal === 0 &&
            maxMin[1] == null &&
            maxMin[2][1] == 0)
    );
  }
  if (
    (option == 1 && maxMin[1] == null) ||
      (option != 1 && maxMin[0] == null)
  ) {
    return false;
  }
  // maximo / min global alcanzado el eje x
  let maxMin0 = option == 1 ? maxMin[1][0] : maxMin[0][0];
  //max / min relativos
  let maxMin1 = option == 1 ? maxMin[2][1] : maxMin[2][0];
  // menor / mayor altura alcanzada
  let maxMin2 = option == 1 ? maxMin[1][1] : maxMin[0][1];

  if (Array.isArray(condGlobal)) {
    if (condGlobal && condGlobal.length != 0) {
      const coincidences = condGlobal.map((e) => e);
      let match = 0;
      let count = 0;

      let x1 = defModsXY(def, condMod, coincidences[0], 1);

      if (defInterPoint(maxMin0, x1, noise)) {
        count++;
        const intValidMax2 = coincidences.findIndex((x) => {
          x = !condMod ? x : defModsXY(refArtifact, condMod, x, 1);
          return defInterPoint(x, maxMin0, noise, true);
        });

        if (intValidMax2 != -1) {
          coincidences.splice(intValidMax2, 1);
          match++;
        }
      }

      for (let e of maxMin1) {
        if (defInterPoint(maxMin2, e[1], noise)) {
          count++;
        } else {
          continue;
        }
        //busca un maximo que tenga el mismo 0 que la condicion
        const intValidMax2 = coincidences.findIndex((x) => {
          x = !condMod ? x : defModsXY(def, condMod, x, 1);
          return defInterPoint(x, e[0], noise);
        });
        if (intValidMax2 != -1) {
          coincidences.splice(intValidMax2, 1);
          match++;
        }
      }
      return count == match && match == condGlobal.length;
    }
  } else {
    //esto cuenta los locales sin tener en cuenta referencias en el ejercicio los relatico;
    if (condGlobal && condGlobal.length != 0) {
      //match guarda las coinicdnecias por cada posicion del array
      let match = 1;
      maxMin1.forEach((data1, i) => {
        // para todas las pociciones locales las compara con la global;
        if (defInterPoint(data1[1], maxMin2, noise)) {
          match++;
        }
      });
      return match == condGlobal;
    }
  }
}
//maximo/min local indica todos los puntos en x donde su y tiene la misma altura
function defValMaxMinLocal(def, maxLocal, maxMin, mod, noise) {
  const conditionMaxLocal = maxLocal.map((x) => x);
  for (let maxP of maxMin) {
    if (conditionMaxLocal.length == 0) {
      break;
    }
    for (let maxCompare in conditionMaxLocal) {
      let x1 = defModsXY(def, mod, conditionMaxLocal[maxCompare], 1);
      if ((!maxP[2], defInterPoint(maxP[0], x1, noise))) {
        conditionMaxLocal.splice(maxCompare, 1);
        break;
      }
    }
  }
  return conditionMaxLocal.length == 0;
}

function defRangCharacteristics(curves, allPoints) {
  //console.log(allPoints[allPoints.length -1])
  const allcurvesAltures = [];
  const lastPoints = allPoints[allPoints.length - 1]; //allPoints.at(-1);

  for (let index in curves) {
    const voidPoins = [];
    //agrega todos los puntos abiertos de la curva a un array;
    for (let point of allPoints[index]) {
      if (point[1] == true) {
        voidPoins.push([point[0], true]);
      }
    }

    let maxIn = null;
    let minIn = null;

    curves[index].points.forEach((point, i) => {
      const y = parseFloat(point.usrCoords[2]);
      const x = parseFloat(point.usrCoords[1]);

      let l = defGetPoint(voidPoins, x, y, 0.01);
      // Buscar la maxima altura alcanzada en el rango se consigue comparando una altura local con una altura general
      // Dando como resultado la altura mas alta o baja entre todas las curvas};
      if (maxIn == null || maxIn[1] < y) {
        maxIn = [x, y];
      }

      if (minIn == null || minIn[1] > y) {
        minIn = [x, y];
      }

      if (l != -1 && i > 6 && i < curves[index].points.length - 6) {
        const typePointMin = defGetPoint(
          allPoints[index],
          minIn[0],
          minIn[1],
          0.2
        );
        const typePointMax = defGetPoint(
          allPoints[index],
          maxIn[0],
          maxIn[1],
          0.2
        );
        voidPoins.splice(l, 1);
        allcurvesAltures.push([
          [
            ...maxIn,
                  typePointMax != -1 ? allPoints[index][typePointMax][1] : false,
          ],
          [
            ...minIn,
                  typePointMin != -1 ? allPoints[index][typePointMin][1] : false,
          ],
        ]);
        minIn = null;
        maxIn = null;
      }
    });

    const typePointMin = defGetPoint(allPoints[index], minIn[0], minIn[1], 0.2);
    const typePointMax = defGetPoint(allPoints[index], maxIn[0], maxIn[1], 0.2);
    allcurvesAltures.push([
      [
        ...maxIn,
            typePointMax != -1 ? allPoints[index][typePointMax][1] : false,
      ],
      [
        ...minIn,
            typePointMin != -1 ? allPoints[index][typePointMin][1] : false,
      ],
    ]);
  }

  lastPoints.forEach((p) => {
    if (!p[1]) {
      const XY = defExtractCoordsXY(p[0]);
      allcurvesAltures.push([
        [XY[0], XY[1] + 0.1, false],
        [XY[0], XY[1] - 0.1, false],
      ]);
    }
  });

  allcurvesAltures.sort((y1, y2) => {
    return y2[0][1] - y1[0][1];
  });

  const posUsed = [];
  let alturesCopy = allcurvesAltures.map((x) => x);
  const resultIntervalRange = [];

  for (let i = 0; i < allcurvesAltures.length; i++) {
    if (posUsed.includes(i)) {
      continue;
    }
    const p1 = allcurvesAltures[i];
    const f = [p1[0][1], p1[1][1], p1[0][2], p1[1][2]];
    let mm = defRecursiveDiscar(f, allcurvesAltures, alturesCopy, i);
    posUsed.push(...mm[1]);
    if (
      mm &&
         !JSON.stringify(resultIntervalRange).includes(JSON.stringify(mm[0]))
    ) {
      resultIntervalRange.push(mm[0]);
    }
  }
  return resultIntervalRange;
}
//
function defRecursiveDiscar(f, allcurvesAltures, altures, i, used = []) {
  if (altures.length <= 0) {
    return [f, used];
  }

  let b = allcurvesAltures.findIndex(
    (p2) =>
      f[0] != p2[0][1] &&
         p2[1][1] != f[1] &&
         // maxima altura 1 mayor maxima altura 2
         // minima altura 1 mayor minima altura 2
         // minima altura 1 menor maxima altura 2
         ((f[0] > p2[0][1] && f[1] > p2[1][1] && f[1] < p2[0][1]) ||
            // minima altura 1 menor minima altura 2
            // maxima altura 1 mayor minima altura 2
            // maxima altura 1 menor maxima altura 2
            (f[1] < p2[1][1] && f[0] > p2[1][1] && f[0] < p2[0][1]) ||
            //contiene a curva 2
            (f[0] > p2[0][1] && p2[1][1] > f[1]) ||
            //contenido por curva 2
            (f[0] < p2[0][1] && p2[1][1] < f[1]))
  );

  if (b != -1) {
    used.push(b);
    used.push(i);
  }

  let v = altures.findIndex(
    (p2) =>
      f[0] != p2[0][1] &&
         p2[1][1] != f[1] &&
         // maxima altura 1 mayor maxima altura 2
         // minima altura 1 mayor minima altura 2
         // minima altura 1 menor maxima altura 2
         ((f[0] > p2[0][1] && f[1] > p2[1][1] && f[1] < p2[0][1]) ||
            // minima altura 1 menor minima altura 2
            // maxima altura 1 mayor minima altura 2
            // maxima altura 1 menor maxima altura 2
            (f[1] < p2[1][1] && f[0] > p2[1][1] && f[0] < p2[0][1]) ||
            //contiene a curva 2
            (f[0] > p2[0][1] && p2[1][1] > f[1]) ||
            //contenido por curva 2
            (f[0] < p2[0][1] && p2[1][1] < f[1]))
  );

  if (v != -1) {
    const p = altures[v];
    if (f[0] < p[0][1]) {
      f[0] = p[0][1];
      f[2] = p[0][2];
    }
    if (f[1] > p[1][1]) {
      f[1] = p[1][1];
      f[3] = p[1][2];
    }
    altures.splice(v, 1);
    return defRecursiveDiscar(f, allcurvesAltures, altures, i, used);
  } else {
    return [f, used];
  }
}
//funcion especifica cap 1_17 nathalia
function defOneTwentySeven(
  def,
  board,
  curves,
  lastPoints,
  obj = {},
  options = 3
) {
  return obj.xSearch.every((x) => {
    const y1 = defExtractHeight(
      def,
      curves,
      lastPoints,
      x[0],
      3,
      0.1,
      obj.xMod
    );
    const y2 = defExtractHeight(
      def,
      curves,
      lastPoints,
      x[1],
      3,
      0.1,
      obj.xMod
    );
    if (def.debug) {
      def.others.push(
        defAllPointsDefault(board, [
          [defModsXY(def, obj.xMod, x[0], 1), y1, true, '', 1.5, 'green'],
          [defModsXY(def, obj.xMod, x[1], 1), y2, true, '', 1.5, 'green'],
        ])
      );
    }
    const resp1 = defInterPoint(0, y1 + y2, 0.2);
    const resp2 = y1 * y2 < 0;
    return (
      (options == 3 && resp1 && resp2) ||
         ((options == 2 || (options == 1 && resp1)) &&
            (options == 1 || (options == 2 && resp2)))
    );
  });
}
// compara los dominios determinando si se interseptan o estan contenidos entre ellos para evitar continuar con las validaciones
function twoBreakPoints(doms = [], noise = 0.05) {
  return doms.every((dom_1, i) =>
    doms.every((dom_2, j) => {
      if (i != j) {
        const x11 = [1, 2, 8].includes(dom_1[5][0])
               ? dom_1[0] - 8
               : dom_1[3]
                  ? dom_1[0] + noise
                  : dom_1[0] - noise;
        const x12 = [4, 5, 6].includes(dom_1[5][1])
               ? dom_1[1] + 8
               : dom_1[4]
                  ? dom_1[1] - noise
                  : dom_1[1] + noise;
        const x21 = [1, 2, 8].includes(dom_2[5][0])
               ? dom_2[0] - 8
               : dom_2[3]
                  ? dom_2[0] + noise
                  : dom_2[0] - noise;
        const x22 = [4, 5, 6].includes(dom_2[5][1])
               ? dom_2[1] + 8
               : dom_2[4]
                  ? dom_2[1] - noise
                  : dom_2[1] + noise;
            //intervalos
        return !(
        //contenidos
          (
            (x11 >= x21 && x12 <= x22) ||
                  (x11 <= x21 && x12 >= x22) || //entrelazados
                  (x11 >= x21 && x11 <= x22 && x12 >= x22) ||
                  (x11 <= x21 && x12 >= x21 && x12 <= x22)
          )
        );
      }
      return true;
    })
  );
}

//valida la posicion y value del input de la cota
function validateCotePotitionValue(cote, condition) {
  const value = ((condition.value && condition.input) ? cleamText(cote[2]._value) == cleamText(condition.value) : true);
  const regexPositive = /^(\d+|[A-Za-z\s]+)$/g;
  const regexNegative = /^(-\d|-[A-Za-z\s])$/g;
  let resp = false;
  if (Array.isArray(condition)) {
    condition.position = condition[0];
    condition.value = condition[1];
    condition.input = condition[2];
    condition.interval = condition[3];
  }
  if (typeof condition.position === 'boolean' && condition.input) {
    resp = cleamText(cote[2]._value).search(condition.position ? regexPositive : regexNegative) != -1 && (condition.position ? Number(cote[1].Y()) > 0 : Number(cote[1].Y()) < 0);
  } else {
    resp = ((condition.position) ? defInterPoint(Number(condition.position), Number(cote[1].Y()), 0.1) : true);
    if (resp && condition.interval) {
      resp = condition.interval[0] < Number(cote[1].Y()) && condition.interval[1] > Number(cote[1].Y());
    }

  };
  return resp && value;
};

function cleamText(text) {
  return String(text).replace(/[' ']/g, '');
}

function coteView(params = {}) {
  const lines = [
    [
      [
        [params.x ?? -8, params.y ?? -8],
        [params.x ?? 8, params.y ?? 8],
      ],
      2,
      false,
      false,
      2,
      '#A19D9C',
    ],
  ];

  const point = defAllPointsDefault(
    params.board,
    [[params.x ?? 0, params.y ?? 0, true, '', params.size, 'black', false]],
    true
  )[0];

  const lineRef = defLineDefault(params.board, lines)[0];

  const input = params.input
      ? params.board.create(
        'input',
        [(params.x ?? 0), (params.y ?? 0), ' ', ''],
        {

          layer: 0,
          name: ' ',
          cssStyle: 'width: 30px;',
        }
      )
      : null;

  if (params.conteiner != null) {
    params.board.removeObject(params.conteiner);
    params.board.update();
  };

  params.board.on('move', function () {
    point.moveTo([params.y ? 0 : point.X(), params.x ? 0 : point.Y()]);
    if (input) {
      input.moveTo([point.X() + 0.3, point.Y() - 0.3]);
    };
    if (lineRef) {
      lineRef.point1.setPositionDirectly(JXG.COORDS_BY_USER, [params.y ? 8 : point.X(), params.x ? 8 : point.Y()]);
      lineRef.point2.setPositionDirectly(JXG.COORDS_BY_USER, [params.y ? -8 : point.X(), params.x ? -8 : point.Y()]);
    };
  });

  return [params.y || params.x, point, input, lineRef];
}

// board, pointMode, curve,
function callInteractions(params) {
  params.curve.infinities ??= [];
  params.curve.infinities[0] ??= null;
  params.curve.infinities[1] ??= null;
  //pointMode false = infinito izqueirdo / true infinito del final
  if (
    states != 'infinite' ||
      params.point.typePoint ||
      (params.curve.infinities !== undefined &&
         ((params.pointMode === true && params.curve.infinities[1] !== null) ||
            (params.pointMode === false && params.curve.infinities[0] !== null)))
  ) {
    return;
  }

  /* const point2 = params.board.create(
      "point",
      [
         () =>
            params.pointMode
               ? params.curve.points.at(-18).usrCoords.slice(1)[0]
               : params.curve.points[18].usrCoords.slice(1)[0],
         () =>
            params.pointMode
               ? params.curve.points.at(-18).usrCoords.slice(1)[1]
               : params.curve.points[18].usrCoords.slice(1)[1],
      ],
      { name: "", visible: false, color: "red" }
   ); */

  const point2 = params.board.create(
    'point',
    [
      () =>
            params.pointMode
               ? params.curve.points[params.curve.points.length - 18].usrCoords.slice(1)[0]
               : params.curve.points[18].usrCoords.slice(1)[0],
      () =>
            params.pointMode
               ? params.curve.points[params.curve.points.length - 18].usrCoords.slice(1)[1]
               : params.curve.points[18].usrCoords.slice(1)[1],
    ],
    { name: '', visible: false, color: 'red' }
  );

  //crea el infinito independientemente del punto final  y retorna un array con todos los puntos del infiito
  const infinityPoints = [params.point, ...infinityDrawing(params, point2)];

  params.point.setAttribute({ color: '#2196f3' });
  const infiniteDrawng = params.board.create(
    'cardinalspline',
    [infinityPoints, 0.8, 'centripetal'],
    { strokeColor: '#2196f3', strokeWidth: 2 }
  );

  params.curve.infinities = params.curve.infinities ?? [];
  if (!params.pointMode) {
    params.curve.infinities[0] = infinityPoints;
  } else {
    params.curve.infinities[1] = infinityPoints;
  }
}

function infinityDrawing(
  params,
  point2,
  count = 0,
  element = [],
  style = { visible: false }
) {
  if (count >= 2) {
    return element;
  }
  const p1 = params.board.create('mirrorpoint', [point2, params.point], style);
  const c1 = params.board.create('circle', [params.point, p1], {
    visible: false,
  });
  const c2 = params.board.create('circle', [p1, params.point], {
    visible: false,
  });
  const i1 = params.board.create('intersection', [c1, c2, 0], style);
  const i2 = params.board.create('intersection', [c1, c2, 1], style);
  const arc = params.board.create('circumcirclearc', [i1, p1, i2], {
    visible: false,
  });
  const position =
      params?.asfterPosition?.length >= 3
         ? params?.asfterPosition[count + 1]
         : [p1.X(), p1.Y()];
  const p2 = params.board.create('glider', [...position, arc], {
    name: '',
    color: '#2196f3',
  });

  params.def.others.push(p1);
  return infinityDrawing({ ...params, point: p2 }, params.point, count + 1, [
    ...element,
    p2,
  ]);
}

// validation general de los ejercicios.
function defValidation(def, board, refArtifact) {
  const conditions = def.conditions,
      allPoints = def.points,
      curves = def.curves,
      regexPositive = /^(\d+|[A-Za-z\s]+)$/,
      regexNegative = /^(-\d|-[A-Za-z\s])$/;

  let modCoteTop = null;
  let modCoteBottom = null;
  let modCoteSpecial = null;

  //remueve el aviso cuando se valida y ya exite uno en pantalla;
  if (def.textAlert) {
    def.textAlert.remove();
    def.textAlert = null;
    def.timeAlertCounts = 0;
    clearInterval(def.timerAlert);
    def.timerAlertState = false;
  }

  let listError = ' Revisa los siguientes elementos: ',
      respRelativeMaxMIn = true,
      respneTwentySeven = true,
      respCount = [true, true],
      positiveNegative = true,
      respAscendent = true,
      respParallels = true,
      respCompare = true,
      rangeResp = [true],
      respXCote = true,
      respConex = true,
      respCote = true,
      domResp = true,
      maxResp = true,
      minResp = true,
      respER = true,
      scaleY = true,
      scaleX = true;

  if (def.statusValidate && !def.change) {
    defAlerts({ def, id: refArtifact, text: 'No hay cambios en la Respuesta', type: 3 });
    return;
  };
  // ordena la secuencia de puntos internamente de cada curva
  // ordena los puntos internos de las curvas
  allPoints.forEach((point, i) => {
    if (point.length > 0) {
      allPoints[i] = point.sort((e, f) => {
        e[0].off('down');
        f[0].off('down');
        return e[0].coords.usrCoords[1] - f[0].coords.usrCoords[1];
      });
    }
  });

  // estraigo las curvas sin meter los puntos sueltos finales
  let curves_point = allPoints.slice(0, allPoints.length - 1);

  // ordeno la posicion de las curvas
  curves_point.sort((firtC, lastC) => {
    if (firtC.length > 0 && lastC.length > 0) {
      return firtC[0][0].coords.usrCoords[1] - lastC[0][0].coords.usrCoords[1];
    }
  });

  const curvesLast = [...def.curves];
  board.removeObject(def.others);
  const newCurves = restoreCurves(def, board, refArtifact, curvesLast);
  // remueve las curvas anteriores
  def.boardReference.removeObject(def.curves);
  // vuelve a crear las curvas
  def.curves = newCurves;
  // agrega los puntos ordenados de las curvas y los puntos sueltos al final
  def.points = [...curves_point, allPoints[allPoints.length - 1]];
  //agrega las curvas nuevas en su respectivo ejercicio

  //valida el cote modificado unico con o sin referencia del top
  if (!conditions.modCoteTop) {
    modCoteTop = def.cote.top.length == 0;
  } else {
    if (def.cote.top.length > 0) {
      modCoteTop = validateCotePotitionValue(
        def.cote.top,
        conditions.modCoteTop
      );
    } else {
      modCoteTop = false;
    }
  }

  //valida el cote modificado unico con o sin referencia del bottom
  if (!conditions.modCoteBottom) {
    modCoteBottom = def.cote.bottom.length == 0;
  } else {
    if (def.cote.bottom.length > 0) {
      modCoteBottom = validateCotePotitionValue(
        def.cote.bottom,
        conditions.modCoteBottom
      );
    } else {
      modCoteBottom = false;
    }
  }

  if (!conditions.modCoteSpecial) {
    modCoteSpecial = def.cote.special.length == 0;
  } else {
    if (def.cote.special.length > 0) {
      modCoteSpecial = validateCotePotitionValue(
        def.cote.special,
        conditions.modCoteSpecial
      );
    } else {
      modCoteSpecial = false;
    }
  }
  //ordena los puntos modificados por el usuario
  if (conditions.axieX) {
    scaleX = defValidateScale(conditions.axieX, def.axieX);
    console.log(scaleX);
    /*   conditions.axieX.sort((p1, p2) => p1[1] - p2[1]);
        let xScaleMod = def.axieX.map(x => [x[0], x[2]._value.replace(/[ ]/, "")]).filter((p1) => {
           return !(defInterPoint(p1[0], 0) && p1[1] == '0');
        });
        xScaleMod.sort((p1, p2) => p1[0] - p2[0]);
        scaleX = (xScaleMod.length == conditions.axieX.length) && conditions.axieX.every((condValue, i) => {
           return (
              ((i > 0 && (xScaleMod[i - 1][0] < xScaleMod[i][0])) || i == 0) &&
              (condValue[0] < 0 && xScaleMod[i][0] < 0 || condValue[0] > 0 && xScaleMod[i][0] > 0) &&
              condValue[1].replace(/[ ]/, "") === xScaleMod[i][1].replace(/[ ]/, "")
           );
        }); */
  }


  if (conditions.axieY) {
    scaleY = defValidateScale(conditions.axieY, def.axieY, false);
    /*   conditions.axieY.sort((p1, p2) => p1[1] - p2[1]);
        let yScaleMod = def.axieY.map(x => [x[0], x[2]._value.replace(/[ ]/, "")]).filter((p1) => {
           return !(defInterPoint(p1[0], 0) && p1[1] == '0');
        });
        yScaleMod.sort((p1, p2) => p1[0] - p2[0]);
  
        scaleY = (yScaleMod.length == conditions.axieY.length) && conditions.axieY.every((condValue, i) => {
           return (
              ((i > 0 && (yScaleMod[i - 1][0] < yScaleMod[i][0])) || i == 0) &&
              (condValue[0] < 0 && yScaleMod[i][0] < 0 || condValue[0] > 0 && yScaleMod[i][0] > 0) &&
              condValue[1].replace(/[ ]/, "") === yScaleMod[i][1].replace(/[ ]/, "")
           );
        }); */
  };

  const rangFilter = defRangCharacteristics(curves, allPoints);
  //verifica si la escala esta correcta tanto positivos,valor como el orden en el eje y

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////)





  if (def.cote.special.length != 0 || 0 != allPoints[0].length || 0 != def.curves.length || def.cote.top.length != 0 || def.cote.bottom.length != 0) {
    if (
      def.yellow == false &&
         scaleY &&
         scaleX &&
         modCoteBottom &&
         modCoteTop &&
         modCoteSpecial
    ) {
      const allInfinity = defValInf(def);
      const allDom = defValConex(curves, allPoints, allInfinity);
      const maxMin = defMinimunY(def, board, allInfinity);

      if (twoBreakPoints(allDom)) {
        //const lastPoints = def.points.at(-1);
        const lastPoints = def.points[def.points.length - 1];

        if (conditions.oneTwentySeven) {
          respneTwentySeven = defOneTwentySeven(def, board, curves, lastPoints, {
            ...conditions.oneTwentySeven,
          });
        }
        // Compara los elementos mayores menores o iguales en el eje y con respecto a la x
        if (conditions.compare) {
          respCompare = defCompare(
            def,
            board,
            curves,
            conditions.compare.values,
            conditions.compare.xMod,
            conditions.compare.yMod
          );
        }
        if (conditions.xCote) {
          let y = false;

          if (!Array.isArray(conditions.xCote.coteReference)) {
            if (conditions?.xCote?.coteReference?.bottomX != undefined) {
              respXCote =
                        respXCote &&
                        defGenericCoteValidation(
                          def,
                          board,
                          curves,
                          allDom,
                          conditions?.xCote?.coteReference,
                          conditions?.xCote,
                          conditions?.xCote?.coteReference?.bottomX,
                          1,
                          true
                        );
            }

            if (conditions?.xCote?.coteReference?.topX != undefined) {
              respXCote =
                        respXCote &&
                        defGenericCoteValidation(
                          def,
                          board,
                          curves,
                          allDom,
                          conditions?.xCote?.coteReference,
                          conditions?.xCote,
                          conditions?.xCote?.coteReference?.topX,
                          1
                        );

              /*   y = defModsXY(def, true, conditions?.xCote?.coteReference?.topX, 1)
                             respXCote =
                                y != false &&
                                respXCote &&
                                defValidateCote(
                                   def, board, curves, allDom,
                                   {
                                      top: {
                                         dom: conditions.xCote.coteReference.domTop,
                                         rang: y,
                                         domPlus: conditions.xCote.coteReference.domPlus || [0, 0],
                                         topNoise: conditions.xCote.coteReference.topNoise || 0,
                                      },
                                   },
                                   -0.02,
                                   true,
                                   conditions.xCote.xMod,
                                   conditions.xCote.yMod,
                                   conditions.xCote.modCoteTop,
                                   conditions.xCote.modCoteBottom,
                                ); */
            }

            if (conditions.xCote.coteReference.top != undefined) {
              y = defExtractHeight(
                def,
                curves,
                lastPoints,
                conditions.xCote.coteReference.top,
                1,
                0.08,
                conditions.xCote.xMod,
                conditions.xCote.yMod
              );
              respXCote =
                        y != false &&
                        respXCote &&
                        defValidateCote(
                          def,
                          board,
                          curves,
                          allDom,
                          {
                            top: {
                              dom: conditions.xCote.coteReference.domTop,
                              rang: y,
                              domPlus: conditions.xCote.coteReference.domPlus || [0, 0],
                              topNoise: conditions.xCote.coteReference.topNoise || 0,
                            },
                          },
                          -0.02,
                          true,
                          conditions.xCote.xMod,
                          conditions.xCote.yMod,
                          conditions.xCote.modCoteTop,
                          conditions.xCote.modCoteBottom
                        );
            }

            if (conditions.xCote.coteReference.bottom != undefined) {
              y = defExtractHeight(
                def,
                curves,
                lastPoints,
                conditions.xCote.coteReference.bottom,
                2,
                0.08,
                conditions.xCote.xMod,
                conditions.xCote.yMod
              );
              respXCote =
                        y != false &&
                        respXCote &&
                        defValidateCote(
                          def,
                          board,
                          curves,
                          allDom,
                          {
                            bottom: {
                              dom: conditions.xCote.coteReference.domBottom,
                              rang: y,
                              domPlus: conditions.xCote.coteReference.domPlus || [0, 0],
                              bottomNoise:
                                    conditions.xCote.coteReference.bottomNoise || 0,
                            },
                          },
                          -0.085,
                          true,
                          conditions.xCote.xMod,
                          conditions.xCote.yMod,
                          conditions.xCote.modCoteTop,
                          conditions.xCote.modCoteBottom
                        );
            }
          } else {
            conditions.xCote.coteReference.forEach((cond, i) => {
              if (cond.top != undefined) {
                y = defExtractHeight(
                  def,
                  curves,
                  lastPoints,
                  cond.top,
                  1,
                  0.08,
                  conditions.xCote.xMod,
                  conditions.xCote.yMod
                );
                respXCote =
                           y != false &&
                           respXCote &&
                           defValidateCote(
                             def,
                             board,
                             curves,
                             allDom,
                             {
                               top: {
                                 dom: cond.domTop || [-4, 4],
                                 rang: y,
                                 domPlus: cond.domPlus || [0, 0],
                               },
                             },
                             -0.02,
                             true,
                             conditions.xCote.xMod,
                             conditions.xCote.yMod,
                             conditions.xCote.modCoteTop,
                             conditions.xCote.modCoteBottom
                           );
              }

              if (cond.bottom != undefined) {
                y = defExtractHeight(
                  def,
                  curves,
                  lastPoints,
                  cond.bottom,
                  2,
                  0.08,
                  conditions.xCote.xMod,
                  conditions.xCote.yMod
                );
                respXCote =
                           y != false &&
                           respXCote &&
                           defValidateCote(
                             def,
                             board,
                             curves,
                             allDom,
                             {
                               bottom: {
                                 dom: cond.domBottom || [-4, 4],
                                 rang: y,
                                 domPlus: cond.domPlus || [0, 0],
                               },
                             },
                             -0.085,
                             true,
                             conditions.xCote.xMod,
                             conditions.xCote.yMod,
                             conditions.xCote.modCoteTop,
                             conditions.xCote.modCoteBottom
                           );
              }

              if (cond.bottomX != undefined) {
                y = defModsXY(def, true, cond.bottomX, 1);
                respXCote =
                           y != false &&
                           respXCote &&
                           defValidateCote(
                             def,
                             board,
                             curves,
                             allDom,
                             {
                               bottom: {
                                 dom: cond.domBottom,
                                 rang: y,
                                 domPlus: cond.domPlus || [0, 0],
                                 topNoise: cond.bottomNoise || 0,
                               },
                             },
                             -0.02,
                             true,
                             conditions.xCote.xMod,
                             conditions.xCote.yMod,
                             conditions.xCote.modCoteTop,
                             conditions.xCote.modCoteBottom
                           );
              }

              if (conditions?.xCote?.coteReference?.topX != undefined) {
                y = defModsXY(
                  def,
                  true,
                  conditions?.xCote?.coteReference?.topX,
                  1
                );
                respXCote =
                           y != false &&
                           respXCote &&
                           defValidateCote(
                             def,
                             board,
                             curves,
                             allDom,
                             {
                               top: {
                                 dom: cond.domTop,
                                 rang: y,
                                 domPlus: cond.domPlus || [0, 0],
                                 topNoise: cond.topNoise || 0,
                               },
                             },
                             -0.02,
                             true,
                             conditions.xCote.xMod,
                             conditions.xCote.yMod,
                             conditions.xCote.modCoteTop,
                             conditions.xCote.modCoteBottom
                           );
              }
            });
          }
        }
        //compara que lso max o los min sean mayores
        if (conditions.relativeMaxMIn) {
          //max / min relativos
          let maxRelat = !maxMin || maxMin[2][1];
          let minRelat = !maxMin || maxMin[2][0];
          //e1: elemento 1 e2: elementos 2
          respRelativeMaxMIn =
                  maxMin &&
                  conditions.relativeMaxMIn.cond ==
                  maxRelat.every(
                    (e1) =>
                      -1 ==
                        minRelat.findIndex((e2) => {
                          return e1[1] > e2[1];
                        })
                  );
        }
        //positivo o negativo;
        if (conditions.positiveNegative) {
          if (curves.length == 0) {
            positiveNegative = false;
          } else {
            for (const ithem of conditions.positiveNegative.intervals) {
              if (
                !defPositiveNegative(
                  def,
                  board,
                  curves,
                  ithem[0],
                  ithem[1],
                  ithem[2],
                  0,
                  true,
                  conditions.positiveNegative.xMod,
                  conditions.positiveNegative.yMod
                )
              ) {
                positiveNegative = false;
                break;
              }
            }
          }
        }
        //ascendente desendente
        if (conditions.upDown) {
          for (const ithem of conditions.upDown.intervals) {
            if (
              !defUpDown({
                def,
                board,
                curves,
                up: ithem[0],
                dom: ithem[1],
                xMod: conditions.upDown.xMod,
                option: true,
                _continue: conditions.upDown.continue,
              })
            ) {
              respAscendent = false;
              break;
            }
          }
        }
        //validacion conexa
        if (conditions.conexa != undefined) {
          //1 indica una funcion de un solo dominio de tipo conexa
          if (
            conditions.conexa.type == 1 &&
                  allDom.length == 1 &&
                  allDom[0][2] == 1
          ) {
            respConex = true;
            //2 indica una funcion de un solo dominio de tipo disconexa
          } else if (
            conditions.conexa.type == 2 &&
                  allDom.length == 1 &&
                  allDom[0][2] == 2
          ) {
            respConex = true;
            //3 indica una funcion de un solo dominio de tipo conexa o disconexa
          } else if (
            conditions.conexa.type == 3 &&
                  allDom.length == 1 &&
                  (allDom[0][2] == 2 || allDom[0][2] == 1)
          ) {
            respConex = true;
          } else {
            //4 indica una funcion de varios dominios la validacion de tipo se hace desde la definicion a cada dominio independiente ojo
            if (conditions.conexa.type != 4) {
              respConex = false;
            }
          }
        }
        // valida el intervalo en el eje x
        if (conditions.dom) {
          const respAuxDom = defValDom({
            def,
            allDom,
            ...conditions.dom,
            axieX: def.axieX,
          });
          if (respAuxDom == 2 || !respAuxDom) {
            domResp = false;
          }
        }
        //valida todos los maximos minimos locales y globales del ejercicio.
        if (conditions.min || conditions.max) {
          if (minResp && maxMin) {
            if (conditions.min) {
              if (conditions.min.minTotal) {
                let y = defModsXY(
                  def,
                  conditions.min.yMod,
                  conditions.min.minTotal,
                  2
                );
                minResp = maxMin[1] && defInterPoint(y, maxMin[1][1]);
              }
              if (minResp && conditions.min.global) {
                minResp = defValMaxMinGlobal(
                  def,
                  conditions.min,
                  maxMin,
                  1
                );
              }
              if (minResp && conditions.min.minLocal) {

                minResp = defValMaxMinLocal(def,
                  conditions.min.minLocal,
                  maxMin[2][1],
                  conditions.min.xMod,
                  conditions.min.noise
                );
              }
              minResp =
                        minResp &&
                        (conditions.min.localcount == undefined ||
                           conditions.min.localcount == maxMin[4]);
            }

            if (conditions.max != undefined) {

              if (conditions.max.maxTotal != undefined) {
                let y = defModsXY(
                  def,
                  conditions.max.yMod,
                  conditions.max.maxTotal,
                  2
                );
                maxResp = maxMin[0] && defInterPoint(y, maxMin[0][1]);
              }
              if (maxResp && conditions.max.global != undefined) {
                maxResp = defValMaxMinGlobal(
                  def,
                  conditions.max,
                  maxMin,
                  2
                );
              }
              if (maxResp && conditions.max.maxLocal != undefined) {
                maxResp = defValMaxMinLocal(def,
                  conditions.max.maxLocal,
                  maxMin[2][0],
                  conditions.max.xMod,
                  conditions.max.noise
                );
              }
              maxResp =
                        maxResp &&
                        (conditions.max.localcount == undefined ||
                           conditions.max.localcount == maxMin[3]);
            }
          }
        }
        //valida los puntos de corte eje X en el caso que se necesite en el Y pero actualmente no se necesita.
        if (conditions.countsX || conditions.countsy) {
          const respCountXY = defCountAxieXY(curves);
          if (conditions.countsX) {
            respCount[0] = respCountXY[0] == conditions.countsX.value;
          }
          if (conditions.countsY) {
            respCount[1] = respCountXY[1] == conditions.countsY.value;
          }
        }
        //valida el rango del ejercicio
        if (conditions.rang) {
          rangeResp = defValRange({
            def,
            curves,
            allPoints,
            ...conditions.rang,
            axieY: def.axieY,
            rangFilter,
          });
        }
        //valida cota
        if (conditions.cotes.top || conditions.cotes.bottom) {
          respCote = defValidateCote(
            def,
            board,
            curves,
            allDom,
            conditions.cotes,
            0,
            true,
            conditions.cotes.xMod,
            conditions.cotes.yMod,
            conditions.cotes.modCoteTop,
            conditions.cotes.modCoteBottom
          );
        }
        //valida los diferentes intervalos del dominio con las condiciones definidas
        if (conditions.eRange) {
          conditions.eRange.cotas.forEach((e) => {
            if (
              !defValidateCote(
                def,
                board,
                curves,
                allDom,
                e,
                0,
                true,
                conditions.eRange.xMod,
                conditions.eRange.yMod,
                conditions.eRange.modCoteTop,
                conditions.eRange.modCoteBottom
              )
            ) {
              respER = false;
            }
          });
        }
        //si la curva es paralela al eje indicado 1:X o 2:y
        if (conditions.parallels) {
          respParallels =
                  (conditions.parallels.mode != undefined
                     ? conditions.parallels.mode
                     : true) ==
                  defUpDown({
                    def,
                    board,
                    curves,
                    parallels: conditions.parallels.type,
                    noise: conditions.parallels.noise || 0.1,
                  });
        }
        if (
          [
            respneTwentySeven,
            rangeResp,
            respRelativeMaxMIn,
            respER,
            respXCote,
            respParallels,
            respCote,
            respCompare,
            domResp,
            positiveNegative,
            respConex,
            respAscendent,
            ...respCount,
            maxResp,
            minResp,
          ].includes(false)
        ) {
          def.dataInteraction.incorrect = 1;
          def.dataInteraction.correct = 0;
          if (!respneTwentySeven) {
            listError +=
                     conditions.oneTwentySeven.text ??
                     ' Las alturas no cumplen las condiciones';
          }
          if (!respRelativeMaxMIn) {
            listError +=
                     ' ' +
                     (conditions.relativeMaxMIn.text ??
                        ' Altura de los máximos o mínimos locales');
          }
          if ([...respCount].includes(false)) {
            listError +=
                     ' ' + (conditions.countsX.text ?? ' Puntos de corte con el eje x,');
          }
          if (!respCompare) {
            listError +=
                     ' ' +
                     (conditions.compare.text ??
                        ' La curva no cumple con las caracteriticas,');
          }
          if (!positiveNegative) {
            listError +=
                     ' ' + (conditions.positiveNegative.text ?? 'Positivo o Negativo,');
          }
          if (!respAscendent) {
            listError +=
                     ' ' + (conditions.upDown.text ?? ' Ascendente o Descendente,');
          }
          if (!respXCote) {
            listError +=
                     ' ' + (conditions.xCote.text ?? ' No cumple las Condiciones,');
          }
          if (!respER) {
            listError +=
                     ' ' + (conditions.eRange.text ?? ' No cumple las Condiciones,');
          }
          if (!rangeResp) {
            listError += ' ' + (conditions.rang.text ?? ' Rango,');
          }
          if (!respParallels) {
            listError += ' ' + (conditions.parallels.text ?? ' Paralelo al eje,');
          }
          if (!respConex) {
            listError += ' ' + (conditions.conexa.text ?? ' Conexidad,');
          }
          if (!respCote) {
            listError += ' ' + (conditions.cotes.text ?? ' Cota,');
          }
          if (!domResp) {
            listError += ' ' + (conditions.dom.text ?? ' Dominio,');
          }
          if (!maxResp) {
            listError += ' ' + (conditions.max.text ?? ' Máximo,');
          }
          if (!minResp) {
            listError += ' ' + (conditions.min.text ?? ' Mínimo,');
          }
          listError =
                  listError[listError.length - 1] == ','
                     ? listError.substring(0, listError.length - 1) + '.'
                     : listError;

          defAlerts({ def, id: refArtifact, text: listError, type: 2 });
        } else {
          // defAlerts(refArtifact, ` Excelente`, 1, 26);
          defAlerts({ def, id: refArtifact, text: ' Excelente', type: 1, size: 26 });
          def.dataInteraction.incorrect = 0;
          def.dataInteraction.correct = 1;
        }
      } else {
        listError += ' Mas de dos puntos de corte con el eje y';
        defAlerts({ def, id: refArtifact, text: listError, type: 2 });
        def.dataInteraction.incorrect = 1;
        def.dataInteraction.correct = 0;
      }
    } else {
      if (def.yellow == true) {
        defAlerts({ def, id: refArtifact, text: 'Tu respuesta sera tomada en cuenta GRACIAS' });
      } else {
        if (!scaleX && !scaleY) {
          defAlerts({ def, id: refArtifact, text: 'Revisa la escala X y Y agrega solo los puntos necesarios', type: 2 });
        } else if (!scaleX) {
          defAlerts({ def, id: refArtifact, text: 'Revisa la escala X agrega solo los puntos necesarios', type: 2 });
        } else if (!scaleY) {
          defAlerts({ def, id: refArtifact, text: 'Revisa la escala Y agrega solo los puntos necesarios', type: 2 });
        } else if (!modCoteTop) {
          defAlerts({ def, id: refArtifact, text: 'Revisa la creación de la cota superior.', type: 2 });
        } else if (!modCoteBottom) {
          defAlerts({ def, id: refArtifact, text: 'Revisa la creación de la cota inferior.', type: 2 });
        } else if (!modCoteSpecial) {
          defAlerts({ def, id: refArtifact, text: 'Revisa la creación de la cota no cumple el intervalo.', type: 2 });

        } else if (!modCoteBottom && !modCoteTop) {
          defAlerts({ def, id: refArtifact, text: 'Revisa la creación de la cota inferior e superior.', type: 2 });
        }
        def.dataInteraction.incorrect = 1;
        def.dataInteraction.correct = 0;
      }
    }
  } else {
    def.dataInteraction.forAnswer = 1;
    defAlerts({ def, id: refArtifact, text: 'No hay cambios', type: 3, size: 15, timer: 4 });
  }

  if (def.debug) {
    console.table(curvesCleanData(def, refArtifact, def.points, def.yellow));
    return console.warn('{{{{{{{{{{{{{{{{{{{{{{{{{{{{{ DEBUG }}}}}}}}}}}}}}}}}}}}}}}}}}}}}');
  }

  if (typeof Android !== 'undefined' && typeof Android.sendData === 'function') {
    Android.sendData(JSON.stringify(curvesCleanData(def, refArtifact, def.points, def.yellow)));
    gTime(def, false);
    def.statusValidate = false;
  } else {
    sendData(curvesCleanData(def, refArtifact, def.points, def.yellow));
  }

  def.statusValidate = true;
  def.change = false;
}

function defGenericCoteValidation(
  def,
  board,
  curves,
  allDom,
  cotePreference,
  xCote,
  condValue,
  mode = 1,
  flat = false
) {
  const y = defModsXY(def, true, condValue, mode);
  const objectCote = {
    [flat ? 'bottom' : 'top']: {
      dom: cotePreference.domBottom,
      rang: y,
      domPlus: cotePreference.domPlus || [0, 0],
      topNoise: cotePreference.bottomNoise || 0,
    },
  };
  return (
    y != false &&
      defValidateCote(
        def,
        board,
        curves,
        allDom,
        objectCote,
        -0.02,
        true,
        xCote.xMod,
        xCote.yMod,
        xCote.modCoteTop,
        xCote.modCoteBottom
      )
  );
}

function restoreCurves(def, board, ref, curves) {
  return curves.map((curve) => {
    const pointsResult = Object.values(curve.ancestors).sort((p1, p2) => {
      return p1.X() - p2.X();
    });
    const newCurves = defAddCurv(def, board, ref, pointsResult);

    if (curve.infinities) {
      if (curve.infinities[0]) {
        restoreInfinites(
          def,
          board,
          newCurves,
          curve.infinities[0],
          pointsResult[0],
          true
        );
      }
      /*  if (curve.infinities[1]) {
             restoreInfinites(
                def,
                board,
                newCurves,
                curve.infinities[1],
                pointsResult.at(-1),
                false
             );
          } */
      if (curve.infinities[1]) {
        restoreInfinites(
          def,
          board,
          newCurves,
          curve.infinities[1],
          pointsResult[pointsResult.length - 1],
          false
        );
      }
    }
    return newCurves;
  });
}
function restoreInfinites(
  def,
  board,
  newCurves,
  infinities,
  pointsResult,
  mode = true
) {
  //const pivot = mode ? 18 : -18;
  const pivot = mode ? 18 : (newCurves.points.length - 18);
  if (infinities[0].id === pointsResult.id) {
    infinities.map((p) => [p.X(), p.Y()]);
    /* const point = board.create(
         "point",
         [
            () => newCurves.points.at(pivot).usrCoords.slice(1)[0],
            () => newCurves.points.at(pivot).usrCoords.slice(1)[1],
         ],
         { name: "", visible: false, color: "red" }
         ); */

    const point = board.create(
      'point',
      [
        function () {
          if (
            newCurves.points[mode ? 18 : newCurves.points.length - 18] != undefined
          ) {
            return newCurves.points[mode ? 18 : newCurves.points.length - 18]
              .usrCoords.slice(1)[0];
          }
        },
        function () {
          if (
            newCurves.points[mode ? 18 : newCurves.points.length - 18] != undefined
          ) {
            return newCurves.points[mode ? 18 : newCurves.points.length - 18]
              .usrCoords.slice(1)[1];
          }
        },
      ],
      { name: '', visible: false, color: 'red' }
    );

    const infinityPoints = [
      pointsResult,
      ...infinityDrawing(
        {
          def,
          board,
          point: pointsResult,
          curve: newCurves,
          pointMode: false,
          asfterPosition: infinities.map((p) => [p.X(), p.Y()]),
        },
        point
      ),
    ];

    board.create('cardinalspline', [infinityPoints, 0.8, 'centripetal'], {
      strokeColor: '#2196f3',
      strokeWidth: 2,
    });
    newCurves.infinities[mode ? 0 : 1] = infinityPoints;
  } else {
    infinities[mode ? 0 : 1].setAttribute({ color: '#D55E00' });
  }
}

/* function defValidateScale(cond, userScale, option = true) {
   cond.sort((p1, p2) => p1[1] - p2[1]);
   let scaleMod = userScale.map(x => [x[1], x[2]._value.replace(/[ ]/, "")]).filter((p1) => {
      return !(defInterPoint(option ? p1[0].X() : p1[0].Y(), 0) && p1[1] == '0');
   });
   scaleMod.sort((p1, p2) => { return (option ? p1[0].X() : p1[0].Y() - option ? p2[0].X() : p2[0].Y()); });
   return (scaleMod.length == cond.length) && cond.every((condValue, i) => {
      const scale = scaleMod[i];
      return (
         ((i > 0 && (scaleMod[i - 1][0].X() < option ? scale[0].X() : scale[0].Y())) || i == 0) &&

         (condValue[0] < 0 && (option ? scale[0].X() : scale[0].Y()) < 0 || condValue[0] > 0 && (option ? scale[0].X() : scale[0].Y()) > 0) &&
         condValue[1].replace(/[ ]/, "") === scale[1].replace(/[ ]/, "")
      );
   });
} */

function defValidateScale(cond, userScale, option = true) {
  cond.sort((p1, p2) => p1[1] - p2[1]);
  let scaleMod = userScale.map(x => [x[1], x[2]._value.replace(/[ ]/, '')]).filter((p1) => {
    return !(defInterPoint(option ? p1[0].X() : p1[0].Y(), 0) && p1[1] == '0');
  });
  scaleMod.sort((p1, p2) => {
    if (option) {
      return p1[0].X() - p2[0].X();
    } else {
      return p1[0].Y() - p2[0].Y();
    }
  });
  return scaleMod.length === cond.length && cond.every((condValue, i) => {
    const scale = scaleMod[i];
    if (i > 0) {
      if (option) {
        return scaleMod[i - 1][0].X() < scale[0].X();
      } else {
        return scaleMod[i - 1][0].Y() < scale[0].Y();
      }
    } else {
      return true;
    }
  }) && cond.every((condValue, i) => {
    const scale = scaleMod[i];
    if (condValue[0] < 0) {
      if (option) {
        return scale[0].X() < 0;
      } else {
        return scale[0].Y() < 0;
      }
    } else if (condValue[0] > 0) {
      if (option) {
        return scale[0].X() > 0;
      } else {
        return scale[0].Y() > 0;
      }
    } else {
      return true;
    }
  }) && cond.every((condValue, i) => {
    const scale = scaleMod[i];
    return condValue[1].replace(/[ ]/, '') === scale[1].replace(/[ ]/, '');
  });
}