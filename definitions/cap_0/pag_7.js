const def = {

  pag_2: [
    [2,'COMENTARIOS'],
    [2,'Contenido del capítulo.'],
    [1,'Intervalos. Plano Cartesiano'],
    [2,'Conexiones e importancia del capítulo.'],
    [2,'Con el libro.'],
    [1,`Tanto el plano cartesiano como los intervalos son parte del lenguaje 
            indispensable para poder trabajar con el libro.`],
    [2,'Con otros semestres de matemáticas'],
    [1,'Se utiliza en todos los cursos relacionados con el calculo'],
    [2,'Con otras carreras.'],
    [1,'El plano cartesiano es una noción que rebasa ampliamente el ámbito matemático'],
    [2,'Funcionamiento didácico.'],
    [1,`Tanto el plano cartesioano como los intervalos son parte del lenguaje 
            indispensable para poder trabajar con el libro.`],
    [1,`Existen tres representaciones útiles, aunque no totalmente equivalentes, de los intervalos. Estas son
            las que se trabajan en el primer conjunto de ejercicios. En algunos casos, la representación en la
            recta es imposible (por ejemplo en la intersección de conjuntos disjuntos). En otros, existen varias
            representaciones conjuntistas, o de intervalos, posibles para una sola representación sobre la recta.`],
    [1,`La noción de intervalo es utilizada para introducir, de manera somera y referidas a ellos, algunas
            operaciones y propiedades de conjuntos. Algunos de los ejercicios tienen por objeto hacer ver
            algunas propiedades.`],
    [2,'Por ejemplo que A ⊂ B → A ∪ B = B y A ∩ B = A.'],
    [1,`No se dan explícitamente
            todas las definiciones, ni todas las convenciones. El profesor las puede dar, en la medida en que los
            alumnos las soliciten o requieran y que a él le parezca necesario. Se recomienda no insistir
            innecesariamente en el formalismo de la teoría de conjuntos.`],
    [1,`Los ejercicios del plano cartesiano son utilizados no sólo para introducir la noción de punto del
            plano, sino tambien para enfrentar al alumno con ciertas preconcepciones erradas de la notación
            algebraica. Por ejemplo, la creencia muy generalizada de que una expresión tiene un valor negativo
            si el signo - aparece al comienzo de ella.`],
    [2,'Puntos delicados.'],
    [1,`El trabajo que se hace en el capítulo sobre la preconcepción que hace pensar que -a tiene un valor
            negativo porque hay un signo menos al comiezo de la expresión, es insuficiente. A todo lo largo del libro,
            a través de diversas situaciones y ejercicios, se trata de superarla.`],
    [2,'Objetivos actitudinales.'],
    [1,`Todos los ejercicios del capítulo deben ser hechos. Esto es un actitud que debe ser fortificada 
            a lo largo de todo el libro.`],
    [2,'Contrato didáctico'],
    [1,'Debe haber una insistencia en respetar la escala en los ejercicios del plano cartesiano.'],
            
  ]
       
}
//Funcion que inicializa los elementos del DOM con el template y el Fragmento
function initMain() {
  generator();

};

//Funcion para iniciarlo cuando se cargue la pagina
window.onload = initMain();