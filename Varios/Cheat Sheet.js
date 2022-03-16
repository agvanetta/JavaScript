/* ==========================
DE ASIGNACIÓN
========================== */

// El operador "=" sirve para asignar el valor 40 a una variable llamada "edad"

let edad = 40

/* ==========================
ARITMÉTICOS
========================== */

// Nos permiten hacer operaciones matemáticas

10 + 15 //---> Suma
10 - 15 //---> Resta
10 * 15 //---> Multiplicación
10 / 15 //---> División
15++    //---> Incremento de uno en uno: 15 + 1
15--    //---> Decremento de uno en uno: 15 - 1
15 % 5  //---> Módulo. El resto obtenido de dividir 15 entre 5: 0
15 % 2  //---> Módulo. El resto obtenido de dividir 15 entre 2: 1

/* ==========================
DE COMPARACIÓN SIMPLE
========================== */

// Comparan dos valores, devuelven verdadero o falso.

10 == 15 // -> Comparacion de igualdad simple
10 !== 15 // -> Comparacion de desigualdada simple 

/* ==========================
DE COMPARACIÓN ESTRICTA
========================== */

//Comparan el valor y el tipo de dato tambien

10 === '10' // -> Comparacion de igualdad estricta : false porque si bien es un 10, el tipo de dato es String
10 !== 15 // -> Comparacion de desigualdad estricta : true con que uno sea IGUAL altera el dato. La pregunta es si SON DESIGUALES "PREGUNTA : X ES DESIGUAL A X2 EN VALOR Y EN DATO"

/* ==========================
OPERADORES RELACIONALES
========================== */

15>15
15<15
15>=15
15<=15

/* ==========================
LÓGICOS
========================== */

// Permiten combinar valores booleanos y su resultado a la vez también es un booleano

(10==10) && (10!=11) // Arroja true porque 10 es igual a 10 ; y 10 es distingo a 11 ambas condiciones se cumplen Y! AM PER SAND que viene de and per se and
10==9  || 10!=9 // pregunta : 10 es igual a 9 O 10 es distinto a 9 una de las condiciones se cumple arroja TRUE
       // El Not niega la condicion .... te miente da el contrario a lo que preguntas se lo llama con el signo de excalamacion !


// Otras comparaciones :

0 == ""; // true
"" == false; // true
null == undefined; // true
17 == "17"; // true
"" == true; // false
null == false; // false
0 == null; // false
NaN == NaN; // false

// Las comparaciones se vuelven más claras cuando se usa una comparación estricta (===) porque los tipos de valores deben coincidir:

0 === ""; // false
"" === false; // false
null === undefined; // false
17 === "17"; // false
"" === true; // false
null === false; // false
0 === null; // false
NaN === NaN; // false


console.log (2/a)