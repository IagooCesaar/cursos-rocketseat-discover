const element = document.querySelector("h1");

element.textContent += ", Olá devs";

element.innerText += "!!";

element.innerHTML += " <small>Let's Code!</small>";

const myInput = document.querySelector("input");
myInput.value = "Texto padrão";

const header = document.querySelector("header");
header.setAttribute("id", "main-header");

const headerID = document.querySelector("#main-header");
console.log("header por id", headerID);

console.log(headerID.getAttribute("id"));

console.log("Titulo do h1", headerID.getAttribute("title"));
headerID.removeAttribute("title");
console.log("Titulo do h1", headerID.getAttribute("title"));
