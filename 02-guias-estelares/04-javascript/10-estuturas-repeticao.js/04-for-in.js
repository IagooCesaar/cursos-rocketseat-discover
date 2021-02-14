// Estrutura de repetição
// for..in

let person = {
  name: "John",
  age: 30,
  weight: 88.6,
};

for (let prop in person) {
  console.log(`A propriedade ${prop} tem o valor ${person[prop]}`);
}
