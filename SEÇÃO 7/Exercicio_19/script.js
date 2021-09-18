// escrever uma função que retorne um número aleatorio
//o número maximo retornado deve ser passado via parâmetro
// dica: utilizar Math.random();

function numeroAleatorio(num) {
  return Math.floor(Math.random() * num) + 1; //Math.floor arredonda para baixo, entã o +1
}
console.log(numeroAleatorio(10));
console.log(numeroAleatorio(100));
console.log(numeroAleatorio(1000));
