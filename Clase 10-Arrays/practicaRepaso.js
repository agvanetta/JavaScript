let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
let peliculas2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

function mayusculador (array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();
    }
    return array
}

console.log (mayusculador(peliculas));

function peliculasAMayus (array1 , array2) {
    for (let i = 0; array2.length != 0 ; i++) {
        array1.push(array2.pop());
    }
    return array1
}

// console.log (pasajeDeElementos(peliculas,peliculas2));

// const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

// function comparador (asia, euro){
//     let sonIguales = [];
//     for (let i = 0; i < asia.length; i++) {
//         sonIguales[i] = asia[i] === euro [i];
        
//     }
//     return sonIguales
// }
// console.log(comparador(asiaScores,euroScores));

