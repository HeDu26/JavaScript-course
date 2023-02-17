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

/* const $figure = document.createElement("figure"),
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

//Forma simplificada

$fig2.innerHTML = `
<img src="https://placeimg.com/200/200/arch" alt="Arch" />
<figcaption>Arch</figcaption>`;

$fig2.classList.add("card");
$cards.appendChild($fig2);

const SEASONS = ["Primavera", "Verano", "Otoño", "Invierno"];

$ul = document.createElement("ul");

//NO es buena practica el document.write
document.write("<h3>Estaciones del año </h3>");

document.body.appendChild($ul);

SEASONS.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ["África", "América", "Asia", "Europa", "Oceanía"];
$ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);
// Linea para inicializar explicitamente como cadena vacía el .innerHTML for each  
$ul2.innerHTML = "";

continentes.forEach((el) => {
  $ul2.innerHTML += `<li>${el}</li>`;
});

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
// Se irá agregando cada elemento elemento hijo a elemento padre cómo el ejemplo sig. 
document.write("<h3> Meses del año </h3>");
$UL3.appendChild($fragment);
document.body.appendChild($UL3);
 */
/* 












*/

/* const $cards = document.querySelector(".cards"),
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

$cards.appendChild($fragment); */
/* 











*/

/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true); //Necesario True para que se haga valida la clonación

$newCard.innerHTML = ` 
 <img src="https://placeimg.com/200/200/any" alt="Any">
 <figcaption>Any</figcaption>`;

$newCard.classList.add("card");

// $cards.replaceChild($newCard, $cards.children[2]);
//$cards.removeChild($cards.lastElementChild);
$cards.insertBefore($newCard, $cards.firstElementChild);
//document.body.appendChild($cloneCards); */

/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contentCard = ` 
 <img src="https://placeimg.com/200/200/any" alt="Any">
 <figcaption></figcaption>`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
//$cards.insertAdjacentElement("beforeend", $newCard);

//$cards.prepend($newCard);
//$cards.append($newCard);
//$cards.before($newCard);
//$cards.after($newCard);
 */

/* 








*/
function holaMundo() {
  alert("Hola mundo");
  console.log();
}

function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);
}

const $SEMANTICO = document.getElementById("evento-semantico");
const $SEMANTICOMULTIPLE = document.getElementById("evento-multiple");
const $eventoRemover = document.getElementById("evento-remover");

$SEMANTICO.onclick = holaMundo;
$SEMANTICO.onclick = function (e) {
  alert("Hola mundo Manejador de Eventos Semaántico");
  console.log(e);
};
//"Tipo de evento", nombreDeFunction
$SEMANTICOMULTIPLE.addEventListener("click", holaMundo);
$SEMANTICOMULTIPLE.addEventListener("click", (e) => {
  alert("Hola mundo manejador de eventos múltiples");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
});
$SEMANTICOMULTIPLE.addEventListener("click", () => {
  saludar();
  saludar("Héctor");
});

const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
};

$eventoRemover.addEventListener("dblclick", removerDobleClick);
