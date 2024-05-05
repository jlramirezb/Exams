const keyMod = {
  MG_KEYBOARD_LAYER: {
    operadores: {
      styles: '',
      rows: [
        [
          { label: '+', key: '+' },
          { label: '-', key: '-' },
          { label: '*', key: '*' },
          { class: 'small', latex: '\\frac{#@}{#0}', key: '/' },
          { latex: '#@^{#?}' },
        ], [
          { label: '(', key: '(' },
          { label: ')', key: ')' },
          {
            class: 'action',
            label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
            command: ['performWithFeedback', 'moveToPreviousChar'],
          }, {
            class: 'action',
            label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
            command: ['performWithFeedback', 'moveToNextChar'],
          }, {
            class: 'action font-glyph bottom right',
            label: '&#x232b;',
            command: ['performWithFeedback', 'deleteBackward']
          },
        ]
      ],
    },
    numeros: {
      styles: '',
      rows: [
        [

          { label: '1', key: '1' },
          { label: '2', key: '2' },
          { label: '3', key: '3' },
          { label: '4', key: '4' },
          { label: '5', key: '5' },

        ], [

          { label: '6', key: '6' },
          { label: '7', key: '7' },
          { label: '8', key: '8' },
          { label: '9', key: '9' },
          { label: '0', key: '0' },


        ], [
          { label: '.', key: '.' },
          { label: ',', key: ',' },
          {
            class: 'action',
            label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
            command: ['performWithFeedback', 'moveToPreviousChar'],
          }, {
            class: 'action',
            label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
            command: ['performWithFeedback', 'moveToNextChar'],
          }, {
            class: 'action font-glyph bottom right',
            label: '&#x232b;',
            command: ['performWithFeedback', 'deleteBackward']
          }
        ],
      ],
    },
    alfabeto: {
      styles: '',
      rows: [
        [
          { label: 'a', key: 'a' },
          { label: 'b', key: 'b' },
          { label: 'c', key: 'c' },
          { latex: 'e' },
        ], [
          { label: 'x', key: 'x' },
          { label: 'y', key: 'y' },
          { label: 'z', key: 'z' },
          { latex: '\\pi' },
        ], [
          {

          },
          {
            class: 'action',
            label: '<svg><use xlink:href=\'#svg-arrow-left\' /></svg>',
            command: ['performWithFeedback', 'moveToPreviousChar'],
          }, {
            class: 'action',
            label: '<svg><use xlink:href=\'#svg-arrow-right\' /></svg>',
            command: ['performWithFeedback', 'moveToNextChar'],
          }, {
            class: 'action font-glyph bottom right',
            label: '&#x232b;',
            command: ['performWithFeedback', 'deleteBackward']
          }
        ],
      ],
    },
  },
  MG_KEYBOARD: {
    operadores: {
      label: 'Operadores',
      tooltip: 'Operadores',
      layer: 'operadores',
    },
    numeros: {
      label: 'Números',
      tooltip: 'Números',
      layer: 'numeros',
    },
    alfabeto: {
      label: 'Alfabeto',
      tooltip: 'Alfabeto',
      layer: 'alfabeto',
    },
  },
  virtualKeyboards: 'operadores numeros alfabeto'
};
function mainCartesian(defBoards, allDef) {
  const tmp = document.querySelector('#tmp-cartesian');
  const divs = document.querySelectorAll('.defCartesian');
  divs.forEach((div, i) => {

    const iconst = i;
    const clone = tmp.content.firstElementChild.cloneNode(true);
    const $board = clone.querySelector('.defBoard');
    const btnAll = clone.querySelector('.btn-all');
    const id = 'defCartesianBoard_' + i;
    $board.setAttribute('id', id);
    // Por defecto apunta a un artifact_0 y defBoard_0
    const boardSelect = div.dataset.board || allDef[div.dataset?.artifact || 'artifact_0'].defBoard || 'board_0';
    const refArtifact = div.dataset.artifact || defBoards[boardSelect || 'board_0']?.artifact || 'artifact_0';

    clone.setAttribute('id', refArtifact);

    if (!defBoards[boardSelect]) {
      console.warn('<!> board undefined <!>');
      return;
    };

    let artifactDefault = {
      buttonsActive: {
        return: true,
        pointClose: true,
      },
      defaultInputsConfig: {
        noiseY: 0.5,
        noiseX: 0.5
      },
      dataInteraction: { incorrect: 0, correct: 0, forAnswer: 0 },
      statusValidate: true,
      pointInteractive: [],
      timeInteraction: 0,
      textBottom: null,
      textAlert: null,
      textTop: null,
      visible: true,
      debug: false,
      points: [],
      other: [],
      mode: 10,
      conditions: {
      },
      ...allDef[refArtifact],
      change: false,
    };

    const style = defBoards[boardSelect].style;
    div.appendChild(clone);
    const dataBoard = gBoard(artifactDefault, defBoards[boardSelect], id, style, null, i, { ignore: true });
    const board = dataBoard.board;

    const textPosition = board.create('text', [0, board.attr.boundingbox[1] - 0.5, '(0,0)'], {
      anchorY: 'middle',
      anchorX: 'middle',
      digits: 2,
      fixed: true,
      visible: false,
      fontSize: 18,
      intl: {
        enabled: true,
        options: {
          style: 'unit',
          unit: 'celsius'
        }
      }
    });
    if (artifactDefault.defaultInputs) {

      artifactDefault.defaultInputs.forEach(input => {
        cDefAddPoint(artifactDefault, board, input.position,
          {
            interactive: input.interactive,
            disabled: !input.interactive,
            point: { fixed: true },
            input: {
              value: input.value,
              noiseY: artifactDefault?.defaultInputsConfig?.noiseY || input.noiseY,
              noiseX: artifactDefault?.defaultInputsConfig?.noiseX || input.noiseX
            },
          },);
      });

    };
    //referencias de los puntos geeneradis
    if (dataBoard.resultObj.points) {
      artifactDefault.pointsData = dataBoard.resultObj.points;
    };

    allDef[refArtifact] = artifactDefault;
    btnAll.addEventListener('click', (e) => {

      const button = e.target;
      if (button.classList.contains('check')) {
        cDefValidation(artifactDefault, refArtifact, board);
      } else {
        if (button.classList.contains('reset')) {
          cDefReset(artifactDefault, board, true, iconst);
        } else if (button.classList.contains('back')) {
          cDefReturn(artifactDefault, board);
        } else if (button.classList.contains('pointClose')) {
          gButtonToggle({ def: artifactDefault, button: button, mode: 1 });
        };

        artifactDefault.statusValidate = false;
        board.update();
      }
    });

    const pointcloseButton = btnAll.querySelector('.pointClose');
    if (!artifactDefault.buttonsActive.pointClose) {
      pointcloseButton.style.display = 'none';

    };

    if (!artifactDefault.buttonsActive.return) {
      btnAll.querySelector('.back').style.display = 'none';

    };

    if (artifactDefault.helpMsg) {
      gHelpMsg(artifactDefault, clone, refArtifact);

    };

    if (artifactDefault.debug) {
      gAllPointsDefault({
        ignore: true,
        points: artifactDefault.conditions.points.map((p) => [...p.p, true, p.text, 1, 'blue']), board
      });
    };

    board.on('down', (e) => {
      if (artifactDefault.mode === 1) {
        cDefAddPoint(allDef[refArtifact], board, null, {
          /*  input: {
                   noiseY: artifactDefault?.defaultInputsConfig?.noiseY,
                   noiseX: artifactDefault?.defaultInputsConfig?.noiseX
                }, */
        }, textPosition);
      };
      gTime(artifactDefault);
      artifactDefault.change = true;
      artifactDefault.statusValidate = false;
    });

    if (!artifactDefault.helpMsg) {
      btnAll.querySelector('.help').style.display = 'none';
    };

    //  board.create('text',);
    const textTop = clone.querySelectorAll('.textTop');
    const textBottom = clone.querySelectorAll('.textBottom');

    if (artifactDefault.textTop) {
      setTopBottonValue(artifactDefault.textTop, textTop[0], textTop[1]);
    } else {
      setTopBottonValue('text', textTop[0], textTop[1], false);
    };

    if (artifactDefault.textBottom) {
      setTopBottonValue(artifactDefault.textBottom, textBottom[0], textBottom[1]);
    } else {
      setTopBottonValue('text', textBottom[0], textBottom[1], false);
    };

    clone.addEventListener('mouseenter', () => {
      gTime(artifactDefault);
    });
    clone.addEventListener('click', (e) => {
      if (e.target.tagName !== 'BUTTON') {
        gTime(artifactDefault);

      };
    });

    clone.addEventListener('mouseleave', () => {
      gTime(artifactDefault, false, false);
    });
  });

};

function cDefAddPoint(def, board, position, sty, textPosition, style = {
  disabled: false, ...sty,
  input: {
    precision: {
      touch: 4,
      touchMax: 4,
      mouse: 4,
      pen: 4,
      hasPoint: 1,
    },
    layer: 3,
    fixed: false,
    ...sty?.input,
    noiseX: sty?.input?.noiseX ?? 0.49,
    noiseY: sty?.input?.noiseY ?? 0.8,
  },
  point: {
    opacity: 0.8,
    size: 6,
    layer: 2,
    fixed: false,
    name: '',
    label: false,

    ...sty?.point,
    color: sty?.point?.color ?? 'black',
  },
}) {
  const coords = position ?? board.getUsrCoordsOfMouse();

  if (!position) {

    const elementIn = board.getAllUnderMouse();
    if (def.mode != 1 || elementIn.findIndex((p) => !Array.isArray(p) && !p.ignore && ['glider', 'point', 'text'].includes(p.elType) && (gDist(p, coords) < 0.7)) !== -1) {
      gButtonToggle({ def });
      return;
    };
  };


  const point = board.create('point', coords, {
    ...style.point,
    precision: {
      touch: 4,
      touchMax: 4,
      mouse: 3,
      pen: 4,
      hasPoint: 1,
    },
  });

  if (position) {
    point.defaultElement = true;
  };

  if (style.input) {
    const input = board.create('text',
      [

        () => point.X() - style.input.noiseX,
        () => point.Y() - style.input.noiseY
        , `<math-field
            virtual-keyboard-mode='onfocus' 
            placeholder = '(x, y)
            fonts-directory='fonts'
            class='colorInput'
            keypress-sound ='none'
             ${style.disabled ? 'disabled' : ''}
             ></math-field>`

      ], style.input
    );
    const mathfield = input.rendNode.childNodes[0];



    const optionsKeyboard = getKeyboardMath(window.screen.width, keyMod);

    mathfield.value = style?.input?.value || '';
    mathfield.setOptions({
      customVirtualKeyboardLayers: {
        ...optionsKeyboard[0],
      },
      customVirtualKeyboards: {
        ...optionsKeyboard[1],
      },
      smartFence: false,
      virtualKeyboards: optionsKeyboard[2],
    });

    mathfield.addEventListener('input', () => {

      gTime(def);
      def.change = true;
    });
    point.lastCoords = coords;
    point.on('drag', () => {

      if (gDist(point, point.lastCoords) > 0.3) {
        def.change = true;
        gTime(def);

        point.lastCoords = [point.X(), point.Y()];
        if (textPosition) {
          textPosition.setAttribute({ visible: true });
          textPosition.setText(`(${point.X().toFixed(2)},${point.Y().toFixed(2)})`);
        };
        mathfield.style.display = 'none';
        input.setAttribute({ visible: false });
      }
    });
    point.on('up', () => {
      def.change = true;
      if (textPosition) {
        textPosition.setAttribute({ visible: false });

      };
      mathfield.style.display = mathfield.style.display == 'flex' ? 'none' : 'flex';
      input.setAttribute({ visible: mathfield.style.display == 'flex' ? true : false });
    });

    gStyleMath(mathfield);

    input.on('over', function (event) {
      const elementx = board.getAllUnderMouse();
      if (elementx.findIndex(
        (p) => {
          return !Array.isArray(p) && p.id !== input.id;
        }) !== -1) {
        return;
      };
      input.visProp.cssstyle = 'z-index:4;';
    }, true);

    input.on('out', function (event) {
      input.visProp.cssstyle = 'z-index:3;';
    }, true);
    point.input = input;

    point.interactive = style.interactive;
    if (style.interactive) {
      def.pointInteractive.push({ mathfield, value: style.input.value });
      def.points.push(point);
    };
  };
  if (!position) {
    def.change = true;
    def.points.push(point);
  };

};

function cDefReturn(def, board) {
  let arraySelect = def.points;
  if (arraySelect.length > 0 && !arraySelect.at(-1).interactive) {
    const point = arraySelect.pop();
    board.removeObject(point.input);
    board.removeObject(point);
    def.change = true;
    gTime(def);
  };
  board.update();
};

function cDefReset(def, board, mode = 1) {

  let arraySelect = def.points;
  if (mode == 1) {

    board.removeObject(arraySelect.map(p => {
      if (!p.interactive) {
        return [p.input, p].flat();
      };
      return [];
    }));

    def.pointInteractive.forEach((input) => {

      input.mathfield.value = input?.value || '';
      input.mathfield.classList.remove('passInLibrary');
      input.mathfield.classList.remove('failedInLibrary');

    });
    def.points = def.pointInteractive.length > 0 ? def.points : [];
  };

  board.update();
  if (def.textAlert) {
    def.textAlert.remove();
    def.textAlert = null;
  };
  def.change = false;
  gButtonToggle({ def: def });
};

function cDefValidation(def, refKey, board) {

  const conditions = def.conditions;
  let textError = conditions.texterror.text ?? 'Revisa tus respuestas \n ';
  def.dataInteraction.forAnswer = conditions.points.length;
  def.dataInteraction.incorrect = 0;
  def.dataInteraction.correct = 0;
  const points = def.points;
  let resp = true;

  if (!def.statusValidate && def.change) {
    const ponintsLength = points.length == conditions.points.length;

    if (!ponintsLength) {
      if (points.length > conditions.points.length) {
        textError += 'Creaste mas puntos de los indicados';
      } else {
        const lestPOints = conditions.points.length - points.length;
        if (lestPOints > 1) {
          textError = 'Revisa tus puntos, ';
          textError += 'faltan ' + lestPOints + ' por completar';

        }
        else {
          textError = 'Revisa tus puntos, ';

          textError += 'falta ' + lestPOints + ' por completar';
        }
      };
    };

    resp = ponintsLength;



    let answers = points.map((punto) => {

      return (punto.input.rendNode.children[0].value != '');

    });


    let answersAmount = answers.filter((valor) => {
      return valor === true;

    });
    //console.log(answersAmount.length)



    points.forEach((pUser) => {
      const input = pUser.input.rendNode.children[0];
      const value = input.value;


      const math = conditions.points.findIndex((pCondition) => {

        const text = pCondition.text || 'default';
        const pos = pCondition.p;

        const aux2 = cDefValidatePointValue(pos, value, gTextToLatex(text));
        const aux1 = gDist(pUser, pCondition.p) < 0.2;

        if (def.debug) {
          console.log('dist:', aux1, 'value: ', aux2);
        };
        return aux1 && aux2;
      }) != -1;

      if (value.length !== 0) {
        if (!math) {
          input.classList.remove('passInLibrary');
          input.classList.add('failedInLibrary');
          def.dataInteraction.incorrect += 1;
          def.dataInteraction.forAnswer -= 1;

        } else {

          input.classList.remove('failedInLibrary');
          input.classList.add('passInLibrary');
          def.dataInteraction.forAnswer -= 1;
          def.dataInteraction.correct += 1;

        };
      } else {

        input.classList.remove('failedInLibrary');
        input.classList.remove('passInLibrary');

      };
      resp = !resp ? resp : math;
    });

    if (resp) {
      gAlerts({
        def,
        id: refKey,
        text: 'Excelente',
        size: 20,
      });

    } else {

      gAlerts({
        def,
        id: refKey,
        type: 2,
        text: textError,
        size: 20,
        timer: conditions.texterror.time ?? 4
      });
      setTimeout(() => { cDefReset(def, board, 2); }, (conditions.texterror.time ?? 4) * 1000);
    };
    if (def.debug) {
      console.warn('{{{{{{{{{ DEBUG }}}}}}}}}');
      console.table(cleanData(def, refKey));

    }/* else {

        
          if (typeof Android !== 'undefined' && typeof Android.sendData === 'function') {
             Android.sendData(JSON.stringify(cleanData(def, refKey)));
             // La función Android.sendData(json) está disponible
          } else {
             console.log({ messageError: "Esta funcion no se encuentra definida o no esta en el mismo ambito" });
             sendData(cleanData(def, refKey));
          }
      }; */

    if (typeof Android !== 'undefined' && typeof Android.sendData === 'function') {
      Android.sendData(JSON.stringify(cleanData(def, refKey)));
    } else {
      sendData(cleanData(def, refKey));

    };

    gButtonToggle({ def, button: null });
    gTime(def, false);
    def.change = false;
    def.statusValidate = true;

  };
};

function cleanData(def, refKey) {
  let auxResult = {};

  auxResult = { results: def.dataInteraction };
  auxResult.elementArtifact = {
    pointsData: def.points.map((point) => [[point.X(), point.Y()], point.input.rendNode.childNodes[0].value])
  };

  let refactTypeArtifact = refKey.split('_');
  auxResult.artifact = Number(refactTypeArtifact[refactTypeArtifact.length - 1]);
  auxResult.typeArtifact = 'Standard';
  auxResult.seconds = def.timeInteraction;

  if (def.yellow) {
    auxResult.typeArtifact = 'Yellow';
    delete auxResult.results;
  };

  return auxResult;
};

function cDefValidatePointValue(point, input, text, noise = 0.2) {
  //hay que reemplazar e espacio tambien
  const textInput = input.replace(/\\left|\\right|[\(\) 　]/gi, '').toLocaleLowerCase();
  const textCondition = text == 'default' || text.replace(/\\left|\\right|[\(\) 　]/gi, '').toLocaleLowerCase();
  const textNumber = textInput.split(',').map(Number);

  if (textCondition == 'default') {
    return textNumber.length > 1 && gInterPoint(textNumber[0], point[0], noise) && gInterPoint(textNumber[1], point[1], noise);
  } else {
    return textCondition === textInput;
  };
};

//cambia los enunciados del top o bootom del ejercicio
function setTopBottonValue(text, content1, content2, mode = true) {
  const textMod = text.replace(/[\( ]/g, '').split('),');
  if (mode) {
    if (text.length > 4) {
      content1.textContent = gTextToLatex('(' + textMod.slice(0, (Math.round(textMod.length / 2))).join('),(') + ')');
      content2.textContent = gTextToLatex('(' + textMod.slice((Math.round(textMod.length / 2))).join('),(') + ')');
    } else {
      content1.textContent = gTextToLatex(text);
      content2.style.display = 'none';
    };
  } else {
    content1.style.display = 'none';
    content2.style.display = 'none';
  };
};