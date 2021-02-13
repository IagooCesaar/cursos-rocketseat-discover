// Manipulando arrays

// Contar elementos

console.log(["a", "b", "c"].length);

console.log(
  [
    ["a", "b", "c"],
    "a",
    { letter: "b" },
    function () {
      return "c";
    },
  ].length
);
