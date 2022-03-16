// //ejercicio2//
// let numero = 2;

// function tablaDeMultiplicar (numero){
//     let i = 1
//     do {
//     console.log(numero+' '+'*'+' '+i+' '+'='+' '+numero*i)
//     i++
//     } while (i < 11);
// }
// tablaDeMultiplicar(numero);

// //ejercicio 1//

// let numeros = [1, 2, 3, 5, 6, 7, 8];

// function encontreUn5(numeros) {
//     let i = 0
//     do {
//         console.log(numeros[i])
//         i++
//     } while (numeros[i] != 5);
//     console.log("Se encontró un 5!")
// }

// encontreUn5(numeros);

let numeroX = 11;

function noParesDeContarImparesHasta (numeroX) {
    const impares = 0
    for (let i = 0; i <= numeroX ; i++) {
        if (i%2 != 0) {
            impares++         
        }
        return impares
    }
}

console.log (noParesDeContarImparesHasta(numeroX));
