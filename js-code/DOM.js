/* console.log(window);
console.log(document);

let texto = "Hello, I've been learning about WEB API's";
const hablar = (texto) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto); */

/* console.log("**********ELEMENTOS DEL DOCUMENTO*****");
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.title);
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);
document.write("<h2>Hola mundo desde el DOM</h2>"); */

/* console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a").length);
console.log(document.querySelectorAll("a").forEach((el) => console.log(el))); */

/* ******************ATRIBUTOS********************************* */
/* console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");

const $lINKDOM = document.querySelector(".link-dom");

$lINKDOM.setAttribute("target", "_blank");
$lINKDOM.setAttribute("rel", "noopener");
$lINKDOM.setAttribute("href", "https://youtube.com");
console.log($lINKDOM.hasAttribute("rel"));
$lINKDOM.removeAttribute("rel");
console.log($lINKDOM.hasAttribute("rel"));
console.log($lINKDOM.getAttribute("data-description"));
console.log($lINKDOM.dataset);
$lINKDOM.setAttribute("data-description", "Modelo de objeto del Documento");
$lINKDOM.dataset.description = "No me canso de aprender"; */

/* *************************ESTILOS Y VARIABLES CSS************************************* */

const $lINKDOM = document.querySelector(".link-dom");
console.log($lINKDOM.style);
console.log($lINKDOM.style.backgroundColor);
console.log($lINKDOM.style.color);
console.log(window.getComputedStyle($lINKDOM));
console.log(getComputedStyle($lINKDOM).getPropertyValue("color"));
$lINKDOM.style.setProperty("text-decoration", "none");
$lINKDOM.style.setProperty("display", "block");
$lINKDOM.style.width = "50%";
$lINKDOM.style.textAlign = "center";
$lINKDOM.style.marginLeft = "auto";
$lINKDOM.style.marginRight = "auto";
$lINKDOM.style.padding = "1rem";
$lINKDOM.style.borderRadius = ".5rem";

console.log(getComputedStyle($lINKDOM));
console.log($lINKDOM.style);
