const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["Agua", "Perros"]
}

console.log(gato.hasOwnProperty("nombre"))

if (gato.hasOwnProperty("nombre")) {
    gato.nombre = "Flojera"
}

console.log(gato)