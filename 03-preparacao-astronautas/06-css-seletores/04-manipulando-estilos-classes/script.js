// Alterando estilos
const element = document.querySelector("body");

// element.style.backgroundColor = "yellow";

console.log(element.classList); // DOMTokenList

element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
element.classList.toggle("active");

element.classList.add("active", "green");
