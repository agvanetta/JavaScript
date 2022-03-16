const archivos = require(__dirname + "/lecturaEscritura");

//objeto literal con props y métodos
const cartillaProfs = {
  profesionales: archivos.leerJson("profesionales"),
  //tu código a partir de aquí...
  //...
  objMenosProps: function (objPuro) {
    return {
      nombre: objPuro.nombre,
      honorarios: "$" + objPuro.honorarioConsulta,
      especialidad: objPuro.especialidad,
      habilitado: objPuro.estaHabilitado ? "habilitado" : "inhabilitado",
    };
  },


  traerTodoConMenosProps: function (array) {
    const nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
      const objPuro = array[i];
      const objNuevo = this.objMenosProps(objPuro);
      nuevoArray.push(objNuevo)
    }
    return nuevoArray
  },

  traerTodoConMenosProps2: function (array) {
    return array.map(objPuro => this.objMenosProps(objPuro))
  },

  buscarPorNombre: function (nombre) {
    return this.profesionales.find(profesional => profesional.nombre === nombre)
  },
  filtrarHabilitados: function () {
    return this.profesionales.filter(prof => prof.estaHabilitado);
  }
};

console.log("\n****** mostrar un profesional *****");
let profesional = cartillaProfs.profesionales[1];
let objNuevo = cartillaProfs.objMenosProps(profesional)
console.table(objNuevo);

console.log("\n****** mostrar OTRO profesional *****");
profesional = cartillaProfs.buscarPorNombre("Huber Wilkins");
objNuevo = cartillaProfs.objMenosProps(profesional)
console.table([objNuevo]);

const habilitados = cartillaProfs.filtrarHabilitados();
const habilitadosMenosProps = cartillaProfs.traerTodoConMenosProps2(habilitados)
console.table(habilitadosMenosProps)