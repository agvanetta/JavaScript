let nroCuenta = [5486273622, 1183971869, 9582019689, 1761924656, 7401971607, 630841470, 4223508636, 185979521, 3151956165, 2138105881];
let tipoCuenta = ['Cuenta Corriente', 'Caja de Ahorro', 'Caja de Ahorro' , 'Caja de Ahorro', 'Caja de Ahorro', 'Cuenta Corriente', 'Cuenta Corriente',
                 'Caja de Ahorro', 'Cuenta Corriente', 'Caja de Ahorro'];
let saldo = [27771, 8675, 27363, 32415, 18789, 28776, 2177, 25994, 7601, 33196];
let titular = ['Abigael Natte', 'Ramon Connell', 'Jarret Lafuente', 'Ansel Ardley', 'Jacki Shurmer', 'Jobi Mawtus', 'Thomasin Latour', 'Lonnie Verheijden'
                , 'Alonso Wannan', 'Bendite Huggett'];


function ClientesBanco (numeroDeCuenta, tiposDeCuenta, saldoEnPesos, titularDeLaCuenta){
    this.numeroDeCuenta = numeroDeCuenta; //Solo numeros number
    this.tiposDeCuenta = tiposDeCuenta; // Cc en pesos o Caja de ahorro en pesos bolean
    this.saldoEnPesos= saldoEnPesos; // solo la cantidad number
    this.titularDeLaCuenta = titularDeLaCuenta; // nombre completo string 
}

// let clienteNuevo1 = new ClientesBanco(789798, 'Caja de ahorro', 1004000, 'Agustin Vanetta');
// let clientenuevo2 = 
// console.log(clienteNuevo);


function creandoClientes (numeroDeCuenta, tiposDeCuenta, saldoEnPesos, titularDeLaCuenta) {
    let prueba = []
    
    for (let i = 0; i < numeroDeCuenta.length; i++) {
         let creandoCliente = new ClientesBanco(numeroDeCuenta[i], tiposDeCuenta[i], saldoEnPesos[i], titularDeLaCuenta[i]);
        prueba.push(creandoCliente)
    }
    return prueba
}

console.log (creandoClientes(nroCuenta, tipoCuenta, saldo, titular));