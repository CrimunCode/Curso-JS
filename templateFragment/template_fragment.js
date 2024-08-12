const lista = document.querySelector("#lista")
const fragment = document.createDocumentFragment();
const arregloPaises = ["1 Peru", "2 Mexico", "3 Colombia"]

const clickPaises = () => console.log("Me diste click")

// Pruebas imprimiendo elementos

/*
li.textContent = "Elemento desde JS";
console.log(li);
lista.appendChild(li)
*/

// createElement

/*
arregloPaises.forEach((pais) => {
    const li = document.createElement("li")
    li.textContent = pais
    lista.appendChild(li)
}) 
*/

// innerHTML : es un poco peligroso y no se usa, debido a que puede implantarse codigo malicioso ya que innerHTML permite mezclar tag html y variables de js

/*
arregloPaises.forEach(pais => {
    lista.innerHTML += `<li>${pais}</li>`
})
*/

// Fragment es un elemendo del DOM que no tiene padre y no tiene reflow (sobrecarga del DOM)

/*
// const fragment = new DocumentFragment() es lo mismo pero se verá más adelante
const fragment = document.createDocumentFragment()
arregloPaises.forEach((pais) => {
    const li = document.createElement("li")
    li.textContent = pais
    fragment.appendChild(li)
}) 
lista.appendChild(fragment)

// Otra forma de impimir al revés (improvisada) 

/*
for (let index = arregloPaises.length-1; index >= 0; index--) {
    const li = document.createElement("li")
    li.textContent = arregloPaises[index]
    fragment.appendChild(li)
}
lista.appendChild(fragment)
*/

// Template: etiqueta en html que no se renderiza cuando se carga una página, ademas tiene un DocumenFragmen en su propiedad a traves del HTMLTemplateElement.content (evita el reflow), se trabaja con un método clone y su estructura es más sencilla para dibujar elementos HTML con codigo en JS.

/*
// Insertar el contenido estático de un template en una etiqueta li del documento en html
const liTemplate = document.querySelector("#liTemplate")
const clone = liTemplate.content.cloneNode(true)
console.log(clone.querySelector(".text-primary"))  
clone.querySelector(".text-primary").textContent = "Agregué a través de un template"
lista.appendChild(clone)
*/

// Template con Arreglos (insertar el contenido un arreglo en una etiqueta li del documento en html)

arregloPaises.forEach(pais => {
    const clone = liTemplate.content.firstElementChild.cloneNode(true) // Se añadde la propiedad firstElementChild para que funcione el evento click
    clone.querySelector('span').textContent = pais
    // inicio del escuchador de evento click
    clone.addEventListener("click", clickPaises)
    // fin escuchador de evento click
    fragment.appendChild(clone)
})

lista.appendChild(fragment)