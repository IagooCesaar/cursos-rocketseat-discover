# Tipos de Dados

## NUMBER

Tipo de dados para representar números inteiros e flutuantes (dízima).

Tipos de números:

- Inteiros: 33;
- Reais (flutuantes): 12.5;
- NaN: Not a Number (erros)
- Infinity: infinito

Exemplos:

```js
const inteiro = 33;
const real = 12.5;
const nan = 12.5 * "aaa";

console.log(
  inteiro,
  real,
  nan,

  inteiro / real,
  inteiro === Infinity
);

// Retorno no console:
// 33 12.5 NaN 2.64 false
```
