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
  - [Callbacks](#callbacks-callback-hell)
  - [Promises](#promises)
  - [Async & Await](#async--await)
- [New kinds data JS (ES6)](#new-kinds-data-js-es6)
- [JSON (JavaScript Object Notation)](#json-javascript-object-notation)
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

## Literal Objects

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

## .this

### .call, apply, bind

- Manera de enlazar métodos de un objeto nuevo, llamandolos desde otro objeto ya existente

```js
console.log(this);
this.lugar = "Contexto Global";
function saludar(saludo, aQuien) {
  console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}
saludar("Hola", "kEnAi");
const obj = {
  lugar: "Contexto Objeto",
};
saludar.call(obj, "Hola", "Jon");
saludar.call(null, "Hola", "Jon");
saludar.call(this, "Hola", "Jon");
saludar.apply(obj, ["Adios", "MirCha"]);
saludar.apply(null, ["Adios", "MirCha"]);
saludar.apply(this, ["Adios", "MirCha"]);
this.nombre = "Window";
const persona = {
  nombre: "Jon",
  saludar: function () {
    console.log(`Hola ${this.nombre}`);
  },
};
persona.saludar();
const otraPersona = {
  saludar: persona.saludar.bind(this),
};
otraPersona.saludar();
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

## Callbacks (Callback Hell)

- Mecanismo por exelencia que tiene js para llamar algunas funciones en sincronía.

```js
function cuadradocallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000));
}

cuadradocallback(0, (value, result) => {
  console.log("inicia callback");
  console.log(`callback: ${value}, ${result}`);
  cuadradocallback(1, (value, result) => {
    console.log(`callback: ${value}, ${result}`);
    cuadradocallback(2, (value, result) => {
      console.log(`callback: ${value}, ${result}`);
      cuadradocallback(3, (value, result) => {
        console.log(`callback: ${value}, ${result}`);
        cuadradocallback(4, (value, result) => {
          console.log(`callback: ${value}, ${result}`);
          console.log("Fin callback");
          console.log("Callback hell!!!!😈🤘");
          console.log("http://callbackhell.com/");
        });
      });
    });
  });
});
```

## Promises

- Para un mejor manejo de los errores.
- Conviene cuando ya tenemos **varios procesos asíncronos** sino mejor usar callbacks.

```js
function cuadradoPromise(value) {
  if (typeof value !== "number")
    return Promise.reject(
      `Error, el valor "${value}" ingresado no es un número`
    );
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

cuadradoPromise(0)
  // .then recibe una función (arrow function)
  .then((obj) => {
    //console.log(obj);
    console.log("Inicio Promise");
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(3);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(4);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(5);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log("Fin promise");
  })
  .catch();
```

## Async & Await

- Viene a completar las promesas

- Para poder utilizar la palabra reservada **_await_** es necesario declarar **_Async_** la función

### Con función declarada

```js
function cuadradoPromise(value) {
  if (typeof value !== "number")
    return Promise.reject(
      `Error, el valor "${value}" ingresado no es un número`
    );
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

async function functionAsincronaDeclarada() {
  try {
    console.log("Inicio Async Function");

    let obj = await cuadradoPromise(0);
    console.log(`Async function: ${obj.value},${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async function: ${obj.value},${obj.result}`);

    obj = await cuadradoPromise(2);
    console.log(`Async function: ${obj.value},${obj.result}`);

    obj = await cuadradoPromise(3);
    console.log(`Async function: ${obj.value},${obj.result}`);

    obj = await cuadradoPromise("4");
    console.log(`Async function: ${obj.value},${obj.result}`);

    obj = await cuadradoPromise(5);
    console.log(`Async function: ${obj.value},${obj.result}`);
  } catch (err) {
    console.error(err);
  }
}

functionAsincronaDeclarada();
```

### Con función expresada

```js
const funcionAsincronaExpresada = async () => {
  try {
    console.log("Inicio Async Function");

    let obj = await cuadradoPromise(0);
    console.log(`Async function 1: ${obj.value},${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async function 1: ${obj.value},${obj.result}`);

    obj = await cuadradoPromise(2);
    console.log(`Async function 1: ${obj.value},${obj.result}`);

    obj = await cuadradoPromise(3);
    console.log(`Async function 1: ${obj.value},${obj.result}`);

    obj = await cuadradoPromise(4);
    console.log(`Async function 1: ${obj.value},${obj.result}`);

    obj = await cuadradoPromise(5);
    console.log(`Async function 1: ${obj.value},${obj.result}`);
  } catch (err) {
    console.error(err);
  }
};

funcionAsincronaExpresada();
```

# New kinds data JS (ES6)

## Symbol

- Por buena practica el tipo de dato sera **_const_**
- Tipo de dato primitivo para ocultar propiedades.
- Propiedad de objetos se mantienen privados.
- Identificador único dentro de las propiedades de objeto, se utiliza **_symbol_** pero para declarar esa propiedad se utilizan los corchetes **[]**

```js
const NOMBRE = Symbol("name");
const SALUDAR = Symbol("greeting");

const persona = {
  [NOMBRE]: "Héctor",
  [SALUDAR]: "e we",
  edad: 35,
};

console.log(persona);

// Para obtener las propiedades symbol de un objeto
console.log(Object.getOwnPropertySymbols(persona));
```

## Sets

- Estructura de datos
- **Arreglo mejorado** que solo acepta valores únicos. (Quita los duplicados)

```js
const SET = new Set([
  1,
  2,
  3,
  3,
  4,
  5,
  true,
  false,
  false,
  {},
  {},
  "hola",
  "HOla",
]);
console.log(SET);
```

## MAP

- Estructura de datos.
- Sirven como **objeto primitivo** pero sus propiedades son cadenas de textos aunque podemos crear valores que no seas cadenas de texto.
- Son conjunto de datos relacionados entre si.
- Funciona con **_setters_** y **_getters_**

```js
let mapa = new Map();

mapa.set("Nombre", "Héctor");
mapa.set("Apellido", "Álvarez");
mapa.set("Edad", 26);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("correo"));
console.log(mapa.has("Nombre"));
console.log(mapa.get("Nombre"));
mapa.set("Nombre", "Eduardo");
console.log(mapa.get("Nombre"));

for (let [key, valor] of mapa) {
  console.log(`llave: ${key}, valor: ${valor}`);
}
```

## WeakSets & WeakMaps

- Son como variables de estado
- De tipo **_const_**
- Properties: **_.add_** **_.delete_**
- Solamente permite llaves de tipo objeto, referenciadas a un variable

### WeakSet

```js
const ws = new WeakSet();

let valor1 = { valor1: 1 };
let valor2 = { valor2: 2 };
let valor3 = { valor3: 3 };

ws.add(valor1);
ws.add(valor2);

console.log(ws);

console.log(ws.has(valor1)); // true
console.log(ws.has(valor3)); // false

ws.delete(valor2);
console.log(ws);

ws.add(valor2);
ws.add(valor3);
console.log(ws);

setInterval(() => {
  console.log(ws);
}, 1000);

setTimeout(() => {
  valor1 = null;
  valor2 = null;
  valor3 = null;
}, 5000);
```

### Weakmap

```js
const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);

console.log(wm);
console.log(wm.has(llave1));
console.log(wm.has(llave3));
console.log(wm.get(llave1));
console.log(wm.get(llave2));
console.log(wm.get(llave3));
wm.delete(llave2);
console.log(wm);
wm.set(llave2, 2);
wm.set(llave3, 3);
console.log(wm);
setInterval(() => console.log(wm), 1000);

setTimeout(() => {
  llave1 = null;
  llave2 = null;
  llave3 = null;
}, 5000);
```

## Iterables & Iterators

- Estructura de datos lineal que hace que sus datos sean publicos y se puedan leer.

- **iterable**: Elemento cuyo contenido se puede recorrer.

- **iterador**: Mecanismo que recorre los elmentos.
- Elementos iterables:

  - Nodos, strings, maps, array, etc..

```js
const iterable = [1, 2, 3, 4, 5];
//const iterable = "Hola Mundo";
//const iterable = new Set([1, 2, 3, 3, 4, 5]);
//const iterable = new Map([["nombre", "jon"], ["edad", 35]]);

//Accedemos al iterador de nuestra variable iterable
const iterador = iterable[Symbol.iterator]();

let next = iterador.next();

while (!next.done) {
  console.log(next.value);
  next = iterador.next();
}
```

## Generators

- Hacer el código de una función iterable.
- Función que permite trabajar de Manera amigable los iteradores.
- Agregar **_\*_** asterisco despues de la palabra reservada **_function\*_**.
- **_yield_** sirve como un retorno "pausado" que sigue mandando resultados despues de su linea d ejecución

```js
function cuadrado(valor) {
  setTimeout(() => {
    return console.log({ valor, result: valor * valor });
  }, Math.random() * 1000);
}

function* funGenerator() {
  console.log("Inicio generador");
  yield cuadrado(0);
  yield cuadrado(1);
  yield cuadrado(2);
  yield cuadrado(3);
  yield cuadrado(4);
  yield cuadrado(5);
  yield cuadrado(6);
  console.log("Termina generador");
}

let gen = funGenerator();
for (let y of gen) {
  console.log(y);
}
```

## Proxies

- Se puede usar para crear validaciones dentro de las propiedades de los objetos
- Mecanismo que permite crear un objeto literal

```js
const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};
const manejador = {
  set(obj, prop, valor) {
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error(
        `La propiedad "${prop}" no existe en el objeto persona.`
      );
    }
    if (
      (prop === "nombre" || prop === "apellido") &&
      !/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor)
    ) {
      return console.error(
        `La propiedad "${prop}"" sólo acepta letras y espacios en blanco`
      );
    }
    obj[prop] = valor;
  },
};
const jon = new Proxy(persona, manejador);
jon.nombre = "Jon";
jon.apellido = "MirCha";
jon.edad = 35;
jon.twitter = "@jonmircha";
console.log(jon);
console.log(persona);
```

## Propiedades Dinámicas de los Objetos (Compute properties)

```js
let aleatorio = Math.round(Math.random() * 100 + 5);
const objUsuarios = {
  [`id_${aleatorio}`]: "Valor Aleatorio",
};
console.log(objUsuarios);

const usuarios = ["Hector", "Miguel", "kofy", "Adri"];

usuarios.forEach((usuario, index) => (objUsuarios[`id_ ${index}`] = usuario));
console.log(objUsuarios);
```

# JSON (JavaScript Object Notation)

- Datos primitivos y compuestos entre comillas dobles.
- **_JSON.parse()_** Analiza una cadena de texto como JSON, transformando opcionalmente el valor producido por el análisis.

```js
console.log(JSON.parse("[1,2,3]"));
```

- **_JSON.stringify()_** Convierte el valor válido de js a cadena de texto.

# DOM (Document Object Model)

## Nodos, Elementos y selectores

### Nodos

- Hay 12 diferentes nodos en la especificación del DOM:

1.
2.
3.

### Elementos y selectores

- El método **_.querySelector()_** es más lento que **_.getElementById()_** para encontrar Id's

- Ya no se útilizan tanto:

```js
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
```

- Si se utilizan

```js
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a").length);
console.log(document.querySelectorAll("a").forEach((el) => console.log(el)));
console.log(document.querySelectorAll(".card")[2]);
```

## Atributos y Data-Attributes

- Es necesario comenzar nuestro data-attribute con **_data-_**

```html
<a href="DOM.html" class="link-dom" data-description="Document Object Model"
  >DOM</a
>
```

- **IMPORTANTE** comenzar con el símbolo de dolar para identificar las variables que pertenecen al documento **HTML**

```js
const $lINKDOM = document.querySelector(".link-dom");

/* Establecer atributos desde Js con el indicador de variable */
$lINKDOM.setAttribute("target", "_blank");
$lINKDOM.setAttribute("rel", "noopener");
$lINKDOM.setAttribute("href", "https://youtube.com");

/* Eliminar atributos */
$lINKDOM.removeAttribute("rel");

/* 2 formas de establecer atributos desde JS */
$lINKDOM.setAttribute("data-description", "Modelo de objeto del Documento");
$lINKDOM.dataset.description = "No me canso de aprender";
```

<!--

# Static Site Generator (SSG)

Para blogs, portafolios, landing page, etc.

- Astro
- Hugo
  -->

## Estilos y Variables CSS

- Para poder interactuar con el CSS de nuestro documento HTML
- 2 formas de establecer estilos:

1.  **_$VAR.style.property_** se omite el guión medio "-" de las pripiedades CSS y se utiliza la tecnica lowerCamelCase.

2.  **_$VAR.style.setProperty("background-color","pink")_** Sirve para establecer valores a las variables como ejemplos siguientes.

```js
const $lINKDOM = document.querySelector(".link-dom");

$lINKDOM.style.setProperty("text-decoration", "none");
$lINKDOM.style.setProperty("display", "block");
$lINKDOM.style.width = "50%";
$lINKDOM.style.textAlign = "center";
$lINKDOM.style.marginLeft = "auto";
$lINKDOM.style.marginRight = "auto";
$lINKDOM.style.padding = "1rem";
$lINKDOM.style.borderRadius = ".5rem";
```

### Variables CSS

- **RECORDAR** Variables en CSS se establecen con 2 guiones al inicio **--variable-complemento**
- **_.getComputedStyle($variable)_** mapea tanto como propiedades como valores(predeterminados y establecidos), a diferencia de solo **_$variable.style_** que mapea valores establecidos.

```html
<style>
  :root {
    --yellow-color: #f7df1e;
    --dark-color: #222;
  }
</style>
```

```js
const $HTML = document.documentElement,
  $BODY = document.body;

let varDarkColor = getComputedStyle($HTML).getPropertyValue("--dark-color");
let varYellowkColor =
  getComputedStyle($HTML).getPropertyValue("--yellow-color");

$BODY.style.backgroundColor = varDarkColor;
$BODY.style.color = varYellowkColor;

/* Se establece nuevo valor a variable --dark-color */
$HTML.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($HTML).getPropertyValue("--dark-color");

$BODY.style.setProperty("background-color", varDarkColor);
```

## Clases CSS

- **_$VAR.ClassList.method("class-name-2");_**

```js
const $CARD = document.querySelector(".card");

$CARD.classList.add("rotate-45");
$CARD.classList.remove("rotate-45");
$CARD.classList.toggle("rotate-45");
$CARD.classList.toggle("rotate-45");
$CARD.classList.replace("rotate-45", "rotate-135");
$CARD.classList.add("sepia", "opacity-80");
```

## Texto y HTML

1. Ej. Si el chat pinta los items de HTML

```html
<p>El perro</p>
```

Lo estan imprimiendo con **_.textContent_**

2.  Si el chat respeta los items de HTML, entonces estan imprimiendo con **_.innerHTML_** La desventaja es que no se esta creando un nodo HTML.

3.  **_.outerHTML_** Se utiliza para manejar una mejor "práctica" de marcado dentro el código HTML.

## DOM Traversing

-Enfocado a las etiquetas HTML

```js
const $cards = document.querySelector(".cards");

$cards.children;
$cards.children[2];
$cards.parentElement;
$cards.firstChild;
$cards.firstElementChild;
```

## Creando elementos y fragmentos

### uno x uno

- Para crear elementos uno x uno
- **_document.createElement()_**
- **_$VAR.appendChild()_**

```js
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards"),
  $fig2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

/* Forma simplificada */

$fig2.innerHTML = `
<img src="https://placeimg.com/200/200/arch" alt="Arch" />
<figcaption>Arch</figcaption>`;

$fig2.classList.add("card");
$cards.appendChild($fig2);
```

### Varios elementos a la vez

#### Fragmentos

- Tipo de nodo: **_$VAR= document.createDocumentFragment();_**
- Mejora el rendimiento en nuestra aplicación y para no pegarle a cada iteración del DOM.

```js
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $UL3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

/* Se irá agregando cada elemento elemento hijo a elemento padre cómo el ejemplo sig. */
document.write("<h3> Meses del año </h3>");
$UL3.appendChild($fragment);
document.body.appendChild($UL3);
```

## Templates HTML

- Etiquetas template **No renderizan** en el DOM.

```html
<!-- template -->
<template> </template>
```

- Combinación entre fragmentos y template.
- A partir de un template empezar a crear estructuras del DOM dinámicamente.(Cómo Classes & objects)
- El array _cardContent_ simula una solicitud de datos.
- En el sig. ejemplo se genera de manera dinamica _figure_
- Con **_document.importNode_** clonamos el template

```js
const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);
```

## Modificando elementos

### Old Style

- Método para clonar:
  - **_.importeNode_** , clona un modelo(template)
  - **_.cloneNode(true)_**; crea un clone

```js
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true); //Necesario True para que se haga valida la clonación

$newCard.innerHTML = ` 
 <img src="https://placeimg.com/200/200/any" alt="Any">
 <figcaption>Any</figcaption>`;

$newCard.classList.add("card");

//Reemplazando
$cards.replaceChild($newCard, $cards.children[2]);
//Removiendo
$cards.removeChild($cards.lastElementChild);
//Insertando
$cards.insertBefore($newCard, $cards.firstElementChild);
//Clonando
document.body.appendChild($cloneCards);
```

### Cool Style

```js
.insertAdjacent...
//elementos HTML
  .insertAdjacentElement(position, el)
  //Texto en formatoy sintaxis HTML
  .insertAdjacentHTML(position, html)
  //Texto
  .insertAdjacentText(position, text)
Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
```

```js
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contentCard = ` 
 <img src="https://placeimg.com/200/200/any" alt="Any">
 <figcaption></figcaption>`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
$cards.insertAdjacentElement("beforeend", $newCard);
```

- Como en **Jquery**

```js
$cards.prepend($newCard);
$cards.append($newCard);
$cards.before($newCard);
$cards.after($newCard);
```

## Manejadores de Eventos
