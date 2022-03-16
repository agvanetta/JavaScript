
const jsonHelper = require('./JsonHelper'); // traeme de esta carpeta + el archivo con este nombre

const jsonAutomoviles = jsonHelper.leerJson('autos') // usas jsonHelper y lo guardas en una variable . Controlar con el otro archivo para saber el parametro
console.log(jsonAutomoviles)

// paso 1 modulo
// const fs = require("fs");
// paso 2 usamos el modulo FS
//const datos = fs.readFileSync("./autos.json" , "utf-8")
//console.log(datos)
// paso 3 pasamos el dato de String a Array con objeto
// const arrayDeAutos = JSON.parse(datos)
// console.log (arrayDeAutos);
// paso 4 ingresar el dato en una funcion

// function leerArchivo(ruta) {
//   const datos = fs.readFileSync(ruta, "utf-8");
//   const arrayNuevo = JSON.parse(datos);
//   return arrayNuevo;
// }
// const arrayDeAutos = leerArchivo("./autos.json");
//console.log(arrayDeAutos);

// const concesionaria = {
//   autos: leerArchivo("./autos.json"),
//   filtrarVendidos: function () {
//     const autosVendidos = [];
//     for (let i = 0; i < this.autos.length; i++) {
//       const auto = this.autos[i];
//       if (auto.vendido) {
//         autosVendidos.push(auto);
//       }
//     }
//     return autosVendidos;
//   },
// };
// vendidos = concesionaria.filtrarVendidos();
// console.table(vendidos);
