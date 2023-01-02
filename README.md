# Índice

- [Logic TIPS](#tips-para-mejorar-lógica-de-programación)
- [Basics](#basics)
  - [Identifiers](#identifiers)
  - [Reserved words](#reserved-words)
  - [Strings](#strings)
  - [Functions](#functions)
  - []()
  - []()
  - []()
- [Performance](#performance)
- [Structures](#structures)
  - []()
  - []()
  - []()
- [Classes](#classes)
- [Arrays and it's methods](#arrays-and-its-methods)
- [Objects](#objects)
- [asynchronism](#asynchronism)
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

## reserved words

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

## good practices

1. IMPORTACIÓN DE MÓDULOS.
2. DECLARACIÓN DE VARIABLES.
3. DECLARACIÓN DE FUNCIONES.
4. EJECUCIÓN DE CÓDIGO.

## Strings

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

## Functions

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

### Expressed function

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

# Performance

# Structures

# Classes

# Arrays and it's methods

# Objects

# asynchronism

# DOM (Document Object Model)

<!--

# Static Site Generator (SSG)

Para blogs, portafolios, landing page, etc.

- Astro
- Hugo
  -->
