// enviar mensajes en consola del navegador
console.log('Hola Mundo');

// enviar mensajes al usuario desde el navegador con ventana emergente
alert('hola mundo desde el navegador');




// Crear variable en ES5
var nombre = 'Pedro';

// Crear variable en ES6
// Permite modificar su valor 
let nombre = 'Pedro';
// Mantiene el valor con la que fue inicializada
const nombre = 'Pedro';


// Datos primitivos

// string  conjunto de caracteres
'hola mundo'
// number cualquier numero del 0 al 9 que no este entre comillas
9
9.08
// boolen solo permite valores true y false (en minusculas)
true
false

// array
// []
// object
// {}
// function
// function() {}

// undefined valor que denota inexitencia

// null valor que denota que existe pero que esta vacio


// Coercion convertir un tipo de dato a otro

// explicita  hace uso de metodos o funciones
let numero = 123;
console.log(numero);
numero = String(numero);
// console.log(conversion)
console.log(numero)

// implicita operaciones como concatenicacion o generar valores tryly o falsy

let nuevoConversion = numero + '';

console.log(nuevoConversion);

Number('1234')

Boolean()


// Operadores

// // suma
// 3 + 3  // 6

// // concatenacion

// '12' + 12  // '1212'

// // resta

// 4 - 6 // -2

// // multiplicacion

// 4 * 4  // 16

// // division

// 4 / 2

// // modulo

// 5 % 3

// incremento

let n = 4;

console.log(n++) // obtenemos el valor previo al incremento (pero si se hace el incremento)
console.log('despues de n++', n)
console.log(++n) // se genera el incremento y obtenemos el valor
console.log('despues de ++n', n)
// 4++  // 4
// ++4  // 5

