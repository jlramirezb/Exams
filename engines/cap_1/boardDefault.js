function defBoardDefault() {
  const divs = document.querySelectorAll('.defBoard');
  divs.forEach((div, i) => {
    let boardSelect = div.dataset.board;
    if (!defBoards[boardSelect]) {
      console.warn('<!> board undefined <!>');
      return;
    }
    const style = defBoards[boardSelect].style;
    div.setAttribute('id', 'boardDefault_' + i);
    div.style = 'width: ' + (style.maxWidth || '') + 'px; height: ' + (style.maxHeight || '') + 'px;';
    let board = JXG.JSXGraph.initBoard('boardDefault_' + i, {
      label: { visible: false },
      axis: style.axis[0] || false,
      boundingbox: style.boundingbox || [-4, 4, 4, -4],
      maxboundingbox: [-15, 15, 15, -15],
      grid: style.grid || false,
      grid: { strokeColor: (!style.grid) ? false : 'grey' },
      showNavigation: false,
      showCopyright: false,
      keyboard: {
        enabled: false,
        dy: 30,
        panShift: true,
        panCtrl: false,
      },
      pan: {
        needTwoFingers: true,
        enabled: false,
        needShift: true
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
        wheel: false
      },
    });

    ///////////////////////////////// aqui falta competar los tiks por defecto
    if (!style.axis[0] && style.axis[1]) {
      defAxies(board, style.valueAxis?.xd, style.valueAxis?.xp, style.valueAxis?.xv, style.valueAxis?.colorx);
    };
    if (!style.axis[0] && style.axis[2]) {
      defAxies(board, style.valueAxis?.yd, style.valueAxis?.yp, style.valueAxis?.yv, style.valueAxis?.colory);
    };
    //pintar lista de puntos par ordenado de x/y
    if (defBoards[boardSelect].points) {
      defAllPointsDefault(board, defBoards[boardSelect].points);
    };
    //pintar lista de lineas
    if (defBoards[boardSelect].lines) {
      defLineDefault(board, defBoards[boardSelect].lines);
    };
    //pintar lista de curvas
    if (defBoards[boardSelect].curves) {
      defCurveDefault(board, defBoards[boardSelect].curves, style.curveType);
    };
    if (defBoards[boardSelect].polygon) {
      polygon(board, defBoards[boardSelect].polygon);
    };
    defBoards[boardSelect].board = board;
  });
};

function defAxies(board, axie, position, values, color = '#A19D9C') {
  if (!axie) {
    console.log('ponle una direction valueAxis:{ xd/yd: [[0, 0], [1, 0]],}');
    return;
  };
  const auxAxie = board.create('axis', axie);

  let auxTicks = board.create('ticks', [auxAxie, position || false
  ], {
    layer: 1,
    drawLabels: true,
    labels: values || false,
    label: {
      autoPosition: true,
      offset: [-5, 0],
      anchorX: 'middle',
      anchorY: 'top',
      visible: true,
    },
  });

  auxAxie.setAttribute({
    color: color,
    ticks: { visible: false }
  });
};

function defAllPointsDefault(board, points, ignore = false) {
  let pointsReference = [];
  points.forEach((p, i) => {
    //[x,y,visible,name,size,type]
    let point = board.create('point', [p[0], p[1]], {
      size: p[4] || 2,
      name: (p[3] != undefined) ? p[3] : '',
      label: {
        visible: (undefined != p[3] && p[3] != '') ? true : false,
        autoPosition: true,
        offset: [0, 10],
        fontSize: 16,
      },
      fixed: p[6] ?? true,
      layer: 3,
      visible: (p[2] == undefined) ? false : p[2],
      fillcolor: (typeof p[5] == 'string') ? p[5] : p[5] ? 'white' : '#D55E00',
      strokeColor: (typeof p[5] == 'string') ? p[5] : '#D55E00',
    });
    point.ignore = ignore;
    pointsReference.push(point);
  });
  return pointsReference;
};
//lines[[2 points x,y],dash,flecha inicial,final, Grosor, color]
function defLineDefault(board, lines) {
  const tempLines = [];
  lines.forEach((l) => {
    let line = board.create('line', defAllPointsDefault(board, l[0]), {
      layer: 2,
      strokeColor: l[5] || 'black',
      dash: l[1] || 0,
      straightFirst: false,
      straightLast: false,
      firstArrow: l[2] || false,
      lastArrow: l[3] || false,
      strokeWidth: l[4] || 1,
      label: {
        autoPosition: true,
      }
    });
    tempLines.push(line);
  });
  return tempLines;
};

function defCurveDefault(board, curves, type = 1) {
  curves.forEach((c) => {
    const style = { strokeColor: c[1] ? c[1] : 'black', strokeWidth: c[2] ? c[2] : 1.5, label: { autoPosition: true, } };
    switch (type) {
      case 1:
        let curve = board.create('spline', defAllPointsDefault(board, c[0]), style);
        break;
      case 2:
        let curva = board.create('cardinalspline', [defAllPointsDefault(board, c[0]), c[3] ?? 1, 'centripetal'], style);
        break;
      default:
        console.warn('Tipo no declarado de Curva');
        break;
    };
  });
};

function polygon(board, polygon) {
  polygon.forEach(points => {
    const newPolygon = board.create('polygon', points,
      {
        fixed: true, withLines: false,
        fillColor: 'grey', fillOpacity: 0.1,
        vertices: { visible: false, fixed: true },
      });
  });
};