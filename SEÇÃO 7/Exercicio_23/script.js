// Escrever uma função que recebe uma string;
// Se o texto conter mais de 10 caracteres, imprimir "Texto muito longo"
// Se não conter, imprimir "Texto dentro do limite";

function tamanhoTexto(texto) {
  if (texto.length > 10) {
    console.log("Texto muito longo!");
  } else {
    console.log("Texto dentro do tamanho!");
  }
}
tamanhoTexto("testando");
tamanhoTexto("Maior que 10");
