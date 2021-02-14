// Throw --> Disparar um erro

function sayMyName(name = "") {
  if (name === "") {
    throw "Você deve fornecer o nome";
  }
  console.log(`Olá ${name}`);
}

// Try ... Catch
try {
  sayMyName();
} catch (error) {
  console.log(error);
}

console.log("Após a ocorrência do erro");
