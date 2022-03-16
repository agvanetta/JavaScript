/// SUMAR///
const sumar = (num1, num2) => num1 + num2;

//RESTAR///
const restar = (num1, num2) => num1 - num2;

///MULTIPLICAR///
const multiplicar = (num1, num2) => num1 * num2;

//DIVIDIR//
const dividir = (num1, num2) => num1 / num2;

//ALCUADRADO//
const cuadroDeUnNumero = (n1) => multiplicar(n1, n1);

//PROMEDIAR3NUMEROS//
const promedioDeTresNumeros = (n1, n2, n3) =>
  dividir(suma(suma(n1, n2), n3), 3);
