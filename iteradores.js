const ciudades = ["Londres", "Zapopan", "Paris"];
const ordenes = new Set(123, 231, 345);
const datos = new Map();
datos.set("Nombre", "Juan");
datos.set("Profesion", "Desarrollador web");

//Entries iterador
// Entries para las ciudades
// for (let entrada of ciudades.entries()) {
//   console.log(entrada);
// }

//Values para las ordenes
// for (let entradas of ordenes.values()) {
//   console.log(entradas)
// }

// Keys iterador
// for (let entrada of datos.keys()) {
//   console.log(entrada);
// }

// Default
// for (let entrada of datos) {
//   console.log(entrada);
// }

// Iteradores para un string

const mensaje = "hola crayola";

for (let letra of mensaje) {
  console.log(mensaje);
}
