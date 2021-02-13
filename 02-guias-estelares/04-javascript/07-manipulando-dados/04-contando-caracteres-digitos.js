let word = "Paralalepípedo";

console.log(`A palavra possui ${word.length} caracteres`);

let number = 1234;
console.log(`O número possui ${String(number).length} dígitos`);

let float = 1234.56;
console.log(
  `O número possui ${
    String(float).split(".")[0].length
  } dígitos antes da vírgula`
);
console.log(
  `O número possui ${
    String(float).split(".")[1].length
  } dígitos após da vírgula`
);
