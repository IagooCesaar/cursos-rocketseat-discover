// Criando e adicionando elementos

// createElement
const div = document.createElement("div");
div.innerText = "Antes de tudo";
const div2 = document.createElement("div");
div2.innerText = "Após o último";

const div3 = document.createElement("div");
div3.innerText = "before (script)";

const div4 = document.createElement("div");
div4.innerText = "before like after (header)";

// append prepend
const body = document.querySelector("body");
const script = body.querySelector("script");
const header = body.querySelector("header");

body.prepend(div);
body.append(div2);
body.insertBefore(div3, script);
body.insertBefore(div4, header.nextSibling);
