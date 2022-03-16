

// Show me the code
// Desarrollar una función llamada dividir, que reciba dos parámetros y realice la división del primero con el segundo. V
//erificando que ambos sean tipo dato number y el segundo parámetro distinto de cero ,así ev// 
//itar el infinity, retornar el valor de la división en caso de que se cumplan las condic //
// iones, caso contrario retornar un mensaje "No es posible realizar la división". Deberá tener la invocación de dicha función ///

//typeof n1 !== "number"//

let num1= 10
let num2= 5

function dividir (num1 , num2) {
    if ( typeof num1 == 'number' && typeof num2 == 'number' && num2 != 0) {
    num1 / num2;
    } else {
    return 'No es posible realizar la división';
    }
}

console.log(dividir(num1,num2));

let edad = 19;
let acceso = programa

function programa (edad) {
    if ( edad < 16 ) {
    acceso = 'prohibido';
} else { 
    acceso = 'permitido';
}
}

console.log(acceso());
