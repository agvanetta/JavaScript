function CreadorDeCuentas(nroCuenta, tipoCuenta, saldoEnPesos, titular) {
    this.nroCuenta = nroCuenta;
    this.tipoCuenta = tipoCuenta;
    this.saldoEnPesos = saldoEnPesos;
    this.titular = titular;
  }
  let cuenta = new CreadorDeCuentas(
    555,
    "cuenta corriente",
    15000,
    "Ezequiel Montes"
  );
  // console.log(cuenta);
   
  let arrayCuentas = [
    new CreadorDeCuentas(5486273622, "Cuenta Corriente", 27771, "Abigael Natte"),
    new CreadorDeCuentas(1183971869, "Caja de Ahorro", 8675, "Ramon Connell"),
    new CreadorDeCuentas(9582019689, "Caja de Ahorro", 27363, "Jarret Lafuente"),
    new CreadorDeCuentas(1761924656, "Caja de Ahorro", 32415, "Ansel Ardley"),
    new CreadorDeCuentas(7401971607, "Caja de Ahorro", 18789, "Jacki Shurmer"),
    new CreadorDeCuentas(630841470, "Cuenta Corriente", 28776, "Jobi Mawtus"),
    new CreadorDeCuentas(4223508636, "Cuenta Corriente", 2177, "Thomasin Latour"),
    new CreadorDeCuentas(185979521, "Caja de Ahorro", 25994, "Lonnie Verheijden"),
    new CreadorDeCuentas(3151956165, "Cuenta Corriente", 7601, "Alonso Wannan"),
    new CreadorDeCuentas(2138105881, "Caja de Ahorro", 33196, "Bendite Huggett"),
  ];
  console.log(arrayCuentas);
  




