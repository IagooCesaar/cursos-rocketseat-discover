// Navegando pelos elementos
// parentNode || parentElement

const element = document.querySelector("body");

console.log(element.parentNode);
console.log(element.parentElement);

// childNodes || children

console.log(element.childNodes); // nodeList (forEach)

console.log(element.children); // HTMLCollection

console.log(element.firstChild);
console.log("firstElementChild", element.firstElementChild);

// nextSibling || nextElementSibling
// previousSibling || previousElementSibling

const el = document.querySelector("header");

console.log("nextSibling", el.nextSibling);
console.log("nextElementSibling", el.nextElementSibling);
