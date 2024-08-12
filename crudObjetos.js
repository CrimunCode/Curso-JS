/*
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["Agua", "Perros"]
}

gato.color = "Azul" // Crear
  
gato.edad = 5  // Actuaizar

delete gato.duerme //Borrar

console.log(gato)
*/

const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["Agua", "Perros"],
    get nombreMayuscula() {
        return this.nombre.toUpperCase()
    },
    set agregarEnemigo(nuevoEnemigo) {
            this.enemigos.push(nuevoEnemigo)
    },
    otros: {
        amigos: ["Cobarde", "Timido", "Pegajoso"],
        favoritos: {
            comida: {
                fria: "Salmón",
                caliente: "Pollo",
            },
        },
    },
    comer: function (alimento) { //forma antigua
        console.log(`
            ${this.nombre} está comiendo ${alimento}
            `)
    },
    comerDos(alimento) { //forma nueva
        console.log(`
            ${this.nombre} está comiendo ${alimento}
            `)
    },
    listarEnemigos() {
        this.enemigos.forEach((item) => console.log(item)) // Las funciones flecha se pueden utilizar dentro de un método, pero no como un método
    },
}

//gato.comer("Pescado")
//gato.comerDos("Pollo")
//gato.listarEnemigos() 

// For (in): para iterar Objetos, recomendado solo con fines de depuración, no para recorrer arrays.
// For (of): para iterar Arrays.
/*
for (let propiedad in gato) {  
    console.log(gato[propiedad]) // Obligatorio el uso de perentesis cuadrados
}*/

// Object.values()

//console.log(Object.values(gato))
/*
console.log("\n Object.values \n")
Object.values(gato).forEach((item) => console.log(item))
console.log("\n Object.entries \n")
Object.entries(gato).forEach((item) => console.log(item))
console.log("\n Object.keys \n")
Object.keys(gato).forEach((item) => console.log(item))
console.log("\n Object.getOwnPropertyNames \n")
Object.getOwnPropertyNames(gato).forEach((item) => console.log(item))
*/

// Desestructurración pasar a varialbes los valores de un objeto
//const nombreGato = gato.nombre  //manera antigua
//console.log(gato) 
//maneda actual
//const {nombre, duerme, edad} = gato

//console.log(nombre, duerme, edad)

// Alias : para no duplicar los nombres de las variables con las del objeto existen los alias que pasan a ser las nuevas variables
// El Alias es opcional, no obligatorio.
/*
const { nombre : varNombre, duerme : varDuerme, edad } = gato
console.log(varNombre, varDuerme, edad)*/

//asignar valores por defecto, la variable raza se acavba de crear aqui como una variable
//const { nombre: varNombre, duerme: varDuerme, edad, raza = "Persa" } = gato
//console.log(varNombre, varDuerme, edad, raza)

//const {amigos} = gato.otros
//console.log(amigos)

// const {amigos: amigosArray} = gato.otros

//const amigosArray = ["Cobarde", "Timido", "Pegajoso"]

//const [amigoUno, amigoDos] = amigosArray

//console.log(amigoDos)

//console.log(gato.nombreMayuscula) // En el caco de los GET (para obtener información de una propiedad del objeto) y SET (para manipular el valor de una propiedad del objeto) los métodos del objeto NO LLEVAN PARENTESIS ().

gato.agregarEnemigo = "Dino"

console.log(gato)