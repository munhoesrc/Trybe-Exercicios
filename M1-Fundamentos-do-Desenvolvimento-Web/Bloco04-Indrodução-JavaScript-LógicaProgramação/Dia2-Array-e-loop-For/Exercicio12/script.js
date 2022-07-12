let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let counter = 0;

for (number of numbers) {
  if (number % 2 !== 0) {
    counter += 1;
  }
}

if (counter > 0) {
  console.log(counter);
} else {
  console.log("No odd number found");
}