# Tipos de Dados

## STRING

String é uma cadeia de caracteres

Pode ser representada por caracteres contidos entre <code>"</code>, <code>'</code> e <code>`</code>.

```js
const valor1 = "Este é um texto"; // aspas duplas
const valor2 = "Este é um texto"; // aspas simples
const valor3 = `Este é um texto`; // template literals ou template strings
```

Devido à coincidências com o idioma inglês (<code>`</code> = apóstrofe), é recomendado utilizar como identificador de _string_ o <code>"</code>.

O _Template Literals_ é recomendado quando for necessário mesclar à string variáveis JavaScript. Isto é chamado de interpolação!

Exemplo:

```js
const nome = "Luke";

console.log(`Meu nome é ${nome} Skywalker`);

// Retorno no Console:
// Meu nome é Luke Skywalker
```
