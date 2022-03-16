// join // Por default separa con comas.

let arrayFrase = [
  "No",
  "he",
  "fracasado,",
  "simplemente",
  "me",
  "he",
  "topado",
  "con",
  "diez",
  "mil",
  "soluciones",
  "equivocadas",
];

let fraseNueva = arrayFrase.join(" ");

console.log(fraseNueva);

console.log("ejercicio 2");
let estudiantes1 = [
  {
    nombre: "Alvaro",
    promedio: 9,
    curso: "Android",
  },
  {
    nombre: "Daniel",
    promedio: 6,
    curso: "Full Stack",
  },
  {
    nombre: "Alexis",
    promedio: 3,
    curso: "iOS",
  },
];

let alumnoEgresado = estudiantes1.pop();

console.log("ejercicio3");

let estudiantes = [
  {
    nombre: "Alvaro",
    promedio: 9,
    curso: "Android",
  },
  {
    nombre: "Daniel",
    promedio: 6,
    curso: "Full Stack",
  },
  {
    nombre: "Alexis",
    promedio: 3,
    curso: "iOS",
  },
];

estudiantes.push({ nombre: "Juan", promedio: 5, curso: "iOS" });
estudiantes.push({ nombre: "Miguel", promedio: 2, curso: "Android" });

console.log("ejercicio4");
let estudiantes4 = [
  {
    nombre: "Alvaro",
    promedio: 9,
    curso: "Android",
  },
  {
    nombre: "Daniel",
    promedio: 6,
    curso: "Full Stack",
  },
  {
    nombre: "Alexis",
    promedio: 3,
    curso: "iOS",
  },
];

let alumnoDeBaja = estudiantes4.shift();

////////////////////////////////////////////////ejericcio 5

let estudiantes = [
  {
    nombre: "Alvaro",
    promedio: 9,
    curso: "Android",
  },
  {
    nombre: "Daniel",
    promedio: 6,
    curso: "Full Stack",
  },
  {
    nombre: "Alexis",
    promedio: 3,
    curso: "iOS",
  },
];

estudiantes.unshift({
  nombre: "Mariana",
  promedio: 9,
  curso: "Full Stack",
});
estudiantes.unshift({
  nombre: "Francisco",
  promedio: 2,
  curso: "Android",
});

// ejericios ok// Playground.