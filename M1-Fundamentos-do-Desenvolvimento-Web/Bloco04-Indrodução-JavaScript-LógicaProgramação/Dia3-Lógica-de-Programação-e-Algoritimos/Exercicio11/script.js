const number = 5;
let counter = 0;

for (let divider = 2; divider <= number; divider += 1) {
  if (number % divider === 0) counter += 1;
}

if (counter > 2) console.log("Número não é primo");
else console.log("Número é primo");