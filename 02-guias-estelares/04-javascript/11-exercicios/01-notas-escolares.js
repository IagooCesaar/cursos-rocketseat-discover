/*
  ## Transformar notas escolares

  Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

  Tabela de notas:
  * de 90 para cima :: A
  * entre 80 e 89   :: B
  * entre 70 e 79   :: C
  * entre 60 e 69   :: D
  * menor que 60    :: F
*/

function convertScore(score) {
  switch (true) {
    case score >= 90:
      return "A";
    case score >= 80:
      return "B";
    case score >= 70:
      return "C";
    case score >= 60:
      return "D";
    default:
      return "F";
  }
}

console.log(convertScore(73));
console.log(convertScore(99));
console.log(convertScore(-1));
