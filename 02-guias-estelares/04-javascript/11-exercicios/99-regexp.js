const str = "45 F";

const onlyNumbers = str.replace(/\D+/g, "");
console.log(onlyNumbers);

const onlyLetters = str.replace(/\d+/g, "");
console.log(onlyLetters);
