// Efecto secundario: afectar variables fuera de mi scope

// ejemplo

let nombre = '';
let edad = 18;

if (edad === 18) {
    nombre = 'Pedro';
}

// No valido en la programacion funcional

// function renombre(persona) {
//     nombre = persona;
// }

// renombre('Juan');


// valido en la programacion funcional

// function renombre(persona) {
//     return persona;
// }

// let nuevoNombre = renombre('Antonio');

// inmutabilidad: no modificar el valor de una variable, si no generar
// una nueva

// ejemplo

let nombres = ['Pedro', 'Juan', 'Maria'];
let nombresR = [];

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].includes('r')) {
        nombresR.push(nombres[i]);
    }
}


// Ejercicio 1:  solicitar al usuario varios nombres
// y despues solicitar una letra a buscar
// regresar los nombres que contengan la letra

// Funciones de primera clase: funciones que puedes almacenares en variables

// ejemplo:

// const operacion = (a,b) => a + b;
// const operacion = (a,b) => {
//     if (a === 3) {
//         return 0;
//     }
//     return a + b;
// };


// let resultado = operacion(2,3);


// funcion de alto orden: pueden recibir funciones como parametros
// o regresar funciones como resultado

// ejemplo

function saludo() {
    return 'Me llamo '
}

function comotellamas(nombre, primerasilaba) {
    return primerasilaba() + nombre;
}

comotellamas('Maria', saludo);


// ejemplo regresando una funcion

function suma1(a, b) {
    return a + b;
}

function resta1(a, b) {
    return a - b;
}

function operacionUsuario(num1, num2, operacion1, operacion2) {
    if (num1 < num2) { 
       return operacion1;
    } else {
        return operacion2;
    }
}

const resultado = operacionUsuario(3, 4, suma1, resta1)(3,4);


// Funciones puras: es una funcion que si recibe el mismo input(parametros) siempre
// regresara el mismo output(return)

// ejemplo

function doble(num) {
    return num * 2;
}

// pruebas de escritorio

doble(8); // 16
doble(4); // 8
doble(20); // 40
doble(8); // 16

function cuentaCaracteres(palabra) {
    return palabra.length;
}

// pruebas de escritorio
cuentaCaracteres('Pedro'); // 5
cuentaCaracteres('Maru'); // 4
cuentaCaracteres('Ornitorrinco'); // 12
cuentaCaracteres('Maru'); // 4

// Funcion impura: Son funciones que pueden no recibir parametros,
// pueden no regresar nada
// generan efectos secundarios (mutabilidad)

// Pilares de la programacion funcional

// filter: regresa una nueva lista de elementos mientras cumplan la 0
// las condiciones de su funcion se cumplan

// callback: funcion que se recibe como parametro de otra función

// ejemplo de filter

const numeros = [3, 6, 7, 66, 44, 34, 20, 99];

numeros.filter(
    (valor) => valor % 2 === 0); // [6, 66, 44, 20];

const alumnos = [];


// ejercicio 2: solicitar al usuario 10 nombres
// regresar los nombres con longitud par
// o que tengan la cuarta letra del nombre sea vocal