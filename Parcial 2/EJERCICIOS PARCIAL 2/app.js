const archivos = require(__dirname + "/lecturaEscritura");
let JsonProfesionales = archivos.leerJson("profesionales");

//objeto literal con props y métodos
const cartillaProfs = {
  profesionales: JsonProfesionales,
  //NO modificar esto
  mostrarUnProfesional: function (profesional) {
    console.table({
      [profesional.identificador]: {
        nombre: profesional.nombre,
        especialidad: profesional.especialidad,
        honorarios: profesional.honorarioConsulta,
        consultas: profesional.cantidadConsultas,
        habilitado: profesional.estaHabilitado,
      },
    });
  },
  listarTodos: function (profesionalesAMostrar) {
    let vista = [];
    for (let i = 0; i < profesionalesAMostrar.length; i++) {
      vista.push(this.traerUnProfesional(profesionalesAMostrar[i]));
    }
    console.table(vista);
  },
  traerUnProfesional: function (profesional) {
    return {
      nombre: profesional.nombre,
      honorarios: "$" + profesional.honorarioConsulta,
      especialidad: profesional.especialidad,
      habilitado: profesional.estaHabilitado,
    };
  },
  //fin de NO modificar

  //tu código a partir de aquí...
  //...
  filtrarHabilitados: function (habilitado) {
    let listado = [];
    for (let i = 0; i < this.profesionales.length; i++) {
      if (this.profesionales[i].estaHabilitado === habilitado) {
        listado.push(this.profesionales[i]);
      }
    }
    return listado;
  },
  buscarPorNombre : function(nombreDeProfesional) {
    
    for (let i = 0; i < this.profesionales.length; i++) {
      if (this.profesionales[i].nombre === nombreDeProfesional){
        console.log (this.profesionales[i])
      }
    }
  }
};
console.log("\n****** mostrar todos los profesionales *****");
cartillaProfs.listarTodos(JsonProfesionales);

console.log(
  "\n****** punto 1 ¿cuál es la única propiedad del objeto literal? *****"
);
// responda aquí:  la unica propiedad es : profesionales , ya que las demas son metodos.

console.log(
  "\n****** punto 2 ¿cómo se denomina a las funciones dentro de un obj literal? *****"
);
// responda aquí:  Las funciones que se encuentran dentro de un objeto literal reciben el nombre de metodos

console.log("\n****** punto 3 mostrar un profesional *****");
const profesional = cartillaProfs.profesionales[10]; // un profesional del array a partir de un índice cualquiera
cartillaProfs.mostrarUnProfesional(profesional);

console.log("\n****** punto 4 Listar habilitados ******");

const habilitados = cartillaProfs.filtrarHabilitados(true);
cartillaProfs.listarTodos(habilitados);


cartillaProfs.buscarPorNombre("Huber Wilkins");


// https://docs.google.com/document/d/1oIKTob31te7a_oaVKBYI2zbH5QirT0pFbzJhmYRqGNY/edit#

