let pessoa = {
  nome: "Eduarda",
  idade: 23,
  profissão: "Programadora",
};
console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = false;

console.log(pessoa.casado);
