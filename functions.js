//Funciones en JavaScript
function saludar(nombre = "Antonio") {
  console.log(`Hola ${nombre}`);
}

saludar("Jovani");

function sumar(a, b) {
  return a + b;
}
let suma;

suma = sumar(1, 2);
console.log(suma);

//Function expression
const resta = function(a, b) {
  return a - b;
};
console.log(resta(1, 4));

//IIFE Funciones que se declaran y se convocan automaticamente
(function() {
  console.log("Creando un IIFE");
})();

(function(tecnologia) {
  console.log(`Aprendiendo ${tecnologia}`);
})("Javascript");

//Métodos de propiedad
// Cuando una funcion se pone dentro de un objeto

const musica = {
  reproducir: function(id) {
    console.log(`Reproduciendo Canción id ${id}`);
  },
  pausar: function() {
    console.log("Pausando Música");
  }
};

// Los metodos tambien pueden guardarse / crearse fuera del objeto
musica.borrar = function(id) {
  console.log(`Borrando la cancion con el ID ${id}`);
};
musica.reproducir(30);
musica.pausar();
musica.borrar(2);
