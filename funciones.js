
const temperatura = 76;

/* FUNCIÓN CLASICA
function transformarACelcius(fahrenheit){
    return (fahrenheit-32) * (5/9);
}
*/

// FUNCIÓN FLECHA ARROW FUNCTION (EN UNA SOLA LINEA DE CÓDIGO)
let transformarACelcius = fahrenheit => (fahrenheit-32) * (5/9);

const respuesta = transformarACelcius(temperatura);

console.log(`La temperatura en grados Celsius es de:`, parseInt(respuesta));

// FUNCIÓN FLECHA SIN PARÁMETROS

let imprimir = () => console.log("Soy una función");

imprimir();