function armazenarSoma(x) {
  return (y) => x + y;
}
let somaUm = armazenarSoma(3);
console.log(somaUm(5)); // = 8
let somaDois = armazenarSoma(5);
console.log(somaDois(10)); // = 15

//outro exemplo:
function lembrarSoma(x) {
  return function (y) {
    return x + y;
  };
}
let soma1 = lembrarSoma(2);
console.log(soma1(5)); // = 7

let soma2 = lembrarSoma(5);
console.log(soma2(7)); // = 12

//outro exemplo:
function contador(i) {
  let cont = i;
  let somaContador = function () {
    console.log(cont);
    cont++;
  };
  return somaContador;
}
let meuContador = contador(5);
meuContador();
meuContador();
let meuContador2 = contador(1);
meuContador2();
meuContador2();
