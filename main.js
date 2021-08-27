// POO (Programación Orientada a Objetos)
// OOP (Oriented Objects Programming)

// Es un paradigma de programación que usa clases y objetos 
// para resolver problemas

// abstracción: es el obtener las caracteristicas principales

// ejemplo:
// Caracteristicas de un animal
// numero de patas
// tiene cola
// genero
// tamaño
// clase (hervivoro, carnivoro, omnivoro)
// peso
// peligro de extención

// acciones hace
// comer
// reproducirse
// emitirsonido
// moverse: un animal avanza moviendo una pata hacia adelante
// necesidades

// encapsulación
// que la unica manera de poder ocupar propiedades
// y metodos es apartir del objeto
// solo puedo afectar a la clase desde la propia clase


// herencia
// que puedo heredar propiedades y metodos de una clase
// es decir a partir de una clase puedo crear otra clase

// clase chita
// heredar de clase animal y solo añidar las propiedades 
// y metodos propios del chita

// polimorfismo
// que puedo hacer el mismo metodo pero de diferente manera

// chita puede moverse
// moverse: avanza saltando cada dos pasos

// funciones constructoras
// crear una funcion, asignarla a una variable y pasar parametros si
// fuera necesario

// Declaracion de una funcion constructora
const Animal = function(tamano, peso, patas=4, cola=true, genero='M',  clase='omnivoro', extincion=false){
    // propiedades de la funcion constructora
    this.noPatas = patas;
    this.tieneCola = cola;
    this.genero = genero;
    this.tamano = tamano;
    this.clase = clase;
    this.peso = peso;
    this.extincion = extincion;

    // metodos de la funcion constructora
    this.comer = function() {
        console.log('Esta comiendo');
    };
    this.reproducirse = function() {
        console.log('Esta reproduciendose');
    };
    this.emitirSonido = function() {
        console.log('Esta emitiendo un sonido');
    };
    this.moverse = function() {
        console.log('Esta moviendose');
    };
    this.necesidades = function() {
        console.log('Esta haciendo algo');
    };
};

const animal1 = new Animal();

console.log(animal1);
animal1.moverse();
animal1.emitirSonido();

const animal2 = new Animal('1.70m', '85kg');
console.log(animal2);
animal1.moverse();
animal1.emitirSonido();


// Ejercicio 1

// Trabajas en una escuela, y vas a registrar a los alumnos.
// Genera las funciones constructoras necesarias para poder
// registrar a los alumnos


// Herencia entre funciones constructoras
// Javascript solo permite heredar de una clase o funcion constructora

// el uso del prototype
const Cheeta = function (peso, tamano, velocidad, manchas= true, patas, cola, genero,  clase, extincion) {
    this.manchas = manchas;
    this.velocidad = velocidad;

    Animal.call(this, peso, tamano, patas, cola, genero,  clase, extincion);

    this.moverse = function () {
        console.log('Esta saltando cada dos pasos');
    }
};

const cheeta1 = new Cheeta('78kg', '75cm', '200m/s', true, 4, true, 'H', 'carnivoro', false);

console.log(cheeta1);


// Ejercicio 2

// Se ha solicitado una nueva funcionalidad
// ahora necesitamos registrar profesores
// refactorice su código para poder registrar profesores y alumnos

// clases en Javascript ES6
// no se ocupan funciones constructoras
// ahora ocupamos la palabra reservada class y un metodo constructor

// creacion de una clase

class Humano {
    constructor(altura, peso){
        // se ejecuta primero
        // inicializar propiedades
        this.altura= altura;
        this.peso=peso;
    }

    // metodos de la clase
    caminar() {}
    hablar() {}
    comer() {
        this.peso = this.peso + 1;
    }
}

const humano1 = new Humano('1.70m', '70kg');
humano1.comer();
humano1.hablar();

// Ejercicio 3: Refactorizar la clase alumno sin ocupar herencia


// Herencia con clases ES6

class Persona extends Humano {
    constructor(altura, peso, nombre, edad) {
        super(altura, peso);
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Profesor extends Persona {
    constructor(altura, peso, nombre, edad) {
        super(altura, peso, nombre, edad);
    }
}

const profesor1 = new Profesor('1.72m', '80kg', 'Juan', '30');

console.log(profesor1);

// Ejercicio 4: Refactorizar la clase alumno con herencia

// Postwork: 

// Ejercicio de la agenda telefonica con clases
// 