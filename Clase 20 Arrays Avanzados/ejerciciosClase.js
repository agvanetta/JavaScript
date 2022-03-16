const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const reducer = function (acumulador, current) {
//   return acumulador + current; };
// const reducer= (acumululador, current) => acumululador+current ;

const dividirArray = (nums) => {
  const suma = nums.reduce((acumululador, current) => acumululador + current);
  return nums.map((num) => num / suma);
};

const sumaDeArrays = dividirArray(numeros);

console.log(sumaDeArrays);

const palabras = ["holas", "hola", "hol", "ho", "h"];

function filtrando(arregloDePalabras, numero) {
  return arregloDePalabras.filter((palabra) => palabra.length > numero);
}

console.log(filtrando(palabras, 2));

// Metodo clasico //

const masQue2 = (palabras, numeros) => {
  nuevoArray = [];
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > numeros) {
      nuevoArray.push(palabras[i]);
    }
  }
  return nuevoArray;
};

console.log(masQue2(palabras, 2));


// -----------------------------------------------------------------//