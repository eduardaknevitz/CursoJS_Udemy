//armazenar a velociade de um carro em uma variavel, com o número qaue desejar
//criar estrutura if/else que verifica se ele esta acima da velociade
//80 = velociade maxima permitida;
//se estiver acima ou abaixo exiba mensagem com console.log()

let velocidadeAtual = 70;
let limite = 80;


if (velocidadeAtual > limite) {
    console.log("calma, corno!");
} else if (velocidadeAtual < limite) {
    console.log("Katchau!");
} else if (velocidadeAtual == limite) {
    console.log("Serenin!");
}

