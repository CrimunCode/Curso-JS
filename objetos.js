// OBJETOS
/*
let auto1 = {
    marca: 'FIAT',
    modelo: 'UNO',
    peso: 1000,
    color: 'Rojo'
}

let auto2 = {
    marca: 'RENAULT',
    modelo: '12',
    peso: 1100,
    color: 'Marron'
}

console.log('El color del auto1 es: ', auto1.color)
*/

const vendedor = {
    nombre: 'Pedro',
    apellido: 'Gonzalez',
    empresa: 'Auto S. A.',
    habilidades: ['Carisma', 'Puntualidad'],
    vender: function () {
        return "Pedro ha vendido un auto"
    },
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido
    }
}

console.log(vendedor.nombreCompleto())