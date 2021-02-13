// Manipulando Strings e Arrays

/*
  Separe um texto que contem espaços em um novo array.
  Em seguida, converta este array em uma string, separando as palavras por underscore
 */

let phrase = "Eu quero viver bastante";

let myArray = phrase.split(" "); //separar
console.log(myArray);

let myString = myArray.join("_"); //unir
console.log(myString);
