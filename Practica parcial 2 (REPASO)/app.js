const jsonHelper = require(__dirname + "/jsonHelper");
let JsonTrabajadores = jsonHelper.leerJson("trabajadores");

//objeto literal con props y métodos
const catalogTrabajadores = {
  trabajadores: JsonTrabajadores,
  //NO modificar esto
  mostrarUnTrabajador: function (trabajador) {
    console.table({
      [trabajador.id]: {
        nombre: trabajador.nombre,
        oficio: trabajador.oficio,
        honorarios: trabajador.precioConsulta,
        consultas: trabajador.consultasRealizadas,
        matriculado: trabajador.matriculado,
      },
    });
  },
  listarTodos: function (trabajadoresAMostrar) {
    let datos = [];
    for (let i = 0; i < trabajadoresAMostrar.length; i++) {
      datos.push(this.traerUnTrabajador(trabajadoresAMostrar[i]));
    }
    console.table(datos);
  },
  traerUnTrabajador: function (trabajador) {
    return {
      nombre: trabajador.nombre,
      honorarios: "$" + trabajador.honorarioConsulta,
      oficio: trabajador.oficio,
      matriculado: trabajador.matriculado,
    };
  },
  //fin de NO modificar

  //tu código a partir de aquí...
  //...
};

console.log("\n****** mostrar todos los trabajadores *****");
catalogTrabajadores.listarTodos(JsonTrabajadores);

console.log(
  "\n****** punto 1 ¿cuál es la única propiedad del objeto literal? *****"
);
// responda aquí:

console.log(
  "\n****** punto 2 ¿cómo se denomina a las funciones dentro de un obj literal? *****"
);
// responda aquí:

console.log("\n****** punto 3 mostrar un trabajador *****");
// const trabajador = // un trabajador del array a partir de un índice cualquiera (a modo de ejemplo para probar el metodo)
// catalogTrabajadores.mostrarUnTrabajador(trabajador);

// console.log("\n****** punto 4  ******");

// console.log("\n****** punto 5 ******");

// console.log("\n****** punto 6 ******");
