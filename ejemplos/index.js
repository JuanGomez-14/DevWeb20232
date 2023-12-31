// Ejemplos de JavaScript

// Comentario de linea

/**
 * Comentario de bloque
 */

console.log("Hola mundo");
console.log("-----------");

const edad = 20;
const nombre = "Juan";
const apellido = "Gómez";
const esEstudiante = true;
const altura = 1.76;
const semestres = []; // List -> array
const materiaPreferida = { nombre: "Calculo", id: 0 }; // Diccionario -> Objeto -> JSON (JavaScript Object Notation)
const universidad = null;
const carrera = undefined;

console.log("Tipo de dato de nombre:" + typeof nombre);
console.log("Tipo de dato de edad:" + typeof edad);

console.log("-----Conversion de string a number-----");
const precioMatricula = "5000000.5";
console.log(parseInt(precioMatricula));
console.log(parseFloat(precioMatricula));

console.log("--- == ---");
console.log("Doble igual: " + "45" == 45);
console.log("Triple igual: " + "45" === 45);

console.log("---- Concatenación ----");
console.log(nombre + " " + apellido);
console.log(`${nombre} ${apellido}`);

console.log("---- Operador Ternario ---- (exp ? verdadero : falso)");
console.log(edad > 18 ? "Tiene premio" : "Pa tu casa a ver pocoyo");
let condition = edad > 18;
if (condition) {
}
if (condition) {
} else {
}

const dia = "LUNES";
switch (day) {
  case "LUNES":
    console.log("Lunes");
    break;
  case "MARTES":
    console.log("MARTES");
    break;
  case "MIERCOLES":
    console.log("MIERCOLES");
    break;
  default:
    console.log("No es valido papito");
    break;
}

console.log("---- ciclos ----");
for (let index = 0; index < 10; index++) {}

// while (condition) {

// }

for (const item of [1, 2, 3]) {
  console.log(item);
}

for (const key in materiaPreferida) {
  console.log(key);
}

[1, 2, 3].forEach((element) => {
  console.log(element);
});

function imprimirNombre(nombre) {
  console.log(nombre);
}

const imprmirNombreYApellido = (nombre, apellido) => {
  console.log(`${nombre} ${apellido}`);
};

imprimirNombreYApellido(nombre, apellido);

const crearNombreCompleto = (nombre, apellido) => {
  console.log("--- GLOBAL SCOPE FAKE ---");
  console.log(nombre, apellido);
  let name = nombre;
  if (nombre.length > 3) {
    let name = nombre + " " + apellido;
    console.log(name);
  }
};

crearNombreCompleto(nombre, apellido);

const botones = document.getElementsByTagName("button");
console.log(botones);

// ARRAY
const estudiantes = [];

// Agregar un elemento
// estudiantes.push(5);
// estudiantes.push(null);
// estudiantes.push({});
// estudiantes.push(() => {
//   console.log();
// });

estudiantes.push({ Nombre: "Juan", id: 123 });
estudiantes.push({ Nombre: "Maria", id: 1234 });
estudiantes.push({ Nombre: "Maria", id: 12345 });

const imprimirEstudiante = (estudiantes) => {
  console.log(estudiantes);
};

estudiantes.forEach((x) => {
  console.log(x.Nombre);
});

for (let i = 0; i < estudiantes.length; index++) {
  if (estudiantes[i].Nombre == "Maria") {
    console.log(estudiantes[i].id);
  }
}

// Todos "Maria"
const marias = estudiantes.filter((x) => x.Nombre == "Maria");
console.log(marias);

// La primer "Maria" que encuentre
const marias2 = estudiantes.find((x) => x.Nombre == "Maria");
marias2[0].id;

estudiantes = estudiantes.map((x) => {
  return { ...x, edad: null };
});

console.log(estudiantes);
