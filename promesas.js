// Promesas son un tipo especial de objeto que permite realizaer tareas asincronas y luego manejar los resultados

let promesa = new Promise((response, reject) => { //response si da positivo y reject si da negativo
    let resp = 'Esta es la respuesta del servicio'
    //response(resp)
    reject('Falló')
})

// Para llamar a la promesa

promesa.then(res =>{
    console.log(res)
}).catch(error => {
    console.error(error)
})


// 3 Promesas en forma asincrona con tiempos de respuesta distintos (distintos backends)

let promesa1 = new Promise((response, reject) => { //response si da positivo y reject si da negativo

    setTimeout(() => {
        let resp = {
            response: 200,
            description: '1 Esta información es importante'
        }
        response(resp)
        reject('Falló')
    }, 3000);
})

let promesa2 = new Promise((response, reject) => { //response si da positivo y reject si da negativo

    setTimeout(() => {
        let resp = {
            response: 200,
            description: '2 Esta información es importante, pero suele demorar mucho'
        }
        response(resp)
        reject('Falló')
    }, 5000);
})

let promesa3 = new Promise((response, reject) => { //response si da positivo y reject si da negativo

    setTimeout(() => {
        let resp = {
            response: 200,
            description: '3 Esta información es rápida'
        }
        response(resp)
        reject('Falló')
    }, 2500);
})

promesa1.then(res => {
    console.log(res.description)
    promesa2.then(res => {
        console.log(res.description)
        promesa3.then(res => {
            console.log(res.description)
        }).catch(error =>{
            console.warn(error)
        })
    }).catch(error => {
        console.warn(error)
    })
}).catch(error => {
    console.warn(error)
})