// ------------------------------------------------------------ map ----------------//
const numeros = [2, 4, 6];

const dobleDeLosNumeros = numeros.map(function (unNumero) {
  return unNumero * 2;
});

// console.log(dobleDeLosNumeros); // [ 4, 8, 12 ]

const nombres = ["pupino", "pocoyo", "pato"];

const pasarAMayusculas = nombres.map(function (nombreEnMin) {
  return nombreEnMin.toUpperCase();
});

// console.log(pasarAMayusculas); // mayuscula
// ------------------------------------------------------------ filter ----------------//
const edades = [10, 15, 18, 20, 25, 30];

const mayores = edades.filter(function (unaEdad) {
  return unaEdad >= 18;
});

// console.log(mayores);

// ------------------------------------------------------------ reduce ----------------//
const numerillos = [10, 20, 30 , 40 , 50];

// const resultado = numerillos.reduce ( function (acumulador, num) {
//     return acumulador + num
// });

const resultado = numerillos.reduce ( (acumulador, num) => acumulador+num);

console.log(resultado);

// ------------------------------------------------------------ forEach ----------------//

const paises = ['Argentina' , 'Brasil' , 'Chile', 'Colombia'];

const decirPaises = paises.forEach ( function (unPais) {
    // console.log(unPais);
})
