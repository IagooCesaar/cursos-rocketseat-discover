// Eventos

function mouseClick() {
  console.log("Clik");
}

function mouseClick2() {
  console.log("Outro momento, mesmo evento");
}

function mouseOver() {
  console.log("over");
}

// Eventos do teclado && Argumento Event
const input = document.querySelector("input");

input.onkeydown = function (event) {
  console.log("tecla pressionada no input", event.key);
  console.log(event.currentTarget.value);
};

input.onclick = function (event) {
  console.log("click sobre input");
  console.log(event);
};

// Adicionando métodos via JS
const h2 = document.querySelector("h2");

h2.addEventListener("click", mouseClick);
h2.addEventListener("click", mouseClick2);
