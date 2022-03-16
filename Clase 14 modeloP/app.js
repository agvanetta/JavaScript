const jsonHelper = require("./jsonHelper");

//funcion para leer el archivo json de los departamentos, podes comentarla una vez visto para no generar contenido extra no deseado en la consola.
const deptosJson = jsonHelper.leerJson("departamentos");

// Escribí tu codigo a partir de acá.

const inmobiliaria = {
  deptos: deptosJson,
  listarDepartamentos: function (arrayDeptos) {
    for (let i = 0; i < arrayDeptos.length; i++) {
      const habilitado = arrayDeptos[i].disponible ? "Disponible" : "Alquilado";
      console.log(
        "id:" +
          arrayDeptos[0].id +
          ", precio $" +
          arrayDeptos[0].precioAlquiler +
          ",disponibilidad:" +
          habilitado
      );
    }
    // PUNTONUMERO2//
  },
  departamentosDisponibles: function (array) {
    let disponibles = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].disponible === true) {
        disponibles.push(array[i]);
      }
    }
    return disponibles;
  },

  /// punto numero 3 //
  buscarPorId: function (id) {
    for (let i = 0; i < this.deptos.length; i++) {
      deptosJson[i].id === id
        ? console.log(this.deptos[i])
        : console.log("aca no ta");
    }
  },

  //punto 4 // 

  buscarPorPrecio : function (precio) {

    let cumpleCondicion = [];
    let disponibles = this.departamentosDisponibles(deptosJson)
    for (let i = 0; i < disponibles.length; i++) {
      disponibles[i].precioAlquiler <= precio ? cumpleCondicion.push(disponibles[i]) : '';
    } return cumpleCondicion;
  },

  //punto 5//
  precioConImpuesto : function (porcentaje) {
    precioFinal = []
    PrecioSinImp = this.deptos.precioAlquiler
    sumaImpuesto = (porcentaje/100+1)
    for (let i = 0; i < this.deptos.length; i++) {
    precioFinal.push ('El departamento con id ' + this.deptos[i].id + ' tiene un precio con Impuesto de = ' + this.deptos[i].precioAlquiler * sumaImpuesto);
    } return precioFinal
  }
};

console.log(inmobiliaria.precioConImpuesto(10));