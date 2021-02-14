/*
   ### Celsius em Fahrenheit

   Crie uma função que receba uma string em celsius ou fahrenheit
   e faça uma transformação de uma unidade para outra
*/

function convertTemperature(stringTemperatureWithUM = "") {
  let UM, temperature;

  temperature = stringTemperatureWithUM.split(" ")[0].replace(",", ".");
  try {
    UM = stringTemperatureWithUM.split(" ")[1].toUpperCase();
  } catch (error) {
    throw new Error(
      "Você deverá informar a 'temperatura grau', respeitando espaço entre ambos "
    );
  }

  let newTemperature = 0;

  switch (UM) {
    case "C":
      newTemperature = (temperature * 9) / 5 + 32;
      break;
    case "F":
      newTemperature = ((temperature - 32) * 5) / 9;
      break;
    default:
      throw new Error(
        `😢 Unidade de medida não implementada "${stringTemperatureWithUM}"`
      );
  }
  return newTemperature.toFixed(2);
}

try {
  console.log(convertTemperature("32 C"));
  console.log(convertTemperature("28.5 C"));
  console.log(convertTemperature("0 C"));

  console.log(convertTemperature("100 F"));
  console.log(convertTemperature("101,50 F"));

  console.log(convertTemperature("200 K"));

  console.log(convertTemperature("200K"));
  console.log(convertTemperature("200 C"));
} catch (error) {
  console.error(error.message);
}
