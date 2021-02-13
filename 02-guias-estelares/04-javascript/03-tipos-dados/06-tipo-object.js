const telefone = {
  marca: "Motorola",
  modelo: "G5",
  so: "Android",
  detalhes: () => {
    return `telefone marca ${telefone.marca} modelo ${telefone.modelo} com SO ${telefone.so}`;
  },
};

console.log(telefone);
console.log(telefone.detalhes());
