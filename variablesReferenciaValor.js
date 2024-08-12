// Asignación de Variables por valor (si la variables primitivas (integer, boleano, string, ) original cambia, despues de la asignación la segunda variable queda con el valor inicial)
/*
let a = "Hola"
let b = a

a = "Chao"
console.log(b)
*/

// Asignación de variables por Referencia en un array (si varía la variable origina, la variable referenciada también) esto sucede con en arreglos, objetos y funciones
/*
let a = ["hola"]
let b = a

a.push("Chao")

console.log(b)
*/
// Asignación de variables por Referencia en un objeto (si varía la variable origina, la variable referenciada también) esto sucede con en arreglos, objetos y funciones

let a = {nombre: "Hola"}
let b = a

a.nombre = "Chao"

console.log(b)