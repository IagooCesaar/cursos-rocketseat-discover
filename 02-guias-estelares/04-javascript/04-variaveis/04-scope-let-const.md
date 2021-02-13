# Variáveis

## SCOPE

### Comporamentos das variáveis segundo o escopo

#### let e const

`let` e `const` são locais e somente funcionarão dentro do escopo em que foram criadas.

Exemplo:

```js
console.log("> existe X antes do bloco?", x);
{
  let x = 0;
  console.log("> existe X dentro do bloco?", x);
}
console.log("> existe X depois do bloco?", x);

// Resultado:
// > existe X antes do bloco? -> Retornará erro de referência pois a variável não foi declarada (no mesmo escopo)

// > existe X dentro do bloco? 0 (sim)

// > existe X depois do bloco? -> Retornará erro de referência pois a variável não foi declarada (no mesmo escopo)
```

Para este caso **não há hoisting**, nem mesmo dentro do mesmo escopo, como a seguir:

```js
{
  console.log("> existe X antes do bloco?", x);
  let x = 0;
}
// Resultado:
// > existe X antes do bloco? -> Retornará erro de referência pois não será possível acessar a declaração da variável.
```

Ainda mais sobre escopo com `let`:

- Exemplo 1:

```js
let y = 1;
{
  let y = 0;
  console.log("1. O valor de y é", y);
}
console.log("2. O valor de y é", y);

// Resultado:
// 1. O valor de y é 0
// 2. O valor de y é 1
```

- Exemplo 2:

```js
let y = 1;
{
  y = 0;
  console.log("1. O valor de y é", y);
}
console.log("2. O valor de y é", y);

// Resultado:
// 1. O valor de y é 0
// 2. O valor de y é 0
```

Ainda mais sobre escopo com `const`:

- Exemplo 1:

```js
const y = 1;
{
  const y = 0;
  console.log("1. O valor de y é", y);
}
console.log("2. O valor de y é", y);

// Resultado:
// 1. O valor de y é 0
// 2. O valor de y é 1
```

- Exemplo 2:

```js
const y = 1;
{
  y = 0;
  console.log("1. O valor de y é", y);
}
console.log("2. O valor de y é", y);

// Resultado:
// 1. O valor de y é -> Retornará erro pois constantes não podem ser alteradas
```
