const def = {
  pag_1: [
    [1,`Los intervalos son fundamentales como lenguaje para hablar de zonas donde las curvas (que comienzan a
            ser estudiadas en el próximo Capítulo) cumplen ciertas propiedades. Es conveniente que tenga presente que
            los intervalos son subconjuntos de números reales, aunque muy particulares (si dos números pertenecen al
            intervalo, todos los que "están entre ellos” tambien pertenecen al intervalo). A continuación se dan algunos
            elementos sobre la notación conjuntista, frecuentemente utilizada.`],
    [2,'Como se escribe la definicion de un conjunto.',`Lo que se va a definir se escribe, seguido de un signo igual. Por ejemplo si se quiere definir el intervalo
        cerrado de extremos a y b, se escribe: [a,b] =`,'A la derecha suelen ir dos llaves','[a,b] = {     }'],

        
    /* [1,`Los intervalos son fundamentales como lenguaje para hablar de zonas donde las curvas (que comienzan a
                ser estudiadas en el próximo Capítulo) cumplen ciertas propiedades. Es conveniente que tenga presente que
                los intervalos son subconjuntos de números reales, aunque muy particulares (si dos números pertenecen al
                intervalo, todos los que "están entre ellos” tambien pertenecen al intervalo). A continuación se dan algunos
                elementos sobre la notación conjuntista, frecuentemente utilizada.`],
            [2,"Como se escribe la definicion de un conjunto"],
            [1,`Lo que se va a definir se escribe, seguido de un signo igual. Por ejemplo si se quiere definir el intervalo
            cerrado de extremos a y b,seescribe:  [a,b] =`],
            [1,`A la derecha suelen ir dos llaves [a,b] = {     }`],
            [1,` y entre esas llaves una barra vertical  [a,b] = {  |   }`],
            [1,` Antes de la barra se suele poner una letra que sirve para referirnos a los elementos`],
            [1, '[a,b] = {  x |   } o [a,b] = {  x ∈ R }'],
            [1,`El símbolo ∈ se lee “pertenece a”. Así x ∈ R quiere decir que el objeto o elemento representado por x
            pertenece a R. Para escribir “no pertenece”, se utiliza ∉.`],
            [1,`Despues de la barra se ponen las propiedades que cumplen los elementos del conjunto que se está definiendo`],
            [1,`[a,b] = { x ∈ R | a ≤ x ≤ b}`],            
            [3, 'Intervalo cerrado', '[a,b] = { x ∈ R | a ≤ x ≤ b}'],
            [3, 'Intervalo abierto', '(a,b) = { x ∈ R | a < x < b}'],
            [3,`Conjunto formado por a y b`,`{ a , b }`],
            [1,`Sera A y B dos conjuntos, entonces:`],
            [3,`Union de Conjuntos:`,`A ∪ B = { x| x∈A o x∈B }`],
            [3,`Interseccion de conjuntos:`,`A ∩ B = { x| x∈A y x∈B }`],
            [3,`Defirencia de conjutnos:`,`A - B = { x| x∈A y x∉B }`],
            [2,`Como se escribe la definicion de una propiedad de conjuntos`],
            [1,`mente se escribe la propiedad (de los conjuntos) que se va a definir,
            seguida de un signo de equivalencia ⇔. Por ejemplo, si se quiere definir la contentacion de un conjunto en otro:`],
            [1,`A ⊂ B ⇔ `],
            [1,`A la derecha de ⇔, se escribe la propiedad que deben cumplir los elementos, de los conjuntos, para que la propiedad,
            de los conjuntos, se cumpla:`],
            [1,`A ⊂ B ⇔ ∀ x[ x∈A → x∈B] `],
            [1,`El simbolo ∀x[    ] se lee "Para todo x se cumple"`],
            [1,`El simbolo ∃ se lee "Existe por olo menos un"`],
            [2,`Propiedades`],
            [3,`"A esta contenido en B".`,`A ⊂ B ⇔ ∀ x[ x∈A → x∈B]`],
            [3,`"A no esta contenido en B".`,`A ⊂ B ⇔ ∃ x[ x∈A → x∈B]`], */
  ]
}
//Funcion que inicializa los elementos del DOM con el template y el Fragmento
function initMain() {
  generator();

};

//Funcion para iniciarlo cuando se cargue la pagina
window.onload = initMain();
