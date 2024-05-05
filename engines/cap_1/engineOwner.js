let targetActive = '';

function generator() {
  let mainOwner = document.querySelector('#mainOwner');
  let grid = document.querySelector('#grid');
  let template = document.querySelector('#template');
  let newContent = template.content.querySelector('.newContent')
  let fragment = new DocumentFragment();

  for (let key of Object.keys(def)) {
    let defDefault = {
      debug: def[key].debug || false,
      defInput: [],
      dataInteraction: {
        correct: 0,
        incorrect: 0,
      },
      defValueInput: def[key].defValueInput || false,
      changeContent: def[key].changeContent || false,
      sizeInput: def[key].sizeInput || false,
      timeInteraction: 0,
      statusValidate: false,
      change:false,
      modeMath: def[key].modeMath || false,
      buttonsActive:def[key].buttonsActive || false,
      newContent:def[key].newContent || false,
      modeDoubleBoard: def[key].modeDoubleBoard || false,
      modeRefact: def[key].modeRefact || false,
      specialDef:def[key].specialDef || false,
    };
    const clone = template.content.firstElementChild.cloneNode(true);
    const conteiner = clone.querySelector('.content_2');
     
      
      
    clone.setAttribute('data-ejercicio', key);
      
    clone.addEventListener('mouseenter', e => {
      targetActive = clone.dataset.ejercicio;
    });
    clone.addEventListener('mouseleave', e => {
      targetActive = '';
    });
      



    def[key] = { ...def[key], ...defDefault };

    clone.addEventListener('mouseenter', () => {
      gTime(def[key]);
    });
    clone.addEventListener('click', () => {
      gTime(def[key]);
    });

    clone.addEventListener('mouseleave', () => {
      gTime(def[key], false, false);
    });

    fragment.appendChild(clone);

      
      
    if (def[key].changeContent) {
      grid.appendChild(fragment);
    } else {
         
      if(clone.dataset.ejercicio.search(/artifact/gi) !== -1 && def[key].newContent){
            
        newContent.classList.add('newContent')
        newContent.appendChild(fragment)
        mainOwner.appendChild(newContent);
            
      }else{
            
        mainOwner.appendChild(fragment);
      }
         
         
    }
      
    add(key, conteiner, def[key].datadefault, grid, def[key]);
     
     
  }
}
function stateButton(artifact, input, def){
  input.addEventListener('change', (e) => {
    def.change = true
   });
}

function add(key, conteiner, iterator, grid, defArtifact) {
  if (iterator) {
    for (let el of iterator) {
      //Parrafo = 1
      if (el[0] == 1) {
        let div = document.createElement('div');

        let p = document.createElement('p');
        p.textContent = el[1];
        div.appendChild(p);
        div.className = 'contenedor texto';
        p.className = 'parrafo';
        conteiner.appendChild(p);
      }
      //subtitulo = 2
      if (el[0] == 2) {
        let div = document.createElement('div');
        let h5 = document.createElement('h5');
        h5.textContent = el[1];
        div.appendChild(h5);
        conteiner.appendChild(div);
        div.className = 'contenedor';
        h5.className = 'subtitulo';
      }
      //Subtitulo y parrafo  = 3
      if (el[0] == 3) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        let h5 = document.createElement('h5');
        h5.textContent = el[1];
        p.textContent = el[2];
        div.appendChild(h5);
        div.appendChild(p);
        conteiner.appendChild(div);
        div.className = 'contenedor textDouble';
        p.className = 'parrafo margen-5';
        h5.className = 'subtitulo margen-5';
      }
      //Board de la curvas
      if (el[0] == 4) {
        let express = /[board]/gi;
        if(!defArtifact.modeDoubleBoard){
          let padre = document.createElement('div');
          let hijo = document.createElement('div');
          conteiner.appendChild(padre);
          padre.appendChild(hijo);
          padre.className = 'content_1';
          hijo.className = 'defBoard jxgbox short-board';
          hijo.setAttribute('data-board', el[1]);
        }else{
          let padre = document.createElement('div');
          padre.classList.add('newContent','p-4');
          padre.style.gap = '2rem';
          el.map((item, index) =>  {
            if( express.test(item) && typeof item !== 'object'){
              let hijo = document.createElement('div');
              let contentBoard = document.createElement('div');
              hijo.className = 'defBoard jxgbox short-board';
              hijo.setAttribute('data-board', item);
              contentBoard.appendChild(hijo);
              padre.appendChild(contentBoard);
                     
            }
          })
          Array.from(padre.childNodes).map((item, index)=>{
            let div = document.createElement('div');
            let p = document.createElement('p');
            p.classList.add('titulo')
            p.textContent = el[3][index]
            div.appendChild(p)
            item.insertBefore(div, item.firstChild)
            //item.parentNode.insertBefore(div, item)
                 
          })
               
          conteiner.appendChild(padre);
        }
            
      }
      //Tableros
      if (el[0] == 5) {
        let ExprestionSort = [];
        let ResulExpressItem = [];
           

        //Contenedor
        let div = document.createElement('div');
        div.className =
               'contenedor table-responsive reduce-table margen-top-25';
        let table = document.createElement('table');
        table.className = 'table table-bordered table-width ';
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        tbody.classList.add('newTbody')
            


        //Botones
        let targetInput = '';
        //posicion del cursor en el input
        let targetStart = '';
        let targetEnd = '';
        let btn_content = document.createElement('div');
        let allButtons = document.createElement('div');
        allButtons.className = 'content_1 allbuttons';
        btn_content.className = 'content_1';

        let btn_check = document.createElement('button');
        let btn_reset = document.createElement('button');

        btn_check.className = 'check buttonPrimary button-marg buttonKey';
        btn_reset.className = 'reset buttonSecundary button-marg buttonKey';
           
        
        //btn_content.appendChild(allButtons);
        if(!defArtifact.buttonsActive){
          btn_content.appendChild(btn_reset);
          btn_content.appendChild(btn_check);
        }

        if(!def[key].modeRefact){
          //generadores de filas y columnas
          for (let i = 0; i < el[1]; i++) {
            let th = document.createElement('th');
            th.setAttribute('scope', 'row');
            thead.appendChild(th);
          }
          if(el[2] !== 0){

            for (let i = 0; i < el[2]; i++) {
              let tr = document.createElement('tr');
              let th = document.createElement('th');
              th.className = 'media-th';
              th.setAttribute('scope', 'row');
              tr.appendChild(th);
              tbody.appendChild(tr);
   
              for (let inputFor = 0; inputFor < el[1]; inputFor++) {
                let td = document.createElement('td');
                td.className = 'center-td';
                //let input = document.createElement("input");
                let input = document.createElement('math-field');
                input.setAttribute('inputmode', 'none');
                input.setAttribute('virtual-keyboard-mode', 'onfocus');
                input.setAttribute('keypress-sound', 'none');
                input.classList.add('element', 'math', 'tablaHeight');
                keyboardCustom(def[key], input)
                stateButton(key, input, def[key])  
   
                if (el[1] > 3) {
                  input.classList.add('input-width');
                  table.classList.add('table-width');
                  div.className = 'reduce-table';
                }
                input.style = 'text-align:center';
                input.classList.add('input-width-normalice');
                def[key].defInput.push(input);
   
                td.appendChild(input);
                tr.appendChild(td);
                input.addEventListener('click', () => {
                  targetInput = input;
                });
              }
            }
          }else{
            for (let i = 0; i < el[1] - 1; i++) {
              let tr = document.createElement('tr');
              /* let th = document.createElement("th");
                     th.className = "media-th";
                     th.setAttribute("scope", "row");
                     tr.appendChild(th); */
              tbody.appendChild(tr);
   
              for (let inputFor = 0; inputFor < el[1]; inputFor++) {
                let td = document.createElement('td');
                //td.style.cssText = 'display: flex; justify-content: center; align-items: center;';
                td.classList.add('center-td','newSizeMath');
                //let input = document.createElement("input");
                let input = document.createElement('math-field');
                input.setAttribute('default-mode', 'text');
                input.setAttribute('inputmode', 'none');
                input.setAttribute('virtual-keyboard-mode', 'onfocus');
                input.setAttribute('keypress-sound', 'none');
                input.classList.add('element', 'math','borderDefault');
                keyboardCustom(def[key], input)
                stateButton(key, input, def[key])     
               
   
   
                if (el[1] > 3) {
                  input.classList.add('input-width');
                  table.classList.add('table-width');
                  div.className = 'reduce-table';
                }
                input.style = 'text-align:center';
                input.classList.add('input-width-normalice');
                def[key].defInput.push(input);
   
                td.appendChild(input);
                tr.appendChild(td);
                input.addEventListener('click', () => {
                  targetInput = input;
                });
                        
              }
            }
          }
               

          for (let item of Object.keys(thead.children)) {
            thead.children[item].classList.add('item');
            thead.children[item].textContent = el[3][item];
          }
          if(el[2] !== 0){
            for (let element of Object.keys(tbody.children)) {
              tbody.children[element].children[0].classList.add('item');
              tbody.children[element].children[0].textContent = el[4][element];
            }
          }
               
          //Valor predefinido
          if (def[key].defValueInput) {
            if(el[2] !== 0){
              tbody.children[0].children[1].children[0].setAttribute(
                'disabled',
                'disabled',
              );
              tbody.children[0].children[2].children[0].setAttribute(
                'disabled',
                'disabled',
              );
              tbody.children[0].children[1].children[0].value =
                        def[key].defValueInput[0];
              tbody.children[0].children[2].children[0].value =
                        def[key].defValueInput[1];
            }else{
              tbody.children[0].children[0].children[0].setAttribute(
                'disabled',
                'disabled',
              );
              tbody.children[0].children[1].children[0].setAttribute(
                'disabled',
                'disabled',
              );
              tbody.children[0].children[0].children[0].value =
                        def[key].defValueInput[0];
              tbody.children[0].children[1].children[0].value =
                        def[key].defValueInput[1];
            }
          }

        }else{

          //generadores de filas y columnas
          for (let i = 0; i < el[1]; i++) {
            let th = document.createElement('th');
            th.setAttribute('scope', 'row');
            thead.appendChild(th);
          }

          for (let i = 0; i < el[2]; i++) {
            let tr = document.createElement('tr');
            tbody.appendChild(tr);

            for (let inputFor = 0; inputFor < el[1]; inputFor++) {
              let td = document.createElement('td');
              td.className = 'center-td newTableTD';
              let input = document.createElement('input');
              //let input = document.createElement("math-field");
              input.classList.add('borderDefault')
              //input.setAttribute("inputmode", "none");
              //input.setAttribute("virtual-keyboard-mode", "onfocus");
              //input.setAttribute("keypress-sound", "none");
              input.classList.add('element', 'math', 'tablaHeight');
              //keyboardCustom(def[key], input)


              if (el[1] > 3) {
                input.classList.add('input-width');
                table.classList.add('table-width');
                div.className = 'reduce-table';
              }
              input.style = 'text-align:center';
              input.classList.add('input-width-normalice');
              def[key].defInput.push(input);

              td.appendChild(input);
              tr.appendChild(td);
              input.addEventListener('click', () => {
                targetInput = input;
              });
            }
          }
          for (let item of Object.keys(thead.children)) {
            thead.children[item].classList.add('item');
            thead.children[item].textContent = el[3][item];
          }
          for (let element of Object.keys(tbody.children)) {
            tbody.children[element].children[0].classList.add('item');
            if(el[4] !== undefined){
              tbody.children[element].children[0].textContent = el[4][element];
            }
          }
          //Valor predefinido
          if (def[key].defValueInput) {
            tbody.children[0].children[1].children[0].setAttribute(
              'disabled',
              'disabled',
            );
            tbody.children[0].children[2].children[0].setAttribute(
              'disabled',
              'disabled',
            );
            tbody.children[0].children[1].children[0].value =
                  def[key].defValueInput[0];
            tbody.children[0].children[2].children[0].value =
                  def[key].defValueInput[1];
          }
        }

        /* /\(-?[0-9],-?[0-9]\)[,;]\(-?[0-9],-?[0-9]\)/g */
        btn_check.addEventListener('click', () => {
               
          def[key].dataInteraction.correct = 0;
          def[key].dataInteraction.incorrect = 0;
          def[key].dataInteraction.forAnswer = 0;

          if(def[key].modeMath){

            if (def[key].defValueInput) {
              for (let item = 2; item < def[key].defInput.length; item++) {
                const regex = /(\+∞)/g;
                let ExpresRex = /\)[,y]\(/;
                //let toLower = def[key].defInput[item].value.replace(new RegExp("[' ']", 'g'), "").replace(new RegExp(ExpresRex, 'g'), ");(").replace(regex, '∞').toLocaleLowerCase()
                let toLower = latexClear(def[key].defInput[item])
                  .replace(new RegExp('[\' \']', 'g'), '')
                  .replace(regex, '∞')
                  .toLocaleLowerCase();
                const separador =
                           toLower.match(/[∪]/g) !== null &&
                              toLower.match(/[;y]/g) !== null
                              ? false
                              : toLower.match(/[∪]/g) !== null &&
                                 toLower.match(/[;y]/g) !== null
                                 ? '∪'
                                 : ';';
                //(?<=chau)hola
                let oper = /[y;∪]|(?<=\)|\]),/g;
                
                if (toLower !== '') {
                  if (
                    def[key].conditions[item].includes(
                      toLower.split(oper).sort().join(';'),
                    )
                  ) {
                    def[key].defInput[item].classList.add('pass');
                    def[key].defInput[item].classList.remove('failed');
                    def[key].dataInteraction.correct += 1;
                  } else {
                    def[key].defInput[item].classList.remove('pass');
                    def[key].defInput[item].classList.add('failed');
                    def[key].dataInteraction.incorrect += 1;
                  }
                } else {
                  def[key].dataInteraction.forAnswer += 1;
                  def[key].defInput[item].classList.remove('pass');
                  def[key].defInput[item].classList.remove('failed');
   
                }
   
              }
            } else {
              for (var item in def[key].conditions) {
                //
                const regex = /(\+∞)/g;
                let ExpresRex = /\)[,y;]\(|\][,y;]\(|\)[,y;]\[|\][,y;]\[/;
                let ExpressCondition = /[,y;]/gi;
                let oper = /[y;]|(?<=\)|\]),/g;

                let toLower = latexClear(def[key].defInput[item])
                  .replace(new RegExp('[\' \']', 'g'), '')
                  .replace(regex, '∞')
                  .toLocaleLowerCase();

                if (ExpresRex.test(toLower)) {
                  let t1 = toLower.replace(oper, ';')
                                
                  if (t1 !== '') {
                    
                   
                      
                    if (
                      def[key].conditions[item].includes(
                        t1.split(';').sort().join(';'),
                      )
                    ) {
                      def[key].defInput[item].classList.add('pass');
                      def[key].defInput[item].classList.remove('failed');
                      def[key].dataInteraction.correct += 1;
                    } else {
                      def[key].defInput[item].classList.remove('pass');
                      def[key].defInput[item].classList.add('failed');
                      def[key].dataInteraction.incorrect += 1;
                    }
                  } else {
                    def[key].dataInteraction.forAnswer += 1;
                    def[key].defInput[item].classList.remove('pass');
                    def[key].defInput[item].classList.remove('failed');
                  }
   
   
                  
                } else {
                  if (toLower !== '') {
                    let oper = /[∪]|(?<=\)|\]),/g;

                   

                    if (def[key].conditions[item].includes(def[key].specialDef ? toLower.split(oper).sort().join('∪') : toLower)) {
                      def[key].defInput[item].classList.add('pass');
                      def[key].defInput[item].classList.remove('failed');
                      def[key].dataInteraction.correct += 1;
                    } else {
                      def[key].defInput[item].classList.remove('pass');
                      def[key].defInput[item].classList.add('failed');
                      def[key].dataInteraction.incorrect += 1;
                    }
                  } else {
                    def[key].dataInteraction.forAnswer += 1;
                    def[key].defInput[item].classList.remove('pass');
                    def[key].defInput[item].classList.remove('failed');
                  }
   
                }
              }
            }
          }else{
            if (def[key].defValueInput) {
              for (let item = 2; item < def[key].defInput.length; item++) {
                const regex = /(\+∞)/g;
                let ExpresRex = /\)[,y]\(/;
                //let toLower = def[key].defInput[item].value.replace(new RegExp("[' ']", 'g'), "").replace(new RegExp(ExpresRex, 'g'), ");(").replace(regex, '∞').toLocaleLowerCase()
                let toLower = def[key].defInput[item].value
                  .replace(new RegExp('[\' \']', 'g'), '')
                  .replace(regex, '∞')
                  .toLocaleLowerCase();
                const separador =
                           toLower.match(/[∪]/g) !== null &&
                              toLower.match(/[;y]/g) !== null
                              ? false
                              : toLower.match(/[∪]/g) !== null &&
                                 toLower.match(/[;y]/g) !== null
                                 ? '∪'
                                 : ';';
                //(?<=chau)hola
                let oper = /[y;∪]|(?<=\)|\]),/g;
                if (toLower !== '') {
                  if (
                    def[key].conditions[item].includes(
                      toLower.split(oper).sort().join(';'),
                    )
                  ) {
                    def[key].defInput[item].classList.add('pass');
                    def[key].defInput[item].classList.remove('failed');
                    def[key].dataInteraction.correct += 1;
                  } else {
                    def[key].defInput[item].classList.remove('pass');
                    def[key].defInput[item].classList.add('failed');
                    def[key].dataInteraction.incorrect += 1;
                  }
                } else {
                  def[key].dataInteraction.forAnswer += 1;
                  def[key].defInput[item].classList.remove('pass');
                  def[key].defInput[item].classList.remove('failed');
   
                }
                           
              }
            } else {
              for (var item in def[key].conditions) {
                //
                const regex = /(\+∞)/g;
                let ExpresRex = /\)[,y;]\(|\][,y;]\(|\)[,y;]\[|\][,y;]\[/;
                let ExpressCondition = /[,y;]/;
                let oper = /[y;∪]|(?<=\)|\]),/g;
                let toLower = def[key].defInput[item].value
                  .replace(new RegExp('[\' \']', 'g'), '')
                  .replace(regex, '∞')
                  .toLocaleLowerCase();
                        

                if (ExpresRex.test(toLower)) {
                  let t1 = toLower.replace(
                    new RegExp(ExpresRex, 'g'),
                    `${toLower[toLower.search(ExpresRex)]}${toLower[
                      toLower.search(ExpresRex) + 1
                    ].replace(
                      new RegExp(ExpressCondition, 'g'),
                      ';',
                    )}${toLower[toLower.search(ExpresRex) + 2]}`,
                  );
   
                  if (t1 !== '') {
                    

                    if (
                      def[key].conditions[item].includes(
                        t1.split(';').sort().join(';'),
                      )
                    ) {
                      def[key].defInput[item].classList.add('pass');
                      def[key].defInput[item].classList.remove('failed');
                      def[key].dataInteraction.correct += 1;
                    } else {
                      def[key].defInput[item].classList.remove('pass');
                      def[key].defInput[item].classList.add('failed');
                      def[key].dataInteraction.incorrect += 1;
                    }
                  } else {
                    def[key].dataInteraction.forAnswer += 1;
                    def[key].defInput[item].classList.remove('pass');
                    def[key].defInput[item].classList.remove('failed');
                  }
   
   
                  
                } else {
                  if (toLower !== '') {
                    if (def[key].conditions[item].includes(toLower)) {
                      def[key].defInput[item].classList.add('pass');
                      def[key].defInput[item].classList.remove('failed');
                      def[key].dataInteraction.correct += 1;
                    } else {
                      def[key].defInput[item].classList.remove('pass');
                      def[key].defInput[item].classList.add('failed');
                      def[key].dataInteraction.incorrect += 1;
                    }
                  } else {
                    def[key].dataInteraction.forAnswer += 1;
                    def[key].defInput[item].classList.remove('pass');
                    def[key].defInput[item].classList.remove('failed');
                  }
   
                }
              }
            }

          }

               

          if (typeof Android !== 'undefined' && typeof Android.sendData === 'function') {
            if(def[key].change){
              Android.sendData(JSON.stringify(cleanDataJ()));
              // La función Android.sendData(json) está disponible
              gTime(def[key], false);
              def[key].statusValidate = false;
              def[key].change = false;
            }
            

          } else {
            
            if(def[key].change){
              console.warn({ messageError: 'Esta funcion no se encuentra definida o no esta en el mismo ambito', });
              sendData(cleanDataJ());
              def[key].change = false;
              gTime(def[key], false);
              def[key].statusValidate = false;
            }
          }
          
          

        });

        btn_reset.addEventListener('click', () => {
               
          if (def[key].defValueInput) {
                  
            for (var
                itemInput = 1;
              itemInput < tbody.children.length;
              itemInput++
            ) {
              for (
                var count = 2;
                count < tbody.children[itemInput].children.length;
                count++
              ) {
                for (var
                    i = 1;
                  i < tbody.children[itemInput].children.length;
                  i++
                ) {
                  tbody.children[itemInput].children[
                    i
                  ].children[0].value =
                              '';
                  tbody.children[itemInput].children[
                    i
                  ].children[0].classList.remove('pass');
                  tbody.children[itemInput].children[
                    i
                  ].children[0].classList.remove('failed');
                }
              }
            }
          } else {
                  
            for (let element of Object.keys(tbody.children)) {
              for (let itemInput = 0; itemInput < tbody.children[element].children.length; itemInput++) {
                       
                tbody.children[element].children[
                  itemInput
                ].children[0].value =
                           '';
                tbody.children[element].children[
                  itemInput
                ].children[0].classList.remove('pass');
                tbody.children[element].children[
                  itemInput
                ].children[0].classList.remove('failed');
              }
            }
          }
        });

        window.addEventListener('click', e => {
          if (e.target.tagName === 'INPUT') {
            targetInput = e.target;
          }
        });

        allButtons.addEventListener('click', e => {
          if (
            e.target.classList.value.includes('buttonTarget') &&
                  targetInput != null
          ) {
            defAllBottons(e.target.dataset.text);
            targetInput.focus();
          }
        });

        function defAllBottons(buttons) {
          targetStart = targetInput.selectionStart;
          targetEnd = targetInput.selectionEnd;
          if (targetInput) {
            targetInput.setRangeText(
              buttons,
              targetStart,
              targetEnd,
              'end',
            );
          }
        }

        //insertando tablas y contenedores de boton al container principal
        table.appendChild(thead);
        table.appendChild(tbody);
        div.appendChild(table);
        div.appendChild(btn_content);

        conteiner.appendChild(div);
        conteiner.classList.add('borderDefault','p-2','newBoardSize')
        styleMath()
      }
      //Board_Double and tablet 2x6
      if (el[0] == 6) {
        let contenedor = document.createElement('div');
        let contentBoardTable = document.createElement('div');
        let contentBoard = document.createElement('div');
        let board_1 = document.createElement('div');
        let board_2 = document.createElement('div');

        let contentBoard_1 = document.createElement('div');
        let contentBoard_2 = document.createElement('div');
        let contentConexa = document.createElement('div');
        let contentDisconexa = document.createElement('div');
        let conexa = document.createElement('p');
        let disconexa = document.createElement('p');
        contentConexa.appendChild(conexa);
        contentDisconexa.appendChild(disconexa);
        conexa.className = 'titulo';
        disconexa.className = 'titulo';
        conexa.textContent = el[7];
        disconexa.textContent = el[8];
        contentBoard_1.className = 'item reduce-table';
        contentBoard_2.className = 'item reduce-table';
        contentBoard_1.appendChild(contentConexa);
        contentBoard_2.appendChild(contentDisconexa);
        contentBoard_1.appendChild(board_1);
        contentBoard_2.appendChild(board_2);

        contentBoardTable.classList.add('table-board');
        contentBoard.classList.add('contentBoard_Double');
        contentBoard.classList.add('margen-button');
        board_1.className = 'defBoard jxgbox short-board board-item';
        board_1.setAttribute('data-board', el[5]);
        board_2.className = 'defBoard jxgbox short-board';
        board_2.setAttribute('data-board', el[6]);

        contenedor.classList.add('contenedor');
        contentBoardTable.classList.add('table-board');
        let contentTable = document.createElement('div');
        contentTable.classList.add('contentTable');
        let table = document.createElement('table');
        table.className = 'table table-bordered tablet3x6';
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        table.appendChild(thead);
        table.appendChild(tbody);
        contentTable.appendChild(table);

        //Botones

        let targetInput = '';
        //posicion del cursor en el input
        let targetStart = '';
        let targetEnd = '';
        let btn_content = document.createElement('div');
        btn_content.className = 'content_1';
        let btn_check = document.createElement('button');
        let btn_reset = document.createElement('button');
        let btn_empty = document.createElement('button');
        btn_empty.setAttribute('data-text', '∅');
        btn_check.className = 'check buttonPrimary button-marg buttonKey';
        btn_reset.className = 'reset buttonSecundary button-marg buttonKey';
        btn_empty.className = 'empty buttonTertiary buttonKey';
        btn_content.appendChild(btn_reset);
        btn_content.appendChild(btn_check);
        //btn_content.appendChild(btn_empty)

        //generadores de filas y columnas
        for (let i = 0; i < el[1]; i++) {
          let th = document.createElement('th');
          th.setAttribute('scope', 'col');
          thead.appendChild(th);
        }
        for (let i = 0; i < el[2]; i++) {
          let tr = document.createElement('tr');
          let th = document.createElement('th');

          th.setAttribute('scope', 'row');
          tr.appendChild(th);
          tbody.appendChild(tr);

          for (let input = 0; input < el[1] - 1; input++) {
            let td = document.createElement('td');
            let input = document.createElement('input');
            input.style = 'text-align:center';
            def[key].defInput.push(input);
            td.appendChild(input);
            tr.appendChild(td);
            input.addEventListener('click', () => {
              targetInput = input;
            });
          }
        }
        for (let item of Object.keys(thead.children)) {
          thead.children[item].className = 'item';
          thead.children[item].textContent = el[3][item];
        }
        for (let element of Object.keys(tbody.children)) {
          tbody.children[element].children[0].className = 'item';
          tbody.children[element].children[0].textContent = el[4][element];
        }
        btn_check.addEventListener('click', () => {
          def[key].dataInteraction.correct = 0;
          def[key].dataInteraction.incorrect = 0;
          def[key].dataInteraction.forAnswer = 0;

          for (var item in def[key].defInput) {
            let toLower = def[key].defInput[item].value
              .replace(new RegExp('[\' \']', 'g'), '')
              .toLowerCase();

            if (toLower !== '') {
              if (toLower === def[key].conditions[item][0]) {
                def[key].defInput[item].classList.add('pass');
                def[key].defInput[item].classList.remove('failed');

                def[key].dataInteraction.correct += 1;
              } else {
                def[key].defInput[item].classList.remove('pass');
                def[key].defInput[item].classList.add('failed');
                def[key].dataInteraction.incorrect += 1;
              }
            } else {
              def[key].dataInteraction.forAnswer += 1;
              def[key].defInput[item].classList.remove('pass');
              def[key].defInput[item].classList.remove('failed');
            }

          }
          if (typeof Android !== 'undefined' && typeof Android.sendData === 'function') {
            if(def[key].change){
              Android.sendData(JSON.stringify(cleanDataJ()));
              // La función Android.sendData(json) está disponible
              gTime(def[key], false);
              def[key].statusValidate = false;
              def[key].change = false;
            }
            
          } else {
            if(def[key].change){
              console.warn({ messageError: 'Esta funcion no se encuentra definida o no esta en el mismo ambito', });
              sendData(cleanDataJ());
              gTime(def[key], false);
              def[key].statusValidate = false;
              def[key].change = false;
            }
          }
         
        });
        btn_reset.addEventListener('click', () => {
          for (let element of Object.keys(tbody.children)) {
            for (
              itemInput = 1;
              itemInput < tbody.children[element].children.length;
              itemInput++
            ) {
              tbody.children[element].children[
                itemInput
              ].children[0].value =
                        '';
              tbody.children[element].children[
                itemInput
              ].children[0].classList.remove('pass');
              tbody.children[element].children[
                itemInput
              ].children[0].classList.remove('failed');
            }
          }
        });

        //añdiendo contenedores
        contentBoard.appendChild(contentBoard_1);
        contentBoard.appendChild(contentBoard_2);
        contenedor.appendChild(contentBoardTable);
        contentBoardTable.appendChild(contentBoard);
        contentBoardTable.appendChild(contentTable);
        contentTable.appendChild(btn_content);
        conteiner.appendChild(contenedor);
        conteiner.classList.add('borderDefault')
      }
      //Genera div con board y cada unno tiene un texto
      if (el[0] == 7) {
        //create elements
        let contenedor = document.createElement('div');
        let BoardContainer = document.createElement('div');
        let BoardPositive = document.createElement('div');
        let BoardNegative = document.createElement('div');
        let arrayDiv = [[], []];
        let contenedorBoardPositive = document.createElement('div');
        let contenedorBoardNegative = document.createElement('div');
        let p = document.createElement('p');
        let searchBoard = /board/gi;
        let elementEmpty = /[' ']/gi;

        if (el[1] > 0) {
          for (let i = 0; i < el[1]; i++) {
            let contentText = document.createElement('div');
            contentText.classList.add('contenedor');
            contentText.classList.add('inputCenter');
            contentText.classList.add('content_1');
            contentText.classList.add(`div_${[i]}`);
            contentText.classList.add('borderIndividual');
            BoardPositive.appendChild(contentText);
            arrayDiv[0].push(contentText);
          }

          for (let i = 0; i < el[1]; i++) {
            let contentText = document.createElement('div');
            contentText.classList.add('contenedor');
            contentText.classList.add('inputCenter');
            contentText.classList.add('content_1');
            contentText.classList.add('borderIndividual');
            BoardNegative.appendChild(contentText);
            contentText.classList.add(`div_${[i]}`);
            arrayDiv[1].push(contentText);
          }
        }

        if (el[1] > 3) {
          if (searchBoard.test(el[2][1])) {
            //Parte Positiva del cuadro del baord
            arrayDiv[0][0].textContent = el[2][0];
            arrayDiv[0][0].classList.remove('borderIndividual');
            arrayDiv[0][0].classList.add('bold-example');
            contenedorBoardPositive.className =
                     'defBoard short-board nota';
            contenedorBoardPositive.setAttribute('data-board', el[2][1]);
            arrayDiv[0][1].appendChild(contenedorBoardPositive);
            arrayDiv[0][1].classList.remove('borderIndividual');
                  arrayDiv[0][2] == null
                     ? arrayDiv[0][2].classList.remove('borderIndividual')
                     : (arrayDiv[0][2].textContent = el[2][2]);
                  arrayDiv[0][3] == null
                     ? arrayDiv[0][3].classList.remove('borderIndividual')
                     : (arrayDiv[0][3].textContent = el[2][3]);
                  arrayDiv[0][4] == null
                     ? arrayDiv[0][4].classList.remove('borderIndividual')
                     : (arrayDiv[0][4].textContent = el[2][4]);

                  //Parte Negativa del cuadro del baord
                  arrayDiv[1][0].textContent = el[3][0];
                  arrayDiv[1][0].classList.remove('borderIndividual');
                  arrayDiv[1][0].classList.add('bold-example');
                  contenedorBoardNegative.className =
                     'defBoard short-board nota';
                  contenedorBoardNegative.setAttribute('data-board', el[3][1]);
                  arrayDiv[1][1].appendChild(contenedorBoardNegative);
                  arrayDiv[1][1].classList.remove('borderIndividual');
                  arrayDiv[1][2] == undefined
                     ? console.log('no hay nada aqui')
                     : (arrayDiv[1][2].textContent = el[3][2]);
                  arrayDiv[1][3] == undefined
                     ? console.log('no hay nada aqui')
                     : (arrayDiv[1][3].textContent = el[3][3]);
                  arrayDiv[1][4] == undefined
                     ? console.log('no hay nada aqui')
                     : (arrayDiv[1][4].textContent = el[3][4]);
          } else {
            //Parte Positiva del cuadro del baord
            arrayDiv[0][0].textContent = el[2][0];
            arrayDiv[0][0].classList.add('bold-example');
            arrayDiv[0][1].textContent = el[2][1];
            contenedorBoardPositive.className =
                     'defBoard short-board nota';
            arrayDiv[0][2].appendChild(contenedorBoardPositive);
            arrayDiv[0][2].classList.add('content_1');
            contenedorBoardPositive.setAttribute('data-board', el[2][2]);
            arrayDiv[0][3].textContent = el[2][3];

            //Parte Negativa del cuadro del baord
            arrayDiv[1][0].textContent = el[3][0];
            arrayDiv[1][0].classList.add('bold-example');
            arrayDiv[1][1].textContent = el[3][1];
            contenedorBoardNegative.className =
                     'defBoard short-board nota';
            arrayDiv[1][2].appendChild(contenedorBoardNegative);
            arrayDiv[1][2].classList.add('content_1');
            contenedorBoardNegative.setAttribute('data-board', el[3][2]);
            arrayDiv[1][3].textContent = el[3][3];
          }
        } else {
          if (searchBoard.test(el[2][1])) {
            //Parte Positiva del cuadro del baord
            arrayDiv[0][0].textContent = el[2][0];
            arrayDiv[0][0].classList.remove('borderIndividual');
            arrayDiv[0][0].classList.add('bold-example');
            contenedorBoardPositive.className =
                     'defBoard short-board nota';
            contenedorBoardPositive.setAttribute('data-board', el[2][1]);
            arrayDiv[0][1].appendChild(contenedorBoardPositive);
            arrayDiv[0][1].classList.remove('borderIndividual');
            arrayDiv[0][2].textContent = el[2][2];

            //Parte Negativa del cuadro del baord
            arrayDiv[1][0].textContent = el[3][0];
            arrayDiv[1][0].classList.remove('borderIndividual');
            arrayDiv[1][0].classList.add('bold-example');
            contenedorBoardNegative.className =
                     'defBoard short-board nota';
            contenedorBoardNegative.setAttribute('data-board', el[3][1]);
            arrayDiv[1][1].appendChild(contenedorBoardNegative);
            arrayDiv[1][1].classList.remove('borderIndividual');
            arrayDiv[1][2].textContent = el[3][2];
          } else {
            //Parte Positiva del cuadro del baord
            arrayDiv[0][0].textContent = el[2][0];
            arrayDiv[0][0].classList.add('bold-example');
            arrayDiv[0][1].textContent = el[2][1];
            contenedorBoardPositive.className =
                     'defBoard short-board nota';
            arrayDiv[0][2].appendChild(contenedorBoardPositive);
            arrayDiv[0][2].classList.add('content_1');
            contenedorBoardPositive.setAttribute('data-board', el[2][2]);
            arrayDiv[0][3].textContent = el[2][3];

            //Parte Negativa del cuadro del baord
            arrayDiv[1][0].textContent = el[3][0];
            arrayDiv[1][0].classList.add('bold-example');
            arrayDiv[1][1].textContent = el[3][1];
            contenedorBoardNegative.className =
                     'defBoard short-board nota';
            arrayDiv[1][2].appendChild(contenedorBoardNegative);
            arrayDiv[1][2].classList.add('content_1');
            contenedorBoardNegative.setAttribute('data-board', el[3][2]);
            arrayDiv[1][3].textContent = el[3][3];
          }
        }

        //adding style in the elements
        contenedor.classList.add('contenedor');
        BoardContainer.classList.add('contentDoubleBaord');
        BoardPositive.classList.add('sizeBoardDouble');
        BoardNegative.classList.add('sizeBoardDouble');

        BoardContainer.appendChild(BoardPositive);
        BoardContainer.appendChild(BoardNegative);
        contenedor.appendChild(BoardContainer);
        conteiner.appendChild(contenedor);
      }
      //Genera los 6 ejercicios del principio de pagina mas sus curvas con titulos
      if (el[0] == 8) {
        let content = document.createElement('div');
        let contentArtefact = document.createElement('div');
        let arrayDivBoard = [];
        let arraDivText = [];
        if (el[1] > 0) {
          for (let i = 0; i < el[1]; i++) {
            let contentExampleText = document.createElement('div');
            let example = document.createElement('div');
            let exampleText = document.createElement('div');
            contentExampleText.appendChild(exampleText);
            contentExampleText.appendChild(example);
            exampleText.classList.add('bold-example');
            contentArtefact.appendChild(contentExampleText);
            contentExampleText.classList.add('artefact','newArtifactFlex');
            example.className = 'defBoard testBorder short-board margen-5';
            example.setAttribute('data-board', el[3][i]);
            arrayDivBoard.push(contentExampleText);

            for (let text = 0; text < el[2]; text++) {
              let span = document.createElement('span');
              span.textContent = el[4][i][text];
              arraDivText.push(span);
              exampleText.appendChild(span);
            }
          }
        }
        content.classList.add('contenedorGrid');
        //contentArtefact.classList.add("contenTest");
        content.appendChild(contentArtefact);
        conteiner.appendChild(content);

        /* for(let i = 0; i < el[1]; i++){
              let contentExampleText = document.createElement('div');
              let example = document.createElement('div');
              let exampleText = document.createElement('div');
              contentExampleText.appendChild(exampleText);
              contentExampleText.appendChild(example);
              contentArtefact.appendChild(contentExampleText);
              exampleText.classList.add('bold-example');
              example.className = 'defBoard test short-board margen-5'; 
              example.setAttribute('data-board',el[3][i]);
              arrayDivBoard.push(contentExampleText);
              for(text = 0; text < el[2]; text++){
                let span = document.createElement('span');
                span.textContent = el[4][i][text];
                arraDivText.push(span);
                exampleText.appendChild(span);
                
              }
            }
            content.classList.add('contenedorGrid');
            contentArtefact.classList.add('contenTest');
            content.appendChild(contentArtefact); 
            conteiner.appendChild(content); */
      }
      if (el[0] == 9) {
        let regex = /(∞\+|\+∞)/g;
        let searchNum = /{([1-9]+|[1-9]+[.,][1-9]+)}/gi; //  /{(\d+|\d+[.,]\d+)}/gi
        let searchBoard = /board/gi;
        let itemDivText = [];
        let itemInput = [];
        let targetInput = '';
        let targetBox = '';

        if (el[1] > 0) {
          let contenedorGrid = document.createElement('div');

          for (let container = 0; container < el[1]; container++) {
            let box = document.createElement('div');
            box.classList.add('contentArtefact', 'sizeContenedor');
            box.setAttribute('data-content', `${container}`);
            itemDivText.push([container]);
            itemInput.push([]);

            if (el[2] > 0) {
              for (let div = 0; div < el[2]; div++) {
                let contenedorText = document.createElement('div');
                contenedorText.setAttribute('data-text', `${div}`);
                contenedorText.classList.add('divOrdenate');
                itemDivText[container][div] = contenedorText;
                box.appendChild(contenedorText);

                if (el[4] === true) {
                  if (el[5].hasOwnProperty('shortInputText')) {
                    box.classList.remove('sizeContenedor');

                    for (var
                        count = 0;
                      count < el[5].shortInputText.countInput;
                      count++
                    ) {
                      let divC = document.createElement('div');
                      divC.classList.add('divAlignDouble');
                      divC.style = 'margin:10px ';

                      if (count == 0) {
                        if (el[5].shortInputText.item.at(0) == 'p') {
                          
                          let p = document.createElement('p');
                          p.textContent =el[3][container][div][0][0];
                          p.style = 'margin:0';
                          divC.appendChild(p);
                        }
                        if (el[5].shortInputText.item.at(1) == true) {
                          let input = document.createElement('input');
                          //let input = document.createElement("math-field");
                          input.classList.add('inputCenter','sizeInput-Default',);
                          input.style.height = '28px';
                          divC.appendChild(input);

                          input.addEventListener('click', e => {
                            targetInput = e.target;
                          });
                          itemInput[container].push(input);
                          if (el[5].hasOwnProperty('widthInput')) {
                            input.classList.remove('sizeInput-Default',);
                            input.style.width = el[5].widthInput;
                          }
                        }
                        if (
                          el[5].shortInputText.item.at(-1) == 'p'
                        ) {
                          let p = document.createElement('p');
                          p.textContent =
                                          el[3][container][div][0][2];
                          p.style = 'margin:0';
                          divC.appendChild(p);
                        }

                        itemDivText[container][div].appendChild(
                          divC,
                        );
                      }
                      if (count == 1) {
                        if (
                          el[5].shortInputText.item.at(0) == 'p'
                        ) {
                          
                          let p = document.createElement('p');
                          p.textContent =
                                          el[3][container][div][1][0];
                          p.style = 'margin:0';
                          divC.appendChild(p);
                        }
                        if (
                          el[5].shortInputText.item.at(1) == true
                        ) {
                          let input = document.createElement(
                            'input',
                          );
                          input.classList.add(
                            'inputCenter',
                            'sizeInput-Default',
                          );
                          input.style.height = '28px';
                          divC.appendChild(input);
                          input.addEventListener('click', e => {
                            targetInput = e.target;
                          });
                          itemInput[container].push(input);
                          if (el[5].hasOwnProperty('widthInput')) {
                            input.classList.remove(
                              'sizeInput-Default',
                            );
                            input.style.width = el[5].widthInput;
                          }
                        }
                        if (
                          el[5].shortInputText.item.at(-1) == 'p'
                        ) {
                          let p = document.createElement('p');
                          p.textContent =
                                          el[3][container][div][1][2];
                          p.style = 'margin:0';
                          divC.appendChild(p);
                        }

                        itemDivText[container][div].appendChild(
                          divC,
                        );
                      }
                    }
                  } else {
                    if (el[5].hasOwnProperty('doubleLayel')) {
                      box.classList.remove('sizeContenedor');

                      for (var
                          count = 0;
                        count < el[5].doubleLayel.inputCount;
                        count++
                      ) {
                        let divC = document.createElement('div');
                        divC.classList.add('divAlignDouble');
                        divC.style = 'margin:10px ';

                        let input = document.createElement('input');
                        let p = document.createElement('p');
                        input.classList.add(
                          'inputCenter',
                          'sizeInput-Default',
                        );
                        input.style.height = '28px';

                        if (el[5].hasOwnProperty('widthInput')) {
                          input.classList.remove(
                            'sizeInput-Default',
                          );
                          input.style.width = el[5].widthInput;
                        } else {
                          //console.log('no')
                        }
                        p.textContent =
                                       el[3][container][div][count];
                        p.style = 'margin:0';
                        divC.appendChild(p);
                        divC.appendChild(input);
                        itemDivText[container][div].appendChild(
                          divC,
                        );

                        input.addEventListener('click', e => {
                          targetInput = e.target;
                        });
                        itemInput[container].push(input);
                      }
                    } else {
                      box.classList.remove('sizeContenedor');
                      let divC = document.createElement('div');
                      let order = document.createElement('div');
                      order.classList.add('divAlignSingle');
                      divC.style = 'margin:10px ';
                      let p = document.createElement('p');
                      p.style = 'margin:0';
                      p.textContent = el[3][container][div];


                      if(def[key].modeMath){
                        let input = document.createElement('math-field');
                        input.setAttribute('virtual-keyboard-mode', 'onfocus');
                        input.setAttribute('keypress-sound', 'none');
                        input.classList.add('element', 'math', 'tablaHeight','borderMathField');
                        keyboardCustom(def[key],input)
                        stateButton(key, input, def[key])  
                        if (el[5].nullLittle) {
                          divC.classList.add('orderLitte');
                        } else {
                          divC.classList.add('orderLarge');
                        }
                        if (el[5].hasOwnProperty('sizeInput')) {
                          input.setAttribute(
                            'maxlength',
                            el[5].sizeInput,
                          );
                          input.classList.add('sizeInput-Default');
                        } else {
                          input.classList.add('input-reduce');
                          input.setAttribute('maxlength', 2);
                        }
                        if (!p.textContent.match(searchBoard)) {
                          divC.appendChild(p);
                          divC.appendChild(input);
                          order.appendChild(divC);
                          itemDivText[container][div].appendChild(
                            order,
                          );
                          input.addEventListener('click', e => {
                            targetInput = e.target;
                          });
                          itemInput[container].push(input);
                                       
                        } else {
                          divC.appendChild(p);
                          order.appendChild(divC);
                          itemDivText[container][div].appendChild(
                            order,
                          );
                          itemDivText.map(content => {
                            let result = content.findIndex(item =>
                              item.textContent.match(searchBoard),
                            );
   
                            if (content[result]) {
                              content[result].setAttribute(
                                'data-board',
                                content[result].textContent,
                              );
                              content[result].classList.add(
                                'defBoard',
                                'short-board',
                                'board-item',
                              );
                              content[result].classList.remove(
                                'textValInput',
                              );
                            } else {
                                             content.length !== 0 ? false : false;
                            }
                          });
                        }
                      }else{
                        let input = document.createElement('input');
                        stateButton(key, input, def[key])
                        input.classList.add('inputCenter');
                        if (el[5].nullLittle) {
                          divC.classList.add('orderLitte');
                        } else {
                          divC.classList.add('orderLarge');
                        }
                        if (el[5].hasOwnProperty('sizeInput')) {
                          input.setAttribute(
                            'maxlength',
                            el[5].sizeInput,
                          );
                          input.classList.add('sizeInput-Default');
                        } else {
                          input.classList.add('input-reduce');
                          input.setAttribute('maxlength', 2);
                        }
                        if (!p.textContent.match(searchBoard)) {
                          divC.appendChild(p);
                          divC.appendChild(input);
                          order.appendChild(divC);
                          itemDivText[container][div].appendChild(
                            order,
                          );
                          input.addEventListener('click', e => {
                            targetInput = e.target;
                          });
                          itemInput[container].push(input);
                                       
                        } else {
                          divC.appendChild(p);
                          order.appendChild(divC);
                          itemDivText[container][div].appendChild(
                            order,
                          );
                          itemDivText.map(content => {
                            let result = content.findIndex(item =>
                              item.textContent.match(searchBoard),
                            );
   
                            if (content[result]) {
                              content[result].setAttribute(
                                'data-board',
                                content[result].textContent,
                              );
                              content[result].classList.add(
                                'defBoard',
                                'short-board',
                                'board-item',
                              );
                              content[result].classList.remove(
                                'textValInput',
                              );
                            } else {
                                             content.length !== 0 ? false : false;
                            }
                          });
                        }
                      }    
                                 
                                 




                                 
                    }
                  }
                } else {
                  box.classList.remove('sizeContenedor');
                  let divC = document.createElement('div');
                  let order = document.createElement('div');
                  order.classList.add('divAlignSingle');
                  divC.style = 'margin:10px ';
                  let p = document.createElement('p');
                  p.style = 'margin:0';
                  p.textContent = el[3][container][div];
                  divC.classList.add('itemContenFlex');
                  divC.appendChild(p);
                  order.appendChild(divC);
                  itemDivText[container][div].appendChild(order);
                  console.warn('Se han desabilitado los inputs');
                  itemDivText.map(content => {
                    let result = content.findIndex(item =>
                      item.textContent.match(searchBoard),
                    );

                    if (content[result]) {
                      content[result].setAttribute(
                        'data-board',
                        content[result].textContent,
                      );
                      content[result].classList.add(
                        'defBoard',
                        'short-board',
                        'board-item',
                      );
                      content[result].classList.remove(
                        'textValInput',
                      );
                    } else {
                                 content.length !== 0 ? false : false;
                    }
                  });
                }

                contenedorText.addEventListener('click', e => { });
              }
            }
            box.addEventListener('mouseenter', () => {
              targetBox = box.dataset.content;
            });

            if (el[4] === true) {
              let divControlled = document.createElement('div');
              divControlled.classList.add(
                'content_1',
                'allbuttons',
                'border-dark-top',
              );
              let btn_check = document.createElement('button');
              let btn_reset = document.createElement('button');
              btn_check.className =
                        'check buttonPrimary button-marg buttonKey';
              btn_reset.className =
                        'reset buttonSecundary button-marg buttonKey';
              divControlled.appendChild(btn_reset);
              divControlled.appendChild(btn_check);
              box.appendChild(divControlled);

              if(def[key].modeMath){
                btn_check.addEventListener('click', () => {
                  let counterInput = [];
                  let defaultInputValue = def[targetActive].datadefault[0][5].conditions[targetBox];
      
                  def[key].dataInteraction.correct = 0;
                  def[key].dataInteraction.incorrect = 0;
                  def[key].dataInteraction.forAnswer = 0;
      
                  for (let
                      inputVal = 0;
                    inputVal < defaultInputValue.length;
                    inputVal++
                  ) {
                    itemInput[targetBox][inputVal].setAttribute(
                      'id',
                      `input_${inputVal + 1}`,
                    );
                    counterInput.push(itemInput[targetBox][inputVal]);
                    let valNum = latexClear(itemInput[targetBox][inputVal])
                      .replace(new RegExp('[\' \']', 'g'), '')
                      .replace(regex, '∞')
                      .toLocaleLowerCase();
                    let searNN = /\[(\d+[,]\d+)\]/gi;
                    let braket = /[\[\]]/gi;
      
                    if (defaultInputValue[inputVal].includes(null)) {
                      if (valNum.match(searNN) !== null && valNum.match(searNN)[0].replace(new RegExp(braket), '').split(',')) {
                        let nnResult = valNum
                          .match(searNN)[0]
                          .replace(new RegExp(braket), '')
                          .split(',');
                        if(valNum !== ''){
                          if (nnResult[0] === nnResult[1]) {
                            itemInput[targetBox][inputVal].classList.remove('failed');
                            itemInput[targetBox][inputVal].classList.add('pass');
                            def[key].dataInteraction.correct += 1;
                          } else {
                            itemInput[targetBox][inputVal].classList.remove('pass');
                            itemInput[targetBox][inputVal].classList.add('failed');
                            def[key].dataInteraction.incorrect += 1;
                          }
                        }else{
                          def[key].dataInteraction.forAnswer += 1;
                          itemInput[targetBox][inputVal].classList.remove('pass');
                          itemInput[targetBox][inputVal].classList.remove('failed');                               
      
                        }
                                      
                      } else {
                        if(valNum !== ''){
                          if (valNum.search(searchNum) !== -1) {
                            itemInput[targetBox][inputVal].classList.remove('failed');
                            itemInput[targetBox][inputVal].classList.add('pass');
                            def[key].dataInteraction.correct += 1;
                          } else {
                            itemInput[targetBox][inputVal].classList.remove('pass');
                            itemInput[targetBox][inputVal].classList.add('failed');
                            def[key].dataInteraction.incorrect += 1;
                          }
                        }else{
                          def[key].dataInteraction.forAnswer += 1;
                          itemInput[targetBox][inputVal].classList.remove('pass');
                          itemInput[targetBox][inputVal].classList.remove('failed');
      
                        }
                                      
                      }
                    } else {
                      const regex = /(\+∞)/g;
                      let ExpresRex = /\)[,y]\(/;
                      let toLower = latexClear(itemInput[targetBox][inputVal])
                        .replace(new RegExp('[\' \']', 'g'), '')
                        .replace(regex, '∞')
                        .toLocaleLowerCase();
                      const separador =
                                       toLower.match(/[∪]/g) !== null &&
                                          toLower.match(/[;y]/g) !== null
                                          ? false
                                          : toLower.match(/[∪]/g) !== null &&
                                             toLower.match(/[;y]/g) !== null
                                             ? '∪'
                                             : ';';
                      let oper = /[y;]|(?<=\)|\]),/g;
                      //validation anterior itemInput[targetBox][inputVal].value.replace(new RegExp("[' ']", "g"), "").replace(regex, "∞").replace(searchNum, "").toLocaleLowerCase())
                      if(toLower !== ''){
                        if (defaultInputValue[inputVal].includes(toLower.split(oper).sort().join(';'),)) {
                          itemInput[targetBox][inputVal].classList.remove('failed');
                          itemInput[targetBox][inputVal].classList.add('pass',);
                          def[key].dataInteraction.correct += 1;
                        } else {
                          itemInput[targetBox][inputVal].classList.remove('pass');
                          itemInput[targetBox][inputVal].classList.add('failed',);
                          def[key].dataInteraction.incorrect += 1;
                        }
                      }else{
                        def[key].dataInteraction.forAnswer += 1;
                        itemInput[targetBox][inputVal].classList.remove('pass');
                        itemInput[targetBox][inputVal].classList.remove('failed');
      
                      }
                                   
                    }
                  }
      
                  if (typeof Android !== 'undefined' && typeof Android.sendData === 'function') {
                    if(def[key].change){
                      Android.sendData(JSON.stringify(cleanDataJ(counterInput)));
                      // La función Android.sendData(json) está disponible
                      gTime(def[key], false);
                      def[key].statusValidate = false;
                      def[key].change = false;
                    }
                    
                  } else {
                    if(def[key].change){
                      console.warn({ messageError: 'Esta funcion no se encuentra definida o no esta en el mismo ambito', });
                      sendData(cleanDataJ(counterInput));
                      gTime(def[key], false);
                      def[key].statusValidate = false;
                      def[key].change = false;
                    }
                  }
                  
                            
                });
              }else{
                btn_check.addEventListener('click', () => {
                  let counterInput = [];
                  let defaultInputValue = def[targetActive].datadefault[0][5].conditions[targetBox];
      
                  def[key].dataInteraction.correct = 0;
                  def[key].dataInteraction.incorrect = 0;
                  def[key].dataInteraction.forAnswer = 0;
      
                  for (let
                      inputVal = 0;
                    inputVal < defaultInputValue.length;
                    inputVal++
                  ) {
                    itemInput[targetBox][inputVal].setAttribute(
                      'id',
                      `input_${inputVal + 1}`,
                    );
                    counterInput.push(itemInput[targetBox][inputVal]);
                    let valNum = itemInput[targetBox][inputVal].value
                      .replace(new RegExp('[\' \']', 'g'), '')
                      .replace(regex, '∞')
                      .toLocaleLowerCase();
                    let searNN = /\[(\d+[,]\d+)\]/gi;
                    let braket = /[\[\]]/gi;
      
                    if (defaultInputValue[inputVal].includes(null)) {
                      if (valNum.match(searNN) !== null && valNum.match(searNN)[0].replace(new RegExp(braket), '').split(',')) {
                        let nnResult = valNum
                          .match(searNN)[0]
                          .replace(new RegExp(braket), '')
                          .split(',');
                        if(valNum !== ''){
                          if (nnResult[0] === nnResult[1]) {
                            itemInput[targetBox][inputVal].classList.remove('failed');
                            itemInput[targetBox][inputVal].classList.add('pass');
                            def[key].dataInteraction.correct += 1;
                          } else {
                            itemInput[targetBox][inputVal].classList.remove('pass');
                            itemInput[targetBox][inputVal].classList.add('failed');
                            def[key].dataInteraction.incorrect += 1;
                          }
                        }else{
                          def[key].dataInteraction.forAnswer += 1;
                          itemInput[targetBox][inputVal].classList.remove('pass');
                          itemInput[targetBox][inputVal].classList.remove('failed');                               
      
                        }
                                      
                      } else {
                        if(valNum !== ''){
                          if (valNum.search(searchNum) !== -1) {
                            itemInput[targetBox][inputVal].classList.remove('failed');
                            itemInput[targetBox][inputVal].classList.add('pass');
                            def[key].dataInteraction.correct += 1;
                          } else {
                            itemInput[targetBox][inputVal].classList.remove('pass');
                            itemInput[targetBox][inputVal].classList.add('failed');
                            def[key].dataInteraction.incorrect += 1;
                          }
                        }else{
                          def[key].dataInteraction.forAnswer += 1;
                          itemInput[targetBox][inputVal].classList.remove('pass');
                          itemInput[targetBox][inputVal].classList.remove('failed');
      
                        }
                                      
                      }
                    } else {
                      const regex = /(\+∞)/g;
                      let ExpresRex = /\)[,y]\(/;
                      let toLower = itemInput[targetBox][inputVal].value
                        .replace(new RegExp('[\' \']', 'g'), '')
                        .replace(regex, '∞')
                        .toLocaleLowerCase();
                      const separador =
                                       toLower.match(/[∪]/g) !== null &&
                                          toLower.match(/[;y]/g) !== null
                                          ? false
                                          : toLower.match(/[∪]/g) !== null &&
                                             toLower.match(/[;y]/g) !== null
                                             ? '∪'
                                             : ';';
                      let oper = /[y;]|(?<=\)|\]),/g;
                      //validation anterior itemInput[targetBox][inputVal].value.replace(new RegExp("[' ']", "g"), "").replace(regex, "∞").replace(searchNum, "").toLocaleLowerCase())
                      if(toLower !== ''){
                        if (defaultInputValue[inputVal].includes(toLower.split(oper).sort().join(';'),)) {
                          itemInput[targetBox][inputVal].classList.remove('failed');
                          itemInput[targetBox][inputVal].classList.add('pass',);
                          def[key].dataInteraction.correct += 1;
                        } else {
                          itemInput[targetBox][inputVal].classList.remove('pass');
                          itemInput[targetBox][inputVal].classList.add('failed',);
                          def[key].dataInteraction.incorrect += 1;
                        }
                      }else{
                        def[key].dataInteraction.forAnswer += 1;
                        itemInput[targetBox][inputVal].classList.remove('pass');
                        itemInput[targetBox][inputVal].classList.remove('failed');
      
                      }
                                   
                    }
                  }
      
                  if (typeof Android !== 'undefined' && typeof Android.sendData === 'function') {
                    if(def[key].change){
                      Android.sendData(JSON.stringify(cleanDataJ(counterInput)));
                      // La función Android.sendData(json) está disponible
                      gTime(def[key], false);
                      def[key].statusValidate = false;
                      def[key].change = false;
                    }
                    
                  } else {
                    if(def[key].change){
                      console.warn({ messageError: 'Esta funcion no se encuentra definida o no esta en el mismo ambito', });
                      sendData(cleanDataJ(counterInput));
                      gTime(def[key], false);
                      def[key].statusValidate = false;
                      def[key].change = false;
                    }
                  }
              
                });
              }
                     

              btn_reset.addEventListener('click', () => {
                itemInput[targetBox].map(el => {
                  el.classList.remove('pass', 'failed', 'borderNone');
                  el.value = '';
                });
              });
            } else {
              console.warn(
                `Se han desabilitado los botones del contenedor ${container}`,
              );
            }
            conteiner.appendChild(box);
          }
        }
      }
      //Genera los 3 ejercicios del principio de pagina mas sus curvas validadas
      if (el[0] == 10) {
        let content = document.createElement('div');
        let contentArtefact = document.createElement('div');
        let arrayDivBoard = [];
        if (el[1].length > 0) {
          for (let i = 0; i < el[1].length; i++) {
            let contentExampleText = document.createElement('div');
            let example = document.createElement('div');

            contentExampleText.appendChild(example);
            contentArtefact.appendChild(contentExampleText);
            example.className = 'defCurveBoard';
            example.setAttribute('data-artifact', el[1][i]);
            arrayDivBoard.push(contentExampleText);
          }
        }
        content.classList.add('contenedorGrid');
        contentArtefact.className =
               'd-flex flex-wrap justify-content-center';
        content.appendChild(contentArtefact);
        conteiner.appendChild(content);
      }
    }
  } else {
    return false;
  }
}

function cleanDataJ(countInput_9) {
  let result = {};
  result.elementArtifact = { inputValue: {} };
  if (def[targetActive].defInput.length == 0) {
    Object.values(countInput_9).map((element, index) => {
      result.elementArtifact.inputValue[element.id] = element.value;
    });
  } else {
    Object.values(def[targetActive].defInput).map((element, index) => {
      element.setAttribute('id', `input_${index + 1}`);
      result.elementArtifact.inputValue[element.id] = element.value;
    });
  }
  result.typeArtifact = 'Standard';
  //result.artifact = Number(targetActive.split("_").at(-1));
  result.artifact = Number(targetActive.split('_')[targetActive.split('_').length - 1]);
  result.results = def[targetActive].dataInteraction;

  return result;
}

function keyboardCustom(def, pointLatex) {
  const cap_0 = {
    MG_KEYBOARD_LAYER: {
      numeros: {
        styles: '.test{background-color: red !important; width: 195px !important; font-size: 64px !important;}',
        rows: [
          [],
          [
            { label: '1', key: '1', },
            { label: '2', key: '2' },
            { label: '3', key: '3' },
            { label: '4', key: '4' },
            { label: '5', key: '5' },
            { label: '-', key: '-' },
            { label: '+', key: '+' },
            { label: '/', key: '/' },
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
            { label: '.', key: '.' },
            { label: ',', key: ',' },
            { label: ';', key: ';' },
            {
              class: 'test',
              label: '&#9141;',
              key: ' '
            },
            {
              class: 'action font-glyph bottom right',
              label: '&#x232b;',
              command: ['performWithFeedback', 'deleteBackward'],
            },
          ],
        ],
      },
      desigualdades: {
        styles: '.test{background-color: white !important; width: 195px !important; font-size: 64px !important;}',

        rows: [

          [],
          [
            { label: '<', key: '<' },
            { label: '>', key: '>' },
            { label: '=', key: '=' },
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
            { label: '≤', key: '≤' },
            { label: '≥', key: '≥' },
            { label: '&#8800;', key: ' &ne;' },
            { class: 'action test', label: '&#9141;', key: ' ' },
            {
              class: 'action font-glyph bottom right',
              label: '&#x232b;',
              command: ['performWithFeedback', 'deleteBackward'],
            },
          ],
        ],
      },
      agrupaciones: {
        styles: '.test{background-color: white !important; width: 195px !important; font-size: 64px !important;}',

        rows: [
          [],

          [
            { label: '(', key: '(' },
            { label: '[', key: '[' },
            { label: '{', key: '{' },
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
            { label: ')', key: ')' },
            { label: ']', key: ']' },
            { label: '}', key: '}' },
            { class: 'action test', label: '&#9141;', key: ' ' },
            {
              class: 'action font-glyph bottom right',
              label: '&#x232b;',
              command: ['performWithFeedback', 'deleteBackward'],
            },
          ],
        ],
      },
      conjuntos: {
        styles: '.test{background-color: white !important; width: 195px !important; font-size: 64px !important;}',

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
            { label: 'c', key: 'c' },
            { label: 'v', key: 'v' },
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
            { label: 'b', key: 'b' },
            { label: 's', key: 's' },
            { label: 'r', key: 'r' },
            { label: '∅', key: '∅' },
            { label: '∪', key: '∪' },
            { label: '∩', key: '∩' },
            { label: 'R', key: 'R' },
            { label: '∞', key: '∞' },
            { class: 'action test', label: '&#9141;', key: ' ' },
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
      desigualdades: {
        label: 'Desigualdades',

        layer: 'desigualdades',
      },
      intervalos: {
        label: 'Agrupaciones',

        layer: 'agrupaciones',
      },
      conjuntos: {
        label: 'Conjuntos',

        layer: 'conjuntos',
      },
    },
    virtualKeyboards: 'numeros desigualdades intervalos conjuntos',
  };
  const cap_1 = {
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
            { label: '-', key: '-' },
            { label: '+', key: '+' },
            { label: '/', key: '/' },
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
            { label: '.', key: '.' },
            { label: ',', key: ',' },
            { label: ';', key: ';' },
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
        ],
      },
      agrupaciones: {
        rows: [
          [],

          [
            { label: '(', key: '(' },
            { label: '[', key: '[' },
            { label: '{', key: '{' },
            { label: '∅', key: '∅' },
            { label: '∪', key: '∪' },
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
            { label: ')', key: ')' },
            { label: ']', key: ']' },
            { label: '}', key: '}' },
            { label: '∩', key: '∩' },
            { label: 'R', key: 'R' },
            { label: '∞', key: '∞' },
                  
            {label: '&#9141;', key: ' ' },
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
    },
    virtualKeyboards: 'numeros agrupaciones',
  };


  pointLatex.addEventListener('input', (e) => {
    def.statusValidate = false;
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
      customVirtualKeyboardLayers: cap_1.MG_KEYBOARD_LAYER,
      customVirtualKeyboards: cap_1.MG_KEYBOARD,
      virtualKeyboards: cap_1.virtualKeyboards,
    });

    if (pointLatex.classList.value !== 'colorInput') {
      e.target.executeCommand(['switch-mode', 'text']);
    }

  });

  return pointLatex;

}


function latexClear(input) {
  const mathDestructuring = {
    'left\\(': '(',
    'right\\)': ')',
    lbrack: '[',
    rbrack: ']',
    lbrace: '{',
    rbrace: '}',
    infty: '∞',
    emptyset:'∅',
    cup:'∪',
    cap:'∩',
    le:'≤',
    ge:'≥',
    '^^^^2260':'≠',
    lparen:'(',
    rparen:')',
    textbraceleft:'{',
    textbraceright:'}'
  };

  if(input.getAttribute('default-mode') !== null){
      
    let inputClean = input.value.replace(/(\\text{|})/gi,'')

    let format = inputClean.replace(
      /(lbrack|lbrace|rbrace|rbrack|right\)|left\(|infty|emptyset|cup|cap|le|ge|\^\^\^\^2260|lparen|rparen|textbraceleft|textbraceright)/g,
      (match) => {
            
        return mathDestructuring[match];
      }
    ).replace(/\\/gi,'');
     
    let cleanInputDef = format.replace(/[\\]|[\$]/g, '');
    
   
    const output = cleanInputDef
      .replace(/\(([-\d.]+)\)/g, '$1')
      .replace(new RegExp('[\' \']', 'g'), '')
      .replace(/\"/g, '').replace(/({{{|{{)/g, '').replace(/{\(/g, '(').replace(/{\∅/g, '∅').replace(/{\[/g, '[').toLocaleLowerCase();
         
    
    return output;
  }else{
    let inputClean = input.getValue('ascii-math');

    let format = inputClean.replace(
      /(lbrack|lbrace|rbrace|rbrack|right\)|left\()/gi,
      (match) => {
   
        return mathDestructuring[match];
      }
    );
    let cleanInputDef = format.replace(/[\\]|[\$]/g, '');
    
   
    const output = cleanInputDef
      .replace(/\(([-\d.]+)\)/g, '$1')
      .replace(new RegExp('[\' \']', 'g'), '')
      .replace(/\"/g, '').replace(/-/g, '−').toLocaleLowerCase();
    
    return output;
  }
  
}
function styleMath(){
  let inputAll = document.querySelectorAll('math-field:not([disabled])')
  Array.from(inputAll).map(input =>{
    input._mathfield.element.style.width = '100%';
    input._mathfield.element.style.height = '100%';
    input._mathfield.element.childNodes[1].style.cssText =
         'justify-content: center;';
  })
   
}