// estructuras de control condicionales
// permite operar mediante condiciones que arrojen valores booleanos

// if 

// condiciones => expresiones 

// validar que la variable tiene un valor string

const valor = 9;

if (typeof valor === 'string') {
    console.log('La variable cumple la condición');
} else if (typeof valor === 'number') {
    console.log('La variable no cumple la primera condición porque es número');
} else {
    console.log('La variable no cumple ninguna condición');
}

// Ejercicio 1
// Determinar si un persona puede votar 
// 1. Que su edad sea mayor o igual de 18
// 2. Si tiene 30, felicitarlo y decirle que puede votar
// 3. Si tiene mas de 30, decirle que no puede votar

const edad = 61;

if (edad >= 18 && edad < 30) {
    console.log('Puedes votar');
} else if (edad === 30) {
    console.log('Felicidades =D, puedes votar');
} else {
    console.log('No puedes votar');
}

// Switch, estrucutra de control de casos
// caso corresponde a una condicion else if

switch(typeof valor) {
    case 'string':
        console.log('Tu variable tiene un valor string');
        break;
    case 'number':
        console.log('Tu variable tiene un valor number');
        break;
    case 'boolean':
        console.log('Tu variable tiene un valor boolean');
        break;
    default:
        console.log('La variable no cumple ninguna condición');
        break;
}

// Ejercicio 2

// Dado la sieguiente lista 

// 1. LUNES
// 2. MARTES
// 3. MIERCOLES
// 4. JUEVES
// 5. VIERNES
// 6. SABADO
// 7. DOMINGO

// mencionarme el nombre del día dependiendo del numero que dé

const dia = 19;

switch(dia) {
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('Se me acabaron los días');
        break;
}


// ternario, es una forma abreviada de un if / else

// if (condicion) {} else {}

// condicion ? resultado si es verdadera : resultado si es falsa;

const nombre = 'Juan';
const profesion = 'Contador';

// nombre === 'Juan' ? 'Hola Juan como estas?' : 'Como te llamas';
const resultado = nombre === 'Juan'
    ? profesion === 'Contador'
        ? 'Me ayudas con mi declaración'
        : 'No conoces algún contador?'
    : nombre === 'Miguel'
        ? 'Tiempo sin verte'
        : 'Como te llamas';
console.log('el ternario me entrego: ', resultado);

let resultado2= '';
if (nombre === 'Juan') {
    if (profesion === 'Contador') {
        resultado2 = 'Me ayudas con mi declaración';
    } else {
        resultado2 = 'No conoces algún contador?';
    }
} else {
    if (nombre === 'Miguel') {
        resultado2 = 'Tiempo sin verte';
    } else {
        resultado2 = 'Como te llamas';
    }
    resultado2 = 'Como te llamas';
}

console.log('el if/else me entrego: ', resultado);

// Ejercicio 3

// Refactorizar el primer ejercion con un ternario

// prompt, es una funcion que abre una ventana,
// con un mensaje (opcional) y con input el cual me regresa el valor
// pero de tipo string

let dato = prompt('Ingresa tu nombre');

console.log(typeof dato);
console.log(dato);

// Ejercicio 4

// Refactorizar ejercicio 2 con uso de prompt


// estructuras de control iterables

// for, determinado por tres condiciones: inicio, fin, incremento

// for (let i = 0; i < 10; i++) {
//     console.log('Pedro');
// } 

// ejemplo: imprimir el consecutivo de i
for (let i = -6; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Ejercio 5

// Imprimir el doble de los numeros pares dentro de la serie
// el usuario debe ingresar un numero de inicio
// y un numero de fin
// si el numero es divisible entre 3
// enviar un mensaje de 'numero divisible entre 3'

const inicio = Number(prompt('Ingresa el numero inicial'));
const fin = Number(prompt('Ingresa el numero final'));

if (isNaN(inicio) || isNaN(fin)) {
    console.log('No ingresaste un numero: ', inicio, fin);
} else {
    for (let i = inicio; i < fin; i++) {
        if (i % 2 === 0) {
            console.log(i);
        } else if (i % 3 === 0) {
            console.log('numero divisible entre 3');
        }
    }
}



// While, es una combinacion entre iterable y condicional
// Mientras la condicion es verdadera, haré lo que dice mi bloque

// while (condicion) {}

let pregunta = true;

while (pregunta) {
    console.log('Esto es una iteración');
    const respuesta = prompt('De nuevo: [s / n]');
    pregunta = respuesta.toLowerCase() === 's' ? true : false;
}


// Ejercicio 6

// Se le pedirá al usuario dos número
// si la división de los números es mayor a 10
// se imprimirá un mensaje con el resultado y se le preguntará la usuario
// si desea hacer otro calculo
// si la división de los números es menor a 10
// se acabará el programa despidiendose del usuario