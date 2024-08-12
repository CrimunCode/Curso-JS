// Callbacks para llamar una funcion como parametro dentro de otra función



function mostrarConsola(num) {
    console.log(num)
}

function calcular(num1, num2, crimun) {
    let suma = num1 + num2
    crimun(suma)
    
}

calcular(1,3,mostrarConsola)