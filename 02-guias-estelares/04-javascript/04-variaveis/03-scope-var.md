# Variáveis

## SCOPE

Escopo determinada a "visibilidade" de uma variável para com o próprio código JS.

### Block statement

Um bloco é identificado com os caracteres { e }. Um novo bloco criará um novo escopo, chamado de `block-scoped`.

Exemplo:

```js
// abertura de um escopo
{
  let valor = 0;
  console.log(valor); // retornará 0
}
// fechamento de um escopo
```

### Comporamentos das variáveis segundo o escopo

#### var

`var` é global e poderá funcionar fora de um escopo de bloco. Ou seja, ainda que tenha sido declarada dentro de um determinado escopo, ela poderá ser acessada por todo o código JS.

Exemplo:

```js
console.log("> existe X antes do bloco?", x);
{
  var x = 0;
}
console.log("> existe X depois do bloco?", x);

// Resultado:
// > existe X antes do bloco? undefined -> Existe, mas não foi definido
// > existe X depois do bloco? 0
```

Recebemos o primeiro retorno como `undefined` devido a uma característica do JS que lê todo o código "de baixo para cima", tranformando as declarações das variáeis `var`. O mesmo código acima, após ser transpilado pelo JS, ficou como:

```js
var x;
console.log("> existe X antes do bloco?", x);
{
  x = 0;
}
console.log("> existe X depois do bloco?", x);
```

Este conceito é chamado de **hoisting** (elevação).
