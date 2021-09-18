//argumento default é pré-estabelecido(n=2), mas o valor pode ser substituido para o que o programador passou
function repetirFrase(frase, n = 2) {
  for (let x = 1; x <= n; x++) {
    console.log(frase + " " + x);
  }
}
repetirFrase("Testando", 5);
repetirFrase("Só duas vezes");

//outro exemplo:
function potencia(base, exp = 2) {
  return Math.pow(base, exp);
}
console.log(potencia(2)); //2 elevado ao quadrado(exp=2)
console.log(potencia(2, 3)); //argumento pré-estabelecido(exp=2) é substituido por 3
