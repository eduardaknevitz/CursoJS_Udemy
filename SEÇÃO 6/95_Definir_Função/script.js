function iimprimirNoConsole() {
  console.log("Oii, meu chapa");
}
iimprimirNoConsole(); //invocar a função

function imprimirUmNumero(num) {
  console.log(`O número é ${num}`);
}
imprimirUmNumero(2); //invocar a função
imprimirUmNumero(7); //invocar a função

const numeroAleatorio = function () {
  console.log(Math.random());
};
numeroAleatorio(); //invocar a função
numeroAleatorio(); //invocar a função
