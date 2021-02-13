/*
  Function() constructor

  * expressão new
  * cria um novo objeto
  * this keyword
*/

function Person(name) {
  // this. referência à instância do objeto
  this.name = name;
  this.walk = () => {
    console.log(`${this.name} está andando...`);
  };
}

const pessoa1 = new Person("Iago"); // criará um novo objeto
// console.log(pessoa1);
pessoa1.walk();

const pessoa2 = new Person("Sharly"); // criará um novo objeto
// console.log(pessoa2);
pessoa2.walk();

/* Exemplo de funçoes construtoras do JavaScript */

let filho1 = new String("Murillo");
console.log(filho1);

let date = new Date("2020-02-12"); // Formato ISO
console.log(date);
