# Métodos Arreglo (array methods)

## Los métodos map(), filter(), find(), some(), findIndex(),  reduce(), concat(), sort(), splice(), split(), join() entre otros NO cambian o NO modifican la estructura del arreglo original sino que devuelven uno nuevo, a diferencia de los métodos push(), shift(), unshift(), pop(), que si los modifican al arreglo.

## Estos métodos que no modifican la estructura del arreglo, son parte de la programación Funcional que pertenece al Paradigma de la Progrmación Declarativa (no interesa el como se haga algo, solo que lo haga) a diferencia del Paradigma de la Programación Imperativa (que expresa detalladamente como hacer aglo) como en el caso de la Programación Orientada a Objetos.

## JavaScript es un lenguaje de Programción Pultiparadigma ya que integra a ambos Paradigmas de Programaión (Imperativo y Declarativo)

# Función Callback (function callback)

## Es una función que se pasa a otra función como argumento, que luego se llama ó invoca, dentro de la función externa.

# Métodos Arreglo (array methods)

## El método map iterará sobre cada elemento de un arreglo y devuelve un nuevo arreglo que contiene los resultados de llamar a la función callback en cada elemento. Esto lo hace sin mutar el arreglo original.

## El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

## find: El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

## some: El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

## findIndex: El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.

## El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

## concat: El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

## Spread syntax: permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde son esperados.

## reduce: El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

## split: El método split() divide un objeto de tipo String en un array, mediante un separador.

## join: el método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.