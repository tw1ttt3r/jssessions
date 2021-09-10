// document: objeto global que me permite tener acceso al DOM

// seleccionar elemenetos (nodos)

// seleccionar por id (atributo) -> obtengo un solo elemento
// seleccionar por clase (atributo) -> HTMLCollection 'tipo de arreglo' 'lista de nodos'
// seleccionar por tagname (nombre del elemento) -> HTMLCollection 'tipo de arreglo' 'lista de nodos'

// document.getElementById() -> string con el valor del atributo
// document.getElementsByClassName() -> string con el valor del atributo
// document.getElementsByTagName() -> string con el valor del atributo

// ejemplo 1

// seleccion por ID
const elemento1 = document.getElementById('p1');
console.log('elemento1: ', elemento1);
console.log(elemento1);

// selección por CLASE
const elementos1 = document.getElementsByClassName('classP1');
console.log('elementos1: ', elementos1);
console.log(elementos1);

// selección por TAGNAME
const elementos2 = document.getElementsByTagName('p');
console.log('elementos2: ', elementos2);
console.log(elementos2);

// ES6 - ES2015

const queryElemento1 = document.querySelector('#p1');
console.log('elementoQuery1: ', queryElemento1);
console.log(queryElemento1);

const queryElementos1 = document.querySelectorAll('.classP1.classP2');
console.log('elementoQuerys1: ', queryElementos1);
console.log(queryElementos1);


// ejemplo practico
function busqueda(dato) {
    const parent = document.querySelector('ul');
    const resultados = parent.querySelectorAll('.'+dato);
    console.log(resultados)
    const resultados2 = document.querySelectorAll('ul > .'+dato);
    console.log(resultados2)
}


// busqueda('espanol');
busqueda('balada');



// ejercicio 1 

// Obtener todas las clases disponibles en el documento y generar una lista de opciones donde no se repita ninguna
// Permitir al usuario buscar por cualquiera de las opciones que se obtuvieron en la busqueda anterior
// Mostrar al usuario cuantos resultados obtuvimos por su busqueda

// obtener las clases de un elemento
// .classList -> lista con las clases de mi elemento


// Generar nodos

// metodo createElement() -> nombre del tag

// ejemplo de creacion de nodos

const nuevoLI = document.createElement('li');
nuevoLI.innerText = 'Nuevo elemento';

console.log('nuevoLI');
console.log(nuevoLI);

const lista = document.querySelector('ul');
lista.appendChild(nuevoLI);


// modificar propiedades de los nodos

const estilos = nuevoLI.style;

console.log(estilos);

// nuevoLI.style.color = 'red';
// nuevoLI.style.fontSize = '20px';
// nuevoLI.style.fontWeight = 'bold';





// Manipulación del DOM

// Eventos

/// listeners

// nodo.addEventListener('nombre del evento', callback);
// callback -> objeto evento

let cambio = true;

document.querySelector('button').addEventListener('click', function(event) {
    if (cambio) {
        nuevoLI.classList.add('visto'); // agrega
        event.target.innerText = 'revertir cambio';
    } else {
        nuevoLI.classList.remove('visto'); // remueve
        event.target.innerText = 'hacer cambio';
    }
    cambio = !cambio;
});
