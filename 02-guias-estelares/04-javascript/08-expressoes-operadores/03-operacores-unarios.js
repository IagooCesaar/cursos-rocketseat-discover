/* 
  Operadores unários
  typeof
  delete
*/

const person = {
  name: "Iago",
  age: 28,
};
console.log(typeof person);
console.log(person);

delete person.age;
console.log(person);
