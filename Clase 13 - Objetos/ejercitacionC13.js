//arrays con los datos de las cuentas
numCuenta = [
    5486273622, 1183971869, 9582019689, 1761924656, 7401971607, 630841470,
    4223508636, 185979521, 3151956165, 2138105881,
];
tipoCuenta = [
    "Cuenta Corriente",
    "Caja de Ahorro",
    "Caja de Ahorro",
    "Caja de Ahorro",
    "Caja de Ahorro",
    "Cuenta Corriente",
    "Cuenta Corriente",
    "Caja de Ahorro",
    "Cuenta Corriente",
    "Caja de Ahorro",
];
saldo = [27771, 8675, 27363, 32415, 18789, 28776, 2177, 25994, 7601, 33196];
titular = [
    "Abigael Natte",
    "Ramon Connell",
    "Jarret Lafuente",
    "Ansel Ardley",
    "Jacki Shurmer",
    "Jobi Mawtus",
    "Thomasin Latour",
    "Lonnie Verheijden",
    "Alonso Wannan",
    "Bendite Huggett",
];
//Cuenta de prueba (hardcodeada)
let cuenta1 = {
    numCuenta: 123,
    tipoCuenta: "Cuenta corriente en pesos",
    saldo: 202020,
    titular: "Garcia, Javier",
};
//Funcion constructora

function CuentaCliente(numCuenta, tipoCuenta, saldo, titular) {
    this.numCuenta = numCuenta;
    this.tipoCuenta = tipoCuenta;
    this.saldo = saldo;
    this.titular = titular;
}
//Llamada de la funcion constructora(prueba)
let cuenta2 = new CuentaCliente(
    5486273622,
    "Cuenta Corriente",
    27771,
    "Abigael Natte"
);
//Funcion para crear array con los datos de las cuentas

function crearCuentas(arrayCuenta, arrayTipoCuenta, arraySaldo, arrayTitular) {
    let nombreCuenta = [];
    for (let i = 0; i < arrayCuenta.length; i++) {
        nombreCuenta[i] = new CuentaCliente(
            arrayCuenta[i],
            arrayTipoCuenta[i],
            arraySaldo[i],
            arrayTitular[i]
        );
    }
    return nombreCuenta;
}
console.log(crearCuentas(numCuenta, tipoCuenta, saldo, titular)); // se crea un array con los objetos que pretendiamos, pero todos los objetos se llaman "CuentaCliente"