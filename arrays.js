//arreglo de Strings (metodo alternativo)
const meses = new Array("Enero", "Febrero", "Marzo");
meses.push("abril"); //Inserta al final del arreglo
meses.unshift("Mes 0"); // Añade al inicio del arreglo
meses.pop(); // Elimina el elemento final del arreglo
meses.shift(); // Elimina el primer elemento del arreglo
meses.slice(2, 1); // Quitar un rango
meses.reverse(); // Cambia el orden del arreglo
meses.sort(); // Ordena un arreglo

//Unir un arreglo con otro
let arreglo1 = [1, 2, 3],
  arreglo2 = [9, 8, 7];

console.log(arreglo1.concat(arreglo2));
console.log(Array.isArray(numeros));

arreglo1.sort(function(a, b) {
  //ordenar arreglo de numeros
  return x - y;
});
