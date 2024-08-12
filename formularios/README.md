# FORMULARIOS EN JAVASCRIPT
***
## Tabla de Contenidos

1.  [Expresiones Regulares](#Expresiones-Regulares)
1.1 [Banderas](#flags-de-una-regexp)
1.2 [Métodos de RegExp](#métodos-de-regexp)
1.3 [Carácteres especiales](#carácteres-especiales)
2.  [Validación formularios](#validación-formularios)
2.1 [HTML5](#html5)
2.2 [Eventos](#eventos)
2.3 [Capture value](#capturar-value)
3.  [FormData](#formdata)

## Expresiones Regulares
***
[Regular Expressions](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions): Las expresiones regulares (a menudo llamadas RegExp o RegEx) son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas.

[Fuente#02](https://lenguajejs.com/javascript/caracteristicas/expresiones-regulares/): Son un sistema para buscar, capturar o reemplazar texto utilizando patrones.

Estos patrones permiten realizar una búsqueda de texto de una forma relativamente sencilla y abstracta, de forma que abarca una gran cantidad de posibilidades que de otra forma sería imposible o muy costosa.

/patron/flags

    // notación literal
    const regExpLiteral = /crimun/i

    // notación de objeto
    const regExpObjeto = new RegExp("crimun", "i")

### Flags de una RegExp

* **i** Ignora mayúsculas y minúsculas. Se suele denominar insensible a mayús/minús.
* **g** Búsqueda global. Sigue buscando coincidencias en lugar de pararse al encontrar una.
* **m** Multilínea. Permite a ^ y $ tratar los finales de línea \r o \n.

### Métodos de RegExp

El método `test()` ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false.

Retorna true si existe una coincidencia entre la expresión regular y la cadena especificada; de lo contrario retorna false.

Use `test()` cuando desee saber si existe la ocurrencia de un patrón en una cadena

### Carácteres especiales

* **[ ]** Rango de carácteres. Cualquiera de los caracteres del interior de los corchetes.
* **|** Establece una alternativa: lo que está a la izquierda o lo que está a la derecha.


* **[0-9]** Un dígito del 0 al 9.
* **[A-Z]** Letra mayúscula de la A a la Z. Excluye ñ o letras acentuadas.
* **[a-z]** Letra minúscula de la a a la z. Excluye ñ o letras acentuadas.
* **[A-Za-z0-9]** Carácter alfanumérico (letra mayúscula, minúscula o dígito).
```
    const regExpLiteral = /[0-9]/gi;
    const str = "234";
    console.log(regExpLiteral.test(str));

    const regExpLiteral = /[a-z]/gi;
    const str = "crimun";
    console.log(regExpLiteral.test(str));
```
* **Solo números**:
```
    const regExpLiteral = /^\d+$/gi;
    const str = "crimun123";
    console.log(regExpLiteral.test(str));
```
* **Solo letras (sin tildes)**:
```
    const regExpLiteral = /^[a-zA-Z ]*$/;
    const str = "crimun";
    console.log(regExpLiteral.test(str));
```
* **Solo letras (con tildes)**:
```
    /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
```
* **Validar email**:
```
    /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
```
## Validación Formularios
***
[Form validation](https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation): Antes de enviar datos al servidor, es importante asegurarse de que se completan todos los controles de formulario requeridos, y en el formato correcto.

Esto se denomina validación de formulario en el lado del cliente y ayuda a garantizar que los datos que se envían coinciden con los requisitos establecidos en los diversos controles de formulario.

La validación en el lado del cliente es una verificación inicial y una característica importante para garantizar una buena experiencia de usuario.

Sin embargo, ¡la validación en el lado del cliente no debe considerarse una medida de seguridad exhaustiva! Tus aplicaciones siempre deben realizar comprobaciones de seguridad de los datos enviados por el formulario en el lado del servidor.

[Website security](https://developer.mozilla.org/es/docs/Learn/Server-side/First_steps/Website_security)

Hay dos tipos diferentes de validación por parte del cliente que encontrarás en la web:

La validación de formularios incorporada utiliza características de validación de formularios HTML5, Esta validación generalmente no requiere mucho JavaScript. La validación de formularios incorporada tiene un mejor rendimiento que JavaScript, pero no es tan personalizable como la validación con JavaScript.

La validación con JavaScript se codifica utilizando JavaScript. Esta validación es completamente personalizable, pero debes crearlo todo (o usar una biblioteca).

### HTML5

Esto se realiza mediante el uso de atributos de validación en los elementos del formulario.

* **required**: Especifica si un campo de formulario debe completarse antes de que se pueda enviar el formulario.

* **minlength y maxlength**: Especifican la longitud mínima y máxima de los datos de texto (cadenas).

* **min y max**: Especifican los valores mínimo y máximo de los tipos de entrada numéricos.

* **type**: Especifica si los datos deben ser un número, una dirección de correo electrónico o algún otro tipo de preajuste específico.

* **pattern**: Especifica una expresión regular que define un patrón que los datos que se introduzcan deben seguir.

>**ATENCIÓN**:
>El elemento `<textarea>` no admite el atributo pattern.

```
<div class="container">
    <h1>Formularios</h1>

    <form id="formulario">
        <input
            class="form-control mb-2"
            name="userName"
            placeholder="Ingrese su nombre"
            autocomplete="off"
            id="userName"
            type="text"
            required
            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
            title="Solo letras"
            minlength="3"
            maxlength="10"
        />
        <input
            class="form-control mb-2"
            name="userEmail"
            placeholder="Ingrese su correo"
            id="userEmail"
            autocomplete="off"
            type="email"
            required
            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
            title="Ingresa un email válido"
        />
        <button class="btn btn-primary" type="submit">Enviar</button>
    </form>
</div>
```
### Eventos

Ya aprendimos que podemos capturar eventos a través de Javascript utilizando [addEventListener()](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener), hoy conoceremos algunos para procesar formularios.

#### submit
```
<div class="container">
    <h1>Formularios</h1>

    <form id="formulario">
        <input
        class="form-control mb-2"
        placeholder="Ingrese su nombre"
        type="text"
        id="userName"
        name="userName"
        >
        <input
        class="form-control mb-2"
        placeholder="Ingrese su correo"
        type="email"
        id="userEmail"
        name="userEmail"
        >
        <button
        class="btn btn-primary">Enviar</button
        type="submit"
        >
    </form>
</div>
```
```
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("funciona");
});
```

#### Capturar value

* **Por id**

```
const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("funciona");

    console.log(userName.value);
    console.log(userEmail.value);
});

```
* **Por querySelector input**

```
const formulario = document.querySelector("#formulario");
const userName = document.querySelector("input[name='userName']");
const userEmail = document.querySelector("input[name='userEmail']");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("funciona");

    console.log(userName.value);
    console.log(userEmail.value);
});
```

## FormData
***
* [formData](https://developer.mozilla.org/es/docs/Web/API/FormData/Using_FormData_Objects): La interfaz FormData proporciona una manera sencilla de construir un conjunto de parejas clave/valor que representan los campos de un formulario y sus valores, que pueden ser enviados fácilmente. Están destinados principalmente para el envío de los datos del formulario, pero se pueden utilizar de forma independiente con el fin de transmitir los datos tecleados.

* [API/FormData](https://developer.mozilla.org/es/docs/Web/API/FormData)

* **FormData.get()** Devuelve el primer valor asociado con una clave dada en un objeto FormData.

* **FormData.entries()** Devuelve un iterator que permite recorrer todas las parejas clave/valor contenidas en este objeto.

* **FormData.values()** Devuelve un iterator que permite recorrer todos los valores contenidos en este objeto.

```
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("funciona");

    const inputs = new FormData(formulario);
    console.log(inputs.get("userName"));
    console.log(inputs.get("userEmail"));

    for (let campo of inputs.values()) {
        console.log(campo);
    }

    for (let campo of inputs.entries()) {
        console.log(campo);
    }
});

```
