// Solicitud de datos al usuario
let nombre = prompt("Ingrese su nombre:");
console.log("Hola, " + nombre + "!");

let edad = parseInt(prompt("Ingrese su edad:"));

let mensajeEdad = "Tienes " + edad + " años.";
console.log(mensajeEdad);

let colorFavorito = prompt("Ingrese su color favorito:");
let mensajeColor = "Tu color favorito es " + colorFavorito + ".";
console.log(mensajeColor);

// Mensaje final
alert("Gracias por participar, " + nombre + "!");

// Cálculo del año de nacimiento
const anoActual = 2026;

let anoDeNacimiento = anoActual - edad;
console.log("Naciste en el año " + anoDeNacimiento + ".");

// Verificación del tipo de dato
console.log(typeof edad);
