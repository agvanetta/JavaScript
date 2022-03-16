let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];

// function peliculasMayusculas ( array ) {
//     for (let i = 0; i < array.length ; i++) {
//         const element = array[i].toUpperCase();
//         console.log(element);
//     }
// }
// peliculasMayusculas(peliculas);

/////////////////punto 2 ///////////////7

let peliculas2 = ['toy story', 'finding Nemo', 'kung-fu panda', 'wally', 'fortnite']

function pasajeDeElementos(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        const element = array1 [i].toUpperCase();
        const element2 = array2 [i].toUpperCase();
        let prueba = element.(element2);
        console.log(prueba);
    }

  }

  pasajeDeElementos(peliculas , peliculas2);


//   function peliJuntas (array1, array2) {
//     unir = array1.concat(array2);
//     return unir;
// }
