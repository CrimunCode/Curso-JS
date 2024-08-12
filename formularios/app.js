// const regExp = /[A-Za-z0-9]/i // Expresión Regular de Notación Literal
// const regExpEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/ // Validación de E-mail
// const regExpObjeto = new RegExp("crimun", "i") // Expresión Regular de Notación de Objeto
// console.log(regExp.test("crimune"))

const formulario = document.getElementById("formulario")

// const userName = document.querySelector("input[name='userName']") // capturar los valores del formulario con el método querySelector()
// const userEmail = document.querySelector("input[name='userEmail']") // capturar los valores del formulario con querySelector()

const userName = document.getElementById("userName") // capturar los valores del formulario con el método getelementById()
const userEmail = document.getElementById("userEmail") // capturar los valores del formulario con el método getelementById()

const alertName = document.getElementById("alertName")
const alertEmail = document.getElementById("alertEmail")
const alertSuccess = document.getElementById("alertSuccess")

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const mostarMensajeExito = () => {
    alertSuccess.classList.remove("d-none")
    alertSuccess.textContent = "Mensaje enviado con éxito"
}

const mostrarMensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none")
        item.tipo.textContent = item.msg
    })
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    // console.log('Formulario procesado')
    // console.log(userName.value)
    // console.log(userEmail.value)

    alertSuccess.classList.add("d-none")
    const errores = []
    // console.log(!userName.value.trim()) // Esto devuelve true si existen sólo espacios en blanco
    // Validación nombre
    if (!regUserName.test(userName.value) || !userName.value.trim()) {
        // console.log("Formato no válido") // Pruebas
        // return // Para salir del if()
        userName.classList.add("is-invalid")
        errores.push({
            tipo: alertName,
            msg: "Formato no válido en el campo nombre, sólo letras",
        })
    } else {
        userName.classList.remove("is-invalid")
        userName.classList.add("is-valid")
        alertName.classList.add("d-none")
    }
    // Validación E-mail
    if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
        // console.log("Formato no válido")
        // return
        userEmail.classList.add("is-invalid")
        errores.push({
            tipo: alertEmail,
            msg: "Escriba un correo válido"
        })
    } else {
        userEmail.classList.remove("is-invalid")
        userEmail.classList.add("is-valid")
        alertEmail.classList.add("d-none")
    }

    if (errores.length !== 0) {
        mostrarMensajeError(errores)
        return
    }

    console.log("Formulario enviado con éxito")
    mostarMensajeExito()
})




