// Regex Expresiones Regulares

// /pattern/modificadores

let texto = "Este curso es de JavaScript y está dado por Sergie Code"
let busqueda = texto.search(/sergie/i)

//console.log(busqueda)

// Modificadores
// i : ignorar mayúscolas y minúsculas
// g : buscar en todo el texto pasado
// m : búsqueda multilinea
// s : permite usar .

// Aplicando el la expresion regular al comienzo
//let pattern = /sergie/i
//let resultado = pattern.test(texto)

// Expresiopn regular para validar e-mail

let pattern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

let resultado = pattern.test('algo@algo.cl')

console.log(resultado)