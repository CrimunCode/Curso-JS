// ARREGLOS -> ARRAYS
/* 
const array = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja', 'Banana']

const resultado = array.filter(x => x == 'Naranja')

console.log(resultado)
*/
// FILTER filtrar
/*
const array = [
    {nombre: 'Pedro', apellido: 'Gonzalez'},      //0
    {nombre: 'María', apellido: 'Gonzalez'},      //1
    {nombre: 'Lucía', apellido: 'Gonzalez'},      //2
    {nombre: 'Ricardo', apellido: 'Perez'},       //3
    {nombre: 'Glottis', apellido: 'Juárez'},      //4
    {nombre: 'Fernanda', apellido: 'Fernandez'},  //5
] 


const resultado = array.filter(x => x.apellido == 'Gonzalez');
console.log(resultado);

for (let index = 0; index < resultado.length; index++) {
    const element = resultado[index];
    console.log(element.nombre)
}
*/

// MAP MAPEAR O RECORRER

const array = ['Manzana', 'Manzana1', 'Manzana', 'Manzana1'];

const resultado = array.map(x => {
    if (x != "") return x
}).filter(x => x == "Manzana1");

console.log(resultado)
console.log(array)


// FILL RELLENAR
/*
const array = ['Manzana', 'Manzana', 'Manzana', 'Manzana'];

const resultado = array.fill('Naranja', 1);

console.log(resultado)
*/

// FIND ENCONTRAR solo encuentr el 1er elemento del arreglo
/*
const array = ['Manzana', 'Manzana', 'Manzana', 'Manzana', 'Pera', 'Manzana', 'Pera'];

const resultado = array.find(x => x == 'Pera')

console.log(resultado)
*/

// Mismo ejemplo ahora con un arreglo de objetos
/*
const array = [
    {nombre: 'Pedro', apellido: 'González'},
    {nombre: 'María', apellido: 'González'},
    {nombre: 'Ricardo', apellido: 'González'}
]
const resultado = array.find(x => x.apellido == 'González')

console.log(resultado)
*/

// FIND INDEX OF Encontrar el indice
/*
const array = ['Manzana', 'Manzana', 'Manzana', 'Manzana', 'Pera', 'Manzana', 'Pera'];

const resultado = array.findIndex(x => x == 'Pera')

console.log(resultado)
*/

// SOME Alguno
/*
const array = ['Manzana', 'Manzana', 'Manzana', 'Manzana', 'Pera', 'Manzana', 'Pera'];

const resultado = array.some(x => x == 'Pera')

console.log(resultado)
*/

// EVERY todos
/*
const array = ['Manzana', 'Manzana', 'Manzana', 'Manzana'];

const resultado = array.every(x => x == 'Manzana')

console.log(resultado)
*/
// POP remueve el último elemento del arreglo
/*
const array = ['Manzana', 'Naranja', 'Limón', 'Pera']

const resultado = array.pop()

console.log(resultado)
console.log(array)
*/
// SHIFT remueve el primer elemento del arreglo
/*
const array = ['Manzana', 'Naranja', 'Limón', 'Pera']

const resultado = array.shift()

console.log(resultado)
console.log(array)
*/

// PUSH para agragar un nuevo elemento al final del arreglo
/*
const array = ['Manzana', 'Naranja', 'Limón', 'Pera']

array.push('Ciruela')

console.log(array)
*/

// UNSHIFT para agragar un nuevo elemento al inicio del arreglo
/*
const array = ['Manzana', 'Naranja', 'Limón', 'Pera']

array.unshift('Ciruela')

console.log(array)
*/

// SPLICE remover y/o insertar según el indice y retorna el elemento removido (si modifica el arreglo)
/*
const array = ['Manzana', 'Naranja', 'Limón', 'Pera']
// splice(indice,nro de elementos a remover,elementos a reemplazar)
//array.splice(2, 1, 'Ciruela')
//array.splice(2, 0, 'Ciruela') // para añadir en el indice 2 sin remover nada, pero desplazando a los demas elementos
array.splice(2, 1, 'Ciruela', 'Piña', 'Durazno') // para añadir varios elementos a partir del indice 2 sin remover nada, pero desplazando a los demas elementos
console.log(array)
*/

// SLICE Cortar (solo muestra lo que corta, sin modificar el arreglo ) incluye el elemento del indice donde comienza, pero no incluye el elemento del 2do indice donde termina
/*
const array = ['Manzana', 'Naranja', 'Limón', 'Pera']

const resultado = array.slice(1, 3)

console.log(resultado)
console.log(array)
*/

// JOIN para unir elementos de un array a traves de algún caracter separador (, o - o ; o / similar al concatenar)
/*
const array = ['Manzana', 'Naranja', 'Limón', 'Pera']

document.getElementById('seleccionable').innerHTML = array.join(' - ')
*/
// CONCAT concatena arreglos
/*
const frutas = ['Manzana', 'Naranja', 'Limón', 'Pera']
const verduras = ['Lechuga', 'Tomate', 'Cebolla', 'Zapallo']

console.log(frutas.concat(verduras))
*/

// SORT Ordenamiento(ordena solo desde el 1er caracter)
/*
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

console.log(number.sort((x,y) => x-y))
*/
/*
const autos = [
    {marca: 'FIAT', año: '2020'},
    {marca: 'SUZUKI', año: '2017'},
    {marca: 'HUNDAY', año: '2022'},
    {marca: 'CHEVROLET', año: '2022'},
    {marca: 'FORD', año: '2021'}
]

console.log(autos.sort((x,y) => x.año-y.año))
*/