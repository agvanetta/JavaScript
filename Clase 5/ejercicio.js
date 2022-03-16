let array = [1,5,4,1,7];

// console.log(array);
let acumulador = array[0];
// console.log(acumulador);

for (let i=0; i< array.length - 1; i++){   
    acumulador += array[i+1];
    console.log(acumulador);
}