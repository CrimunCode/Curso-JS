// Función Expresada :
// En este caso gracias al concepto de "Hoisting" JS precarga el código de arriba a abajo 
// y se da cuenta de que hay llamdos a funciones antes de declararlas

console.log(numeroAleatorio(10, 21))

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

// Función Declarativa :
// Con las funciones declarativas se debe seguir el orden lógico, primero declarar una función
// y luego llamarla

const numAzar = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

console.log(numAzar(100, 201))


// Función Flecha :
// NUeva forma más eficiente, permite ahorrar código

/*const azarFlecha = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}*/
// Forma más abreviada
const azarFlecha = (min, max) => Math.floor(Math.random() * (max - min)) + min

console.log(azarFlecha(1, 11))

// Un ejemplo de funcion flecha con un forEach

let frutas = ["manzana", "sandía", "pera"]

frutas.forEach((fruta, index) => {
    console.log(`${index}: ${fruta}`)
})