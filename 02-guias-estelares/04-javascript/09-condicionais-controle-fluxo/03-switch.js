// switch

const expression = "a";

console.log("Exemplo com break");
switch (expression) {
  case "a":
    console.log("Letra A");
    break;
  case "b":
    console.log("Letra B");
    break;
  default:
    console.log("Outra Letra");
    break;
}

console.log("Exemplo sem break");
// A partir do "case" que satisfaça a condicional, todos os bloco subsequentes serão executados
switch (expression) {
  case "a":
    console.log("Letra A");
  case "b":
    console.log("Letra B");
  default:
    console.log("Outra Letra");
}
