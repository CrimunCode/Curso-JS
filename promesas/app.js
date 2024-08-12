const posteos = [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
];

// CALLBACK
/*
const findPostById = (id, callback) => {
    const post = posts.find((item) => item.id === id)
    
    if(post){
        callback(null, post)
    } else{
        // en el error
        callback(`No se encontró el post con id: ${id}`)
    }
}

findPostById(2 , (error, post) => {
    if (error){
        return console.log(error) // CUendo hay un return dentro de un if, se detiene la ejecución o se escapa del if
    }
    console.log(post)
})
*/

// PROMESAS

const findPostById = (id) => {
    
    return new Promise((resolve, reject) => { // como argumentos una promesa lleva una respuesta afirmativa y una respuesta de error
        setTimeout(() => {
            const post = posteos.find((item) => item.id === id)
            if (post) {
                resolve(post) // Se muestra la respuesta afirmativa
            } else {
                reject("No se encontró id " + id) // Se mues tra la respuesta de error
            }
        }, 2000); // Un retraso de 2 segundos antes de que llegue la información externa
    })
}

// findPostById(2)
//     .then((post) => console.log(post)) 
//     .catch(error => console.log(error))
//     .finally(console.log("Se ejecuta si o si"))

// Lo mismo que el bloque anterior pero con los métodos async y await

const buscar = async (id) => { // para utilizar un awair, siempre se debe utilizar antes un async
    try {
        const post = await findPostById(id)
        console.log(post) 
    } catch (error) {
        console.log(error)
    } finally {
        console.log('Se ejecuta si o si')
    }
}

buscar(4)

console.log("Fin del código") // Para demostrar que el codigo es asincrono, es decir, que las promesas se muestran luego de que se termina su tiempo de espera, pero en forma paralela el código sigue haciendo lo que uno programa mienstras la respuesta de la promesa llega.