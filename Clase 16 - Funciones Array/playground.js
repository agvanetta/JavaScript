let laMitad = (numero) => numero / 2;

console.log(laMitad(10));

let dividir = (num1, num2) => num1 / num2;

console.log(dividir(20, 4));

let tengoQueTrabajar = (dia) => {
  if (dia == "sabado" || dia == "domingo") {
    return "No tenes que trabajar";
  } else {
    return "Si tenes que ir a trabajar";
  }
};

console.log(tengoQueTrabajar("lunes"));

let sonIguales = (num1, num2) => {
  let resultado = num1 == num2;
  return resultado == true;
};

console.log(sonIguales(2, 3));

let saludar = (nombre) => "Hola, " + nombre + "!";
console.log(saludar("pupino"));

//////////////////////////////// Callbacks /////////////////////////////////////////////////////
// Es una funcion, que se pasa como parametro de otra funcion. La funcion que lo recibe es quien se encarga de ejecutarla cuando sea necesario

let sumar = (num1, num2) => num1 + num2;
let restar = (num1, num2) => num1 - num2;
let multiplicar = (num1, num2) => num1 * num2;
let dividirv2 = (num1, num2) => num1 / num2;

let calculadora = (num1, num2, operacionARealizar) =>
  operacionARealizar(num1, num2);

console.log(calculadora(2, 2, dividirv2));


console.log( ' ejemplo callback ')

function nombreCompleto (nombre, apellido) {
  return nombre + ' ' + apellido;
}

function saludar2 (nombre, apellido , callback) {
  console.log( 'Hola ' + callback(nombre, apellido) + ' ! ');
}

saludar2('pupino' , 'vanetta', nombreCompleto);

console.log ('ejercitacion playground . ')
//1 //
function doble (numero) {
  return numero*2
}

function triple (numero) {
return  numero*3
}

function aplicarCallback (numero, callback) {
  return callback(numero)
}

console.log (aplicarCallback(2 , triple));

//2//

// function suma (num1, num2) {
//   return num1 + num2;
// }
// function resta (num1, num2) {
//   return num1 - num2;
// }
// function multiplicacion (num1, num2) {
//   return num1 * num2;
// }
// function division (num1, num2) {
//   return num1 / num2;
// }

// function calculadora (num1, num2, callback) {
//   return callback(num1,num2)
// }

// 3

let ejemplo = ['www.google.com' , 'www.facebook.com' , 'www.instagram.com'];

function agregarHttp(url) {
  return 'http://'+url
}

function procesar( array , callback ){
  let nuevoArray = []
  for (let i = 0; i < array.length; i++) {
    nuevoArray.push (callback(array[i])) ;
  } return nuevoArray
}

console.log ( procesar(ejemplo, agregarHttp));