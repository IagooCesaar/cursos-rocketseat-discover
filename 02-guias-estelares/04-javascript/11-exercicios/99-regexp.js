const str = "45.2F";

const onlyNumbers = str.replace(/[A-Za-z]+/g, "");
console.log(onlyNumbers);

const onlyLetters = str.replace(/[^A-Za-z]+/g, "");
console.log(onlyLetters);
