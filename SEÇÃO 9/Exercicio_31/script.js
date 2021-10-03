// Criar dois arrays, um com 5 elementos e outro com menos;
// Fazer uma funca-o que verifica o número de elementos;
// Se possuir menos que 5, imprima "Poucos elementos" no console;
// Se tiver mais, imprima "Muitos elemnetos";

let numMaior = [1, 2, 3, 4, 5];
let numMenor = [1, 2, 3];

function verificarElementos(arr) {
  if (arr.length >= 5) {
    console.log("Muitos elementos!");
  } else {
    console.log("Poucos Elementos!");
  }
}

verificarElementos(numMaior);
verificarElementos(numMenor);
