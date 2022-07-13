let greaterPrimeNumber = 0;

for (let number = 2; number <= 50; number += 1) {
  let isPrime = true;

  for (let divider = 2; divider < number; divider += 1) {
    if (number % divider === 0) {
      isPrime = false;
    }
  }

  if (isPrime) {
    greaterPrimeNumber = number;
  }
}

console.log(greaterPrimeNumber);