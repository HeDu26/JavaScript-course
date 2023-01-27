//Código síncrono bloqueante

/* (() => {
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
})(); */
//Código asíncrono no bloqueante

/* (() => {
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
})(); */

//CALLBACK

/* function cuadradocallback(value, callback) {
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
 */
//PROMESAS

/* function cuadradoPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(
      `Error, el valor "${value}" ingresado no es un número`
    );
  }
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
  .catch((err) => console.error(err)); */

//Funciones asíncronas

/* function cuadradoPromise(value) {
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

funcionAsincronaExpresada(); */
