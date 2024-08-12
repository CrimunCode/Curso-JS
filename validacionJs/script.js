const firebaseConfig = {
    apiKey: "AIzaSyAV4B5ssMs3LaKjExeNhp6KouArRX4zIjA",
    authDomain: "bd-de-formulario.firebaseapp.com",
    projectId: "bd-de-formulario",
    storageBucket: "bd-de-formulario.appspot.com",
    messagingSenderId: "311657730514",
    appId: "1:311657730514:web:2e0c6428fd77d306efb80b",
    measurementId: "G-6V1R9QRXBX"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

// Escuchamos el evento submit (enviar) del formulario y prevenimos que el formulario se resetee y envíe datos a no ser que esté completo
document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()

    // Validar campo nombre
    let entradaNombre = document.getElementById('name')  // asignar el nombre a una variable JS
    let errorNombre = document.getElementById('nameError') // asignar elementos (vacio) del DOM a una variable JS

    if (entradaNombre.value.trim() === '') { // Validación campo vacio
        errorNombre.textContent = 'Por favor, ingrese su nombre' // Reasignando  mensaje de error a una variable JS
        errorNombre.classList.add('error-message') //añadiendo una clase de estilo del CSS color rojo al mensaje del error
    } else {
        errorNombre.textContent = '' // Si está bien el nombre, borramos el mensaje de error
        errorNombre.classList.remove('error-message') // y removemos la clase de estilo del error
    }

    // Validar coore electrónico
    let emailEntrada = document.getElementById('email') // asignar email a una variable JS
    let emailError = document.getElementById('emailError') // asignar elementos del DOM a una variable JS
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // asignando un patrón de validación email básico a una variable JS

    if (!emailPattern.test(emailEntrada.value)) { // si la fucncion test, devuelve falso (el e-mail es inválido) y ademas esto se niega va a dar true por lo tanto entra al if
        emailError.textContent = 'Por favor, ingrese un e-mail válido' // se reasigna el mensaje de error al DOM
        emailError.classList.add('error-message') // se añade una clase de estilo CSS al mensaje de error
    } else {
        emailError.textContent = '' // Si está bien el e-mail, borramos el mensaje de error
        emailError.classList.remove('error-message') // y removemos la clase de estilo del mensaje de error
    }

    // Validar la contraseña
    let contrasenaEntrada = document.getElementById('password') // asignar la contraseña a una variable JS
    let contrasenaError = document.getElementById('passwordError') // asignar mensaje de error (vacio) del DOM a una variable JS
    let contrasenaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/;

    if (!contrasenaPattern.test(contrasenaEntrada.value)) { // evaluando si la contraseña es menor a 8 caracteres
        contrasenaError.textContent = 'La contraseña dene tener al menos 8 caracteres, números, mayusculas y inusculas y caracteres especiales' // si la contraseña es menor a 8 caracteres, se reasigna el mensaje de error al DOM
        contrasenaError.classList.add('error-message') // se añade una clase de estilo CSS al mensaje de error
    } else {
        contrasenaError.textContent = '' // si la contraseña cunple los requisitos, borramos el mensaje de error
        contrasenaError.classList.remove('error-message') // y removemos la clase de estilo del mensaje de error
    }

    
    // Si todos los campos son válidos enviar formulario
    if (!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent) { // se evalua si las variables de JS nombre, email y contraseña estan vacias
        
        // Backend que reciba la información
        db.collection("users").add({
            nombre: entradaNombre.value,
            email: emailEntrada.value,
            password: contrasenaEntrada.value
        })
        .then((docRef) => {
            alert("El formulario se ha enviado con éxito", docRef.id);
            document.getElementById('formulario').reset() // Se limpia el formulario del DOM
        })
        .catch((error) => {
            alert(error);
        });        
    }
})