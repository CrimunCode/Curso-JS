// *** Métodos Arreglo (array methods) *** //

// Método map()

/*
const frutas = ["🍌", "🍏", "🍓"]
const nuevoArray = frutas.map((item) => item)
console.log(nuevoArray)
*/

// Método filter() para filtrar los ementos según la condición

/*
const users = [
    { id: 1, name: "John", age: 34 },
    { id: 2, name: "Amy", age: 40 },
    { id: 3, name: "Carl", age: 10 },
]
const usuariosMayores = users.filter((user) => user.age >= 10)
console.log(usuariosMayores)

// Usando filter() para eliminar un elemento del arrglo u objeto (usuario)

const usuariosFiltrados = users.filter((user) => user.id !== 3)
console.log(usuariosFiltrados)
*/

// Método find() para buscar el primer elemento de un array según la condición

/*
const amy = users.find((user) => user.id === 3)
console.log(amy)


// Otro ejemplo usando la desestructuración del objeto (users). Pero el código envía error si no se cumple la condición

const { name, age } = users.find((user) => user.id === 3)
console.log(`Nombre: ${name}, Edad: ${age}`)
*/

// Método some() para comprobar si almenos un elemnto del array u objeto cumple la condición y arroja un true o false

/*
const existe = users.some((user) => user.id === 3)
console.log(existe)
*/

//  findIndex() para buscar el indice del elemento que se está buscando, si no encuentra algun elemento arroja un -1

/*
const indice = users.findIndex((user) => user.id === 2)
console.log(users[indice])
*/

// slice() Devuelve una copia del array original en un nuevo array, empezando por el inicio hasta el fin (fin no incluido). El arreglo original, no se modifica.

/*
const array = ["Gato", "Perro", "Tigre", "Zebra"]
const arraNuevo = array.slice(1, 3)
console.log(arraNuevo)
*/

// concat() Para unir 2 o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

/*
const array1 = ["a", "b", "c"]
const array2 = ["d", "e", "f"]
const array3 = array1.concat(array2)
const string = "SOY UN STRING"
console.log(array3)
*/

// Spread Syntax permite a un elemento iterable (array o string) ser mostrado anteponiendo ... más el nombre del elemento iterable.

/*
const arraySpread = [...array3, ...array1, ...array2, ...string]
console.log(arraySpread)
*/

// reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor (suma todos los valores de un array).

/*
const numeros = [1, 2, 3, 4, 5]
const sumarTodos = numeros.reduce((acu, valorActual) => acu + valorActual)
console.log(sumarTodos)
*/

// split() divide un objeto de tipo String en un array, mediante un separador.


const cadenaMeses = "Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic"
const arrayMeses = cadenaMeses.split(",")
console.log(arrayMeses)


// join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.


const nuevoTexto = arrayMeses.join("-")
console.log(nuevoTexto)
