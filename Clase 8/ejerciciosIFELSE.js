
// console.log(' EJERCICIO 1 ');
// console.log(false || true); //1
// console.log(false | (3 == 4)); //Si bien JavaScript lee e interpreta la sentencia y retorna un 0, hay un error de sintaxis, 
//ya que la forma correcta de usar los operadores lógicos es con símbolos dobles ("||" y "&&"). Sigo sin entender, deberia arrojar un error.
// console.log(false && 3 == 4); //3
// console.log(10 >= 15 && 10 !== 11);
// console.log(12 % 2 == 0 && 12 !== 21);
// console.log("ACA SEGUIMOS");
// // console.log (8-15 == 8 || 7>6 = -2) ERROR
// console.log(3 + 5 == "8" && 5 - 4 === 1);
// console.log("Zapato" == "trampa" || "hola" <= "chau"); // DA ; el primero da false y el segundo se compara por orden alfabetico no se como queda con palabras
// console.log("Gato" && "Perro"); // DA PErro no SE PORQUE
// console.log("Gato" || "Perro"); // DA GATO WHATSS

// console.log ("Gato" && "Perrossssssssssss")


///      COMPARACION ////
//console.log ( ' ----COMPARACION------ ')

////let clima = 'soleado'
//let dia = 'domingo'

//if (clima == 'soleado'   &&    dia == 'domingo')  {
//  console.log ( 'Lindo dia para pasear con el pupe')
//}

// el ELSE va " justo despues de las llaves de cierre del IF"

let precio = 'barato'
let cuotas = 'no'

if (precio == 'barato'   &&    cuotas == 'si')  {
                console.log ( ' realizar compra');
}        else { console.log ( ' no realizar compra ')};


// otro mas copado el else if , cuando no se cumplen las condiciones del if incial. 

let accion = 'bajista'
let sector = 'bajista'

if ( accion == 'crecimiento'   &&    sector == 'alsista') {
  console.log ( ' Comprar a largo plazo ');
} else if ( accion == 'crecimiento' && sector == 'bajista' ) {
  console.log ( 'comprar y vender en corto plazo');
} else {
   console.log ( ' no comprar');
}





function puedePasar (nombre) {

  if ( nombre != 'Cosme Fulanito' ) {
    return true
      } else { return false}
         }

let nombre = 'Cosme Fulanito'

console.log (puedePasar(nombre))

// ejemplo de Swicht //

let dia = 'domingo';

switch (dia) {
  case 'lunes':
    console.log ( 'Es lunes, se labura');
  break;

  case 'sabado':
    console.log ('Es sabado se sale');
  break;

  case 'domingo':
    console.log ('Es domingo se mime');
  break;

  default:
    console.log ('Es martes, miercoles, jueves o viernes y no se que se hace')
  break;
}

