// IF
const edad = 18;

if (edad == 18) {
  console.log("Si puedes entrar al sitio");
} else {
  console.log("No puedes entrar al sitio");
}

let hora = 24;
if (hora > 0 && hora <= 10) {
  console.log("Buenos dias");
} else if (hora > 18 && hora <= 24) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}

// Ternario
const logueado = true;
console.log(logueado === true ? "Si se logueo" : "No se logueo"); // ? = if  : = else

// FOR
for (let index = 0; index < 10; index++) {
  if (index % 2 == 0) {
    console.log(`El numero ${index} es Par`);
  } else {
    console.log(`El numero ${index} es Impar`);
  }
}

// DO WHILE
let i = 1000;

do {
  console.log(`Numero: ${i}`);
} while (i < 10);

// ForEach
const pendientes = ["Tarea", "Comer", "Estudiar"];

pendientes.forEach(function(pendiente, index) {
  console.log(`${index} : ${pendiente}`);
}); // Repasar ForEach

// Map para recorrer un arreglo de objetos
const carrito = [{ id: 1, producto: "Libro" }, { id: 2, producto: "Camisa" }];

const nombreProducto = carrito.map(function(carrito) {
  return carrito.producto;
});

console.log(nombreProducto);

// Otra sintaxis de un For

const automovil = {
  modelo: "Camaro",
  año: "2019",
  color: "Negro"
};

for (let auto in automovil) {
  console.log(`${auto} : ${automovil[auto]}`);
}

console.log(automovil);


