//1//
const pulgadasACentimetros = pulgadas => pulgadas*2.54;
console.log(pulgadasACentimetros(10));
//2//
const convertidorURL = string => 'http://www.'+string+'.com';
console.log(convertidorURL('pupino'));
//3//
const agregaSignoDeAdmiracion = string => string+'!';
console.log(agregaSignoDeAdmiracion('pupino'));
//4//
const edadPerruna = edadHumano => edadHumano*7;
console.log(edadPerruna(10));
//5//
const valorHoraDeTrabajo = sueldoMensual => sueldoMensual/40;
console.log(valorHoraDeTrabajo(100000));
//6// //(IMC = peso [kg]/ estatura [m2])
const calculadoraIMC = (alturaEnMetros , pesoEnKgs) => (pesoEnKgs/(alturaEnMetros*alturaEnMetros))*10000;
let resultadoIMC = calculadoraIMC(170,60)
console.log(resultadoIMC);
//7//
const convertirEnMayusculas = stringEnMinuscula => stringEnMinuscula.toUpperCase();
let palabraEnMayuscula = convertirEnMayusculas('pupino')
console.log (palabraEnMayuscula);
//8//
const queTipoDeDatoEs = dato => typeof dato;
let elDatoEs = queTipoDeDatoEs(true);
console.log (elDatoEs);
//9//
const laCircunferenciaEs = radioDeUnCirculo => radioDeUnCirculo*Math.PI;
let circunferencia = laCircunferenciaEs(100);
console.log(circunferencia);

//-----------------------------------------------PARTE_1--------------------------------------------------

//Array de nombres
const nombres = ['Martin','Homero','Cosme','Steven','Adam'];
const buscarNombre = nombre => nombres.indexOf(nombre)
console.log('Se encuentra en la posicion '+ buscarNombre('Cosme')); //El nombre Martin fue encontrado 

const buscarNombre2 = nombre => {
    let posicion = nombres.indexOf(nombre)
    return 'El parametro ingresado se encuentra en la posicion ' + posicion;
}

const seEncontroElNombre = buscarNombre2('Homero')
console.log(seEncontroElNombre)