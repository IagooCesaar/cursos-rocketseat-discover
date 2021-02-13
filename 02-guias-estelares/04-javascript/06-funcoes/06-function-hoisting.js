/* 
// Neste primeiro exemplo será realizado o hoisting


sayMyName();

function sayMyName() {
  console.log("Iago");
}

*/

/**
// Neste exemplo não será realizado o hoisting, resultando erro de referência
sayMyName();

const sayMyName = function () {
  console.log("Iago");
};

*/

/**
 * 
// Tal como as variáveis VAR, será realizada o hoisting apenas da declaração, e não da atribuição.
// Neste caso, ao executar a função  `sayMyName()` o JS não conseguirá encontrar sua definição, resultando
// em `undefined`;

sayMyName();

var sayMyName = function () {
  console.log("Iago");
};

*/
