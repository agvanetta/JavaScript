const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
const americaScores = [8, 10, 6, 8, 10, 6, 7, 9, 5, 5, 6];

euroScores.length


function mostrarArrays(a, b) {
    if (a.length === b.length) {
        for (let i = 0; i < a.length; i++) {
            const scores = a[i];
            const scores2 = b[i];
           const nameVar =  Object.keys({a})[0];

            console.log(nameVar, scores, "Array2", scores2);

        }
    } else {
        for (let i = 0; i < a.length; i++) {
            const scores = a[i];
            console.log("Array1", scores)
        }
        for (let i = 0; i < b.length; i++) {
            const scores = b[i];
            console.log("Array2", scores)
        }
    }
}
console.log("---------Opción 1------");
mostrarArrays(asiaScores, euroScores)
console.log("*****Opción 2****");

mostrarArrays(americaScores, euroScores)
