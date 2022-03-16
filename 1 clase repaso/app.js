const traerElJsonHelper = require(__dirname + "/JsonHelper");
const caracteristicasDeAutos = traerElJsonHelper.leerJson("autos");

// console.log(caracteristicasDeAutos);

const carrera = {
  autos: caracteristicasDeAutos,
  autosPorTanda: 6,
  autosHabilitados: function () {
    const autosPropiedades = this.autos;
    return autosPropiedades.filter(
      (autosPropiedades) => autosPropiedades.sancionado == false
    );
  },
  objetoConMenosPropiedades: function (objetoCompleto) {
    return {
      piloto: objetoCompleto.piloto,
      patente: objetoCompleto.patente,
      pesoEnKg: objetoCompleto.peso,
      estado: objetoCompleto.sancionado ? "sancionado" : "habilitado",
    };
  },
  listarAutos: function (arrayDeAutos) {
    return arrayDeAutos.map((arrayDeAutos) =>
      this.objetoConMenosPropiedades(arrayDeAutos)
    );
  },
  listarAutos2: function (arrayAutos) {
    return arrayAutos.forEach(function (arrayAutos) {
      console.log(
        "Piloto: " +
          arrayAutos.piloto +
          ", patente: " +
          arrayAutos.patente +
          " peso en kg: " +
          arrayAutos.peso +
          " estado: " +
          (arrayAutos.sancionado ? "sancionado" : "habilitado")
      );
    });
  },
  buscarPorPatente: function (patenteABuscar) {
    let autos = this.autos;
    return autos.find((autos) => autos.patente == patenteABuscar);
  },
  buscarPorCilindrada: function (numeroDeCilindrada) {
    const autosHab = this.autosHabilitados();
    return autosHab.filter(
      (autosHab) => autosHab.cilindrada <= numeroDeCilindrada
    );
  },
  ordenarPorVelocidad : function () {
     return this.autos.sort((a, b) => a.velocidad - b.velocidad)  // practicar / buscar funcionamiento de sort.
  },
  generarTanda  : function (cilindrada, pesoAuto) {
    let filtro1 = this.buscarPorCilindrada(cilindrada)
    let filtro2 = filtro1.filter( autos => autos.peso <= pesoAuto)
    let filtro3 = filtro2.slice(0, this.autosPorTanda) // practircar SLICE ! .
    return filtro3;
    //return this.buscarPorCilindrada(cilindrada).filter(auto => auto.peso <= peso).slice(0, this.autosPorTanda)
  },
  listarPodio : function (arrayDeAutos) {
    let ordenadosPorPuntaje = arrayDeAutos.sort((a, b) => b.puntaje - a.puntaje);
    let losPrimerosTres = ordenadosPorPuntaje.slice (0,3);
    let puestos = ['El ganador es : ', 'El segundo puesto es para : ', 'El tercer puesto es para : ']
    for (let i = 0; i < losPrimerosTres.length; i++) {
      console.log( puestos[i] + losPrimerosTres[i].piloto + 'con un puntaje de ' + losPrimerosTres[i].puntaje);
    }
  }
};

// console.table(carrera.autosHabilitados()); //recordar ejecutar el metodo en este caso
// const autosHabilitados = carrera.autosHabilitados(); //recordar ejecutar el metodo en este caso, si no no arroja el resultado. solo "autosHabilitados"
// console.table (autosHabilitados);

// console.log(carrera.objetoConMenosPropiedades(carrera.autos[3]));
// console.table(carrera.listarAutos(carrera.autos));
// carrera.listarAutos2(carrera.autos);
// console.log(carrera.buscarPorPatente("ZKL654")); con filter, al no encontrar arroja un array vacio, con find arroja undefined.
// console.table(carrera.buscarPorCilindrada(1500));
// console.table ( carrera.ordenarPorVelocidad());
// console.log(carrera.generarTanda())
// console.table(carrera.generarTanda(3000, 3000));
carrera.listarPodio(carrera.generarTanda(3000,3000));