// Manipulando Arrays

let techs = ["html", "css", "js"];

// Adicionar um item no fim
techs.push("nodejs"); // Retorna nova quantidade de elementos

// Adicionar um item no começo
techs.unshift("react.js"); // Retorna nova quantidade de elementos

// Remover um item do fim
techs.pop(); // Retorna o elemento removido

// Remover um item do começo
techs.shift(); // Retorna o elemento removido

// Pegar somente alguns elementos do array
console.log(
  "> Pegar somente alguns elementos",
  techs.slice(
    1 /* Índice do elemento que será tomando como a primeira posição do novo array */,
    3 /* Sequência do elemento (!== índice) que será o último elemento do novo array */
  )
);
// Retornará novo array contendo os elementos.

// Remover um ou mais itens em qualquer posição do array
console.log(
  "> Remover um ou mais itens em qualquer posição do array",
  techs.splice(
    1 /* Índice do elemento que será tomando como a primeira*/,
    2 /* Quantidade de elementos que serão removidos a partir do elemento*/
  )
);
//Retornará array contendo itens removidos, irá alterar o original mantendos os demais elementos

// Encontrar a posiçao de um elemento no array
techs = ["sql", "html", "css", "js", "nodejs"];
let index = techs.indexOf("css");
techs.splice(index, 1);

// => Retorno final
console.log(techs);
