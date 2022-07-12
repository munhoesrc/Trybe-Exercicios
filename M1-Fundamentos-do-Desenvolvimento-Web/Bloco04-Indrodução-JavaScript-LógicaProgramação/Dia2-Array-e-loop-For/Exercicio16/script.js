const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Sort ascending numbers
let ascendingNumbers = numbers;

for (
  let firstIndex = 0;
  firstIndex < ascendingNumbers.length;
  firstIndex += 1
) {
  for (let secondIndex = 0; secondIndex < firstIndex; secondIndex += 1) {
    if (ascendingNumbers[firstIndex] < ascendingNumbers[secondIndex]) {
      const smallestNumber = ascendingNumbers[firstIndex];
      const higherNumber = ascendingNumbers[secondIndex];
      ascendingNumbers[firstIndex] = higherNumber;
      ascendingNumbers[secondIndex] = smallestNumber;
    }
  }
}

console.log(ascendingNumbers);