// 1-Acceder a elementos específicos de un array.
// let miPrimerArray = [ 'pupino','pocoyo','ely','pato'];
// console.log (miPrimerArray[0]);
// 2- Modificar cada uno de sus elementos e imprimirlos./ Control K + intruccion a VS CODE : Ctrl C y Ctrl U 

// miPrimerArray[0] = 'PUPINO';
// miPrimerArray[1] = 'POCOYO';
// miPrimerArray[2] = 'ELY';           
// miPrimerArray[3] = 'PATO';

// console.log (miPrimerArray);

// 3 - Agregar elementos a un array.//

// miPrimerArray.push('elBamus','pajaroto');
// console.log (miPrimerArray);

// 4- Extraer elementos de un array.

// miPrimerArray.pop();
// miPrimerArray.pop();

// console.log(miPrimerArray);

// -. Comparar elementos de un array con los elementos de otro.//

// let primero = ['uno', 'dos', 'tres'];
// let segundo = ['uno', 'dos', 'tres'];

// console.log (primero [1] == segundo [1]);
// console.log (primero == segundo);

// PELICULAS.//
//1
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
//2

function peliculasEnMayusculas (peliculas) {
    x1 = peliculas[0].toUpperCase();
    x2 = peliculas[1].toUpperCase();
    x3 = peliculas[2].toUpperCase();
    x4 = peliculas[3].toUpperCase();
    x5 = peliculas[4].toUpperCase();
    pasarAMayusculas = [x1,x2,x3,x4,x5];
    return pasarAMayusculas;
};

//console.log(peliculasEnMayusculas(peliculas));


let peliculasMin = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

let peliculas1= peliculasEnMayusculas(peliculas);
let peliculas2= peliculasEnMayusculas(peliculasMin);

function peliJuntas (array1, array2) {
    unir = array1.concat(array2);
    return unir;
}

let uniendoPeliculas = peliJuntas(peliculas1,peliculas2);
let quitarVideoJuego = uniendoPeliculas.pop();

// console.log(uniendoPeliculas)
// console.log(quitarVideoJuego)

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];


function comparandoCalificacion (calAsia , calEuro) {
    calAsiaString = calAsia.join();
    calEuroString = calEuro.join();
    if ( calAsiaString === calEuroString ) {
        return 'Son iguales'
    } else {
        return 'Son diferentes'
    }
};

console.log (comparandoCalificacion(asiaScores,euroScores));
