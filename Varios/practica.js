// Show me the code
// Desarrollar una función llamada dividir, que reciba dos parámetros y realice la división del primero con el segundo. V
//erificando que ambos sean tipo dato number y el segundo parámetro distinto de cero ,así ev// 
//itar el infinity, retornar el valor de la división en caso de que se cumplan las condic //
// iones, caso contrario retornar un mensaje "No es posible realizar la división". Deberá tener la invocación de dicha función ///

// Local de sanguche

let participanteA = [5, 8, 4, 9, 5];
let participanteB = [8, 7, 8, 6, 8];
let participanteC = [7, 5, 10, 8, 3];
  
function puntajePromedio(array) {
    let contador = 0;
    let promedio;
    let aux = array.length;
 
    for (let i = 0; i < aux; i++) {
        contador += array[i]; // es igual a decir : contador = contador + array[i]
    }
 
    promedio = contador/(aux);
    return promedio;
}
 
console.log(puntajePromedio(participanteA));