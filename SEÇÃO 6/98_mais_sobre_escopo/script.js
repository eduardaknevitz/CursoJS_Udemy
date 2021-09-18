let x = 10;

if (x > 5) {
  let x = 20;
  x++;
  console.log(x); //escopo if
}

console.log(x); //escopo global
