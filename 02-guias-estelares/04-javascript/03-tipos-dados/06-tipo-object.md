# Tipos de Dados

## OBJECT

É um tipo de dado que representa um objeto.

Objetos podem possuir propriedades (ou atributos) e funcionalidades (ou métodos).

Exemplo de um objeto:

```js
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

//Retorno na console:
// {
//   marca: 'Motorola',
//   modelo: 'G5',
//   so: 'Android',
//   detalhes: [Function: detalhes]
// }
// telefone marca Motorola modelo G5 com SO Android
```
