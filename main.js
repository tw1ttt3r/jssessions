// funciones
// sintaxis

// IIFE

// funciones anonimas, se encapsulan entre parentesis
// y se invocan por el uso de () al final de su definición

// sintaxis 

// (function() {})()
// (function(parametro1, parametro2) {})(parametro1, parametro2)

// (function() {
//     alert('Este mensaje debe aparecer primero')
// })();

// function ejemplo_funcion() {}

function salude() {
    alert('Hola Mundo');
}

// salude();

// parametros: son valores ordenados que puede ocupar mi funcion
// pueden ser de dos tipos: obligatorios u opcionales.
// obligatorios: son los que se piden al llamar la funcion y van al principio de la lista
// opcionales: son los que se piden al llamar la funcion y van al final de la lista 
// (parametro1, parametro2, parametron)

// ejemplo funcion que salude al usuario con el nombre

function saludo(nombre, juan=true) {
    if (juan) {
        alert('Hola ' + nombre + ' que gusto de verte');
    } else {
        alert('Hola ' + nombre);
    }
}

// const nombre = prompt('Como te llamas');

// saludo(nombre);

// Ejercicio 1: preguntarle al usuario su edad
// si tiene menos de 18 años: 'Lo siento no puedes votar'
// si tiene 18 años: 'Felicidades es tu primera votacion'
// si tiene de 19 a 30: 'Solo puedes votar por diputados'
// si tiene de 31 en adelabte: 'Muchas gracias por participar'

// funciones anonimas, no tienen un nombre definido
// para poderse invocar por lo regular se almacenan en una variable
// principal uso de una funcion anonima, es el ser un método de un objeto

// sintaxis

// function() {}

const invocacion = function() {
    alert('Desde funcion anonima');
}

// invocacion();

// arrow function () => {}
// arrow function sin parametros _ => {}



// Ejercicio 2: vamos a hacer una calculadora básica

// deben preguntarle al usuario que operación matemática quiere hacer
// le deben pedir dos números
// imprimir el resultado
// preguntarle si quiere calcular otra vez
// si elije que sí, deberán mostrar el mensaje principal
// si elije no, despedirse y terminar el programa

// operaciones disponibles
// suma
// resta
// multiplicacion
// division
// opcional


// return , es el operador que me permite devolver un valor
// no es obligatorio que una funcion devuelva un valor
// pero si lo necesita, return es la unica manera de hacerlo
// return es lo ultimo que se ejecuta en la funcion
// tambien de un bloque

function calcule(num, num2) {
    return num + num2;
    console.log('despues de la funcion');
}

function calcule2(num, num2) {
    if (num > num2) {
        return num - num2;
    } else {
        return num + num2;
    }
    return num + num2;
    console.log('despues de la funcion');
}

const variable = calcule2(4,3);
alert('el valor es '+ variable);

// Ejercicio 3: vamos a mejorar nuestra calculadora básica

// las mismas intrucciones que el ejercio anterior
// suma:
// si alguno de los numero es multiplo de 3 se cancela la operacion
// y regresas como resultado 0
// resta:
// si el numero1 es mayor que el numero 2 inviertes los valores
// para sumarlos
// multiplicacion:
// si el numero 2 es par, sacas el doble del numero2
// y continuas con la operacion
// division:
// regresaras tambien el residuo de la division