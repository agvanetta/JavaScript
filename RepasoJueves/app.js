const traerJsonHelper = require(__dirname + "/JsonHelper");
const arrayDeAutos = traerJsonHelper.leerJson("autos");

//console.table(arrayDeAutos);

const carrera = {
  autos: arrayDeAutos,
  autosPorTanda: 6,
  autosHabilitados: function () {
    return this.autos.filter((autos) => autos.sancionado == false);
  },
  listarAutos: function (arrayDeAutos) {
    return arrayDeAutos.forEach((autos) =>
      console.log(
        "Piloto: " +
          autos.piloto +
          ", patente: " +
          autos.patente +
          ", penso en kg: " +
          autos.peso +
          ", estado: " +
          (autos.sancionado ? "Sancionado" : "Habilitado")
      )
    );
  },
  buscarPorPatente: function (patenteEnString) {
    return this.autos.find((autos) => autos.patente == patenteEnString);
  },
  buscarPorCilindrada: function (cilindradaMaxABuscar) {
    return this.autosHabilitados().filter(
      (autos) => autos.cilindrada <= cilindradaMaxABuscar
    );
  },
  ordenarPorVelocidad: function () {
    return this.autos.sort((a, b) => a.velocidad - b.velocidad);
  },
  generarTanda: function (cilindradaMaxABuscar, pesoAuto) {
    const filtroPorCilindrada = this.buscarPorCilindrada(cilindradaMaxABuscar);
    const filtroPorPeso = filtroPorCilindrada.filter(
      (autos) => autos.peso <= pesoAuto
    );
    return filtroPorPeso.slice(0, this.autosPorTanda);
  },
  listarPodio : function (arrayDeAutos) {
    const ordenadosPorPuntaje = arrayDeAutos.sort((a, b) => b.puntaje - a.puntaje);
    const losPrimerosTres = ordenadosPorPuntaje.slice (0,3);
    const puestos = ['El ganador es : ', 'El segundo puesto es para : ', 'El tercer puesto es para : ']
    for (let i = 0; i < losPrimerosTres.length; i++) {
      console.log( puestos[i] + losPrimerosTres[i].piloto + 'con un puntaje de ' + losPrimerosTres[i].puntaje);
    }
  }
};

// const autosSinSanciones = carrera.autosHabilitados();
// console.table( autosSinSanciones );
// listarConForEach = carrera.listarAutos(arrayDeAutos);
// listarConForEach;
// const buscarPatente = carrera.buscarPorPatente('JHV223');
// carrera.listarAutos([buscarPatente]);
// console.table([buscarPatente]);
// const buscandoCilindrada = carrera.buscarPorCilindrada(1500);
// console.table(buscandoCilindrada);
// console.table(carrera.ordenarPorVelocidad());
// primerTanda = carrera.generarTanda(2000 , 2000);
// console.table(primerTanda);
