// getElementByID
const blogTitle = document.getElementById("blog-title");

console.log(blogTitle);
console.log(blogTitle.innerHTML);

// getElementByClassName
const elementsWithClassOne = document.getElementsByClassName("one");

console.log(elementsWithClassOne);

// getElementByTagName
const elementsP = document.getElementsByTagName("p");
console.log(elementsP);

// querySelector -> como seletor do CSS
// Primeira correspondência
const example1 = document.querySelector(".one");
console.log(example1);
const example2 = document.querySelector("#blog-title");
console.log(example2);
// Todas corresondências
const example3 = document.querySelectorAll("p");
console.log(example3);

/*
  Diferenças entre HTMLCollection e NodeList:
  - NodeList é como um Array, e permitirá loops, como o forEach
  - HTMLCollection não permite
*/

example3.forEach((el, index) => console.log(`${index + 1} elemento:`, el));

// querySelector e querySelectorAll é minimamente mais lento que demais
