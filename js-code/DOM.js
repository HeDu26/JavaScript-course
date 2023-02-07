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

/* const $lINKDOM = document.querySelector(".link-dom");
console.log($lINKDOM.style);
console.log($lINKDOM.style.backgroundColor);
console.log($lINKDOM.style.color);
console.log(window.getComputedStyle($lINKDOM));
console.clear();
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

const $HTML = document.documentElement,
  $BODY = document.body;

let varDarkColor = getComputedStyle($HTML).getPropertyValue("--dark-color");
let varYellowkColor =
  getComputedStyle($HTML).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowkColor);

$BODY.style.backgroundColor = varDarkColor;
$BODY.style.color = varYellowkColor;

$HTML.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($HTML).getPropertyValue("--dark-color");

$BODY.style.setProperty("background-color", varDarkColor); */

/* 













*/

/* *****************CLASES CSS******************************* */

/* const $CARD = document.querySelector(".card");

$CARD.classList.add("rotate-45");
$CARD.classList.remove("rotate-45");
$CARD.classList.toggle("rotate-45");
$CARD.classList.toggle("rotate-45");
$CARD.classList.replace("rotate-45", "rotate-135");
$CARD.classList.add("sepia", "opacity-80");
 */

/* const $whatIsDOM = document.getElementById("que-es");

let text = `
<p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
  `;

$whatIsDOM.innerText = text;
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text;

 */

/* const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstChild);
console.log($cards.firstElementChild); */

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

const SEASONS = ["Primavera", "Verano", "Otoño", "Invierno"];

$ul = document.createElement("ul");

/* NO es buena practica el document.write */
document.write("<h3>Estaciones del año </h3>");

document.body.appendChild($ul);

SEASONS.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});
