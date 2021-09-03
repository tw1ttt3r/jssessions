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

// map: regresa un nuevo arreglo de todos los elemntos que tenga el
// arreglo principalq

// ejemplo 

const personas = [
    { nombre: 'Maria', apellidoPaterno: 'Perez', apellidoMaterno: 'Sanchez' },
    { nombre: 'Antonio', apellidoPaterno: 'Gonzalez', apellidoMaterno: 'Juarez' },
    { nombre: 'Saúl', apellidoPaterno: 'Martinez', apellidoMaterno: 'Perez' },
    { nombre: 'Ernesto', apellidoPaterno: 'Ramirez', apellidoMaterno: 'Martinez' },
    { nombre: 'Alan', apellidoPaterno: 'Maldonado', apellidoMaterno: 'Gonzalez' },
];

// obtener solo los apellidos de todos los elementos

const apellidos = personas.map( 
    (valor, index, array) => `${valor.apellidoPaterno} ${valor.apellidoMaterno}`
); // ['Perez Sanchez', 'Gonzalez Juarez', 'Martinez Perez', 'Ramirez Martinez', 'Maldonado Gonzalez']


// ejemplo

const numerosx = [1,5,7,9,90,123,456];

// obtener una nuevo arreglo con la multiplicacion de los elementos por 3

const multipor3 = numerosx.map( valor => valor * 3); 
// [3, 15, 21, 27, 270, 369, 918]

// obtener una nuevo arreglo con la multiplicacion de los elementos por 3
// pero solo los pares

const multipares = numerosx.map( valor => {
    if (valor % 2 === 0) {
        return valor * 3;
    }
    // return valor;
});

// ejercicio 3: de un grupo de 6 alumnos, obtener si reprueba o aprueba 
// dando la calificacion de 5 materias
// si el promedio del alumno es menor a 7 'reprobado'
// si el promedio del alumno es mayoe a 7 pero menor a 10 'aceptable'
// si el promedio del alumno es igual a 10 'excelente'

//  entregar promedio y descripcion dependiendo las reglas antes mencionadas


// reduce: me permite regresar cualquier tipo de dato,
// es tambien conocido como fold

// estructura

const numerosxx = [1,2,3,4,5,6,7,8,9]; //45

// obtener la suma de todos los numeros

const sumaxx = numerosxx.reduce( (valor_previo,value, index, array) => {
    return valor_previo + value;
});

// pruebas de escritorio

// iteracion 0 cuando tenemos el segundo paramertro del reduce
// valor_previo = 0
// value = posicion 0 de mi arreglo

// iteracion 0 cuando no ponemos el segundo parametro del reduce
// valor_previo = posicion 0 de mi arreglo
// value= posicion 1 de mi arreglo

// iteracion 1 en adelante
// valor_previo = 3 (return)
// value = 3

const alumnosxy = [
    {inscrito: true, materia1: 10, materia2: 10, materia3: 10, materia4: 10, materia5: 10, nombre: 'Tom'},
    {inscrito: true, materia1: 8, materia2: 7, materia3: 9, materia4: 6, materia5: 9, nombre: 'John'},
    {inscrito: true, materia1: 9, materia2: 10, materia3: 8, materia4: 8, materia5: 9, nombre: 'Ana'},
    {inscrito: true, materia1: 8, materia2: 8, materia3: 5, materia4: 10, materia5: 8, nombre: 'Laura'},
    {inscrito: true, materia1: 5, materia2: 9, materia3: 10, materia4: 7, materia5: 9, nombre: 'Peter'},
    {inscrito: true, materia1: 7, materia3: 3, materia4: 5, materia5: 10, nombre: 'Antonio'}
];

const promedios = alumnosxy.reduce((acc, value, index) => {
    const prom = Object.keys(value).reduce((sum, mat) => { 
        // ['inscritos', 'materia1', 'materia2', 'materia3', 'materia4', 'materia5', 'nombre]
        if (mat.includes('materia')) {
            return sum += value[mat]; // sum = sum + value[mat];
        }
        return sum;
    }, 0) / 5;
    acc['alumno'+(index+1)] = {
        promedio: prom,
        nombre: value.nombre,
        descripcion: prom < 7
            ? 'Reprobado'
            : prom >= 7 && prom < 10 
                ? 'Aceptable'
                : 'Excelente'
    };
    return acc;
}, {});

console.log('promedios: ', promedios);

