const traerElJsonHelper = require(__dirname + "/JsonHelper");
const arrayDeBicis = traerElJsonHelper.leerJson("bicicletas");
//console.table(arrayDeBicis);

const carrera = {
  bicicletas: arrayDeBicis,
  bicicletasPorTanda: 4,
  ciclistasHabilitados: function () {
    return this.bicicletas.filter((bicis) => bicis.dopaje == false);
  },
  listarBicicletas: function (arrayDeCliclistas) {
    arrayDeCliclistas.forEach((bicis) =>
      console.log(
        "Ciclista : " +
          bicis.ciclista +
          ", marca : " +
          bicis.marca +
          ",peso: " +
          bicis.peso +
          "kg, largo: " +
          bicis.largo +
          " cm, estado: " +
          (bicis.dopaje ? "Inhabilitado" : "Habilitado")
      )
    );
  },
  buscarPorId: function (numeroDeId) {
    return this.bicicletas.find((bicis) => bicis.id == numeroDeId);
  },
  buscarPorRodado: function (numeroDeRodado) {
    let ciclistasHab = this.ciclistasHabilitados();
    return ciclistasHab.filter((bicis) => bicis.rodado == numeroDeRodado);
  },
  ordenarPorRodado: function () {
    return this.bicicletas.sort((a, b) => a.rodado - b.rodado);
  },
  generarTanda: function (rodado, peso) {
    let filtroPorRodado = this.buscarPorRodado(rodado);
    let filtroPorPeso = filtroPorRodado.filter((bicis) => bicis.peso <= peso);
    return filtroPorPeso.slice(0, this.bicicletasPorTanda);
  },
  calcularPodio: function (arrayDeCiclistas) {
    const ciclistasOrdenadosPorPuntajes = arrayDeCiclistas.sort(
      (a, b) => b.puntaje - a.puntaje
    );
    let podio = ciclistasOrdenadosPorPuntajes.slice(0, 3);
    let puestos = [
      "El ganador es : ",
      "El segundo puesto es para : ",
      "El tercer puesto es para : ",
    ];
    for (let i = 0; i < podio.length; i++) {
      console.log(
        puestos[i] +
          podio[i].ciclista +
          " con un puntaje de " +
          podio[i].puntaje
      );
    }
  //},
  //cambiarAlgo : function () {
    //this.bicicletas.forEach ( bicis => bicis.puntaje += 100)
    
  },
  modificarJsonConForEach:function(){
    carrera.bicicletas.forEach ( bicis => bicis.puntaje += 100); //  escribirJson: function (nombreArchivo, datos)
    traerElJsonHelper.escribirJson("JsonHelper", this.bicicletas); // el escribirJson BORRA Y ESCRIBE. Por eso mandamos toda la info de nuevo
  },
  
  incrementarHonorarios: function (nombre, porcentaje) {
    let profesional = this.buscarPorNombre(nombre);
    let nuevoHonorarios = (profesional.honorarioConsulta * porcentaje) / 100;

    profesional.honorarioConsulta += nuevoHonorarios;//al modificar un miembro del array,
    // no hace falta actualizar, ya se modifica dentro del array
    archivos.escribirJson("profesionales", this.profesionales);
    return profesional;
  },
  sumarPodio : function () {
    const podio = arrayDeBicis.sort(  (a, b) => b.puntaje - a.puntaje);
    const podio3=  podio.slice (0,3);
    return podio3.reduce ( (ac , num) => ac + num.puntaje, 0); // 0 = Índice Actual
}
}

console.log(carrera.sumarPodio())


// console.table( carrera.ciclistasHabilitados() ); // Punto C
// carrera.listarBicicletas(carrera.bicicletas); // el console.log esta dentro del metodo , punto D
//console.table([carrera.buscarPorId(222)]); // con corchete cambia el formato a 2 lineas de codigo, de objeto a array, punto e
// En caso de no encontrar : filter = array vacio ; find = undefined.
// console.table(carrera.buscarPorRodado(244)); arroja array vacio, punto F
// console.table(carrera.ordenarPorRodado());
// console.table(carrera.generarTanda(24,9)); // punto H.
// let tandaSeleccionada = carrera.generarTanda(24, 10);
// carrera.calcularPodio(tandaSeleccionada);
// carrera.cambiarAlgo();
// console.table(carrera.bicicletas);

// carrera.modificarJsonConForEach();
// console.table( arrayDeBicis.sort(  (a, b) => b.puntaje - a.puntaje));
