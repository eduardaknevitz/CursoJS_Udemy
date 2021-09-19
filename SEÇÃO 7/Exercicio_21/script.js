// escreva uma função que detecta o tipo de dado passado
// verifique se é um: Number, boolean ou string
// retornar mensagem para cada tipo
// executar uma função para casa caso

function verificarDados(dados) {
  if (typeof dados === "boolean") {
    console.log("Isso é um boolean!");
  } else if (typeof dados === "string") {
    console.log("Isso é uma string!");
  } else if (typeof dados === "number") {
    console.log("Isso é um number!");
  }
}

verificarDados(13);
verificarDados("Teste!");
verificarDados(false);
verificarDados(true);
