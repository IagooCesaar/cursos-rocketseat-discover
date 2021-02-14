/*
   ### Celsius em Fahrenheit

   Crie uma função que receba uma string em celsius ou fahrenheit
   e faça uma transformação de uma unidade para outra
*/

function convertTemperature(stringTemperatureWithUM = "") {
  const temperature = Number(
    stringTemperatureWithUM.replace(/[A-Za-z]+/g, "").replace(",", ".")
  );
  const UM = stringTemperatureWithUM.replace(/[^A-Za-z]+/g, "");

  let newTemperature = 0;
  let newUM;

  switch (UM) {
    case "C":
      newTemperature = (temperature * 9) / 5 + 32;
      newUM = "F";
      break;
    case "F":
      newTemperature = ((temperature - 32) * 5) / 9;
      newUM = "C";
      break;
    default:
      throw new Error(
        `😢 Unidade de medida não implementada "${stringTemperatureWithUM}"`
      );
  }
  return [newTemperature.toFixed(2), newUM];
}

try {
  console.log(convertTemperature("32 C"));
  console.log(convertTemperature("28.5 C"));
  console.log(convertTemperature("0 C"));

  console.log(convertTemperature("100 F"));
  console.log(convertTemperature("101,50 F"));

  console.log(convertTemperature("200 C"));

  console.log(convertTemperature("200 K"));

  console.log(convertTemperature("200K"));
} catch (error) {
  console.error(error.message);
}
