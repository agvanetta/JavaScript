const mascota = {
    nombre: "Gwendolyn",
    vivo: true,
    energiaVital: 7,
    hambre: 8,
    felicidad: 10,
    entrenamiento: 5,
    peso: 10,
    social: 9,
    tipo: "a",
    edad: 0,
    vivir: function () {
      this.edad++;
      this.energiaVital--;
      this.hambre += 2;
    },
    chequeoSignosVitales: function () {
      console.log(
        "La edad de " +
          this.nombre +
          "es " +
          this.edad +
          ". La energia vital es " +
          this.energiaVital +
          ". El hambre es " +
          this.hambre
      );
    },
    comer: function () {
      this.hambre--;
      this.energiaVital++;
      //this.peso;
      this.felicidad++;
    },
    sigueConVida: function () {
      return (
        this.nombre <= 5 &&
        this.hambre >= 0 &&
        this.peso > 0 &&
        this.energiaVital > 0
      );
    },
  };
  
  
  
  
  while (mascota.sigueConVida()) {
      mascota.vivir();
      mascota.chequeoSignosVitales();
      mascota.chequeoSignosVitales();
  }
  
  console.log('Lo siento, tu mascota murió.');
  