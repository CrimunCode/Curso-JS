// El burbujeo y la captura de eventos son dos mecanismos que describen lo que sucede cuando dos controladores del mismo tipo de evento se activan en un elemento.

const padre = document.querySelector('.border-primary')
const hijo = document.querySelector('.border-secundary')
const nieto = document.querySelector('.border-danger')

// método addEventListener para escuchar el evento click, que desencadena una función flecha

// padre.addEventListener("click", () => {
//     console.log("Click")
// }, true)
// hijo.addEventListener("click", () => {
//     console.log("Click")
// }, true)
// nieto.addEventListener('click', () => {
//     console.log("Click")
// }, true)

// Otra forma más eficienter de hacer lo mismo, pero evitando la propagación

const divs = document.querySelectorAll(".border")  // Para asignar a una variable en JS a todos los divs con clase border

divs.forEach((div) => {
    div.addEventListener("click", (e) => {
        e.stopPropagation()
        console.log("Click")
    })
})