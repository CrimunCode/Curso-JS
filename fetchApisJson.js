// FETCH APIs y JSON

let urlBase = 'https://jsonplaceholder.typicode.com'
let query = 'posts/1'

// MÉTODO GET : pedir información
/*
fetch(`${urlBase}/{query}`)
    .then(response => response.json())
    .then(json => console.log(json))

let requestBody = {
    title: 'Ricardo comenta sobre tu foto',
    body: '¡Qué bella foto prima, se te extraña',
    userId: 1,
}
*/
// MÉTODO POST : enviar información
/*
fetch(`${urlBase}/posts`,{
    method: 'POST',
    headers: {
        'Conten-Type': 'aplication/json; charset=UTF-8',
    },
    body: JSON.stringify(requestBody)
})
    .then(response => response.json())
    .then(json => console.log(json))
*/

// MÉTODO PUT : editar información
/*
let posteo = 5
let requestBody2 = {
    id: 3, 
    title: 'Ricardo comenta sobre tu foto',
    body: '¡Qué bella foto prima, se te extraña',
    userId: 1,
}

fetch(`${urlBase}/posts/${posteo}`,{
    method: 'PUT',
    headers: {
        'Conten-Type': 'aplication/json; charset=UTF-8',
    },
    body: JSON.stringify(requestBody2)
})
    .then(response => response.json())
    .then(json => console.log(json))
*/

// MÉTODO PATCH : editar información (sólo se edita un atributo)
let post = 10
let modificacion = {
    title: 'Este título ha sido modificado'
}

fetch(`${urlBase}/posts/${post}`, {
    method: 'PATCH',
    headers: {
        'Content-type': 'applicacion/json; charset=UTF-8',
    },
    body: JSON.stringify(modificacion)
})

    .then(response => response.json())
    .then(json => console.log(json))

// MÉTODO DELETE : borrar un item
