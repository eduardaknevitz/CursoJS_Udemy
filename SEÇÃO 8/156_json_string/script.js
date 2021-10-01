let pessoa = {
  nome: "Eduarda",
  idade: 23,
  profissão: "Programador",
  hobbies: ["Video game", "Leitura", "Correr"],
};

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);
