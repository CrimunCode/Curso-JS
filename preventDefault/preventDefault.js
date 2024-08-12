const formulario = document.querySelector('form')

formulario.addEventListener("submit", (e) => {
    console.log("Click")
    e.preventDefault()
})

const ancla = document.querySelector("a")
ancla.addEventListener("click", (e) => {
    console.log("Click")
    e.preventDefault()
})