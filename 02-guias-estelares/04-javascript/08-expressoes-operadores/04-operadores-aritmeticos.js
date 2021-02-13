/*
  Operadores Aritméticos  
*/

console.log("Multiplicação", 1.5 * 2); // === 3

console.log("Divisão", 20 / 4); // 5

console.log("Soma", 34 + 43);

console.log("Subtração", 12 - 2);

console.log(
  "Resto da divisão",
  (() => {
    let remainder = 11 % 3;
    return remainder;
  })()
);

console.log(
  "Incremento após, valerá após sua execução",
  (() => {
    let increment = 0;
    return increment++; // retorna zero
  })()
);

console.log(
  "Incremento após, valerá após sua execução",
  (() => {
    let increment = 0;
    increment++;
    return increment; // retorna 1
  })()
);

console.log(
  "Incremento antes, valerá antes sua execução",
  (() => {
    let increment = 0;
    return ++increment; // retorna 1
  })()
);

console.log(
  "Decremento após, valerá após sua execução",
  (() => {
    let increment = 0;
    return increment--; // retorna zero
  })()
);

console.log(
  "Decremento após, valerá após sua execução",
  (() => {
    let increment = 0;
    increment--;
    return increment; // retorna -1
  })()
);

console.log(
  "Decremento antes, valerá antes sua execução",
  (() => {
    let increment = 0;
    return --increment; // retorna -1
  })()
);
