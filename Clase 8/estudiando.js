
let edad=21 //(el número es a modo de ejemplo, podes cambiarlo o crear otras para tener varias pruebas)


if(edad<18) {
    console.log("No puede pasar al bar.")
}
else if ( edad < 0) {
    console.log ( ' "Error, edad inválida. Por favor ingrese un número válido."')
}

else if(edad<21){
    console.log("Puede pasar al bar, pero no puede tomar alcohol.")

}
else {
console.log("Puede pasar al bar y tomar alcohol. Felitaciones por los +21")
}

if (edad%2 != 0) {
    console.log ("¿Sabías que tu edad es impar?")
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log ( ' ---Ejercicio 2 ---')

function totalAPagar( vehiculo , litros) {
   switch (vehiculo) {

        case 'coche':
            total = 86
          break;

        case 'moto':
            total = 70
        break;

        case 'autobus':
            total = 55
   }    

   if (litros >= 0 && litros <= 25) {
       pagar = total + 50
   } 
   else {pagar = total + 25
} 
    console.log ( 'El total a pagar es $' + pagar)

 }

 let vehiculo = 'coche'
 let litros = 300
 totalAPagar(vehiculo , litros)