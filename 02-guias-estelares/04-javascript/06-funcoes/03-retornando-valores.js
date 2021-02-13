// Exemplo de função anônima (anonymous function)
// ou expressão de funçao (expression function)

const sum = function (value1, value2) {
  //value1 e value2 são parâmetros - parameters
  return value1 + value2;
};

let number1 = 40;
let number2 = 50;

console.log(`O número 1 é ${number1}`);
console.log(`O número 2 é ${number2}`);
console.log(`A soma de ambos é ${sum(number1, number2)}`);
