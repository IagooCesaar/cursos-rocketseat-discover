console.log("> existe X antes do bloco?", x);
{
  var x = 0;
}
console.log("> existe X depois do bloco?", x);

// Resultado:
// > existe X antes do bloco? undefined
// > existe X depois do bloco? 0
