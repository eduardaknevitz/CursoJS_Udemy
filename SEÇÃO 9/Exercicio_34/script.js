// Criar um array a partir de uma frase;
// Imprimir cada palavra do array no console por meio de um for;

let frase = "Curso de JavaScript da Udemy";
let palavras = frase.split(" ");

for (let i = 0; i < palavras.length; i++) {
  console.log(palavras[i]);
}
