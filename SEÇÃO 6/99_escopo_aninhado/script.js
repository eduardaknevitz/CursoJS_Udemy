// Criando 3 niveis de escopos

let a = 10; //escopo global

function multiplicar(x, y) {
  //escopo da função (mult. de 3 e 7)
  let a = x * y;

  if (a > 10) {
    let a = 0;
    a++;
    console.log(a); //escopo do if
  }

  console.log(a);
}
console.log(a); //escopo global
multiplicar(3, 7); //escopo da função
