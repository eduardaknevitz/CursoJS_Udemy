// Escrever uma função que receba um números, e o decrementa de 1 em 1 comm o loop;
// Além disso, imprima somente os números pares no console;

function numeroPar(num) {
  for (let x = num; x <= 100; x++) {
    if (x % 2 == 0) {
      console.log(x);
    }
  }
}
numeroPar(10);
numeroPar(25);
