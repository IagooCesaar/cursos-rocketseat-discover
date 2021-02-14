// Estrutura de repetição
// for

// 1. Peque I
// 2. Enquanto for menor que 20
// 3. Incremente de um e um

console.log("Do menor para o maior");
for (let i = 0; i < 20; i++) {
  if (i === 18) break; // Se verdadeiro, "break" parará o loop
  if (i === 5) continue; // Se verdadeiro, "continue" pulará a etapa atual
  console.log(i);
}

// 1. Peque I
// 2. Enquanto for maior que 0
// 3. Decremente de um e um

console.log("Do maior para o menor");
for (let i = 20; i > 0; i--) {
  if (i === 2) break; // Se verdadeiro, "break" parará o loop
  if (i === 5) continue; // Se verdadeiro, "continue" pulará a etapa atual
  console.log(i);
}
