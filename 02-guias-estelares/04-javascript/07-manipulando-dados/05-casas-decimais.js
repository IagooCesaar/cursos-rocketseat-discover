// Transformando número decimal para 2 casas decimais e
// trocar vírgula por ponto

let number = 1234.5678;

// Fixando casas decimais (arredondamento)
console.log(number.toFixed(2));

// Trocando ponto por vírgula
console.log(number.toFixed(2).replace(".", ","));
