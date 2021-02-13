function justCallMe(cb) {
  console.log("> Recebendo o parametro que é uma função");
  cb();
  console.log("> A função callback foi executada");
}

justCallMe(function () {
  console.log("# Este é um exemplo de callback com Anonymous Function");
});

justCallMe(() => {
  console.log("# Este é um exemplo de callback com Arrow Function");
});
