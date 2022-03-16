const miConsole = {
  miLogLindo: function (array) {
    for (let i = 0; i < array.length; i++) {
      console.log(
        "El nombre del participante es " +
          array[i].nombre +
          " y su pasatiempo es " +
          array[i].profesion
      );
    }
  },

  miLog: function (objeto) {
    const objetoConMenosPropiedades = {
      nombre: objeto.nombre,
      profesion: objeto.profesion,
    };
    console.log(objetoConMenosPropiedades);
  },
};

module.exports = miConsole;
