// Async Await es una forma de trabajar promesas

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

async function ejecutarPromesas(){
    let respuestaProm1 = await promesa1
    console.log(respuestaProm1)
    let respuestaProm2 = await promesa1
    console.log(respuestaProm2)
    let respuestaProm3 = await promesa1
    console.log(respuestaProm3)
}

ejecutarPromesas()
