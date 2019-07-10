// En JavaScript existe un objeto llamado Date
const diaHoy = new Date();

// Fecha en especifico mes, dia y año
let navidad2017 = new Date("12-25-2017");

let valor;
// Mes
valor = diaHoy.getMonth();
// Dia actual
valor = diaHoy.getDate();
valor = diaHoy.getDay();
// Obtener el año
valor = diaHoy.getFullYear();
// Minutos
valor = diaHoy.getMinutes();
// Hora
valor = diaHoy.getHours();
// Milisegundos desde 1970
valor = diaHoy.getTime();

console.log(valor);
