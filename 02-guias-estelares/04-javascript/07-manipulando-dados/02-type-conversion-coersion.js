/**
 * Type conversion (typecasting) vs Type coersion
 * Alteração de um tipo de dado para outro
 *
 * Type conversion (typecasting) -> alteração de forma explícita, realizada pelo DEV
 * Type coersion -> alteração de forma implícita pelo próprio do JS
 */

console.log("9" + 5);
//Realizará uma coersão, convertendo 5 para '5' e concatenando com 9,
//obtendo 95

console.log(Number("9") + 5);
//realizará uma conversão do '9' para 9 de forma explícita, somando com 5 e obtendo 14.
