function generateFibonaccis(n) {
  let fibonacci = [1, 1];
  for (let index = 2; index < n; index++) {
    fibonacci[index] = fibonacci[index - 2] + fibonacci[index - 1];
  }
  return fibonacci;
}
let fibonacci = generateFibonaccis(13);
console.log(fibonacci.join(" "));
