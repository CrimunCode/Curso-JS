// Eventos
const h1 = document.getElementById("tituloWeb") // se puede seleccionar elementos del DOM, con el getElementById o con el querySelector
const boton = document.querySelector(".btn-primary") // se puede seleccionar elementos del DOM, con el getElementById o con el querySelector

boton.addEventListener("click", () =>{
    console.log("Me diste click")
    h1.textContent = "Texto desde JS"
    h1.style.color = "Orange"
})

console.log(boton)