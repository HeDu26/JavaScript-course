# Índice

- [Logic TIPS](#tips-para-mejorar-lógica-de-programación)
  - [Good Practices](#good-practices)
- [Basics](#basics)
  - [Identifiers](#identifiers)
  - [Reserved words](#reserved-words)
  - [Strings](#strings)
  - [Ternary Operator](#ternary-operator)
  - [Error](#error)
  - [break & continue](#break--continue)
  - [Destructuring](#destructuring)
  - [Parameters ...REST &... Operator Spread](#parameters-rest--operator-spread)
  - [Console Object](#console-object)
  - [Date Object](#date-object)
  - [Regular Expressions](#regular-expressions)
- [Functions](#functions)
  - [Bascis](#basics-1)
  - [Expressed function](#expressed-function)
  - [Arrow Functions](#arrow-functions)
- [Prototypes](#prototypes)
  - [Prototype functions](#prototype-functions)
  - [Prototype Inheritance](#prototype-inheritance)
- [Classes & Inheritance (Syntactic sugar)](#classes--inheritance-syntactic-sugar)
  - [Static Methods, getters and Setters](#static-methods-getters-and-setters)
- [Objects](#objects)
- [Modules](#modules)
- [Arrays and their methods](#arrays-and-their-methods)
- [Performance](#performance)
- [Structures](#structures)
- [asynchronism](#asynchronism)
  - [Timers](#timers)
  - [Code types](#code-types)
- [DOM (Document Object Model)](#dom-document-object-model)
- []()

# **_TIPS_** para mejorar lógica de programación

1.  Descomponer problemas en problemas más pequeños.

2.  Busca una solución que acepte todos los casos posibles.

3.  Busca siempre problemas más díficiles.

4.  Practicar mucho

Plataformas para buscar desafios :

- CoderByte
- Project Euler
- **HackerRank**
- CodeChef
- Exercism.10
- Codewars

5.

| Estructura de datos | ≠   | Algoritmos básicos |
| ------------------- | --- | ------------------ |
| Arreglos            |     | Ordenaminto        |
| Tablas hash         |     | Heración           |
| Listas enlazadas    |     | Programación       |
| Pilas / colas       |     | Búsqueda           |
| Árboles             |     | Hashing            |
| Grafos              |     | Dinámica           |
|                     |     | Parseo y watching  |

6.  Patrones de diseño

7.  Mirar código de otra gente

8.  Crear funciones desde cero (Evitar usar las nativas)

## good practices

1. IMPORTACIÓN DE MÓDULOS.
2. DECLARACIÓN DE VARIABLES.
3. DECLARACIÓN DE FUNCIONES.
4. EJECUCIÓN DE CÓDIGO.

# Basics

## Identifiers

| start with                               | example |
| ---------------------------------------- | ------- |
| letter                                   | a       |
| $                                        | $a      |
| \_                                       | \_a     |
| Never with numbers or special characters |
|                                          |         |

1. **snake_case**

- file_names.js

2. **UPPER_CASE**

- Constants

```js
const UNA_CONSTANTE = "Soy una constante",
  PI = 3.141592653589793;
```

3. **UpperCamelCase**

- Classes

```js
class SerHumano {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  miNombreEs() {
    return `Mi nombre es ${this.nombre}`;
  }
}
```

4. **lowerCamelCase**

- Objects

```js
const unObjeto = {
  nombre: "Jonathan",
  email: "jonmircha@gmail.com",
};
```

- Primitivs

```js
let unaCadena = "Hola Mundo",
  unNumero = 19,
  unBoolean = true;
```

- Functions

```js
function holaMundo(nombre) {
  alert(`Hola mundo ${nombre}`);
}
holaMundo("Jonathan");
```

## Reserved words

```properties
A: abstract
B: boolean, break, byte
C: case, catch, char, class, const, continue
D: debugger, default, delete, do, double
E: else, enum, export, extends
F: false, final, finally, float, for, function
G: goto
I: if, implements, import, in, instanceof, int, interface
L: let, long
N: native, new, null
P: package, private, protected, public
R: return
S: short, static, super, switch, synchronized
T: this, throw, throws, transient, true, try, typeof
V: var, volatile, void
W: while, with
```

## Strings

- Strings and their properties

```js
let nombre = "Hector";
let apellido = "Alvarez";
let saludo = new String("Hola mundo");

console.log(nombre, apellido, saludo);
console.log(
  nombre.length,
  apellido.length,
  saludo.length,
  nombre.toUpperCase(),
  apellido.toLowerCase()
);
```

- Interpolación

```js
//Template string `comillas invertidas`
let saludo2 = `Hola mi nombre es: ${nombre} ${apellido}.`;
console.log(saludo2);
```

## Ternary Operator

- (Condición)? verdadero : falso

```js
let edad = 17;
let mayoredad = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mayoredad);
```

## Error

1. try
2. catch
3. finally (optional)

```js
try {
  console.log("En el try se agrega el codigo a evaluar");
  noexiste;
  console.log("Segundo mensaje en el try");
} catch (error) {
  console.log("Catch captura cualquier error surgido o lanzado en el try");
  console.log(error);
} finally {
  console.log("Se ejecutara siempre al final de un bloque try -catch");
}
```

- eg.

```js
try {
  let num = 6;

  if (isNaN(num)) {
    throw new Error("El caracter introducido no es un número");
  } else {
    console.log(num * num);
  }
} catch (error) {
  console.log(`Se produjo el siguiente error: ${error}`);
}
```

## break & continue

- for, while, switch, case, do, do while

### Break

- **Sale** de la estructura en el valor indicado

```js
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < num.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(num[i]);
}
```

### Continue

- Solo **salta** la posición indicada

```js
for (let i = 0; i < num.length; i++) {
  if (i === 6) {
    continue;
  }
  console.log(num[i]);
}
```

## Destructuring

- La destructuración se usa para mostrar valor de variables en la menor cantidad de codigo:

```js
const num = [1, 2, 3];

//Sin destructuración
let uno = num[0],
  dos = num[1],
  tres = num[2];
console.log(uno, dos, tres);

//Con destructuración
const [one, two, three] = num;
console.log(one, two, three);

const person = {
  name: "Hec",
  lastname: "Alva",
  age: 25,
};

let { name, lastname, age } = person;
console.log(name, lastname, age);
```

## Parameters ...REST &... Operator Spread

### Rest Parameter

- Forma de virtualmente ir agregando parametros infinitos, cuando no se sabe cuantos valores se van a recibir

- **_.forEach_** - Función en la cual se ejecuta por cada uno de los elementos que vengan en c

```js
function sumar(a, b, ...c) {
  let resultado = a + b;

  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}

console.log(sumar(1, 2));
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 3, 4));
console.log(sumar(1, 2, 3, 4, 5));
```

### Spread Operator - Propagation Operator

- Interpolación de arreglos
- Se ejecuta en cualquier sentencia del código
- Manera de que una expresión se pueda expandir al recibir múltiples valores, pero conservando la copia de original

```js
const arr1 = [1, 2, 3, 4, 5],
  arr2 = [6, 7, 8, 9, 0];

console.log(arr1, arr2);

const arr3 = [...arr1, ...arr2];

console.log(arr3);
```

## Console Object

```js
console.log(console);

console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Este es un corte informativo");
console.log("Es un registro de lo que ha pasado con nuestra aplicación");

let nombre = "Héctor",
  apellido = "Díaz",
  edad = 25;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre}`);
console.clear();

console.log(window);
console.dir(window);
console.log(document);
console.dir(document);
console.clear();
```

- ¿Cuantas veces se ejecuta una acción?

```js
for (let i = 0; (i = 100); i++) {
  console.count("código for");
  console.log(i);
}
```

## Date object

[MDN date object](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date)

- Los meses son indexados (0,1,2,3,4,5...)

```js
console.log(Date());

let fecha = new Date();
console.log(fecha);

console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.getTimezoneOffset());
console.log(Date.now());
let cumplehec = new Date(1996, 9, 13);
console.log(cumplehec);
```

- Cómo crear objeto date

```js
let today = new Date();
let birthday = new Date("December 17, 1995 03:24:00");
let birthday = new Date("1995-12-17T03:24:00");
let birthday = new Date(1995, 11, 17); // el mes es indexado como 0
let birthday = new Date(1995, 11, 17, 3, 24, 0);
let birthday = new Date(628021800000); // pasando la marca temporal de la época
```

## Regular Expressions

- Primer forma de declararlo

```js
let ExpReg = new RegExp("lorem", "ig");
```

- Segunda forma de declaración

```js
let expreg2 = /lorem{5,}/gi;
```

# Functions

## Basics

- Without return
- With return
- Parameters
  - If users don´t type anything. (predetermined values)

```js
function saludar(nombre = "Desconocido", edad = 0) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad}años`);
}

saludar("Coffee", 2);
saludar();
```

## Expressed function

- **_Const-_** Se recomienda con funciones expresadas

```js
 const funcionexpresada = function (){
            console.log( "Esto es una función expresada,
            es decir una función que se le a asignado como valor a una variable,
            si invocamos esta función antes de su deficinión Js nos dira: ...
            no se puede mandar allamar antes" )
          }

          funcionexpresada();
```

## Arrow Functions

- Forma de definir funciones anonimas que sean expresadas (cuando a variable se le designa una function))
- **CUIDADO** AL usar arrow-function para declarar metodos porque tienen la capacidad de saltar el contexto y heradar el contexto padre de donde han sido declaradas(objeto window)

### 1. Expressed function

```js
const saludo = function () {
  console.log(`Hola`);
};
saludo();
```

### 2. A line of instruction

```js
const saludo = () => console.log(`Hola`);
saludo();
```

### 3. Parameters pass (name)

```js
const saludo = (nombre) => console.log(`Hola ${nombre}`);
saludo("Irma");
```

- Si la función solo recibe un parametro se omiten los parentesis(), de lo contrario debe llevar parentesis.

```js
const saludo = nombre =>;
saludo();
```

# Prototypes

|             |                                                       | POO           |                                                                                  |
| ----------- | ----------------------------------------------------- | ------------- | -------------------------------------------------------------------------------- |
| **Classes** | Son un modelo a seguir (podría decirse que son ideas) |
| **Objects** | Es una instancia de una clase                         | **Atributos** | Característica o propiedad del objeto(variables dentro de un objeto)             |
|             |                                                       | **Métodos**   | Son las acciones que un objeto puede realizar, son funciones dentro de un objeto |

## Prototype functions

- Las clases en JS el compilador las convierte en **funciones prototipicas**

### 1. Instancia repetida (misma clase).

Mejor solo crear una clase animal y no varios objetos animal

```js
const animal = {
  nombre: "Pitbull",
  sonar() {
    console.log("Hago sonidos porque respiro");
  },
};

const animal2 = {
  nombre: "Lola Bunny",
  sonar() {
    console.log("Hago sonidos porque respiro");
  },
};

console.log(animal);
console.log(animal2);
```

### 2. Función constructora

**VERSIÓN 1**

```js
function Animal(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;
  //Métodos
  this.sonar = function () {
    console.log("Hago sonidos porque estoy vivo");
  };
}

const snoopy = new Animal("Snoopy", "Macho"),
  lolaBunny = new Animal("Lola Bunny", "Hembra");
```

- Con versión 1 se utilizan todos los métodos (Puede dar **problema de rendimiento y memoria**)
- Para **Mejorar** rendimiento

**VERSIÓN 2**

- Donde se asignan los métodos al prototipo, no al a función
- Se sacan los métodos de la función constructora, solo se queda con atributos y los métodos se asignan al prototipo.

```JS
function Animal(nombre, genero) {
        //Atributos
        this.nombre = nombre;
        this.genero = genero;
      }
      //Métodos
      Animal.prototype.sonar = function () {
        console.log("Hago sonidos porque estoy vivo");
      };

      Animal.prototype.saludar = function () {
        console.log(`Hola me llamo ${this.nombre}`);
      };

      const snoopy = new Animal("Snoopy", "Macho"),
        lolaBunny = new Animal("Lola Bunny", "Hembra");
```

## Prototype Inheritance

- La palabra clave **_super_** es usada para acceder y llamar funciones del padre de un objeto

```js
//Atributos
function perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}
```

- El método **_constructor_** es un metodo especial para crear e inicializar un objeto creado a partir de una clase.

```js
//Perro esta heredando de animal
perro.prototype = new Animal();
perro.prototype.constructor = perro;
```

- **Sobreescritura de métodos** del prototipo padre a hijo

```js
//Métodos
//Método sobreescrito
perro.prototype.sonar = function () {
  console.log("Soy un perro y mi sonido es un ladrido");
};
// Método nuevo
perro.prototype.ladrar = function () {
  console.log("Guauuuu Guauuu!!");
};

const snoopy = new perro("Snoopy", "Macho", "mediano"),
```

# Classes & Inheritance (Syntactic sugar)

## Classes

- Las classes no reciben parametros pero tenemos un método especial llamado **_constructor_**

```js
class Animal {
  //el constructor es un método especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  //Métodos
  sonar() {
    console.log("Hago sonidos porque estoy vivo");
  }
  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}
```

## Inheritance

```js
class perro extends Animal {
  constructor(nombre, genero, tamanio) {
    //con el método super() se manda a llamar el constructor de la clase padre
    super(nombre, genero);
    this.tamanio = tamanio;
  }
  sonar() {
    console.log("Soy un perro y mi sonido es un ladrido");
  }
  ladrar() {
    console.log("Guauuuuu guauuuuu!!");
  }
}
```

- Llamando métodos y atributos

```js
const mimi = new Animal("mimi", "Hembra"),
  scooby = new perro("Scooby", "Macho", "Grande");

console.log(mimi);
mimi.sonar();
mimi.saludar();

console.log(scooby);
mimi.saludar();
scooby.sonar();
scooby.ladrar();
```

## Static Methods, getters and Setters

- Se puede decir que todas la clases dentro de JS son públicas.

### Static Method

```js
class perro extends Animal {
  constructor(nombre, genero, tamanio) {
    super(nombre, genero);
    this.tamanio = tamanio;
  }
  sonar() {
    console.log("Soy un perro y mi sonido es un ladrido");
  }

  ladrar() {
    console.log("Guauuuuu guauuuuu!!");
  }

  //Un método stático se puede ejecutar sin necesidad de instanciar la clase
  static queEres() {
    console.log("Soy el mejor amigo del hombre");
  }
}
perro.queEres();
```

### getters & setters

- Métodos especiales que nos **permiten establecer y obtener** los valores de **atributos** de nuestra clase.

- **_get_** es un método para obtener valores de atributos pero se manda a llamar como atributo xd.
- **_set_** Para establecer valores a los atributos.

```js
class perro extends Animal {
  constructor(nombre, genero, tamanio) {
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza = null;
  }
  get getraza() {
    return this.raza;
  }

  set setraza(raza) {
    this.raza = raza;
  }
}
scooby.setraza = "Grán Danés";
console.log(scooby.getraza);
```

# Objects

```js
const hec = {
  nombre: "Hector",
  apellido: "ALvarez",
  edad: 26,
  pasatiempos: ["gym", "programar", "ver series"],
  soltero: false,
  contacto: {
    email: "hec@ail.com",
    twitter: "@hcr96",
    movil: "222324324",
  },
  saludar() {
    console.log(`Hola:)`);
  },
};
```

### Literal Objects

- Implica una nueva forma de declarar atributos y metodos de un objeto:

### Versión anterior

```js
let nombre = "coffee";
edad = 2;

const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    console.log("guauu guauu!!");
  },
};
console.log(perro);
perro.ladrar();
```

- Pero, si la variable que asignas al objeto como propiedad tiene el mismo nombre que la propiedad que se pretende asignar (ejemplo anterior)

### Nueva versión

```js
const dog = {
  nombre,
  edad,
  raza: "Callejero",
  ladrar() {
    console.log("guauu guauuu guauu!!!");
  },
};

console.log(dog);
dog.ladrar();
```

# Modules

- Para mandar a llamar archivos js desde otros archivos js.
- **IMPORTANTE** la etiqueta script donde se manda a llamar el módulo js dentro de html es de tipo módulo sig. eg.

```html
<script src="js-code/modules.js" type="module"></script>
```

- Si el navegador no soporta módulos se agrega un atributo boolean sig. eg

```html
<script src="js-code/nomodules.js" nomodule></script>
```

## Export

- **_export default_**

1.  Si es _const_ o _let_ primero se asigna y despues se exporta.

```js
const password = "jiahs";
export default password;
```

2.  Si es clase se puede colocar inmediatamente default

```js
export class Saludar {
  constructor() {}
  metodo() {}
}
```

3. Solamente podemos tener variable, función o clase para mandar a llamar por default y se llama de manera independiente

```js
// el archivo que se carga por defecto es password
import password, { Saludar } from "./carpeta.js";

class Digitos extends Saludar{
  ...
}
```

- OtroEjemplo export

```js
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;

export const aritmetica = {
  sumar,
  restar,
};
```

## Import

```js
import { aritmetica } from "./aritmetica.js";

console.log(aritmetica.restar(3, 4));
saludar();
let saludo = new Saludar();
saludo();
```

# Arrays and their methods

# Performance

# Structures

# asynchronism

- **_Single thread_** Pilar del lenguaje JavaScript (una cosa a ala vez)

  ![single-thread](https://miro.medium.com/max/720/0*X7Z0k20cwHHi8UOI.webp)

## Timers

### setTimeout

- Base: milisegundos
- Se ejecuta una sola vez

```js
setTimeout(() => {
  console.log("Ejecutando un setTimeout, esto se ejecuta una sóla vez");
}, 3000);
```

### setInterval

- Se ejecuta n veces

```js
setInterval(() => {
  console.log(
    "Ejecutando un setInterval, esto se ejecuta indefinidamente cada intervalo de tiempo"
  );
}, 1000);
```

- Muestra la hora cada determinado tiempo

```js
setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);
```

### ClearTimeout

- Funciona cuando el temporizador esta **Asociado a una variable**

```js
let temporizador = setTimeout(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);
clearTimeout(temporizador);

console.log("Después del clearTimeout");
```

### ClearInterval

```js
let temporizador = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

clearInterval(temporizador);
console.log("Después del clearInterval");
```

## Code types

### Synchronous Code (Bloking & No-Bloking)

- Espera resultado en tiempo presente para poder continuar
- **_LIFO_** last int first out

```js
(() => {
  console.log("Código síncrono");
  console.log("inicio");

  function dos() {
    console.log("Dos");
  }

  function uno() {
    console.log("Uno");
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");
})();
```

### Asynchronism (No-bloking)

- El código sigue trabajando en lo que espera respuesta en algún momento futuro
- **JavaScript usa un modelo asíncrono y no bloqueante**, con un loop de eventos implementado en un sólo hilo,(single thread) para operaciones de entrada y salida(input/output)

```js
(() => {
  console.log("Código Asíncrono");
  console.log("Inicio");

  function dos() {
    setTimeout(function () {
      console.log("Dos");
    }, 1000);
  }
  function uno() {
    setTimeout(function () {
      console.log("Uno");
    }, 0);
    dos();
    console.log("Tres");
  }
  uno();
  console.log("Fin");
})();
```

# DOM (Document Object Model)

<!--

# Static Site Generator (SSG)

Para blogs, portafolios, landing page, etc.

- Astro
- Hugo
  -->
