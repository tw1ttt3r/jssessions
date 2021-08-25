// Array: Conjunto de elementos ordenados
// su ordenacion comienza en 0 y termina en n-1 (donde n es el total de elementos)

// declaracion de array
// const arreglo = [];

// total de elementos
// propiedad length

const elementos = [];

console.log('total de elementos: ', elementos.length);

// Obtener elementos de mi arreglo
// apartir del indice de mi elemento

            //    0          1        2         3(n-1)
let nombres = ['Juán', 'Antonio', 'Miguel', 'Leonel'];

console.log(nombres[2]);

// Editar valor del elemento

console.log(nombres);

nombres[2] = 'Pedro';

console.log(nombres);

// Agregar valores

// método push

nombres.push('Lorena')

console.log(nombres);

const nuevonombres = ['Francisco', 'Maria', 'Ernesto']

nombres = nombres.concat(nuevonombres);

console.log(nombres);

// Ejercicio 1: Preguntarle al usuario sus calificaciones 
// Proporcioname tu calificacion
// Deseas agregar una nueva calificacion
// Proporcionar el promedio de calificaciones

// Si el promedio es menor a 7
// Mensaje de nos vemos el siguiente semestre
// Si el promedio es entre 7 y 8
// Felicitarlo
// Si el promedio es de 9 o 10
// Le van a preguntar su nombre y lo van a felicitar con su nombre


// Recorrer arreglo con for
const calificaciones = [9,7,6,5,8,10];
let promedio = 0;
let j = 0;
for (let i = 0; i < calificaciones.length; i++) {
    promedio = promedio + calificaciones[i];
}

while(j < calificaciones.length) {
    promedio = promedio + calificaciones[j];
    j = j + 1;
}

promedio = promedio / calificaciones.length;

// Eliminar elementos de mi arreglo

// delete
delete nombres[2];

console.log(nombres);

// splice

nombres.splice(2,1);
console.log(nombres);

nombres.splice(3);
console.log(nombres);

// pop
// elimina el ultimo elemento de mi arreglo y lo regresa

console.log(nombres.pop())
console.log(nombres)

// Ejercicio 2:
// Dado un arreglo de numeros aleatorios

// determinar
// cuantos son pares - generar un arreglo de ellos
// cuantos impares - generar un arreglo de ellos
// Eliminar los divisibles entre 3 del arreglo original - generar un arreglo con ellos
// obtener los divisibles entre 10 en un nuevo arreglo
// imprimir en consola los arreglos generados

// para generar numero aleatorios
// function numeroAleatorio(min, max) {
//      return Math.round(Math.random() * (max - min) + min);
// }

// Objeto: Estructura de dato donde manejamos llaves (comunmente llamadas
// propiedades) y valores (de cualquier tipo), podemos guardar funciones
// (comunmente llamados metodos)

// declaracion 
// const persona = {};


const persona = {
    nombre: 'Pedro'
};

// asignacion/modificacion de propiedades
persona['direccion'] = 'Ciudad de México, CDMX';

// generar metodos

persona['saluda'] = function() {
    console.log('mi nombre es: ', this.nombre)
};

persona['dondevivo'] = function() {
    console.log('yo vivo: ', this.direccion)
};

persona.saluda();
persona.dondevivo();


const automovil = {
    marca: 'patito',
    modelo: 'quak quak',
    lanzamiento: 2015,
    color: 'amarillo',
    motor: 'alita2345',
    arranca: function() {
        console.log('el automovil arranco');
    },
    acelarar: function() {
        console.log('el automovil aumento la velocidad');
    },
    apagar: function() {
        console.log('el automovil se apago');
    },
    fichatecnica: function() {
        console.log('marca: ', this.marca);
    }
};
console.log(automovil);

automovil.arranca();
automovil.acelarar();
automovil.apagar();

// obtener valores

automovil.lanzamiento;
automovil.color;
automovil.marca;

automovil['lanzamiento']
automovil['color']
automovil['marca']

// acceso dinamico de propiedades
const propiedad = 'motor'
automovil[propiedad];


// eliminar
delete automovil.motor;
delete automovil['motor'];
delete automovil[propiedad];

console.log(automovil);

// obtener las propiedades de un objeto
const llaves = Object.keys(automovil) //=>  arreglo con las llaves del objeto

console.log('estas son las llaves: ', llaves);

// obtener los valores de las llaves
const valores = Object.values(automovil)

console.log('estos son los valores: ', valores);

// Reto
// Agenda de contactos
// Tiene cuatro funciones
// Añadir contacto
// Buscar Contacto
// Editar contacto
// Eliminar contacto
// Ver todos los contactos

// Datos minimos del contacto
// -nombre
// -telefono
// -correo
// apodo

// La busqueda es por nombre o apodo y es exacta (el nombre completo o el apodo)

// Puedo editar todos los campos

// Para eliminar, buscamos un contacto por nombre o apodo
// y confirmamos eliminarlo, debemos responder con un mensaje de
// que el contacto fue eliminado

// Elegir ver todos los contactos (se enlistan todos los datos del contacto)

