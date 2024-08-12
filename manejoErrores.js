// Manejo de errores es sincrono, no es asincrono como las promesas

try {
    // Llamado al Backend (a trevés de un API)
    console.log('Llamando al Backend')
    throw('Este cliente no está apto para la compra') // Throw para obligar a fallar
    console.log('Salió todo con éxito')
} catch (error) {
    // Tomamos el error y hacemos algo que nos parezca correcto
    console.log('Algo falló', error)
}finally{
    //Se ejecuta siempre por más que falle o no falle
    console.log('Se ejecuta siempre')
}