// const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
// let resultados = []


// function mostrarArrays (a,b) {
//     for (let i = 0; i < a.length; i++) {
//         const score = a[i];
//         const score2 = b[i];
//         console.log( 'asiaScores '+ score + ' euroScores ' + score2);
        

//     }
// }

// mostrarArrays(asiaScores , euroScores);

// function noParesDeContarImparesHasta(4){
//    for ( numero = 0 ; numero <= 10 ; numero ++) {
//        if (numero %2 != 0) {
//            console.log (numero)
//        }
//    }
// };


// noParesDeContarImparesHasta(4);

function noParesDeContarImparesHasta(numero) {
    let numImpar= 0
    if (numero > 0 ) {
        for ( numero ; numero > 0 ; numero--) {
            numero % 2 !==0 ? numImpar++:'';
        }
        return numImpar
    }
    return 'numero menor que 0'
}
;
console.log(noParesDeContarImparesHasta(10));

if else 