// Declaración de variables con let y const
// var: En desuso ya que puede sobreescribir las variables que se encuentran dentro del objeto globsl Window

// Utilizar %c en un texto para utilizar estilos 
console.log('%c Mis variables', 'color:red; font-weight: bold');

// Variables let; cambiarán de valor
let age; // declaración
console.log(age);
age = 23; // inicialización
console.log(age);

let name = "Francisco"; // declarración e inicialización
console.log({name}); // Imprimir el valor de la variable entre llaves, nos ayuda a verlo como un objeto con el nombre de su respectiva variable
name = "Paco";
console.log(name);

// Constantes const: no cambiarán de valor 
const PI = 3.1416;
// PI = 3.15;
console.log(PI); 

// Mala practica crear variables sin las palabras reservadas
let a = 20;
console.info(a);

// Otra forma de imprimir valores en tabla, este metodo recibe arreglos y objetos
console.table({name, age, PI, a});