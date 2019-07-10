//Objetos en JavaScript
const persona = {
  nombre: "Jovani",
  apellido: "Almaraz",
  edad: 26,
  musica: ["Trance", "Rock", "Metal"],
  hogar: {
    ciudad: "Guadalajara",
    pais: "Mexico"
  },
  nacimiento: function() {
    return new Date().getFullYear() - this.edad; //this es para acceder a las propiedades del objeto
  }
};

console.log(persona.nacimiento());

//Arreglos de objetos
const autos = [
  { modelo: "Mustang", motor: 6.0 },
  { modelo: "Corrolla", motor: 2.0 }
];

for (let i = 0; i < autos.length; i++) {
  console.log(autos[i]);
}
