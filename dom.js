//console.log("Vinculado 😂")

// Document
/*
console.log(document)
console.log(document.head)
console.log(document.title)
*/

// DOMContentLoaded
/*
document.addEventListener("DOMContentLoaded", () => {
    console.log(document.getElementById("tituloWeb"))
    console.log(document.getElementById("tituloWeb").textContent)
    console.log(document.getElementById("tituloWeb").innerHTML)
    })    
*/

// GetElementById
/*
console.log(document.getElementById("tituloWeb"))
console.log(document.getElementById("tituloWeb").textContent)
console.log(document.getElementById("tituloWeb").innerHTML)
*/

// querySelector : solo toma el primer selector del elemento referenciado
  
console.log(document.querySelector(".text-primary")) // referenciando a una Clase text-primary del DOM
console.log(document.querySelector("#tituloWeb"))   // referenciando a un Id tituloWeb del DOM
console.log(document.querySelector("h1"))          // referenciando a una etiqueta HTML del DOM


// querySelectorAll
/*
console.log(document.querySelectorAll(".text-danger")) // referenciando a toda Clase text-danger del DOM
console.log(document.querySelectorAll(".container .text-danger")) // referenciando a toda la clase text-danger del DOM, pero dentro del div con la clase container
*/

// element
/*
console.log(h1.className)
console.log(h1.id)
console.log(h1.style)
console.log(h1.tagName)
console.log(h1.textContent)



h1.textContent = "Hola este es el nuevo titulo"
h1.style.backgroundColor = "grey"
h1.style.color = "white"
*/