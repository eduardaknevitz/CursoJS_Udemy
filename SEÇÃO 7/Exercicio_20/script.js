//escrever uma função que recebe a idade de uma pessoa
// <18 pode entrar na auto escola. Imprimir mensagem informando
// >18 não pode entrar na auto escola. Imprimir mensagem informando
// executar função nos dois casos

const perguntaIdade = prompt("Qual sua idade?");

function idade(x) {
  if (idade < 18) {
    console.log("Não autorizado a entrar na auto escola!");
  } else {
    console.log("Autorizado a entrar na auto escola!");
  }
}
idade(perguntaIdade);
