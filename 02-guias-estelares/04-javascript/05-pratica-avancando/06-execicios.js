// 1. Declare uma variável de nome weight
let weight;

// 2. Que tipo de dados é a variável acima?
undefined;
console.log(typeof weight);

/*
  3. Decalre uma variável e atribua valores para cada um dos dados:
    - name: string
    - age: number (integer)
    - start: number (float)
    - isSubscribed: Boolean
*/

let name = "Iago";
let age = 28;
let start = 4.3;
let isSubscribed = true;

/*
  4. A variável student abaixo é de que tipo de dados?

  4.1 Atribua a ela as mesmas proprieadades e valores do exercício 3

  4.2 Mostre no console a seguinte mensagem:
  <name> de idade <age> pesa <weight> kg.
*/

// student é um Object
let student = {
  name: "Iago",
  age: 28,
  weight: 94.3,
  isSubscribed: true,
};
console.log(
  `${student.name} de idade ${student.age} pesa ${student.weight} kg.`
);

/*
  5. Declare uma variável do tipo Array, de nome students e atribua a ela nenum valor, ou seja,
  somente o array vazio 
*/

let students = [];

/*
  6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4.
  (Não copiar e colocar, mas sim adicionar o objeto criando dentro do array)
*/

// students.push(student);
students = [student];
console.log(students);

/*
  7. Coloque no console o valor da posição zero do array acima
*/
console.log(students[0]);

/*
  8. Crie um novo student e coloque na posição 1 do array students
*/

let newStudent = {
  name: "Carlos",
  age: 33,
  weight: 90.3,
  isSubscribed: true,
};
students.push(newStudent);
console.log(students);

/*
  9. Sem rodar o código responsa qual é a resposta do código abaixo e porque?
  Após sua resposta, rode o código e veja se você acertou;  

  console.log(a)
  var a = 1;
*/

// R. Será undefined pois será realizado o hoisting da variável "a", sem sua atribuição.
// Isto ocorre apenas com variáveis var. Do contrário, teríamos erro de referência

console.log(a);
var a = 1;
