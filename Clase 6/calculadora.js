
/// SUMAR///
function sumar (num1,num2) {
    return num1 + num2;
}

//RESTAR///
function restar (num1 , num2) {
    return num1 - num2;
}

///MULTIPLICAR///
function multiplicar (num1 , num2) {
    return num1 * num2;
}

//DIVIDIR//
function dividir (num1 , num2) {
    return num1 / num2;
}

console.log (' Se pone en funcionamiento la calculadora');

let num1= 10
let num2= 20

console.log (' Punto 2');
console.log (sumar(num1,num2));
console.log (restar(num1,num2));

console.log (' Punto 3');

console.log (multiplicar(num1,num2));

console.log ( ' Punto 4 ');

console.log (dividir(num1,num2));

console.log ( ' Punto 5 ');

let num3= 0
console.log (dividir(num1,num3));

console.log (' Calculadora NIVEL III');

function cuadradoDeUnNumero (numero) {
    return multiplicar(numero,numero);
}

console.log (cuadradoDeUnNumero(8));

function promedioDeTresNumeros (num1,num2,num3) {
    return (sumar(num1,num2)+num3)/3;
}

console.log (promedioDeTresNumeros(num1,num2,num3));

let total= 100;
let porcentaje = 15;
function calculaPorcentaje (total,porcentaje) {
    return multiplicar(total,porcentaje) / 100;
}

console.log (calculaPorcentaje(total,porcentaje));