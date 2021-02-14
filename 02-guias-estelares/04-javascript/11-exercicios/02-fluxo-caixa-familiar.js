/*
  ## Sistema de gastos familiar

  Crie um objeto que possuirá propriedades, ambas do tipo array:

  * receitas: []
  * despesas: []
   
  Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se
  a família está com saldo positivo ou negativo, seguido do valor do saldo
*/

const caixa = {
  receitas: [3000, 2300, 800, 300], // 6400
  despesas: [1200, 700, 600, 300, 100, 500, 3200.3], // 3400
};

function getTotal(values) {
  let total = 0;
  for (value of values) {
    total += value;
  }
  return total.toFixed(2);
}

let entradas, saidas;

async function calculateBalance() {
  let entradas = getTotal(caixa.receitas);
  let saidas = getTotal(caixa.despesas);
  let total = (entradas - saidas).toFixed(2);

  console.log(`O total de receitas (entradas) é R$ ${entradas}`);
  console.log(`O total de despesas (saídas) é R$ ${saidas}`);
  console.log(
    `O saldo familiar está ${
      entradas >= saidas ? "positivo" : "negativo"
    }: R$ ${total}`
  );
}

calculateBalance();
