// *** Carrito de compras2 (con Array) ***  //

const carrito = document.getElementById("carrito")
const template = document.getElementById("template")
const fragment = document.createDocumentFragment()
const btnBotones = document.querySelectorAll(".card .btn")

// Pruebas
// console.log(carrito)
// console.log(template)
// console.log(fragment)
// console.log(btnBotones)

const carritoObjeto = []
const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.fruta)
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    }
    // if(carritoObjeto.hasOwnProperty(producto.titulo)){
    //     producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1
    // }
    // carritoObjeto[producto.titulo] = producto
    // console.log(carritoObjeto) // prueba
    
    const indice = carritoObjeto.findIndex((item) => item.id === producto.id)
    
    // console.log(indice) // Prueba
    
    if (indice === -1) {
        carritoObjeto.push(producto)
    } else {
        carritoObjeto[indice].cantidad++
    }
    // console.log(carritoObjeto) // prueba
    mostrarCarrito(carritoObjeto)
}
const mostrarCarrito = (array) => {
    carrito.textContent = ""
    // Object.values(carritoObjeto).forEach(item => { // se utilizó cuando usamos un objeto
    // foreEach itera sobre un array, no sobre un objeto
    array.forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true)
        clone.querySelector(".lead").textContent = item.titulo
        clone.querySelector(".badge").textContent = item.cantidad
        fragment.appendChild(clone)
    })
    carrito.appendChild(fragment)
}
btnBotones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito))

