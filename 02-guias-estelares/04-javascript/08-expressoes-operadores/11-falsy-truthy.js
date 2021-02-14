/**
 * FALSY
 * Quando um valor é considerado false em contextos onde um boolean é obrigatório
 * (condicionais e loops)
 *
 * Exemplos de valores que podem ser utilizados como "false" em um contexto:
 * false
 * 0
 * -0
 * "" --> string vazia
 * null
 * undefined
 * Nan
 */

console.log(false ? "Verdadeiro" : "Falso");
console.log(0 ? "Verdadeiro" : "Falso");
console.log(null ? "Verdadeiro" : "Falso");
console.log(NaN ? "Verdadeiro" : "Falso");

/**
 * TRUTHY
 * Quando um valor é considerado true em contextos onde um boolean é obrigatório
 * (condicionais e loops)
 *
 * Exemplos de valores que podem ser utilizados como "false" em um contexto:
 * true
 * {} --> objeto, vazio
 * [] --> array, vazio
 * "0" --> string preenchida
 * 1
 * 3.23 --> qualquer número diferente de zero
 * -1
 * Infinity
 * -Infinity
 */

console.log(true ? "Verdadeiro" : "Falso");
console.log({} ? "Verdadeiro" : "Falso");
console.log([] ? "Verdadeiro" : "Falso");
console.log(1 ? "Verdadeiro" : "Falso");
